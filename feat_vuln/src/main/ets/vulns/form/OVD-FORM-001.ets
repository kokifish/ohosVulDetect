// VULN: OVD-FORM-001 卡片 postCardAction router 目标取自卡片数据未白名单（CWE-601/20）
// postCardAction 为组件域 API：调用在 FormVulnPage onClick 内联，本函数负责透传目标构造。
export function ovdForm001(cardTarget: string): string {
  // 组件侧：postCardAction(this, { action:'router', params:{ target: cardTarget } })
  return `form.router issued: ${cardTarget}`;
}
