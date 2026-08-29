// VULN: OVD-SECRET-005 运行时字符串拼接/编码重组秘密（反静态扫描变体，CWE-798）
export function ovdSecret005(): string {
  const p1 = 'wJal';
  const p2 = 'rXUtnFEMI';
  const p3 = String.fromCharCode(47, 75, 55, 68);
  const assembled = p1 + p2 + p3;
  return `assembled token=${assembled}`;
}
