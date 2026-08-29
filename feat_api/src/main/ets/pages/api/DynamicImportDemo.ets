import { SharedBox, hspFormat } from 'lib_shared';
import { Runner } from 'lib_common';

// 动态 import()：模块内相对路径目标 + HSP 包名目标；对照顶部静态 import。
@Entry
@Component
struct DynamicImportDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('dynamic import() + HSP').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('lazy-local').margin(4).onClick(() => {
          this.runner.run('lazy-local', async () => {
            const m = await import('../../model/LazyCalc');
            return `lazyTriple(7)=${m.lazyTriple(7)}`;
          });
        })
        Button('lazy-hsp').margin(4).onClick(() => {
          this.runner.run('lazy-hsp', async () => {
            const m = await import('lib_shared');
            return `lazyDouble(21)=${m.lazyDouble(21)} greet=${m.lazyGreet('bench')}`;
          });
        })
        Button('static-hsp').margin(4).onClick(() => {
          this.runner.run('static-hsp', () => {
            const box = new SharedBox();
            box.bump();
            box.bump();
            return `box=${box.value} ${hspFormat('hsp', 42)}`;
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
