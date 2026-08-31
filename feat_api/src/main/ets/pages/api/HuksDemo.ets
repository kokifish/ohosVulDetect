import { huks } from '@kit.UniversalKeystoreKit';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

// HUKS 会话模型：generateKeyItem → initSession → finishSession（密钥不出安全环境）。
@Entry
@Component
struct HuksDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'HUKS session',
        cases: [
          new Case('huks-gcm', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const alias = 'bench_huks_aes';
            const properties: Array<huks.HuksParam> = [
              { tag: huks.HuksTag.HUKS_TAG_ALGORITHM, value: huks.HuksKeyAlg.HUKS_ALG_AES },
              {
                tag: huks.HuksTag.HUKS_TAG_PURPOSE,
                value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT
              },
              { tag: huks.HuksTag.HUKS_TAG_KEY_SIZE, value: 256 },
              { tag: huks.HuksTag.HUKS_TAG_PADDING, value: huks.HuksKeyPadding.HUKS_PADDING_NONE },
              { tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE, value: huks.HuksCipherMode.HUKS_MODE_GCM },
              { tag: huks.HuksTag.HUKS_TAG_NONCE, value: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) }
            ];
            const genOpts: huks.HuksOptions = { properties: properties };
            await huks.generateKeyItem(alias, genOpts);
            const encOpts: huks.HuksOptions = {
              properties: properties,
              inData: new Uint8Array([1, 1, 2, 2, 3, 3])
            };
            const initHandle: huks.HuksSessionHandle = await huks.initSession(alias, encOpts);
            const finishOut: huks.HuksReturnResult = await huks.finishSession(initHandle.handle, encOpts);
            const outData: Uint8Array | undefined = finishOut.outData;
            const outLen: number = outData?.length ?? 0;
            await huks.deleteKeyItem(alias, encOpts);
            return `ct-len=${outLen}`;
          })
        ]
      })

    }
    .height('100%')
  }
}
