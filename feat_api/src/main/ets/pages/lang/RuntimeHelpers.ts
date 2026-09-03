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
