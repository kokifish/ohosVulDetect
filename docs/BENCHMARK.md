# ohosVulDetect 基准测试 App — 构建与使用手册

多模块 HarmonyOS 基准应用：① 广覆盖 API/ArkUI/语言特性，作为 ohre 反编译准确性语料；
② 预埋 51 个带标签漏洞 + 7 个安全孪生（groundtruth/manifest.json），作为 VulDetector 检测基准。

## 结构

| 模块 | 类型 | 内容 |
|---|---|---|
| entry | entry HAP | 壳：拉起两个 feature（跨 HAP startAbility） |
| feat_api | feature HAP | 28 个良性 API demo 页 + 11 个 UI/语言特性页（组件画廊 + lexenv 压力页） |
| feat_vuln | feature HAP | 13 类漏洞页 + BackdoorAbility(exported, ovd://backdoor) + libentry.so |
| lib_common | HAR | Logger / DemoItem / Runner |
| lib_shared | HSP | 静态/动态 import 目标 |

每个模块编译为独立 `ets/modules.abc`；`.app` = 3 hap + 1 hsp + pack.info。

## 构建

**推荐：一键脚本（自动设置工具链环境）**

```bash
python3 build.py                    # release 构建（ArkGuard 混淆，两个 product 全出）
python3 build.py --product default  # 仅 default（API 26，ohre 语料）
python3 build.py --product emulator # 仅 emulator（模拟器安装变体）
python3 build.py --debug            # debug 构建（不混淆）
python3 build.py --clean            # 构建前清理（改混淆规则/product 后建议使用）
```

仅 3 个可选参数；工具链路径默认 `/Applications/DevEco-Studio.app`，可用环境变量 `DEVECO_STUDIO_HOME`/`DEVECO_SDK_HOME` 覆盖。

**等价手动命令**

```bash
export PATH=/Applications/DevEco-Studio.app/Contents/tools/{node,ohpm}/bin:$PATH
export DEVECO_SDK_HOME=/Applications/DevEco-Studio.app/Contents/sdk
HV=/Applications/DevEco-Studio.app/Contents/tools/hvigor/bin/hvigorw

ohpm install --all
$HV --no-daemon assembleHap --mode module -p product=<default|emulator> -p buildMode=<release|debug>
$HV --no-daemon assembleApp --mode project -p product=<default|emulator> -p buildMode=<release|debug>
```

产物：`build/outputs/{default,emulator}/ohosVulDetect-*-unsigned.app`。

### ArkGuard 混淆（release 默认开启）

各模块 `obfuscation-rules.txt` 当前生效：`-enable-property-obfuscation` + `-enable-toplevel-obfuscation`。
以下两项**实测会导致运行时崩溃**（2026-08-29，模拟器 6.1.1(24) 动态验证），故默认关闭、留有证据注释：

- `-enable-filename-obfuscation`：多包（HAP×3 + HSP）各自独立改写 record 路径，跨包模块解析 `SyntaxError`，进程启动即退（exit 254）；
- `-enable-export-obfuscation`：HSP 导出名跨包映射不一致，`&lib_shared/Index& does not provide an export name 'b1'`，同样 SyntaxError。

混淆实测结论（模拟器全量遍历 + ohre 逆向）：
- 混淆 release 包运行行为与 debug 完全一致（feat_api 52✅/9❌ 同一组环境性失败；feat_vuln 36✅/4❌）；
- ohre 对混淆包完全兼容（NOT MODULE_ANALYZED=0、UNKNOWN ops=0），方法名/record 路径保留（export/filename 关闭所致），字符串字面量不受混淆影响；
- 混淆语料基准分（v2）：TP=51 FN=1 FP=0 TN=7（P=1.000/R=0.981/F1=0.990）；
  唯一 FN 为 property 混淆改写 JSON 对象字面量属性名（`idcard`），属"困难模式"预期效果。

## 模拟器（CLI，无需 IDE）

```bash
E=/Applications/DevEco-Studio.app/Contents/tools/emulator/Emulator
$E -license accept
$E -imageList -deviceType phone -downloaded false
$E -install -deviceType phone -osVersion "HarmonyOS 6.1.1(24)"
$E -create ovdbench -deviceType phone -osVersion "HarmonyOS 6.1.1(24)"
$E -start ovdbench -noWindow          # 前台可去掉 -noWindow
HDC=/Applications/DevEco-Studio.app/Contents/sdk/default/openharmony/toolchains/hdc
$HDC file send build/outputs/emulator/ohosVulDetect-emulator-unsigned.app /data/local/tmp/ovd.app
$HDC shell "bm install -p /data/local/tmp/ovd.app"      # 模拟器接受未签名 debug 包
$HDC shell "aa start -a EntryAbility -b com.koki.VD"
$HDC shell "snapshot_display -f /data/local/tmp/s.jpeg" # 截图
$E -stop ovdbench
```

自动化遍历脚本：`tools/emulator_sweep.py`（用法见文件头注释）。

## ohre 逆向 + 基准评分

```bash
cd <ohre 仓库根>
PYTHONHASHSEED=0 .venv/bin/python examples/dis_demo.py ohosVulDetect/build/outputs/default/ohosVulDetect-default-unsigned.app
python3 ohosVulDetect/groundtruth/check_manifest.py                                   # manifest↔源码一致性
python3 ohosVulDetect/groundtruth/score_vs_ohre.py test.out ohosVulDetect/build/outputs/default/ohosVulDetect-default-unsigned.app
```

### 首轮基线（2026-08-29，API26 debug 包）

- 2143 方法 / 129 records，`NOT MODULE_ANALYZED=0`，`UNKNOWN tac_opstr_set=0`
- 评分（v2 评分器，未混淆 debug 语料）：TP=51 FN=0 FP=0 TN=7，P/R/F1=1.000（函数/record 级信号定位）
  注：v2 口径——布尔/数字常量按 IR 文本形态归一化、调用链全 token AND+引号形态、
  NET-004/005 用 IR 谓词（return TRUE / emptyarray{}）、SECRET-005 标记 skip 不计分
- 内置 VulDetector 命中：`setWebDebuggingAccess(true)`、`runJavaScript`、`http://*`（NET-001/PRIV-001/CONF-001）
- IR 抽查逐操作对应源码：Math.random 链 / SQL 模板串 concat / Web 属性链（`Web."javaScriptProxy"({...methodList:"getToken"...})`、`Web."mixedMode"(MixedMode.All)`、`Web."fileAccess"(TRUE)`）
- native 密钥只在 libentry.so 可见（abc 级负样本成立）；`Math.random` 在 IR 中为 `Math."random"`
- 全量 may-ld-from（未解析 lexenv）= 235，可作为 SA 简化能力基线

### 模拟器运行（6.1.1(24) 镜像）

- feat_api 38 个 demo 入口全遍历：52 ✅ / 9 ❌（失败均为环境因素：socket 沙箱、user_grant 弹窗、backgroundModes schema、GCM 401）
- feat_vuln 13 类：37 ✅ / 4 ❌（新增 CRYPTO-007；Backdoor 页 load-url 按钮实测拉起 Web 加载，WEB-006 可达）（asset 201、location 开关、file:// 目标不存在、GCM 401）
- deeplink `ovd://backdoor` 实际拉起 BackdoorAbility；native xorNative/vulnCopy 运行无崩溃

## 已知事项

- `backgroundModes` 已从 module.json5 schema 移除（SDK 26），后台任务 demo 运行时 401；
- DataShareExtensionAbility 在 26.0.0 Beta SDK 未公开，IPC-003 改为 TCP 后门无认证用例；
- SDK 26 API 面变化清单（本项目适配记录）：CoreFileKit 导出 `fileIo`（非 fs）、`rcp.createSession`（非 new Session）、
  emitter 事件 id 为 string、`RdbPredicates.limitAs`、`Curve.Ease/EaseOut/Friction`、`animateTo` 需经 UIContext、
  `@Provider/@Consumer` 需带参、asset.Value 仅 boolean|number|Uint8Array、`display.on(type, cb)` 2 参。
