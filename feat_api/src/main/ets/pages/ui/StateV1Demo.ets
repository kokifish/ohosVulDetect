// 状态管理 V1 全套：@State/@Watch/@Prop/@Link/@Provide/@Consume/@Observed+@ObjectLink/@Track
// + AppStorage/@StorageLink。
@Observed
class BenchUser {
  // SDK 实测（140110）：@Observed 类部分属性标 @Track 时，build 读未标属性即 jscrash
  // （Illegal usage of not @Track'ed property）——UI 内读取的属性须全部 @Track
  @Track name: string;
  @Track score: number;

  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }
}

@Component
struct UserCard {
  @ObjectLink user: BenchUser;
  @Prop copyScore: number = 0;
  @Link twoWay: number;

  build() {
    Column({ space: 4 }) {
      Text(`@ObjectLink user: ${this.user.name}=${this.user.score}`)
      Text(`@Prop copy: ${this.copyScore} @Link: ${this.twoWay}`)
      Button('child +10 (mutate @Observed)')
        .onClick(() => {
          this.user.score += 10;
        })
      Button('child +1 (@Link back)')
        .onClick(() => {
          this.twoWay += 1;
        })
    }
    .padding(8)
    .border({ width: 1 })
  }
}

@Component
struct ThemeLabel {
  @Consume theme: string;

  build() {
    Text(`@Consume theme=${this.theme}`).fontColor(this.theme === 'dark' ? '#ffffff' : '#000000')
  }
}

@Entry
@Component
struct StateV1Demo {
  @State @Watch('onScoreChange') count: number = 0;
  @State user: BenchUser = new BenchUser('alice', 90);
  @Provide theme: string = 'light';
  @StorageLink('bench_storage_v1') storageNum: number = 7;

  onScoreChange(): void {
    this.storageNum = this.count;
  }

  aboutToAppear(): void {
    AppStorage.setOrCreate('bench_storage_v1', 7);
  }

  @State selfcheckResult: string = '';

  build() {
    Column({ space: 10 }) {
      Text('state V1').fontSize(20)
      Text(`@State count=${this.count} storage=${this.storageNum}`)
      Button('parent +1 (@Watch fires)')
        .onClick(() => {
          this.count += 1;
        })
      Button('toggle @Provide theme')
        .onClick(() => {
          this.theme = this.theme === 'light' ? 'dark' : 'light';
        })
      Button('run selfcheck')
        .onClick(() => {
          // 确定性状态断言：@State 写入 → @Watch 联动 @StorageLink；@Provide 切换还原。
          // 位图从左到右：@State 写读 / @Watch→StorageLink / @Provide 切换 / 还原主题 / 还原计数
          const bits: string[] = [];
          const origCount = this.count;
          const origTheme = this.theme;
          this.count = 42;
          bits.push(this.count === 42 ? '1' : '0');
          bits.push(this.storageNum === 42 ? '1' : '0'); // @Watch 联动
          this.theme = origTheme === 'dark' ? 'light' : 'dark';
          bits.push(this.theme !== origTheme ? '1' : '0');
          this.theme = origTheme;
          bits.push(this.theme === origTheme ? '1' : '0');
          this.count = origCount;
          bits.push(this.count === origCount ? '1' : '0');
          const pass = bits.filter((b: string): boolean => b === '1').length;
          const total = bits.length;
          const mark = pass === total ? '✅' : '❌';
          this.selfcheckResult = `${mark} selfcheck state-v1 pass=${pass}/${total} bits=${bits.join('')}`;
        })
      if (this.selfcheckResult !== '') {
        Text(this.selfcheckResult).fontSize(12).fontFamily('monospace')
      }
      UserCard({ user: this.user, copyScore: this.user.score, twoWay: $count })
      ThemeLabel()
    }
    .width('100%')
    .padding(12)
  }
}
