// 语言压力页：多层闭包捕获（lexenv/__ldlexvar 压力用例）、循环内闭包、Promise 链、
// async 事件处理器、递归箭头函数、类方法中的 this 捕获。
import { selfcheckLine } from './Selfcheck';

@Entry
@Component
struct ClosureDemo {
  @State lines: string[] = [];
  @State base: number = 100;

  // 三层嵌套闭包：inner 捕获 a/b/c 三层变量 → 深层 lexenv 访问。
  makeTriple(a: number): (b: number) => (c: number) => number {
    return (b: number): (c: number) => number => {
      return (c: number): number => {
        return a + b + c;
      };
    };
  }

  // 循环创建闭包数组：每个闭包捕获各自的 i。
  loopClosures(): string[] {
    const fns: Array<(x: number) => number> = [];
    for (let i = 0; i < 3; i += 1) {
      fns.push((x: number): number => i * 10 + x);
    }
    const out: string[] = [];
    for (const fn of fns) {
      out.push(`${fn(1)}`);
    }
    return out;
  }

  build() {
    Column({ space: 10 }) {
      Text('closures / lexenv stress').fontSize(20)
      Button('run closure battery')
        .onClick(() => {
          // 1. 三层闭包
          const t = this.makeTriple(1)(2)(3);
          this.lines.push(`triple=${t}`);
          // 2. 循环闭包
          this.lines.push(`loop=[${this.loopClosures().join(',')}]`);
          // 3. Promise 链（每层捕获上一层值）
          Promise.resolve(1)
            .then((v: number): number => v + 1)
            .then((v: number): number => v * 10)
            .then((v: number): void => {
              this.lines.push(`promise-chain=${v}`);
            })
            .catch((e: object): void => {
              this.lines.push(`chain-err ${JSON.stringify(e)}`);
            })
            .finally(() => {
              this.lines.push('chain-finally');
            });
          // 4. async IIFE 捕获外部 base
          (async (): Promise<void> => {
            const captured = this.base;
            await new Promise<void>((resolve: () => void) => setTimeout(resolve, 10));
            this.lines.push(`async-captured=${captured + 1}`);
          })();
          // 5. 递归箭头函数
          const fib: (n: number) => number = (n: number): number => {
            return n < 2 ? 1 : fib(n - 1) + fib(n - 2);
          };
          this.lines.push(`fib(12)=${fib(12)}`);
          // 6. setTimeout 闭包捕获局部
          let acc = 0;
          setTimeout(() => {
            acc += 5;
            this.lines.push(`timeout-acc=${acc}`);
          }, 20);
        })
      Button('base +1 (captured var)')
        .onClick(() => {
          this.base += 1;
        })
      Button('run selfcheck')
        .onClick(() => {
          // 确定性基线断言（不依赖 base 按钮状态）；异步行齐后再比对。
          (async (): Promise<void> => {
            const actual: string[] = [];
            actual.push(`triple=${this.makeTriple(1)(2)(3)}`);
            actual.push(`loop=[${this.loopClosures().join(',')}]`);
            await Promise.resolve(1)
              .then((v: number): number => v + 1)
              .then((v: number): number => v * 10)
              .then((v: number): void => {
                actual.push(`promise-chain=${v}`);
              })
              .finally((): void => {
                actual.push('chain-finally');
              });
            const fib: (n: number) => number = (n: number): number => {
              return n < 2 ? 1 : fib(n - 1) + fib(n - 2);
            };
            actual.push(`fib(12)=${fib(12)}`);
            let acc = 0;
            await new Promise<void>((resolve: () => void) => setTimeout(resolve, 10));
            await new Promise<void>((resolve: () => void) => setTimeout((): void => {
              acc += 5;
              actual.push(`timeout-acc=${acc}`);
              resolve();
            }, 20));
            this.lines.push(selfcheckLine('closure',
              ['triple=6', 'loop=[1,11,21]', 'promise-chain=20', 'chain-finally', 'fib(12)=233', 'timeout-acc=5'],
              actual, []));
          })();
        })
      Text(`base=${this.base}`)
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
