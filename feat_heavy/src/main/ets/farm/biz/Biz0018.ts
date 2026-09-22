// Biz0018.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec18 { id: number; tag: string; score: number; }

class Unit18 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0018_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2358) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  acc = (acc * 31 + 5277) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-1'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i2 = 0; i2 < 5; i2++) {
    acc = (acc + i2 * 13 + 674) % 100003;
  }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-4'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  arr.push(acc % 1000);
  buf += `q8:${acc % 97}`;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 101) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 108) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  m01.set('k13', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  buf += 'ticket15-' + acc.toString();
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 169) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  arr.push(acc % 1000);
  buf += `q20:${acc % 97}`;
  m01.set('k21', acc % 997);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const ix24: number = buf.indexOf('p18');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  buf += 'balance25-' + acc.toString();
  if (acc % 13 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const rc28: Rec18 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  arr.push(acc % 1000);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  try { if (acc % 29 === 19) { throw new Error('synthetic-33'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 59) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  buf += `q37:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-38'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const ix40: number = buf.indexOf('p18');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4477) % 65521;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 16) { throw new Error('synthetic-43'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1627) % 65521;
  acc = acc + 29 - (acc % 32);
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const rc48: Rec18 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  acc = (acc * 31 + 7697) % 65521;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2359) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  buf += `q3:${acc % 97}`;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  for (let i5 = 0; i5 < 7; i5++) {
    acc = (acc + i5 * 13 + 203) % 100003;
  }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += 'depot7-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const rc9: Rec18 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = (acc * 31 + 8342) % 65521;
  acc = (acc * 31 + 1607) % 65521;
  acc = acc + 21 - (acc % 7);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 138) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  buf += 'transit15-' + acc.toString();
  for (let i16 = 0; i16 < 4; i16++) {
    acc = (acc + i16 * 13 + 986) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 122) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p18');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  if (acc % 29 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  acc = acc + 141 - (acc % 47);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 169) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const ix26: number = buf.indexOf('p18');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  if (acc % 13 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  buf += `q30:${acc % 97}`;
  arr.push(acc % 1000);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  if (acc % 9 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 170) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const rc36: Rec18 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  if (acc % 23 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  acc = acc + 756 - (acc % 88);
  if (acc % 22 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  buf += 'dispatch43-' + acc.toString();
  const rc44: Rec18 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  m01.set('k46', acc % 997);
  for (let i47 = 0; i47 < 11; i47++) {
    acc = (acc + i47 * 13 + 639) % 100003;
  }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  for (let i49 = 0; i49 < 12; i49++) {
    acc = (acc + i49 * 13 + 875) % 100003;
  }
  const rc50: Rec18 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2360) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  if (acc % 7 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  if (acc % 7 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = acc + 122 - (acc % 36);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  try { if (acc % 29 === 22) { throw new Error('synthetic-6'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const ix7: number = buf.indexOf('p18');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = acc + 130 - (acc % 90);
  if (acc % 20 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 153) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const rc13: Rec18 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const rc14: Rec18 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const rc16: Rec18 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 181) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec18 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  acc = acc + 82 - (acc % 80);
  acc = (acc * 31 + 2333) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-21'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 219 - (acc % 50);
  acc = (acc * 31 + 1115) % 65521;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  m01.set('k27', acc % 997);
  arr.push(acc % 1000);
  buf += `q29:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  for (let i31 = 0; i31 < 12; i31++) {
    acc = (acc + i31 * 13 + 608) % 100003;
  }
  const rc32: Rec18 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const ix33: number = buf.indexOf('p18');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 103) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec18 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  acc = acc + 17 - (acc % 26);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  acc = acc + 573 - (acc % 16);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-43'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const ix46: number = buf.indexOf('p18');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  for (let i50 = 0; i50 < 4; i50++) {
    acc = (acc + i50 * 13 + 816) % 100003;
  }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2361) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  try { if (acc % 29 === 21) { throw new Error('synthetic-0'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 158) % 65521;
  const rc2: Rec18 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  buf += 'settle3-' + acc.toString();
  buf += 'audit4-' + acc.toString();
  if (acc % 22 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += `q8:${acc % 97}`;
  try { if (acc % 29 === 8) { throw new Error('synthetic-9'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k10', acc % 997);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  buf += `q13:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  for (let i15 = 0; i15 < 11; i15++) {
    acc = (acc + i15 * 13 + 583) % 100003;
  }
  acc = (acc * 31 + 9139) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 108) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 9009) % 65521;
  acc = (acc * 31 + 2101) % 65521;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  arr.push(acc % 1000);
  acc = acc + 335 - (acc % 58);
  const ix26: number = buf.indexOf('p18');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  for (let i28 = 0; i28 < 12; i28++) {
    acc = (acc + i28 * 13 + 451) % 100003;
  }
  m01.set('k29', acc % 997);
  try { if (acc % 29 === 7) { throw new Error('synthetic-30'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  for (let i33 = 0; i33 < 12; i33++) {
    acc = (acc + i33 * 13 + 387) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 122) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  arr.push(acc % 1000);
  buf += 'order38-' + acc.toString();
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  acc = acc + 485 - (acc % 12);
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 67) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const ix44: number = buf.indexOf('p18');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  m01.set('k46', acc % 997);
  acc = (acc * 31 + 8003) % 65521;
  acc = (acc * 31 + 3812) % 65521;
  if (acc % 28 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2362) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  const rc0: Rec18 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  acc = (acc * 31 + 9948) % 65521;
  const rc3: Rec18 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  for (let i4 = 0; i4 < 4; i4++) {
    acc = (acc + i4 * 13 + 333) % 100003;
  }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 106) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  for (let i6 = 0; i6 < 12; i6++) {
    acc = (acc + i6 * 13 + 750) % 100003;
  }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const rc8: Rec18 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  m01.set('k10', acc % 997);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  acc = acc + 342 - (acc % 92);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 78) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p18');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  for (let i21 = 0; i21 < 12; i21++) {
    acc = (acc + i21 * 13 + 371) % 100003;
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-22'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'order23-' + acc.toString();
  try { if (acc % 29 === 6) { throw new Error('synthetic-24'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k25', acc % 997);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = acc + 427 - (acc % 88);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  m01.set('k30', acc % 997);
  arr.push(acc % 1000);
  buf += 'warehouse32-' + acc.toString();
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 137) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p18');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  acc = acc + 109 - (acc % 95);
  m01.set('k37', acc % 997);
  const ix38: number = buf.indexOf('p18');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  for (let i39 = 0; i39 < 10; i39++) {
    acc = (acc + i39 * 13 + 193) % 100003;
  }
  if (acc % 22 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = acc + 569 - (acc % 95);
  m01.set('k42', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-44'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k45', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  try { if (acc % 29 === 2) { throw new Error('synthetic-47'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const rc48: Rec18 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  buf += 'ledger49-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2363) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  m01.set('k1', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  arr.push(acc % 1000);
  for (let i5 = 0; i5 < 4; i5++) {
    acc = (acc + i5 * 13 + 293) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  try { if (acc % 29 === 15) { throw new Error('synthetic-7'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i8 = 0; i8 < 11; i8++) {
    acc = (acc + i8 * 13 + 660) % 100003;
  }
  if (acc % 16 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const ix10: number = buf.indexOf('p18');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  if (acc % 10 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 121) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  if (acc % 25 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const rc15: Rec18 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 90) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = acc + 720 - (acc % 65);
  if (acc % 16 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 74) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 48) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  for (let i28 = 0; i28 < 4; i28++) {
    acc = (acc + i28 * 13 + 98) % 100003;
  }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  if (acc % 20 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 77) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 87) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  acc = acc + 380 - (acc % 76);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  m01.set('k39', acc % 997);
  m01.set('k40', acc % 997);
  try { if (acc % 29 === 15) { throw new Error('synthetic-41'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (acc % 10 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2808) % 65521;
  if (acc % 12 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = acc + 175 - (acc % 90);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  m01.set('k50', acc % 997);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2364) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  buf += `q0:${acc % 97}`;
  const rc1: Rec18 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 22) { throw new Error('synthetic-3'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += 'depot8-' + acc.toString();
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const ix12: number = buf.indexOf('p18');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-13'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 189) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p18');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  acc = acc + 661 - (acc % 93);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6180) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const rc24: Rec18 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  buf += 'ledger26-' + acc.toString();
  arr.push(acc % 1000);
  acc = acc + 590 - (acc % 84);
  acc = acc + 747 - (acc % 68);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += `q31:${acc % 97}`;
  const ix32: number = buf.indexOf('p18');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const rc33: Rec18 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 163) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 10; i35++) {
    acc = (acc + i35 * 13 + 946) % 100003;
  }
  buf += 'policy36-' + acc.toString();
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  m01.set('k39', acc % 997);
  const ix40: number = buf.indexOf('p18');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8626) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  buf += 'coupon43-' + acc.toString();
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  if (acc % 8 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  for (let i46 = 0; i46 < 7; i46++) {
    acc = (acc + i46 * 13 + 523) % 100003;
  }
  m01.set('k47', acc % 997);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 73) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-49'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2365) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  if (acc % 20 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  buf += 'audit2-' + acc.toString();
  const rc3: Rec18 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  if (acc % 28 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  acc = acc + 741 - (acc % 61);
  for (let i8 = 0; i8 < 11; i8++) {
    acc = (acc + i8 * 13 + 323) % 100003;
  }
  const rc9: Rec18 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += `q10:${acc % 97}`;
  buf += 'crate11-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  for (let i14 = 0; i14 < 10; i14++) {
    acc = (acc + i14 * 13 + 101) % 100003;
  }
  acc = (acc * 31 + 7244) % 65521;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 149) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  acc = acc + 924 - (acc % 19);
  try { if (acc % 29 === 14) { throw new Error('synthetic-20'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 97 - (acc % 49);
  for (let i22 = 0; i22 < 4; i22++) {
    acc = (acc + i22 * 13 + 545) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = acc + 508 - (acc % 76);
  const rc25: Rec18 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  m01.set('k26', acc % 997);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const rc28: Rec18 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 96) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  m01.set('k30', acc % 997);
  buf += 'ledger31-' + acc.toString();
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 169) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const rc38: Rec18 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  arr.push(acc % 1000);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  acc = acc + 636 - (acc % 76);
  for (let i42 = 0; i42 < 9; i42++) {
    acc = (acc + i42 * 13 + 88) % 100003;
  }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 6559) % 65521;
  const rc45: Rec18 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-46'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'journey47-' + acc.toString();
  const rc48: Rec18 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  try { if (acc % 29 === 8) { throw new Error('synthetic-49'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k50', acc % 997);
  acc = (acc * 31 + 6021) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2366) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 23) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  for (let i1 = 0; i1 < 6; i1++) {
    acc = (acc + i1 * 13 + 697) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  buf += 'refund3-' + acc.toString();
  acc = acc + 942 - (acc % 59);
  buf += `q5:${acc % 97}`;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  acc = (acc * 31 + 5836) % 65521;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 93) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const rc16: Rec18 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 46) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  buf += 'pickup19-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  m01.set('k21', acc % 997);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  m01.set('k23', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  if (acc % 17 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 42) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  acc = acc + 791 - (acc % 40);
  try { if (acc % 29 === 20) { throw new Error('synthetic-29'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const rc32: Rec18 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 145) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 544 - (acc % 70);
  const rc36: Rec18 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  acc = acc + 46 - (acc % 67);
  const ix38: number = buf.indexOf('p18');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const rc39: Rec18 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  buf += 'pallet40-' + acc.toString();
  acc = (acc * 31 + 5830) % 65521;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  arr.push(acc % 1000);
  if (acc % 26 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = acc + 168 - (acc % 43);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  arr.push(acc % 1000);
  const ix51: number = buf.indexOf('p18');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2367) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  m01.set('k1', acc % 997);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  buf += `q4:${acc % 97}`;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 106) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  acc = (acc * 31 + 4256) % 65521;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  m01.set('k10', acc % 997);
  for (let i11 = 0; i11 < 9; i11++) {
    acc = (acc + i11 * 13 + 989) % 100003;
  }
  acc = acc + 789 - (acc % 65);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const ix14: number = buf.indexOf('p18');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = acc + 286 - (acc % 64);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 52) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 271 - (acc % 88);
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  for (let i20 = 0; i20 < 12; i20++) {
    acc = (acc + i20 * 13 + 295) % 100003;
  }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  if (acc % 16 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-26'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const ix27: number = buf.indexOf('p18');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (acc % 26 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1971) % 65521;
  arr.push(acc % 1000);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 149) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 106) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  acc = (acc * 31 + 6956) % 65521;
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  buf += 'freight39-' + acc.toString();
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  for (let i41 = 0; i41 < 3; i41++) {
    acc = (acc + i41 * 13 + 637) % 100003;
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  buf += `q43:${acc % 97}`;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 120) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  m01.set('k47', acc % 997);
  m01.set('k48', acc % 997);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  buf += 'refund50-' + acc.toString();
  buf += 'balance51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0018_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0018_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0018_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2368) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  buf += 'waybill0-' + acc.toString();
  m01.set('k1', acc % 997);
  for (let i2 = 0; i2 < 5; i2++) {
    acc = (acc + i2 * 13 + 681) % 100003;
  }
  arr.push(acc % 1000);
  if (acc % 8 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += 'crate5-' + acc.toString();
  const ix6: number = buf.indexOf('p18');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const rc7: Rec18 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 50) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  buf += `q10:${acc % 97}`;
  const rc11: Rec18 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  acc = (acc * 31 + 8937) % 65521;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += 'coupon15-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 59) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p18');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += `q20:${acc % 97}`;
  arr.push(acc % 1000);
  const ix22: number = buf.indexOf('p18');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-23'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i24 = 0; i24 < 10; i24++) {
    acc = (acc + i24 * 13 + 11) % 100003;
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const ix26: number = buf.indexOf('p18');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  buf += 'dispatch27-' + acc.toString();
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  acc = (acc * 31 + 2009) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  const ix32: number = buf.indexOf('p18');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  acc = acc + 265 - (acc % 47);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 102) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'warehouse35-' + acc.toString();
  arr.push(acc % 1000);
  for (let i37 = 0; i37 < 7; i37++) {
    acc = (acc + i37 * 13 + 318) % 100003;
  }
  if (acc % 20 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  m01.set('k41', acc % 997);
  m01.set('k42', acc % 997);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 88) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-46'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const rc48: Rec18 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  arr.push(acc % 1000);
  const rc50: Rec18 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  if (acc % 31 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2369) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  m01.set('k0', acc % 997);
  arr.push(acc % 1000);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  acc = (acc * 31 + 7695) % 65521;
  const rc4: Rec18 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  const rc5: Rec18 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  if (acc % 10 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  acc = acc + 802 - (acc % 55);
  for (let i8 = 0; i8 < 9; i8++) {
    acc = (acc + i8 * 13 + 580) % 100003;
  }
  const ix9: number = buf.indexOf('p18');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  acc = acc + 510 - (acc % 54);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  m01.set('k14', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 117) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 59 - (acc % 12);
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 84) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 7399) % 65521;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const rc27: Rec18 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 49) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 75) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  acc = (acc * 31 + 1395) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 153) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const rc38: Rec18 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  acc = (acc * 31 + 5379) % 65521;
  acc = acc + 96 - (acc % 67);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 111) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  buf += 'parcel43-' + acc.toString();
  m01.set('k44', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  m01.set('k46', acc % 997);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 98) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  try { if (acc % 29 === 14) { throw new Error('synthetic-50'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 158 - (acc % 23);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2370) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  for (let i0 = 0; i0 < 10; i0++) {
    acc = (acc + i0 * 13 + 940) % 100003;
  }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  buf += 'routeplan2-' + acc.toString();
  if (acc % 25 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  for (let i5 = 0; i5 < 5; i5++) {
    acc = (acc + i5 * 13 + 119) % 100003;
  }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  if (acc % 5 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-8'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'warehouse9-' + acc.toString();
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  try { if (acc % 29 === 7) { throw new Error('synthetic-11'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  buf += `q13:${acc % 97}`;
  const rc14: Rec18 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 29) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  arr.push(acc % 1000);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const rc21: Rec18 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  m01.set('k22', acc % 997);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  if (acc % 20 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 60) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  acc = (acc * 31 + 6015) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-31'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 19 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const rc33: Rec18 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 98) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p18');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  m01.set('k36', acc % 997);
  acc = (acc * 31 + 5050) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-38'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 701 - (acc % 66);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i41 = 0; i41 < 4; i41++) {
    acc = (acc + i41 * 13 + 325) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q43:${acc % 97}`;
  acc = (acc * 31 + 6298) % 65521;
  if (acc % 10 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const rc46: Rec18 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += `q48:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2371) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 93) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  acc = acc + 217 - (acc % 94);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-7'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'routeplan8-' + acc.toString();
  if (acc % 20 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7371) % 65521;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const ix13: number = buf.indexOf('p18');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  acc = acc + 39 - (acc % 28);
  const rc15: Rec18 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 28) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = acc + 699 - (acc % 56);
  buf += `q20:${acc % 97}`;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  acc = (acc * 31 + 5590) % 65521;
  buf += 'dock23-' + acc.toString();
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  m01.set('k26', acc % 997);
  if (acc % 27 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  m01.set('k28', acc % 997);
  const ix29: number = buf.indexOf('p18');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  for (let i32 = 0; i32 < 4; i32++) {
    acc = (acc + i32 * 13 + 612) % 100003;
  }
  buf += 'rebate33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 90) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const ix36: number = buf.indexOf('p18');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  m01.set('k37', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 120) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const rc40: Rec18 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  m01.set('k41', acc % 997);
  buf += 'balance42-' + acc.toString();
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += 'refund46-' + acc.toString();
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 5) { throw new Error('synthetic-48'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 18 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2372) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 25) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  for (let i3 = 0; i3 < 11; i3++) {
    acc = (acc + i3 * 13 + 691) % 100003;
  }
  if (acc % 28 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  m01.set('k5', acc % 997);
  try { if (acc % 29 === 11) { throw new Error('synthetic-6'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4889) % 65521;
  const ix8: number = buf.indexOf('p18');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  arr.push(acc % 1000);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  acc = (acc * 31 + 699) % 65521;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const ix14: number = buf.indexOf('p18');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const ix15: number = buf.indexOf('p18');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 26) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  for (let i21 = 0; i21 < 10; i21++) {
    acc = (acc + i21 * 13 + 964) % 100003;
  }
  const ix22: number = buf.indexOf('p18');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  for (let i23 = 0; i23 < 5; i23++) {
    acc = (acc + i23 * 13 + 294) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  buf += 'stocktake25-' + acc.toString();
  for (let i26 = 0; i26 < 7; i26++) {
    acc = (acc + i26 * 13 + 685) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (acc % 19 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-29'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-30'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k31', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 138) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 81) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-36'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k37', acc % 997);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  for (let i41 = 0; i41 < 8; i41++) {
    acc = (acc + i41 * 13 + 109) % 100003;
  }
  buf += `q42:${acc % 97}`;
  buf += `q43:${acc % 97}`;
  acc = acc + 970 - (acc % 49);
  buf += `q45:${acc % 97}`;
  acc = acc + 714 - (acc % 95);
  acc = acc + 279 - (acc % 83);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 92) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2373) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  acc = acc + 599 - (acc % 93);
  acc = acc + 821 - (acc % 62);
  buf += 'invoice2-' + acc.toString();
  if (acc % 23 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const ix4: number = buf.indexOf('p18');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = acc + 647 - (acc % 44);
  const ix6: number = buf.indexOf('p18');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  acc = acc + 428 - (acc % 55);
  acc = acc + 47 - (acc % 91);
  try { if (acc % 29 === 8) { throw new Error('synthetic-10'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const rc11: Rec18 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const rc15: Rec18 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  acc = (acc * 31 + 7545) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 22) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 30) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const rc19: Rec18 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  if (acc % 23 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3455) % 65521;
  for (let i22 = 0; i22 < 10; i22++) {
    acc = (acc + i22 * 13 + 430) % 100003;
  }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  acc = acc + 445 - (acc % 96);
  arr.push(acc % 1000);
  buf += `q26:${acc % 97}`;
  m01.set('k27', acc % 997);
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = acc + 902 - (acc % 55);
  acc = acc + 857 - (acc % 79);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 114) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 128) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  buf += 'dock37-' + acc.toString();
  arr.push(acc % 1000);
  acc = acc + 238 - (acc % 48);
  m01.set('k40', acc % 997);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 167) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = acc + 141 - (acc % 52);
  for (let i43 = 0; i43 < 4; i43++) {
    acc = (acc + i43 * 13 + 397) % 100003;
  }
  const rc44: Rec18 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  for (let i47 = 0; i47 < 4; i47++) {
    acc = (acc + i47 * 13 + 882) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  for (let i49 = 0; i49 < 7; i49++) {
    acc = (acc + i49 * 13 + 176) % 100003;
  }
  for (let i50 = 0; i50 < 11; i50++) {
    acc = (acc + i50 * 13 + 858) % 100003;
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 125) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2374) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  m01.set('k0', acc % 997);
  const ix1: number = buf.indexOf('p18');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  if (acc % 21 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 7) { throw new Error('synthetic-4'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  acc = (acc * 31 + 949) % 65521;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  acc = (acc * 31 + 5019) % 65521;
  buf += 'ledger10-' + acc.toString();
  acc = (acc * 31 + 2397) % 65521;
  acc = acc + 880 - (acc % 35);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  buf += 'region14-' + acc.toString();
  for (let i15 = 0; i15 < 9; i15++) {
    acc = (acc + i15 * 13 + 25) % 100003;
  }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 113) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const ix21: number = buf.indexOf('p18');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const rc23: Rec18 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  buf += `q25:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (acc % 15 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 131) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  m01.set('k30', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 198) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 111) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  buf += `q36:${acc % 97}`;
  const ix37: number = buf.indexOf('p18');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  arr.push(acc % 1000);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const ix42: number = buf.indexOf('p18');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const ix43: number = buf.indexOf('p18');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  m01.set('k44', acc % 997);
  m01.set('k45', acc % 997);
  try { if (acc % 29 === 14) { throw new Error('synthetic-46'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  acc = (acc * 31 + 1008) % 65521;
  m01.set('k50', acc % 997);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2375) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  try { if (acc % 29 === 14) { throw new Error('synthetic-0'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'refund1-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-3'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const rc4: Rec18 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  buf += 'region5-' + acc.toString();
  buf += 'vendor6-' + acc.toString();
  m01.set('k7', acc % 997);
  const rc8: Rec18 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  if (acc % 8 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  if (acc % 29 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  m01.set('k14', acc % 997);
  m01.set('k15', acc % 997);
  const rc16: Rec18 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 77) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 11; i18++) {
    acc = (acc + i18 * 13 + 350) % 100003;
  }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  for (let i21 = 0; i21 < 12; i21++) {
    acc = (acc + i21 * 13 + 167) % 100003;
  }
  buf += `q22:${acc % 97}`;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  buf += 'balance24-' + acc.toString();
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const rc26: Rec18 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const ix28: number = buf.indexOf('p18');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  m01.set('k30', acc % 997);
  for (let i31 = 0; i31 < 4; i31++) {
    acc = (acc + i31 * 13 + 691) % 100003;
  }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 80) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 43) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 182) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  if (acc % 28 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  for (let i37 = 0; i37 < 8; i37++) {
    acc = (acc + i37 * 13 + 98) % 100003;
  }
  acc = (acc * 31 + 2769) % 65521;
  acc = acc + 299 - (acc % 30);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const ix42: number = buf.indexOf('p18');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 190) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += `q47:${acc % 97}`;
  m01.set('k48', acc % 997);
  for (let i49 = 0; i49 < 5; i49++) {
    acc = (acc + i49 * 13 + 689) % 100003;
  }
  if (acc % 29 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-51'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2376) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  const rc0: Rec18 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 177) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  for (let i2 = 0; i2 < 11; i2++) {
    acc = (acc + i2 * 13 + 135) % 100003;
  }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  if (acc % 10 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  if (acc % 17 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 52) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = (acc * 31 + 3441) % 65521;
  for (let i8 = 0; i8 < 8; i8++) {
    acc = (acc + i8 * 13 + 335) % 100003;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 36) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const ix10: number = buf.indexOf('p18');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  if (acc % 19 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  for (let i13 = 0; i13 < 10; i13++) {
    acc = (acc + i13 * 13 + 483) % 100003;
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-14'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const rc15: Rec18 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 62) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 2275) % 65521;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 74) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const ix23: number = buf.indexOf('p18');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  m01.set('k24', acc % 997);
  acc = (acc * 31 + 965) % 65521;
  acc = acc + 673 - (acc % 37);
  buf += `q27:${acc % 97}`;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 199) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  for (let i31 = 0; i31 < 4; i31++) {
    acc = (acc + i31 * 13 + 273) % 100003;
  }
  for (let i32 = 0; i32 < 10; i32++) {
    acc = (acc + i32 * 13 + 468) % 100003;
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 56) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 3; i35++) {
    acc = (acc + i35 * 13 + 456) % 100003;
  }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 144) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  const rc39: Rec18 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  acc = (acc * 31 + 3325) % 65521;
  m01.set('k43', acc % 997);
  for (let i44 = 0; i44 < 11; i44++) {
    acc = (acc + i44 * 13 + 454) % 100003;
  }
  const ix45: number = buf.indexOf('p18');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += 'shelf46-' + acc.toString();
  if (acc % 20 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = acc + 531 - (acc % 95);
  acc = (acc * 31 + 3936) % 65521;
  if (acc % 18 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2377) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  acc = (acc * 31 + 6878) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  const ix5: number = buf.indexOf('p18');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  try { if (acc % 29 === 10) { throw new Error('synthetic-7'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i8 = 0; i8 < 4; i8++) {
    acc = (acc + i8 * 13 + 356) % 100003;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 47) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  acc = (acc * 31 + 9533) % 65521;
  const rc11: Rec18 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  try { if (acc % 29 === 23) { throw new Error('synthetic-14'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i15 = 0; i15 < 3; i15++) {
    acc = (acc + i15 * 13 + 545) % 100003;
  }
  acc = (acc * 31 + 3292) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 140) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-18'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 25 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += `q21:${acc % 97}`;
  buf += `q22:${acc % 97}`;
  buf += `q23:${acc % 97}`;
  buf += `q24:${acc % 97}`;
  if (acc % 7 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 135) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const rc27: Rec18 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 2) { throw new Error('synthetic-29'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 131 - (acc % 36);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 33) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const rc36: Rec18 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  for (let i37 = 0; i37 < 5; i37++) {
    acc = (acc + i37 * 13 + 977) % 100003;
  }
  const rc38: Rec18 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  buf += `q39:${acc % 97}`;
  if (acc % 16 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  m01.set('k41', acc % 997);
  acc = acc + 564 - (acc % 92);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  buf += `q44:${acc % 97}`;
  buf += `q45:${acc % 97}`;
  arr.push(acc % 1000);
  try { if (acc % 29 === 21) { throw new Error('synthetic-47'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'audit48-' + acc.toString();
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  acc = (acc * 31 + 7444) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0018_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0018_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0018_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2378) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  buf += `q0:${acc % 97}`;
  const rc1: Rec18 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  for (let i3 = 0; i3 < 12; i3++) {
    acc = (acc + i3 * 13 + 520) % 100003;
  }
  buf += 'warehouse4-' + acc.toString();
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = acc + 816 - (acc % 87);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const rc11: Rec18 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  try { if (acc % 29 === 22) { throw new Error('synthetic-12'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += `q15:${acc % 97}`;
  const rc16: Rec18 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 67) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  m01.set('k21', acc % 997);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += `q25:${acc % 97}`;
  try { if (acc % 29 === 19) { throw new Error('synthetic-26'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const ix28: number = buf.indexOf('p18');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 164) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const ix31: number = buf.indexOf('p18');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 133) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k36', acc % 997);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const ix39: number = buf.indexOf('p18');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += `q40:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-41'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 725 - (acc % 46);
  try { if (acc % 29 === 23) { throw new Error('synthetic-43'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const ix45: number = buf.indexOf('p18');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  for (let i47 = 0; i47 < 8; i47++) {
    acc = (acc + i47 * 13 + 847) % 100003;
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 68) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k50', acc % 997);
  for (let i51 = 0; i51 < 9; i51++) {
    acc = (acc + i51 * 13 + 118) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2379) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  if (acc % 15 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 9262) % 65521;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  try { if (acc % 29 === 11) { throw new Error('synthetic-5'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-6'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  acc = (acc * 31 + 6213) % 65521;
  const ix13: number = buf.indexOf('p18');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  buf += 'crate14-' + acc.toString();
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 74) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 45) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  arr.push(acc % 1000);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const rc21: Rec18 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  try { if (acc % 29 === 10) { throw new Error('synthetic-22'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  m01.set('k24', acc % 997);
  const rc25: Rec18 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  acc = (acc * 31 + 483) % 65521;
  buf += `q27:${acc % 97}`;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  acc = acc + 750 - (acc % 51);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 33) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 85) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const rc36: Rec18 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  if (acc % 29 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  if (acc % 31 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (acc % 7 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 105) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (acc % 6 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8383) % 65521;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2380) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  try { if (acc % 29 === 8) { throw new Error('synthetic-0'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const rc2: Rec18 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  m01.set('k3', acc % 997);
  arr.push(acc % 1000);
  if (acc % 19 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 103) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  m01.set('k8', acc % 997);
  acc = (acc * 31 + 1992) % 65521;
  arr.push(acc % 1000);
  buf += `q11:${acc % 97}`;
  arr.push(acc % 1000);
  acc = acc + 998 - (acc % 30);
  try { if (acc % 29 === 16) { throw new Error('synthetic-14'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const ix16: number = buf.indexOf('p18');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 46) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 8; i18++) {
    acc = (acc + i18 * 13 + 551) % 100003;
  }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 91) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = (acc * 31 + 2505) % 65521;
  m01.set('k21', acc % 997);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 172) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  arr.push(acc % 1000);
  acc = (acc * 31 + 9426) % 65521;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 39) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = (acc * 31 + 6458) % 65521;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  acc = acc + 587 - (acc % 15);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 128) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 4; i35++) {
    acc = (acc + i35 * 13 + 664) % 100003;
  }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const ix38: number = buf.indexOf('p18');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  m01.set('k40', acc % 997);
  for (let i41 = 0; i41 < 11; i41++) {
    acc = (acc + i41 * 13 + 224) % 100003;
  }
  const ix42: number = buf.indexOf('p18');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const ix45: number = buf.indexOf('p18');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  m01.set('k46', acc % 997);
  acc = acc + 258 - (acc % 11);
  for (let i48 = 0; i48 < 5; i48++) {
    acc = (acc + i48 * 13 + 868) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += 'sku50-' + acc.toString();
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2381) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  const ix0: number = buf.indexOf('p18');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  m01.set('k1', acc % 997);
  acc = acc + 884 - (acc % 71);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const rc4: Rec18 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  for (let i5 = 0; i5 < 9; i5++) {
    acc = (acc + i5 * 13 + 232) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  m01.set('k10', acc % 997);
  arr.push(acc % 1000);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  buf += `q14:${acc % 97}`;
  acc = acc + 950 - (acc % 29);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 92) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 69) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 4839) % 65521;
  acc = acc + 679 - (acc % 44);
  const rc21: Rec18 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  try { if (acc % 29 === 5) { throw new Error('synthetic-25'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 175) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  try { if (acc % 29 === 20) { throw new Error('synthetic-29'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  for (let i31 = 0; i31 < 4; i31++) {
    acc = (acc + i31 * 13 + 878) % 100003;
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 73) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 386 - (acc % 83);
  for (let i36 = 0; i36 < 3; i36++) {
    acc = (acc + i36 * 13 + 793) % 100003;
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  buf += `q38:${acc % 97}`;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  acc = acc + 796 - (acc % 85);
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 176) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  const ix43: number = buf.indexOf('p18');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  buf += 'balance44-' + acc.toString();
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 191) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += 'warehouse46-' + acc.toString();
  m01.set('k47', acc % 997);
  acc = acc + 720 - (acc % 79);
  acc = (acc * 31 + 1498) % 65521;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 159) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  buf += 'settle51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2382) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  m01.set('k2', acc % 997);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += `q4:${acc % 97}`;
  const ix5: number = buf.indexOf('p18');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  if (acc % 9 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 193) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 114) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  acc = (acc * 31 + 2122) % 65521;
  try { if (acc % 29 === 23) { throw new Error('synthetic-11'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  arr.push(acc % 1000);
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 30) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  if (acc % 23 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += 'waybill24-' + acc.toString();
  acc = (acc * 31 + 4226) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-26'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 5230) % 65521;
  acc = acc + 449 - (acc % 86);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const rc33: Rec18 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 85) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-35'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  buf += `q37:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  acc = (acc * 31 + 2102) % 65521;
  buf += 'warehouse41-' + acc.toString();
  if (acc % 14 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const ix44: number = buf.indexOf('p18');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  buf += 'parcel45-' + acc.toString();
  for (let i46 = 0; i46 < 3; i46++) {
    acc = (acc + i46 * 13 + 220) % 100003;
  }
  if (acc % 24 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += `q49:${acc % 97}`;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  try { if (acc % 29 === 3) { throw new Error('synthetic-51'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2383) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  buf += `q0:${acc % 97}`;
  buf += `q1:${acc % 97}`;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 32) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  try { if (acc % 29 === 15) { throw new Error('synthetic-4'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const ix6: number = buf.indexOf('p18');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  buf += 'tariff9-' + acc.toString();
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 165) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  m01.set('k15', acc % 997);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 156) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  if (acc % 14 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const ix22: number = buf.indexOf('p18');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = acc + 13 - (acc % 84);
  acc = (acc * 31 + 4331) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-29'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  const ix30: number = buf.indexOf('p18');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3929) % 65521;
  arr.push(acc % 1000);
  const ix33: number = buf.indexOf('p18');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 111) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-35'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q36:${acc % 97}`;
  try { if (acc % 29 === 11) { throw new Error('synthetic-37'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i38 = 0; i38 < 5; i38++) {
    acc = (acc + i38 * 13 + 91) % 100003;
  }
  buf += 'payout39-' + acc.toString();
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const rc42: Rec18 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  for (let i43 = 0; i43 < 5; i43++) {
    acc = (acc + i43 * 13 + 462) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  arr.push(acc % 1000);
  acc = acc + 941 - (acc % 76);
  for (let i50 = 0; i50 < 11; i50++) {
    acc = (acc + i50 * 13 + 259) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2384) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  const ix1: number = buf.indexOf('p18');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  buf += 'rebate2-' + acc.toString();
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  m01.set('k4', acc % 997);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const ix11: number = buf.indexOf('p18');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const rc13: Rec18 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const rc14: Rec18 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  if (acc % 13 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  for (let i16 = 0; i16 < 11; i16++) {
    acc = (acc + i16 * 13 + 169) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 144) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const ix19: number = buf.indexOf('p18');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  acc = acc + 923 - (acc % 72);
  arr.push(acc % 1000);
  const ix22: number = buf.indexOf('p18');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  const rc23: Rec18 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 198) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  try { if (acc % 29 === 19) { throw new Error('synthetic-25'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  acc = acc + 201 - (acc % 92);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  acc = acc + 104 - (acc % 57);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 411 - (acc % 16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 13) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  for (let i36 = 0; i36 < 6; i36++) {
    acc = (acc + i36 * 13 + 112) % 100003;
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += `q40:${acc % 97}`;
  const ix41: number = buf.indexOf('p18');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  buf += `q42:${acc % 97}`;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 140) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  buf += 'invoice44-' + acc.toString();
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  for (let i46 = 0; i46 < 11; i46++) {
    acc = (acc + i46 * 13 + 993) % 100003;
  }
  for (let i47 = 0; i47 < 12; i47++) {
    acc = (acc + i47 * 13 + 620) % 100003;
  }
  arr.push(acc % 1000);
  buf += 'dispatch49-' + acc.toString();
  m01.set('k50', acc % 997);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2385) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 31) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  for (let i1 = 0; i1 < 7; i1++) {
    acc = (acc + i1 * 13 + 73) % 100003;
  }
  acc = acc + 946 - (acc % 11);
  for (let i3 = 0; i3 < 4; i3++) {
    acc = (acc + i3 * 13 + 787) % 100003;
  }
  m01.set('k4', acc % 997);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  if (acc % 18 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 30) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  m01.set('k13', acc % 997);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  if (acc % 10 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 181) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 27 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  if (acc % 27 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  for (let i23 = 0; i23 < 10; i23++) {
    acc = (acc + i23 * 13 + 662) % 100003;
  }
  for (let i24 = 0; i24 < 12; i24++) {
    acc = (acc + i24 * 13 + 280) % 100003;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-25'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const ix26: number = buf.indexOf('p18');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5913) % 65521;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  buf += `q29:${acc % 97}`;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 180) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 323 - (acc % 93);
  const rc36: Rec18 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  acc = (acc * 31 + 1731) % 65521;
  if (acc % 13 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  acc = acc + 617 - (acc % 18);
  arr.push(acc % 1000);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const rc45: Rec18 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  for (let i47 = 0; i47 < 11; i47++) {
    acc = (acc + i47 * 13 + 554) % 100003;
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 189) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  for (let i50 = 0; i50 < 6; i50++) {
    acc = (acc + i50 * 13 + 943) % 100003;
  }
  for (let i51 = 0; i51 < 8; i51++) {
    acc = (acc + i51 * 13 + 326) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2386) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const ix2: number = buf.indexOf('p18');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  for (let i3 = 0; i3 < 8; i3++) {
    acc = (acc + i3 * 13 + 965) % 100003;
  }
  const rc4: Rec18 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (acc % 12 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  acc = acc + 602 - (acc % 27);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  acc = (acc * 31 + 239) % 65521;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  try { if (acc % 29 === 5) { throw new Error('synthetic-12'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7937) % 65521;
  acc = acc + 248 - (acc % 36);
  const ix15: number = buf.indexOf('p18');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  const rc16: Rec18 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 43) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 74) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = acc + 988 - (acc % 54);
  m01.set('k21', acc % 997);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  for (let i23 = 0; i23 < 4; i23++) {
    acc = (acc + i23 * 13 + 11) % 100003;
  }
  acc = acc + 249 - (acc % 7);
  for (let i25 = 0; i25 < 6; i25++) {
    acc = (acc + i25 * 13 + 365) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 81) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  acc = acc + 879 - (acc % 28);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += `q31:${acc % 97}`;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  acc = acc + 425 - (acc % 26);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 115) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p18');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += `q37:${acc % 97}`;
  arr.push(acc % 1000);
  buf += 'freight39-' + acc.toString();
  buf += 'quota40-' + acc.toString();
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const rc42: Rec18 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const rc43: Rec18 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  if (acc % 23 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  buf += `q47:${acc % 97}`;
  acc = acc + 51 - (acc % 57);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2387) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  buf += 'coupon0-' + acc.toString();
  buf += `q1:${acc % 97}`;
  acc = (acc * 31 + 6896) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-3'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 26) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 93) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  try { if (acc % 29 === 16) { throw new Error('synthetic-6'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  try { if (acc % 29 === 2) { throw new Error('synthetic-11'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  buf += 'coupon14-' + acc.toString();
  try { if (acc % 29 === 7) { throw new Error('synthetic-15'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 159) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  if (acc % 19 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (acc % 15 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += 'warehouse25-' + acc.toString();
  const ix26: number = buf.indexOf('p18');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const rc27: Rec18 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  buf += 'settle28-' + acc.toString();
  const ix29: number = buf.indexOf('p18');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  for (let i30 = 0; i30 < 12; i30++) {
    acc = (acc + i30 * 13 + 455) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i32 = 0; i32 < 11; i32++) {
    acc = (acc + i32 * 13 + 12) % 100003;
  }
  buf += 'freight33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 99) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 159) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 403) % 65521;
  const ix40: number = buf.indexOf('p18');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  buf += 'audit41-' + acc.toString();
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  buf += `q44:${acc % 97}`;
  arr.push(acc % 1000);
  for (let i46 = 0; i46 < 4; i46++) {
    acc = (acc + i46 * 13 + 135) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5263) % 65521;
  for (let i49 = 0; i49 < 10; i49++) {
    acc = (acc + i49 * 13 + 36) % 100003;
  }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0018_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0018_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0018_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2388) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  m01.set('k0', acc % 997);
  try { if (acc % 29 === 9) { throw new Error('synthetic-1'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k2', acc % 997);
  if (acc % 14 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  m01.set('k5', acc % 997);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const rc7: Rec18 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const ix8: number = buf.indexOf('p18');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  m01.set('k9', acc % 997);
  acc = acc + 967 - (acc % 84);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-12'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 113 - (acc % 31);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 196) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 75) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec18 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  buf += 'invoice19-' + acc.toString();
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  if (acc % 17 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  if (acc % 11 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-27'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const rc28: Rec18 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const ix30: number = buf.indexOf('p18');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const ix31: number = buf.indexOf('p18');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  buf += `q32:${acc % 97}`;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 151) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  m01.set('k37', acc % 997);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  if (acc % 13 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8500) % 65521;
  const ix41: number = buf.indexOf('p18');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  for (let i46 = 0; i46 < 7; i46++) {
    acc = (acc + i46 * 13 + 118) % 100003;
  }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  arr.push(acc % 1000);
  acc = (acc * 31 + 3979) % 65521;
  for (let i50 = 0; i50 < 9; i50++) {
    acc = (acc + i50 * 13 + 9) % 100003;
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 97) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2389) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  for (let i0 = 0; i0 < 3; i0++) {
    acc = (acc + i0 * 13 + 755) % 100003;
  }
  acc = (acc * 31 + 926) % 65521;
  acc = acc + 30 - (acc % 78);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  acc = acc + 468 - (acc % 67);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  arr.push(acc % 1000);
  acc = (acc * 31 + 4294) % 65521;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  for (let i13 = 0; i13 < 8; i13++) {
    acc = (acc + i13 * 13 + 339) % 100003;
  }
  if (acc % 10 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  if (acc % 27 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 167) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 8721) % 65521;
  buf += `q19:${acc % 97}`;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  for (let i22 = 0; i22 < 10; i22++) {
    acc = (acc + i22 * 13 + 226) % 100003;
  }
  m01.set('k23', acc % 997);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  m01.set('k26', acc % 997);
  const ix27: number = buf.indexOf('p18');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  if (acc % 5 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 138) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q36:${acc % 97}`;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  buf += 'sku39-' + acc.toString();
  acc = acc + 261 - (acc % 71);
  acc = acc + 728 - (acc % 85);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 131) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  if (acc % 15 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  m01.set('k46', acc % 997);
  if (acc % 5 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  m01.set('k48', acc % 997);
  buf += 'carrier49-' + acc.toString();
  const rc50: Rec18 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2390) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 101) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  for (let i3 = 0; i3 < 10; i3++) {
    acc = (acc + i3 * 13 + 189) % 100003;
  }
  if (acc % 15 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  acc = acc + 894 - (acc % 80);
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = acc + 897 - (acc % 92);
  const rc8: Rec18 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = acc + 221 - (acc % 59);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-13'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const rc15: Rec18 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 69) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix19: number = buf.indexOf('p18');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += `q20:${acc % 97}`;
  buf += 'order21-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const ix23: number = buf.indexOf('p18');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-24'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  for (let i26 = 0; i26 < 5; i26++) {
    acc = (acc + i26 * 13 + 773) % 100003;
  }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = (acc * 31 + 8939) % 65521;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  acc = acc + 989 - (acc % 57);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 93) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 10; i35++) {
    acc = (acc + i35 * 13 + 776) % 100003;
  }
  if (acc % 11 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 17) { throw new Error('synthetic-38'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q39:${acc % 97}`;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  if (acc % 24 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = acc + 600 - (acc % 74);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 90) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  buf += `q48:${acc % 97}`;
  buf += `q49:${acc % 97}`;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  for (let i51 = 0; i51 < 4; i51++) {
    acc = (acc + i51 * 13 + 244) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2391) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  try { if (acc % 29 === 13) { throw new Error('synthetic-2'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  acc = acc + 978 - (acc % 39);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  acc = acc + 839 - (acc % 78);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 15) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = (acc * 31 + 8208) % 65521;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 193) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 107) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 86) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 160) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += `q20:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  if (acc % 16 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  buf += 'carrier23-' + acc.toString();
  buf += `q24:${acc % 97}`;
  for (let i25 = 0; i25 < 10; i25++) {
    acc = (acc + i25 * 13 + 434) % 100003;
  }
  const rc26: Rec18 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  try { if (acc % 29 === 19) { throw new Error('synthetic-27'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  buf += 'invoice29-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const ix31: number = buf.indexOf('p18');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 40) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 171) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 7; i35++) {
    acc = (acc + i35 * 13 + 994) % 100003;
  }
  if (acc % 9 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const rc37: Rec18 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  buf += `q38:${acc % 97}`;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const ix40: number = buf.indexOf('p18');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  for (let i41 = 0; i41 < 6; i41++) {
    acc = (acc + i41 * 13 + 146) % 100003;
  }
  for (let i42 = 0; i42 < 7; i42++) {
    acc = (acc + i42 * 13 + 456) % 100003;
  }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  if (acc % 28 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const ix47: number = buf.indexOf('p18');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const ix48: number = buf.indexOf('p18');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += 'journey49-' + acc.toString();
  buf += 'balance50-' + acc.toString();
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2392) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  acc = acc + 975 - (acc % 49);
  try { if (acc % 29 === 20) { throw new Error('synthetic-1'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  m01.set('k5', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  buf += `q7:${acc % 97}`;
  const rc8: Rec18 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = acc + 130 - (acc % 9);
  acc = acc + 80 - (acc % 8);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  arr.push(acc % 1000);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 150) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  for (let i16 = 0; i16 < 11; i16++) {
    acc = (acc + i16 * 13 + 931) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 189) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  if (acc % 23 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  buf += 'routeplan23-' + acc.toString();
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 23) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  acc = acc + 901 - (acc % 60);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  for (let i27 = 0; i27 < 8; i27++) {
    acc = (acc + i27 * 13 + 225) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 36) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-30'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  buf += 'ticket32-' + acc.toString();
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 89) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 325 - (acc % 41);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 146) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  m01.set('k38', acc % 997);
  acc = acc + 591 - (acc % 46);
  buf += `q40:${acc % 97}`;
  m01.set('k41', acc % 997);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  acc = (acc * 31 + 4854) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const ix45: number = buf.indexOf('p18');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  if (acc % 23 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 189) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  buf += `q50:${acc % 97}`;
  if (acc % 30 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2393) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  m01.set('k0', acc % 997);
  buf += `q1:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = acc + 395 - (acc % 54);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  acc = acc + 863 - (acc % 95);
  for (let i8 = 0; i8 < 9; i8++) {
    acc = (acc + i8 * 13 + 868) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  m01.set('k12', acc % 997);
  buf += `q13:${acc % 97}`;
  for (let i14 = 0; i14 < 6; i14++) {
    acc = (acc + i14 * 13 + 291) % 100003;
  }
  buf += `q15:${acc % 97}`;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 74) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const rc20: Rec18 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  for (let i21 = 0; i21 < 5; i21++) {
    acc = (acc + i21 * 13 + 109) % 100003;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-22'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  m01.set('k24', acc % 997);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  m01.set('k26', acc % 997);
  const rc27: Rec18 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  arr.push(acc % 1000);
  const rc29: Rec18 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  buf += 'invoice33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 135) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 19) { throw new Error('synthetic-35'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  for (let i37 = 0; i37 < 11; i37++) {
    acc = (acc + i37 * 13 + 468) % 100003;
  }
  arr.push(acc % 1000);
  buf += 'pickup39-' + acc.toString();
  acc = (acc * 31 + 5283) % 65521;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  if (acc % 8 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  m01.set('k43', acc % 997);
  m01.set('k44', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = acc + 811 - (acc % 21);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-49'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q50:${acc % 97}`;
  for (let i51 = 0; i51 < 7; i51++) {
    acc = (acc + i51 * 13 + 425) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2394) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  try { if (acc % 29 === 23) { throw new Error('synthetic-0'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (acc % 20 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  acc = acc + 859 - (acc % 79);
  acc = acc + 60 - (acc % 17);
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-10'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const rc11: Rec18 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 187) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = acc + 25 - (acc % 96);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 34) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  if (acc % 27 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const rc21: Rec18 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 130) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  for (let i28 = 0; i28 < 10; i28++) {
    acc = (acc + i28 * 13 + 274) % 100003;
  }
  for (let i29 = 0; i29 < 11; i29++) {
    acc = (acc + i29 * 13 + 862) % 100003;
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-30'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4995) % 65521;
  if (acc % 10 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 96) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 57) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'pallet35-' + acc.toString();
  m01.set('k36', acc % 997);
  for (let i37 = 0; i37 < 3; i37++) {
    acc = (acc + i37 * 13 + 584) % 100003;
  }
  m01.set('k38', acc % 997);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 198) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = (acc * 31 + 2701) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 23) { throw new Error('synthetic-42'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  if (acc % 13 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 56) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 2) { throw new Error('synthetic-50'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 72) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2395) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  const rc0: Rec18 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  acc = acc + 285 - (acc % 96);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 128) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  try { if (acc % 29 === 19) { throw new Error('synthetic-7'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  if (acc % 8 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  m01.set('k12', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i16 = 0; i16 < 12; i16++) {
    acc = (acc + i16 * 13 + 136) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 152) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  arr.push(acc % 1000);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  arr.push(acc % 1000);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const rc25: Rec18 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const rc27: Rec18 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const ix28: number = buf.indexOf('p18');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = acc + 379 - (acc % 51);
  const rc30: Rec18 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = acc + 695 - (acc % 17);
  const rc33: Rec18 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 133) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec18 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const rc36: Rec18 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  acc = (acc * 31 + 6700) % 65521;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 37) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  if (acc % 22 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const ix41: number = buf.indexOf('p18');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const ix43: number = buf.indexOf('p18');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const rc46: Rec18 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  buf += `q48:${acc % 97}`;
  m01.set('k49', acc % 997);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 86) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  buf += 'region51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2396) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  acc = (acc * 31 + 8480) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 18 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  for (let i4 = 0; i4 < 8; i4++) {
    acc = (acc + i4 * 13 + 416) % 100003;
  }
  acc = acc + 283 - (acc % 25);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  m01.set('k7', acc % 997);
  m01.set('k8', acc % 997);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 6) { throw new Error('synthetic-10'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-11'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  arr.push(acc % 1000);
  try { if (acc % 29 === 6) { throw new Error('synthetic-14'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 108) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 160) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 187) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix21: number = buf.indexOf('p18');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const rc22: Rec18 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  m01.set('k23', acc % 997);
  acc = acc + 814 - (acc % 67);
  const rc25: Rec18 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  acc = acc + 515 - (acc % 82);
  acc = (acc * 31 + 6674) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-28'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  if (acc % 21 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = (acc * 31 + 9098) % 65521;
  acc = (acc * 31 + 6796) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 133) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 75) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 346) % 65521;
  m01.set('k38', acc % 997);
  arr.push(acc % 1000);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  m01.set('k41', acc % 997);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  acc = acc + 970 - (acc % 64);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  buf += 'journey46-' + acc.toString();
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  acc = acc + 759 - (acc % 19);
  if (acc % 17 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  buf += 'pickup51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2397) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  buf += `q0:${acc % 97}`;
  buf += `q1:${acc % 97}`;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8463) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (acc % 30 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  if (acc % 23 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 12) { throw new Error('synthetic-10'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const rc11: Rec18 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  acc = acc + 625 - (acc % 21);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  buf += 'audit15-' + acc.toString();
  acc = acc + 46 - (acc % 63);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 180) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  arr.push(acc % 1000);
  buf += 'tariff20-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += `q22:${acc % 97}`;
  m01.set('k23', acc % 997);
  if (acc % 12 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  acc = acc + 799 - (acc % 20);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  acc = acc + 937 - (acc % 92);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 81) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 166) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const rc36: Rec18 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 13) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  buf += 'stocktake38-' + acc.toString();
  if (acc % 30 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 3846) % 65521;
  arr.push(acc % 1000);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 132) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = (acc * 31 + 3569) % 65521;
  acc = (acc * 31 + 3036) % 65521;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += `q47:${acc % 97}`;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  try { if (acc % 29 === 7) { throw new Error('synthetic-49'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-51'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0018_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0018_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0018_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2398) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  if (acc % 23 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += 'refund1-' + acc.toString();
  acc = (acc * 31 + 4571) % 65521;
  const rc3: Rec18 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  if (acc % 6 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  for (let i5 = 0; i5 < 7; i5++) {
    acc = (acc + i5 * 13 + 122) % 100003;
  }
  if (acc % 19 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 86) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  acc = acc + 708 - (acc % 89);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 106) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const rc14: Rec18 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += `q15:${acc % 97}`;
  const ix16: number = buf.indexOf('p18');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 185) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 6; i18++) {
    acc = (acc + i18 * 13 + 921) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  m01.set('k20', acc % 997);
  acc = (acc * 31 + 6515) % 65521;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  buf += `q24:${acc % 97}`;
  try { if (acc % 29 === 9) { throw new Error('synthetic-25'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const ix26: number = buf.indexOf('p18');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  acc = acc + 316 - (acc % 49);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  m01.set('k31', acc % 997);
  buf += 'carrier32-' + acc.toString();
  for (let i33 = 0; i33 < 12; i33++) {
    acc = (acc + i33 * 13 + 855) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 55) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 982 - (acc % 37);
  acc = acc + 945 - (acc % 9);
  const ix37: number = buf.indexOf('p18');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  m01.set('k38', acc % 997);
  if (acc % 27 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-40'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'invoice41-' + acc.toString();
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  buf += 'batch43-' + acc.toString();
  for (let i44 = 0; i44 < 6; i44++) {
    acc = (acc + i44 * 13 + 970) % 100003;
  }
  buf += `q45:${acc % 97}`;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  acc = acc + 234 - (acc % 61);
  for (let i48 = 0; i48 < 9; i48++) {
    acc = (acc + i48 * 13 + 971) % 100003;
  }
  if (acc % 23 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  acc = acc + 831 - (acc % 28);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2399) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  try { if (acc % 29 === 18) { throw new Error('synthetic-0'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 2493) % 65521;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 46) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const rc4: Rec18 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  try { if (acc % 29 === 10) { throw new Error('synthetic-5'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 624 - (acc % 18);
  buf += `q7:${acc % 97}`;
  buf += `q8:${acc % 97}`;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const ix12: number = buf.indexOf('p18');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 189) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += 'order14-' + acc.toString();
  for (let i15 = 0; i15 < 8; i15++) {
    acc = (acc + i15 * 13 + 22) % 100003;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-16'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 114) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  m01.set('k19', acc % 997);
  m01.set('k20', acc % 997);
  arr.push(acc % 1000);
  try { if (acc % 29 === 21) { throw new Error('synthetic-22'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i23 = 0; i23 < 10; i23++) {
    acc = (acc + i23 * 13 + 91) % 100003;
  }
  buf += `q24:${acc % 97}`;
  try { if (acc % 29 === 17) { throw new Error('synthetic-25'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k26', acc % 997);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 14) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  for (let i28 = 0; i28 < 11; i28++) {
    acc = (acc + i28 * 13 + 165) % 100003;
  }
  acc = (acc * 31 + 1101) % 65521;
  m01.set('k30', acc % 997);
  arr.push(acc % 1000);
  m01.set('k32', acc % 997);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 75) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-35'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += 'stocktake37-' + acc.toString();
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  arr.push(acc % 1000);
  acc = (acc * 31 + 7890) % 65521;
  buf += `q41:${acc % 97}`;
  for (let i42 = 0; i42 < 5; i42++) {
    acc = (acc + i42 * 13 + 137) % 100003;
  }
  acc = acc + 845 - (acc % 81);
  const ix44: number = buf.indexOf('p18');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  buf += 'coupon46-' + acc.toString();
  m01.set('k47', acc % 997);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  buf += `q49:${acc % 97}`;
  const rc50: Rec18 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  try { if (acc % 29 === 9) { throw new Error('synthetic-51'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0018_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2400) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit18 = new Unit18(acc);
  const ix0: number = buf.indexOf('p18');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  arr.push(acc % 1000);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  buf += 'vendor11-' + acc.toString();
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  m01.set('k13', acc % 997);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 64) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const ix19: number = buf.indexOf('p18');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += 'stocktake20-' + acc.toString();
  buf += 'pickup21-' + acc.toString();
  buf += 'bay22-' + acc.toString();
  arr.push(acc % 1000);
  const ix24: number = buf.indexOf('p18');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7260) % 65521;
  for (let i26 = 0; i26 < 5; i26++) {
    acc = (acc + i26 * 13 + 551) % 100003;
  }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2328) % 65521;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  buf += 'depot31-' + acc.toString();
  buf += 'policy32-' + acc.toString();
  if (acc % 22 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 141) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 15 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  acc = acc + 663 - (acc % 18);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 101) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  acc = acc + 438 - (acc % 32);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  buf += `q43:${acc % 97}`;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  buf += `q45:${acc % 97}`;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  m01.set('k48', acc % 997);
  acc = (acc * 31 + 4632) % 65521;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 66) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = acc + 681 - (acc % 29);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0018(): BizFn[] {
  return [biz_0018_00, biz_0018_01, biz_0018_02, biz_0018_03, biz_0018_04, biz_0018_05, biz_0018_06, biz_0018_07, biz_0018_08, biz_0018_09, biz_0018_10, biz_0018_11, biz_0018_12, biz_0018_13, biz_0018_14, biz_0018_15, biz_0018_16, biz_0018_17, biz_0018_18, biz_0018_19, biz_0018_20, biz_0018_21, biz_0018_22, biz_0018_23, biz_0018_24, biz_0018_25, biz_0018_26, biz_0018_27, biz_0018_28, biz_0018_29, biz_0018_30, biz_0018_31, biz_0018_32, biz_0018_33, biz_0018_34, biz_0018_35, biz_0018_36, biz_0018_37, biz_0018_38, biz_0018_39, biz_0018_40, biz_0018_41, biz_0018_42];
}

export function rega_0018(): ABizFn[] {
  return [biz_0018_09a, biz_0018_19a, biz_0018_29a, biz_0018_39a];
}
