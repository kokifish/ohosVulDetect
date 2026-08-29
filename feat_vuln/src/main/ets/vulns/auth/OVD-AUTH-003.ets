// VULN: OVD-AUTH-003 会话 token 用 Math.random 生成（可预测，CWE-338）
export function ovdAuth003(): string {
  const token = 'tok_' + Math.random().toString(36).substring(2, 14);
  const nonce = Date.now().toString(36);
  return `session=${token} nonce=${nonce}`;
}
