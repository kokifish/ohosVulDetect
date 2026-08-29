import { collections } from '@kit.ArkTS';

// @Concurrent 函数（taskpool 跨线程调用形态）+ @Sendable 类/集合。
@Concurrent
export function heavySum(n: number): number {
  let s = 0;
  for (let i = 0; i < n; i += 1) {
    s += i;
  }
  return s;
}

@Sendable
export class SendablePoint {
  x: number = 0;
  y: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  norm(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

@Concurrent
export function pointNorm(p: SendablePoint): number {
  return p.norm();
}

@Concurrent
export function sumSendableArray(arr: collections.Array<number>): number {
  let s = 0;
  for (let i = 0; i < arr.length; i += 1) {
    s += arr[i];
  }
  return s;
}
