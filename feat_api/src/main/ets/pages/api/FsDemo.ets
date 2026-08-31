import { fileIo, picker } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';
import { resourceManager } from '@kit.LocalizationKit';
import { util } from '@kit.ArkTS';
import { Case, DemoScaffold } from 'lib_common';

// 文件：同步/异步对、stat/copy/list、目录操作；picker 安全选择器。
@Entry
@Component
struct FsDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'fileIo/fs + picker',
        cases: [
          new Case('fs-sync-rw', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const path = `${ctx.filesDir}/bench.txt`;
            const f: fileIo.File = fileIo.openSync(path, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE | fileIo.OpenMode.TRUNC);
            fileIo.writeSync(f.fd, 'hello-bench-fs');
            const stat: fileIo.Stat = fileIo.statSync(path);
            const buf = new ArrayBuffer(64);
            const f2: fileIo.File = fileIo.openSync(path, fileIo.OpenMode.READ_ONLY);
            const rd: number = fileIo.readSync(f2.fd, buf);
            fileIo.closeSync(f);
            fileIo.closeSync(f2);
            const u8 = new Uint8Array(buf.slice(0, rd));
            let text = '';
            for (const b of u8) {
              text += String.fromCharCode(b);
            }
            return `size=${stat.size} read=${text}`;
          }),
          new Case('fs-async-dir', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const dir = `${ctx.filesDir}/bench_dir`;
            if (!fileIo.accessSync(dir)) {
              fileIo.mkdirSync(dir);
            }
            const f: fileIo.File = await fileIo.open(`${dir}/a.txt`, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
            await fileIo.write(f.fd, 'a');
            fileIo.closeSync(f.fd);
            await fileIo.copyFile(`${dir}/a.txt`, `${dir}/b.txt`);
            const names: string = fileIo.listFileSync(dir).join(',');
            fileIo.rmdirSync(dir);
            return `files=${names}`;
          }),
          new Case('doc-picker', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const docPicker = new picker.DocumentViewPicker(ctx);
            const uris: Array<string> = await docPicker.select();
            return `picked=${uris.length}`;
          }),
          new Case('photo-picker', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const photoPicker = new picker.PhotoViewPicker();
            const res: picker.PhotoSelectResult = await photoPicker.select();
            return `picked=${res.photoUris.length}`;
          }),
          new Case('rawfile-res', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const rm: resourceManager.ResourceManager = ctx.resourceManager;
            const raw: Uint8Array = await rm.getRawFileContent('bench.txt');
            const txt: string = util.TextDecoder.create('utf-8').decodeToString(raw);
            const cfg: resourceManager.Configuration = rm.getConfigurationSync();
            return `${txt.trim().slice(0, 20)}… dir=${cfg.direction} locale=${cfg.locale}`;
          })
        ]
      })

    }
    .height('100%')
  }
}
