#!/bin/bash
# 模拟器探活与恢复：wakeup → 解锁滑动 → 黑屏检测（snapshot 字节数比对）→ 必要时冷启动。
# 用法：tools/emulator_recover.sh [实例名]（默认 bench24）
#   黑屏判定：连续两次 snapshot 字节数一致且 < 80KB（纯黑帧高度可压缩且恒定）。
# 退出码：0 = 屏幕可用；1 = 恢复失败（需人工介入）。
set -u
INSTANCE="${1:-bench24}"
DEVECO="${DEVECO_STUDIO_HOME:-/Applications/DevEco-Studio.app}"
HDC="$DEVECO/Contents/sdk/default/openharmony/toolchains/hdc"
EMU="$DEVECO/Contents/tools/emulator/Emulator"

shot() { "$HDC" shell snapshot_display -f /data/local/tmp/_recov.jpeg >/dev/null 2>&1 && \
         "$HDC" file recv /data/local/tmp/_recov.jpeg /tmp/_recov.jpeg >/dev/null 2>&1 && \
         stat -f %z /tmp/_recov.jpeg 2>/dev/null || echo 0; }

echo "== target: $("$HDC" list targets 2>/dev/null | tr '\n' ' ')"
if [ -z "$("$HDC" list targets 2>/dev/null | grep 127.0.0.1)" ]; then
  echo "== 无在线实例，冷启动 $INSTANCE"
  "$EMU" -stop "$INSTANCE" >/dev/null 2>&1
  sleep 5
  "$EMU" -start "$INSTANCE" -noWindow &
  for _ in $(seq 1 18); do
    sleep 10
    "$HDC" list targets 2>/dev/null | grep -q 127.0.0.1 && break
  done
fi
"$HDC" list targets 2>/dev/null | grep -q 127.0.0.1 || { echo "FAIL: 无设备"; exit 1; }

"$HDC" shell power-shell wakeup >/dev/null 2>&1
sleep 1
"$HDC" shell uinput -T -m 628 2200 628 600 200 >/dev/null 2>&1
sleep 2

S1=$(shot); sleep 1; S2=$(shot)
echo "== snapshot bytes: $S1 / $S2"
if [ "$S1" = "$S2" ] && [ "$S1" -lt 80000 ] && [ "$S1" -gt 0 ]; then
  echo "== 疑似黑屏，发电源键 + 再探"
  "$HDC" shell uinput -K -d 26 -u 26 >/dev/null 2>&1
  "$HDC" shell power-shell wakeup >/dev/null 2>&1
  sleep 2
  "$HDC" shell uinput -T -m 628 2200 628 600 200 >/dev/null 2>&1
  sleep 2
  S3=$(shot)
  echo "== retry snapshot: $S3"
fi

S1=$(shot); sleep 1; S2=$(shot)
if [ "$S1" = "$S2" ] && [ "$S1" -lt 80000 ] && [ "$S1" -gt 0 ]; then
  echo "== 渲染管线卡死（黑屏），冷启动 $INSTANCE"
  "$EMU" -stop "$INSTANCE" >/dev/null 2>&1
  sleep 5
  "$EMU" -start "$INSTANCE" -noWindow &
  for _ in $(seq 1 18); do
    sleep 10
    "$HDC" list targets 2>/dev/null | grep -q 127.0.0.1 && break
  done
  "$HDC" list targets 2>/dev/null | grep -q 127.0.0.1 || { echo "FAIL: 冷启动后仍无设备"; exit 1; }
  sleep 20
  "$HDC" shell power-shell wakeup >/dev/null 2>&1
  "$HDC" shell uinput -T -m 628 2200 628 600 200 >/dev/null 2>&1
fi

echo "== final: $("$HDC" list targets 2>/dev/null | tr '\n' ' ')"
echo "OK（若 sweep 仍挂，重新 bm install：hdc file send + bm install，见 docs/BENCHMARK.md 模拟器节）"
