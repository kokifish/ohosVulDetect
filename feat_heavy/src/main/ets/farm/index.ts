// index.ts — feat_heavy 注册表与抽样器（勿手改）

import { reg_0000, rega_0000 } from './biz/Biz0000';
import { areg_00 } from './apiwrap/Ovw00';
import { areg_01 } from './apiwrap/Ovw01';
import { areg_02 } from './apiwrap/Ovw02';
import { areg_03 } from './apiwrap/Ovw03';
import { areg_04 } from './apiwrap/Ovw04';
import { areg_05 } from './apiwrap/Ovw05';
import { areg_06 } from './apiwrap/Ovw06';
import { aregdyn } from './apiwrap/OvwDyn';
import { asafe_00 } from './apiwrap/Ovw00';
import { asafe_01 } from './apiwrap/Ovw01';
import { asafe_02 } from './apiwrap/Ovw02';
import { asafe_03 } from './apiwrap/Ovw03';
import { asafe_04 } from './apiwrap/Ovw04';
import { asafe_05 } from './apiwrap/Ovw05';
import { asafe_06 } from './apiwrap/Ovw06';
import { kreg } from './kitwrap/Ktw';
import { dreg } from './kitwrap/KtwDyn';

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;
export type ApiFn = (seed: number) => string;
export type ADynFn = (seed: number) => Promise<string>;
export type KitFn = (seed: number) => string;
export type DKFn = (seed: number) => Promise<string>;

let cBizCache: BizFn[] | null = null;
export function collectBiz(): BizFn[] {
  if (cBizCache === null) {
    const regs: Array<() => BizFn[]> = [reg_0000];
    const all: BizFn[] = [];
    for (const r of regs) {
      const a: BizFn[] = r();
      for (const f of a) { all.push(f); }
    }
    cBizCache = all;
  }
  return cBizCache;
}

let cBizaCache: ABizFn[] | null = null;
export function collectBiza(): ABizFn[] {
  if (cBizaCache === null) {
    const regs: Array<() => ABizFn[]> = [rega_0000];
    const all: ABizFn[] = [];
    for (const r of regs) {
      const a: ABizFn[] = r();
      for (const f of a) { all.push(f); }
    }
    cBizaCache = all;
  }
  return cBizaCache;
}

let cApiCache: ApiFn[] | null = null;
export function collectApi(): ApiFn[] {
  if (cApiCache === null) {
    const regs: Array<() => ApiFn[]> = [areg_00, areg_01, areg_02, areg_03, areg_04, areg_05, areg_06];
    const all: ApiFn[] = [];
    for (const r of regs) {
      const a: ApiFn[] = r();
      for (const f of a) { all.push(f); }
    }
    cApiCache = all;
  }
  return cApiCache;
}

let cApidynCache: ADynFn[] | null = null;
export function collectApidyn(): ADynFn[] {
  if (cApidynCache === null) {
    const all: ADynFn[] = aregdyn();
    cApidynCache = all;
  }
  return cApidynCache;
}

let cKitCache: KitFn[] | null = null;
export function collectKit(): KitFn[] {
  if (cKitCache === null) {
    const all: KitFn[] = kreg();
    cKitCache = all;
  }
  return cKitCache;
}

let cKitdynCache: DKFn[] | null = null;
export function collectKitdyn(): DKFn[] {
  if (cKitdynCache === null) {
    const all: DKFn[] = dreg();
    cKitdynCache = all;
  }
  return cKitdynCache;
}

export async function heavyBizSample(stride: number): Promise<string> {
  const all: BizFn[] = collectBiz();
  let acc: number = 0;
  let calls: number = 0;
  for (let i = 0; i < all.length; i += stride) {
    const res: string = all[i]((i * 131) % 99991, 'smpl');
    acc = (acc + res.length * 7) % 1000000007;
    calls++;
  }
  const aall: ABizFn[] = collectBiza();
  let acalls: number = 0;
  for (let i = 0; i < aall.length && acalls < 6; i += stride) {
    const res: string = await aall[i]((i * 137) % 99991, 'smpl');
    acc = (acc + res.length * 11) % 1000000007;
    acalls++;
  }
  return 'biz n=' + all.length.toString() + ' calls=' + calls.toString()
    + ' async=' + acalls.toString() + ' acc=' + acc.toString();
}

export function heavyApiSample(): string {
  // 只抽样 SAFE 白名单包装（同步系统 API 可能在主线程长阻塞，全量仅存在于 abc）
  const safe0: ApiFn[] = asafe_00();
  const safe1: ApiFn[] = asafe_01();
  const safe2: ApiFn[] = asafe_02();
  const safe3: ApiFn[] = asafe_03();
  const safe4: ApiFn[] = asafe_04();
  const safe5: ApiFn[] = asafe_05();
  const safe6: ApiFn[] = asafe_06();
    const all: ApiFn[] = [...safe0, ...safe1, ...safe2, ...safe3, ...safe4, ...safe5, ...safe6];
  let acc: number = 0;
  let calls: number = 0;
  for (let i = 0; i < all.length; i++) {
    const res: string = all[i]((i * 139) % 99991);
    acc = (acc + res.length * 13) % 1000000007;
    calls++;
  }
  return 'api safe=' + all.length.toString() + ' total=' + collectApi().length.toString()
    + ' acc=' + acc.toString();
}

export async function heavyApiDynSample(max: number): Promise<string> {
  const all: ADynFn[] = collectApidyn();
  const picks: ADynFn[] = [];
  for (let i = 0; i < all.length && picks.length < max; i += 29) {
    picks.push(all[i]);
  }
  let ok: number = 0;
  let err: number = 0;
  for (const p of picks) {
    const r: string = await p((picks.indexOf(p) * 163) % 99991);
    if (r.indexOf('|err|') >= 0) { err++; } else { ok++; }
  }
  return 'apidyn n=' + all.length.toString() + ' ok=' + ok.toString()
    + ' err=' + err.toString();
}

export function heavyKitSample(): string {
  const all: KitFn[] = collectKit();
  let acc: number = 0;
  for (let i = 0; i < all.length; i += 11) {
    const res: string = all[i]((i * 149) % 99991);
    acc = (acc + res.length * 17) % 1000000007;
  }
  return 'kit n=' + all.length.toString() + ' acc=' + acc.toString();
}

export async function heavyKitDynSample(max: number): Promise<string> {
  const all: DKFn[] = collectKitdyn();
  const picks: DKFn[] = [];
  for (let i = 0; i < all.length && picks.length < max; i += 7) {
    picks.push(all[i]);
  }
  let ok: number = 0;
  let err: number = 0;
  let s: number = 0;
  for (const p of picks) {
    const r: string = await p((s * 151) % 99991);
    s++;
    if (r.indexOf('|err|') >= 0) { err++; } else { ok++; }
  }
  return 'kitdyn n=' + all.length.toString() + ' ok=' + ok.toString()
    + ' err=' + err.toString();
}

export function heavyCounts(): string {
  return 'biz=' + collectBiz().length.toString()
    + ' biza=' + collectBiza().length.toString()
    + ' api=' + collectApi().length.toString()
    + ' kit=' + collectKit().length.toString()
    + ' kitdyn=' + collectKitdyn().length.toString();
}
