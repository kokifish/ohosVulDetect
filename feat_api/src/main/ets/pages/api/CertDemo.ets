// DeviceCertificateKit：X509 证书解析（createX509Cert + 字段提取 + 非法输入错误路径）。
// 纯解析、无权限、无 UI：内置 vd-bench 自签 PEM（虚构基准证书），全链路确定性。
import { cert } from '@kit.DeviceCertificateKit';
import { util } from '@kit.ArkTS';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';

// 自签基准证书（openssl 生成，CN=vd-bench，仅语料用途）
const BENCH_PEM: string = '-----BEGIN CERTIFICATE-----\nMIIDNzCCAh+gAwIBAgIUMWvQn6BOdLwu05XzORvFD74lJ78wDQYJKoZIhvcNAQEL\nBQAwKzERMA8GA1UEAwwIdmQtYmVuY2gxFjAUBgNVBAoMDW9ob3NWdWxEZXRlY3Qw\nHhcNMjYwOTE1MTg0MTMwWhcNMzYwOTEyMTg0MTMwWjArMREwDwYDVQQDDAh2ZC1i\nZW5jaDEWMBQGA1UECgwNb2hvc1Z1bERldGVjdDCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAOKL31oZ+V2gNHJaWzn8wuo5H8ZVtgno4IAzFzDtSbbs916F\nElj12MfZK0DKlUDnpa4yLFXSI3meodr3NCye0MxNs4AYruwHMQ8e2NATbeZW7PBw\nR9BJvBcVUPW0LXadsyARPmUpxIm8hPokeh0aadpr7JLQbk+pXepFoEG3wSt5K7y/\nJpnoTB/JB018NXfCnhMLQOWB04X1LhKmNnZqRIqBrzbS9vG8+EBDNfq0oL/ozQeZ\n/JwUFc58Orx5+GVppBun4PCKchhVawM2uGdGrz3yXtQH7WbbiRFQQiYyXsd0mo2V\n4oluVJX7WYUP33rkFgygMm0Tz8OslXBMYcvUfUUCAwEAAaNTMFEwHQYDVR0OBBYE\nFJQ5TSL0vHF1iSb5EZI5BUKfZN5bMB8GA1UdIwQYMBaAFJQ5TSL0vHF1iSb5EZI5\nBUKfZN5bMA8GA1UdEwEB/wQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEBABfKiX5J\ndwwkgPrInvfTe+JRs2K5VlQ9Fi749lufHcQNuEQzaCV23zKKoU9hIKgCFdEBgKow\nM9dhi7dVVNXsvCW5q4GJuYCCfEloWdQjQvww/uIVflhbkeqs8laYrWzcnrq9YI2c\nUxVE7srKEPPFV6uNmnvJpZnkZu1f6B2yDrxUKubkBadfvq7XZAws7yilbqX4oa3k\nsdrS5gAG2ZQUVQrnpqwaktgzjhr8DWTciGq2i3pqw1aIP9KaP2Dfsw6EAbukxlhr\nQxJvCpUnl4xbcyvn2DjWFKjVbxbm92SOQZjQwPo4MCldYVnAMp/WrYHvMYnSXBcq\ndvZe7wwKsRtIvxM=\n-----END CERTIFICATE-----';

@Entry
@Component
struct CertDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'DeviceCertificateKit',
        cases: [
          new Case('parse x509 (pem)', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const encoder = new util.TextEncoder();
              const pemBytes = encoder.encodeInto(BENCH_PEM).slice();
              const blob: cert.EncodingBlob = {
                data: pemBytes,
                encodingFormat: cert.EncodingFormat.FORMAT_PEM
              };
              const x509 = await cert.createX509Cert(blob);
              return `ver=${x509.getVersion()} serial=${x509.getSerialNumber()} ` +
                `nb=${x509.getNotBeforeTime()} na=${x509.getNotAfterTime()}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`parse fail: ${err.code} ${err.message}`);
              return `parse-err=${err.code}`;
            }
          }),
          new Case('bad pem (error path)', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const encoder = new util.TextEncoder();
              const bad = encoder.encodeInto('-----BEGIN CERTIFICATE-----bm9sbGFuZGUhIQ==').slice();
              const x509 = await cert.createX509Cert({ data: bad, encodingFormat: cert.EncodingFormat.FORMAT_PEM });
              return `unexpected ok ver=${x509.getVersion()}`;
            } catch (e) {
              const err = e as BusinessError;
              return `rejected err=${err.code}`;
            }
          }),
        ],
      })
    }
    .height('100%')
  }
}
