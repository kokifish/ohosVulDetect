// VULN: OVD-CERT-001 自签证书直接信任（生产信任锚被本地自签证书顶替，CWE-295/343）
import { cert } from '@kit.DeviceCertificateKit';
import { util } from '@kit.ArkTS';

// 自签基准载荷：CN=vd-vuln-selfsigned（检测常量，仅语料用途）
const SELF_SIGNED_PEM: string = '-----BEGIN CERTIFICATE-----\nvd-vuln-selfsigned\n-----END CERTIFICATE-----';

export async function ovdCert001(): Promise<string> {
  const encoder = new util.TextEncoder();
  const blob: cert.EncodingBlob = {
    data: encoder.encodeInto(SELF_SIGNED_PEM).slice(),
    encodingFormat: cert.EncodingFormat.FORMAT_PEM
  };
  const x509 = await cert.createX509Cert(blob);
  return `self-signed cert accepted: ver=${x509.getVersion()}`;
}
