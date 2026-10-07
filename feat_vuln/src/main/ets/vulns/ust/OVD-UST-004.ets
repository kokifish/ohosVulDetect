// VULN: OVD-UST-004 明文凭据经深继承链落盘（CWE-312）
// cred 字段定义在基类，取值经 Mid→Leaf 两级方法覆盖 + super 逐级上溯——
// 字面量物化与落盘分处不同函数块，检测须解析 extends 链上的字段归属，
// 而非成员名匹配（release 下成员名照常混淆）。孪生 004S 同构仅聚合。
import { fileIo as fs } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

const TOKEN4 = 'ovd_ust4_tok_c58e02';

class Ust4Base {
  protected cred: string = '';
  seed(v: string): void {
    this.cred = v;
  }
  carryRaw(): string {
    return this.cred;
  }
}

class Ust4Mid extends Ust4Base {
  carry(): string {
    return this.carryRaw();
  }
}

class Ust4Leaf extends Ust4Mid {
  carry(): string {
    return super.carry();
  }
}

export function ovdUst4Source(): string {
  const leaf = new Ust4Leaf();
  leaf.seed(TOKEN4);
  return leaf.carry();
}

export function ovdUst4Store(ctx: common.Context, v: string): string {
  const f = fs.openSync(ctx.filesDir + '/ovd_ust4_chain.txt',
    fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
  fs.writeSync(f.fd, v);
  fs.closeSync(f);
  try {
    fs.unlinkSync(ctx.filesDir + '/ovd_ust4_chain.txt');
  } catch (e) {
    // 已存在性不一致不阻塞
  }
  return `ust4 chain-sink wrote ${v.length}B`;
}

export function ovdUst004(ctx: common.Context): string {
  return ovdUst4Store(ctx, ovdUst4Source());
}
