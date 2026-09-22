// Biz0084.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec84 { id: number; tag: string; score: number; }

class Unit84 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0084_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1031) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  acc = acc + 78 - (acc % 30);
  for (let i1 = 0; i1 < 8; i1++) {
    acc = (acc + i1 * 13 + 426) % 100003;
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-2'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 9) { throw new Error('synthetic-4'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 113) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  buf += 'bay6-' + acc.toString();
  buf += 'tariff7-' + acc.toString();
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  try { if (acc % 29 === 16) { throw new Error('synthetic-10'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q11:${acc % 97}`;
  for (let i12 = 0; i12 < 6; i12++) {
    acc = (acc + i12 * 13 + 744) % 100003;
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  if (acc % 24 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 113) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 194) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const ix25: number = buf.indexOf('p84');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-26'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  acc = acc + 948 - (acc % 12);
  try { if (acc % 29 === 9) { throw new Error('synthetic-29'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  if (acc % 8 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 36) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 144) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 373 - (acc % 52);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  buf += 'freight37-' + acc.toString();
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 86) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 102) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  for (let i40 = 0; i40 < 6; i40++) {
    acc = (acc + i40 * 13 + 124) % 100003;
  }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  acc = (acc * 31 + 8216) % 65521;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 15) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += 'balance46-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-47'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 363 - (acc % 20);
  acc = acc + 285 - (acc % 37);
  if (acc % 19 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1032) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  m01.set('k0', acc % 997);
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = (acc * 31 + 4343) % 65521;
  acc = acc + 299 - (acc % 68);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const ix5: number = buf.indexOf('p84');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-7'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 20) { throw new Error('synthetic-10'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  acc = acc + 223 - (acc % 38);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 878 - (acc % 14);
  const rc16: Rec84 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 23) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p84');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  for (let i20 = 0; i20 < 4; i20++) {
    acc = (acc + i20 * 13 + 690) % 100003;
  }
  const rc21: Rec84 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  buf += 'ticket22-' + acc.toString();
  const ix23: number = buf.indexOf('p84');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-24'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  for (let i27 = 0; i27 < 4; i27++) {
    acc = (acc + i27 * 13 + 612) % 100003;
  }
  buf += `q28:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7736) % 65521;
  if (acc % 6 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const rc32: Rec84 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 195) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-35'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = acc + 978 - (acc % 63);
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  m01.set('k41', acc % 997);
  const ix42: number = buf.indexOf('p84');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (acc % 7 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2150) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  arr.push(acc % 1000);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 15) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = acc + 682 - (acc % 49);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1033) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const rc2: Rec84 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const rc3: Rec84 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const ix4: number = buf.indexOf('p84');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  if (acc % 23 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 142) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  for (let i9 = 0; i9 < 12; i9++) {
    acc = (acc + i9 * 13 + 576) % 100003;
  }
  buf += `q10:${acc % 97}`;
  try { if (acc % 29 === 21) { throw new Error('synthetic-11'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q12:${acc % 97}`;
  acc = acc + 321 - (acc % 38);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  arr.push(acc % 1000);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 31) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  if (acc % 19 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3036) % 65521;
  const ix22: number = buf.indexOf('p84');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  acc = acc + 28 - (acc % 22);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  try { if (acc % 29 === 16) { throw new Error('synthetic-25'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  if (acc % 12 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  m01.set('k28', acc % 997);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const ix31: number = buf.indexOf('p84');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 55) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'balance35-' + acc.toString();
  if (acc % 15 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  buf += 'region38-' + acc.toString();
  if (acc % 25 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 59) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-41'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 14 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  m01.set('k45', acc % 997);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  for (let i49 = 0; i49 < 9; i49++) {
    acc = (acc + i49 * 13 + 509) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1034) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  const rc0: Rec84 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  for (let i1 = 0; i1 < 6; i1++) {
    acc = (acc + i1 * 13 + 275) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const rc4: Rec84 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (acc % 7 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const ix7: number = buf.indexOf('p84');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  buf += 'region8-' + acc.toString();
  const ix9: number = buf.indexOf('p84');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const ix11: number = buf.indexOf('p84');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  buf += `q12:${acc % 97}`;
  arr.push(acc % 1000);
  try { if (acc % 29 === 18) { throw new Error('synthetic-14'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 188) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 146) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 19 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += 'portal19-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const ix21: number = buf.indexOf('p84');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += `q23:${acc % 97}`;
  try { if (acc % 29 === 3) { throw new Error('synthetic-24'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'ticket25-' + acc.toString();
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 156) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2273) % 65521;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 164) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const ix32: number = buf.indexOf('p84');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const ix33: number = buf.indexOf('p84');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 46) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p84');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-36'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const rc37: Rec84 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  if (acc % 7 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += `q39:${acc % 97}`;
  buf += 'rebate40-' + acc.toString();
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-42'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 73) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 35) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  acc = acc + 855 - (acc % 58);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  try { if (acc % 29 === 14) { throw new Error('synthetic-49'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  try { if (acc % 29 === 5) { throw new Error('synthetic-51'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1035) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  acc = (acc * 31 + 4737) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  m01.set('k5', acc % 997);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  acc = acc + 407 - (acc % 19);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 13) { throw new Error('synthetic-9'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const ix10: number = buf.indexOf('p84');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  arr.push(acc % 1000);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  if (acc % 14 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = acc + 176 - (acc % 14);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 125) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  buf += `q19:${acc % 97}`;
  for (let i20 = 0; i20 < 8; i20++) {
    acc = (acc + i20 * 13 + 694) % 100003;
  }
  if (acc % 13 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += 'audit22-' + acc.toString();
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  m01.set('k24', acc % 997);
  try { if (acc % 29 === 9) { throw new Error('synthetic-25'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-26'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  arr.push(acc % 1000);
  const ix29: number = buf.indexOf('p84');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  try { if (acc % 29 === 6) { throw new Error('synthetic-31'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 5 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  for (let i33 = 0; i33 < 8; i33++) {
    acc = (acc + i33 * 13 + 368) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 92) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec84 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  m01.set('k38', acc % 997);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const rc41: Rec84 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  for (let i42 = 0; i42 < 8; i42++) {
    acc = (acc + i42 * 13 + 811) % 100003;
  }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += 'client45-' + acc.toString();
  const rc46: Rec84 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const ix48: number = buf.indexOf('p84');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-49'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q50:${acc % 97}`;
  for (let i51 = 0; i51 < 3; i51++) {
    acc = (acc + i51 * 13 + 196) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1036) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  buf += `q0:${acc % 97}`;
  if (acc % 23 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const rc3: Rec84 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += 'payout4-' + acc.toString();
  if (acc % 30 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  for (let i6 = 0; i6 < 12; i6++) {
    acc = (acc + i6 * 13 + 955) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  arr.push(acc % 1000);
  buf += 'region9-' + acc.toString();
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 115) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const rc12: Rec84 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 31) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  try { if (acc % 29 === 23) { throw new Error('synthetic-15'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 172) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5122) % 65521;
  if (acc % 9 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-21'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  for (let i25 = 0; i25 < 6; i25++) {
    acc = (acc + i25 * 13 + 263) % 100003;
  }
  if (acc % 30 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  m01.set('k27', acc % 997);
  m01.set('k28', acc % 997);
  buf += `q29:${acc % 97}`;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-31'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 19 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6362) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 131) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 931 - (acc % 62);
  buf += 'refund36-' + acc.toString();
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  buf += `q39:${acc % 97}`;
  buf += 'stocktake40-' + acc.toString();
  acc = (acc * 31 + 5969) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-42'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 6931) % 65521;
  acc = acc + 846 - (acc % 54);
  const rc46: Rec84 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  for (let i47 = 0; i47 < 3; i47++) {
    acc = (acc + i47 * 13 + 944) % 100003;
  }
  buf += `q48:${acc % 97}`;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 137) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1037) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  if (acc % 22 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q3:${acc % 97}`;
  if (acc % 6 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-5'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const ix7: number = buf.indexOf('p84');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const rc8: Rec84 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  arr.push(acc % 1000);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  if (acc % 8 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const rc12: Rec84 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  try { if (acc % 29 === 4) { throw new Error('synthetic-13'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const ix14: number = buf.indexOf('p84');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5171) % 65521;
  if (acc % 31 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 139) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 108) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  if (acc % 5 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  m01.set('k31', acc % 997);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 122) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = (acc * 31 + 4858) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 40) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  acc = acc + 558 - (acc % 51);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (acc % 23 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += 'region42-' + acc.toString();
  if (acc % 23 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const ix46: number = buf.indexOf('p84');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const ix47: number = buf.indexOf('p84');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  buf += 'order48-' + acc.toString();
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 11) { throw new Error('synthetic-51'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1038) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  try { if (acc % 29 === 15) { throw new Error('synthetic-0'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  buf += `q2:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const ix4: number = buf.indexOf('p84');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  buf += `q6:${acc % 97}`;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  acc = (acc * 31 + 3888) % 65521;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += 'balance13-' + acc.toString();
  const rc14: Rec84 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const rc15: Rec84 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 152) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 20) { throw new Error('synthetic-18'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-19'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 15 - (acc % 21);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  for (let i23 = 0; i23 < 7; i23++) {
    acc = (acc + i23 * 13 + 833) % 100003;
  }
  buf += 'dock24-' + acc.toString();
  acc = (acc * 31 + 5107) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-30'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'region31-' + acc.toString();
  acc = acc + 295 - (acc % 10);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 76) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 162) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4231) % 65521;
  acc = (acc * 31 + 9643) % 65521;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  for (let i41 = 0; i41 < 6; i41++) {
    acc = (acc + i41 * 13 + 400) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  for (let i43 = 0; i43 < 3; i43++) {
    acc = (acc + i43 * 13 + 786) % 100003;
  }
  const rc44: Rec84 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  acc = acc + 967 - (acc % 61);
  buf += `q48:${acc % 97}`;
  if (acc % 21 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6049) % 65521;
  const ix51: number = buf.indexOf('p84');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1039) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  const ix0: number = buf.indexOf('p84');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  for (let i3 = 0; i3 < 4; i3++) {
    acc = (acc + i3 * 13 + 401) % 100003;
  }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += 'invoice6-' + acc.toString();
  try { if (acc % 29 === 23) { throw new Error('synthetic-7'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-8'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 443 - (acc % 86);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 3) { throw new Error('synthetic-11'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k12', acc % 997);
  const rc13: Rec84 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  for (let i16 = 0; i16 < 7; i16++) {
    acc = (acc + i16 * 13 + 213) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 87) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 8; i18++) {
    acc = (acc + i18 * 13 + 841) % 100003;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-19'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const rc21: Rec84 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  m01.set('k23', acc % 997);
  buf += `q24:${acc % 97}`;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 113) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  m01.set('k27', acc % 997);
  buf += `q28:${acc % 97}`;
  try { if (acc % 29 === 15) { throw new Error('synthetic-29'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  m01.set('k31', acc % 997);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const rc33: Rec84 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 20) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'routeplan35-' + acc.toString();
  arr.push(acc % 1000);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const ix39: number = buf.indexOf('p84');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  const rc41: Rec84 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  m01.set('k42', acc % 997);
  buf += 'portal43-' + acc.toString();
  acc = acc + 401 - (acc % 81);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 18) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += 'region46-' + acc.toString();
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const rc48: Rec84 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i51 = 0; i51 < 12; i51++) {
    acc = (acc + i51 * 13 + 28) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1040) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (acc % 5 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  if (acc % 12 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const rc5: Rec84 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  arr.push(acc % 1000);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  if (acc % 7 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 93) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 23 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  m01.set('k19', acc % 997);
  buf += `q20:${acc % 97}`;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  m01.set('k22', acc % 997);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-25'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 30) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  acc = (acc * 31 + 8548) % 65521;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const rc31: Rec84 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 100) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  acc = acc + 933 - (acc % 35);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  try { if (acc % 29 === 6) { throw new Error('synthetic-39'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += `q41:${acc % 97}`;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  buf += `q43:${acc % 97}`;
  const ix44: number = buf.indexOf('p84');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  m01.set('k45', acc % 997);
  buf += 'bay46-' + acc.toString();
  buf += 'depot47-' + acc.toString();
  const ix48: number = buf.indexOf('p84');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0084_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0084_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0084_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1041) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  buf += `q0:${acc % 97}`;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  for (let i3 = 0; i3 < 5; i3++) {
    acc = (acc + i3 * 13 + 265) % 100003;
  }
  for (let i4 = 0; i4 < 3; i4++) {
    acc = (acc + i4 * 13 + 740) % 100003;
  }
  const ix5: number = buf.indexOf('p84');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = acc + 215 - (acc % 13);
  buf += `q8:${acc % 97}`;
  acc = (acc * 31 + 2373) % 65521;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const ix14: number = buf.indexOf('p84');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  if (acc % 30 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const rc16: Rec84 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 31) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 2726) % 65521;
  arr.push(acc % 1000);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  if (acc % 22 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += 'order22-' + acc.toString();
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const rc26: Rec84 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  for (let i27 = 0; i27 < 10; i27++) {
    acc = (acc + i27 * 13 + 207) % 100003;
  }
  acc = acc + 160 - (acc % 32);
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  for (let i30 = 0; i30 < 5; i30++) {
    acc = (acc + i30 * 13 + 688) % 100003;
  }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  m01.set('k32', acc % 997);
  const ix33: number = buf.indexOf('p84');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 175) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  acc = (acc * 31 + 575) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  buf += `q38:${acc % 97}`;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  for (let i40 = 0; i40 < 6; i40++) {
    acc = (acc + i40 * 13 + 505) % 100003;
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  acc = (acc * 31 + 7570) % 65521;
  m01.set('k46', acc % 997);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  acc = (acc * 31 + 9779) % 65521;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  if (acc % 5 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  acc = acc + 278 - (acc % 76);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1042) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 46) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const ix3: number = buf.indexOf('p84');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const ix4: number = buf.indexOf('p84');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 9846) % 65521;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  if (acc % 19 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 8) { throw new Error('synthetic-12'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'policy13-' + acc.toString();
  acc = (acc * 31 + 8702) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 12) { throw new Error('synthetic-16'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 74) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-19'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  buf += 'customs21-' + acc.toString();
  for (let i22 = 0; i22 < 9; i22++) {
    acc = (acc + i22 * 13 + 850) % 100003;
  }
  const rc23: Rec84 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  buf += 'tariff25-' + acc.toString();
  acc = (acc * 31 + 8770) % 65521;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  acc = acc + 751 - (acc % 38);
  acc = acc + 738 - (acc % 69);
  buf += 'rebate30-' + acc.toString();
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 171) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec84 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  buf += `q36:${acc % 97}`;
  acc = acc + 679 - (acc % 84);
  m01.set('k38', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const ix40: number = buf.indexOf('p84');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const ix41: number = buf.indexOf('p84');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const ix42: number = buf.indexOf('p84');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  arr.push(acc % 1000);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  buf += 'bay46-' + acc.toString();
  arr.push(acc % 1000);
  buf += 'audit48-' + acc.toString();
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  arr.push(acc % 1000);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1043) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  buf += 'pickup2-' + acc.toString();
  for (let i3 = 0; i3 < 9; i3++) {
    acc = (acc + i3 * 13 + 461) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  if (acc % 24 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-11'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 63 - (acc % 73);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const ix14: number = buf.indexOf('p84');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = acc + 453 - (acc % 49);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 130) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec84 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const rc19: Rec84 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  m01.set('k21', acc % 997);
  buf += 'warehouse22-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  if (acc % 23 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  if (acc % 10 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  if (acc % 18 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const rc30: Rec84 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 140) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = acc + 675 - (acc % 16);
  const ix33: number = buf.indexOf('p84');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 135) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const ix36: number = buf.indexOf('p84');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  try { if (acc % 29 === 5) { throw new Error('synthetic-39'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  for (let i41 = 0; i41 < 9; i41++) {
    acc = (acc + i41 * 13 + 651) % 100003;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-42'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  for (let i45 = 0; i45 < 10; i45++) {
    acc = (acc + i45 * 13 + 635) % 100003;
  }
  if (acc % 28 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  buf += `q47:${acc % 97}`;
  buf += `q48:${acc % 97}`;
  try { if (acc % 29 === 3) { throw new Error('synthetic-49'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k50', acc % 997);
  acc = (acc * 31 + 7322) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1044) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += 'depot2-' + acc.toString();
  buf += `q3:${acc % 97}`;
  if (acc % 21 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  m01.set('k6', acc % 997);
  for (let i7 = 0; i7 < 3; i7++) {
    acc = (acc + i7 * 13 + 902) % 100003;
  }
  arr.push(acc % 1000);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const ix12: number = buf.indexOf('p84');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  acc = acc + 546 - (acc % 56);
  acc = (acc * 31 + 3022) % 65521;
  arr.push(acc % 1000);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 56) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (acc % 29 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  const ix22: number = buf.indexOf('p84');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  for (let i23 = 0; i23 < 6; i23++) {
    acc = (acc + i23 * 13 + 477) % 100003;
  }
  if (acc % 31 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const rc25: Rec84 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  buf += `q26:${acc % 97}`;
  if (acc % 11 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const ix29: number = buf.indexOf('p84');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 29) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 140) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 1990) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const rc39: Rec84 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  acc = (acc * 31 + 726) % 65521;
  for (let i41 = 0; i41 < 10; i41++) {
    acc = (acc + i41 * 13 + 109) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  buf += `q44:${acc % 97}`;
  acc = acc + 833 - (acc % 49);
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  m01.set('k50', acc % 997);
  try { if (acc % 29 === 5) { throw new Error('synthetic-51'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1045) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  acc = acc + 960 - (acc % 45);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const ix2: number = buf.indexOf('p84');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  if (acc % 23 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  buf += `q7:${acc % 97}`;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const ix9: number = buf.indexOf('p84');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-10'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7333) % 65521;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 122) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = acc + 854 - (acc % 57);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 43) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  if (acc % 27 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  m01.set('k22', acc % 997);
  const ix23: number = buf.indexOf('p84');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-24'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = acc + 979 - (acc % 70);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  if (acc % 20 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  arr.push(acc % 1000);
  const ix33: number = buf.indexOf('p84');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 21) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-35'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q36:${acc % 97}`;
  const rc37: Rec84 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  m01.set('k38', acc % 997);
  const rc39: Rec84 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  arr.push(acc % 1000);
  const ix41: number = buf.indexOf('p84');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  buf += `q42:${acc % 97}`;
  buf += `q43:${acc % 97}`;
  buf += `q44:${acc % 97}`;
  m01.set('k45', acc % 997);
  if (acc % 15 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += `q48:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1046) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  m01.set('k0', acc % 997);
  if (acc % 19 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  for (let i3 = 0; i3 < 10; i3++) {
    acc = (acc + i3 * 13 + 369) % 100003;
  }
  m01.set('k4', acc % 997);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  acc = (acc * 31 + 9930) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  buf += `q11:${acc % 97}`;
  for (let i12 = 0; i12 < 12; i12++) {
    acc = (acc + i12 * 13 + 565) % 100003;
  }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += `q15:${acc % 97}`;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 194) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const rc19: Rec84 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  buf += 'journey20-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  m01.set('k22', acc % 997);
  try { if (acc % 29 === 21) { throw new Error('synthetic-23'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 83) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 149) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  acc = (acc * 31 + 284) % 65521;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 177) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  if (acc % 11 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const rc30: Rec84 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  try { if (acc % 29 === 9) { throw new Error('synthetic-31'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const ix32: number = buf.indexOf('p84');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 36) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  buf += 'freight37-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += 'stocktake39-' + acc.toString();
  for (let i40 = 0; i40 < 6; i40++) {
    acc = (acc + i40 * 13 + 705) % 100003;
  }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  buf += 'ledger42-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  for (let i44 = 0; i44 < 5; i44++) {
    acc = (acc + i44 * 13 + 125) % 100003;
  }
  const ix45: number = buf.indexOf('p84');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += `q46:${acc % 97}`;
  acc = acc + 813 - (acc % 8);
  for (let i48 = 0; i48 < 11; i48++) {
    acc = (acc + i48 * 13 + 966) % 100003;
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1047) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  for (let i0 = 0; i0 < 8; i0++) {
    acc = (acc + i0 * 13 + 233) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  if (acc % 28 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  buf += 'pallet4-' + acc.toString();
  buf += 'payout5-' + acc.toString();
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  acc = acc + 894 - (acc % 84);
  buf += `q8:${acc % 97}`;
  const rc9: Rec84 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += 'payout10-' + acc.toString();
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 11) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  acc = (acc * 31 + 336) % 65521;
  for (let i16 = 0; i16 < 10; i16++) {
    acc = (acc + i16 * 13 + 203) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 11) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-18'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k19', acc % 997);
  m01.set('k20', acc % 997);
  acc = acc + 615 - (acc % 45);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 129) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  for (let i25 = 0; i25 < 5; i25++) {
    acc = (acc + i25 * 13 + 502) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  m01.set('k27', acc % 997);
  buf += 'carrier28-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 41) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  if (acc % 23 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += 'bay37-' + acc.toString();
  buf += 'pallet38-' + acc.toString();
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += 'pallet40-' + acc.toString();
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  acc = acc + 676 - (acc % 25);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 118) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const ix45: number = buf.indexOf('p84');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += 'order46-' + acc.toString();
  for (let i47 = 0; i47 < 9; i47++) {
    acc = (acc + i47 * 13 + 393) % 100003;
  }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  acc = (acc * 31 + 3211) % 65521;
  for (let i50 = 0; i50 < 10; i50++) {
    acc = (acc + i50 * 13 + 416) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1048) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  m01.set('k3', acc % 997);
  try { if (acc % 29 === 19) { throw new Error('synthetic-4'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 827 - (acc % 84);
  buf += 'payout6-' + acc.toString();
  const ix7: number = buf.indexOf('p84');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 81) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  acc = (acc * 31 + 8643) % 65521;
  buf += 'quota10-' + acc.toString();
  const ix11: number = buf.indexOf('p84');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  for (let i13 = 0; i13 < 10; i13++) {
    acc = (acc + i13 * 13 + 370) % 100003;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-14'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 13) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 49) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 420 - (acc % 17);
  acc = (acc * 31 + 5219) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-20'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = acc + 280 - (acc % 8);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  buf += `q26:${acc % 97}`;
  acc = (acc * 31 + 2604) % 65521;
  buf += `q28:${acc % 97}`;
  acc = acc + 782 - (acc % 14);
  if (acc % 14 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  acc = acc + 409 - (acc % 25);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 66) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 83) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p84');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  for (let i36 = 0; i36 < 4; i36++) {
    acc = (acc + i36 * 13 + 182) % 100003;
  }
  buf += `q37:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  if (acc % 23 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  buf += `q40:${acc % 97}`;
  m01.set('k41', acc % 997);
  acc = (acc * 31 + 2208) % 65521;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 65) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = acc + 489 - (acc % 29);
  if (acc % 23 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += 'batch46-' + acc.toString();
  acc = acc + 720 - (acc % 70);
  for (let i48 = 0; i48 < 11; i48++) {
    acc = (acc + i48 * 13 + 84) % 100003;
  }
  const ix49: number = buf.indexOf('p84');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += `q50:${acc % 97}`;
  acc = acc + 787 - (acc % 35);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1049) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  for (let i3 = 0; i3 < 11; i3++) {
    acc = (acc + i3 * 13 + 240) % 100003;
  }
  buf += `q4:${acc % 97}`;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 108) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const rc8: Rec84 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  m01.set('k11', acc % 997);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  if (acc % 11 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 78) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 66) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  for (let i19 = 0; i19 < 8; i19++) {
    acc = (acc + i19 * 13 + 627) % 100003;
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  m01.set('k21', acc % 997);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  for (let i23 = 0; i23 < 12; i23++) {
    acc = (acc + i23 * 13 + 567) % 100003;
  }
  m01.set('k24', acc % 997);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  arr.push(acc % 1000);
  try { if (acc % 29 === 2) { throw new Error('synthetic-27'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 815 - (acc % 92);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  m01.set('k32', acc % 997);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 113) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 8995) % 65521;
  const ix38: number = buf.indexOf('p84');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  for (let i39 = 0; i39 < 11; i39++) {
    acc = (acc + i39 * 13 + 446) % 100003;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-40'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 88) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix45: number = buf.indexOf('p84');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  acc = acc + 517 - (acc % 65);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  arr.push(acc % 1000);
  const rc49: Rec84 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const rc50: Rec84 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1050) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  acc = acc + 454 - (acc % 41);
  acc = (acc * 31 + 2912) % 65521;
  const ix2: number = buf.indexOf('p84');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const ix3: number = buf.indexOf('p84');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 175) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const rc9: Rec84 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 29) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const ix11: number = buf.indexOf('p84');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  for (let i13 = 0; i13 < 9; i13++) {
    acc = (acc + i13 * 13 + 290) % 100003;
  }
  buf += `q14:${acc % 97}`;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 130) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 79) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 124) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += `q21:${acc % 97}`;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  m01.set('k24', acc % 997);
  for (let i25 = 0; i25 < 12; i25++) {
    acc = (acc + i25 * 13 + 212) % 100003;
  }
  if (acc % 9 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (acc % 31 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += 'payout30-' + acc.toString();
  const rc31: Rec84 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 30) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 60) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  buf += `q37:${acc % 97}`;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  buf += 'portal39-' + acc.toString();
  m01.set('k40', acc % 997);
  for (let i41 = 0; i41 < 5; i41++) {
    acc = (acc + i41 * 13 + 567) % 100003;
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-42'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const rc43: Rec84 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  m01.set('k44', acc % 997);
  m01.set('k45', acc % 997);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  for (let i47 = 0; i47 < 4; i47++) {
    acc = (acc + i47 * 13 + 821) % 100003;
  }
  m01.set('k48', acc % 997);
  if (acc % 18 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  if (acc % 6 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  buf += 'routeplan51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0084_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0084_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0084_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1051) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  arr.push(acc % 1000);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  acc = (acc * 31 + 7557) % 65521;
  const rc3: Rec84 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  try { if (acc % 29 === 16) { throw new Error('synthetic-4'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 114) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-13'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const rc14: Rec84 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 161) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-22'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  buf += `q25:${acc % 97}`;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  arr.push(acc % 1000);
  const ix31: number = buf.indexOf('p84');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const ix32: number = buf.indexOf('p84');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 39) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 4; i35++) {
    acc = (acc + i35 * 13 + 527) % 100003;
  }
  buf += `q36:${acc % 97}`;
  const ix37: number = buf.indexOf('p84');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (acc % 9 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  for (let i40 = 0; i40 < 6; i40++) {
    acc = (acc + i40 * 13 + 513) % 100003;
  }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  arr.push(acc % 1000);
  const ix43: number = buf.indexOf('p84');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const rc44: Rec84 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = (acc * 31 + 310) % 65521;
  const ix47: number = buf.indexOf('p84');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const ix48: number = buf.indexOf('p84');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += `q49:${acc % 97}`;
  buf += `q50:${acc % 97}`;
  acc = acc + 756 - (acc % 41);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1052) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  for (let i4 = 0; i4 < 3; i4++) {
    acc = (acc + i4 * 13 + 202) % 100003;
  }
  m01.set('k5', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-9'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 5941) % 65521;
  buf += 'order11-' + acc.toString();
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 111) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k15', acc % 997);
  const rc16: Rec84 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 165) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = acc + 868 - (acc % 57);
  arr.push(acc % 1000);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 63) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 6) { throw new Error('synthetic-25'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  if (acc % 25 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-29'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 150) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = (acc * 31 + 8599) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 56) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const ix36: number = buf.indexOf('p84');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  const ix37: number = buf.indexOf('p84');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += `q39:${acc % 97}`;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  if (acc % 24 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  buf += 'waybill43-' + acc.toString();
  buf += 'customs44-' + acc.toString();
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  try { if (acc % 29 === 13) { throw new Error('synthetic-46'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (acc % 16 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9656) % 65521;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1053) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  if (acc % 20 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = acc + 13 - (acc % 84);
  acc = acc + 680 - (acc % 94);
  buf += 'ledger6-' + acc.toString();
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const rc8: Rec84 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = acc + 704 - (acc % 86);
  const ix10: number = buf.indexOf('p84');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  buf += `q11:${acc % 97}`;
  acc = acc + 645 - (acc % 54);
  arr.push(acc % 1000);
  if (acc % 13 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 63) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  if (acc % 15 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  acc = acc + 405 - (acc % 51);
  arr.push(acc % 1000);
  m01.set('k22', acc % 997);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  acc = (acc * 31 + 835) % 65521;
  const ix25: number = buf.indexOf('p84');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  buf += `q26:${acc % 97}`;
  const ix27: number = buf.indexOf('p84');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  acc = acc + 45 - (acc % 60);
  for (let i29 = 0; i29 < 5; i29++) {
    acc = (acc + i29 * 13 + 584) % 100003;
  }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 133) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 130) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 945 - (acc % 73);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  arr.push(acc % 1000);
  acc = (acc * 31 + 6154) % 65521;
  m01.set('k39', acc % 997);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += `q41:${acc % 97}`;
  if (acc % 5 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  for (let i46 = 0; i46 < 4; i46++) {
    acc = (acc + i46 * 13 + 644) % 100003;
  }
  buf += `q47:${acc % 97}`;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  m01.set('k50', acc % 997);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1054) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  if (acc % 27 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const rc3: Rec84 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  acc = (acc * 31 + 5149) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-10'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 24 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  if (acc % 18 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6184) % 65521;
  const ix16: number = buf.indexOf('p84');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 62) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const ix19: number = buf.indexOf('p84');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += `q24:${acc % 97}`;
  acc = (acc * 31 + 493) % 65521;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = acc + 583 - (acc % 55);
  const ix28: number = buf.indexOf('p84');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  m01.set('k29', acc % 997);
  buf += `q30:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  buf += 'pickup32-' + acc.toString();
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 121) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 5; i35++) {
    acc = (acc + i35 * 13 + 640) % 100003;
  }
  buf += 'carrier36-' + acc.toString();
  buf += `q37:${acc % 97}`;
  acc = acc + 174 - (acc % 37);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const rc40: Rec84 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  arr.push(acc % 1000);
  buf += `q42:${acc % 97}`;
  const rc43: Rec84 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 67) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  buf += 'carrier46-' + acc.toString();
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const ix49: number = buf.indexOf('p84');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1055) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  buf += `q0:${acc % 97}`;
  const rc1: Rec84 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  for (let i2 = 0; i2 < 10; i2++) {
    acc = (acc + i2 * 13 + 76) % 100003;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-3'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (acc % 7 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i9 = 0; i9 < 3; i9++) {
    acc = (acc + i9 * 13 + 361) % 100003;
  }
  const ix10: number = buf.indexOf('p84');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  if (acc % 10 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  buf += 'invoice14-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 125) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 130) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  buf += 'rebate19-' + acc.toString();
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-23'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 5437) % 65521;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const rc27: Rec84 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  if (acc % 11 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  buf += `q29:${acc % 97}`;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const rc31: Rec84 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 145) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec84 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  try { if (acc % 29 === 14) { throw new Error('synthetic-37'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const rc38: Rec84 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  buf += 'invoice40-' + acc.toString();
  buf += `q41:${acc % 97}`;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const rc44: Rec84 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += 'pickup47-' + acc.toString();
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  m01.set('k50', acc % 997);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1056) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  if (acc % 30 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 131) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  buf += `q2:${acc % 97}`;
  if (acc % 14 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  for (let i6 = 0; i6 < 4; i6++) {
    acc = (acc + i6 * 13 + 484) % 100003;
  }
  buf += 'payout7-' + acc.toString();
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  buf += `q9:${acc % 97}`;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = (acc * 31 + 3496) % 65521;
  if (acc % 31 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const ix14: number = buf.indexOf('p84');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 160) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  for (let i16 = 0; i16 < 5; i16++) {
    acc = (acc + i16 * 13 + 741) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 61) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'ledger18-' + acc.toString();
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 183) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = acc + 627 - (acc % 39);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  buf += 'tariff27-' + acc.toString();
  if (acc % 19 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += `q30:${acc % 97}`;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = (acc * 31 + 6543) % 65521;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 40) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 31 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const rc36: Rec84 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  buf += `q37:${acc % 97}`;
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  const ix39: number = buf.indexOf('p84');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2973) % 65521;
  for (let i41 = 0; i41 < 9; i41++) {
    acc = (acc + i41 * 13 + 761) % 100003;
  }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const ix43: number = buf.indexOf('p84');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  acc = acc + 766 - (acc % 28);
  arr.push(acc % 1000);
  try { if (acc % 29 === 13) { throw new Error('synthetic-46'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const rc47: Rec84 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  acc = acc + 489 - (acc % 76);
  buf += `q49:${acc % 97}`;
  acc = (acc * 31 + 3264) % 65521;
  for (let i51 = 0; i51 < 7; i51++) {
    acc = (acc + i51 * 13 + 690) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1057) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  buf += 'warehouse2-' + acc.toString();
  const ix3: number = buf.indexOf('p84');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const ix5: number = buf.indexOf('p84');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  m01.set('k6', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-8'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 24 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = acc + 540 - (acc % 66);
  if (acc % 29 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 59) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += `q14:${acc % 97}`;
  buf += `q15:${acc % 97}`;
  for (let i16 = 0; i16 < 4; i16++) {
    acc = (acc + i16 * 13 + 205) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 27) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 13 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 111) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  buf += `q20:${acc % 97}`;
  acc = acc + 705 - (acc % 22);
  const rc22: Rec84 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  try { if (acc % 29 === 21) { throw new Error('synthetic-23'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k24', acc % 997);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 191) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += `q27:${acc % 97}`;
  try { if (acc % 29 === 10) { throw new Error('synthetic-28'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 22) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 107) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const rc38: Rec84 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const ix39: number = buf.indexOf('p84');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += 'settle41-' + acc.toString();
  for (let i42 = 0; i42 < 6; i42++) {
    acc = (acc + i42 * 13 + 658) % 100003;
  }
  if (acc % 19 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const ix46: number = buf.indexOf('p84');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  m01.set('k47', acc % 997);
  arr.push(acc % 1000);
  for (let i49 = 0; i49 < 9; i49++) {
    acc = (acc + i49 * 13 + 651) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1058) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  const ix0: number = buf.indexOf('p84');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  m01.set('k1', acc % 997);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  if (acc % 26 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-8'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 23 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = acc + 130 - (acc % 18);
  const rc11: Rec84 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  if (acc % 16 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  for (let i13 = 0; i13 < 7; i13++) {
    acc = (acc + i13 * 13 + 29) % 100003;
  }
  acc = acc + 686 - (acc % 88);
  acc = acc + 446 - (acc % 97);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 172) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 174) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  try { if (acc % 29 === 19) { throw new Error('synthetic-21'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const rc23: Rec84 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  for (let i24 = 0; i24 < 4; i24++) {
    acc = (acc + i24 * 13 + 528) % 100003;
  }
  acc = (acc * 31 + 5165) % 65521;
  arr.push(acc % 1000);
  const rc27: Rec84 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const rc29: Rec84 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  buf += 'sku30-' + acc.toString();
  buf += 'invoice31-' + acc.toString();
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 13) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  for (let i33 = 0; i33 < 12; i33++) {
    acc = (acc + i33 * 13 + 392) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 60) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p84');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const rc36: Rec84 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  acc = (acc * 31 + 507) % 65521;
  arr.push(acc % 1000);
  const rc39: Rec84 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 91) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  if (acc % 24 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  buf += `q42:${acc % 97}`;
  acc = (acc * 31 + 4970) % 65521;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const rc46: Rec84 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  buf += `q47:${acc % 97}`;
  buf += `q48:${acc % 97}`;
  if (acc % 18 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  buf += `q50:${acc % 97}`;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1059) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const rc1: Rec84 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  for (let i3 = 0; i3 < 8; i3++) {
    acc = (acc + i3 * 13 + 79) % 100003;
  }
  acc = (acc * 31 + 8456) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-5'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const ix9: number = buf.indexOf('p84');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  buf += `q10:${acc % 97}`;
  for (let i11 = 0; i11 < 3; i11++) {
    acc = (acc + i11 * 13 + 80) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (acc % 31 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  buf += 'routeplan14-' + acc.toString();
  const ix15: number = buf.indexOf('p84');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  if (acc % 26 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 86) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9090) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  m01.set('k21', acc % 997);
  buf += 'customs22-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 12) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  acc = acc + 849 - (acc % 56);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  buf += `q31:${acc % 97}`;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  acc = (acc * 31 + 9948) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 140) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p84');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  m01.set('k36', acc % 997);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 188) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-38'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += 'dispatch40-' + acc.toString();
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 51) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-43'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  acc = acc + 311 - (acc % 10);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = acc + 540 - (acc % 10);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  for (let i51 = 0; i51 < 11; i51++) {
    acc = (acc + i51 * 13 + 365) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1060) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  buf += 'invoice0-' + acc.toString();
  buf += `q1:${acc % 97}`;
  acc = (acc * 31 + 4479) % 65521;
  if (acc % 13 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  for (let i8 = 0; i8 < 8; i8++) {
    acc = (acc + i8 * 13 + 494) % 100003;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-9'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (acc % 31 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 143) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  acc = acc + 353 - (acc % 97);
  buf += 'coupon20-' + acc.toString();
  for (let i21 = 0; i21 < 5; i21++) {
    acc = (acc + i21 * 13 + 16) % 100003;
  }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const ix26: number = buf.indexOf('p84');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 77) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  const ix30: number = buf.indexOf('p84');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  buf += 'coupon33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 83) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  for (let i36 = 0; i36 < 3; i36++) {
    acc = (acc + i36 * 13 + 492) % 100003;
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  if (acc % 19 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  if (acc % 15 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  acc = acc + 675 - (acc % 10);
  acc = (acc * 31 + 188) % 65521;
  const ix46: number = buf.indexOf('p84');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = acc + 407 - (acc % 36);
  try { if (acc % 29 === 16) { throw new Error('synthetic-48'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k49', acc % 997);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  acc = (acc * 31 + 1429) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0084_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0084_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0084_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1061) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-2'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q4:${acc % 97}`;
  m01.set('k5', acc % 997);
  const rc6: Rec84 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const ix7: number = buf.indexOf('p84');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const ix8: number = buf.indexOf('p84');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  buf += `q10:${acc % 97}`;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 179) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 123) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += 'crate19-' + acc.toString();
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 80) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  acc = (acc * 31 + 4070) % 65521;
  const rc25: Rec84 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  try { if (acc % 29 === 7) { throw new Error('synthetic-26'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const rc28: Rec84 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-31'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += 'ticket33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 48) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec84 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  acc = (acc * 31 + 9934) % 65521;
  if (acc % 30 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  m01.set('k41', acc % 997);
  const ix42: number = buf.indexOf('p84');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  try { if (acc % 29 === 19) { throw new Error('synthetic-45'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  if (acc % 7 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const ix48: number = buf.indexOf('p84');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += 'portal49-' + acc.toString();
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1062) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  m01.set('k1', acc % 997);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  buf += 'sku4-' + acc.toString();
  const ix5: number = buf.indexOf('p84');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  if (acc % 8 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 173) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const ix8: number = buf.indexOf('p84');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  for (let i10 = 0; i10 < 8; i10++) {
    acc = (acc + i10 * 13 + 169) % 100003;
  }
  const rc11: Rec84 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  arr.push(acc % 1000);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 148) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const ix15: number = buf.indexOf('p84');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 183) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const rc19: Rec84 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = acc + 523 - (acc % 25);
  for (let i23 = 0; i23 < 3; i23++) {
    acc = (acc + i23 * 13 + 405) % 100003;
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = (acc * 31 + 2699) % 65521;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2610) % 65521;
  buf += `q28:${acc % 97}`;
  for (let i29 = 0; i29 < 9; i29++) {
    acc = (acc + i29 * 13 + 967) % 100003;
  }
  arr.push(acc % 1000);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  for (let i33 = 0; i33 < 12; i33++) {
    acc = (acc + i33 * 13 + 232) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 179) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  acc = acc + 301 - (acc % 35);
  buf += `q38:${acc % 97}`;
  m01.set('k39', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i41 = 0; i41 < 12; i41++) {
    acc = (acc + i41 * 13 + 487) % 100003;
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const ix44: number = buf.indexOf('p84');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 171) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += `q46:${acc % 97}`;
  const rc47: Rec84 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const rc49: Rec84 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  buf += 'dock50-' + acc.toString();
  acc = acc + 499 - (acc % 37);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1063) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const rc1: Rec84 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  if (acc % 18 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 58) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  acc = (acc * 31 + 5312) % 65521;
  buf += `q7:${acc % 97}`;
  try { if (acc % 29 === 11) { throw new Error('synthetic-8'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k9', acc % 997);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  buf += 'customs11-' + acc.toString();
  acc = (acc * 31 + 8524) % 65521;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  arr.push(acc % 1000);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const ix16: number = buf.indexOf('p84');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 194) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i19 = 0; i19 < 8; i19++) {
    acc = (acc + i19 * 13 + 979) % 100003;
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += `q21:${acc % 97}`;
  arr.push(acc % 1000);
  try { if (acc % 29 === 23) { throw new Error('synthetic-23'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  for (let i25 = 0; i25 < 4; i25++) {
    acc = (acc + i25 * 13 + 727) % 100003;
  }
  if (acc % 30 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 162) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  acc = acc + 653 - (acc % 19);
  const ix29: number = buf.indexOf('p84');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const rc31: Rec84 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  try { if (acc % 29 === 5) { throw new Error('synthetic-33'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 129) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p84');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3524) % 65521;
  arr.push(acc % 1000);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 153) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  m01.set('k39', acc % 997);
  m01.set('k40', acc % 997);
  acc = (acc * 31 + 8417) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 5) { throw new Error('synthetic-43'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-44'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'vendor45-' + acc.toString();
  acc = acc + 167 - (acc % 17);
  arr.push(acc % 1000);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const ix49: number = buf.indexOf('p84');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 98) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = (acc * 31 + 9632) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1064) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  acc = acc + 347 - (acc % 56);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  for (let i2 = 0; i2 < 9; i2++) {
    acc = (acc + i2 * 13 + 858) % 100003;
  }
  m01.set('k3', acc % 997);
  try { if (acc % 29 === 19) { throw new Error('synthetic-4'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i5 = 0; i5 < 10; i5++) {
    acc = (acc + i5 * 13 + 997) % 100003;
  }
  const rc6: Rec84 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  arr.push(acc % 1000);
  acc = (acc * 31 + 9959) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  buf += 'region11-' + acc.toString();
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  m01.set('k15', acc % 997);
  acc = acc + 310 - (acc % 16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 165) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'carrier18-' + acc.toString();
  acc = (acc * 31 + 4681) % 65521;
  acc = acc + 305 - (acc % 72);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += `q25:${acc % 97}`;
  const ix26: number = buf.indexOf('p84');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  buf += `q27:${acc % 97}`;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8064) % 65521;
  m01.set('k30', acc % 997);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 187) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-33'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 151) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 8 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5143) % 65521;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  acc = acc + 556 - (acc % 16);
  acc = (acc * 31 + 5962) % 65521;
  buf += 'vendor41-' + acc.toString();
  buf += 'journey42-' + acc.toString();
  acc = (acc * 31 + 3315) % 65521;
  const rc44: Rec84 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += `q45:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += `q47:${acc % 97}`;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 120) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1065) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  m01.set('k0', acc % 997);
  const ix1: number = buf.indexOf('p84');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2484) % 65521;
  acc = acc + 285 - (acc % 36);
  if (acc % 15 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-6'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 356) % 65521;
  m01.set('k8', acc % 997);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const ix11: number = buf.indexOf('p84');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 95) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const rc14: Rec84 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += 'portal15-' + acc.toString();
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 153) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec84 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  arr.push(acc % 1000);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  for (let i21 = 0; i21 < 4; i21++) {
    acc = (acc + i21 * 13 + 209) % 100003;
  }
  for (let i22 = 0; i22 < 6; i22++) {
    acc = (acc + i22 * 13 + 291) % 100003;
  }
  if (acc % 19 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  if (acc % 31 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 40) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  for (let i29 = 0; i29 < 4; i29++) {
    acc = (acc + i29 * 13 + 516) % 100003;
  }
  acc = (acc * 31 + 8837) % 65521;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 61) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 10 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 111) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 1289) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  buf += `q39:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (acc % 23 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5458) % 65521;
  for (let i44 = 0; i44 < 12; i44++) {
    acc = (acc + i44 * 13 + 734) % 100003;
  }
  buf += `q45:${acc % 97}`;
  const rc46: Rec84 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  m01.set('k49', acc % 997);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1066) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1688) % 65521;
  if (acc % 17 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 25) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  if (acc % 24 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  buf += `q8:${acc % 97}`;
  acc = (acc * 31 + 9868) % 65521;
  const rc10: Rec84 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = acc + 933 - (acc % 64);
  if (acc % 27 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  m01.set('k13', acc % 997);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-15'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i16 = 0; i16 < 10; i16++) {
    acc = (acc + i16 * 13 + 485) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 34) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec84 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  m01.set('k20', acc % 997);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  acc = acc + 839 - (acc % 52);
  const rc24: Rec84 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  buf += `q25:${acc % 97}`;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  buf += `q27:${acc % 97}`;
  if (acc % 27 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  buf += 'freight29-' + acc.toString();
  buf += `q30:${acc % 97}`;
  acc = acc + 855 - (acc % 21);
  buf += 'carrier32-' + acc.toString();
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 167) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 143) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  try { if (acc % 29 === 23) { throw new Error('synthetic-38'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const ix39: number = buf.indexOf('p84');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3428) % 65521;
  const rc41: Rec84 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  if (acc % 12 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = acc + 524 - (acc % 92);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += `q46:${acc % 97}`;
  acc = (acc * 31 + 3065) % 65521;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const ix51: number = buf.indexOf('p84');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1067) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const rc1: Rec84 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-4'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  acc = (acc * 31 + 693) % 65521;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  acc = (acc * 31 + 8680) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 108) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  if (acc % 20 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  m01.set('k12', acc % 997);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 7) { throw new Error('synthetic-14'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 126) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const rc20: Rec84 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const ix21: number = buf.indexOf('p84');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const rc23: Rec84 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 141) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 309 - (acc % 77);
  const ix29: number = buf.indexOf('p84');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const rc31: Rec84 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 192) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 397) % 65521;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const ix37: number = buf.indexOf('p84');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  m01.set('k39', acc % 997);
  const ix40: number = buf.indexOf('p84');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 71) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  buf += 'tariff43-' + acc.toString();
  const rc44: Rec84 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  m01.set('k45', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  if (acc % 26 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  buf += `q48:${acc % 97}`;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  acc = acc + 913 - (acc % 22);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1068) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  arr.push(acc % 1000);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  buf += `q6:${acc % 97}`;
  m01.set('k7', acc % 997);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  acc = acc + 785 - (acc % 96);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (acc % 30 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i13 = 0; i13 < 4; i13++) {
    acc = (acc + i13 * 13 + 379) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  m01.set('k15', acc % 997);
  acc = acc + 114 - (acc % 66);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += `q19:${acc % 97}`;
  for (let i20 = 0; i20 < 10; i20++) {
    acc = (acc + i20 * 13 + 775) % 100003;
  }
  if (acc % 27 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  m01.set('k22', acc % 997);
  buf += 'shelf23-' + acc.toString();
  const ix24: number = buf.indexOf('p84');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  for (let i25 = 0; i25 < 9; i25++) {
    acc = (acc + i25 * 13 + 342) % 100003;
  }
  buf += `q26:${acc % 97}`;
  acc = acc + 359 - (acc % 42);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  try { if (acc % 29 === 13) { throw new Error('synthetic-29'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const ix32: number = buf.indexOf('p84');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const ix33: number = buf.indexOf('p84');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 26) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 126) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  acc = acc + 739 - (acc % 23);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += 'audit45-' + acc.toString();
  acc = (acc * 31 + 2853) % 65521;
  m01.set('k47', acc % 997);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 182) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  m01.set('k49', acc % 997);
  for (let i50 = 0; i50 < 7; i50++) {
    acc = (acc + i50 * 13 + 200) % 100003;
  }
  buf += 'bay51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1069) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  acc = (acc * 31 + 3882) % 65521;
  for (let i1 = 0; i1 < 3; i1++) {
    acc = (acc + i1 * 13 + 577) % 100003;
  }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const ix3: number = buf.indexOf('p84');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  if (acc % 24 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6698) % 65521;
  const rc6: Rec84 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  buf += `q7:${acc % 97}`;
  acc = (acc * 31 + 8810) % 65521;
  acc = (acc * 31 + 5140) % 65521;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const ix12: number = buf.indexOf('p84');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  if (acc % 21 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const ix14: number = buf.indexOf('p84');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const ix15: number = buf.indexOf('p84');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 89) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-18'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k19', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  acc = (acc * 31 + 7399) % 65521;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2676) % 65521;
  buf += 'freight24-' + acc.toString();
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = acc + 92 - (acc % 62);
  arr.push(acc % 1000);
  acc = acc + 946 - (acc % 69);
  m01.set('k30', acc % 997);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  m01.set('k32', acc % 997);
  const rc33: Rec84 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 60) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  acc = (acc * 31 + 5026) % 65521;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 77) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  buf += `q45:${acc % 97}`;
  acc = (acc * 31 + 4868) % 65521;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const rc48: Rec84 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  if (acc % 23 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const rc51: Rec84 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1070) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  arr.push(acc % 1000);
  m01.set('k1', acc % 997);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  buf += 'batch6-' + acc.toString();
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  for (let i8 = 0; i8 < 10; i8++) {
    acc = (acc + i8 * 13 + 827) % 100003;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 38) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5305) % 65521;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  arr.push(acc % 1000);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 15) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 6; i18++) {
    acc = (acc + i18 * 13 + 142) % 100003;
  }
  const ix19: number = buf.indexOf('p84');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += 'region20-' + acc.toString();
  acc = acc + 938 - (acc % 62);
  try { if (acc % 29 === 13) { throw new Error('synthetic-22'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  m01.set('k24', acc % 997);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  acc = acc + 947 - (acc % 68);
  for (let i27 = 0; i27 < 4; i27++) {
    acc = (acc + i27 * 13 + 769) % 100003;
  }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const ix32: number = buf.indexOf('p84');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 170) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 494 - (acc % 46);
  m01.set('k36', acc % 997);
  if (acc % 31 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  buf += 'ticket39-' + acc.toString();
  const rc40: Rec84 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const ix41: number = buf.indexOf('p84');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  m01.set('k43', acc % 997);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  acc = acc + 893 - (acc % 20);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  for (let i47 = 0; i47 < 5; i47++) {
    acc = (acc + i47 * 13 + 658) % 100003;
  }
  buf += `q48:${acc % 97}`;
  const ix49: number = buf.indexOf('p84');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  for (let i50 = 0; i50 < 7; i50++) {
    acc = (acc + i50 * 13 + 745) % 100003;
  }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0084_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0084_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0084_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1071) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (acc % 25 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5467) % 65521;
  const ix4: number = buf.indexOf('p84');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  buf += 'shelf5-' + acc.toString();
  if (acc % 16 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7232) % 65521;
  if (acc % 20 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 17) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  for (let i12 = 0; i12 < 4; i12++) {
    acc = (acc + i12 * 13 + 431) % 100003;
  }
  const ix13: number = buf.indexOf('p84');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 6) { throw new Error('synthetic-15'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  for (let i19 = 0; i19 < 5; i19++) {
    acc = (acc + i19 * 13 + 90) % 100003;
  }
  const rc20: Rec84 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += `q23:${acc % 97}`;
  if (acc % 17 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const rc25: Rec84 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  arr.push(acc % 1000);
  for (let i27 = 0; i27 < 9; i27++) {
    acc = (acc + i27 * 13 + 97) % 100003;
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  acc = (acc * 31 + 3323) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 64) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec84 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  try { if (acc % 29 === 22) { throw new Error('synthetic-36'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  if (acc % 21 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k41', acc % 997);
  acc = (acc * 31 + 4640) % 65521;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  buf += 'pallet44-' + acc.toString();
  const rc45: Rec84 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const ix46: number = buf.indexOf('p84');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  for (let i48 = 0; i48 < 4; i48++) {
    acc = (acc + i48 * 13 + 345) % 100003;
  }
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 78) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1072) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  try { if (acc % 29 === 10) { throw new Error('synthetic-0'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const rc2: Rec84 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  try { if (acc % 29 === 21) { throw new Error('synthetic-4'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  arr.push(acc % 1000);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const rc13: Rec84 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  acc = (acc * 31 + 6631) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 121) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 120 - (acc % 30);
  const ix19: number = buf.indexOf('p84');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += 'customs20-' + acc.toString();
  const rc21: Rec84 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  m01.set('k22', acc % 997);
  if (acc % 24 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  const ix24: number = buf.indexOf('p84');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  if (acc % 9 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  buf += 'shelf28-' + acc.toString();
  if (acc % 31 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  acc = acc + 369 - (acc % 80);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 102) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec84 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const ix36: number = buf.indexOf('p84');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  if (acc % 27 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  arr.push(acc % 1000);
  m01.set('k40', acc % 997);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  try { if (acc % 29 === 9) { throw new Error('synthetic-43'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q44:${acc % 97}`;
  acc = acc + 383 - (acc % 30);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-47'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const ix50: number = buf.indexOf('p84');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5411) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0084_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1073) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit84 = new Unit84(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const ix1: number = buf.indexOf('p84');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  if (acc % 11 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  buf += `q5:${acc % 97}`;
  if (acc % 6 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  buf += `q7:${acc % 97}`;
  buf += 'journey8-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  acc = (acc * 31 + 7362) % 65521;
  const ix11: number = buf.indexOf('p84');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-12'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  if (acc % 12 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 162) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 20) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  try { if (acc % 29 === 6) { throw new Error('synthetic-19'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-21'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 121) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  acc = acc + 783 - (acc % 86);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  try { if (acc % 29 === 14) { throw new Error('synthetic-25'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'pallet26-' + acc.toString();
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 105) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const rc28: Rec84 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const ix30: number = buf.indexOf('p84');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const ix33: number = buf.indexOf('p84');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 51) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 8 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  m01.set('k36', acc % 997);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  acc = acc + 790 - (acc % 44);
  if (acc % 7 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const ix41: number = buf.indexOf('p84');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3047) % 65521;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const ix44: number = buf.indexOf('p84');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  for (let i45 = 0; i45 < 8; i45++) {
    acc = (acc + i45 * 13 + 49) % 100003;
  }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  arr.push(acc % 1000);
  for (let i48 = 0; i48 < 11; i48++) {
    acc = (acc + i48 * 13 + 189) % 100003;
  }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  buf += `q50:${acc % 97}`;
  acc = acc + 976 - (acc % 59);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0084(): BizFn[] {
  return [biz_0084_00, biz_0084_01, biz_0084_02, biz_0084_03, biz_0084_04, biz_0084_05, biz_0084_06, biz_0084_07, biz_0084_08, biz_0084_09, biz_0084_10, biz_0084_11, biz_0084_12, biz_0084_13, biz_0084_14, biz_0084_15, biz_0084_16, biz_0084_17, biz_0084_18, biz_0084_19, biz_0084_20, biz_0084_21, biz_0084_22, biz_0084_23, biz_0084_24, biz_0084_25, biz_0084_26, biz_0084_27, biz_0084_28, biz_0084_29, biz_0084_30, biz_0084_31, biz_0084_32, biz_0084_33, biz_0084_34, biz_0084_35, biz_0084_36, biz_0084_37, biz_0084_38, biz_0084_39, biz_0084_40, biz_0084_41, biz_0084_42];
}

export function rega_0084(): ABizFn[] {
  return [biz_0084_09a, biz_0084_19a, biz_0084_29a, biz_0084_39a];
}
