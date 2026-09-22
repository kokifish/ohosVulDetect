// Biz0013.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec13 { id: number; tag: string; score: number; }

class Unit13 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0013_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1703) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  acc = (acc * 31 + 6200) % 65521;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const ix2: number = buf.indexOf('p13');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 34) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-8'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k9', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  acc = acc + 890 - (acc % 59);
  m01.set('k12', acc % 997);
  try { if (acc % 29 === 21) { throw new Error('synthetic-13'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8017) % 65521;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 62) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 118) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  for (let i20 = 0; i20 < 9; i20++) {
    acc = (acc + i20 * 13 + 435) % 100003;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-21'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i22 = 0; i22 < 6; i22++) {
    acc = (acc + i22 * 13 + 230) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  try { if (acc % 29 === 8) { throw new Error('synthetic-25'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  for (let i27 = 0; i27 < 12; i27++) {
    acc = (acc + i27 * 13 + 191) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const rc29: Rec13 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (acc % 10 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 11) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  acc = acc + 913 - (acc % 14);
  if (acc % 22 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  buf += 'bay39-' + acc.toString();
  const rc40: Rec13 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const rc41: Rec13 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  acc = acc + 513 - (acc % 77);
  for (let i43 = 0; i43 < 11; i43++) {
    acc = (acc + i43 * 13 + 242) % 100003;
  }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  buf += 'dock45-' + acc.toString();
  acc = acc + 472 - (acc % 12);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  m01.set('k49', acc % 997);
  try { if (acc % 29 === 18) { throw new Error('synthetic-50'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i51 = 0; i51 < 3; i51++) {
    acc = (acc + i51 * 13 + 248) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1704) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  arr.push(acc % 1000);
  try { if (acc % 29 === 19) { throw new Error('synthetic-1'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-2'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  const rc3: Rec13 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  if (acc % 17 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 102) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  m01.set('k6', acc % 997);
  buf += `q7:${acc % 97}`;
  acc = (acc * 31 + 9925) % 65521;
  const ix9: number = buf.indexOf('p13');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  acc = acc + 566 - (acc % 10);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  acc = acc + 29 - (acc % 91);
  for (let i13 = 0; i13 < 12; i13++) {
    acc = (acc + i13 * 13 + 808) % 100003;
  }
  buf += `q14:${acc % 97}`;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 95) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 164) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 170) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  buf += 'region21-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  if (acc % 19 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  acc = acc + 869 - (acc % 70);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  acc = (acc * 31 + 9947) % 65521;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const ix28: number = buf.indexOf('p13');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  try { if (acc % 29 === 7) { throw new Error('synthetic-31'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'audit32-' + acc.toString();
  if (acc % 25 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 23) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  if (acc % 10 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  buf += `q39:${acc % 97}`;
  arr.push(acc % 1000);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  arr.push(acc % 1000);
  for (let i43 = 0; i43 < 12; i43++) {
    acc = (acc + i43 * 13 + 276) % 100003;
  }
  const ix44: number = buf.indexOf('p13');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  m01.set('k45', acc % 997);
  const rc46: Rec13 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const ix47: number = buf.indexOf('p13');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const ix49: number = buf.indexOf('p13');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const ix50: number = buf.indexOf('p13');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 43) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1705) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  if (acc % 24 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  if (acc % 19 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  arr.push(acc % 1000);
  const ix5: number = buf.indexOf('p13');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  for (let i7 = 0; i7 < 7; i7++) {
    acc = (acc + i7 * 13 + 74) % 100003;
  }
  const rc8: Rec13 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 188) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  if (acc % 19 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 182) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  m01.set('k22', acc % 997);
  for (let i23 = 0; i23 < 12; i23++) {
    acc = (acc + i23 * 13 + 523) % 100003;
  }
  const rc24: Rec13 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 162) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  arr.push(acc % 1000);
  acc = acc + 971 - (acc % 20);
  try { if (acc % 29 === 23) { throw new Error('synthetic-30'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const rc33: Rec13 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 58) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'shelf35-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const rc37: Rec13 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  try { if (acc % 29 === 4) { throw new Error('synthetic-38'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 630 - (acc % 36);
  acc = acc + 901 - (acc % 39);
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  buf += `q42:${acc % 97}`;
  arr.push(acc % 1000);
  buf += 'depot44-' + acc.toString();
  const rc45: Rec13 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 77) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  m01.set('k47', acc % 997);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  acc = acc + 893 - (acc % 94);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1706) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  try { if (acc % 29 === 7) { throw new Error('synthetic-0'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const rc4: Rec13 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 41) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  try { if (acc % 29 === 10) { throw new Error('synthetic-6'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += `q8:${acc % 97}`;
  if (acc % 20 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7832) % 65521;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 63) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 172) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const rc16: Rec13 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 138) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  buf += 'parcel19-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  acc = (acc * 31 + 1125) % 65521;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = acc + 819 - (acc % 60);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  m01.set('k26', acc % 997);
  buf += 'shelf27-' + acc.toString();
  for (let i28 = 0; i28 < 4; i28++) {
    acc = (acc + i28 * 13 + 160) % 100003;
  }
  buf += `q29:${acc % 97}`;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 52) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 5 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-36'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6716) % 65521;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const ix39: number = buf.indexOf('p13');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const rc40: Rec13 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  if (acc % 15 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  m01.set('k44', acc % 997);
  try { if (acc % 29 === 17) { throw new Error('synthetic-45'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  acc = acc + 300 - (acc % 72);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  arr.push(acc % 1000);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1707) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  const rc0: Rec13 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  acc = acc + 502 - (acc % 49);
  try { if (acc % 29 === 13) { throw new Error('synthetic-2'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 43) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 79) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = acc + 770 - (acc % 66);
  acc = (acc * 31 + 9352) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  acc = (acc * 31 + 2665) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  acc = (acc * 31 + 9026) % 65521;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 67) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += 'transit16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 139) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-18'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += `q20:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  if (acc % 30 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-24'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 418 - (acc % 57);
  acc = acc + 204 - (acc % 30);
  acc = acc + 759 - (acc % 88);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const rc29: Rec13 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  if (acc % 8 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 124) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += `q36:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  for (let i38 = 0; i38 < 11; i38++) {
    acc = (acc + i38 * 13 + 34) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const ix41: number = buf.indexOf('p13');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  if (acc % 27 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (acc % 5 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-48'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-49'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1708) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  buf += 'refund0-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const rc2: Rec13 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const rc4: Rec13 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  const ix5: number = buf.indexOf('p13');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  acc = acc + 434 - (acc % 21);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const rc10: Rec13 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  if (acc % 16 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  for (let i12 = 0; i12 < 11; i12++) {
    acc = (acc + i12 * 13 + 829) % 100003;
  }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 134) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = acc + 808 - (acc % 97);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 182) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 2979) % 65521;
  acc = (acc * 31 + 3910) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-20'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  m01.set('k23', acc % 997);
  acc = acc + 418 - (acc % 54);
  for (let i25 = 0; i25 < 6; i25++) {
    acc = (acc + i25 * 13 + 988) % 100003;
  }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  if (acc % 15 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  if (acc % 29 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3528) % 65521;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  buf += `q31:${acc % 97}`;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  acc = acc + 998 - (acc % 54);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 147) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'sku35-' + acc.toString();
  buf += 'warehouse36-' + acc.toString();
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const rc38: Rec13 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  buf += 'waybill39-' + acc.toString();
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  acc = (acc * 31 + 1423) % 65521;
  buf += `q42:${acc % 97}`;
  buf += 'settle43-' + acc.toString();
  acc = acc + 79 - (acc % 90);
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  m01.set('k46', acc % 997);
  m01.set('k47', acc % 997);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3291) % 65521;
  buf += 'pickup50-' + acc.toString();
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1709) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  acc = (acc * 31 + 5145) % 65521;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 70) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const ix5: number = buf.indexOf('p13');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  if (acc % 12 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 90) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 176) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  if (acc % 9 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const ix12: number = buf.indexOf('p13');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  buf += `q13:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 156) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  const rc19: Rec13 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  buf += `q20:${acc % 97}`;
  const rc21: Rec13 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  acc = acc + 914 - (acc % 37);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  if (acc % 18 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5529) % 65521;
  if (acc % 15 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const ix30: number = buf.indexOf('p13');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3337) % 65521;
  for (let i32 = 0; i32 < 4; i32++) {
    acc = (acc + i32 * 13 + 414) % 100003;
  }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 59) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  for (let i37 = 0; i37 < 10; i37++) {
    acc = (acc + i37 * 13 + 399) % 100003;
  }
  const rc38: Rec13 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  if (acc % 10 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  acc = acc + 420 - (acc % 68);
  try { if (acc % 29 === 19) { throw new Error('synthetic-41'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i42 = 0; i42 < 10; i42++) {
    acc = (acc + i42 * 13 + 19) % 100003;
  }
  const rc43: Rec13 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  m01.set('k45', acc % 997);
  acc = (acc * 31 + 6122) % 65521;
  buf += `q47:${acc % 97}`;
  const rc48: Rec13 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  for (let i49 = 0; i49 < 4; i49++) {
    acc = (acc + i49 * 13 + 389) % 100003;
  }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1710) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  m01.set('k5', acc % 997);
  buf += 'parcel6-' + acc.toString();
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const ix8: number = buf.indexOf('p13');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const rc10: Rec13 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = (acc * 31 + 8360) % 65521;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  buf += `q13:${acc % 97}`;
  const ix14: number = buf.indexOf('p13');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  m01.set('k15', acc % 997);
  acc = acc + 220 - (acc % 69);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 81) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = acc + 763 - (acc % 47);
  arr.push(acc % 1000);
  try { if (acc % 29 === 19) { throw new Error('synthetic-21'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const ix24: number = buf.indexOf('p13');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  m01.set('k25', acc % 997);
  const ix26: number = buf.indexOf('p13');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  for (let i27 = 0; i27 < 12; i27++) {
    acc = (acc + i27 * 13 + 461) % 100003;
  }
  const rc28: Rec13 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  buf += 'vendor32-' + acc.toString();
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 134) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-35'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  m01.set('k37', acc % 997);
  arr.push(acc % 1000);
  const rc39: Rec13 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  arr.push(acc % 1000);
  if (acc % 19 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 104) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  if (acc % 12 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  buf += 'quota44-' + acc.toString();
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const rc47: Rec13 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (acc % 20 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1711) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 174) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  for (let i1 = 0; i1 < 5; i1++) {
    acc = (acc + i1 * 13 + 471) % 100003;
  }
  buf += 'routeplan2-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += 'parcel6-' + acc.toString();
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 141) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const ix9: number = buf.indexOf('p13');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  acc = acc + 969 - (acc % 63);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  acc = acc + 856 - (acc % 28);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const rc15: Rec13 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const rc16: Rec13 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 20) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 684 - (acc % 94);
  for (let i19 = 0; i19 < 9; i19++) {
    acc = (acc + i19 * 13 + 893) % 100003;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  for (let i23 = 0; i23 < 3; i23++) {
    acc = (acc + i23 * 13 + 15) % 100003;
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  if (acc % 17 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  m01.set('k27', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  m01.set('k30', acc % 997);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 128) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  buf += `q32:${acc % 97}`;
  for (let i33 = 0; i33 < 3; i33++) {
    acc = (acc + i33 * 13 + 908) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = acc + 589 - (acc % 9);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  arr.push(acc % 1000);
  const ix43: number = buf.indexOf('p13');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const ix49: number = buf.indexOf('p13');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  for (let i50 = 0; i50 < 8; i50++) {
    acc = (acc + i50 * 13 + 88) % 100003;
  }
  const rc51: Rec13 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1712) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  for (let i1 = 0; i1 < 9; i1++) {
    acc = (acc + i1 * 13 + 397) % 100003;
  }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  arr.push(acc % 1000);
  const ix5: number = buf.indexOf('p13');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  buf += 'audit6-' + acc.toString();
  if (acc % 13 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  m01.set('k8', acc % 997);
  buf += `q9:${acc % 97}`;
  buf += 'stocktake10-' + acc.toString();
  acc = (acc * 31 + 2687) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  for (let i13 = 0; i13 < 3; i13++) {
    acc = (acc + i13 * 13 + 521) % 100003;
  }
  acc = acc + 460 - (acc % 29);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  for (let i16 = 0; i16 < 11; i16++) {
    acc = (acc + i16 * 13 + 73) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 61) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  m01.set('k19', acc % 997);
  try { if (acc % 29 === 20) { throw new Error('synthetic-20'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 11 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  acc = acc + 754 - (acc % 82);
  const ix23: number = buf.indexOf('p13');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const ix24: number = buf.indexOf('p13');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  acc = (acc * 31 + 7381) % 65521;
  acc = acc + 440 - (acc % 68);
  for (let i31 = 0; i31 < 12; i31++) {
    acc = (acc + i31 * 13 + 800) % 100003;
  }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 89) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 15) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  if (acc % 21 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  if (acc % 26 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (acc % 19 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const ix41: number = buf.indexOf('p13');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const ix42: number = buf.indexOf('p13');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 144) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += 'ticket45-' + acc.toString();
  acc = (acc * 31 + 6379) % 65521;
  m01.set('k47', acc % 997);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const ix49: number = buf.indexOf('p13');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const rc51: Rec13 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0013_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0013_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0013_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1713) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  buf += 'order0-' + acc.toString();
  m01.set('k1', acc % 997);
  const rc2: Rec13 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  try { if (acc % 29 === 15) { throw new Error('synthetic-4'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const ix5: number = buf.indexOf('p13');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const rc9: Rec13 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += 'batch10-' + acc.toString();
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  buf += 'region12-' + acc.toString();
  buf += 'bay13-' + acc.toString();
  acc = acc + 569 - (acc % 21);
  m01.set('k15', acc % 997);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 73) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += 'customs19-' + acc.toString();
  buf += 'dispatch20-' + acc.toString();
  try { if (acc % 29 === 2) { throw new Error('synthetic-21'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-22'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  buf += `q24:${acc % 97}`;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 185) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  if (acc % 30 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  try { if (acc % 29 === 9) { throw new Error('synthetic-28'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k29', acc % 997);
  if (acc % 13 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  for (let i31 = 0; i31 < 7; i31++) {
    acc = (acc + i31 * 13 + 190) % 100003;
  }
  const rc32: Rec13 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 188) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  buf += `q36:${acc % 97}`;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const rc38: Rec13 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  if (acc % 23 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const ix41: number = buf.indexOf('p13');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  buf += `q44:${acc % 97}`;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += 'rebate46-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-47'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k48', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2722) % 65521;
  const rc51: Rec13 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1714) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  m01.set('k0', acc % 997);
  if (acc % 25 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  m01.set('k2', acc % 997);
  m01.set('k3', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  acc = (acc * 31 + 5037) % 65521;
  m01.set('k7', acc % 997);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  arr.push(acc % 1000);
  for (let i10 = 0; i10 < 11; i10++) {
    acc = (acc + i10 * 13 + 807) % 100003;
  }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 75) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 173) % 100003;
  }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const ix14: number = buf.indexOf('p13');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += 'bay15-' + acc.toString();
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 35) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 101) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 20 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  for (let i21 = 0; i21 < 12; i21++) {
    acc = (acc + i21 * 13 + 25) % 100003;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-22'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-23'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const rc25: Rec13 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  m01.set('k26', acc % 997);
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  for (let i28 = 0; i28 < 8; i28++) {
    acc = (acc + i28 * 13 + 926) % 100003;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-29'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 22 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  buf += `q32:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 126) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'warehouse36-' + acc.toString();
  try { if (acc % 29 === 13) { throw new Error('synthetic-37'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-40'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  m01.set('k42', acc % 997);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  acc = acc + 427 - (acc % 78);
  for (let i46 = 0; i46 < 12; i46++) {
    acc = (acc + i46 * 13 + 54) % 100003;
  }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  for (let i49 = 0; i49 < 7; i49++) {
    acc = (acc + i49 * 13 + 770) % 100003;
  }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1715) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  for (let i0 = 0; i0 < 12; i0++) {
    acc = (acc + i0 * 13 + 127) % 100003;
  }
  const rc1: Rec13 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += 'journey3-' + acc.toString();
  const rc4: Rec13 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  acc = (acc * 31 + 6575) % 65521;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = acc + 556 - (acc % 96);
  for (let i9 = 0; i9 < 7; i9++) {
    acc = (acc + i9 * 13 + 582) % 100003;
  }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 122) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 172) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const ix15: number = buf.indexOf('p13');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 22) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec13 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const rc19: Rec13 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  if (acc % 27 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2900) % 65521;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  acc = (acc * 31 + 1522) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-31'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  const rc32: Rec13 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 169) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'ticket35-' + acc.toString();
  const rc36: Rec13 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  if (acc % 14 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  acc = acc + 775 - (acc % 81);
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  acc = (acc * 31 + 8327) % 65521;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 64) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 155) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  acc = acc + 640 - (acc % 37);
  buf += 'client48-' + acc.toString();
  buf += `q49:${acc % 97}`;
  arr.push(acc % 1000);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1716) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 55) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  buf += `q2:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 103) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  for (let i6 = 0; i6 < 3; i6++) {
    acc = (acc + i6 * 13 + 36) % 100003;
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const ix8: number = buf.indexOf('p13');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  buf += 'quota11-' + acc.toString();
  for (let i12 = 0; i12 < 6; i12++) {
    acc = (acc + i12 * 13 + 909) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += 'journey14-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 113) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 9282) % 65521;
  arr.push(acc % 1000);
  buf += 'ledger20-' + acc.toString();
  if (acc % 17 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += `q22:${acc % 97}`;
  for (let i23 = 0; i23 < 7; i23++) {
    acc = (acc + i23 * 13 + 277) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  try { if (acc % 29 === 9) { throw new Error('synthetic-28'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  buf += `q31:${acc % 97}`;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 129) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const ix37: number = buf.indexOf('p13');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 145) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  buf += `q41:${acc % 97}`;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const rc43: Rec13 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  buf += 'invoice45-' + acc.toString();
  try { if (acc % 29 === 9) { throw new Error('synthetic-46'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 35) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1717) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const ix2: number = buf.indexOf('p13');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 107) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const ix4: number = buf.indexOf('p13');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 66) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = acc + 686 - (acc % 9);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 165) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const ix11: number = buf.indexOf('p13');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  m01.set('k13', acc % 997);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 119) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-15'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-16'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 114) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 9 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const ix21: number = buf.indexOf('p13');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  if (acc % 13 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 15) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  acc = (acc * 31 + 3436) % 65521;
  buf += `q28:${acc % 97}`;
  if (acc % 7 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 49) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 903 - (acc % 76);
  arr.push(acc % 1000);
  buf += 'ticket37-' + acc.toString();
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const rc39: Rec13 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  buf += 'settle41-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  for (let i43 = 0; i43 < 4; i43++) {
    acc = (acc + i43 * 13 + 656) % 100003;
  }
  const ix44: number = buf.indexOf('p13');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  buf += 'carrier45-' + acc.toString();
  const rc46: Rec13 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  arr.push(acc % 1000);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  buf += `q50:${acc % 97}`;
  if (acc % 26 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1718) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 20) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  try { if (acc % 29 === 22) { throw new Error('synthetic-6'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8276) % 65521;
  acc = (acc * 31 + 9153) % 65521;
  const ix9: number = buf.indexOf('p13');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const ix10: number = buf.indexOf('p13');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  acc = acc + 693 - (acc % 93);
  acc = acc + 236 - (acc % 76);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const ix15: number = buf.indexOf('p13');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 151) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = acc + 723 - (acc % 23);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  if (acc % 16 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 83) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 92) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  buf += 'customs28-' + acc.toString();
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  buf += 'order30-' + acc.toString();
  m01.set('k31', acc % 997);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 159) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p13');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  acc = (acc * 31 + 4480) % 65521;
  arr.push(acc % 1000);
  const ix40: number = buf.indexOf('p13');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const ix42: number = buf.indexOf('p13');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  for (let i43 = 0; i43 < 12; i43++) {
    acc = (acc + i43 * 13 + 365) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  acc = (acc * 31 + 2116) % 65521;
  arr.push(acc % 1000);
  for (let i47 = 0; i47 < 10; i47++) {
    acc = (acc + i47 * 13 + 747) % 100003;
  }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 163) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  buf += `q50:${acc % 97}`;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1719) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 38) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  m01.set('k2', acc % 997);
  if (acc % 22 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  m01.set('k4', acc % 997);
  buf += 'audit5-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  arr.push(acc % 1000);
  buf += 'journey9-' + acc.toString();
  acc = acc + 54 - (acc % 19);
  for (let i11 = 0; i11 < 11; i11++) {
    acc = (acc + i11 * 13 + 455) % 100003;
  }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  try { if (acc % 29 === 22) { throw new Error('synthetic-13'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'bay14-' + acc.toString();
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 141) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  acc = acc + 553 - (acc % 17);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 164) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  if (acc % 17 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1885) % 65521;
  arr.push(acc % 1000);
  if (acc % 27 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const rc23: Rec13 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const rc24: Rec13 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  for (let i26 = 0; i26 < 6; i26++) {
    acc = (acc + i26 * 13 + 718) % 100003;
  }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  buf += `q28:${acc % 97}`;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  acc = acc + 94 - (acc % 52);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  for (let i33 = 0; i33 < 9; i33++) {
    acc = (acc + i33 * 13 + 839) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 63) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  for (let i36 = 0; i36 < 12; i36++) {
    acc = (acc + i36 * 13 + 793) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  if (acc % 6 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const ix45: number = buf.indexOf('p13');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  acc = acc + 173 - (acc % 33);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  arr.push(acc % 1000);
  const ix51: number = buf.indexOf('p13');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1720) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  try { if (acc % 29 === 21) { throw new Error('synthetic-0'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const ix5: number = buf.indexOf('p13');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  m01.set('k9', acc % 997);
  m01.set('k10', acc % 997);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 97) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec13 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const rc19: Rec13 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  acc = (acc * 31 + 2589) % 65521;
  const ix23: number = buf.indexOf('p13');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  m01.set('k26', acc % 997);
  acc = acc + 548 - (acc % 18);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  for (let i29 = 0; i29 < 4; i29++) {
    acc = (acc + i29 * 13 + 331) % 100003;
  }
  if (acc % 19 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const ix32: number = buf.indexOf('p13');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 178) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 150) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  arr.push(acc % 1000);
  buf += 'settle38-' + acc.toString();
  acc = (acc * 31 + 9917) % 65521;
  buf += `q40:${acc % 97}`;
  const rc41: Rec13 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const ix43: number = buf.indexOf('p13');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 41) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  acc = acc + 752 - (acc % 95);
  const rc46: Rec13 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  m01.set('k47', acc % 997);
  if (acc % 17 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += `q50:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1721) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  const rc0: Rec13 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  buf += `q2:${acc % 97}`;
  const ix3: number = buf.indexOf('p13');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 148) % 65521;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 75) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  if (acc % 27 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  buf += `q8:${acc % 97}`;
  const rc9: Rec13 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const ix10: number = buf.indexOf('p13');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 16) { throw new Error('synthetic-12'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const ix14: number = buf.indexOf('p13');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 44) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec13 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  for (let i19 = 0; i19 < 4; i19++) {
    acc = (acc + i19 * 13 + 50) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  m01.set('k23', acc % 997);
  const ix24: number = buf.indexOf('p13');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 14) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += `q27:${acc % 97}`;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += `q30:${acc % 97}`;
  acc = acc + 144 - (acc % 76);
  for (let i32 = 0; i32 < 10; i32++) {
    acc = (acc + i32 * 13 + 641) % 100003;
  }
  const rc33: Rec13 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 157) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 25 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  if (acc % 6 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const ix39: number = buf.indexOf('p13');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  acc = (acc * 31 + 2945) % 65521;
  buf += 'tariff43-' + acc.toString();
  acc = acc + 624 - (acc % 90);
  acc = acc + 334 - (acc % 54);
  arr.push(acc % 1000);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  if (acc % 18 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5386) % 65521;
  m01.set('k50', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1722) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  acc = (acc * 31 + 7801) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-1'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-2'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 956 - (acc % 75);
  acc = (acc * 31 + 3815) % 65521;
  arr.push(acc % 1000);
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 52) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const rc10: Rec13 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 22) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = (acc * 31 + 3434) % 65521;
  const ix14: number = buf.indexOf('p13');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  if (acc % 8 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 159) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  try { if (acc % 29 === 10) { throw new Error('synthetic-19'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  buf += `q21:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  try { if (acc % 29 === 22) { throw new Error('synthetic-23'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-24'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  if (acc % 31 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += `q29:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 186) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 13 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  if (acc % 20 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const ix40: number = buf.indexOf('p13');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  arr.push(acc % 1000);
  buf += `q47:${acc % 97}`;
  try { if (acc % 29 === 20) { throw new Error('synthetic-48'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'ticket49-' + acc.toString();
  acc = (acc * 31 + 3484) % 65521;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0013_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0013_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0013_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1723) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  buf += `q0:${acc % 97}`;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const rc2: Rec13 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const rc3: Rec13 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const ix7: number = buf.indexOf('p13');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = acc + 342 - (acc % 36);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const ix12: number = buf.indexOf('p13');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 103) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  const rc14: Rec13 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 65) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (acc % 6 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  buf += `q21:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  buf += 'crate23-' + acc.toString();
  if (acc % 14 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7079) % 65521;
  m01.set('k26', acc % 997);
  arr.push(acc % 1000);
  try { if (acc % 29 === 4) { throw new Error('synthetic-28'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 497) % 65521;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = (acc * 31 + 1633) % 65521;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 90) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = acc + 509 - (acc % 24);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 144) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 7; i35++) {
    acc = (acc + i35 * 13 + 290) % 100003;
  }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  acc = acc + 852 - (acc % 19);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  buf += `q39:${acc % 97}`;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  m01.set('k41', acc % 997);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = acc + 491 - (acc % 36);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 141) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-48'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 101) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const ix51: number = buf.indexOf('p13');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1724) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  if (acc % 5 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += 'client2-' + acc.toString();
  acc = acc + 478 - (acc % 85);
  m01.set('k4', acc % 997);
  if (acc % 15 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-6'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const ix7: number = buf.indexOf('p13');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-8'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 115) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  buf += `q10:${acc % 97}`;
  try { if (acc % 29 === 22) { throw new Error('synthetic-11'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const rc12: Rec13 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  arr.push(acc % 1000);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 153) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  arr.push(acc % 1000);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  arr.push(acc % 1000);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  arr.push(acc % 1000);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 54) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  acc = acc + 537 - (acc % 11);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 97) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-33'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 70) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const ix36: number = buf.indexOf('p13');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += 'tariff37-' + acc.toString();
  if (acc % 5 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += 'waybill39-' + acc.toString();
  try { if (acc % 29 === 6) { throw new Error('synthetic-40'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k41', acc % 997);
  if (acc % 6 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-43'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-44'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i45 = 0; i45 < 6; i45++) {
    acc = (acc + i45 * 13 + 410) % 100003;
  }
  const ix46: number = buf.indexOf('p13');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const ix47: number = buf.indexOf('p13');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  m01.set('k49', acc % 997);
  if (acc % 5 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  if (acc % 22 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1725) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  try { if (acc % 29 === 16) { throw new Error('synthetic-0'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  try { if (acc % 29 === 20) { throw new Error('synthetic-2'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 84) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  for (let i4 = 0; i4 < 7; i4++) {
    acc = (acc + i4 * 13 + 73) % 100003;
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const ix6: number = buf.indexOf('p13');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  acc = (acc * 31 + 3856) % 65521;
  arr.push(acc % 1000);
  acc = acc + 531 - (acc % 30);
  m01.set('k12', acc % 997);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 121) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  acc = acc + 428 - (acc % 30);
  m01.set('k20', acc % 997);
  buf += `q21:${acc % 97}`;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 39) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  m01.set('k24', acc % 997);
  const rc25: Rec13 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const ix26: number = buf.indexOf('p13');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 2035) % 65521;
  acc = (acc * 31 + 5571) % 65521;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  arr.push(acc % 1000);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 117) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  buf += `q36:${acc % 97}`;
  acc = (acc * 31 + 7116) % 65521;
  acc = acc + 129 - (acc % 46);
  acc = (acc * 31 + 4416) % 65521;
  arr.push(acc % 1000);
  acc = acc + 923 - (acc % 87);
  try { if (acc % 29 === 9) { throw new Error('synthetic-42'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 380 - (acc % 88);
  acc = (acc * 31 + 710) % 65521;
  const ix45: number = buf.indexOf('p13');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 6362) % 65521;
  m01.set('k47', acc % 997);
  for (let i48 = 0; i48 < 10; i48++) {
    acc = (acc + i48 * 13 + 559) % 100003;
  }
  buf += 'bay49-' + acc.toString();
  if (acc % 19 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-51'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1726) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  const ix0: number = buf.indexOf('p13');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-3'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += 'client8-' + acc.toString();
  m01.set('k9', acc % 997);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  m01.set('k11', acc % 997);
  acc = (acc * 31 + 4682) % 65521;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-14'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  try { if (acc % 29 === 10) { throw new Error('synthetic-16'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 23) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  if (acc % 18 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  buf += `q22:${acc % 97}`;
  m01.set('k23', acc % 997);
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  buf += 'bay25-' + acc.toString();
  acc = acc + 424 - (acc % 65);
  for (let i27 = 0; i27 < 5; i27++) {
    acc = (acc + i27 * 13 + 347) % 100003;
  }
  arr.push(acc % 1000);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  if (acc % 8 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const rc32: Rec13 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = (acc * 31 + 4834) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 23) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  m01.set('k37', acc % 997);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  buf += `q39:${acc % 97}`;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 143) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-44'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const rc47: Rec13 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  arr.push(acc % 1000);
  const ix51: number = buf.indexOf('p13');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1727) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  buf += 'waybill0-' + acc.toString();
  m01.set('k1', acc % 997);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 75) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  if (acc % 25 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const ix4: number = buf.indexOf('p13');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4981) % 65521;
  for (let i6 = 0; i6 < 4; i6++) {
    acc = (acc + i6 * 13 + 965) % 100003;
  }
  const ix7: number = buf.indexOf('p13');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 137) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  buf += 'crate10-' + acc.toString();
  acc = (acc * 31 + 9621) % 65521;
  const rc12: Rec13 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  try { if (acc % 29 === 3) { throw new Error('synthetic-13'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 7 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  acc = acc + 53 - (acc % 54);
  const rc16: Rec13 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 191) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  for (let i20 = 0; i20 < 6; i20++) {
    acc = (acc + i20 * 13 + 487) % 100003;
  }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  for (let i23 = 0; i23 < 6; i23++) {
    acc = (acc + i23 * 13 + 617) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const ix27: number = buf.indexOf('p13');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  acc = (acc * 31 + 9564) % 65521;
  buf += 'client30-' + acc.toString();
  for (let i31 = 0; i31 < 10; i31++) {
    acc = (acc + i31 * 13 + 246) % 100003;
  }
  acc = (acc * 31 + 9342) % 65521;
  const ix33: number = buf.indexOf('p13');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 165) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 28 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 30 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  acc = acc + 922 - (acc % 86);
  acc = acc + 27 - (acc % 29);
  const rc40: Rec13 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  try { if (acc % 29 === 17) { throw new Error('synthetic-41'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const ix42: number = buf.indexOf('p13');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  if (acc % 28 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  if (acc % 12 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 21) { throw new Error('synthetic-46'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1118) % 65521;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1728) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  if (acc % 27 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  acc = acc + 550 - (acc % 61);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 193) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = acc + 944 - (acc % 72);
  m01.set('k8', acc % 997);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  for (let i10 = 0; i10 < 11; i10++) {
    acc = (acc + i10 * 13 + 446) % 100003;
  }
  acc = (acc * 31 + 2949) % 65521;
  arr.push(acc % 1000);
  if (acc % 14 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 98) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  const rc15: Rec13 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const rc16: Rec13 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 26) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 120) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  buf += `q20:${acc % 97}`;
  const ix21: number = buf.indexOf('p13');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  acc = acc + 524 - (acc % 61);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = acc + 689 - (acc % 27);
  try { if (acc % 29 === 12) { throw new Error('synthetic-26'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const ix27: number = buf.indexOf('p13');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  arr.push(acc % 1000);
  const ix30: number = buf.indexOf('p13');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += `q31:${acc % 97}`;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 178) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 37) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p13');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 58) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  acc = (acc * 31 + 2202) % 65521;
  acc = (acc * 31 + 6793) % 65521;
  acc = acc + 737 - (acc % 58);
  if (acc % 17 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7897) % 65521;
  for (let i45 = 0; i45 < 7; i45++) {
    acc = (acc + i45 * 13 + 493) % 100003;
  }
  acc = acc + 923 - (acc % 71);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const rc49: Rec13 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  acc = (acc * 31 + 4988) % 65521;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1729) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  for (let i0 = 0; i0 < 4; i0++) {
    acc = (acc + i0 * 13 + 172) % 100003;
  }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 195) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const rc9: Rec13 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const ix10: number = buf.indexOf('p13');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  acc = acc + 876 - (acc % 69);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = acc + 998 - (acc % 22);
  arr.push(acc % 1000);
  acc = acc + 246 - (acc % 80);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 21) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 20) { throw new Error('synthetic-18'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += `q21:${acc % 97}`;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  try { if (acc % 29 === 21) { throw new Error('synthetic-23'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  for (let i26 = 0; i26 < 9; i26++) {
    acc = (acc + i26 * 13 + 615) % 100003;
  }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  buf += `q29:${acc % 97}`;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  acc = acc + 630 - (acc % 71);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 158) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  buf += 'refund38-' + acc.toString();
  buf += `q39:${acc % 97}`;
  m01.set('k40', acc % 997);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 18) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 158) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = acc + 487 - (acc % 7);
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  m01.set('k47', acc % 997);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  acc = (acc * 31 + 5610) % 65521;
  const ix50: number = buf.indexOf('p13');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1730) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 183) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  for (let i1 = 0; i1 < 4; i1++) {
    acc = (acc + i1 * 13 + 837) % 100003;
  }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const rc3: Rec13 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const ix4: number = buf.indexOf('p13');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const rc5: Rec13 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const ix6: number = buf.indexOf('p13');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 1627) % 65521;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  m01.set('k9', acc % 997);
  for (let i10 = 0; i10 < 11; i10++) {
    acc = (acc + i10 * 13 + 250) % 100003;
  }
  const ix11: number = buf.indexOf('p13');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = acc + 842 - (acc % 94);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 177) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q19:${acc % 97}`;
  buf += `q20:${acc % 97}`;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = acc + 635 - (acc % 73);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  buf += `q27:${acc % 97}`;
  const ix28: number = buf.indexOf('p13');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  if (acc % 17 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  buf += `q31:${acc % 97}`;
  acc = (acc * 31 + 351) % 65521;
  for (let i33 = 0; i33 < 8; i33++) {
    acc = (acc + i33 * 13 + 392) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 73) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  buf += `q38:${acc % 97}`;
  const rc39: Rec13 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  buf += 'balance40-' + acc.toString();
  for (let i41 = 0; i41 < 3; i41++) {
    acc = (acc + i41 * 13 + 426) % 100003;
  }
  const ix42: number = buf.indexOf('p13');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  if (acc % 26 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  for (let i44 = 0; i44 < 5; i44++) {
    acc = (acc + i44 * 13 + 383) % 100003;
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  for (let i46 = 0; i46 < 12; i46++) {
    acc = (acc + i46 * 13 + 260) % 100003;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-47'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  try { if (acc % 29 === 7) { throw new Error('synthetic-50'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 60 - (acc % 84);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1731) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const ix2: number = buf.indexOf('p13');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const ix3: number = buf.indexOf('p13');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 76) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (acc % 24 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  acc = acc + 127 - (acc % 67);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  acc = acc + 686 - (acc % 76);
  acc = (acc * 31 + 2081) % 65521;
  acc = (acc * 31 + 4700) % 65521;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 24) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const rc19: Rec13 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = (acc * 31 + 5239) % 65521;
  m01.set('k21', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  acc = acc + 978 - (acc % 36);
  buf += 'invoice26-' + acc.toString();
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  for (let i29 = 0; i29 < 9; i29++) {
    acc = (acc + i29 * 13 + 795) % 100003;
  }
  buf += 'balance30-' + acc.toString();
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 43) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  acc = acc + 57 - (acc % 30);
  acc = acc + 865 - (acc % 69);
  acc = (acc * 31 + 1806) % 65521;
  arr.push(acc % 1000);
  acc = acc + 550 - (acc % 66);
  m01.set('k42', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  m01.set('k44', acc % 997);
  for (let i45 = 0; i45 < 9; i45++) {
    acc = (acc + i45 * 13 + 305) % 100003;
  }
  for (let i46 = 0; i46 < 7; i46++) {
    acc = (acc + i46 * 13 + 770) % 100003;
  }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  m01.set('k50', acc % 997);
  acc = (acc * 31 + 4032) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1732) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  acc = acc + 410 - (acc % 74);
  m01.set('k1', acc % 997);
  m01.set('k2', acc % 997);
  acc = acc + 916 - (acc % 37);
  acc = (acc * 31 + 6013) % 65521;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  m01.set('k6', acc % 997);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  acc = acc + 295 - (acc % 55);
  if (acc % 21 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  acc = (acc * 31 + 3796) % 65521;
  for (let i13 = 0; i13 < 7; i13++) {
    acc = (acc + i13 * 13 + 323) % 100003;
  }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 23) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  acc = acc + 117 - (acc % 37);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 127) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = acc + 251 - (acc % 28);
  const ix20: number = buf.indexOf('p13');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (acc % 8 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  buf += 'invoice23-' + acc.toString();
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 94) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  buf += `q25:${acc % 97}`;
  const ix26: number = buf.indexOf('p13');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += 'payout30-' + acc.toString();
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  try { if (acc % 29 === 18) { throw new Error('synthetic-32'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 129) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 115) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  m01.set('k36', acc % 997);
  acc = (acc * 31 + 5429) % 65521;
  acc = (acc * 31 + 2729) % 65521;
  for (let i39 = 0; i39 < 3; i39++) {
    acc = (acc + i39 * 13 + 357) % 100003;
  }
  acc = acc + 79 - (acc % 13);
  arr.push(acc % 1000);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const ix43: number = buf.indexOf('p13');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  try { if (acc % 29 === 7) { throw new Error('synthetic-45'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-46'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = acc + 75 - (acc % 50);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0013_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0013_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0013_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1733) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  m01.set('k0', acc % 997);
  const rc1: Rec13 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const ix8: number = buf.indexOf('p13');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const ix9: number = buf.indexOf('p13');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const ix10: number = buf.indexOf('p13');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  m01.set('k12', acc % 997);
  const ix13: number = buf.indexOf('p13');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const rc15: Rec13 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  if (acc % 25 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 183) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'bay18-' + acc.toString();
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const ix21: number = buf.indexOf('p13');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += 'refund24-' + acc.toString();
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  m01.set('k26', acc % 997);
  m01.set('k27', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const rc29: Rec13 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = (acc * 31 + 574) % 65521;
  buf += 'customs33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 126) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec13 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  buf += `q36:${acc % 97}`;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const rc38: Rec13 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  acc = (acc * 31 + 6567) % 65521;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  if (acc % 9 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  buf += 'parcel42-' + acc.toString();
  try { if (acc % 29 === 9) { throw new Error('synthetic-43'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 13 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  acc = acc + 274 - (acc % 69);
  buf += 'settle46-' + acc.toString();
  const ix47: number = buf.indexOf('p13');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  for (let i50 = 0; i50 < 10; i50++) {
    acc = (acc + i50 * 13 + 621) % 100003;
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1734) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  for (let i0 = 0; i0 < 5; i0++) {
    acc = (acc + i0 * 13 + 934) % 100003;
  }
  buf += `q1:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 57) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const ix4: number = buf.indexOf('p13');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  acc = acc + 712 - (acc % 23);
  acc = acc + 942 - (acc % 54);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  acc = (acc * 31 + 6160) % 65521;
  acc = (acc * 31 + 914) % 65521;
  const rc13: Rec13 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 21) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  for (let i19 = 0; i19 < 11; i19++) {
    acc = (acc + i19 * 13 + 553) % 100003;
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-20'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-21'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  arr.push(acc % 1000);
  acc = acc + 567 - (acc % 8);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-27'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i28 = 0; i28 < 5; i28++) {
    acc = (acc + i28 * 13 + 367) % 100003;
  }
  arr.push(acc % 1000);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  buf += 'pickup31-' + acc.toString();
  const ix32: number = buf.indexOf('p13');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-33'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 104) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 9550) % 65521;
  const ix36: number = buf.indexOf('p13');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += 'depot37-' + acc.toString();
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q42:${acc % 97}`;
  buf += 'parcel43-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += `q45:${acc % 97}`;
  if (acc % 11 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  m01.set('k48', acc % 997);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const rc50: Rec13 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1735) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  buf += `q2:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  m01.set('k4', acc % 997);
  if (acc % 28 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 172) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = (acc * 31 + 439) % 65521;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const rc10: Rec13 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 35) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-12'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k13', acc % 997);
  buf += 'customs14-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = acc + 139 - (acc % 61);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 31) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 4724) % 65521;
  const rc19: Rec13 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 52) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  const rc22: Rec13 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  buf += `q26:${acc % 97}`;
  buf += 'policy27-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  acc = (acc * 31 + 5515) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  acc = acc + 408 - (acc % 65);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 157) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-35'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q36:${acc % 97}`;
  const ix37: number = buf.indexOf('p13');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  for (let i38 = 0; i38 < 9; i38++) {
    acc = (acc + i38 * 13 + 906) % 100003;
  }
  buf += 'policy39-' + acc.toString();
  const rc40: Rec13 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  for (let i41 = 0; i41 < 9; i41++) {
    acc = (acc + i41 * 13 + 71) % 100003;
  }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 113) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const ix45: number = buf.indexOf('p13');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-46'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i47 = 0; i47 < 4; i47++) {
    acc = (acc + i47 * 13 + 282) % 100003;
  }
  arr.push(acc % 1000);
  buf += 'payout49-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1736) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4230) % 65521;
  arr.push(acc % 1000);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 174) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  m01.set('k6', acc % 997);
  const rc7: Rec13 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  buf += 'freight8-' + acc.toString();
  if (acc % 18 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  try { if (acc % 29 === 6) { throw new Error('synthetic-12'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 100) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  m01.set('k14', acc % 997);
  if (acc % 16 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = acc + 330 - (acc % 37);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 57) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 302 - (acc % 43);
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 3) { throw new Error('synthetic-20'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  try { if (acc % 29 === 16) { throw new Error('synthetic-23'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  buf += `q25:${acc % 97}`;
  acc = (acc * 31 + 6357) % 65521;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  m01.set('k28', acc % 997);
  buf += 'freight29-' + acc.toString();
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = (acc * 31 + 4080) % 65521;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 96) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const rc38: Rec13 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  buf += 'transit39-' + acc.toString();
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 136) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 123) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  m01.set('k46', acc % 997);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  buf += 'invoice48-' + acc.toString();
  if (acc % 17 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const rc51: Rec13 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1737) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  arr.push(acc % 1000);
  const rc1: Rec13 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  acc = (acc * 31 + 6614) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const rc5: Rec13 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  buf += 'ticket7-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const rc9: Rec13 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  acc = acc + 357 - (acc % 76);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  acc = (acc * 31 + 8521) % 65521;
  if (acc % 19 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i15 = 0; i15 < 11; i15++) {
    acc = (acc + i15 * 13 + 343) % 100003;
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 148) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = acc + 175 - (acc % 7);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  if (acc % 28 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  buf += 'freight24-' + acc.toString();
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  for (let i29 = 0; i29 < 8; i29++) {
    acc = (acc + i29 * 13 + 109) % 100003;
  }
  arr.push(acc % 1000);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 127) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 53) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const ix36: number = buf.indexOf('p13');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  for (let i38 = 0; i38 < 4; i38++) {
    acc = (acc + i38 * 13 + 878) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  m01.set('k41', acc % 997);
  try { if (acc % 29 === 12) { throw new Error('synthetic-42'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  const rc44: Rec13 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  acc = acc + 227 - (acc % 82);
  acc = acc + 909 - (acc % 77);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  m01.set('k49', acc % 997);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  buf += 'order51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1738) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  if (acc % 8 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  if (acc % 8 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 165) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const ix4: number = buf.indexOf('p13');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 42) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 165) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  m01.set('k8', acc % 997);
  try { if (acc % 29 === 22) { throw new Error('synthetic-9'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const ix10: number = buf.indexOf('p13');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 89) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec13 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  buf += `q20:${acc % 97}`;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 18) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 29 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 89) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  acc = (acc * 31 + 2425) % 65521;
  for (let i27 = 0; i27 < 5; i27++) {
    acc = (acc + i27 * 13 + 929) % 100003;
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (acc % 5 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += `q31:${acc % 97}`;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 3) { throw new Error('synthetic-33'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 78) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-36'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i37 = 0; i37 < 10; i37++) {
    acc = (acc + i37 * 13 + 161) % 100003;
  }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  m01.set('k39', acc % 997);
  for (let i40 = 0; i40 < 12; i40++) {
    acc = (acc + i40 * 13 + 924) % 100003;
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  buf += 'settle44-' + acc.toString();
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-47'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  if (acc % 15 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  acc = acc + 820 - (acc % 61);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1739) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  try { if (acc % 29 === 9) { throw new Error('synthetic-0'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const ix1: number = buf.indexOf('p13');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2724) % 65521;
  buf += 'parcel3-' + acc.toString();
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  buf += 'waybill5-' + acc.toString();
  if (acc % 23 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const rc7: Rec13 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  m01.set('k8', acc % 997);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  arr.push(acc % 1000);
  try { if (acc % 29 === 9) { throw new Error('synthetic-11'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i12 = 0; i12 < 12; i12++) {
    acc = (acc + i12 * 13 + 790) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const rc14: Rec13 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 59) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 12; i18++) {
    acc = (acc + i18 * 13 + 264) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += 'pickup20-' + acc.toString();
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const ix22: number = buf.indexOf('p13');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  if (acc % 15 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += 'shelf26-' + acc.toString();
  buf += `q27:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  buf += `q32:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 178) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  arr.push(acc % 1000);
  const ix37: number = buf.indexOf('p13');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (acc % 30 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3671) % 65521;
  buf += 'carrier40-' + acc.toString();
  for (let i41 = 0; i41 < 3; i41++) {
    acc = (acc + i41 * 13 + 248) % 100003;
  }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 163) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += `q44:${acc % 97}`;
  m01.set('k45', acc % 997);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 156) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const rc48: Rec13 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  for (let i49 = 0; i49 < 3; i49++) {
    acc = (acc + i49 * 13 + 385) % 100003;
  }
  acc = (acc * 31 + 5789) % 65521;
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1740) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  const rc0: Rec13 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  m01.set('k1', acc % 997);
  acc = acc + 531 - (acc % 61);
  buf += `q3:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  buf += 'journey7-' + acc.toString();
  m01.set('k8', acc % 997);
  try { if (acc % 29 === 5) { throw new Error('synthetic-9'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  for (let i11 = 0; i11 < 9; i11++) {
    acc = (acc + i11 * 13 + 443) % 100003;
  }
  if (acc % 26 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = acc + 443 - (acc % 62);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 85) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 141) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 18 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const ix21: number = buf.indexOf('p13');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  if (acc % 9 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  buf += `q27:${acc % 97}`;
  acc = acc + 404 - (acc % 91);
  const rc29: Rec13 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const rc31: Rec13 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 162) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  buf += 'invoice36-' + acc.toString();
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  m01.set('k39', acc % 997);
  buf += `q40:${acc % 97}`;
  buf += `q41:${acc % 97}`;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const ix43: number = buf.indexOf('p13');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  m01.set('k44', acc % 997);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += 'bay46-' + acc.toString();
  acc = acc + 304 - (acc % 56);
  if (acc % 19 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  acc = acc + 882 - (acc % 75);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1741) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const rc1: Rec13 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 8401) % 65521;
  try { if (acc % 29 === 4) { throw new Error('synthetic-4'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k5', acc % 997);
  buf += 'depot6-' + acc.toString();
  const rc7: Rec13 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  buf += `q9:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  if (acc % 7 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  if (acc % 24 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const rc13: Rec13 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  acc = acc + 552 - (acc % 54);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 12) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k19', acc % 997);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  if (acc % 21 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  m01.set('k23', acc % 997);
  try { if (acc % 29 === 21) { throw new Error('synthetic-24'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  if (acc % 25 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  for (let i28 = 0; i28 < 8; i28++) {
    acc = (acc + i28 * 13 + 428) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += `q30:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += `q32:${acc % 97}`;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 21) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p13');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  buf += 'coupon36-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  const ix40: number = buf.indexOf('p13');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  buf += 'vendor41-' + acc.toString();
  m01.set('k42', acc % 997);
  buf += 'quota43-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const ix47: number = buf.indexOf('p13');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  if (acc % 24 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  for (let i51 = 0; i51 < 9; i51++) {
    acc = (acc + i51 * 13 + 652) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1742) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  buf += `q0:${acc % 97}`;
  if (acc % 13 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  buf += 'order2-' + acc.toString();
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 18) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const ix4: number = buf.indexOf('p13');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = acc + 252 - (acc % 56);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  buf += 'dock9-' + acc.toString();
  const ix10: number = buf.indexOf('p13');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  buf += `q11:${acc % 97}`;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 43) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const rc13: Rec13 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  arr.push(acc % 1000);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  buf += 'batch16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 138) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  acc = (acc * 31 + 5482) % 65521;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  try { if (acc % 29 === 4) { throw new Error('synthetic-21'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 18) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const rc23: Rec13 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  if (acc % 26 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  if (acc % 17 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const rc32: Rec13 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = acc + 75 - (acc % 23);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 110) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 9; i35++) {
    acc = (acc + i35 * 13 + 204) % 100003;
  }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  if (acc % 8 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  buf += `q38:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  buf += `q40:${acc % 97}`;
  const ix41: number = buf.indexOf('p13');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 80) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 145) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  for (let i47 = 0; i47 < 10; i47++) {
    acc = (acc + i47 * 13 + 624) % 100003;
  }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  m01.set('k49', acc % 997);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  acc = (acc * 31 + 6657) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0013_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0013_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0013_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1743) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  if (acc % 13 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  try { if (acc % 29 === 7) { throw new Error('synthetic-3'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 190) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  m01.set('k5', acc % 997);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 153) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const rc8: Rec13 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const rc9: Rec13 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  acc = (acc * 31 + 3598) % 65521;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  if (acc % 20 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 138) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-16'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 100) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 9862) % 65521;
  const rc19: Rec13 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const rc21: Rec13 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const ix24: number = buf.indexOf('p13');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  if (acc % 18 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  if (acc % 10 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  for (let i30 = 0; i30 < 12; i30++) {
    acc = (acc + i30 * 13 + 232) % 100003;
  }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 137) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = (acc * 31 + 8282) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 66) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  m01.set('k37', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = acc + 533 - (acc % 46);
  arr.push(acc % 1000);
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  buf += `q42:${acc % 97}`;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  const rc45: Rec13 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  for (let i47 = 0; i47 < 4; i47++) {
    acc = (acc + i47 * 13 + 816) % 100003;
  }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += 'dispatch49-' + acc.toString();
  for (let i50 = 0; i50 < 6; i50++) {
    acc = (acc + i50 * 13 + 433) % 100003;
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-51'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1744) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  m01.set('k1', acc % 997);
  for (let i2 = 0; i2 < 10; i2++) {
    acc = (acc + i2 * 13 + 348) % 100003;
  }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  m01.set('k6', acc % 997);
  if (acc % 11 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-8'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i9 = 0; i9 < 6; i9++) {
    acc = (acc + i9 * 13 + 24) % 100003;
  }
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  m01.set('k11', acc % 997);
  try { if (acc % 29 === 19) { throw new Error('synthetic-12'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 27) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  acc = acc + 243 - (acc % 56);
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  if (acc % 21 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 95) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p13');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  const ix19: number = buf.indexOf('p13');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  buf += 'crate21-' + acc.toString();
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  m01.set('k24', acc % 997);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  acc = (acc * 31 + 8882) % 65521;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  buf += 'invoice31-' + acc.toString();
  for (let i32 = 0; i32 < 12; i32++) {
    acc = (acc + i32 * 13 + 451) % 100003;
  }
  const ix33: number = buf.indexOf('p13');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 170) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 36 - (acc % 49);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const rc37: Rec13 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  try { if (acc % 29 === 20) { throw new Error('synthetic-38'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  acc = (acc * 31 + 2231) % 65521;
  buf += 'portal41-' + acc.toString();
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 71) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  acc = (acc * 31 + 124) % 65521;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4504) % 65521;
  const ix47: number = buf.indexOf('p13');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  buf += 'carrier48-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  buf += 'customs51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0013_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1745) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit13 = new Unit13(acc);
  const ix0: number = buf.indexOf('p13');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  const rc1: Rec13 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  acc = (acc * 31 + 9991) % 65521;
  const ix6: number = buf.indexOf('p13');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  buf += 'payout9-' + acc.toString();
  const rc10: Rec13 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const rc11: Rec13 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  buf += `q12:${acc % 97}`;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  arr.push(acc % 1000);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  try { if (acc % 29 === 6) { throw new Error('synthetic-16'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 145) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  m01.set('k21', acc % 997);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const rc24: Rec13 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  arr.push(acc % 1000);
  try { if (acc % 29 === 12) { throw new Error('synthetic-27'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 141) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 30) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  for (let i31 = 0; i31 < 9; i31++) {
    acc = (acc + i31 * 13 + 552) % 100003;
  }
  acc = acc + 349 - (acc % 66);
  buf += 'audit33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 157) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-35'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const rc36: Rec13 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  buf += `q39:${acc % 97}`;
  const ix40: number = buf.indexOf('p13');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 161) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 95) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i50 = 0; i50 < 5; i50++) {
    acc = (acc + i50 * 13 + 885) % 100003;
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0013(): BizFn[] {
  return [biz_0013_00, biz_0013_01, biz_0013_02, biz_0013_03, biz_0013_04, biz_0013_05, biz_0013_06, biz_0013_07, biz_0013_08, biz_0013_09, biz_0013_10, biz_0013_11, biz_0013_12, biz_0013_13, biz_0013_14, biz_0013_15, biz_0013_16, biz_0013_17, biz_0013_18, biz_0013_19, biz_0013_20, biz_0013_21, biz_0013_22, biz_0013_23, biz_0013_24, biz_0013_25, biz_0013_26, biz_0013_27, biz_0013_28, biz_0013_29, biz_0013_30, biz_0013_31, biz_0013_32, biz_0013_33, biz_0013_34, biz_0013_35, biz_0013_36, biz_0013_37, biz_0013_38, biz_0013_39, biz_0013_40, biz_0013_41, biz_0013_42];
}

export function rega_0013(): ABizFn[] {
  return [biz_0013_09a, biz_0013_19a, biz_0013_29a, biz_0013_39a];
}
