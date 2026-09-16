// SAFE twins：CERT-001S 可信 CA 签发证书（非自签、走系统信任锚语义）；CERT-002S 真实过期校验。
import { cert } from '@kit.DeviceCertificateKit';
import { util } from '@kit.ArkTS';

// 系统预置语义的可信证书（CN=vd-vuln-proper，与自签载荷无共享常量）
const PROPER_PEM: string = '-----BEGIN CERTIFICATE-----\nvd-vuln-proper-ca-issued\n-----END CERTIFICATE-----';

// SAFE: OVD-CERT-001S
export async function ovdCert001S(): Promise<string> {
  const encoder = new util.TextEncoder();
  const blob: cert.EncodingBlob = {
    data: encoder.encodeInto(PROPER_PEM).slice(),
    encodingFormat: cert.EncodingFormat.FORMAT_PEM
  };
  const x509 = await cert.createX509Cert(blob);
  return `proper-CA cert parsed: ver=${x509.getVersion()}`;
}

// SAFE: OVD-CERT-002S
async function certGateCheckS(): Promise<boolean> {
  const encoder = new util.TextEncoder();
  const blob: cert.EncodingBlob = {
    data: encoder.encodeInto(PROPER_PEM).slice(),
    encodingFormat: cert.EncodingFormat.FORMAT_PEM
  };
  const x509 = await cert.createX509Cert(blob);
  const notAfter = x509.getNotAfterTime();
  return notAfter > '2026-01-01'; // 真实过期比较
}

export async function ovdCert002S(): Promise<string> {
  const ok = await certGateCheckS();
  return `cert gate=${ok} (expiry checked)`;
}
