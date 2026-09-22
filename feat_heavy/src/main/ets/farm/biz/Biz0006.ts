// Biz0006.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec6 { id: number; tag: string; score: number; }

class Unit6 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0006_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 786) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  acc = acc + 399 - (acc % 35);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  acc = acc + 250 - (acc % 36);
  acc = (acc * 31 + 6987) % 65521;
  acc = (acc * 31 + 9477) % 65521;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const ix7: number = buf.indexOf('p6');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const ix8: number = buf.indexOf('p6');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  if (acc % 14 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-11'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  const rc12: Rec6 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  if (acc % 25 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  for (let i16 = 0; i16 < 10; i16++) {
    acc = (acc + i16 * 13 + 442) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 166) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 4394) % 65521;
  buf += 'invoice19-' + acc.toString();
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const ix23: number = buf.indexOf('p6');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-25'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-26'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  if (acc % 23 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  acc = acc + 676 - (acc % 22);
  m01.set('k32', acc % 997);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 78) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const ix36: number = buf.indexOf('p6');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  const rc37: Rec6 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  if (acc % 16 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  if (acc % 13 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const rc42: Rec6 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const rc43: Rec6 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-46'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 118) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 90) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 787) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  for (let i0 = 0; i0 < 6; i0++) {
    acc = (acc + i0 * 13 + 216) % 100003;
  }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 29) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 16) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  m01.set('k3', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  arr.push(acc % 1000);
  m01.set('k6', acc % 997);
  acc = acc + 183 - (acc % 82);
  if (acc % 18 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const ix10: number = buf.indexOf('p6');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const rc11: Rec6 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const rc12: Rec6 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const ix13: number = buf.indexOf('p6');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8659) % 65521;
  buf += `q15:${acc % 97}`;
  buf += 'routeplan16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 161) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-18'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const rc19: Rec6 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  arr.push(acc % 1000);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 11) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  const ix24: number = buf.indexOf('p6');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  try { if (acc % 29 === 20) { throw new Error('synthetic-28'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-30'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 116) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 154) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  acc = acc + 680 - (acc % 61);
  buf += `q39:${acc % 97}`;
  for (let i40 = 0; i40 < 11; i40++) {
    acc = (acc + i40 * 13 + 10) % 100003;
  }
  const ix41: number = buf.indexOf('p6');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  if (acc % 11 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7467) % 65521;
  const rc44: Rec6 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  if (acc % 28 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8956) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = acc + 407 - (acc % 43);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 788) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 130) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const ix10: number = buf.indexOf('p6');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  acc = acc + 539 - (acc % 64);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = acc + 108 - (acc % 58);
  arr.push(acc % 1000);
  const rc16: Rec6 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 174) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 20 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  buf += 'carrier24-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = acc + 563 - (acc % 12);
  const ix27: number = buf.indexOf('p6');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const rc28: Rec6 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = acc + 969 - (acc % 33);
  acc = (acc * 31 + 6135) % 65521;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 141) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 111) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec6 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = acc + 413 - (acc % 57);
  const rc38: Rec6 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  acc = (acc * 31 + 7918) % 65521;
  acc = (acc * 31 + 7169) % 65521;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 172) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'freight43-' + acc.toString();
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const ix47: number = buf.indexOf('p6');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  try { if (acc % 29 === 5) { throw new Error('synthetic-49'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-50'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 789) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  if (acc % 20 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-3'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q4:${acc % 97}`;
  const rc5: Rec6 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  m01.set('k6', acc % 997);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 69) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  m01.set('k9', acc % 997);
  const ix10: number = buf.indexOf('p6');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  for (let i11 = 0; i11 < 3; i11++) {
    acc = (acc + i11 * 13 + 445) % 100003;
  }
  const ix12: number = buf.indexOf('p6');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const ix13: number = buf.indexOf('p6');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  try { if (acc % 29 === 16) { throw new Error('synthetic-16'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 116) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 5; i18++) {
    acc = (acc + i18 * 13 + 304) % 100003;
  }
  buf += `q19:${acc % 97}`;
  buf += 'audit20-' + acc.toString();
  try { if (acc % 29 === 22) { throw new Error('synthetic-21'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'order22-' + acc.toString();
  if (acc % 31 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-24'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const rc25: Rec6 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = (acc * 31 + 5489) % 65521;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  m01.set('k29', acc % 997);
  buf += 'shelf30-' + acc.toString();
  acc = acc + 89 - (acc % 7);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-33'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 188) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  arr.push(acc % 1000);
  acc = acc + 834 - (acc % 72);
  const rc39: Rec6 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 137) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-42'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const ix43: number = buf.indexOf('p6');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  for (let i45 = 0; i45 < 7; i45++) {
    acc = (acc + i45 * 13 + 845) % 100003;
  }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const rc49: Rec6 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 87) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const ix51: number = buf.indexOf('p6');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 790) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  acc = acc + 365 - (acc % 8);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = (acc * 31 + 5154) % 65521;
  buf += 'settle4-' + acc.toString();
  if (acc % 23 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  if (acc % 29 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  m01.set('k8', acc % 997);
  buf += 'bay9-' + acc.toString();
  acc = (acc * 31 + 6125) % 65521;
  const ix11: number = buf.indexOf('p6');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  if (acc % 5 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += `q15:${acc % 97}`;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 156) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p6');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = acc + 606 - (acc % 81);
  m01.set('k23', acc % 997);
  buf += `q24:${acc % 97}`;
  buf += `q25:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  for (let i28 = 0; i28 < 11; i28++) {
    acc = (acc + i28 * 13 + 493) % 100003;
  }
  m01.set('k29', acc % 997);
  buf += 'quota30-' + acc.toString();
  const ix31: number = buf.indexOf('p6');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 101) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-36'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 27 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  acc = (acc * 31 + 4058) % 65521;
  if (acc % 21 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  m01.set('k41', acc % 997);
  const rc42: Rec6 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  m01.set('k43', acc % 997);
  buf += 'transit44-' + acc.toString();
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  buf += `q46:${acc % 97}`;
  const ix47: number = buf.indexOf('p6');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 1250) % 65521;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  m01.set('k50', acc % 997);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 791) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  m01.set('k0', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  acc = (acc * 31 + 6598) % 65521;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  arr.push(acc % 1000);
  acc = (acc * 31 + 8019) % 65521;
  buf += 'region8-' + acc.toString();
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  m01.set('k10', acc % 997);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  acc = acc + 141 - (acc % 24);
  const rc14: Rec6 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += `q15:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 122) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const ix19: number = buf.indexOf('p6');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 129) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const ix22: number = buf.indexOf('p6');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const rc24: Rec6 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  acc = (acc * 31 + 333) % 65521;
  try { if (acc % 29 === 7) { throw new Error('synthetic-26'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-27'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q28:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  buf += 'stocktake31-' + acc.toString();
  if (acc % 14 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1839) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 119) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p6');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 1725) % 65521;
  buf += `q37:${acc % 97}`;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  try { if (acc % 29 === 9) { throw new Error('synthetic-39'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const rc40: Rec6 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  acc = (acc * 31 + 9432) % 65521;
  arr.push(acc % 1000);
  m01.set('k43', acc % 997);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  m01.set('k45', acc % 997);
  acc = (acc * 31 + 6777) % 65521;
  for (let i47 = 0; i47 < 12; i47++) {
    acc = (acc + i47 * 13 + 53) % 100003;
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 91) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  buf += 'warehouse49-' + acc.toString();
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 792) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  for (let i0 = 0; i0 < 7; i0++) {
    acc = (acc + i0 * 13 + 977) % 100003;
  }
  m01.set('k1', acc % 997);
  try { if (acc % 29 === 11) { throw new Error('synthetic-2'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q3:${acc % 97}`;
  try { if (acc % 29 === 4) { throw new Error('synthetic-4'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 19 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const rc6: Rec6 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  for (let i8 = 0; i8 < 4; i8++) {
    acc = (acc + i8 * 13 + 767) % 100003;
  }
  const rc9: Rec6 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 163) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 96) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  m01.set('k19', acc % 997);
  m01.set('k20', acc % 997);
  acc = acc + 854 - (acc % 94);
  acc = acc + 210 - (acc % 42);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  m01.set('k24', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  buf += `q29:${acc % 97}`;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 26) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  if (acc % 29 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 9670) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 18) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'routeplan35-' + acc.toString();
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  arr.push(acc % 1000);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 48) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const rc39: Rec6 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += `q41:${acc % 97}`;
  m01.set('k42', acc % 997);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  for (let i44 = 0; i44 < 9; i44++) {
    acc = (acc + i44 * 13 + 677) % 100003;
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  m01.set('k46', acc % 997);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 199) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 77) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  buf += 'batch49-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  acc = acc + 446 - (acc % 17);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 793) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += `q4:${acc % 97}`;
  if (acc % 17 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  buf += `q6:${acc % 97}`;
  buf += `q7:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += `q9:${acc % 97}`;
  m01.set('k10', acc % 997);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  m01.set('k15', acc % 997);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 115) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 3) { throw new Error('synthetic-19'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 602 - (acc % 92);
  buf += `q21:${acc % 97}`;
  buf += 'depot22-' + acc.toString();
  buf += 'ticket23-' + acc.toString();
  buf += 'quota24-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  try { if (acc % 29 === 3) { throw new Error('synthetic-26'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  for (let i28 = 0; i28 < 8; i28++) {
    acc = (acc + i28 * 13 + 375) % 100003;
  }
  acc = acc + 965 - (acc % 59);
  const rc30: Rec6 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  m01.set('k31', acc % 997);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  acc = (acc * 31 + 785) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 84) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-36'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k37', acc % 997);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  if (acc % 13 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  const ix45: number = buf.indexOf('p6');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const rc47: Rec6 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  try { if (acc % 29 === 6) { throw new Error('synthetic-48'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 12 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  buf += 'warehouse50-' + acc.toString();
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 794) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += 'ticket1-' + acc.toString();
  buf += `q2:${acc % 97}`;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  buf += `q4:${acc % 97}`;
  const rc5: Rec6 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += 'crate6-' + acc.toString();
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 57) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const rc10: Rec6 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const rc11: Rec6 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 14) { throw new Error('synthetic-13'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3368) % 65521;
  const ix15: number = buf.indexOf('p6');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 1758) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 56) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'quota18-' + acc.toString();
  const rc19: Rec6 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 90) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += 'balance22-' + acc.toString();
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  acc = acc + 333 - (acc % 47);
  acc = acc + 880 - (acc % 55);
  buf += 'refund26-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  for (let i28 = 0; i28 < 5; i28++) {
    acc = (acc + i28 * 13 + 619) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  m01.set('k30', acc % 997);
  acc = acc + 368 - (acc % 66);
  buf += `q32:${acc % 97}`;
  buf += 'batch33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 52) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 161 - (acc % 79);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  buf += `q37:${acc % 97}`;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  arr.push(acc % 1000);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  arr.push(acc % 1000);
  const ix43: number = buf.indexOf('p6');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 92) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 154) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 101) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  if (acc % 14 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  acc = acc + 984 - (acc % 95);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 795) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  acc = acc + 848 - (acc % 94);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  if (acc % 19 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  if (acc % 23 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const rc7: Rec6 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 15) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 137) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  acc = acc + 935 - (acc % 86);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const rc15: Rec6 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  if (acc % 6 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 91) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 7395) % 65521;
  const ix19: number = buf.indexOf('p6');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  acc = acc + 553 - (acc % 18);
  acc = (acc * 31 + 1333) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  for (let i23 = 0; i23 < 5; i23++) {
    acc = (acc + i23 * 13 + 620) % 100003;
  }
  acc = acc + 255 - (acc % 43);
  const rc25: Rec6 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const rc27: Rec6 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  acc = acc + 299 - (acc % 45);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  buf += 'carrier30-' + acc.toString();
  const rc31: Rec6 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 111) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  acc = acc + 50 - (acc % 47);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  buf += `q43:${acc % 97}`;
  buf += 'transit44-' + acc.toString();
  arr.push(acc % 1000);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 91) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  acc = acc + 656 - (acc % 12);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 145) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  if (acc % 8 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 115) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0006_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0006_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0006_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 796) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  if (acc % 25 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  buf += `q2:${acc % 97}`;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 35) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += `q5:${acc % 97}`;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  try { if (acc % 29 === 5) { throw new Error('synthetic-7'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'pallet8-' + acc.toString();
  buf += `q9:${acc % 97}`;
  arr.push(acc % 1000);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  m01.set('k12', acc % 997);
  buf += 'order13-' + acc.toString();
  try { if (acc % 29 === 23) { throw new Error('synthetic-14'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 13 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-16'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 90) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 9) { throw new Error('synthetic-20'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const ix21: number = buf.indexOf('p6');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8156) % 65521;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  try { if (acc % 29 === 5) { throw new Error('synthetic-25'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const rc26: Rec6 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  buf += `q28:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 96) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  for (let i32 = 0; i32 < 11; i32++) {
    acc = (acc + i32 * 13 + 439) % 100003;
  }
  acc = acc + 641 - (acc % 19);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 66) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  for (let i36 = 0; i36 < 5; i36++) {
    acc = (acc + i36 * 13 + 909) % 100003;
  }
  acc = (acc * 31 + 1416) % 65521;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = (acc * 31 + 9349) % 65521;
  buf += `q40:${acc % 97}`;
  const ix41: number = buf.indexOf('p6');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7798) % 65521;
  const rc43: Rec6 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const ix45: number = buf.indexOf('p6');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += 'routeplan46-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 797) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  try { if (acc % 29 === 10) { throw new Error('synthetic-0'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 186) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += 'stocktake4-' + acc.toString();
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 135) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  m01.set('k8', acc % 997);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 7726) % 65521;
  acc = acc + 879 - (acc % 33);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  try { if (acc % 29 === 2) { throw new Error('synthetic-15'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-16'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 175) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 21 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 129) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  if (acc % 6 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = (acc * 31 + 1761) % 65521;
  for (let i28 = 0; i28 < 10; i28++) {
    acc = (acc + i28 * 13 + 117) % 100003;
  }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  for (let i30 = 0; i30 < 9; i30++) {
    acc = (acc + i30 * 13 + 726) % 100003;
  }
  if (acc % 9 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  if (acc % 23 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 114) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const ix36: number = buf.indexOf('p6');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8465) % 65521;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  buf += `q39:${acc % 97}`;
  const rc40: Rec6 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  arr.push(acc % 1000);
  acc = (acc * 31 + 1385) % 65521;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  for (let i44 = 0; i44 < 4; i44++) {
    acc = (acc + i44 * 13 + 902) % 100003;
  }
  const ix45: number = buf.indexOf('p6');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const ix46: number = buf.indexOf('p6');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  buf += `q47:${acc % 97}`;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 82) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k50', acc % 997);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 798) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  const rc0: Rec6 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  arr.push(acc % 1000);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  buf += `q5:${acc % 97}`;
  acc = acc + 742 - (acc % 53);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 103) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  if (acc % 27 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  const rc9: Rec6 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  if (acc % 28 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  buf += `q11:${acc % 97}`;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const ix13: number = buf.indexOf('p6');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  acc = acc + 440 - (acc % 75);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const ix16: number = buf.indexOf('p6');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 156) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  m01.set('k19', acc % 997);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 88) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  acc = acc + 167 - (acc % 7);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 193) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const rc28: Rec6 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  buf += `q29:${acc % 97}`;
  for (let i30 = 0; i30 < 5; i30++) {
    acc = (acc + i30 * 13 + 917) % 100003;
  }
  const rc31: Rec6 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 58) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += `q37:${acc % 97}`;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 54) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  buf += 'client40-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 19) { throw new Error('synthetic-44'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9403) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  if (acc % 11 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-51'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 799) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  for (let i1 = 0; i1 < 9; i1++) {
    acc = (acc + i1 * 13 + 42) % 100003;
  }
  m01.set('k2', acc % 997);
  acc = (acc * 31 + 4548) % 65521;
  arr.push(acc % 1000);
  const ix5: number = buf.indexOf('p6');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const rc6: Rec6 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  m01.set('k8', acc % 997);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  acc = acc + 765 - (acc % 89);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9493) % 65521;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 64) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  acc = acc + 941 - (acc % 89);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  m01.set('k24', acc % 997);
  arr.push(acc % 1000);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const ix27: number = buf.indexOf('p6');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  buf += `q28:${acc % 97}`;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  acc = (acc * 31 + 6043) % 65521;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  try { if (acc % 29 === 15) { throw new Error('synthetic-32'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 81) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p6');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const rc36: Rec6 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const rc37: Rec6 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  const ix38: number = buf.indexOf('p6');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 138) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 141) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = acc + 732 - (acc % 26);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 148) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const rc50: Rec6 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 800) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  buf += `q0:${acc % 97}`;
  acc = (acc * 31 + 6387) % 65521;
  m01.set('k2', acc % 997);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 77) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += `q5:${acc % 97}`;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const ix7: number = buf.indexOf('p6');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  buf += 'dispatch9-' + acc.toString();
  const rc10: Rec6 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const ix11: number = buf.indexOf('p6');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  try { if (acc % 29 === 14) { throw new Error('synthetic-13'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 824 - (acc % 38);
  m01.set('k15', acc % 997);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 49) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4698) % 65521;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  buf += `q23:${acc % 97}`;
  acc = acc + 506 - (acc % 32);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const ix26: number = buf.indexOf('p6');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const ix27: number = buf.indexOf('p6');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 92) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  for (let i30 = 0; i30 < 10; i30++) {
    acc = (acc + i30 * 13 + 940) % 100003;
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 69) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec6 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 165) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  try { if (acc % 29 === 22) { throw new Error('synthetic-37'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  arr.push(acc % 1000);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 119) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  m01.set('k45', acc % 997);
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  arr.push(acc % 1000);
  buf += `q50:${acc % 97}`;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 801) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  if (acc % 14 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const ix1: number = buf.indexOf('p6');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const ix2: number = buf.indexOf('p6');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  for (let i4 = 0; i4 < 6; i4++) {
    acc = (acc + i4 * 13 + 222) % 100003;
  }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  acc = acc + 298 - (acc % 45);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  if (acc % 16 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 198) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const rc11: Rec6 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  m01.set('k12', acc % 997);
  acc = acc + 20 - (acc % 53);
  buf += 'depot14-' + acc.toString();
  acc = acc + 61 - (acc % 75);
  if (acc % 5 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 68) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 25) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  buf += 'carrier23-' + acc.toString();
  for (let i24 = 0; i24 < 9; i24++) {
    acc = (acc + i24 * 13 + 501) % 100003;
  }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 48) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  buf += `q30:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  if (acc % 7 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 153) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 9 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const rc36: Rec6 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  if (acc % 24 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1843) % 65521;
  acc = (acc * 31 + 5015) % 65521;
  buf += `q41:${acc % 97}`;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-43'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  try { if (acc % 29 === 8) { throw new Error('synthetic-48'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const ix49: number = buf.indexOf('p6');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += `q50:${acc % 97}`;
  const rc51: Rec6 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 802) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  buf += 'freight3-' + acc.toString();
  buf += `q4:${acc % 97}`;
  if (acc % 19 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  if (acc % 22 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const rc10: Rec6 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const rc13: Rec6 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  for (let i14 = 0; i14 < 7; i14++) {
    acc = (acc + i14 * 13 + 966) % 100003;
  }
  buf += 'ticket15-' + acc.toString();
  acc = acc + 916 - (acc % 29);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 149) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-19'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i20 = 0; i20 < 11; i20++) {
    acc = (acc + i20 * 13 + 83) % 100003;
  }
  for (let i21 = 0; i21 < 6; i21++) {
    acc = (acc + i21 * 13 + 773) % 100003;
  }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 89) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  acc = (acc * 31 + 8013) % 65521;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 55) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  acc = (acc * 31 + 7542) % 65521;
  for (let i28 = 0; i28 < 10; i28++) {
    acc = (acc + i28 * 13 + 576) % 100003;
  }
  const rc29: Rec6 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += 'portal33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 65) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 68) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  acc = (acc * 31 + 3091) % 65521;
  const rc41: Rec6 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  buf += `q42:${acc % 97}`;
  buf += 'parcel43-' + acc.toString();
  buf += `q44:${acc % 97}`;
  arr.push(acc % 1000);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 15) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k49', acc % 997);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 803) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  const ix0: number = buf.indexOf('p6');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  for (let i1 = 0; i1 < 10; i1++) {
    acc = (acc + i1 * 13 + 394) % 100003;
  }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 6139) % 65521;
  buf += `q4:${acc % 97}`;
  buf += 'dock5-' + acc.toString();
  for (let i6 = 0; i6 < 3; i6++) {
    acc = (acc + i6 * 13 + 566) % 100003;
  }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-8'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k9', acc % 997);
  if (acc % 16 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  for (let i12 = 0; i12 < 8; i12++) {
    acc = (acc + i12 * 13 + 652) % 100003;
  }
  arr.push(acc % 1000);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 11) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const rc19: Rec6 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  m01.set('k21', acc % 997);
  buf += 'sku22-' + acc.toString();
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += 'coupon27-' + acc.toString();
  buf += 'payout28-' + acc.toString();
  arr.push(acc % 1000);
  acc = acc + 827 - (acc % 36);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const rc32: Rec6 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 64) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const ix36: number = buf.indexOf('p6');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  if (acc % 14 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const rc40: Rec6 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  buf += `q43:${acc % 97}`;
  m01.set('k44', acc % 997);
  for (let i45 = 0; i45 < 7; i45++) {
    acc = (acc + i45 * 13 + 42) % 100003;
  }
  const ix46: number = buf.indexOf('p6');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = acc + 844 - (acc % 21);
  if (acc % 31 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 804) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = acc + 940 - (acc % 62);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const rc3: Rec6 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  buf += 'shelf5-' + acc.toString();
  acc = acc + 695 - (acc % 45);
  buf += 'pallet7-' + acc.toString();
  m01.set('k8', acc % 997);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 34) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  m01.set('k10', acc % 997);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 195) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  if (acc % 5 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 38) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += 'journey16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 84) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p6');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  buf += `q20:${acc % 97}`;
  arr.push(acc % 1000);
  const ix22: number = buf.indexOf('p6');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const rc24: Rec6 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  acc = (acc * 31 + 9744) % 65521;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  buf += 'refund27-' + acc.toString();
  if (acc % 27 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  m01.set('k29', acc % 997);
  for (let i30 = 0; i30 < 4; i30++) {
    acc = (acc + i30 * 13 + 251) % 100003;
  }
  const ix31: number = buf.indexOf('p6');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  try { if (acc % 29 === 12) { throw new Error('synthetic-33'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 58) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  try { if (acc % 29 === 2) { throw new Error('synthetic-36'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  m01.set('k38', acc % 997);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  m01.set('k40', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = acc + 14 - (acc % 59);
  const rc43: Rec6 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  if (acc % 31 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-46'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const ix48: number = buf.indexOf('p6');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  acc = acc + 700 - (acc % 96);
  const rc51: Rec6 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 805) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  m01.set('k0', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  m01.set('k2', acc % 997);
  for (let i3 = 0; i3 < 3; i3++) {
    acc = (acc + i3 * 13 + 873) % 100003;
  }
  m01.set('k4', acc % 997);
  acc = (acc * 31 + 2857) % 65521;
  m01.set('k6', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  acc = acc + 958 - (acc % 37);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const rc14: Rec6 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  acc = acc + 185 - (acc % 23);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 83) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  buf += `q19:${acc % 97}`;
  acc = (acc * 31 + 8057) % 65521;
  const rc21: Rec6 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const rc23: Rec6 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  buf += `q25:${acc % 97}`;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  m01.set('k29', acc % 997);
  acc = acc + 858 - (acc % 79);
  try { if (acc % 29 === 9) { throw new Error('synthetic-31'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5751) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 36) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 5155) % 65521;
  if (acc % 25 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  for (let i38 = 0; i38 < 3; i38++) {
    acc = (acc + i38 * 13 + 891) % 100003;
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 135) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  buf += `q42:${acc % 97}`;
  const ix43: number = buf.indexOf('p6');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const rc44: Rec6 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += `q47:${acc % 97}`;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 7) { throw new Error('synthetic-49'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'warehouse50-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0006_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0006_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0006_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 806) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  for (let i0 = 0; i0 < 9; i0++) {
    acc = (acc + i0 * 13 + 500) % 100003;
  }
  buf += `q1:${acc % 97}`;
  acc = (acc * 31 + 3514) % 65521;
  const rc3: Rec6 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  arr.push(acc % 1000);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  buf += 'coupon6-' + acc.toString();
  buf += `q7:${acc % 97}`;
  if (acc % 6 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  for (let i9 = 0; i9 < 10; i9++) {
    acc = (acc + i9 * 13 + 189) % 100003;
  }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 44) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 78) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  for (let i16 = 0; i16 < 7; i16++) {
    acc = (acc + i16 * 13 + 861) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 147) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 340) % 65521;
  for (let i20 = 0; i20 < 5; i20++) {
    acc = (acc + i20 * 13 + 626) % 100003;
  }
  if (acc % 30 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  m01.set('k23', acc % 997);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  m01.set('k26', acc % 997);
  buf += `q27:${acc % 97}`;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 110) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  acc = (acc * 31 + 7654) % 65521;
  if (acc % 19 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  m01.set('k31', acc % 997);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 140) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 195) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = acc + 523 - (acc % 65);
  for (let i39 = 0; i39 < 4; i39++) {
    acc = (acc + i39 * 13 + 818) % 100003;
  }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-41'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 61) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  try { if (acc % 29 === 3) { throw new Error('synthetic-45'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += 'pallet47-' + acc.toString();
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 74) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  for (let i49 = 0; i49 < 11; i49++) {
    acc = (acc + i49 * 13 + 91) % 100003;
  }
  m01.set('k50', acc % 997);
  const ix51: number = buf.indexOf('p6');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 807) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 138) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 155) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  if (acc % 30 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  for (let i5 = 0; i5 < 10; i5++) {
    acc = (acc + i5 * 13 + 435) % 100003;
  }
  acc = (acc * 31 + 2641) % 65521;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  buf += `q8:${acc % 97}`;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 132) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const ix11: number = buf.indexOf('p6');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 77) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += 'portal15-' + acc.toString();
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 36) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 85) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  const ix20: number = buf.indexOf('p6');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 171) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = acc + 147 - (acc % 78);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  if (acc % 15 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const ix25: number = buf.indexOf('p6');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 91) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  if (acc % 9 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  for (let i28 = 0; i28 < 9; i28++) {
    acc = (acc + i28 * 13 + 741) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  buf += 'audit30-' + acc.toString();
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 43) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const rc32: Rec6 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = (acc * 31 + 6224) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 41) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'batch35-' + acc.toString();
  const rc36: Rec6 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  acc = (acc * 31 + 143) % 65521;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = acc + 816 - (acc % 67);
  const ix40: number = buf.indexOf('p6');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  buf += 'quota41-' + acc.toString();
  acc = (acc * 31 + 2448) % 65521;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += 'rebate44-' + acc.toString();
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  buf += `q46:${acc % 97}`;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  const rc50: Rec6 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  if (acc % 30 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 808) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const rc5: Rec6 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += 'sku7-' + acc.toString();
  buf += `q8:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  try { if (acc % 29 === 7) { throw new Error('synthetic-11'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 185) % 65521;
  const ix14: number = buf.indexOf('p6');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-15'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i16 = 0; i16 < 7; i16++) {
    acc = (acc + i16 * 13 + 789) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 11) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 451 - (acc % 48);
  for (let i19 = 0; i19 < 6; i19++) {
    acc = (acc + i19 * 13 + 928) % 100003;
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-20'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 17 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  m01.set('k22', acc % 997);
  buf += 'sku23-' + acc.toString();
  try { if (acc % 29 === 6) { throw new Error('synthetic-24'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q25:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += `q27:${acc % 97}`;
  acc = acc + 534 - (acc % 88);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  try { if (acc % 29 === 7) { throw new Error('synthetic-30'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const rc33: Rec6 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 177) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 194) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  for (let i38 = 0; i38 < 5; i38++) {
    acc = (acc + i38 * 13 + 320) % 100003;
  }
  m01.set('k39', acc % 997);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 97) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  buf += `q42:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 4) { throw new Error('synthetic-46'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 809) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  acc = acc + 741 - (acc % 55);
  const ix1: number = buf.indexOf('p6');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2008) % 65521;
  for (let i3 = 0; i3 < 11; i3++) {
    acc = (acc + i3 * 13 + 980) % 100003;
  }
  m01.set('k4', acc % 997);
  const ix5: number = buf.indexOf('p6');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const ix6: number = buf.indexOf('p6');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += `q7:${acc % 97}`;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = acc + 640 - (acc % 22);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  if (acc % 21 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  acc = acc + 610 - (acc % 51);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 79) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  buf += `q22:${acc % 97}`;
  try { if (acc % 29 === 14) { throw new Error('synthetic-23'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  try { if (acc % 29 === 23) { throw new Error('synthetic-28'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i29 = 0; i29 < 8; i29++) {
    acc = (acc + i29 * 13 + 68) % 100003;
  }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  try { if (acc % 29 === 17) { throw new Error('synthetic-32'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i33 = 0; i33 < 9; i33++) {
    acc = (acc + i33 * 13 + 905) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 13) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p6');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const ix36: number = buf.indexOf('p6');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  const ix37: number = buf.indexOf('p6');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-38'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const rc39: Rec6 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  for (let i40 = 0; i40 < 9; i40++) {
    acc = (acc + i40 * 13 + 860) % 100003;
  }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const rc43: Rec6 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 37) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1952) % 65521;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 810) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  m01.set('k0', acc % 997);
  acc = (acc * 31 + 3717) % 65521;
  buf += 'rebate2-' + acc.toString();
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = acc + 324 - (acc % 73);
  m01.set('k5', acc % 997);
  acc = acc + 320 - (acc % 20);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 150) % 65521;
  acc = acc + 781 - (acc % 69);
  if (acc % 19 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  for (let i11 = 0; i11 < 10; i11++) {
    acc = (acc + i11 * 13 + 49) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 170) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-16'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 109) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 7) { throw new Error('synthetic-18'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const rc19: Rec6 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const ix21: number = buf.indexOf('p6');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  buf += 'invoice22-' + acc.toString();
  try { if (acc % 29 === 21) { throw new Error('synthetic-23'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const ix27: number = buf.indexOf('p6');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  for (let i28 = 0; i28 < 12; i28++) {
    acc = (acc + i28 * 13 + 64) % 100003;
  }
  buf += 'ticket29-' + acc.toString();
  buf += `q30:${acc % 97}`;
  m01.set('k31', acc % 997);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 83) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 76) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 174 - (acc % 95);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  if (acc % 29 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-39'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 489 - (acc % 97);
  for (let i41 = 0; i41 < 11; i41++) {
    acc = (acc + i41 * 13 + 20) % 100003;
  }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  arr.push(acc % 1000);
  acc = acc + 858 - (acc % 88);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  buf += 'transit47-' + acc.toString();
  const ix48: number = buf.indexOf('p6');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += `q49:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 811) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-1'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  buf += `q3:${acc % 97}`;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  if (acc % 29 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  if (acc % 23 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 32) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  acc = acc + 243 - (acc % 69);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  buf += 'parcel13-' + acc.toString();
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 25) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 14) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 7650) % 65521;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 47) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  m01.set('k21', acc % 997);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 132) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-23'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q24:${acc % 97}`;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  try { if (acc % 29 === 20) { throw new Error('synthetic-27'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const rc31: Rec6 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  if (acc % 28 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const rc33: Rec6 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 136) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-35'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i36 = 0; i36 < 5; i36++) {
    acc = (acc + i36 * 13 + 481) % 100003;
  }
  acc = (acc * 31 + 4156) % 65521;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  acc = (acc * 31 + 4703) % 65521;
  acc = acc + 665 - (acc % 96);
  try { if (acc % 29 === 17) { throw new Error('synthetic-42'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i43 = 0; i43 < 10; i43++) {
    acc = (acc + i43 * 13 + 124) % 100003;
  }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  if (acc % 16 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const rc48: Rec6 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const ix49: number = buf.indexOf('p6');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += `q50:${acc % 97}`;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 23) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 812) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 88) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const rc4: Rec6 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  arr.push(acc % 1000);
  buf += 'warehouse6-' + acc.toString();
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  for (let i8 = 0; i8 < 8; i8++) {
    acc = (acc + i8 * 13 + 760) % 100003;
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  if (acc % 25 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-12'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'waybill13-' + acc.toString();
  if (acc % 26 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  if (acc % 19 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 85) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 11; i18++) {
    acc = (acc + i18 * 13 + 958) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  try { if (acc % 29 === 19) { throw new Error('synthetic-24'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'portal25-' + acc.toString();
  acc = acc + 411 - (acc % 86);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const ix28: number = buf.indexOf('p6');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 151) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  m01.set('k30', acc % 997);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 151) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  if (acc % 30 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const rc33: Rec6 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 163) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  for (let i38 = 0; i38 < 4; i38++) {
    acc = (acc + i38 * 13 + 629) % 100003;
  }
  for (let i39 = 0; i39 < 9; i39++) {
    acc = (acc + i39 * 13 + 739) % 100003;
  }
  buf += 'routeplan40-' + acc.toString();
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  acc = (acc * 31 + 1583) % 65521;
  buf += 'shelf43-' + acc.toString();
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  if (acc % 22 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += `q46:${acc % 97}`;
  const ix47: number = buf.indexOf('p6');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const ix49: number = buf.indexOf('p6');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 41) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 813) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  for (let i1 = 0; i1 < 11; i1++) {
    acc = (acc + i1 * 13 + 571) % 100003;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-2'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 646 - (acc % 65);
  try { if (acc % 29 === 19) { throw new Error('synthetic-4'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 30 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const rc6: Rec6 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += 'quota8-' + acc.toString();
  try { if (acc % 29 === 14) { throw new Error('synthetic-9'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = (acc * 31 + 6686) % 65521;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  acc = acc + 169 - (acc % 93);
  try { if (acc % 29 === 6) { throw new Error('synthetic-14'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  acc = acc + 574 - (acc % 39);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 54) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 22) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = (acc * 31 + 5377) % 65521;
  m01.set('k21', acc % 997);
  try { if (acc % 29 === 13) { throw new Error('synthetic-22'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 49) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'customs25-' + acc.toString();
  acc = acc + 84 - (acc % 8);
  buf += `q27:${acc % 97}`;
  try { if (acc % 29 === 16) { throw new Error('synthetic-28'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const rc29: Rec6 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  if (acc % 5 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-31'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k32', acc % 997);
  if (acc % 18 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 65) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-35'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  try { if (acc % 29 === 12) { throw new Error('synthetic-37'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 970 - (acc % 67);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 96) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-41'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 135) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = (acc * 31 + 8956) % 65521;
  buf += `q45:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  for (let i47 = 0; i47 < 12; i47++) {
    acc = (acc + i47 * 13 + 340) % 100003;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-48'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'depot49-' + acc.toString();
  m01.set('k50', acc % 997);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 814) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  acc = (acc * 31 + 4341) % 65521;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  buf += `q2:${acc % 97}`;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  m01.set('k4', acc % 997);
  if (acc % 30 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  if (acc % 29 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 15) { throw new Error('synthetic-11'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  try { if (acc % 29 === 15) { throw new Error('synthetic-14'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const ix15: number = buf.indexOf('p6');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 117) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 9; i18++) {
    acc = (acc + i18 * 13 + 439) % 100003;
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += 'client22-' + acc.toString();
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 166) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 133) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-27'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i28 = 0; i28 < 3; i28++) {
    acc = (acc + i28 * 13 + 406) % 100003;
  }
  buf += 'balance29-' + acc.toString();
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  try { if (acc % 29 === 19) { throw new Error('synthetic-31'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k32', acc % 997);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 174) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5670) % 65521;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const rc42: Rec6 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  try { if (acc % 29 === 15) { throw new Error('synthetic-45'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  buf += `q47:${acc % 97}`;
  arr.push(acc % 1000);
  const ix49: number = buf.indexOf('p6');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = acc + 608 - (acc % 36);
  for (let i51 = 0; i51 < 10; i51++) {
    acc = (acc + i51 * 13 + 191) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 815) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  if (acc % 6 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const ix1: number = buf.indexOf('p6');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 192) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  buf += 'ticket3-' + acc.toString();
  buf += 'coupon4-' + acc.toString();
  for (let i5 = 0; i5 < 7; i5++) {
    acc = (acc + i5 * 13 + 401) % 100003;
  }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  if (acc % 5 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  buf += `q8:${acc % 97}`;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-12'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 117) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += `q15:${acc % 97}`;
  try { if (acc % 29 === 14) { throw new Error('synthetic-16'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 198) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-20'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 15) { throw new Error('synthetic-22'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  for (let i24 = 0; i24 < 7; i24++) {
    acc = (acc + i24 * 13 + 443) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  buf += 'transit26-' + acc.toString();
  for (let i27 = 0; i27 < 5; i27++) {
    acc = (acc + i27 * 13 + 628) % 100003;
  }
  buf += `q28:${acc % 97}`;
  acc = (acc * 31 + 4400) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-30'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 60) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  buf += 'coupon32-' + acc.toString();
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 144) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  for (let i36 = 0; i36 < 10; i36++) {
    acc = (acc + i36 * 13 + 866) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  for (let i38 = 0; i38 < 11; i38++) {
    acc = (acc + i38 * 13 + 553) % 100003;
  }
  const rc39: Rec6 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const ix41: number = buf.indexOf('p6');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  const ix43: number = buf.indexOf('p6');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  if (acc % 10 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7313) % 65521;
  const ix47: number = buf.indexOf('p6');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  for (let i49 = 0; i49 < 8; i49++) {
    acc = (acc + i49 * 13 + 856) % 100003;
  }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  if (acc % 5 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0006_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0006_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0006_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 816) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  try { if (acc % 29 === 20) { throw new Error('synthetic-0'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q1:${acc % 97}`;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 106) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  acc = acc + 802 - (acc % 22);
  buf += `q5:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  acc = acc + 420 - (acc % 58);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  for (let i11 = 0; i11 < 5; i11++) {
    acc = (acc + i11 * 13 + 322) % 100003;
  }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  buf += `q13:${acc % 97}`;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  acc = (acc * 31 + 8530) % 65521;
  acc = (acc * 31 + 8444) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 116) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'carrier18-' + acc.toString();
  if (acc % 18 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  for (let i20 = 0; i20 < 3; i20++) {
    acc = (acc + i20 * 13 + 99) % 100003;
  }
  acc = (acc * 31 + 7345) % 65521;
  buf += 'payout22-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  acc = acc + 92 - (acc % 13);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  if (acc % 14 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  for (let i28 = 0; i28 < 6; i28++) {
    acc = (acc + i28 * 13 + 129) % 100003;
  }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  if (acc % 27 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 116) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  m01.set('k32', acc % 997);
  acc = acc + 668 - (acc % 74);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 101) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-35'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const ix38: number = buf.indexOf('p6');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  if (acc % 12 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const rc42: Rec6 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  arr.push(acc % 1000);
  acc = (acc * 31 + 8352) % 65521;
  m01.set('k48', acc % 997);
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 59) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  buf += `q50:${acc % 97}`;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 817) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  const ix0: number = buf.indexOf('p6');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  for (let i1 = 0; i1 < 11; i1++) {
    acc = (acc + i1 * 13 + 454) % 100003;
  }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-3'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i5 = 0; i5 < 6; i5++) {
    acc = (acc + i5 * 13 + 544) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  acc = (acc * 31 + 781) % 65521;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  for (let i10 = 0; i10 < 12; i10++) {
    acc = (acc + i10 * 13 + 959) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  if (acc % 16 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += 'bay16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 35) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i21 = 0; i21 < 8; i21++) {
    acc = (acc + i21 * 13 + 149) % 100003;
  }
  if (acc % 31 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (acc % 11 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 126) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q28:${acc % 97}`;
  acc = (acc * 31 + 3339) % 65521;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 56) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  if (acc % 7 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  for (let i39 = 0; i39 < 7; i39++) {
    acc = (acc + i39 * 13 + 769) % 100003;
  }
  if (acc % 10 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc42: Rec6 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  m01.set('k43', acc % 997);
  acc = (acc * 31 + 4835) % 65521;
  buf += 'quota45-' + acc.toString();
  arr.push(acc % 1000);
  for (let i47 = 0; i47 < 5; i47++) {
    acc = (acc + i47 * 13 + 877) % 100003;
  }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 818) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  arr.push(acc % 1000);
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6016) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-7'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  buf += 'freight9-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  try { if (acc % 29 === 7) { throw new Error('synthetic-12'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  const ix13: number = buf.indexOf('p6');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  buf += 'balance14-' + acc.toString();
  arr.push(acc % 1000);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 198) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  for (let i19 = 0; i19 < 12; i19++) {
    acc = (acc + i19 * 13 + 715) % 100003;
  }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 68) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  if (acc % 8 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  m01.set('k26', acc % 997);
  const rc27: Rec6 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += 'quota31-' + acc.toString();
  acc = (acc * 31 + 2962) % 65521;
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 107) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 77) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const rc36: Rec6 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  acc = acc + 271 - (acc % 48);
  if (acc % 18 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += `q42:${acc % 97}`;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 84) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 18 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-46'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 5535) % 65521;
  for (let i48 = 0; i48 < 8; i48++) {
    acc = (acc + i48 * 13 + 199) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const ix50: number = buf.indexOf('p6');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 819) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  buf += `q0:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 95) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  if (acc % 14 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-4'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (acc % 25 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const rc7: Rec6 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-9'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 83) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 12 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-13'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 601 - (acc % 68);
  const ix15: number = buf.indexOf('p6');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-16'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 69) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = acc + 361 - (acc % 12);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 930) % 65521;
  acc = (acc * 31 + 7152) % 65521;
  const rc23: Rec6 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  m01.set('k24', acc % 997);
  buf += 'refund25-' + acc.toString();
  const ix26: number = buf.indexOf('p6');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 134) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  buf += 'rebate28-' + acc.toString();
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  acc = (acc * 31 + 5491) % 65521;
  const ix32: number = buf.indexOf('p6');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 169) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 4; i35++) {
    acc = (acc + i35 * 13 + 406) % 100003;
  }
  buf += 'coupon36-' + acc.toString();
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += 'shelf38-' + acc.toString();
  acc = (acc * 31 + 3101) % 65521;
  const ix40: number = buf.indexOf('p6');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  buf += `q41:${acc % 97}`;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  if (acc % 12 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += 'depot45-' + acc.toString();
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  if (acc % 6 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 820) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  try { if (acc % 29 === 16) { throw new Error('synthetic-2'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  acc = acc + 22 - (acc % 32);
  acc = (acc * 31 + 7239) % 65521;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  for (let i9 = 0; i9 < 5; i9++) {
    acc = (acc + i9 * 13 + 954) % 100003;
  }
  buf += `q10:${acc % 97}`;
  acc = acc + 370 - (acc % 19);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 104) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = acc + 426 - (acc % 31);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const rc15: Rec6 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 80) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  for (let i21 = 0; i21 < 3; i21++) {
    acc = (acc + i21 * 13 + 655) % 100003;
  }
  const rc22: Rec6 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const ix24: number = buf.indexOf('p6');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  buf += 'ledger25-' + acc.toString();
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  if (acc % 14 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  m01.set('k30', acc % 997);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  buf += 'shelf32-' + acc.toString();
  for (let i33 = 0; i33 < 7; i33++) {
    acc = (acc + i33 * 13 + 785) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 63) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  if (acc % 30 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  for (let i37 = 0; i37 < 6; i37++) {
    acc = (acc + i37 * 13 + 832) % 100003;
  }
  buf += `q38:${acc % 97}`;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  acc = acc + 509 - (acc % 25);
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  for (let i42 = 0; i42 < 3; i42++) {
    acc = (acc + i42 * 13 + 452) % 100003;
  }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  if (acc % 25 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  for (let i45 = 0; i45 < 10; i45++) {
    acc = (acc + i45 * 13 + 72) % 100003;
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 47) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  for (let i48 = 0; i48 < 7; i48++) {
    acc = (acc + i48 * 13 + 874) % 100003;
  }
  const ix49: number = buf.indexOf('p6');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const ix50: number = buf.indexOf('p6');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 821) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  acc = (acc * 31 + 3729) % 65521;
  acc = acc + 139 - (acc % 38);
  buf += `q4:${acc % 97}`;
  const rc5: Rec6 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 87) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const rc7: Rec6 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  if (acc % 18 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  m01.set('k10', acc % 997);
  const rc11: Rec6 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  buf += 'settle12-' + acc.toString();
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  buf += 'portal15-' + acc.toString();
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 27) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  acc = (acc * 31 + 1406) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  buf += `q23:${acc % 97}`;
  acc = (acc * 31 + 8839) % 65521;
  if (acc % 25 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  m01.set('k26', acc % 997);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  acc = (acc * 31 + 554) % 65521;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += 'tariff31-' + acc.toString();
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 12) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p6');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 72) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  try { if (acc % 29 === 3) { throw new Error('synthetic-38'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 161) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 19) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  buf += 'quota44-' + acc.toString();
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 78) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-46'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  for (let i50 = 0; i50 < 4; i50++) {
    acc = (acc + i50 * 13 + 26) % 100003;
  }
  acc = acc + 867 - (acc % 84);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 822) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  const ix0: number = buf.indexOf('p6');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  if (acc % 8 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (acc % 30 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  acc = (acc * 31 + 3610) % 65521;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  try { if (acc % 29 === 11) { throw new Error('synthetic-14'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 840 - (acc % 64);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 195) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  if (acc % 6 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  arr.push(acc % 1000);
  try { if (acc % 29 === 17) { throw new Error('synthetic-22'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q23:${acc % 97}`;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 63) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = (acc * 31 + 8650) % 65521;
  const rc28: Rec6 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  buf += `q29:${acc % 97}`;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 189) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  buf += 'pickup33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 64) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (acc % 27 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-38'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const rc42: Rec6 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  arr.push(acc % 1000);
  for (let i44 = 0; i44 < 6; i44++) {
    acc = (acc + i44 * 13 + 665) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 190) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  for (let i49 = 0; i49 < 7; i49++) {
    acc = (acc + i49 * 13 + 290) % 100003;
  }
  if (acc % 25 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 823) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  m01.set('k2', acc % 997);
  m01.set('k3', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  buf += 'client5-' + acc.toString();
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 132) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  if (acc % 21 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  buf += `q11:${acc % 97}`;
  const ix12: number = buf.indexOf('p6');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  acc = (acc * 31 + 8584) % 65521;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 29) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  const ix23: number = buf.indexOf('p6');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const ix24: number = buf.indexOf('p6');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  for (let i26 = 0; i26 < 5; i26++) {
    acc = (acc + i26 * 13 + 242) % 100003;
  }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 147) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  buf += `q29:${acc % 97}`;
  const rc30: Rec6 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  const rc31: Rec6 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 161) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  arr.push(acc % 1000);
  if (acc % 17 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const rc38: Rec6 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  if (acc % 31 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6461) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-42'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k43', acc % 997);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  buf += `q45:${acc % 97}`;
  for (let i46 = 0; i46 < 3; i46++) {
    acc = (acc + i46 * 13 + 538) % 100003;
  }
  if (acc % 26 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  m01.set('k48', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  acc = acc + 289 - (acc % 46);
  const ix51: number = buf.indexOf('p6');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 824) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  m01.set('k0', acc % 997);
  const rc1: Rec6 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  acc = acc + 307 - (acc % 93);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  arr.push(acc % 1000);
  acc = acc + 232 - (acc % 42);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  if (acc % 15 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  acc = (acc * 31 + 6696) % 65521;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const ix11: number = buf.indexOf('p6');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  m01.set('k12', acc % 997);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  arr.push(acc % 1000);
  for (let i15 = 0; i15 < 3; i15++) {
    acc = (acc + i15 * 13 + 356) % 100003;
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 182) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 957 - (acc % 13);
  acc = (acc * 31 + 8753) % 65521;
  const ix20: number = buf.indexOf('p6');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  m01.set('k23', acc % 997);
  buf += `q24:${acc % 97}`;
  const ix25: number = buf.indexOf('p6');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 134) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  if (acc % 12 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix33: number = buf.indexOf('p6');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 62) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  arr.push(acc % 1000);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const ix39: number = buf.indexOf('p6');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 121) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  buf += 'rebate41-' + acc.toString();
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  acc = (acc * 31 + 7983) % 65521;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 116) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = acc + 781 - (acc % 31);
  acc = acc + 489 - (acc % 51);
  acc = acc + 980 - (acc % 55);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-50'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 825) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  for (let i0 = 0; i0 < 3; i0++) {
    acc = (acc + i0 * 13 + 315) % 100003;
  }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 160) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const ix2: number = buf.indexOf('p6');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const rc3: Rec6 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += `q4:${acc % 97}`;
  buf += `q5:${acc % 97}`;
  acc = (acc * 31 + 6624) % 65521;
  m01.set('k7', acc % 997);
  buf += `q8:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-10'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  m01.set('k12', acc % 997);
  const rc13: Rec6 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 65) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec6 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  for (let i19 = 0; i19 < 6; i19++) {
    acc = (acc + i19 * 13 + 830) % 100003;
  }
  arr.push(acc % 1000);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  m01.set('k22', acc % 997);
  const ix23: number = buf.indexOf('p6');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  m01.set('k25', acc % 997);
  acc = (acc * 31 + 5493) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const ix30: number = buf.indexOf('p6');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 33) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec6 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  acc = acc + 57 - (acc % 11);
  buf += 'freight37-' + acc.toString();
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const ix39: number = buf.indexOf('p6');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 9559) % 65521;
  if (acc % 15 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  acc = acc + 659 - (acc % 69);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += 'region45-' + acc.toString();
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = acc + 800 - (acc % 40);
  const rc49: Rec6 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  try { if (acc % 29 === 19) { throw new Error('synthetic-50'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-51'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0006_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0006_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0006_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 826) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (acc % 12 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  for (let i5 = 0; i5 < 11; i5++) {
    acc = (acc + i5 * 13 + 664) % 100003;
  }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  m01.set('k7', acc % 997);
  buf += 'shelf8-' + acc.toString();
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  arr.push(acc % 1000);
  const ix11: number = buf.indexOf('p6');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 73) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = (acc * 31 + 1376) % 65521;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 105) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec6 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  acc = acc + 711 - (acc % 92);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  try { if (acc % 29 === 11) { throw new Error('synthetic-21'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k22', acc % 997);
  const rc23: Rec6 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  arr.push(acc % 1000);
  try { if (acc % 29 === 15) { throw new Error('synthetic-26'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = acc + 670 - (acc % 42);
  const rc29: Rec6 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 61) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = acc + 476 - (acc % 9);
  const ix33: number = buf.indexOf('p6');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 160) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec6 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  acc = acc + 464 - (acc % 59);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = acc + 256 - (acc % 54);
  buf += 'rebate41-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += 'client43-' + acc.toString();
  for (let i44 = 0; i44 < 5; i44++) {
    acc = (acc + i44 * 13 + 138) % 100003;
  }
  if (acc % 19 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  buf += `q49:${acc % 97}`;
  m01.set('k50', acc % 997);
  try { if (acc % 29 === 5) { throw new Error('synthetic-51'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 827) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  m01.set('k1', acc % 997);
  buf += 'parcel2-' + acc.toString();
  acc = (acc * 31 + 6292) % 65521;
  acc = acc + 550 - (acc % 48);
  acc = acc + 358 - (acc % 97);
  if (acc % 27 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  if (acc % 27 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  if (acc % 27 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  buf += `q15:${acc % 97}`;
  acc = (acc * 31 + 6342) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 28) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  arr.push(acc % 1000);
  buf += 'portal20-' + acc.toString();
  if (acc % 9 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  if (acc % 5 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  buf += 'bay23-' + acc.toString();
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-25'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i26 = 0; i26 < 7; i26++) {
    acc = (acc + i26 * 13 + 59) % 100003;
  }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  for (let i28 = 0; i28 < 4; i28++) {
    acc = (acc + i28 * 13 + 250) % 100003;
  }
  if (acc % 5 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += `q30:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 98) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  acc = (acc * 31 + 9497) % 65521;
  const ix38: number = buf.indexOf('p6');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += `q40:${acc % 97}`;
  arr.push(acc % 1000);
  m01.set('k42', acc % 997);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += `q44:${acc % 97}`;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  for (let i47 = 0; i47 < 11; i47++) {
    acc = (acc + i47 * 13 + 996) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += 'refund49-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0006_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 828) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit6 = new Unit6(acc);
  acc = acc + 129 - (acc % 65);
  acc = acc + 510 - (acc % 64);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  acc = acc + 148 - (acc % 51);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 185) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += 'dock8-' + acc.toString();
  buf += `q9:${acc % 97}`;
  try { if (acc % 29 === 19) { throw new Error('synthetic-10'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'freight11-' + acc.toString();
  m01.set('k12', acc % 997);
  const ix13: number = buf.indexOf('p6');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-14'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2122) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 130) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 3445) % 65521;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const ix21: number = buf.indexOf('p6');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  arr.push(acc % 1000);
  const ix24: number = buf.indexOf('p6');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  m01.set('k26', acc % 997);
  const ix27: number = buf.indexOf('p6');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  if (acc % 16 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 75) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  arr.push(acc % 1000);
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const ix39: number = buf.indexOf('p6');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const rc40: Rec6 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  for (let i42 = 0; i42 < 11; i42++) {
    acc = (acc + i42 * 13 + 593) % 100003;
  }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  if (acc % 8 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const rc45: Rec6 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 169) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0006(): BizFn[] {
  return [biz_0006_00, biz_0006_01, biz_0006_02, biz_0006_03, biz_0006_04, biz_0006_05, biz_0006_06, biz_0006_07, biz_0006_08, biz_0006_09, biz_0006_10, biz_0006_11, biz_0006_12, biz_0006_13, biz_0006_14, biz_0006_15, biz_0006_16, biz_0006_17, biz_0006_18, biz_0006_19, biz_0006_20, biz_0006_21, biz_0006_22, biz_0006_23, biz_0006_24, biz_0006_25, biz_0006_26, biz_0006_27, biz_0006_28, biz_0006_29, biz_0006_30, biz_0006_31, biz_0006_32, biz_0006_33, biz_0006_34, biz_0006_35, biz_0006_36, biz_0006_37, biz_0006_38, biz_0006_39, biz_0006_40, biz_0006_41, biz_0006_42];
}

export function rega_0006(): ABizFn[] {
  return [biz_0006_09a, biz_0006_19a, biz_0006_29a, biz_0006_39a];
}
