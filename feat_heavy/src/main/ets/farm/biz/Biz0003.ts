// Biz0003.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec3 { id: number; tag: string; score: number; }

class Unit3 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0003_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 393) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (acc % 27 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-5'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  const ix7: number = buf.indexOf('p3');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 191) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const ix14: number = buf.indexOf('p3');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  acc = acc + 511 - (acc % 60);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 167) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  for (let i19 = 0; i19 < 6; i19++) {
    acc = (acc + i19 * 13 + 467) % 100003;
  }
  m01.set('k20', acc % 997);
  try { if (acc % 29 === 18) { throw new Error('synthetic-21'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q22:${acc % 97}`;
  acc = (acc * 31 + 7194) % 65521;
  const rc24: Rec3 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  if (acc % 5 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  if (acc % 16 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 157) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  if (acc % 20 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const rc33: Rec3 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 180) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 30) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 10) { throw new Error('synthetic-39'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'vendor40-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-42'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 17) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  for (let i49 = 0; i49 < 3; i49++) {
    acc = (acc + i49 * 13 + 796) % 100003;
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 7032) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 394) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const rc1: Rec3 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 118) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  const rc5: Rec3 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  m01.set('k6', acc % 997);
  buf += `q7:${acc % 97}`;
  buf += 'payout8-' + acc.toString();
  const ix9: number = buf.indexOf('p3');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  m01.set('k10', acc % 997);
  const ix11: number = buf.indexOf('p3');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  if (acc % 12 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 78) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += `q14:${acc % 97}`;
  try { if (acc % 29 === 9) { throw new Error('synthetic-15'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-16'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 98) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 8925) % 65521;
  m01.set('k21', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  buf += 'crate23-' + acc.toString();
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  acc = acc + 919 - (acc % 86);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  buf += `q27:${acc % 97}`;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const ix29: number = buf.indexOf('p3');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 9173) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-31'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const rc32: Rec3 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 125) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 112) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 66) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  buf += `q43:${acc % 97}`;
  acc = (acc * 31 + 8110) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  arr.push(acc % 1000);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  if (acc % 14 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3197) % 65521;
  const ix50: number = buf.indexOf('p3');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  buf += 'freight51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 395) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  if (acc % 28 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  acc = acc + 389 - (acc % 60);
  if (acc % 25 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const ix4: number = buf.indexOf('p3');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = acc + 359 - (acc % 24);
  acc = (acc * 31 + 9417) % 65521;
  acc = (acc * 31 + 7714) % 65521;
  const rc8: Rec3 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = acc + 749 - (acc % 77);
  const rc10: Rec3 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = acc + 618 - (acc % 59);
  acc = acc + 562 - (acc % 76);
  buf += `q13:${acc % 97}`;
  if (acc % 17 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  for (let i16 = 0; i16 < 9; i16++) {
    acc = (acc + i16 * 13 + 175) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 41) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 38) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  acc = acc + 217 - (acc % 42);
  acc = acc + 199 - (acc % 19);
  buf += 'balance21-' + acc.toString();
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  buf += 'vendor23-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  arr.push(acc % 1000);
  m01.set('k26', acc % 997);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  try { if (acc % 29 === 15) { throw new Error('synthetic-28'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 10 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  acc = acc + 654 - (acc % 85);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  acc = (acc * 31 + 4885) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 48) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 6; i35++) {
    acc = (acc + i35 * 13 + 533) % 100003;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-36'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q37:${acc % 97}`;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  arr.push(acc % 1000);
  try { if (acc % 29 === 15) { throw new Error('synthetic-43'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const ix44: number = buf.indexOf('p3');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  acc = (acc * 31 + 1539) % 65521;
  acc = acc + 980 - (acc % 37);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 396) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 95) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  const ix1: number = buf.indexOf('p3');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-2'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  if (acc % 16 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 139) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const ix8: number = buf.indexOf('p3');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  for (let i10 = 0; i10 < 7; i10++) {
    acc = (acc + i10 * 13 + 875) % 100003;
  }
  const ix11: number = buf.indexOf('p3');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-12'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 15 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const rc16: Rec3 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 61) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = acc + 528 - (acc % 29);
  m01.set('k20', acc % 997);
  buf += 'transit21-' + acc.toString();
  try { if (acc % 29 === 3) { throw new Error('synthetic-22'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-24'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  try { if (acc % 29 === 10) { throw new Error('synthetic-28'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i29 = 0; i29 < 7; i29++) {
    acc = (acc + i29 * 13 + 892) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 131) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 70) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  buf += `q36:${acc % 97}`;
  arr.push(acc % 1000);
  acc = acc + 923 - (acc % 60);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 90) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = acc + 507 - (acc % 81);
  if (acc % 6 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  for (let i42 = 0; i42 < 3; i42++) {
    acc = (acc + i42 * 13 + 580) % 100003;
  }
  arr.push(acc % 1000);
  for (let i44 = 0; i44 < 11; i44++) {
    acc = (acc + i44 * 13 + 63) % 100003;
  }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const rc46: Rec3 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  acc = (acc * 31 + 8818) % 65521;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const rc51: Rec3 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 397) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += 'depot2-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  if (acc % 11 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  m01.set('k9', acc % 997);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += `q12:${acc % 97}`;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  acc = acc + 142 - (acc % 72);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  if (acc % 31 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 138) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 714 - (acc % 15);
  buf += `q19:${acc % 97}`;
  const ix20: number = buf.indexOf('p3');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  buf += 'client22-' + acc.toString();
  buf += `q23:${acc % 97}`;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 5) { throw new Error('synthetic-25'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q26:${acc % 97}`;
  buf += 'policy27-' + acc.toString();
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  buf += 'order30-' + acc.toString();
  m01.set('k31', acc % 997);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 75) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += `q36:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  if (acc % 26 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 100) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 87) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  const ix45: number = buf.indexOf('p3');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += 'policy46-' + acc.toString();
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 79) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const ix48: number = buf.indexOf('p3');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  if (acc % 19 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  const ix50: number = buf.indexOf('p3');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const ix51: number = buf.indexOf('p3');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 398) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  buf += 'waybill0-' + acc.toString();
  if (acc % 27 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 137) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += 'customs5-' + acc.toString();
  const rc6: Rec3 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const ix7: number = buf.indexOf('p3');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 196) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  for (let i15 = 0; i15 < 11; i15++) {
    acc = (acc + i15 * 13 + 88) % 100003;
  }
  for (let i16 = 0; i16 < 8; i16++) {
    acc = (acc + i16 * 13 + 684) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 28) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  if (acc % 27 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  try { if (acc % 29 === 12) { throw new Error('synthetic-22'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 27) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  buf += 'rebate25-' + acc.toString();
  buf += `q26:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += `q28:${acc % 97}`;
  if (acc % 11 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  m01.set('k31', acc % 997);
  acc = acc + 362 - (acc % 12);
  const ix33: number = buf.indexOf('p3');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 106) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 18 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-36'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k37', acc % 997);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const rc39: Rec3 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 39) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 105) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  if (acc % 25 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (acc % 16 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = acc + 484 - (acc % 19);
  for (let i47 = 0; i47 < 3; i47++) {
    acc = (acc + i47 * 13 + 55) % 100003;
  }
  m01.set('k48', acc % 997);
  const ix49: number = buf.indexOf('p3');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  m01.set('k50', acc % 997);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 399) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  m01.set('k0', acc % 997);
  if (acc % 19 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  buf += 'refund2-' + acc.toString();
  const ix3: number = buf.indexOf('p3');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const rc4: Rec3 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  if (acc % 8 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (acc % 27 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  buf += 'region7-' + acc.toString();
  m01.set('k8', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  for (let i10 = 0; i10 < 6; i10++) {
    acc = (acc + i10 * 13 + 53) % 100003;
  }
  buf += `q11:${acc % 97}`;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += `q13:${acc % 97}`;
  const rc14: Rec3 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  try { if (acc % 29 === 17) { throw new Error('synthetic-16'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 143) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  m01.set('k19', acc % 997);
  const ix20: number = buf.indexOf('p3');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const ix21: number = buf.indexOf('p3');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += `q23:${acc % 97}`;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const ix28: number = buf.indexOf('p3');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  m01.set('k29', acc % 997);
  buf += 'refund30-' + acc.toString();
  const ix31: number = buf.indexOf('p3');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const rc32: Rec3 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 60) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  buf += `q36:${acc % 97}`;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  buf += 'client38-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (acc % 17 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-41'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q42:${acc % 97}`;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 181) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 64) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  acc = acc + 942 - (acc % 36);
  acc = (acc * 31 + 8929) % 65521;
  const ix48: number = buf.indexOf('p3');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  for (let i50 = 0; i50 < 6; i50++) {
    acc = (acc + i50 * 13 + 594) % 100003;
  }
  for (let i51 = 0; i51 < 5; i51++) {
    acc = (acc + i51 * 13 + 498) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 400) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  for (let i0 = 0; i0 < 4; i0++) {
    acc = (acc + i0 * 13 + 245) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  acc = acc + 858 - (acc % 22);
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const rc7: Rec3 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  acc = (acc * 31 + 7803) % 65521;
  buf += 'coupon9-' + acc.toString();
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  for (let i11 = 0; i11 < 6; i11++) {
    acc = (acc + i11 * 13 + 207) % 100003;
  }
  arr.push(acc % 1000);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = (acc * 31 + 4501) % 65521;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 143) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-18'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const ix19: number = buf.indexOf('p3');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 98) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 39) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  try { if (acc % 29 === 23) { throw new Error('synthetic-28'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = acc + 529 - (acc % 96);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const ix33: number = buf.indexOf('p3');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 98) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 391 - (acc % 26);
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  buf += `q37:${acc % 97}`;
  acc = acc + 281 - (acc % 68);
  const rc39: Rec3 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  if (acc % 23 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  acc = (acc * 31 + 3728) % 65521;
  acc = acc + 577 - (acc % 34);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 15) { throw new Error('synthetic-47'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  const ix48: number = buf.indexOf('p3');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += 'audit49-' + acc.toString();
  for (let i50 = 0; i50 < 10; i50++) {
    acc = (acc + i50 * 13 + 863) % 100003;
  }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 401) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 100) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-1'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  m01.set('k4', acc % 997);
  for (let i5 = 0; i5 < 5; i5++) {
    acc = (acc + i5 * 13 + 404) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const ix7: number = buf.indexOf('p3');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  m01.set('k8', acc % 997);
  const rc9: Rec3 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  acc = (acc * 31 + 1119) % 65521;
  m01.set('k11', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-13'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const ix14: number = buf.indexOf('p3');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const rc16: Rec3 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 60) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 16) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 13) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  try { if (acc % 29 === 3) { throw new Error('synthetic-20'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-21'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'invoice22-' + acc.toString();
  if (acc % 6 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-24'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q25:${acc % 97}`;
  buf += 'parcel26-' + acc.toString();
  const ix27: number = buf.indexOf('p3');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const rc29: Rec3 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  buf += `q30:${acc % 97}`;
  acc = (acc * 31 + 1017) % 65521;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 47) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 8481) % 65521;
  m01.set('k36', acc % 997);
  for (let i37 = 0; i37 < 12; i37++) {
    acc = (acc + i37 * 13 + 677) % 100003;
  }
  const rc38: Rec3 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  buf += 'region40-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  acc = acc + 815 - (acc % 54);
  buf += 'stocktake43-' + acc.toString();
  buf += 'customs44-' + acc.toString();
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  acc = acc + 306 - (acc % 7);
  const rc47: Rec3 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  arr.push(acc % 1000);
  for (let i51 = 0; i51 < 11; i51++) {
    acc = (acc + i51 * 13 + 301) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 402) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 155) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = acc + 530 - (acc % 89);
  acc = acc + 644 - (acc % 85);
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  m01.set('k7', acc % 997);
  const rc8: Rec3 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k10', acc % 997);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 97) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  acc = acc + 456 - (acc % 33);
  m01.set('k14', acc % 997);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 36) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  if (acc % 27 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 107) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  m01.set('k19', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  arr.push(acc % 1000);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  try { if (acc % 29 === 22) { throw new Error('synthetic-24'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const rc28: Rec3 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  buf += `q32:${acc % 97}`;
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 25) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 580 - (acc % 30);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const ix39: number = buf.indexOf('p3');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  buf += `q42:${acc % 97}`;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  m01.set('k44', acc % 997);
  try { if (acc % 29 === 21) { throw new Error('synthetic-45'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const rc47: Rec3 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  if (acc % 25 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0003_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0003_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0003_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 403) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  arr.push(acc % 1000);
  if (acc % 9 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  buf += `q2:${acc % 97}`;
  acc = acc + 710 - (acc % 83);
  if (acc % 29 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  arr.push(acc % 1000);
  if (acc % 19 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  m01.set('k8', acc % 997);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  if (acc % 9 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  acc = acc + 828 - (acc % 80);
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  for (let i13 = 0; i13 < 9; i13++) {
    acc = (acc + i13 * 13 + 550) % 100003;
  }
  const ix14: number = buf.indexOf('p3');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  if (acc % 26 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += 'region16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 199) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  acc = acc + 53 - (acc % 66);
  arr.push(acc % 1000);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const rc22: Rec3 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  acc = (acc * 31 + 2846) % 65521;
  buf += `q25:${acc % 97}`;
  for (let i26 = 0; i26 < 12; i26++) {
    acc = (acc + i26 * 13 + 370) % 100003;
  }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 30) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  acc = (acc * 31 + 5593) % 65521;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 58) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 113) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  acc = (acc * 31 + 5139) % 65521;
  acc = acc + 65 - (acc % 89);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 144) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-42'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  const rc43: Rec3 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  acc = acc + 557 - (acc % 32);
  arr.push(acc % 1000);
  acc = (acc * 31 + 9060) % 65521;
  if (acc % 22 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6998) % 65521;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += `q50:${acc % 97}`;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 404) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const rc2: Rec3 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  try { if (acc % 29 === 23) { throw new Error('synthetic-3'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k4', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  if (acc % 24 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const rc8: Rec3 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  buf += `q11:${acc % 97}`;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  for (let i13 = 0; i13 < 10; i13++) {
    acc = (acc + i13 * 13 + 299) % 100003;
  }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  try { if (acc % 29 === 17) { throw new Error('synthetic-15'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 38 - (acc % 94);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 75) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  if (acc % 12 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += `q21:${acc % 97}`;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  for (let i23 = 0; i23 < 9; i23++) {
    acc = (acc + i23 * 13 + 170) % 100003;
  }
  for (let i24 = 0; i24 < 12; i24++) {
    acc = (acc + i24 * 13 + 363) % 100003;
  }
  if (acc % 28 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = acc + 964 - (acc % 69);
  try { if (acc % 29 === 4) { throw new Error('synthetic-28'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const ix31: number = buf.indexOf('p3');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-32'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 145) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i36 = 0; i36 < 9; i36++) {
    acc = (acc + i36 * 13 + 805) % 100003;
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-37'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-38'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'journey39-' + acc.toString();
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  m01.set('k42', acc % 997);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  if (acc % 29 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  m01.set('k48', acc % 997);
  acc = acc + 566 - (acc % 49);
  acc = (acc * 31 + 8117) % 65521;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 405) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  try { if (acc % 29 === 18) { throw new Error('synthetic-0'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 735 - (acc % 22);
  arr.push(acc % 1000);
  m01.set('k3', acc % 997);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 22) { throw new Error('synthetic-5'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 303 - (acc % 31);
  const ix7: number = buf.indexOf('p3');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 52) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  m01.set('k13', acc % 997);
  for (let i14 = 0; i14 < 12; i14++) {
    acc = (acc + i14 * 13 + 721) % 100003;
  }
  const ix15: number = buf.indexOf('p3');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  const ix16: number = buf.indexOf('p3');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 173) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  for (let i19 = 0; i19 < 8; i19++) {
    acc = (acc + i19 * 13 + 50) % 100003;
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-20'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += 'vendor23-' + acc.toString();
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const rc26: Rec3 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  for (let i29 = 0; i29 < 5; i29++) {
    acc = (acc + i29 * 13 + 447) % 100003;
  }
  for (let i30 = 0; i30 < 8; i30++) {
    acc = (acc + i30 * 13 + 241) % 100003;
  }
  m01.set('k31', acc % 997);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 187) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 133) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = acc + 881 - (acc % 14);
  acc = acc + 166 - (acc % 46);
  for (let i38 = 0; i38 < 3; i38++) {
    acc = (acc + i38 * 13 + 235) % 100003;
  }
  buf += `q39:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += `q41:${acc % 97}`;
  m01.set('k42', acc % 997);
  buf += 'depot43-' + acc.toString();
  for (let i44 = 0; i44 < 11; i44++) {
    acc = (acc + i44 * 13 + 899) % 100003;
  }
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 57) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  acc = acc + 922 - (acc % 57);
  m01.set('k48', acc % 997);
  const ix49: number = buf.indexOf('p3');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 406) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  const rc0: Rec3 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  m01.set('k2', acc % 997);
  try { if (acc % 29 === 9) { throw new Error('synthetic-3'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const rc4: Rec3 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  if (acc % 8 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 32) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = (acc * 31 + 8236) % 65521;
  const rc8: Rec3 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = (acc * 31 + 272) % 65521;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 172) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 65) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 128) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  acc = acc + 269 - (acc % 73);
  if (acc % 28 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-22'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k23', acc % 997);
  arr.push(acc % 1000);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i27 = 0; i27 < 4; i27++) {
    acc = (acc + i27 * 13 + 801) % 100003;
  }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  m01.set('k32', acc % 997);
  buf += 'crate33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 57) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 148) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const rc37: Rec3 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  acc = acc + 901 - (acc % 36);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += 'vendor40-' + acc.toString();
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  if (acc % 14 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3851) % 65521;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  buf += `q45:${acc % 97}`;
  m01.set('k46', acc % 997);
  buf += `q47:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  for (let i49 = 0; i49 < 10; i49++) {
    acc = (acc + i49 * 13 + 402) % 100003;
  }
  m01.set('k50', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 407) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  acc = (acc * 31 + 5002) % 65521;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 147) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const rc2: Rec3 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  if (acc % 9 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  acc = acc + 395 - (acc % 30);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  buf += 'routeplan10-' + acc.toString();
  for (let i11 = 0; i11 < 12; i11++) {
    acc = (acc + i11 * 13 + 818) % 100003;
  }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  buf += `q13:${acc % 97}`;
  arr.push(acc % 1000);
  acc = (acc * 31 + 4881) % 65521;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 87) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 3075) % 65521;
  const ix19: number = buf.indexOf('p3');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (acc % 18 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  try { if (acc % 29 === 21) { throw new Error('synthetic-23'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const rc24: Rec3 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const rc25: Rec3 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const ix26: number = buf.indexOf('p3');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 34) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  acc = (acc * 31 + 1322) % 65521;
  acc = acc + 387 - (acc % 80);
  const ix32: number = buf.indexOf('p3');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 71) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  acc = acc + 151 - (acc % 95);
  for (let i42 = 0; i42 < 8; i42++) {
    acc = (acc + i42 * 13 + 426) % 100003;
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-43'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i44 = 0; i44 < 5; i44++) {
    acc = (acc + i44 * 13 + 462) % 100003;
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = acc + 334 - (acc % 76);
  buf += `q47:${acc % 97}`;
  buf += 'shelf48-' + acc.toString();
  m01.set('k49', acc % 997);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 408) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  buf += `q0:${acc % 97}`;
  const rc1: Rec3 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  buf += 'dispatch2-' + acc.toString();
  if (acc % 16 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = acc + 983 - (acc % 68);
  const ix5: number = buf.indexOf('p3');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 58) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const rc8: Rec3 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  buf += `q9:${acc % 97}`;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 174) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  for (let i11 = 0; i11 < 9; i11++) {
    acc = (acc + i11 * 13 + 973) % 100003;
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  try { if (acc % 29 === 14) { throw new Error('synthetic-13'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'order14-' + acc.toString();
  if (acc % 13 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 153) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const ix19: number = buf.indexOf('p3');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += `q20:${acc % 97}`;
  for (let i21 = 0; i21 < 10; i21++) {
    acc = (acc + i21 * 13 + 725) % 100003;
  }
  m01.set('k22', acc % 997);
  m01.set('k23', acc % 997);
  buf += 'ticket24-' + acc.toString();
  for (let i25 = 0; i25 < 8; i25++) {
    acc = (acc + i25 * 13 + 466) % 100003;
  }
  for (let i26 = 0; i26 < 11; i26++) {
    acc = (acc + i26 * 13 + 302) % 100003;
  }
  const rc27: Rec3 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  buf += 'shelf28-' + acc.toString();
  const rc29: Rec3 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  buf += 'shelf30-' + acc.toString();
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 34) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 142) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 12 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const rc36: Rec3 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  acc = (acc * 31 + 8713) % 65521;
  if (acc % 18 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 119) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const ix41: number = buf.indexOf('p3');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  buf += `q44:${acc % 97}`;
  m01.set('k45', acc % 997);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += 'carrier48-' + acc.toString();
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const ix50: number = buf.indexOf('p3');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 409) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  if (acc % 6 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  for (let i1 = 0; i1 < 10; i1++) {
    acc = (acc + i1 * 13 + 930) % 100003;
  }
  if (acc % 7 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  m01.set('k3', acc % 997);
  arr.push(acc % 1000);
  const ix5: number = buf.indexOf('p3');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  for (let i6 = 0; i6 < 12; i6++) {
    acc = (acc + i6 * 13 + 431) % 100003;
  }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  for (let i9 = 0; i9 < 5; i9++) {
    acc = (acc + i9 * 13 + 640) % 100003;
  }
  buf += 'bay10-' + acc.toString();
  acc = acc + 72 - (acc % 30);
  if (acc % 20 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 68) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  try { if (acc % 29 === 6) { throw new Error('synthetic-15'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 613 - (acc % 56);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 170) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 139) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  for (let i20 = 0; i20 < 5; i20++) {
    acc = (acc + i20 * 13 + 467) % 100003;
  }
  const ix21: number = buf.indexOf('p3');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  const rc23: Rec3 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  for (let i24 = 0; i24 < 4; i24++) {
    acc = (acc + i24 * 13 + 608) % 100003;
  }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  acc = acc + 629 - (acc % 61);
  for (let i27 = 0; i27 < 3; i27++) {
    acc = (acc + i27 * 13 + 536) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  try { if (acc % 29 === 7) { throw new Error('synthetic-29'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 29) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += 'pallet36-' + acc.toString();
  arr.push(acc % 1000);
  acc = (acc * 31 + 9171) % 65521;
  const rc39: Rec3 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  m01.set('k40', acc % 997);
  buf += `q41:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const rc43: Rec3 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  arr.push(acc % 1000);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 143) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += `q46:${acc % 97}`;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const ix49: number = buf.indexOf('p3');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 410) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  try { if (acc % 29 === 13) { throw new Error('synthetic-0'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const ix2: number = buf.indexOf('p3');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  acc = acc + 968 - (acc % 40);
  const rc4: Rec3 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  m01.set('k7', acc % 997);
  m01.set('k8', acc % 997);
  const rc9: Rec3 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  acc = acc + 578 - (acc % 81);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  for (let i13 = 0; i13 < 10; i13++) {
    acc = (acc + i13 * 13 + 938) % 100003;
  }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  for (let i15 = 0; i15 < 6; i15++) {
    acc = (acc + i15 * 13 + 77) % 100003;
  }
  acc = (acc * 31 + 3875) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 105) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 37) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  m01.set('k20', acc % 997);
  if (acc % 8 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  buf += `q23:${acc % 97}`;
  if (acc % 13 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  acc = (acc * 31 + 9179) % 65521;
  arr.push(acc % 1000);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-33'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 154) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'invoice35-' + acc.toString();
  m01.set('k36', acc % 997);
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  m01.set('k39', acc % 997);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  for (let i41 = 0; i41 < 9; i41++) {
    acc = (acc + i41 * 13 + 515) % 100003;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-42'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k43', acc % 997);
  for (let i44 = 0; i44 < 4; i44++) {
    acc = (acc + i44 * 13 + 166) % 100003;
  }
  acc = acc + 313 - (acc % 73);
  buf += `q46:${acc % 97}`;
  m01.set('k47', acc % 997);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 87) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  buf += `q49:${acc % 97}`;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 411) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  const ix0: number = buf.indexOf('p3');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  m01.set('k1', acc % 997);
  buf += 'ledger2-' + acc.toString();
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const rc5: Rec3 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += `q8:${acc % 97}`;
  const rc9: Rec3 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  acc = acc + 502 - (acc % 28);
  buf += 'parcel12-' + acc.toString();
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 38) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  if (acc % 17 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 130) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  acc = acc + 810 - (acc % 50);
  buf += 'policy24-' + acc.toString();
  try { if (acc % 29 === 5) { throw new Error('synthetic-25'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  const ix28: number = buf.indexOf('p3');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  buf += `q29:${acc % 97}`;
  acc = acc + 314 - (acc % 53);
  if (acc % 26 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  buf += 'waybill33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 22) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  if (acc % 7 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += 'sku38-' + acc.toString();
  buf += `q39:${acc % 97}`;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  acc = (acc * 31 + 323) % 65521;
  if (acc % 7 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  m01.set('k44', acc % 997);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 140) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  acc = acc + 788 - (acc % 31);
  acc = acc + 65 - (acc % 41);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += `q49:${acc % 97}`;
  for (let i50 = 0; i50 < 10; i50++) {
    acc = (acc + i50 * 13 + 874) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 412) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const rc1: Rec3 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 123) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 106) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  m01.set('k5', acc % 997);
  acc = (acc * 31 + 3066) % 65521;
  acc = acc + 209 - (acc % 12);
  const rc8: Rec3 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const ix9: number = buf.indexOf('p3');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 3520) % 65521;
  if (acc % 12 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 189) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const rc15: Rec3 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 32) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p3');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  for (let i20 = 0; i20 < 12; i20++) {
    acc = (acc + i20 * 13 + 866) % 100003;
  }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  acc = acc + 856 - (acc % 85);
  try { if (acc % 29 === 8) { throw new Error('synthetic-26'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (acc % 7 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 25) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 69) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  buf += `q32:${acc % 97}`;
  const ix33: number = buf.indexOf('p3');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 143) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  try { if (acc % 29 === 21) { throw new Error('synthetic-36'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  acc = (acc * 31 + 5841) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5630) % 65521;
  m01.set('k43', acc % 997);
  arr.push(acc % 1000);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = acc + 621 - (acc % 89);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  try { if (acc % 29 === 17) { throw new Error('synthetic-48'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = acc + 112 - (acc % 73);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0003_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0003_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0003_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 413) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  if (acc % 5 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8916) % 65521;
  if (acc % 23 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  if (acc % 24 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2677) % 65521;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  acc = acc + 89 - (acc % 62);
  acc = acc + 986 - (acc % 13);
  for (let i9 = 0; i9 < 11; i9++) {
    acc = (acc + i9 * 13 + 96) % 100003;
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  if (acc % 24 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 87) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 116) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  m01.set('k19', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 915) % 65521;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 168) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const ix23: number = buf.indexOf('p3');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  for (let i25 = 0; i25 < 11; i25++) {
    acc = (acc + i25 * 13 + 556) % 100003;
  }
  const ix26: number = buf.indexOf('p3');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  buf += 'waybill27-' + acc.toString();
  if (acc % 19 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  acc = acc + 413 - (acc % 67);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 121) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 8; i35++) {
    acc = (acc + i35 * 13 + 136) % 100003;
  }
  const rc36: Rec3 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  try { if (acc % 29 === 18) { throw new Error('synthetic-37'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q39:${acc % 97}`;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  acc = acc + 292 - (acc % 34);
  arr.push(acc % 1000);
  for (let i43 = 0; i43 < 3; i43++) {
    acc = (acc + i43 * 13 + 269) % 100003;
  }
  if (acc % 21 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8003) % 65521;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 10) { throw new Error('synthetic-47'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 27 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  const ix49: number = buf.indexOf('p3');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 414) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  for (let i0 = 0; i0 < 9; i0++) {
    acc = (acc + i0 * 13 + 759) % 100003;
  }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  for (let i2 = 0; i2 < 10; i2++) {
    acc = (acc + i2 * 13 + 586) % 100003;
  }
  if (acc % 27 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  for (let i5 = 0; i5 < 9; i5++) {
    acc = (acc + i5 * 13 + 544) % 100003;
  }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  buf += 'audit7-' + acc.toString();
  const rc8: Rec3 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 148) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  buf += `q10:${acc % 97}`;
  for (let i11 = 0; i11 < 3; i11++) {
    acc = (acc + i11 * 13 + 258) % 100003;
  }
  acc = acc + 226 - (acc % 65);
  arr.push(acc % 1000);
  buf += `q14:${acc % 97}`;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  acc = acc + 356 - (acc % 16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 171) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 22) { throw new Error('synthetic-18'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q19:${acc % 97}`;
  acc = acc + 442 - (acc % 87);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 378) % 65521;
  const ix24: number = buf.indexOf('p3');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  for (let i27 = 0; i27 < 9; i27++) {
    acc = (acc + i27 * 13 + 553) % 100003;
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  buf += 'shelf30-' + acc.toString();
  const ix31: number = buf.indexOf('p3');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  m01.set('k32', acc % 997);
  try { if (acc % 29 === 19) { throw new Error('synthetic-33'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 136) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  try { if (acc % 29 === 4) { throw new Error('synthetic-36'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 691 - (acc % 33);
  buf += 'depot38-' + acc.toString();
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  if (acc % 19 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  buf += 'payout41-' + acc.toString();
  const rc42: Rec3 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  acc = acc + 241 - (acc % 55);
  try { if (acc % 29 === 6) { throw new Error('synthetic-44'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'payout45-' + acc.toString();
  buf += 'warehouse46-' + acc.toString();
  const rc47: Rec3 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += `q48:${acc % 97}`;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 51) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  const ix50: number = buf.indexOf('p3');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const ix51: number = buf.indexOf('p3');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 415) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 103) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  try { if (acc % 29 === 20) { throw new Error('synthetic-1'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = acc + 507 - (acc % 42);
  acc = acc + 318 - (acc % 36);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-7'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  acc = acc + 798 - (acc % 10);
  try { if (acc % 29 === 22) { throw new Error('synthetic-10'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const ix13: number = buf.indexOf('p3');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 184) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 6314) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  arr.push(acc % 1000);
  buf += `q21:${acc % 97}`;
  const ix22: number = buf.indexOf('p3');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  buf += 'pickup23-' + acc.toString();
  buf += 'policy24-' + acc.toString();
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 16) { throw new Error('synthetic-32'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'transit33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 168) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 18 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  buf += `q36:${acc % 97}`;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 151) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  if (acc % 15 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  buf += `q41:${acc % 97}`;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  buf += `q43:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += `q45:${acc % 97}`;
  const rc46: Rec3 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  acc = (acc * 31 + 5948) % 65521;
  arr.push(acc % 1000);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 416) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5281) % 65521;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 148) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  m01.set('k5', acc % 997);
  if (acc % 12 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  for (let i8 = 0; i8 < 10; i8++) {
    acc = (acc + i8 * 13 + 274) % 100003;
  }
  m01.set('k9', acc % 997);
  buf += `q10:${acc % 97}`;
  buf += `q11:${acc % 97}`;
  for (let i12 = 0; i12 < 5; i12++) {
    acc = (acc + i12 * 13 + 747) % 100003;
  }
  const ix13: number = buf.indexOf('p3');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  acc = acc + 131 - (acc % 89);
  const rc15: Rec3 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const rc16: Rec3 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 100) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  m01.set('k19', acc % 997);
  try { if (acc % 29 === 17) { throw new Error('synthetic-20'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q21:${acc % 97}`;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 118) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  for (let i24 = 0; i24 < 12; i24++) {
    acc = (acc + i24 * 13 + 837) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  acc = acc + 641 - (acc % 63);
  acc = acc + 966 - (acc % 13);
  buf += `q28:${acc % 97}`;
  arr.push(acc % 1000);
  buf += `q30:${acc % 97}`;
  m01.set('k31', acc % 997);
  buf += 'routeplan32-' + acc.toString();
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 184) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  acc = (acc * 31 + 9943) % 65521;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  for (let i40 = 0; i40 < 4; i40++) {
    acc = (acc + i40 * 13 + 224) % 100003;
  }
  buf += 'audit41-' + acc.toString();
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const ix43: number = buf.indexOf('p3');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  buf += 'order44-' + acc.toString();
  m01.set('k45', acc % 997);
  buf += 'portal46-' + acc.toString();
  const ix47: number = buf.indexOf('p3');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += 'routeplan49-' + acc.toString();
  for (let i50 = 0; i50 < 11; i50++) {
    acc = (acc + i50 * 13 + 441) % 100003;
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-51'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 417) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  acc = acc + 56 - (acc % 66);
  buf += 'region1-' + acc.toString();
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  arr.push(acc % 1000);
  if (acc % 6 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += `q5:${acc % 97}`;
  acc = (acc * 31 + 2981) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-7'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const rc8: Rec3 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  m01.set('k9', acc % 997);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  arr.push(acc % 1000);
  const rc13: Rec3 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  for (let i14 = 0; i14 < 12; i14++) {
    acc = (acc + i14 * 13 + 335) % 100003;
  }
  m01.set('k15', acc % 997);
  for (let i16 = 0; i16 < 4; i16++) {
    acc = (acc + i16 * 13 + 681) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 66) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const ix19: number = buf.indexOf('p3');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  buf += `q21:${acc % 97}`;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  m01.set('k23', acc % 997);
  m01.set('k24', acc % 997);
  arr.push(acc % 1000);
  m01.set('k26', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (acc % 22 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = (acc * 31 + 1876) % 65521;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 197) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 36) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 116) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  arr.push(acc % 1000);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  buf += `q38:${acc % 97}`;
  buf += 'payout39-' + acc.toString();
  const rc40: Rec3 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  buf += `q42:${acc % 97}`;
  acc = acc + 592 - (acc % 85);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 142) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 12 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  if (acc % 23 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  buf += `q49:${acc % 97}`;
  try { if (acc % 29 === 12) { throw new Error('synthetic-50'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 483 - (acc % 85);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 418) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  m01.set('k0', acc % 997);
  const ix1: number = buf.indexOf('p3');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const rc2: Rec3 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-3'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const rc4: Rec3 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-6'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 39 - (acc % 22);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += 'crate14-' + acc.toString();
  const rc15: Rec3 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  buf += 'waybill16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 126) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 156 - (acc % 60);
  for (let i19 = 0; i19 < 5; i19++) {
    acc = (acc + i19 * 13 + 367) % 100003;
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  arr.push(acc % 1000);
  const rc22: Rec3 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  acc = acc + 623 - (acc % 95);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 180 - (acc % 14);
  buf += 'settle32-' + acc.toString();
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 17) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  if (acc % 30 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 1123) % 65521;
  arr.push(acc % 1000);
  for (let i42 = 0; i42 < 9; i42++) {
    acc = (acc + i42 * 13 + 501) % 100003;
  }
  if (acc % 14 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  acc = (acc * 31 + 9218) % 65521;
  acc = acc + 124 - (acc % 28);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 419) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  for (let i0 = 0; i0 < 8; i0++) {
    acc = (acc + i0 * 13 + 530) % 100003;
  }
  buf += 'policy1-' + acc.toString();
  acc = (acc * 31 + 8153) % 65521;
  m01.set('k3', acc % 997);
  buf += `q4:${acc % 97}`;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  buf += `q8:${acc % 97}`;
  buf += `q9:${acc % 97}`;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 142) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (acc % 27 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  buf += 'bay14-' + acc.toString();
  if (acc % 12 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 90) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = (acc * 31 + 2631) % 65521;
  if (acc % 13 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-22'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = acc + 812 - (acc % 34);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  buf += 'batch26-' + acc.toString();
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 75) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  acc = (acc * 31 + 2323) % 65521;
  const ix31: number = buf.indexOf('p3');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  if (acc % 13 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const rc33: Rec3 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 198) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  if (acc % 15 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const rc39: Rec3 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  buf += `q40:${acc % 97}`;
  for (let i41 = 0; i41 < 12; i41++) {
    acc = (acc + i41 * 13 + 221) % 100003;
  }
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = (acc * 31 + 6327) % 65521;
  const ix45: number = buf.indexOf('p3');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += `q46:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = acc + 910 - (acc % 12);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 420) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 79) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  m01.set('k4', acc % 997);
  const ix5: number = buf.indexOf('p3');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const ix7: number = buf.indexOf('p3');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const ix8: number = buf.indexOf('p3');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const rc13: Rec3 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 25) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += 'parcel16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 22) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'dispatch18-' + acc.toString();
  try { if (acc % 29 === 13) { throw new Error('synthetic-19'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  if (acc % 30 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q25:${acc % 97}`;
  if (acc % 21 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2850) % 65521;
  buf += `q28:${acc % 97}`;
  m01.set('k29', acc % 997);
  acc = acc + 574 - (acc % 85);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 11) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 95) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 8298) % 65521;
  const rc36: Rec3 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  try { if (acc % 29 === 10) { throw new Error('synthetic-38'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-39'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-42'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = acc + 20 - (acc % 38);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  if (acc % 12 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const ix49: number = buf.indexOf('p3');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-50'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 631 - (acc % 60);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 421) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4842) % 65521;
  for (let i4 = 0; i4 < 10; i4++) {
    acc = (acc + i4 * 13 + 734) % 100003;
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  m01.set('k6', acc % 997);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  acc = acc + 864 - (acc % 93);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const ix12: number = buf.indexOf('p3');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4115) % 65521;
  buf += `q14:${acc % 97}`;
  buf += 'transit15-' + acc.toString();
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 174) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  const ix19: number = buf.indexOf('p3');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = acc + 691 - (acc % 68);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  for (let i24 = 0; i24 < 7; i24++) {
    acc = (acc + i24 * 13 + 435) % 100003;
  }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  arr.push(acc % 1000);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  buf += `q29:${acc % 97}`;
  acc = acc + 687 - (acc % 27);
  buf += `q31:${acc % 97}`;
  buf += 'settle32-' + acc.toString();
  if (acc % 29 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 86) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'coupon35-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  try { if (acc % 29 === 18) { throw new Error('synthetic-37'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q38:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  if (acc % 5 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  if (acc % 24 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const ix43: number = buf.indexOf('p3');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  buf += `q44:${acc % 97}`;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += `q46:${acc % 97}`;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 50) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  buf += `q49:${acc % 97}`;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  buf += 'waybill51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 422) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  arr.push(acc % 1000);
  const ix1: number = buf.indexOf('p3');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  m01.set('k2', acc % 997);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const rc4: Rec3 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  arr.push(acc % 1000);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix10: number = buf.indexOf('p3');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3509) % 65521;
  acc = (acc * 31 + 4639) % 65521;
  m01.set('k14', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 60) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += 'invoice19-' + acc.toString();
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const rc22: Rec3 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 109) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  acc = acc + 618 - (acc % 66);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 190) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  if (acc % 27 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  m01.set('k30', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  for (let i32 = 0; i32 < 8; i32++) {
    acc = (acc + i32 * 13 + 984) % 100003;
  }
  if (acc % 23 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 47) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 133) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  buf += 'parcel38-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  buf += `q40:${acc % 97}`;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  buf += 'waybill43-' + acc.toString();
  for (let i44 = 0; i44 < 4; i44++) {
    acc = (acc + i44 * 13 + 530) % 100003;
  }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const rc46: Rec3 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  buf += `q48:${acc % 97}`;
  const rc49: Rec3 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 105) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0003_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0003_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0003_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 423) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  if (acc % 26 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  for (let i1 = 0; i1 < 6; i1++) {
    acc = (acc + i1 * 13 + 909) % 100003;
  }
  acc = (acc * 31 + 9743) % 65521;
  m01.set('k3', acc % 997);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  if (acc % 22 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (acc % 27 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  if (acc % 10 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  const ix11: number = buf.indexOf('p3');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  for (let i12 = 0; i12 < 8; i12++) {
    acc = (acc + i12 * 13 + 844) % 100003;
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  for (let i14 = 0; i14 < 7; i14++) {
    acc = (acc + i14 * 13 + 660) % 100003;
  }
  acc = (acc * 31 + 3526) % 65521;
  const rc16: Rec3 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 142) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  try { if (acc % 29 === 21) { throw new Error('synthetic-19'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 52) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  try { if (acc % 29 === 5) { throw new Error('synthetic-22'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const rc23: Rec3 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  try { if (acc % 29 === 7) { throw new Error('synthetic-25'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 14) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8570) % 65521;
  for (let i30 = 0; i30 < 12; i30++) {
    acc = (acc + i30 * 13 + 785) % 100003;
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  m01.set('k32', acc % 997);
  acc = acc + 373 - (acc % 64);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 85) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'invoice35-' + acc.toString();
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  try { if (acc % 29 === 10) { throw new Error('synthetic-37'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const rc38: Rec3 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 59) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = acc + 634 - (acc % 79);
  buf += 'ticket41-' + acc.toString();
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  try { if (acc % 29 === 5) { throw new Error('synthetic-43'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 8 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  buf += 'journey45-' + acc.toString();
  for (let i46 = 0; i46 < 7; i46++) {
    acc = (acc + i46 * 13 + 755) % 100003;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-47'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'dispatch48-' + acc.toString();
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 29) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 424) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  try { if (acc % 29 === 5) { throw new Error('synthetic-0'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  if (acc % 31 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += 'region5-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-6'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  if (acc % 21 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i10 = 0; i10 < 5; i10++) {
    acc = (acc + i10 * 13 + 930) % 100003;
  }
  if (acc % 6 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  for (let i12 = 0; i12 < 11; i12++) {
    acc = (acc + i12 * 13 + 781) % 100003;
  }
  for (let i13 = 0; i13 < 10; i13++) {
    acc = (acc + i13 * 13 + 690) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 87) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec3 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  try { if (acc % 29 === 10) { throw new Error('synthetic-19'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const rc22: Rec3 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 932) % 65521;
  if (acc % 27 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  if (acc % 29 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (acc % 29 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  for (let i30 = 0; i30 < 4; i30++) {
    acc = (acc + i30 * 13 + 378) % 100003;
  }
  for (let i31 = 0; i31 < 12; i31++) {
    acc = (acc + i31 * 13 + 755) % 100003;
  }
  const ix32: number = buf.indexOf('p3');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  if (acc % 21 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 98) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = acc + 260 - (acc % 14);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  if (acc % 24 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  buf += `q40:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  buf += `q42:${acc % 97}`;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  const ix45: number = buf.indexOf('p3');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const rc46: Rec3 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  try { if (acc % 29 === 11) { throw new Error('synthetic-47'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  const ix48: number = buf.indexOf('p3');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3490) % 65521;
  acc = (acc * 31 + 6364) % 65521;
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 425) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  const rc0: Rec3 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  arr.push(acc % 1000);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  acc = acc + 438 - (acc % 91);
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const ix6: number = buf.indexOf('p3');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-7'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  if (acc % 13 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  m01.set('k10', acc % 997);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  for (let i14 = 0; i14 < 12; i14++) {
    acc = (acc + i14 * 13 + 26) % 100003;
  }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const rc16: Rec3 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 149) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 25 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-20'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k21', acc % 997);
  for (let i22 = 0; i22 < 7; i22++) {
    acc = (acc + i22 * 13 + 644) % 100003;
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  try { if (acc % 29 === 14) { throw new Error('synthetic-25'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const rc27: Rec3 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  if (acc % 21 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5520) % 65521;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const rc33: Rec3 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 78) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  m01.set('k36', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  buf += 'coupon38-' + acc.toString();
  try { if (acc % 29 === 9) { throw new Error('synthetic-39'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  acc = (acc * 31 + 8804) % 65521;
  const rc42: Rec3 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  acc = (acc * 31 + 1768) % 65521;
  const ix45: number = buf.indexOf('p3');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const rc46: Rec3 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  m01.set('k47', acc % 997);
  acc = acc + 286 - (acc % 30);
  const rc49: Rec3 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  arr.push(acc % 1000);
  acc = acc + 536 - (acc % 45);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 426) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 24) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-3'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = (acc * 31 + 2449) % 65521;
  m01.set('k8', acc % 997);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 17) { throw new Error('synthetic-10'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q11:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  try { if (acc % 29 === 16) { throw new Error('synthetic-14'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 84) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const ix19: number = buf.indexOf('p3');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  acc = acc + 892 - (acc % 46);
  arr.push(acc % 1000);
  if (acc % 28 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  buf += 'audit23-' + acc.toString();
  for (let i24 = 0; i24 < 6; i24++) {
    acc = (acc + i24 * 13 + 884) % 100003;
  }
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 107) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 66) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  buf += `q31:${acc % 97}`;
  m01.set('k32', acc % 997);
  try { if (acc % 29 === 10) { throw new Error('synthetic-33'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 39) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  m01.set('k36', acc % 997);
  buf += 'transit37-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  for (let i39 = 0; i39 < 10; i39++) {
    acc = (acc + i39 * 13 + 459) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const ix41: number = buf.indexOf('p3');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const ix42: number = buf.indexOf('p3');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 15) { throw new Error('synthetic-45'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 944 - (acc % 67);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const ix49: number = buf.indexOf('p3');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const ix50: number = buf.indexOf('p3');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  buf += 'customs51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 427) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  buf += `q0:${acc % 97}`;
  buf += `q1:${acc % 97}`;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  buf += 'carrier3-' + acc.toString();
  buf += `q4:${acc % 97}`;
  acc = acc + 382 - (acc % 62);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  buf += 'quota7-' + acc.toString();
  const rc8: Rec3 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  if (acc % 5 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  buf += 'client12-' + acc.toString();
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 61) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 43) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-18'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = acc + 773 - (acc % 51);
  m01.set('k21', acc % 997);
  for (let i22 = 0; i22 < 5; i22++) {
    acc = (acc + i22 * 13 + 747) % 100003;
  }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  const rc24: Rec3 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const rc26: Rec3 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  buf += 'pickup29-' + acc.toString();
  acc = (acc * 31 + 2430) % 65521;
  if (acc % 30 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = acc + 271 - (acc % 88);
  const rc33: Rec3 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 148) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 133) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const ix37: number = buf.indexOf('p3');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (acc % 27 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  if (acc % 14 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  m01.set('k41', acc % 997);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const ix44: number = buf.indexOf('p3');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const rc45: Rec3 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  arr.push(acc % 1000);
  try { if (acc % 29 === 23) { throw new Error('synthetic-47'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 137) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  buf += `q50:${acc % 97}`;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 428) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  if (acc % 14 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  if (acc % 22 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const rc2: Rec3 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const rc3: Rec3 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  if (acc % 31 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  if (acc % 15 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  if (acc % 12 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  buf += 'bay14-' + acc.toString();
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 157) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  if (acc % 14 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  for (let i21 = 0; i21 < 3; i21++) {
    acc = (acc + i21 * 13 + 507) % 100003;
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  for (let i26 = 0; i26 < 4; i26++) {
    acc = (acc + i26 * 13 + 542) % 100003;
  }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 154) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  try { if (acc % 29 === 13) { throw new Error('synthetic-29'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q30:${acc % 97}`;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  acc = (acc * 31 + 9445) % 65521;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 185) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-36'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 65) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const rc38: Rec3 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const rc40: Rec3 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  buf += `q41:${acc % 97}`;
  acc = (acc * 31 + 8389) % 65521;
  if (acc % 6 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = (acc * 31 + 4986) % 65521;
  buf += 'vendor45-' + acc.toString();
  const rc46: Rec3 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  acc = (acc * 31 + 9957) % 65521;
  buf += 'client48-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += 'journey51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 429) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  m01.set('k1', acc % 997);
  const ix2: number = buf.indexOf('p3');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  buf += 'stocktake3-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  arr.push(acc % 1000);
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  buf += 'crate7-' + acc.toString();
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  if (acc % 8 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  if (acc % 7 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3886) % 65521;
  const ix12: number = buf.indexOf('p3');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 83) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-15'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const ix16: number = buf.indexOf('p3');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 164) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += `q19:${acc % 97}`;
  buf += 'rebate20-' + acc.toString();
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 187) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  buf += 'crate22-' + acc.toString();
  buf += 'dock23-' + acc.toString();
  buf += `q24:${acc % 97}`;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const rc26: Rec3 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  acc = acc + 266 - (acc % 34);
  for (let i28 = 0; i28 < 10; i28++) {
    acc = (acc + i28 * 13 + 121) % 100003;
  }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 32) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  buf += 'routeplan36-' + acc.toString();
  acc = acc + 88 - (acc % 53);
  buf += 'sku38-' + acc.toString();
  buf += 'refund39-' + acc.toString();
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  buf += 'balance42-' + acc.toString();
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 74) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-45'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 142 - (acc % 37);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  buf += 'crate48-' + acc.toString();
  if (acc % 11 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 430) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  const ix0: number = buf.indexOf('p3');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += `q2:${acc % 97}`;
  for (let i3 = 0; i3 < 3; i3++) {
    acc = (acc + i3 * 13 + 398) % 100003;
  }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  m01.set('k5', acc % 997);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 96) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  m01.set('k8', acc % 997);
  try { if (acc % 29 === 3) { throw new Error('synthetic-9'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const ix10: number = buf.indexOf('p3');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-12'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const rc13: Rec3 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 101) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 125) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 6; i18++) {
    acc = (acc + i18 * 13 + 801) % 100003;
  }
  if (acc % 23 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const rc20: Rec3 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const ix21: number = buf.indexOf('p3');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const rc23: Rec3 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  try { if (acc % 29 === 15) { throw new Error('synthetic-26'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 155) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  acc = (acc * 31 + 2007) % 65521;
  acc = acc + 287 - (acc % 61);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  buf += 'transit32-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 167) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 11 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  for (let i42 = 0; i42 < 11; i42++) {
    acc = (acc + i42 * 13 + 327) % 100003;
  }
  arr.push(acc % 1000);
  m01.set('k44', acc % 997);
  acc = acc + 82 - (acc % 69);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  if (acc % 23 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  for (let i48 = 0; i48 < 5; i48++) {
    acc = (acc + i48 * 13 + 333) % 100003;
  }
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 119) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  acc = acc + 181 - (acc % 10);
  buf += 'pickup51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 431) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  buf += `q1:${acc % 97}`;
  if (acc % 16 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  buf += `q4:${acc % 97}`;
  for (let i5 = 0; i5 < 7; i5++) {
    acc = (acc + i5 * 13 + 93) % 100003;
  }
  const rc6: Rec3 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += 'balance8-' + acc.toString();
  if (acc % 26 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  if (acc % 5 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  m01.set('k12', acc % 997);
  try { if (acc % 29 === 21) { throw new Error('synthetic-13'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-14'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 152) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += `q19:${acc % 97}`;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  arr.push(acc % 1000);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  acc = (acc * 31 + 3595) % 65521;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  acc = acc + 91 - (acc % 39);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 150) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q31:${acc % 97}`;
  acc = acc + 717 - (acc % 89);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 34) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  arr.push(acc % 1000);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  if (acc % 22 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 3517) % 65521;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = acc + 883 - (acc % 41);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const ix48: number = buf.indexOf('p3');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-49'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9161) % 65521;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 432) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  m01.set('k0', acc % 997);
  const ix1: number = buf.indexOf('p3');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const rc2: Rec3 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const rc5: Rec3 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  acc = acc + 440 - (acc % 17);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  m01.set('k8', acc % 997);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  for (let i12 = 0; i12 < 5; i12++) {
    acc = (acc + i12 * 13 + 23) % 100003;
  }
  if (acc % 25 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const ix14: number = buf.indexOf('p3');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const rc16: Rec3 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 79) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += `q19:${acc % 97}`;
  arr.push(acc % 1000);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  m01.set('k22', acc % 997);
  m01.set('k23', acc % 997);
  for (let i24 = 0; i24 < 8; i24++) {
    acc = (acc + i24 * 13 + 402) % 100003;
  }
  const rc25: Rec3 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  acc = acc + 530 - (acc % 87);
  buf += 'sku27-' + acc.toString();
  buf += 'parcel28-' + acc.toString();
  if (acc % 8 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 33) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  for (let i32 = 0; i32 < 8; i32++) {
    acc = (acc + i32 * 13 + 130) % 100003;
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 146) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  arr.push(acc % 1000);
  try { if (acc % 29 === 14) { throw new Error('synthetic-37'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  acc = acc + 362 - (acc % 71);
  const rc41: Rec3 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  buf += 'routeplan42-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 151) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const rc48: Rec3 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-49'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0003_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0003_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0003_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 433) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  for (let i0 = 0; i0 < 12; i0++) {
    acc = (acc + i0 * 13 + 575) % 100003;
  }
  acc = acc + 180 - (acc % 32);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  for (let i4 = 0; i4 < 12; i4++) {
    acc = (acc + i4 * 13 + 81) % 100003;
  }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  if (acc % 29 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const ix8: number = buf.indexOf('p3');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const rc9: Rec3 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  if (acc % 7 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const ix11: number = buf.indexOf('p3');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  m01.set('k12', acc % 997);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7909) % 65521;
  acc = acc + 481 - (acc % 48);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 14) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const ix19: number = buf.indexOf('p3');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  m01.set('k20', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = acc + 666 - (acc % 40);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += `q24:${acc % 97}`;
  acc = (acc * 31 + 1504) % 65521;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 3) { throw new Error('synthetic-27'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4129) % 65521;
  buf += `q29:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += 'ticket31-' + acc.toString();
  for (let i32 = 0; i32 < 3; i32++) {
    acc = (acc + i32 * 13 + 215) % 100003;
  }
  const ix33: number = buf.indexOf('p3');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 49) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-35'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-37'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q38:${acc % 97}`;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  buf += 'balance42-' + acc.toString();
  for (let i43 = 0; i43 < 4; i43++) {
    acc = (acc + i43 * 13 + 874) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  for (let i45 = 0; i45 < 9; i45++) {
    acc = (acc + i45 * 13 + 299) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += 'client49-' + acc.toString();
  const ix50: number = buf.indexOf('p3');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  buf += 'region51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 434) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 111) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-1'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i2 = 0; i2 < 11; i2++) {
    acc = (acc + i2 * 13 + 736) % 100003;
  }
  acc = acc + 691 - (acc % 54);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 74) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 183) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = acc + 947 - (acc % 37);
  const rc8: Rec3 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 100) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'shelf12-' + acc.toString();
  buf += `q13:${acc % 97}`;
  const rc14: Rec3 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 130) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 27) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = acc + 544 - (acc % 51);
  buf += 'order21-' + acc.toString();
  const rc22: Rec3 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  acc = (acc * 31 + 1745) % 65521;
  buf += `q24:${acc % 97}`;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 99) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = acc + 140 - (acc % 8);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  for (let i30 = 0; i30 < 6; i30++) {
    acc = (acc + i30 * 13 + 632) % 100003;
  }
  const ix31: number = buf.indexOf('p3');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  m01.set('k32', acc % 997);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 31) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 187) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q37:${acc % 97}`;
  acc = acc + 696 - (acc % 11);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 123) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-42'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const rc43: Rec3 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += 'crate45-' + acc.toString();
  buf += `q46:${acc % 97}`;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  if (acc % 5 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 22) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0003_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 435) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit3 = new Unit3(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = acc + 784 - (acc % 53);
  const rc4: Rec3 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const rc8: Rec3 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  try { if (acc % 29 === 16) { throw new Error('synthetic-9'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 31 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  buf += `q11:${acc % 97}`;
  acc = (acc * 31 + 6757) % 65521;
  const rc13: Rec3 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  if (acc % 7 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (acc % 31 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 144) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-19'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  buf += `q24:${acc % 97}`;
  buf += 'routeplan25-' + acc.toString();
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2992) % 65521;
  acc = acc + 745 - (acc % 15);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i31 = 0; i31 < 10; i31++) {
    acc = (acc + i31 * 13 + 320) % 100003;
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 177) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  m01.set('k36', acc % 997);
  for (let i37 = 0; i37 < 6; i37++) {
    acc = (acc + i37 * 13 + 752) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 26) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const rc43: Rec3 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const ix45: number = buf.indexOf('p3');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  buf += `q47:${acc % 97}`;
  acc = acc + 617 - (acc % 55);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0003(): BizFn[] {
  return [biz_0003_00, biz_0003_01, biz_0003_02, biz_0003_03, biz_0003_04, biz_0003_05, biz_0003_06, biz_0003_07, biz_0003_08, biz_0003_09, biz_0003_10, biz_0003_11, biz_0003_12, biz_0003_13, biz_0003_14, biz_0003_15, biz_0003_16, biz_0003_17, biz_0003_18, biz_0003_19, biz_0003_20, biz_0003_21, biz_0003_22, biz_0003_23, biz_0003_24, biz_0003_25, biz_0003_26, biz_0003_27, biz_0003_28, biz_0003_29, biz_0003_30, biz_0003_31, biz_0003_32, biz_0003_33, biz_0003_34, biz_0003_35, biz_0003_36, biz_0003_37, biz_0003_38, biz_0003_39, biz_0003_40, biz_0003_41, biz_0003_42];
}

export function rega_0003(): ABizFn[] {
  return [biz_0003_09a, biz_0003_19a, biz_0003_29a, biz_0003_39a];
}
