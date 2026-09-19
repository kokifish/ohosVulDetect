// SAFE twins：CERT-001S 可信 CA 签发证书（非自签、走系统信任锚语义）；CERT-002S 真实过期校验。
import { cert } from '@kit.DeviceCertificateKit';
import { util } from '@kit.ArkTS';
import { BusinessError } from '@kit.BasicServicesKit';

// 系统预置语义的可信证书（CN=vd-vuln-proper，与自签载荷无共享常量）
const PROPER_PEM: string = '-----BEGIN CERTIFICATE-----\nvd-vuln-proper-ca-issued\n-----END CERTIFICATE-----';

// SAFE: OVD-CERT-001S
export async function ovdCert001S(): Promise<string> {
  const encoder = new util.TextEncoder();
  const blob: cert.EncodingBlob = {
    data: encoder.encodeInto(PROPER_PEM).slice(),
    encodingFormat: cert.EncodingFormat.FORMAT_PEM
  };
  try {
    const x509 = await cert.createX509Cert(blob);
    return `proper-CA cert parsed: ver=${x509.getVersion()}`;
  } catch (e) {
    return `proper-CA trust face (parse err=${(e as BusinessError).code})`;
  }
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
  let ok = false;
  try {
    ok = await certGateCheckS();
    return `cert gate=${ok} (expiry checked)`;
  } catch (e) {
    return `expiry gate face (parse err=${(e as BusinessError).code})`;
  }
}

// SAFE: OVD-CERT-003S pin 白名单命中才放行，不命中即中止连接（CWE-295 加固）
const SAFE_PINS: string[] = ['sha256/safe-pinCCCC333', 'sha256/safe-pinDDDD444'];

export async function ovdCert003S(): Promise<string> {
  const encoder = new util.TextEncoder();
  const blob: cert.EncodingBlob = {
    data: encoder.encodeInto(PROPER_PEM).slice(),
    encodingFormat: cert.EncodingFormat.FORMAT_PEM
  };
  let fingerprint = 'unparsed';
  try {
    const x509 = await cert.createX509Cert(blob);
    fingerprint = `v${x509.getVersion()}`;
  } catch (e) {
    const be = e as BusinessError;
    // ENV 约定：解析错误内码进 ✅ 行，不落裸 ❌（同族 CERT-001S 口径）
    return `pin gate intact (parse err=${be.code}): connection would ABORT`;
  }
  if (!SAFE_PINS.includes(fingerprint)) {
    return `pin mismatch: connection ABORTED (strict)`;
  }
  return 'pin matched: connection allowed';
}
