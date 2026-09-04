// 仅编译覆盖：对未声明标识符赋值 → trystglobalbyname。esm 严格模式运行时抛 ReferenceError，
// 页面只以 typeof 引用防 tree-shake，不得调用（RuntimeHelpers.ts 的 tsGlobalRef 桥接）。
export function globalAssignRun() {
  ovdUndeclaredGlobal = 42;
  return ovdUndeclaredGlobal;
}
