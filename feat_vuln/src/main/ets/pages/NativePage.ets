import { Case, DemoScaffold } from 'lib_common';
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
          // 包内独立 abc 语料：es2abc script 模式产物放 rawfile，经 NAPI 执行（期望 72，见 tools/rawfile_src/bench_script.js）
          new Case('rawfile abc', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const v = runAbcRawfile('feat_vuln/resources/rawfile/bench_script.abc');
            return `napi_run_script_path -> ${v}`;
          })
        ]
      })

    }
    .height('100%')
  }
}
