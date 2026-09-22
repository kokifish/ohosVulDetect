// Biz0015.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec15 { id: number; tag: string; score: number; }

class Unit15 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0015_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1965) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  acc = acc + 660 - (acc % 40);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  acc = (acc * 31 + 3136) % 65521;
  const rc7: Rec15 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  acc = (acc * 31 + 9013) % 65521;
  m01.set('k9', acc % 997);
  buf += `q10:${acc % 97}`;
  m01.set('k11', acc % 997);
  const ix12: number = buf.indexOf('p15');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const ix14: number = buf.indexOf('p15');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 16) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix19: number = buf.indexOf('p15');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  m01.set('k22', acc % 997);
  buf += `q23:${acc % 97}`;
  buf += `q24:${acc % 97}`;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  for (let i26 = 0; i26 < 4; i26++) {
    acc = (acc + i26 * 13 + 356) % 100003;
  }
  acc = acc + 854 - (acc % 10);
  try { if (acc % 29 === 16) { throw new Error('synthetic-28'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  for (let i30 = 0; i30 < 3; i30++) {
    acc = (acc + i30 * 13 + 787) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  arr.push(acc % 1000);
  if (acc % 22 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 75) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 20 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += 'ledger37-' + acc.toString();
  acc = (acc * 31 + 8161) % 65521;
  buf += `q39:${acc % 97}`;
  if (acc % 31 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const ix42: number = buf.indexOf('p15');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  for (let i43 = 0; i43 < 9; i43++) {
    acc = (acc + i43 * 13 + 151) % 100003;
  }
  for (let i44 = 0; i44 < 3; i44++) {
    acc = (acc + i44 * 13 + 105) % 100003;
  }
  if (acc % 21 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 12) { throw new Error('synthetic-51'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1966) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  acc = (acc * 31 + 3482) % 65521;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  acc = (acc * 31 + 9901) % 65521;
  if (acc % 31 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 43) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const rc9: Rec15 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  acc = (acc * 31 + 7365) % 65521;
  acc = (acc * 31 + 5842) % 65521;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const rc15: Rec15 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  acc = acc + 851 - (acc % 15);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 177) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const rc21: Rec15 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const ix22: number = buf.indexOf('p15');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-25'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  acc = acc + 534 - (acc % 60);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  buf += `q29:${acc % 97}`;
  try { if (acc % 29 === 21) { throw new Error('synthetic-30'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i31 = 0; i31 < 9; i31++) {
    acc = (acc + i31 * 13 + 486) % 100003;
  }
  const ix32: number = buf.indexOf('p15');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 70) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  buf += `q36:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = acc + 886 - (acc % 43);
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  if (acc % 17 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  if (acc % 24 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  buf += `q42:${acc % 97}`;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  acc = (acc * 31 + 9021) % 65521;
  if (acc % 12 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  for (let i46 = 0; i46 < 11; i46++) {
    acc = (acc + i46 * 13 + 250) % 100003;
  }
  buf += `q47:${acc % 97}`;
  if (acc % 21 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1967) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  arr.push(acc % 1000);
  buf += `q1:${acc % 97}`;
  const ix2: number = buf.indexOf('p15');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  acc = acc + 978 - (acc % 33);
  arr.push(acc % 1000);
  try { if (acc % 29 === 12) { throw new Error('synthetic-7'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 57) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  if (acc % 15 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  buf += `q10:${acc % 97}`;
  try { if (acc % 29 === 22) { throw new Error('synthetic-11'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6225) % 65521;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const rc15: Rec15 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 179) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  buf += 'bay20-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  for (let i22 = 0; i22 < 4; i22++) {
    acc = (acc + i22 * 13 + 949) % 100003;
  }
  buf += 'journey23-' + acc.toString();
  try { if (acc % 29 === 14) { throw new Error('synthetic-24'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 20) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const ix26: number = buf.indexOf('p15');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 41) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  buf += 'pallet28-' + acc.toString();
  acc = acc + 19 - (acc % 38);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  for (let i31 = 0; i31 < 7; i31++) {
    acc = (acc + i31 * 13 + 796) % 100003;
  }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 44) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 50) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 606 - (acc % 85);
  acc = (acc * 31 + 4340) % 65521;
  buf += `q37:${acc % 97}`;
  buf += `q38:${acc % 97}`;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  arr.push(acc % 1000);
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 44) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  buf += 'parcel46-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const ix48: number = buf.indexOf('p15');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += 'rebate49-' + acc.toString();
  buf += 'stocktake50-' + acc.toString();
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1968) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = acc + 438 - (acc % 67);
  if (acc % 15 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const rc3: Rec15 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 74) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  try { if (acc % 29 === 4) { throw new Error('synthetic-5'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 860 - (acc % 15);
  try { if (acc % 29 === 8) { throw new Error('synthetic-7'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  buf += 'depot11-' + acc.toString();
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  buf += `q13:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 172) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  for (let i20 = 0; i20 < 7; i20++) {
    acc = (acc + i20 * 13 + 408) % 100003;
  }
  buf += `q21:${acc % 97}`;
  try { if (acc % 29 === 3) { throw new Error('synthetic-22'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q23:${acc % 97}`;
  acc = acc + 320 - (acc % 70);
  const ix25: number = buf.indexOf('p15');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  m01.set('k29', acc % 997);
  try { if (acc % 29 === 8) { throw new Error('synthetic-30'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 199 - (acc % 67);
  if (acc % 11 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 186) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 133) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  acc = (acc * 31 + 5197) % 65521;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  acc = acc + 970 - (acc % 97);
  if (acc % 27 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  m01.set('k44', acc % 997);
  buf += `q45:${acc % 97}`;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  acc = (acc * 31 + 8774) % 65521;
  arr.push(acc % 1000);
  acc = acc + 407 - (acc % 49);
  acc = acc + 700 - (acc % 18);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1969) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  try { if (acc % 29 === 7) { throw new Error('synthetic-0'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 23 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 32) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const ix6: number = buf.indexOf('p15');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7575) % 65521;
  if (acc % 12 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  m01.set('k10', acc % 997);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 77) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const ix13: number = buf.indexOf('p15');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const rc14: Rec15 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 137) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  buf += 'batch20-' + acc.toString();
  try { if (acc % 29 === 5) { throw new Error('synthetic-21'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  acc = (acc * 31 + 731) % 65521;
  acc = (acc * 31 + 5286) % 65521;
  acc = (acc * 31 + 4258) % 65521;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 19 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const rc29: Rec15 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  acc = (acc * 31 + 482) % 65521;
  const ix31: number = buf.indexOf('p15');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  acc = acc + 610 - (acc % 95);
  const rc33: Rec15 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 78) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 18) { throw new Error('synthetic-35'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 19 - (acc % 30);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const ix39: number = buf.indexOf('p15');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 48) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const ix41: number = buf.indexOf('p15');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  buf += `q45:${acc % 97}`;
  arr.push(acc % 1000);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 72) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const ix51: number = buf.indexOf('p15');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1970) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  const rc0: Rec15 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const rc2: Rec15 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  if (acc % 30 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  acc = (acc * 31 + 4169) % 65521;
  const ix8: number = buf.indexOf('p15');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  for (let i10 = 0; i10 < 12; i10++) {
    acc = (acc + i10 * 13 + 427) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  arr.push(acc % 1000);
  if (acc % 22 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 15) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 6; i18++) {
    acc = (acc + i18 * 13 + 654) % 100003;
  }
  acc = acc + 373 - (acc % 72);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  buf += 'routeplan21-' + acc.toString();
  buf += `q22:${acc % 97}`;
  try { if (acc % 29 === 14) { throw new Error('synthetic-23'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const ix25: number = buf.indexOf('p15');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 7353) % 65521;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += `q29:${acc % 97}`;
  arr.push(acc % 1000);
  if (acc % 10 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 47) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  for (let i36 = 0; i36 < 9; i36++) {
    acc = (acc + i36 * 13 + 208) % 100003;
  }
  buf += `q37:${acc % 97}`;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  if (acc % 19 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  buf += `q41:${acc % 97}`;
  for (let i42 = 0; i42 < 6; i42++) {
    acc = (acc + i42 * 13 + 489) % 100003;
  }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const rc44: Rec15 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const rc46: Rec15 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  m01.set('k47', acc % 997);
  for (let i48 = 0; i48 < 3; i48++) {
    acc = (acc + i48 * 13 + 584) % 100003;
  }
  for (let i49 = 0; i49 < 10; i49++) {
    acc = (acc + i49 * 13 + 252) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  for (let i51 = 0; i51 < 7; i51++) {
    acc = (acc + i51 * 13 + 233) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1971) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  acc = (acc * 31 + 8126) % 65521;
  buf += `q1:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += 'rebate3-' + acc.toString();
  try { if (acc % 29 === 21) { throw new Error('synthetic-4'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q5:${acc % 97}`;
  buf += `q6:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const ix8: number = buf.indexOf('p15');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  buf += `q9:${acc % 97}`;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 66) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  if (acc % 18 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  for (let i12 = 0; i12 < 3; i12++) {
    acc = (acc + i12 * 13 + 133) % 100003;
  }
  buf += 'journey13-' + acc.toString();
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  for (let i15 = 0; i15 < 7; i15++) {
    acc = (acc + i15 * 13 + 14) % 100003;
  }
  const ix16: number = buf.indexOf('p15');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 24) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const rc19: Rec15 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const rc24: Rec15 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const rc25: Rec15 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  if (acc % 28 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = acc + 548 - (acc % 12);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 158) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  for (let i32 = 0; i32 < 5; i32++) {
    acc = (acc + i32 * 13 + 502) % 100003;
  }
  buf += 'batch33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 138) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'batch35-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 104) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const rc38: Rec15 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  if (acc % 24 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  if (acc % 23 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  for (let i48 = 0; i48 < 9; i48++) {
    acc = (acc + i48 * 13 + 254) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += 'client50-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1972) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  buf += `q0:${acc % 97}`;
  try { if (acc % 29 === 19) { throw new Error('synthetic-1'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 163) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 43) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  buf += `q4:${acc % 97}`;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += `q6:${acc % 97}`;
  acc = acc + 457 - (acc % 31);
  try { if (acc % 29 === 2) { throw new Error('synthetic-8'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9238) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-10'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i11 = 0; i11 < 7; i11++) {
    acc = (acc + i11 * 13 + 54) % 100003;
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const rc13: Rec15 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 42) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 13) { throw new Error('synthetic-18'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k19', acc % 997);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  buf += 'settle21-' + acc.toString();
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 13) { throw new Error('synthetic-25'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k27', acc % 997);
  try { if (acc % 29 === 8) { throw new Error('synthetic-28'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += 'pallet31-' + acc.toString();
  for (let i32 = 0; i32 < 10; i32++) {
    acc = (acc + i32 * 13 + 647) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 183) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 6) { throw new Error('synthetic-35'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  for (let i37 = 0; i37 < 5; i37++) {
    acc = (acc + i37 * 13 + 404) % 100003;
  }
  const ix38: number = buf.indexOf('p15');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const ix40: number = buf.indexOf('p15');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  arr.push(acc % 1000);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const rc45: Rec15 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 118) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  for (let i47 = 0; i47 < 9; i47++) {
    acc = (acc + i47 * 13 + 39) % 100003;
  }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const ix49: number = buf.indexOf('p15');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += 'client51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1973) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  buf += 'waybill1-' + acc.toString();
  for (let i2 = 0; i2 < 10; i2++) {
    acc = (acc + i2 * 13 + 462) % 100003;
  }
  arr.push(acc % 1000);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 59) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  for (let i6 = 0; i6 < 7; i6++) {
    acc = (acc + i6 * 13 + 729) % 100003;
  }
  for (let i7 = 0; i7 < 8; i7++) {
    acc = (acc + i7 * 13 + 756) % 100003;
  }
  acc = (acc * 31 + 3925) % 65521;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const rc10: Rec15 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  m01.set('k11', acc % 997);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  for (let i15 = 0; i15 < 9; i15++) {
    acc = (acc + i15 * 13 + 263) % 100003;
  }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 34) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  for (let i20 = 0; i20 < 6; i20++) {
    acc = (acc + i20 * 13 + 263) % 100003;
  }
  const rc21: Rec15 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  for (let i23 = 0; i23 < 8; i23++) {
    acc = (acc + i23 * 13 + 122) % 100003;
  }
  for (let i24 = 0; i24 < 12; i24++) {
    acc = (acc + i24 * 13 + 405) % 100003;
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 150) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  if (acc % 9 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  if (acc % 17 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  m01.set('k32', acc % 997);
  const ix33: number = buf.indexOf('p15');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 67) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 118) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 1436) % 65521;
  const rc39: Rec15 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = acc + 713 - (acc % 91);
  m01.set('k42', acc % 997);
  m01.set('k43', acc % 997);
  const rc44: Rec15 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  const ix47: number = buf.indexOf('p15');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 167) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  buf += `q50:${acc % 97}`;
  acc = (acc * 31 + 4279) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1974) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  const ix0: number = buf.indexOf('p15');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  arr.push(acc % 1000);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  acc = acc + 500 - (acc % 79);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  if (acc % 16 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-7'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const rc9: Rec15 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  if (acc % 10 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const rc11: Rec15 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const ix12: number = buf.indexOf('p15');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 35) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  buf += 'ledger15-' + acc.toString();
  acc = (acc * 31 + 8122) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 23) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-19'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const ix21: number = buf.indexOf('p15');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  for (let i23 = 0; i23 < 5; i23++) {
    acc = (acc + i23 * 13 + 582) % 100003;
  }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const ix27: number = buf.indexOf('p15');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  buf += `q30:${acc % 97}`;
  acc = (acc * 31 + 5900) % 65521;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const rc33: Rec15 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 50) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 5475) % 65521;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  acc = (acc * 31 + 3570) % 65521;
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  buf += 'carrier39-' + acc.toString();
  const rc40: Rec15 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  acc = (acc * 31 + 3627) % 65521;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const rc43: Rec15 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const rc44: Rec15 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  if (acc % 6 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  acc = acc + 29 - (acc % 61);
  const rc48: Rec15 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  acc = acc + 964 - (acc % 57);
  if (acc % 12 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0015_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0015_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0015_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1975) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  acc = acc + 675 - (acc % 79);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  buf += `q3:${acc % 97}`;
  if (acc % 15 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  acc = (acc * 31 + 4076) % 65521;
  for (let i7 = 0; i7 < 8; i7++) {
    acc = (acc + i7 * 13 + 671) % 100003;
  }
  for (let i8 = 0; i8 < 11; i8++) {
    acc = (acc + i8 * 13 + 720) % 100003;
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-9'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const ix10: number = buf.indexOf('p15');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  buf += 'balance12-' + acc.toString();
  for (let i13 = 0; i13 < 9; i13++) {
    acc = (acc + i13 * 13 + 243) % 100003;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-14'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 865 - (acc % 40);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 91) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 7) { throw new Error('synthetic-18'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (acc % 5 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  m01.set('k22', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += 'ledger24-' + acc.toString();
  if (acc % 22 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  acc = (acc * 31 + 180) % 65521;
  const rc27: Rec15 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  for (let i28 = 0; i28 < 6; i28++) {
    acc = (acc + i28 * 13 + 314) % 100003;
  }
  const ix29: number = buf.indexOf('p15');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const ix30: number = buf.indexOf('p15');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  acc = acc + 639 - (acc % 89);
  try { if (acc % 29 === 8) { throw new Error('synthetic-33'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 171) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  arr.push(acc % 1000);
  acc = (acc * 31 + 6436) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  for (let i41 = 0; i41 < 5; i41++) {
    acc = (acc + i41 * 13 + 978) % 100003;
  }
  acc = (acc * 31 + 5024) % 65521;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  m01.set('k44', acc % 997);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 191) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  for (let i46 = 0; i46 < 6; i46++) {
    acc = (acc + i46 * 13 + 80) % 100003;
  }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const rc48: Rec15 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const rc49: Rec15 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  arr.push(acc % 1000);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1976) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  buf += 'dispatch0-' + acc.toString();
  acc = acc + 459 - (acc % 65);
  acc = (acc * 31 + 7333) % 65521;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = (acc * 31 + 5613) % 65521;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  arr.push(acc % 1000);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  buf += `q9:${acc % 97}`;
  const ix10: number = buf.indexOf('p15');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  for (let i11 = 0; i11 < 8; i11++) {
    acc = (acc + i11 * 13 + 395) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
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
  cf17.push((x: number): number => (x + 197) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p15');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const rc20: Rec15 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  m01.set('k21', acc % 997);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (acc % 27 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-25'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const ix26: number = buf.indexOf('p15');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  m01.set('k27', acc % 997);
  acc = acc + 674 - (acc % 80);
  try { if (acc % 29 === 9) { throw new Error('synthetic-29'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k30', acc % 997);
  try { if (acc % 29 === 21) { throw new Error('synthetic-31'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 58) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  arr.push(acc % 1000);
  const rc37: Rec15 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  buf += 'tariff38-' + acc.toString();
  try { if (acc % 29 === 18) { throw new Error('synthetic-39'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += `q43:${acc % 97}`;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const ix46: number = buf.indexOf('p15');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  m01.set('k47', acc % 997);
  buf += 'policy48-' + acc.toString();
  try { if (acc % 29 === 18) { throw new Error('synthetic-49'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1977) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  buf += 'freight1-' + acc.toString();
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  acc = (acc * 31 + 6546) % 65521;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  buf += `q6:${acc % 97}`;
  buf += 'balance7-' + acc.toString();
  arr.push(acc % 1000);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  for (let i10 = 0; i10 < 6; i10++) {
    acc = (acc + i10 * 13 + 107) % 100003;
  }
  const rc11: Rec15 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  if (acc % 16 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 27) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 131) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 936 - (acc % 37);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const ix23: number = buf.indexOf('p15');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += `q25:${acc % 97}`;
  arr.push(acc % 1000);
  acc = acc + 247 - (acc % 85);
  const ix28: number = buf.indexOf('p15');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 9944) % 65521;
  if (acc % 31 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  m01.set('k31', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 91) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  acc = (acc * 31 + 1495) % 65521;
  for (let i37 = 0; i37 < 3; i37++) {
    acc = (acc + i37 * 13 + 581) % 100003;
  }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  acc = (acc * 31 + 1523) % 65521;
  acc = (acc * 31 + 6808) % 65521;
  const rc42: Rec15 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = acc + 658 - (acc % 68);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  try { if (acc % 29 === 2) { throw new Error('synthetic-46'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  acc = acc + 488 - (acc % 65);
  const rc50: Rec15 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 146) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1978) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  for (let i0 = 0; i0 < 10; i0++) {
    acc = (acc + i0 * 13 + 208) % 100003;
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const rc2: Rec15 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  for (let i3 = 0; i3 < 11; i3++) {
    acc = (acc + i3 * 13 + 195) % 100003;
  }
  const ix4: number = buf.indexOf('p15');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = acc + 561 - (acc % 19);
  for (let i6 = 0; i6 < 10; i6++) {
    acc = (acc + i6 * 13 + 638) % 100003;
  }
  buf += 'dock7-' + acc.toString();
  arr.push(acc % 1000);
  acc = acc + 810 - (acc % 10);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const ix11: number = buf.indexOf('p15');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 90) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  m01.set('k13', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const ix15: number = buf.indexOf('p15');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 143) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  arr.push(acc % 1000);
  const ix21: number = buf.indexOf('p15');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const rc22: Rec15 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q24:${acc % 97}`;
  const ix25: number = buf.indexOf('p15');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  buf += 'freight27-' + acc.toString();
  const rc28: Rec15 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = acc + 885 - (acc % 93);
  acc = acc + 553 - (acc % 82);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  for (let i32 = 0; i32 < 9; i32++) {
    acc = (acc + i32 * 13 + 719) % 100003;
  }
  acc = (acc * 31 + 6561) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 180) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = acc + 610 - (acc % 32);
  m01.set('k37', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const rc39: Rec15 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  for (let i41 = 0; i41 < 11; i41++) {
    acc = (acc + i41 * 13 + 913) % 100003;
  }
  arr.push(acc % 1000);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 81) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  buf += `q44:${acc % 97}`;
  const rc45: Rec15 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  acc = (acc * 31 + 6221) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += 'ticket51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1979) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 58) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  buf += 'pickup1-' + acc.toString();
  if (acc % 26 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const rc3: Rec15 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  try { if (acc % 29 === 5) { throw new Error('synthetic-4'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const ix5: number = buf.indexOf('p15');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += `q7:${acc % 97}`;
  for (let i8 = 0; i8 < 5; i8++) {
    acc = (acc + i8 * 13 + 773) % 100003;
  }
  acc = (acc * 31 + 8684) % 65521;
  if (acc % 26 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  buf += `q11:${acc % 97}`;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 13) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  if (acc % 15 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  if (acc % 8 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  if (acc % 12 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 40) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 14 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  m01.set('k20', acc % 997);
  if (acc % 10 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const rc22: Rec15 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  m01.set('k24', acc % 997);
  const rc25: Rec15 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  acc = acc + 468 - (acc % 66);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const ix28: number = buf.indexOf('p15');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const ix30: number = buf.indexOf('p15');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += `q31:${acc % 97}`;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  try { if (acc % 29 === 12) { throw new Error('synthetic-33'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 74) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 3113) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  arr.push(acc % 1000);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  if (acc % 26 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  const rc43: Rec15 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  for (let i44 = 0; i44 < 7; i44++) {
    acc = (acc + i44 * 13 + 716) % 100003;
  }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 14) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-47'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 18) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 105) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  buf += `q50:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1980) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-1'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 5040) % 65521;
  if (acc % 26 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  m01.set('k5', acc % 997);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const rc7: Rec15 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 169) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 181) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  buf += 'portal10-' + acc.toString();
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 125) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  acc = (acc * 31 + 6132) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-15'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const ix16: number = buf.indexOf('p15');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 137) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  arr.push(acc % 1000);
  acc = acc + 69 - (acc % 67);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-22'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  try { if (acc % 29 === 6) { throw new Error('synthetic-26'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i27 = 0; i27 < 12; i27++) {
    acc = (acc + i27 * 13 + 967) % 100003;
  }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  buf += 'stocktake29-' + acc.toString();
  const ix30: number = buf.indexOf('p15');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  for (let i31 = 0; i31 < 8; i31++) {
    acc = (acc + i31 * 13 + 178) % 100003;
  }
  buf += 'parcel32-' + acc.toString();
  acc = acc + 246 - (acc % 17);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 87) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec15 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  acc = acc + 245 - (acc % 52);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  for (let i39 = 0; i39 < 10; i39++) {
    acc = (acc + i39 * 13 + 988) % 100003;
  }
  acc = acc + 816 - (acc % 91);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-42'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 114) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 20) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  if (acc % 23 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  for (let i49 = 0; i49 < 7; i49++) {
    acc = (acc + i49 * 13 + 880) % 100003;
  }
  if (acc % 12 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1981) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  acc = acc + 903 - (acc % 50);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  arr.push(acc % 1000);
  acc = (acc * 31 + 312) % 65521;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  m01.set('k8', acc % 997);
  if (acc % 11 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  if (acc % 12 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-15'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 24 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 93) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 595 - (acc % 61);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  buf += `q20:${acc % 97}`;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  if (acc % 17 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  m01.set('k26', acc % 997);
  acc = acc + 124 - (acc % 35);
  acc = (acc * 31 + 2915) % 65521;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const rc31: Rec15 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  if (acc % 12 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 121) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const ix37: number = buf.indexOf('p15');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  buf += 'bay38-' + acc.toString();
  m01.set('k39', acc % 997);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 59) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  buf += 'dispatch42-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5030) % 65521;
  const rc46: Rec15 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  try { if (acc % 29 === 21) { throw new Error('synthetic-49'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1982) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  if (acc % 15 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  try { if (acc % 29 === 21) { throw new Error('synthetic-4'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k5', acc % 997);
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = (acc * 31 + 8267) % 65521;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  const rc11: Rec15 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  if (acc % 22 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = acc + 902 - (acc % 30);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 63) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const ix19: number = buf.indexOf('p15');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  m01.set('k24', acc % 997);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  acc = acc + 817 - (acc % 67);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 199) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  m01.set('k37', acc % 997);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  if (acc % 13 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 193) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  buf += 'tariff43-' + acc.toString();
  if (acc % 24 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 138) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const ix50: number = buf.indexOf('p15');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const ix51: number = buf.indexOf('p15');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1983) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  acc = acc + 211 - (acc % 67);
  buf += 'balance2-' + acc.toString();
  buf += 'stocktake3-' + acc.toString();
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 187) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i6 = 0; i6 < 3; i6++) {
    acc = (acc + i6 * 13 + 123) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  const ix9: number = buf.indexOf('p15');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  buf += `q13:${acc % 97}`;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += `q15:${acc % 97}`;
  const ix16: number = buf.indexOf('p15');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 101) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 29 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 126) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  try { if (acc % 29 === 8) { throw new Error('synthetic-23'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 951 - (acc % 28);
  for (let i25 = 0; i25 < 3; i25++) {
    acc = (acc + i25 * 13 + 791) % 100003;
  }
  buf += 'dispatch26-' + acc.toString();
  acc = acc + 553 - (acc % 34);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  const rc30: Rec15 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  acc = acc + 722 - (acc % 80);
  try { if (acc % 29 === 12) { throw new Error('synthetic-32'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 31) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec15 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  if (acc % 27 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  acc = (acc * 31 + 3155) % 65521;
  m01.set('k40', acc % 997);
  if (acc % 9 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const rc42: Rec15 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  m01.set('k43', acc % 997);
  const ix44: number = buf.indexOf('p15');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  buf += 'customs45-' + acc.toString();
  const rc46: Rec15 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  if (acc % 27 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  m01.set('k49', acc % 997);
  acc = (acc * 31 + 1749) % 65521;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1984) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  const rc0: Rec15 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const ix4: number = buf.indexOf('p15');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  buf += `q5:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 6689) % 65521;
  arr.push(acc % 1000);
  const ix13: number = buf.indexOf('p15');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const ix15: number = buf.indexOf('p15');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 83) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  buf += `q20:${acc % 97}`;
  m01.set('k21', acc % 997);
  if (acc % 5 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  for (let i23 = 0; i23 < 8; i23++) {
    acc = (acc + i23 * 13 + 8) % 100003;
  }
  arr.push(acc % 1000);
  buf += `q25:${acc % 97}`;
  arr.push(acc % 1000);
  acc = acc + 249 - (acc % 74);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 91) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  buf += 'quota29-' + acc.toString();
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  arr.push(acc % 1000);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 32) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 21) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  buf += 'journey36-' + acc.toString();
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  if (acc % 19 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += 'pickup39-' + acc.toString();
  arr.push(acc % 1000);
  const ix41: number = buf.indexOf('p15');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 44) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  buf += 'pallet44-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const rc48: Rec15 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const rc51: Rec15 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0015_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0015_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0015_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1985) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  acc = (acc * 31 + 5083) % 65521;
  if (acc % 5 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const rc3: Rec15 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  if (acc % 11 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  for (let i10 = 0; i10 < 10; i10++) {
    acc = (acc + i10 * 13 + 789) % 100003;
  }
  acc = (acc * 31 + 5247) % 65521;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const rc14: Rec15 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 100) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'coupon18-' + acc.toString();
  arr.push(acc % 1000);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 91) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  try { if (acc % 29 === 23) { throw new Error('synthetic-22'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const rc23: Rec15 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 163) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  const rc25: Rec15 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  buf += 'invoice26-' + acc.toString();
  const ix27: number = buf.indexOf('p15');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  buf += 'rebate28-' + acc.toString();
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  buf += 'freight30-' + acc.toString();
  for (let i31 = 0; i31 < 4; i31++) {
    acc = (acc + i31 * 13 + 229) % 100003;
  }
  const ix32: number = buf.indexOf('p15');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += 'tariff33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 13) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 9328) % 65521;
  buf += `q36:${acc % 97}`;
  const ix37: number = buf.indexOf('p15');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const rc38: Rec15 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  try { if (acc % 29 === 21) { throw new Error('synthetic-39'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1091) % 65521;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  acc = acc + 141 - (acc % 34);
  acc = acc + 536 - (acc % 44);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  buf += 'parcel45-' + acc.toString();
  for (let i46 = 0; i46 < 5; i46++) {
    acc = (acc + i46 * 13 + 36) % 100003;
  }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  buf += 'batch48-' + acc.toString();
  buf += 'coupon49-' + acc.toString();
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  acc = acc + 554 - (acc % 26);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1986) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  arr.push(acc % 1000);
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  try { if (acc % 29 === 17) { throw new Error('synthetic-2'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const rc4: Rec15 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  try { if (acc % 29 === 20) { throw new Error('synthetic-5'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'waybill6-' + acc.toString();
  for (let i7 = 0; i7 < 11; i7++) {
    acc = (acc + i7 * 13 + 381) % 100003;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-8'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  buf += `q12:${acc % 97}`;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-15'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 60) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 183) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec15 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  buf += `q19:${acc % 97}`;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += 'dispatch23-' + acc.toString();
  buf += 'transit24-' + acc.toString();
  m01.set('k25', acc % 997);
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
  try { if (acc % 29 === 7) { throw new Error('synthetic-29'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  buf += `q31:${acc % 97}`;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  for (let i33 = 0; i33 < 4; i33++) {
    acc = (acc + i33 * 13 + 625) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 170) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  const rc36: Rec15 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const rc37: Rec15 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  for (let i39 = 0; i39 < 12; i39++) {
    acc = (acc + i39 * 13 + 463) % 100003;
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  acc = acc + 636 - (acc % 69);
  buf += `q43:${acc % 97}`;
  acc = acc + 951 - (acc % 94);
  const ix45: number = buf.indexOf('p15');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += 'dock46-' + acc.toString();
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 127) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  if (acc % 14 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  m01.set('k50', acc % 997);
  for (let i51 = 0; i51 < 4; i51++) {
    acc = (acc + i51 * 13 + 498) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1987) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  if (acc % 19 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8631) % 65521;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 180) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  if (acc % 26 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = acc + 455 - (acc % 62);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 150) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  buf += 'customs7-' + acc.toString();
  m01.set('k8', acc % 997);
  acc = acc + 415 - (acc % 61);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  try { if (acc % 29 === 23) { throw new Error('synthetic-11'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 130 - (acc % 62);
  m01.set('k13', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1549) % 65521;
  acc = acc + 383 - (acc % 56);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 191) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  arr.push(acc % 1000);
  const rc20: Rec15 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const rc24: Rec15 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const rc26: Rec15 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  acc = (acc * 31 + 8935) % 65521;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const ix29: number = buf.indexOf('p15');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-30'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const ix32: number = buf.indexOf('p15');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 131) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const rc36: Rec15 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 112) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  buf += `q38:${acc % 97}`;
  m01.set('k39', acc % 997);
  buf += 'client40-' + acc.toString();
  try { if (acc % 29 === 20) { throw new Error('synthetic-41'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const ix42: number = buf.indexOf('p15');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  acc = (acc * 31 + 6330) % 65521;
  for (let i46 = 0; i46 < 6; i46++) {
    acc = (acc + i46 * 13 + 952) % 100003;
  }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const rc49: Rec15 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1988) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  try { if (acc % 29 === 16) { throw new Error('synthetic-0'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  for (let i2 = 0; i2 < 11; i2++) {
    acc = (acc + i2 * 13 + 815) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 19) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 197) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const rc8: Rec15 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  acc = (acc * 31 + 8846) % 65521;
  buf += `q12:${acc % 97}`;
  buf += 'sku13-' + acc.toString();
  try { if (acc % 29 === 11) { throw new Error('synthetic-14'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 27 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = acc + 908 - (acc % 19);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 17) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec15 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  if (acc % 7 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  if (acc % 30 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  if (acc % 23 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  if (acc % 25 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-26'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const rc29: Rec15 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (acc % 6 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-32'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 146) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 88) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'quota38-' + acc.toString();
  arr.push(acc % 1000);
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  for (let i42 = 0; i42 < 3; i42++) {
    acc = (acc + i42 * 13 + 483) % 100003;
  }
  buf += 'bay43-' + acc.toString();
  acc = (acc * 31 + 489) % 65521;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 65) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  acc = acc + 337 - (acc % 44);
  buf += `q49:${acc % 97}`;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  acc = acc + 873 - (acc % 52);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1989) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  const rc0: Rec15 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  acc = (acc * 31 + 426) % 65521;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  m01.set('k5', acc % 997);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 188) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  for (let i8 = 0; i8 < 9; i8++) {
    acc = (acc + i8 * 13 + 494) % 100003;
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  buf += `q11:${acc % 97}`;
  buf += `q12:${acc % 97}`;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  try { if (acc % 29 === 15) { throw new Error('synthetic-14'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 2849) % 65521;
  const rc16: Rec15 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 58) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec15 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  if (acc % 30 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  buf += 'region23-' + acc.toString();
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += 'vendor25-' + acc.toString();
  const rc26: Rec15 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  m01.set('k27', acc % 997);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 49 - (acc % 86);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 185) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 7700) % 65521;
  arr.push(acc % 1000);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  buf += `q40:${acc % 97}`;
  acc = (acc * 31 + 138) % 65521;
  if (acc % 8 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  m01.set('k44', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  buf += 'audit46-' + acc.toString();
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 16) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 27) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = acc + 596 - (acc % 59);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1990) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  try { if (acc % 29 === 21) { throw new Error('synthetic-1'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 45) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  try { if (acc % 29 === 19) { throw new Error('synthetic-4'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  m01.set('k6', acc % 997);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = (acc * 31 + 5370) % 65521;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const ix10: number = buf.indexOf('p15');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  buf += `q13:${acc % 97}`;
  arr.push(acc % 1000);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 165) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  try { if (acc % 29 === 4) { throw new Error('synthetic-19'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  for (let i21 = 0; i21 < 5; i21++) {
    acc = (acc + i21 * 13 + 378) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  buf += 'coupon23-' + acc.toString();
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 3247) % 65521;
  const ix28: number = buf.indexOf('p15');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 152) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = acc + 199 - (acc % 42);
  for (let i33 = 0; i33 < 4; i33++) {
    acc = (acc + i33 * 13 + 899) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 48) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  m01.set('k36', acc % 997);
  arr.push(acc % 1000);
  buf += 'invoice38-' + acc.toString();
  m01.set('k39', acc % 997);
  acc = (acc * 31 + 1644) % 65521;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += `q42:${acc % 97}`;
  for (let i43 = 0; i43 < 9; i43++) {
    acc = (acc + i43 * 13 + 935) % 100003;
  }
  if (acc % 23 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-45'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const rc46: Rec15 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  buf += `q47:${acc % 97}`;
  for (let i48 = 0; i48 < 5; i48++) {
    acc = (acc + i48 * 13 + 113) % 100003;
  }
  const rc49: Rec15 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1991) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  buf += `q0:${acc % 97}`;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  for (let i3 = 0; i3 < 10; i3++) {
    acc = (acc + i3 * 13 + 197) % 100003;
  }
  for (let i4 = 0; i4 < 7; i4++) {
    acc = (acc + i4 * 13 + 927) % 100003;
  }
  buf += `q5:${acc % 97}`;
  for (let i6 = 0; i6 < 9; i6++) {
    acc = (acc + i6 * 13 + 847) % 100003;
  }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  m01.set('k10', acc % 997);
  arr.push(acc % 1000);
  m01.set('k12', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  for (let i15 = 0; i15 < 10; i15++) {
    acc = (acc + i15 * 13 + 485) % 100003;
  }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 138) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 619 - (acc % 65);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  m01.set('k20', acc % 997);
  acc = acc + 16 - (acc % 47);
  acc = (acc * 31 + 3629) % 65521;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  buf += 'shelf25-' + acc.toString();
  buf += `q26:${acc % 97}`;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 183) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  acc = acc + 95 - (acc % 84);
  const rc30: Rec15 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  try { if (acc % 29 === 20) { throw new Error('synthetic-31'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const rc33: Rec15 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 159) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 23) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  acc = acc + 638 - (acc % 51);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  for (let i39 = 0; i39 < 12; i39++) {
    acc = (acc + i39 * 13 + 405) % 100003;
  }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 199) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  const ix43: number = buf.indexOf('p15');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 119) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const rc48: Rec15 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const rc49: Rec15 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  try { if (acc % 29 === 6) { throw new Error('synthetic-50'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1992) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  for (let i1 = 0; i1 < 7; i1++) {
    acc = (acc + i1 * 13 + 95) % 100003;
  }
  acc = acc + 418 - (acc % 67);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  acc = acc + 499 - (acc % 8);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = (acc * 31 + 3791) % 65521;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 57) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  for (let i9 = 0; i9 < 12; i9++) {
    acc = (acc + i9 * 13 + 667) % 100003;
  }
  for (let i10 = 0; i10 < 6; i10++) {
    acc = (acc + i10 * 13 + 455) % 100003;
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const ix14: number = buf.indexOf('p15');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  if (acc % 7 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 169) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'order18-' + acc.toString();
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 135) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = (acc * 31 + 5438) % 65521;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 195 - (acc % 89);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 107) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  buf += 'rebate29-' + acc.toString();
  arr.push(acc % 1000);
  for (let i31 = 0; i31 < 7; i31++) {
    acc = (acc + i31 * 13 + 862) % 100003;
  }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 145) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 2955) % 65521;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const ix38: number = buf.indexOf('p15');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  m01.set('k39', acc % 997);
  acc = acc + 949 - (acc % 69);
  acc = acc + 663 - (acc % 85);
  for (let i42 = 0; i42 < 6; i42++) {
    acc = (acc + i42 * 13 + 438) % 100003;
  }
  arr.push(acc % 1000);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  acc = (acc * 31 + 4255) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-46'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const ix49: number = buf.indexOf('p15');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const rc50: Rec15 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  acc = acc + 895 - (acc % 71);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1993) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 62) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  m01.set('k1', acc % 997);
  for (let i2 = 0; i2 < 4; i2++) {
    acc = (acc + i2 * 13 + 140) % 100003;
  }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  try { if (acc % 29 === 13) { throw new Error('synthetic-4'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i5 = 0; i5 < 12; i5++) {
    acc = (acc + i5 * 13 + 609) % 100003;
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = (acc * 31 + 9007) % 65521;
  m01.set('k8', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  buf += `q11:${acc % 97}`;
  arr.push(acc % 1000);
  buf += 'audit13-' + acc.toString();
  acc = (acc * 31 + 2630) % 65521;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 55) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += 'refund16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 168) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 4796) % 65521;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  buf += 'rebate21-' + acc.toString();
  acc = acc + 584 - (acc % 83);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  if (acc % 9 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const ix25: number = buf.indexOf('p15');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  buf += 'quota26-' + acc.toString();
  try { if (acc % 29 === 20) { throw new Error('synthetic-27'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  acc = (acc * 31 + 7159) % 65521;
  if (acc % 11 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const ix31: number = buf.indexOf('p15');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 111) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 117) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const ix39: number = buf.indexOf('p15');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  if (acc % 17 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  acc = acc + 974 - (acc % 34);
  for (let i44 = 0; i44 < 9; i44++) {
    acc = (acc + i44 * 13 + 533) % 100003;
  }
  m01.set('k45', acc % 997);
  arr.push(acc % 1000);
  acc = acc + 327 - (acc % 42);
  buf += 'quota48-' + acc.toString();
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const ix50: number = buf.indexOf('p15');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1994) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  arr.push(acc % 1000);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const rc6: Rec15 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  try { if (acc % 29 === 23) { throw new Error('synthetic-7'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  acc = acc + 879 - (acc % 83);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 16) { throw new Error('synthetic-12'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k13', acc % 997);
  m01.set('k14', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 81) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  if (acc % 29 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const rc20: Rec15 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  buf += 'bay22-' + acc.toString();
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 6) { throw new Error('synthetic-25'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 72) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += `q29:${acc % 97}`;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  for (let i32 = 0; i32 < 4; i32++) {
    acc = (acc + i32 * 13 + 616) % 100003;
  }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 101) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec15 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const rc36: Rec15 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  if (acc % 20 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  m01.set('k38', acc % 997);
  try { if (acc % 29 === 3) { throw new Error('synthetic-39'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 122) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  acc = acc + 769 - (acc % 31);
  const ix44: number = buf.indexOf('p15');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const ix45: number = buf.indexOf('p15');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-46'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const ix47: number = buf.indexOf('p15');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  m01.set('k48', acc % 997);
  const ix49: number = buf.indexOf('p15');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const ix50: number = buf.indexOf('p15');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0015_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0015_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0015_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1995) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  buf += 'bay0-' + acc.toString();
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  for (let i2 = 0; i2 < 7; i2++) {
    acc = (acc + i2 * 13 + 994) % 100003;
  }
  acc = acc + 364 - (acc % 21);
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 90) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  acc = acc + 494 - (acc % 28);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  acc = acc + 602 - (acc % 95);
  const ix12: number = buf.indexOf('p15');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  for (let i13 = 0; i13 < 7; i13++) {
    acc = (acc + i13 * 13 + 182) % 100003;
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  buf += 'dispatch16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 40) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-20'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'waybill21-' + acc.toString();
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 57) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  m01.set('k23', acc % 997);
  try { if (acc % 29 === 9) { throw new Error('synthetic-24'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 10 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 171) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const rc30: Rec15 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 159) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  m01.set('k37', acc % 997);
  acc = acc + 212 - (acc % 34);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  m01.set('k41', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  m01.set('k44', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  if (acc % 20 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const rc47: Rec15 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  arr.push(acc % 1000);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-50'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1996) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  m01.set('k0', acc % 997);
  for (let i1 = 0; i1 < 8; i1++) {
    acc = (acc + i1 * 13 + 447) % 100003;
  }
  const rc2: Rec15 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  m01.set('k3', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 37) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  m01.set('k12', acc % 997);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  for (let i14 = 0; i14 < 9; i14++) {
    acc = (acc + i14 * 13 + 103) % 100003;
  }
  arr.push(acc % 1000);
  buf += 'settle16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 134) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p15');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  buf += 'balance19-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4363) % 65521;
  buf += `q22:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  if (acc % 10 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const ix26: number = buf.indexOf('p15');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const ix27: number = buf.indexOf('p15');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  m01.set('k28', acc % 997);
  try { if (acc % 29 === 18) { throw new Error('synthetic-29'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i30 = 0; i30 < 7; i30++) {
    acc = (acc + i30 * 13 + 787) % 100003;
  }
  arr.push(acc % 1000);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const ix33: number = buf.indexOf('p15');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 155) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = acc + 935 - (acc % 58);
  if (acc % 10 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  const ix41: number = buf.indexOf('p15');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 172) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-45'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 81) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const rc49: Rec15 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const ix50: number = buf.indexOf('p15');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1997) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  for (let i0 = 0; i0 < 3; i0++) {
    acc = (acc + i0 * 13 + 23) % 100003;
  }
  if (acc % 23 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  arr.push(acc % 1000);
  try { if (acc % 29 === 12) { throw new Error('synthetic-4'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  buf += `q6:${acc % 97}`;
  m01.set('k7', acc % 997);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  if (acc % 8 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const ix16: number = buf.indexOf('p15');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 152) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 717 - (acc % 39);
  if (acc % 26 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  m01.set('k20', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  for (let i22 = 0; i22 < 4; i22++) {
    acc = (acc + i22 * 13 + 268) % 100003;
  }
  const rc23: Rec15 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const rc24: Rec15 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const rc25: Rec15 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const ix28: number = buf.indexOf('p15');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  buf += `q31:${acc % 97}`;
  buf += 'pallet32-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 90) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  for (let i39 = 0; i39 < 12; i39++) {
    acc = (acc + i39 * 13 + 471) % 100003;
  }
  m01.set('k40', acc % 997);
  const ix41: number = buf.indexOf('p15');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 181) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4586) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-49'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1998) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 66) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += `q3:${acc % 97}`;
  const rc4: Rec15 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  const rc5: Rec15 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  try { if (acc % 29 === 12) { throw new Error('synthetic-7'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 442 - (acc % 33);
  buf += 'audit9-' + acc.toString();
  acc = (acc * 31 + 8273) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  for (let i12 = 0; i12 < 11; i12++) {
    acc = (acc + i12 * 13 + 7) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const rc14: Rec15 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 125) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  for (let i19 = 0; i19 < 6; i19++) {
    acc = (acc + i19 * 13 + 422) % 100003;
  }
  acc = acc + 126 - (acc % 73);
  buf += 'vendor21-' + acc.toString();
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  const rc23: Rec15 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  m01.set('k24', acc % 997);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  buf += `q26:${acc % 97}`;
  try { if (acc % 29 === 10) { throw new Error('synthetic-27'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k28', acc % 997);
  buf += `q29:${acc % 97}`;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const ix31: number = buf.indexOf('p15');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  acc = (acc * 31 + 7713) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 148) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  acc = acc + 770 - (acc % 36);
  const rc37: Rec15 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 22) { throw new Error('synthetic-41'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  m01.set('k43', acc % 997);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const ix46: number = buf.indexOf('p15');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = acc + 591 - (acc % 73);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 172) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1999) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  if (acc % 9 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const ix3: number = buf.indexOf('p15');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 2381) % 65521;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  for (let i8 = 0; i8 < 9; i8++) {
    acc = (acc + i8 * 13 + 589) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  for (let i11 = 0; i11 < 8; i11++) {
    acc = (acc + i11 * 13 + 562) % 100003;
  }
  for (let i12 = 0; i12 < 9; i12++) {
    acc = (acc + i12 * 13 + 323) % 100003;
  }
  m01.set('k13', acc % 997);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += 'vendor15-' + acc.toString();
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 168) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  for (let i19 = 0; i19 < 11; i19++) {
    acc = (acc + i19 * 13 + 76) % 100003;
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  buf += 'waybill21-' + acc.toString();
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 71) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-23'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const ix24: number = buf.indexOf('p15');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (acc % 11 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += `q31:${acc % 97}`;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 180) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i36 = 0; i36 < 3; i36++) {
    acc = (acc + i36 * 13 + 568) % 100003;
  }
  acc = (acc * 31 + 9781) % 65521;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  buf += 'quota39-' + acc.toString();
  try { if (acc % 29 === 18) { throw new Error('synthetic-40'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 130) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  for (let i44 = 0; i44 < 6; i44++) {
    acc = (acc + i44 * 13 + 707) % 100003;
  }
  arr.push(acc % 1000);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 192) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  for (let i48 = 0; i48 < 5; i48++) {
    acc = (acc + i48 * 13 + 176) % 100003;
  }
  const ix49: number = buf.indexOf('p15');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  for (let i50 = 0; i50 < 11; i50++) {
    acc = (acc + i50 * 13 + 534) % 100003;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-51'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2000) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  acc = acc + 290 - (acc % 60);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  if (acc % 5 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  try { if (acc % 29 === 8) { throw new Error('synthetic-4'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const rc6: Rec15 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  arr.push(acc % 1000);
  acc = acc + 371 - (acc % 61);
  if (acc % 10 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  m01.set('k10', acc % 997);
  for (let i11 = 0; i11 < 3; i11++) {
    acc = (acc + i11 * 13 + 649) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  acc = (acc * 31 + 492) % 65521;
  m01.set('k15', acc % 997);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 95) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p15');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  if (acc % 5 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  buf += `q24:${acc % 97}`;
  acc = acc + 365 - (acc % 37);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-27'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const rc29: Rec15 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 100) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 6; i35++) {
    acc = (acc + i35 * 13 + 531) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  for (let i40 = 0; i40 < 7; i40++) {
    acc = (acc + i40 * 13 + 846) % 100003;
  }
  buf += 'balance41-' + acc.toString();
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 133) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  try { if (acc % 29 === 13) { throw new Error('synthetic-45'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k46', acc % 997);
  acc = acc + 780 - (acc % 19);
  try { if (acc % 29 === 15) { throw new Error('synthetic-48'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const ix49: number = buf.indexOf('p15');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += 'order50-' + acc.toString();
  const ix51: number = buf.indexOf('p15');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2001) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  m01.set('k0', acc % 997);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  buf += `q2:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  try { if (acc % 29 === 13) { throw new Error('synthetic-5'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q6:${acc % 97}`;
  for (let i7 = 0; i7 < 5; i7++) {
    acc = (acc + i7 * 13 + 597) % 100003;
  }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const rc9: Rec15 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  m01.set('k12', acc % 997);
  try { if (acc % 29 === 16) { throw new Error('synthetic-13'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i14 = 0; i14 < 9; i14++) {
    acc = (acc + i14 * 13 + 936) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 172) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-18'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 5633) % 65521;
  const rc20: Rec15 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-22'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const ix24: number = buf.indexOf('p15');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  for (let i27 = 0; i27 < 10; i27++) {
    acc = (acc + i27 * 13 + 279) % 100003;
  }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  for (let i30 = 0; i30 < 11; i30++) {
    acc = (acc + i30 * 13 + 149) % 100003;
  }
  const ix31: number = buf.indexOf('p15');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const ix32: number = buf.indexOf('p15');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 132) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  buf += `q36:${acc % 97}`;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 36) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 58) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 73) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const ix43: number = buf.indexOf('p15');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const ix44: number = buf.indexOf('p15');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 150) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const rc47: Rec15 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += 'dispatch48-' + acc.toString();
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 129) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2002) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  try { if (acc % 29 === 8) { throw new Error('synthetic-0'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const ix2: number = buf.indexOf('p15');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const ix3: number = buf.indexOf('p15');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  buf += `q6:${acc % 97}`;
  arr.push(acc % 1000);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  m01.set('k13', acc % 997);
  acc = (acc * 31 + 8224) % 65521;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  acc = acc + 440 - (acc % 68);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 126) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4756) % 65521;
  const rc20: Rec15 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  if (acc % 19 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = acc + 186 - (acc % 73);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 19) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  try { if (acc % 29 === 7) { throw new Error('synthetic-26'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 10) { throw new Error('synthetic-28'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-29'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'freight30-' + acc.toString();
  try { if (acc % 29 === 20) { throw new Error('synthetic-31'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q32:${acc % 97}`;
  if (acc % 24 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 109) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-35'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 142 - (acc % 90);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  buf += `q38:${acc % 97}`;
  m01.set('k39', acc % 997);
  buf += `q40:${acc % 97}`;
  for (let i41 = 0; i41 < 11; i41++) {
    acc = (acc + i41 * 13 + 231) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  buf += 'dispatch44-' + acc.toString();
  buf += 'invoice45-' + acc.toString();
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  buf += 'pallet47-' + acc.toString();
  arr.push(acc % 1000);
  const rc49: Rec15 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 13) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  for (let i51 = 0; i51 < 11; i51++) {
    acc = (acc + i51 * 13 + 893) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2003) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  const rc0: Rec15 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  acc = (acc * 31 + 4268) % 65521;
  for (let i2 = 0; i2 < 11; i2++) {
    acc = (acc + i2 * 13 + 970) % 100003;
  }
  const rc3: Rec15 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  const ix5: number = buf.indexOf('p15');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-7'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-8'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  buf += 'invoice10-' + acc.toString();
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  if (acc % 15 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  acc = acc + 133 - (acc % 30);
  buf += 'client14-' + acc.toString();
  acc = (acc * 31 + 7392) % 65521;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 66) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'balance19-' + acc.toString();
  acc = acc + 548 - (acc % 82);
  acc = acc + 473 - (acc % 28);
  acc = acc + 270 - (acc % 58);
  try { if (acc % 29 === 4) { throw new Error('synthetic-23'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k24', acc % 997);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 60) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += 'batch27-' + acc.toString();
  acc = (acc * 31 + 731) % 65521;
  if (acc % 10 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  if (acc % 18 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 167) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 5471) % 65521;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 29) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  acc = acc + 305 - (acc % 18);
  if (acc % 5 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const ix40: number = buf.indexOf('p15');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8777) % 65521;
  const ix42: number = buf.indexOf('p15');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  if (acc % 10 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  for (let i44 = 0; i44 < 11; i44++) {
    acc = (acc + i44 * 13 + 874) % 100003;
  }
  acc = (acc * 31 + 3926) % 65521;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = acc + 122 - (acc % 89);
  arr.push(acc % 1000);
  const ix49: number = buf.indexOf('p15');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  for (let i50 = 0; i50 < 9; i50++) {
    acc = (acc + i50 * 13 + 358) % 100003;
  }
  for (let i51 = 0; i51 < 3; i51++) {
    acc = (acc + i51 * 13 + 898) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2004) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  acc = (acc * 31 + 6684) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  buf += 'freight3-' + acc.toString();
  if (acc % 5 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  m01.set('k6', acc % 997);
  const ix7: number = buf.indexOf('p15');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  acc = acc + 210 - (acc % 75);
  acc = (acc * 31 + 9759) % 65521;
  acc = (acc * 31 + 3128) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-11'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 19) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 27) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec15 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  m01.set('k20', acc % 997);
  acc = acc + 686 - (acc % 63);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 17) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  for (let i23 = 0; i23 < 9; i23++) {
    acc = (acc + i23 * 13 + 539) % 100003;
  }
  arr.push(acc % 1000);
  for (let i25 = 0; i25 < 9; i25++) {
    acc = (acc + i25 * 13 + 318) % 100003;
  }
  acc = acc + 917 - (acc % 17);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 20) { throw new Error('synthetic-28'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i29 = 0; i29 < 10; i29++) {
    acc = (acc + i29 * 13 + 51) % 100003;
  }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 192) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = acc + 140 - (acc % 69);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-33'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 157) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  for (let i36 = 0; i36 < 10; i36++) {
    acc = (acc + i36 * 13 + 303) % 100003;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-37'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-39'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-40'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-41'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const ix42: number = buf.indexOf('p15');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1528) % 65521;
  buf += `q45:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const ix47: number = buf.indexOf('p15');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  acc = (acc * 31 + 7350) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const rc51: Rec15 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0015_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0015_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0015_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2005) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  arr.push(acc % 1000);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 61) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  if (acc % 6 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  arr.push(acc % 1000);
  try { if (acc % 29 === 7) { throw new Error('synthetic-11'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'vendor12-' + acc.toString();
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 169) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  if (acc % 16 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  buf += `q20:${acc % 97}`;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  buf += `q22:${acc % 97}`;
  const rc23: Rec15 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  try { if (acc % 29 === 12) { throw new Error('synthetic-27'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 312 - (acc % 88);
  const rc29: Rec15 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = acc + 617 - (acc % 20);
  m01.set('k32', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 43) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'audit36-' + acc.toString();
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  for (let i40 = 0; i40 < 9; i40++) {
    acc = (acc + i40 * 13 + 846) % 100003;
  }
  arr.push(acc % 1000);
  acc = acc + 201 - (acc % 90);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-44'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 945 - (acc % 7);
  try { if (acc % 29 === 19) { throw new Error('synthetic-46'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 14 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  buf += 'ticket48-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const rc50: Rec15 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2006) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  if (acc % 27 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  for (let i3 = 0; i3 < 9; i3++) {
    acc = (acc + i3 * 13 + 313) % 100003;
  }
  for (let i4 = 0; i4 < 9; i4++) {
    acc = (acc + i4 * 13 + 799) % 100003;
  }
  buf += `q5:${acc % 97}`;
  const rc6: Rec15 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += 'carrier8-' + acc.toString();
  m01.set('k9', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-11'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 123) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  m01.set('k14', acc % 997);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 170) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 699 - (acc % 66);
  const rc19: Rec15 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const rc20: Rec15 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const ix21: number = buf.indexOf('p15');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const ix22: number = buf.indexOf('p15');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  const rc23: Rec15 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  buf += 'policy24-' + acc.toString();
  for (let i25 = 0; i25 < 11; i25++) {
    acc = (acc + i25 * 13 + 866) % 100003;
  }
  buf += 'sku26-' + acc.toString();
  try { if (acc % 29 === 17) { throw new Error('synthetic-27'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  m01.set('k29', acc % 997);
  buf += `q30:${acc % 97}`;
  if (acc % 24 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const ix32: number = buf.indexOf('p15');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 111) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  buf += `q40:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 16) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  buf += 'routeplan43-' + acc.toString();
  const ix44: number = buf.indexOf('p15');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const ix46: number = buf.indexOf('p15');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  try { if (acc % 29 === 18) { throw new Error('synthetic-48'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i49 = 0; i49 < 4; i49++) {
    acc = (acc + i49 * 13 + 540) % 100003;
  }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0015_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2007) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit15 = new Unit15(acc);
  try { if (acc % 29 === 3) { throw new Error('synthetic-0'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 18 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-2'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'region3-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-5'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 179) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const ix8: number = buf.indexOf('p15');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const ix9: number = buf.indexOf('p15');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  buf += `q10:${acc % 97}`;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 85) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  if (acc % 13 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  acc = acc + 849 - (acc % 67);
  acc = acc + 374 - (acc % 90);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 76) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 168) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  m01.set('k20', acc % 997);
  acc = (acc * 31 + 3176) % 65521;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const rc27: Rec15 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  for (let i28 = 0; i28 < 9; i28++) {
    acc = (acc + i28 * 13 + 460) % 100003;
  }
  const ix29: number = buf.indexOf('p15');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (acc % 24 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 136) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 64) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  if (acc % 27 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  if (acc % 15 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const ix42: number = buf.indexOf('p15');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = acc + 470 - (acc % 69);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  for (let i48 = 0; i48 < 4; i48++) {
    acc = (acc + i48 * 13 + 46) % 100003;
  }
  const ix49: number = buf.indexOf('p15');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  for (let i50 = 0; i50 < 3; i50++) {
    acc = (acc + i50 * 13 + 806) % 100003;
  }
  const ix51: number = buf.indexOf('p15');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0015(): BizFn[] {
  return [biz_0015_00, biz_0015_01, biz_0015_02, biz_0015_03, biz_0015_04, biz_0015_05, biz_0015_06, biz_0015_07, biz_0015_08, biz_0015_09, biz_0015_10, biz_0015_11, biz_0015_12, biz_0015_13, biz_0015_14, biz_0015_15, biz_0015_16, biz_0015_17, biz_0015_18, biz_0015_19, biz_0015_20, biz_0015_21, biz_0015_22, biz_0015_23, biz_0015_24, biz_0015_25, biz_0015_26, biz_0015_27, biz_0015_28, biz_0015_29, biz_0015_30, biz_0015_31, biz_0015_32, biz_0015_33, biz_0015_34, biz_0015_35, biz_0015_36, biz_0015_37, biz_0015_38, biz_0015_39, biz_0015_40, biz_0015_41, biz_0015_42];
}

export function rega_0015(): ABizFn[] {
  return [biz_0015_09a, biz_0015_19a, biz_0015_29a, biz_0015_39a];
}
