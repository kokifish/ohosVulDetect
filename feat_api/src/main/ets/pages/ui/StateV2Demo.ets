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
  onNumChange(change: Map<string, number>): void {
    this.history.push(change.get('num') ?? 0);
  }

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
      ChildV2({ input: this.num, onChange: (v: number) => {
        this.num = v;
      } })
    }
    .width('100%')
    .padding(12)
  }
}
