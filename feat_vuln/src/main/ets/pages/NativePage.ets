import { Case, DemoScaffold } from 'lib_common';
import { ovdNative001S, ovdNative002S } from '../vulns/native/Twins';
import { common } from '@kit.AbilityKit';
import { runAbcRawfile } from 'libentry.so';
import { ovdNative001 } from '../vulns/native/OVD-NATIVE-001';
import { ovdNative002 } from '../vulns/native/OVD-NATIVE-002';

@Entry
@Component
struct NativePage {
  build() {
    Column() {
      DemoScaffold({
        title: 'native layer (libentry.so)',
        cases: [
          new Case('001 key-in-so', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdNative001('bench-data')),
          new Case('002 strcpy', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdNative002()),
          // 包内独立 abc 语料：es2abc script 模式产物放 rawfile，经 NAPI 执行；
          // 完成值恒 undefined，脚本内自校验（≠72 即抛错→❌），正常返回 ran-ok-selfcheck=72
          new Case('rawfile abc', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const v = runAbcRawfile('feat_vuln/resources/rawfile/bench_script.abc');
            return `napi_run_script_path -> ${v}`;
          }),
          new Case('001S runtime-key', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdNative001S('bench', 'kms-runtime-key')),
          new Case('002S bounded', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdNative002S('abcdef', 4))
        ]
      })

    }
    .height('100%')
  }
}
