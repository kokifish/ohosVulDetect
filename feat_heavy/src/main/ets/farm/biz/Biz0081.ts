// Biz0081.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec81 { id: number; tag: string; score: number; }

class Unit81 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0081_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 638) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  if (acc % 28 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const ix5: number = buf.indexOf('p81');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  for (let i6 = 0; i6 < 7; i6++) {
    acc = (acc + i6 * 13 + 209) % 100003;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-7'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q8:${acc % 97}`;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += 'ticket10-' + acc.toString();
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-13'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3784) % 65521;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 141) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 152) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  if (acc % 5 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  buf += 'pallet20-' + acc.toString();
  buf += `q21:${acc % 97}`;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const rc25: Rec81 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  acc = (acc * 31 + 2994) % 65521;
  const ix27: number = buf.indexOf('p81');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  acc = acc + 135 - (acc % 96);
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = (acc * 31 + 4814) % 65521;
  buf += 'region32-' + acc.toString();
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 133) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 81) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 195) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += 'journey39-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = acc + 204 - (acc % 43);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 134) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = acc + 829 - (acc % 27);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = (acc * 31 + 5737) % 65521;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 173) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  buf += `q48:${acc % 97}`;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8093) % 65521;
  if (acc % 25 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 639) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  acc = acc + 381 - (acc % 42);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  arr.push(acc % 1000);
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-5'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  buf += `q7:${acc % 97}`;
  acc = (acc * 31 + 2068) % 65521;
  if (acc % 21 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += `q14:${acc % 97}`;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  for (let i16 = 0; i16 < 11; i16++) {
    acc = (acc + i16 * 13 + 916) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 168) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p81');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8855) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  buf += `q22:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2156) % 65521;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const ix28: number = buf.indexOf('p81');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  try { if (acc % 29 === 18) { throw new Error('synthetic-30'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  for (let i32 = 0; i32 < 9; i32++) {
    acc = (acc + i32 * 13 + 699) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 197) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 27 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  acc = acc + 101 - (acc % 61);
  m01.set('k37', acc % 997);
  buf += `q38:${acc % 97}`;
  const rc39: Rec81 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  acc = acc + 187 - (acc % 90);
  acc = acc + 359 - (acc % 72);
  acc = acc + 56 - (acc % 29);
  try { if (acc % 29 === 11) { throw new Error('synthetic-44'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = (acc * 31 + 9799) % 65521;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  acc = acc + 662 - (acc % 39);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 640) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  m01.set('k0', acc % 997);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const ix2: number = buf.indexOf('p81');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  if (acc % 27 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = (acc * 31 + 496) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-5'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 587) % 65521;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  arr.push(acc % 1000);
  acc = (acc * 31 + 2385) % 65521;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += 'journey12-' + acc.toString();
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const ix14: number = buf.indexOf('p81');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 193) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  try { if (acc % 29 === 12) { throw new Error('synthetic-19'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 12 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = (acc * 31 + 2140) % 65521;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 161) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = (acc * 31 + 2235) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  buf += `q29:${acc % 97}`;
  for (let i30 = 0; i30 < 4; i30++) {
    acc = (acc + i30 * 13 + 468) % 100003;
  }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 9) { throw new Error('synthetic-32'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 126) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 185) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q37:${acc % 97}`;
  try { if (acc % 29 === 13) { throw new Error('synthetic-38'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 106) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  if (acc % 9 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3257) % 65521;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += `q44:${acc % 97}`;
  const ix45: number = buf.indexOf('p81');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i47 = 0; i47 < 11; i47++) {
    acc = (acc + i47 * 13 + 579) % 100003;
  }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  acc = acc + 643 - (acc % 20);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  acc = acc + 872 - (acc % 59);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 641) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  for (let i0 = 0; i0 < 3; i0++) {
    acc = (acc + i0 * 13 + 447) % 100003;
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  m01.set('k6', acc % 997);
  const ix7: number = buf.indexOf('p81');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  m01.set('k8', acc % 997);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 12) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  try { if (acc % 29 === 21) { throw new Error('synthetic-12'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const ix14: number = buf.indexOf('p81');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 198) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  for (let i21 = 0; i21 < 6; i21++) {
    acc = (acc + i21 * 13 + 194) % 100003;
  }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  buf += 'payout23-' + acc.toString();
  for (let i24 = 0; i24 < 3; i24++) {
    acc = (acc + i24 * 13 + 274) % 100003;
  }
  acc = acc + 463 - (acc % 13);
  buf += 'batch26-' + acc.toString();
  buf += 'settle27-' + acc.toString();
  if (acc % 16 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  buf += 'stocktake30-' + acc.toString();
  if (acc % 20 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const rc32: Rec81 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  if (acc % 20 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 181) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 155) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const ix36: number = buf.indexOf('p81');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  const ix37: number = buf.indexOf('p81');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  buf += 'transit38-' + acc.toString();
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  buf += 'routeplan40-' + acc.toString();
  for (let i41 = 0; i41 < 4; i41++) {
    acc = (acc + i41 * 13 + 647) % 100003;
  }
  acc = (acc * 31 + 3900) % 65521;
  acc = acc + 169 - (acc % 87);
  if (acc % 18 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  buf += `q47:${acc % 97}`;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 642) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  const rc0: Rec81 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  arr.push(acc % 1000);
  try { if (acc % 29 === 13) { throw new Error('synthetic-2'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += `q4:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const rc8: Rec81 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  arr.push(acc % 1000);
  if (acc % 25 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const rc11: Rec81 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  const rc13: Rec81 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  for (let i16 = 0; i16 < 4; i16++) {
    acc = (acc + i16 * 13 + 593) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 125) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 144) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += 'carrier24-' + acc.toString();
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  arr.push(acc % 1000);
  const ix27: number = buf.indexOf('p81');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  buf += 'tariff28-' + acc.toString();
  acc = (acc * 31 + 3102) % 65521;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-31'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const ix32: number = buf.indexOf('p81');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 97) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p81');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  m01.set('k37', acc % 997);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 108) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = (acc * 31 + 1004) % 65521;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  acc = acc + 938 - (acc % 55);
  const rc43: Rec81 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += `q47:${acc % 97}`;
  buf += 'freight48-' + acc.toString();
  const ix49: number = buf.indexOf('p81');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += `q50:${acc % 97}`;
  if (acc % 5 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 643) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  acc = (acc * 31 + 2942) % 65521;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 86) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const ix4: number = buf.indexOf('p81');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-5'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 161) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  for (let i7 = 0; i7 < 11; i7++) {
    acc = (acc + i7 * 13 + 639) % 100003;
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-8'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 999 - (acc % 27);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const ix11: number = buf.indexOf('p81');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  m01.set('k13', acc % 997);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 191) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix20: number = buf.indexOf('p81');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-21'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q23:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  m01.set('k28', acc % 997);
  buf += 'settle29-' + acc.toString();
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  buf += `q31:${acc % 97}`;
  buf += 'dock32-' + acc.toString();
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 106) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 12; i35++) {
    acc = (acc + i35 * 13 + 623) % 100003;
  }
  if (acc % 14 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  for (let i40 = 0; i40 < 10; i40++) {
    acc = (acc + i40 * 13 + 231) % 100003;
  }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 103) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  if (acc % 17 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const rc44: Rec81 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  try { if (acc % 29 === 12) { throw new Error('synthetic-45'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-46'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-51'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 644) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  arr.push(acc % 1000);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  buf += 'refund6-' + acc.toString();
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  acc = acc + 496 - (acc % 9);
  arr.push(acc % 1000);
  acc = acc + 159 - (acc % 21);
  for (let i12 = 0; i12 < 6; i12++) {
    acc = (acc + i12 * 13 + 689) % 100003;
  }
  const ix13: number = buf.indexOf('p81');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const rc14: Rec81 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const ix15: number = buf.indexOf('p81');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 106) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 46) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  try { if (acc % 29 === 3) { throw new Error('synthetic-19'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  arr.push(acc % 1000);
  acc = acc + 682 - (acc % 67);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  arr.push(acc % 1000);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4288) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-32'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 178 - (acc % 46);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 156) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  try { if (acc % 29 === 9) { throw new Error('synthetic-36'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  m01.set('k39', acc % 997);
  buf += 'region40-' + acc.toString();
  if (acc % 26 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 112) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  buf += `q44:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  for (let i47 = 0; i47 < 6; i47++) {
    acc = (acc + i47 * 13 + 429) % 100003;
  }
  buf += `q48:${acc % 97}`;
  const rc49: Rec81 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  buf += `q50:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 645) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  if (acc % 14 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const rc2: Rec81 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  for (let i6 = 0; i6 < 12; i6++) {
    acc = (acc + i6 * 13 + 134) % 100003;
  }
  buf += 'customs7-' + acc.toString();
  const ix8: number = buf.indexOf('p81');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 196) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  acc = (acc * 31 + 7377) % 65521;
  buf += `q11:${acc % 97}`;
  const rc12: Rec81 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  for (let i13 = 0; i13 < 3; i13++) {
    acc = (acc + i13 * 13 + 776) % 100003;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-14'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 16 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const rc16: Rec81 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 189) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  buf += `q20:${acc % 97}`;
  const rc21: Rec81 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  acc = (acc * 31 + 406) % 65521;
  acc = (acc * 31 + 5655) % 65521;
  m01.set('k24', acc % 997);
  arr.push(acc % 1000);
  const ix26: number = buf.indexOf('p81');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const ix27: number = buf.indexOf('p81');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const rc28: Rec81 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  if (acc % 31 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 53) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 113) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 7116) % 65521;
  const rc36: Rec81 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  buf += 'dock37-' + acc.toString();
  m01.set('k38', acc % 997);
  const rc39: Rec81 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  acc = (acc * 31 + 8222) % 65521;
  const ix41: number = buf.indexOf('p81');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  if (acc % 19 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  m01.set('k45', acc % 997);
  m01.set('k46', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  for (let i49 = 0; i49 < 4; i49++) {
    acc = (acc + i49 * 13 + 250) % 100003;
  }
  acc = acc + 885 - (acc % 84);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 646) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  try { if (acc % 29 === 23) { throw new Error('synthetic-0'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  for (let i3 = 0; i3 < 5; i3++) {
    acc = (acc + i3 * 13 + 306) % 100003;
  }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-5'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k6', acc % 997);
  arr.push(acc % 1000);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  try { if (acc % 29 === 9) { throw new Error('synthetic-9'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'quota10-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  if (acc % 24 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 136) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  const rc15: Rec81 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  try { if (acc % 29 === 18) { throw new Error('synthetic-16'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 155) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 3379) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  m01.set('k21', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  m01.set('k23', acc % 997);
  acc = (acc * 31 + 8074) % 65521;
  const rc25: Rec81 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  acc = (acc * 31 + 6024) % 65521;
  m01.set('k29', acc % 997);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  if (acc % 30 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const ix33: number = buf.indexOf('p81');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 14) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  for (let i36 = 0; i36 < 11; i36++) {
    acc = (acc + i36 * 13 + 222) % 100003;
  }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 88) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  acc = (acc * 31 + 3844) % 65521;
  const rc46: Rec81 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const ix47: number = buf.indexOf('p81');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const ix49: number = buf.indexOf('p81');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 146) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = (acc * 31 + 5986) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 647) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  const rc0: Rec81 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const rc1: Rec81 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = (acc * 31 + 9688) % 65521;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  acc = (acc * 31 + 3447) % 65521;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  if (acc % 29 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += `q15:${acc % 97}`;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 111) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-21'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  const rc23: Rec81 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  for (let i24 = 0; i24 < 9; i24++) {
    acc = (acc + i24 * 13 + 222) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = acc + 201 - (acc % 35);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const ix30: number = buf.indexOf('p81');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  for (let i33 = 0; i33 < 11; i33++) {
    acc = (acc + i33 * 13 + 987) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 148) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p81');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  for (let i36 = 0; i36 < 7; i36++) {
    acc = (acc + i36 * 13 + 941) % 100003;
  }
  m01.set('k37', acc % 997);
  for (let i38 = 0; i38 < 7; i38++) {
    acc = (acc + i38 * 13 + 12) % 100003;
  }
  m01.set('k39', acc % 997);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  for (let i41 = 0; i41 < 10; i41++) {
    acc = (acc + i41 * 13 + 832) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  m01.set('k44', acc % 997);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 172) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  acc = (acc * 31 + 5302) % 65521;
  if (acc % 14 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  acc = acc + 727 - (acc % 55);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0081_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0081_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0081_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 648) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  buf += `q1:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = (acc * 31 + 3181) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-5'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 25) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  arr.push(acc % 1000);
  buf += 'bay10-' + acc.toString();
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 129) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 184) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const ix14: number = buf.indexOf('p81');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (acc % 10 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 26) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  acc = (acc * 31 + 3008) % 65521;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 13) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-22'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  for (let i25 = 0; i25 < 7; i25++) {
    acc = (acc + i25 * 13 + 521) % 100003;
  }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  buf += 'shelf28-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const ix31: number = buf.indexOf('p81');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  buf += `q32:${acc % 97}`;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 194) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  for (let i36 = 0; i36 < 10; i36++) {
    acc = (acc + i36 * 13 + 894) % 100003;
  }
  const ix37: number = buf.indexOf('p81');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = acc + 174 - (acc % 64);
  for (let i44 = 0; i44 < 12; i44++) {
    acc = (acc + i44 * 13 + 369) % 100003;
  }
  buf += `q45:${acc % 97}`;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 14) { throw new Error('synthetic-47'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 58) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 13) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 649) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  buf += `q0:${acc % 97}`;
  const ix1: number = buf.indexOf('p81');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  acc = acc + 769 - (acc % 30);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  buf += `q4:${acc % 97}`;
  for (let i5 = 0; i5 < 9; i5++) {
    acc = (acc + i5 * 13 + 746) % 100003;
  }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  arr.push(acc % 1000);
  const ix9: number = buf.indexOf('p81');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const rc10: Rec81 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const ix11: number = buf.indexOf('p81');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const rc12: Rec81 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  try { if (acc % 29 === 4) { throw new Error('synthetic-13'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  arr.push(acc % 1000);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 41) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'carrier18-' + acc.toString();
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 122) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  buf += `q21:${acc % 97}`;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  for (let i23 = 0; i23 < 6; i23++) {
    acc = (acc + i23 * 13 + 643) % 100003;
  }
  buf += `q24:${acc % 97}`;
  acc = (acc * 31 + 6654) % 65521;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  acc = (acc * 31 + 8013) % 65521;
  m01.set('k28', acc % 997);
  for (let i29 = 0; i29 < 10; i29++) {
    acc = (acc + i29 * 13 + 318) % 100003;
  }
  const ix30: number = buf.indexOf('p81');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-31'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 149) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 11; i35++) {
    acc = (acc + i35 * 13 + 880) % 100003;
  }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 107) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  arr.push(acc % 1000);
  acc = acc + 66 - (acc % 78);
  const rc46: Rec81 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 16) { throw new Error('synthetic-48'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  if (acc % 16 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const ix51: number = buf.indexOf('p81');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 650) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  if (acc % 30 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  for (let i1 = 0; i1 < 12; i1++) {
    acc = (acc + i1 * 13 + 794) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const ix3: number = buf.indexOf('p81');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-4'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'settle5-' + acc.toString();
  const rc6: Rec81 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  arr.push(acc % 1000);
  for (let i8 = 0; i8 < 11; i8++) {
    acc = (acc + i8 * 13 + 82) % 100003;
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-9'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3417) % 65521;
  acc = (acc * 31 + 5765) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-12'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i13 = 0; i13 < 12; i13++) {
    acc = (acc + i13 * 13 + 556) % 100003;
  }
  buf += 'invoice14-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 3574) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 149) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = acc + 429 - (acc % 68);
  const rc21: Rec81 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  acc = (acc * 31 + 1564) % 65521;
  acc = (acc * 31 + 7991) % 65521;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const ix27: number = buf.indexOf('p81');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 190 - (acc % 44);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 138) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 74) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 164) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-37'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-38'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 186) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  buf += `q40:${acc % 97}`;
  acc = acc + 283 - (acc % 90);
  buf += `q42:${acc % 97}`;
  buf += 'freight43-' + acc.toString();
  m01.set('k44', acc % 997);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const rc46: Rec81 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  acc = (acc * 31 + 9019) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-48'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'shelf49-' + acc.toString();
  for (let i50 = 0; i50 < 12; i50++) {
    acc = (acc + i50 * 13 + 28) % 100003;
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 117) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 651) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  acc = (acc * 31 + 3383) % 65521;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  m01.set('k7', acc % 997);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  if (acc % 18 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  for (let i10 = 0; i10 < 12; i10++) {
    acc = (acc + i10 * 13 + 382) % 100003;
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  buf += `q12:${acc % 97}`;
  if (acc % 23 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const ix14: number = buf.indexOf('p81');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = acc + 115 - (acc % 50);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 167) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  buf += 'coupon19-' + acc.toString();
  buf += `q20:${acc % 97}`;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 169) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  buf += 'freight22-' + acc.toString();
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5487) % 65521;
  for (let i28 = 0; i28 < 8; i28++) {
    acc = (acc + i28 * 13 + 569) % 100003;
  }
  if (acc % 13 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const ix33: number = buf.indexOf('p81');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 35) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p81');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  m01.set('k36', acc % 997);
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  try { if (acc % 29 === 12) { throw new Error('synthetic-38'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'tariff39-' + acc.toString();
  if (acc % 13 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  const ix45: number = buf.indexOf('p81');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += `q48:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 652) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  buf += `q1:${acc % 97}`;
  buf += 'payout2-' + acc.toString();
  try { if (acc % 29 === 18) { throw new Error('synthetic-3'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const rc6: Rec81 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += 'ticket8-' + acc.toString();
  arr.push(acc % 1000);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 133) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  m01.set('k11', acc % 997);
  arr.push(acc % 1000);
  acc = acc + 832 - (acc % 14);
  if (acc % 30 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  acc = acc + 486 - (acc % 31);
  const rc16: Rec81 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 193) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = (acc * 31 + 9958) % 65521;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  arr.push(acc % 1000);
  acc = acc + 790 - (acc % 80);
  buf += `q23:${acc % 97}`;
  const ix24: number = buf.indexOf('p81');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 80) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix28: number = buf.indexOf('p81');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  buf += `q29:${acc % 97}`;
  arr.push(acc % 1000);
  acc = acc + 732 - (acc % 14);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  const rc33: Rec81 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 166) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  acc = acc + 942 - (acc % 61);
  buf += `q37:${acc % 97}`;
  if (acc % 13 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const rc40: Rec81 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const rc41: Rec81 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 134) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  const ix43: number = buf.indexOf('p81');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 56) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-45'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  arr.push(acc % 1000);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 653) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  buf += 'transit0-' + acc.toString();
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  if (acc % 19 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-4'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const ix8: number = buf.indexOf('p81');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const ix9: number = buf.indexOf('p81');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  if (acc % 8 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-11'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const ix12: number = buf.indexOf('p81');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 184) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const ix20: number = buf.indexOf('p81');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  m01.set('k22', acc % 997);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const rc24: Rec81 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  acc = acc + 85 - (acc % 12);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const ix27: number = buf.indexOf('p81');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const ix28: number = buf.indexOf('p81');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const rc29: Rec81 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  m01.set('k30', acc % 997);
  const ix31: number = buf.indexOf('p81');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 193) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const rc37: Rec81 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 65) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  buf += 'depot39-' + acc.toString();
  acc = (acc * 31 + 7028) % 65521;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  buf += 'waybill43-' + acc.toString();
  try { if (acc % 29 === 8) { throw new Error('synthetic-44'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3806) % 65521;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const rc50: Rec81 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  try { if (acc % 29 === 12) { throw new Error('synthetic-51'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 654) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  m01.set('k0', acc % 997);
  buf += 'dock1-' + acc.toString();
  m01.set('k2', acc % 997);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  buf += `q5:${acc % 97}`;
  try { if (acc % 29 === 19) { throw new Error('synthetic-6'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const rc8: Rec81 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  m01.set('k9', acc % 997);
  m01.set('k10', acc % 997);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  acc = acc + 642 - (acc % 55);
  const rc13: Rec81 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const rc14: Rec81 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  if (acc % 30 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 41) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 27 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5235) % 65521;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  buf += `q22:${acc % 97}`;
  try { if (acc % 29 === 10) { throw new Error('synthetic-23'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const rc25: Rec81 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const ix27: number = buf.indexOf('p81');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const rc29: Rec81 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  buf += `q30:${acc % 97}`;
  m01.set('k31', acc % 997);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 152) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 13) { throw new Error('synthetic-35'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 162) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const rc37: Rec81 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  acc = acc + 519 - (acc % 29);
  for (let i39 = 0; i39 < 12; i39++) {
    acc = (acc + i39 * 13 + 502) % 100003;
  }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  for (let i41 = 0; i41 < 7; i41++) {
    acc = (acc + i41 * 13 + 795) % 100003;
  }
  if (acc % 18 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  for (let i44 = 0; i44 < 9; i44++) {
    acc = (acc + i44 * 13 + 240) % 100003;
  }
  acc = (acc * 31 + 6039) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  if (acc % 8 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  acc = acc + 939 - (acc % 8);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 655) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  for (let i0 = 0; i0 < 7; i0++) {
    acc = (acc + i0 * 13 + 492) % 100003;
  }
  const rc1: Rec81 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  try { if (acc % 29 === 5) { throw new Error('synthetic-2'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  acc = acc + 216 - (acc % 41);
  const ix7: number = buf.indexOf('p81');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 65) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const rc10: Rec81 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  buf += 'bay11-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-13'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const ix14: number = buf.indexOf('p81');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += 'shelf15-' + acc.toString();
  acc = (acc * 31 + 9110) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 151) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  if (acc % 6 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const rc20: Rec81 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  buf += 'pallet21-' + acc.toString();
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 129) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  try { if (acc % 29 === 3) { throw new Error('synthetic-23'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 476) % 65521;
  const ix25: number = buf.indexOf('p81');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  buf += `q30:${acc % 97}`;
  buf += 'pallet31-' + acc.toString();
  const ix32: number = buf.indexOf('p81');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 130) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 1889) % 65521;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  try { if (acc % 29 === 6) { throw new Error('synthetic-38'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += 'order40-' + acc.toString();
  m01.set('k41', acc % 997);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += 'quota44-' + acc.toString();
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  acc = (acc * 31 + 8491) % 65521;
  acc = acc + 622 - (acc % 10);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const ix50: number = buf.indexOf('p81');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 656) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 154) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  try { if (acc % 29 === 18) { throw new Error('synthetic-1'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q2:${acc % 97}`;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  for (let i4 = 0; i4 < 4; i4++) {
    acc = (acc + i4 * 13 + 670) % 100003;
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  m01.set('k8', acc % 997);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  m01.set('k15', acc % 997);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 117) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  m01.set('k20', acc % 997);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-22'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  const rc24: Rec81 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  buf += 'vendor25-' + acc.toString();
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  buf += 'coupon27-' + acc.toString();
  for (let i28 = 0; i28 < 10; i28++) {
    acc = (acc + i28 * 13 + 222) % 100003;
  }
  const ix29: number = buf.indexOf('p81');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-30'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const ix33: number = buf.indexOf('p81');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 163) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 586 - (acc % 34);
  for (let i36 = 0; i36 < 6; i36++) {
    acc = (acc + i36 * 13 + 626) % 100003;
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  buf += 'rebate38-' + acc.toString();
  acc = (acc * 31 + 9171) % 65521;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  m01.set('k41', acc % 997);
  for (let i42 = 0; i42 < 6; i42++) {
    acc = (acc + i42 * 13 + 18) % 100003;
  }
  buf += `q43:${acc % 97}`;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  try { if (acc % 29 === 15) { throw new Error('synthetic-45'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q46:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  for (let i48 = 0; i48 < 9; i48++) {
    acc = (acc + i48 * 13 + 87) % 100003;
  }
  acc = acc + 980 - (acc % 11);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 657) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const ix1: number = buf.indexOf('p81');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  acc = acc + 879 - (acc % 49);
  arr.push(acc % 1000);
  const ix11: number = buf.indexOf('p81');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  acc = acc + 60 - (acc % 40);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 54) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 85) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 52) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec81 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  for (let i22 = 0; i22 < 12; i22++) {
    acc = (acc + i22 * 13 + 969) % 100003;
  }
  acc = acc + 805 - (acc % 86);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 65) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  acc = (acc * 31 + 151) % 65521;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (acc % 12 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += `q30:${acc % 97}`;
  for (let i31 = 0; i31 < 11; i31++) {
    acc = (acc + i31 * 13 + 808) % 100003;
  }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 175) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 66) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  m01.set('k42', acc % 997);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  for (let i44 = 0; i44 < 10; i44++) {
    acc = (acc + i44 * 13 + 143) % 100003;
  }
  for (let i45 = 0; i45 < 11; i45++) {
    acc = (acc + i45 * 13 + 811) % 100003;
  }
  for (let i46 = 0; i46 < 8; i46++) {
    acc = (acc + i46 * 13 + 761) % 100003;
  }
  buf += 'stocktake47-' + acc.toString();
  buf += 'dock48-' + acc.toString();
  for (let i49 = 0; i49 < 11; i49++) {
    acc = (acc + i49 * 13 + 584) % 100003;
  }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3540) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0081_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0081_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0081_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 658) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  acc = acc + 757 - (acc % 52);
  if (acc % 16 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const rc2: Rec81 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += `q4:${acc % 97}`;
  const ix5: number = buf.indexOf('p81');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  m01.set('k6', acc % 997);
  const rc7: Rec81 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  m01.set('k8', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix11: number = buf.indexOf('p81');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  arr.push(acc % 1000);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  m01.set('k15', acc % 997);
  const rc16: Rec81 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 171) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 82) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  m01.set('k22', acc % 997);
  const rc23: Rec81 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  buf += `q24:${acc % 97}`;
  acc = (acc * 31 + 134) % 65521;
  acc = (acc * 31 + 9130) % 65521;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  for (let i29 = 0; i29 < 7; i29++) {
    acc = (acc + i29 * 13 + 245) % 100003;
  }
  buf += `q30:${acc % 97}`;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  if (acc % 16 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 152) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 11; i35++) {
    acc = (acc + i35 * 13 + 396) % 100003;
  }
  m01.set('k36', acc % 997);
  if (acc % 26 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const rc39: Rec81 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 116) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  for (let i42 = 0; i42 < 5; i42++) {
    acc = (acc + i42 * 13 + 831) % 100003;
  }
  m01.set('k43', acc % 997);
  if (acc % 23 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  for (let i45 = 0; i45 < 12; i45++) {
    acc = (acc + i45 * 13 + 569) % 100003;
  }
  for (let i46 = 0; i46 < 5; i46++) {
    acc = (acc + i46 * 13 + 345) % 100003;
  }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  acc = (acc * 31 + 1305) % 65521;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 9) { throw new Error('synthetic-51'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 659) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  m01.set('k0', acc % 997);
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 116) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  for (let i4 = 0; i4 < 5; i4++) {
    acc = (acc + i4 * 13 + 308) % 100003;
  }
  buf += `q5:${acc % 97}`;
  buf += 'vendor6-' + acc.toString();
  acc = (acc * 31 + 8527) % 65521;
  const rc8: Rec81 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  buf += 'warehouse9-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1165) % 65521;
  if (acc % 15 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  buf += 'crate13-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += 'warehouse16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const rc21: Rec81 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const ix22: number = buf.indexOf('p81');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 118) % 65521;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  acc = acc + 925 - (acc % 36);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const ix27: number = buf.indexOf('p81');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const ix29: number = buf.indexOf('p81');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  m01.set('k32', acc % 997);
  const rc33: Rec81 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 134) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  for (let i37 = 0; i37 < 6; i37++) {
    acc = (acc + i37 * 13 + 25) % 100003;
  }
  buf += `q38:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  buf += 'dispatch40-' + acc.toString();
  for (let i41 = 0; i41 < 5; i41++) {
    acc = (acc + i41 * 13 + 922) % 100003;
  }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 6 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const ix45: number = buf.indexOf('p81');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-49'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = acc + 486 - (acc % 43);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 660) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (acc % 17 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  m01.set('k2', acc % 997);
  try { if (acc % 29 === 14) { throw new Error('synthetic-3'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q5:${acc % 97}`;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3211) % 65521;
  const rc8: Rec81 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  buf += `q9:${acc % 97}`;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  arr.push(acc % 1000);
  const ix12: number = buf.indexOf('p81');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4396) % 65521;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 94) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'vendor18-' + acc.toString();
  const rc19: Rec81 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  buf += `q23:${acc % 97}`;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const ix25: number = buf.indexOf('p81');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  for (let i26 = 0; i26 < 10; i26++) {
    acc = (acc + i26 * 13 + 940) % 100003;
  }
  acc = acc + 463 - (acc % 31);
  const ix28: number = buf.indexOf('p81');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  for (let i29 = 0; i29 < 11; i29++) {
    acc = (acc + i29 * 13 + 269) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 153) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 16) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 523 - (acc % 97);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  for (let i37 = 0; i37 < 4; i37++) {
    acc = (acc + i37 * 13 + 933) % 100003;
  }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  m01.set('k39', acc % 997);
  m01.set('k40', acc % 997);
  for (let i41 = 0; i41 < 6; i41++) {
    acc = (acc + i41 * 13 + 380) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 146) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  if (acc % 28 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-45'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 28 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  m01.set('k47', acc % 997);
  const rc48: Rec81 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = acc + 878 - (acc % 86);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 661) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  const rc0: Rec81 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  try { if (acc % 29 === 12) { throw new Error('synthetic-1'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 92) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  buf += `q3:${acc % 97}`;
  try { if (acc % 29 === 14) { throw new Error('synthetic-4'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 84) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const rc7: Rec81 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q9:${acc % 97}`;
  acc = acc + 666 - (acc % 55);
  m01.set('k11', acc % 997);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-14'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 138) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 114) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 163) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 17 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const ix23: number = buf.indexOf('p81');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const rc25: Rec81 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const rc27: Rec81 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  acc = acc + 522 - (acc % 53);
  arr.push(acc % 1000);
  if (acc % 18 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = acc + 593 - (acc % 55);
  acc = (acc * 31 + 6308) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 98) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec81 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  buf += 'coupon36-' + acc.toString();
  buf += 'pallet37-' + acc.toString();
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 79) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  acc = (acc * 31 + 7775) % 65521;
  acc = acc + 629 - (acc % 36);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += `q42:${acc % 97}`;
  arr.push(acc % 1000);
  buf += `q44:${acc % 97}`;
  for (let i45 = 0; i45 < 12; i45++) {
    acc = (acc + i45 * 13 + 400) % 100003;
  }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  try { if (acc % 29 === 16) { throw new Error('synthetic-47'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  acc = acc + 163 - (acc % 88);
  const ix50: number = buf.indexOf('p81');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 662) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  acc = (acc * 31 + 4543) % 65521;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const ix3: number = buf.indexOf('p81');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  m01.set('k6', acc % 997);
  try { if (acc % 29 === 15) { throw new Error('synthetic-7'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k8', acc % 997);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  acc = (acc * 31 + 6898) % 65521;
  acc = acc + 57 - (acc % 57);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 53) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  acc = acc + 572 - (acc % 76);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 47) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  m01.set('k19', acc % 997);
  arr.push(acc % 1000);
  if (acc % 9 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-22'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const rc24: Rec81 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  m01.set('k26', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  acc = acc + 528 - (acc % 91);
  arr.push(acc % 1000);
  const ix30: number = buf.indexOf('p81');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 823 - (acc % 15);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 124) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  m01.set('k39', acc % 997);
  const rc40: Rec81 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  acc = (acc * 31 + 4559) % 65521;
  for (let i42 = 0; i42 < 12; i42++) {
    acc = (acc + i42 * 13 + 529) % 100003;
  }
  arr.push(acc % 1000);
  const ix44: number = buf.indexOf('p81');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const rc47: Rec81 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += `q48:${acc % 97}`;
  try { if (acc % 29 === 10) { throw new Error('synthetic-49'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 663) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  buf += `q0:${acc % 97}`;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 79) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const rc2: Rec81 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  acc = acc + 54 - (acc % 22);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  if (acc % 17 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  buf += `q9:${acc % 97}`;
  acc = acc + 800 - (acc % 65);
  acc = acc + 890 - (acc % 39);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 15) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  m01.set('k14', acc % 997);
  const rc15: Rec81 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  acc = acc + 34 - (acc % 89);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 57) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 376 - (acc % 22);
  acc = acc + 291 - (acc % 67);
  m01.set('k20', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-22'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  if (acc % 9 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  acc = acc + 228 - (acc % 72);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const rc27: Rec81 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  m01.set('k28', acc % 997);
  if (acc % 13 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const rc30: Rec81 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const rc32: Rec81 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 85) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (acc % 6 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-43'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const ix44: number = buf.indexOf('p81');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const rc45: Rec81 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 113) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  buf += 'tariff47-' + acc.toString();
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  for (let i49 = 0; i49 < 9; i49++) {
    acc = (acc + i49 * 13 + 62) % 100003;
  }
  acc = (acc * 31 + 7485) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 664) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  if (acc % 22 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  for (let i1 = 0; i1 < 7; i1++) {
    acc = (acc + i1 * 13 + 304) % 100003;
  }
  m01.set('k2', acc % 997);
  acc = (acc * 31 + 104) % 65521;
  buf += `q4:${acc % 97}`;
  if (acc % 11 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  m01.set('k8', acc % 997);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const rc12: Rec81 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += 'sku13-' + acc.toString();
  if (acc % 29 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  for (let i15 = 0; i15 < 7; i15++) {
    acc = (acc + i15 * 13 + 160) % 100003;
  }
  acc = acc + 71 - (acc % 97);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 46) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 173) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  buf += `q20:${acc % 97}`;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 67) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-22'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  m01.set('k25', acc % 997);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  m01.set('k27', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  buf += `q29:${acc % 97}`;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 55) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  m01.set('k31', acc % 997);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 162) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-37'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  try { if (acc % 29 === 18) { throw new Error('synthetic-39'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'transit40-' + acc.toString();
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  acc = acc + 779 - (acc % 62);
  const rc43: Rec81 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const ix44: number = buf.indexOf('p81');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  try { if (acc % 29 === 23) { throw new Error('synthetic-48'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 16 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-50'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 665) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  try { if (acc % 29 === 10) { throw new Error('synthetic-0'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  const rc1: Rec81 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  m01.set('k2', acc % 997);
  buf += 'rebate3-' + acc.toString();
  try { if (acc % 29 === 13) { throw new Error('synthetic-4'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q5:${acc % 97}`;
  buf += `q6:${acc % 97}`;
  acc = acc + 304 - (acc % 31);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  m01.set('k10', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += 'refund12-' + acc.toString();
  const ix13: number = buf.indexOf('p81');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 24) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 2347) % 65521;
  m01.set('k19', acc % 997);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  if (acc % 12 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const rc27: Rec81 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-30'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 76) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  m01.set('k36', acc % 997);
  m01.set('k37', acc % 997);
  const rc38: Rec81 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  for (let i39 = 0; i39 < 9; i39++) {
    acc = (acc + i39 * 13 + 648) % 100003;
  }
  m01.set('k40', acc % 997);
  buf += 'client41-' + acc.toString();
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const ix43: number = buf.indexOf('p81');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  for (let i44 = 0; i44 < 6; i44++) {
    acc = (acc + i44 * 13 + 989) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += 'crate46-' + acc.toString();
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = (acc * 31 + 520) % 65521;
  acc = (acc * 31 + 5989) % 65521;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 666) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  const ix0: number = buf.indexOf('p81');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  buf += `q1:${acc % 97}`;
  m01.set('k2', acc % 997);
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = (acc * 31 + 7465) % 65521;
  buf += `q5:${acc % 97}`;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc9: Rec81 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  m01.set('k12', acc % 997);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  for (let i15 = 0; i15 < 12; i15++) {
    acc = (acc + i15 * 13 + 315) % 100003;
  }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 86) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const ix19: number = buf.indexOf('p81');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  m01.set('k20', acc % 997);
  buf += `q21:${acc % 97}`;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = (acc * 31 + 143) % 65521;
  const ix24: number = buf.indexOf('p81');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  for (let i25 = 0; i25 < 8; i25++) {
    acc = (acc + i25 * 13 + 981) % 100003;
  }
  const ix26: number = buf.indexOf('p81');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  for (let i27 = 0; i27 < 11; i27++) {
    acc = (acc + i27 * 13 + 402) % 100003;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-28'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 155 - (acc % 43);
  try { if (acc % 29 === 12) { throw new Error('synthetic-32'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 16) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 128) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 12; i35++) {
    acc = (acc + i35 * 13 + 79) % 100003;
  }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += 'journey39-' + acc.toString();
  buf += `q40:${acc % 97}`;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  buf += 'stocktake42-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 75) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = acc + 337 - (acc % 77);
  const ix48: number = buf.indexOf('p81');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  m01.set('k50', acc % 997);
  if (acc % 10 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 667) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 115) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  try { if (acc % 29 === 17) { throw new Error('synthetic-4'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  try { if (acc % 29 === 16) { throw new Error('synthetic-7'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const rc8: Rec81 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  arr.push(acc % 1000);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 75) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  acc = (acc * 31 + 1955) % 65521;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += `q15:${acc % 97}`;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 127) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  if (acc % 31 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (acc % 7 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  for (let i26 = 0; i26 < 7; i26++) {
    acc = (acc + i26 * 13 + 316) % 100003;
  }
  arr.push(acc % 1000);
  m01.set('k28', acc % 997);
  const rc29: Rec81 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const rc30: Rec81 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += 'rebate33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 119) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  for (let i36 = 0; i36 < 8; i36++) {
    acc = (acc + i36 * 13 + 369) % 100003;
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  buf += 'portal39-' + acc.toString();
  m01.set('k40', acc % 997);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5769) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  if (acc % 12 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += 'tariff46-' + acc.toString();
  acc = (acc * 31 + 1560) % 65521;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += `q50:${acc % 97}`;
  try { if (acc % 29 === 20) { throw new Error('synthetic-51'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0081_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0081_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0081_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 668) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  buf += `q0:${acc % 97}`;
  buf += 'sku1-' + acc.toString();
  if (acc % 11 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  m01.set('k3', acc % 997);
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-7'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  arr.push(acc % 1000);
  for (let i12 = 0; i12 < 10; i12++) {
    acc = (acc + i12 * 13 + 262) % 100003;
  }
  m01.set('k13', acc % 997);
  buf += 'region14-' + acc.toString();
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 19) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 43) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  acc = (acc * 31 + 309) % 65521;
  buf += `q20:${acc % 97}`;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 172) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = (acc * 31 + 9612) % 65521;
  const rc23: Rec81 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  try { if (acc % 29 === 13) { throw new Error('synthetic-26'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const rc27: Rec81 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  buf += 'payout28-' + acc.toString();
  if (acc % 18 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += `q31:${acc % 97}`;
  const rc32: Rec81 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  try { if (acc % 29 === 10) { throw new Error('synthetic-33'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 99) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1726) % 65521;
  for (let i37 = 0; i37 < 4; i37++) {
    acc = (acc + i37 * 13 + 273) % 100003;
  }
  buf += `q38:${acc % 97}`;
  m01.set('k39', acc % 997);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  acc = (acc * 31 + 1655) % 65521;
  arr.push(acc % 1000);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  acc = acc + 811 - (acc % 9);
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  for (let i46 = 0; i46 < 11; i46++) {
    acc = (acc + i46 * 13 + 476) % 100003;
  }
  for (let i47 = 0; i47 < 4; i47++) {
    acc = (acc + i47 * 13 + 230) % 100003;
  }
  acc = (acc * 31 + 9768) % 65521;
  m01.set('k49', acc % 997);
  buf += `q50:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 669) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5959) % 65521;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 12) { throw new Error('synthetic-6'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9003) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-8'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k9', acc % 997);
  acc = acc + 439 - (acc % 55);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const rc12: Rec81 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const ix13: number = buf.indexOf('p81');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 21) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 42) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 9; i18++) {
    acc = (acc + i18 * 13 + 524) % 100003;
  }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  acc = (acc * 31 + 7347) % 65521;
  for (let i21 = 0; i21 < 5; i21++) {
    acc = (acc + i21 * 13 + 451) % 100003;
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  buf += 'carrier24-' + acc.toString();
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  buf += 'client26-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const ix28: number = buf.indexOf('p81');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 146) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  m01.set('k31', acc % 997);
  arr.push(acc % 1000);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 38) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 147) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  buf += `q39:${acc % 97}`;
  for (let i40 = 0; i40 < 8; i40++) {
    acc = (acc + i40 * 13 + 659) % 100003;
  }
  const rc41: Rec81 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 156) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  const ix43: number = buf.indexOf('p81');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  acc = acc + 20 - (acc % 84);
  for (let i45 = 0; i45 < 3; i45++) {
    acc = (acc + i45 * 13 + 281) % 100003;
  }
  buf += 'settle46-' + acc.toString();
  const rc47: Rec81 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  acc = (acc * 31 + 2218) % 65521;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 670) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  acc = (acc * 31 + 1278) % 65521;
  if (acc % 12 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const ix5: number = buf.indexOf('p81');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  m01.set('k6', acc % 997);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  m01.set('k8', acc % 997);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = acc + 563 - (acc % 48);
  acc = (acc * 31 + 1750) % 65521;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5944) % 65521;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 124) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 25 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  m01.set('k19', acc % 997);
  try { if (acc % 29 === 15) { throw new Error('synthetic-20'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i21 = 0; i21 < 3; i21++) {
    acc = (acc + i21 * 13 + 421) % 100003;
  }
  for (let i22 = 0; i22 < 8; i22++) {
    acc = (acc + i22 * 13 + 23) % 100003;
  }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 152) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  acc = acc + 97 - (acc % 64);
  acc = acc + 571 - (acc % 7);
  for (let i27 = 0; i27 < 5; i27++) {
    acc = (acc + i27 * 13 + 768) % 100003;
  }
  for (let i28 = 0; i28 < 11; i28++) {
    acc = (acc + i28 * 13 + 719) % 100003;
  }
  arr.push(acc % 1000);
  m01.set('k30', acc % 997);
  m01.set('k31', acc % 997);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 81) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  try { if (acc % 29 === 20) { throw new Error('synthetic-36'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  const ix37: number = buf.indexOf('p81');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const rc39: Rec81 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 37) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  m01.set('k41', acc % 997);
  m01.set('k42', acc % 997);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  if (acc % 11 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = acc + 204 - (acc % 14);
  try { if (acc % 29 === 14) { throw new Error('synthetic-48'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const rc49: Rec81 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  acc = acc + 462 - (acc % 17);
  const rc51: Rec81 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 671) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-1'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 25 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3710) % 65521;
  m01.set('k4', acc % 997);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 70) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const rc7: Rec81 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const rc8: Rec81 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const ix9: number = buf.indexOf('p81');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  m01.set('k11', acc % 997);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  for (let i16 = 0; i16 < 4; i16++) {
    acc = (acc + i16 * 13 + 328) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 38) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 384 - (acc % 47);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 91) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix21: number = buf.indexOf('p81');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 127) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  const ix24: number = buf.indexOf('p81');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 1008) % 65521;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 93) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += 'stocktake30-' + acc.toString();
  acc = (acc * 31 + 4468) % 65521;
  const rc32: Rec81 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = acc + 760 - (acc % 83);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 191) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 5553) % 65521;
  acc = acc + 522 - (acc % 86);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += 'stocktake38-' + acc.toString();
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  acc = (acc * 31 + 7828) % 65521;
  if (acc % 31 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (acc % 23 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = acc + 760 - (acc % 80);
  try { if (acc % 29 === 9) { throw new Error('synthetic-45'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const rc46: Rec81 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  for (let i47 = 0; i47 < 8; i47++) {
    acc = (acc + i47 * 13 + 510) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += 'routeplan50-' + acc.toString();
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 672) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  acc = acc + 651 - (acc % 13);
  m01.set('k1', acc % 997);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  const rc5: Rec81 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = acc + 71 - (acc % 7);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const rc9: Rec81 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  if (acc % 26 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const ix13: number = buf.indexOf('p81');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  buf += `q14:${acc % 97}`;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 137) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const ix16: number = buf.indexOf('p81');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 84) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 228 - (acc % 37);
  for (let i19 = 0; i19 < 12; i19++) {
    acc = (acc + i19 * 13 + 835) % 100003;
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  if (acc % 7 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const ix22: number = buf.indexOf('p81');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  for (let i25 = 0; i25 < 5; i25++) {
    acc = (acc + i25 * 13 + 206) % 100003;
  }
  m01.set('k26', acc % 997);
  if (acc % 12 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const rc28: Rec81 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  if (acc % 21 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 37) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-33'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 199) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 168) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  m01.set('k38', acc % 997);
  const ix39: number = buf.indexOf('p81');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  if (acc % 27 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8471) % 65521;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-43'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const rc44: Rec81 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const rc48: Rec81 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  buf += 'tariff50-' + acc.toString();
  acc = (acc * 31 + 7517) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 673) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  m01.set('k0', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const rc2: Rec81 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const rc3: Rec81 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const ix4: number = buf.indexOf('p81');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = acc + 659 - (acc % 21);
  for (let i6 = 0; i6 < 5; i6++) {
    acc = (acc + i6 * 13 + 949) % 100003;
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  acc = acc + 90 - (acc % 62);
  acc = (acc * 31 + 8436) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  buf += 'settle11-' + acc.toString();
  buf += `q12:${acc % 97}`;
  if (acc % 12 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  if (acc % 6 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 85) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 8653) % 65521;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = acc + 804 - (acc % 26);
  buf += `q21:${acc % 97}`;
  const rc22: Rec81 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  for (let i24 = 0; i24 < 12; i24++) {
    acc = (acc + i24 * 13 + 542) % 100003;
  }
  for (let i25 = 0; i25 < 12; i25++) {
    acc = (acc + i25 * 13 + 619) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const rc28: Rec81 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-29'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i30 = 0; i30 < 5; i30++) {
    acc = (acc + i30 * 13 + 244) % 100003;
  }
  m01.set('k31', acc % 997);
  acc = (acc * 31 + 7966) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 157) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 3159) % 65521;
  acc = acc + 840 - (acc % 83);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  acc = (acc * 31 + 4178) % 65521;
  acc = acc + 475 - (acc % 30);
  for (let i41 = 0; i41 < 10; i41++) {
    acc = (acc + i41 * 13 + 642) % 100003;
  }
  const rc42: Rec81 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  acc = (acc * 31 + 6553) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-45'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 146) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  m01.set('k47', acc % 997);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  acc = (acc * 31 + 8653) % 65521;
  const ix51: number = buf.indexOf('p81');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 674) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  for (let i0 = 0; i0 < 11; i0++) {
    acc = (acc + i0 * 13 + 776) % 100003;
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const ix4: number = buf.indexOf('p81');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  for (let i5 = 0; i5 < 9; i5++) {
    acc = (acc + i5 * 13 + 609) % 100003;
  }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const rc7: Rec81 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const rc8: Rec81 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-10'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i11 = 0; i11 < 12; i11++) {
    acc = (acc + i11 * 13 + 177) % 100003;
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  if (acc % 15 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 28) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'policy18-' + acc.toString();
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  m01.set('k20', acc % 997);
  buf += `q21:${acc % 97}`;
  buf += `q22:${acc % 97}`;
  buf += 'settle23-' + acc.toString();
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const ix25: number = buf.indexOf('p81');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const rc26: Rec81 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = (acc * 31 + 625) % 65521;
  const ix29: number = buf.indexOf('p81');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 175) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  m01.set('k31', acc % 997);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 20) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = (acc * 31 + 176) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 17) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'batch35-' + acc.toString();
  const ix36: number = buf.indexOf('p81');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  m01.set('k37', acc % 997);
  m01.set('k38', acc % 997);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 157) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const rc41: Rec81 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'waybill43-' + acc.toString();
  buf += `q44:${acc % 97}`;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  if (acc % 15 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1962) % 65521;
  if (acc % 30 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  acc = acc + 582 - (acc % 67);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 675) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  try { if (acc % 29 === 15) { throw new Error('synthetic-1'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  const ix3: number = buf.indexOf('p81');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const rc5: Rec81 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  m01.set('k6', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  m01.set('k10', acc % 997);
  if (acc % 25 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  m01.set('k13', acc % 997);
  m01.set('k14', acc % 997);
  if (acc % 20 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += 'order16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 52) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  arr.push(acc % 1000);
  buf += `q20:${acc % 97}`;
  for (let i21 = 0; i21 < 4; i21++) {
    acc = (acc + i21 * 13 + 992) % 100003;
  }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  acc = (acc * 31 + 5925) % 65521;
  for (let i24 = 0; i24 < 4; i24++) {
    acc = (acc + i24 * 13 + 504) % 100003;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-25'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (acc % 15 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 10) { throw new Error('synthetic-30'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  acc = acc + 340 - (acc % 8);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 187) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  const ix36: number = buf.indexOf('p81');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  const ix37: number = buf.indexOf('p81');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const rc38: Rec81 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const ix39: number = buf.indexOf('p81');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 50) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-42'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const ix45: number = buf.indexOf('p81');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  for (let i46 = 0; i46 < 12; i46++) {
    acc = (acc + i46 * 13 + 305) % 100003;
  }
  const rc47: Rec81 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  acc = acc + 277 - (acc % 81);
  if (acc % 5 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  buf += 'warehouse51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 676) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += 'portal1-' + acc.toString();
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 109) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = (acc * 31 + 5310) % 65521;
  m01.set('k5', acc % 997);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  if (acc % 19 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5968) % 65521;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  buf += 'ledger10-' + acc.toString();
  m01.set('k11', acc % 997);
  acc = (acc * 31 + 2551) % 65521;
  for (let i13 = 0; i13 < 12; i13++) {
    acc = (acc + i13 * 13 + 665) % 100003;
  }
  const ix14: number = buf.indexOf('p81');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 75) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 125) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const rc19: Rec81 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  if (acc % 27 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  if (acc % 14 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8032) % 65521;
  buf += 'dispatch24-' + acc.toString();
  try { if (acc % 29 === 5) { throw new Error('synthetic-25'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = (acc * 31 + 1340) % 65521;
  m01.set('k28', acc % 997);
  for (let i29 = 0; i29 < 8; i29++) {
    acc = (acc + i29 * 13 + 671) % 100003;
  }
  if (acc % 28 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 64) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = (acc * 31 + 6722) % 65521;
  acc = acc + 103 - (acc % 48);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 139) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const rc38: Rec81 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const rc39: Rec81 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  m01.set('k40', acc % 997);
  if (acc % 31 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  m01.set('k42', acc % 997);
  if (acc % 13 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const rc45: Rec81 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  if (acc % 24 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 40) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += 'invoice50-' + acc.toString();
  acc = (acc * 31 + 7744) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 677) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  acc = acc + 145 - (acc % 62);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 18) { throw new Error('synthetic-4'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 545 - (acc % 24);
  try { if (acc % 29 === 2) { throw new Error('synthetic-6'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  const ix7: number = buf.indexOf('p81');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  acc = acc + 923 - (acc % 53);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  acc = (acc * 31 + 3600) % 65521;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  buf += 'balance13-' + acc.toString();
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  m01.set('k15', acc % 997);
  const rc16: Rec81 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 137) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  try { if (acc % 29 === 5) { throw new Error('synthetic-21'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8016) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  acc = (acc * 31 + 1295) % 65521;
  buf += `q26:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const rc28: Rec81 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  if (acc % 15 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  if (acc % 25 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  for (let i33 = 0; i33 < 11; i33++) {
    acc = (acc + i33 * 13 + 941) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 164) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  acc = acc + 270 - (acc % 17);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q38:${acc % 97}`;
  m01.set('k39', acc % 997);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const ix44: number = buf.indexOf('p81');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  if (acc % 24 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 44) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 61) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0081_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0081_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0081_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 678) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  arr.push(acc % 1000);
  acc = acc + 850 - (acc % 43);
  acc = acc + 414 - (acc % 39);
  for (let i3 = 0; i3 < 6; i3++) {
    acc = (acc + i3 * 13 + 700) % 100003;
  }
  const rc4: Rec81 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  buf += 'freight5-' + acc.toString();
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  buf += `q7:${acc % 97}`;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-10'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9374) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-12'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3870) % 65521;
  acc = (acc * 31 + 3968) % 65521;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 61) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 131) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 7999) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  try { if (acc % 29 === 14) { throw new Error('synthetic-22'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const ix24: number = buf.indexOf('p81');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const ix25: number = buf.indexOf('p81');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const ix26: number = buf.indexOf('p81');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  m01.set('k28', acc % 997);
  m01.set('k29', acc % 997);
  if (acc % 30 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  buf += `q32:${acc % 97}`;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 172) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p81');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const ix37: number = buf.indexOf('p81');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8003) % 65521;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 38) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += 'freight41-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  buf += 'carrier45-' + acc.toString();
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  acc = acc + 564 - (acc % 71);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 119) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 679) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 163) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const ix3: number = buf.indexOf('p81');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += 'bay5-' + acc.toString();
  const rc6: Rec81 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  buf += 'parcel9-' + acc.toString();
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  acc = acc + 333 - (acc % 46);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  acc = (acc * 31 + 1185) % 65521;
  acc = acc + 239 - (acc % 26);
  const rc15: Rec81 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-16'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 111) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec81 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  m01.set('k21', acc % 997);
  buf += `q22:${acc % 97}`;
  acc = acc + 912 - (acc % 65);
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  if (acc % 20 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const ix27: number = buf.indexOf('p81');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const ix28: number = buf.indexOf('p81');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = acc + 458 - (acc % 29);
  buf += 'batch30-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  buf += 'journey32-' + acc.toString();
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 126) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  acc = (acc * 31 + 5695) % 65521;
  buf += `q38:${acc % 97}`;
  buf += `q39:${acc % 97}`;
  try { if (acc % 29 === 15) { throw new Error('synthetic-40'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 21) { throw new Error('synthetic-42'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 665 - (acc % 76);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 5) { throw new Error('synthetic-46'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-47'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  arr.push(acc % 1000);
  const rc50: Rec81 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0081_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 680) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit81 = new Unit81(acc);
  const rc0: Rec81 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  acc = (acc * 31 + 6802) % 65521;
  arr.push(acc % 1000);
  m01.set('k3', acc % 997);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  acc = acc + 542 - (acc % 64);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  if (acc % 17 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 44) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 162) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  if (acc % 23 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 103) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 149) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  buf += 'quota21-' + acc.toString();
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const rc23: Rec81 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  arr.push(acc % 1000);
  const ix25: number = buf.indexOf('p81');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  acc = acc + 210 - (acc % 20);
  buf += 'depot27-' + acc.toString();
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  buf += 'dock30-' + acc.toString();
  const ix31: number = buf.indexOf('p81');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const rc32: Rec81 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 50) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 116) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 183) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  if (acc % 12 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4041) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-44'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const ix45: number = buf.indexOf('p81');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += `q46:${acc % 97}`;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  if (acc % 7 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0081(): BizFn[] {
  return [biz_0081_00, biz_0081_01, biz_0081_02, biz_0081_03, biz_0081_04, biz_0081_05, biz_0081_06, biz_0081_07, biz_0081_08, biz_0081_09, biz_0081_10, biz_0081_11, biz_0081_12, biz_0081_13, biz_0081_14, biz_0081_15, biz_0081_16, biz_0081_17, biz_0081_18, biz_0081_19, biz_0081_20, biz_0081_21, biz_0081_22, biz_0081_23, biz_0081_24, biz_0081_25, biz_0081_26, biz_0081_27, biz_0081_28, biz_0081_29, biz_0081_30, biz_0081_31, biz_0081_32, biz_0081_33, biz_0081_34, biz_0081_35, biz_0081_36, biz_0081_37, biz_0081_38, biz_0081_39, biz_0081_40, biz_0081_41, biz_0081_42];
}

export function rega_0081(): ABizFn[] {
  return [biz_0081_09a, biz_0081_19a, biz_0081_29a, biz_0081_39a];
}
