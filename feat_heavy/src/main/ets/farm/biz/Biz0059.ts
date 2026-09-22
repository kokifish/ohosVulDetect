// Biz0059.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec59 { id: number; tag: string; score: number; }

class Unit59 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0059_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7729) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  buf += `q0:${acc % 97}`;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 12) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  buf += 'customs3-' + acc.toString();
  const ix4: number = buf.indexOf('p59');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  acc = acc + 785 - (acc % 83);
  arr.push(acc % 1000);
  const rc8: Rec59 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  try { if (acc % 29 === 11) { throw new Error('synthetic-9'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  buf += 'rebate15-' + acc.toString();
  const rc16: Rec59 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 134) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec59 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-20'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q22:${acc % 97}`;
  buf += 'order23-' + acc.toString();
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7569) % 65521;
  const ix27: number = buf.indexOf('p59');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  if (acc % 6 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  buf += `q29:${acc % 97}`;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 143) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  try { if (acc % 29 === 18) { throw new Error('synthetic-31'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k32', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 68) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 7 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  acc = acc + 928 - (acc % 10);
  for (let i37 = 0; i37 < 11; i37++) {
    acc = (acc + i37 * 13 + 744) % 100003;
  }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  acc = acc + 858 - (acc % 19);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = acc + 435 - (acc % 19);
  arr.push(acc % 1000);
  acc = (acc * 31 + 8627) % 65521;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  m01.set('k48', acc % 997);
  const ix49: number = buf.indexOf('p59');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const ix50: number = buf.indexOf('p59');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7730) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  for (let i1 = 0; i1 < 3; i1++) {
    acc = (acc + i1 * 13 + 109) % 100003;
  }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1184) % 65521;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  acc = acc + 370 - (acc % 88);
  arr.push(acc % 1000);
  buf += `q10:${acc % 97}`;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6720) % 65521;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  acc = (acc * 31 + 4299) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-16'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 22) { throw new Error('synthetic-18'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  buf += 'tariff20-' + acc.toString();
  if (acc % 13 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += `q23:${acc % 97}`;
  m01.set('k24', acc % 997);
  buf += 'shelf25-' + acc.toString();
  acc = (acc * 31 + 1111) % 65521;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 49) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 193) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  for (let i30 = 0; i30 < 9; i30++) {
    acc = (acc + i30 * 13 + 86) % 100003;
  }
  buf += `q31:${acc % 97}`;
  acc = acc + 880 - (acc % 37);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 39) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'pickup35-' + acc.toString();
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  try { if (acc % 29 === 19) { throw new Error('synthetic-38'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const rc39: Rec59 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  m01.set('k40', acc % 997);
  if (acc % 23 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += 'dispatch43-' + acc.toString();
  arr.push(acc % 1000);
  m01.set('k45', acc % 997);
  m01.set('k46', acc % 997);
  const rc47: Rec59 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  acc = acc + 748 - (acc % 64);
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 104) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  buf += 'policy50-' + acc.toString();
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7731) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 46) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  for (let i1 = 0; i1 < 9; i1++) {
    acc = (acc + i1 * 13 + 504) % 100003;
  }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 19) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 9465) % 65521;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  acc = (acc * 31 + 8219) % 65521;
  arr.push(acc % 1000);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 33) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  acc = (acc * 31 + 9796) % 65521;
  buf += `q13:${acc % 97}`;
  m01.set('k14', acc % 997);
  m01.set('k15', acc % 997);
  buf += 'client16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 175) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const rc19: Rec59 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += 'invoice23-' + acc.toString();
  acc = acc + 175 - (acc % 74);
  buf += `q25:${acc % 97}`;
  try { if (acc % 29 === 6) { throw new Error('synthetic-26'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q27:${acc % 97}`;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const rc29: Rec59 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  if (acc % 31 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = acc + 51 - (acc % 81);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 121) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec59 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  buf += 'pickup36-' + acc.toString();
  for (let i37 = 0; i37 < 7; i37++) {
    acc = (acc + i37 * 13 + 149) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-39'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'crate40-' + acc.toString();
  for (let i41 = 0; i41 < 6; i41++) {
    acc = (acc + i41 * 13 + 601) % 100003;
  }
  for (let i42 = 0; i42 < 5; i42++) {
    acc = (acc + i42 * 13 + 799) % 100003;
  }
  buf += `q43:${acc % 97}`;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 133) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  buf += 'routeplan45-' + acc.toString();
  acc = (acc * 31 + 4818) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  if (acc % 16 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6146) % 65521;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7732) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (acc % 17 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const rc6: Rec59 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  try { if (acc % 29 === 16) { throw new Error('synthetic-7'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  buf += 'customs9-' + acc.toString();
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  m01.set('k12', acc % 997);
  for (let i13 = 0; i13 < 3; i13++) {
    acc = (acc + i13 * 13 + 241) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  acc = acc + 502 - (acc % 41);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 79) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec59 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  if (acc % 24 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const rc21: Rec59 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 8629) % 65521;
  m01.set('k24', acc % 997);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 194) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-27'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i28 = 0; i28 < 8; i28++) {
    acc = (acc + i28 * 13 + 73) % 100003;
  }
  buf += `q29:${acc % 97}`;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 5) { throw new Error('synthetic-31'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 121) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 102) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = acc + 11 - (acc % 39);
  if (acc % 6 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-38'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k39', acc % 997);
  if (acc % 17 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2971) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const ix43: number = buf.indexOf('p59');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  buf += `q44:${acc % 97}`;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  acc = acc + 601 - (acc % 20);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  arr.push(acc % 1000);
  buf += 'quota50-' + acc.toString();
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 29) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7733) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  acc = acc + 865 - (acc % 13);
  if (acc % 25 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 5140) % 65521;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  m01.set('k6', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  acc = acc + 884 - (acc % 75);
  acc = acc + 585 - (acc % 38);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const ix11: number = buf.indexOf('p59');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  buf += `q12:${acc % 97}`;
  if (acc % 12 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const ix14: number = buf.indexOf('p59');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  for (let i15 = 0; i15 < 10; i15++) {
    acc = (acc + i15 * 13 + 936) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 109) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-18'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 22 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const rc20: Rec59 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  m01.set('k21', acc % 997);
  if (acc % 18 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  for (let i23 = 0; i23 < 5; i23++) {
    acc = (acc + i23 * 13 + 658) % 100003;
  }
  acc = acc + 492 - (acc % 90);
  for (let i25 = 0; i25 < 11; i25++) {
    acc = (acc + i25 * 13 + 206) % 100003;
  }
  const ix26: number = buf.indexOf('p59');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = acc + 86 - (acc % 32);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 100) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 103) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  try { if (acc % 29 === 22) { throw new Error('synthetic-33'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 122) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 5332) % 65521;
  const rc36: Rec59 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  if (acc % 26 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-38'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 609 - (acc % 86);
  m01.set('k40', acc % 997);
  acc = acc + 254 - (acc % 97);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  for (let i43 = 0; i43 < 8; i43++) {
    acc = (acc + i43 * 13 + 333) % 100003;
  }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  for (let i45 = 0; i45 < 12; i45++) {
    acc = (acc + i45 * 13 + 297) % 100003;
  }
  acc = (acc * 31 + 8528) % 65521;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  acc = (acc * 31 + 2396) % 65521;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  if (acc % 9 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  acc = acc + 574 - (acc % 62);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7734) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  m01.set('k0', acc % 997);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5112) % 65521;
  const ix7: number = buf.indexOf('p59');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  if (acc % 11 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  buf += 'transit9-' + acc.toString();
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  acc = (acc * 31 + 776) % 65521;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  if (acc % 15 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5624) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-16'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 21) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  for (let i20 = 0; i20 < 7; i20++) {
    acc = (acc + i20 * 13 + 721) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += 'routeplan24-' + acc.toString();
  m01.set('k25', acc % 997);
  const rc26: Rec59 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  const rc27: Rec59 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 195) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  if (acc % 22 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  m01.set('k32', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 134) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 7) { throw new Error('synthetic-35'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k36', acc % 997);
  acc = (acc * 31 + 3443) % 65521;
  buf += `q38:${acc % 97}`;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  arr.push(acc % 1000);
  acc = acc + 802 - (acc % 77);
  if (acc % 14 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  if (acc % 10 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const ix44: number = buf.indexOf('p59');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  arr.push(acc % 1000);
  const ix47: number = buf.indexOf('p59');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  buf += 'warehouse48-' + acc.toString();
  arr.push(acc % 1000);
  buf += 'ticket50-' + acc.toString();
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7735) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  for (let i0 = 0; i0 < 7; i0++) {
    acc = (acc + i0 * 13 + 125) % 100003;
  }
  if (acc % 10 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 61) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  try { if (acc % 29 === 16) { throw new Error('synthetic-4'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (acc % 31 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 20) { throw new Error('synthetic-9'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  acc = (acc * 31 + 7338) % 65521;
  acc = acc + 652 - (acc % 24);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 7) { throw new Error('synthetic-14'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q15:${acc % 97}`;
  try { if (acc % 29 === 15) { throw new Error('synthetic-16'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 175) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p59');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 148) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = acc + 523 - (acc % 78);
  acc = (acc * 31 + 8985) % 65521;
  for (let i23 = 0; i23 < 11; i23++) {
    acc = (acc + i23 * 13 + 771) % 100003;
  }
  const ix24: number = buf.indexOf('p59');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = (acc * 31 + 1558) % 65521;
  acc = acc + 928 - (acc % 34);
  const rc29: Rec59 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const ix30: number = buf.indexOf('p59');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const rc31: Rec59 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 196) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  try { if (acc % 29 === 9) { throw new Error('synthetic-37'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  for (let i39 = 0; i39 < 12; i39++) {
    acc = (acc + i39 * 13 + 569) % 100003;
  }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 22) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const rc41: Rec59 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const ix42: number = buf.indexOf('p59');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4390) % 65521;
  for (let i44 = 0; i44 < 12; i44++) {
    acc = (acc + i44 * 13 + 511) % 100003;
  }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const rc47: Rec59 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += 'settle48-' + acc.toString();
  acc = (acc * 31 + 6421) % 65521;
  const rc50: Rec59 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7736) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const rc2: Rec59 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  arr.push(acc % 1000);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 168) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  buf += 'sku8-' + acc.toString();
  buf += 'batch9-' + acc.toString();
  m01.set('k10', acc % 997);
  const ix11: number = buf.indexOf('p59');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const rc12: Rec59 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  buf += 'pallet16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 137) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  for (let i21 = 0; i21 < 5; i21++) {
    acc = (acc + i21 * 13 + 264) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += `q23:${acc % 97}`;
  for (let i24 = 0; i24 < 5; i24++) {
    acc = (acc + i24 * 13 + 837) % 100003;
  }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  for (let i26 = 0; i26 < 9; i26++) {
    acc = (acc + i26 * 13 + 129) % 100003;
  }
  for (let i27 = 0; i27 < 3; i27++) {
    acc = (acc + i27 * 13 + 976) % 100003;
  }
  m01.set('k28', acc % 997);
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = acc + 732 - (acc % 17);
  acc = acc + 615 - (acc % 28);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const rc33: Rec59 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 123) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const rc37: Rec59 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  const ix38: number = buf.indexOf('p59');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 21) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-41'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i42 = 0; i42 < 4; i42++) {
    acc = (acc + i42 * 13 + 854) % 100003;
  }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  if (acc % 9 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (acc % 11 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = (acc * 31 + 7508) % 65521;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 143) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  acc = acc + 749 - (acc % 76);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  acc = acc + 295 - (acc % 17);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7737) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const rc1: Rec59 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  try { if (acc % 29 === 19) { throw new Error('synthetic-2'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  try { if (acc % 29 === 4) { throw new Error('synthetic-10'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  buf += `q12:${acc % 97}`;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 70) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  const rc15: Rec59 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  acc = acc + 895 - (acc % 86);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 184) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 30 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const ix19: number = buf.indexOf('p59');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const rc21: Rec59 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += 'ticket23-' + acc.toString();
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 108) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6214) % 65521;
  buf += `q27:${acc % 97}`;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  buf += `q30:${acc % 97}`;
  buf += `q31:${acc % 97}`;
  m01.set('k32', acc % 997);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 159) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 160) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  acc = (acc * 31 + 1393) % 65521;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 310 - (acc % 56);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (acc % 22 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  acc = (acc * 31 + 404) % 65521;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = acc + 526 - (acc % 10);
  acc = acc + 853 - (acc % 47);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const ix49: number = buf.indexOf('p59');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7738) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  acc = acc + 359 - (acc % 8);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  buf += `q2:${acc % 97}`;
  acc = (acc * 31 + 2657) % 65521;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  if (acc % 28 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += 'freight7-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  buf += 'region9-' + acc.toString();
  for (let i10 = 0; i10 < 12; i10++) {
    acc = (acc + i10 * 13 + 38) % 100003;
  }
  acc = (acc * 31 + 7453) % 65521;
  arr.push(acc % 1000);
  for (let i13 = 0; i13 < 6; i13++) {
    acc = (acc + i13 * 13 + 501) % 100003;
  }
  buf += 'transit14-' + acc.toString();
  acc = (acc * 31 + 5152) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 135) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 7 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const rc20: Rec59 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const ix21: number = buf.indexOf('p59');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += 'invoice23-' + acc.toString();
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 199) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  for (let i25 = 0; i25 < 10; i25++) {
    acc = (acc + i25 * 13 + 477) % 100003;
  }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const rc27: Rec59 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  arr.push(acc % 1000);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
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
  cf34.push((x: number): number => (x + 152) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 780 - (acc % 48);
  m01.set('k36', acc % 997);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  m01.set('k39', acc % 997);
  arr.push(acc % 1000);
  if (acc % 21 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  buf += 'balance42-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = (acc * 31 + 4080) % 65521;
  acc = (acc * 31 + 3036) % 65521;
  try { if (acc % 29 === 4) { throw new Error('synthetic-48'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const rc49: Rec59 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (acc % 11 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0059_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0059_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0059_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7739) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  arr.push(acc % 1000);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  if (acc % 13 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const rc3: Rec59 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 7) { throw new Error('synthetic-5'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const ix6: number = buf.indexOf('p59');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const ix7: number = buf.indexOf('p59');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 185) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const rc14: Rec59 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  m01.set('k15', acc % 997);
  try { if (acc % 29 === 17) { throw new Error('synthetic-16'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 57) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 29 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += 'balance19-' + acc.toString();
  const ix20: number = buf.indexOf('p59');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  buf += `q23:${acc % 97}`;
  if (acc % 13 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 46) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-27'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 16) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  m01.set('k29', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-31'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'transit32-' + acc.toString();
  buf += 'depot33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 23) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  for (let i36 = 0; i36 < 12; i36++) {
    acc = (acc + i36 * 13 + 821) % 100003;
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  buf += `q38:${acc % 97}`;
  const rc39: Rec59 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  buf += `q41:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += `q43:${acc % 97}`;
  if (acc % 20 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  acc = (acc * 31 + 252) % 65521;
  acc = acc + 497 - (acc % 12);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1764) % 65521;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 133) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  buf += 'quota50-' + acc.toString();
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7740) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  for (let i3 = 0; i3 < 3; i3++) {
    acc = (acc + i3 * 13 + 642) % 100003;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-4'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  try { if (acc % 29 === 19) { throw new Error('synthetic-6'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6734) % 65521;
  m01.set('k8', acc % 997);
  arr.push(acc % 1000);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = (acc * 31 + 3960) % 65521;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 65) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-16'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 121) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  arr.push(acc % 1000);
  buf += 'journey20-' + acc.toString();
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  buf += 'customs22-' + acc.toString();
  buf += 'tariff23-' + acc.toString();
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  for (let i25 = 0; i25 < 4; i25++) {
    acc = (acc + i25 * 13 + 501) % 100003;
  }
  const rc26: Rec59 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  acc = acc + 979 - (acc % 14);
  buf += 'payout28-' + acc.toString();
  if (acc % 22 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  if (acc % 8 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  for (let i32 = 0; i32 < 4; i32++) {
    acc = (acc + i32 * 13 + 132) % 100003;
  }
  const rc33: Rec59 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 175) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  if (acc % 25 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5647) % 65521;
  const ix39: number = buf.indexOf('p59');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += 'stocktake40-' + acc.toString();
  if (acc % 12 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const ix42: number = buf.indexOf('p59');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  acc = (acc * 31 + 4273) % 65521;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  if (acc % 9 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  try { if (acc % 29 === 21) { throw new Error('synthetic-49'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 479 - (acc % 97);
  if (acc % 21 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7741) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  const rc0: Rec59 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1061) % 65521;
  buf += `q3:${acc % 97}`;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 138) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  buf += `q6:${acc % 97}`;
  const rc7: Rec59 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  buf += `q8:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += `q10:${acc % 97}`;
  const rc11: Rec59 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = acc + 372 - (acc % 42);
  acc = acc + 692 - (acc % 24);
  const ix15: number = buf.indexOf('p59');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  const rc16: Rec59 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 135) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-18'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 2596) % 65521;
  buf += 'sku20-' + acc.toString();
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 193) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  buf += 'shelf22-' + acc.toString();
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const ix25: number = buf.indexOf('p59');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  if (acc % 19 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 34) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 39) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  for (let i33 = 0; i33 < 9; i33++) {
    acc = (acc + i33 * 13 + 227) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 68) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const rc37: Rec59 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  arr.push(acc % 1000);
  buf += 'freight39-' + acc.toString();
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += `q42:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = acc + 828 - (acc % 33);
  m01.set('k45', acc % 997);
  acc = (acc * 31 + 7350) % 65521;
  acc = (acc * 31 + 3904) % 65521;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += 'payout49-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7742) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  if (acc % 29 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  buf += `q4:${acc % 97}`;
  m01.set('k5', acc % 997);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const ix7: number = buf.indexOf('p59');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  m01.set('k9', acc % 997);
  m01.set('k10', acc % 997);
  const rc11: Rec59 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  buf += `q12:${acc % 97}`;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  if (acc % 15 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  acc = acc + 47 - (acc % 83);
  buf += 'routeplan16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 189) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p59');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  m01.set('k19', acc % 997);
  arr.push(acc % 1000);
  m01.set('k21', acc % 997);
  acc = (acc * 31 + 5771) % 65521;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-24'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  for (let i26 = 0; i26 < 12; i26++) {
    acc = (acc + i26 * 13 + 227) % 100003;
  }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  acc = (acc * 31 + 8692) % 65521;
  const rc29: Rec59 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  if (acc % 26 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 116) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 33) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 565) % 65521;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 26) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  for (let i38 = 0; i38 < 9; i38++) {
    acc = (acc + i38 * 13 + 319) % 100003;
  }
  arr.push(acc % 1000);
  buf += 'invoice40-' + acc.toString();
  buf += `q41:${acc % 97}`;
  if (acc % 11 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const rc45: Rec59 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  m01.set('k46', acc % 997);
  const rc47: Rec59 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  m01.set('k49', acc % 997);
  m01.set('k50', acc % 997);
  if (acc % 26 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7743) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  buf += `q0:${acc % 97}`;
  const ix1: number = buf.indexOf('p59');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  if (acc % 20 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  if (acc % 23 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-8'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  buf += `q11:${acc % 97}`;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  m01.set('k14', acc % 997);
  buf += `q15:${acc % 97}`;
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 105) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 811 - (acc % 30);
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1548) % 65521;
  for (let i21 = 0; i21 < 3; i21++) {
    acc = (acc + i21 * 13 + 592) % 100003;
  }
  const ix22: number = buf.indexOf('p59');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  acc = (acc * 31 + 1824) % 65521;
  acc = (acc * 31 + 8120) % 65521;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  m01.set('k30', acc % 997);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const rc32: Rec59 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 191) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec59 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  buf += 'routeplan37-' + acc.toString();
  if (acc % 27 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  buf += `q40:${acc % 97}`;
  try { if (acc % 29 === 4) { throw new Error('synthetic-41'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  buf += 'shelf44-' + acc.toString();
  acc = (acc * 31 + 8770) % 65521;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const ix47: number = buf.indexOf('p59');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  for (let i49 = 0; i49 < 6; i49++) {
    acc = (acc + i49 * 13 + 496) % 100003;
  }
  if (acc % 23 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  if (acc % 22 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7744) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  if (acc % 12 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  buf += 'quota3-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 48) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = acc + 740 - (acc % 83);
  const ix8: number = buf.indexOf('p59');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 1342) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-10'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  acc = acc + 921 - (acc % 22);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 28) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 152) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-18'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-19'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q20:${acc % 97}`;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = acc + 301 - (acc % 44);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const rc27: Rec59 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  if (acc % 11 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  if (acc % 27 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  m01.set('k31', acc % 997);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  acc = (acc * 31 + 2758) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 46) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 13 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 23) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  for (let i39 = 0; i39 < 5; i39++) {
    acc = (acc + i39 * 13 + 705) % 100003;
  }
  acc = (acc * 31 + 717) % 65521;
  acc = acc + 646 - (acc % 27);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = acc + 951 - (acc % 67);
  try { if (acc % 29 === 5) { throw new Error('synthetic-47'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q48:${acc % 97}`;
  buf += 'quota49-' + acc.toString();
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  acc = acc + 682 - (acc % 8);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7745) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  for (let i2 = 0; i2 < 4; i2++) {
    acc = (acc + i2 * 13 + 14) % 100003;
  }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = (acc * 31 + 2151) % 65521;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  acc = acc + 17 - (acc % 43);
  try { if (acc % 29 === 6) { throw new Error('synthetic-7'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 6 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  m01.set('k13', acc % 997);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 37) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 100) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q21:${acc % 97}`;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += `q24:${acc % 97}`;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = (acc * 31 + 2030) % 65521;
  arr.push(acc % 1000);
  const rc29: Rec59 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 64) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 12 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 110) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  buf += `q38:${acc % 97}`;
  acc = (acc * 31 + 6388) % 65521;
  acc = (acc * 31 + 563) % 65521;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += 'shelf42-' + acc.toString();
  acc = (acc * 31 + 6070) % 65521;
  const rc44: Rec59 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  try { if (acc % 29 === 3) { throw new Error('synthetic-45'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1735) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-47'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  m01.set('k50', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7746) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  const ix0: number = buf.indexOf('p59');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  for (let i4 = 0; i4 < 7; i4++) {
    acc = (acc + i4 * 13 + 348) % 100003;
  }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  buf += 'sku6-' + acc.toString();
  buf += 'rebate7-' + acc.toString();
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  buf += `q9:${acc % 97}`;
  if (acc % 10 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  if (acc % 9 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  buf += `q12:${acc % 97}`;
  arr.push(acc % 1000);
  for (let i14 = 0; i14 < 6; i14++) {
    acc = (acc + i14 * 13 + 458) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 20) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-20'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  buf += 'coupon22-' + acc.toString();
  const rc23: Rec59 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  for (let i24 = 0; i24 < 9; i24++) {
    acc = (acc + i24 * 13 + 392) % 100003;
  }
  if (acc % 25 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  const rc28: Rec59 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 135) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  for (let i31 = 0; i31 < 11; i31++) {
    acc = (acc + i31 * 13 + 995) % 100003;
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const rc33: Rec59 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 146) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 175) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  if (acc % 19 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  try { if (acc % 29 === 23) { throw new Error('synthetic-39'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'settle40-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  buf += 'invoice42-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (acc % 12 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 195) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const rc46: Rec59 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const rc47: Rec59 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  if (acc % 19 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  acc = (acc * 31 + 653) % 65521;
  for (let i51 = 0; i51 < 6; i51++) {
    acc = (acc + i51 * 13 + 66) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7747) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const rc1: Rec59 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  m01.set('k2', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k4', acc % 997);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const ix6: number = buf.indexOf('p59');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += `q7:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 139) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const ix10: number = buf.indexOf('p59');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  for (let i11 = 0; i11 < 8; i11++) {
    acc = (acc + i11 * 13 + 618) % 100003;
  }
  arr.push(acc % 1000);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const ix14: number = buf.indexOf('p59');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 36) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 116) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 4) { throw new Error('synthetic-18'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  acc = acc + 562 - (acc % 35);
  m01.set('k22', acc % 997);
  acc = (acc * 31 + 2824) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 144 - (acc % 56);
  if (acc % 24 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  buf += `q28:${acc % 97}`;
  acc = (acc * 31 + 1980) % 65521;
  for (let i30 = 0; i30 < 6; i30++) {
    acc = (acc + i30 * 13 + 122) % 100003;
  }
  acc = (acc * 31 + 1861) % 65521;
  for (let i32 = 0; i32 < 10; i32++) {
    acc = (acc + i32 * 13 + 141) % 100003;
  }
  buf += 'balance33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 160) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec59 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const ix37: number = buf.indexOf('p59');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += `q40:${acc % 97}`;
  arr.push(acc % 1000);
  acc = acc + 148 - (acc % 10);
  for (let i43 = 0; i43 < 6; i43++) {
    acc = (acc + i43 * 13 + 89) % 100003;
  }
  const ix44: number = buf.indexOf('p59');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  arr.push(acc % 1000);
  const ix48: number = buf.indexOf('p59');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += 'policy49-' + acc.toString();
  try { if (acc % 29 === 23) { throw new Error('synthetic-50'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const rc51: Rec59 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7748) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  buf += 'balance0-' + acc.toString();
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 79) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  buf += 'stocktake7-' + acc.toString();
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  buf += `q10:${acc % 97}`;
  try { if (acc % 29 === 9) { throw new Error('synthetic-11'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k12', acc % 997);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  m01.set('k14', acc % 997);
  const ix15: number = buf.indexOf('p59');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 185) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec59 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  buf += 'region19-' + acc.toString();
  buf += `q20:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 367 - (acc % 31);
  const ix23: number = buf.indexOf('p59');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const ix27: number = buf.indexOf('p59');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  buf += 'dock28-' + acc.toString();
  try { if (acc % 29 === 18) { throw new Error('synthetic-29'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q30:${acc % 97}`;
  arr.push(acc % 1000);
  buf += 'ticket32-' + acc.toString();
  try { if (acc % 29 === 23) { throw new Error('synthetic-33'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 180) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  if (acc % 25 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3938) % 65521;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  for (let i39 = 0; i39 < 11; i39++) {
    acc = (acc + i39 * 13 + 704) % 100003;
  }
  acc = acc + 723 - (acc % 90);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += `q42:${acc % 97}`;
  acc = acc + 640 - (acc % 85);
  const rc44: Rec59 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  m01.set('k45', acc % 997);
  const rc46: Rec59 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  for (let i48 = 0; i48 < 4; i48++) {
    acc = (acc + i48 * 13 + 654) % 100003;
  }
  acc = acc + 50 - (acc % 46);
  const rc50: Rec59 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0059_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0059_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0059_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7749) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  buf += `q7:${acc % 97}`;
  buf += 'parcel8-' + acc.toString();
  m01.set('k9', acc % 997);
  buf += 'vendor10-' + acc.toString();
  buf += 'coupon11-' + acc.toString();
  m01.set('k12', acc % 997);
  const rc13: Rec59 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  for (let i15 = 0; i15 < 5; i15++) {
    acc = (acc + i15 * 13 + 273) % 100003;
  }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 79) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const rc19: Rec59 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (acc % 11 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  acc = (acc * 31 + 2425) % 65521;
  buf += 'depot25-' + acc.toString();
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  const ix28: number = buf.indexOf('p59');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 78) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const ix32: number = buf.indexOf('p59');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 151) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p59');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  m01.set('k37', acc % 997);
  const ix38: number = buf.indexOf('p59');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7572) % 65521;
  for (let i40 = 0; i40 < 9; i40++) {
    acc = (acc + i40 * 13 + 195) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7258) % 65521;
  buf += 'vendor45-' + acc.toString();
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-51'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7750) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 55) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const rc2: Rec59 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  arr.push(acc % 1000);
  buf += 'order4-' + acc.toString();
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  acc = acc + 586 - (acc % 47);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 6100) % 65521;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  m01.set('k14', acc % 997);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  buf += 'invoice16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 111) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  buf += `q22:${acc % 97}`;
  const ix23: number = buf.indexOf('p59');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  arr.push(acc % 1000);
  acc = (acc * 31 + 2836) % 65521;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const ix29: number = buf.indexOf('p59');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const ix32: number = buf.indexOf('p59');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 98) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 2219) % 65521;
  for (let i36 = 0; i36 < 12; i36++) {
    acc = (acc + i36 * 13 + 506) % 100003;
  }
  if (acc % 6 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  buf += `q39:${acc % 97}`;
  try { if (acc % 29 === 14) { throw new Error('synthetic-40'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'shelf41-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  for (let i45 = 0; i45 < 8; i45++) {
    acc = (acc + i45 * 13 + 741) % 100003;
  }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  acc = (acc * 31 + 5828) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7751) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const rc1: Rec59 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const ix2: number = buf.indexOf('p59');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  try { if (acc % 29 === 19) { throw new Error('synthetic-6'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k7', acc % 997);
  m01.set('k8', acc % 997);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  if (acc % 7 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-11'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const rc13: Rec59 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  m01.set('k15', acc % 997);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 88) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  acc = acc + 673 - (acc % 35);
  acc = (acc * 31 + 6255) % 65521;
  if (acc % 28 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  acc = acc + 123 - (acc % 88);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  for (let i24 = 0; i24 < 10; i24++) {
    acc = (acc + i24 * 13 + 390) % 100003;
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 139) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  if (acc % 6 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  buf += `q29:${acc % 97}`;
  acc = (acc * 31 + 2588) % 65521;
  const ix31: number = buf.indexOf('p59');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  try { if (acc % 29 === 2) { throw new Error('synthetic-33'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 166) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 153) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  buf += `q38:${acc % 97}`;
  const ix39: number = buf.indexOf('p59');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const ix40: number = buf.indexOf('p59');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += `q42:${acc % 97}`;
  acc = (acc * 31 + 4327) % 65521;
  const rc44: Rec59 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  acc = (acc * 31 + 1965) % 65521;
  acc = acc + 136 - (acc % 28);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  acc = acc + 572 - (acc % 23);
  for (let i49 = 0; i49 < 6; i49++) {
    acc = (acc + i49 * 13 + 83) % 100003;
  }
  if (acc % 30 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7752) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  acc = acc + 252 - (acc % 60);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 2) { throw new Error('synthetic-2'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 86) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (acc % 13 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  acc = acc + 525 - (acc % 23);
  arr.push(acc % 1000);
  if (acc % 19 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  buf += 'region9-' + acc.toString();
  buf += 'waybill10-' + acc.toString();
  buf += 'balance11-' + acc.toString();
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const ix14: number = buf.indexOf('p59');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 180) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'customs18-' + acc.toString();
  acc = acc + 980 - (acc % 64);
  const rc20: Rec59 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = acc + 370 - (acc % 80);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  try { if (acc % 29 === 10) { throw new Error('synthetic-23'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'parcel24-' + acc.toString();
  acc = (acc * 31 + 6663) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const ix27: number = buf.indexOf('p59');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  buf += `q28:${acc % 97}`;
  acc = (acc * 31 + 4445) % 65521;
  acc = (acc * 31 + 7175) % 65521;
  arr.push(acc % 1000);
  const ix32: number = buf.indexOf('p59');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 66) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 671 - (acc % 40);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  acc = acc + 259 - (acc % 11);
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  buf += `q40:${acc % 97}`;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-43'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const ix45: number = buf.indexOf('p59');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  for (let i46 = 0; i46 < 9; i46++) {
    acc = (acc + i46 * 13 + 269) % 100003;
  }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const ix50: number = buf.indexOf('p59');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7753) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  m01.set('k0', acc % 997);
  const ix1: number = buf.indexOf('p59');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  if (acc % 15 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  for (let i4 = 0; i4 < 3; i4++) {
    acc = (acc + i4 * 13 + 644) % 100003;
  }
  m01.set('k5', acc % 997);
  if (acc % 24 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  for (let i7 = 0; i7 < 12; i7++) {
    acc = (acc + i7 * 13 + 247) % 100003;
  }
  const rc8: Rec59 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  for (let i10 = 0; i10 < 4; i10++) {
    acc = (acc + i10 * 13 + 148) % 100003;
  }
  for (let i11 = 0; i11 < 9; i11++) {
    acc = (acc + i11 * 13 + 857) % 100003;
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  for (let i13 = 0; i13 < 3; i13++) {
    acc = (acc + i13 * 13 + 510) % 100003;
  }
  for (let i14 = 0; i14 < 7; i14++) {
    acc = (acc + i14 * 13 + 338) % 100003;
  }
  const ix15: number = buf.indexOf('p59');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 114) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 1291) % 65521;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 183) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  for (let i21 = 0; i21 < 7; i21++) {
    acc = (acc + i21 * 13 + 989) % 100003;
  }
  acc = (acc * 31 + 7111) % 65521;
  m01.set('k23', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  acc = (acc * 31 + 3717) % 65521;
  for (let i26 = 0; i26 < 12; i26++) {
    acc = (acc + i26 * 13 + 313) % 100003;
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const rc29: Rec59 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const rc31: Rec59 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 32) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-35'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 7 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const ix38: number = buf.indexOf('p59');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const ix40: number = buf.indexOf('p59');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-41'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k42', acc % 997);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  buf += `q44:${acc % 97}`;
  arr.push(acc % 1000);
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = (acc * 31 + 2670) % 65521;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 64) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-51'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7754) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const rc2: Rec59 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  m01.set('k3', acc % 997);
  m01.set('k4', acc % 997);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  for (let i7 = 0; i7 < 3; i7++) {
    acc = (acc + i7 * 13 + 598) % 100003;
  }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  arr.push(acc % 1000);
  for (let i10 = 0; i10 < 9; i10++) {
    acc = (acc + i10 * 13 + 602) % 100003;
  }
  for (let i11 = 0; i11 < 5; i11++) {
    acc = (acc + i11 * 13 + 914) % 100003;
  }
  arr.push(acc % 1000);
  const ix13: number = buf.indexOf('p59');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 22) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const rc16: Rec59 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 130) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  acc = (acc * 31 + 5406) % 65521;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 12) { throw new Error('synthetic-23'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 10 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  if (acc % 17 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += 'coupon27-' + acc.toString();
  for (let i28 = 0; i28 < 8; i28++) {
    acc = (acc + i28 * 13 + 345) % 100003;
  }
  acc = (acc * 31 + 7218) % 65521;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const rc32: Rec59 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  try { if (acc % 29 === 3) { throw new Error('synthetic-33'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 95) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  arr.push(acc % 1000);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 14) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  if (acc % 22 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const ix49: number = buf.indexOf('p59');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7755) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const rc1: Rec59 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  buf += `q2:${acc % 97}`;
  if (acc % 27 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 128) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix12: number = buf.indexOf('p59');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  buf += `q14:${acc % 97}`;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 173) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p59');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-21'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const rc24: Rec59 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 140) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 188) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 173) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  if (acc % 31 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  for (let i33 = 0; i33 < 5; i33++) {
    acc = (acc + i33 * 13 + 884) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 40) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 3) { throw new Error('synthetic-35'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k36', acc % 997);
  acc = acc + 332 - (acc % 60);
  if (acc % 13 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const rc42: Rec59 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  buf += `q44:${acc % 97}`;
  acc = (acc * 31 + 8383) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7756) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  try { if (acc % 29 === 10) { throw new Error('synthetic-2'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const rc3: Rec59 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  arr.push(acc % 1000);
  acc = acc + 354 - (acc % 90);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 118) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  acc = (acc * 31 + 2663) % 65521;
  for (let i10 = 0; i10 < 3; i10++) {
    acc = (acc + i10 * 13 + 152) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const ix12: number = buf.indexOf('p59');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4033) % 65521;
  m01.set('k14', acc % 997);
  if (acc % 14 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 43) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 7768) % 65521;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 21) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  if (acc % 24 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 104) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  if (acc % 9 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  m01.set('k23', acc % 997);
  m01.set('k24', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  const ix28: number = buf.indexOf('p59');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 22) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  buf += 'dispatch31-' + acc.toString();
  arr.push(acc % 1000);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 129) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-36'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'warehouse37-' + acc.toString();
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 121) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  m01.set('k43', acc % 997);
  buf += `q44:${acc % 97}`;
  arr.push(acc % 1000);
  buf += 'vendor46-' + acc.toString();
  const rc47: Rec59 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  acc = (acc * 31 + 2600) % 65521;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7757) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  acc = (acc * 31 + 7401) % 65521;
  acc = (acc * 31 + 1556) % 65521;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const rc4: Rec59 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  for (let i5 = 0; i5 < 9; i5++) {
    acc = (acc + i5 * 13 + 437) % 100003;
  }
  buf += 'parcel6-' + acc.toString();
  if (acc % 20 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  buf += 'journey8-' + acc.toString();
  const ix9: number = buf.indexOf('p59');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  acc = acc + 396 - (acc % 23);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  acc = acc + 537 - (acc % 8);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 157) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 73) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = (acc * 31 + 3058) % 65521;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const ix22: number = buf.indexOf('p59');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 55) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const rc26: Rec59 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += `q28:${acc % 97}`;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 15) { throw new Error('synthetic-30'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q31:${acc % 97}`;
  for (let i32 = 0; i32 < 6; i32++) {
    acc = (acc + i32 * 13 + 862) % 100003;
  }
  if (acc % 15 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 142) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 8530) % 65521;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += `q37:${acc % 97}`;
  acc = (acc * 31 + 5959) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  acc = acc + 677 - (acc % 10);
  arr.push(acc % 1000);
  acc = (acc * 31 + 661) % 65521;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const ix45: number = buf.indexOf('p59');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  m01.set('k46', acc % 997);
  if (acc % 6 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  buf += 'balance48-' + acc.toString();
  try { if (acc % 29 === 11) { throw new Error('synthetic-49'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k50', acc % 997);
  acc = acc + 544 - (acc % 55);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7758) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  arr.push(acc % 1000);
  m01.set('k1', acc % 997);
  arr.push(acc % 1000);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  m01.set('k5', acc % 997);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 171) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const rc8: Rec59 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const rc9: Rec59 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  arr.push(acc % 1000);
  acc = (acc * 31 + 3684) % 65521;
  arr.push(acc % 1000);
  acc = acc + 609 - (acc % 52);
  try { if (acc % 29 === 18) { throw new Error('synthetic-14'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 19 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const ix16: number = buf.indexOf('p59');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 93) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p59');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  acc = acc + 820 - (acc % 52);
  buf += `q20:${acc % 97}`;
  for (let i21 = 0; i21 < 10; i21++) {
    acc = (acc + i21 * 13 + 893) % 100003;
  }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 199) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const ix23: number = buf.indexOf('p59');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  m01.set('k24', acc % 997);
  buf += `q25:${acc % 97}`;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  buf += `q27:${acc % 97}`;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  for (let i33 = 0; i33 < 6; i33++) {
    acc = (acc + i33 * 13 + 787) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 27 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  try { if (acc % 29 === 6) { throw new Error('synthetic-37'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k38', acc % 997);
  if (acc % 20 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 114) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = (acc * 31 + 9897) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  acc = (acc * 31 + 8870) % 65521;
  if (acc % 22 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += 'routeplan47-' + acc.toString();
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 6) { throw new Error('synthetic-51'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0059_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0059_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0059_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7759) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  buf += `q2:${acc % 97}`;
  buf += 'freight3-' + acc.toString();
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 373) % 65521;
  const rc6: Rec59 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const ix9: number = buf.indexOf('p59');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 14) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  for (let i13 = 0; i13 < 4; i13++) {
    acc = (acc + i13 * 13 + 727) % 100003;
  }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  if (acc % 25 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 77) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  for (let i19 = 0; i19 < 3; i19++) {
    acc = (acc + i19 * 13 + 529) % 100003;
  }
  const rc20: Rec59 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = (acc * 31 + 953) % 65521;
  buf += `q22:${acc % 97}`;
  acc = acc + 981 - (acc % 8);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const ix25: number = buf.indexOf('p59');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = acc + 417 - (acc % 75);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 140) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 95) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 105) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  m01.set('k38', acc % 997);
  acc = (acc * 31 + 7464) % 65521;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 39) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  try { if (acc % 29 === 22) { throw new Error('synthetic-43'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q44:${acc % 97}`;
  m01.set('k45', acc % 997);
  const ix46: number = buf.indexOf('p59');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  m01.set('k50', acc % 997);
  buf += 'pickup51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7760) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  const ix0: number = buf.indexOf('p59');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = acc + 792 - (acc % 62);
  const ix3: number = buf.indexOf('p59');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const rc5: Rec59 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  try { if (acc % 29 === 21) { throw new Error('synthetic-6'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 62) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 15) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-13'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q14:${acc % 97}`;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 15) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  acc = acc + 763 - (acc % 45);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 24) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  acc = acc + 924 - (acc % 50);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (acc % 17 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += `q22:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  acc = (acc * 31 + 2773) % 65521;
  buf += 'transit27-' + acc.toString();
  buf += 'depot28-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += `q31:${acc % 97}`;
  const ix32: number = buf.indexOf('p59');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 37) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 10; i35++) {
    acc = (acc + i35 * 13 + 411) % 100003;
  }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 185) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 94) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  buf += `q44:${acc % 97}`;
  acc = (acc * 31 + 3931) % 65521;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  buf += 'depot48-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7761) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const ix1: number = buf.indexOf('p59');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-3'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q4:${acc % 97}`;
  const rc5: Rec59 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  try { if (acc % 29 === 12) { throw new Error('synthetic-8'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const ix10: number = buf.indexOf('p59');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 67) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const ix12: number = buf.indexOf('p59');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const ix14: number = buf.indexOf('p59');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += `q15:${acc % 97}`;
  const ix16: number = buf.indexOf('p59');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 56) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 33) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q21:${acc % 97}`;
  m01.set('k22', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  for (let i25 = 0; i25 < 3; i25++) {
    acc = (acc + i25 * 13 + 633) % 100003;
  }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  acc = (acc * 31 + 1264) % 65521;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 179) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 194) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 119) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const rc39: Rec59 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  acc = (acc * 31 + 4823) % 65521;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  buf += `q43:${acc % 97}`;
  try { if (acc % 29 === 10) { throw new Error('synthetic-44'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i45 = 0; i45 < 6; i45++) {
    acc = (acc + i45 * 13 + 955) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  try { if (acc % 29 === 15) { throw new Error('synthetic-47'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q48:${acc % 97}`;
  acc = acc + 532 - (acc % 62);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = (acc * 31 + 4623) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7762) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  buf += `q0:${acc % 97}`;
  buf += 'parcel1-' + acc.toString();
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  m01.set('k4', acc % 997);
  acc = (acc * 31 + 762) % 65521;
  const rc6: Rec59 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const ix7: number = buf.indexOf('p59');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  for (let i8 = 0; i8 < 11; i8++) {
    acc = (acc + i8 * 13 + 823) % 100003;
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 18) { throw new Error('synthetic-10'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  if (acc % 28 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += `q14:${acc % 97}`;
  acc = (acc * 31 + 9233) % 65521;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 162) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const rc19: Rec59 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q22:${acc % 97}`;
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 133) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 85) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  acc = acc + 418 - (acc % 68);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const rc29: Rec59 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 51) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  if (acc % 30 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  if (acc % 27 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 16) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  try { if (acc % 29 === 11) { throw new Error('synthetic-37'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-44'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  buf += 'warehouse46-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-47'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 118) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  m01.set('k49', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 94) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7763) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 36) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  buf += 'rebate3-' + acc.toString();
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  if (acc % 18 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const ix9: number = buf.indexOf('p59');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  m01.set('k10', acc % 997);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 160) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  const rc14: Rec59 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  acc = (acc * 31 + 6762) % 65521;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 58) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 2582) % 65521;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  if (acc % 16 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const ix21: number = buf.indexOf('p59');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  m01.set('k23', acc % 997);
  buf += `q24:${acc % 97}`;
  const ix25: number = buf.indexOf('p59');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  if (acc % 27 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = acc + 931 - (acc % 34);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 177) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  acc = (acc * 31 + 4271) % 65521;
  buf += 'quota31-' + acc.toString();
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 192) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 8; i35++) {
    acc = (acc + i35 * 13 + 953) % 100003;
  }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  acc = (acc * 31 + 5025) % 65521;
  acc = acc + 674 - (acc % 79);
  acc = (acc * 31 + 1141) % 65521;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 30) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  try { if (acc % 29 === 16) { throw new Error('synthetic-42'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 2027) % 65521;
  acc = acc + 937 - (acc % 33);
  acc = acc + 204 - (acc % 81);
  const rc46: Rec59 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 114) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  m01.set('k49', acc % 997);
  buf += `q50:${acc % 97}`;
  if (acc % 6 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7764) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  arr.push(acc % 1000);
  for (let i2 = 0; i2 < 4; i2++) {
    acc = (acc + i2 * 13 + 381) % 100003;
  }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  buf += 'pallet4-' + acc.toString();
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const rc8: Rec59 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  if (acc % 26 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const rc10: Rec59 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += `q12:${acc % 97}`;
  const rc13: Rec59 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  acc = acc + 864 - (acc % 27);
  arr.push(acc % 1000);
  for (let i16 = 0; i16 < 6; i16++) {
    acc = (acc + i16 * 13 + 204) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 48) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 23 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += 'journey19-' + acc.toString();
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  acc = (acc * 31 + 9275) % 65521;
  acc = (acc * 31 + 4608) % 65521;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  arr.push(acc % 1000);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 143) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const ix28: number = buf.indexOf('p59');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  m01.set('k32', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 44) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 540 - (acc % 39);
  m01.set('k36', acc % 997);
  buf += `q37:${acc % 97}`;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const rc39: Rec59 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  buf += `q40:${acc % 97}`;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  buf += `q45:${acc % 97}`;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  if (acc % 23 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = acc + 791 - (acc % 23);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7765) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  const ix0: number = buf.indexOf('p59');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  const ix1: number = buf.indexOf('p59');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  if (acc % 22 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-4'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-5'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 77) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const ix7: number = buf.indexOf('p59');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += 'warehouse9-' + acc.toString();
  const rc10: Rec59 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  m01.set('k11', acc % 997);
  if (acc % 23 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += `q14:${acc % 97}`;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const ix16: number = buf.indexOf('p59');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 175) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const rc20: Rec59 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  buf += `q21:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  try { if (acc % 29 === 16) { throw new Error('synthetic-23'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-25'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  if (acc % 6 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = acc + 822 - (acc % 66);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 35) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const ix38: number = buf.indexOf('p59');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  for (let i39 = 0; i39 < 7; i39++) {
    acc = (acc + i39 * 13 + 112) % 100003;
  }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  buf += 'carrier41-' + acc.toString();
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  buf += 'payout43-' + acc.toString();
  if (acc % 22 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  buf += 'quota45-' + acc.toString();
  arr.push(acc % 1000);
  for (let i47 = 0; i47 < 9; i47++) {
    acc = (acc + i47 * 13 + 95) % 100003;
  }
  const rc48: Rec59 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  for (let i49 = 0; i49 < 6; i49++) {
    acc = (acc + i49 * 13 + 371) % 100003;
  }
  arr.push(acc % 1000);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7766) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  buf += `q1:${acc % 97}`;
  buf += `q2:${acc % 97}`;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += `q6:${acc % 97}`;
  acc = acc + 109 - (acc % 69);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  m01.set('k9', acc % 997);
  buf += 'pallet10-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const ix13: number = buf.indexOf('p59');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  if (acc % 12 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 134) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 11; i18++) {
    acc = (acc + i18 * 13 + 16) % 100003;
  }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 20) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  const ix20: number = buf.indexOf('p59');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const rc22: Rec59 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const rc23: Rec59 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  arr.push(acc % 1000);
  buf += 'tariff25-' + acc.toString();
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 122) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  acc = acc + 674 - (acc % 13);
  const rc32: Rec59 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += 'tariff33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 84) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  acc = acc + 916 - (acc % 78);
  try { if (acc % 29 === 14) { throw new Error('synthetic-38'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  for (let i40 = 0; i40 < 8; i40++) {
    acc = (acc + i40 * 13 + 548) % 100003;
  }
  acc = acc + 736 - (acc % 87);
  arr.push(acc % 1000);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  acc = acc + 331 - (acc % 65);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += `q47:${acc % 97}`;
  acc = acc + 631 - (acc % 7);
  arr.push(acc % 1000);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  acc = acc + 987 - (acc % 46);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7767) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  buf += 'shelf0-' + acc.toString();
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  m01.set('k2', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  acc = acc + 994 - (acc % 86);
  const ix5: number = buf.indexOf('p59');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 701) % 65521;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = acc + 410 - (acc % 63);
  m01.set('k11', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 12) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  for (let i19 = 0; i19 < 12; i19++) {
    acc = (acc + i19 * 13 + 945) % 100003;
  }
  acc = acc + 609 - (acc % 29);
  m01.set('k21', acc % 997);
  for (let i22 = 0; i22 < 10; i22++) {
    acc = (acc + i22 * 13 + 794) % 100003;
  }
  m01.set('k23', acc % 997);
  arr.push(acc % 1000);
  buf += 'audit25-' + acc.toString();
  buf += `q26:${acc % 97}`;
  buf += `q27:${acc % 97}`;
  acc = (acc * 31 + 6728) % 65521;
  m01.set('k29', acc % 997);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  for (let i31 = 0; i31 < 4; i31++) {
    acc = (acc + i31 * 13 + 190) % 100003;
  }
  const ix32: number = buf.indexOf('p59');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 48) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  acc = acc + 336 - (acc % 61);
  for (let i37 = 0; i37 < 10; i37++) {
    acc = (acc + i37 * 13 + 159) % 100003;
  }
  acc = acc + 577 - (acc % 11);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const ix40: number = buf.indexOf('p59');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 213) % 65521;
  for (let i42 = 0; i42 < 7; i42++) {
    acc = (acc + i42 * 13 + 459) % 100003;
  }
  arr.push(acc % 1000);
  acc = acc + 703 - (acc % 64);
  acc = acc + 662 - (acc % 23);
  try { if (acc % 29 === 8) { throw new Error('synthetic-46'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7768) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  arr.push(acc % 1000);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  const rc3: Rec59 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  m01.set('k4', acc % 997);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'crate7-' + acc.toString();
  m01.set('k8', acc % 997);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  m01.set('k10', acc % 997);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  buf += `q12:${acc % 97}`;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  const ix14: number = buf.indexOf('p59');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  for (let i15 = 0; i15 < 4; i15++) {
    acc = (acc + i15 * 13 + 524) % 100003;
  }
  const ix16: number = buf.indexOf('p59');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 135) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += 'warehouse23-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  for (let i27 = 0; i27 < 8; i27++) {
    acc = (acc + i27 * 13 + 161) % 100003;
  }
  const ix28: number = buf.indexOf('p59');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const rc29: Rec59 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  if (acc % 24 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-32'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 123) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  m01.set('k38', acc % 997);
  acc = (acc * 31 + 3082) % 65521;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  if (acc % 13 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2308) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = acc + 924 - (acc % 82);
  buf += `q49:${acc % 97}`;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0059_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0059_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0059_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7769) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  for (let i0 = 0; i0 < 10; i0++) {
    acc = (acc + i0 * 13 + 712) % 100003;
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  const ix3: number = buf.indexOf('p59');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  buf += `q4:${acc % 97}`;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  acc = acc + 107 - (acc % 19);
  try { if (acc % 29 === 14) { throw new Error('synthetic-8'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const rc9: Rec59 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  acc = (acc * 31 + 5689) % 65521;
  const rc11: Rec59 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 149) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  m01.set('k14', acc % 997);
  buf += 'transit15-' + acc.toString();
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 153) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec59 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  buf += `q19:${acc % 97}`;
  try { if (acc % 29 === 17) { throw new Error('synthetic-20'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i21 = 0; i21 < 5; i21++) {
    acc = (acc + i21 * 13 + 646) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  for (let i24 = 0; i24 < 4; i24++) {
    acc = (acc + i24 * 13 + 144) % 100003;
  }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  buf += 'shelf26-' + acc.toString();
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  acc = acc + 621 - (acc % 13);
  const rc29: Rec59 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  acc = acc + 540 - (acc % 36);
  acc = acc + 51 - (acc % 84);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 166) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 40) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 183) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  m01.set('k38', acc % 997);
  m01.set('k39', acc % 997);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-42'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  const ix43: number = buf.indexOf('p59');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const rc44: Rec59 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  if (acc % 30 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  arr.push(acc % 1000);
  for (let i48 = 0; i48 < 6; i48++) {
    acc = (acc + i48 * 13 + 560) % 100003;
  }
  acc = acc + 578 - (acc % 50);
  buf += 'stocktake50-' + acc.toString();
  for (let i51 = 0; i51 < 3; i51++) {
    acc = (acc + i51 * 13 + 314) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7770) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += `q1:${acc % 97}`;
  try { if (acc % 29 === 15) { throw new Error('synthetic-2'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  arr.push(acc % 1000);
  buf += `q6:${acc % 97}`;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  buf += 'depot8-' + acc.toString();
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 34) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  m01.set('k10', acc % 997);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  buf += 'ticket12-' + acc.toString();
  const ix13: number = buf.indexOf('p59');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  for (let i14 = 0; i14 < 8; i14++) {
    acc = (acc + i14 * 13 + 306) % 100003;
  }
  arr.push(acc % 1000);
  if (acc % 8 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 142) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-20'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const rc21: Rec59 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  for (let i23 = 0; i23 < 9; i23++) {
    acc = (acc + i23 * 13 + 185) % 100003;
  }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  arr.push(acc % 1000);
  const ix26: number = buf.indexOf('p59');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-27'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const rc28: Rec59 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = acc + 41 - (acc % 17);
  try { if (acc % 29 === 14) { throw new Error('synthetic-30'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const ix31: number = buf.indexOf('p59');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-32'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'tariff33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 53) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  if (acc % 10 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  buf += 'parcel39-' + acc.toString();
  m01.set('k40', acc % 997);
  if (acc % 6 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  acc = (acc * 31 + 9604) % 65521;
  m01.set('k44', acc % 997);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  buf += `q47:${acc % 97}`;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  acc = acc + 168 - (acc % 56);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0059_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7771) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit59 = new Unit59(acc);
  acc = acc + 628 - (acc % 71);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  m01.set('k4', acc % 997);
  const rc5: Rec59 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += 'carrier6-' + acc.toString();
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 139) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const ix9: number = buf.indexOf('p59');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  buf += `q10:${acc % 97}`;
  buf += `q11:${acc % 97}`;
  if (acc % 18 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  if (acc % 6 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const rc14: Rec59 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  acc = acc + 794 - (acc % 62);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 38) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  buf += `q21:${acc % 97}`;
  const rc22: Rec59 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  m01.set('k24', acc % 997);
  acc = (acc * 31 + 7956) % 65521;
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  const ix27: number = buf.indexOf('p59');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  for (let i28 = 0; i28 < 8; i28++) {
    acc = (acc + i28 * 13 + 484) % 100003;
  }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  buf += `q30:${acc % 97}`;
  const ix31: number = buf.indexOf('p59');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  acc = acc + 126 - (acc % 26);
  for (let i33 = 0; i33 < 3; i33++) {
    acc = (acc + i33 * 13 + 89) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 82) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  arr.push(acc % 1000);
  acc = acc + 717 - (acc % 44);
  buf += 'client41-' + acc.toString();
  m01.set('k42', acc % 997);
  const rc43: Rec59 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  acc = (acc * 31 + 3821) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  for (let i47 = 0; i47 < 5; i47++) {
    acc = (acc + i47 * 13 + 135) % 100003;
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 194) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  acc = acc + 268 - (acc % 64);
  const ix50: number = buf.indexOf('p59');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0059(): BizFn[] {
  return [biz_0059_00, biz_0059_01, biz_0059_02, biz_0059_03, biz_0059_04, biz_0059_05, biz_0059_06, biz_0059_07, biz_0059_08, biz_0059_09, biz_0059_10, biz_0059_11, biz_0059_12, biz_0059_13, biz_0059_14, biz_0059_15, biz_0059_16, biz_0059_17, biz_0059_18, biz_0059_19, biz_0059_20, biz_0059_21, biz_0059_22, biz_0059_23, biz_0059_24, biz_0059_25, biz_0059_26, biz_0059_27, biz_0059_28, biz_0059_29, biz_0059_30, biz_0059_31, biz_0059_32, biz_0059_33, biz_0059_34, biz_0059_35, biz_0059_36, biz_0059_37, biz_0059_38, biz_0059_39, biz_0059_40, biz_0059_41, biz_0059_42];
}

export function rega_0059(): ABizFn[] {
  return [biz_0059_09a, biz_0059_19a, biz_0059_29a, biz_0059_39a];
}
