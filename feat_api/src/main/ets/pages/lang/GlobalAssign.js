// trystglobalbyname：对未声明标识符赋值。ArkTS 运行时该指令无 sloppy 自动建全局语义
// （global record 与 global object own 属性都未命中时抛 ReferenceError），因此必须先经
// tsGlobalRef 预置 globalThis.ovdUndeclaredGlobal 同名属性，赋值命中 own 属性分支才成功。
export function globalAssignRun() {
  ovdUndeclaredGlobal = 42;
  return ovdUndeclaredGlobal;
}

// throw.constassignment：JS 中 const 重赋值是运行时 TypeError，es2abc 为其发射专用
// throw 指令（探针实证，见 docs/BENCHMARK.md P1 轮）。返回 'const' 即指令在运行时抛出被捕获。
export function constAssignRun() {
  const c = 1;
  try {
    c = 2;
    return 'ok' + c;
  } catch (e) {
    return 'const';
  }
}
