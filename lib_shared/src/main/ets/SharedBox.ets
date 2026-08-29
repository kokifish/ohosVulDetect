export class SharedBox {
  private count: number = 0;

  bump(): number {
    this.count += 1;
    return this.count;
  }

  get value(): number {
    return this.count;
  }
}

export function hspFormat(prefix: string, n: number): string {
  return `${prefix}#${n}`;
}
