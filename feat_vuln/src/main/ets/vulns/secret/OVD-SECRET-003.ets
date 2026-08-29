// VULN: OVD-SECRET-003 硬编码 PEM 私钥（CWE-321）
export const SIGNING_PEM: string =
  '-----BEGIN RSA PRIVATE KEY-----\nMIIBOgIBAAJBAK9J3q0Z7f2kWq+Zbench==\n-----END RSA PRIVATE KEY-----';

export function ovdSecret003(): string {
  return `signing key loaded, pem length=${SIGNING_PEM.length}`;
}
