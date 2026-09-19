// VULN: OVD-CERT-003 证书 Pin 集合不匹配仍放行（api-call+const-array：pin 数组形同虚设，CWE-295）
// 规则语义：createX509Cert 解析 + 常量数组（pin 白名单）判定后不阻断
import { cert } from '@kit.DeviceCertificateKit';
import { util } from '@kit.ArkTS';
import { BusinessError } from '@kit.BasicServicesKit';

// 受信 pin 集合（常量数组；对端指纹从不落入其中）
const TRUSTED_PINS: string[] = ['sha256/bench-pinAAAA111', 'sha256/bench-pinBBBB222'];
// 对端证书载荷（CN=vd-bench-peer-mismatch，仅语料用途）
const PEER_PEM: string = '-----BEGIN CERTIFICATE-----\nvd-bench-peer-mismatch\n-----END CERTIFICATE-----';

export async function ovdCert003(): Promise<string> {
  const encoder = new util.TextEncoder();
  const blob: cert.EncodingBlob = {
    data: encoder.encodeInto(PEER_PEM).slice(),
    encodingFormat: cert.EncodingFormat.FORMAT_PEM
  };
  let fingerprint = 'unparsed';
  let err = '';
  try {
    const x509 = await cert.createX509Cert(blob);
    fingerprint = `v${x509.getVersion()}`;
  } catch (e) {
    err = ` (parse err=${(e as BusinessError).code})`;
  }
  // pin 不在白名单 → 仍放行连接（漏洞本体）
  const pinned = TRUSTED_PINS.includes(fingerprint);
  return `pin match=${pinned} but connection PROCEEDED${err}`;
}
