// Biz0058.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec58 { id: number; tag: string; score: number; }

class Unit58 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0058_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7598) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  const rc0: Rec58 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  if (acc % 27 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1263) % 65521;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += `q7:${acc % 97}`;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 105) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  buf += 'carrier11-' + acc.toString();
  try { if (acc % 29 === 7) { throw new Error('synthetic-12'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  for (let i15 = 0; i15 < 11; i15++) {
    acc = (acc + i15 * 13 + 237) % 100003;
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-16'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 41) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 5 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  m01.set('k24', acc % 997);
  const ix25: number = buf.indexOf('p58');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const ix28: number = buf.indexOf('p58');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-31'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const ix32: number = buf.indexOf('p58');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 36) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 89) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const ix36: number = buf.indexOf('p58');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 129) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-38'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q39:${acc % 97}`;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const ix42: number = buf.indexOf('p58');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = acc + 886 - (acc % 48);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  if (acc % 29 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += `q46:${acc % 97}`;
  const rc47: Rec58 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  if (acc % 11 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  if (acc % 5 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-51'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7599) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  acc = (acc * 31 + 8387) % 65521;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const ix3: number = buf.indexOf('p58');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  acc = (acc * 31 + 7755) % 65521;
  try { if (acc % 29 === 23) { throw new Error('synthetic-6'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3156) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += `q10:${acc % 97}`;
  m01.set('k11', acc % 997);
  buf += `q12:${acc % 97}`;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 118) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  m01.set('k15', acc % 997);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 65) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  buf += `q19:${acc % 97}`;
  buf += 'dock20-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-23'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k24', acc % 997);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 38) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += `q26:${acc % 97}`;
  try { if (acc % 29 === 16) { throw new Error('synthetic-27'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q28:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const rc30: Rec58 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  acc = acc + 279 - (acc % 53);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 82) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 84 - (acc % 73);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const ix37: number = buf.indexOf('p58');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  const ix41: number = buf.indexOf('p58');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  for (let i42 = 0; i42 < 6; i42++) {
    acc = (acc + i42 * 13 + 490) % 100003;
  }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 53) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const ix47: number = buf.indexOf('p58');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  m01.set('k48', acc % 997);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  for (let i51 = 0; i51 < 4; i51++) {
    acc = (acc + i51 * 13 + 866) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7600) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  arr.push(acc % 1000);
  m01.set('k1', acc % 997);
  arr.push(acc % 1000);
  acc = acc + 593 - (acc % 84);
  try { if (acc % 29 === 23) { throw new Error('synthetic-4'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  if (acc % 27 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-7'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  if (acc % 25 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  buf += `q10:${acc % 97}`;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 100) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-12'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const rc13: Rec58 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 192) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 13) { throw new Error('synthetic-18'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i19 = 0; i19 < 3; i19++) {
    acc = (acc + i19 * 13 + 72) % 100003;
  }
  const ix20: number = buf.indexOf('p58');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const ix21: number = buf.indexOf('p58');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-22'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 163) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  if (acc % 13 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  buf += 'shelf26-' + acc.toString();
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  m01.set('k29', acc % 997);
  for (let i30 = 0; i30 < 7; i30++) {
    acc = (acc + i30 * 13 + 435) % 100003;
  }
  const rc31: Rec58 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 124) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const ix36: number = buf.indexOf('p58');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-37'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k38', acc % 997);
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  if (acc % 26 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-48'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7601) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  if (acc % 14 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-1'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q2:${acc % 97}`;
  buf += `q3:${acc % 97}`;
  acc = (acc * 31 + 8620) % 65521;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += `q6:${acc % 97}`;
  arr.push(acc % 1000);
  acc = acc + 295 - (acc % 24);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 17) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  acc = (acc * 31 + 9153) % 65521;
  acc = (acc * 31 + 2950) % 65521;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 163) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 70) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  for (let i22 = 0; i22 < 10; i22++) {
    acc = (acc + i22 * 13 + 466) % 100003;
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  m01.set('k25', acc % 997);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 185) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  for (let i27 = 0; i27 < 10; i27++) {
    acc = (acc + i27 * 13 + 368) % 100003;
  }
  const ix28: number = buf.indexOf('p58');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  if (acc % 30 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 19) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 5865) % 65521;
  for (let i36 = 0; i36 < 9; i36++) {
    acc = (acc + i36 * 13 + 92) % 100003;
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  acc = acc + 889 - (acc % 71);
  acc = acc + 699 - (acc % 18);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  m01.set('k41', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  buf += `q44:${acc % 97}`;
  arr.push(acc % 1000);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  acc = (acc * 31 + 948) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const ix51: number = buf.indexOf('p58');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7602) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  try { if (acc % 29 === 22) { throw new Error('synthetic-0'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 208 - (acc % 15);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 79) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  if (acc % 9 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const rc4: Rec58 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  for (let i5 = 0; i5 < 9; i5++) {
    acc = (acc + i5 * 13 + 363) % 100003;
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 61) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const ix7: number = buf.indexOf('p58');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const ix8: number = buf.indexOf('p58');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 123) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  for (let i11 = 0; i11 < 9; i11++) {
    acc = (acc + i11 * 13 + 859) % 100003;
  }
  const ix12: number = buf.indexOf('p58');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = acc + 924 - (acc % 11);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 113) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 14 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  acc = acc + 196 - (acc % 62);
  for (let i20 = 0; i20 < 10; i20++) {
    acc = (acc + i20 * 13 + 532) % 100003;
  }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  const rc23: Rec58 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  m01.set('k25', acc % 997);
  if (acc % 9 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const ix28: number = buf.indexOf('p58');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  if (acc % 11 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3823) % 65521;
  acc = acc + 962 - (acc % 96);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 126) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 6799) % 65521;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  for (let i37 = 0; i37 < 12; i37++) {
    acc = (acc + i37 * 13 + 182) % 100003;
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  for (let i39 = 0; i39 < 5; i39++) {
    acc = (acc + i39 * 13 + 322) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  for (let i42 = 0; i42 < 9; i42++) {
    acc = (acc + i42 * 13 + 736) % 100003;
  }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  try { if (acc % 29 === 8) { throw new Error('synthetic-44'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const rc45: Rec58 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  try { if (acc % 29 === 5) { throw new Error('synthetic-46'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i47 = 0; i47 < 11; i47++) {
    acc = (acc + i47 * 13 + 220) % 100003;
  }
  arr.push(acc % 1000);
  const ix49: number = buf.indexOf('p58');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const rc51: Rec58 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7603) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const ix1: number = buf.indexOf('p58');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  m01.set('k4', acc % 997);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  for (let i7 = 0; i7 < 8; i7++) {
    acc = (acc + i7 * 13 + 72) % 100003;
  }
  if (acc % 20 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  if (acc % 17 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 6) { throw new Error('synthetic-11'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  acc = (acc * 31 + 2670) % 65521;
  m01.set('k15', acc % 997);
  acc = (acc * 31 + 6701) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 12) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  try { if (acc % 29 === 23) { throw new Error('synthetic-19'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'audit20-' + acc.toString();
  acc = (acc * 31 + 2223) % 65521;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  acc = acc + 15 - (acc % 10);
  buf += `q25:${acc % 97}`;
  acc = (acc * 31 + 7611) % 65521;
  buf += 'client27-' + acc.toString();
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2084) % 65521;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 157) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-31'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 9 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 35) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 145) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i36 = 0; i36 < 3; i36++) {
    acc = (acc + i36 * 13 + 481) % 100003;
  }
  const rc37: Rec58 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  for (let i38 = 0; i38 < 3; i38++) {
    acc = (acc + i38 * 13 + 673) % 100003;
  }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 80) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  m01.set('k41', acc % 997);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  m01.set('k43', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-45'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const ix47: number = buf.indexOf('p58');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  arr.push(acc % 1000);
  if (acc % 10 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7604) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  buf += 'depot0-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += 'ticket2-' + acc.toString();
  for (let i3 = 0; i3 < 7; i3++) {
    acc = (acc + i3 * 13 + 285) % 100003;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-4'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += 'crate6-' + acc.toString();
  acc = acc + 699 - (acc % 46);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const ix10: number = buf.indexOf('p58');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  buf += `q11:${acc % 97}`;
  if (acc % 13 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const ix14: number = buf.indexOf('p58');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  for (let i16 = 0; i16 < 7; i16++) {
    acc = (acc + i16 * 13 + 750) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 88) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 17) { throw new Error('synthetic-19'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const ix21: number = buf.indexOf('p58');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const ix23: number = buf.indexOf('p58');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  acc = acc + 475 - (acc % 70);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += 'dispatch27-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  if (acc % 26 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  for (let i30 = 0; i30 < 11; i30++) {
    acc = (acc + i30 * 13 + 875) % 100003;
  }
  for (let i31 = 0; i31 < 11; i31++) {
    acc = (acc + i31 * 13 + 287) % 100003;
  }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 47) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  const rc36: Rec58 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  acc = acc + 851 - (acc % 10);
  buf += 'portal38-' + acc.toString();
  acc = acc + 168 - (acc % 16);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  try { if (acc % 29 === 3) { throw new Error('synthetic-41'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  arr.push(acc % 1000);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 26) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  if (acc % 17 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  for (let i48 = 0; i48 < 8; i48++) {
    acc = (acc + i48 * 13 + 339) % 100003;
  }
  buf += 'tariff49-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-50'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const rc51: Rec58 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7605) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = acc + 720 - (acc % 70);
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-4'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = acc + 729 - (acc % 41);
  try { if (acc % 29 === 18) { throw new Error('synthetic-8'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 23 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  arr.push(acc % 1000);
  const rc12: Rec58 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const rc13: Rec58 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  arr.push(acc % 1000);
  for (let i16 = 0; i16 < 7; i16++) {
    acc = (acc + i16 * 13 + 441) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 123) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  buf += 'payout19-' + acc.toString();
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  buf += 'sku21-' + acc.toString();
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 179) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  m01.set('k25', acc % 997);
  for (let i26 = 0; i26 < 11; i26++) {
    acc = (acc + i26 * 13 + 896) % 100003;
  }
  acc = acc + 625 - (acc % 39);
  m01.set('k28', acc % 997);
  m01.set('k29', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  for (let i31 = 0; i31 < 10; i31++) {
    acc = (acc + i31 * 13 + 544) % 100003;
  }
  acc = (acc * 31 + 443) % 65521;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 186) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 3129) % 65521;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  buf += 'batch37-' + acc.toString();
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 23) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 149) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = acc + 414 - (acc % 53);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const rc44: Rec58 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const rc48: Rec58 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  buf += 'settle49-' + acc.toString();
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  buf += 'bay51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7606) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  if (acc % 9 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const ix5: number = buf.indexOf('p58');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 184) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const ix9: number = buf.indexOf('p58');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  m01.set('k10', acc % 997);
  acc = (acc * 31 + 6545) % 65521;
  arr.push(acc % 1000);
  m01.set('k13', acc % 997);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  m01.set('k15', acc % 997);
  buf += 'audit16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 114) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += `q19:${acc % 97}`;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 91) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  buf += `q21:${acc % 97}`;
  for (let i22 = 0; i22 < 11; i22++) {
    acc = (acc + i22 * 13 + 278) % 100003;
  }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 160) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const ix26: number = buf.indexOf('p58');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = acc + 636 - (acc % 38);
  const ix28: number = buf.indexOf('p58');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  if (acc % 14 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 78) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec58 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  if (acc % 19 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = acc + 801 - (acc % 77);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  buf += `q41:${acc % 97}`;
  if (acc % 9 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const rc44: Rec58 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  for (let i47 = 0; i47 < 9; i47++) {
    acc = (acc + i47 * 13 + 910) % 100003;
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-48'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i49 = 0; i49 < 7; i49++) {
    acc = (acc + i49 * 13 + 605) % 100003;
  }
  acc = acc + 836 - (acc % 71);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7607) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 84) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  for (let i2 = 0; i2 < 5; i2++) {
    acc = (acc + i2 * 13 + 102) % 100003;
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 36) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const rc7: Rec58 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  m01.set('k9', acc % 997);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  for (let i12 = 0; i12 < 6; i12++) {
    acc = (acc + i12 * 13 + 637) % 100003;
  }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-15'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4616) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 172) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 122) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const ix19: number = buf.indexOf('p58');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 107) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const ix21: number = buf.indexOf('p58');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  if (acc % 14 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  for (let i24 = 0; i24 < 12; i24++) {
    acc = (acc + i24 * 13 + 10) % 100003;
  }
  if (acc % 7 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 14) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 43) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const rc36: Rec58 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  if (acc % 12 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  acc = acc + 520 - (acc % 39);
  buf += 'balance43-' + acc.toString();
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 4) { throw new Error('synthetic-45'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const rc46: Rec58 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const ix47: number = buf.indexOf('p58');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const rc49: Rec58 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  m01.set('k50', acc % 997);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0058_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0058_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0058_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7608) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  buf += 'portal2-' + acc.toString();
  const rc3: Rec58 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  for (let i4 = 0; i4 < 6; i4++) {
    acc = (acc + i4 * 13 + 936) % 100003;
  }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const ix6: number = buf.indexOf('p58');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  acc = acc + 937 - (acc % 90);
  const ix8: number = buf.indexOf('p58');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  if (acc % 19 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8951) % 65521;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  acc = (acc * 31 + 6810) % 65521;
  acc = acc + 424 - (acc % 30);
  acc = acc + 788 - (acc % 75);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 140) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const ix20: number = buf.indexOf('p58');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-21'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 153 - (acc % 26);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-24'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 8 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2868) % 65521;
  buf += `q27:${acc % 97}`;
  acc = acc + 831 - (acc % 52);
  buf += 'parcel29-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  buf += `q31:${acc % 97}`;
  const rc32: Rec58 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const rc33: Rec58 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 154) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const ix36: number = buf.indexOf('p58');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  for (let i38 = 0; i38 < 7; i38++) {
    acc = (acc + i38 * 13 + 995) % 100003;
  }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  acc = (acc * 31 + 1574) % 65521;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  const rc45: Rec58 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  buf += `q48:${acc % 97}`;
  const rc49: Rec58 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  buf += 'customs50-' + acc.toString();
  buf += 'warehouse51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7609) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  buf += 'waybill0-' + acc.toString();
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 22) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  if (acc % 29 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  m01.set('k8', acc % 997);
  buf += 'order9-' + acc.toString();
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const rc11: Rec58 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  buf += `q12:${acc % 97}`;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  try { if (acc % 29 === 4) { throw new Error('synthetic-14'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 125) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  arr.push(acc % 1000);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  for (let i21 = 0; i21 < 9; i21++) {
    acc = (acc + i21 * 13 + 654) % 100003;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-22'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const rc24: Rec58 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  buf += 'crate25-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const ix27: number = buf.indexOf('p58');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  buf += 'audit30-' + acc.toString();
  const rc31: Rec58 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  acc = acc + 488 - (acc % 7);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 59) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  acc = (acc * 31 + 958) % 65521;
  acc = acc + 24 - (acc % 35);
  buf += `q39:${acc % 97}`;
  const rc40: Rec58 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const rc42: Rec58 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  for (let i43 = 0; i43 < 3; i43++) {
    acc = (acc + i43 * 13 + 157) % 100003;
  }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  buf += `q45:${acc % 97}`;
  acc = (acc * 31 + 3918) % 65521;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  m01.set('k48', acc % 997);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  m01.set('k50', acc % 997);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7610) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  m01.set('k0', acc % 997);
  arr.push(acc % 1000);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  acc = acc + 939 - (acc % 46);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const rc5: Rec58 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  for (let i6 = 0; i6 < 6; i6++) {
    acc = (acc + i6 * 13 + 893) % 100003;
  }
  const ix7: number = buf.indexOf('p58');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const rc8: Rec58 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const ix9: number = buf.indexOf('p58');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2443) % 65521;
  for (let i11 = 0; i11 < 4; i11++) {
    acc = (acc + i11 * 13 + 857) % 100003;
  }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  arr.push(acc % 1000);
  if (acc % 10 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += 'balance15-' + acc.toString();
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 120) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p58');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  if (acc % 25 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-20'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  if (acc % 24 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  buf += `q23:${acc % 97}`;
  acc = (acc * 31 + 3635) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-25'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'warehouse26-' + acc.toString();
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2232) % 65521;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  buf += 'dispatch31-' + acc.toString();
  acc = acc + 166 - (acc % 16);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 149) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  try { if (acc % 29 === 7) { throw new Error('synthetic-36'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i37 = 0; i37 < 10; i37++) {
    acc = (acc + i37 * 13 + 991) % 100003;
  }
  acc = acc + 68 - (acc % 18);
  acc = acc + 979 - (acc % 92);
  acc = (acc * 31 + 9446) % 65521;
  m01.set('k41', acc % 997);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 108) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const ix44: number = buf.indexOf('p58');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 113) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  m01.set('k46', acc % 997);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4818) % 65521;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7611) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  for (let i0 = 0; i0 < 3; i0++) {
    acc = (acc + i0 * 13 + 236) % 100003;
  }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const rc2: Rec58 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const rc3: Rec58 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  acc = (acc * 31 + 3058) % 65521;
  const ix5: number = buf.indexOf('p58');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  const rc7: Rec58 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  acc = acc + 497 - (acc % 84);
  for (let i9 = 0; i9 < 12; i9++) {
    acc = (acc + i9 * 13 + 141) % 100003;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-10'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 128) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const rc15: Rec58 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  acc = (acc * 31 + 4376) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 119) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 6563) % 65521;
  if (acc % 14 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  buf += 'balance23-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  acc = acc + 954 - (acc % 74);
  try { if (acc % 29 === 4) { throw new Error('synthetic-29'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-30'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 156) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 180) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  for (let i40 = 0; i40 < 4; i40++) {
    acc = (acc + i40 * 13 + 96) % 100003;
  }
  const ix41: number = buf.indexOf('p58');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  buf += `q42:${acc % 97}`;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const rc44: Rec58 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 30) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += 'balance49-' + acc.toString();
  const ix50: number = buf.indexOf('p58');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  buf += 'routeplan51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7612) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 154) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-1'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  try { if (acc % 29 === 13) { throw new Error('synthetic-3'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += 'crate7-' + acc.toString();
  buf += `q8:${acc % 97}`;
  buf += 'coupon9-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = acc + 234 - (acc % 15);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  for (let i15 = 0; i15 < 10; i15++) {
    acc = (acc + i15 * 13 + 525) % 100003;
  }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 59) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  buf += 'rebate19-' + acc.toString();
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 103) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  acc = acc + 488 - (acc % 49);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const rc23: Rec58 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 12) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 99) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  for (let i28 = 0; i28 < 8; i28++) {
    acc = (acc + i28 * 13 + 585) % 100003;
  }
  buf += 'settle29-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  const rc33: Rec58 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 12) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  buf += `q37:${acc % 97}`;
  m01.set('k38', acc % 997);
  for (let i39 = 0; i39 < 11; i39++) {
    acc = (acc + i39 * 13 + 382) % 100003;
  }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const rc41: Rec58 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  m01.set('k42', acc % 997);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 81) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = acc + 479 - (acc % 66);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 72) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const ix49: number = buf.indexOf('p58');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const ix50: number = buf.indexOf('p58');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7613) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  acc = (acc * 31 + 5343) % 65521;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  try { if (acc % 29 === 9) { throw new Error('synthetic-2'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'client3-' + acc.toString();
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  acc = (acc * 31 + 2791) % 65521;
  const rc6: Rec58 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  m01.set('k8', acc % 997);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 17) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  for (let i10 = 0; i10 < 11; i10++) {
    acc = (acc + i10 * 13 + 636) % 100003;
  }
  acc = (acc * 31 + 8374) % 65521;
  buf += 'order12-' + acc.toString();
  const ix13: number = buf.indexOf('p58');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  m01.set('k15', acc % 997);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 146) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 19) { throw new Error('synthetic-19'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const ix22: number = buf.indexOf('p58');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const rc25: Rec58 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  for (let i26 = 0; i26 < 5; i26++) {
    acc = (acc + i26 * 13 + 753) % 100003;
  }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  buf += 'portal28-' + acc.toString();
  for (let i29 = 0; i29 < 3; i29++) {
    acc = (acc + i29 * 13 + 435) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  m01.set('k31', acc % 997);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  acc = acc + 565 - (acc % 57);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 122) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  if (acc % 22 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += `q37:${acc % 97}`;
  buf += `q38:${acc % 97}`;
  arr.push(acc % 1000);
  if (acc % 15 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  buf += 'warehouse43-' + acc.toString();
  m01.set('k44', acc % 997);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  if (acc % 12 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  acc = acc + 673 - (acc % 12);
  acc = (acc * 31 + 1739) % 65521;
  buf += `q49:${acc % 97}`;
  buf += `q50:${acc % 97}`;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7614) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  arr.push(acc % 1000);
  m01.set('k1', acc % 997);
  if (acc % 20 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const ix3: number = buf.indexOf('p58');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  buf += 'shelf4-' + acc.toString();
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  for (let i6 = 0; i6 < 8; i6++) {
    acc = (acc + i6 * 13 + 564) % 100003;
  }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 79) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const rc8: Rec58 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  if (acc % 10 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  acc = acc + 784 - (acc % 24);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  if (acc % 12 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 16) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  m01.set('k19', acc % 997);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  if (acc % 23 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = acc + 109 - (acc % 82);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += `q29:${acc % 97}`;
  arr.push(acc % 1000);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  buf += 'portal32-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 149) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += 'stocktake36-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  try { if (acc % 29 === 3) { throw new Error('synthetic-38'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'region39-' + acc.toString();
  for (let i40 = 0; i40 < 7; i40++) {
    acc = (acc + i40 * 13 + 705) % 100003;
  }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const ix42: number = buf.indexOf('p58');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const ix45: number = buf.indexOf('p58');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const ix46: number = buf.indexOf('p58');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 88) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  m01.set('k48', acc % 997);
  buf += `q49:${acc % 97}`;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  acc = (acc * 31 + 964) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7615) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  for (let i1 = 0; i1 < 11; i1++) {
    acc = (acc + i1 * 13 + 547) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = acc + 640 - (acc % 18);
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  m01.set('k5', acc % 997);
  acc = acc + 229 - (acc % 70);
  buf += `q7:${acc % 97}`;
  buf += 'coupon8-' + acc.toString();
  acc = acc + 902 - (acc % 91);
  acc = acc + 122 - (acc % 47);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  try { if (acc % 29 === 4) { throw new Error('synthetic-12'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 99) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  for (let i15 = 0; i15 < 8; i15++) {
    acc = (acc + i15 * 13 + 305) % 100003;
  }
  const rc16: Rec58 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 155) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 12) { throw new Error('synthetic-20'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k21', acc % 997);
  const rc22: Rec58 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  m01.set('k24', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 38) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  acc = (acc * 31 + 5914) % 65521;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const rc32: Rec58 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const rc33: Rec58 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 71) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec58 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 56) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  if (acc % 24 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  buf += 'pallet40-' + acc.toString();
  for (let i41 = 0; i41 < 11; i41++) {
    acc = (acc + i41 * 13 + 727) % 100003;
  }
  m01.set('k42', acc % 997);
  arr.push(acc % 1000);
  acc = (acc * 31 + 3317) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += `q47:${acc % 97}`;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  for (let i49 = 0; i49 < 6; i49++) {
    acc = (acc + i49 * 13 + 555) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7616) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  try { if (acc % 29 === 12) { throw new Error('synthetic-0'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 464) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-2'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 174) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const ix4: number = buf.indexOf('p58');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 166) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3803) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  for (let i11 = 0; i11 < 12; i11++) {
    acc = (acc + i11 * 13 + 644) % 100003;
  }
  buf += `q12:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6803) % 65521;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 30) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 102) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const rc22: Rec58 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  buf += `q23:${acc % 97}`;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  try { if (acc % 29 === 16) { throw new Error('synthetic-25'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 10 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const rc28: Rec58 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const ix29: number = buf.indexOf('p58');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 140) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const ix31: number = buf.indexOf('p58');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  if (acc % 15 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 14) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 101 - (acc % 17);
  try { if (acc % 29 === 16) { throw new Error('synthetic-36'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 37) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  acc = (acc * 31 + 3536) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-39'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7930) % 65521;
  arr.push(acc % 1000);
  for (let i42 = 0; i42 < 11; i42++) {
    acc = (acc + i42 * 13 + 598) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  for (let i44 = 0; i44 < 9; i44++) {
    acc = (acc + i44 * 13 + 875) % 100003;
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-45'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const ix47: number = buf.indexOf('p58');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += `q49:${acc % 97}`;
  const ix50: number = buf.indexOf('p58');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  acc = acc + 937 - (acc % 92);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7617) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  const rc0: Rec58 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const ix1: number = buf.indexOf('p58');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k4', acc % 997);
  buf += 'waybill5-' + acc.toString();
  m01.set('k6', acc % 997);
  buf += 'freight7-' + acc.toString();
  arr.push(acc % 1000);
  for (let i9 = 0; i9 < 9; i9++) {
    acc = (acc + i9 * 13 + 71) % 100003;
  }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  m01.set('k11', acc % 997);
  if (acc % 21 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  for (let i13 = 0; i13 < 7; i13++) {
    acc = (acc + i13 * 13 + 318) % 100003;
  }
  acc = acc + 532 - (acc % 31);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 85) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  acc = acc + 840 - (acc % 72);
  try { if (acc % 29 === 11) { throw new Error('synthetic-20'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  acc = acc + 34 - (acc % 58);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const ix24: number = buf.indexOf('p58');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 22) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  acc = (acc * 31 + 1323) % 65521;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const ix31: number = buf.indexOf('p58');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4245) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 32) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec58 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  if (acc % 6 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1109) % 65521;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  acc = acc + 126 - (acc % 64);
  arr.push(acc % 1000);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 73) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const ix42: number = buf.indexOf('p58');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 23) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  buf += 'balance44-' + acc.toString();
  const ix45: number = buf.indexOf('p58');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  acc = acc + 418 - (acc % 57);
  acc = acc + 378 - (acc % 63);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 115) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0058_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0058_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0058_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7618) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  acc = (acc * 31 + 9988) % 65521;
  const rc1: Rec58 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  acc = (acc * 31 + 4397) % 65521;
  buf += 'carrier3-' + acc.toString();
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  m01.set('k6', acc % 997);
  buf += `q7:${acc % 97}`;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 134) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const rc13: Rec58 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  buf += `q14:${acc % 97}`;
  m01.set('k15', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 163) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'vendor18-' + acc.toString();
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const ix20: number = buf.indexOf('p58');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const rc21: Rec58 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  buf += `q22:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 81) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 15) { throw new Error('synthetic-27'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 19 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  buf += 'carrier29-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  acc = acc + 713 - (acc % 80);
  const rc32: Rec58 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  try { if (acc % 29 === 16) { throw new Error('synthetic-33'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 105) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  acc = acc + 359 - (acc % 27);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  try { if (acc % 29 === 16) { throw new Error('synthetic-39'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 136) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += `q44:${acc % 97}`;
  try { if (acc % 29 === 12) { throw new Error('synthetic-45'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  for (let i47 = 0; i47 < 11; i47++) {
    acc = (acc + i47 * 13 + 183) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 39) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const rc51: Rec58 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7619) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  buf += `q0:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  arr.push(acc % 1000);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += 'dock4-' + acc.toString();
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 112) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  for (let i6 = 0; i6 < 8; i6++) {
    acc = (acc + i6 * 13 + 922) % 100003;
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  if (acc % 23 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-9'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  for (let i11 = 0; i11 < 4; i11++) {
    acc = (acc + i11 * 13 + 654) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  m01.set('k13', acc % 997);
  const rc14: Rec58 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  try { if (acc % 29 === 22) { throw new Error('synthetic-15'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i16 = 0; i16 < 12; i16++) {
    acc = (acc + i16 * 13 + 476) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 94) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 7194) % 65521;
  buf += `q19:${acc % 97}`;
  buf += 'warehouse20-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = acc + 553 - (acc % 85);
  buf += 'shelf23-' + acc.toString();
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  buf += `q25:${acc % 97}`;
  for (let i26 = 0; i26 < 4; i26++) {
    acc = (acc + i26 * 13 + 517) % 100003;
  }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const rc28: Rec58 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  buf += 'warehouse29-' + acc.toString();
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  buf += `q31:${acc % 97}`;
  m01.set('k32', acc % 997);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 120) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 150) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const rc36: Rec58 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  arr.push(acc % 1000);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  buf += 'balance39-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  for (let i41 = 0; i41 < 3; i41++) {
    acc = (acc + i41 * 13 + 102) % 100003;
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const rc43: Rec58 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += 'policy45-' + acc.toString();
  buf += 'pickup46-' + acc.toString();
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  try { if (acc % 29 === 22) { throw new Error('synthetic-49'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  for (let i51 = 0; i51 < 9; i51++) {
    acc = (acc + i51 * 13 + 984) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7620) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  if (acc % 23 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  for (let i1 = 0; i1 < 12; i1++) {
    acc = (acc + i1 * 13 + 37) % 100003;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-2'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 831 - (acc % 19);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 76) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const rc5: Rec58 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += 'routeplan6-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 147) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  m01.set('k10', acc % 997);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  buf += 'coupon12-' + acc.toString();
  const rc13: Rec58 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  m01.set('k14', acc % 997);
  if (acc % 27 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 93) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 125) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const ix19: number = buf.indexOf('p58');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const rc21: Rec58 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  try { if (acc % 29 === 12) { throw new Error('synthetic-22'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += `q24:${acc % 97}`;
  buf += `q25:${acc % 97}`;
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += `q27:${acc % 97}`;
  const rc28: Rec58 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = acc + 935 - (acc % 27);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const ix32: number = buf.indexOf('p58');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 66) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 52) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  for (let i37 = 0; i37 < 12; i37++) {
    acc = (acc + i37 * 13 + 916) % 100003;
  }
  buf += `q38:${acc % 97}`;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  buf += 'tariff40-' + acc.toString();
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  buf += 'client42-' + acc.toString();
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  buf += `q44:${acc % 97}`;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 90) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  if (acc % 11 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  for (let i47 = 0; i47 < 5; i47++) {
    acc = (acc + i47 * 13 + 532) % 100003;
  }
  acc = acc + 688 - (acc % 53);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  acc = acc + 929 - (acc % 87);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7621) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  try { if (acc % 29 === 9) { throw new Error('synthetic-0'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-1'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  m01.set('k5', acc % 997);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 164) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const rc9: Rec58 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  arr.push(acc % 1000);
  const ix11: number = buf.indexOf('p58');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const ix13: number = buf.indexOf('p58');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += 'journey15-' + acc.toString();
  try { if (acc % 29 === 19) { throw new Error('synthetic-16'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 104) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec58 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  buf += `q19:${acc % 97}`;
  buf += 'quota20-' + acc.toString();
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  for (let i22 = 0; i22 < 5; i22++) {
    acc = (acc + i22 * 13 + 618) % 100003;
  }
  const ix23: number = buf.indexOf('p58');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const rc24: Rec58 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  m01.set('k25', acc % 997);
  buf += `q26:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const ix28: number = buf.indexOf('p58');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  for (let i29 = 0; i29 < 9; i29++) {
    acc = (acc + i29 * 13 + 414) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 76) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const ix37: number = buf.indexOf('p58');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = acc + 155 - (acc % 18);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const rc42: Rec58 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const ix43: number = buf.indexOf('p58');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += 'journey45-' + acc.toString();
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  acc = acc + 168 - (acc % 92);
  for (let i48 = 0; i48 < 9; i48++) {
    acc = (acc + i48 * 13 + 107) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7622) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  const ix0: number = buf.indexOf('p58');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  buf += 'depot1-' + acc.toString();
  acc = acc + 900 - (acc % 30);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (acc % 29 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const rc10: Rec58 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = (acc * 31 + 2124) % 65521;
  m01.set('k12', acc % 997);
  acc = acc + 688 - (acc % 60);
  const rc14: Rec58 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += `q15:${acc % 97}`;
  for (let i16 = 0; i16 < 6; i16++) {
    acc = (acc + i16 * 13 + 632) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  for (let i21 = 0; i21 < 7; i21++) {
    acc = (acc + i21 * 13 + 564) % 100003;
  }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 150) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 18) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  acc = (acc * 31 + 1751) % 65521;
  const ix25: number = buf.indexOf('p58');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += `q27:${acc % 97}`;
  acc = acc + 395 - (acc % 65);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  if (acc % 27 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 193) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  try { if (acc % 29 === 23) { throw new Error('synthetic-36'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'sku37-' + acc.toString();
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  buf += 'portal39-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  buf += 'refund41-' + acc.toString();
  buf += `q42:${acc % 97}`;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  m01.set('k44', acc % 997);
  const rc45: Rec58 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const ix46: number = buf.indexOf('p58');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 6477) % 65521;
  m01.set('k48', acc % 997);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const ix51: number = buf.indexOf('p58');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7623) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  buf += 'shelf0-' + acc.toString();
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 58) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  acc = (acc * 31 + 9972) % 65521;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  buf += 'invoice7-' + acc.toString();
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  buf += 'rebate10-' + acc.toString();
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  acc = acc + 755 - (acc % 13);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  if (acc % 23 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 157) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const ix19: number = buf.indexOf('p58');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 18) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  if (acc % 27 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  buf += `q24:${acc % 97}`;
  arr.push(acc % 1000);
  m01.set('k26', acc % 997);
  try { if (acc % 29 === 13) { throw new Error('synthetic-27'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q28:${acc % 97}`;
  acc = acc + 710 - (acc % 15);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 143) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 179) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-36'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 168) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  if (acc % 15 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const rc40: Rec58 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  acc = acc + 537 - (acc % 54);
  if (acc % 22 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  buf += `q45:${acc % 97}`;
  acc = acc + 420 - (acc % 11);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  m01.set('k48', acc % 997);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7624) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  arr.push(acc % 1000);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += `q7:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  m01.set('k10', acc % 997);
  acc = (acc * 31 + 363) % 65521;
  if (acc % 5 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const ix14: number = buf.indexOf('p58');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  for (let i15 = 0; i15 < 4; i15++) {
    acc = (acc + i15 * 13 + 223) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 31) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  buf += 'balance19-' + acc.toString();
  const rc20: Rec58 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = acc + 989 - (acc % 80);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  try { if (acc % 29 === 23) { throw new Error('synthetic-23'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2154) % 65521;
  arr.push(acc % 1000);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  const ix30: number = buf.indexOf('p58');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const rc32: Rec58 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 136) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec58 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const ix37: number = buf.indexOf('p58');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const rc38: Rec58 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  buf += `q42:${acc % 97}`;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  acc = (acc * 31 + 201) % 65521;
  const ix45: number = buf.indexOf('p58');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  acc = acc + 736 - (acc % 39);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 8) { throw new Error('synthetic-50'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'rebate51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7625) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  for (let i0 = 0; i0 < 5; i0++) {
    acc = (acc + i0 * 13 + 750) % 100003;
  }
  for (let i1 = 0; i1 < 8; i1++) {
    acc = (acc + i1 * 13 + 386) % 100003;
  }
  buf += 'dock2-' + acc.toString();
  acc = (acc * 31 + 7246) % 65521;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = (acc * 31 + 9863) % 65521;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  if (acc % 8 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const ix12: number = buf.indexOf('p58');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  buf += 'dock16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 44) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  buf += `q19:${acc % 97}`;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  buf += `q21:${acc % 97}`;
  acc = (acc * 31 + 1224) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  for (let i25 = 0; i25 < 4; i25++) {
    acc = (acc + i25 * 13 + 284) % 100003;
  }
  acc = (acc * 31 + 6779) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 11; break;
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
  cf32.push((x: number): number => (x + 78) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  try { if (acc % 29 === 23) { throw new Error('synthetic-33'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 58) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'vendor36-' + acc.toString();
  for (let i37 = 0; i37 < 5; i37++) {
    acc = (acc + i37 * 13 + 638) % 100003;
  }
  buf += 'tariff38-' + acc.toString();
  if (acc % 5 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8200) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  try { if (acc % 29 === 15) { throw new Error('synthetic-43'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 326) % 65521;
  buf += 'parcel45-' + acc.toString();
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  for (let i47 = 0; i47 < 10; i47++) {
    acc = (acc + i47 * 13 + 512) % 100003;
  }
  m01.set('k48', acc % 997);
  if (acc % 23 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-50'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 196) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7626) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 93) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  const ix1: number = buf.indexOf('p58');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2031) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8350) % 65521;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 162) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  acc = (acc * 31 + 452) % 65521;
  for (let i11 = 0; i11 < 6; i11++) {
    acc = (acc + i11 * 13 + 903) % 100003;
  }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  buf += `q13:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 58) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const rc19: Rec58 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 43) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-21'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q22:${acc % 97}`;
  acc = acc + 19 - (acc % 18);
  buf += `q24:${acc % 97}`;
  acc = acc + 159 - (acc % 38);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  if (acc % 7 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = (acc * 31 + 4265) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  buf += `q30:${acc % 97}`;
  try { if (acc % 29 === 18) { throw new Error('synthetic-31'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 60) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  try { if (acc % 29 === 6) { throw new Error('synthetic-33'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 144) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 639 - (acc % 54);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const ix37: number = buf.indexOf('p58');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 103) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  buf += `q40:${acc % 97}`;
  buf += 'stocktake41-' + acc.toString();
  acc = (acc * 31 + 648) % 65521;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  const ix44: number = buf.indexOf('p58');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const rc47: Rec58 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += 'routeplan48-' + acc.toString();
  if (acc % 7 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  for (let i50 = 0; i50 < 7; i50++) {
    acc = (acc + i50 * 13 + 194) % 100003;
  }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7627) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 177) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  for (let i2 = 0; i2 < 9; i2++) {
    acc = (acc + i2 * 13 + 771) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  try { if (acc % 29 === 13) { throw new Error('synthetic-6'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 122) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-8'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  arr.push(acc % 1000);
  buf += 'tariff11-' + acc.toString();
  acc = (acc * 31 + 2684) % 65521;
  if (acc % 24 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-15'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 105) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'transit18-' + acc.toString();
  buf += 'client19-' + acc.toString();
  try { if (acc % 29 === 21) { throw new Error('synthetic-20'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 23 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const rc23: Rec58 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += 'sku27-' + acc.toString();
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  for (let i29 = 0; i29 < 12; i29++) {
    acc = (acc + i29 * 13 + 850) % 100003;
  }
  buf += 'transit30-' + acc.toString();
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  acc = acc + 892 - (acc % 40);
  buf += 'order33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 151) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p58');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  buf += `q43:${acc % 97}`;
  const ix44: number = buf.indexOf('p58');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 166) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const rc46: Rec58 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const ix47: number = buf.indexOf('p58');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5734) % 65521;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  try { if (acc % 29 === 21) { throw new Error('synthetic-50'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0058_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0058_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0058_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7628) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  acc = acc + 142 - (acc % 21);
  acc = (acc * 31 + 5964) % 65521;
  const ix2: number = buf.indexOf('p58');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3377) % 65521;
  const rc4: Rec58 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  try { if (acc % 29 === 21) { throw new Error('synthetic-5'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  for (let i11 = 0; i11 < 3; i11++) {
    acc = (acc + i11 * 13 + 436) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q13:${acc % 97}`;
  const rc14: Rec58 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  acc = (acc * 31 + 9094) % 65521;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 42) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (acc % 17 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  for (let i22 = 0; i22 < 9; i22++) {
    acc = (acc + i22 * 13 + 577) % 100003;
  }
  buf += 'carrier23-' + acc.toString();
  arr.push(acc % 1000);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const rc26: Rec58 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  buf += 'payout28-' + acc.toString();
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6666) % 65521;
  const rc32: Rec58 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const rc33: Rec58 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 191) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k36', acc % 997);
  try { if (acc % 29 === 5) { throw new Error('synthetic-37'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 72) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const rc41: Rec58 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  acc = acc + 680 - (acc % 29);
  try { if (acc % 29 === 13) { throw new Error('synthetic-43'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 955 - (acc % 34);
  try { if (acc % 29 === 22) { throw new Error('synthetic-45'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-46'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'waybill47-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  for (let i49 = 0; i49 < 9; i49++) {
    acc = (acc + i49 * 13 + 709) % 100003;
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-50'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7629) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  m01.set('k0', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const rc2: Rec58 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const rc4: Rec58 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  try { if (acc % 29 === 5) { throw new Error('synthetic-5'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 27 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  if (acc % 21 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 57) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i13 = 0; i13 < 12; i13++) {
    acc = (acc + i13 * 13 + 292) % 100003;
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  m01.set('k15', acc % 997);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 104) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 62) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 13) { throw new Error('synthetic-19'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 10) { throw new Error('synthetic-21'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 347 - (acc % 32);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  try { if (acc % 29 === 19) { throw new Error('synthetic-24'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  arr.push(acc % 1000);
  buf += 'region28-' + acc.toString();
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  arr.push(acc % 1000);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 176) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 22) { throw new Error('synthetic-35'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 114) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  for (let i38 = 0; i38 < 3; i38++) {
    acc = (acc + i38 * 13 + 629) % 100003;
  }
  if (acc % 24 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  if (acc % 21 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const ix41: number = buf.indexOf('p58');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  if (acc % 29 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  buf += 'audit47-' + acc.toString();
  if (acc % 21 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 120) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  try { if (acc % 29 === 17) { throw new Error('synthetic-51'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7630) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  for (let i0 = 0; i0 < 6; i0++) {
    acc = (acc + i0 * 13 + 520) % 100003;
  }
  acc = acc + 642 - (acc % 24);
  buf += 'order2-' + acc.toString();
  acc = (acc * 31 + 9986) % 65521;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 156) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += `q5:${acc % 97}`;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  buf += 'depot9-' + acc.toString();
  acc = acc + 732 - (acc % 85);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const ix12: number = buf.indexOf('p58');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  for (let i13 = 0; i13 < 8; i13++) {
    acc = (acc + i13 * 13 + 438) % 100003;
  }
  arr.push(acc % 1000);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 26) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 6; i18++) {
    acc = (acc + i18 * 13 + 159) % 100003;
  }
  buf += `q19:${acc % 97}`;
  m01.set('k20', acc % 997);
  arr.push(acc % 1000);
  acc = (acc * 31 + 4716) % 65521;
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 70) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  if (acc % 6 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  buf += 'policy26-' + acc.toString();
  m01.set('k27', acc % 997);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  m01.set('k29', acc % 997);
  buf += `q30:${acc % 97}`;
  if (acc % 31 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 152) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  m01.set('k36', acc % 997);
  const rc37: Rec58 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  buf += 'ledger38-' + acc.toString();
  buf += `q39:${acc % 97}`;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  m01.set('k41', acc % 997);
  buf += `q42:${acc % 97}`;
  const ix43: number = buf.indexOf('p58');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-44'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  buf += `q47:${acc % 97}`;
  acc = (acc * 31 + 8944) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  acc = (acc * 31 + 1438) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7631) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 141) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  try { if (acc % 29 === 6) { throw new Error('synthetic-2'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 123) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  try { if (acc % 29 === 19) { throw new Error('synthetic-4'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 713 - (acc % 43);
  arr.push(acc % 1000);
  acc = acc + 768 - (acc % 58);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  try { if (acc % 29 === 23) { throw new Error('synthetic-9'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6279) % 65521;
  arr.push(acc % 1000);
  buf += `q12:${acc % 97}`;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-15'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 173) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += 'journey19-' + acc.toString();
  if (acc % 12 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const ix21: number = buf.indexOf('p58');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const ix22: number = buf.indexOf('p58');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  for (let i25 = 0; i25 < 7; i25++) {
    acc = (acc + i25 * 13 + 309) % 100003;
  }
  const ix26: number = buf.indexOf('p58');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 180) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  acc = acc + 819 - (acc % 82);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 196) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += 'coupon33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 28) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  buf += 'crate38-' + acc.toString();
  const rc39: Rec58 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const ix40: number = buf.indexOf('p58');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  try { if (acc % 29 === 10) { throw new Error('synthetic-42'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'waybill43-' + acc.toString();
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  arr.push(acc % 1000);
  try { if (acc % 29 === 2) { throw new Error('synthetic-48'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7632) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  acc = (acc * 31 + 6945) % 65521;
  acc = (acc * 31 + 2255) % 65521;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  m01.set('k4', acc % 997);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  buf += `q6:${acc % 97}`;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  buf += 'dock8-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 155) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  acc = acc + 217 - (acc % 58);
  const rc12: Rec58 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += `q13:${acc % 97}`;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 116) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 108) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'portal18-' + acc.toString();
  for (let i19 = 0; i19 < 6; i19++) {
    acc = (acc + i19 * 13 + 234) % 100003;
  }
  for (let i20 = 0; i20 < 5; i20++) {
    acc = (acc + i20 * 13 + 841) % 100003;
  }
  acc = acc + 87 - (acc % 77);
  buf += `q22:${acc % 97}`;
  m01.set('k23', acc % 997);
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  acc = acc + 766 - (acc % 37);
  const rc27: Rec58 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  buf += 'pickup28-' + acc.toString();
  buf += 'sku29-' + acc.toString();
  arr.push(acc % 1000);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 64) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p58');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += `q39:${acc % 97}`;
  if (acc % 22 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 195) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  buf += `q48:${acc % 97}`;
  try { if (acc % 29 === 16) { throw new Error('synthetic-49'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6791) % 65521;
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7633) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const ix6: number = buf.indexOf('p58');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const rc9: Rec58 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += 'pickup10-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += 'routeplan13-' + acc.toString();
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const rc16: Rec58 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 35) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += `q20:${acc % 97}`;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  if (acc % 6 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  m01.set('k23', acc % 997);
  try { if (acc % 29 === 16) { throw new Error('synthetic-24'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q25:${acc % 97}`;
  acc = (acc * 31 + 123) % 65521;
  if (acc % 5 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  m01.set('k29', acc % 997);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  acc = acc + 339 - (acc % 43);
  buf += 'pallet32-' + acc.toString();
  acc = (acc * 31 + 7875) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 109) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-35'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  acc = acc + 639 - (acc % 62);
  buf += 'carrier42-' + acc.toString();
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 178) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  try { if (acc % 29 === 23) { throw new Error('synthetic-44'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  for (let i47 = 0; i47 < 6; i47++) {
    acc = (acc + i47 * 13 + 633) % 100003;
  }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  acc = acc + 501 - (acc % 20);
  for (let i50 = 0; i50 < 3; i50++) {
    acc = (acc + i50 * 13 + 328) % 100003;
  }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7634) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  if (acc % 26 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  buf += 'settle3-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  if (acc % 20 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  buf += 'ticket9-' + acc.toString();
  const ix10: number = buf.indexOf('p58');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 54) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const rc12: Rec58 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  buf += 'pallet14-' + acc.toString();
  acc = acc + 887 - (acc % 80);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 130) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 7) { throw new Error('synthetic-18'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 19 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  buf += `q20:${acc % 97}`;
  const rc21: Rec58 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  acc = (acc * 31 + 6946) % 65521;
  if (acc % 6 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  for (let i25 = 0; i25 < 11; i25++) {
    acc = (acc + i25 * 13 + 749) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  for (let i27 = 0; i27 < 12; i27++) {
    acc = (acc + i27 * 13 + 799) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const ix32: number = buf.indexOf('p58');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const rc33: Rec58 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 150) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  acc = (acc * 31 + 4530) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 16) { throw new Error('synthetic-38'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-40'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  acc = (acc * 31 + 2264) % 65521;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  acc = (acc * 31 + 381) % 65521;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const ix50: number = buf.indexOf('p58');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7635) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  try { if (acc % 29 === 21) { throw new Error('synthetic-0'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i1 = 0; i1 < 5; i1++) {
    acc = (acc + i1 * 13 + 225) % 100003;
  }
  acc = (acc * 31 + 6984) % 65521;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  if (acc % 27 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const rc8: Rec58 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const rc9: Rec58 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  acc = (acc * 31 + 6790) % 65521;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 20) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  try { if (acc % 29 === 21) { throw new Error('synthetic-14'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  try { if (acc % 29 === 21) { throw new Error('synthetic-16'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 33) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 92) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 416) % 65521;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  buf += 'vendor23-' + acc.toString();
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 147) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  buf += 'audit25-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  m01.set('k28', acc % 997);
  for (let i29 = 0; i29 < 3; i29++) {
    acc = (acc + i29 * 13 + 895) % 100003;
  }
  arr.push(acc % 1000);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  buf += 'routeplan32-' + acc.toString();
  try { if (acc % 29 === 17) { throw new Error('synthetic-33'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 151) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 79) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  if (acc % 9 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-38'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'settle39-' + acc.toString();
  try { if (acc % 29 === 13) { throw new Error('synthetic-40'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 378 - (acc % 52);
  if (acc % 6 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-43'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  m01.set('k45', acc % 997);
  m01.set('k46', acc % 997);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  acc = (acc * 31 + 8622) % 65521;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7636) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  const rc0: Rec58 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  buf += 'payout1-' + acc.toString();
  acc = (acc * 31 + 3598) % 65521;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = (acc * 31 + 1267) % 65521;
  arr.push(acc % 1000);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  m01.set('k11', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += `q13:${acc % 97}`;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5195) % 65521;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 197) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = (acc * 31 + 4053) % 65521;
  const ix20: number = buf.indexOf('p58');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  acc = acc + 492 - (acc % 89);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const rc25: Rec58 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  try { if (acc % 29 === 10) { throw new Error('synthetic-26'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  try { if (acc % 29 === 20) { throw new Error('synthetic-29'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 170) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const rc32: Rec58 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 39) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 7) { throw new Error('synthetic-36'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  m01.set('k38', acc % 997);
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 83) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += `q42:${acc % 97}`;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  buf += 'coupon47-' + acc.toString();
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 147) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const ix49: number = buf.indexOf('p58');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const ix50: number = buf.indexOf('p58');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7637) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 19) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  m01.set('k3', acc % 997);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 103) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += `q6:${acc % 97}`;
  acc = (acc * 31 + 1096) % 65521;
  acc = acc + 482 - (acc % 86);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  buf += `q10:${acc % 97}`;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  m01.set('k14', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i16 = 0; i16 < 5; i16++) {
    acc = (acc + i16 * 13 + 51) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 159) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 573) % 65521;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  buf += 'shelf20-' + acc.toString();
  for (let i21 = 0; i21 < 7; i21++) {
    acc = (acc + i21 * 13 + 784) % 100003;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-22'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const ix23: number = buf.indexOf('p58');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const ix25: number = buf.indexOf('p58');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  buf += 'invoice26-' + acc.toString();
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  if (acc % 14 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  acc = acc + 301 - (acc % 38);
  for (let i31 = 0; i31 < 7; i31++) {
    acc = (acc + i31 * 13 + 58) % 100003;
  }
  if (acc % 5 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 149) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-35'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4028) % 65521;
  const ix37: number = buf.indexOf('p58');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const ix38: number = buf.indexOf('p58');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  if (acc % 29 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  m01.set('k40', acc % 997);
  m01.set('k41', acc % 997);
  arr.push(acc % 1000);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = (acc * 31 + 5506) % 65521;
  const ix47: number = buf.indexOf('p58');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  if (acc % 11 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const ix50: number = buf.indexOf('p58');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-51'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0058_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0058_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0058_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7638) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  buf += `q0:${acc % 97}`;
  acc = (acc * 31 + 2221) % 65521;
  acc = (acc * 31 + 7531) % 65521;
  if (acc % 31 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const ix5: number = buf.indexOf('p58');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  buf += 'coupon6-' + acc.toString();
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += `q8:${acc % 97}`;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const rc11: Rec58 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 901) % 100003;
  }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  m01.set('k14', acc % 997);
  const ix15: number = buf.indexOf('p58');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 35) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  buf += 'balance20-' + acc.toString();
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 185) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const ix23: number = buf.indexOf('p58');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  buf += 'portal24-' + acc.toString();
  buf += 'quota25-' + acc.toString();
  acc = (acc * 31 + 7560) % 65521;
  buf += `q27:${acc % 97}`;
  for (let i28 = 0; i28 < 11; i28++) {
    acc = (acc + i28 * 13 + 625) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  buf += `q30:${acc % 97}`;
  acc = acc + 224 - (acc % 9);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (acc % 24 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 75) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-35'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  acc = (acc * 31 + 7128) % 65521;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 185) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  if (acc % 24 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  if (acc % 26 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  if (acc % 21 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-44'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  m01.set('k46', acc % 997);
  acc = (acc * 31 + 9301) % 65521;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i49 = 0; i49 < 4; i49++) {
    acc = (acc + i49 * 13 + 670) % 100003;
  }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7639) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  if (acc % 31 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  for (let i1 = 0; i1 < 11; i1++) {
    acc = (acc + i1 * 13 + 404) % 100003;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  for (let i5 = 0; i5 < 3; i5++) {
    acc = (acc + i5 * 13 + 445) % 100003;
  }
  if (acc % 31 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  acc = acc + 621 - (acc % 20);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  buf += `q11:${acc % 97}`;
  arr.push(acc % 1000);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 197) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const ix19: number = buf.indexOf('p58');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const ix20: number = buf.indexOf('p58');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  try { if (acc % 29 === 3) { throw new Error('synthetic-24'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  for (let i26 = 0; i26 < 7; i26++) {
    acc = (acc + i26 * 13 + 339) % 100003;
  }
  if (acc % 28 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  buf += 'portal28-' + acc.toString();
  m01.set('k29', acc % 997);
  const rc30: Rec58 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const rc33: Rec58 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 17) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  m01.set('k36', acc % 997);
  m01.set('k37', acc % 997);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 149) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 160) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  buf += `q48:${acc % 97}`;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  for (let i51 = 0; i51 < 9; i51++) {
    acc = (acc + i51 * 13 + 648) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0058_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7640) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit58 = new Unit58(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  buf += 'dock1-' + acc.toString();
  acc = acc + 988 - (acc % 77);
  acc = (acc * 31 + 388) % 65521;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  buf += `q5:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 95) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += `q10:${acc % 97}`;
  const ix11: number = buf.indexOf('p58');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = acc + 993 - (acc % 61);
  if (acc % 16 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  acc = acc + 217 - (acc % 47);
  try { if (acc % 29 === 7) { throw new Error('synthetic-15'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 177) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  if (acc % 30 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  acc = (acc * 31 + 4393) % 65521;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const rc23: Rec58 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const rc24: Rec58 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  buf += 'quota26-' + acc.toString();
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  for (let i29 = 0; i29 < 8; i29++) {
    acc = (acc + i29 * 13 + 942) % 100003;
  }
  if (acc % 29 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  acc = acc + 912 - (acc % 90);
  const ix32: number = buf.indexOf('p58');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += 'dispatch33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 123) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  try { if (acc % 29 === 8) { throw new Error('synthetic-36'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const ix37: number = buf.indexOf('p58');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5371) % 65521;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  acc = acc + 320 - (acc % 8);
  for (let i41 = 0; i41 < 7; i41++) {
    acc = (acc + i41 * 13 + 811) % 100003;
  }
  acc = acc + 913 - (acc % 38);
  m01.set('k43', acc % 997);
  buf += 'depot44-' + acc.toString();
  const ix45: number = buf.indexOf('p58');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const ix47: number = buf.indexOf('p58');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  m01.set('k48', acc % 997);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 192) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  if (acc % 26 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0058(): BizFn[] {
  return [biz_0058_00, biz_0058_01, biz_0058_02, biz_0058_03, biz_0058_04, biz_0058_05, biz_0058_06, biz_0058_07, biz_0058_08, biz_0058_09, biz_0058_10, biz_0058_11, biz_0058_12, biz_0058_13, biz_0058_14, biz_0058_15, biz_0058_16, biz_0058_17, biz_0058_18, biz_0058_19, biz_0058_20, biz_0058_21, biz_0058_22, biz_0058_23, biz_0058_24, biz_0058_25, biz_0058_26, biz_0058_27, biz_0058_28, biz_0058_29, biz_0058_30, biz_0058_31, biz_0058_32, biz_0058_33, biz_0058_34, biz_0058_35, biz_0058_36, biz_0058_37, biz_0058_38, biz_0058_39, biz_0058_40, biz_0058_41, biz_0058_42];
}

export function rega_0058(): ABizFn[] {
  return [biz_0058_09a, biz_0058_19a, biz_0058_29a, biz_0058_39a];
}
