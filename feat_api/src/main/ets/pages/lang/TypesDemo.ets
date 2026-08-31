// 类型系统压力页：泛型类/函数、接口多态分发、union+typeof narrowing、枚举位运算、
// Record 索引、static 成员、自定义 Error + try/catch/finally、可选链/空值合并。
interface BenchShape {
  name(): string;
  area(): number;
}

class BenchCircle implements BenchShape {
  private r: number;

  constructor(r: number) {
    this.r = r;
  }

  name(): string {
    return 'circle';
  }

  area(): number {
    return 3.14159 * this.r * this.r;
  }
}

class Square implements BenchShape {
  private s: number;

  constructor(s: number) {
    this.s = s;
  }

  name(): string {
    return 'square';
  }

  area(): number {
    return this.s * this.s;
  }
}

class Box<T> {
  private items: T[] = [];

  put(v: T): void {
    this.items.push(v);
  }

  take(): T | undefined {
    return this.items.pop();
  }

  get size(): number {
    return this.items.length;
  }
}

function pick<T>(a: T, b: T, first: boolean): T {
  return first ? a : b;
}

class BenchError extends Error {
  code: number;

  constructor(msg: string, code: number) {
    super(msg);
    this.code = code;
  }
}

enum PermFlags {
  READ = 1,
  WRITE = 2,
  EXEC = 4
}

class Registry {
  static total: number = 0;

  static describe(id: string | number): string {
    if (typeof id === 'string') {
      return `str:${id}`;
    }
    const n: number = id as number;
    return `num:${n.toFixed(0)}`;
  }
}

class Tally {
  private n: number = 0;

  get value(): number {
    return this.n;
  }

  set bump(_: number) {
    this.n += 1;
  }
}

@Entry
@Component
struct TypesDemo {
  @State lines: string[] = [];

  build() {
    Column({ space: 10 }) {
      Text('types / generics / try').fontSize(20)
      Button('run type battery')
        .onClick(() => {
          // 多态分发（interface dispatch）
          const shapes: BenchShape[] = [new BenchCircle(2), new Square(3)];
          const areas = shapes.map((s: BenchShape): string => `${s.name()}=${s.area().toFixed(1)}`);
          this.lines.push(`shapes=[${areas.join(',')}]`);
          // 泛型
          const box = new Box<number>();
          box.put(1);
          box.put(2);
          this.lines.push(`box take=${box.take()} size=${box.size} pick=${pick<string>('a', 'b', false)}`);
          // union narrowing
          this.lines.push(Registry.describe('bench') + ' ' + Registry.describe(7));
          // 枚举位运算
          const rw = PermFlags.READ | PermFlags.WRITE;
          this.lines.push(`flags rw=${rw} hasExec=${(rw & PermFlags.EXEC) !== 0}`);
          // Record 索引访问
          const scores: Record<string, number> = { 'alice': 90 };
          scores['bob'] = 85;
          this.lines.push(`scores alice+bob=${scores['alice'] + scores['bob']}`);
          // try/catch/finally + 自定义 Error
          try {
            throw new BenchError('bench-throw', 42);
          } catch (e) {
            const be = e as BenchError;
            this.lines.push(`caught code=${be.code} msg=${be.message}`);
          } finally {
            this.lines.push('finally ran');
          }
          // 可选链 + 空值合并
          const rec: Record<string, Object> = {};
          this.lines.push(`opt=${(rec['x'] as string | undefined)?.length ?? 'none'}`);
        })
      Button('run lang extras')
        .onClick(() => {
          // DataView 二进制视图
          const ab = new ArrayBuffer(8);
          const dv = new DataView(ab);
          dv.setFloat64(0, 3.14159, true);
          this.lines.push(`dv f64=${dv.getFloat64(0, true).toFixed(5)} last-byte=${dv.getUint8(7)}`);
          // BigInt 超安全整数
          const big: bigint = 9007199254740993n;
          this.lines.push(`bigint+1=${big + 1n} safe=${Number.MAX_SAFE_INTEGER}`);
          // RegExp 捕获组
          const m = /ovd-(\d+)/.exec('id ovd-42 end');
          this.lines.push(`regexp g1=${m?.[1]} idx=${m?.index}`);
          // getter/setter 存取器
          const c = new Tally();
          c.bump = 1;
          c.bump = 2;
          this.lines.push(`accessor value=${c.value}`);
          // 标签循环跳转
          let hits = 0;
          outer: for (let i = 0; i < 3; i += 1) {
            for (let j = 0; j < 3; j += 1) {
              if (i + j > 2) {
                continue outer;
              }
              hits += 1;
            }
          }
          this.lines.push(`labeled hits=${hits}`);
        })
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
    }
    .height('100%')
    .padding(8)
  }
}
