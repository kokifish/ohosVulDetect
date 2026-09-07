// supercallarrowrange / wide.supercallarrowrange：箭头函数内的 super(...) 调用。
// 该形态在 .ets/.ts 是编译期错误（TS2346：super() 不得出现在嵌套函数中），但纯 .js（无类型
// 注解）按 JS 语义完全合法——es2panda 仅在 .js 下发射 supercallarrow 家族（探针实证，
// 见 docs/BENCHMARK.md 第五轮节）：
//   (...a) => super(...a)  → supercallspread（转发形态）
//   () => super(1,2,3,4)   → supercallarrowrange（≥4 实参的 range 形态）
//   () => super(0,...,130) → wide.supercallarrowrange（实参数 >127 切 wide；字面量必须显式列出，
//                             spread 转发只会发 supercallspread）
// .js 禁类型注解；返回值经 RuntimeHelpers.ts 的 tsArrowSuper 接线展示。
class ArrowSupBase {
  constructor(...a) { this.n = a.length; }
}

export function arrowSuperBase() {
  class B extends ArrowSupBase {
    constructor() {
      const f = (...a) => super(...a);
      f(1, 2, 3, 4);
    }
  }
  class D extends ArrowSupBase {
    constructor() { const h = () => super(1, 2, 3, 4); h(); }
  }
  return new B().n + new D().n;   // 4 + 4 = 8
}

export function arrowSuperWide() {
  class C extends ArrowSupBase {
    constructor() { const g = () => super(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130); g(); }
  }
  return new C().n;   // 131
}
