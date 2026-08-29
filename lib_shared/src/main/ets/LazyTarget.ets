// 动态 import() 的目标模块：只在运行时按需加载。
export function lazyDouble(n: number): number {
  return n * 2;
}

export function lazyGreet(name: string): string {
  return `hi ${name} from lib_shared lazy target`;
}
