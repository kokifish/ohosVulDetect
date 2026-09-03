import { SendablePoint, heavySum } from './HeavyCalc';
import lazy { pointNorm } from './HeavyCalc';

// Sendable 指令覆盖实验室：每个形态对应一类 callruntime.*sendable* 指令（见 docs/BENCHMARK.md）。
// 规则（es2panda：@Sendable → "use sendable" 上下文；@Concurrent → "use concurrent"，不走 sendable 路径）：
// @Sendable 函数可引用 import 绑定、局部变量、本模块顶层 @Sendable 类，以及本模块导出变量（API18+）；
// @Concurrent 函数只能用 import 绑定与局部变量，import 访问编译为普通 ldexternalmodulevar。

export const labScale: number = 3;

// 形态 1：本模块 @Sendable 类 → func_main_0 中 callruntime.definesendableclass +
// callruntime.newsendableenv + callruntime.stsendablevar（槽位 = 类定义顺序）；
// @Sendable 函数内引用 → callruntime.ldsendablevar。
@Sendable
class LabLocalPoint {
  x: number = 0;
  y: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  norm(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  // 形态 2：@Sendable 类方法内引用自身类 → callruntime.ldsendableclass（imm = 模块内 sendable 类序号）。
  clone(): LabLocalPoint {
    return new LabLocalPoint(this.x, this.y);
  }
}

@Sendable
export function sendLocalClass(): number {
  const p = new LabLocalPoint(3, 4);
  return p.clone().norm();
}

// 形态 3：@Sendable 类静态成员（static_initializer 经 definemethod 生成，访问仍走 ldsendablevar）。
@Sendable
class LabStatics {
  static scale: number = 2;

  static double(v: number): number {
    return v * 2;
  }
}

@Sendable
export function sendStaticUse(): number {
  return LabStatics.double(21) + LabStatics.scale;
}

// 形态 4：@Sendable 函数读本模块顶层导出变量 → callruntime.ldsendablelocalmodulevar。
@Sendable
export function sendReadLocalVar(): number {
  return labScale;
}

// 形态 5：@Sendable 函数引用其他模块的 import 绑定 → callruntime.ldsendableexternalmodulevar。
@Sendable
export function sendUseImport(): number {
  const p = new SendablePoint(3, 4);
  return p.norm();
}

@Sendable
export function sendCallImport(): number {
  return heavySum(10);
}

// 形态 6：`import lazy` 绑定 → sendable 侧 callruntime.ldlazysendablemodulevar，
// 普通函数侧 callruntime.ldlazymodulevar。
@Sendable
export function sendLazyImport(p: SendablePoint): number {
  return pointNorm(p);
}

export function normalLazyUse(p: SendablePoint): number {
  return pointNorm(p) + 1;
}

// 形态 7（负对照）：@Sendable 函数内闭包捕获局部变量，仍走普通 newlexenv/stlexvar，
// 不产生 sendable env 指令——本 SDK 实测 sendable env 仅装模块级 @Sendable 类绑定。
@Sendable
export function sendClosure(): number {
  let base = 10;
  const add = (v: number): number => base + v;
  return add(5) + base;
}

// 形态 8：@Sendable async 函数（FunctionKind::SENDABLE_ASYNC_FUNCTION）。
@Sendable
export async function sendAsyncFetch(base: number): Promise<number> {
  const mul = (v: number): number => v * 2 + base;
  return mul(base);
}
