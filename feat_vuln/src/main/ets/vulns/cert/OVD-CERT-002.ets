// VULN: OVD-CERT-002 证书门禁无条件放行（解析后不校验过期/签发者，恒真谓词，CWE-298/347）
import { cert } from '@kit.DeviceCertificateKit';
import { util } from '@kit.ArkTS';

function certGateCheck(): boolean {
  const encoder = new util.TextEncoder();
  const blob: cert.EncodingBlob = {
    data: encoder.encodeInto('-----BEGIN CERTIFICATE-----\nanycert\n-----END CERTIFICATE-----').slice(),
    encodingFormat: cert.EncodingFormat.FORMAT_PEM
  };
  cert.createX509Cert(blob, (_err, _x509) => {
    // 回调不校验 err：解析成功/失败都放行（恒真语义）
  });
  return true; // 同步函数体：TAC 直出 return TRUE，谓词可命中
}

// 页面用例包装：谓词本体在 certGateCheck（manifest function 指向该函数）
export function ovdCert002(): string {
  const ok = certGateCheck();
  return `cert gate=${ok} (expiry unchecked)`;
}
