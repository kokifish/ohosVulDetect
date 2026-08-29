// VULN: OVD-SECRET-002 硬编码 LLM/推送服务 API Key（CWE-798）
export const LLM_API_KEY: string = 'sk-ovdbench-9f8e7d6c5b4a3210fedcba9876543210';

export function ovdSecret002(): string {
  const header: Record<string, string> = { 'Authorization': `Bearer ${LLM_API_KEY}` };
  return `POST /v1/chat/completions ${JSON.stringify(header)}`;
}
