// Biz0055.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec55 { id: number; tag: string; score: number; }

class Unit55 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0055_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7205) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const ix1: number = buf.indexOf('p55');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  acc = (acc * 31 + 5036) % 65521;
  acc = acc + 49 - (acc % 70);
  try { if (acc % 29 === 3) { throw new Error('synthetic-5'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += 'tariff9-' + acc.toString();
  arr.push(acc % 1000);
  buf += `q11:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  for (let i14 = 0; i14 < 3; i14++) {
    acc = (acc + i14 * 13 + 346) % 100003;
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 41) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 126 - (acc % 89);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 185) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  buf += 'stocktake20-' + acc.toString();
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 60) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 37) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const ix23: number = buf.indexOf('p55');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  buf += 'refund24-' + acc.toString();
  acc = (acc * 31 + 1957) % 65521;
  buf += `q26:${acc % 97}`;
  buf += `q27:${acc % 97}`;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 42) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  for (let i32 = 0; i32 < 11; i32++) {
    acc = (acc + i32 * 13 + 961) % 100003;
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 183) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  arr.push(acc % 1000);
  try { if (acc % 29 === 19) { throw new Error('synthetic-37'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 972 - (acc % 55);
  acc = acc + 377 - (acc % 87);
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  if (acc % 20 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  m01.set('k43', acc % 997);
  buf += `q44:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  buf += 'dock46-' + acc.toString();
  acc = acc + 105 - (acc % 61);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const ix49: number = buf.indexOf('p55');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8250) % 65521;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7206) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += 'invoice1-' + acc.toString();
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  buf += 'journey5-' + acc.toString();
  buf += `q6:${acc % 97}`;
  buf += 'pickup7-' + acc.toString();
  try { if (acc % 29 === 6) { throw new Error('synthetic-8'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  const rc9: Rec55 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  m01.set('k10', acc % 997);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  if (acc % 22 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  m01.set('k15', acc % 997);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 172) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  m01.set('k20', acc % 997);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 178) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const ix26: number = buf.indexOf('p55');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  m01.set('k29', acc % 997);
  m01.set('k30', acc % 997);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 87) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 7; i35++) {
    acc = (acc + i35 * 13 + 626) % 100003;
  }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  buf += `q37:${acc % 97}`;
  try { if (acc % 29 === 18) { throw new Error('synthetic-38'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6482) % 65521;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += 'policy41-' + acc.toString();
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 132) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  acc = (acc * 31 + 3187) % 65521;
  for (let i44 = 0; i44 < 12; i44++) {
    acc = (acc + i44 * 13 + 744) % 100003;
  }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = (acc * 31 + 948) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += `q48:${acc % 97}`;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  acc = acc + 897 - (acc % 46);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7207) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  acc = (acc * 31 + 6591) % 65521;
  const ix1: number = buf.indexOf('p55');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  if (acc % 25 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 80) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const ix5: number = buf.indexOf('p55');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  for (let i8 = 0; i8 < 12; i8++) {
    acc = (acc + i8 * 13 + 914) % 100003;
  }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  try { if (acc % 29 === 23) { throw new Error('synthetic-11'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  try { if (acc % 29 === 14) { throw new Error('synthetic-13'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const rc16: Rec55 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 158) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += `q19:${acc % 97}`;
  const rc20: Rec55 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const rc23: Rec55 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  m01.set('k24', acc % 997);
  acc = (acc * 31 + 8983) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  arr.push(acc % 1000);
  buf += `q28:${acc % 97}`;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  for (let i30 = 0; i30 < 5; i30++) {
    acc = (acc + i30 * 13 + 48) % 100003;
  }
  acc = (acc * 31 + 9180) % 65521;
  arr.push(acc % 1000);
  for (let i33 = 0; i33 < 9; i33++) {
    acc = (acc + i33 * 13 + 405) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 187) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 100 - (acc % 21);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const ix42: number = buf.indexOf('p55');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  if (acc % 22 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  m01.set('k46', acc % 997);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  buf += 'depot48-' + acc.toString();
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  if (acc % 22 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  buf += 'settle51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7208) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  if (acc % 28 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  if (acc % 6 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += `q5:${acc % 97}`;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const rc8: Rec55 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = (acc * 31 + 7281) % 65521;
  acc = (acc * 31 + 2222) % 65521;
  const ix12: number = buf.indexOf('p55');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const rc13: Rec55 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const rc16: Rec55 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 144) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  buf += `q20:${acc % 97}`;
  for (let i21 = 0; i21 < 3; i21++) {
    acc = (acc + i21 * 13 + 683) % 100003;
  }
  m01.set('k22', acc % 997);
  arr.push(acc % 1000);
  if (acc % 23 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const rc25: Rec55 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  acc = acc + 860 - (acc % 72);
  try { if (acc % 29 === 22) { throw new Error('synthetic-27'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  const rc30: Rec55 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  for (let i32 = 0; i32 < 10; i32++) {
    acc = (acc + i32 * 13 + 47) % 100003;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-33'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 129) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p55');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  m01.set('k37', acc % 997);
  acc = (acc * 31 + 7561) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  try { if (acc % 29 === 13) { throw new Error('synthetic-40'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k43', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  buf += `q47:${acc % 97}`;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 163) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  arr.push(acc % 1000);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 133) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7209) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-2'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q3:${acc % 97}`;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  m01.set('k5', acc % 997);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  arr.push(acc % 1000);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  arr.push(acc % 1000);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 28) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 22) { throw new Error('synthetic-12'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  for (let i14 = 0; i14 < 11; i14++) {
    acc = (acc + i14 * 13 + 622) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  buf += 'coupon16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 86) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  for (let i19 = 0; i19 < 4; i19++) {
    acc = (acc + i19 * 13 + 622) % 100003;
  }
  const rc20: Rec55 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  buf += 'order21-' + acc.toString();
  if (acc % 30 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const rc26: Rec55 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  acc = (acc * 31 + 660) % 65521;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  buf += `q30:${acc % 97}`;
  m01.set('k31', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = acc + 179 - (acc % 42);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 124) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  buf += `q36:${acc % 97}`;
  buf += 'policy37-' + acc.toString();
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 169) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  acc = (acc * 31 + 6386) % 65521;
  const rc40: Rec55 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  m01.set('k41', acc % 997);
  const rc42: Rec55 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  acc = (acc * 31 + 4658) % 65521;
  buf += `q44:${acc % 97}`;
  m01.set('k45', acc % 997);
  for (let i46 = 0; i46 < 12; i46++) {
    acc = (acc + i46 * 13 + 82) % 100003;
  }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const rc49: Rec55 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  for (let i50 = 0; i50 < 10; i50++) {
    acc = (acc + i50 * 13 + 184) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7210) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  try { if (acc % 29 === 7) { throw new Error('synthetic-0'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-2'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 27 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = acc + 308 - (acc % 71);
  buf += `q5:${acc % 97}`;
  acc = (acc * 31 + 1646) % 65521;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  m01.set('k11', acc % 997);
  buf += 'client12-' + acc.toString();
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const ix14: number = buf.indexOf('p55');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3942) % 65521;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 122) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  acc = (acc * 31 + 2264) % 65521;
  if (acc % 14 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5221) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const ix28: number = buf.indexOf('p55');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  buf += 'portal30-' + acc.toString();
  try { if (acc % 29 === 14) { throw new Error('synthetic-31'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  const rc32: Rec55 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += 'shelf33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 85) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  m01.set('k36', acc % 997);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 70) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  m01.set('k39', acc % 997);
  const rc40: Rec55 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 196) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  m01.set('k42', acc % 997);
  acc = (acc * 31 + 3310) % 65521;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  acc = acc + 515 - (acc % 58);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  m01.set('k47', acc % 997);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (acc % 27 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  for (let i51 = 0; i51 < 8; i51++) {
    acc = (acc + i51 * 13 + 398) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7211) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 43) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 197) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'settle6-' + acc.toString();
  if (acc % 21 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const rc8: Rec55 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  arr.push(acc % 1000);
  if (acc % 19 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-14'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  const rc15: Rec55 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 186) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 12; i18++) {
    acc = (acc + i18 * 13 + 820) % 100003;
  }
  buf += `q19:${acc % 97}`;
  buf += 'dispatch20-' + acc.toString();
  if (acc % 17 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  m01.set('k22', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  buf += `q27:${acc % 97}`;
  acc = (acc * 31 + 1063) % 65521;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const ix31: number = buf.indexOf('p55');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  buf += `q32:${acc % 97}`;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 109) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 108) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  for (let i37 = 0; i37 < 5; i37++) {
    acc = (acc + i37 * 13 + 531) % 100003;
  }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  m01.set('k39', acc % 997);
  acc = acc + 606 - (acc % 93);
  acc = (acc * 31 + 4152) % 65521;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  if (acc % 12 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += 'shelf46-' + acc.toString();
  const ix47: number = buf.indexOf('p55');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const rc48: Rec55 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  if (acc % 30 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7212) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  buf += `q0:${acc % 97}`;
  acc = acc + 557 - (acc % 9);
  const ix2: number = buf.indexOf('p55');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  if (acc % 5 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  buf += `q4:${acc % 97}`;
  const ix5: number = buf.indexOf('p55');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  for (let i6 = 0; i6 < 7; i6++) {
    acc = (acc + i6 * 13 + 86) % 100003;
  }
  for (let i7 = 0; i7 < 12; i7++) {
    acc = (acc + i7 * 13 + 755) % 100003;
  }
  if (acc % 24 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 20) { throw new Error('synthetic-11'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const ix12: number = buf.indexOf('p55');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-13'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q14:${acc % 97}`;
  buf += 'audit15-' + acc.toString();
  for (let i16 = 0; i16 < 5; i16++) {
    acc = (acc + i16 * 13 + 7) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 46) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-18'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const ix20: number = buf.indexOf('p55');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  acc = acc + 399 - (acc % 56);
  for (let i22 = 0; i22 < 5; i22++) {
    acc = (acc + i22 * 13 + 380) % 100003;
  }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  acc = (acc * 31 + 5668) % 65521;
  if (acc % 14 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  if (acc % 22 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const ix27: number = buf.indexOf('p55');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-28'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const rc31: Rec55 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  acc = (acc * 31 + 2611) % 65521;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 87) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 103) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  try { if (acc % 29 === 7) { throw new Error('synthetic-36'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k37', acc % 997);
  arr.push(acc % 1000);
  buf += `q39:${acc % 97}`;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  m01.set('k41', acc % 997);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  const rc44: Rec55 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  for (let i46 = 0; i46 < 7; i46++) {
    acc = (acc + i46 * 13 + 497) % 100003;
  }
  acc = acc + 192 - (acc % 79);
  arr.push(acc % 1000);
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7213) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-1'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += `q3:${acc % 97}`;
  m01.set('k4', acc % 997);
  buf += 'invoice5-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 761 - (acc % 59);
  acc = (acc * 31 + 6821) % 65521;
  buf += `q9:${acc % 97}`;
  buf += `q10:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  arr.push(acc % 1000);
  buf += 'rebate13-' + acc.toString();
  const ix14: number = buf.indexOf('p55');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  if (acc % 13 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 127) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const rc19: Rec55 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const ix21: number = buf.indexOf('p55');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += `q23:${acc % 97}`;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const ix25: number = buf.indexOf('p55');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  for (let i26 = 0; i26 < 8; i26++) {
    acc = (acc + i26 * 13 + 975) % 100003;
  }
  if (acc % 31 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const rc28: Rec55 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const rc31: Rec55 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  acc = (acc * 31 + 2392) % 65521;
  const ix33: number = buf.indexOf('p55');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 179) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec55 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  for (let i36 = 0; i36 < 8; i36++) {
    acc = (acc + i36 * 13 + 165) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  m01.set('k38', acc % 997);
  buf += `q39:${acc % 97}`;
  arr.push(acc % 1000);
  const ix41: number = buf.indexOf('p55');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  buf += `q43:${acc % 97}`;
  if (acc % 25 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += 'settle46-' + acc.toString();
  buf += `q47:${acc % 97}`;
  const ix48: number = buf.indexOf('p55');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  if (acc % 17 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  acc = acc + 494 - (acc % 55);
  const rc51: Rec55 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7214) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  buf += `q1:${acc % 97}`;
  arr.push(acc % 1000);
  for (let i3 = 0; i3 < 3; i3++) {
    acc = (acc + i3 * 13 + 737) % 100003;
  }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  acc = acc + 200 - (acc % 75);
  acc = acc + 926 - (acc % 32);
  const ix7: number = buf.indexOf('p55');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const ix8: number = buf.indexOf('p55');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const ix9: number = buf.indexOf('p55');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const ix10: number = buf.indexOf('p55');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 742) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  m01.set('k13', acc % 997);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  try { if (acc % 29 === 10) { throw new Error('synthetic-15'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const ix16: number = buf.indexOf('p55');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 190) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  acc = acc + 379 - (acc % 66);
  m01.set('k21', acc % 997);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const rc23: Rec55 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  buf += `q24:${acc % 97}`;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const ix26: number = buf.indexOf('p55');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  buf += `q28:${acc % 97}`;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  acc = (acc * 31 + 1218) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 77) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 162) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  m01.set('k37', acc % 997);
  acc = (acc * 31 + 1808) % 65521;
  buf += `q39:${acc % 97}`;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 115) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const ix41: number = buf.indexOf('p55');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-42'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += `q46:${acc % 97}`;
  buf += 'warehouse47-' + acc.toString();
  acc = acc + 885 - (acc % 25);
  if (acc % 6 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  for (let i51 = 0; i51 < 7; i51++) {
    acc = (acc + i51 * 13 + 581) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0055_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0055_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0055_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7215) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  const ix0: number = buf.indexOf('p55');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  acc = (acc * 31 + 6603) % 65521;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 50) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i6 = 0; i6 < 9; i6++) {
    acc = (acc + i6 * 13 + 346) % 100003;
  }
  arr.push(acc % 1000);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  m01.set('k9', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const rc11: Rec55 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  acc = (acc * 31 + 5105) % 65521;
  buf += 'balance16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 113) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 718 - (acc % 33);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const rc23: Rec55 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  if (acc % 8 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  m01.set('k25', acc % 997);
  m01.set('k26', acc % 997);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 132) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  buf += `q28:${acc % 97}`;
  const ix29: number = buf.indexOf('p55');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  acc = acc + 147 - (acc % 56);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  acc = acc + 308 - (acc % 92);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 97) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  for (let i37 = 0; i37 < 3; i37++) {
    acc = (acc + i37 * 13 + 626) % 100003;
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  arr.push(acc % 1000);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 22) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  if (acc % 11 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  for (let i46 = 0; i46 < 5; i46++) {
    acc = (acc + i46 * 13 + 678) % 100003;
  }
  for (let i47 = 0; i47 < 3; i47++) {
    acc = (acc + i47 * 13 + 120) % 100003;
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 187) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const rc49: Rec55 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 77) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  buf += 'pallet51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7216) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  acc = acc + 819 - (acc % 75);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  if (acc % 21 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  buf += `q4:${acc % 97}`;
  buf += 'rebate5-' + acc.toString();
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  acc = acc + 76 - (acc % 22);
  acc = acc + 143 - (acc % 76);
  const rc9: Rec55 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  for (let i13 = 0; i13 < 3; i13++) {
    acc = (acc + i13 * 13 + 541) % 100003;
  }
  const rc14: Rec55 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  arr.push(acc % 1000);
  const rc16: Rec55 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 18) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q21:${acc % 97}`;
  acc = acc + 826 - (acc % 67);
  const rc23: Rec55 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  m01.set('k25', acc % 997);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 68) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  for (let i29 = 0; i29 < 8; i29++) {
    acc = (acc + i29 * 13 + 235) % 100003;
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 185) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  const ix36: number = buf.indexOf('p55');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += 'portal37-' + acc.toString();
  acc = acc + 347 - (acc % 25);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  m01.set('k41', acc % 997);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = (acc * 31 + 4403) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const rc49: Rec55 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  try { if (acc % 29 === 9) { throw new Error('synthetic-50'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7236) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7217) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  buf += 'routeplan0-' + acc.toString();
  m01.set('k1', acc % 997);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  acc = acc + 32 - (acc % 36);
  buf += 'parcel4-' + acc.toString();
  const ix5: number = buf.indexOf('p55');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-6'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k7', acc % 997);
  const ix8: number = buf.indexOf('p55');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const ix9: number = buf.indexOf('p55');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  acc = acc + 697 - (acc % 55);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 15) { throw new Error('synthetic-12'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i13 = 0; i13 < 5; i13++) {
    acc = (acc + i13 * 13 + 486) % 100003;
  }
  for (let i14 = 0; i14 < 9; i14++) {
    acc = (acc + i14 * 13 + 137) % 100003;
  }
  acc = acc + 298 - (acc % 25);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 135) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += `q19:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  acc = (acc * 31 + 5241) % 65521;
  const rc22: Rec55 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  buf += 'batch23-' + acc.toString();
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const rc25: Rec55 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = acc + 324 - (acc % 11);
  buf += 'balance28-' + acc.toString();
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  acc = acc + 798 - (acc % 68);
  acc = acc + 358 - (acc % 47);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 170) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-36'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i37 = 0; i37 < 7; i37++) {
    acc = (acc + i37 * 13 + 272) % 100003;
  }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  m01.set('k41', acc % 997);
  acc = acc + 564 - (acc % 9);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  arr.push(acc % 1000);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  buf += 'ledger48-' + acc.toString();
  for (let i49 = 0; i49 < 7; i49++) {
    acc = (acc + i49 * 13 + 283) % 100003;
  }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7218) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  buf += `q1:${acc % 97}`;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 117) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 163) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  buf += 'sku4-' + acc.toString();
  m01.set('k5', acc % 997);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 42) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const rc7: Rec55 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  m01.set('k8', acc % 997);
  const ix9: number = buf.indexOf('p55');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  m01.set('k10', acc % 997);
  for (let i11 = 0; i11 < 9; i11++) {
    acc = (acc + i11 * 13 + 847) % 100003;
  }
  const rc12: Rec55 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  if (acc % 25 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  for (let i16 = 0; i16 < 11; i16++) {
    acc = (acc + i16 * 13 + 446) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 29) % 10007);
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
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (acc % 20 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const ix26: number = buf.indexOf('p55');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  if (acc % 31 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7756) % 65521;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  buf += `q30:${acc % 97}`;
  if (acc % 27 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (acc % 15 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 162) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 20 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  buf += `q36:${acc % 97}`;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 21) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  if (acc % 7 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  const rc39: Rec55 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  buf += `q40:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  acc = (acc * 31 + 8632) % 65521;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = (acc * 31 + 7372) % 65521;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = acc + 830 - (acc % 78);
  buf += 'refund48-' + acc.toString();
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 42) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  try { if (acc % 29 === 13) { throw new Error('synthetic-51'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7219) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  for (let i0 = 0; i0 < 12; i0++) {
    acc = (acc + i0 * 13 + 495) % 100003;
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  m01.set('k2', acc % 997);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 92) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  buf += `q4:${acc % 97}`;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const rc6: Rec55 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  acc = (acc * 31 + 2665) % 65521;
  const rc8: Rec55 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  m01.set('k9', acc % 997);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  buf += 'region11-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 70) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  acc = (acc * 31 + 6166) % 65521;
  m01.set('k15', acc % 997);
  if (acc % 19 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 32) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += 'shelf20-' + acc.toString();
  const ix21: number = buf.indexOf('p55');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  for (let i22 = 0; i22 < 7; i22++) {
    acc = (acc + i22 * 13 + 465) % 100003;
  }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  acc = (acc * 31 + 5208) % 65521;
  acc = acc + 297 - (acc % 14);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  for (let i28 = 0; i28 < 3; i28++) {
    acc = (acc + i28 * 13 + 725) % 100003;
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  buf += 'payout31-' + acc.toString();
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 11) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  buf += 'coupon38-' + acc.toString();
  buf += 'bay39-' + acc.toString();
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 190) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 174) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  m01.set('k45', acc % 997);
  const ix46: number = buf.indexOf('p55');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  buf += 'order47-' + acc.toString();
  buf += 'warehouse48-' + acc.toString();
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const ix50: number = buf.indexOf('p55');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7220) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 120) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix4: number = buf.indexOf('p55');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  buf += `q5:${acc % 97}`;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  for (let i7 = 0; i7 < 12; i7++) {
    acc = (acc + i7 * 13 + 498) % 100003;
  }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 8) { throw new Error('synthetic-9'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  buf += 'waybill12-' + acc.toString();
  const rc13: Rec55 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  try { if (acc % 29 === 4) { throw new Error('synthetic-14'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 765 - (acc % 85);
  for (let i16 = 0; i16 < 6; i16++) {
    acc = (acc + i16 * 13 + 822) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 43) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 115) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  try { if (acc % 29 === 9) { throw new Error('synthetic-21'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 31 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const rc24: Rec55 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  for (let i25 = 0; i25 < 10; i25++) {
    acc = (acc + i25 * 13 + 935) % 100003;
  }
  for (let i26 = 0; i26 < 11; i26++) {
    acc = (acc + i26 * 13 + 557) % 100003;
  }
  const rc27: Rec55 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const rc28: Rec55 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  buf += 'pickup29-' + acc.toString();
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  for (let i31 = 0; i31 < 8; i31++) {
    acc = (acc + i31 * 13 + 946) % 100003;
  }
  acc = acc + 636 - (acc % 76);
  try { if (acc % 29 === 7) { throw new Error('synthetic-33'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 37) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const rc37: Rec55 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  for (let i38 = 0; i38 < 8; i38++) {
    acc = (acc + i38 * 13 + 731) % 100003;
  }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  const ix40: number = buf.indexOf('p55');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 175) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += 'transit42-' + acc.toString();
  try { if (acc % 29 === 10) { throw new Error('synthetic-43'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const ix44: number = buf.indexOf('p55');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  buf += 'dock45-' + acc.toString();
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  m01.set('k47', acc % 997);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  if (acc % 8 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7221) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  acc = acc + 280 - (acc % 84);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  buf += `q3:${acc % 97}`;
  acc = (acc * 31 + 7917) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  m01.set('k8', acc % 997);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  for (let i10 = 0; i10 < 12; i10++) {
    acc = (acc + i10 * 13 + 179) % 100003;
  }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const rc15: Rec55 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  acc = (acc * 31 + 880) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 158) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const rc19: Rec55 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = acc + 374 - (acc % 45);
  if (acc % 11 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const ix22: number = buf.indexOf('p55');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 999) % 65521;
  acc = acc + 295 - (acc % 53);
  try { if (acc % 29 === 14) { throw new Error('synthetic-26'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  acc = (acc * 31 + 274) % 65521;
  arr.push(acc % 1000);
  buf += 'pallet30-' + acc.toString();
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  buf += `q32:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 96) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += `q36:${acc % 97}`;
  const ix37: number = buf.indexOf('p55');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  if (acc % 29 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6465) % 65521;
  m01.set('k42', acc % 997);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += 'region47-' + acc.toString();
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const rc50: Rec55 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  try { if (acc % 29 === 3) { throw new Error('synthetic-51'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7222) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  arr.push(acc % 1000);
  acc = (acc * 31 + 104) % 65521;
  for (let i2 = 0; i2 < 7; i2++) {
    acc = (acc + i2 * 13 + 713) % 100003;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-3'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  try { if (acc % 29 === 6) { throw new Error('synthetic-5'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const rc6: Rec55 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  acc = (acc * 31 + 7205) % 65521;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  acc = (acc * 31 + 452) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  buf += `q14:${acc % 97}`;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 57) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 6) { throw new Error('synthetic-18'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  buf += `q20:${acc % 97}`;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = (acc * 31 + 9253) % 65521;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  acc = (acc * 31 + 1263) % 65521;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 108) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 90) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  buf += 'balance28-' + acc.toString();
  acc = acc + 613 - (acc % 37);
  acc = acc + 723 - (acc % 18);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-32'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 102) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 190) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const rc36: Rec55 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 126) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 42) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  buf += `q40:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 178) % 65521;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  buf += 'ticket44-' + acc.toString();
  const ix45: number = buf.indexOf('p55');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const ix46: number = buf.indexOf('p55');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  try { if (acc % 29 === 11) { throw new Error('synthetic-49'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9793) % 65521;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7223) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4237) % 65521;
  const rc2: Rec55 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  buf += 'ledger3-' + acc.toString();
  if (acc % 9 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += 'depot6-' + acc.toString();
  m01.set('k7', acc % 997);
  for (let i8 = 0; i8 < 12; i8++) {
    acc = (acc + i8 * 13 + 202) % 100003;
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  for (let i10 = 0; i10 < 10; i10++) {
    acc = (acc + i10 * 13 + 236) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5892) % 65521;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  buf += `q14:${acc % 97}`;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const ix16: number = buf.indexOf('p55');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 7222) % 65521;
  acc = acc + 152 - (acc % 57);
  try { if (acc % 29 === 7) { throw new Error('synthetic-20'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  if (acc % 25 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  if (acc % 31 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  acc = acc + 197 - (acc % 39);
  acc = (acc * 31 + 4057) % 65521;
  const ix30: number = buf.indexOf('p55');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  for (let i31 = 0; i31 < 10; i31++) {
    acc = (acc + i31 * 13 + 279) % 100003;
  }
  const ix32: number = buf.indexOf('p55');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 120) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 7 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  arr.push(acc % 1000);
  const rc39: Rec55 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  if (acc % 12 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 83) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const ix43: number = buf.indexOf('p55');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const rc44: Rec55 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += 'order46-' + acc.toString();
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const ix51: number = buf.indexOf('p55');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7224) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  buf += 'pallet1-' + acc.toString();
  for (let i2 = 0; i2 < 10; i2++) {
    acc = (acc + i2 * 13 + 576) % 100003;
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 48) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = (acc * 31 + 5329) % 65521;
  acc = (acc * 31 + 5329) % 65521;
  acc = (acc * 31 + 135) % 65521;
  buf += `q7:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4518) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 100) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (acc % 14 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  if (acc % 25 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  m01.set('k25', acc % 997);
  if (acc % 22 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 15) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  buf += 'order29-' + acc.toString();
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  buf += `q31:${acc % 97}`;
  acc = (acc * 31 + 1852) % 65521;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 118) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  arr.push(acc % 1000);
  const rc37: Rec55 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  acc = acc + 519 - (acc % 58);
  const rc39: Rec55 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const rc40: Rec55 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  m01.set('k42', acc % 997);
  acc = acc + 587 - (acc % 40);
  m01.set('k44', acc % 997);
  try { if (acc % 29 === 4) { throw new Error('synthetic-45'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-46'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 321 - (acc % 51);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 125) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  if (acc % 8 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  m01.set('k50', acc % 997);
  acc = acc + 732 - (acc % 57);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0055_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0055_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0055_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7225) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  const rc0: Rec55 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  for (let i1 = 0; i1 < 4; i1++) {
    acc = (acc + i1 * 13 + 408) % 100003;
  }
  if (acc % 15 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  m01.set('k3', acc % 997);
  acc = acc + 482 - (acc % 52);
  m01.set('k5', acc % 997);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 177) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  m01.set('k7', acc % 997);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  for (let i10 = 0; i10 < 10; i10++) {
    acc = (acc + i10 * 13 + 184) % 100003;
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  if (acc % 18 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  m01.set('k13', acc % 997);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 41) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 61) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 100) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 100) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p55');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 15) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += `q21:${acc % 97}`;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += 'refund27-' + acc.toString();
  buf += 'quota28-' + acc.toString();
  buf += `q29:${acc % 97}`;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const ix31: number = buf.indexOf('p55');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 118) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'dispatch35-' + acc.toString();
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 90) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  acc = (acc * 31 + 8648) % 65521;
  for (let i39 = 0; i39 < 12; i39++) {
    acc = (acc + i39 * 13 + 704) % 100003;
  }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  acc = acc + 766 - (acc % 83);
  const ix43: number = buf.indexOf('p55');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  m01.set('k45', acc % 997);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const rc50: Rec55 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7226) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  acc = (acc * 31 + 8192) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-1'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1587) % 65521;
  buf += `q3:${acc % 97}`;
  buf += `q4:${acc % 97}`;
  buf += 'payout5-' + acc.toString();
  try { if (acc % 29 === 20) { throw new Error('synthetic-6'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 7 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-8'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'payout9-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  m01.set('k11', acc % 997);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  for (let i13 = 0; i13 < 10; i13++) {
    acc = (acc + i13 * 13 + 491) % 100003;
  }
  for (let i14 = 0; i14 < 8; i14++) {
    acc = (acc + i14 * 13 + 968) % 100003;
  }
  acc = (acc * 31 + 4165) % 65521;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 173) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec55 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  m01.set('k22', acc % 997);
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  for (let i24 = 0; i24 < 5; i24++) {
    acc = (acc + i24 * 13 + 115) % 100003;
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  for (let i26 = 0; i26 < 7; i26++) {
    acc = (acc + i26 * 13 + 389) % 100003;
  }
  m01.set('k27', acc % 997);
  const ix28: number = buf.indexOf('p55');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 188) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 6030) % 65521;
  for (let i32 = 0; i32 < 12; i32++) {
    acc = (acc + i32 * 13 + 304) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 132) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p55');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  try { if (acc % 29 === 14) { throw new Error('synthetic-37'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const ix39: number = buf.indexOf('p55');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += 'invoice40-' + acc.toString();
  acc = acc + 731 - (acc % 19);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  buf += 'balance45-' + acc.toString();
  m01.set('k46', acc % 997);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  try { if (acc % 29 === 4) { throw new Error('synthetic-48'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  const rc50: Rec55 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7227) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  arr.push(acc % 1000);
  try { if (acc % 29 === 23) { throw new Error('synthetic-1'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  const ix2: number = buf.indexOf('p55');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const rc3: Rec55 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = acc + 397 - (acc % 77);
  const rc6: Rec55 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  m01.set('k7', acc % 997);
  acc = acc + 662 - (acc % 9);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  for (let i10 = 0; i10 < 10; i10++) {
    acc = (acc + i10 * 13 + 228) % 100003;
  }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  buf += `q13:${acc % 97}`;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  arr.push(acc % 1000);
  if (acc % 7 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 139) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  acc = acc + 77 - (acc % 20);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  arr.push(acc % 1000);
  for (let i22 = 0; i22 < 5; i22++) {
    acc = (acc + i22 * 13 + 187) % 100003;
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  m01.set('k25', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q27:${acc % 97}`;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  acc = acc + 628 - (acc % 7);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = acc + 450 - (acc % 77);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 54) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 9025) % 65521;
  buf += `q38:${acc % 97}`;
  if (acc % 5 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  acc = acc + 14 - (acc % 79);
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += 'crate44-' + acc.toString();
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  arr.push(acc % 1000);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  if (acc % 31 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  if (acc % 20 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7228) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  if (acc % 15 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1620) % 65521;
  if (acc % 30 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  for (let i7 = 0; i7 < 3; i7++) {
    acc = (acc + i7 * 13 + 241) % 100003;
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += 'ledger11-' + acc.toString();
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 154) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = acc + 656 - (acc % 97);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  for (let i15 = 0; i15 < 9; i15++) {
    acc = (acc + i15 * 13 + 194) % 100003;
  }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 66) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  acc = (acc * 31 + 734) % 65521;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  acc = (acc * 31 + 6440) % 65521;
  buf += `q23:${acc % 97}`;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  m01.set('k26', acc % 997);
  for (let i27 = 0; i27 < 7; i27++) {
    acc = (acc + i27 * 13 + 694) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7783) % 65521;
  acc = acc + 893 - (acc % 90);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  acc = acc + 456 - (acc % 68);
  acc = acc + 424 - (acc % 88);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 37) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 5; i35++) {
    acc = (acc + i35 * 13 + 792) % 100003;
  }
  acc = acc + 579 - (acc % 54);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 165) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const ix39: number = buf.indexOf('p55');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  acc = acc + 640 - (acc % 73);
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const rc48: Rec55 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  if (acc % 11 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-50'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i51 = 0; i51 < 7; i51++) {
    acc = (acc + i51 * 13 + 155) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7229) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  try { if (acc % 29 === 16) { throw new Error('synthetic-0'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = acc + 691 - (acc % 7);
  buf += 'carrier6-' + acc.toString();
  acc = acc + 333 - (acc % 30);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  buf += 'sku9-' + acc.toString();
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  buf += `q11:${acc % 97}`;
  const ix12: number = buf.indexOf('p55');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 419) % 65521;
  arr.push(acc % 1000);
  const ix15: number = buf.indexOf('p55');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  for (let i16 = 0; i16 < 5; i16++) {
    acc = (acc + i16 * 13 + 983) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 32) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  for (let i23 = 0; i23 < 9; i23++) {
    acc = (acc + i23 * 13 + 575) % 100003;
  }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 103) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += `q27:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 3) { throw new Error('synthetic-32'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 37) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-35'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const ix37: number = buf.indexOf('p55');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = acc + 93 - (acc % 85);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-43'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  arr.push(acc % 1000);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 197) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const ix48: number = buf.indexOf('p55');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7230) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = acc + 108 - (acc % 35);
  const ix2: number = buf.indexOf('p55');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  buf += 'journey3-' + acc.toString();
  buf += `q4:${acc % 97}`;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  m01.set('k6', acc % 997);
  m01.set('k7', acc % 997);
  acc = (acc * 31 + 9388) % 65521;
  const rc9: Rec55 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-11'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += `q13:${acc % 97}`;
  const rc14: Rec55 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 35) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (acc % 22 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6935) % 65521;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  buf += 'journey23-' + acc.toString();
  const rc24: Rec55 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = (acc * 31 + 2604) % 65521;
  const rc30: Rec55 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 160) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 56) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const ix39: number = buf.indexOf('p55');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const ix40: number = buf.indexOf('p55');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const rc41: Rec55 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  arr.push(acc % 1000);
  buf += `q45:${acc % 97}`;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  for (let i47 = 0; i47 < 8; i47++) {
    acc = (acc + i47 * 13 + 989) % 100003;
  }
  for (let i48 = 0; i48 < 11; i48++) {
    acc = (acc + i48 * 13 + 990) % 100003;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-49'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  const ix50: number = buf.indexOf('p55');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const rc51: Rec55 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7231) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  buf += 'payout0-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const rc2: Rec55 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  buf += 'ledger4-' + acc.toString();
  if (acc % 6 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  m01.set('k7', acc % 997);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-9'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  buf += `q11:${acc % 97}`;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  const ix14: number = buf.indexOf('p55');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 169) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 42) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 136) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'transit18-' + acc.toString();
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  m01.set('k20', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 186) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  try { if (acc % 29 === 10) { throw new Error('synthetic-23'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-24'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 183) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const ix31: number = buf.indexOf('p55');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  acc = acc + 668 - (acc % 58);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 182) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  if (acc % 31 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  for (let i38 = 0; i38 < 4; i38++) {
    acc = (acc + i38 * 13 + 413) % 100003;
  }
  buf += 'coupon39-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const rc41: Rec55 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  for (let i45 = 0; i45 < 5; i45++) {
    acc = (acc + i45 * 13 + 927) % 100003;
  }
  for (let i46 = 0; i46 < 11; i46++) {
    acc = (acc + i46 * 13 + 22) % 100003;
  }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  const rc50: Rec55 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7232) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  for (let i3 = 0; i3 < 4; i3++) {
    acc = (acc + i3 * 13 + 552) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 50) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const rc8: Rec55 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  m01.set('k9', acc % 997);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = acc + 546 - (acc % 29);
  const ix14: number = buf.indexOf('p55');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += `q15:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 94) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += 'routeplan19-' + acc.toString();
  for (let i20 = 0; i20 < 5; i20++) {
    acc = (acc + i20 * 13 + 553) % 100003;
  }
  if (acc % 21 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const ix22: number = buf.indexOf('p55');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const ix24: number = buf.indexOf('p55');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  buf += 'invoice25-' + acc.toString();
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  acc = (acc * 31 + 6098) % 65521;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  buf += 'warehouse30-' + acc.toString();
  acc = acc + 533 - (acc % 93);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const rc33: Rec55 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 150) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  acc = acc + 22 - (acc % 11);
  const rc39: Rec55 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  if (acc % 25 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 63) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  m01.set('k44', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  for (let i46 = 0; i46 < 12; i46++) {
    acc = (acc + i46 * 13 + 720) % 100003;
  }
  acc = (acc * 31 + 6401) % 65521;
  arr.push(acc % 1000);
  const ix49: number = buf.indexOf('p55');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const rc50: Rec55 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7233) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = acc + 440 - (acc % 80);
  for (let i3 = 0; i3 < 5; i3++) {
    acc = (acc + i3 * 13 + 618) % 100003;
  }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const rc8: Rec55 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 197) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  arr.push(acc % 1000);
  buf += 'quota13-' + acc.toString();
  for (let i14 = 0; i14 < 4; i14++) {
    acc = (acc + i14 * 13 + 31) % 100003;
  }
  for (let i15 = 0; i15 < 12; i15++) {
    acc = (acc + i15 * 13 + 211) % 100003;
  }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 140) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 170) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  try { if (acc % 29 === 3) { throw new Error('synthetic-20'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const rc22: Rec55 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  try { if (acc % 29 === 20) { throw new Error('synthetic-23'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  buf += `q25:${acc % 97}`;
  m01.set('k26', acc % 997);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 71) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  buf += 'parcel28-' + acc.toString();
  const rc29: Rec55 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 129) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = (acc * 31 + 1230) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 156) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-36'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  if (acc % 14 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  acc = acc + 301 - (acc % 26);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const rc42: Rec55 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  acc = (acc * 31 + 9129) % 65521;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  acc = acc + 695 - (acc % 80);
  buf += 'sku48-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  acc = (acc * 31 + 9777) % 65521;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7234) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 123) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  for (let i1 = 0; i1 < 5; i1++) {
    acc = (acc + i1 * 13 + 131) % 100003;
  }
  buf += 'rebate2-' + acc.toString();
  buf += `q3:${acc % 97}`;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  if (acc % 22 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  acc = acc + 569 - (acc % 44);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  for (let i10 = 0; i10 < 5; i10++) {
    acc = (acc + i10 * 13 + 442) % 100003;
  }
  buf += `q11:${acc % 97}`;
  buf += 'invoice12-' + acc.toString();
  acc = acc + 287 - (acc % 94);
  for (let i14 = 0; i14 < 3; i14++) {
    acc = (acc + i14 * 13 + 244) % 100003;
  }
  arr.push(acc % 1000);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 82) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 5; i18++) {
    acc = (acc + i18 * 13 + 251) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const rc21: Rec55 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  acc = (acc * 31 + 4835) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const rc24: Rec55 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const ix26: number = buf.indexOf('p55');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2326) % 65521;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 186) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  buf += 'waybill29-' + acc.toString();
  try { if (acc % 29 === 6) { throw new Error('synthetic-30'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i31 = 0; i31 < 12; i31++) {
    acc = (acc + i31 * 13 + 35) % 100003;
  }
  buf += `q32:${acc % 97}`;
  acc = (acc * 31 + 2931) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 179) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  for (let i36 = 0; i36 < 5; i36++) {
    acc = (acc + i36 * 13 + 34) % 100003;
  }
  buf += 'tariff37-' + acc.toString();
  acc = acc + 546 - (acc % 8);
  acc = acc + 309 - (acc % 77);
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += 'transit41-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (acc % 27 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += 'vendor48-' + acc.toString();
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0055_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0055_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0055_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7235) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = acc + 647 - (acc % 23);
  buf += 'tariff3-' + acc.toString();
  for (let i4 = 0; i4 < 4; i4++) {
    acc = (acc + i4 * 13 + 913) % 100003;
  }
  const rc5: Rec55 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  buf += `q7:${acc % 97}`;
  acc = acc + 418 - (acc % 12);
  for (let i9 = 0; i9 < 12; i9++) {
    acc = (acc + i9 * 13 + 139) % 100003;
  }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  m01.set('k12', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const rc14: Rec55 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  acc = (acc * 31 + 7739) % 65521;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 134) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'client18-' + acc.toString();
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const ix22: number = buf.indexOf('p55');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const rc24: Rec55 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  for (let i25 = 0; i25 < 12; i25++) {
    acc = (acc + i25 * 13 + 504) % 100003;
  }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 94) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  m01.set('k27', acc % 997);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  if (acc % 10 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += 'journey33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 165) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'journey35-' + acc.toString();
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  m01.set('k38', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 105) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  if (acc % 14 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += 'routeplan46-' + acc.toString();
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  buf += 'pallet48-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  if (acc % 11 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 131) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7236) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  buf += 'order0-' + acc.toString();
  m01.set('k1', acc % 997);
  if (acc % 28 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 59) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += 'routeplan5-' + acc.toString();
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = acc + 585 - (acc % 73);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 106) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  m01.set('k10', acc % 997);
  const rc11: Rec55 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += 'warehouse13-' + acc.toString();
  buf += 'quota14-' + acc.toString();
  const ix15: number = buf.indexOf('p55');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  const ix16: number = buf.indexOf('p55');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 27) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const ix20: number = buf.indexOf('p55');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const ix24: number = buf.indexOf('p55');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  m01.set('k25', acc % 997);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  for (let i28 = 0; i28 < 6; i28++) {
    acc = (acc + i28 * 13 + 713) % 100003;
  }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  const ix30: number = buf.indexOf('p55');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  for (let i31 = 0; i31 < 6; i31++) {
    acc = (acc + i31 * 13 + 544) % 100003;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-32'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i33 = 0; i33 < 5; i33++) {
    acc = (acc + i33 * 13 + 981) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 110) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  if (acc % 24 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  arr.push(acc % 1000);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  arr.push(acc % 1000);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  for (let i44 = 0; i44 < 8; i44++) {
    acc = (acc + i44 * 13 + 996) % 100003;
  }
  if (acc % 12 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = acc + 863 - (acc % 34);
  const ix47: number = buf.indexOf('p55');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  if (acc % 6 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  for (let i49 = 0; i49 < 7; i49++) {
    acc = (acc + i49 * 13 + 349) % 100003;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7237) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  m01.set('k0', acc % 997);
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += `q5:${acc % 97}`;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 66) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  acc = acc + 118 - (acc % 23);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += 'payout11-' + acc.toString();
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 578) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const ix16: number = buf.indexOf('p55');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 195) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  buf += `q19:${acc % 97}`;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 107) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = (acc * 31 + 3203) % 65521;
  acc = (acc * 31 + 7839) % 65521;
  try { if (acc % 29 === 10) { throw new Error('synthetic-24'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  buf += `q26:${acc % 97}`;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  for (let i29 = 0; i29 < 5; i29++) {
    acc = (acc + i29 * 13 + 920) % 100003;
  }
  if (acc % 16 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 32) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  try { if (acc % 29 === 20) { throw new Error('synthetic-32'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 17 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 48) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  buf += `q36:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  m01.set('k38', acc % 997);
  const rc39: Rec55 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 72) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  buf += `q42:${acc % 97}`;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  if (acc % 23 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-46'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-47'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const rc48: Rec55 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  buf += `q49:${acc % 97}`;
  try { if (acc % 29 === 12) { throw new Error('synthetic-50'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7238) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  for (let i0 = 0; i0 < 5; i0++) {
    acc = (acc + i0 * 13 + 780) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  buf += `q3:${acc % 97}`;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 65) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const rc6: Rec55 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  try { if (acc % 29 === 8) { throw new Error('synthetic-7'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 826 - (acc % 35);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = acc + 84 - (acc % 94);
  m01.set('k14', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 145) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  try { if (acc % 29 === 13) { throw new Error('synthetic-19'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-20'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const ix22: number = buf.indexOf('p55');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  buf += `q23:${acc % 97}`;
  for (let i24 = 0; i24 < 4; i24++) {
    acc = (acc + i24 * 13 + 553) % 100003;
  }
  const rc25: Rec55 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  if (acc % 29 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  if (acc % 12 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  for (let i28 = 0; i28 < 10; i28++) {
    acc = (acc + i28 * 13 + 731) % 100003;
  }
  const rc29: Rec55 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  buf += 'portal32-' + acc.toString();
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 98) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += 'coupon38-' + acc.toString();
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  buf += 'region41-' + acc.toString();
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 72) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  try { if (acc % 29 === 13) { throw new Error('synthetic-43'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 97) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  acc = (acc * 31 + 3752) % 65521;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 173) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const rc48: Rec55 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  try { if (acc % 29 === 22) { throw new Error('synthetic-50'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 139) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7239) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 128) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  acc = acc + 944 - (acc % 45);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 64) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-10'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i11 = 0; i11 < 5; i11++) {
    acc = (acc + i11 * 13 + 227) % 100003;
  }
  const rc12: Rec55 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const rc13: Rec55 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  if (acc % 13 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = acc + 705 - (acc % 42);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 151) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 5856) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 21) { throw new Error('synthetic-21'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k22', acc % 997);
  buf += 'tariff23-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  for (let i25 = 0; i25 < 11; i25++) {
    acc = (acc + i25 * 13 + 43) % 100003;
  }
  for (let i26 = 0; i26 < 7; i26++) {
    acc = (acc + i26 * 13 + 263) % 100003;
  }
  const ix27: number = buf.indexOf('p55');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += 'crate29-' + acc.toString();
  m01.set('k30', acc % 997);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 169) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 136) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 7; i35++) {
    acc = (acc + i35 * 13 + 246) % 100003;
  }
  if (acc % 12 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  m01.set('k37', acc % 997);
  for (let i38 = 0; i38 < 12; i38++) {
    acc = (acc + i38 * 13 + 227) % 100003;
  }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  const ix40: number = buf.indexOf('p55');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  buf += `q41:${acc % 97}`;
  try { if (acc % 29 === 13) { throw new Error('synthetic-42'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-43'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 5161) % 65521;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  if (acc % 20 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  acc = (acc * 31 + 4270) % 65521;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 100) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const rc49: Rec55 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  for (let i50 = 0; i50 < 5; i50++) {
    acc = (acc + i50 * 13 + 45) % 100003;
  }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7240) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  acc = (acc * 31 + 3441) % 65521;
  const ix1: number = buf.indexOf('p55');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 8534) % 65521;
  for (let i4 = 0; i4 < 10; i4++) {
    acc = (acc + i4 * 13 + 210) % 100003;
  }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  if (acc % 20 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 158) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  for (let i11 = 0; i11 < 10; i11++) {
    acc = (acc + i11 * 13 + 314) % 100003;
  }
  const ix12: number = buf.indexOf('p55');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 89) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i19 = 0; i19 < 8; i19++) {
    acc = (acc + i19 * 13 + 279) % 100003;
  }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  acc = acc + 519 - (acc % 97);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 21) { throw new Error('synthetic-25'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const rc26: Rec55 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += 'portal27-' + acc.toString();
  buf += `q28:${acc % 97}`;
  buf += 'routeplan29-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 74) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 20) { throw new Error('synthetic-38'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q39:${acc % 97}`;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += 'freight41-' + acc.toString();
  m01.set('k42', acc % 997);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 84) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const ix44: number = buf.indexOf('p55');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 150) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  try { if (acc % 29 === 3) { throw new Error('synthetic-48'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const rc51: Rec55 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7241) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  arr.push(acc % 1000);
  if (acc % 29 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = (acc * 31 + 6215) % 65521;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  buf += `q5:${acc % 97}`;
  acc = acc + 637 - (acc % 22);
  if (acc % 13 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  buf += `q10:${acc % 97}`;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = acc + 499 - (acc % 72);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 173) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const rc19: Rec55 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const rc21: Rec55 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 82) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  m01.set('k25', acc % 997);
  buf += `q26:${acc % 97}`;
  if (acc % 19 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  m01.set('k28', acc % 997);
  arr.push(acc % 1000);
  acc = acc + 354 - (acc % 83);
  if (acc % 17 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  buf += `q32:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-33'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 196) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p55');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  for (let i36 = 0; i36 < 10; i36++) {
    acc = (acc + i36 * 13 + 77) % 100003;
  }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  m01.set('k44', acc % 997);
  acc = acc + 339 - (acc % 50);
  acc = acc + 539 - (acc % 94);
  m01.set('k47', acc % 997);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 52) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7242) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  for (let i1 = 0; i1 < 11; i1++) {
    acc = (acc + i1 * 13 + 391) % 100003;
  }
  m01.set('k2', acc % 997);
  buf += 'parcel3-' + acc.toString();
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const rc5: Rec55 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  acc = acc + 353 - (acc % 24);
  try { if (acc % 29 === 12) { throw new Error('synthetic-7'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i8 = 0; i8 < 10; i8++) {
    acc = (acc + i8 * 13 + 217) % 100003;
  }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  try { if (acc % 29 === 14) { throw new Error('synthetic-11'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-13'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const rc14: Rec55 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  acc = (acc * 31 + 5342) % 65521;
  const rc16: Rec55 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 15) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  for (let i19 = 0; i19 < 9; i19++) {
    acc = (acc + i19 * 13 + 87) % 100003;
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-20'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q21:${acc % 97}`;
  if (acc % 13 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += `q24:${acc % 97}`;
  acc = acc + 890 - (acc % 75);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = (acc * 31 + 7254) % 65521;
  m01.set('k28', acc % 997);
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  m01.set('k30', acc % 997);
  arr.push(acc % 1000);
  m01.set('k32', acc % 997);
  try { if (acc % 29 === 8) { throw new Error('synthetic-33'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 190) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 26 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 130) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  buf += 'ticket38-' + acc.toString();
  arr.push(acc % 1000);
  try { if (acc % 29 === 8) { throw new Error('synthetic-40'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const ix41: number = buf.indexOf('p55');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const rc42: Rec55 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  try { if (acc % 29 === 17) { throw new Error('synthetic-43'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i44 = 0; i44 < 12; i44++) {
    acc = (acc + i44 * 13 + 465) % 100003;
  }
  buf += `q45:${acc % 97}`;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 67) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  buf += 'carrier47-' + acc.toString();
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (acc % 13 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  for (let i51 = 0; i51 < 7; i51++) {
    acc = (acc + i51 * 13 + 498) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7243) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  try { if (acc % 29 === 9) { throw new Error('synthetic-0'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  if (acc % 21 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  acc = acc + 434 - (acc % 33);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const rc7: Rec55 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  if (acc % 14 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  arr.push(acc % 1000);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  arr.push(acc % 1000);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  acc = (acc * 31 + 5635) % 65521;
  for (let i16 = 0; i16 < 10; i16++) {
    acc = (acc + i16 * 13 + 472) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 154) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  if (acc % 17 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = acc + 51 - (acc % 16);
  buf += 'dispatch27-' + acc.toString();
  acc = acc + 12 - (acc % 73);
  const rc29: Rec55 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  acc = acc + 29 - (acc % 97);
  if (acc % 5 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  buf += `q32:${acc % 97}`;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 42) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  acc = (acc * 31 + 5410) % 65521;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 135) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  acc = acc + 83 - (acc % 86);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 197) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const rc46: Rec55 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 143) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  buf += 'balance50-' + acc.toString();
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7244) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  const rc0: Rec55 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (acc % 11 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const ix4: number = buf.indexOf('p55');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  arr.push(acc % 1000);
  const rc8: Rec55 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  buf += `q12:${acc % 97}`;
  for (let i13 = 0; i13 < 10; i13++) {
    acc = (acc + i13 * 13 + 450) % 100003;
  }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += `q15:${acc % 97}`;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 139) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const rc19: Rec55 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  if (acc % 9 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 145) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2632) % 65521;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  try { if (acc % 29 === 16) { throw new Error('synthetic-26'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9774) % 65521;
  acc = (acc * 31 + 7742) % 65521;
  try { if (acc % 29 === 4) { throw new Error('synthetic-29'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 192) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const ix32: number = buf.indexOf('p55');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const ix33: number = buf.indexOf('p55');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 144) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 684 - (acc % 14);
  if (acc % 30 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  for (let i39 = 0; i39 < 4; i39++) {
    acc = (acc + i39 * 13 + 664) % 100003;
  }
  acc = (acc * 31 + 2703) % 65521;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  m01.set('k42', acc % 997);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  acc = (acc * 31 + 3464) % 65521;
  const ix45: number = buf.indexOf('p55');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  m01.set('k46', acc % 997);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  buf += `q48:${acc % 97}`;
  acc = acc + 514 - (acc % 49);
  if (acc % 17 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  for (let i51 = 0; i51 < 10; i51++) {
    acc = (acc + i51 * 13 + 126) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0055_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0055_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0055_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7245) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  acc = (acc * 31 + 9794) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-2'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 195) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-7'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  arr.push(acc % 1000);
  const ix10: number = buf.indexOf('p55');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  m01.set('k13', acc % 997);
  acc = acc + 170 - (acc % 84);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 158) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  buf += `q21:${acc % 97}`;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  acc = acc + 658 - (acc % 64);
  acc = acc + 313 - (acc % 49);
  buf += 'freight30-' + acc.toString();
  arr.push(acc % 1000);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const ix33: number = buf.indexOf('p55');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 150) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 7) { throw new Error('synthetic-35'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i36 = 0; i36 < 4; i36++) {
    acc = (acc + i36 * 13 + 899) % 100003;
  }
  if (acc % 16 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  if (acc % 15 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += 'parcel39-' + acc.toString();
  acc = (acc * 31 + 4107) % 65521;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const rc42: Rec55 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  try { if (acc % 29 === 17) { throw new Error('synthetic-45'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  if (acc % 27 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  for (let i48 = 0; i48 < 5; i48++) {
    acc = (acc + i48 * 13 + 765) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7246) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  buf += `q0:${acc % 97}`;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  if (acc % 23 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  m01.set('k4', acc % 997);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  buf += 'ticket6-' + acc.toString();
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  try { if (acc % 29 === 10) { throw new Error('synthetic-10'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 111) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  buf += 'transit13-' + acc.toString();
  m01.set('k14', acc % 997);
  buf += `q15:${acc % 97}`;
  acc = (acc * 31 + 8061) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 18) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p55');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = acc + 764 - (acc % 61);
  acc = acc + 397 - (acc % 36);
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  arr.push(acc % 1000);
  for (let i24 = 0; i24 < 9; i24++) {
    acc = (acc + i24 * 13 + 643) % 100003;
  }
  if (acc % 7 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  buf += 'policy26-' + acc.toString();
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const ix29: number = buf.indexOf('p55');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 151) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  m01.set('k37', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 33) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = (acc * 31 + 934) % 65521;
  arr.push(acc % 1000);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 194) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  buf += `q43:${acc % 97}`;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 30) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  buf += `q47:${acc % 97}`;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += `q49:${acc % 97}`;
  const rc50: Rec55 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0055_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7247) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit55 = new Unit55(acc);
  if (acc % 23 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  m01.set('k1', acc % 997);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += 'ticket3-' + acc.toString();
  buf += 'sku4-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  acc = acc + 356 - (acc % 89);
  m01.set('k7', acc % 997);
  if (acc % 9 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  m01.set('k9', acc % 997);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  if (acc % 14 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  acc = (acc * 31 + 9775) % 65521;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 159) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const ix20: number = buf.indexOf('p55');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  m01.set('k22', acc % 997);
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  m01.set('k24', acc % 997);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 163) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  for (let i27 = 0; i27 < 3; i27++) {
    acc = (acc + i27 * 13 + 561) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  const rc30: Rec55 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += 'vendor31-' + acc.toString();
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 16) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-35'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9838) % 65521;
  const ix37: number = buf.indexOf('p55');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (acc % 9 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 152) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  m01.set('k40', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'order42-' + acc.toString();
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  buf += 'rebate44-' + acc.toString();
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  if (acc % 23 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  buf += `q50:${acc % 97}`;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0055(): BizFn[] {
  return [biz_0055_00, biz_0055_01, biz_0055_02, biz_0055_03, biz_0055_04, biz_0055_05, biz_0055_06, biz_0055_07, biz_0055_08, biz_0055_09, biz_0055_10, biz_0055_11, biz_0055_12, biz_0055_13, biz_0055_14, biz_0055_15, biz_0055_16, biz_0055_17, biz_0055_18, biz_0055_19, biz_0055_20, biz_0055_21, biz_0055_22, biz_0055_23, biz_0055_24, biz_0055_25, biz_0055_26, biz_0055_27, biz_0055_28, biz_0055_29, biz_0055_30, biz_0055_31, biz_0055_32, biz_0055_33, biz_0055_34, biz_0055_35, biz_0055_36, biz_0055_37, biz_0055_38, biz_0055_39, biz_0055_40, biz_0055_41, biz_0055_42];
}

export function rega_0055(): ABizFn[] {
  return [biz_0055_09a, biz_0055_19a, biz_0055_29a, biz_0055_39a];
}
