// ArkTS(.ets) 语法检查禁止 generator、for-in、Symbol、Function.apply、解构声明、
// 非元组 spread 等（arkts-no-generators 等规则）；这些语言特性放在 .ts 中实现。
// .ts 与 .ets 同目录参与同一模块编译（进同一 modules.abc），只做 TS 检查。
// 本文件覆盖指令：creategeneratorobj/suspendgenerator/resumegenerator/getresumemode/
// createiterresultobj/createasyncgeneratorobj/asyncgeneratorresolve/asyncgeneratorreject/
// getasynciterator/getiterator/getpropiterator/getnextpropname/apply/getunmappedargs/
// copyrestargs/starrayspread/newobjapply。
// 注：getresumeoffset/closeiterator 在本工具链实测不可达（见 docs/BENCHMARK.md）。
export function* tsCountUp(limit: number): IterableIterator<number> {
  for (let i = 0; i < limit; i++) {
    yield i;
  }
}

export function* tsDelegating(): IterableIterator<number> {
  yield 0;
  yield* tsCountUp(3);
  return 9;
}

export async function* tsAsyncTicks(n: number): AsyncGenerator<number, void, undefined> {
  for (let i = 0; i < n; i++) {
    yield i * 10;
  }
}

export function tsManualNext(): string {
  const g = tsCountUp(3);
  let collected = '';
  let r = g.next();
  while (!r.done) {
    collected += `${r.value},`;
    r = g.next();
  }
  return `manual=${collected}ret=${r.value}`;
}

export function tsForOfSum(): number {
  let sum = 0;
  for (const v of tsDelegating()) {
    sum += v;
  }
  return sum;
}

export function tsForOfClose(): number {
  // break 提前退出触发迭代器 return()（closeiterator）
  let closed = 0;
  const it = {
    [Symbol.iterator]() {
      let i = 0;
      return {
        next: (): { value: number, done: boolean } => ({ value: i++, done: false }),
        return: (): { value: number, done: boolean } => {
          closed = 1;
          return { value: 0, done: true };
        }
      };
    }
  };
  let first = -1;
  for (const v of it) {
    first = v;
    break;
  }
  return closed * 100 + first;
}

export async function tsForAwaitTotal(): Promise<number> {
  let total = 0;
  for await (const v of tsAsyncTicks(3)) {
    total += v;
  }
  return total;
}

export function tsForInKeys(o: object): string {
  let keys = '';
  for (const k in o) {
    keys += k;
  }
  return keys;
}

export function tsForInSum(o: Record<string, number>): number {
  let total = 0;
  for (const k in o) {
    total += o[k];
  }
  return total;
}

function sum3(a: number, b: number, c: number): number {
  return a + b + c;
}

export function tsSpreadCall(): number {
  const args: [number, number, number] = [1, 2, 3];
  return sum3(...args) + sum3.apply(null, [4, 5, 6]);
}

export function tsRestLen(...rest: number[]): number {
  // arguments（getunmappedargs）
  return rest.length + arguments.length;
}

export function tsArraySpread(): number {
  const head: number[] = [1, 2];
  const tail: number[] = [3, 4];
  const merged: number[] = [0, ...head, ...tail, 5];
  return merged.length * 1000 + merged.reduce((s: number, v: number): number => s + v, 0) % 100;
}

export function tsNewSpread(): number {
  class Pair {
    constructor(public a: number, public b: number) {
    }
  }
  const args: [number, number] = [3, 4];
  const p = new Pair(...args);
  return p.a * 10 + p.b;
}

// 编译期覆盖用（callthis1 非 withname 形态）：ArkTS 运行时禁止动态索引方法调用（TypeError），
// 页面仅以 typeof 引用防 tree-shake，不得真正调用。
export function tsDynamicMethod(): string {
  const o = {
    greet(prefix: string): string {
      return `${prefix}dyn`;
    }
  };
  const m = 'greet';
  return o[m]('hi-');
}

export function tsDestruct(): number {
  const arr: number[] = [10, 20, 30];
  const [p, , q] = arr;
  const obj = { x: 1, y: 2 };
  const { x, y } = obj;
  return p + q + x + y;
}

export function tsSymbolKey(): string {
  const s = Symbol('bench');
  const o: Record<symbol, number> = {};
  o[s] = 7;
  return `${typeof s}:${o[s]}`;
}

export function tsGenResumeWithArg(): string {
  // generator 带值恢复 / return 带值 / throw —— 观察是否 emit 非 withname 的 callthis1
  function* echo(): Generator<number, number, number> {
    const got = yield 1;
    yield got === undefined ? -1 : got;
    return 99;
  }
  const g = echo();
  g.next();
  const second = g.next(42);
  const fin = g.return(7);
  let threw = 'no';
  const g2 = echo();
  g2.next();
  try {
    g2.throw(new Error('stop'));
  } catch (e) {
    threw = 'caught';
  }
  return `second=${second.value} fin=${fin.done ? fin.value : 'nd'} ${threw}`;
}
