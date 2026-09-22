// Biz0089.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec89 { id: number; tag: string; score: number; }

class Unit89 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0089_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1686) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  acc = acc + 160 - (acc % 63);
  arr.push(acc % 1000);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 47) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  acc = acc + 307 - (acc % 30);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-5'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 2309) % 65521;
  acc = (acc * 31 + 5651) % 65521;
  acc = (acc * 31 + 5563) % 65521;
  buf += `q9:${acc % 97}`;
  try { if (acc % 29 === 11) { throw new Error('synthetic-10'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i11 = 0; i11 < 6; i11++) {
    acc = (acc + i11 * 13 + 810) % 100003;
  }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 141) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  if (acc % 18 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 149) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 301 - (acc % 54);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const ix20: number = buf.indexOf('p89');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2030) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6129) % 65521;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  m01.set('k28', acc % 997);
  acc = acc + 900 - (acc % 48);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  arr.push(acc % 1000);
  for (let i32 = 0; i32 < 11; i32++) {
    acc = (acc + i32 * 13 + 648) % 100003;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-33'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 59) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec89 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  for (let i36 = 0; i36 < 10; i36++) {
    acc = (acc + i36 * 13 + 537) % 100003;
  }
  buf += 'bay37-' + acc.toString();
  buf += 'portal38-' + acc.toString();
  if (acc % 26 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += `q41:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += 'shelf44-' + acc.toString();
  const rc45: Rec89 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  buf += 'transit46-' + acc.toString();
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  m01.set('k48', acc % 997);
  if (acc % 19 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  const ix50: number = buf.indexOf('p89');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1687) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  m01.set('k0', acc % 997);
  if (acc % 30 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const ix2: number = buf.indexOf('p89');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  m01.set('k3', acc % 997);
  for (let i4 = 0; i4 < 5; i4++) {
    acc = (acc + i4 * 13 + 391) % 100003;
  }
  buf += 'stocktake5-' + acc.toString();
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const rc7: Rec89 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  buf += 'region8-' + acc.toString();
  for (let i9 = 0; i9 < 4; i9++) {
    acc = (acc + i9 * 13 + 865) % 100003;
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const ix11: number = buf.indexOf('p89');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = acc + 43 - (acc % 15);
  try { if (acc % 29 === 16) { throw new Error('synthetic-13'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q14:${acc % 97}`;
  const rc15: Rec89 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  if (acc % 21 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 43) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-18'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'pallet19-' + acc.toString();
  buf += 'pallet20-' + acc.toString();
  acc = acc + 802 - (acc % 70);
  buf += 'client22-' + acc.toString();
  arr.push(acc % 1000);
  const ix24: number = buf.indexOf('p89');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const rc25: Rec89 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const ix26: number = buf.indexOf('p89');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  buf += 'routeplan28-' + acc.toString();
  const rc29: Rec89 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  if (acc % 19 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const rc31: Rec89 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = acc + 486 - (acc % 69);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 172) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  buf += `q36:${acc % 97}`;
  const ix37: number = buf.indexOf('p89');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const rc39: Rec89 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  acc = acc + 388 - (acc % 84);
  const rc43: Rec89 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  buf += `q44:${acc % 97}`;
  for (let i45 = 0; i45 < 7; i45++) {
    acc = (acc + i45 * 13 + 437) % 100003;
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 162) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 72) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  buf += 'client51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1688) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  for (let i0 = 0; i0 < 4; i0++) {
    acc = (acc + i0 * 13 + 9) % 100003;
  }
  m01.set('k1', acc % 997);
  acc = acc + 79 - (acc % 17);
  acc = acc + 386 - (acc % 65);
  acc = acc + 899 - (acc % 82);
  acc = (acc * 31 + 9656) % 65521;
  if (acc % 12 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const rc7: Rec89 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  buf += `q8:${acc % 97}`;
  acc = acc + 583 - (acc % 88);
  if (acc % 7 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  acc = acc + 881 - (acc % 39);
  buf += `q12:${acc % 97}`;
  for (let i13 = 0; i13 < 5; i13++) {
    acc = (acc + i13 * 13 + 982) % 100003;
  }
  buf += 'region14-' + acc.toString();
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 28) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 17 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  if (acc % 5 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const ix25: number = buf.indexOf('p89');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const rc26: Rec89 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += `q27:${acc % 97}`;
  const ix28: number = buf.indexOf('p89');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 87) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  buf += `q32:${acc % 97}`;
  try { if (acc % 29 === 5) { throw new Error('synthetic-33'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 80) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 571 - (acc % 92);
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const rc38: Rec89 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  acc = (acc * 31 + 9592) % 65521;
  acc = (acc * 31 + 4482) % 65521;
  acc = (acc * 31 + 3642) % 65521;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  arr.push(acc % 1000);
  buf += `q44:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7424) % 65521;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  acc = (acc * 31 + 4343) % 65521;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 18) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1689) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  m01.set('k1', acc % 997);
  const rc2: Rec89 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const ix3: number = buf.indexOf('p89');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  acc = (acc * 31 + 6683) % 65521;
  acc = (acc * 31 + 6231) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  if (acc % 17 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  if (acc % 30 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  acc = (acc * 31 + 7483) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  for (let i13 = 0; i13 < 12; i13++) {
    acc = (acc + i13 * 13 + 538) % 100003;
  }
  for (let i14 = 0; i14 < 4; i14++) {
    acc = (acc + i14 * 13 + 412) % 100003;
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 71) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  for (let i20 = 0; i20 < 11; i20++) {
    acc = (acc + i20 * 13 + 603) % 100003;
  }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'journey23-' + acc.toString();
  const rc24: Rec89 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  buf += `q25:${acc % 97}`;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const rc27: Rec89 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  if (acc % 5 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  m01.set('k29', acc % 997);
  arr.push(acc % 1000);
  acc = acc + 141 - (acc % 46);
  try { if (acc % 29 === 20) { throw new Error('synthetic-32'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-33'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 118) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 849 - (acc % 20);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  if (acc % 18 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  buf += `q38:${acc % 97}`;
  acc = acc + 948 - (acc % 63);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 42) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += `q42:${acc % 97}`;
  if (acc % 16 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = acc + 412 - (acc % 80);
  arr.push(acc % 1000);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  for (let i50 = 0; i50 < 11; i50++) {
    acc = (acc + i50 * 13 + 539) % 100003;
  }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1690) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const rc1: Rec89 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  acc = acc + 675 - (acc % 50);
  const rc3: Rec89 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  buf += 'dock5-' + acc.toString();
  const ix6: number = buf.indexOf('p89');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  for (let i7 = 0; i7 < 3; i7++) {
    acc = (acc + i7 * 13 + 356) % 100003;
  }
  acc = (acc * 31 + 8077) % 65521;
  const ix9: number = buf.indexOf('p89');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const rc12: Rec89 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  acc = acc + 271 - (acc % 51);
  arr.push(acc % 1000);
  acc = acc + 777 - (acc % 46);
  const ix16: number = buf.indexOf('p89');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 188) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  for (let i21 = 0; i21 < 11; i21++) {
    acc = (acc + i21 * 13 + 352) % 100003;
  }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 62) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  m01.set('k23', acc % 997);
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  if (acc % 16 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-30'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  for (let i33 = 0; i33 < 11; i33++) {
    acc = (acc + i33 * 13 + 377) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 14) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 12; i35++) {
    acc = (acc + i35 * 13 + 477) % 100003;
  }
  if (acc % 5 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  for (let i37 = 0; i37 < 8; i37++) {
    acc = (acc + i37 * 13 + 116) % 100003;
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  if (acc % 16 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 191) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  m01.set('k42', acc % 997);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  buf += `q44:${acc % 97}`;
  try { if (acc % 29 === 20) { throw new Error('synthetic-45'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i46 = 0; i46 < 12; i46++) {
    acc = (acc + i46 * 13 + 321) % 100003;
  }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  buf += `q48:${acc % 97}`;
  buf += 'dispatch49-' + acc.toString();
  buf += 'coupon50-' + acc.toString();
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1691) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  acc = acc + 643 - (acc % 59);
  const rc1: Rec89 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  acc = (acc * 31 + 2160) % 65521;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  acc = acc + 543 - (acc % 77);
  const rc5: Rec89 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  m01.set('k6', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  for (let i8 = 0; i8 < 10; i8++) {
    acc = (acc + i8 * 13 + 672) % 100003;
  }
  const ix9: number = buf.indexOf('p89');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  if (acc % 6 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 96) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  try { if (acc % 29 === 4) { throw new Error('synthetic-19'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'ticket20-' + acc.toString();
  for (let i21 = 0; i21 < 11; i21++) {
    acc = (acc + i21 * 13 + 913) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const ix23: number = buf.indexOf('p89');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const ix24: number = buf.indexOf('p89');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  if (acc % 24 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  if (acc % 13 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  acc = acc + 423 - (acc % 42);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 51) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const rc37: Rec89 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  acc = (acc * 31 + 6997) % 65521;
  const rc39: Rec89 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += 'rebate41-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const rc43: Rec89 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  arr.push(acc % 1000);
  buf += `q46:${acc % 97}`;
  if (acc % 8 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3844) % 65521;
  acc = acc + 815 - (acc % 21);
  arr.push(acc % 1000);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1692) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  if (acc % 5 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  for (let i5 = 0; i5 < 5; i5++) {
    acc = (acc + i5 * 13 + 78) % 100003;
  }
  const rc6: Rec89 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  buf += 'carrier8-' + acc.toString();
  acc = (acc * 31 + 8207) % 65521;
  buf += 'order10-' + acc.toString();
  m01.set('k11', acc % 997);
  if (acc % 25 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 14 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const rc15: Rec89 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 52) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 2553) % 65521;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const ix21: number = buf.indexOf('p89');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  acc = acc + 901 - (acc % 25);
  buf += `q23:${acc % 97}`;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = acc + 862 - (acc % 82);
  arr.push(acc % 1000);
  m01.set('k27', acc % 997);
  const rc28: Rec89 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = (acc * 31 + 7158) % 65521;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-31'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const ix33: number = buf.indexOf('p89');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 55) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'region35-' + acc.toString();
  try { if (acc % 29 === 19) { throw new Error('synthetic-36'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-38'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-39'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  try { if (acc % 29 === 5) { throw new Error('synthetic-42'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  m01.set('k44', acc % 997);
  const ix45: number = buf.indexOf('p89');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  if (acc % 23 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  if (acc % 11 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  m01.set('k48', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const rc50: Rec89 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  if (acc % 30 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1693) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  try { if (acc % 29 === 7) { throw new Error('synthetic-0'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  if (acc % 6 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7761) % 65521;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 194) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  for (let i8 = 0; i8 < 10; i8++) {
    acc = (acc + i8 * 13 + 347) % 100003;
  }
  buf += 'coupon9-' + acc.toString();
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  buf += 'region11-' + acc.toString();
  buf += 'policy12-' + acc.toString();
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  for (let i14 = 0; i14 < 3; i14++) {
    acc = (acc + i14 * 13 + 787) % 100003;
  }
  const rc15: Rec89 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  if (acc % 30 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 121) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  if (acc % 23 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const rc22: Rec89 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-24'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i25 = 0; i25 < 11; i25++) {
    acc = (acc + i25 * 13 + 650) % 100003;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-26'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-28'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const rc29: Rec89 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  buf += `q30:${acc % 97}`;
  try { if (acc % 29 === 20) { throw new Error('synthetic-31'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 85) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 99) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (acc % 27 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 56) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  acc = acc + 827 - (acc % 96);
  m01.set('k42', acc % 997);
  acc = (acc * 31 + 1691) % 65521;
  const rc44: Rec89 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += 'ticket45-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += 'client47-' + acc.toString();
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const rc49: Rec89 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  if (acc % 18 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 65) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1694) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  const rc0: Rec89 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 51) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  acc = (acc * 31 + 2362) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-4'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i9 = 0; i9 < 3; i9++) {
    acc = (acc + i9 * 13 + 330) % 100003;
  }
  buf += 'batch10-' + acc.toString();
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  try { if (acc % 29 === 19) { throw new Error('synthetic-12'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += 'invoice14-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-15'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i16 = 0; i16 < 10; i16++) {
    acc = (acc + i16 * 13 + 509) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 138) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec89 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  if (acc % 29 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = acc + 351 - (acc % 34);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const rc23: Rec89 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  arr.push(acc % 1000);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 43) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  m01.set('k28', acc % 997);
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  acc = acc + 289 - (acc % 52);
  acc = acc + 104 - (acc % 59);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6546) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 139) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  if (acc % 11 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  try { if (acc % 29 === 12) { throw new Error('synthetic-39'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 23 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = acc + 655 - (acc % 12);
  buf += 'dispatch42-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  buf += 'crate45-' + acc.toString();
  for (let i46 = 0; i46 < 12; i46++) {
    acc = (acc + i46 * 13 + 869) % 100003;
  }
  m01.set('k47', acc % 997);
  m01.set('k48', acc % 997);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  buf += 'warehouse50-' + acc.toString();
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1695) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  arr.push(acc % 1000);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 160) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  buf += `q5:${acc % 97}`;
  acc = acc + 752 - (acc % 32);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 38) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = acc + 737 - (acc % 23);
  m01.set('k14', acc % 997);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 66) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  if (acc % 8 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const rc21: Rec89 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (acc % 13 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-25'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k26', acc % 997);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  buf += 'pickup28-' + acc.toString();
  acc = (acc * 31 + 1299) % 65521;
  acc = (acc * 31 + 8165) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 114) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 113) % 65521;
  const rc36: Rec89 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  buf += `q37:${acc % 97}`;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  m01.set('k39', acc % 997);
  acc = (acc * 31 + 977) % 65521;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  buf += 'crate42-' + acc.toString();
  m01.set('k43', acc % 997);
  arr.push(acc % 1000);
  try { if (acc % 29 === 19) { throw new Error('synthetic-45'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  acc = acc + 796 - (acc % 50);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const ix49: number = buf.indexOf('p89');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  buf += 'client51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0089_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0089_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0089_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1696) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  buf += `q0:${acc % 97}`;
  const ix1: number = buf.indexOf('p89');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  arr.push(acc % 1000);
  if (acc % 7 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  acc = (acc * 31 + 1402) % 65521;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const ix8: number = buf.indexOf('p89');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = acc + 246 - (acc % 81);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const ix12: number = buf.indexOf('p89');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const rc14: Rec89 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  for (let i15 = 0; i15 < 6; i15++) {
    acc = (acc + i15 * 13 + 800) % 100003;
  }
  const ix16: number = buf.indexOf('p89');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 37) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-18'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const rc19: Rec89 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const ix21: number = buf.indexOf('p89');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-22'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 108) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  buf += 'batch25-' + acc.toString();
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 70) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  try { if (acc % 29 === 19) { throw new Error('synthetic-29'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  buf += `q31:${acc % 97}`;
  acc = acc + 144 - (acc % 82);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 186) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 5; i35++) {
    acc = (acc + i35 * 13 + 754) % 100003;
  }
  arr.push(acc % 1000);
  buf += `q37:${acc % 97}`;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 53) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  if (acc % 6 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  buf += `q41:${acc % 97}`;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  acc = acc + 132 - (acc % 38);
  buf += 'transit44-' + acc.toString();
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = (acc * 31 + 2559) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-47'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  m01.set('k49', acc % 997);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1697) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  if (acc % 10 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const ix1: number = buf.indexOf('p89');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const ix2: number = buf.indexOf('p89');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  buf += 'refund4-' + acc.toString();
  buf += 'sku5-' + acc.toString();
  acc = acc + 249 - (acc % 89);
  if (acc % 5 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const ix8: number = buf.indexOf('p89');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  for (let i9 = 0; i9 < 5; i9++) {
    acc = (acc + i9 * 13 + 652) % 100003;
  }
  acc = (acc * 31 + 3106) % 65521;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k14', acc % 997);
  m01.set('k15', acc % 997);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 116) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 142) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'rebate18-' + acc.toString();
  try { if (acc % 29 === 15) { throw new Error('synthetic-19'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 158) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  buf += `q23:${acc % 97}`;
  try { if (acc % 29 === 2) { throw new Error('synthetic-24'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const rc25: Rec89 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  m01.set('k26', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  buf += 'audit29-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const rc32: Rec89 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 74) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const rc36: Rec89 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  buf += `q37:${acc % 97}`;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9495) % 65521;
  m01.set('k40', acc % 997);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  buf += `q43:${acc % 97}`;
  if (acc % 12 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const rc46: Rec89 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  acc = (acc * 31 + 3202) % 65521;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const ix51: number = buf.indexOf('p89');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1698) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 14) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  m01.set('k2', acc % 997);
  const ix3: number = buf.indexOf('p89');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  acc = acc + 182 - (acc % 50);
  acc = (acc * 31 + 7610) % 65521;
  buf += `q7:${acc % 97}`;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  acc = (acc * 31 + 5180) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  for (let i12 = 0; i12 < 5; i12++) {
    acc = (acc + i12 * 13 + 582) % 100003;
  }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  if (acc % 18 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  m01.set('k15', acc % 997);
  const ix16: number = buf.indexOf('p89');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 116) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  for (let i19 = 0; i19 < 3; i19++) {
    acc = (acc + i19 * 13 + 253) % 100003;
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  if (acc % 17 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const ix22: number = buf.indexOf('p89');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  buf += `q23:${acc % 97}`;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = (acc * 31 + 5397) % 65521;
  acc = (acc * 31 + 267) % 65521;
  if (acc % 17 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const rc28: Rec89 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = acc + 668 - (acc % 19);
  acc = (acc * 31 + 5343) % 65521;
  if (acc % 5 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 173) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const rc36: Rec89 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  acc = (acc * 31 + 1324) % 65521;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const ix39: number = buf.indexOf('p89');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const rc41: Rec89 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += `q47:${acc % 97}`;
  acc = (acc * 31 + 3564) % 65521;
  buf += `q49:${acc % 97}`;
  acc = (acc * 31 + 406) % 65521;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1699) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  const ix0: number = buf.indexOf('p89');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (acc % 31 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  try { if (acc % 29 === 20) { throw new Error('synthetic-5'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'invoice6-' + acc.toString();
  acc = (acc * 31 + 3439) % 65521;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  buf += 'payout11-' + acc.toString();
  const rc12: Rec89 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  if (acc % 15 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 121) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  for (let i16 = 0; i16 < 6; i16++) {
    acc = (acc + i16 * 13 + 905) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 136) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p89');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const ix22: number = buf.indexOf('p89');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = acc + 494 - (acc % 47);
  m01.set('k26', acc % 997);
  m01.set('k27', acc % 997);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 82) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  for (let i30 = 0; i30 < 9; i30++) {
    acc = (acc + i30 * 13 + 476) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 188) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 1681) % 65521;
  acc = acc + 281 - (acc % 40);
  if (acc % 8 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  acc = acc + 871 - (acc % 58);
  const rc41: Rec89 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const ix42: number = buf.indexOf('p89');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  acc = (acc * 31 + 5594) % 65521;
  acc = acc + 942 - (acc % 76);
  m01.set('k46', acc % 997);
  for (let i47 = 0; i47 < 8; i47++) {
    acc = (acc + i47 * 13 + 166) % 100003;
  }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const rc50: Rec89 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  acc = acc + 418 - (acc % 23);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1700) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const rc1: Rec89 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const rc2: Rec89 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  m01.set('k3', acc % 997);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  acc = acc + 942 - (acc % 38);
  buf += `q8:${acc % 97}`;
  acc = (acc * 31 + 5310) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-10'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 399 - (acc % 96);
  buf += 'sku12-' + acc.toString();
  try { if (acc % 29 === 7) { throw new Error('synthetic-13'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 4592) % 65521;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 120) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 226 - (acc % 91);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += `q25:${acc % 97}`;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  if (acc % 19 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const rc32: Rec89 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 72) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const ix37: number = buf.indexOf('p89');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 183) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 52) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  buf += `q41:${acc % 97}`;
  const rc42: Rec89 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  buf += `q44:${acc % 97}`;
  buf += 'quota45-' + acc.toString();
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  acc = (acc * 31 + 886) % 65521;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  buf += 'pickup49-' + acc.toString();
  m01.set('k50', acc % 997);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1701) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  m01.set('k0', acc % 997);
  buf += `q1:${acc % 97}`;
  buf += `q2:${acc % 97}`;
  const rc3: Rec89 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 63) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const ix5: number = buf.indexOf('p89');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  buf += 'warehouse6-' + acc.toString();
  buf += `q7:${acc % 97}`;
  const ix8: number = buf.indexOf('p89');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const ix9: number = buf.indexOf('p89');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  arr.push(acc % 1000);
  if (acc % 23 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  if (acc % 29 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 86) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 638 - (acc % 51);
  m01.set('k19', acc % 997);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-21'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q22:${acc % 97}`;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  arr.push(acc % 1000);
  acc = acc + 495 - (acc % 27);
  acc = acc + 539 - (acc % 94);
  acc = (acc * 31 + 9672) % 65521;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  buf += 'settle29-' + acc.toString();
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 62) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  buf += `q36:${acc % 97}`;
  for (let i37 = 0; i37 < 8; i37++) {
    acc = (acc + i37 * 13 + 335) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = acc + 245 - (acc % 25);
  for (let i40 = 0; i40 < 4; i40++) {
    acc = (acc + i40 * 13 + 195) % 100003;
  }
  buf += 'pallet41-' + acc.toString();
  acc = (acc * 31 + 8376) % 65521;
  m01.set('k43', acc % 997);
  if (acc % 9 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (acc % 12 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += `q46:${acc % 97}`;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  acc = acc + 78 - (acc % 30);
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1702) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  for (let i0 = 0; i0 < 6; i0++) {
    acc = (acc + i0 * 13 + 523) % 100003;
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  acc = acc + 129 - (acc % 91);
  acc = (acc * 31 + 547) % 65521;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  for (let i9 = 0; i9 < 4; i9++) {
    acc = (acc + i9 * 13 + 750) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 163) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 75) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  m01.set('k19', acc % 997);
  for (let i20 = 0; i20 < 8; i20++) {
    acc = (acc + i20 * 13 + 774) % 100003;
  }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const rc22: Rec89 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  try { if (acc % 29 === 18) { throw new Error('synthetic-23'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  m01.set('k26', acc % 997);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  try { if (acc % 29 === 5) { throw new Error('synthetic-29'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 184) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  buf += 'warehouse31-' + acc.toString();
  acc = acc + 827 - (acc % 85);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 177) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const rc36: Rec89 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const ix37: number = buf.indexOf('p89');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  buf += `q38:${acc % 97}`;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-40'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k41', acc % 997);
  try { if (acc % 29 === 6) { throw new Error('synthetic-42'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 552 - (acc % 92);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  acc = (acc * 31 + 6083) % 65521;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  for (let i48 = 0; i48 < 10; i48++) {
    acc = (acc + i48 * 13 + 985) % 100003;
  }
  const ix49: number = buf.indexOf('p89');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += `q50:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1703) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 37) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 73) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const rc3: Rec89 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  acc = (acc * 31 + 6476) % 65521;
  m01.set('k6', acc % 997);
  buf += `q7:${acc % 97}`;
  for (let i8 = 0; i8 < 11; i8++) {
    acc = (acc + i8 * 13 + 10) % 100003;
  }
  for (let i9 = 0; i9 < 4; i9++) {
    acc = (acc + i9 * 13 + 830) % 100003;
  }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  buf += 'payout11-' + acc.toString();
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  for (let i13 = 0; i13 < 7; i13++) {
    acc = (acc + i13 * 13 + 719) % 100003;
  }
  buf += 'transit14-' + acc.toString();
  buf += 'journey15-' + acc.toString();
  acc = acc + 240 - (acc % 86);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 89) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 205 - (acc % 46);
  const ix19: number = buf.indexOf('p89');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += 'depot21-' + acc.toString();
  const ix22: number = buf.indexOf('p89');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  for (let i23 = 0; i23 < 6; i23++) {
    acc = (acc + i23 * 13 + 311) % 100003;
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 682 - (acc % 67);
  acc = (acc * 31 + 2119) % 65521;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  buf += 'vendor31-' + acc.toString();
  const ix32: number = buf.indexOf('p89');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  acc = acc + 351 - (acc % 30);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 154) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  buf += `q37:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-41'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'parcel42-' + acc.toString();
  const rc43: Rec89 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  buf += `q44:${acc % 97}`;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 143) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  acc = (acc * 31 + 4942) % 65521;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  for (let i48 = 0; i48 < 11; i48++) {
    acc = (acc + i48 * 13 + 112) % 100003;
  }
  acc = (acc * 31 + 4105) % 65521;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1704) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 52) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  for (let i5 = 0; i5 < 3; i5++) {
    acc = (acc + i5 * 13 + 30) % 100003;
  }
  if (acc % 9 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  acc = acc + 313 - (acc % 22);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 101) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 111) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 8157) % 65521;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-21'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 671) % 65521;
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 194) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 17) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  for (let i25 = 0; i25 < 3; i25++) {
    acc = (acc + i25 * 13 + 202) % 100003;
  }
  m01.set('k26', acc % 997);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  for (let i29 = 0; i29 < 6; i29++) {
    acc = (acc + i29 * 13 + 38) % 100003;
  }
  const rc30: Rec89 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = acc + 988 - (acc % 48);
  if (acc % 30 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 106) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  if (acc % 23 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  try { if (acc % 29 === 9) { throw new Error('synthetic-38'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += 'region41-' + acc.toString();
  try { if (acc % 29 === 21) { throw new Error('synthetic-42'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  arr.push(acc % 1000);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const rc47: Rec89 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const ix49: number = buf.indexOf('p89');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1705) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  acc = acc + 536 - (acc % 20);
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 128) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  m01.set('k2', acc % 997);
  acc = (acc * 31 + 3064) % 65521;
  const rc4: Rec89 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-6'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  acc = (acc * 31 + 5497) % 65521;
  const ix11: number = buf.indexOf('p89');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  try { if (acc % 29 === 17) { throw new Error('synthetic-13'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  acc = acc + 989 - (acc % 24);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 111) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 9; i18++) {
    acc = (acc + i18 * 13 + 957) % 100003;
  }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  buf += `q21:${acc % 97}`;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 14) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  acc = acc + 739 - (acc % 69);
  acc = acc + 52 - (acc % 92);
  if (acc % 5 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-27'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6139) % 65521;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  m01.set('k30', acc % 997);
  if (acc % 11 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  if (acc % 29 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 129) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  if (acc % 28 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7443) % 65521;
  buf += `q39:${acc % 97}`;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-41'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const rc42: Rec89 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = (acc * 31 + 6871) % 65521;
  m01.set('k45', acc % 997);
  const rc46: Rec89 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  acc = acc + 55 - (acc % 73);
  const ix48: number = buf.indexOf('p89');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  const ix49: number = buf.indexOf('p89');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = (acc * 31 + 3733) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0089_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0089_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0089_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1706) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  m01.set('k0', acc % 997);
  const ix1: number = buf.indexOf('p89');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = acc + 694 - (acc % 59);
  acc = acc + 338 - (acc % 9);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  acc = acc + 243 - (acc % 30);
  buf += 'region10-' + acc.toString();
  acc = (acc * 31 + 3702) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 159) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  for (let i14 = 0; i14 < 10; i14++) {
    acc = (acc + i14 * 13 + 602) % 100003;
  }
  acc = acc + 342 - (acc % 78);
  const rc16: Rec89 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 126) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 7702) % 65521;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const rc20: Rec89 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  acc = acc + 38 - (acc % 24);
  for (let i24 = 0; i24 < 4; i24++) {
    acc = (acc + i24 * 13 + 537) % 100003;
  }
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 126) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-26'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const ix27: number = buf.indexOf('p89');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  acc = (acc * 31 + 1968) % 65521;
  for (let i31 = 0; i31 < 11; i31++) {
    acc = (acc + i31 * 13 + 281) % 100003;
  }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 151) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-33'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 196) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += `q36:${acc % 97}`;
  arr.push(acc % 1000);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = (acc * 31 + 1203) % 65521;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 189) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  m01.set('k44', acc % 997);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const rc46: Rec89 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  if (acc % 20 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8926) % 65521;
  if (acc % 24 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const ix51: number = buf.indexOf('p89');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1707) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const ix1: number = buf.indexOf('p89');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const ix3: number = buf.indexOf('p89');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  acc = (acc * 31 + 887) % 65521;
  if (acc % 25 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const ix7: number = buf.indexOf('p89');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-8'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  if (acc % 6 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 120) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 181) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p89');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3642) % 65521;
  acc = acc + 584 - (acc % 33);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 137) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  m01.set('k22', acc % 997);
  const ix23: number = buf.indexOf('p89');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  acc = acc + 496 - (acc % 59);
  m01.set('k25', acc % 997);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const rc28: Rec89 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const ix31: number = buf.indexOf('p89');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 125) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  try { if (acc % 29 === 4) { throw new Error('synthetic-36'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  acc = (acc * 31 + 5510) % 65521;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += 'payout41-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  buf += 'portal43-' + acc.toString();
  try { if (acc % 29 === 19) { throw new Error('synthetic-44'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const ix46: number = buf.indexOf('p89');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const ix47: number = buf.indexOf('p89');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1708) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 97) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  try { if (acc % 29 === 20) { throw new Error('synthetic-5'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  buf += `q7:${acc % 97}`;
  acc = acc + 466 - (acc % 38);
  for (let i9 = 0; i9 < 9; i9++) {
    acc = (acc + i9 * 13 + 279) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-12'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 20 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 26) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += 'policy19-' + acc.toString();
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 148) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  buf += 'region21-' + acc.toString();
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  buf += `q23:${acc % 97}`;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += `q25:${acc % 97}`;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 192) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  acc = (acc * 31 + 4337) % 65521;
  if (acc % 21 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9047) % 65521;
  m01.set('k30', acc % 997);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  acc = acc + 510 - (acc % 66);
  acc = (acc * 31 + 2165) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 29) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-38'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'sku39-' + acc.toString();
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 105) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = (acc * 31 + 720) % 65521;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  arr.push(acc % 1000);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 195) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  m01.set('k47', acc % 997);
  if (acc % 14 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-49'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 103) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const rc51: Rec89 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1709) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = acc + 689 - (acc % 56);
  m01.set('k3', acc % 997);
  for (let i4 = 0; i4 < 4; i4++) {
    acc = (acc + i4 * 13 + 753) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-7'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-8'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 169) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  acc = (acc * 31 + 3078) % 65521;
  acc = (acc * 31 + 228) % 65521;
  acc = (acc * 31 + 8323) % 65521;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  if (acc % 13 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += 'region15-' + acc.toString();
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 117) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 9; i18++) {
    acc = (acc + i18 * 13 + 929) % 100003;
  }
  buf += `q19:${acc % 97}`;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  if (acc % 20 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  m01.set('k22', acc % 997);
  arr.push(acc % 1000);
  buf += `q24:${acc % 97}`;
  m01.set('k25', acc % 997);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 3512) % 65521;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const rc31: Rec89 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  for (let i32 = 0; i32 < 10; i32++) {
    acc = (acc + i32 * 13 + 557) % 100003;
  }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 64) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 49) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'parcel35-' + acc.toString();
  if (acc % 20 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  buf += 'payout38-' + acc.toString();
  const rc39: Rec89 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  acc = acc + 308 - (acc % 43);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-44'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const rc46: Rec89 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const rc47: Rec89 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  acc = (acc * 31 + 7677) % 65521;
  const rc49: Rec89 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  for (let i50 = 0; i50 < 10; i50++) {
    acc = (acc + i50 * 13 + 28) % 100003;
  }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1710) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  acc = (acc * 31 + 7711) % 65521;
  for (let i1 = 0; i1 < 10; i1++) {
    acc = (acc + i1 * 13 + 303) % 100003;
  }
  acc = acc + 116 - (acc % 35);
  const ix3: number = buf.indexOf('p89');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-4'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  acc = acc + 13 - (acc % 24);
  acc = (acc * 31 + 6676) % 65521;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  buf += `q11:${acc % 97}`;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 169) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  m01.set('k14', acc % 997);
  const ix15: number = buf.indexOf('p89');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  acc = acc + 210 - (acc % 83);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 18) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 19 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  if (acc % 28 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8714) % 65521;
  if (acc % 14 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  for (let i30 = 0; i30 < 7; i30++) {
    acc = (acc + i30 * 13 + 509) % 100003;
  }
  buf += 'sku31-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 16) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const rc36: Rec89 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  try { if (acc % 29 === 16) { throw new Error('synthetic-37'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i38 = 0; i38 < 6; i38++) {
    acc = (acc + i38 * 13 + 743) % 100003;
  }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  if (acc % 23 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-46'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  const ix47: number = buf.indexOf('p89');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  m01.set('k48', acc % 997);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1711) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  if (acc % 13 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const ix1: number = buf.indexOf('p89');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const rc2: Rec89 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  if (acc % 12 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-4'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 122) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'rebate7-' + acc.toString();
  try { if (acc % 29 === 3) { throw new Error('synthetic-8'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 192) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const ix12: number = buf.indexOf('p89');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  if (acc % 17 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  if (acc % 24 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = acc + 85 - (acc % 36);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 16) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  if (acc % 11 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-20'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const rc22: Rec89 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += `q25:${acc % 97}`;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  try { if (acc % 29 === 16) { throw new Error('synthetic-27'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  arr.push(acc % 1000);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-31'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  buf += 'pallet33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 15) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 4573) % 65521;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  for (let i38 = 0; i38 < 11; i38++) {
    acc = (acc + i38 * 13 + 813) % 100003;
  }
  const ix39: number = buf.indexOf('p89');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  for (let i42 = 0; i42 < 6; i42++) {
    acc = (acc + i42 * 13 + 468) % 100003;
  }
  const ix43: number = buf.indexOf('p89');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  for (let i45 = 0; i45 < 6; i45++) {
    acc = (acc + i45 * 13 + 550) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q47:${acc % 97}`;
  try { if (acc % 29 === 8) { throw new Error('synthetic-48'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const ix49: number = buf.indexOf('p89');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const ix50: number = buf.indexOf('p89');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8465) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1712) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  try { if (acc % 29 === 17) { throw new Error('synthetic-0'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q1:${acc % 97}`;
  acc = (acc * 31 + 4938) % 65521;
  buf += `q3:${acc % 97}`;
  buf += 'client4-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  buf += 'sku6-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  acc = acc + 618 - (acc % 18);
  buf += 'crate9-' + acc.toString();
  buf += 'parcel10-' + acc.toString();
  m01.set('k11', acc % 997);
  arr.push(acc % 1000);
  const ix13: number = buf.indexOf('p89');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  m01.set('k15', acc % 997);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 26) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  if (acc % 17 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  arr.push(acc % 1000);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 107) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  m01.set('k25', acc % 997);
  if (acc % 23 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  buf += `q27:${acc % 97}`;
  const rc28: Rec89 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = acc + 916 - (acc % 16);
  m01.set('k30', acc % 997);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  buf += `q32:${acc % 97}`;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 52) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 19) { throw new Error('synthetic-35'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'batch36-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 141) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  if (acc % 24 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += 'carrier41-' + acc.toString();
  if (acc % 9 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  m01.set('k43', acc % 997);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  buf += `q45:${acc % 97}`;
  acc = acc + 537 - (acc % 90);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const rc49: Rec89 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1713) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  const ix0: number = buf.indexOf('p89');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  acc = acc + 221 - (acc % 66);
  const ix2: number = buf.indexOf('p89');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const ix5: number = buf.indexOf('p89');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  m01.set('k6', acc % 997);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  if (acc % 8 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 198) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 40) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 2) { throw new Error('synthetic-15'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 60) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec89 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  buf += `q19:${acc % 97}`;
  const ix20: number = buf.indexOf('p89');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  for (let i22 = 0; i22 < 6; i22++) {
    acc = (acc + i22 * 13 + 43) % 100003;
  }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 46) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const ix26: number = buf.indexOf('p89');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 1943) % 65521;
  acc = (acc * 31 + 825) % 65521;
  try { if (acc % 29 === 5) { throw new Error('synthetic-29'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1365) % 65521;
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 114) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'client35-' + acc.toString();
  buf += 'invoice36-' + acc.toString();
  const ix37: number = buf.indexOf('p89');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const rc39: Rec89 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  buf += 'portal40-' + acc.toString();
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  m01.set('k42', acc % 997);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  if (acc % 9 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  buf += `q45:${acc % 97}`;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  if (acc % 6 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  try { if (acc % 29 === 11) { throw new Error('synthetic-50'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const rc51: Rec89 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1714) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  try { if (acc % 29 === 19) { throw new Error('synthetic-1'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 12 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = (acc * 31 + 5960) % 65521;
  const ix5: number = buf.indexOf('p89');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  if (acc % 6 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  buf += 'quota8-' + acc.toString();
  acc = acc + 67 - (acc % 55);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 193) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 81) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  for (let i13 = 0; i13 < 6; i13++) {
    acc = (acc + i13 * 13 + 723) % 100003;
  }
  buf += 'coupon14-' + acc.toString();
  if (acc % 30 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5663) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 44) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 7; i18++) {
    acc = (acc + i18 * 13 + 51) % 100003;
  }
  m01.set('k19', acc % 997);
  m01.set('k20', acc % 997);
  for (let i21 = 0; i21 < 9; i21++) {
    acc = (acc + i21 * 13 + 863) % 100003;
  }
  for (let i22 = 0; i22 < 11; i22++) {
    acc = (acc + i22 * 13 + 122) % 100003;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-23'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 10 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 56) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 147) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  acc = acc + 935 - (acc % 61);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const rc32: Rec89 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = acc + 976 - (acc % 17);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 123) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 148) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  acc = (acc * 31 + 3862) % 65521;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  acc = acc + 573 - (acc % 68);
  acc = (acc * 31 + 503) % 65521;
  const rc42: Rec89 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  if (acc % 10 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 37) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  acc = (acc * 31 + 6364) % 65521;
  buf += 'bay51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1715) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  buf += `q0:${acc % 97}`;
  buf += `q1:${acc % 97}`;
  buf += `q2:${acc % 97}`;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 96) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  acc = (acc * 31 + 9515) % 65521;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 142) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const rc10: Rec89 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  for (let i12 = 0; i12 < 3; i12++) {
    acc = (acc + i12 * 13 + 284) % 100003;
  }
  for (let i13 = 0; i13 < 12; i13++) {
    acc = (acc + i13 * 13 + 454) % 100003;
  }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-15'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 38) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const ix19: number = buf.indexOf('p89');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const ix23: number = buf.indexOf('p89');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const rc24: Rec89 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const rc26: Rec89 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  acc = acc + 115 - (acc % 53);
  for (let i28 = 0; i28 < 3; i28++) {
    acc = (acc + i28 * 13 + 379) % 100003;
  }
  arr.push(acc % 1000);
  const ix30: number = buf.indexOf('p89');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const rc33: Rec89 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 133) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  for (let i36 = 0; i36 < 12; i36++) {
    acc = (acc + i36 * 13 + 695) % 100003;
  }
  acc = acc + 836 - (acc % 75);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  m01.set('k39', acc % 997);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 110) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  acc = acc + 773 - (acc % 53);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = acc + 411 - (acc % 12);
  buf += 'waybill45-' + acc.toString();
  try { if (acc % 29 === 10) { throw new Error('synthetic-46'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q47:${acc % 97}`;
  acc = acc + 671 - (acc % 64);
  acc = (acc * 31 + 884) % 65521;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const rc51: Rec89 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0089_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0089_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0089_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1716) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 72) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix3: number = buf.indexOf('p89');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-4'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const rc7: Rec89 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  if (acc % 15 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  buf += 'audit9-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 15) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  if (acc % 25 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  acc = acc + 646 - (acc % 90);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 38) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 184) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  m01.set('k19', acc % 997);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  buf += 'dispatch24-' + acc.toString();
  buf += `q25:${acc % 97}`;
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const ix28: number = buf.indexOf('p89');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  m01.set('k29', acc % 997);
  for (let i30 = 0; i30 < 8; i30++) {
    acc = (acc + i30 * 13 + 615) % 100003;
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  for (let i32 = 0; i32 < 9; i32++) {
    acc = (acc + i32 * 13 + 319) % 100003;
  }
  for (let i33 = 0; i33 < 5; i33++) {
    acc = (acc + i33 * 13 + 989) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 65) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7989) % 65521;
  acc = (acc * 31 + 4616) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  for (let i40 = 0; i40 < 3; i40++) {
    acc = (acc + i40 * 13 + 958) % 100003;
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const rc42: Rec89 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  buf += 'pickup43-' + acc.toString();
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 17) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  for (let i48 = 0; i48 < 8; i48++) {
    acc = (acc + i48 * 13 + 212) % 100003;
  }
  const ix49: number = buf.indexOf('p89');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const rc51: Rec89 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1717) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  acc = acc + 484 - (acc % 78);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  if (acc % 30 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = acc + 913 - (acc % 77);
  buf += 'freight5-' + acc.toString();
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 28) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  for (let i7 = 0; i7 < 9; i7++) {
    acc = (acc + i7 * 13 + 82) % 100003;
  }
  buf += 'crate8-' + acc.toString();
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const ix10: number = buf.indexOf('p89');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 11) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  arr.push(acc % 1000);
  buf += `q20:${acc % 97}`;
  buf += 'policy21-' + acc.toString();
  m01.set('k22', acc % 997);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  for (let i24 = 0; i24 < 6; i24++) {
    acc = (acc + i24 * 13 + 599) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const ix27: number = buf.indexOf('p89');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-31'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 72) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const rc36: Rec89 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  arr.push(acc % 1000);
  buf += `q39:${acc % 97}`;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  acc = acc + 849 - (acc % 62);
  const rc43: Rec89 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 105) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  for (let i46 = 0; i46 < 5; i46++) {
    acc = (acc + i46 * 13 + 695) % 100003;
  }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  acc = (acc * 31 + 7132) % 65521;
  const rc49: Rec89 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1718) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  const ix0: number = buf.indexOf('p89');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  if (acc % 17 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  buf += 'coupon3-' + acc.toString();
  try { if (acc % 29 === 10) { throw new Error('synthetic-4'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3182) % 65521;
  buf += 'pickup6-' + acc.toString();
  buf += 'portal7-' + acc.toString();
  const rc8: Rec89 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  buf += 'batch9-' + acc.toString();
  acc = acc + 66 - (acc % 88);
  const ix11: number = buf.indexOf('p89');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  buf += `q12:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  acc = acc + 144 - (acc % 54);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 156) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 20) { throw new Error('synthetic-18'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  acc = acc + 367 - (acc % 95);
  try { if (acc % 29 === 20) { throw new Error('synthetic-21'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'ticket22-' + acc.toString();
  buf += `q23:${acc % 97}`;
  const ix24: number = buf.indexOf('p89');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const rc25: Rec89 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (acc % 5 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4202) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  try { if (acc % 29 === 10) { throw new Error('synthetic-33'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 51) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  buf += `q36:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const ix38: number = buf.indexOf('p89');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 108) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  m01.set('k40', acc % 997);
  const rc41: Rec89 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const rc42: Rec89 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const ix45: number = buf.indexOf('p89');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += `q46:${acc % 97}`;
  if (acc % 10 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += 'balance49-' + acc.toString();
  acc = (acc * 31 + 4099) % 65521;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1719) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  buf += `q1:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const rc3: Rec89 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 69) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += 'client7-' + acc.toString();
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  try { if (acc % 29 === 21) { throw new Error('synthetic-11'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  if (acc % 11 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 194) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-18'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  acc = acc + 774 - (acc % 41);
  const ix22: number = buf.indexOf('p89');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  try { if (acc % 29 === 3) { throw new Error('synthetic-24'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 2854) % 65521;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  acc = (acc * 31 + 6891) % 65521;
  for (let i28 = 0; i28 < 4; i28++) {
    acc = (acc + i28 * 13 + 364) % 100003;
  }
  for (let i29 = 0; i29 < 9; i29++) {
    acc = (acc + i29 * 13 + 767) % 100003;
  }
  if (acc % 27 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const ix32: number = buf.indexOf('p89');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 140) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 836 - (acc % 43);
  buf += 'shelf36-' + acc.toString();
  if (acc % 13 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  arr.push(acc % 1000);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  for (let i42 = 0; i42 < 9; i42++) {
    acc = (acc + i42 * 13 + 845) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const ix44: number = buf.indexOf('p89');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const ix50: number = buf.indexOf('p89');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1720) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  m01.set('k0', acc % 997);
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = acc + 77 - (acc % 80);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 86) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = acc + 81 - (acc % 35);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  buf += 'pickup8-' + acc.toString();
  buf += `q9:${acc % 97}`;
  if (acc % 11 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  acc = (acc * 31 + 9573) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  acc = (acc * 31 + 860) % 65521;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const rc16: Rec89 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 17) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 18) { throw new Error('synthetic-18'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9333) % 65521;
  for (let i20 = 0; i20 < 12; i20++) {
    acc = (acc + i20 * 13 + 725) % 100003;
  }
  if (acc % 10 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const rc25: Rec89 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  for (let i28 = 0; i28 < 3; i28++) {
    acc = (acc + i28 * 13 + 632) % 100003;
  }
  arr.push(acc % 1000);
  const ix30: number = buf.indexOf('p89');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += 'refund31-' + acc.toString();
  buf += `q32:${acc % 97}`;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 67) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'balance35-' + acc.toString();
  m01.set('k36', acc % 997);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 80) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 164) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const rc39: Rec89 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const rc42: Rec89 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  for (let i43 = 0; i43 < 4; i43++) {
    acc = (acc + i43 * 13 + 654) % 100003;
  }
  const ix44: number = buf.indexOf('p89');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  buf += 'dock45-' + acc.toString();
  acc = acc + 292 - (acc % 79);
  const rc47: Rec89 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 17) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix50: number = buf.indexOf('p89');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1721) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  for (let i0 = 0; i0 < 10; i0++) {
    acc = (acc + i0 * 13 + 338) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  acc = acc + 64 - (acc % 77);
  acc = acc + 133 - (acc % 87);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 54) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  acc = acc + 699 - (acc % 60);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 118) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  acc = (acc * 31 + 4609) % 65521;
  buf += 'waybill10-' + acc.toString();
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (acc % 28 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  for (let i14 = 0; i14 < 6; i14++) {
    acc = (acc + i14 * 13 + 321) % 100003;
  }
  for (let i15 = 0; i15 < 7; i15++) {
    acc = (acc + i15 * 13 + 262) % 100003;
  }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 147) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (acc % 21 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const rc21: Rec89 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += 'quota24-' + acc.toString();
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  buf += 'refund26-' + acc.toString();
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  acc = acc + 175 - (acc % 90);
  if (acc % 8 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  for (let i33 = 0; i33 < 4; i33++) {
    acc = (acc + i33 * 13 + 869) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 73) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 36) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const rc39: Rec89 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const rc40: Rec89 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 36) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  buf += 'depot43-' + acc.toString();
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const rc45: Rec89 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  buf += 'bay46-' + acc.toString();
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  for (let i48 = 0; i48 < 4; i48++) {
    acc = (acc + i48 * 13 + 818) % 100003;
  }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1722) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  buf += `q3:${acc % 97}`;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 123) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = (acc * 31 + 3383) % 65521;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  buf += `q7:${acc % 97}`;
  acc = acc + 648 - (acc % 33);
  buf += 'rebate9-' + acc.toString();
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  const ix11: number = buf.indexOf('p89');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-14'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const ix15: number = buf.indexOf('p89');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 63) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'carrier18-' + acc.toString();
  const rc19: Rec89 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = acc + 215 - (acc % 63);
  acc = acc + 734 - (acc % 8);
  const rc23: Rec89 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  m01.set('k25', acc % 997);
  buf += 'invoice26-' + acc.toString();
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  m01.set('k30', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const ix32: number = buf.indexOf('p89');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 160) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  if (acc % 14 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  const rc39: Rec89 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  buf += 'region40-' + acc.toString();
  arr.push(acc % 1000);
  if (acc % 6 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5644) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1723) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9995) % 65521;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 198) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  acc = acc + 516 - (acc % 83);
  for (let i4 = 0; i4 < 8; i4++) {
    acc = (acc + i4 * 13 + 407) % 100003;
  }
  m01.set('k5', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  m01.set('k7', acc % 997);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 63) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  m01.set('k14', acc % 997);
  m01.set('k15', acc % 997);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 21) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p89');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-19'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 248 - (acc % 94);
  if (acc % 6 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  acc = acc + 148 - (acc % 75);
  const rc27: Rec89 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  acc = acc + 624 - (acc % 96);
  try { if (acc % 29 === 18) { throw new Error('synthetic-30'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const rc31: Rec89 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 167) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 10; i35++) {
    acc = (acc + i35 * 13 + 364) % 100003;
  }
  buf += `q36:${acc % 97}`;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-38'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += 'routeplan40-' + acc.toString();
  acc = (acc * 31 + 3154) % 65521;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  arr.push(acc % 1000);
  const rc45: Rec89 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const ix46: number = buf.indexOf('p89');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 85) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 100) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 55) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1724) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  acc = acc + 912 - (acc % 30);
  arr.push(acc % 1000);
  acc = acc + 612 - (acc % 47);
  acc = acc + 290 - (acc % 44);
  for (let i4 = 0; i4 < 10; i4++) {
    acc = (acc + i4 * 13 + 545) % 100003;
  }
  buf += 'dock5-' + acc.toString();
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  acc = (acc * 31 + 4893) % 65521;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  m01.set('k11', acc % 997);
  const ix12: number = buf.indexOf('p89');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const ix13: number = buf.indexOf('p89');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const rc14: Rec89 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  for (let i15 = 0; i15 < 12; i15++) {
    acc = (acc + i15 * 13 + 259) % 100003;
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 125) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = (acc * 31 + 550) % 65521;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  if (acc % 31 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  m01.set('k29', acc % 997);
  const ix30: number = buf.indexOf('p89');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const ix32: number = buf.indexOf('p89');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 159) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 118) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const ix37: number = buf.indexOf('p89');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  acc = acc + 708 - (acc % 43);
  for (let i39 = 0; i39 < 12; i39++) {
    acc = (acc + i39 * 13 + 923) % 100003;
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const rc44: Rec89 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  if (acc % 11 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  acc = acc + 577 - (acc % 60);
  const ix48: number = buf.indexOf('p89');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += 'batch49-' + acc.toString();
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const rc51: Rec89 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1725) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  arr.push(acc % 1000);
  buf += 'vendor1-' + acc.toString();
  const ix2: number = buf.indexOf('p89');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const ix5: number = buf.indexOf('p89');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5445) % 65521;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const rc8: Rec89 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = (acc * 31 + 1951) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  try { if (acc % 29 === 12) { throw new Error('synthetic-11'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q12:${acc % 97}`;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  arr.push(acc % 1000);
  for (let i15 = 0; i15 < 11; i15++) {
    acc = (acc + i15 * 13 + 804) % 100003;
  }
  for (let i16 = 0; i16 < 11; i16++) {
    acc = (acc + i16 * 13 + 976) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 68) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  m01.set('k21', acc % 997);
  const ix22: number = buf.indexOf('p89');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  buf += 'settle23-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  acc = (acc * 31 + 6323) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  for (let i29 = 0; i29 < 5; i29++) {
    acc = (acc + i29 * 13 + 847) % 100003;
  }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  buf += `q32:${acc % 97}`;
  acc = (acc * 31 + 4993) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 117) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 3653) % 65521;
  acc = (acc * 31 + 5247) % 65521;
  const rc37: Rec89 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2420) % 65521;
  const rc40: Rec89 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  buf += 'client41-' + acc.toString();
  arr.push(acc % 1000);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 192) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += `q45:${acc % 97}`;
  const rc46: Rec89 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1295) % 65521;
  buf += `q49:${acc % 97}`;
  m01.set('k50', acc % 997);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0089_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0089_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0089_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1726) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  if (acc % 27 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  buf += 'depot7-' + acc.toString();
  if (acc % 5 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-9'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  m01.set('k11', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 195) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += `q14:${acc % 97}`;
  acc = (acc * 31 + 4480) % 65521;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 64) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  arr.push(acc % 1000);
  m01.set('k22', acc % 997);
  const ix23: number = buf.indexOf('p89');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  buf += 'routeplan24-' + acc.toString();
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  buf += 'client26-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  buf += `q28:${acc % 97}`;
  for (let i29 = 0; i29 < 5; i29++) {
    acc = (acc + i29 * 13 + 432) % 100003;
  }
  const rc30: Rec89 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += 'sku31-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  acc = acc + 445 - (acc % 79);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 78) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 9197) % 65521;
  arr.push(acc % 1000);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 12) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  acc = acc + 149 - (acc % 59);
  acc = (acc * 31 + 7589) % 65521;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 64) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const ix42: number = buf.indexOf('p89');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  m01.set('k43', acc % 997);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const ix48: number = buf.indexOf('p89');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += `q49:${acc % 97}`;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1727) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  acc = (acc * 31 + 6604) % 65521;
  const ix2: number = buf.indexOf('p89');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 9019) % 65521;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  acc = (acc * 31 + 2354) % 65521;
  arr.push(acc % 1000);
  const ix8: number = buf.indexOf('p89');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const rc11: Rec89 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  acc = (acc * 31 + 8262) % 65521;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  acc = acc + 889 - (acc % 38);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 172) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 22) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  if (acc % 13 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  if (acc % 17 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 172) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += 'batch27-' + acc.toString();
  for (let i28 = 0; i28 < 5; i28++) {
    acc = (acc + i28 * 13 + 907) % 100003;
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const rc31: Rec89 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 76) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  for (let i36 = 0; i36 < 7; i36++) {
    acc = (acc + i36 * 13 + 498) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = acc + 736 - (acc % 54);
  arr.push(acc % 1000);
  const ix40: number = buf.indexOf('p89');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 138) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  m01.set('k45', acc % 997);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 87) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  arr.push(acc % 1000);
  acc = (acc * 31 + 4997) % 65521;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0089_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1728) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit89 = new Unit89(acc);
  const rc0: Rec89 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  try { if (acc % 29 === 20) { throw new Error('synthetic-1'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  const rc2: Rec89 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (acc % 31 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-6'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i7 = 0; i7 < 8; i7++) {
    acc = (acc + i7 * 13 + 325) % 100003;
  }
  const ix8: number = buf.indexOf('p89');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  if (acc % 16 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const rc10: Rec89 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  buf += 'ticket11-' + acc.toString();
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  try { if (acc % 29 === 3) { throw new Error('synthetic-14'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 108) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const rc19: Rec89 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  arr.push(acc % 1000);
  acc = acc + 691 - (acc % 64);
  acc = acc + 180 - (acc % 16);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  buf += 'batch26-' + acc.toString();
  buf += 'pallet27-' + acc.toString();
  acc = acc + 737 - (acc % 7);
  if (acc % 6 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  if (acc % 22 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  m01.set('k31', acc % 997);
  buf += 'payout32-' + acc.toString();
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 22) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 104) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const rc36: Rec89 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  m01.set('k37', acc % 997);
  for (let i38 = 0; i38 < 11; i38++) {
    acc = (acc + i38 * 13 + 877) % 100003;
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  if (acc % 14 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  m01.set('k41', acc % 997);
  if (acc % 17 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 74) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = (acc * 31 + 9586) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-48'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix50: number = buf.indexOf('p89');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  if (acc % 7 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0089(): BizFn[] {
  return [biz_0089_00, biz_0089_01, biz_0089_02, biz_0089_03, biz_0089_04, biz_0089_05, biz_0089_06, biz_0089_07, biz_0089_08, biz_0089_09, biz_0089_10, biz_0089_11, biz_0089_12, biz_0089_13, biz_0089_14, biz_0089_15, biz_0089_16, biz_0089_17, biz_0089_18, biz_0089_19, biz_0089_20, biz_0089_21, biz_0089_22, biz_0089_23, biz_0089_24, biz_0089_25, biz_0089_26, biz_0089_27, biz_0089_28, biz_0089_29, biz_0089_30, biz_0089_31, biz_0089_32, biz_0089_33, biz_0089_34, biz_0089_35, biz_0089_36, biz_0089_37, biz_0089_38, biz_0089_39, biz_0089_40, biz_0089_41, biz_0089_42];
}

export function rega_0089(): ABizFn[] {
  return [biz_0089_09a, biz_0089_19a, biz_0089_29a, biz_0089_39a];
}
