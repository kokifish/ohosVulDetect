// lang 页自检助手：确定性基线断言，输出 ✅/❌ 行供 emulator_sweep.py 自动采集
// （零按钮页无 sweep 点击信号，运行正确性以 selfcheck 行为验证依据）。
// exact = 整行精确匹配基线（各行数值的模拟器定点验证值见 docs/BENCHMARK.md 各轮记录）；
// loose = 前缀形态校验（行值随语料规模/时间种子变化，不钉死数值，仅验证行产出）。
// 行文案一旦与 BENCHMARK 基线不符即 ❌，防"重构后数值悄悄漂移"。
export function selfcheckLine(page: string, exact: string[], actual: string[], loose: string[]): string {
  const missing: string[] = [];
  const remaining = actual.slice();
  for (const e of exact) {
    const i = remaining.indexOf(e);
    if (i >= 0) {
      remaining.splice(i, 1);
    } else {
      missing.push(e);
    }
  }
  const failLoose = loose.filter((p: string): boolean =>
    !actual.some((a: string): boolean => a.startsWith(p)));
  const total = exact.length + loose.length;
  const pass = total - missing.length - failLoose.length;
  if (missing.length === 0 && failLoose.length === 0) {
    return `✅ selfcheck ${page} pass=${pass}/${total}`;
  }
  const detail = missing.slice(0, 3).concat(failLoose.map((p: string): string => `<${p}*`)).join(' | ');
  return `❌ selfcheck ${page} pass=${pass}/${total} missing: ${detail}`;
}
