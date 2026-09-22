// Biz0029.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec29 { id: number; tag: string; score: number; }

class Unit29 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0029_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3799) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  if (acc % 5 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const ix1: number = buf.indexOf('p29');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 115) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  if (acc % 25 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-5'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  arr.push(acc % 1000);
  if (acc % 27 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  if (acc % 7 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 40) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  acc = acc + 397 - (acc % 48);
  if (acc % 14 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  for (let i15 = 0; i15 < 8; i15++) {
    acc = (acc + i15 * 13 + 922) % 100003;
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 85) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += `q20:${acc % 97}`;
  try { if (acc % 29 === 19) { throw new Error('synthetic-21'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-22'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 74) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  buf += `q25:${acc % 97}`;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = acc + 384 - (acc % 71);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  acc = (acc * 31 + 9781) % 65521;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 122) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const ix31: number = buf.indexOf('p29');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 49) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  buf += 'vendor36-' + acc.toString();
  buf += `q37:${acc % 97}`;
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  const ix39: number = buf.indexOf('p29');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += 'carrier40-' + acc.toString();
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  if (acc % 8 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const rc47: Rec29 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  acc = acc + 890 - (acc % 83);
  acc = acc + 918 - (acc % 73);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3800) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  try { if (acc % 29 === 19) { throw new Error('synthetic-0'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8229) % 65521;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += `q3:${acc % 97}`;
  buf += 'vendor4-' + acc.toString();
  buf += `q5:${acc % 97}`;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const ix7: number = buf.indexOf('p29');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  acc = acc + 242 - (acc % 37);
  acc = (acc * 31 + 4211) % 65521;
  for (let i10 = 0; i10 < 4; i10++) {
    acc = (acc + i10 * 13 + 228) % 100003;
  }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5036) % 65521;
  buf += 'freight15-' + acc.toString();
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 13) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p29');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  buf += `q23:${acc % 97}`;
  const ix24: number = buf.indexOf('p29');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7799) % 65521;
  buf += `q26:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  acc = (acc * 31 + 4284) % 65521;
  m01.set('k29', acc % 997);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 170) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  buf += 'order37-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const ix39: number = buf.indexOf('p29');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  for (let i40 = 0; i40 < 8; i40++) {
    acc = (acc + i40 * 13 + 318) % 100003;
  }
  if (acc % 29 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const rc43: Rec29 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  m01.set('k45', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const ix47: number = buf.indexOf('p29');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  for (let i49 = 0; i49 < 11; i49++) {
    acc = (acc + i49 * 13 + 170) % 100003;
  }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  buf += 'policy51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3801) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  const ix0: number = buf.indexOf('p29');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8834) % 65521;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  acc = acc + 558 - (acc % 20);
  const ix4: number = buf.indexOf('p29');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const ix5: number = buf.indexOf('p29');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 8894) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  try { if (acc % 29 === 11) { throw new Error('synthetic-10'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1049) % 65521;
  for (let i12 = 0; i12 < 11; i12++) {
    acc = (acc + i12 * 13 + 783) % 100003;
  }
  if (acc % 23 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  if (acc % 11 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 162) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 54) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  for (let i20 = 0; i20 < 8; i20++) {
    acc = (acc + i20 * 13 + 509) % 100003;
  }
  for (let i21 = 0; i21 < 8; i21++) {
    acc = (acc + i21 * 13 + 72) % 100003;
  }
  for (let i22 = 0; i22 < 9; i22++) {
    acc = (acc + i22 * 13 + 752) % 100003;
  }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  buf += `q24:${acc % 97}`;
  buf += 'rebate25-' + acc.toString();
  for (let i26 = 0; i26 < 6; i26++) {
    acc = (acc + i26 * 13 + 737) % 100003;
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const rc28: Rec29 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const rc30: Rec29 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 91) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  buf += `q36:${acc % 97}`;
  acc = acc + 968 - (acc % 70);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += 'shelf39-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-40'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 17) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 128) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix46: number = buf.indexOf('p29');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = acc + 59 - (acc % 55);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  for (let i49 = 0; i49 < 5; i49++) {
    acc = (acc + i49 * 13 + 229) % 100003;
  }
  if (acc % 7 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3802) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  acc = acc + 87 - (acc % 32);
  buf += 'parcel4-' + acc.toString();
  if (acc % 20 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const ix8: number = buf.indexOf('p29');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const ix9: number = buf.indexOf('p29');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  m01.set('k10', acc % 997);
  acc = acc + 802 - (acc % 33);
  const ix12: number = buf.indexOf('p29');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  for (let i13 = 0; i13 < 8; i13++) {
    acc = (acc + i13 * 13 + 870) % 100003;
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 24) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-18'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  if (acc % 11 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  for (let i22 = 0; i22 < 8; i22++) {
    acc = (acc + i22 * 13 + 269) % 100003;
  }
  for (let i23 = 0; i23 < 7; i23++) {
    acc = (acc + i23 * 13 + 747) % 100003;
  }
  m01.set('k24', acc % 997);
  acc = (acc * 31 + 7027) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  buf += 'dispatch30-' + acc.toString();
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 166) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  m01.set('k32', acc % 997);
  acc = (acc * 31 + 6491) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 87) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const rc37: Rec29 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  try { if (acc % 29 === 21) { throw new Error('synthetic-39'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 835 - (acc % 47);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-44'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q45:${acc % 97}`;
  try { if (acc % 29 === 14) { throw new Error('synthetic-46'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 559 - (acc % 75);
  acc = acc + 764 - (acc % 72);
  m01.set('k49', acc % 997);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-51'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3803) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  buf += `q0:${acc % 97}`;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  buf += `q2:${acc % 97}`;
  try { if (acc % 29 === 13) { throw new Error('synthetic-3'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const rc5: Rec29 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  m01.set('k7', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 627) % 65521;
  acc = (acc * 31 + 9057) % 65521;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 199) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 109) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  buf += 'freight19-' + acc.toString();
  if (acc % 7 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  buf += 'customs21-' + acc.toString();
  m01.set('k22', acc % 997);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 154) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  if (acc % 19 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const rc25: Rec29 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  if (acc % 21 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += 'customs28-' + acc.toString();
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  m01.set('k31', acc % 997);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  try { if (acc % 29 === 11) { throw new Error('synthetic-33'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 80) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec29 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  if (acc % 6 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const rc38: Rec29 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  acc = (acc * 31 + 3503) % 65521;
  arr.push(acc % 1000);
  if (acc % 7 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-44'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 184) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  try { if (acc % 29 === 10) { throw new Error('synthetic-46'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7601) % 65521;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  acc = acc + 306 - (acc % 28);
  arr.push(acc % 1000);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3804) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  for (let i1 = 0; i1 < 6; i1++) {
    acc = (acc + i1 * 13 + 276) % 100003;
  }
  acc = (acc * 31 + 9515) % 65521;
  if (acc % 9 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  m01.set('k5', acc % 997);
  const ix6: number = buf.indexOf('p29');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  acc = (acc * 31 + 2590) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  buf += `q14:${acc % 97}`;
  buf += `q15:${acc % 97}`;
  acc = (acc * 31 + 8105) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 102) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec29 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  acc = (acc * 31 + 6192) % 65521;
  if (acc % 23 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5390) % 65521;
  const ix22: number = buf.indexOf('p29');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const rc25: Rec29 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const rc27: Rec29 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  for (let i32 = 0; i32 < 7; i32++) {
    acc = (acc + i32 * 13 + 747) % 100003;
  }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 74) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'bay35-' + acc.toString();
  buf += `q36:${acc % 97}`;
  m01.set('k37', acc % 997);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  try { if (acc % 29 === 22) { throw new Error('synthetic-39'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'coupon40-' + acc.toString();
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  for (let i43 = 0; i43 < 10; i43++) {
    acc = (acc + i43 * 13 + 227) % 100003;
  }
  buf += `q44:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-45'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 79) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  acc = (acc * 31 + 3380) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 436 - (acc % 15);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3805) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  acc = (acc * 31 + 5443) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-2'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 35) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (acc % 5 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  for (let i6 = 0; i6 < 7; i6++) {
    acc = (acc + i6 * 13 + 365) % 100003;
  }
  buf += `q7:${acc % 97}`;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-11'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q12:${acc % 97}`;
  m01.set('k13', acc % 997);
  for (let i14 = 0; i14 < 7; i14++) {
    acc = (acc + i14 * 13 + 683) % 100003;
  }
  buf += `q15:${acc % 97}`;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 92) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 79) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'bay18-' + acc.toString();
  acc = (acc * 31 + 6814) % 65521;
  if (acc % 6 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  m01.set('k21', acc % 997);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 44) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const ix26: number = buf.indexOf('p29');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += 'stocktake28-' + acc.toString();
  arr.push(acc % 1000);
  if (acc % 30 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 187) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const rc36: Rec29 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  buf += 'vendor37-' + acc.toString();
  buf += 'customs38-' + acc.toString();
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 126) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = (acc * 31 + 6182) % 65521;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  try { if (acc % 29 === 12) { throw new Error('synthetic-43'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'ticket44-' + acc.toString();
  acc = (acc * 31 + 851) % 65521;
  const ix46: number = buf.indexOf('p29');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-47'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-48'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3806) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  const ix0: number = buf.indexOf('p29');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-1'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 21 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 38) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  for (let i5 = 0; i5 < 5; i5++) {
    acc = (acc + i5 * 13 + 194) % 100003;
  }
  m01.set('k6', acc % 997);
  const ix7: number = buf.indexOf('p29');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const rc8: Rec29 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const rc9: Rec29 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = acc + 235 - (acc % 76);
  try { if (acc % 29 === 8) { throw new Error('synthetic-14'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 109) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 97) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = acc + 222 - (acc % 49);
  buf += 'portal21-' + acc.toString();
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  for (let i25 = 0; i25 < 11; i25++) {
    acc = (acc + i25 * 13 + 771) % 100003;
  }
  const rc26: Rec29 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += `q27:${acc % 97}`;
  if (acc % 20 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  if (acc % 8 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  buf += `q31:${acc % 97}`;
  for (let i32 = 0; i32 < 9; i32++) {
    acc = (acc + i32 * 13 + 439) % 100003;
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 13) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 121 - (acc % 43);
  try { if (acc % 29 === 17) { throw new Error('synthetic-36'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 11 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  arr.push(acc % 1000);
  buf += `q40:${acc % 97}`;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  try { if (acc % 29 === 10) { throw new Error('synthetic-43'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q44:${acc % 97}`;
  m01.set('k45', acc % 997);
  const rc46: Rec29 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  m01.set('k47', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = (acc * 31 + 3277) % 65521;
  buf += `q50:${acc % 97}`;
  try { if (acc % 29 === 21) { throw new Error('synthetic-51'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3807) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  acc = acc + 874 - (acc % 54);
  for (let i1 = 0; i1 < 12; i1++) {
    acc = (acc + i1 * 13 + 574) % 100003;
  }
  buf += 'audit2-' + acc.toString();
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const rc5: Rec29 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  m01.set('k6', acc % 997);
  for (let i7 = 0; i7 < 3; i7++) {
    acc = (acc + i7 * 13 + 878) % 100003;
  }
  arr.push(acc % 1000);
  if (acc % 28 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 167) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const rc11: Rec29 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  if (acc % 13 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2605) % 65521;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 151) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  m01.set('k19', acc % 997);
  if (acc % 26 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = acc + 317 - (acc % 46);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  acc = acc + 757 - (acc % 90);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const rc25: Rec29 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  buf += `q27:${acc % 97}`;
  m01.set('k28', acc % 997);
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  arr.push(acc % 1000);
  const rc31: Rec29 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  m01.set('k32', acc % 997);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 190) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 50 - (acc % 37);
  if (acc % 15 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  m01.set('k37', acc % 997);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 71) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  buf += 'region39-' + acc.toString();
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 148) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  acc = acc + 705 - (acc % 25);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 19) { throw new Error('synthetic-46'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const ix47: number = buf.indexOf('p29');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const rc48: Rec29 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  m01.set('k49', acc % 997);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 85) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3808) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  m01.set('k0', acc % 997);
  for (let i1 = 0; i1 < 6; i1++) {
    acc = (acc + i1 * 13 + 628) % 100003;
  }
  const ix2: number = buf.indexOf('p29');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 172) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const ix8: number = buf.indexOf('p29');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  buf += `q9:${acc % 97}`;
  buf += `q10:${acc % 97}`;
  const ix11: number = buf.indexOf('p29');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = acc + 193 - (acc % 67);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const rc14: Rec29 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  try { if (acc % 29 === 20) { throw new Error('synthetic-15'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 145) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 62) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const ix24: number = buf.indexOf('p29');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  if (acc % 6 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  acc = acc + 604 - (acc % 93);
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = (acc * 31 + 6611) % 65521;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = acc + 991 - (acc % 76);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const rc32: Rec29 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  try { if (acc % 29 === 6) { throw new Error('synthetic-33'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 18) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 2157) % 65521;
  for (let i36 = 0; i36 < 8; i36++) {
    acc = (acc + i36 * 13 + 611) % 100003;
  }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 167) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  if (acc % 17 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const rc43: Rec29 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  const ix45: number = buf.indexOf('p29');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  acc = (acc * 31 + 879) % 65521;
  acc = (acc * 31 + 6535) % 65521;
  const rc49: Rec29 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  buf += 'dock51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0029_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0029_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0029_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3809) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  for (let i0 = 0; i0 < 10; i0++) {
    acc = (acc + i0 * 13 + 242) % 100003;
  }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  if (acc % 21 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  m01.set('k3', acc % 997);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 44) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  for (let i5 = 0; i5 < 8; i5++) {
    acc = (acc + i5 * 13 + 501) % 100003;
  }
  acc = acc + 38 - (acc % 72);
  const rc7: Rec29 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  acc = (acc * 31 + 5385) % 65521;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const ix10: number = buf.indexOf('p29');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  m01.set('k12', acc % 997);
  try { if (acc % 29 === 2) { throw new Error('synthetic-13'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i14 = 0; i14 < 4; i14++) {
    acc = (acc + i14 * 13 + 380) % 100003;
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 178) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const ix19: number = buf.indexOf('p29');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  acc = acc + 994 - (acc % 97);
  acc = acc + 602 - (acc % 74);
  arr.push(acc % 1000);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  buf += 'audit28-' + acc.toString();
  acc = acc + 282 - (acc % 61);
  buf += `q30:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  acc = (acc * 31 + 5673) % 65521;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 27) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 69) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p29');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  buf += `q36:${acc % 97}`;
  const ix37: number = buf.indexOf('p29');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  try { if (acc % 29 === 21) { throw new Error('synthetic-40'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 51) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  m01.set('k42', acc % 997);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  buf += 'ticket46-' + acc.toString();
  buf += `q47:${acc % 97}`;
  buf += 'waybill48-' + acc.toString();
  for (let i49 = 0; i49 < 10; i49++) {
    acc = (acc + i49 * 13 + 428) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  acc = (acc * 31 + 2434) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3810) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = acc + 489 - (acc % 76);
  m01.set('k4', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 19) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const ix8: number = buf.indexOf('p29');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  if (acc % 9 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  buf += 'waybill10-' + acc.toString();
  m01.set('k11', acc % 997);
  const ix12: number = buf.indexOf('p29');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 6806) % 65521;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'parcel15-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 171) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 3619) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-19'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const rc20: Rec29 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  m01.set('k21', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  try { if (acc % 29 === 22) { throw new Error('synthetic-23'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  m01.set('k25', acc % 997);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 186) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  arr.push(acc % 1000);
  for (let i33 = 0; i33 < 5; i33++) {
    acc = (acc + i33 * 13 + 333) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 180) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 106) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const rc37: Rec29 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += `q40:${acc % 97}`;
  for (let i41 = 0; i41 < 7; i41++) {
    acc = (acc + i41 * 13 + 795) % 100003;
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  m01.set('k45', acc % 997);
  if (acc % 8 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const rc47: Rec29 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += `q48:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3811) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  acc = acc + 954 - (acc % 23);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 184) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const ix4: number = buf.indexOf('p29');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-6'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  m01.set('k8', acc % 997);
  acc = acc + 761 - (acc % 62);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 160) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  acc = acc + 222 - (acc % 85);
  acc = acc + 25 - (acc % 73);
  if (acc % 13 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 98) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec29 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  try { if (acc % 29 === 18) { throw new Error('synthetic-19'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (acc % 13 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += 'carrier22-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const rc24: Rec29 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  try { if (acc % 29 === 11) { throw new Error('synthetic-25'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 73) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 7305) % 65521;
  if (acc % 12 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  if (acc % 11 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 53) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  try { if (acc % 29 === 13) { throw new Error('synthetic-40'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4149) % 65521;
  acc = (acc * 31 + 7403) % 65521;
  const rc43: Rec29 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const ix44: number = buf.indexOf('p29');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  buf += `q46:${acc % 97}`;
  if (acc % 15 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  for (let i50 = 0; i50 < 9; i50++) {
    acc = (acc + i50 * 13 + 724) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3812) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  acc = acc + 75 - (acc % 49);
  acc = acc + 433 - (acc % 85);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  const ix3: number = buf.indexOf('p29');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (acc % 7 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const rc6: Rec29 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 192) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  if (acc % 23 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9653) % 65521;
  m01.set('k10', acc % 997);
  try { if (acc % 29 === 5) { throw new Error('synthetic-11'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i12 = 0; i12 < 5; i12++) {
    acc = (acc + i12 * 13 + 550) % 100003;
  }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 91) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 155) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  buf += 'invoice19-' + acc.toString();
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 11) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 13) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  m01.set('k23', acc % 997);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 87) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  for (let i27 = 0; i27 < 6; i27++) {
    acc = (acc + i27 * 13 + 266) % 100003;
  }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const ix29: number = buf.indexOf('p29');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-32'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 156) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p29');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const ix37: number = buf.indexOf('p29');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = (acc * 31 + 9319) % 65521;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  arr.push(acc % 1000);
  const ix42: number = buf.indexOf('p29');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 118) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-44'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'invoice45-' + acc.toString();
  acc = acc + 370 - (acc % 97);
  if (acc % 27 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  m01.set('k48', acc % 997);
  acc = (acc * 31 + 7356) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-50'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3813) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  arr.push(acc % 1000);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-3'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 119) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const rc6: Rec29 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  m01.set('k8', acc % 997);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  m01.set('k10', acc % 997);
  arr.push(acc % 1000);
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 47) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-19'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k20', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  for (let i22 = 0; i22 < 10; i22++) {
    acc = (acc + i22 * 13 + 652) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 135) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  acc = (acc * 31 + 7214) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const rc29: Rec29 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const ix30: number = buf.indexOf('p29');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  m01.set('k31', acc % 997);
  acc = (acc * 31 + 7818) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-33'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 78) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  for (let i36 = 0; i36 < 12; i36++) {
    acc = (acc + i36 * 13 + 375) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 199) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 12 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const ix44: number = buf.indexOf('p29');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  buf += `q45:${acc % 97}`;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const ix47: number = buf.indexOf('p29');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const rc48: Rec29 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3814) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 131) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  m01.set('k3', acc % 997);
  const rc4: Rec29 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const ix6: number = buf.indexOf('p29');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 189) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  m01.set('k8', acc % 997);
  const rc9: Rec29 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  m01.set('k11', acc % 997);
  const ix12: number = buf.indexOf('p29');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  m01.set('k13', acc % 997);
  try { if (acc % 29 === 14) { throw new Error('synthetic-14'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 29 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-16'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 155) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  for (let i19 = 0; i19 < 10; i19++) {
    acc = (acc + i19 * 13 + 569) % 100003;
  }
  m01.set('k20', acc % 997);
  if (acc % 12 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  m01.set('k22', acc % 997);
  m01.set('k23', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  m01.set('k29', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const ix32: number = buf.indexOf('p29');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const ix33: number = buf.indexOf('p29');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 51) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 16 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 79) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  m01.set('k41', acc % 997);
  buf += 'refund42-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += `q44:${acc % 97}`;
  m01.set('k45', acc % 997);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += `q47:${acc % 97}`;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  acc = acc + 527 - (acc % 79);
  if (acc % 11 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3815) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  acc = (acc * 31 + 2773) % 65521;
  for (let i2 = 0; i2 < 8; i2++) {
    acc = (acc + i2 * 13 + 550) % 100003;
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const ix4: number = buf.indexOf('p29');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = (acc * 31 + 7749) % 65521;
  m01.set('k9', acc % 997);
  try { if (acc % 29 === 18) { throw new Error('synthetic-10'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k11', acc % 997);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  acc = (acc * 31 + 4329) % 65521;
  const rc14: Rec29 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 15) { throw new Error('synthetic-16'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 178) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'waybill18-' + acc.toString();
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  m01.set('k20', acc % 997);
  buf += 'customs21-' + acc.toString();
  if (acc % 5 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 711) % 65521;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  for (let i26 = 0; i26 < 6; i26++) {
    acc = (acc + i26 * 13 + 620) % 100003;
  }
  buf += 'crate27-' + acc.toString();
  const ix28: number = buf.indexOf('p29');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  m01.set('k29', acc % 997);
  const ix30: number = buf.indexOf('p29');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2313) % 65521;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 59) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 76) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 9743) % 65521;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += `q39:${acc % 97}`;
  buf += 'region40-' + acc.toString();
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const ix42: number = buf.indexOf('p29');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  buf += `q45:${acc % 97}`;
  for (let i46 = 0; i46 < 10; i46++) {
    acc = (acc + i46 * 13 + 38) % 100003;
  }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const ix49: number = buf.indexOf('p29');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  for (let i51 = 0; i51 < 8; i51++) {
    acc = (acc + i51 * 13 + 166) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3816) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  const rc0: Rec29 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  if (acc % 20 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  buf += 'stocktake3-' + acc.toString();
  if (acc % 20 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const rc5: Rec29 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  buf += 'waybill7-' + acc.toString();
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const rc9: Rec29 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += 'routeplan10-' + acc.toString();
  acc = (acc * 31 + 1945) % 65521;
  if (acc % 5 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  m01.set('k14', acc % 997);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const ix16: number = buf.indexOf('p29');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 135) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += 'refund20-' + acc.toString();
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const ix24: number = buf.indexOf('p29');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = acc + 731 - (acc % 7);
  buf += 'freight28-' + acc.toString();
  buf += 'dispatch29-' + acc.toString();
  for (let i30 = 0; i30 < 8; i30++) {
    acc = (acc + i30 * 13 + 675) % 100003;
  }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  acc = acc + 267 - (acc % 77);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 13) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 161) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 6; i35++) {
    acc = (acc + i35 * 13 + 823) % 100003;
  }
  acc = acc + 265 - (acc % 89);
  try { if (acc % 29 === 14) { throw new Error('synthetic-37'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q38:${acc % 97}`;
  if (acc % 28 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4033) % 65521;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-44'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 10 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const ix46: number = buf.indexOf('p29');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const rc47: Rec29 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const ix50: number = buf.indexOf('p29');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-51'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3817) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  buf += `q0:${acc % 97}`;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  for (let i3 = 0; i3 < 9; i3++) {
    acc = (acc + i3 * 13 + 413) % 100003;
  }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-7'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  const rc8: Rec29 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  m01.set('k9', acc % 997);
  m01.set('k10', acc % 997);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = (acc * 31 + 2596) % 65521;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 87) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 135) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 159) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  try { if (acc % 29 === 19) { throw new Error('synthetic-19'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  const rc20: Rec29 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = acc + 436 - (acc % 62);
  buf += `q22:${acc % 97}`;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const rc25: Rec29 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  try { if (acc % 29 === 7) { throw new Error('synthetic-26'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-28'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q29:${acc % 97}`;
  buf += 'depot30-' + acc.toString();
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  for (let i33 = 0; i33 < 9; i33++) {
    acc = (acc + i33 * 13 + 518) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 21) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  m01.set('k36', acc % 997);
  acc = (acc * 31 + 684) % 65521;
  m01.set('k38', acc % 997);
  m01.set('k39', acc % 997);
  acc = (acc * 31 + 6430) % 65521;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  buf += 'portal43-' + acc.toString();
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  if (acc % 26 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = acc + 515 - (acc % 53);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  for (let i48 = 0; i48 < 11; i48++) {
    acc = (acc + i48 * 13 + 304) % 100003;
  }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  if (acc % 7 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  acc = acc + 702 - (acc % 39);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3818) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  if (acc % 14 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const ix1: number = buf.indexOf('p29');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5723) % 65521;
  acc = (acc * 31 + 221) % 65521;
  const rc4: Rec29 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  acc = (acc * 31 + 100) % 65521;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i8 = 0; i8 < 9; i8++) {
    acc = (acc + i8 * 13 + 130) % 100003;
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = acc + 858 - (acc % 35);
  for (let i12 = 0; i12 < 12; i12++) {
    acc = (acc + i12 * 13 + 300) % 100003;
  }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  if (acc % 25 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 31) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 65) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 266 - (acc % 18);
  buf += 'batch19-' + acc.toString();
  try { if (acc % 29 === 12) { throw new Error('synthetic-20'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'coupon21-' + acc.toString();
  for (let i22 = 0; i22 < 3; i22++) {
    acc = (acc + i22 * 13 + 580) % 100003;
  }
  acc = (acc * 31 + 4306) % 65521;
  const ix24: number = buf.indexOf('p29');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  if (acc % 21 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  m01.set('k29', acc % 997);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  m01.set('k31', acc % 997);
  const rc32: Rec29 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 95) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 88) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 11 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  arr.push(acc % 1000);
  const ix39: number = buf.indexOf('p29');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += `q40:${acc % 97}`;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  arr.push(acc % 1000);
  acc = acc + 507 - (acc % 35);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = (acc * 31 + 3965) % 65521;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  arr.push(acc % 1000);
  buf += `q50:${acc % 97}`;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0029_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0029_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0029_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3819) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4499) % 65521;
  acc = acc + 184 - (acc % 8);
  const ix4: number = buf.indexOf('p29');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-5'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k6', acc % 997);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  buf += 'quota9-' + acc.toString();
  for (let i10 = 0; i10 < 5; i10++) {
    acc = (acc + i10 * 13 + 486) % 100003;
  }
  acc = acc + 702 - (acc % 70);
  for (let i12 = 0; i12 < 6; i12++) {
    acc = (acc + i12 * 13 + 221) % 100003;
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-13'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 17 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += `q15:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 30) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 169 - (acc % 29);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 161) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  buf += `q21:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  try { if (acc % 29 === 4) { throw new Error('synthetic-23'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i24 = 0; i24 < 8; i24++) {
    acc = (acc + i24 * 13 + 481) % 100003;
  }
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 34) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const ix26: number = buf.indexOf('p29');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  acc = acc + 252 - (acc % 34);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 183) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = (acc * 31 + 2799) % 65521;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 99) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 13) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'coupon35-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-38'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-39'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-43'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  for (let i45 = 0; i45 < 9; i45++) {
    acc = (acc + i45 * 13 + 307) % 100003;
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 101) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  if (acc % 29 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  buf += 'shelf48-' + acc.toString();
  m01.set('k49', acc % 997);
  const ix50: number = buf.indexOf('p29');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  for (let i51 = 0; i51 < 12; i51++) {
    acc = (acc + i51 * 13 + 584) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3820) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  const ix0: number = buf.indexOf('p29');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  if (acc % 10 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  acc = acc + 176 - (acc % 26);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 183) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  buf += `q4:${acc % 97}`;
  buf += 'bay5-' + acc.toString();
  buf += `q6:${acc % 97}`;
  acc = (acc * 31 + 5347) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  if (acc % 11 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  acc = acc + 253 - (acc % 52);
  m01.set('k13', acc % 997);
  for (let i14 = 0; i14 < 11; i14++) {
    acc = (acc + i14 * 13 + 339) % 100003;
  }
  buf += `q15:${acc % 97}`;
  const ix16: number = buf.indexOf('p29');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 83) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 16) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  buf += 'pallet25-' + acc.toString();
  acc = acc + 934 - (acc % 26);
  buf += `q27:${acc % 97}`;
  acc = (acc * 31 + 9858) % 65521;
  acc = acc + 734 - (acc % 88);
  const ix30: number = buf.indexOf('p29');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const ix32: number = buf.indexOf('p29');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-33'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 89) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const rc36: Rec29 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  m01.set('k37', acc % 997);
  m01.set('k38', acc % 997);
  for (let i39 = 0; i39 < 3; i39++) {
    acc = (acc + i39 * 13 + 488) % 100003;
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const rc42: Rec29 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  arr.push(acc % 1000);
  try { if (acc % 29 === 17) { throw new Error('synthetic-44'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = (acc * 31 + 1813) % 65521;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  m01.set('k50', acc % 997);
  acc = (acc * 31 + 106) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3821) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const rc2: Rec29 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const rc6: Rec29 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  acc = acc + 211 - (acc % 11);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  acc = (acc * 31 + 9451) % 65521;
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 707) % 100003;
  }
  acc = acc + 803 - (acc % 12);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = acc + 589 - (acc % 49);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 83) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 67) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  acc = acc + 203 - (acc % 16);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  acc = (acc * 31 + 5887) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-23'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 2507) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-25'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const ix26: number = buf.indexOf('p29');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  for (let i29 = 0; i29 < 4; i29++) {
    acc = (acc + i29 * 13 + 55) % 100003;
  }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 173) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  try { if (acc % 29 === 7) { throw new Error('synthetic-33'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 149) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'parcel35-' + acc.toString();
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const rc38: Rec29 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 7419) % 65521;
  acc = acc + 794 - (acc % 83);
  buf += `q42:${acc % 97}`;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  const ix45: number = buf.indexOf('p29');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += 'ledger47-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = acc + 978 - (acc % 93);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3822) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  buf += 'refund0-' + acc.toString();
  buf += `q1:${acc % 97}`;
  acc = acc + 780 - (acc % 47);
  const rc3: Rec29 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const ix4: number = buf.indexOf('p29');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  if (acc % 26 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (acc % 20 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  m01.set('k7', acc % 997);
  const rc8: Rec29 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = (acc * 31 + 1187) % 65521;
  acc = (acc * 31 + 8411) % 65521;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  buf += 'journey12-' + acc.toString();
  const rc13: Rec29 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  buf += 'pallet14-' + acc.toString();
  buf += 'transit15-' + acc.toString();
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 45) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 128) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const ix23: number = buf.indexOf('p29');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  buf += 'transit24-' + acc.toString();
  const rc25: Rec29 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  acc = (acc * 31 + 794) % 65521;
  const rc27: Rec29 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  acc = (acc * 31 + 3452) % 65521;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const ix31: number = buf.indexOf('p29');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 12) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 803 - (acc % 60);
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 31) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  acc = (acc * 31 + 7799) % 65521;
  if (acc % 24 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  acc = (acc * 31 + 640) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const ix44: number = buf.indexOf('p29');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  if (acc % 20 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  if (acc % 16 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const rc51: Rec29 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3823) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  if (acc % 21 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  buf += `q6:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const ix8: number = buf.indexOf('p29');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const rc9: Rec29 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 148) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  buf += 'depot12-' + acc.toString();
  try { if (acc % 29 === 15) { throw new Error('synthetic-13'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k14', acc % 997);
  acc = acc + 209 - (acc % 13);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 44) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 5321) % 65521;
  m01.set('k19', acc % 997);
  buf += `q20:${acc % 97}`;
  const ix21: number = buf.indexOf('p29');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  for (let i23 = 0; i23 < 6; i23++) {
    acc = (acc + i23 * 13 + 606) % 100003;
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  acc = (acc * 31 + 3605) % 65521;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  buf += `q29:${acc % 97}`;
  try { if (acc % 29 === 10) { throw new Error('synthetic-30'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q31:${acc % 97}`;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += 'refund36-' + acc.toString();
  buf += 'vendor37-' + acc.toString();
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  arr.push(acc % 1000);
  m01.set('k41', acc % 997);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 129) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  try { if (acc % 29 === 20) { throw new Error('synthetic-46'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i47 = 0; i47 < 4; i47++) {
    acc = (acc + i47 * 13 + 563) % 100003;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  m01.set('k50', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3824) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  if (acc % 28 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 144) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  m01.set('k5', acc % 997);
  const rc6: Rec29 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  try { if (acc % 29 === 2) { throw new Error('synthetic-7'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += 'settle9-' + acc.toString();
  acc = acc + 58 - (acc % 73);
  if (acc % 24 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  buf += `q13:${acc % 97}`;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  arr.push(acc % 1000);
  const rc16: Rec29 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 98) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'stocktake18-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  acc = (acc * 31 + 1880) % 65521;
  acc = acc + 940 - (acc % 46);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  try { if (acc % 29 === 7) { throw new Error('synthetic-26'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  for (let i28 = 0; i28 < 5; i28++) {
    acc = (acc + i28 * 13 + 879) % 100003;
  }
  buf += `q29:${acc % 97}`;
  if (acc % 18 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 96) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 12) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'order35-' + acc.toString();
  const ix36: number = buf.indexOf('p29');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  acc = acc + 412 - (acc % 91);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-39'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-40'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  acc = (acc * 31 + 7951) % 65521;
  m01.set('k45', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const ix47: number = buf.indexOf('p29');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  buf += 'audit48-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += `q50:${acc % 97}`;
  acc = acc + 687 - (acc % 53);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3825) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 89) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i2 = 0; i2 < 5; i2++) {
    acc = (acc + i2 * 13 + 389) % 100003;
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 16) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  buf += `q4:${acc % 97}`;
  arr.push(acc % 1000);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  for (let i7 = 0; i7 < 6; i7++) {
    acc = (acc + i7 * 13 + 460) % 100003;
  }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const ix9: number = buf.indexOf('p29');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  for (let i10 = 0; i10 < 10; i10++) {
    acc = (acc + i10 * 13 + 485) % 100003;
  }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q13:${acc % 97}`;
  if (acc % 15 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  for (let i15 = 0; i15 < 10; i15++) {
    acc = (acc + i15 * 13 + 374) % 100003;
  }
  acc = (acc * 31 + 2850) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 14) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const ix19: number = buf.indexOf('p29');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  for (let i20 = 0; i20 < 11; i20++) {
    acc = (acc + i20 * 13 + 475) % 100003;
  }
  acc = acc + 254 - (acc % 45);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 18) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 74 - (acc % 24);
  m01.set('k27', acc % 997);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  for (let i29 = 0; i29 < 4; i29++) {
    acc = (acc + i29 * 13 + 575) % 100003;
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  arr.push(acc % 1000);
  acc = acc + 953 - (acc % 47);
  const ix33: number = buf.indexOf('p29');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 69) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 5457) % 65521;
  if (acc % 13 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += 'routeplan37-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  if (acc % 26 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  acc = (acc * 31 + 528) % 65521;
  acc = (acc * 31 + 5847) % 65521;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  arr.push(acc % 1000);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  m01.set('k49', acc % 997);
  for (let i50 = 0; i50 < 12; i50++) {
    acc = (acc + i50 * 13 + 22) % 100003;
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-51'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3826) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  acc = acc + 261 - (acc % 10);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const rc2: Rec29 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  buf += `q3:${acc % 97}`;
  m01.set('k4', acc % 997);
  const ix5: number = buf.indexOf('p29');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const ix6: number = buf.indexOf('p29');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  arr.push(acc % 1000);
  buf += `q9:${acc % 97}`;
  const ix10: number = buf.indexOf('p29');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  for (let i13 = 0; i13 < 6; i13++) {
    acc = (acc + i13 * 13 + 541) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  for (let i16 = 0; i16 < 5; i16++) {
    acc = (acc + i16 * 13 + 344) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 133) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 49) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  buf += `q20:${acc % 97}`;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  m01.set('k22', acc % 997);
  acc = (acc * 31 + 3624) % 65521;
  buf += `q24:${acc % 97}`;
  const rc25: Rec29 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  buf += 'bay26-' + acc.toString();
  if (acc % 10 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  m01.set('k30', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 98) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  buf += 'policy36-' + acc.toString();
  const ix37: number = buf.indexOf('p29');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q39:${acc % 97}`;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  m01.set('k41', acc % 997);
  m01.set('k42', acc % 997);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 76) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const ix44: number = buf.indexOf('p29');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8390) % 65521;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  if (acc % 10 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  m01.set('k50', acc % 997);
  const ix51: number = buf.indexOf('p29');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3827) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  m01.set('k0', acc % 997);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = acc + 225 - (acc % 97);
  acc = (acc * 31 + 9518) % 65521;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 150) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  arr.push(acc % 1000);
  buf += 'transit9-' + acc.toString();
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 153) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  if (acc % 12 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 196) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  m01.set('k19', acc % 997);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  arr.push(acc % 1000);
  acc = acc + 763 - (acc % 96);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 139) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = acc + 828 - (acc % 46);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 111) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 187) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i29 = 0; i29 < 4; i29++) {
    acc = (acc + i29 * 13 + 265) % 100003;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-30'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'vendor31-' + acc.toString();
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 61) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const rc36: Rec29 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const ix37: number = buf.indexOf('p29');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const ix38: number = buf.indexOf('p29');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  acc = acc + 774 - (acc % 50);
  const rc40: Rec29 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  buf += `q41:${acc % 97}`;
  const ix42: number = buf.indexOf('p29');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  for (let i43 = 0; i43 < 10; i43++) {
    acc = (acc + i43 * 13 + 924) % 100003;
  }
  for (let i44 = 0; i44 < 11; i44++) {
    acc = (acc + i44 * 13 + 794) % 100003;
  }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  acc = (acc * 31 + 8440) % 65521;
  buf += `q47:${acc % 97}`;
  const rc48: Rec29 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  arr.push(acc % 1000);
  buf += 'payout50-' + acc.toString();
  for (let i51 = 0; i51 < 5; i51++) {
    acc = (acc + i51 * 13 + 213) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3828) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7290) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  if (acc % 31 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  if (acc % 17 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  acc = (acc * 31 + 6726) % 65521;
  const ix8: number = buf.indexOf('p29');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4975) % 65521;
  m01.set('k11', acc % 997);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const ix13: number = buf.indexOf('p29');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 186) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 24) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 25 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 47) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  for (let i20 = 0; i20 < 3; i20++) {
    acc = (acc + i20 * 13 + 314) % 100003;
  }
  buf += 'ledger21-' + acc.toString();
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 24) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const ix25: number = buf.indexOf('p29');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  for (let i27 = 0; i27 < 12; i27++) {
    acc = (acc + i27 * 13 + 155) % 100003;
  }
  const ix28: number = buf.indexOf('p29');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = acc + 115 - (acc % 60);
  buf += `q30:${acc % 97}`;
  arr.push(acc % 1000);
  buf += 'quota32-' + acc.toString();
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 11) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 126) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = (acc * 31 + 6595) % 65521;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 61) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  acc = acc + 410 - (acc % 95);
  arr.push(acc % 1000);
  acc = acc + 476 - (acc % 89);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 35) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  buf += 'audit48-' + acc.toString();
  arr.push(acc % 1000);
  buf += `q50:${acc % 97}`;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0029_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0029_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0029_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3829) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const rc1: Rec29 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 145) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const ix3: number = buf.indexOf('p29');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  for (let i4 = 0; i4 < 12; i4++) {
    acc = (acc + i4 * 13 + 767) % 100003;
  }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const ix7: number = buf.indexOf('p29');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const rc8: Rec29 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  for (let i12 = 0; i12 < 12; i12++) {
    acc = (acc + i12 * 13 + 482) % 100003;
  }
  const rc13: Rec29 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const rc14: Rec29 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 38) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += 'payout19-' + acc.toString();
  acc = acc + 305 - (acc % 15);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 183) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const rc23: Rec29 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const rc24: Rec29 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  m01.set('k26', acc % 997);
  m01.set('k27', acc % 997);
  m01.set('k28', acc % 997);
  if (acc % 31 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  acc = acc + 138 - (acc % 96);
  arr.push(acc % 1000);
  buf += 'transit32-' + acc.toString();
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 60) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 6; i35++) {
    acc = (acc + i35 * 13 + 252) % 100003;
  }
  const ix36: number = buf.indexOf('p29');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  for (let i37 = 0; i37 < 11; i37++) {
    acc = (acc + i37 * 13 + 470) % 100003;
  }
  buf += `q38:${acc % 97}`;
  m01.set('k39', acc % 997);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 146) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 182) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  acc = (acc * 31 + 1103) % 65521;
  acc = acc + 384 - (acc % 96);
  if (acc % 29 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  arr.push(acc % 1000);
  buf += 'customs49-' + acc.toString();
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 11) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  for (let i51 = 0; i51 < 11; i51++) {
    acc = (acc + i51 * 13 + 882) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3830) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  buf += 'ticket2-' + acc.toString();
  if (acc % 11 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const ix5: number = buf.indexOf('p29');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  buf += 'refund6-' + acc.toString();
  acc = acc + 588 - (acc % 62);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  buf += 'freight9-' + acc.toString();
  m01.set('k10', acc % 997);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  if (acc % 15 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  acc = (acc * 31 + 7839) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 103) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec29 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  acc = acc + 506 - (acc % 57);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k25', acc % 997);
  const ix26: number = buf.indexOf('p29');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  const ix28: number = buf.indexOf('p29');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  arr.push(acc % 1000);
  const ix31: number = buf.indexOf('p29');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  m01.set('k32', acc % 997);
  if (acc % 16 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 164) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const ix37: number = buf.indexOf('p29');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (acc % 28 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 172) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  try { if (acc % 29 === 18) { throw new Error('synthetic-40'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  m01.set('k43', acc % 997);
  const rc44: Rec29 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  if (acc % 19 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 162) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-50'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 28 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3831) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  acc = (acc * 31 + 7091) % 65521;
  for (let i1 = 0; i1 < 12; i1++) {
    acc = (acc + i1 * 13 + 479) % 100003;
  }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  buf += 'parcel3-' + acc.toString();
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 197) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += `q5:${acc % 97}`;
  for (let i6 = 0; i6 < 4; i6++) {
    acc = (acc + i6 * 13 + 291) % 100003;
  }
  const rc7: Rec29 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  m01.set('k10', acc % 997);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  if (acc % 13 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 165) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k15', acc % 997);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 35) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec29 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const rc19: Rec29 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  m01.set('k21', acc % 997);
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const rc23: Rec29 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  try { if (acc % 29 === 4) { throw new Error('synthetic-24'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += `q27:${acc % 97}`;
  if (acc % 14 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  m01.set('k29', acc % 997);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  try { if (acc % 29 === 9) { throw new Error('synthetic-32'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9319) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 70) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 31 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  buf += `q37:${acc % 97}`;
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  const rc40: Rec29 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const rc41: Rec29 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  if (acc % 8 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  buf += `q44:${acc % 97}`;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const ix46: number = buf.indexOf('p29');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = acc + 986 - (acc % 97);
  for (let i48 = 0; i48 < 5; i48++) {
    acc = (acc + i48 * 13 + 971) % 100003;
  }
  arr.push(acc % 1000);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3832) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  arr.push(acc % 1000);
  m01.set('k1', acc % 997);
  const ix2: number = buf.indexOf('p29');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const ix4: number = buf.indexOf('p29');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const rc5: Rec29 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 194) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  for (let i9 = 0; i9 < 9; i9++) {
    acc = (acc + i9 * 13 + 223) % 100003;
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  buf += 'dispatch14-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 96) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p29');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4998) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-20'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i21 = 0; i21 < 6; i21++) {
    acc = (acc + i21 * 13 + 224) % 100003;
  }
  const rc22: Rec29 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  for (let i23 = 0; i23 < 3; i23++) {
    acc = (acc + i23 * 13 + 631) % 100003;
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-27'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const ix28: number = buf.indexOf('p29');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const rc30: Rec29 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += 'quota31-' + acc.toString();
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const rc33: Rec29 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 43) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 3616) % 65521;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 32) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 14 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  try { if (acc % 29 === 5) { throw new Error('synthetic-43'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k44', acc % 997);
  try { if (acc % 29 === 23) { throw new Error('synthetic-45'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 113) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = acc + 306 - (acc % 66);
  const ix49: number = buf.indexOf('p29');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3833) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const ix3: number = buf.indexOf('p29');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  try { if (acc % 29 === 5) { throw new Error('synthetic-6'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 12 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const ix9: number = buf.indexOf('p29');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  acc = acc + 965 - (acc % 63);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 198) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  buf += 'pallet21-' + acc.toString();
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  if (acc % 15 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  for (let i24 = 0; i24 < 9; i24++) {
    acc = (acc + i24 * 13 + 555) % 100003;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-25'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const rc27: Rec29 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  m01.set('k28', acc % 997);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  buf += `q30:${acc % 97}`;
  buf += 'customs31-' + acc.toString();
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const ix33: number = buf.indexOf('p29');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 53) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 5729) % 65521;
  for (let i36 = 0; i36 < 10; i36++) {
    acc = (acc + i36 * 13 + 435) % 100003;
  }
  if (acc % 28 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (acc % 13 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  buf += 'coupon46-' + acc.toString();
  const rc47: Rec29 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  m01.set('k48', acc % 997);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  m01.set('k50', acc % 997);
  try { if (acc % 29 === 20) { throw new Error('synthetic-51'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3834) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  try { if (acc % 29 === 16) { throw new Error('synthetic-0'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  buf += 'freight2-' + acc.toString();
  const rc3: Rec29 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 166) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const ix5: number = buf.indexOf('p29');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  buf += 'dispatch7-' + acc.toString();
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 17) { throw new Error('synthetic-14'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const rc15: Rec29 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  try { if (acc % 29 === 8) { throw new Error('synthetic-16'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 40) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'client18-' + acc.toString();
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 196) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  for (let i21 = 0; i21 < 3; i21++) {
    acc = (acc + i21 * 13 + 814) % 100003;
  }
  const ix22: number = buf.indexOf('p29');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 69) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  buf += `q25:${acc % 97}`;
  m01.set('k26', acc % 997);
  acc = (acc * 31 + 6597) % 65521;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 110) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  m01.set('k29', acc % 997);
  if (acc % 18 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  buf += 'rebate31-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 45) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  buf += 'depot36-' + acc.toString();
  const ix37: number = buf.indexOf('p29');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  buf += 'parcel40-' + acc.toString();
  buf += `q41:${acc % 97}`;
  acc = acc + 106 - (acc % 40);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 157) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const rc47: Rec29 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const ix49: number = buf.indexOf('p29');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 6927) % 65521;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 198) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3835) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  const rc0: Rec29 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const ix1: number = buf.indexOf('p29');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  for (let i3 = 0; i3 < 12; i3++) {
    acc = (acc + i3 * 13 + 697) % 100003;
  }
  if (acc % 5 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  acc = acc + 789 - (acc % 38);
  const rc6: Rec29 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  m01.set('k7', acc % 997);
  if (acc % 15 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-9'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i10 = 0; i10 < 11; i10++) {
    acc = (acc + i10 * 13 + 227) % 100003;
  }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const rc12: Rec29 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const ix13: number = buf.indexOf('p29');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  acc = acc + 724 - (acc % 80);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 184) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  for (let i20 = 0; i20 < 8; i20++) {
    acc = (acc + i20 * 13 + 820) % 100003;
  }
  const ix21: number = buf.indexOf('p29');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 135) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  arr.push(acc % 1000);
  const ix27: number = buf.indexOf('p29');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  if (acc % 24 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  arr.push(acc % 1000);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  acc = (acc * 31 + 9204) % 65521;
  buf += 'carrier33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 37) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  arr.push(acc % 1000);
  buf += 'depot37-' + acc.toString();
  acc = acc + 109 - (acc % 93);
  const ix39: number = buf.indexOf('p29');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4204) % 65521;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  arr.push(acc % 1000);
  if (acc % 12 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  if (acc % 29 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  m01.set('k46', acc % 997);
  for (let i47 = 0; i47 < 11; i47++) {
    acc = (acc + i47 * 13 + 561) % 100003;
  }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  acc = acc + 500 - (acc % 8);
  try { if (acc % 29 === 4) { throw new Error('synthetic-51'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3836) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  buf += `q0:${acc % 97}`;
  m01.set('k1', acc % 997);
  arr.push(acc % 1000);
  acc = (acc * 31 + 4924) % 65521;
  const rc4: Rec29 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  buf += 'routeplan5-' + acc.toString();
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 30) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 35) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  m01.set('k12', acc % 997);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  for (let i16 = 0; i16 < 3; i16++) {
    acc = (acc + i16 * 13 + 694) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 69) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const rc19: Rec29 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  for (let i21 = 0; i21 < 8; i21++) {
    acc = (acc + i21 * 13 + 426) % 100003;
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  for (let i23 = 0; i23 < 6; i23++) {
    acc = (acc + i23 * 13 + 844) % 100003;
  }
  const rc24: Rec29 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 83) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  try { if (acc % 29 === 7) { throw new Error('synthetic-26'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'policy27-' + acc.toString();
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 112) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 56) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  buf += `q31:${acc % 97}`;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  if (acc % 31 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 156) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 2680) % 65521;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  if (acc % 8 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  for (let i38 = 0; i38 < 12; i38++) {
    acc = (acc + i38 * 13 + 99) % 100003;
  }
  m01.set('k39', acc % 997);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (acc % 10 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  for (let i45 = 0; i45 < 12; i45++) {
    acc = (acc + i45 * 13 + 853) % 100003;
  }
  acc = acc + 287 - (acc % 52);
  for (let i47 = 0; i47 < 12; i47++) {
    acc = (acc + i47 * 13 + 395) % 100003;
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-48'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i49 = 0; i49 < 9; i49++) {
    acc = (acc + i49 * 13 + 996) % 100003;
  }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3837) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  if (acc % 22 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-1'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 27) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  m01.set('k4', acc % 997);
  const rc5: Rec29 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (acc % 7 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  if (acc % 6 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  arr.push(acc % 1000);
  try { if (acc % 29 === 6) { throw new Error('synthetic-14'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 58) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'parcel18-' + acc.toString();
  const ix19: number = buf.indexOf('p29');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  m01.set('k21', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const ix23: number = buf.indexOf('p29');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-24'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i25 = 0; i25 < 7; i25++) {
    acc = (acc + i25 * 13 + 56) % 100003;
  }
  acc = acc + 386 - (acc % 71);
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const rc28: Rec29 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const ix30: number = buf.indexOf('p29');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-36'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 22 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-38'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-39'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4925) % 65521;
  buf += 'stocktake41-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  m01.set('k43', acc % 997);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 26) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const rc45: Rec29 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  acc = (acc * 31 + 7631) % 65521;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = (acc * 31 + 874) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3838) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  arr.push(acc % 1000);
  acc = (acc * 31 + 7712) % 65521;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  m01.set('k4', acc % 997);
  m01.set('k5', acc % 997);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 175) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const ix8: number = buf.indexOf('p29');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  if (acc % 23 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 13) { throw new Error('synthetic-12'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  try { if (acc % 29 === 19) { throw new Error('synthetic-15'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 154) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4993) % 65521;
  acc = (acc * 31 + 3953) % 65521;
  buf += 'journey22-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-25'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 146) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const ix31: number = buf.indexOf('p29');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = acc + 167 - (acc % 69);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 109) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  try { if (acc % 29 === 17) { throw new Error('synthetic-36'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'parcel37-' + acc.toString();
  arr.push(acc % 1000);
  buf += `q39:${acc % 97}`;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const ix41: number = buf.indexOf('p29');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const ix42: number = buf.indexOf('p29');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const ix44: number = buf.indexOf('p29');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k48', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0029_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0029_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0029_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3839) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  const ix0: number = buf.indexOf('p29');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  const ix1: number = buf.indexOf('p29');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += 'audit3-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  for (let i5 = 0; i5 < 7; i5++) {
    acc = (acc + i5 * 13 + 820) % 100003;
  }
  m01.set('k6', acc % 997);
  const rc7: Rec29 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  if (acc % 26 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const ix10: number = buf.indexOf('p29');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  buf += `q11:${acc % 97}`;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 145) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  try { if (acc % 29 === 20) { throw new Error('synthetic-20'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k21', acc % 997);
  arr.push(acc % 1000);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  buf += 'shelf24-' + acc.toString();
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  acc = acc + 190 - (acc % 49);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  for (let i31 = 0; i31 < 5; i31++) {
    acc = (acc + i31 * 13 + 235) % 100003;
  }
  m01.set('k32', acc % 997);
  const ix33: number = buf.indexOf('p29');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 173) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const rc38: Rec29 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 15) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const ix40: number = buf.indexOf('p29');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  if (acc % 28 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  acc = (acc * 31 + 9999) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-46'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'waybill47-' + acc.toString();
  m01.set('k48', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const ix50: number = buf.indexOf('p29');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  for (let i51 = 0; i51 < 12; i51++) {
    acc = (acc + i51 * 13 + 709) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3840) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  acc = acc + 868 - (acc % 95);
  if (acc % 26 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  acc = acc + 539 - (acc % 75);
  buf += 'invoice6-' + acc.toString();
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  if (acc % 8 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  buf += 'journey10-' + acc.toString();
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 115) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += 'stocktake15-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 15) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 117) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  const rc20: Rec29 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 27) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  acc = (acc * 31 + 176) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-29'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const rc32: Rec29 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 116) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  arr.push(acc % 1000);
  acc = acc + 553 - (acc % 47);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  m01.set('k40', acc % 997);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const rc42: Rec29 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  m01.set('k44', acc % 997);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 149) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 10) { throw new Error('synthetic-47'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'transit48-' + acc.toString();
  acc = (acc * 31 + 8383) % 65521;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 125) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0029_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3841) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit29 = new Unit29(acc);
  buf += 'waybill0-' + acc.toString();
  acc = acc + 650 - (acc % 53);
  try { if (acc % 29 === 9) { throw new Error('synthetic-2'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += 'freight4-' + acc.toString();
  acc = (acc * 31 + 4554) % 65521;
  if (acc % 28 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 173) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  try { if (acc % 29 === 16) { throw new Error('synthetic-9'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  acc = acc + 785 - (acc % 70);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  for (let i13 = 0; i13 < 10; i13++) {
    acc = (acc + i13 * 13 + 508) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 35) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  acc = (acc * 31 + 7036) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  acc = (acc * 31 + 6677) % 65521;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 54) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const rc31: Rec29 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  m01.set('k32', acc % 997);
  acc = (acc * 31 + 821) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 176) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  acc = (acc * 31 + 1300) % 65521;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 187) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  m01.set('k40', acc % 997);
  acc = acc + 317 - (acc % 37);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  for (let i43 = 0; i43 < 8; i43++) {
    acc = (acc + i43 * 13 + 303) % 100003;
  }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 67) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const ix45: number = buf.indexOf('p29');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const rc47: Rec29 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0029(): BizFn[] {
  return [biz_0029_00, biz_0029_01, biz_0029_02, biz_0029_03, biz_0029_04, biz_0029_05, biz_0029_06, biz_0029_07, biz_0029_08, biz_0029_09, biz_0029_10, biz_0029_11, biz_0029_12, biz_0029_13, biz_0029_14, biz_0029_15, biz_0029_16, biz_0029_17, biz_0029_18, biz_0029_19, biz_0029_20, biz_0029_21, biz_0029_22, biz_0029_23, biz_0029_24, biz_0029_25, biz_0029_26, biz_0029_27, biz_0029_28, biz_0029_29, biz_0029_30, biz_0029_31, biz_0029_32, biz_0029_33, biz_0029_34, biz_0029_35, biz_0029_36, biz_0029_37, biz_0029_38, biz_0029_39, biz_0029_40, biz_0029_41, biz_0029_42];
}

export function rega_0029(): ABizFn[] {
  return [biz_0029_09a, biz_0029_19a, biz_0029_29a, biz_0029_39a];
}
