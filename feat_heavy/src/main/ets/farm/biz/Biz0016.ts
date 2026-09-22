// Biz0016.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec16 { id: number; tag: string; score: number; }

class Unit16 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0016_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2096) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  buf += `q0:${acc % 97}`;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 91) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const ix2: number = buf.indexOf('p16');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  buf += 'dock3-' + acc.toString();
  const rc4: Rec16 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  for (let i5 = 0; i5 < 10; i5++) {
    acc = (acc + i5 * 13 + 659) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q7:${acc % 97}`;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  if (acc % 28 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const rc11: Rec16 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  for (let i12 = 0; i12 < 10; i12++) {
    acc = (acc + i12 * 13 + 734) % 100003;
  }
  arr.push(acc % 1000);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 44) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-18'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (acc % 12 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  acc = acc + 337 - (acc % 15);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-24'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  buf += 'journey26-' + acc.toString();
  m01.set('k27', acc % 997);
  const rc28: Rec16 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = acc + 117 - (acc % 38);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 176) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  for (let i33 = 0; i33 < 8; i33++) {
    acc = (acc + i33 * 13 + 355) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 134) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  for (let i36 = 0; i36 < 11; i36++) {
    acc = (acc + i36 * 13 + 18) % 100003;
  }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  try { if (acc % 29 === 2) { throw new Error('synthetic-38'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const rc40: Rec16 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  arr.push(acc % 1000);
  for (let i42 = 0; i42 < 6; i42++) {
    acc = (acc + i42 * 13 + 461) % 100003;
  }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  buf += `q48:${acc % 97}`;
  const rc49: Rec16 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  buf += 'customs50-' + acc.toString();
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2097) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  if (acc % 31 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-1'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-2'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 129) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  try { if (acc % 29 === 7) { throw new Error('synthetic-4'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  arr.push(acc % 1000);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  arr.push(acc % 1000);
  acc = acc + 821 - (acc % 87);
  acc = acc + 508 - (acc % 53);
  const rc12: Rec16 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  arr.push(acc % 1000);
  if (acc % 19 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 166) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 81) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  for (let i22 = 0; i22 < 10; i22++) {
    acc = (acc + i22 * 13 + 766) % 100003;
  }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 144) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  m01.set('k25', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = (acc * 31 + 8053) % 65521;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 87) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const rc36: Rec16 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const ix37: number = buf.indexOf('p16');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  for (let i38 = 0; i38 < 3; i38++) {
    acc = (acc + i38 * 13 + 172) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (acc % 16 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  m01.set('k41', acc % 997);
  buf += `q42:${acc % 97}`;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 185) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  arr.push(acc % 1000);
  for (let i47 = 0; i47 < 10; i47++) {
    acc = (acc + i47 * 13 + 214) % 100003;
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 56) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  buf += 'invoice49-' + acc.toString();
  buf += `q50:${acc % 97}`;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2098) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  try { if (acc % 29 === 21) { throw new Error('synthetic-0'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const rc1: Rec16 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  for (let i2 = 0; i2 < 5; i2++) {
    acc = (acc + i2 * 13 + 789) % 100003;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-3'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  buf += 'carrier6-' + acc.toString();
  const ix7: number = buf.indexOf('p16');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 83) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  acc = (acc * 31 + 1064) % 65521;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k12', acc % 997);
  m01.set('k13', acc % 997);
  const ix14: number = buf.indexOf('p16');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 187) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  acc = (acc * 31 + 4722) % 65521;
  buf += `q20:${acc % 97}`;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  buf += `q22:${acc % 97}`;
  arr.push(acc % 1000);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  for (let i25 = 0; i25 < 10; i25++) {
    acc = (acc + i25 * 13 + 60) % 100003;
  }
  const rc26: Rec16 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  for (let i27 = 0; i27 < 9; i27++) {
    acc = (acc + i27 * 13 + 88) % 100003;
  }
  buf += 'balance28-' + acc.toString();
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  buf += `q30:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 99) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 102) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  arr.push(acc % 1000);
  const ix37: number = buf.indexOf('p16');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = acc + 730 - (acc % 13);
  acc = (acc * 31 + 4787) % 65521;
  const ix41: number = buf.indexOf('p16');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const ix42: number = buf.indexOf('p16');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  try { if (acc % 29 === 12) { throw new Error('synthetic-44'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const ix46: number = buf.indexOf('p16');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (acc % 24 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 131) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2099) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  const ix0: number = buf.indexOf('p16');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  buf += `q1:${acc % 97}`;
  m01.set('k2', acc % 997);
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = acc + 287 - (acc % 63);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 150) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 88) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  m01.set('k11', acc % 997);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 38) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  for (let i15 = 0; i15 < 11; i15++) {
    acc = (acc + i15 * 13 + 740) % 100003;
  }
  for (let i16 = 0; i16 < 12; i16++) {
    acc = (acc + i16 * 13 + 58) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 49) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p16');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  buf += `q21:${acc % 97}`;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const rc23: Rec16 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  arr.push(acc % 1000);
  const ix25: number = buf.indexOf('p16');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  buf += 'audit26-' + acc.toString();
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const ix30: number = buf.indexOf('p16');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const ix31: number = buf.indexOf('p16');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  for (let i32 = 0; i32 < 7; i32++) {
    acc = (acc + i32 * 13 + 501) % 100003;
  }
  if (acc % 31 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 30) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const rc36: Rec16 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const rc38: Rec16 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  try { if (acc % 29 === 10) { throw new Error('synthetic-39'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4717) % 65521;
  const ix44: number = buf.indexOf('p16');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  acc = acc + 579 - (acc % 65);
  for (let i46 = 0; i46 < 7; i46++) {
    acc = (acc + i46 * 13 + 546) % 100003;
  }
  const ix47: number = buf.indexOf('p16');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  buf += 'payout48-' + acc.toString();
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  buf += 'quota50-' + acc.toString();
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2100) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  buf += 'shelf0-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 153) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  m01.set('k4', acc % 997);
  for (let i5 = 0; i5 < 7; i5++) {
    acc = (acc + i5 * 13 + 281) % 100003;
  }
  m01.set('k6', acc % 997);
  for (let i7 = 0; i7 < 4; i7++) {
    acc = (acc + i7 * 13 + 107) % 100003;
  }
  acc = acc + 461 - (acc % 66);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += 'tariff10-' + acc.toString();
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 43) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 63) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = acc + 387 - (acc % 26);
  for (let i14 = 0; i14 < 7; i14++) {
    acc = (acc + i14 * 13 + 497) % 100003;
  }
  if (acc % 21 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-16'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 186) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  if (acc % 29 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  buf += `q21:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += 'quota24-' + acc.toString();
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const rc27: Rec16 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  for (let i30 = 0; i30 < 7; i30++) {
    acc = (acc + i30 * 13 + 982) % 100003;
  }
  buf += 'depot31-' + acc.toString();
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 134) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = acc + 677 - (acc % 25);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 37) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  m01.set('k36', acc % 997);
  try { if (acc % 29 === 16) { throw new Error('synthetic-37'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const rc39: Rec16 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const rc41: Rec16 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const ix42: number = buf.indexOf('p16');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  m01.set('k43', acc % 997);
  buf += 'coupon44-' + acc.toString();
  if (acc % 18 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = acc + 277 - (acc % 38);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  m01.set('k49', acc % 997);
  const ix50: number = buf.indexOf('p16');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2101) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  arr.push(acc % 1000);
  acc = acc + 140 - (acc % 26);
  const ix3: number = buf.indexOf('p16');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const rc4: Rec16 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  try { if (acc % 29 === 22) { throw new Error('synthetic-5'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 117) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  buf += 'routeplan9-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 52) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const rc12: Rec16 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  try { if (acc % 29 === 17) { throw new Error('synthetic-13'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k14', acc % 997);
  acc = acc + 979 - (acc % 46);
  for (let i16 = 0; i16 < 10; i16++) {
    acc = (acc + i16 * 13 + 463) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 161) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 317 - (acc % 61);
  const rc19: Rec16 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = (acc * 31 + 7048) % 65521;
  try { if (acc % 29 === 10) { throw new Error('synthetic-21'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const rc22: Rec16 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = acc + 547 - (acc % 93);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  buf += `q29:${acc % 97}`;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  acc = acc + 352 - (acc % 42);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  try { if (acc % 29 === 13) { throw new Error('synthetic-33'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 186) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  m01.set('k36', acc % 997);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  for (let i38 = 0; i38 < 9; i38++) {
    acc = (acc + i38 * 13 + 823) % 100003;
  }
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  if (acc % 22 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  if (acc % 11 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8436) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-46'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'ledger47-' + acc.toString();
  try { if (acc % 29 === 5) { throw new Error('synthetic-48'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const ix51: number = buf.indexOf('p16');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2102) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  for (let i0 = 0; i0 < 4; i0++) {
    acc = (acc + i0 * 13 + 620) % 100003;
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = acc + 140 - (acc % 70);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  arr.push(acc % 1000);
  try { if (acc % 29 === 4) { throw new Error('synthetic-8'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const ix10: number = buf.indexOf('p16');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-11'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i12 = 0; i12 < 6; i12++) {
    acc = (acc + i12 * 13 + 636) % 100003;
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  if (acc % 6 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  for (let i15 = 0; i15 < 12; i15++) {
    acc = (acc + i15 * 13 + 603) % 100003;
  }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 191) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 97) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  acc = (acc * 31 + 7139) % 65521;
  buf += `q20:${acc % 97}`;
  m01.set('k21', acc % 997);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  const rc23: Rec16 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  for (let i24 = 0; i24 < 11; i24++) {
    acc = (acc + i24 * 13 + 370) % 100003;
  }
  buf += 'bay25-' + acc.toString();
  acc = acc + 941 - (acc % 59);
  acc = (acc * 31 + 467) % 65521;
  buf += 'balance28-' + acc.toString();
  buf += 'payout29-' + acc.toString();
  arr.push(acc % 1000);
  try { if (acc % 29 === 22) { throw new Error('synthetic-31'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const rc32: Rec16 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 149) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p16');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-36'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'tariff37-' + acc.toString();
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 6214) % 65521;
  if (acc % 7 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 127) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 690 - (acc % 15);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const ix48: number = buf.indexOf('p16');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  if (acc % 11 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  for (let i50 = 0; i50 < 4; i50++) {
    acc = (acc + i50 * 13 + 931) % 100003;
  }
  const ix51: number = buf.indexOf('p16');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2103) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 20) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 46) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const rc2: Rec16 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  arr.push(acc % 1000);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  for (let i5 = 0; i5 < 5; i5++) {
    acc = (acc + i5 * 13 + 583) % 100003;
  }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  acc = acc + 856 - (acc % 83);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  acc = (acc * 31 + 6056) % 65521;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 3) { throw new Error('synthetic-12'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  arr.push(acc % 1000);
  buf += 'crate15-' + acc.toString();
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 141) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'payout19-' + acc.toString();
  const ix20: number = buf.indexOf('p16');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  buf += 'client21-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += 'customs23-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  for (let i25 = 0; i25 < 8; i25++) {
    acc = (acc + i25 * 13 + 753) % 100003;
  }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 183) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  if (acc % 31 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  buf += `q28:${acc % 97}`;
  arr.push(acc % 1000);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-33'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 143) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  if (acc % 25 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  acc = acc + 883 - (acc % 68);
  buf += 'routeplan39-' + acc.toString();
  m01.set('k40', acc % 997);
  const ix41: number = buf.indexOf('p16');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  arr.push(acc % 1000);
  try { if (acc % 29 === 6) { throw new Error('synthetic-45'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  if (acc % 30 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-48'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 110) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 5516) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2104) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 18) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  const rc5: Rec16 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += `q10:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const rc12: Rec16 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  m01.set('k14', acc % 997);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const rc16: Rec16 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 102) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 345 - (acc % 27);
  acc = (acc * 31 + 1313) % 65521;
  const rc20: Rec16 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  if (acc % 30 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 138) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += `q26:${acc % 97}`;
  arr.push(acc % 1000);
  buf += `q28:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  buf += `q32:${acc % 97}`;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 30) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += 'transit36-' + acc.toString();
  buf += 'pickup37-' + acc.toString();
  buf += 'shelf38-' + acc.toString();
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const ix41: number = buf.indexOf('p16');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  buf += 'client42-' + acc.toString();
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  if (acc % 13 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += `q46:${acc % 97}`;
  acc = acc + 670 - (acc % 84);
  for (let i48 = 0; i48 < 5; i48++) {
    acc = (acc + i48 * 13 + 469) % 100003;
  }
  buf += `q49:${acc % 97}`;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  if (acc % 11 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2105) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  acc = acc + 24 - (acc % 53);
  m01.set('k1', acc % 997);
  acc = (acc * 31 + 8891) % 65521;
  buf += 'dispatch3-' + acc.toString();
  try { if (acc % 29 === 9) { throw new Error('synthetic-4'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  const rc5: Rec16 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  if (acc % 29 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  if (acc % 15 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  acc = acc + 31 - (acc % 53);
  buf += 'tariff10-' + acc.toString();
  m01.set('k11', acc % 997);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  for (let i13 = 0; i13 < 3; i13++) {
    acc = (acc + i13 * 13 + 580) % 100003;
  }
  buf += 'quota14-' + acc.toString();
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 153) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = acc + 251 - (acc % 64);
  const ix20: number = buf.indexOf('p16');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 14) { throw new Error('synthetic-22'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k23', acc % 997);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 3452) % 65521;
  m01.set('k27', acc % 997);
  buf += `q28:${acc % 97}`;
  for (let i29 = 0; i29 < 5; i29++) {
    acc = (acc + i29 * 13 + 74) % 100003;
  }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-31'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 24 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  for (let i33 = 0; i33 < 12; i33++) {
    acc = (acc + i33 * 13 + 891) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 75) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'shelf35-' + acc.toString();
  for (let i36 = 0; i36 < 5; i36++) {
    acc = (acc + i36 * 13 + 445) % 100003;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-37'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 17 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 119) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  for (let i41 = 0; i41 < 5; i41++) {
    acc = (acc + i41 * 13 + 728) % 100003;
  }
  if (acc % 12 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = acc + 849 - (acc % 21);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  m01.set('k45', acc % 997);
  m01.set('k46', acc % 997);
  buf += `q47:${acc % 97}`;
  m01.set('k48', acc % 997);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  for (let i51 = 0; i51 < 4; i51++) {
    acc = (acc + i51 * 13 + 200) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0016_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0016_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0016_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2106) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  m01.set('k0', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const rc3: Rec16 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const rc4: Rec16 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += `q8:${acc % 97}`;
  acc = (acc * 31 + 5217) % 65521;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 70) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += `q13:${acc % 97}`;
  acc = (acc * 31 + 1120) % 65521;
  acc = acc + 654 - (acc % 37);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 71) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = (acc * 31 + 6883) % 65521;
  acc = (acc * 31 + 7907) % 65521;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  acc = acc + 188 - (acc % 66);
  acc = (acc * 31 + 8138) % 65521;
  if (acc % 12 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const ix28: number = buf.indexOf('p16');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  for (let i29 = 0; i29 < 7; i29++) {
    acc = (acc + i29 * 13 + 168) % 100003;
  }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 3) { throw new Error('synthetic-33'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 96) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (acc % 14 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  acc = acc + 243 - (acc % 24);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  for (let i42 = 0; i42 < 5; i42++) {
    acc = (acc + i42 * 13 + 304) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2333) % 65521;
  const rc45: Rec16 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  try { if (acc % 29 === 15) { throw new Error('synthetic-48'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  try { if (acc % 29 === 16) { throw new Error('synthetic-50'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2107) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  for (let i0 = 0; i0 < 12; i0++) {
    acc = (acc + i0 * 13 + 859) % 100003;
  }
  m01.set('k1', acc % 997);
  if (acc % 5 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  for (let i4 = 0; i4 < 10; i4++) {
    acc = (acc + i4 * 13 + 205) % 100003;
  }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 72) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 76) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const ix8: number = buf.indexOf('p16');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  buf += `q9:${acc % 97}`;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  if (acc % 25 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  m01.set('k13', acc % 997);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 95) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 104) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  if (acc % 25 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  m01.set('k20', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  buf += 'shelf25-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  m01.set('k27', acc % 997);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  if (acc % 29 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const rc32: Rec16 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 115) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 100) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  arr.push(acc % 1000);
  m01.set('k39', acc % 997);
  try { if (acc % 29 === 15) { throw new Error('synthetic-40'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'sku41-' + acc.toString();
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 167) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  acc = (acc * 31 + 1915) % 65521;
  if (acc % 23 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (acc % 15 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 198) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 7403) % 65521;
  try { if (acc % 29 === 23) { throw new Error('synthetic-49'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 68) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2108) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  try { if (acc % 29 === 7) { throw new Error('synthetic-1'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q2:${acc % 97}`;
  acc = acc + 198 - (acc % 70);
  if (acc % 7 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const rc5: Rec16 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  m01.set('k6', acc % 997);
  buf += `q7:${acc % 97}`;
  arr.push(acc % 1000);
  buf += `q9:${acc % 97}`;
  if (acc % 22 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 160) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const ix15: number = buf.indexOf('p16');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 128) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  for (let i19 = 0; i19 < 9; i19++) {
    acc = (acc + i19 * 13 + 129) % 100003;
  }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  acc = (acc * 31 + 6148) % 65521;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'sku24-' + acc.toString();
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  buf += `q28:${acc % 97}`;
  acc = (acc * 31 + 7496) % 65521;
  const rc30: Rec16 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const ix32: number = buf.indexOf('p16');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 141) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 47) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec16 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  buf += 'balance36-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = (acc * 31 + 2523) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-40'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i41 = 0; i41 < 10; i41++) {
    acc = (acc + i41 * 13 + 648) % 100003;
  }
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 54) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  buf += `q44:${acc % 97}`;
  for (let i45 = 0; i45 < 10; i45++) {
    acc = (acc + i45 * 13 + 426) % 100003;
  }
  for (let i46 = 0; i46 < 9; i46++) {
    acc = (acc + i46 * 13 + 157) % 100003;
  }
  const rc47: Rec16 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  for (let i50 = 0; i50 < 10; i50++) {
    acc = (acc + i50 * 13 + 714) % 100003;
  }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2109) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += 'bay1-' + acc.toString();
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const ix3: number = buf.indexOf('p16');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 157) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += `q7:${acc % 97}`;
  buf += 'batch8-' + acc.toString();
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 106) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  buf += 'stocktake11-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  for (let i15 = 0; i15 < 11; i15++) {
    acc = (acc + i15 * 13 + 99) % 100003;
  }
  acc = (acc * 31 + 9189) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 142) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  acc = (acc * 31 + 9110) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 178) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-23'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (acc % 6 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  m01.set('k28', acc % 997);
  m01.set('k29', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const ix32: number = buf.indexOf('p16');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += 'crate33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 83) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 12 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  buf += `q36:${acc % 97}`;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  try { if (acc % 29 === 8) { throw new Error('synthetic-39'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 16) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  for (let i42 = 0; i42 < 11; i42++) {
    acc = (acc + i42 * 13 + 542) % 100003;
  }
  if (acc % 13 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const rc47: Rec16 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  acc = acc + 385 - (acc % 33);
  const ix49: number = buf.indexOf('p16');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3915) % 65521;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2110) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  if (acc % 15 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  if (acc % 5 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  buf += `q7:${acc % 97}`;
  arr.push(acc % 1000);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const ix11: number = buf.indexOf('p16');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  for (let i13 = 0; i13 < 12; i13++) {
    acc = (acc + i13 * 13 + 380) % 100003;
  }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  try { if (acc % 29 === 11) { throw new Error('synthetic-15'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const ix16: number = buf.indexOf('p16');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 149) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const rc19: Rec16 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  acc = acc + 772 - (acc % 43);
  const ix22: number = buf.indexOf('p16');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  const rc23: Rec16 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  buf += 'policy24-' + acc.toString();
  buf += `q25:${acc % 97}`;
  for (let i26 = 0; i26 < 6; i26++) {
    acc = (acc + i26 * 13 + 38) % 100003;
  }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  acc = acc + 582 - (acc % 56);
  try { if (acc % 29 === 14) { throw new Error('synthetic-30'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += 'quota32-' + acc.toString();
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 25) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  for (let i38 = 0; i38 < 8; i38++) {
    acc = (acc + i38 * 13 + 497) % 100003;
  }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  acc = (acc * 31 + 473) % 65521;
  if (acc % 24 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  m01.set('k42', acc % 997);
  if (acc % 27 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  const ix45: number = buf.indexOf('p16');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 188) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  m01.set('k47', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2948) % 65521;
  for (let i51 = 0; i51 < 9; i51++) {
    acc = (acc + i51 * 13 + 155) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2111) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  if (acc % 8 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-1'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 8 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  for (let i3 = 0; i3 < 7; i3++) {
    acc = (acc + i3 * 13 + 296) % 100003;
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += `q6:${acc % 97}`;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 71) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  for (let i8 = 0; i8 < 6; i8++) {
    acc = (acc + i8 * 13 + 473) % 100003;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 158) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-10'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 27 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  if (acc % 27 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 190) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p16');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const ix20: number = buf.indexOf('p16');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const rc21: Rec16 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const ix22: number = buf.indexOf('p16');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const rc25: Rec16 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  arr.push(acc % 1000);
  m01.set('k27', acc % 997);
  const rc28: Rec16 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  acc = (acc * 31 + 1637) % 65521;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  acc = (acc * 31 + 2695) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 157) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  acc = (acc * 31 + 663) % 65521;
  buf += `q37:${acc % 97}`;
  m01.set('k38', acc % 997);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  m01.set('k41', acc % 997);
  acc = (acc * 31 + 2072) % 65521;
  buf += 'vendor43-' + acc.toString();
  acc = acc + 446 - (acc % 75);
  buf += 'audit45-' + acc.toString();
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  buf += `q48:${acc % 97}`;
  buf += `q49:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const rc51: Rec16 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2112) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  try { if (acc % 29 === 12) { throw new Error('synthetic-0'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const ix2: number = buf.indexOf('p16');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  acc = acc + 270 - (acc % 46);
  const ix4: number = buf.indexOf('p16');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  if (acc % 22 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 132) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix8: number = buf.indexOf('p16');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  buf += 'vendor9-' + acc.toString();
  m01.set('k10', acc % 997);
  acc = (acc * 31 + 1635) % 65521;
  const rc12: Rec16 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  for (let i13 = 0; i13 < 9; i13++) {
    acc = (acc + i13 * 13 + 691) % 100003;
  }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 38) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  acc = (acc * 31 + 4493) % 65521;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 148) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  try { if (acc % 29 === 5) { throw new Error('synthetic-19'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const ix21: number = buf.indexOf('p16');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  for (let i22 = 0; i22 < 5; i22++) {
    acc = (acc + i22 * 13 + 329) % 100003;
  }
  buf += `q23:${acc % 97}`;
  const rc24: Rec16 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const ix25: number = buf.indexOf('p16');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  if (acc % 11 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  buf += 'order27-' + acc.toString();
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 169) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  for (let i29 = 0; i29 < 9; i29++) {
    acc = (acc + i29 * 13 + 436) % 100003;
  }
  acc = acc + 142 - (acc % 56);
  const rc31: Rec16 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  for (let i32 = 0; i32 < 6; i32++) {
    acc = (acc + i32 * 13 + 71) % 100003;
  }
  acc = acc + 834 - (acc % 30);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 81) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 123) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  buf += 'invoice38-' + acc.toString();
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-45'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 548 - (acc % 74);
  buf += `q50:${acc % 97}`;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 92) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2113) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  const rc0: Rec16 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  buf += 'warehouse1-' + acc.toString();
  arr.push(acc % 1000);
  for (let i3 = 0; i3 < 12; i3++) {
    acc = (acc + i3 * 13 + 379) % 100003;
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  try { if (acc % 29 === 9) { throw new Error('synthetic-8'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += 'invoice10-' + acc.toString();
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const rc13: Rec16 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  if (acc % 15 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += `q15:${acc % 97}`;
  for (let i16 = 0; i16 < 5; i16++) {
    acc = (acc + i16 * 13 + 791) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 111) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const ix19: number = buf.indexOf('p16');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const rc21: Rec16 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 189) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 39) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 84) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  try { if (acc % 29 === 12) { throw new Error('synthetic-26'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q27:${acc % 97}`;
  m01.set('k28', acc % 997);
  acc = (acc * 31 + 6067) % 65521;
  m01.set('k30', acc % 997);
  const ix31: number = buf.indexOf('p16');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  m01.set('k32', acc % 997);
  acc = acc + 670 - (acc % 66);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 89) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-36'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 23 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  m01.set('k38', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  buf += 'routeplan41-' + acc.toString();
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const rc43: Rec16 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  m01.set('k44', acc % 997);
  try { if (acc % 29 === 23) { throw new Error('synthetic-45'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2878) % 65521;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 47) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const rc49: Rec16 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  acc = acc + 914 - (acc % 36);
  try { if (acc % 29 === 20) { throw new Error('synthetic-51'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2114) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 148) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const ix2: number = buf.indexOf('p16');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  buf += 'stocktake3-' + acc.toString();
  if (acc % 20 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  arr.push(acc % 1000);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  for (let i10 = 0; i10 < 8; i10++) {
    acc = (acc + i10 * 13 + 796) % 100003;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-11'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k12', acc % 997);
  buf += `q13:${acc % 97}`;
  const ix14: number = buf.indexOf('p16');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  buf += 'depot16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 119) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  arr.push(acc % 1000);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  arr.push(acc % 1000);
  if (acc % 29 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 175) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  m01.set('k25', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const ix27: number = buf.indexOf('p16');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const rc28: Rec16 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  for (let i29 = 0; i29 < 7; i29++) {
    acc = (acc + i29 * 13 + 568) % 100003;
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 95) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 77) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const rc36: Rec16 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  buf += `q39:${acc % 97}`;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  arr.push(acc % 1000);
  acc = (acc * 31 + 9816) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-43'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const ix44: number = buf.indexOf('p16');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  buf += 'waybill45-' + acc.toString();
  acc = acc + 781 - (acc % 10);
  arr.push(acc % 1000);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2115) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  buf += `q0:${acc % 97}`;
  acc = acc + 313 - (acc % 12);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 170) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (acc % 11 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const ix7: number = buf.indexOf('p16');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-8'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  acc = acc + 488 - (acc % 78);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 130) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  buf += 'client13-' + acc.toString();
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 26) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  try { if (acc % 29 === 12) { throw new Error('synthetic-19'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 14 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const rc22: Rec16 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  for (let i24 = 0; i24 < 7; i24++) {
    acc = (acc + i24 * 13 + 956) % 100003;
  }
  buf += 'rebate25-' + acc.toString();
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 172) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  acc = (acc * 31 + 2328) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  if (acc % 27 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  acc = (acc * 31 + 169) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 21) { throw new Error('synthetic-32'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i33 = 0; i33 < 3; i33++) {
    acc = (acc + i33 * 13 + 969) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 149) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 26 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const ix37: number = buf.indexOf('p16');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  acc = acc + 361 - (acc % 94);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  buf += `q40:${acc % 97}`;
  const rc41: Rec16 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  for (let i42 = 0; i42 < 11; i42++) {
    acc = (acc + i42 * 13 + 785) % 100003;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-43'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-44'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 669 - (acc % 43);
  buf += `q46:${acc % 97}`;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-48'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const rc51: Rec16 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0016_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0016_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0016_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2116) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  if (acc % 12 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  for (let i1 = 0; i1 < 3; i1++) {
    acc = (acc + i1 * 13 + 744) % 100003;
  }
  buf += `q2:${acc % 97}`;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  try { if (acc % 29 === 15) { throw new Error('synthetic-4'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i5 = 0; i5 < 7; i5++) {
    acc = (acc + i5 * 13 + 986) % 100003;
  }
  arr.push(acc % 1000);
  m01.set('k7', acc % 997);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 137) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  buf += 'ledger11-' + acc.toString();
  buf += `q12:${acc % 97}`;
  acc = (acc * 31 + 2007) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-14'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 12) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 112) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const ix22: number = buf.indexOf('p16');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  buf += 'vendor23-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  m01.set('k26', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i28 = 0; i28 < 10; i28++) {
    acc = (acc + i28 * 13 + 406) % 100003;
  }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  buf += `q30:${acc % 97}`;
  for (let i31 = 0; i31 < 9; i31++) {
    acc = (acc + i31 * 13 + 253) % 100003;
  }
  const ix32: number = buf.indexOf('p16');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const rc33: Rec16 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 37) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 661 - (acc % 80);
  buf += 'depot36-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const ix38: number = buf.indexOf('p16');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  buf += `q40:${acc % 97}`;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  buf += 'stocktake42-' + acc.toString();
  acc = acc + 560 - (acc % 78);
  acc = (acc * 31 + 7259) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-45'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 614 - (acc % 97);
  acc = acc + 799 - (acc % 37);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2117) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  buf += `q1:${acc % 97}`;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  m01.set('k3', acc % 997);
  acc = acc + 206 - (acc % 51);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 151) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const rc7: Rec16 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const ix10: number = buf.indexOf('p16');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  try { if (acc % 29 === 15) { throw new Error('synthetic-12'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  buf += 'coupon14-' + acc.toString();
  try { if (acc % 29 === 18) { throw new Error('synthetic-15'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 136) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  acc = acc + 231 - (acc % 91);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 145) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  buf += 'parcel23-' + acc.toString();
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 27) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  buf += 'dock25-' + acc.toString();
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 73) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += 'sku27-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  acc = acc + 70 - (acc % 16);
  m01.set('k30', acc % 997);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  try { if (acc % 29 === 8) { throw new Error('synthetic-33'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 29) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  arr.push(acc % 1000);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 50) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += `q40:${acc % 97}`;
  arr.push(acc % 1000);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const rc44: Rec16 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = (acc * 31 + 8238) % 65521;
  buf += `q47:${acc % 97}`;
  for (let i48 = 0; i48 < 9; i48++) {
    acc = (acc + i48 * 13 + 179) % 100003;
  }
  const ix49: number = buf.indexOf('p16');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2118) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  const ix0: number = buf.indexOf('p16');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  m01.set('k2', acc % 997);
  const rc3: Rec16 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 175) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  for (let i6 = 0; i6 < 12; i6++) {
    acc = (acc + i6 * 13 + 220) % 100003;
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const ix8: number = buf.indexOf('p16');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 154) % 100003;
  }
  m01.set('k13', acc % 997);
  acc = acc + 21 - (acc % 83);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const ix16: number = buf.indexOf('p16');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 42) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = (acc * 31 + 1911) % 65521;
  acc = (acc * 31 + 6930) % 65521;
  const ix21: number = buf.indexOf('p16');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  for (let i23 = 0; i23 < 7; i23++) {
    acc = (acc + i23 * 13 + 342) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  m01.set('k25', acc % 997);
  try { if (acc % 29 === 11) { throw new Error('synthetic-26'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  buf += `q28:${acc % 97}`;
  try { if (acc % 29 === 5) { throw new Error('synthetic-29'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 175) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  arr.push(acc % 1000);
  buf += `q38:${acc % 97}`;
  arr.push(acc % 1000);
  for (let i40 = 0; i40 < 12; i40++) {
    acc = (acc + i40 * 13 + 364) % 100003;
  }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 87) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  acc = (acc * 31 + 685) % 65521;
  m01.set('k44', acc % 997);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += `q46:${acc % 97}`;
  acc = (acc * 31 + 8336) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  buf += 'settle49-' + acc.toString();
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 199) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2119) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = acc + 576 - (acc % 24);
  for (let i2 = 0; i2 < 6; i2++) {
    acc = (acc + i2 * 13 + 194) % 100003;
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-3'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 843 - (acc % 61);
  const ix5: number = buf.indexOf('p16');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  buf += `q6:${acc % 97}`;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = (acc * 31 + 4146) % 65521;
  m01.set('k9', acc % 997);
  buf += `q10:${acc % 97}`;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  for (let i12 = 0; i12 < 11; i12++) {
    acc = (acc + i12 * 13 + 88) % 100003;
  }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const ix14: number = buf.indexOf('p16');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-15'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  const rc16: Rec16 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 147) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 17 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += 'customs19-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  acc = acc + 52 - (acc % 7);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  if (acc % 20 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  m01.set('k24', acc % 997);
  acc = acc + 779 - (acc % 33);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 167) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  m01.set('k29', acc % 997);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 132) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const ix36: number = buf.indexOf('p16');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 196) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  if (acc % 31 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1328) % 65521;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  if (acc % 19 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-43'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 57) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'bay47-' + acc.toString();
  for (let i48 = 0; i48 < 4; i48++) {
    acc = (acc + i48 * 13 + 172) % 100003;
  }
  const ix49: number = buf.indexOf('p16');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  m01.set('k50', acc % 997);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2120) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  m01.set('k0', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  acc = acc + 754 - (acc % 21);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  for (let i6 = 0; i6 < 11; i6++) {
    acc = (acc + i6 * 13 + 612) % 100003;
  }
  for (let i7 = 0; i7 < 3; i7++) {
    acc = (acc + i7 * 13 + 203) % 100003;
  }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 20) { throw new Error('synthetic-9'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 27) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const rc12: Rec16 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  try { if (acc % 29 === 11) { throw new Error('synthetic-13'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = acc + 575 - (acc % 28);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 62) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-20'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += 'region22-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-23'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  for (let i25 = 0; i25 < 5; i25++) {
    acc = (acc + i25 * 13 + 962) % 100003;
  }
  const rc26: Rec16 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  for (let i31 = 0; i31 < 5; i31++) {
    acc = (acc + i31 * 13 + 731) % 100003;
  }
  buf += `q32:${acc % 97}`;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 25) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 7 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += 'batch37-' + acc.toString();
  buf += `q38:${acc % 97}`;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  if (acc % 13 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 24) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  try { if (acc % 29 === 4) { throw new Error('synthetic-44'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 14) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += `q46:${acc % 97}`;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  if (acc % 10 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2121) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  for (let i0 = 0; i0 < 7; i0++) {
    acc = (acc + i0 * 13 + 904) % 100003;
  }
  if (acc % 19 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  acc = (acc * 31 + 4797) % 65521;
  for (let i3 = 0; i3 < 10; i3++) {
    acc = (acc + i3 * 13 + 53) % 100003;
  }
  for (let i4 = 0; i4 < 6; i4++) {
    acc = (acc + i4 * 13 + 109) % 100003;
  }
  const ix5: number = buf.indexOf('p16');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  if (acc % 11 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2230) % 65521;
  try { if (acc % 29 === 4) { throw new Error('synthetic-10'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  m01.set('k13', acc % 997);
  const rc14: Rec16 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 2) { throw new Error('synthetic-16'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 63) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 66) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  for (let i19 = 0; i19 < 11; i19++) {
    acc = (acc + i19 * 13 + 385) % 100003;
  }
  buf += `q20:${acc % 97}`;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  arr.push(acc % 1000);
  buf += `q23:${acc % 97}`;
  acc = acc + 851 - (acc % 84);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  buf += 'bay28-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  m01.set('k30', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 154) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  for (let i37 = 0; i37 < 11; i37++) {
    acc = (acc + i37 * 13 + 975) % 100003;
  }
  const ix38: number = buf.indexOf('p16');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  try { if (acc % 29 === 10) { throw new Error('synthetic-42'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'portal43-' + acc.toString();
  buf += 'region44-' + acc.toString();
  m01.set('k45', acc % 997);
  if (acc % 20 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  buf += 'settle47-' + acc.toString();
  buf += `q48:${acc % 97}`;
  m01.set('k49', acc % 997);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2122) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 28) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  const ix1: number = buf.indexOf('p16');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 106) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 94) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  for (let i4 = 0; i4 < 9; i4++) {
    acc = (acc + i4 * 13 + 311) % 100003;
  }
  const ix5: number = buf.indexOf('p16');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  buf += `q6:${acc % 97}`;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  m01.set('k8', acc % 997);
  acc = (acc * 31 + 8154) % 65521;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  acc = acc + 562 - (acc % 64);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 169) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += 'invoice14-' + acc.toString();
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  for (let i16 = 0; i16 < 10; i16++) {
    acc = (acc + i16 * 13 + 842) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 182) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 118) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  for (let i22 = 0; i22 < 5; i22++) {
    acc = (acc + i22 * 13 + 390) % 100003;
  }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const rc24: Rec16 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  try { if (acc % 29 === 8) { throw new Error('synthetic-25'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  buf += `q27:${acc % 97}`;
  acc = acc + 360 - (acc % 43);
  m01.set('k29', acc % 997);
  const rc30: Rec16 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  buf += `q32:${acc % 97}`;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 36) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 621 - (acc % 63);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  buf += 'rebate37-' + acc.toString();
  m01.set('k38', acc % 997);
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 78) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 71) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-45'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  try { if (acc % 29 === 22) { throw new Error('synthetic-48'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-49'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  buf += 'refund51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2123) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  acc = acc + 838 - (acc % 90);
  arr.push(acc % 1000);
  for (let i3 = 0; i3 < 6; i3++) {
    acc = (acc + i3 * 13 + 425) % 100003;
  }
  m01.set('k4', acc % 997);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  acc = acc + 83 - (acc % 42);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 93) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  try { if (acc % 29 === 7) { throw new Error('synthetic-11'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q12:${acc % 97}`;
  arr.push(acc % 1000);
  m01.set('k14', acc % 997);
  const rc15: Rec16 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  try { if (acc % 29 === 4) { throw new Error('synthetic-16'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 39) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 200 - (acc % 79);
  for (let i19 = 0; i19 < 8; i19++) {
    acc = (acc + i19 * 13 + 63) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc21: Rec16 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  acc = (acc * 31 + 2610) % 65521;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  for (let i26 = 0; i26 < 6; i26++) {
    acc = (acc + i26 * 13 + 71) % 100003;
  }
  if (acc % 31 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  arr.push(acc % 1000);
  acc = acc + 379 - (acc % 21);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 185) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 171) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  try { if (acc % 29 === 10) { throw new Error('synthetic-36'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  buf += 'dispatch38-' + acc.toString();
  const ix39: number = buf.indexOf('p16');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  buf += 'parcel41-' + acc.toString();
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  arr.push(acc % 1000);
  if (acc % 9 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  for (let i45 = 0; i45 < 3; i45++) {
    acc = (acc + i45 * 13 + 786) % 100003;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-46'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  acc = (acc * 31 + 9141) % 65521;
  acc = acc + 863 - (acc % 78);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  try { if (acc % 29 === 7) { throw new Error('synthetic-51'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2124) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  acc = acc + 400 - (acc % 63);
  const ix1: number = buf.indexOf('p16');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const rc2: Rec16 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  buf += `q3:${acc % 97}`;
  arr.push(acc % 1000);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const rc7: Rec16 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  buf += `q8:${acc % 97}`;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  buf += `q10:${acc % 97}`;
  m01.set('k11', acc % 997);
  if (acc % 22 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const ix14: number = buf.indexOf('p16');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = acc + 321 - (acc % 65);
  try { if (acc % 29 === 4) { throw new Error('synthetic-16'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 97) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += `q19:${acc % 97}`;
  const ix20: number = buf.indexOf('p16');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  if (acc % 31 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  for (let i22 = 0; i22 < 6; i22++) {
    acc = (acc + i22 * 13 + 655) % 100003;
  }
  buf += `q23:${acc % 97}`;
  try { if (acc % 29 === 22) { throw new Error('synthetic-24'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (acc % 25 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  acc = (acc * 31 + 3819) % 65521;
  try { if (acc % 29 === 10) { throw new Error('synthetic-32'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 24) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-35'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  arr.push(acc % 1000);
  for (let i38 = 0; i38 < 12; i38++) {
    acc = (acc + i38 * 13 + 329) % 100003;
  }
  acc = acc + 441 - (acc % 13);
  m01.set('k40', acc % 997);
  const ix41: number = buf.indexOf('p16');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  const rc44: Rec16 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  m01.set('k45', acc % 997);
  buf += 'order46-' + acc.toString();
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k50', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2125) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  m01.set('k0', acc % 997);
  acc = (acc * 31 + 7263) % 65521;
  m01.set('k2', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i4 = 0; i4 < 7; i4++) {
    acc = (acc + i4 * 13 + 144) % 100003;
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const rc6: Rec16 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const ix8: number = buf.indexOf('p16');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  acc = acc + 530 - (acc % 24);
  if (acc % 7 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  acc = acc + 848 - (acc % 20);
  const ix14: number = buf.indexOf('p16');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = acc + 144 - (acc % 80);
  buf += 'routeplan16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 154) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const rc21: Rec16 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = (acc * 31 + 5848) % 65521;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 102) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 20) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += `q26:${acc % 97}`;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  buf += 'quota28-' + acc.toString();
  buf += `q29:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  acc = (acc * 31 + 7026) % 65521;
  for (let i33 = 0; i33 < 12; i33++) {
    acc = (acc + i33 * 13 + 927) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 23) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'pallet35-' + acc.toString();
  const rc36: Rec16 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const rc37: Rec16 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  m01.set('k38', acc % 997);
  buf += `q39:${acc % 97}`;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 185) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  acc = (acc * 31 + 1130) % 65521;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 84) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const rc46: Rec16 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  buf += `q47:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i50 = 0; i50 < 12; i50++) {
    acc = (acc + i50 * 13 + 589) % 100003;
  }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0016_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0016_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0016_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2126) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const rc1: Rec16 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  buf += `q2:${acc % 97}`;
  const rc3: Rec16 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  if (acc % 31 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  acc = (acc * 31 + 4162) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-6'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k7', acc % 997);
  try { if (acc % 29 === 20) { throw new Error('synthetic-8'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1052) % 65521;
  buf += 'crate13-' + acc.toString();
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 46) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  buf += `q19:${acc % 97}`;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = (acc * 31 + 8954) % 65521;
  for (let i22 = 0; i22 < 5; i22++) {
    acc = (acc + i22 * 13 + 946) % 100003;
  }
  buf += 'bay23-' + acc.toString();
  acc = acc + 55 - (acc % 84);
  if (acc % 11 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  m01.set('k28', acc % 997);
  const ix29: number = buf.indexOf('p16');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  if (acc % 17 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  for (let i31 = 0; i31 < 6; i31++) {
    acc = (acc + i31 * 13 + 615) % 100003;
  }
  acc = (acc * 31 + 4793) % 65521;
  for (let i33 = 0; i33 < 4; i33++) {
    acc = (acc + i33 * 13 + 215) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 43) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  arr.push(acc % 1000);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  for (let i38 = 0; i38 < 9; i38++) {
    acc = (acc + i38 * 13 + 71) % 100003;
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 184) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  buf += 'coupon42-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  for (let i44 = 0; i44 < 5; i44++) {
    acc = (acc + i44 * 13 + 28) % 100003;
  }
  acc = (acc * 31 + 581) % 65521;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 158) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const rc48: Rec16 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  buf += 'invoice49-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2127) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  buf += 'payout1-' + acc.toString();
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const rc3: Rec16 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  for (let i4 = 0; i4 < 6; i4++) {
    acc = (acc + i4 * 13 + 85) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const ix7: number = buf.indexOf('p16');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  if (acc % 30 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  const rc9: Rec16 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 17) { throw new Error('synthetic-16'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 79) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  arr.push(acc % 1000);
  buf += `q20:${acc % 97}`;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  buf += `q22:${acc % 97}`;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-26'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-27'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  buf += 'dispatch29-' + acc.toString();
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = acc + 260 - (acc % 16);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 110) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  buf += 'audit33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 167) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'warehouse35-' + acc.toString();
  const ix36: number = buf.indexOf('p16');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += `q37:${acc % 97}`;
  try { if (acc % 29 === 11) { throw new Error('synthetic-38'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 16 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = acc + 447 - (acc % 97);
  acc = acc + 922 - (acc % 53);
  try { if (acc % 29 === 13) { throw new Error('synthetic-44'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i45 = 0; i45 < 4; i45++) {
    acc = (acc + i45 * 13 + 224) % 100003;
  }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  if (acc % 14 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  m01.set('k50', acc % 997);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2128) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  for (let i1 = 0; i1 < 11; i1++) {
    acc = (acc + i1 * 13 + 817) % 100003;
  }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  arr.push(acc % 1000);
  buf += 'order7-' + acc.toString();
  arr.push(acc % 1000);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 36) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  acc = acc + 938 - (acc % 10);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 135) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  acc = acc + 152 - (acc % 23);
  acc = acc + 812 - (acc % 70);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 189) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec16 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  buf += `q19:${acc % 97}`;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  for (let i21 = 0; i21 < 3; i21++) {
    acc = (acc + i21 * 13 + 540) % 100003;
  }
  for (let i22 = 0; i22 < 7; i22++) {
    acc = (acc + i22 * 13 + 994) % 100003;
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  if (acc % 12 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  m01.set('k27', acc % 997);
  buf += `q28:${acc % 97}`;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  buf += `q30:${acc % 97}`;
  buf += `q31:${acc % 97}`;
  acc = acc + 534 - (acc % 97);
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 123) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 3; i35++) {
    acc = (acc + i35 * 13 + 400) % 100003;
  }
  m01.set('k36', acc % 997);
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  buf += `q41:${acc % 97}`;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += 'routeplan45-' + acc.toString();
  arr.push(acc % 1000);
  for (let i47 = 0; i47 < 7; i47++) {
    acc = (acc + i47 * 13 + 990) % 100003;
  }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  buf += `q50:${acc % 97}`;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2129) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  buf += `q0:${acc % 97}`;
  acc = (acc * 31 + 3872) % 65521;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += `q3:${acc % 97}`;
  acc = (acc * 31 + 6269) % 65521;
  for (let i5 = 0; i5 < 4; i5++) {
    acc = (acc + i5 * 13 + 235) % 100003;
  }
  buf += `q6:${acc % 97}`;
  acc = acc + 840 - (acc % 85);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += 'shelf9-' + acc.toString();
  for (let i10 = 0; i10 < 6; i10++) {
    acc = (acc + i10 * 13 + 980) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  buf += `q12:${acc % 97}`;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  acc = acc + 107 - (acc % 42);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 116) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  if (acc % 31 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  for (let i23 = 0; i23 < 4; i23++) {
    acc = (acc + i23 * 13 + 302) % 100003;
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  buf += `q29:${acc % 97}`;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-31'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k32', acc % 997);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 50) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 149) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  buf += 'shelf36-' + acc.toString();
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  arr.push(acc % 1000);
  if (acc % 18 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += `q41:${acc % 97}`;
  buf += `q42:${acc % 97}`;
  buf += `q43:${acc % 97}`;
  try { if (acc % 29 === 16) { throw new Error('synthetic-44'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  buf += `q46:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const ix49: number = buf.indexOf('p16');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  if (acc % 22 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2130) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  if (acc % 16 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  const ix3: number = buf.indexOf('p16');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const rc4: Rec16 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  m01.set('k8', acc % 997);
  buf += 'warehouse9-' + acc.toString();
  const ix10: number = buf.indexOf('p16');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  acc = (acc * 31 + 2826) % 65521;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  acc = (acc * 31 + 4380) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-16'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 98) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 318) % 65521;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  try { if (acc % 29 === 14) { throw new Error('synthetic-20'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'crate22-' + acc.toString();
  if (acc % 15 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 125) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const rc27: Rec16 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 9079) % 65521;
  for (let i30 = 0; i30 < 12; i30++) {
    acc = (acc + i30 * 13 + 699) % 100003;
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  for (let i32 = 0; i32 < 12; i32++) {
    acc = (acc + i32 * 13 + 192) % 100003;
  }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 85) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix36: number = buf.indexOf('p16');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  acc = (acc * 31 + 8585) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-39'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  acc = acc + 897 - (acc % 33);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (acc % 18 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i45 = 0; i45 < 11; i45++) {
    acc = (acc + i45 * 13 + 668) % 100003;
  }
  arr.push(acc % 1000);
  acc = acc + 52 - (acc % 67);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2131) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  try { if (acc % 29 === 21) { throw new Error('synthetic-0'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  arr.push(acc % 1000);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  acc = (acc * 31 + 6903) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-7'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const rc8: Rec16 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const rc9: Rec16 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += `q10:${acc % 97}`;
  acc = (acc * 31 + 5467) % 65521;
  m01.set('k12', acc % 997);
  for (let i13 = 0; i13 < 10; i13++) {
    acc = (acc + i13 * 13 + 162) % 100003;
  }
  for (let i14 = 0; i14 < 7; i14++) {
    acc = (acc + i14 * 13 + 746) % 100003;
  }
  if (acc % 11 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 157) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  arr.push(acc % 1000);
  m01.set('k20', acc % 997);
  const rc21: Rec16 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const rc22: Rec16 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  buf += `q23:${acc % 97}`;
  m01.set('k24', acc % 997);
  buf += `q25:${acc % 97}`;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 104) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 7690) % 65521;
  acc = acc + 394 - (acc % 19);
  acc = (acc * 31 + 3942) % 65521;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  acc = acc + 848 - (acc % 89);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 34) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 17) { throw new Error('synthetic-36'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const rc38: Rec16 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 35) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const ix42: number = buf.indexOf('p16');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  buf += `q45:${acc % 97}`;
  if (acc % 28 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  buf += 'waybill47-' + acc.toString();
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 164) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  if (acc % 15 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2132) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  const ix0: number = buf.indexOf('p16');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  for (let i1 = 0; i1 < 12; i1++) {
    acc = (acc + i1 * 13 + 179) % 100003;
  }
  buf += 'invoice2-' + acc.toString();
  const rc3: Rec16 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  for (let i4 = 0; i4 < 12; i4++) {
    acc = (acc + i4 * 13 + 68) % 100003;
  }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 150) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  for (let i8 = 0; i8 < 6; i8++) {
    acc = (acc + i8 * 13 + 955) % 100003;
  }
  const ix9: number = buf.indexOf('p16');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-10'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  m01.set('k12', acc % 997);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 172) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  acc = (acc * 31 + 4602) % 65521;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 92) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  arr.push(acc % 1000);
  const ix22: number = buf.indexOf('p16');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 51) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += `q28:${acc % 97}`;
  buf += 'policy29-' + acc.toString();
  acc = acc + 776 - (acc % 78);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 98) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = (acc * 31 + 6157) % 65521;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 182) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-36'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 34) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (acc % 24 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 182) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc43: Rec16 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  try { if (acc % 29 === 16) { throw new Error('synthetic-44'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 129) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const ix47: number = buf.indexOf('p16');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  for (let i48 = 0; i48 < 11; i48++) {
    acc = (acc + i48 * 13 + 745) % 100003;
  }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const rc51: Rec16 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2133) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = acc + 854 - (acc % 38);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += 'tariff3-' + acc.toString();
  for (let i4 = 0; i4 < 11; i4++) {
    acc = (acc + i4 * 13 + 847) % 100003;
  }
  acc = (acc * 31 + 5884) % 65521;
  const ix6: number = buf.indexOf('p16');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const rc7: Rec16 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  acc = (acc * 31 + 8907) % 65521;
  m01.set('k9', acc % 997);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 76) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 41) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  m01.set('k13', acc % 997);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 24) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 173) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 782) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  acc = acc + 501 - (acc % 72);
  for (let i23 = 0; i23 < 11; i23++) {
    acc = (acc + i23 * 13 + 897) % 100003;
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const rc25: Rec16 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  buf += 'customs26-' + acc.toString();
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 39) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  m01.set('k28', acc % 997);
  try { if (acc % 29 === 16) { throw new Error('synthetic-29'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  arr.push(acc % 1000);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 39) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'dock36-' + acc.toString();
  if (acc % 14 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  m01.set('k39', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  if (acc % 15 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-44'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-45'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 310 - (acc % 74);
  const ix47: number = buf.indexOf('p16');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  m01.set('k49', acc % 997);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 120) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2134) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  buf += `q0:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  for (let i2 = 0; i2 < 4; i2++) {
    acc = (acc + i2 * 13 + 776) % 100003;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-3'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k4', acc % 997);
  if (acc % 30 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  buf += `q8:${acc % 97}`;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 147) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const rc13: Rec16 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  buf += 'vendor14-' + acc.toString();
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  for (let i16 = 0; i16 < 7; i16++) {
    acc = (acc + i16 * 13 + 100) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 155) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 28 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const ix19: number = buf.indexOf('p16');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  buf += 'vendor21-' + acc.toString();
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  acc = acc + 291 - (acc % 47);
  for (let i24 = 0; i24 < 7; i24++) {
    acc = (acc + i24 * 13 + 123) % 100003;
  }
  if (acc % 19 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const rc26: Rec16 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  try { if (acc % 29 === 5) { throw new Error('synthetic-27'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'settle28-' + acc.toString();
  try { if (acc % 29 === 20) { throw new Error('synthetic-29'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  acc = (acc * 31 + 9066) % 65521;
  if (acc % 22 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 58) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  buf += 'order36-' + acc.toString();
  arr.push(acc % 1000);
  try { if (acc % 29 === 15) { throw new Error('synthetic-38'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i39 = 0; i39 < 5; i39++) {
    acc = (acc + i39 * 13 + 442) % 100003;
  }
  if (acc % 28 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 199) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  m01.set('k44', acc % 997);
  m01.set('k45', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += 'tariff48-' + acc.toString();
  const ix49: number = buf.indexOf('p16');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const ix51: number = buf.indexOf('p16');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2135) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  m01.set('k3', acc % 997);
  buf += 'routeplan4-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  if (acc % 26 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc9: Rec16 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const rc11: Rec16 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  if (acc % 22 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 64) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 184) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  arr.push(acc % 1000);
  const rc22: Rec16 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const rc23: Rec16 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  m01.set('k24', acc % 997);
  try { if (acc % 29 === 7) { throw new Error('synthetic-25'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 26 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const rc27: Rec16 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  acc = (acc * 31 + 5666) % 65521;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  try { if (acc % 29 === 15) { throw new Error('synthetic-32'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const ix33: number = buf.indexOf('p16');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 123) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 19 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  if (acc % 25 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5791) % 65521;
  m01.set('k42', acc % 997);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  if (acc % 12 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  if (acc % 24 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-48'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i49 = 0; i49 < 9; i49++) {
    acc = (acc + i49 * 13 + 331) % 100003;
  }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0016_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0016_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0016_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2136) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const ix2: number = buf.indexOf('p16');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const rc3: Rec16 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  m01.set('k5', acc % 997);
  arr.push(acc % 1000);
  for (let i7 = 0; i7 < 9; i7++) {
    acc = (acc + i7 * 13 + 159) % 100003;
  }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 82) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 65) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  acc = (acc * 31 + 4797) % 65521;
  const ix11: number = buf.indexOf('p16');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 46) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 57) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 83) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 4384) % 65521;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  buf += `q20:${acc % 97}`;
  acc = acc + 910 - (acc % 23);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  if (acc % 18 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const ix25: number = buf.indexOf('p16');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const ix29: number = buf.indexOf('p16');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2724) % 65521;
  acc = (acc * 31 + 429) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-32'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 111) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-35'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i36 = 0; i36 < 12; i36++) {
    acc = (acc + i36 * 13 + 69) % 100003;
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += `q39:${acc % 97}`;
  const rc40: Rec16 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  if (acc % 13 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  if (acc % 12 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  for (let i45 = 0; i45 < 7; i45++) {
    acc = (acc + i45 * 13 + 268) % 100003;
  }
  acc = (acc * 31 + 3016) % 65521;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  if (acc % 28 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  buf += 'journey50-' + acc.toString();
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2137) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  const ix0: number = buf.indexOf('p16');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  buf += 'balance2-' + acc.toString();
  for (let i3 = 0; i3 < 5; i3++) {
    acc = (acc + i3 * 13 + 683) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const rc8: Rec16 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  buf += `q10:${acc % 97}`;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  buf += `q12:${acc % 97}`;
  arr.push(acc % 1000);
  const ix14: number = buf.indexOf('p16');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += 'journey15-' + acc.toString();
  const ix16: number = buf.indexOf('p16');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 108) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += 'dispatch20-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-21'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k22', acc % 997);
  m01.set('k23', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  try { if (acc % 29 === 14) { throw new Error('synthetic-25'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  arr.push(acc % 1000);
  buf += 'invoice28-' + acc.toString();
  const rc29: Rec16 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const rc32: Rec16 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 174) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 11) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  for (let i39 = 0; i39 < 7; i39++) {
    acc = (acc + i39 * 13 + 605) % 100003;
  }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 159) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  acc = (acc * 31 + 5111) % 65521;
  buf += 'ledger44-' + acc.toString();
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 82) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  for (let i46 = 0; i46 < 6; i46++) {
    acc = (acc + i46 * 13 + 944) % 100003;
  }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 192) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-48'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i49 = 0; i49 < 4; i49++) {
    acc = (acc + i49 * 13 + 639) % 100003;
  }
  buf += 'ledger50-' + acc.toString();
  try { if (acc % 29 === 14) { throw new Error('synthetic-51'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0016_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2138) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit16 = new Unit16(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  if (acc % 26 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += `q5:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  arr.push(acc % 1000);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  buf += `q11:${acc % 97}`;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const ix14: number = buf.indexOf('p16');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += `q15:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 165) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 4; i18++) {
    acc = (acc + i18 * 13 + 788) % 100003;
  }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  acc = acc + 82 - (acc % 12);
  arr.push(acc % 1000);
  buf += `q24:${acc % 97}`;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 85) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const ix28: number = buf.indexOf('p16');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const ix29: number = buf.indexOf('p16');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = (acc * 31 + 4835) % 65521;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const rc33: Rec16 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 70) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec16 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  arr.push(acc % 1000);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 40) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  const ix41: number = buf.indexOf('p16');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7586) % 65521;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  try { if (acc % 29 === 23) { throw new Error('synthetic-45'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i46 = 0; i46 < 6; i46++) {
    acc = (acc + i46 * 13 + 982) % 100003;
  }
  buf += `q47:${acc % 97}`;
  if (acc % 9 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  buf += 'batch50-' + acc.toString();
  for (let i51 = 0; i51 < 8; i51++) {
    acc = (acc + i51 * 13 + 255) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0016(): BizFn[] {
  return [biz_0016_00, biz_0016_01, biz_0016_02, biz_0016_03, biz_0016_04, biz_0016_05, biz_0016_06, biz_0016_07, biz_0016_08, biz_0016_09, biz_0016_10, biz_0016_11, biz_0016_12, biz_0016_13, biz_0016_14, biz_0016_15, biz_0016_16, biz_0016_17, biz_0016_18, biz_0016_19, biz_0016_20, biz_0016_21, biz_0016_22, biz_0016_23, biz_0016_24, biz_0016_25, biz_0016_26, biz_0016_27, biz_0016_28, biz_0016_29, biz_0016_30, biz_0016_31, biz_0016_32, biz_0016_33, biz_0016_34, biz_0016_35, biz_0016_36, biz_0016_37, biz_0016_38, biz_0016_39, biz_0016_40, biz_0016_41, biz_0016_42];
}

export function rega_0016(): ABizFn[] {
  return [biz_0016_09a, biz_0016_19a, biz_0016_29a, biz_0016_39a];
}
