// Biz0025.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec25 { id: number; tag: string; score: number; }

class Unit25 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0025_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3275) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 129) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  acc = acc + 914 - (acc % 37);
  if (acc % 16 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  buf += 'vendor4-' + acc.toString();
  acc = acc + 340 - (acc % 57);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  acc = acc + 801 - (acc % 82);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 156) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  for (let i10 = 0; i10 < 5; i10++) {
    acc = (acc + i10 * 13 + 873) % 100003;
  }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const ix13: number = buf.indexOf('p25');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  if (acc % 25 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 101) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 138) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  for (let i24 = 0; i24 < 4; i24++) {
    acc = (acc + i24 * 13 + 372) % 100003;
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  if (acc % 11 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  buf += 'transit27-' + acc.toString();
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  acc = acc + 912 - (acc % 77);
  try { if (acc % 29 === 6) { throw new Error('synthetic-31'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6387) % 65521;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 31) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p25');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  if (acc % 18 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  for (let i47 = 0; i47 < 7; i47++) {
    acc = (acc + i47 * 13 + 436) % 100003;
  }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const ix49: number = buf.indexOf('p25');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3276) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  m01.set('k1', acc % 997);
  if (acc % 6 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  m01.set('k4', acc % 997);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  acc = (acc * 31 + 9442) % 65521;
  acc = acc + 798 - (acc % 66);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  const rc11: Rec25 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  buf += 'dispatch12-' + acc.toString();
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += `q14:${acc % 97}`;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 20) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 108) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = acc + 607 - (acc % 53);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const ix23: number = buf.indexOf('p25');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  acc = acc + 499 - (acc % 13);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const ix26: number = buf.indexOf('p25');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  m01.set('k29', acc % 997);
  if (acc % 30 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const ix31: number = buf.indexOf('p25');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-32'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 161) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (acc % 8 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  for (let i39 = 0; i39 < 4; i39++) {
    acc = (acc + i39 * 13 + 788) % 100003;
  }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 26) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (acc % 11 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 89) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  m01.set('k47', acc % 997);
  const rc48: Rec25 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  for (let i51 = 0; i51 < 8; i51++) {
    acc = (acc + i51 * 13 + 904) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3277) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  buf += 'audit0-' + acc.toString();
  const rc1: Rec25 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  buf += 'audit2-' + acc.toString();
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = (acc * 31 + 1385) % 65521;
  acc = (acc * 31 + 7973) % 65521;
  const ix7: number = buf.indexOf('p25');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  arr.push(acc % 1000);
  const ix16: number = buf.indexOf('p25');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 138) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  if (acc % 23 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-20'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-22'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const ix24: number = buf.indexOf('p25');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  buf += `q25:${acc % 97}`;
  buf += `q26:${acc % 97}`;
  if (acc % 30 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = acc + 148 - (acc % 31);
  acc = (acc * 31 + 1868) % 65521;
  buf += 'client30-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  const rc32: Rec25 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = (acc * 31 + 4544) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 62) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 18) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  acc = acc + 803 - (acc % 24);
  arr.push(acc % 1000);
  buf += 'carrier42-' + acc.toString();
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 66) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = (acc * 31 + 4008) % 65521;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  for (let i46 = 0; i46 < 6; i46++) {
    acc = (acc + i46 * 13 + 653) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  acc = (acc * 31 + 1666) % 65521;
  if (acc % 12 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3278) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  try { if (acc % 29 === 21) { throw new Error('synthetic-2'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  acc = (acc * 31 + 2315) % 65521;
  const rc5: Rec25 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  try { if (acc % 29 === 4) { throw new Error('synthetic-6'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  buf += `q8:${acc % 97}`;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  if (acc % 22 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  buf += `q11:${acc % 97}`;
  const rc12: Rec25 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += 'pickup14-' + acc.toString();
  arr.push(acc % 1000);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 119) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  if (acc % 29 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  m01.set('k22', acc % 997);
  acc = (acc * 31 + 5948) % 65521;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  m01.set('k25', acc % 997);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  m01.set('k28', acc % 997);
  try { if (acc % 29 === 14) { throw new Error('synthetic-29'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += 'quota31-' + acc.toString();
  acc = acc + 677 - (acc % 89);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 192) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 165) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  acc = acc + 127 - (acc % 9);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  buf += `q44:${acc % 97}`;
  acc = acc + 604 - (acc % 40);
  if (acc % 10 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5686) % 65521;
  for (let i48 = 0; i48 < 12; i48++) {
    acc = (acc + i48 * 13 + 522) % 100003;
  }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  buf += `q50:${acc % 97}`;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3279) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const ix1: number = buf.indexOf('p25');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-3'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  acc = acc + 795 - (acc % 16);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  if (acc % 12 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-9'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q10:${acc % 97}`;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 151) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  acc = (acc * 31 + 7894) % 65521;
  arr.push(acc % 1000);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 36) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  m01.set('k19', acc % 997);
  arr.push(acc % 1000);
  const ix21: number = buf.indexOf('p25');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  for (let i22 = 0; i22 < 9; i22++) {
    acc = (acc + i22 * 13 + 554) % 100003;
  }
  buf += 'policy23-' + acc.toString();
  acc = (acc * 31 + 2520) % 65521;
  const ix25: number = buf.indexOf('p25');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const ix27: number = buf.indexOf('p25');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  buf += `q28:${acc % 97}`;
  const rc29: Rec25 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  m01.set('k30', acc % 997);
  arr.push(acc % 1000);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 131) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 134) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = (acc * 31 + 1795) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-37'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-38'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const rc40: Rec25 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  buf += 'freight42-' + acc.toString();
  arr.push(acc % 1000);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 34) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-49'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 811 - (acc % 73);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3280) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  m01.set('k1', acc % 997);
  const rc2: Rec25 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const rc4: Rec25 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  arr.push(acc % 1000);
  m01.set('k6', acc % 997);
  acc = (acc * 31 + 2145) % 65521;
  buf += `q8:${acc % 97}`;
  arr.push(acc % 1000);
  buf += `q10:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-12'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  if (acc % 21 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 146) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  if (acc % 13 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  try { if (acc % 29 === 6) { throw new Error('synthetic-21'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'journey22-' + acc.toString();
  m01.set('k23', acc % 997);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 16) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (acc % 8 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  arr.push(acc % 1000);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 77) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += 'client36-' + acc.toString();
  acc = (acc * 31 + 2918) % 65521;
  const ix38: number = buf.indexOf('p25');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  buf += 'batch39-' + acc.toString();
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  acc = acc + 676 - (acc % 25);
  buf += 'region42-' + acc.toString();
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  arr.push(acc % 1000);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  buf += 'dock47-' + acc.toString();
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  for (let i49 = 0; i49 < 12; i49++) {
    acc = (acc + i49 * 13 + 334) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (acc % 7 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3281) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  acc = (acc * 31 + 6281) % 65521;
  arr.push(acc % 1000);
  acc = (acc * 31 + 270) % 65521;
  acc = acc + 195 - (acc % 78);
  const rc4: Rec25 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  buf += 'invoice5-' + acc.toString();
  acc = acc + 760 - (acc % 28);
  const ix7: number = buf.indexOf('p25');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  buf += `q8:${acc % 97}`;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  try { if (acc % 29 === 2) { throw new Error('synthetic-11'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q12:${acc % 97}`;
  const ix13: number = buf.indexOf('p25');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = acc + 335 - (acc % 17);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 162) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p25');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  acc = acc + 786 - (acc % 31);
  for (let i20 = 0; i20 < 11; i20++) {
    acc = (acc + i20 * 13 + 907) % 100003;
  }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  buf += `q23:${acc % 97}`;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const rc25: Rec25 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = acc + 399 - (acc % 20);
  try { if (acc % 29 === 14) { throw new Error('synthetic-28'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 50) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = (acc * 31 + 6741) % 65521;
  acc = acc + 173 - (acc % 45);
  const ix33: number = buf.indexOf('p25');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 77) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 4) { throw new Error('synthetic-35'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 63) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 113) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const rc39: Rec25 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 23) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const ix44: number = buf.indexOf('p25');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  try { if (acc % 29 === 16) { throw new Error('synthetic-47'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q48:${acc % 97}`;
  buf += 'stocktake49-' + acc.toString();
  buf += `q50:${acc % 97}`;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3282) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  for (let i2 = 0; i2 < 4; i2++) {
    acc = (acc + i2 * 13 + 332) % 100003;
  }
  const ix3: number = buf.indexOf('p25');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  if (acc % 5 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  if (acc % 17 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 176) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  m01.set('k9', acc % 997);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const rc12: Rec25 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  acc = acc + 65 - (acc % 56);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const ix15: number = buf.indexOf('p25');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 13) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 147) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  acc = acc + 480 - (acc % 25);
  m01.set('k20', acc % 997);
  const rc21: Rec25 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-26'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  const rc27: Rec25 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  acc = acc + 960 - (acc % 25);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const rc30: Rec25 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += `q31:${acc % 97}`;
  const ix32: number = buf.indexOf('p25');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += 'bay33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 109) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (acc % 15 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-39'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 99) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += 'payout42-' + acc.toString();
  buf += 'tariff43-' + acc.toString();
  acc = acc + 37 - (acc % 55);
  buf += 'payout45-' + acc.toString();
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  if (acc % 17 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-48'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const ix51: number = buf.indexOf('p25');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3283) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = acc + 363 - (acc % 69);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = acc + 555 - (acc % 47);
  const ix4: number = buf.indexOf('p25');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const ix5: number = buf.indexOf('p25');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  m01.set('k6', acc % 997);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  if (acc % 9 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = acc + 500 - (acc % 97);
  try { if (acc % 29 === 18) { throw new Error('synthetic-15'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const rc16: Rec25 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 160) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const rc20: Rec25 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += 'ticket24-' + acc.toString();
  buf += `q25:${acc % 97}`;
  for (let i26 = 0; i26 < 9; i26++) {
    acc = (acc + i26 * 13 + 699) % 100003;
  }
  const ix27: number = buf.indexOf('p25');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  acc = acc + 912 - (acc % 29);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  for (let i31 = 0; i31 < 5; i31++) {
    acc = (acc + i31 * 13 + 776) % 100003;
  }
  acc = acc + 595 - (acc % 47);
  try { if (acc % 29 === 20) { throw new Error('synthetic-33'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 84) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 914 - (acc % 58);
  m01.set('k36', acc % 997);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  acc = acc + 490 - (acc % 87);
  acc = acc + 529 - (acc % 40);
  try { if (acc % 29 === 14) { throw new Error('synthetic-40'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const rc42: Rec25 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 29) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  m01.set('k44', acc % 997);
  if (acc % 23 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  const rc47: Rec25 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  if (acc % 24 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  m01.set('k50', acc % 997);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3284) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  try { if (acc % 29 === 10) { throw new Error('synthetic-0'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-1'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  acc = (acc * 31 + 6459) % 65521;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  if (acc % 6 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  if (acc % 10 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  m01.set('k14', acc % 997);
  acc = acc + 90 - (acc % 82);
  try { if (acc % 29 === 4) { throw new Error('synthetic-16'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 115) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i21 = 0; i21 < 11; i21++) {
    acc = (acc + i21 * 13 + 408) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = acc + 389 - (acc % 20);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  m01.set('k28', acc % 997);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 160) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = acc + 863 - (acc % 31);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 54) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 12) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = (acc * 31 + 5783) % 65521;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 120) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 81) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const ix42: number = buf.indexOf('p25');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  buf += 'transit43-' + acc.toString();
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  buf += 'quota45-' + acc.toString();
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  acc = (acc * 31 + 733) % 65521;
  buf += `q48:${acc % 97}`;
  const ix49: number = buf.indexOf('p25');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += `q50:${acc % 97}`;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0025_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0025_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0025_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3285) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  const rc0: Rec25 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 196) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  acc = acc + 271 - (acc % 90);
  buf += 'client3-' + acc.toString();
  buf += `q4:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i6 = 0; i6 < 12; i6++) {
    acc = (acc + i6 * 13 + 794) % 100003;
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  for (let i8 = 0; i8 < 6; i8++) {
    acc = (acc + i8 * 13 + 523) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (acc % 21 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  if (acc % 18 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += `q13:${acc % 97}`;
  if (acc % 5 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  acc = acc + 972 - (acc % 37);
  acc = acc + 488 - (acc % 42);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 25) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'bay18-' + acc.toString();
  m01.set('k19', acc % 997);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-21'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  for (let i23 = 0; i23 < 12; i23++) {
    acc = (acc + i23 * 13 + 476) % 100003;
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  m01.set('k25', acc % 997);
  arr.push(acc % 1000);
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  for (let i31 = 0; i31 < 10; i31++) {
    acc = (acc + i31 * 13 + 770) % 100003;
  }
  buf += 'waybill32-' + acc.toString();
  try { if (acc % 29 === 15) { throw new Error('synthetic-33'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 62) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  acc = (acc * 31 + 8133) % 65521;
  const ix37: number = buf.indexOf('p25');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  if (acc % 23 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  buf += `q40:${acc % 97}`;
  const ix41: number = buf.indexOf('p25');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const ix42: number = buf.indexOf('p25');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7607) % 65521;
  m01.set('k44', acc % 997);
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const ix46: number = buf.indexOf('p25');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 101) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3286) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  acc = (acc * 31 + 2731) % 65521;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-2'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 60) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const rc4: Rec25 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  if (acc % 31 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (acc % 10 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  if (acc % 24 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 106) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  if (acc % 14 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (acc % 10 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 174) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const ix15: number = buf.indexOf('p25');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 159) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'dispatch18-' + acc.toString();
  buf += 'pallet19-' + acc.toString();
  if (acc % 15 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  buf += `q21:${acc % 97}`;
  if (acc % 23 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const ix23: number = buf.indexOf('p25');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  for (let i24 = 0; i24 < 5; i24++) {
    acc = (acc + i24 * 13 + 533) % 100003;
  }
  const ix25: number = buf.indexOf('p25');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  for (let i27 = 0; i27 < 3; i27++) {
    acc = (acc + i27 * 13 + 112) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  try { if (acc % 29 === 13) { throw new Error('synthetic-29'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  arr.push(acc % 1000);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 195) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 9315) % 65521;
  if (acc % 6 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  m01.set('k37', acc % 997);
  if (acc % 16 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  m01.set('k39', acc % 997);
  buf += 'bay40-' + acc.toString();
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const rc43: Rec25 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  m01.set('k44', acc % 997);
  buf += 'crate45-' + acc.toString();
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  m01.set('k48', acc % 997);
  buf += `q49:${acc % 97}`;
  try { if (acc % 29 === 18) { throw new Error('synthetic-50'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3287) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const ix1: number = buf.indexOf('p25');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += 'refund3-' + acc.toString();
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  if (acc % 27 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (acc % 11 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-7'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  for (let i9 = 0; i9 < 12; i9++) {
    acc = (acc + i9 * 13 + 721) % 100003;
  }
  arr.push(acc % 1000);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 87) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-12'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const rc13: Rec25 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  if (acc % 15 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += 'shelf15-' + acc.toString();
  buf += 'dispatch16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 86) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-19'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  m01.set('k21', acc % 997);
  buf += `q22:${acc % 97}`;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  if (acc % 27 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = acc + 713 - (acc % 92);
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-28'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-29'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3417) % 65521;
  buf += 'dispatch32-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 171) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-35'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8823) % 65521;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += `q41:${acc % 97}`;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const ix43: number = buf.indexOf('p25');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  m01.set('k44', acc % 997);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const rc46: Rec25 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  acc = (acc * 31 + 99) % 65521;
  arr.push(acc % 1000);
  buf += 'warehouse50-' + acc.toString();
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3288) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  buf += 'transit1-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  m01.set('k3', acc % 997);
  if (acc % 20 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  for (let i7 = 0; i7 < 7; i7++) {
    acc = (acc + i7 * 13 + 786) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = acc + 27 - (acc % 68);
  acc = (acc * 31 + 8482) % 65521;
  const rc11: Rec25 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  buf += `q12:${acc % 97}`;
  acc = (acc * 31 + 2928) % 65521;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 6359) % 65521;
  for (let i16 = 0; i16 < 9; i16++) {
    acc = (acc + i16 * 13 + 716) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 13) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p25');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  m01.set('k20', acc % 997);
  acc = acc + 340 - (acc % 85);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  buf += 'settle26-' + acc.toString();
  acc = acc + 212 - (acc % 56);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 37) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  for (let i29 = 0; i29 < 8; i29++) {
    acc = (acc + i29 * 13 + 687) % 100003;
  }
  for (let i30 = 0; i30 < 3; i30++) {
    acc = (acc + i30 * 13 + 590) % 100003;
  }
  buf += `q31:${acc % 97}`;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  buf += 'rebate33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 124) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const ix36: number = buf.indexOf('p25');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += 'refund37-' + acc.toString();
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  acc = (acc * 31 + 5876) % 65521;
  if (acc % 6 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const rc44: Rec25 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  const rc45: Rec25 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2452) % 65521;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-50'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3289) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  const ix0: number = buf.indexOf('p25');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 159) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  buf += `q2:${acc % 97}`;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  try { if (acc % 29 === 16) { throw new Error('synthetic-8'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1784) % 65521;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  buf += 'portal12-' + acc.toString();
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  for (let i14 = 0; i14 < 8; i14++) {
    acc = (acc + i14 * 13 + 327) % 100003;
  }
  acc = (acc * 31 + 4642) % 65521;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 99) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 10; i18++) {
    acc = (acc + i18 * 13 + 695) % 100003;
  }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  buf += 'dispatch20-' + acc.toString();
  if (acc % 25 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  for (let i22 = 0; i22 < 11; i22++) {
    acc = (acc + i22 * 13 + 864) % 100003;
  }
  if (acc % 12 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += 'rebate25-' + acc.toString();
  const ix26: number = buf.indexOf('p25');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  for (let i28 = 0; i28 < 4; i28++) {
    acc = (acc + i28 * 13 + 910) % 100003;
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 98) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec25 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  if (acc % 16 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  buf += `q38:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-40'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const ix41: number = buf.indexOf('p25');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  buf += 'order42-' + acc.toString();
  m01.set('k43', acc % 997);
  buf += 'stocktake44-' + acc.toString();
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += 'order47-' + acc.toString();
  const rc48: Rec25 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  for (let i49 = 0; i49 < 12; i49++) {
    acc = (acc + i49 * 13 + 120) % 100003;
  }
  buf += `q50:${acc % 97}`;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3290) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  arr.push(acc % 1000);
  if (acc % 9 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  for (let i3 = 0; i3 < 7; i3++) {
    acc = (acc + i3 * 13 + 941) % 100003;
  }
  acc = acc + 921 - (acc % 14);
  buf += `q5:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 15) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  if (acc % 22 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  if (acc % 20 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-10'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 337 - (acc % 71);
  const rc12: Rec25 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  for (let i13 = 0; i13 < 5; i13++) {
    acc = (acc + i13 * 13 + 316) % 100003;
  }
  m01.set('k14', acc % 997);
  try { if (acc % 29 === 16) { throw new Error('synthetic-15'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 110) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  arr.push(acc % 1000);
  if (acc % 20 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  buf += `q21:${acc % 97}`;
  acc = (acc * 31 + 813) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  acc = acc + 869 - (acc % 83);
  acc = (acc * 31 + 1461) % 65521;
  buf += 'customs27-' + acc.toString();
  if (acc % 11 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  if (acc % 14 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 244 - (acc % 73);
  m01.set('k41', acc % 997);
  const ix42: number = buf.indexOf('p25');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = acc + 505 - (acc % 63);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  acc = acc + 731 - (acc % 96);
  buf += 'ticket46-' + acc.toString();
  const rc47: Rec25 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  for (let i48 = 0; i48 < 12; i48++) {
    acc = (acc + i48 * 13 + 699) % 100003;
  }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const ix50: number = buf.indexOf('p25');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3291) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  buf += 'rebate0-' + acc.toString();
  const rc1: Rec25 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  acc = (acc * 31 + 1837) % 65521;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 173) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = (acc * 31 + 1630) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  acc = (acc * 31 + 8756) % 65521;
  for (let i9 = 0; i9 < 11; i9++) {
    acc = (acc + i9 * 13 + 53) % 100003;
  }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 108) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const rc12: Rec25 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  m01.set('k14', acc % 997);
  buf += `q15:${acc % 97}`;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 16) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 89) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 3) { throw new Error('synthetic-19'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  buf += `q22:${acc % 97}`;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  buf += 'balance26-' + acc.toString();
  try { if (acc % 29 === 5) { throw new Error('synthetic-27'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const ix28: number = buf.indexOf('p25');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  m01.set('k30', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  const ix32: number = buf.indexOf('p25');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 196) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 162) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  try { if (acc % 29 === 7) { throw new Error('synthetic-36'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  m01.set('k38', acc % 997);
  const ix39: number = buf.indexOf('p25');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  const ix41: number = buf.indexOf('p25');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  for (let i43 = 0; i43 < 10; i43++) {
    acc = (acc + i43 * 13 + 258) % 100003;
  }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 175) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  m01.set('k45', acc % 997);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  acc = acc + 79 - (acc % 87);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3292) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  buf += `q1:${acc % 97}`;
  buf += `q2:${acc % 97}`;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  if (acc % 8 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const ix8: number = buf.indexOf('p25');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-9'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 21 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  try { if (acc % 29 === 4) { throw new Error('synthetic-12'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 90) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  for (let i16 = 0; i16 < 3; i16++) {
    acc = (acc + i16 * 13 + 354) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 184) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 29 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += `q19:${acc % 97}`;
  const rc20: Rec25 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = acc + 855 - (acc % 17);
  buf += `q22:${acc % 97}`;
  buf += 'shelf23-' + acc.toString();
  try { if (acc % 29 === 16) { throw new Error('synthetic-24'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 601 - (acc % 68);
  acc = acc + 820 - (acc % 73);
  for (let i27 = 0; i27 < 4; i27++) {
    acc = (acc + i27 * 13 + 194) % 100003;
  }
  acc = (acc * 31 + 1722) % 65521;
  buf += `q29:${acc % 97}`;
  buf += `q30:${acc % 97}`;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  try { if (acc % 29 === 18) { throw new Error('synthetic-32'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const rc33: Rec25 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 21) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 905 - (acc % 54);
  try { if (acc % 29 === 8) { throw new Error('synthetic-36'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  if (acc % 31 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  if (acc % 6 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += 'ledger42-' + acc.toString();
  const ix43: number = buf.indexOf('p25');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3464) % 65521;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = (acc * 31 + 6913) % 65521;
  for (let i47 = 0; i47 < 10; i47++) {
    acc = (acc + i47 * 13 + 678) % 100003;
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 86) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  acc = acc + 562 - (acc % 13);
  acc = acc + 139 - (acc % 57);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3293) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  for (let i0 = 0; i0 < 5; i0++) {
    acc = (acc + i0 * 13 + 612) % 100003;
  }
  acc = acc + 709 - (acc % 31);
  const rc2: Rec25 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 73) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  m01.set('k6', acc % 997);
  for (let i7 = 0; i7 < 3; i7++) {
    acc = (acc + i7 * 13 + 537) % 100003;
  }
  if (acc % 27 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  m01.set('k11', acc % 997);
  try { if (acc % 29 === 9) { throw new Error('synthetic-12'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  buf += 'journey14-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 166) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  arr.push(acc % 1000);
  m01.set('k21', acc % 997);
  try { if (acc % 29 === 20) { throw new Error('synthetic-22'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-24'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 5505) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  if (acc % 10 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  buf += `q28:${acc % 97}`;
  acc = acc + 12 - (acc % 93);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  m01.set('k31', acc % 997);
  acc = acc + 591 - (acc % 77);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 36) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const ix38: number = buf.indexOf('p25');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  if (acc % 28 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  for (let i41 = 0; i41 < 10; i41++) {
    acc = (acc + i41 * 13 + 204) % 100003;
  }
  const ix42: number = buf.indexOf('p25');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const rc44: Rec25 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += 'settle45-' + acc.toString();
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += 'shelf49-' + acc.toString();
  const rc50: Rec25 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3294) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 13) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 12) { throw new Error('synthetic-2'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 28 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += 'coupon7-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2884) % 65521;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const ix11: number = buf.indexOf('p25');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  m01.set('k12', acc % 997);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 134) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 8) { throw new Error('synthetic-15'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 87) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 84) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 32) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k21', acc % 997);
  buf += `q22:${acc % 97}`;
  acc = (acc * 31 + 4726) % 65521;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 72) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  acc = acc + 477 - (acc % 27);
  const ix29: number = buf.indexOf('p25');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const rc30: Rec25 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  const rc31: Rec25 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const rc32: Rec25 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = (acc * 31 + 2213) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 22) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'portal35-' + acc.toString();
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  for (let i38 = 0; i38 < 7; i38++) {
    acc = (acc + i38 * 13 + 753) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  buf += 'parcel42-' + acc.toString();
  for (let i43 = 0; i43 < 12; i43++) {
    acc = (acc + i43 * 13 + 226) % 100003;
  }
  acc = (acc * 31 + 562) % 65521;
  acc = acc + 409 - (acc % 95);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const rc48: Rec25 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 7164) % 65521;
  try { if (acc % 29 === 23) { throw new Error('synthetic-51'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0025_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0025_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0025_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3295) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  arr.push(acc % 1000);
  buf += 'pallet3-' + acc.toString();
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 26) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = (acc * 31 + 5944) % 65521;
  const rc6: Rec25 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  m01.set('k7', acc % 997);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const ix9: number = buf.indexOf('p25');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-11'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  m01.set('k13', acc % 997);
  const ix14: number = buf.indexOf('p25');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 112) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 4686) % 65521;
  buf += 'balance19-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  arr.push(acc % 1000);
  buf += `q22:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-27'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  buf += 'pallet29-' + acc.toString();
  acc = (acc * 31 + 4168) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-31'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (acc % 22 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 88) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p25');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const rc36: Rec25 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  acc = (acc * 31 + 8412) % 65521;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 42) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const ix39: number = buf.indexOf('p25');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-42'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = (acc * 31 + 4742) % 65521;
  if (acc % 25 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const rc48: Rec25 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  buf += `q49:${acc % 97}`;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const rc51: Rec25 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3296) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  acc = acc + 268 - (acc % 58);
  try { if (acc % 29 === 17) { throw new Error('synthetic-1'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 155) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (acc % 30 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (acc % 18 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  acc = acc + 232 - (acc % 85);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  try { if (acc % 29 === 23) { throw new Error('synthetic-10'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const rc12: Rec25 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  acc = (acc * 31 + 6359) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-14'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 11 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 167) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'invoice18-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4347) % 65521;
  const ix23: number = buf.indexOf('p25');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 54) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  acc = acc + 768 - (acc % 63);
  const ix26: number = buf.indexOf('p25');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  for (let i27 = 0; i27 < 3; i27++) {
    acc = (acc + i27 * 13 + 562) % 100003;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-28'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'sku29-' + acc.toString();
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 182) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-31'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 183 - (acc % 82);
  try { if (acc % 29 === 15) { throw new Error('synthetic-33'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 99) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 55) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const rc40: Rec25 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 79) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'ledger47-' + acc.toString();
  buf += 'routeplan48-' + acc.toString();
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 129) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3297) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += 'ledger1-' + acc.toString();
  buf += `q2:${acc % 97}`;
  buf += 'dock3-' + acc.toString();
  m01.set('k4', acc % 997);
  acc = (acc * 31 + 1837) % 65521;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 84) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  buf += 'refund9-' + acc.toString();
  acc = (acc * 31 + 2330) % 65521;
  const ix11: number = buf.indexOf('p25');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-12'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 8 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const ix16: number = buf.indexOf('p25');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 55) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 168) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  acc = acc + 911 - (acc % 79);
  m01.set('k22', acc % 997);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  buf += `q26:${acc % 97}`;
  if (acc % 24 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1368) % 65521;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 115) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  m01.set('k31', acc % 997);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 161) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 173) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const ix36: number = buf.indexOf('p25');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  if (acc % 13 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 65) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const rc44: Rec25 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  try { if (acc % 29 === 15) { throw new Error('synthetic-45'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k46', acc % 997);
  m01.set('k47', acc % 997);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  arr.push(acc % 1000);
  const ix50: number = buf.indexOf('p25');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3298) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  buf += 'depot1-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  acc = (acc * 31 + 5873) % 65521;
  acc = (acc * 31 + 6704) % 65521;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const rc7: Rec25 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const rc12: Rec25 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  acc = acc + 646 - (acc % 68);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 193) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec25 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = (acc * 31 + 7379) % 65521;
  acc = (acc * 31 + 2804) % 65521;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  try { if (acc % 29 === 4) { throw new Error('synthetic-23'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  if (acc % 26 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  if (acc % 12 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  if (acc % 19 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (acc % 20 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const ix32: number = buf.indexOf('p25');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  if (acc % 27 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 165) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  if (acc % 16 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += `q37:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix39: number = buf.indexOf('p25');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const rc41: Rec25 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  buf += 'transit43-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += `q45:${acc % 97}`;
  buf += `q46:${acc % 97}`;
  const ix47: number = buf.indexOf('p25');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const rc48: Rec25 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 127) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3299) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  const rc0: Rec25 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 183) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 133) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  for (let i6 = 0; i6 < 8; i6++) {
    acc = (acc + i6 * 13 + 746) % 100003;
  }
  m01.set('k7', acc % 997);
  arr.push(acc % 1000);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  buf += 'region10-' + acc.toString();
  const ix11: number = buf.indexOf('p25');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  try { if (acc % 29 === 3) { throw new Error('synthetic-13'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  const rc14: Rec25 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 15) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 171) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  try { if (acc % 29 === 14) { throw new Error('synthetic-20'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = (acc * 31 + 1165) % 65521;
  acc = (acc * 31 + 3050) % 65521;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = acc + 787 - (acc % 30);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (acc % 10 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  m01.set('k30', acc % 997);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  try { if (acc % 29 === 3) { throw new Error('synthetic-33'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 193) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const rc36: Rec25 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const rc37: Rec25 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = (acc * 31 + 1980) % 65521;
  const ix40: number = buf.indexOf('p25');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  if (acc % 7 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const ix42: number = buf.indexOf('p25');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  if (acc % 9 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  buf += 'balance44-' + acc.toString();
  try { if (acc % 29 === 19) { throw new Error('synthetic-45'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += `q47:${acc % 97}`;
  arr.push(acc % 1000);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const ix51: number = buf.indexOf('p25');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3300) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  acc = (acc * 31 + 7882) % 65521;
  acc = acc + 166 - (acc % 25);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  acc = acc + 757 - (acc % 64);
  buf += `q6:${acc % 97}`;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  m01.set('k14', acc % 997);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 56) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p25');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  try { if (acc % 29 === 12) { throw new Error('synthetic-22'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  arr.push(acc % 1000);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 129) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  acc = (acc * 31 + 9902) % 65521;
  const rc27: Rec25 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  try { if (acc % 29 === 16) { throw new Error('synthetic-28'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 125) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  acc = acc + 517 - (acc % 94);
  try { if (acc % 29 === 18) { throw new Error('synthetic-31'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  acc = (acc * 31 + 8426) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 49) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (acc % 12 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  m01.set('k38', acc % 997);
  acc = acc + 474 - (acc % 11);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 81) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  try { if (acc % 29 === 18) { throw new Error('synthetic-41'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  for (let i43 = 0; i43 < 9; i43++) {
    acc = (acc + i43 * 13 + 840) % 100003;
  }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  const rc45: Rec25 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  if (acc % 11 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 131) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const ix48: number = buf.indexOf('p25');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3301) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  arr.push(acc % 1000);
  try { if (acc % 29 === 3) { throw new Error('synthetic-1'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 177) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  acc = (acc * 31 + 9175) % 65521;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  for (let i10 = 0; i10 < 7; i10++) {
    acc = (acc + i10 * 13 + 495) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 173) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 17) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += 'refund19-' + acc.toString();
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  m01.set('k21', acc % 997);
  m01.set('k22', acc % 997);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-24'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q25:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  if (acc % 11 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  if (acc % 30 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9531) % 65521;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = acc + 496 - (acc % 33);
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 58) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 180) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  try { if (acc % 29 === 13) { throw new Error('synthetic-38'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  for (let i40 = 0; i40 < 7; i40++) {
    acc = (acc + i40 * 13 + 738) % 100003;
  }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  acc = (acc * 31 + 1396) % 65521;
  buf += `q44:${acc % 97}`;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-46'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const ix47: number = buf.indexOf('p25');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-48'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 126) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3302) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  if (acc % 17 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const ix1: number = buf.indexOf('p25');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  acc = (acc * 31 + 7464) % 65521;
  acc = (acc * 31 + 1115) % 65521;
  buf += 'quota6-' + acc.toString();
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  buf += `q8:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  m01.set('k11', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = (acc * 31 + 3745) % 65521;
  buf += `q14:${acc % 97}`;
  for (let i15 = 0; i15 < 11; i15++) {
    acc = (acc + i15 * 13 + 580) % 100003;
  }
  acc = acc + 284 - (acc % 33);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 17) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += `q21:${acc % 97}`;
  for (let i22 = 0; i22 < 9; i22++) {
    acc = (acc + i22 * 13 + 252) % 100003;
  }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += 'parcel24-' + acc.toString();
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 133) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  m01.set('k26', acc % 997);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const ix28: number = buf.indexOf('p25');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-29'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  buf += `q31:${acc % 97}`;
  const ix32: number = buf.indexOf('p25');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 170) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 9377) % 65521;
  acc = (acc * 31 + 8490) % 65521;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  acc = acc + 580 - (acc % 85);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 38) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const rc41: Rec25 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  arr.push(acc % 1000);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = acc + 177 - (acc % 52);
  arr.push(acc % 1000);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += 'crate47-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += 'order49-' + acc.toString();
  arr.push(acc % 1000);
  try { if (acc % 29 === 6) { throw new Error('synthetic-51'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3303) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  try { if (acc % 29 === 19) { throw new Error('synthetic-0'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 66 - (acc % 84);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 93) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const rc5: Rec25 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const ix6: number = buf.indexOf('p25');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const ix7: number = buf.indexOf('p25');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 198) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  arr.push(acc % 1000);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  acc = (acc * 31 + 8685) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-14'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const ix15: number = buf.indexOf('p25');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 55) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  buf += `q20:${acc % 97}`;
  buf += `q21:${acc % 97}`;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  if (acc % 23 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  buf += 'journey25-' + acc.toString();
  arr.push(acc % 1000);
  m01.set('k27', acc % 997);
  arr.push(acc % 1000);
  acc = acc + 772 - (acc % 80);
  buf += `q30:${acc % 97}`;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 47) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  m01.set('k32', acc % 997);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 182) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  for (let i40 = 0; i40 < 4; i40++) {
    acc = (acc + i40 * 13 + 242) % 100003;
  }
  acc = (acc * 31 + 8440) % 65521;
  acc = acc + 436 - (acc % 41);
  const ix43: number = buf.indexOf('p25');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  for (let i44 = 0; i44 < 11; i44++) {
    acc = (acc + i44 * 13 + 757) % 100003;
  }
  m01.set('k45', acc % 997);
  buf += `q46:${acc % 97}`;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 67) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-48'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  m01.set('k50', acc % 997);
  try { if (acc % 29 === 21) { throw new Error('synthetic-51'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3304) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  const rc0: Rec25 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  acc = acc + 589 - (acc % 56);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  for (let i3 = 0; i3 < 11; i3++) {
    acc = (acc + i3 * 13 + 526) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-5'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 19 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  for (let i7 = 0; i7 < 6; i7++) {
    acc = (acc + i7 * 13 + 790) % 100003;
  }
  acc = (acc * 31 + 2013) % 65521;
  acc = acc + 13 - (acc % 36);
  arr.push(acc % 1000);
  try { if (acc % 29 === 19) { throw new Error('synthetic-11'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i12 = 0; i12 < 10; i12++) {
    acc = (acc + i12 * 13 + 379) % 100003;
  }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  acc = (acc * 31 + 3687) % 65521;
  acc = (acc * 31 + 7003) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 59) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 13) { throw new Error('synthetic-18'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'customs19-' + acc.toString();
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 117) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  if (acc % 6 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const rc25: Rec25 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  try { if (acc % 29 === 17) { throw new Error('synthetic-26'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'parcel27-' + acc.toString();
  buf += `q28:${acc % 97}`;
  const rc29: Rec25 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  for (let i31 = 0; i31 < 3; i31++) {
    acc = (acc + i31 * 13 + 682) % 100003;
  }
  for (let i32 = 0; i32 < 11; i32++) {
    acc = (acc + i32 * 13 + 976) % 100003;
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 166) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  arr.push(acc % 1000);
  buf += 'balance37-' + acc.toString();
  arr.push(acc % 1000);
  const ix39: number = buf.indexOf('p25');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 94) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  m01.set('k43', acc % 997);
  try { if (acc % 29 === 9) { throw new Error('synthetic-44'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const rc45: Rec25 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  acc = acc + 323 - (acc % 51);
  buf += 'parcel47-' + acc.toString();
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 129) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0025_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0025_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0025_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3305) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  try { if (acc % 29 === 4) { throw new Error('synthetic-1'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i2 = 0; i2 < 4; i2++) {
    acc = (acc + i2 * 13 + 9) % 100003;
  }
  acc = (acc * 31 + 1875) % 65521;
  m01.set('k4', acc % 997);
  arr.push(acc % 1000);
  for (let i6 = 0; i6 < 3; i6++) {
    acc = (acc + i6 * 13 + 62) % 100003;
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 14) { throw new Error('synthetic-8'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  acc = acc + 449 - (acc % 73);
  m01.set('k11', acc % 997);
  try { if (acc % 29 === 12) { throw new Error('synthetic-12'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const rc13: Rec25 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 170) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec25 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  acc = (acc * 31 + 1483) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-20'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q21:${acc % 97}`;
  acc = (acc * 31 + 3357) % 65521;
  acc = acc + 780 - (acc % 24);
  arr.push(acc % 1000);
  try { if (acc % 29 === 13) { throw new Error('synthetic-25'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const ix26: number = buf.indexOf('p25');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  if (acc % 16 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  if (acc % 27 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  m01.set('k32', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 109) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p25');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const ix36: number = buf.indexOf('p25');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-37'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += 'ticket39-' + acc.toString();
  acc = (acc * 31 + 4141) % 65521;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  if (acc % 15 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  buf += `q43:${acc % 97}`;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  try { if (acc % 29 === 21) { throw new Error('synthetic-47'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i48 = 0; i48 < 4; i48++) {
    acc = (acc + i48 * 13 + 527) % 100003;
  }
  if (acc % 7 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  if (acc % 18 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3306) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  buf += 'balance1-' + acc.toString();
  try { if (acc % 29 === 18) { throw new Error('synthetic-2'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 12 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  if (acc % 26 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9673) % 65521;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const ix13: number = buf.indexOf('p25');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  buf += `q14:${acc % 97}`;
  acc = acc + 985 - (acc % 34);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 46) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 14 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const rc19: Rec25 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = acc + 501 - (acc % 79);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  buf += `q22:${acc % 97}`;
  for (let i23 = 0; i23 < 4; i23++) {
    acc = (acc + i23 * 13 + 928) % 100003;
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const ix26: number = buf.indexOf('p25');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  if (acc % 28 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-31'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 131) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  m01.set('k36', acc % 997);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 22) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += `q40:${acc % 97}`;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const rc42: Rec25 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const rc43: Rec25 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  arr.push(acc % 1000);
  buf += `q45:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const ix47: number = buf.indexOf('p25');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  for (let i48 = 0; i48 < 9; i48++) {
    acc = (acc + i48 * 13 + 865) % 100003;
  }
  m01.set('k49', acc % 997);
  for (let i50 = 0; i50 < 12; i50++) {
    acc = (acc + i50 * 13 + 29) % 100003;
  }
  acc = (acc * 31 + 5604) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3307) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  try { if (acc % 29 === 19) { throw new Error('synthetic-2'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const rc3: Rec25 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  arr.push(acc % 1000);
  if (acc % 10 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  acc = acc + 744 - (acc % 30);
  arr.push(acc % 1000);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 106) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = acc + 137 - (acc % 37);
  buf += 'vendor14-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 83) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 56) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 24) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  for (let i20 = 0; i20 < 7; i20++) {
    acc = (acc + i20 * 13 + 923) % 100003;
  }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 62) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  if (acc % 22 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-24'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-25'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 647 - (acc % 82);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const ix28: number = buf.indexOf('p25');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7292) % 65521;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  try { if (acc % 29 === 16) { throw new Error('synthetic-33'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 164) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 4; i35++) {
    acc = (acc + i35 * 13 + 302) % 100003;
  }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 171) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 9 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 8422) % 65521;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 118) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  for (let i43 = 0; i43 < 4; i43++) {
    acc = (acc + i43 * 13 + 994) % 100003;
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-44'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-45'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const rc46: Rec25 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  m01.set('k47', acc % 997);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 170) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3308) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 141) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  acc = (acc * 31 + 9964) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const rc6: Rec25 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  for (let i7 = 0; i7 < 6; i7++) {
    acc = (acc + i7 * 13 + 784) % 100003;
  }
  const rc8: Rec25 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  for (let i9 = 0; i9 < 11; i9++) {
    acc = (acc + i9 * 13 + 881) % 100003;
  }
  arr.push(acc % 1000);
  for (let i11 = 0; i11 < 12; i11++) {
    acc = (acc + i11 * 13 + 847) % 100003;
  }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 99) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += 'batch14-' + acc.toString();
  if (acc % 8 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = acc + 479 - (acc % 38);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 140) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const rc22: Rec25 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  m01.set('k23', acc % 997);
  if (acc % 24 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  buf += 'ledger25-' + acc.toString();
  const rc26: Rec25 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  const ix27: number = buf.indexOf('p25');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  acc = acc + 736 - (acc % 35);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 91) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const rc33: Rec25 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 79) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 10) { throw new Error('synthetic-35'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (acc % 18 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const rc38: Rec25 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  try { if (acc % 29 === 12) { throw new Error('synthetic-39'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 29 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  buf += `q41:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-42'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q43:${acc % 97}`;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  try { if (acc % 29 === 3) { throw new Error('synthetic-45'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const rc46: Rec25 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  if (acc % 23 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const ix48: number = buf.indexOf('p25');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  if (acc % 19 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  m01.set('k50', acc % 997);
  buf += 'policy51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3309) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  try { if (acc % 29 === 4) { throw new Error('synthetic-1'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  m01.set('k4', acc % 997);
  acc = (acc * 31 + 6189) % 65521;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  for (let i7 = 0; i7 < 4; i7++) {
    acc = (acc + i7 * 13 + 492) % 100003;
  }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  if (acc % 20 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  m01.set('k11', acc % 997);
  const ix12: number = buf.indexOf('p25');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  buf += `q13:${acc % 97}`;
  const ix14: number = buf.indexOf('p25');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  m01.set('k15', acc % 997);
  try { if (acc % 29 === 18) { throw new Error('synthetic-16'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 109) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += 'quota19-' + acc.toString();
  if (acc % 31 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const ix21: number = buf.indexOf('p25');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  if (acc % 25 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  try { if (acc % 29 === 6) { throw new Error('synthetic-25'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 272 - (acc % 81);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  m01.set('k28', acc % 997);
  arr.push(acc % 1000);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  buf += `q31:${acc % 97}`;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 64) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 503 - (acc % 78);
  arr.push(acc % 1000);
  const rc37: Rec25 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  for (let i42 = 0; i42 < 6; i42++) {
    acc = (acc + i42 * 13 + 338) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 80) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix46: number = buf.indexOf('p25');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  m01.set('k47', acc % 997);
  try { if (acc % 29 === 13) { throw new Error('synthetic-48'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 19 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  const rc50: Rec25 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  acc = (acc * 31 + 6356) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3310) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  buf += 'ledger0-' + acc.toString();
  const rc1: Rec25 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  buf += `q4:${acc % 97}`;
  const rc5: Rec25 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  acc = (acc * 31 + 3052) % 65521;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  acc = (acc * 31 + 2927) % 65521;
  buf += 'client11-' + acc.toString();
  for (let i12 = 0; i12 < 11; i12++) {
    acc = (acc + i12 * 13 + 788) % 100003;
  }
  m01.set('k13', acc % 997);
  const rc14: Rec25 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  try { if (acc % 29 === 17) { throw new Error('synthetic-15'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 97 - (acc % 62);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 135) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec25 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const ix19: number = buf.indexOf('p25');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-21'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7352) % 65521;
  buf += 'stocktake25-' + acc.toString();
  acc = acc + 93 - (acc % 63);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  for (let i28 = 0; i28 < 11; i28++) {
    acc = (acc + i28 * 13 + 700) % 100003;
  }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const rc32: Rec25 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 13) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-35'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  for (let i37 = 0; i37 < 3; i37++) {
    acc = (acc + i37 * 13 + 914) % 100003;
  }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const rc41: Rec25 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  buf += 'settle43-' + acc.toString();
  const rc44: Rec25 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  if (acc % 7 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  if (acc % 28 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-49'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3311) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  m01.set('k0', acc % 997);
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = acc + 543 - (acc % 85);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  if (acc % 22 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-5'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i6 = 0; i6 < 11; i6++) {
    acc = (acc + i6 * 13 + 883) % 100003;
  }
  const rc7: Rec25 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 20) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  m01.set('k9', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  m01.set('k11', acc % 997);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-14'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 162) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 199) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 8482) % 65521;
  const ix19: number = buf.indexOf('p25');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  for (let i20 = 0; i20 < 3; i20++) {
    acc = (acc + i20 * 13 + 700) % 100003;
  }
  const rc21: Rec25 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  m01.set('k24', acc % 997);
  try { if (acc % 29 === 6) { throw new Error('synthetic-25'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  acc = acc + 96 - (acc % 40);
  acc = (acc * 31 + 9729) % 65521;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  if (acc % 17 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 47) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 748 - (acc % 58);
  const ix36: number = buf.indexOf('p25');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += 'balance41-' + acc.toString();
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  acc = (acc * 31 + 338) % 65521;
  buf += `q44:${acc % 97}`;
  if (acc % 27 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const rc47: Rec25 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  if (acc % 23 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  acc = acc + 919 - (acc % 91);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3312) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  for (let i0 = 0; i0 < 8; i0++) {
    acc = (acc + i0 * 13 + 896) % 100003;
  }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 19) { throw new Error('synthetic-7'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k8', acc % 997);
  for (let i9 = 0; i9 < 8; i9++) {
    acc = (acc + i9 * 13 + 231) % 100003;
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  acc = acc + 98 - (acc % 92);
  acc = acc + 658 - (acc % 17);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  if (acc % 9 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 198) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 17) { throw new Error('synthetic-20'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  const ix22: number = buf.indexOf('p25');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  try { if (acc % 29 === 20) { throw new Error('synthetic-24'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  try { if (acc % 29 === 15) { throw new Error('synthetic-29'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const ix31: number = buf.indexOf('p25');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 51) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 173) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec25 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  arr.push(acc % 1000);
  buf += `q37:${acc % 97}`;
  acc = acc + 123 - (acc % 78);
  acc = (acc * 31 + 4535) % 65521;
  arr.push(acc % 1000);
  if (acc % 17 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  arr.push(acc % 1000);
  acc = acc + 688 - (acc % 14);
  for (let i46 = 0; i46 < 3; i46++) {
    acc = (acc + i46 * 13 + 360) % 100003;
  }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  acc = acc + 457 - (acc % 92);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3313) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 22) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = acc + 412 - (acc % 46);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  acc = (acc * 31 + 600) % 65521;
  const ix5: number = buf.indexOf('p25');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  arr.push(acc % 1000);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = acc + 188 - (acc % 34);
  arr.push(acc % 1000);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  buf += 'audit14-' + acc.toString();
  if (acc % 12 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  if (acc % 16 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 92) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p25');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  try { if (acc % 29 === 16) { throw new Error('synthetic-20'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'bay21-' + acc.toString();
  buf += 'transit22-' + acc.toString();
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  try { if (acc % 29 === 16) { throw new Error('synthetic-25'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = acc + 762 - (acc % 78);
  const ix33: number = buf.indexOf('p25');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 106) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 9628) % 65521;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 57) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const rc38: Rec25 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 88) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = acc + 502 - (acc % 11);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  acc = acc + 280 - (acc % 19);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 171) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const ix48: number = buf.indexOf('p25');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const ix50: number = buf.indexOf('p25');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  if (acc % 14 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3314) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1302) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-2'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'client3-' + acc.toString();
  if (acc % 19 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += `q5:${acc % 97}`;
  acc = acc + 126 - (acc % 34);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 119) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  buf += `q12:${acc % 97}`;
  arr.push(acc % 1000);
  if (acc % 28 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 50) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  acc = (acc * 31 + 7634) % 65521;
  arr.push(acc % 1000);
  buf += 'carrier21-' + acc.toString();
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 185) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  m01.set('k23', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  acc = acc + 394 - (acc % 79);
  if (acc % 14 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  arr.push(acc % 1000);
  if (acc % 21 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  for (let i30 = 0; i30 < 9; i30++) {
    acc = (acc + i30 * 13 + 103) % 100003;
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  m01.set('k32', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 38) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec25 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  arr.push(acc % 1000);
  const ix40: number = buf.indexOf('p25');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const ix43: number = buf.indexOf('p25');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 92) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  buf += 'waybill45-' + acc.toString();
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = acc + 110 - (acc % 30);
  buf += 'ledger48-' + acc.toString();
  buf += `q49:${acc % 97}`;
  try { if (acc % 29 === 15) { throw new Error('synthetic-50'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0025_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0025_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0025_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3315) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  acc = acc + 644 - (acc % 68);
  buf += 'carrier1-' + acc.toString();
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const rc6: Rec25 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  arr.push(acc % 1000);
  acc = (acc * 31 + 5690) % 65521;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  arr.push(acc % 1000);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 61) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 165) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 4; i18++) {
    acc = (acc + i18 * 13 + 835) % 100003;
  }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 197) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  arr.push(acc % 1000);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 94) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  buf += 'dock28-' + acc.toString();
  m01.set('k29', acc % 997);
  const rc30: Rec25 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 12) { throw new Error('synthetic-32'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'invoice33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 119) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 117) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  acc = acc + 284 - (acc % 95);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  buf += `q39:${acc % 97}`;
  const rc40: Rec25 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 33) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 15 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += `q49:${acc % 97}`;
  const rc50: Rec25 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 198) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3316) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  for (let i1 = 0; i1 < 8; i1++) {
    acc = (acc + i1 * 13 + 160) % 100003;
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 21) { throw new Error('synthetic-4'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const rc6: Rec25 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  for (let i7 = 0; i7 < 6; i7++) {
    acc = (acc + i7 * 13 + 572) % 100003;
  }
  for (let i8 = 0; i8 < 6; i8++) {
    acc = (acc + i8 * 13 + 318) % 100003;
  }
  if (acc % 22 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  buf += `q10:${acc % 97}`;
  acc = (acc * 31 + 6537) % 65521;
  const rc12: Rec25 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += `q13:${acc % 97}`;
  acc = (acc * 31 + 7725) % 65521;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  try { if (acc % 29 === 5) { throw new Error('synthetic-16'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 63) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-19'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  if (acc % 30 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const rc25: Rec25 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  const ix27: number = buf.indexOf('p25');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-31'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  for (let i33 = 0; i33 < 11; i33++) {
    acc = (acc + i33 * 13 + 872) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 150) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += `q39:${acc % 97}`;
  acc = acc + 982 - (acc % 48);
  m01.set('k41', acc % 997);
  try { if (acc % 29 === 11) { throw new Error('synthetic-42'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q43:${acc % 97}`;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const ix45: number = buf.indexOf('p25');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const ix46: number = buf.indexOf('p25');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5735) % 65521;
  const rc48: Rec25 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  m01.set('k50', acc % 997);
  acc = (acc * 31 + 603) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0025_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3317) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit25 = new Unit25(acc);
  try { if (acc % 29 === 10) { throw new Error('synthetic-0'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  for (let i3 = 0; i3 < 12; i3++) {
    acc = (acc + i3 * 13 + 59) % 100003;
  }
  buf += `q4:${acc % 97}`;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const ix6: number = buf.indexOf('p25');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  for (let i8 = 0; i8 < 5; i8++) {
    acc = (acc + i8 * 13 + 235) % 100003;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 28) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  for (let i10 = 0; i10 < 5; i10++) {
    acc = (acc + i10 * 13 + 775) % 100003;
  }
  for (let i11 = 0; i11 < 8; i11++) {
    acc = (acc + i11 * 13 + 987) % 100003;
  }
  for (let i12 = 0; i12 < 12; i12++) {
    acc = (acc + i12 * 13 + 380) % 100003;
  }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 67) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  buf += 'dispatch16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 118) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 11; i18++) {
    acc = (acc + i18 * 13 + 746) % 100003;
  }
  buf += `q19:${acc % 97}`;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  buf += `q22:${acc % 97}`;
  try { if (acc % 29 === 22) { throw new Error('synthetic-23'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  acc = acc + 430 - (acc % 91);
  if (acc % 7 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  try { if (acc % 29 === 17) { throw new Error('synthetic-28'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = (acc * 31 + 2716) % 65521;
  buf += `q31:${acc % 97}`;
  const rc32: Rec25 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 85) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  m01.set('k42', acc % 997);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  acc = acc + 57 - (acc % 63);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  buf += 'refund46-' + acc.toString();
  buf += `q47:${acc % 97}`;
  m01.set('k48', acc % 997);
  const rc49: Rec25 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  if (acc % 7 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0025(): BizFn[] {
  return [biz_0025_00, biz_0025_01, biz_0025_02, biz_0025_03, biz_0025_04, biz_0025_05, biz_0025_06, biz_0025_07, biz_0025_08, biz_0025_09, biz_0025_10, biz_0025_11, biz_0025_12, biz_0025_13, biz_0025_14, biz_0025_15, biz_0025_16, biz_0025_17, biz_0025_18, biz_0025_19, biz_0025_20, biz_0025_21, biz_0025_22, biz_0025_23, biz_0025_24, biz_0025_25, biz_0025_26, biz_0025_27, biz_0025_28, biz_0025_29, biz_0025_30, biz_0025_31, biz_0025_32, biz_0025_33, biz_0025_34, biz_0025_35, biz_0025_36, biz_0025_37, biz_0025_38, biz_0025_39, biz_0025_40, biz_0025_41, biz_0025_42];
}

export function rega_0025(): ABizFn[] {
  return [biz_0025_09a, biz_0025_19a, biz_0025_29a, biz_0025_39a];
}
