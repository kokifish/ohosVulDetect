import { common } from '@kit.AbilityKit';
import { fileIo, picker } from '@kit.CoreFileKit';
import { Runner } from 'lib_common';

// 文件：同步/异步对、stat/copy/list、目录操作；picker 安全选择器。
@Entry
@Component
struct FsDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('fileIo/fs + picker').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('fs-sync-rw').margin(4).onClick(() => {
          this.runner.run('fs-sync-rw', () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
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
          });
        })
        Button('fs-async-dir').margin(4).onClick(() => {
          this.runner.run('fs-async-dir', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
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
          });
        })
        Button('doc-picker').margin(4).onClick(() => {
          this.runner.run('doc-picker', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const docPicker = new picker.DocumentViewPicker(ctx);
            const uris: Array<string> = await docPicker.select();
            return `picked=${uris.length}`;
          });
        })
        Button('photo-picker').margin(4).onClick(() => {
          this.runner.run('photo-picker', async () => {
            const photoPicker = new picker.PhotoViewPicker();
            const res: picker.PhotoSelectResult = await photoPicker.select();
            return `picked=${res.photoUris.length}`;
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
