import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { util } from '@kit.ArkTS';
import { Runner } from 'lib_common';

// cryptoFramework 安全范式：createRandom / AES256-GCM（随机 key+IV）/ SHA256 / RSA 签名验证。
@Entry
@Component
struct CryptoDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  private toHex(data: Uint8Array): string {
    const helper = new util.Base64Helper();
    return helper.encodeToStringSync(data).substring(0, 12);
  }

  build() {
    Column() {
      Text('cryptoFramework (safe pattern)').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('random').margin(4).onClick(() => {
          this.runner.run('random', async () => {
            const rand: cryptoFramework.Random = cryptoFramework.createRandom();
            const blob = await rand.generateRandom(16);
            return `rand16=${this.toHex(blob.data)}`;
          });
        })
        Button('aes-gcm').margin(4).onClick(() => {
          this.runner.run('aes-gcm', async () => {
            const keyGen: cryptoFramework.SymKeyGenerator = cryptoFramework.createSymKeyGenerator('AES256');
            const symKey: cryptoFramework.SymKey = await keyGen.generateSymKey();
            const ivRand: cryptoFramework.Random = cryptoFramework.createRandom();
            const iv: cryptoFramework.DataBlob = await ivRand.generateRandom(12);
            const aadBlob = new Uint8Array([1, 2, 3, 4]);
            const cipher: cryptoFramework.Cipher = cryptoFramework.createCipher('AES256|GCM|PKCS7');
            await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, symKey,
              { iv: { data: iv.data }, aad: { data: aadBlob } } as cryptoFramework.GcmParamsSpec);
            const out: cryptoFramework.DataBlob = await cipher.doFinal({ data: new Uint8Array([9, 9, 9]) });
            return `gcm-ct=${this.toHex(out.data)}`;
          });
        })
        Button('sha256').margin(4).onClick(() => {
          this.runner.run('sha256', () => {
            const md: cryptoFramework.Md = cryptoFramework.createMd('SHA256');
            md.updateSync({ data: new Uint8Array([1, 2, 3]) });
            const digest: cryptoFramework.DataBlob = md.digestSync();
            return `sha256=${this.toHex(digest.data)}`;
          });
        })
        Button('rsa-sign-verify').margin(4).onClick(() => {
          this.runner.run('rsa-sign-verify', async () => {
            const keyGen: cryptoFramework.AsyKeyGenerator = cryptoFramework.createAsyKeyGenerator('RSA2048|PRIMES_2');
            const pair: cryptoFramework.KeyPair = await keyGen.generateKeyPair();
            const sign: cryptoFramework.Sign = cryptoFramework.createSign('RSA2048|PKCS1|SHA256');
            await sign.init(pair.priKey);
            const sig: cryptoFramework.DataBlob = await sign.sign({ data: new Uint8Array([5, 5, 5]) });
            const verify: cryptoFramework.Verify = cryptoFramework.createVerify('RSA2048|PKCS1|SHA256');
            await verify.init(pair.pubKey);
            const ok: boolean = await verify.verify({ data: new Uint8Array([5, 5, 5]) }, sig);
            return `verify=${ok}`;
          });
        })
      }
      .width('100%')
      Scroll() {
        Column({ space: 2 }) {
          ForEach(this.lines, (l: string, i: number) => {
            Text(l).fontSize(11).fontFamily('monospace')
          }, (l: string, i: number) => `${i}-${l}`)
        }
        .alignItems(HorizontalAlign.Start)
        .width('100%')
      }
      .layoutWeight(1)
      .margin(4)
    }
    .height('100%')
  }
}
