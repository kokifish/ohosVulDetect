// 运算符/比较跳转压力页：位/数值运算、自增自减、NaN/Infinity，
// 以及 ===/!==/== null/!= null/== undefined 全系比较（值取自运行时，防常量折叠）。
// 目标指令：exp/mod2/shl2/shr2(>>>)/ashr2(>>)/xor2/not/inc/dec/ldnan/ldinfinity/lesseq。
// 注：比较跳转在本工具链一律拆成 eq/ne + jeqz/jnez，jeq*/jstricteq* 跳转变体实测不可达
// （见 docs/BENCHMARK.md）；`>>` 实测对应 ashr2、`>>>` 对应 shr2。
function opBattery(x: number): string {
  const a = x % 9;
  const parts: string[] = [
    `pow=${a ** 2}`,
    `mod=${a % 5}`,
    `shl=${a << 2}`,
    `ashr=${a >> 1}`,
    `shr=${(-a) >>> 1}`,
    `xor=${a ^ 3}`,
    `not=${~a}`,
    `neg=${-a}`
  ];
  let c = a;
  c++;
  c--;
  parts.push(`incdec=${c}`);
  parts.push(`nan=${Number.isNaN(NaN)},inf=${Infinity > 1e307}`);
  return parts.join(' ');
}

function cmpBattery(x: number): string {
  const a = x % 9;
  const parts: string[] = [];
  if (a === 3) {
    parts.push('eq3');
  }
  if (a !== 4) {
    parts.push('ne4');
  }
  const obj: Object | null = a === 5 ? new Object() : null;
  if (obj == null) {
    parts.push('eqnull');
  }
  if (obj != null) {
    parts.push('nenull');
  }
  const maybe: number | undefined = a === 6 ? undefined : a;
  if (maybe === undefined) {
    parts.push('eqund');
  }
  if (maybe !== undefined) {
    parts.push('neund');
  }
  const flag = a === 7;
  if (flag) {
    parts.push('flag');
  }
  if (!flag) {
    parts.push('nflag');
  }
  parts.push(`ge=${a >= 4},le=${a <= 2}`);
  return parts.join(',');
}

@Entry
@Component
struct OpsDemo {
  @State lines: string[] = [];

  build() {
    Column({ space: 10 }) {
      Text('operators / comparisons').fontSize(20)
      Button('run ops battery')
        .onClick(() => {
          const x = Math.floor(Date.now() / 1000);
          this.lines.push(opBattery(x));
          this.lines.push(cmpBattery(x));
        })
      ForEach(this.lines, (l: string) => Text(l).fontSize(14), (l: string) => l)
    }
    .height('100%')
  }
}
