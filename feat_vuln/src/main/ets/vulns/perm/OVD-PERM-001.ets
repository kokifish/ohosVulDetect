// VULN: OVD-PERM-001 申请-不用：module.json5 声明 CAMERA/MICROPHONE 但模块内无任何使用（CWE-732）
// 事实源见 feat_vuln/src/main/module.json5 的 requestPermissions。
export function ovdPerm001(): string {
  return 'declared in module.json5: ohos.permission.CAMERA, ohos.permission.MICROPHONE (never used)';
}
