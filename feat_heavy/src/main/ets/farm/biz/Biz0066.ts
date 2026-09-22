// Biz0066.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec66 { id: number; tag: string; score: number; }

class Unit66 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0066_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8646) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  acc = (acc * 31 + 1065) % 65521;
  acc = acc + 626 - (acc % 90);
  buf += 'rebate2-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = acc + 555 - (acc % 28);
  for (let i5 = 0; i5 < 7; i5++) {
    acc = (acc + i5 * 13 + 122) % 100003;
  }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  m01.set('k7', acc % 997);
  try { if (acc % 29 === 13) { throw new Error('synthetic-8'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const rc10: Rec66 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = (acc * 31 + 3025) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = (acc * 31 + 702) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  try { if (acc % 29 === 16) { throw new Error('synthetic-16'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 91) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 10) { throw new Error('synthetic-18'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  arr.push(acc % 1000);
  acc = acc + 310 - (acc % 68);
  try { if (acc % 29 === 23) { throw new Error('synthetic-22'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q23:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  buf += 'pallet25-' + acc.toString();
  acc = acc + 318 - (acc % 31);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  for (let i28 = 0; i28 < 6; i28++) {
    acc = (acc + i28 * 13 + 797) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-30'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  buf += `q32:${acc % 97}`;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 111) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec66 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const rc37: Rec66 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  for (let i38 = 0; i38 < 8; i38++) {
    acc = (acc + i38 * 13 + 294) % 100003;
  }
  m01.set('k39', acc % 997);
  try { if (acc % 29 === 16) { throw new Error('synthetic-40'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 29 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-42'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8093) % 65521;
  buf += `q44:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7785) % 65521;
  acc = acc + 113 - (acc % 88);
  arr.push(acc % 1000);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-51'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8647) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  arr.push(acc % 1000);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  for (let i2 = 0; i2 < 7; i2++) {
    acc = (acc + i2 * 13 + 660) % 100003;
  }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  buf += `q4:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  acc = (acc * 31 + 7037) % 65521;
  const rc9: Rec66 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  acc = acc + 980 - (acc % 44);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const rc15: Rec66 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 148) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 166) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = (acc * 31 + 3178) % 65521;
  const rc21: Rec66 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const ix26: number = buf.indexOf('p66');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 188) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-29'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const rc30: Rec66 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (acc % 26 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 102) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 151) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  buf += 'journey37-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 52) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const rc44: Rec66 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += 'pickup48-' + acc.toString();
  buf += 'depot49-' + acc.toString();
  acc = acc + 48 - (acc % 18);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8648) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  if (acc % 5 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const rc4: Rec66 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = (acc * 31 + 5109) % 65521;
  for (let i8 = 0; i8 < 10; i8++) {
    acc = (acc + i8 * 13 + 485) % 100003;
  }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  for (let i10 = 0; i10 < 3; i10++) {
    acc = (acc + i10 * 13 + 455) % 100003;
  }
  acc = acc + 59 - (acc % 18);
  const ix12: number = buf.indexOf('p66');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  m01.set('k13', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  if (acc % 21 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 109) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (acc % 5 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  m01.set('k21', acc % 997);
  const rc22: Rec66 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const ix23: number = buf.indexOf('p66');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  acc = acc + 755 - (acc % 55);
  buf += 'freight25-' + acc.toString();
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  buf += `q29:${acc % 97}`;
  try { if (acc % 29 === 22) { throw new Error('synthetic-30'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 953 - (acc % 7);
  const ix32: number = buf.indexOf('p66');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 43) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 122) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  try { if (acc % 29 === 22) { throw new Error('synthetic-36'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  m01.set('k38', acc % 997);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  if (acc % 10 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  arr.push(acc % 1000);
  try { if (acc % 29 === 15) { throw new Error('synthetic-43'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i44 = 0; i44 < 8; i44++) {
    acc = (acc + i44 * 13 + 747) % 100003;
  }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 57) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const ix46: number = buf.indexOf('p66');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  for (let i47 = 0; i47 < 8; i47++) {
    acc = (acc + i47 * 13 + 989) % 100003;
  }
  m01.set('k48', acc % 997);
  if (acc % 5 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  const ix50: number = buf.indexOf('p66');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  acc = acc + 63 - (acc % 9);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8649) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  try { if (acc % 29 === 7) { throw new Error('synthetic-0'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 73) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  if (acc % 8 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8740) % 65521;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  for (let i7 = 0; i7 < 7; i7++) {
    acc = (acc + i7 * 13 + 257) % 100003;
  }
  const ix8: number = buf.indexOf('p66');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const rc10: Rec66 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  arr.push(acc % 1000);
  const rc13: Rec66 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  for (let i16 = 0; i16 < 10; i16++) {
    acc = (acc + i16 * 13 + 440) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 29) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 83) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 156) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  buf += 'payout21-' + acc.toString();
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  const ix23: number = buf.indexOf('p66');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  acc = (acc * 31 + 3172) % 65521;
  m01.set('k26', acc % 997);
  acc = acc + 464 - (acc % 59);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 114) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const ix29: number = buf.indexOf('p66');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  m01.set('k30', acc % 997);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  acc = (acc * 31 + 2948) % 65521;
  if (acc % 12 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 30) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 49) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  buf += 'payout36-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const rc38: Rec66 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  if (acc % 16 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  m01.set('k40', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  try { if (acc % 29 === 8) { throw new Error('synthetic-42'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const ix43: number = buf.indexOf('p66');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-44'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 134) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  acc = (acc * 31 + 9473) % 65521;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8650) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  const rc0: Rec66 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const rc1: Rec66 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  arr.push(acc % 1000);
  m01.set('k5', acc % 997);
  acc = (acc * 31 + 7428) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  m01.set('k10', acc % 997);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 86) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const rc16: Rec66 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 181) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q22:${acc % 97}`;
  m01.set('k23', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  acc = acc + 723 - (acc % 27);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const rc27: Rec66 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  if (acc % 30 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7730) % 65521;
  buf += 'transit30-' + acc.toString();
  buf += 'dock31-' + acc.toString();
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  acc = acc + 60 - (acc % 56);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 66) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const rc39: Rec66 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  if (acc % 13 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 29) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const ix44: number = buf.indexOf('p66');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  for (let i45 = 0; i45 < 7; i45++) {
    acc = (acc + i45 * 13 + 286) % 100003;
  }
  if (acc % 20 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  m01.set('k50', acc % 997);
  acc = acc + 731 - (acc % 29);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8651) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  for (let i3 = 0; i3 < 6; i3++) {
    acc = (acc + i3 * 13 + 767) % 100003;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-4'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const rc5: Rec66 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += `q6:${acc % 97}`;
  buf += 'tariff7-' + acc.toString();
  acc = (acc * 31 + 8869) % 65521;
  const rc9: Rec66 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 112) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  m01.set('k11', acc % 997);
  if (acc % 21 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  m01.set('k14', acc % 997);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  if (acc % 15 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 179) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p66');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  m01.set('k23', acc % 997);
  const rc24: Rec66 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const ix26: number = buf.indexOf('p66');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5812) % 65521;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 104) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = acc + 318 - (acc % 90);
  acc = acc + 647 - (acc % 21);
  if (acc % 23 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 33) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  acc = (acc * 31 + 8596) % 65521;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  if (acc % 9 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-42'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 27 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const ix44: number = buf.indexOf('p66');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 78) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 180) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-47'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const rc48: Rec66 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8652) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  buf += `q0:${acc % 97}`;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  try { if (acc % 29 === 3) { throw new Error('synthetic-4'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  if (acc % 17 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  arr.push(acc % 1000);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  acc = (acc * 31 + 3556) % 65521;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  for (let i13 = 0; i13 < 5; i13++) {
    acc = (acc + i13 * 13 + 318) % 100003;
  }
  buf += 'batch14-' + acc.toString();
  arr.push(acc % 1000);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 100) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  acc = acc + 953 - (acc % 61);
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  buf += `q25:${acc % 97}`;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 40) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  acc = acc + 486 - (acc % 20);
  try { if (acc % 29 === 19) { throw new Error('synthetic-29'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-32'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 50) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  const ix36: number = buf.indexOf('p66');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += 'customs37-' + acc.toString();
  acc = (acc * 31 + 9747) % 65521;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  m01.set('k40', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += `q42:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (acc % 27 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = acc + 374 - (acc % 84);
  arr.push(acc % 1000);
  const rc48: Rec66 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8653) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  m01.set('k1', acc % 997);
  const ix2: number = buf.indexOf('p66');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  for (let i3 = 0; i3 < 7; i3++) {
    acc = (acc + i3 * 13 + 161) % 100003;
  }
  const ix4: number = buf.indexOf('p66');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  for (let i5 = 0; i5 < 9; i5++) {
    acc = (acc + i5 * 13 + 771) % 100003;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-6'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7291) % 65521;
  buf += `q8:${acc % 97}`;
  acc = acc + 105 - (acc % 23);
  if (acc % 28 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  if (acc % 26 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  acc = acc + 706 - (acc % 62);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  m01.set('k14', acc % 997);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  buf += 'invoice16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 33) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'ticket18-' + acc.toString();
  try { if (acc % 29 === 14) { throw new Error('synthetic-19'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  for (let i21 = 0; i21 < 7; i21++) {
    acc = (acc + i21 * 13 + 762) % 100003;
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  m01.set('k24', acc % 997);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 40) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  acc = (acc * 31 + 8738) % 65521;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 185) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  buf += `q30:${acc % 97}`;
  const ix31: number = buf.indexOf('p66');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 100) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  acc = acc + 680 - (acc % 53);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 46) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += 'portal40-' + acc.toString();
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  m01.set('k45', acc % 997);
  acc = acc + 718 - (acc % 94);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  for (let i48 = 0; i48 < 9; i48++) {
    acc = (acc + i48 * 13 + 768) % 100003;
  }
  buf += 'tariff49-' + acc.toString();
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8654) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 156) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  acc = (acc * 31 + 3064) % 65521;
  m01.set('k3', acc % 997);
  m01.set('k4', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const ix6: number = buf.indexOf('p66');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 31) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  arr.push(acc % 1000);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  buf += `q11:${acc % 97}`;
  m01.set('k12', acc % 997);
  buf += `q13:${acc % 97}`;
  if (acc % 26 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  acc = acc + 465 - (acc % 59);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 52) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = acc + 240 - (acc % 52);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 133) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  m01.set('k22', acc % 997);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  acc = acc + 711 - (acc % 57);
  try { if (acc % 29 === 14) { throw new Error('synthetic-26'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 25) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  acc = (acc * 31 + 9276) % 65521;
  acc = (acc * 31 + 5714) % 65521;
  buf += `q30:${acc % 97}`;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  for (let i33 = 0; i33 < 3; i33++) {
    acc = (acc + i33 * 13 + 238) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 133) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 31 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += 'dispatch38-' + acc.toString();
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  try { if (acc % 29 === 23) { throw new Error('synthetic-40'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3378) % 65521;
  m01.set('k44', acc % 997);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const rc48: Rec66 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const ix49: number = buf.indexOf('p66');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 42) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8655) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  if (acc % 11 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  if (acc % 11 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  buf += 'policy3-' + acc.toString();
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  buf += `q5:${acc % 97}`;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  acc = (acc * 31 + 175) % 65521;
  acc = (acc * 31 + 8416) % 65521;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-12'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const rc15: Rec66 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 116) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  buf += `q20:${acc % 97}`;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 9) { throw new Error('synthetic-24'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 13 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7054) % 65521;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  acc = acc + 350 - (acc % 82);
  m01.set('k31', acc % 997);
  try { if (acc % 29 === 2) { throw new Error('synthetic-32'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3840) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 124) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 9345) % 65521;
  acc = (acc * 31 + 3513) % 65521;
  arr.push(acc % 1000);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 31) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 119) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  m01.set('k41', acc % 997);
  buf += `q42:${acc % 97}`;
  buf += 'pickup43-' + acc.toString();
  buf += `q44:${acc % 97}`;
  for (let i45 = 0; i45 < 6; i45++) {
    acc = (acc + i45 * 13 + 98) % 100003;
  }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  buf += `q47:${acc % 97}`;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 12) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  if (acc % 26 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  acc = acc + 550 - (acc % 15);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0066_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0066_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0066_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8656) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  buf += 'transit0-' + acc.toString();
  const ix1: number = buf.indexOf('p66');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += `q3:${acc % 97}`;
  const ix4: number = buf.indexOf('p66');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = acc + 437 - (acc % 72);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 77) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-8'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 834 - (acc % 21);
  for (let i10 = 0; i10 < 7; i10++) {
    acc = (acc + i10 * 13 + 27) % 100003;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-11'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i12 = 0; i12 < 8; i12++) {
    acc = (acc + i12 * 13 + 706) % 100003;
  }
  buf += 'batch13-' + acc.toString();
  acc = (acc * 31 + 7549) % 65521;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 163) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const ix22: number = buf.indexOf('p66');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  arr.push(acc % 1000);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2121) % 65521;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 36) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 142) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  for (let i38 = 0; i38 < 9; i38++) {
    acc = (acc + i38 * 13 + 11) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  m01.set('k40', acc % 997);
  if (acc % 21 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const ix42: number = buf.indexOf('p66');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += 'settle44-' + acc.toString();
  try { if (acc % 29 === 13) { throw new Error('synthetic-45'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-46'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 89) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  m01.set('k48', acc % 997);
  acc = acc + 682 - (acc % 90);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8657) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  m01.set('k0', acc % 997);
  m01.set('k1', acc % 997);
  buf += `q2:${acc % 97}`;
  if (acc % 23 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-4'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  buf += `q6:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = acc + 332 - (acc % 77);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 42) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  buf += `q10:${acc % 97}`;
  try { if (acc % 29 === 6) { throw new Error('synthetic-11'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 135) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 20 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += `q15:${acc % 97}`;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 31) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 83) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const ix19: number = buf.indexOf('p66');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-20'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  buf += `q22:${acc % 97}`;
  m01.set('k23', acc % 997);
  arr.push(acc % 1000);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 186) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += `q26:${acc % 97}`;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  if (acc % 9 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  acc = acc + 996 - (acc % 26);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const rc32: Rec66 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const rc33: Rec66 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 59) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const ix36: number = buf.indexOf('p66');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  buf += 'rebate42-' + acc.toString();
  m01.set('k43', acc % 997);
  try { if (acc % 29 === 2) { throw new Error('synthetic-44'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k45', acc % 997);
  try { if (acc % 29 === 18) { throw new Error('synthetic-46'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k47', acc % 997);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 26) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const ix51: number = buf.indexOf('p66');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8658) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  for (let i0 = 0; i0 < 12; i0++) {
    acc = (acc + i0 * 13 + 267) % 100003;
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  m01.set('k3', acc % 997);
  try { if (acc % 29 === 17) { throw new Error('synthetic-4'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'rebate5-' + acc.toString();
  acc = (acc * 31 + 4400) % 65521;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const ix8: number = buf.indexOf('p66');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const rc10: Rec66 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  for (let i12 = 0; i12 < 8; i12++) {
    acc = (acc + i12 * 13 + 53) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  for (let i14 = 0; i14 < 10; i14++) {
    acc = (acc + i14 * 13 + 39) % 100003;
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 138) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 225 - (acc % 91);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  try { if (acc % 29 === 14) { throw new Error('synthetic-20'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i21 = 0; i21 < 7; i21++) {
    acc = (acc + i21 * 13 + 958) % 100003;
  }
  const ix22: number = buf.indexOf('p66');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  const ix23: number = buf.indexOf('p66');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  buf += 'ledger24-' + acc.toString();
  if (acc % 17 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  buf += `q26:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  try { if (acc % 29 === 9) { throw new Error('synthetic-28'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const rc29: Rec66 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 180) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  buf += 'audit33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 110) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  for (let i36 = 0; i36 < 7; i36++) {
    acc = (acc + i36 * 13 + 844) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (acc % 17 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (acc % 21 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  buf += `q41:${acc % 97}`;
  for (let i42 = 0; i42 < 4; i42++) {
    acc = (acc + i42 * 13 + 23) % 100003;
  }
  acc = acc + 595 - (acc % 50);
  if (acc % 14 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 53) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  m01.set('k47', acc % 997);
  const ix48: number = buf.indexOf('p66');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = acc + 634 - (acc % 84);
  for (let i50 = 0; i50 < 9; i50++) {
    acc = (acc + i50 * 13 + 531) % 100003;
  }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8659) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 161) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  const rc1: Rec66 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
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
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  acc = acc + 554 - (acc % 85);
  acc = acc + 734 - (acc % 13);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  for (let i15 = 0; i15 < 4; i15++) {
    acc = (acc + i15 * 13 + 952) % 100003;
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 170) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 114) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  for (let i21 = 0; i21 < 11; i21++) {
    acc = (acc + i21 * 13 + 245) % 100003;
  }
  acc = (acc * 31 + 1356) % 65521;
  m01.set('k23', acc % 997);
  arr.push(acc % 1000);
  buf += `q25:${acc % 97}`;
  m01.set('k26', acc % 997);
  for (let i27 = 0; i27 < 9; i27++) {
    acc = (acc + i27 * 13 + 68) % 100003;
  }
  acc = acc + 903 - (acc % 82);
  m01.set('k29', acc % 997);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  buf += `q32:${acc % 97}`;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 141) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-35'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  for (let i37 = 0; i37 < 3; i37++) {
    acc = (acc + i37 * 13 + 438) % 100003;
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  acc = acc + 87 - (acc % 79);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  m01.set('k43', acc % 997);
  arr.push(acc % 1000);
  buf += `q45:${acc % 97}`;
  for (let i46 = 0; i46 < 7; i46++) {
    acc = (acc + i46 * 13 + 62) % 100003;
  }
  m01.set('k47', acc % 997);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  acc = (acc * 31 + 9145) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-51'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8660) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const ix1: number = buf.indexOf('p66');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  for (let i7 = 0; i7 < 12; i7++) {
    acc = (acc + i7 * 13 + 695) % 100003;
  }
  acc = (acc * 31 + 1131) % 65521;
  arr.push(acc % 1000);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  buf += 'dock11-' + acc.toString();
  buf += `q12:${acc % 97}`;
  for (let i13 = 0; i13 < 8; i13++) {
    acc = (acc + i13 * 13 + 92) % 100003;
  }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 20) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 175) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += 'balance19-' + acc.toString();
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  m01.set('k21', acc % 997);
  buf += `q22:${acc % 97}`;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  acc = (acc * 31 + 2819) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  acc = (acc * 31 + 9779) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-31'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3899) % 65521;
  buf += 'dispatch33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 160) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'refund35-' + acc.toString();
  buf += `q36:${acc % 97}`;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  acc = acc + 216 - (acc % 84);
  try { if (acc % 29 === 10) { throw new Error('synthetic-39'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'transit40-' + acc.toString();
  const ix41: number = buf.indexOf('p66');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  try { if (acc % 29 === 22) { throw new Error('synthetic-43'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  for (let i46 = 0; i46 < 4; i46++) {
    acc = (acc + i46 * 13 + 312) % 100003;
  }
  const ix47: number = buf.indexOf('p66');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += 'dispatch49-' + acc.toString();
  for (let i50 = 0; i50 < 5; i50++) {
    acc = (acc + i50 * 13 + 389) % 100003;
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8661) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  acc = acc + 28 - (acc % 65);
  for (let i1 = 0; i1 < 3; i1++) {
    acc = (acc + i1 * 13 + 606) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  m01.set('k3', acc % 997);
  buf += 'rebate4-' + acc.toString();
  const ix5: number = buf.indexOf('p66');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = acc + 777 - (acc % 93);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  for (let i8 = 0; i8 < 8; i8++) {
    acc = (acc + i8 * 13 + 246) % 100003;
  }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  m01.set('k11', acc % 997);
  for (let i12 = 0; i12 < 9; i12++) {
    acc = (acc + i12 * 13 + 286) % 100003;
  }
  const rc13: Rec66 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  acc = acc + 299 - (acc % 17);
  if (acc % 22 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 26) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-18'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 18 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 145) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = (acc * 31 + 8331) % 65521;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  try { if (acc % 29 === 18) { throw new Error('synthetic-24'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q25:${acc % 97}`;
  buf += `q26:${acc % 97}`;
  if (acc % 13 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  buf += `q29:${acc % 97}`;
  const ix30: number = buf.indexOf('p66');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5840) % 65521;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 144) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 18) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 77) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 66) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const rc38: Rec66 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  buf += 'tariff39-' + acc.toString();
  m01.set('k40', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  acc = acc + 87 - (acc % 20);
  try { if (acc % 29 === 4) { throw new Error('synthetic-43'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = (acc * 31 + 3780) % 65521;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  if (acc % 7 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  for (let i49 = 0; i49 < 10; i49++) {
    acc = (acc + i49 * 13 + 492) % 100003;
  }
  for (let i50 = 0; i50 < 4; i50++) {
    acc = (acc + i50 * 13 + 313) % 100003;
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 38) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8662) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  m01.set('k0', acc % 997);
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 112) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  m01.set('k3', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i5 = 0; i5 < 6; i5++) {
    acc = (acc + i5 * 13 + 567) % 100003;
  }
  for (let i6 = 0; i6 < 3; i6++) {
    acc = (acc + i6 * 13 + 264) % 100003;
  }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  m01.set('k8', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 119) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  m01.set('k11', acc % 997);
  buf += 'refund12-' + acc.toString();
  for (let i13 = 0; i13 < 5; i13++) {
    acc = (acc + i13 * 13 + 35) % 100003;
  }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 6) { throw new Error('synthetic-15'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 61) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 26 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  for (let i19 = 0; i19 < 8; i19++) {
    acc = (acc + i19 * 13 + 522) % 100003;
  }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  acc = acc + 804 - (acc % 47);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  if (acc % 10 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  m01.set('k25', acc % 997);
  arr.push(acc % 1000);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  if (acc % 8 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  buf += `q29:${acc % 97}`;
  buf += 'dispatch30-' + acc.toString();
  buf += 'coupon31-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 47) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = acc + 450 - (acc % 38);
  buf += `q37:${acc % 97}`;
  acc = acc + 242 - (acc % 72);
  const ix39: number = buf.indexOf('p66');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += `q40:${acc % 97}`;
  buf += `q41:${acc % 97}`;
  m01.set('k42', acc % 997);
  acc = (acc * 31 + 958) % 65521;
  buf += `q44:${acc % 97}`;
  m01.set('k45', acc % 997);
  for (let i46 = 0; i46 < 6; i46++) {
    acc = (acc + i46 * 13 + 861) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += `q48:${acc % 97}`;
  buf += 'shelf49-' + acc.toString();
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  acc = (acc * 31 + 7391) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8663) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  try { if (acc % 29 === 19) { throw new Error('synthetic-0'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i1 = 0; i1 < 4; i1++) {
    acc = (acc + i1 * 13 + 469) % 100003;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-2'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 10 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  acc = (acc * 31 + 9794) % 65521;
  acc = (acc * 31 + 6016) % 65521;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 160) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  buf += 'shelf8-' + acc.toString();
  acc = (acc * 31 + 8412) % 65521;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9069) % 65521;
  acc = (acc * 31 + 5216) % 65521;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 95) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  for (let i21 = 0; i21 < 7; i21++) {
    acc = (acc + i21 * 13 + 83) % 100003;
  }
  acc = (acc * 31 + 2231) % 65521;
  acc = acc + 969 - (acc % 68);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 173) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const ix27: number = buf.indexOf('p66');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  if (acc % 17 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  if (acc % 21 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += 'shelf32-' + acc.toString();
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 192) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p66');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  m01.set('k36', acc % 997);
  const rc37: Rec66 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  acc = acc + 125 - (acc % 24);
  m01.set('k39', acc % 997);
  const rc40: Rec66 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  arr.push(acc % 1000);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  try { if (acc % 29 === 13) { throw new Error('synthetic-45'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = acc + 322 - (acc % 30);
  const rc49: Rec66 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  acc = acc + 209 - (acc % 23);
  acc = acc + 896 - (acc % 71);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8664) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  const rc0: Rec66 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const rc1: Rec66 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 40) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  buf += `q5:${acc % 97}`;
  for (let i6 = 0; i6 < 9; i6++) {
    acc = (acc + i6 * 13 + 317) % 100003;
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8233) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-9'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const rc10: Rec66 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = acc + 913 - (acc % 78);
  acc = acc + 665 - (acc % 25);
  const rc13: Rec66 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (acc % 23 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 82) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  acc = acc + 820 - (acc % 12);
  if (acc % 26 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  for (let i21 = 0; i21 < 6; i21++) {
    acc = (acc + i21 * 13 + 382) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  acc = (acc * 31 + 9830) % 65521;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 193) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const ix26: number = buf.indexOf('p66');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  buf += `q27:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  for (let i31 = 0; i31 < 11; i31++) {
    acc = (acc + i31 * 13 + 92) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 142) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 16) { throw new Error('synthetic-35'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += 'parcel39-' + acc.toString();
  buf += 'refund40-' + acc.toString();
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  if (acc % 19 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const ix46: number = buf.indexOf('p66');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = acc + 87 - (acc % 64);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const ix50: number = buf.indexOf('p66');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8665) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  acc = (acc * 31 + 2666) % 65521;
  acc = acc + 639 - (acc % 96);
  const ix2: number = buf.indexOf('p66');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const ix3: number = buf.indexOf('p66');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  m01.set('k7', acc % 997);
  acc = acc + 929 - (acc % 18);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  m01.set('k13', acc % 997);
  for (let i14 = 0; i14 < 6; i14++) {
    acc = (acc + i14 * 13 + 927) % 100003;
  }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 55) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'crate18-' + acc.toString();
  const rc19: Rec66 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const ix21: number = buf.indexOf('p66');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-22'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 30) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  m01.set('k27', acc % 997);
  acc = acc + 169 - (acc % 16);
  arr.push(acc % 1000);
  buf += 'dock30-' + acc.toString();
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const rc32: Rec66 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  for (let i33 = 0; i33 < 10; i33++) {
    acc = (acc + i33 * 13 + 719) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 38) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  arr.push(acc % 1000);
  buf += 'ticket37-' + acc.toString();
  try { if (acc % 29 === 8) { throw new Error('synthetic-38'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 4043) % 65521;
  for (let i41 = 0; i41 < 11; i41++) {
    acc = (acc + i41 * 13 + 389) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  acc = (acc * 31 + 5314) % 65521;
  buf += `q44:${acc % 97}`;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  try { if (acc % 29 === 9) { throw new Error('synthetic-47'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 16 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0066_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0066_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0066_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8666) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  buf += `q0:${acc % 97}`;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 76) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  if (acc % 24 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  m01.set('k8', acc % 997);
  const ix9: number = buf.indexOf('p66');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  try { if (acc % 29 === 23) { throw new Error('synthetic-11'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 46) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 78) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  if (acc % 18 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const ix21: number = buf.indexOf('p66');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  buf += `q22:${acc % 97}`;
  buf += 'quota23-' + acc.toString();
  m01.set('k24', acc % 997);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = acc + 275 - (acc % 86);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 12) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  m01.set('k29', acc % 997);
  arr.push(acc % 1000);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 185) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p66');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  buf += `q36:${acc % 97}`;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  buf += `q38:${acc % 97}`;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 120) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const rc42: Rec66 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  try { if (acc % 29 === 22) { throw new Error('synthetic-45'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const rc48: Rec66 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const rc49: Rec66 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  for (let i51 = 0; i51 < 9; i51++) {
    acc = (acc + i51 * 13 + 503) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8667) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  if (acc % 14 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const ix1: number = buf.indexOf('p66');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  for (let i4 = 0; i4 < 7; i4++) {
    acc = (acc + i4 * 13 + 619) % 100003;
  }
  if (acc % 20 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  for (let i6 = 0; i6 < 6; i6++) {
    acc = (acc + i6 * 13 + 10) % 100003;
  }
  const ix7: number = buf.indexOf('p66');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 98) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  if (acc % 29 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const ix14: number = buf.indexOf('p66');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 57) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  buf += 'policy21-' + acc.toString();
  acc = (acc * 31 + 9678) % 65521;
  m01.set('k23', acc % 997);
  try { if (acc % 29 === 16) { throw new Error('synthetic-24'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const rc25: Rec66 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  for (let i27 = 0; i27 < 7; i27++) {
    acc = (acc + i27 * 13 + 119) % 100003;
  }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 103) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 195) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p66');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const rc38: Rec66 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  buf += `q39:${acc % 97}`;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-42'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = (acc * 31 + 8801) % 65521;
  acc = acc + 412 - (acc % 47);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  if (acc % 16 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  m01.set('k50', acc % 997);
  buf += 'parcel51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8668) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  try { if (acc % 29 === 16) { throw new Error('synthetic-0'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  arr.push(acc % 1000);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-5'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 13) { throw new Error('synthetic-7'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  arr.push(acc % 1000);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  if (acc % 24 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 169) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 128) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  m01.set('k20', acc % 997);
  if (acc % 5 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 96) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  if (acc % 13 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  if (acc % 16 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  if (acc % 10 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 171) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  acc = acc + 492 - (acc % 30);
  acc = acc + 213 - (acc % 49);
  arr.push(acc % 1000);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  acc = acc + 409 - (acc % 95);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 76) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 6052) % 65521;
  for (let i36 = 0; i36 < 7; i36++) {
    acc = (acc + i36 * 13 + 921) % 100003;
  }
  m01.set('k37', acc % 997);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  if (acc % 22 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const ix40: number = buf.indexOf('p66');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  buf += 'invoice41-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  m01.set('k44', acc % 997);
  for (let i45 = 0; i45 < 11; i45++) {
    acc = (acc + i45 * 13 + 133) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2768) % 65521;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  try { if (acc % 29 === 16) { throw new Error('synthetic-50'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-51'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8669) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  const ix0: number = buf.indexOf('p66');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  buf += `q1:${acc % 97}`;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 8045) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  try { if (acc % 29 === 22) { throw new Error('synthetic-6'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const ix7: number = buf.indexOf('p66');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  buf += 'crate8-' + acc.toString();
  buf += 'tariff9-' + acc.toString();
  for (let i10 = 0; i10 < 3; i10++) {
    acc = (acc + i10 * 13 + 21) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  m01.set('k12', acc % 997);
  if (acc % 17 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 163) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  acc = (acc * 31 + 3282) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 124) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const ix19: number = buf.indexOf('p66');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 180) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const ix21: number = buf.indexOf('p66');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const ix24: number = buf.indexOf('p66');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const rc29: Rec66 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 73) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-35'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 434) % 65521;
  acc = (acc * 31 + 2503) % 65521;
  buf += 'shelf38-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  m01.set('k43', acc % 997);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  m01.set('k46', acc % 997);
  const rc47: Rec66 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const ix48: number = buf.indexOf('p66');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += `q49:${acc % 97}`;
  acc = acc + 522 - (acc % 65);
  acc = (acc * 31 + 8141) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8670) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const ix1: number = buf.indexOf('p66');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const rc2: Rec66 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  try { if (acc % 29 === 11) { throw new Error('synthetic-4'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  arr.push(acc % 1000);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 188) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-10'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const rc11: Rec66 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 58) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 147) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const rc19: Rec66 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  try { if (acc % 29 === 6) { throw new Error('synthetic-20'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 28 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-22'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 24 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  m01.set('k26', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  if (acc % 22 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1181) % 65521;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 191) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 613 - (acc % 91);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  arr.push(acc % 1000);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const rc39: Rec66 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  acc = (acc * 31 + 6272) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-42'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-43'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const rc44: Rec66 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  m01.set('k46', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 16) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += 'invoice51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8671) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  buf += `q0:${acc % 97}`;
  m01.set('k1', acc % 997);
  buf += `q2:${acc % 97}`;
  for (let i3 = 0; i3 < 10; i3++) {
    acc = (acc + i3 * 13 + 445) % 100003;
  }
  m01.set('k4', acc % 997);
  for (let i5 = 0; i5 < 4; i5++) {
    acc = (acc + i5 * 13 + 241) % 100003;
  }
  arr.push(acc % 1000);
  acc = acc + 838 - (acc % 78);
  acc = acc + 477 - (acc % 63);
  buf += 'policy9-' + acc.toString();
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const ix11: number = buf.indexOf('p66');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3179) % 65521;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  for (let i15 = 0; i15 < 7; i15++) {
    acc = (acc + i15 * 13 + 951) % 100003;
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 118) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  if (acc % 10 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  acc = (acc * 31 + 1817) % 65521;
  if (acc % 7 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 180) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  buf += 'ledger24-' + acc.toString();
  buf += 'policy25-' + acc.toString();
  buf += `q26:${acc % 97}`;
  m01.set('k27', acc % 997);
  arr.push(acc % 1000);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  acc = (acc * 31 + 620) % 65521;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  buf += 'customs32-' + acc.toString();
  for (let i33 = 0; i33 < 11; i33++) {
    acc = (acc + i33 * 13 + 669) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 137) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 864 - (acc % 37);
  for (let i36 = 0; i36 < 3; i36++) {
    acc = (acc + i36 * 13 + 871) % 100003;
  }
  acc = (acc * 31 + 1139) % 65521;
  arr.push(acc % 1000);
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  const rc40: Rec66 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  buf += `q41:${acc % 97}`;
  if (acc % 30 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  buf += 'balance43-' + acc.toString();
  m01.set('k44', acc % 997);
  for (let i45 = 0; i45 < 12; i45++) {
    acc = (acc + i45 * 13 + 849) % 100003;
  }
  buf += `q46:${acc % 97}`;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 97) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const rc48: Rec66 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  acc = acc + 388 - (acc % 45);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += 'dispatch51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8672) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  for (let i0 = 0; i0 < 6; i0++) {
    acc = (acc + i0 * 13 + 312) % 100003;
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = acc + 277 - (acc % 80);
  if (acc % 12 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  try { if (acc % 29 === 12) { throw new Error('synthetic-8'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 746 - (acc % 67);
  acc = (acc * 31 + 417) % 65521;
  for (let i11 = 0; i11 < 8; i11++) {
    acc = (acc + i11 * 13 + 324) % 100003;
  }
  buf += 'depot12-' + acc.toString();
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += `q14:${acc % 97}`;
  m01.set('k15', acc % 997);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 132) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 28 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  buf += 'stocktake22-' + acc.toString();
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  acc = acc + 579 - (acc % 86);
  if (acc % 18 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-27'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 87) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  buf += 'depot29-' + acc.toString();
  if (acc % 10 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  for (let i32 = 0; i32 < 5; i32++) {
    acc = (acc + i32 * 13 + 588) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 194) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 438 - (acc % 79);
  acc = acc + 224 - (acc % 26);
  for (let i37 = 0; i37 < 9; i37++) {
    acc = (acc + i37 * 13 + 45) % 100003;
  }
  buf += `q38:${acc % 97}`;
  buf += 'audit39-' + acc.toString();
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  try { if (acc % 29 === 10) { throw new Error('synthetic-41'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q42:${acc % 97}`;
  m01.set('k43', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-45'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i46 = 0; i46 < 7; i46++) {
    acc = (acc + i46 * 13 + 655) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 67) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8673) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 164) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  acc = (acc * 31 + 6149) % 65521;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 149) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  if (acc % 5 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  m01.set('k8', acc % 997);
  buf += 'depot9-' + acc.toString();
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 77) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 112) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  acc = acc + 424 - (acc % 95);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  try { if (acc % 29 === 9) { throw new Error('synthetic-27'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3967) % 65521;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 198) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const ix30: number = buf.indexOf('p66');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  arr.push(acc % 1000);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 179) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 908 - (acc % 46);
  acc = acc + 93 - (acc % 56);
  buf += 'policy37-' + acc.toString();
  buf += `q38:${acc % 97}`;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 153) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const ix40: number = buf.indexOf('p66');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 116) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const rc43: Rec66 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 152) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 174) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const rc46: Rec66 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  acc = acc + 371 - (acc % 95);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += `q49:${acc % 97}`;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  for (let i51 = 0; i51 < 11; i51++) {
    acc = (acc + i51 * 13 + 103) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8674) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  const ix1: number = buf.indexOf('p66');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  if (acc % 14 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = (acc * 31 + 9645) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-6'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const rc8: Rec66 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  try { if (acc % 29 === 22) { throw new Error('synthetic-9'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += `q11:${acc % 97}`;
  acc = acc + 258 - (acc % 97);
  if (acc % 31 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  arr.push(acc % 1000);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 38) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 79) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-18'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 611 - (acc % 83);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += `q21:${acc % 97}`;
  acc = (acc * 31 + 8594) % 65521;
  arr.push(acc % 1000);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  for (let i25 = 0; i25 < 9; i25++) {
    acc = (acc + i25 * 13 + 586) % 100003;
  }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  buf += `q27:${acc % 97}`;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-31'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 144) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec66 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  buf += 'parcel36-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  arr.push(acc % 1000);
  acc = acc + 189 - (acc % 57);
  arr.push(acc % 1000);
  for (let i41 = 0; i41 < 10; i41++) {
    acc = (acc + i41 * 13 + 451) % 100003;
  }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  buf += `q44:${acc % 97}`;
  acc = acc + 168 - (acc % 89);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const ix48: number = buf.indexOf('p66');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 782) % 65521;
  for (let i50 = 0; i50 < 7; i50++) {
    acc = (acc + i50 * 13 + 452) % 100003;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-51'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8675) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  acc = acc + 214 - (acc % 80);
  if (acc % 28 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  if (acc % 16 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = acc + 673 - (acc % 82);
  buf += 'quota5-' + acc.toString();
  arr.push(acc % 1000);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 74) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  buf += `q9:${acc % 97}`;
  buf += 'pallet10-' + acc.toString();
  const rc11: Rec66 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  try { if (acc % 29 === 10) { throw new Error('synthetic-12'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 95) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 121) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  buf += 'sku19-' + acc.toString();
  buf += `q20:${acc % 97}`;
  for (let i21 = 0; i21 < 11; i21++) {
    acc = (acc + i21 * 13 + 292) % 100003;
  }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 76) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  acc = (acc * 31 + 7572) % 65521;
  for (let i26 = 0; i26 < 10; i26++) {
    acc = (acc + i26 * 13 + 851) % 100003;
  }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  try { if (acc % 29 === 20) { throw new Error('synthetic-28'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 800 - (acc % 75);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 101) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 12; i35++) {
    acc = (acc + i35 * 13 + 605) % 100003;
  }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 138) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  buf += 'batch37-' + acc.toString();
  try { if (acc % 29 === 8) { throw new Error('synthetic-38'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7470) % 65521;
  if (acc % 16 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const ix42: number = buf.indexOf('p66');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  m01.set('k45', acc % 997);
  buf += 'depot46-' + acc.toString();
  acc = acc + 88 - (acc % 18);
  for (let i48 = 0; i48 < 6; i48++) {
    acc = (acc + i48 * 13 + 355) % 100003;
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += 'bay51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0066_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0066_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0066_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8676) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  m01.set('k0', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  acc = (acc * 31 + 7160) % 65521;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  acc = acc + 643 - (acc % 56);
  const rc5: Rec66 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  if (acc % 12 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  acc = acc + 115 - (acc % 76);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 176) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  for (let i11 = 0; i11 < 9; i11++) {
    acc = (acc + i11 * 13 + 636) % 100003;
  }
  m01.set('k12', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const ix14: number = buf.indexOf('p66');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  buf += 'payout16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 41) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec66 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  m01.set('k19', acc % 997);
  buf += `q20:${acc % 97}`;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = (acc * 31 + 4677) % 65521;
  const ix23: number = buf.indexOf('p66');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  acc = acc + 580 - (acc % 68);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = acc + 950 - (acc % 91);
  buf += `q28:${acc % 97}`;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 75) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  try { if (acc % 29 === 18) { throw new Error('synthetic-30'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 147) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const ix33: number = buf.indexOf('p66');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 21) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  acc = acc + 310 - (acc % 15);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const ix40: number = buf.indexOf('p66');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const ix41: number = buf.indexOf('p66');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  acc = acc + 139 - (acc % 67);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  for (let i44 = 0; i44 < 9; i44++) {
    acc = (acc + i44 * 13 + 175) % 100003;
  }
  acc = (acc * 31 + 3363) % 65521;
  const ix46: number = buf.indexOf('p66');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  buf += `q47:${acc % 97}`;
  for (let i48 = 0; i48 < 7; i48++) {
    acc = (acc + i48 * 13 + 61) % 100003;
  }
  acc = acc + 18 - (acc % 81);
  buf += `q50:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8677) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  for (let i0 = 0; i0 < 5; i0++) {
    acc = (acc + i0 * 13 + 82) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 125) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  if (acc % 7 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  for (let i4 = 0; i4 < 7; i4++) {
    acc = (acc + i4 * 13 + 559) % 100003;
  }
  buf += 'policy5-' + acc.toString();
  try { if (acc % 29 === 12) { throw new Error('synthetic-6'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const rc7: Rec66 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  arr.push(acc % 1000);
  if (acc % 29 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const rc11: Rec66 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  buf += 'audit12-' + acc.toString();
  arr.push(acc % 1000);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (acc % 21 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 153) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 14 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  if (acc % 25 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  for (let i20 = 0; i20 < 9; i20++) {
    acc = (acc + i20 * 13 + 594) % 100003;
  }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 77) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  for (let i22 = 0; i22 < 8; i22++) {
    acc = (acc + i22 * 13 + 134) % 100003;
  }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  acc = acc + 95 - (acc % 52);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  buf += 'journey26-' + acc.toString();
  buf += 'crate27-' + acc.toString();
  buf += `q28:${acc % 97}`;
  arr.push(acc % 1000);
  m01.set('k30', acc % 997);
  buf += `q31:${acc % 97}`;
  acc = acc + 847 - (acc % 87);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 133) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  for (let i36 = 0; i36 < 3; i36++) {
    acc = (acc + i36 * 13 + 969) % 100003;
  }
  if (acc % 24 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 177) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  const ix41: number = buf.indexOf('p66');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  arr.push(acc % 1000);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const rc45: Rec66 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  for (let i46 = 0; i46 < 4; i46++) {
    acc = (acc + i46 * 13 + 29) % 100003;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-47'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  try { if (acc % 29 === 12) { throw new Error('synthetic-49'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 10 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  for (let i51 = 0; i51 < 12; i51++) {
    acc = (acc + i51 * 13 + 722) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8678) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  try { if (acc % 29 === 16) { throw new Error('synthetic-1'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  m01.set('k4', acc % 997);
  for (let i5 = 0; i5 < 9; i5++) {
    acc = (acc + i5 * 13 + 165) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  m01.set('k8', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  for (let i10 = 0; i10 < 10; i10++) {
    acc = (acc + i10 * 13 + 663) % 100003;
  }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  acc = acc + 299 - (acc % 76);
  acc = (acc * 31 + 836) % 65521;
  acc = acc + 82 - (acc % 21);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 35) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec66 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += `q20:${acc % 97}`;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 10) { throw new Error('synthetic-22'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  arr.push(acc % 1000);
  const rc25: Rec66 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  buf += `q29:${acc % 97}`;
  buf += `q30:${acc % 97}`;
  arr.push(acc % 1000);
  const ix32: number = buf.indexOf('p66');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 82) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i36 = 0; i36 < 11; i36++) {
    acc = (acc + i36 * 13 + 514) % 100003;
  }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  buf += `q40:${acc % 97}`;
  arr.push(acc % 1000);
  if (acc % 14 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = acc + 278 - (acc % 24);
  arr.push(acc % 1000);
  const rc45: Rec66 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  acc = acc + 980 - (acc % 27);
  for (let i47 = 0; i47 < 9; i47++) {
    acc = (acc + i47 * 13 + 771) % 100003;
  }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  buf += 'journey49-' + acc.toString();
  if (acc % 16 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8679) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += 'sku1-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2648) % 65521;
  buf += `q8:${acc % 97}`;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  buf += `q10:${acc % 97}`;
  buf += `q11:${acc % 97}`;
  if (acc % 22 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  for (let i13 = 0; i13 < 12; i13++) {
    acc = (acc + i13 * 13 + 754) % 100003;
  }
  m01.set('k14', acc % 997);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 55) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  buf += 'waybill20-' + acc.toString();
  acc = (acc * 31 + 9809) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  for (let i23 = 0; i23 < 8; i23++) {
    acc = (acc + i23 * 13 + 414) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  m01.set('k25', acc % 997);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  buf += `q27:${acc % 97}`;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-31'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-33'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 131) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += `q37:${acc % 97}`;
  acc = (acc * 31 + 4075) % 65521;
  const ix39: number = buf.indexOf('p66');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  try { if (acc % 29 === 5) { throw new Error('synthetic-41'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'payout42-' + acc.toString();
  arr.push(acc % 1000);
  acc = acc + 871 - (acc % 64);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  if (acc % 18 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  m01.set('k48', acc % 997);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  buf += 'coupon50-' + acc.toString();
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8680) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  acc = acc + 404 - (acc % 75);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  m01.set('k2', acc % 997);
  acc = (acc * 31 + 8218) % 65521;
  if (acc % 21 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += `q5:${acc % 97}`;
  acc = acc + 303 - (acc % 70);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 15) { throw new Error('synthetic-9'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  m01.set('k11', acc % 997);
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  arr.push(acc % 1000);
  m01.set('k15', acc % 997);
  const rc16: Rec66 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 52) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 698 - (acc % 44);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  buf += 'ticket24-' + acc.toString();
  m01.set('k25', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  for (let i28 = 0; i28 < 4; i28++) {
    acc = (acc + i28 * 13 + 706) % 100003;
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  acc = acc + 224 - (acc % 31);
  for (let i31 = 0; i31 < 6; i31++) {
    acc = (acc + i31 * 13 + 400) % 100003;
  }
  buf += `q32:${acc % 97}`;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 63) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  for (let i36 = 0; i36 < 7; i36++) {
    acc = (acc + i36 * 13 + 421) % 100003;
  }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 62) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  arr.push(acc % 1000);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-44'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i45 = 0; i45 < 3; i45++) {
    acc = (acc + i45 * 13 + 693) % 100003;
  }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += 'pickup49-' + acc.toString();
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8681) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  arr.push(acc % 1000);
  acc = acc + 805 - (acc % 9);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  buf += `q4:${acc % 97}`;
  for (let i5 = 0; i5 < 7; i5++) {
    acc = (acc + i5 * 13 + 468) % 100003;
  }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-7'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 12 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-9'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k10', acc % 997);
  const ix11: number = buf.indexOf('p66');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  if (acc % 19 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix14: number = buf.indexOf('p66');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const ix16: number = buf.indexOf('p66');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 28) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 105) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  acc = (acc * 31 + 276) % 65521;
  buf += `q22:${acc % 97}`;
  try { if (acc % 29 === 18) { throw new Error('synthetic-23'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  for (let i25 = 0; i25 < 10; i25++) {
    acc = (acc + i25 * 13 + 292) % 100003;
  }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  m01.set('k27', acc % 997);
  try { if (acc % 29 === 21) { throw new Error('synthetic-28'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = acc + 234 - (acc % 35);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 87) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 8; i35++) {
    acc = (acc + i35 * 13 + 612) % 100003;
  }
  acc = acc + 793 - (acc % 35);
  if (acc % 21 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = acc + 368 - (acc % 22);
  acc = acc + 405 - (acc % 90);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const rc42: Rec66 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const rc43: Rec66 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = (acc * 31 + 3245) % 65521;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-49'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i50 = 0; i50 < 6; i50++) {
    acc = (acc + i50 * 13 + 47) % 100003;
  }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8682) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  try { if (acc % 29 === 6) { throw new Error('synthetic-0'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 168) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  for (let i4 = 0; i4 < 6; i4++) {
    acc = (acc + i4 * 13 + 256) % 100003;
  }
  for (let i5 = 0; i5 < 6; i5++) {
    acc = (acc + i5 * 13 + 151) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  acc = acc + 996 - (acc % 87);
  const ix8: number = buf.indexOf('p66');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const rc10: Rec66 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = acc + 448 - (acc % 91);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += 'batch13-' + acc.toString();
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 118) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  for (let i15 = 0; i15 < 4; i15++) {
    acc = (acc + i15 * 13 + 153) % 100003;
  }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 195) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 6; i18++) {
    acc = (acc + i18 * 13 + 346) % 100003;
  }
  if (acc % 26 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 127) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  if (acc % 26 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-22'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 717 - (acc % 78);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const ix26: number = buf.indexOf('p66');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const ix27: number = buf.indexOf('p66');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 40) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 40) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const rc31: Rec66 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  acc = acc + 425 - (acc % 29);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 175) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 8 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const ix38: number = buf.indexOf('p66');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  m01.set('k41', acc % 997);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  buf += `q43:${acc % 97}`;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  const rc45: Rec66 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  if (acc % 8 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5638) % 65521;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += `q49:${acc % 97}`;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const ix51: number = buf.indexOf('p66');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8683) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  const rc0: Rec66 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  buf += `q1:${acc % 97}`;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  arr.push(acc % 1000);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  m01.set('k6', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const ix8: number = buf.indexOf('p66');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  buf += 'region9-' + acc.toString();
  buf += `q10:${acc % 97}`;
  const ix11: number = buf.indexOf('p66');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-12'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 101) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += 'waybill15-' + acc.toString();
  const rc16: Rec66 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 45) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 415 - (acc % 30);
  for (let i19 = 0; i19 < 4; i19++) {
    acc = (acc + i19 * 13 + 234) % 100003;
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  for (let i21 = 0; i21 < 7; i21++) {
    acc = (acc + i21 * 13 + 681) % 100003;
  }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  for (let i24 = 0; i24 < 5; i24++) {
    acc = (acc + i24 * 13 + 177) % 100003;
  }
  const rc25: Rec66 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  arr.push(acc % 1000);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 99) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 37) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  m01.set('k29', acc % 997);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  acc = (acc * 31 + 7273) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 70) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec66 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  acc = acc + 911 - (acc % 77);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  arr.push(acc % 1000);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 71) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  m01.set('k46', acc % 997);
  for (let i47 = 0; i47 < 3; i47++) {
    acc = (acc + i47 * 13 + 137) % 100003;
  }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8684) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 134) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 442) % 65521;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  if (acc % 30 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  acc = (acc * 31 + 2913) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  acc = (acc * 31 + 4733) % 65521;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 56) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const ix16: number = buf.indexOf('p66');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 20) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 123) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const ix19: number = buf.indexOf('p66');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 144) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  buf += `q21:${acc % 97}`;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  for (let i26 = 0; i26 < 12; i26++) {
    acc = (acc + i26 * 13 + 296) % 100003;
  }
  buf += `q27:${acc % 97}`;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  acc = (acc * 31 + 5732) % 65521;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  buf += `q32:${acc % 97}`;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 49) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p66');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  for (let i36 = 0; i36 < 9; i36++) {
    acc = (acc + i36 * 13 + 112) % 100003;
  }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  acc = acc + 503 - (acc % 26);
  const ix39: number = buf.indexOf('p66');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (acc % 9 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  acc = acc + 314 - (acc % 97);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  for (let i44 = 0; i44 < 7; i44++) {
    acc = (acc + i44 * 13 + 931) % 100003;
  }
  acc = acc + 893 - (acc % 91);
  if (acc % 8 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const rc47: Rec66 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 100) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const ix49: number = buf.indexOf('p66');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8685) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  buf += `q0:${acc % 97}`;
  acc = acc + 78 - (acc % 21);
  try { if (acc % 29 === 9) { throw new Error('synthetic-2'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i3 = 0; i3 < 4; i3++) {
    acc = (acc + i3 * 13 + 89) % 100003;
  }
  buf += `q4:${acc % 97}`;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const ix6: number = buf.indexOf('p66');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += `q7:${acc % 97}`;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  buf += `q10:${acc % 97}`;
  if (acc % 13 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  for (let i12 = 0; i12 < 3; i12++) {
    acc = (acc + i12 * 13 + 50) % 100003;
  }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 18) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  acc = acc + 113 - (acc % 13);
  const ix15: number = buf.indexOf('p66');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += 'client16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 71) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  m01.set('k19', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  acc = (acc * 31 + 2639) % 65521;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 100) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  for (let i26 = 0; i26 < 11; i26++) {
    acc = (acc + i26 * 13 + 807) % 100003;
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const rc28: Rec66 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  m01.set('k29', acc % 997);
  arr.push(acc % 1000);
  buf += 'tariff31-' + acc.toString();
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 37) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 119) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const ix36: number = buf.indexOf('p66');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  if (acc % 16 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  acc = acc + 788 - (acc % 25);
  buf += 'invoice41-' + acc.toString();
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 93) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  if (acc % 26 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += 'crate49-' + acc.toString();
  for (let i50 = 0; i50 < 6; i50++) {
    acc = (acc + i50 * 13 + 202) % 100003;
  }
  for (let i51 = 0; i51 < 12; i51++) {
    acc = (acc + i51 * 13 + 128) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0066_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0066_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0066_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8686) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  if (acc % 22 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const ix1: number = buf.indexOf('p66');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  arr.push(acc % 1000);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 21) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const ix7: number = buf.indexOf('p66');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  m01.set('k8', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  try { if (acc % 29 === 3) { throw new Error('synthetic-10'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const ix12: number = buf.indexOf('p66');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  for (let i13 = 0; i13 < 10; i13++) {
    acc = (acc + i13 * 13 + 137) % 100003;
  }
  for (let i14 = 0; i14 < 6; i14++) {
    acc = (acc + i14 * 13 + 229) % 100003;
  }
  arr.push(acc % 1000);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 7; i18++) {
    acc = (acc + i18 * 13 + 732) % 100003;
  }
  const rc19: Rec66 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  buf += 'parcel20-' + acc.toString();
  for (let i21 = 0; i21 < 10; i21++) {
    acc = (acc + i21 * 13 + 48) % 100003;
  }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 160) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  for (let i23 = 0; i23 < 8; i23++) {
    acc = (acc + i23 * 13 + 788) % 100003;
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 137) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  m01.set('k27', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  for (let i29 = 0; i29 < 8; i29++) {
    acc = (acc + i29 * 13 + 474) % 100003;
  }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const ix31: number = buf.indexOf('p66');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  buf += `q32:${acc % 97}`;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 71) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 184) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  arr.push(acc % 1000);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 178) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  for (let i39 = 0; i39 < 3; i39++) {
    acc = (acc + i39 * 13 + 626) % 100003;
  }
  m01.set('k40', acc % 997);
  acc = acc + 609 - (acc % 61);
  acc = (acc * 31 + 715) % 65521;
  buf += 'balance43-' + acc.toString();
  buf += `q44:${acc % 97}`;
  if (acc % 5 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 498) % 65521;
  if (acc % 9 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  const rc49: Rec66 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  acc = acc + 811 - (acc % 37);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8687) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  buf += `q1:${acc % 97}`;
  acc = (acc * 31 + 9272) % 65521;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  for (let i4 = 0; i4 < 4; i4++) {
    acc = (acc + i4 * 13 + 527) % 100003;
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  try { if (acc % 29 === 8) { throw new Error('synthetic-7'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q8:${acc % 97}`;
  m01.set('k9', acc % 997);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  arr.push(acc % 1000);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  for (let i15 = 0; i15 < 10; i15++) {
    acc = (acc + i15 * 13 + 150) % 100003;
  }
  acc = acc + 127 - (acc % 31);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 153) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 180) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += 'dock20-' + acc.toString();
  buf += 'vendor21-' + acc.toString();
  acc = (acc * 31 + 5453) % 65521;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4503) % 65521;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const rc28: Rec66 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = acc + 754 - (acc % 83);
  acc = (acc * 31 + 2018) % 65521;
  for (let i31 = 0; i31 < 4; i31++) {
    acc = (acc + i31 * 13 + 412) % 100003;
  }
  if (acc % 20 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  if (acc % 22 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 98) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec66 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  if (acc % 8 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 190) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  buf += 'depot40-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-41'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const ix45: number = buf.indexOf('p66');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  acc = acc + 254 - (acc % 96);
  acc = (acc * 31 + 4149) % 65521;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0066_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8688) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit66 = new Unit66(acc);
  const ix0: number = buf.indexOf('p66');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  if (acc % 29 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-3'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 12 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  for (let i5 = 0; i5 < 11; i5++) {
    acc = (acc + i5 * 13 + 904) % 100003;
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 103) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  acc = acc + 775 - (acc % 72);
  if (acc % 27 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  m01.set('k10', acc % 997);
  if (acc % 31 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  for (let i13 = 0; i13 < 5; i13++) {
    acc = (acc + i13 * 13 + 729) % 100003;
  }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  m01.set('k15', acc % 997);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 107) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const ix19: number = buf.indexOf('p66');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 3) { throw new Error('synthetic-21'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-22'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const rc24: Rec66 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 81) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  if (acc % 26 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  if (acc % 5 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += `q30:${acc % 97}`;
  for (let i31 = 0; i31 < 6; i31++) {
    acc = (acc + i31 * 13 + 90) % 100003;
  }
  const rc32: Rec66 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = acc + 130 - (acc % 33);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 119) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 839 - (acc % 47);
  buf += 'ticket36-' + acc.toString();
  for (let i37 = 0; i37 < 12; i37++) {
    acc = (acc + i37 * 13 + 218) % 100003;
  }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += `q40:${acc % 97}`;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  if (acc % 24 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-43'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k44', acc % 997);
  buf += 'dispatch45-' + acc.toString();
  acc = (acc * 31 + 1675) % 65521;
  acc = acc + 758 - (acc % 13);
  acc = (acc * 31 + 2641) % 65521;
  const ix49: number = buf.indexOf('p66');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 7) { throw new Error('synthetic-51'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0066(): BizFn[] {
  return [biz_0066_00, biz_0066_01, biz_0066_02, biz_0066_03, biz_0066_04, biz_0066_05, biz_0066_06, biz_0066_07, biz_0066_08, biz_0066_09, biz_0066_10, biz_0066_11, biz_0066_12, biz_0066_13, biz_0066_14, biz_0066_15, biz_0066_16, biz_0066_17, biz_0066_18, biz_0066_19, biz_0066_20, biz_0066_21, biz_0066_22, biz_0066_23, biz_0066_24, biz_0066_25, biz_0066_26, biz_0066_27, biz_0066_28, biz_0066_29, biz_0066_30, biz_0066_31, biz_0066_32, biz_0066_33, biz_0066_34, biz_0066_35, biz_0066_36, biz_0066_37, biz_0066_38, biz_0066_39, biz_0066_40, biz_0066_41, biz_0066_42];
}

export function rega_0066(): ABizFn[] {
  return [biz_0066_09a, biz_0066_19a, biz_0066_29a, biz_0066_39a];
}
