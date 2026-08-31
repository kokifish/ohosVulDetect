import { common } from '@kit.AbilityKit';
import { Runner } from './Runner';

export class Case {
  readonly label: string;
  readonly fn: (ctx: common.UIAbilityContext, log: (s: string) => void) => string | Promise<string>;

  constructor(label: string, fn: (ctx: common.UIAbilityContext, log: (s: string) => void) => string | Promise<string>) {
    this.label = label;
    this.fn = fn;
  }
}

/**
 * Demo 页共用脚手架：标题 + 按钮组（ForEach 渲染 Case）+ 滚动日志区。
 * Case.fn 收到 UIAbilityContext 与 log()，按钮 onClick 统一经 Runner 执行并写回日志。
 */
@Component
export struct DemoScaffold {
  @State lines: string[] = [];
  @Prop status: string = '';
  private title: string = '';
  private subtitle: string = '';
  private cases: Case[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  private ctx(): common.UIAbilityContext {
    return this.getUIContext().getHostContext() as common.UIAbilityContext;
  }

  build() {
    Column() {
      Text(this.title).fontSize(20).margin(8)
      if (this.status) {
        Text(this.status).fontSize(13).fontColor('#CC0000')
      }
      if (this.subtitle) {
        Text(this.subtitle).fontSize(11).fontColor('#888888')
      }
      Flex({ wrap: FlexWrap.Wrap }) {
        ForEach(this.cases, (c: Case) => {
          Button(c.label).margin(4).onClick(() => {
            this.runner.run(c.label, () => c.fn(this.ctx(), (s: string) => this.lines.push(s)))
          })
        }, (c: Case) => c.label)
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
