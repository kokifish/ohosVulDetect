// Biz0021.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec21 { id: number; tag: string; score: number; }

class Unit21 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0021_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2751) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  buf += `q0:${acc % 97}`;
  for (let i1 = 0; i1 < 11; i1++) {
    acc = (acc + i1 * 13 + 306) % 100003;
  }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  m01.set('k3', acc % 997);
  m01.set('k4', acc % 997);
  buf += `q5:${acc % 97}`;
  const ix6: number = buf.indexOf('p21');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 60) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 187) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const rc11: Rec21 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  acc = (acc * 31 + 6891) % 65521;
  m01.set('k13', acc % 997);
  try { if (acc % 29 === 13) { throw new Error('synthetic-14'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'settle15-' + acc.toString();
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 107) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  buf += `q21:${acc % 97}`;
  acc = acc + 897 - (acc % 87);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  acc = acc + 94 - (acc % 76);
  acc = (acc * 31 + 1884) % 65521;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = (acc * 31 + 6533) % 65521;
  buf += 'quota28-' + acc.toString();
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 27) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = acc + 274 - (acc % 96);
  const ix32: number = buf.indexOf('p21');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 91) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 8033) % 65521;
  buf += 'shelf36-' + acc.toString();
  try { if (acc % 29 === 5) { throw new Error('synthetic-37'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'settle38-' + acc.toString();
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (acc % 27 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  m01.set('k45', acc % 997);
  const rc46: Rec21 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const ix49: number = buf.indexOf('p21');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const rc50: Rec21 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2752) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  if (acc % 14 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += `q2:${acc % 97}`;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  buf += 'audit4-' + acc.toString();
  m01.set('k5', acc % 997);
  if (acc % 23 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const rc7: Rec21 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const rc10: Rec21 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  buf += 'journey12-' + acc.toString();
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const rc15: Rec21 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 40) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p21');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const rc20: Rec21 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  buf += `q21:${acc % 97}`;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  buf += `q23:${acc % 97}`;
  m01.set('k24', acc % 997);
  const rc25: Rec21 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  for (let i26 = 0; i26 < 4; i26++) {
    acc = (acc + i26 * 13 + 211) % 100003;
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 51) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  m01.set('k30', acc % 997);
  for (let i31 = 0; i31 < 8; i31++) {
    acc = (acc + i31 * 13 + 688) % 100003;
  }
  m01.set('k32', acc % 997);
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 21) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec21 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  m01.set('k36', acc % 997);
  acc = acc + 563 - (acc % 24);
  buf += 'crate38-' + acc.toString();
  acc = acc + 264 - (acc % 18);
  const rc40: Rec21 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  m01.set('k41', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 3486) % 65521;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += `q45:${acc % 97}`;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  for (let i48 = 0; i48 < 5; i48++) {
    acc = (acc + i48 * 13 + 531) % 100003;
  }
  acc = (acc * 31 + 5669) % 65521;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 176) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  buf += 'transit51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2753) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  try { if (acc % 29 === 14) { throw new Error('synthetic-0'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 120) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const rc2: Rec21 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  if (acc % 12 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  m01.set('k7', acc % 997);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += 'client14-' + acc.toString();
  arr.push(acc % 1000);
  try { if (acc % 29 === 16) { throw new Error('synthetic-16'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 167) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  for (let i19 = 0; i19 < 6; i19++) {
    acc = (acc + i19 * 13 + 592) % 100003;
  }
  for (let i20 = 0; i20 < 4; i20++) {
    acc = (acc + i20 * 13 + 110) % 100003;
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-21'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  const rc22: Rec21 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const ix25: number = buf.indexOf('p21');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const ix26: number = buf.indexOf('p21');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  m01.set('k28', acc % 997);
  if (acc % 16 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += `q30:${acc % 97}`;
  for (let i31 = 0; i31 < 6; i31++) {
    acc = (acc + i31 * 13 + 498) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 175) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  m01.set('k38', acc % 997);
  m01.set('k39', acc % 997);
  acc = acc + 835 - (acc % 90);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  buf += 'vendor42-' + acc.toString();
  for (let i43 = 0; i43 < 12; i43++) {
    acc = (acc + i43 * 13 + 783) % 100003;
  }
  buf += 'rebate44-' + acc.toString();
  if (acc % 28 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  if (acc % 8 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  buf += 'sku49-' + acc.toString();
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += 'vendor51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2754) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  const ix0: number = buf.indexOf('p21');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  m01.set('k2', acc % 997);
  buf += `q3:${acc % 97}`;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-5'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  arr.push(acc % 1000);
  buf += 'routeplan9-' + acc.toString();
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  buf += `q12:${acc % 97}`;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const ix14: number = buf.indexOf('p21');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 144) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 147) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 398 - (acc % 20);
  m01.set('k19', acc % 997);
  acc = (acc * 31 + 4011) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 93) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  m01.set('k24', acc % 997);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  buf += `q28:${acc % 97}`;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 135) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  for (let i30 = 0; i30 < 12; i30++) {
    acc = (acc + i30 * 13 + 584) % 100003;
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  m01.set('k32', acc % 997);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 47) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 246 - (acc % 18);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  if (acc % 29 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  buf += 'rebate40-' + acc.toString();
  buf += 'vendor41-' + acc.toString();
  if (acc % 18 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-43'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7478) % 65521;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  for (let i49 = 0; i49 < 4; i49++) {
    acc = (acc + i49 * 13 + 984) % 100003;
  }
  if (acc % 30 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2755) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  for (let i1 = 0; i1 < 12; i1++) {
    acc = (acc + i1 * 13 + 189) % 100003;
  }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += 'order4-' + acc.toString();
  if (acc % 27 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  buf += `q6:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = acc + 891 - (acc % 76);
  acc = (acc * 31 + 9055) % 65521;
  acc = (acc * 31 + 4789) % 65521;
  m01.set('k11', acc % 997);
  acc = acc + 643 - (acc % 86);
  m01.set('k13', acc % 997);
  acc = acc + 401 - (acc % 90);
  m01.set('k15', acc % 997);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 61) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const ix19: number = buf.indexOf('p21');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3282) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-21'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const ix22: number = buf.indexOf('p21');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const rc25: Rec21 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  buf += `q26:${acc % 97}`;
  try { if (acc % 29 === 17) { throw new Error('synthetic-27'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-28'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const ix29: number = buf.indexOf('p21');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  try { if (acc % 29 === 19) { throw new Error('synthetic-31'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-32'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 166) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  acc = acc + 606 - (acc % 86);
  arr.push(acc % 1000);
  acc = (acc * 31 + 8940) % 65521;
  const ix40: number = buf.indexOf('p21');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  for (let i44 = 0; i44 < 9; i44++) {
    acc = (acc + i44 * 13 + 935) % 100003;
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  if (acc % 30 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  if (acc % 16 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  buf += `q49:${acc % 97}`;
  acc = (acc * 31 + 9430) % 65521;
  for (let i51 = 0; i51 < 5; i51++) {
    acc = (acc + i51 * 13 + 101) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2756) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  buf += `q0:${acc % 97}`;
  acc = acc + 151 - (acc % 32);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 155) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  buf += 'freight3-' + acc.toString();
  const ix4: number = buf.indexOf('p21');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  acc = acc + 379 - (acc % 34);
  const ix16: number = buf.indexOf('p21');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 78) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const ix19: number = buf.indexOf('p21');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  for (let i21 = 0; i21 < 8; i21++) {
    acc = (acc + i21 * 13 + 172) % 100003;
  }
  buf += 'pallet22-' + acc.toString();
  acc = (acc * 31 + 2286) % 65521;
  for (let i24 = 0; i24 < 9; i24++) {
    acc = (acc + i24 * 13 + 742) % 100003;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-25'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  m01.set('k27', acc % 997);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  if (acc % 19 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const ix31: number = buf.indexOf('p21');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 150) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  buf += 'tariff36-' + acc.toString();
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  m01.set('k38', acc % 997);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 107) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  acc = (acc * 31 + 4245) % 65521;
  acc = acc + 209 - (acc % 49);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  m01.set('k44', acc % 997);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 122) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += 'routeplan46-' + acc.toString();
  buf += `q47:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = acc + 516 - (acc % 79);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2757) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  m01.set('k2', acc % 997);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 148) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  acc = acc + 56 - (acc % 87);
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  m01.set('k8', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = acc + 223 - (acc % 16);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 41) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  acc = (acc * 31 + 8235) % 65521;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const rc14: Rec21 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const rc15: Rec21 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const ix16: number = buf.indexOf('p21');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 133) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  buf += 'portal19-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  for (let i21 = 0; i21 < 9; i21++) {
    acc = (acc + i21 * 13 + 45) % 100003;
  }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  buf += 'settle23-' + acc.toString();
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  m01.set('k25', acc % 997);
  const ix26: number = buf.indexOf('p21');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 147) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  acc = acc + 658 - (acc % 82);
  acc = (acc * 31 + 4593) % 65521;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 138) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 40) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  acc = acc + 654 - (acc % 82);
  const ix37: number = buf.indexOf('p21');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  buf += 'journey40-' + acc.toString();
  const ix41: number = buf.indexOf('p21');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const rc42: Rec21 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const ix44: number = buf.indexOf('p21');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  buf += `q46:${acc % 97}`;
  if (acc % 18 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 58) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  for (let i50 = 0; i50 < 12; i50++) {
    acc = (acc + i50 * 13 + 727) % 100003;
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 168) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2758) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 57) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  const ix1: number = buf.indexOf('p21');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  buf += 'sku2-' + acc.toString();
  try { if (acc % 29 === 6) { throw new Error('synthetic-3'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  acc = (acc * 31 + 1190) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-6'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-9'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 67 - (acc % 88);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  for (let i13 = 0; i13 < 3; i13++) {
    acc = (acc + i13 * 13 + 679) % 100003;
  }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  arr.push(acc % 1000);
  acc = acc + 269 - (acc % 30);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 14) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 619 - (acc % 75);
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 119) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  for (let i23 = 0; i23 < 7; i23++) {
    acc = (acc + i23 * 13 + 632) % 100003;
  }
  acc = acc + 429 - (acc % 38);
  acc = acc + 271 - (acc % 48);
  acc = (acc * 31 + 7710) % 65521;
  buf += 'parcel27-' + acc.toString();
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  buf += `q29:${acc % 97}`;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  if (acc % 30 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  m01.set('k32', acc % 997);
  try { if (acc % 29 === 18) { throw new Error('synthetic-33'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 114) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const rc38: Rec21 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const rc39: Rec21 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  for (let i41 = 0; i41 < 8; i41++) {
    acc = (acc + i41 * 13 + 974) % 100003;
  }
  m01.set('k42', acc % 997);
  try { if (acc % 29 === 8) { throw new Error('synthetic-43'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i44 = 0; i44 < 4; i44++) {
    acc = (acc + i44 * 13 + 702) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  for (let i50 = 0; i50 < 11; i50++) {
    acc = (acc + i50 * 13 + 110) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2759) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  buf += 'dispatch2-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i5 = 0; i5 < 11; i5++) {
    acc = (acc + i5 * 13 + 150) % 100003;
  }
  for (let i6 = 0; i6 < 4; i6++) {
    acc = (acc + i6 * 13 + 729) % 100003;
  }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 103) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  if (acc % 17 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const ix11: number = buf.indexOf('p21');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const rc12: Rec21 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const rc14: Rec21 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 152) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-20'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  const ix21: number = buf.indexOf('p21');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const ix23: number = buf.indexOf('p21');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (acc % 21 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-27'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 124) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const rc30: Rec21 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  acc = acc + 177 - (acc % 14);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 44) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  try { if (acc % 29 === 10) { throw new Error('synthetic-36'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  for (let i38 = 0; i38 < 5; i38++) {
    acc = (acc + i38 * 13 + 305) % 100003;
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 98) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  try { if (acc % 29 === 6) { throw new Error('synthetic-41'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  const rc42: Rec21 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  acc = acc + 284 - (acc % 54);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += 'coupon45-' + acc.toString();
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  arr.push(acc % 1000);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 86) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const rc49: Rec21 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2760) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  buf += 'vendor0-' + acc.toString();
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  buf += 'depot2-' + acc.toString();
  arr.push(acc % 1000);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  m01.set('k5', acc % 997);
  buf += 'depot6-' + acc.toString();
  for (let i7 = 0; i7 < 9; i7++) {
    acc = (acc + i7 * 13 + 965) % 100003;
  }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  acc = acc + 625 - (acc % 87);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  buf += 'bay12-' + acc.toString();
  arr.push(acc % 1000);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 52) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec21 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const ix19: number = buf.indexOf('p21');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += `q20:${acc % 97}`;
  if (acc % 21 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  if (acc % 19 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  if (acc % 30 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  acc = (acc * 31 + 4441) % 65521;
  const ix25: number = buf.indexOf('p21');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  for (let i26 = 0; i26 < 3; i26++) {
    acc = (acc + i26 * 13 + 546) % 100003;
  }
  acc = acc + 108 - (acc % 12);
  acc = acc + 81 - (acc % 93);
  arr.push(acc % 1000);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const rc32: Rec21 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += 'region33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 35) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 175) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  buf += `q37:${acc % 97}`;
  acc = acc + 386 - (acc % 57);
  acc = (acc * 31 + 2866) % 65521;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (acc % 15 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  buf += `q42:${acc % 97}`;
  buf += 'warehouse43-' + acc.toString();
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const ix45: number = buf.indexOf('p21');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  for (let i47 = 0; i47 < 5; i47++) {
    acc = (acc + i47 * 13 + 273) % 100003;
  }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 21) { throw new Error('synthetic-51'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0021_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0021_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0021_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2761) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  m01.set('k0', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 633) % 65521;
  buf += 'customs3-' + acc.toString();
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 113) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  acc = (acc * 31 + 3894) % 65521;
  for (let i7 = 0; i7 < 10; i7++) {
    acc = (acc + i7 * 13 + 231) % 100003;
  }
  acc = acc + 530 - (acc % 66);
  buf += 'sku9-' + acc.toString();
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  buf += `q12:${acc % 97}`;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  if (acc % 20 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 96) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  acc = acc + 188 - (acc % 80);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 120) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-18'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  buf += `q20:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  arr.push(acc % 1000);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  try { if (acc % 29 === 17) { throw new Error('synthetic-26'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const ix27: number = buf.indexOf('p21');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  try { if (acc % 29 === 9) { throw new Error('synthetic-30'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 82) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  buf += 'region32-' + acc.toString();
  if (acc % 18 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 57) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  buf += `q37:${acc % 97}`;
  try { if (acc % 29 === 10) { throw new Error('synthetic-38'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k39', acc % 997);
  buf += `q40:${acc % 97}`;
  try { if (acc % 29 === 8) { throw new Error('synthetic-41'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 151) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  acc = (acc * 31 + 7285) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const ix46: number = buf.indexOf('p21');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  if (acc % 24 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-50'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2762) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  for (let i0 = 0; i0 < 11; i0++) {
    acc = (acc + i0 * 13 + 680) % 100003;
  }
  buf += `q1:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const ix3: number = buf.indexOf('p21');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 105) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  m01.set('k5', acc % 997);
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const ix7: number = buf.indexOf('p21');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const ix12: number = buf.indexOf('p21');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  buf += `q15:${acc % 97}`;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 148) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 30 - (acc % 92);
  try { if (acc % 29 === 23) { throw new Error('synthetic-19'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 278 - (acc % 8);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q22:${acc % 97}`;
  buf += 'waybill23-' + acc.toString();
  m01.set('k24', acc % 997);
  buf += `q25:${acc % 97}`;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = acc + 755 - (acc % 93);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-29'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const rc30: Rec21 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  arr.push(acc % 1000);
  try { if (acc % 29 === 12) { throw new Error('synthetic-32'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-33'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 148) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  for (let i37 = 0; i37 < 6; i37++) {
    acc = (acc + i37 * 13 + 917) % 100003;
  }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = (acc * 31 + 4660) % 65521;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const ix41: number = buf.indexOf('p21');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 3582) % 65521;
  const rc44: Rec21 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  try { if (acc % 29 === 22) { throw new Error('synthetic-45'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4531) % 65521;
  if (acc % 13 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = acc + 767 - (acc % 45);
  m01.set('k49', acc % 997);
  const rc50: Rec21 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  acc = (acc * 31 + 3937) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2763) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 127) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-1'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  m01.set('k4', acc % 997);
  acc = acc + 156 - (acc % 32);
  for (let i6 = 0; i6 < 7; i6++) {
    acc = (acc + i6 * 13 + 897) % 100003;
  }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-8'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q9:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  arr.push(acc % 1000);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  try { if (acc % 29 === 19) { throw new Error('synthetic-16'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 106) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  acc = acc + 81 - (acc % 96);
  arr.push(acc % 1000);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += 'rebate23-' + acc.toString();
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  acc = (acc * 31 + 2086) % 65521;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  if (acc % 14 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  m01.set('k29', acc % 997);
  for (let i30 = 0; i30 < 4; i30++) {
    acc = (acc + i30 * 13 + 543) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 51) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  acc = acc + 823 - (acc % 40);
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  buf += 'freight42-' + acc.toString();
  if (acc % 24 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (acc % 19 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  for (let i48 = 0; i48 < 3; i48++) {
    acc = (acc + i48 * 13 + 837) % 100003;
  }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  buf += 'coupon50-' + acc.toString();
  buf += 'dispatch51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2764) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  arr.push(acc % 1000);
  acc = (acc * 31 + 9030) % 65521;
  const rc5: Rec21 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  arr.push(acc % 1000);
  for (let i7 = 0; i7 < 11; i7++) {
    acc = (acc + i7 * 13 + 508) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  acc = (acc * 31 + 3349) % 65521;
  acc = (acc * 31 + 4450) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-12'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 6 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 165) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 138) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  arr.push(acc % 1000);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 160) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  acc = acc + 754 - (acc % 36);
  const rc24: Rec21 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  arr.push(acc % 1000);
  acc = (acc * 31 + 5057) % 65521;
  buf += 'order27-' + acc.toString();
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  acc = acc + 705 - (acc % 84);
  const ix30: number = buf.indexOf('p21');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  buf += 'pallet32-' + acc.toString();
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 112) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 24 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  m01.set('k39', acc % 997);
  try { if (acc % 29 === 2) { throw new Error('synthetic-40'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q41:${acc % 97}`;
  const ix42: number = buf.indexOf('p21');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  try { if (acc % 29 === 10) { throw new Error('synthetic-45'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  if (acc % 9 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  buf += `q48:${acc % 97}`;
  acc = acc + 85 - (acc % 47);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const ix51: number = buf.indexOf('p21');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2765) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  acc = acc + 296 - (acc % 81);
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  try { if (acc % 29 === 6) { throw new Error('synthetic-2'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = acc + 724 - (acc % 91);
  for (let i5 = 0; i5 < 12; i5++) {
    acc = (acc + i5 * 13 + 559) % 100003;
  }
  m01.set('k6', acc % 997);
  const ix7: number = buf.indexOf('p21');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
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
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 156) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix15: number = buf.indexOf('p21');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 193) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 182) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  arr.push(acc % 1000);
  buf += 'batch20-' + acc.toString();
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  m01.set('k23', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  for (let i26 = 0; i26 < 11; i26++) {
    acc = (acc + i26 * 13 + 408) % 100003;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-27'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q29:${acc % 97}`;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  m01.set('k32', acc % 997);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 196) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const rc36: Rec21 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  acc = (acc * 31 + 6423) % 65521;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  for (let i40 = 0; i40 < 5; i40++) {
    acc = (acc + i40 * 13 + 538) % 100003;
  }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 72) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const rc42: Rec21 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  for (let i43 = 0; i43 < 8; i43++) {
    acc = (acc + i43 * 13 + 582) % 100003;
  }
  arr.push(acc % 1000);
  acc = acc + 242 - (acc % 12);
  try { if (acc % 29 === 6) { throw new Error('synthetic-46'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k47', acc % 997);
  try { if (acc % 29 === 15) { throw new Error('synthetic-48'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const ix50: number = buf.indexOf('p21');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 9919) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2766) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  m01.set('k0', acc % 997);
  acc = (acc * 31 + 569) % 65521;
  acc = acc + 547 - (acc % 36);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  buf += `q4:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  for (let i6 = 0; i6 < 12; i6++) {
    acc = (acc + i6 * 13 + 271) % 100003;
  }
  buf += 'order7-' + acc.toString();
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  if (acc % 27 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  if (acc % 21 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  if (acc % 17 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const rc12: Rec21 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const ix13: number = buf.indexOf('p21');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 1812) % 65521;
  acc = (acc * 31 + 2422) % 65521;
  for (let i16 = 0; i16 < 9; i16++) {
    acc = (acc + i16 * 13 + 544) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 110) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 5 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const ix20: number = buf.indexOf('p21');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  m01.set('k21', acc % 997);
  buf += 'warehouse22-' + acc.toString();
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  arr.push(acc % 1000);
  const rc25: Rec21 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = (acc * 31 + 6130) % 65521;
  if (acc % 20 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 56) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  buf += `q36:${acc % 97}`;
  for (let i37 = 0; i37 < 12; i37++) {
    acc = (acc + i37 * 13 + 291) % 100003;
  }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 50) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = acc + 196 - (acc % 90);
  buf += `q41:${acc % 97}`;
  try { if (acc % 29 === 9) { throw new Error('synthetic-42'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const ix44: number = buf.indexOf('p21');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  acc = acc + 333 - (acc % 59);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  m01.set('k48', acc % 997);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 26) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2767) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  try { if (acc % 29 === 4) { throw new Error('synthetic-0'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-1'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  m01.set('k3', acc % 997);
  m01.set('k4', acc % 997);
  try { if (acc % 29 === 14) { throw new Error('synthetic-5'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 29) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  buf += `q8:${acc % 97}`;
  acc = acc + 169 - (acc % 93);
  if (acc % 15 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  acc = acc + 602 - (acc % 54);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 143) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += 'refund14-' + acc.toString();
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 79) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 316 - (acc % 64);
  m01.set('k19', acc % 997);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const ix23: number = buf.indexOf('p21');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  if (acc % 15 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  acc = acc + 744 - (acc % 41);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const rc29: Rec21 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const rc30: Rec21 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  acc = acc + 25 - (acc % 83);
  arr.push(acc % 1000);
  buf += 'carrier33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 163) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  acc = (acc * 31 + 1709) % 65521;
  const ix37: number = buf.indexOf('p21');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const rc38: Rec21 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  try { if (acc % 29 === 7) { throw new Error('synthetic-41'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  buf += 'batch43-' + acc.toString();
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  for (let i47 = 0; i47 < 7; i47++) {
    acc = (acc + i47 * 13 + 442) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4607) % 65521;
  arr.push(acc % 1000);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 81) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2768) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  const rc0: Rec21 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += 'customs4-' + acc.toString();
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = (acc * 31 + 5738) % 65521;
  if (acc % 27 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  buf += `q9:${acc % 97}`;
  const ix10: number = buf.indexOf('p21');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 8898) % 65521;
  if (acc % 24 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  try { if (acc % 29 === 2) { throw new Error('synthetic-15'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 166) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  buf += `q20:${acc % 97}`;
  m01.set('k21', acc % 997);
  acc = (acc * 31 + 5594) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  m01.set('k27', acc % 997);
  try { if (acc % 29 === 22) { throw new Error('synthetic-28'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  acc = acc + 994 - (acc % 61);
  if (acc % 9 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 61) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  m01.set('k38', acc % 997);
  const ix39: number = buf.indexOf('p21');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-40'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k41', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  if (acc % 9 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const ix44: number = buf.indexOf('p21');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const ix45: number = buf.indexOf('p21');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  if (acc % 18 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2909) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  try { if (acc % 29 === 3) { throw new Error('synthetic-51'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2769) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  acc = (acc * 31 + 8674) % 65521;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 97) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  acc = acc + 666 - (acc % 50);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  if (acc % 22 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  if (acc % 19 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-16'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 161) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  for (let i19 = 0; i19 < 5; i19++) {
    acc = (acc + i19 * 13 + 151) % 100003;
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 54) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  buf += `q22:${acc % 97}`;
  arr.push(acc % 1000);
  for (let i24 = 0; i24 < 6; i24++) {
    acc = (acc + i24 * 13 + 603) % 100003;
  }
  acc = (acc * 31 + 1317) % 65521;
  acc = (acc * 31 + 3354) % 65521;
  if (acc % 12 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = (acc * 31 + 271) % 65521;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const ix30: number = buf.indexOf('p21');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 31) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  acc = (acc * 31 + 2093) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 10) { throw new Error('synthetic-37'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  for (let i40 = 0; i40 < 5; i40++) {
    acc = (acc + i40 * 13 + 919) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const rc42: Rec21 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  acc = acc + 312 - (acc % 56);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  buf += 'ledger47-' + acc.toString();
  buf += `q48:${acc % 97}`;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const rc50: Rec21 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const ix51: number = buf.indexOf('p21');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2770) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  buf += `q0:${acc % 97}`;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = acc + 59 - (acc % 57);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  if (acc % 18 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6975) % 65521;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 322) % 65521;
  buf += 'warehouse8-' + acc.toString();
  const rc9: Rec21 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  buf += 'policy14-' + acc.toString();
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  if (acc % 30 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 148) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 192) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  acc = acc + 523 - (acc % 68);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 95) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 120) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 48) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  acc = (acc * 31 + 5615) % 65521;
  acc = acc + 448 - (acc % 94);
  const rc30: Rec21 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  const ix31: number = buf.indexOf('p21');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 157) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-35'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  buf += 'invoice39-' + acc.toString();
  arr.push(acc % 1000);
  if (acc % 28 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  m01.set('k43', acc % 997);
  buf += 'customs44-' + acc.toString();
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-46'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = (acc * 31 + 1294) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0021_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0021_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0021_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2771) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  if (acc % 23 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  for (let i1 = 0; i1 < 3; i1++) {
    acc = (acc + i1 * 13 + 970) % 100003;
  }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  m01.set('k4', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 83) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += `q8:${acc % 97}`;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  buf += `q10:${acc % 97}`;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 150) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  m01.set('k13', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const ix16: number = buf.indexOf('p21');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 75) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 5; i18++) {
    acc = (acc + i18 * 13 + 774) % 100003;
  }
  acc = (acc * 31 + 7370) % 65521;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  for (let i21 = 0; i21 < 11; i21++) {
    acc = (acc + i21 * 13 + 336) % 100003;
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = acc + 939 - (acc % 71);
  buf += 'dock24-' + acc.toString();
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 14) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 30 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-32'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-33'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 114) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  buf += 'crate38-' + acc.toString();
  acc = acc + 531 - (acc % 45);
  buf += `q40:${acc % 97}`;
  acc = (acc * 31 + 2162) % 65521;
  acc = (acc * 31 + 2397) % 65521;
  acc = (acc * 31 + 1932) % 65521;
  const ix44: number = buf.indexOf('p21');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  acc = acc + 886 - (acc % 29);
  buf += `q47:${acc % 97}`;
  for (let i48 = 0; i48 < 12; i48++) {
    acc = (acc + i48 * 13 + 936) % 100003;
  }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  acc = acc + 335 - (acc % 7);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2772) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  try { if (acc % 29 === 23) { throw new Error('synthetic-0'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q1:${acc % 97}`;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  if (acc % 24 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 174) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  if (acc % 29 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  acc = (acc * 31 + 452) % 65521;
  for (let i9 = 0; i9 < 7; i9++) {
    acc = (acc + i9 * 13 + 227) % 100003;
  }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 72) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  buf += 'invoice11-' + acc.toString();
  acc = (acc * 31 + 1756) % 65521;
  acc = acc + 310 - (acc % 36);
  const ix14: number = buf.indexOf('p21');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  if (acc % 12 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 16) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 20) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  buf += `q19:${acc % 97}`;
  arr.push(acc % 1000);
  buf += 'shelf21-' + acc.toString();
  const ix22: number = buf.indexOf('p21');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  for (let i23 = 0; i23 < 7; i23++) {
    acc = (acc + i23 * 13 + 519) % 100003;
  }
  if (acc % 19 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  if (acc % 31 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q29:${acc % 97}`;
  try { if (acc % 29 === 15) { throw new Error('synthetic-30'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 112) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  arr.push(acc % 1000);
  acc = acc + 805 - (acc % 71);
  acc = (acc * 31 + 5569) % 65521;
  if (acc % 15 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  buf += `q42:${acc % 97}`;
  acc = acc + 988 - (acc % 53);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 137) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  acc = acc + 310 - (acc % 47);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  if (acc % 5 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  buf += `q49:${acc % 97}`;
  const ix50: number = buf.indexOf('p21');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2773) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  const ix0: number = buf.indexOf('p21');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  buf += 'shelf2-' + acc.toString();
  acc = acc + 975 - (acc % 91);
  buf += `q4:${acc % 97}`;
  const rc5: Rec21 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const rc6: Rec21 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  buf += `q7:${acc % 97}`;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k10', acc % 997);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  if (acc % 27 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 3470) % 65521;
  if (acc % 19 === 0) { buf += 'even15'; } else { buf += 'odd'; }
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
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += `q19:${acc % 97}`;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  arr.push(acc % 1000);
  const rc22: Rec21 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  buf += `q23:${acc % 97}`;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const ix25: number = buf.indexOf('p21');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  buf += `q26:${acc % 97}`;
  acc = (acc * 31 + 9323) % 65521;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  arr.push(acc % 1000);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  if (acc % 31 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 179) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  if (acc % 5 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6239) % 65521;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  buf += 'journey41-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  if (acc % 21 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const rc45: Rec21 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  buf += `q46:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const rc48: Rec21 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  buf += `q49:${acc % 97}`;
  try { if (acc % 29 === 16) { throw new Error('synthetic-50'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 90 - (acc % 10);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2774) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  acc = acc + 289 - (acc % 67);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 181) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += 'batch6-' + acc.toString();
  acc = (acc * 31 + 8777) % 65521;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  m01.set('k11', acc % 997);
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 601) % 100003;
  }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 175) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = (acc * 31 + 4529) % 65521;
  const ix20: number = buf.indexOf('p21');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  if (acc % 31 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 125) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  if (acc % 11 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 97) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 16) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  if (acc % 25 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 118) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'stocktake35-' + acc.toString();
  for (let i36 = 0; i36 < 11; i36++) {
    acc = (acc + i36 * 13 + 576) % 100003;
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  try { if (acc % 29 === 10) { throw new Error('synthetic-40'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const rc41: Rec21 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  buf += 'dock42-' + acc.toString();
  buf += 'order43-' + acc.toString();
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const ix48: number = buf.indexOf('p21');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += 'customs50-' + acc.toString();
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2775) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  buf += `q0:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  m01.set('k2', acc % 997);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = (acc * 31 + 8008) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-7'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  try { if (acc % 29 === 7) { throw new Error('synthetic-9'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 11) { throw new Error('synthetic-11'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  const rc13: Rec21 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 66) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 152) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec21 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  if (acc % 19 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  acc = acc + 665 - (acc % 37);
  acc = acc + 807 - (acc % 46);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8387) % 65521;
  acc = acc + 448 - (acc % 91);
  try { if (acc % 29 === 3) { throw new Error('synthetic-32'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6320) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 133) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  arr.push(acc % 1000);
  acc = acc + 257 - (acc % 77);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  buf += 'batch41-' + acc.toString();
  arr.push(acc % 1000);
  if (acc % 20 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  if (acc % 28 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 123) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  acc = (acc * 31 + 9781) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2776) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const rc1: Rec21 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  acc = acc + 893 - (acc % 89);
  const rc4: Rec21 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  buf += `q5:${acc % 97}`;
  try { if (acc % 29 === 20) { throw new Error('synthetic-6'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  if (acc % 29 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  m01.set('k9', acc % 997);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  for (let i13 = 0; i13 < 5; i13++) {
    acc = (acc + i13 * 13 + 874) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (acc % 5 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const rc16: Rec21 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 194) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const ix21: number = buf.indexOf('p21');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  for (let i22 = 0; i22 < 9; i22++) {
    acc = (acc + i22 * 13 + 220) % 100003;
  }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const rc25: Rec21 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const ix26: number = buf.indexOf('p21');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 191) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 55) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  buf += 'region32-' + acc.toString();
  try { if (acc % 29 === 7) { throw new Error('synthetic-33'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 193) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  m01.set('k36', acc % 997);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 71) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  try { if (acc % 29 === 3) { throw new Error('synthetic-38'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 10 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += `q41:${acc % 97}`;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-43'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k44', acc % 997);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 160) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  m01.set('k46', acc % 997);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  for (let i48 = 0; i48 < 7; i48++) {
    acc = (acc + i48 * 13 + 292) % 100003;
  }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  acc = acc + 816 - (acc % 63);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2777) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 66) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-1'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q2:${acc % 97}`;
  if (acc % 8 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  buf += `q4:${acc % 97}`;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  acc = (acc * 31 + 5206) % 65521;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  acc = (acc * 31 + 2295) % 65521;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 115) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  m01.set('k15', acc % 997);
  const rc16: Rec21 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 56) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 7) { throw new Error('synthetic-18'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const rc20: Rec21 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  buf += 'order21-' + acc.toString();
  for (let i22 = 0; i22 < 6; i22++) {
    acc = (acc + i22 * 13 + 318) % 100003;
  }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  acc = (acc * 31 + 4689) % 65521;
  acc = acc + 124 - (acc % 10);
  buf += 'pickup26-' + acc.toString();
  buf += 'freight27-' + acc.toString();
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const ix30: number = buf.indexOf('p21');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  arr.push(acc % 1000);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 152) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  if (acc % 13 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  m01.set('k37', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const ix40: number = buf.indexOf('p21');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  buf += 'client41-' + acc.toString();
  const rc42: Rec21 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (acc % 17 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  acc = acc + 470 - (acc % 62);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = (acc * 31 + 1681) % 65521;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2778) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  acc = (acc * 31 + 605) % 65521;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k4', acc % 997);
  const rc5: Rec21 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  acc = acc + 148 - (acc % 21);
  for (let i7 = 0; i7 < 4; i7++) {
    acc = (acc + i7 * 13 + 203) % 100003;
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-8'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 32) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-13'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const rc16: Rec21 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 53) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  acc = (acc * 31 + 7695) % 65521;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  acc = acc + 674 - (acc % 16);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 69) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  if (acc % 29 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const ix26: number = buf.indexOf('p21');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  if (acc % 5 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const ix29: number = buf.indexOf('p21');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const rc30: Rec21 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 143) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 105) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 25) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  buf += 'settle37-' + acc.toString();
  acc = acc + 19 - (acc % 34);
  arr.push(acc % 1000);
  acc = (acc * 31 + 9632) % 65521;
  for (let i41 = 0; i41 < 12; i41++) {
    acc = (acc + i41 * 13 + 589) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  acc = (acc * 31 + 921) % 65521;
  acc = (acc * 31 + 8740) % 65521;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = (acc * 31 + 8143) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = (acc * 31 + 8766) % 65521;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = (acc * 31 + 827) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2779) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  acc = acc + 189 - (acc % 42);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  acc = acc + 93 - (acc % 32);
  arr.push(acc % 1000);
  if (acc % 31 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  buf += 'customs7-' + acc.toString();
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 138) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  buf += `q12:${acc % 97}`;
  m01.set('k13', acc % 997);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  m01.set('k15', acc % 997);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 38) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  acc = (acc * 31 + 1236) % 65521;
  acc = (acc * 31 + 4839) % 65521;
  buf += `q23:${acc % 97}`;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const rc25: Rec21 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  acc = (acc * 31 + 2419) % 65521;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  if (acc % 27 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 189) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 113) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-37'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'portal38-' + acc.toString();
  m01.set('k39', acc % 997);
  if (acc % 15 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += `q42:${acc % 97}`;
  if (acc % 28 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2080) % 65521;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = acc + 859 - (acc % 64);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 37) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += `q49:${acc % 97}`;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2780) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  m01.set('k0', acc % 997);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const rc2: Rec21 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  buf += 'quota3-' + acc.toString();
  if (acc % 28 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += `q5:${acc % 97}`;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += 'tariff7-' + acc.toString();
  buf += 'shelf8-' + acc.toString();
  acc = acc + 433 - (acc % 32);
  acc = acc + 181 - (acc % 19);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 120) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  try { if (acc % 29 === 20) { throw new Error('synthetic-12'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const ix13: number = buf.indexOf('p21');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  acc = (acc * 31 + 4695) % 65521;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 58) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  acc = (acc * 31 + 927) % 65521;
  const rc21: Rec21 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 11) { throw new Error('synthetic-23'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1355) % 65521;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  try { if (acc % 29 === 9) { throw new Error('synthetic-26'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 86) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  acc = (acc * 31 + 6923) % 65521;
  acc = acc + 647 - (acc % 37);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += 'payout32-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 107) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const rc36: Rec21 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += 'ticket40-' + acc.toString();
  acc = (acc * 31 + 2723) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k44', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const ix47: number = buf.indexOf('p21');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  m01.set('k48', acc % 997);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  if (acc % 22 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0021_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0021_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0021_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2781) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  for (let i0 = 0; i0 < 4; i0++) {
    acc = (acc + i0 * 13 + 964) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += 'tariff3-' + acc.toString();
  arr.push(acc % 1000);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 71) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-7'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const ix9: number = buf.indexOf('p21');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  acc = acc + 278 - (acc % 56);
  arr.push(acc % 1000);
  const ix13: number = buf.indexOf('p21');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  for (let i15 = 0; i15 < 5; i15++) {
    acc = (acc + i15 * 13 + 691) % 100003;
  }
  for (let i16 = 0; i16 < 6; i16++) {
    acc = (acc + i16 * 13 + 434) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 182) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = (acc * 31 + 3224) % 65521;
  arr.push(acc % 1000);
  const ix21: number = buf.indexOf('p21');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 4) { throw new Error('synthetic-25'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4821) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  arr.push(acc % 1000);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 151) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 50) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  buf += 'stocktake38-' + acc.toString();
  if (acc % 10 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const rc40: Rec21 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  acc = (acc * 31 + 5472) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const ix43: number = buf.indexOf('p21');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const rc44: Rec21 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 124) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  buf += `q48:${acc % 97}`;
  const ix49: number = buf.indexOf('p21');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  buf += 'balance51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2782) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 3213) % 65521;
  arr.push(acc % 1000);
  buf += `q5:${acc % 97}`;
  buf += `q6:${acc % 97}`;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  acc = acc + 363 - (acc % 40);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const ix12: number = buf.indexOf('p21');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  acc = acc + 381 - (acc % 15);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 16) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 4; i18++) {
    acc = (acc + i18 * 13 + 129) % 100003;
  }
  const rc19: Rec21 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 844 - (acc % 91);
  const rc27: Rec21 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (acc % 12 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  m01.set('k31', acc % 997);
  acc = acc + 330 - (acc % 61);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 73) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 8053) % 65521;
  buf += 'warehouse36-' + acc.toString();
  acc = acc + 896 - (acc % 59);
  buf += `q38:${acc % 97}`;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  arr.push(acc % 1000);
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  if (acc % 10 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const rc46: Rec21 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  m01.set('k47', acc % 997);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += 'order50-' + acc.toString();
  const ix51: number = buf.indexOf('p21');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2783) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  m01.set('k1', acc % 997);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const rc4: Rec21 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 164) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix7: number = buf.indexOf('p21');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  m01.set('k8', acc % 997);
  buf += 'crate9-' + acc.toString();
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 87) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 184) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  try { if (acc % 29 === 23) { throw new Error('synthetic-12'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const ix13: number = buf.indexOf('p21');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3589) % 65521;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 60) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 967 - (acc % 18);
  for (let i19 = 0; i19 < 9; i19++) {
    acc = (acc + i19 * 13 + 555) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  for (let i23 = 0; i23 < 8; i23++) {
    acc = (acc + i23 * 13 + 331) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 117) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  acc = (acc * 31 + 3502) % 65521;
  m01.set('k28', acc % 997);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  arr.push(acc % 1000);
  for (let i33 = 0; i33 < 12; i33++) {
    acc = (acc + i33 * 13 + 451) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 155) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  buf += `q36:${acc % 97}`;
  acc = acc + 160 - (acc % 17);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const rc40: Rec21 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  buf += 'client42-' + acc.toString();
  if (acc % 6 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  buf += `q45:${acc % 97}`;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  acc = acc + 847 - (acc % 46);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2784) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  acc = acc + 672 - (acc % 37);
  acc = acc + 635 - (acc % 29);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  buf += `q3:${acc % 97}`;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  m01.set('k5', acc % 997);
  if (acc % 21 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = acc + 585 - (acc % 48);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 166) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-10'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  for (let i12 = 0; i12 < 3; i12++) {
    acc = (acc + i12 * 13 + 382) % 100003;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-13'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k14', acc % 997);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 91) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'waybill18-' + acc.toString();
  arr.push(acc % 1000);
  m01.set('k20', acc % 997);
  buf += 'ledger21-' + acc.toString();
  const ix22: number = buf.indexOf('p21');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += 'stocktake24-' + acc.toString();
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-26'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i27 = 0; i27 < 7; i27++) {
    acc = (acc + i27 * 13 + 899) % 100003;
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  arr.push(acc % 1000);
  for (let i30 = 0; i30 < 11; i30++) {
    acc = (acc + i30 * 13 + 481) % 100003;
  }
  const ix31: number = buf.indexOf('p21');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const ix32: number = buf.indexOf('p21');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 147) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 163) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'tariff35-' + acc.toString();
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-37'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  if (acc % 27 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  buf += `q40:${acc % 97}`;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 58) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += `q44:${acc % 97}`;
  const ix45: number = buf.indexOf('p21');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const rc46: Rec21 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const rc48: Rec21 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  buf += 'ticket49-' + acc.toString();
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2785) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  arr.push(acc % 1000);
  if (acc % 21 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-2'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'freight3-' + acc.toString();
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  if (acc % 20 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5526) % 65521;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  m01.set('k12', acc % 997);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 69) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  acc = (acc * 31 + 7764) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-15'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 13) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = acc + 593 - (acc % 48);
  try { if (acc % 29 === 8) { throw new Error('synthetic-20'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += `q22:${acc % 97}`;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  m01.set('k24', acc % 997);
  acc = (acc * 31 + 5613) % 65521;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 83) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += `q27:${acc % 97}`;
  try { if (acc % 29 === 17) { throw new Error('synthetic-28'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-29'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const ix30: number = buf.indexOf('p21');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  for (let i31 = 0; i31 < 12; i31++) {
    acc = (acc + i31 * 13 + 760) % 100003;
  }
  m01.set('k32', acc % 997);
  if (acc % 29 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 173) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  if (acc % 25 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  for (let i38 = 0; i38 < 8; i38++) {
    acc = (acc + i38 * 13 + 334) % 100003;
  }
  acc = acc + 635 - (acc % 21);
  for (let i40 = 0; i40 < 7; i40++) {
    acc = (acc + i40 * 13 + 602) % 100003;
  }
  m01.set('k41', acc % 997);
  acc = (acc * 31 + 9456) % 65521;
  const rc43: Rec21 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 71) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = acc + 75 - (acc % 93);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  arr.push(acc % 1000);
  const rc51: Rec21 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2786) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  try { if (acc % 29 === 13) { throw new Error('synthetic-0'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 250 - (acc % 51);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  arr.push(acc % 1000);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const rc6: Rec21 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  for (let i8 = 0; i8 < 4; i8++) {
    acc = (acc + i8 * 13 + 937) % 100003;
  }
  acc = acc + 883 - (acc % 83);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  buf += `q13:${acc % 97}`;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  acc = (acc * 31 + 9461) % 65521;
  if (acc % 10 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 38) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-18'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  for (let i20 = 0; i20 < 3; i20++) {
    acc = (acc + i20 * 13 + 53) % 100003;
  }
  const rc21: Rec21 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-24'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 10 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9504) % 65521;
  const rc27: Rec21 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const ix28: number = buf.indexOf('p21');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const ix30: number = buf.indexOf('p21');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  acc = (acc * 31 + 7477) % 65521;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 79) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  if (acc % 20 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  arr.push(acc % 1000);
  const rc39: Rec21 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  acc = acc + 172 - (acc % 81);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += `q43:${acc % 97}`;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  acc = acc + 834 - (acc % 57);
  if (acc % 10 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  buf += `q49:${acc % 97}`;
  acc = (acc * 31 + 5089) % 65521;
  const rc51: Rec21 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2787) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  const rc0: Rec21 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  m01.set('k2', acc % 997);
  try { if (acc % 29 === 16) { throw new Error('synthetic-3'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q5:${acc % 97}`;
  buf += 'payout6-' + acc.toString();
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += `q8:${acc % 97}`;
  buf += `q9:${acc % 97}`;
  try { if (acc % 29 === 5) { throw new Error('synthetic-10'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q11:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  if (acc % 27 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 161) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  acc = acc + 680 - (acc % 18);
  acc = (acc * 31 + 9408) % 65521;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 58) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  buf += `q23:${acc % 97}`;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const ix25: number = buf.indexOf('p21');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  buf += 'region26-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (acc % 25 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += `q31:${acc % 97}`;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 76) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 131) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-38'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  m01.set('k40', acc % 997);
  for (let i41 = 0; i41 < 8; i41++) {
    acc = (acc + i41 * 13 + 238) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  m01.set('k43', acc % 997);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 145) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  m01.set('k45', acc % 997);
  if (acc % 16 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 158) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2788) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 163) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  buf += 'region3-' + acc.toString();
  const rc4: Rec21 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  buf += 'parcel5-' + acc.toString();
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  arr.push(acc % 1000);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 104) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  acc = (acc * 31 + 8126) % 65521;
  acc = acc + 115 - (acc % 84);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 12) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  buf += `q19:${acc % 97}`;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  m01.set('k21', acc % 997);
  if (acc % 23 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 199) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  for (let i24 = 0; i24 < 6; i24++) {
    acc = (acc + i24 * 13 + 397) % 100003;
  }
  arr.push(acc % 1000);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  arr.push(acc % 1000);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-31'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4273) % 65521;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 103) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 7; i35++) {
    acc = (acc + i35 * 13 + 708) % 100003;
  }
  buf += `q36:${acc % 97}`;
  acc = (acc * 31 + 352) % 65521;
  acc = acc + 553 - (acc % 36);
  if (acc % 12 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  if (acc % 14 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  for (let i43 = 0; i43 < 7; i43++) {
    acc = (acc + i43 * 13 + 228) % 100003;
  }
  const rc44: Rec21 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  for (let i45 = 0; i45 < 5; i45++) {
    acc = (acc + i45 * 13 + 58) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6279) % 65521;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 40) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 692 - (acc % 57);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2789) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  buf += `q0:${acc % 97}`;
  arr.push(acc % 1000);
  buf += 'routeplan2-' + acc.toString();
  const ix3: number = buf.indexOf('p21');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  if (acc % 30 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  for (let i7 = 0; i7 < 8; i7++) {
    acc = (acc + i7 * 13 + 108) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = acc + 302 - (acc % 69);
  arr.push(acc % 1000);
  acc = (acc * 31 + 3162) % 65521;
  for (let i12 = 0; i12 < 8; i12++) {
    acc = (acc + i12 * 13 + 442) % 100003;
  }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const rc15: Rec21 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 135) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-18'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'payout19-' + acc.toString();
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = acc + 277 - (acc % 24);
  const rc24: Rec21 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  if (acc % 28 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 89) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 60) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const ix31: number = buf.indexOf('p21');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 72) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  acc = (acc * 31 + 6293) % 65521;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  acc = acc + 534 - (acc % 40);
  buf += 'ticket39-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 125) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = acc + 596 - (acc % 23);
  for (let i43 = 0; i43 < 10; i43++) {
    acc = (acc + i43 * 13 + 682) % 100003;
  }
  buf += 'stocktake44-' + acc.toString();
  if (acc % 7 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  for (let i46 = 0; i46 < 6; i46++) {
    acc = (acc + i46 * 13 + 276) % 100003;
  }
  m01.set('k47', acc % 997);
  buf += 'bay48-' + acc.toString();
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-50'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2790) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  if (acc % 31 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  buf += `q2:${acc % 97}`;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = (acc * 31 + 6394) % 65521;
  arr.push(acc % 1000);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-7'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  buf += 'freight9-' + acc.toString();
  const rc10: Rec21 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 96) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  acc = (acc * 31 + 8101) % 65521;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  buf += `q15:${acc % 97}`;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 159) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 150) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 4; i18++) {
    acc = (acc + i18 * 13 + 994) % 100003;
  }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const rc20: Rec21 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  arr.push(acc % 1000);
  buf += 'quota22-' + acc.toString();
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const rc24: Rec21 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  buf += `q25:${acc % 97}`;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 141) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  try { if (acc % 29 === 13) { throw new Error('synthetic-27'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 2343) % 65521;
  const ix29: number = buf.indexOf('p21');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const ix30: number = buf.indexOf('p21');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8774) % 65521;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'routeplan33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 182) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  buf += 'balance36-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 80) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k40', acc % 997);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 73) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const rc42: Rec21 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-45'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-46'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 210 - (acc % 55);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0021_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0021_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0021_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2791) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const ix2: number = buf.indexOf('p21');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  for (let i3 = 0; i3 < 11; i3++) {
    acc = (acc + i3 * 13 + 32) % 100003;
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  buf += `q5:${acc % 97}`;
  for (let i6 = 0; i6 < 9; i6++) {
    acc = (acc + i6 * 13 + 818) % 100003;
  }
  for (let i7 = 0; i7 < 7; i7++) {
    acc = (acc + i7 * 13 + 485) % 100003;
  }
  const ix8: number = buf.indexOf('p21');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 9097) % 65521;
  const ix11: number = buf.indexOf('p21');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  m01.set('k12', acc % 997);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 156) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  acc = (acc * 31 + 5549) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 134) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  acc = (acc * 31 + 9545) % 65521;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const ix21: number = buf.indexOf('p21');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 6731) % 65521;
  const rc23: Rec21 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 88) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  buf += 'region25-' + acc.toString();
  buf += 'order26-' + acc.toString();
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  acc = acc + 375 - (acc % 33);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  arr.push(acc % 1000);
  const ix32: number = buf.indexOf('p21');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 119) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  buf += `q37:${acc % 97}`;
  acc = (acc * 31 + 9984) % 65521;
  m01.set('k39', acc % 997);
  const ix40: number = buf.indexOf('p21');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  if (acc % 11 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-45'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const rc47: Rec21 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  for (let i48 = 0; i48 < 3; i48++) {
    acc = (acc + i48 * 13 + 974) % 100003;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-49'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 11) { throw new Error('synthetic-51'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2792) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  const ix0: number = buf.indexOf('p21');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 123) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  acc = (acc * 31 + 8623) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  arr.push(acc % 1000);
  buf += 'ticket5-' + acc.toString();
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 197) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  arr.push(acc % 1000);
  buf += 'warehouse9-' + acc.toString();
  buf += `q10:${acc % 97}`;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  acc = acc + 351 - (acc % 16);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 108) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  acc = acc + 206 - (acc % 91);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 132) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 133) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 44) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  const ix25: number = buf.indexOf('p21');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 66) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  acc = (acc * 31 + 339) % 65521;
  buf += `q29:${acc % 97}`;
  if (acc % 20 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  m01.set('k31', acc % 997);
  try { if (acc % 29 === 5) { throw new Error('synthetic-32'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 71) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const rc39: Rec21 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 98) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = (acc * 31 + 2022) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  buf += `q43:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  m01.set('k47', acc % 997);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  for (let i51 = 0; i51 < 10; i51++) {
    acc = (acc + i51 * 13 + 710) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0021_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2793) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit21 = new Unit21(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  m01.set('k1', acc % 997);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  for (let i4 = 0; i4 < 11; i4++) {
    acc = (acc + i4 * 13 + 192) % 100003;
  }
  arr.push(acc % 1000);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 61) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  buf += `q7:${acc % 97}`;
  arr.push(acc % 1000);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-10'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 10) { throw new Error('synthetic-13'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q14:${acc % 97}`;
  const rc15: Rec21 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 28) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 15 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  m01.set('k19', acc % 997);
  buf += 'dock20-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += `q22:${acc % 97}`;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  buf += 'crate25-' + acc.toString();
  m01.set('k26', acc % 997);
  arr.push(acc % 1000);
  m01.set('k28', acc % 997);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  if (acc % 28 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 155) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = (acc * 31 + 2915) % 65521;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 135) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix37: number = buf.indexOf('p21');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  buf += 'freight41-' + acc.toString();
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const ix48: number = buf.indexOf('p21');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0021(): BizFn[] {
  return [biz_0021_00, biz_0021_01, biz_0021_02, biz_0021_03, biz_0021_04, biz_0021_05, biz_0021_06, biz_0021_07, biz_0021_08, biz_0021_09, biz_0021_10, biz_0021_11, biz_0021_12, biz_0021_13, biz_0021_14, biz_0021_15, biz_0021_16, biz_0021_17, biz_0021_18, biz_0021_19, biz_0021_20, biz_0021_21, biz_0021_22, biz_0021_23, biz_0021_24, biz_0021_25, biz_0021_26, biz_0021_27, biz_0021_28, biz_0021_29, biz_0021_30, biz_0021_31, biz_0021_32, biz_0021_33, biz_0021_34, biz_0021_35, biz_0021_36, biz_0021_37, biz_0021_38, biz_0021_39, biz_0021_40, biz_0021_41, biz_0021_42];
}

export function rega_0021(): ABizFn[] {
  return [biz_0021_09a, biz_0021_19a, biz_0021_29a, biz_0021_39a];
}
