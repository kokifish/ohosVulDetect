// 类运行时 helper 与杂项压力（.ts；arkts-* 在 .ets 禁私有字段/动态键/解构 rest 等）。
// 目标指令：createprivateproperty/defineprivateproperty/stprivateproperty/ldprivateproperty/
// callinit/definefieldbyvalue/copydataproperties/createobjectwithexcludedkeys/
// ldsuperbyvalue/stsuperbyvalue/supercallspread/callthisrange/delobjprop/
// throw.patternnoncoercible/gettemplateobject/setobjectwithproto/tonumber/debugger。
// 注：tsCallRange 的动态函数调用若运行时报错则页面改为 typeof 引用（编译覆盖）。
class Priv {
  #x: number;
  #y: string = 's';

  constructor(x: number) {
    this.#x = x;
  }

  bump(v: number): number {
    this.#x += v;
    return this.#x;
  }

  same(other: Priv): boolean {
    return this.#x === other.#x && this.#y === other.#y;
  }
}

class IndexedBase {
  [k: string]: any;

  constructor(public a: number, public b: number) {
  }
}

class IndexedDerived extends IndexedBase {
  readIndex(k: string): any {
    return super[k];
  }

  writeIndex(k: string, v: number): void {
    super[k] = v;
  }

  constructor(pair: [number, number]) {
    super(...pair);
  }
}

function tagFn(strings: TemplateStringsArray, v: number): string {
  return `${strings[0]}[${v}]${strings[1]}`;
}

export function tsPrivate(): string {
  const p = new Priv(10);
  const bumped = p.bump(5);
  return `priv=${bumped} same=${p.same(new Priv(15))}`;
}

export function tsObjectHelpers(): string {
  const k = 'dyn';
  const o1 = { [k]: 3 };
  const base = { a: 1 };
  const o2 = { ...base, b: 2 };
  const { a, ...rest } = base;
  const rec: Record<string, number> = { 'x': 1, 'y': 2 };
  delete rec['y'];
  return `computed=${o1['dyn']} spread=${o2.a + o2.b} rest=${a + Object.keys(rest).length} del=${Object.keys(rec).length}`;
}

export function tsSuperIndex(): string {
  const d = new IndexedDerived([3, 4]);
  d.writeIndex('z', 7);
  return `superidx=${d.readIndex('z') ?? 'none'} own=${d.a + d.b}`;
}

export function tsCallRange(): number {
  const fns: ((a: number, b: number, c: number, d2: number) => number)[] = [
    (a, b, c, d2) => a + b + c + d2
  ];
  return fns[0](1, 2, 3, 4);
}

export function tsTemplateAndMisc(s: string): string {
  const n = +s;
  const t = tagFn`a${n}b`;
  const proto: object = { m: 1 };
  const withProto = { __proto__: proto, a: 1 };
  const anyV: any = { q: 9 };
  const { q } = anyV;
  debugger;
  return `tonumber=${n} tpl=${t} proto=${(withProto as any).m} deany=${q}`;
}

// callruntime.topropertykey：类体计算属性名（对象字面量计算键不触发，只走 definefieldbyvalue）。
// 计算方法同时产出 stownbyvaluewithnameset；不通过 c[k]() 调用（运行时禁动态方法名调用）。
export function tsComputedClassKey(k: string): string {
  class WithComputedMethod {
    [k](): number {
      return 7;
    }
  }
  const m = new WithComputedMethod() as any;
  return `${typeof m[k]}:${typeof m[k] === 'function'}`;
}

// stownbynamewithnameset：非计算键同时含 "." 与 "\" 且值为匿名函数（es2panda IsLegalNameFormat
// 的历史行为，源码级实证；见 docs/BENCHMARK.md）。不动态取值，用 Object.keys 验证。
export function tsNameSet(): string {
  const o = { 'a.b\\c': function (): number {
    return 1;
  } };
  return `nameset=${Object.keys(o).length}`;
}

import { globalAssignRun } from './GlobalAssign';

// trystglobalbyname（GlobalAssign.js）运行化：先预置 globalThis 同名属性（ldglobal+stobjbyname，
// 必成功），再调用赋值函数——trystglobalbyname 命中 global object own 属性分支，不再抛
// ReferenceError（运行时 handler 语义实测）。
export function tsGlobalRef(): string {
  globalThis['ovdUndeclaredGlobal' as ESObject] = 7;
  const r: number = globalAssignRun() as number;
  return `global=${r} after=${globalThis['ovdUndeclaredGlobal' as ESObject]}`;
}

// callthis2/3（非 withname）：成员 tag 的 tagged template——gettemplateobject 打断了
// callee 与 ldobjbyname 的相邻性，不再转 withname；N = 替换表达式数 + 1。
export function tsMemberTagCalls(): string {
  const o = {
    t2(strings: TemplateStringsArray, v: number): number {
      return strings.length + v;
    },
    t3(strings: TemplateStringsArray, a: number, b: number): number {
      return strings.length + a + b;
    }
  };
  const r2 = o.t2`a${1}b`;
  const r3 = o.t3`a${1}b${2}c`;
  return `tag=${r2}/${r3}`;
}
