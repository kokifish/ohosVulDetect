// 语法糖压力（.ts，arkts-* 严格 lint 只查 .ets）：访问器族/私有品牌检查/逻辑赋值/
// switch fallthrough/标签循环/链式三元/逗号表达式/static 块/async generator for-await/
// BigInt 与数值形态/解构交换与计算键简写/函数式链。全部运行时安全，页面逐项展示结果。
// 指令视角：多数糖被 es2abc 降级为通用指令（isin/ldobjbyname/stobjbyvalue...），
// 本文件的价值在于"复杂源码 → 简单 IR"的对照样本（反编译器需还原语义而非字面形态）。

// 访问器族：get/set + 静态 get + super 访问器 + 对象字面量 getter/方法简写内的 this。
class AccBase {
  get val(): number { return 1; }
}
class AccSub extends AccBase {
  private _v: number = 3;
  get val(): number { return super.val + this._v; }
  set v(x: number) { this._v = x; }
  static SV: number = 4;
  static get sv2(): number { return AccSub.SV; }
}
export function sugarAccessors(): string {
  const a = new AccSub();
  a.v = 7;
  const o = { k: 5, get kk(): number { return this.k; }, m(): number { return this.k + 1; } };
  return `acc=${a.val}/${AccSub.sv2}/${o.kk + o.m()}`;
}

// 私有字段品牌检查（#s in p → isin）+ 可选下标 a?.[i] + 逻辑赋值三连 + Boolean 回调。
export class Priv {
  #s: number = 1;
  static has(p: Priv): boolean { return #s in p; }
  get s(): number { return this.#s; }
}
export function sugarPrivLogic(xs: (number | undefined)[]): string {
  const kept = xs.filter(Boolean);
  let f = false;
  f &&= kept.length > 0;
  f ||= kept.length > 1;
  let nz: number | undefined;
  nz ??= kept.length;
  const arr: number[] | undefined = [1, 2, 3];
  const oe = arr?.[1] ?? -1;
  return `priv=${Priv.has(new Priv())}${new Priv().s} f=${f} nz=${nz} oe=${oe}`;
}

// 控制流糖：switch fallthrough + do-while + 标签 break + 链式三元 + for 更新位的逗号表达式。
export function sugarFlow(x: number): string {
  let acc = 0;
  switch (x % 3) {
    case 0: acc += 1; // fallthrough
    case 1: acc += 2; break;
    default: acc += 4;
  }
  let n = 0;
  do { n += 1; } while (n < 3);
  let hit = '';
  outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i * j === 2) { hit = `${i},${j}`; break outer; }
    }
  }
  const t = x > 1 ? (x > 5 ? 'big' : 'mid') : 'small';
  let comma = 0;
  for (let i = 0; i < 2; comma += i, i++) { void comma; }
  return `sw=${acc} do=${n} lab=${hit} ter=${t} comma=${comma}`;
}

// 数值与模板糖：BigInt 字面量 / 数值分隔符 / 指数 / ** / String.raw。
export function sugarNumbers(): string {
  const big = 9007199254740993n;
  const sep = 1_000_000;
  const exp = 1e3;
  const pow = 2 ** 10;
  const raw = String.raw`a\tb${sep}`;
  return `big=${big % 2n} sep=${sep} exp=${exp} pow=${pow} rawlen=${raw.length}`;
}

// static 静态块 + 类字段箭头函数内 super 方法调用（词法 super）。
export class Stat {
  static table: number[] = [];
  static { Stat.table.push(1, 2, 3); }
}
export class SupB {
  m(...a: number[]): number { return a.length; }
}
export class SupC extends SupB {
  call = (): number => super.m(1, 2, 3, 4, 5, 6);
}
export function sugarStaticSuper(): string {
  return `stat=${Stat.table.length} sup=${new SupC().call()}`;
}

// async generator + for-await-of + 标签提前 break（async 机器：getasynciterator/
// resumegenerator/getresumemode 链路）。
export async function* agNums(n: number): AsyncGenerator<number, void, undefined> {
  for (let i = 0; i < n; i++) { yield i; }
}
export async function sugarForAwait(): Promise<string> {
  let sum = 0;
  outer: for await (const v of agNums(5)) {
    sum += v;
    if (v === 2) { break outer; }
  }
  return `fa=${sum}`;
}

// 函数式链糖：entries/fromEntries/map/filter/join/flat/reduce/at(-1)。
export function sugarFunctional(m: Record<string, number>): string {
  const rows = Object.entries(m);
  const back: Record<string, number> = Object.fromEntries(rows);
  const arr = [1, 2, 3].map((v) => v * 2).filter((v) => v > 2).join(',');
  const nested = [[1, 2], [3]].flat().reduce((a, b) => a + b, 0);
  const at = [10, 20, 30].slice(-1)[0]; // Array.at 需 es2022 lib，用 slice 负索引糖替代
  return `ent=${rows.length} back=${back['a']} arr=${arr} flat=${nested} at=${at}`;
}

// 解构糖加深：嵌套解构 + 数组交换 + 剩余 + 属性/方法/计算键三连简写。
export function sugarDestruct(): string {
  const cfg = { a: { b: { c: 7 } }, d: 8, e: 9, f: 10 };
  const { a: { b: { c } }, d, ...rest } = cfg;
  let x = 1;
  let y = 2;
  [x, y] = [y, x];
  const key = 'dyn';
  const obj = { d, [`k_${key}`]: 1, m(): number { return 2; } };
  return `c=${c} d=${d} rest=${Object.keys(rest).length} swap=${x}${y} obj=${Object.keys(obj).length}`;
}

// new.target 的箭头捕获（构造器隐参 vs 词法捕获的对照形态）。
export class NT {
  r: number;
  constructor() {
    const f = (): number => (new.target ? 1 : 0);
    this.r = f();
  }
}
export function sugarNewTarget(): string {
  return `nt=${new NT().r}`;
}
