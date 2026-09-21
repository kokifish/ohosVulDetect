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

// 数字字符串键的静态字段：key 经 ToPropertyKey 转 int64 → callruntime.definefieldbyindex
// （es2panda 静态/private 字段无条件走类 initializer；实例字段需 --use-define-semantic，
// hvigor 的 .ets 管线即 define 语义。计算键 [n] 走 definefieldbyvalue 是另一条路径）。
export class NumKeyStatic {
  static '9': number = 9;
  static '22': number = 11;
}
export function sugarNumericKeys(): number {
  return (NumKeyStatic as ESObject)['9'] + (NumKeyStatic as ESObject)['22'];
}

// 弱引用容器族：WeakMap/WeakSet/WeakRef（键弱持有，deref 活对象判定）。
// 全部 try/catch 包裹：弱引用/正则高级语义若运行时未实现则返回 err 标记而非崩溃。
export function sugarWeakColls(k: number): string {
  try {
    const wm = new WeakMap<object, number>();
    const k1: object = { id: k };
    wm.set(k1, k);
    const ws = new WeakSet<object>();
    const k2: object = { id: k + 1 };
    ws.add(k2);
    const wr = new WeakRef(k2);
    const deref = wr.deref();
    const hit = deref === k2;
    return `wm=${wm.get(k1)} ws=${ws.has(k2)} deref=${hit}`;
  } catch (e) {
    return `weak-err=${(e as Error).message?.length ?? -1}`;
  }
}

// Proxy 拦截 get/set + Reflect.ownKeys/has/apply（元编程内置面）。
export function sugarProxyReflect(x: number): string {
  try {
    const h: Record<string, number> = {};
    const p = new Proxy(h, {
      get(t: Record<string, number>, key: string | symbol): number {
        const v = t[key as string];
        return v === undefined ? -1 : v;
      },
      set(t: Record<string, number>, key: string | symbol, val: number): boolean {
        t[key as string] = val + 1;
        return true;
      },
    });
    p['v'] = x;
    const n = Reflect.ownKeys(h).length;
    const has = Reflect.has(h, 'v');
    const applied = Reflect.apply((a: number, b: number): number => a + b, null, [1, 2]);
    return `px=${p['v']}/${n}/${has}/${applied}`;
  } catch (e) {
    return `proxy-err=${(e as Error).message?.length ?? -1}`;
  }
}

// RegExp 高级形态：具名捕获组 / 后行断言 / 先行断言 / dotAll 标志。
export function sugarRegexAdv(s: string): string {
  try {
    const named = /(?<y>\d{4})-(?<m>\d{2})/.exec(s);
    const g = named?.groups as Record<string, string> | undefined;
    const behind = /(?<=a)b/.test('xab');
    const ahead = /a(?=b)/.test('ab');
    const dotAll = /a.b/s.test('a\nb');
    return `re=${g?.['y'] ?? 'none'}${g?.['m'] ?? 'none'} behind=${behind} ahead=${ahead} dotall=${dotAll}`;
  } catch (e) {
    return `regex-err=${(e as Error).message?.length ?? -1}`;
  }
}
