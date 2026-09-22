// Biz0060.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec60 { id: number; tag: string; score: number; }

class Unit60 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0060_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7860) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  const ix3: number = buf.indexOf('p60');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  m01.set('k6', acc % 997);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  arr.push(acc % 1000);
  acc = acc + 461 - (acc % 79);
  try { if (acc % 29 === 12) { throw new Error('synthetic-11'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  const rc13: Rec60 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  if (acc % 11 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-15'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 40) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  m01.set('k19', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const ix23: number = buf.indexOf('p60');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  acc = acc + 154 - (acc % 33);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 84) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const rc29: Rec60 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const ix31: number = buf.indexOf('p60');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-32'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 142) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 40) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = acc + 545 - (acc % 10);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  arr.push(acc % 1000);
  buf += 'customs39-' + acc.toString();
  for (let i40 = 0; i40 < 10; i40++) {
    acc = (acc + i40 * 13 + 863) % 100003;
  }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const rc44: Rec60 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  for (let i46 = 0; i46 < 10; i46++) {
    acc = (acc + i46 * 13 + 29) % 100003;
  }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const ix51: number = buf.indexOf('p60');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7861) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  try { if (acc % 29 === 9) { throw new Error('synthetic-6'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6781) % 65521;
  buf += `q10:${acc % 97}`;
  if (acc % 27 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 119) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 163) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 934 - (acc % 45);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  acc = acc + 483 - (acc % 78);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  buf += 'transit26-' + acc.toString();
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = acc + 475 - (acc % 50);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  if (acc % 15 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 11) { throw new Error('synthetic-33'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 149) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 73) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const ix36: number = buf.indexOf('p60');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-37'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  for (let i39 = 0; i39 < 12; i39++) {
    acc = (acc + i39 * 13 + 608) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  for (let i41 = 0; i41 < 6; i41++) {
    acc = (acc + i41 * 13 + 594) % 100003;
  }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const rc43: Rec60 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  acc = (acc * 31 + 3800) % 65521;
  acc = (acc * 31 + 7220) % 65521;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  for (let i47 = 0; i47 < 4; i47++) {
    acc = (acc + i47 * 13 + 669) % 100003;
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 39) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  m01.set('k50', acc % 997);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7862) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  acc = (acc * 31 + 5669) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-1'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 152 - (acc % 20);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  m01.set('k5', acc % 997);
  for (let i6 = 0; i6 < 3; i6++) {
    acc = (acc + i6 * 13 + 988) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 113) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  for (let i10 = 0; i10 < 10; i10++) {
    acc = (acc + i10 * 13 + 249) % 100003;
  }
  if (acc % 17 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 21) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  if (acc % 17 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  buf += `q14:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  if (acc % 15 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 149) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const rc19: Rec60 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  if (acc % 11 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  m01.set('k21', acc % 997);
  const rc22: Rec60 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 127) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  if (acc % 18 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-28'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const rc29: Rec60 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = (acc * 31 + 6044) % 65521;
  if (acc % 20 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const rc33: Rec60 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 198) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 913 - (acc % 14);
  acc = (acc * 31 + 7887) % 65521;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 191) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  for (let i38 = 0; i38 < 6; i38++) {
    acc = (acc + i38 * 13 + 261) % 100003;
  }
  acc = (acc * 31 + 3531) % 65521;
  const rc40: Rec60 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  acc = (acc * 31 + 9533) % 65521;
  buf += `q42:${acc % 97}`;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const rc44: Rec60 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  arr.push(acc % 1000);
  const rc46: Rec60 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  if (acc % 18 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const rc48: Rec60 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  for (let i50 = 0; i50 < 6; i50++) {
    acc = (acc + i50 * 13 + 916) % 100003;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-51'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7863) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  arr.push(acc % 1000);
  acc = (acc * 31 + 3314) % 65521;
  m01.set('k2', acc % 997);
  arr.push(acc % 1000);
  const ix4: number = buf.indexOf('p60');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 40) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  acc = (acc * 31 + 5401) % 65521;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1754) % 65521;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const ix12: number = buf.indexOf('p60');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 165) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const ix16: number = buf.indexOf('p60');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 41) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += 'invoice19-' + acc.toString();
  buf += 'carrier20-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const ix24: number = buf.indexOf('p60');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  m01.set('k26', acc % 997);
  const ix27: number = buf.indexOf('p60');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  for (let i28 = 0; i28 < 11; i28++) {
    acc = (acc + i28 * 13 + 845) % 100003;
  }
  acc = acc + 103 - (acc % 52);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-31'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 22) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  buf += `q37:${acc % 97}`;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 157) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  buf += 'routeplan39-' + acc.toString();
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  if (acc % 24 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  acc = acc + 149 - (acc % 91);
  buf += `q43:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 168) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const ix48: number = buf.indexOf('p60');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const ix50: number = buf.indexOf('p60');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  for (let i51 = 0; i51 < 12; i51++) {
    acc = (acc + i51 * 13 + 278) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7864) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const rc1: Rec60 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  m01.set('k4', acc % 997);
  const rc5: Rec60 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  for (let i7 = 0; i7 < 5; i7++) {
    acc = (acc + i7 * 13 + 329) % 100003;
  }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  for (let i9 = 0; i9 < 3; i9++) {
    acc = (acc + i9 * 13 + 663) % 100003;
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  for (let i11 = 0; i11 < 11; i11++) {
    acc = (acc + i11 * 13 + 853) % 100003;
  }
  const ix12: number = buf.indexOf('p60');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  buf += `q13:${acc % 97}`;
  arr.push(acc % 1000);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 132) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 68) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p60');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  const rc19: Rec60 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const ix20: number = buf.indexOf('p60');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  m01.set('k21', acc % 997);
  acc = acc + 496 - (acc % 62);
  acc = acc + 247 - (acc % 40);
  m01.set('k24', acc % 997);
  buf += `q25:${acc % 97}`;
  acc = (acc * 31 + 6308) % 65521;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = acc + 703 - (acc % 83);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 93) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 7136) % 65521;
  buf += 'audit36-' + acc.toString();
  const ix37: number = buf.indexOf('p60');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  buf += 'stocktake38-' + acc.toString();
  buf += `q39:${acc % 97}`;
  const rc40: Rec60 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const ix42: number = buf.indexOf('p60');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 167) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  for (let i44 = 0; i44 < 6; i44++) {
    acc = (acc + i44 * 13 + 344) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 132) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7865) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  try { if (acc % 29 === 22) { throw new Error('synthetic-0'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-2'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const rc3: Rec60 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  arr.push(acc % 1000);
  try { if (acc % 29 === 2) { throw new Error('synthetic-5'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k6', acc % 997);
  acc = (acc * 31 + 5333) % 65521;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  buf += `q9:${acc % 97}`;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  buf += `q11:${acc % 97}`;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const rc13: Rec60 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  buf += `q15:${acc % 97}`;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 173) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec60 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  for (let i19 = 0; i19 < 6; i19++) {
    acc = (acc + i19 * 13 + 418) % 100003;
  }
  acc = (acc * 31 + 3741) % 65521;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  m01.set('k22', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 101) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  m01.set('k25', acc % 997);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  try { if (acc % 29 === 4) { throw new Error('synthetic-28'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k29', acc % 997);
  buf += 'pickup30-' + acc.toString();
  const ix31: number = buf.indexOf('p60');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  for (let i33 = 0; i33 < 7; i33++) {
    acc = (acc + i33 * 13 + 926) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 190) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 85) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-37'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const ix38: number = buf.indexOf('p60');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-39'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7436) % 65521;
  arr.push(acc % 1000);
  m01.set('k42', acc % 997);
  const rc43: Rec60 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  arr.push(acc % 1000);
  if (acc % 22 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += `q47:${acc % 97}`;
  acc = (acc * 31 + 9021) % 65521;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7866) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  const rc0: Rec60 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  for (let i1 = 0; i1 < 7; i1++) {
    acc = (acc + i1 * 13 + 831) % 100003;
  }
  arr.push(acc % 1000);
  acc = acc + 517 - (acc % 87);
  const rc4: Rec60 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  try { if (acc % 29 === 4) { throw new Error('synthetic-6'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const ix8: number = buf.indexOf('p60');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 88) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  m01.set('k10', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  acc = (acc * 31 + 8584) % 65521;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 28) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 6402) % 65521;
  try { if (acc % 29 === 10) { throw new Error('synthetic-19'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 73) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 30) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const rc22: Rec60 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  acc = (acc * 31 + 7876) % 65521;
  acc = acc + 163 - (acc % 13);
  const ix25: number = buf.indexOf('p60');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-28'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8776) % 65521;
  m01.set('k30', acc % 997);
  try { if (acc % 29 === 2) { throw new Error('synthetic-31'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 699 - (acc % 81);
  buf += 'tariff33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 30) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  acc = acc + 511 - (acc % 50);
  for (let i37 = 0; i37 < 12; i37++) {
    acc = (acc + i37 * 13 + 950) % 100003;
  }
  buf += 'bay38-' + acc.toString();
  for (let i39 = 0; i39 < 5; i39++) {
    acc = (acc + i39 * 13 + 44) % 100003;
  }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const rc41: Rec60 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  for (let i43 = 0; i43 < 5; i43++) {
    acc = (acc + i43 * 13 + 697) % 100003;
  }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-45'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 13) { throw new Error('synthetic-48'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  for (let i50 = 0; i50 < 3; i50++) {
    acc = (acc + i50 * 13 + 846) % 100003;
  }
  acc = acc + 367 - (acc % 54);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7867) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  acc = (acc * 31 + 2118) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  acc = (acc * 31 + 2524) % 65521;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  m01.set('k5', acc % 997);
  for (let i6 = 0; i6 < 3; i6++) {
    acc = (acc + i6 * 13 + 967) % 100003;
  }
  m01.set('k7', acc % 997);
  if (acc % 10 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  if (acc % 11 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 19) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 154) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p60');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const ix23: number = buf.indexOf('p60');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const ix24: number = buf.indexOf('p60');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-25'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  try { if (acc % 29 === 5) { throw new Error('synthetic-29'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  m01.set('k31', acc % 997);
  const ix32: number = buf.indexOf('p60');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 160) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 8; i35++) {
    acc = (acc + i35 * 13 + 423) % 100003;
  }
  buf += 'dock36-' + acc.toString();
  if (acc % 11 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  for (let i38 = 0; i38 < 11; i38++) {
    acc = (acc + i38 * 13 + 140) % 100003;
  }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 84) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  for (let i40 = 0; i40 < 12; i40++) {
    acc = (acc + i40 * 13 + 113) % 100003;
  }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  acc = acc + 949 - (acc % 43);
  const ix44: number = buf.indexOf('p60');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  acc = acc + 971 - (acc % 22);
  const ix46: number = buf.indexOf('p60');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const ix47: number = buf.indexOf('p60');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 94) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const ix51: number = buf.indexOf('p60');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7868) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-2'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const rc3: Rec60 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  acc = (acc * 31 + 8142) % 65521;
  acc = (acc * 31 + 4651) % 65521;
  acc = acc + 247 - (acc % 73);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  for (let i8 = 0; i8 < 10; i8++) {
    acc = (acc + i8 * 13 + 854) % 100003;
  }
  acc = acc + 885 - (acc % 97);
  const rc10: Rec60 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2893) % 65521;
  if (acc % 26 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  if (acc % 12 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 64) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  arr.push(acc % 1000);
  acc = (acc * 31 + 4425) % 65521;
  const rc22: Rec60 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  arr.push(acc % 1000);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  if (acc % 10 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const rc28: Rec60 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-33'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 173) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 22) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 49) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  acc = acc + 200 - (acc % 52);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  buf += 'settle40-' + acc.toString();
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const rc44: Rec60 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  acc = (acc * 31 + 5943) % 65521;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  buf += `q48:${acc % 97}`;
  const rc49: Rec60 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const ix50: number = buf.indexOf('p60');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7869) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += `q4:${acc % 97}`;
  if (acc % 6 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-7'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const ix9: number = buf.indexOf('p60');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3884) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const ix12: number = buf.indexOf('p60');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += 'carrier15-' + acc.toString();
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 37) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-18'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (acc % 10 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const ix22: number = buf.indexOf('p60');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  buf += `q23:${acc % 97}`;
  acc = (acc * 31 + 4843) % 65521;
  buf += 'tariff25-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const rc28: Rec60 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  try { if (acc % 29 === 12) { throw new Error('synthetic-30'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7203) % 65521;
  buf += `q32:${acc % 97}`;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 167) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 86) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  try { if (acc % 29 === 18) { throw new Error('synthetic-36'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 507 - (acc % 48);
  acc = (acc * 31 + 2140) % 65521;
  arr.push(acc % 1000);
  for (let i40 = 0; i40 < 7; i40++) {
    acc = (acc + i40 * 13 + 551) % 100003;
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  m01.set('k42', acc % 997);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  arr.push(acc % 1000);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 129) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += 'ledger46-' + acc.toString();
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  acc = acc + 996 - (acc % 20);
  m01.set('k49', acc % 997);
  if (acc % 5 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0060_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0060_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0060_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7870) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  const ix0: number = buf.indexOf('p60');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  for (let i2 = 0; i2 < 7; i2++) {
    acc = (acc + i2 * 13 + 982) % 100003;
  }
  acc = acc + 589 - (acc % 62);
  buf += `q4:${acc % 97}`;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  m01.set('k9', acc % 997);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const ix11: number = buf.indexOf('p60');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const rc12: Rec60 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += 'customs13-' + acc.toString();
  const ix14: number = buf.indexOf('p60');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const ix16: number = buf.indexOf('p60');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 125) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += 'dispatch19-' + acc.toString();
  const ix20: number = buf.indexOf('p60');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4126) % 65521;
  m01.set('k22', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-24'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 74) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  for (let i27 = 0; i27 < 4; i27++) {
    acc = (acc + i27 * 13 + 971) % 100003;
  }
  m01.set('k28', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = (acc * 31 + 2154) % 65521;
  acc = acc + 111 - (acc % 87);
  const ix32: number = buf.indexOf('p60');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 178) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p60');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  m01.set('k37', acc % 997);
  const ix38: number = buf.indexOf('p60');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  m01.set('k42', acc % 997);
  acc = acc + 825 - (acc % 68);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const ix45: number = buf.indexOf('p60');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const ix47: number = buf.indexOf('p60');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  buf += `q48:${acc % 97}`;
  try { if (acc % 29 === 8) { throw new Error('synthetic-49'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7871) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  m01.set('k3', acc % 997);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const rc7: Rec60 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  try { if (acc % 29 === 13) { throw new Error('synthetic-9'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9497) % 65521;
  acc = (acc * 31 + 1973) % 65521;
  m01.set('k12', acc % 997);
  buf += 'depot13-' + acc.toString();
  buf += `q14:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'balance16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 60) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 4; i18++) {
    acc = (acc + i18 * 13 + 683) % 100003;
  }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-20'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-21'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  buf += 'settle24-' + acc.toString();
  buf += 'bay25-' + acc.toString();
  acc = acc + 51 - (acc % 73);
  m01.set('k27', acc % 997);
  buf += 'bay28-' + acc.toString();
  try { if (acc % 29 === 12) { throw new Error('synthetic-29'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  acc = (acc * 31 + 536) % 65521;
  if (acc % 17 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const ix33: number = buf.indexOf('p60');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 45) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  m01.set('k37', acc % 997);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  for (let i39 = 0; i39 < 10; i39++) {
    acc = (acc + i39 * 13 + 113) % 100003;
  }
  if (acc % 28 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4165) % 65521;
  buf += 'region45-' + acc.toString();
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  if (acc % 8 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  if (acc % 15 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const ix50: number = buf.indexOf('p60');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7872) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  buf += 'payout0-' + acc.toString();
  m01.set('k1', acc % 997);
  const ix2: number = buf.indexOf('p60');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 78) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const rc5: Rec60 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  if (acc % 19 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  for (let i8 = 0; i8 < 10; i8++) {
    acc = (acc + i8 * 13 + 375) % 100003;
  }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  buf += 'tariff11-' + acc.toString();
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  buf += `q13:${acc % 97}`;
  for (let i14 = 0; i14 < 8; i14++) {
    acc = (acc + i14 * 13 + 599) % 100003;
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 74) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 151) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  buf += `q20:${acc % 97}`;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  try { if (acc % 29 === 3) { throw new Error('synthetic-23'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  acc = (acc * 31 + 1441) % 65521;
  const ix26: number = buf.indexOf('p60');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  if (acc % 27 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  m01.set('k28', acc % 997);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 108) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 6997) % 65521;
  const rc38: Rec60 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const ix39: number = buf.indexOf('p60');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 9915) % 65521;
  buf += 'dock41-' + acc.toString();
  const ix42: number = buf.indexOf('p60');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  for (let i43 = 0; i43 < 9; i43++) {
    acc = (acc + i43 * 13 + 355) % 100003;
  }
  acc = acc + 291 - (acc % 80);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  for (let i47 = 0; i47 < 7; i47++) {
    acc = (acc + i47 * 13 + 869) % 100003;
  }
  buf += 'bay48-' + acc.toString();
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  m01.set('k50', acc % 997);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7873) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 34) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  if (acc % 22 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  arr.push(acc % 1000);
  acc = acc + 410 - (acc % 90);
  if (acc % 20 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  buf += `q14:${acc % 97}`;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 78) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'transit18-' + acc.toString();
  try { if (acc % 29 === 8) { throw new Error('synthetic-19'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k20', acc % 997);
  try { if (acc % 29 === 13) { throw new Error('synthetic-21'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  for (let i23 = 0; i23 < 3; i23++) {
    acc = (acc + i23 * 13 + 177) % 100003;
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += 'bay25-' + acc.toString();
  arr.push(acc % 1000);
  for (let i27 = 0; i27 < 9; i27++) {
    acc = (acc + i27 * 13 + 946) % 100003;
  }
  if (acc % 13 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-29'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 113) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec60 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 165) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 127) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  acc = (acc * 31 + 2894) % 65521;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const rc40: Rec60 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 113) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  m01.set('k42', acc % 997);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 3) { throw new Error('synthetic-45'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const ix46: number = buf.indexOf('p60');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const rc48: Rec60 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  arr.push(acc % 1000);
  try { if (acc % 29 === 19) { throw new Error('synthetic-50'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 174) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7874) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  for (let i0 = 0; i0 < 11; i0++) {
    acc = (acc + i0 * 13 + 317) % 100003;
  }
  const rc1: Rec60 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  buf += `q3:${acc % 97}`;
  buf += `q4:${acc % 97}`;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = (acc * 31 + 1829) % 65521;
  buf += `q8:${acc % 97}`;
  const rc9: Rec60 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5214) % 65521;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  buf += `q14:${acc % 97}`;
  buf += `q15:${acc % 97}`;
  try { if (acc % 29 === 4) { throw new Error('synthetic-16'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 172) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k19', acc % 997);
  m01.set('k20', acc % 997);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-27'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const rc28: Rec60 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  if (acc % 28 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  for (let i31 = 0; i31 < 6; i31++) {
    acc = (acc + i31 * 13 + 368) % 100003;
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const rc33: Rec60 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 47) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 119) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  buf += 'pallet37-' + acc.toString();
  const ix38: number = buf.indexOf('p60');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = acc + 599 - (acc % 92);
  arr.push(acc % 1000);
  const rc42: Rec60 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  arr.push(acc % 1000);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 122) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  m01.set('k46', acc % 997);
  const rc47: Rec60 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  m01.set('k48', acc % 997);
  acc = (acc * 31 + 288) % 65521;
  for (let i50 = 0; i50 < 7; i50++) {
    acc = (acc + i50 * 13 + 853) % 100003;
  }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7875) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 157) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  m01.set('k3', acc % 997);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 51) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  buf += `q6:${acc % 97}`;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  if (acc % 17 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  for (let i9 = 0; i9 < 4; i9++) {
    acc = (acc + i9 * 13 + 710) % 100003;
  }
  const ix10: number = buf.indexOf('p60');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  buf += 'warehouse12-' + acc.toString();
  buf += `q13:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  acc = acc + 217 - (acc % 74);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 158) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  buf += `q21:${acc % 97}`;
  acc = (acc * 31 + 5083) % 65521;
  arr.push(acc % 1000);
  acc = (acc * 31 + 4448) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-25'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q27:${acc % 97}`;
  const ix28: number = buf.indexOf('p60');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = acc + 650 - (acc % 11);
  if (acc % 18 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const rc33: Rec60 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 124) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q36:${acc % 97}`;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 33) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  acc = (acc * 31 + 3527) % 65521;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const rc41: Rec60 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  try { if (acc % 29 === 6) { throw new Error('synthetic-42'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 22 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = acc + 105 - (acc % 50);
  acc = (acc * 31 + 931) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-46'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q47:${acc % 97}`;
  const rc48: Rec60 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const ix49: number = buf.indexOf('p60');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 181) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7876) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 120) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const rc4: Rec60 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  const ix5: number = buf.indexOf('p60');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = acc + 516 - (acc % 28);
  acc = acc + 32 - (acc % 13);
  if (acc % 11 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  m01.set('k13', acc % 997);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = (acc * 31 + 1202) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 86) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-18'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  arr.push(acc % 1000);
  acc = acc + 520 - (acc % 67);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 152) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  acc = (acc * 31 + 9505) % 65521;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  m01.set('k28', acc % 997);
  try { if (acc % 29 === 14) { throw new Error('synthetic-29'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i30 = 0; i30 < 7; i30++) {
    acc = (acc + i30 * 13 + 78) % 100003;
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-31'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 18 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 119) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 18 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = acc + 499 - (acc % 91);
  if (acc % 12 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  try { if (acc % 29 === 18) { throw new Error('synthetic-42'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  if (acc % 26 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  if (acc % 5 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  buf += `q49:${acc % 97}`;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const ix51: number = buf.indexOf('p60');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7877) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  buf += 'policy0-' + acc.toString();
  buf += `q1:${acc % 97}`;
  buf += `q2:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  if (acc % 10 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  buf += `q7:${acc % 97}`;
  const rc8: Rec60 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const ix10: number = buf.indexOf('p60');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  acc = acc + 563 - (acc % 15);
  acc = (acc * 31 + 8439) % 65521;
  arr.push(acc % 1000);
  if (acc % 12 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const ix15: number = buf.indexOf('p60');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 59) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const ix21: number = buf.indexOf('p60');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  for (let i22 = 0; i22 < 12; i22++) {
    acc = (acc + i22 * 13 + 494) % 100003;
  }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  for (let i24 = 0; i24 < 5; i24++) {
    acc = (acc + i24 * 13 + 776) % 100003;
  }
  acc = (acc * 31 + 944) % 65521;
  m01.set('k26', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc28: Rec60 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  m01.set('k30', acc % 997);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  buf += 'sku32-' + acc.toString();
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 37) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (acc % 8 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += `q37:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const ix39: number = buf.indexOf('p60');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  for (let i40 = 0; i40 < 12; i40++) {
    acc = (acc + i40 * 13 + 218) % 100003;
  }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 40) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  for (let i42 = 0; i42 < 9; i42++) {
    acc = (acc + i42 * 13 + 593) % 100003;
  }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const ix45: number = buf.indexOf('p60');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const ix50: number = buf.indexOf('p60');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  for (let i51 = 0; i51 < 11; i51++) {
    acc = (acc + i51 * 13 + 763) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7878) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 179) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  buf += `q2:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += 'bay4-' + acc.toString();
  for (let i5 = 0; i5 < 8; i5++) {
    acc = (acc + i5 * 13 + 205) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const ix7: number = buf.indexOf('p60');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  for (let i8 = 0; i8 < 9; i8++) {
    acc = (acc + i8 * 13 + 112) % 100003;
  }
  buf += `q9:${acc % 97}`;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 21) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  acc = (acc * 31 + 4721) % 65521;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  buf += 'order13-' + acc.toString();
  acc = (acc * 31 + 6552) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = acc + 403 - (acc % 9);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 57) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  acc = acc + 132 - (acc % 30);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const rc21: Rec60 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  buf += `q22:${acc % 97}`;
  m01.set('k23', acc % 997);
  arr.push(acc % 1000);
  if (acc % 10 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const ix26: number = buf.indexOf('p60');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  for (let i29 = 0; i29 < 8; i29++) {
    acc = (acc + i29 * 13 + 48) % 100003;
  }
  const rc30: Rec60 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += `q31:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 81) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 29 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  if (acc % 21 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += 'portal37-' + acc.toString();
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 171) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  buf += 'waybill39-' + acc.toString();
  for (let i40 = 0; i40 < 9; i40++) {
    acc = (acc + i40 * 13 + 33) % 100003;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-41'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'warehouse42-' + acc.toString();
  acc = acc + 879 - (acc % 50);
  for (let i44 = 0; i44 < 11; i44++) {
    acc = (acc + i44 * 13 + 123) % 100003;
  }
  const rc45: Rec60 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 58) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  for (let i47 = 0; i47 < 6; i47++) {
    acc = (acc + i47 * 13 + 751) % 100003;
  }
  const ix48: number = buf.indexOf('p60');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  const ix49: number = buf.indexOf('p60');
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

export function biz_0060_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7879) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const rc2: Rec60 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8434) % 65521;
  const rc6: Rec60 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  m01.set('k8', acc % 997);
  arr.push(acc % 1000);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  acc = acc + 493 - (acc % 23);
  m01.set('k13', acc % 997);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const rc15: Rec60 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 74) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  for (let i19 = 0; i19 < 11; i19++) {
    acc = (acc + i19 * 13 + 590) % 100003;
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const ix23: number = buf.indexOf('p60');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  if (acc % 27 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  acc = acc + 419 - (acc % 77);
  m01.set('k26', acc % 997);
  const ix27: number = buf.indexOf('p60');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const ix29: number = buf.indexOf('p60');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-30'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 27 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 136) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  try { if (acc % 29 === 14) { throw new Error('synthetic-36'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 137) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = acc + 862 - (acc % 50);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 171) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  buf += 'parcel48-' + acc.toString();
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  if (acc % 8 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  if (acc % 20 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0060_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0060_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0060_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7880) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  arr.push(acc % 1000);
  const ix3: number = buf.indexOf('p60');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 39) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const ix6: number = buf.indexOf('p60');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += 'customs7-' + acc.toString();
  if (acc % 5 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  try { if (acc % 29 === 3) { throw new Error('synthetic-10'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  buf += 'payout13-' + acc.toString();
  arr.push(acc % 1000);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  for (let i16 = 0; i16 < 11; i16++) {
    acc = (acc + i16 * 13 + 775) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 67) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'refund18-' + acc.toString();
  const rc19: Rec60 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const ix20: number = buf.indexOf('p60');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  m01.set('k21', acc % 997);
  m01.set('k22', acc % 997);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  buf += `q25:${acc % 97}`;
  if (acc % 23 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  acc = acc + 707 - (acc % 32);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 56) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  if (acc % 23 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  acc = (acc * 31 + 4956) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 86) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix36: number = buf.indexOf('p60');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  acc = acc + 482 - (acc % 97);
  const ix38: number = buf.indexOf('p60');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 163) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  buf += `q41:${acc % 97}`;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  const ix45: number = buf.indexOf('p60');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  for (let i46 = 0; i46 < 5; i46++) {
    acc = (acc + i46 * 13 + 830) % 100003;
  }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 32) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  buf += `q49:${acc % 97}`;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7881) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  acc = (acc * 31 + 7270) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-1'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i2 = 0; i2 < 10; i2++) {
    acc = (acc + i2 * 13 + 221) % 100003;
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 28) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  acc = acc + 288 - (acc % 45);
  m01.set('k6', acc % 997);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  m01.set('k15', acc % 997);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 106) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += 'parcel19-' + acc.toString();
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const rc21: Rec60 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  acc = acc + 349 - (acc % 38);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const ix26: number = buf.indexOf('p60');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 4605) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const ix30: number = buf.indexOf('p60');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const ix31: number = buf.indexOf('p60');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const ix32: number = buf.indexOf('p60');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const ix33: number = buf.indexOf('p60');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 82) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 8419) % 65521;
  const rc36: Rec60 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  try { if (acc % 29 === 8) { throw new Error('synthetic-37'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  m01.set('k39', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  for (let i42 = 0; i42 < 4; i42++) {
    acc = (acc + i42 * 13 + 470) % 100003;
  }
  for (let i43 = 0; i43 < 7; i43++) {
    acc = (acc + i43 * 13 + 24) % 100003;
  }
  buf += 'shelf44-' + acc.toString();
  const ix45: number = buf.indexOf('p60');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  arr.push(acc % 1000);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 148) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7882) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  arr.push(acc % 1000);
  if (acc % 24 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const ix2: number = buf.indexOf('p60');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3779) % 65521;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  m01.set('k7', acc % 997);
  const rc8: Rec60 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const rc10: Rec60 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  try { if (acc % 29 === 15) { throw new Error('synthetic-11'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const ix12: number = buf.indexOf('p60');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 184) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  acc = acc + 56 - (acc % 42);
  try { if (acc % 29 === 13) { throw new Error('synthetic-20'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 140) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  m01.set('k24', acc % 997);
  if (acc % 13 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 44) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  m01.set('k30', acc % 997);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  buf += 'batch32-' + acc.toString();
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 24) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1674) % 65521;
  m01.set('k37', acc % 997);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-41'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k42', acc % 997);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  acc = (acc * 31 + 7245) % 65521;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  acc = acc + 758 - (acc % 47);
  const rc47: Rec60 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const ix50: number = buf.indexOf('p60');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 75) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7883) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  m01.set('k1', acc % 997);
  try { if (acc % 29 === 2) { throw new Error('synthetic-2'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const rc3: Rec60 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  if (acc % 24 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const rc6: Rec60 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  acc = acc + 645 - (acc % 39);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += `q10:${acc % 97}`;
  buf += `q11:${acc % 97}`;
  for (let i12 = 0; i12 < 9; i12++) {
    acc = (acc + i12 * 13 + 284) % 100003;
  }
  buf += 'parcel13-' + acc.toString();
  if (acc % 11 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  acc = acc + 64 - (acc % 39);
  try { if (acc % 29 === 9) { throw new Error('synthetic-16'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 13) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'dock18-' + acc.toString();
  if (acc % 6 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  m01.set('k20', acc % 997);
  const rc21: Rec60 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 18) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const ix24: number = buf.indexOf('p60');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += `q26:${acc % 97}`;
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  for (let i28 = 0; i28 < 8; i28++) {
    acc = (acc + i28 * 13 + 347) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const rc30: Rec60 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += 'vendor31-' + acc.toString();
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const ix33: number = buf.indexOf('p60');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 100) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 109) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  for (let i38 = 0; i38 < 8; i38++) {
    acc = (acc + i38 * 13 + 77) % 100003;
  }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 5) { throw new Error('synthetic-42'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const rc43: Rec60 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  for (let i44 = 0; i44 < 9; i44++) {
    acc = (acc + i44 * 13 + 139) % 100003;
  }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  acc = acc + 831 - (acc % 57);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 94) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const rc51: Rec60 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7884) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  try { if (acc % 29 === 9) { throw new Error('synthetic-0'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const rc1: Rec60 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1135) % 65521;
  for (let i5 = 0; i5 < 10; i5++) {
    acc = (acc + i5 * 13 + 106) % 100003;
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 185) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  try { if (acc % 29 === 3) { throw new Error('synthetic-7'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q8:${acc % 97}`;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const ix11: number = buf.indexOf('p60');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  buf += 'waybill12-' + acc.toString();
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const ix15: number = buf.indexOf('p60');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 77) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += `q19:${acc % 97}`;
  try { if (acc % 29 === 3) { throw new Error('synthetic-20'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i21 = 0; i21 < 7; i21++) {
    acc = (acc + i21 * 13 + 410) % 100003;
  }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  m01.set('k23', acc % 997);
  arr.push(acc % 1000);
  buf += `q25:${acc % 97}`;
  if (acc % 16 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  buf += 'sku27-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-28'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k29', acc % 997);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = (acc * 31 + 3198) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 136) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  m01.set('k36', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  acc = (acc * 31 + 8553) % 65521;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  acc = (acc * 31 + 9612) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-41'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  if (acc % 9 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const ix44: number = buf.indexOf('p60');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = (acc * 31 + 6223) % 65521;
  const ix47: number = buf.indexOf('p60');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const ix48: number = buf.indexOf('p60');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += `q49:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const ix51: number = buf.indexOf('p60');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7885) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  const rc0: Rec60 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = acc + 474 - (acc % 23);
  for (let i3 = 0; i3 < 10; i3++) {
    acc = (acc + i3 * 13 + 872) % 100003;
  }
  acc = acc + 624 - (acc % 97);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  try { if (acc % 29 === 19) { throw new Error('synthetic-6'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-7'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const ix8: number = buf.indexOf('p60');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  for (let i9 = 0; i9 < 11; i9++) {
    acc = (acc + i9 * 13 + 926) % 100003;
  }
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = (acc * 31 + 7090) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q14:${acc % 97}`;
  if (acc % 29 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  if (acc % 16 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 98) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 28) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 193) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-21'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-22'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q23:${acc % 97}`;
  buf += `q24:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  m01.set('k26', acc % 997);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (acc % 5 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 15) { throw new Error('synthetic-33'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 133) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec60 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  for (let i39 = 0; i39 < 6; i39++) {
    acc = (acc + i39 * 13 + 168) % 100003;
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  try { if (acc % 29 === 9) { throw new Error('synthetic-41'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const rc44: Rec60 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  arr.push(acc % 1000);
  m01.set('k46', acc % 997);
  const rc47: Rec60 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += 'dispatch48-' + acc.toString();
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7886) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  acc = (acc * 31 + 3719) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += 'pallet3-' + acc.toString();
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 50) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  arr.push(acc % 1000);
  m01.set('k7', acc % 997);
  try { if (acc % 29 === 14) { throw new Error('synthetic-8'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 9 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 197) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const ix13: number = buf.indexOf('p60');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 48) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 73) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'dispatch18-' + acc.toString();
  const rc19: Rec60 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  arr.push(acc % 1000);
  if (acc % 25 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-22'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 8 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  acc = (acc * 31 + 5953) % 65521;
  arr.push(acc % 1000);
  acc = acc + 977 - (acc % 42);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const rc29: Rec60 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 160) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 49) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 42) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i37 = 0; i37 < 11; i37++) {
    acc = (acc + i37 * 13 + 100) % 100003;
  }
  acc = (acc * 31 + 6663) % 65521;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  buf += `q40:${acc % 97}`;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const ix42: number = buf.indexOf('p60');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  buf += `q43:${acc % 97}`;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const ix45: number = buf.indexOf('p60');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const ix47: number = buf.indexOf('p60');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  m01.set('k48', acc % 997);
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 30) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  for (let i50 = 0; i50 < 3; i50++) {
    acc = (acc + i50 * 13 + 559) % 100003;
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7887) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  buf += `q0:${acc % 97}`;
  const rc1: Rec60 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 118) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = (acc * 31 + 1711) % 65521;
  const ix5: number = buf.indexOf('p60');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  m01.set('k6', acc % 997);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  buf += 'waybill9-' + acc.toString();
  buf += 'order10-' + acc.toString();
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  try { if (acc % 29 === 8) { throw new Error('synthetic-13'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  const ix14: number = buf.indexOf('p60');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const ix16: number = buf.indexOf('p60');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 184) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 147) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  for (let i21 = 0; i21 < 11; i21++) {
    acc = (acc + i21 * 13 + 468) % 100003;
  }
  acc = acc + 811 - (acc % 11);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = (acc * 31 + 3625) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-26'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'payout27-' + acc.toString();
  try { if (acc % 29 === 8) { throw new Error('synthetic-28'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += 'journey30-' + acc.toString();
  if (acc % 25 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const rc33: Rec60 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 105) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const rc36: Rec60 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  m01.set('k37', acc % 997);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 185) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  acc = (acc * 31 + 4797) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-43'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'parcel44-' + acc.toString();
  if (acc % 27 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const ix46: number = buf.indexOf('p60');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const ix48: number = buf.indexOf('p60');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = acc + 149 - (acc % 54);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 122) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  for (let i51 = 0; i51 < 7; i51++) {
    acc = (acc + i51 * 13 + 868) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7888) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  buf += 'shelf2-' + acc.toString();
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const rc4: Rec60 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  m01.set('k5', acc % 997);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  acc = acc + 180 - (acc % 41);
  try { if (acc % 29 === 2) { throw new Error('synthetic-10'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const ix11: number = buf.indexOf('p60');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  const rc13: Rec60 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 29) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  if (acc % 19 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 168) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  if (acc % 12 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  buf += `q21:${acc % 97}`;
  arr.push(acc % 1000);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  buf += `q24:${acc % 97}`;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  buf += `q27:${acc % 97}`;
  try { if (acc % 29 === 16) { throw new Error('synthetic-28'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-30'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i31 = 0; i31 < 3; i31++) {
    acc = (acc + i31 * 13 + 416) % 100003;
  }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  for (let i33 = 0; i33 < 3; i33++) {
    acc = (acc + i33 * 13 + 978) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 54) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 3675) % 65521;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  arr.push(acc % 1000);
  acc = acc + 252 - (acc % 64);
  m01.set('k40', acc % 997);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const ix42: number = buf.indexOf('p60');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 152) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  try { if (acc % 29 === 16) { throw new Error('synthetic-44'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const ix45: number = buf.indexOf('p60');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  if (acc % 5 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7157) % 65521;
  acc = acc + 562 - (acc % 72);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7889) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  const ix0: number = buf.indexOf('p60');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  for (let i2 = 0; i2 < 6; i2++) {
    acc = (acc + i2 * 13 + 357) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  acc = acc + 55 - (acc % 95);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  if (acc % 18 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 135) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const rc13: Rec60 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  try { if (acc % 29 === 18) { throw new Error('synthetic-15'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 916 - (acc % 12);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 146) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-21'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 584 - (acc % 7);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 144) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4074) % 65521;
  buf += `q28:${acc % 97}`;
  m01.set('k29', acc % 997);
  arr.push(acc % 1000);
  const rc31: Rec60 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 101) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  if (acc % 18 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  acc = acc + 757 - (acc % 83);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const rc42: Rec60 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const ix45: number = buf.indexOf('p60');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const ix47: number = buf.indexOf('p60');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  buf += 'region50-' + acc.toString();
  const ix51: number = buf.indexOf('p60');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0060_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0060_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0060_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7890) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  m01.set('k1', acc % 997);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const ix3: number = buf.indexOf('p60');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-6'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 164) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 59) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-9'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1562) % 65521;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const ix12: number = buf.indexOf('p60');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  acc = acc + 361 - (acc % 51);
  const ix14: number = buf.indexOf('p60');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-15'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 197) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p60');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  acc = (acc * 31 + 4634) % 65521;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  buf += 'bay23-' + acc.toString();
  try { if (acc % 29 === 22) { throw new Error('synthetic-24'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i25 = 0; i25 < 4; i25++) {
    acc = (acc + i25 * 13 + 171) % 100003;
  }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k30', acc % 997);
  if (acc % 5 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = acc + 192 - (acc % 53);
  acc = (acc * 31 + 7109) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 111) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 170) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  acc = (acc * 31 + 5000) % 65521;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  buf += `q43:${acc % 97}`;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 18) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = acc + 515 - (acc % 28);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const rc51: Rec60 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7891) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  buf += 'pallet0-' + acc.toString();
  buf += `q1:${acc % 97}`;
  m01.set('k2', acc % 997);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  buf += 'carrier4-' + acc.toString();
  const ix5: number = buf.indexOf('p60');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const rc7: Rec60 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const ix8: number = buf.indexOf('p60');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-9'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-10'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q11:${acc % 97}`;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const ix13: number = buf.indexOf('p60');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  buf += 'stocktake14-' + acc.toString();
  if (acc % 16 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = acc + 582 - (acc % 9);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 140) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 7655) % 65521;
  if (acc % 31 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = acc + 842 - (acc % 42);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  acc = acc + 229 - (acc % 96);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += 'client28-' + acc.toString();
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 199) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec60 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  acc = acc + 442 - (acc % 65);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += 'tariff40-' + acc.toString();
  const rc41: Rec60 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  acc = acc + 297 - (acc % 44);
  for (let i44 = 0; i44 < 3; i44++) {
    acc = (acc + i44 * 13 + 188) % 100003;
  }
  const ix45: number = buf.indexOf('p60');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += `q46:${acc % 97}`;
  buf += `q47:${acc % 97}`;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 101) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  acc = (acc * 31 + 9160) % 65521;
  if (acc % 12 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7892) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const rc3: Rec60 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 170) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 84) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const rc7: Rec60 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  m01.set('k10', acc % 997);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  if (acc % 19 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  buf += `q13:${acc % 97}`;
  const ix14: number = buf.indexOf('p60');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += `q15:${acc % 97}`;
  acc = (acc * 31 + 9037) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 119) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += `q19:${acc % 97}`;
  acc = (acc * 31 + 7087) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc23: Rec60 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  for (let i24 = 0; i24 < 8; i24++) {
    acc = (acc + i24 * 13 + 467) % 100003;
  }
  m01.set('k25', acc % 997);
  const rc26: Rec60 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  acc = (acc * 31 + 5390) % 65521;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const ix29: number = buf.indexOf('p60');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  buf += 'vendor30-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-32'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 17) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  for (let i36 = 0; i36 < 9; i36++) {
    acc = (acc + i36 * 13 + 44) % 100003;
  }
  for (let i37 = 0; i37 < 9; i37++) {
    acc = (acc + i37 * 13 + 398) % 100003;
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  m01.set('k39', acc % 997);
  if (acc % 7 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-41'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q42:${acc % 97}`;
  for (let i43 = 0; i43 < 8; i43++) {
    acc = (acc + i43 * 13 + 905) % 100003;
  }
  buf += `q44:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const ix46: number = buf.indexOf('p60');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const ix47: number = buf.indexOf('p60');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-48'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3091) % 65521;
  acc = (acc * 31 + 5504) % 65521;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7893) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  for (let i0 = 0; i0 < 4; i0++) {
    acc = (acc + i0 * 13 + 601) % 100003;
  }
  m01.set('k1', acc % 997);
  m01.set('k2', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  m01.set('k4', acc % 997);
  const rc5: Rec60 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  buf += `q8:${acc % 97}`;
  m01.set('k9', acc % 997);
  try { if (acc % 29 === 21) { throw new Error('synthetic-10'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 363 - (acc % 32);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  for (let i13 = 0; i13 < 12; i13++) {
    acc = (acc + i13 * 13 + 292) % 100003;
  }
  acc = (acc * 31 + 5676) % 65521;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  acc = acc + 56 - (acc % 83);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 112) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 8094) % 65521;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  buf += `q21:${acc % 97}`;
  acc = (acc * 31 + 8801) % 65521;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 139) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  if (acc % 27 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  for (let i26 = 0; i26 < 5; i26++) {
    acc = (acc + i26 * 13 + 669) % 100003;
  }
  const rc27: Rec60 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const ix29: number = buf.indexOf('p60');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  m01.set('k30', acc % 997);
  arr.push(acc % 1000);
  if (acc % 22 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 24) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  buf += 'payout42-' + acc.toString();
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  acc = (acc * 31 + 1322) % 65521;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 28) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  m01.set('k46', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  arr.push(acc % 1000);
  try { if (acc % 29 === 19) { throw new Error('synthetic-49'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const rc51: Rec60 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7894) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 165) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  for (let i3 = 0; i3 < 11; i3++) {
    acc = (acc + i3 * 13 + 224) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += `q5:${acc % 97}`;
  m01.set('k6', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  try { if (acc % 29 === 3) { throw new Error('synthetic-8'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const rc9: Rec60 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const ix10: number = buf.indexOf('p60');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const rc11: Rec60 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2602) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 39) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const ix20: number = buf.indexOf('p60');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += 'rebate22-' + acc.toString();
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  try { if (acc % 29 === 14) { throw new Error('synthetic-27'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 420 - (acc % 45);
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  buf += `q32:${acc % 97}`;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 20) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 657 - (acc % 23);
  const ix36: number = buf.indexOf('p60');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += `q37:${acc % 97}`;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-39'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  buf += 'region42-' + acc.toString();
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = acc + 172 - (acc % 43);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  try { if (acc % 29 === 19) { throw new Error('synthetic-47'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  m01.set('k50', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7895) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  const rc1: Rec60 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  try { if (acc % 29 === 22) { throw new Error('synthetic-2'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'payout3-' + acc.toString();
  const ix4: number = buf.indexOf('p60');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 6138) % 65521;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += 'journey7-' + acc.toString();
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-10'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i11 = 0; i11 < 3; i11++) {
    acc = (acc + i11 * 13 + 334) % 100003;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-12'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-14'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 116) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 139) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  acc = acc + 568 - (acc % 62);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  if (acc % 15 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  for (let i23 = 0; i23 < 10; i23++) {
    acc = (acc + i23 * 13 + 23) % 100003;
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  arr.push(acc % 1000);
  if (acc % 18 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-32'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-33'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 34) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  buf += `q36:${acc % 97}`;
  acc = acc + 961 - (acc % 47);
  const ix38: number = buf.indexOf('p60');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  if (acc % 15 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  buf += `q40:${acc % 97}`;
  if (acc % 21 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const rc42: Rec60 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  m01.set('k45', acc % 997);
  buf += 'waybill46-' + acc.toString();
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 7) { throw new Error('synthetic-50'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7896) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  acc = acc + 22 - (acc % 7);
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 184) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = (acc * 31 + 8049) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-4'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const ix5: number = buf.indexOf('p60');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const rc8: Rec60 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = acc + 771 - (acc % 18);
  for (let i10 = 0; i10 < 12; i10++) {
    acc = (acc + i10 * 13 + 695) % 100003;
  }
  const rc11: Rec60 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const rc12: Rec60 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const rc13: Rec60 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += 'dispatch15-' + acc.toString();
  if (acc % 25 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 95) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  for (let i19 = 0; i19 < 6; i19++) {
    acc = (acc + i19 * 13 + 927) % 100003;
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = (acc * 31 + 5987) % 65521;
  acc = (acc * 31 + 8826) % 65521;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const rc24: Rec60 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const ix26: number = buf.indexOf('p60');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = acc + 729 - (acc % 24);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  m01.set('k31', acc % 997);
  m01.set('k32', acc % 997);
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 39) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 159) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const rc36: Rec60 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2096) % 65521;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const ix42: number = buf.indexOf('p60');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  if (acc % 29 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  m01.set('k44', acc % 997);
  const ix45: number = buf.indexOf('p60');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  acc = acc + 14 - (acc % 28);
  if (acc % 15 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7897) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 7861) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-3'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 305) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-5'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i6 = 0; i6 < 9; i6++) {
    acc = (acc + i6 * 13 + 71) % 100003;
  }
  if (acc % 21 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3794) % 65521;
  buf += 'quota9-' + acc.toString();
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const rc11: Rec60 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const rc12: Rec60 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += `q13:${acc % 97}`;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  buf += `q15:${acc % 97}`;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 75) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = acc + 241 - (acc % 12);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  acc = acc + 356 - (acc % 75);
  arr.push(acc % 1000);
  if (acc % 20 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = acc + 648 - (acc % 78);
  const rc27: Rec60 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  for (let i28 = 0; i28 < 6; i28++) {
    acc = (acc + i28 * 13 + 301) % 100003;
  }
  for (let i29 = 0; i29 < 5; i29++) {
    acc = (acc + i29 * 13 + 888) % 100003;
  }
  buf += `q30:${acc % 97}`;
  const rc31: Rec60 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  try { if (acc % 29 === 6) { throw new Error('synthetic-32'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 128) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'shelf35-' + acc.toString();
  const rc36: Rec60 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  buf += 'audit37-' + acc.toString();
  try { if (acc % 29 === 12) { throw new Error('synthetic-38'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 18 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 85) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  try { if (acc % 29 === 3) { throw new Error('synthetic-42'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const ix43: number = buf.indexOf('p60');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const ix44: number = buf.indexOf('p60');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-45'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const ix46: number = buf.indexOf('p60');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 44) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 159) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 193) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 42) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7898) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  m01.set('k1', acc % 997);
  const rc2: Rec60 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 115) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const rc5: Rec60 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += `q6:${acc % 97}`;
  buf += `q7:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q9:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = acc + 333 - (acc % 25);
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  try { if (acc % 29 === 17) { throw new Error('synthetic-13'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-14'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 191) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  m01.set('k19', acc % 997);
  m01.set('k20', acc % 997);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  arr.push(acc % 1000);
  acc = acc + 644 - (acc % 30);
  for (let i25 = 0; i25 < 8; i25++) {
    acc = (acc + i25 * 13 + 497) % 100003;
  }
  const ix26: number = buf.indexOf('p60');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  m01.set('k27', acc % 997);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const rc29: Rec60 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const rc31: Rec60 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  acc = acc + 736 - (acc % 31);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 80) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i36 = 0; i36 < 6; i36++) {
    acc = (acc + i36 * 13 + 668) % 100003;
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  if (acc % 13 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const ix40: number = buf.indexOf('p60');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  for (let i41 = 0; i41 < 11; i41++) {
    acc = (acc + i41 * 13 + 457) % 100003;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const rc44: Rec60 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 139) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  buf += 'crate47-' + acc.toString();
  buf += 'audit48-' + acc.toString();
  buf += `q49:${acc % 97}`;
  buf += `q50:${acc % 97}`;
  if (acc % 22 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7899) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  const rc0: Rec60 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 83) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  m01.set('k4', acc % 997);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 73) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  if (acc % 27 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  m01.set('k7', acc % 997);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  buf += `q10:${acc % 97}`;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 155) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  buf += `q13:${acc % 97}`;
  if (acc % 5 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 6694) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 168) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p60');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  m01.set('k19', acc % 997);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  for (let i21 = 0; i21 < 3; i21++) {
    acc = (acc + i21 * 13 + 61) % 100003;
  }
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  buf += 'balance24-' + acc.toString();
  acc = (acc * 31 + 5141) % 65521;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  buf += 'batch27-' + acc.toString();
  try { if (acc % 29 === 17) { throw new Error('synthetic-28'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6770) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-30'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 270 - (acc % 32);
  buf += `q32:${acc % 97}`;
  try { if (acc % 29 === 9) { throw new Error('synthetic-33'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 139) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 342 - (acc % 76);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  acc = (acc * 31 + 7148) % 65521;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 587) % 65521;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  if (acc % 9 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  buf += `q42:${acc % 97}`;
  if (acc % 26 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  buf += 'quota44-' + acc.toString();
  try { if (acc % 29 === 3) { throw new Error('synthetic-45'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 29 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const ix47: number = buf.indexOf('p60');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-48'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 318 - (acc % 69);
  acc = (acc * 31 + 964) % 65521;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0060_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0060_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0060_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7900) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  acc = (acc * 31 + 8871) % 65521;
  for (let i1 = 0; i1 < 7; i1++) {
    acc = (acc + i1 * 13 + 334) % 100003;
  }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  m01.set('k3', acc % 997);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  arr.push(acc % 1000);
  try { if (acc % 29 === 12) { throw new Error('synthetic-7'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const rc10: Rec60 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  acc = (acc * 31 + 9891) % 65521;
  acc = (acc * 31 + 8708) % 65521;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 188) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const rc22: Rec60 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  buf += 'rebate23-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  buf += 'rebate27-' + acc.toString();
  buf += 'depot28-' + acc.toString();
  buf += `q29:${acc % 97}`;
  buf += `q30:${acc % 97}`;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 147) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = acc + 30 - (acc % 18);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 195) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const rc36: Rec60 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  if (acc % 13 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  if (acc % 6 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  for (let i41 = 0; i41 < 4; i41++) {
    acc = (acc + i41 * 13 + 956) % 100003;
  }
  m01.set('k42', acc % 997);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 58) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  buf += `q44:${acc % 97}`;
  acc = acc + 395 - (acc % 9);
  const ix46: number = buf.indexOf('p60');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7901) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  arr.push(acc % 1000);
  const ix1: number = buf.indexOf('p60');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  m01.set('k3', acc % 997);
  try { if (acc % 29 === 10) { throw new Error('synthetic-4'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const rc5: Rec60 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  try { if (acc % 29 === 19) { throw new Error('synthetic-6'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 505 - (acc % 96);
  acc = (acc * 31 + 1183) % 65521;
  const ix9: number = buf.indexOf('p60');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const rc10: Rec60 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  buf += 'sku11-' + acc.toString();
  buf += 'vendor12-' + acc.toString();
  arr.push(acc % 1000);
  for (let i14 = 0; i14 < 10; i14++) {
    acc = (acc + i14 * 13 + 703) % 100003;
  }
  const ix15: number = buf.indexOf('p60');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5420) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 50) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-18'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  m01.set('k20', acc % 997);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  m01.set('k23', acc % 997);
  acc = (acc * 31 + 7166) % 65521;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 130) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  if (acc % 5 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  m01.set('k27', acc % 997);
  buf += 'pallet28-' + acc.toString();
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  buf += 'rebate30-' + acc.toString();
  buf += 'audit31-' + acc.toString();
  const rc32: Rec60 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 58) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  acc = (acc * 31 + 4560) % 65521;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  try { if (acc % 29 === 9) { throw new Error('synthetic-40'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const ix41: number = buf.indexOf('p60');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  buf += `q43:${acc % 97}`;
  buf += 'bay44-' + acc.toString();
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 45) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i51 = 0; i51 < 4; i51++) {
    acc = (acc + i51 * 13 + 981) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0060_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7902) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit60 = new Unit60(acc);
  if (acc % 7 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  m01.set('k1', acc % 997);
  const rc2: Rec60 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  if (acc % 22 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-4'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k5', acc % 997);
  acc = (acc * 31 + 2412) % 65521;
  m01.set('k7', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 115) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  acc = (acc * 31 + 2884) % 65521;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (acc % 15 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 143 - (acc % 10);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 46) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec60 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  for (let i24 = 0; i24 < 7; i24++) {
    acc = (acc + i24 * 13 + 252) % 100003;
  }
  acc = (acc * 31 + 2282) % 65521;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  try { if (acc % 29 === 6) { throw new Error('synthetic-27'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  m01.set('k29', acc % 997);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  for (let i31 = 0; i31 < 5; i31++) {
    acc = (acc + i31 * 13 + 765) % 100003;
  }
  buf += 'audit32-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 85) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 15) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2100) % 65521;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  acc = (acc * 31 + 875) % 65521;
  buf += `q41:${acc % 97}`;
  const rc42: Rec60 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-44'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const rc49: Rec60 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  m01.set('k50', acc % 997);
  const rc51: Rec60 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0060(): BizFn[] {
  return [biz_0060_00, biz_0060_01, biz_0060_02, biz_0060_03, biz_0060_04, biz_0060_05, biz_0060_06, biz_0060_07, biz_0060_08, biz_0060_09, biz_0060_10, biz_0060_11, biz_0060_12, biz_0060_13, biz_0060_14, biz_0060_15, biz_0060_16, biz_0060_17, biz_0060_18, biz_0060_19, biz_0060_20, biz_0060_21, biz_0060_22, biz_0060_23, biz_0060_24, biz_0060_25, biz_0060_26, biz_0060_27, biz_0060_28, biz_0060_29, biz_0060_30, biz_0060_31, biz_0060_32, biz_0060_33, biz_0060_34, biz_0060_35, biz_0060_36, biz_0060_37, biz_0060_38, biz_0060_39, biz_0060_40, biz_0060_41, biz_0060_42];
}

export function rega_0060(): ABizFn[] {
  return [biz_0060_09a, biz_0060_19a, biz_0060_29a, biz_0060_39a];
}
