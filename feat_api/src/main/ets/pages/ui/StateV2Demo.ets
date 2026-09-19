// 状态管理 V2 全套：@ComponentV2/@Local/@Param/@Once/@Event/@Monitor/@Computed
// + @ObservedV2/@Trace + @Provider/@Consumer。
@ObservedV2
class CounterV2 {
  @Trace count: number = 0;

  bump(): void {
    this.count += 1;
  }
}

@ComponentV2
struct ChildV2 {
  @Param input: number = 0;
  @Event onChange: (v: number) => void = (v: number) => {
  };
  @Consumer('theme') theme: string = 'light';

  build() {
    Column({ space: 4 }) {
      Text(`@Param=${this.input} @Consumer=${this.theme}`)
      Button('@Event +1 back')
        .onClick(() => {
          this.onChange(this.input + 1);
        })
    }
    .padding(8)
    .border({ width: 1 })
  }
}

@Entry
@ComponentV2
struct StateV2Demo {
  @Local num: number = 10;
  @Local counter: CounterV2 = new CounterV2();
  @Provider('theme') theme: string = 'light';
  history: number[] = [];

  @Computed
  get doubled(): number {
    return this.num * 2;
  }

  @Monitor('num')
  onNumChange(monitor: IMonitor): void {
    // SDK 实测：回调参数是 IMonitor，value<T>() 返回 IMonitorValue<T> | undefined，
    // 字段为 before/now/path（本 SDK 无 after）——按 Map.get 写在监控触发即 jscrash
    const v = monitor.value<number>('num');
    if (v && typeof v.now === 'number') {
      this.history.push(v.now);
    } else {
      this.history.push(this.num);
    }
  }

  @Local selfcheckResult: string = '';

  build() {
    Column({ space: 10 }) {
      Text('state V2 (@ComponentV2)').fontSize(20)
      Text(`@Local num=${this.num} @Computed doubled=${this.doubled}`)
      Text(`@ObservedV2/@Trace count=${this.counter.count} history=${this.history.join(',')}`)
      Button('@Local +1')
        .onClick(() => {
          this.num += 1;
        })
      Button('@Trace bump')
        .onClick(() => {
          this.counter.bump();
        })
      Button('@Provider theme toggle')
        .onClick(() => {
          this.theme = this.theme === 'light' ? 'dark' : 'light';
        })
      Button('run selfcheck')
        .onClick(() => {
          this.runSelfcheck();
        })
      if (this.selfcheckResult !== '') {
        Text(this.selfcheckResult).fontSize(12).fontFamily('monospace')
      }
      ChildV2({ input: this.num, onChange: (v: number) => {
        this.num = v;
      } })
    }
    .width('100%')
    .padding(12)
  }

  // 位图从左到右：@Local 写读 / @Computed 联动 / @Trace 联动 / 恢复
  private async runSelfcheck(): Promise<void> {
    const bits: string[] = [];
    const origNum = this.num;
    const origCount = this.counter.count;
    this.num = 21;
    // @Computed 为渲染驱动重算：事件回调内改依赖后须等一帧再读（API24 镜像实测同步读旧值）
    await new Promise<void>((r: () => void) => setTimeout(r, 60));
    bits.push(this.num === 21 ? '1' : '0');
    bits.push(this.doubled === 42 ? '1' : '0');
    this.counter.bump();
    bits.push(this.counter.count === origCount + 1 ? '1' : '0');
    this.num = origNum;
    this.counter.count = origCount;
    await new Promise<void>((r: () => void) => setTimeout(r, 60));
    bits.push(this.num === origNum && this.counter.count === origCount ? '1' : '0');
    const pass = bits.filter((b: string): boolean => b === '1').length;
    const total = bits.length;
    const mark = pass === total ? '✅' : '❌';
    this.selfcheckResult = `${mark} selfcheck state-v2 pass=${pass}/${total} bits=${bits.join('')}`;
  }
}
