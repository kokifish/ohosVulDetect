// Biz0061.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec61 { id: number; tag: string; score: number; }

class Unit61 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0061_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7991) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  acc = (acc * 31 + 1987) % 65521;
  acc = acc + 838 - (acc % 69);
  const rc2: Rec61 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  m01.set('k3', acc % 997);
  const rc4: Rec61 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  m01.set('k5', acc % 997);
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  acc = (acc * 31 + 1807) % 65521;
  for (let i8 = 0; i8 < 6; i8++) {
    acc = (acc + i8 * 13 + 369) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  const rc11: Rec61 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  try { if (acc % 29 === 15) { throw new Error('synthetic-12'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 22 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-14'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 95) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 122) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (acc % 15 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const ix21: number = buf.indexOf('p61');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  for (let i22 = 0; i22 < 8; i22++) {
    acc = (acc + i22 * 13 + 572) % 100003;
  }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  m01.set('k24', acc % 997);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  buf += `q26:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  try { if (acc % 29 === 20) { throw new Error('synthetic-28'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 10 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += 'shelf30-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  for (let i32 = 0; i32 < 5; i32++) {
    acc = (acc + i32 * 13 + 733) % 100003;
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 158) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  m01.set('k36', acc % 997);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 62) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  if (acc % 26 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  for (let i42 = 0; i42 < 7; i42++) {
    acc = (acc + i42 * 13 + 689) % 100003;
  }
  const ix43: number = buf.indexOf('p61');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const ix46: number = buf.indexOf('p61');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  if (acc % 21 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-49'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i50 = 0; i50 < 10; i50++) {
    acc = (acc + i50 * 13 + 218) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7992) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  buf += `q0:${acc % 97}`;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += `q6:${acc % 97}`;
  const ix7: number = buf.indexOf('p61');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  buf += `q9:${acc % 97}`;
  acc = (acc * 31 + 7749) % 65521;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const rc13: Rec61 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  m01.set('k14', acc % 997);
  try { if (acc % 29 === 14) { throw new Error('synthetic-15'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 18) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 4038) % 65521;
  buf += 'batch19-' + acc.toString();
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  buf += `q21:${acc % 97}`;
  m01.set('k22', acc % 997);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  buf += `q25:${acc % 97}`;
  acc = (acc * 31 + 8798) % 65521;
  const rc27: Rec61 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const rc29: Rec61 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  m01.set('k30', acc % 997);
  m01.set('k31', acc % 997);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 79) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6819) % 65521;
  arr.push(acc % 1000);
  const ix38: number = buf.indexOf('p61');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2592) % 65521;
  if (acc % 28 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  acc = acc + 52 - (acc % 70);
  buf += 'balance45-' + acc.toString();
  if (acc % 8 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7993) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  if (acc % 22 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  try { if (acc % 29 === 8) { throw new Error('synthetic-3'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  for (let i5 = 0; i5 < 5; i5++) {
    acc = (acc + i5 * 13 + 808) % 100003;
  }
  acc = (acc * 31 + 7090) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 16) { throw new Error('synthetic-8'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q9:${acc % 97}`;
  buf += `q10:${acc % 97}`;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 20) { throw new Error('synthetic-13'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  acc = acc + 314 - (acc % 88);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 174) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const rc22: Rec61 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  if (acc % 6 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  const ix28: number = buf.indexOf('p61');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  m01.set('k30', acc % 997);
  try { if (acc % 29 === 8) { throw new Error('synthetic-31'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  acc = acc + 884 - (acc % 53);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 23) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p61');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  buf += 'order36-' + acc.toString();
  const rc37: Rec61 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  m01.set('k38', acc % 997);
  buf += 'rebate39-' + acc.toString();
  const rc40: Rec61 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 17) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  if (acc % 12 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  m01.set('k44', acc % 997);
  buf += 'invoice45-' + acc.toString();
  try { if (acc % 29 === 14) { throw new Error('synthetic-46'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-47'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const ix48: number = buf.indexOf('p61');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  buf += 'region50-' + acc.toString();
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7994) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  try { if (acc % 29 === 12) { throw new Error('synthetic-0'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 18) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  buf += 'order2-' + acc.toString();
  const rc3: Rec61 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  acc = acc + 578 - (acc % 70);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  if (acc % 21 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-9'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9150) % 65521;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const ix15: number = buf.indexOf('p61');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 84) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  m01.set('k20', acc % 997);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  acc = acc + 914 - (acc % 19);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 44) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  const rc25: Rec61 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const ix26: number = buf.indexOf('p61');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-27'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 86) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  for (let i36 = 0; i36 < 7; i36++) {
    acc = (acc + i36 * 13 + 397) % 100003;
  }
  acc = (acc * 31 + 3230) % 65521;
  acc = acc + 983 - (acc % 52);
  acc = (acc * 31 + 8320) % 65521;
  m01.set('k40', acc % 997);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const rc42: Rec61 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  buf += `q43:${acc % 97}`;
  for (let i44 = 0; i44 < 3; i44++) {
    acc = (acc + i44 * 13 + 645) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = (acc * 31 + 9341) % 65521;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = acc + 406 - (acc % 14);
  const ix50: number = buf.indexOf('p61');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7995) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  const ix0: number = buf.indexOf('p61');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 1929) % 65521;
  acc = acc + 923 - (acc % 79);
  try { if (acc % 29 === 3) { throw new Error('synthetic-3'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const ix6: number = buf.indexOf('p61');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  arr.push(acc % 1000);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  buf += `q10:${acc % 97}`;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  acc = (acc * 31 + 1889) % 65521;
  for (let i15 = 0; i15 < 9; i15++) {
    acc = (acc + i15 * 13 + 573) % 100003;
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 142) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 701 - (acc % 17);
  acc = (acc * 31 + 1482) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-20'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  m01.set('k22', acc % 997);
  acc = (acc * 31 + 458) % 65521;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  try { if (acc % 29 === 15) { throw new Error('synthetic-27'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'waybill28-' + acc.toString();
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  buf += 'invoice30-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-31'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-32'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'rebate33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 102) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const rc38: Rec61 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 165) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  if (acc % 29 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const ix41: number = buf.indexOf('p61');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  m01.set('k42', acc % 997);
  buf += 'vendor43-' + acc.toString();
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 130) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  buf += 'parcel46-' + acc.toString();
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  acc = (acc * 31 + 126) % 65521;
  buf += 'vendor51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7996) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  buf += 'stocktake0-' + acc.toString();
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-2'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q3:${acc % 97}`;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 74) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  try { if (acc % 29 === 22) { throw new Error('synthetic-5'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 198) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix8: number = buf.indexOf('p61');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = acc + 284 - (acc % 23);
  buf += `q11:${acc % 97}`;
  m01.set('k12', acc % 997);
  if (acc % 8 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const ix14: number = buf.indexOf('p61');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 70) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  for (let i20 = 0; i20 < 3; i20++) {
    acc = (acc + i20 * 13 + 478) % 100003;
  }
  buf += 'client21-' + acc.toString();
  arr.push(acc % 1000);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  for (let i24 = 0; i24 < 6; i24++) {
    acc = (acc + i24 * 13 + 11) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const ix26: number = buf.indexOf('p61');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i28 = 0; i28 < 6; i28++) {
    acc = (acc + i28 * 13 + 996) % 100003;
  }
  arr.push(acc % 1000);
  buf += `q30:${acc % 97}`;
  acc = acc + 260 - (acc % 10);
  for (let i32 = 0; i32 < 10; i32++) {
    acc = (acc + i32 * 13 + 645) % 100003;
  }
  if (acc % 11 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 64) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 4) { throw new Error('synthetic-35'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  acc = (acc * 31 + 7657) % 65521;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = acc + 25 - (acc % 58);
  for (let i41 = 0; i41 < 9; i41++) {
    acc = (acc + i41 * 13 + 708) % 100003;
  }
  const ix42: number = buf.indexOf('p61');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  buf += `q46:${acc % 97}`;
  buf += `q47:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += `q49:${acc % 97}`;
  const rc50: Rec61 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  acc = acc + 306 - (acc % 90);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7997) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  acc = acc + 296 - (acc % 65);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  m01.set('k3', acc % 997);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 143) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 164) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  for (let i7 = 0; i7 < 6; i7++) {
    acc = (acc + i7 * 13 + 802) % 100003;
  }
  buf += 'tariff8-' + acc.toString();
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-10'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (acc % 29 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-15'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 20) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 3) { throw new Error('synthetic-18'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += `q21:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const rc24: Rec61 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-26'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 14 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 88) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  buf += `q29:${acc % 97}`;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  if (acc % 9 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  if (acc % 7 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 82) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const ix36: number = buf.indexOf('p61');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  arr.push(acc % 1000);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 25) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  if (acc % 30 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  acc = acc + 500 - (acc % 47);
  acc = (acc * 31 + 1635) % 65521;
  if (acc % 25 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  for (let i45 = 0; i45 < 9; i45++) {
    acc = (acc + i45 * 13 + 904) % 100003;
  }
  const ix46: number = buf.indexOf('p61');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = acc + 190 - (acc % 43);
  acc = acc + 629 - (acc % 7);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const ix51: number = buf.indexOf('p61');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7998) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  for (let i0 = 0; i0 < 5; i0++) {
    acc = (acc + i0 * 13 + 206) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  buf += 'freight3-' + acc.toString();
  const rc4: Rec61 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const ix7: number = buf.indexOf('p61');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const ix8: number = buf.indexOf('p61');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const rc9: Rec61 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  m01.set('k10', acc % 997);
  acc = (acc * 31 + 4312) % 65521;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  acc = acc + 961 - (acc % 77);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-15'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3574) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 137) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const rc19: Rec61 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = acc + 881 - (acc % 48);
  try { if (acc % 29 === 16) { throw new Error('synthetic-21'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q22:${acc % 97}`;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 12) { throw new Error('synthetic-26'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k27', acc % 997);
  acc = (acc * 31 + 9571) % 65521;
  const rc29: Rec61 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  m01.set('k30', acc % 997);
  const ix31: number = buf.indexOf('p61');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  m01.set('k32', acc % 997);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 36) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 8990) % 65521;
  acc = acc + 458 - (acc % 27);
  acc = acc + 549 - (acc % 33);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  arr.push(acc % 1000);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  buf += `q42:${acc % 97}`;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  for (let i44 = 0; i44 < 12; i44++) {
    acc = (acc + i44 * 13 + 118) % 100003;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-45'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  m01.set('k47', acc % 997);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  if (acc % 15 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 7999) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 119) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  buf += 'journey1-' + acc.toString();
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const ix5: number = buf.indexOf('p61');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = acc + 328 - (acc % 70);
  arr.push(acc % 1000);
  for (let i8 = 0; i8 < 7; i8++) {
    acc = (acc + i8 * 13 + 112) % 100003;
  }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  buf += 'pickup10-' + acc.toString();
  m01.set('k11', acc % 997);
  acc = acc + 805 - (acc % 59);
  const rc13: Rec61 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  try { if (acc % 29 === 3) { throw new Error('synthetic-14'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 179) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  if (acc % 26 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 36) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += 'routeplan20-' + acc.toString();
  buf += `q21:${acc % 97}`;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  acc = (acc * 31 + 2538) % 65521;
  m01.set('k24', acc % 997);
  if (acc % 25 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  m01.set('k26', acc % 997);
  const ix27: number = buf.indexOf('p61');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = (acc * 31 + 6005) % 65521;
  const rc31: Rec61 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const rc32: Rec61 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 49) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = acc + 602 - (acc % 28);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  arr.push(acc % 1000);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  buf += `q41:${acc % 97}`;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  if (acc % 20 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = acc + 126 - (acc % 49);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  m01.set('k47', acc % 997);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  m01.set('k49', acc % 997);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 191) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8000) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
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
  try { if (acc % 29 === 11) { throw new Error('synthetic-5'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 125) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  acc = acc + 161 - (acc % 49);
  acc = (acc * 31 + 8644) % 65521;
  m01.set('k10', acc % 997);
  buf += `q11:${acc % 97}`;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  buf += 'tariff13-' + acc.toString();
  try { if (acc % 29 === 6) { throw new Error('synthetic-14'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  acc = acc + 626 - (acc % 75);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 136) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-18'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += 'freight20-' + acc.toString();
  if (acc % 12 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-24'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  m01.set('k26', acc % 997);
  buf += 'rebate27-' + acc.toString();
  buf += `q28:${acc % 97}`;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  acc = acc + 992 - (acc % 34);
  const ix31: number = buf.indexOf('p61');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 31) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  buf += 'journey33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 127) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  arr.push(acc % 1000);
  const ix37: number = buf.indexOf('p61');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const ix38: number = buf.indexOf('p61');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const ix39: number = buf.indexOf('p61');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += `q41:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 128) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k46', acc % 997);
  acc = acc + 597 - (acc % 93);
  m01.set('k48', acc % 997);
  try { if (acc % 29 === 8) { throw new Error('synthetic-49'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0061_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0061_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0061_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8001) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  acc = acc + 745 - (acc % 90);
  buf += `q1:${acc % 97}`;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const ix8: number = buf.indexOf('p61');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  buf += `q11:${acc % 97}`;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += 'rebate13-' + acc.toString();
  acc = (acc * 31 + 6807) % 65521;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const rc16: Rec61 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 123) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += 'waybill20-' + acc.toString();
  try { if (acc % 29 === 12) { throw new Error('synthetic-21'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 624 - (acc % 9);
  acc = (acc * 31 + 5634) % 65521;
  arr.push(acc % 1000);
  acc = acc + 776 - (acc % 30);
  const ix26: number = buf.indexOf('p61');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = acc + 143 - (acc % 59);
  m01.set('k28', acc % 997);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 9056) % 65521;
  arr.push(acc % 1000);
  const rc33: Rec61 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 154) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 125) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  for (let i43 = 0; i43 < 11; i43++) {
    acc = (acc + i43 * 13 + 437) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 3) { throw new Error('synthetic-47'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i48 = 0; i48 < 11; i48++) {
    acc = (acc + i48 * 13 + 182) % 100003;
  }
  acc = (acc * 31 + 3845) % 65521;
  buf += `q50:${acc % 97}`;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8002) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  m01.set('k0', acc % 997);
  for (let i1 = 0; i1 < 10; i1++) {
    acc = (acc + i1 * 13 + 563) % 100003;
  }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 89) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const ix3: number = buf.indexOf('p61');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const ix4: number = buf.indexOf('p61');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const rc5: Rec61 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  m01.set('k9', acc % 997);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  acc = (acc * 31 + 3249) % 65521;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += `q14:${acc % 97}`;
  buf += 'quota15-' + acc.toString();
  for (let i16 = 0; i16 < 11; i16++) {
    acc = (acc + i16 * 13 + 961) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 188) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  if (acc % 21 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  buf += `q21:${acc % 97}`;
  const rc22: Rec61 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  if (acc % 29 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  buf += `q26:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-27'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  m01.set('k29', acc % 997);
  acc = acc + 647 - (acc % 77);
  m01.set('k31', acc % 997);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 119) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  if (acc % 8 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = acc + 566 - (acc % 50);
  try { if (acc % 29 === 7) { throw new Error('synthetic-38'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 366 - (acc % 60);
  arr.push(acc % 1000);
  m01.set('k41', acc % 997);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  buf += `q44:${acc % 97}`;
  buf += `q45:${acc % 97}`;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += 'waybill47-' + acc.toString();
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += 'shelf50-' + acc.toString();
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8003) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  for (let i0 = 0; i0 < 3; i0++) {
    acc = (acc + i0 * 13 + 967) % 100003;
  }
  acc = acc + 665 - (acc % 20);
  m01.set('k2', acc % 997);
  const ix3: number = buf.indexOf('p61');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  for (let i5 = 0; i5 < 4; i5++) {
    acc = (acc + i5 * 13 + 164) % 100003;
  }
  acc = (acc * 31 + 4535) % 65521;
  const ix7: number = buf.indexOf('p61');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  try { if (acc % 29 === 8) { throw new Error('synthetic-9'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += `q12:${acc % 97}`;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = (acc * 31 + 7681) % 65521;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = acc + 692 - (acc % 14);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 120) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 180) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  try { if (acc % 29 === 7) { throw new Error('synthetic-23'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q24:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const ix26: number = buf.indexOf('p61');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const rc28: Rec61 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  arr.push(acc % 1000);
  buf += 'refund30-' + acc.toString();
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const ix33: number = buf.indexOf('p61');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 174) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 76) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  m01.set('k36', acc % 997);
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  acc = acc + 40 - (acc % 54);
  buf += `q39:${acc % 97}`;
  try { if (acc % 29 === 11) { throw new Error('synthetic-40'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 3) { throw new Error('synthetic-43'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q44:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 172) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  m01.set('k49', acc % 997);
  for (let i50 = 0; i50 < 4; i50++) {
    acc = (acc + i50 * 13 + 625) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8004) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const ix3: number = buf.indexOf('p61');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2296) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  if (acc % 10 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  if (acc % 25 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const rc12: Rec61 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  if (acc % 14 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 196) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 546 - (acc % 64);
  const ix19: number = buf.indexOf('p61');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  m01.set('k20', acc % 997);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 115) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = acc + 745 - (acc % 38);
  acc = (acc * 31 + 709) % 65521;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = acc + 400 - (acc % 90);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  m01.set('k28', acc % 997);
  const rc29: Rec61 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const rc30: Rec61 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += 'audit31-' + acc.toString();
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 23) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 6249) % 65521;
  buf += `q36:${acc % 97}`;
  const ix37: number = buf.indexOf('p61');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5484) % 65521;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 132) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  acc = acc + 753 - (acc % 50);
  const rc42: Rec61 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  if (acc % 19 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  m01.set('k45', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  for (let i48 = 0; i48 < 11; i48++) {
    acc = (acc + i48 * 13 + 192) % 100003;
  }
  const ix49: number = buf.indexOf('p61');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  m01.set('k50', acc % 997);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8005) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  acc = (acc * 31 + 7139) % 65521;
  arr.push(acc % 1000);
  acc = acc + 280 - (acc % 41);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const rc5: Rec61 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += `q9:${acc % 97}`;
  try { if (acc % 29 === 18) { throw new Error('synthetic-10'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const rc12: Rec61 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += 'quota13-' + acc.toString();
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 140) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 132) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const rc22: Rec61 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  acc = acc + 869 - (acc % 77);
  acc = (acc * 31 + 8298) % 65521;
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  const rc27: Rec61 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  m01.set('k28', acc % 997);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  buf += 'dock30-' + acc.toString();
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 123) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  if (acc % 5 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  if (acc % 26 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  try { if (acc % 29 === 16) { throw new Error('synthetic-39'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k40', acc % 997);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 121) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += `q42:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const ix44: number = buf.indexOf('p61');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-46'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i47 = 0; i47 < 8; i47++) {
    acc = (acc + i47 * 13 + 69) % 100003;
  }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += 'invoice50-' + acc.toString();
  acc = acc + 707 - (acc % 12);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8006) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  arr.push(acc % 1000);
  for (let i1 = 0; i1 < 10; i1++) {
    acc = (acc + i1 * 13 + 915) % 100003;
  }
  m01.set('k2', acc % 997);
  arr.push(acc % 1000);
  acc = (acc * 31 + 3216) % 65521;
  buf += `q5:${acc % 97}`;
  acc = acc + 881 - (acc % 54);
  const ix7: number = buf.indexOf('p61');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const ix10: number = buf.indexOf('p61');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  m01.set('k11', acc % 997);
  try { if (acc % 29 === 23) { throw new Error('synthetic-12'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1118) % 65521;
  acc = acc + 501 - (acc % 90);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 110) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 402 - (acc % 63);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 49) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = (acc * 31 + 7688) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix25: number = buf.indexOf('p61');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  acc = acc + 519 - (acc % 76);
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 159) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  for (let i31 = 0; i31 < 10; i31++) {
    acc = (acc + i31 * 13 + 730) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += 'warehouse33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 156) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 11) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  if (acc % 10 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += `q42:${acc % 97}`;
  if (acc % 30 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  for (let i44 = 0; i44 < 4; i44++) {
    acc = (acc + i44 * 13 + 796) % 100003;
  }
  acc = (acc * 31 + 2530) % 65521;
  try { if (acc % 29 === 5) { throw new Error('synthetic-46'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 31) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3685) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8007) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  if (acc % 15 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3573) % 65521;
  acc = (acc * 31 + 7630) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-3'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 319 - (acc % 67);
  for (let i5 = 0; i5 < 5; i5++) {
    acc = (acc + i5 * 13 + 324) % 100003;
  }
  if (acc % 5 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  if (acc % 30 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  if (acc % 27 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  acc = (acc * 31 + 4755) % 65521;
  buf += `q12:${acc % 97}`;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  acc = acc + 949 - (acc % 68);
  acc = acc + 577 - (acc % 60);
  acc = acc + 63 - (acc % 61);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 61) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += `q21:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  for (let i23 = 0; i23 < 6; i23++) {
    acc = (acc + i23 * 13 + 267) % 100003;
  }
  if (acc % 21 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = acc + 550 - (acc % 9);
  const rc29: Rec61 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  try { if (acc % 29 === 22) { throw new Error('synthetic-33'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 109) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  acc = acc + 344 - (acc % 52);
  arr.push(acc % 1000);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  buf += 'bay40-' + acc.toString();
  for (let i41 = 0; i41 < 12; i41++) {
    acc = (acc + i41 * 13 + 987) % 100003;
  }
  buf += `q42:${acc % 97}`;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  for (let i44 = 0; i44 < 4; i44++) {
    acc = (acc + i44 * 13 + 575) % 100003;
  }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  try { if (acc % 29 === 10) { throw new Error('synthetic-46'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7112) % 65521;
  buf += `q48:${acc % 97}`;
  buf += `q49:${acc % 97}`;
  m01.set('k50', acc % 997);
  try { if (acc % 29 === 15) { throw new Error('synthetic-51'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8008) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  try { if (acc % 29 === 5) { throw new Error('synthetic-0'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const ix3: number = buf.indexOf('p61');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  buf += 'pallet4-' + acc.toString();
  if (acc % 28 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  for (let i6 = 0; i6 < 3; i6++) {
    acc = (acc + i6 * 13 + 586) % 100003;
  }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = acc + 897 - (acc % 57);
  arr.push(acc % 1000);
  m01.set('k10', acc % 997);
  if (acc % 10 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  acc = (acc * 31 + 4464) % 65521;
  buf += `q13:${acc % 97}`;
  acc = (acc * 31 + 9523) % 65521;
  for (let i15 = 0; i15 < 11; i15++) {
    acc = (acc + i15 * 13 + 947) % 100003;
  }
  acc = (acc * 31 + 4293) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 182) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-18'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 111) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = acc + 905 - (acc % 92);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  if (acc % 10 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  for (let i27 = 0; i27 < 12; i27++) {
    acc = (acc + i27 * 13 + 736) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = (acc * 31 + 7532) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-31'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q32:${acc % 97}`;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 169) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 38) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  if (acc % 5 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  for (let i38 = 0; i38 < 7; i38++) {
    acc = (acc + i38 * 13 + 712) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-40'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 997 - (acc % 62);
  acc = (acc * 31 + 6261) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-43'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q45:${acc % 97}`;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 155) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  buf += `q48:${acc % 97}`;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  buf += `q50:${acc % 97}`;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8009) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  const rc0: Rec61 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  buf += 'coupon3-' + acc.toString();
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 154) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  m01.set('k7', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 167) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const ix11: number = buf.indexOf('p61');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  buf += `q12:${acc % 97}`;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  if (acc % 8 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  for (let i15 = 0; i15 < 12; i15++) {
    acc = (acc + i15 * 13 + 358) % 100003;
  }
  for (let i16 = 0; i16 < 5; i16++) {
    acc = (acc + i16 * 13 + 927) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 125) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k19', acc % 997);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 94) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  m01.set('k25', acc % 997);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 124) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  try { if (acc % 29 === 20) { throw new Error('synthetic-27'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const rc28: Rec61 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const ix29: number = buf.indexOf('p61');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += 'transit31-' + acc.toString();
  buf += 'client32-' + acc.toString();
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 149) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  m01.set('k36', acc % 997);
  m01.set('k37', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += 'ledger39-' + acc.toString();
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 70) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  buf += 'bay41-' + acc.toString();
  const rc42: Rec61 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  arr.push(acc % 1000);
  const rc44: Rec61 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 133) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  if (acc % 26 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  m01.set('k47', acc % 997);
  m01.set('k48', acc % 997);
  for (let i49 = 0; i49 < 4; i49++) {
    acc = (acc + i49 * 13 + 874) % 100003;
  }
  buf += 'audit50-' + acc.toString();
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8010) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  if (acc % 9 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  acc = (acc * 31 + 6124) % 65521;
  m01.set('k4', acc % 997);
  const ix5: number = buf.indexOf('p61');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-6'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  m01.set('k8', acc % 997);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2109) % 65521;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 94) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 151) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 9496) % 65521;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  if (acc % 20 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  arr.push(acc % 1000);
  const ix29: number = buf.indexOf('p61');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  for (let i31 = 0; i31 < 8; i31++) {
    acc = (acc + i31 * 13 + 93) % 100003;
  }
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  acc = acc + 104 - (acc % 37);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 42) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  buf += `q36:${acc % 97}`;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  buf += 'ticket39-' + acc.toString();
  acc = acc + 260 - (acc % 14);
  buf += `q41:${acc % 97}`;
  const rc42: Rec61 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  acc = acc + 582 - (acc % 65);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-47'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += `q49:${acc % 97}`;
  acc = acc + 551 - (acc % 40);
  acc = (acc * 31 + 423) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0061_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0061_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0061_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8011) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  buf += `q0:${acc % 97}`;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  for (let i2 = 0; i2 < 4; i2++) {
    acc = (acc + i2 * 13 + 800) % 100003;
  }
  acc = acc + 798 - (acc % 63);
  buf += `q4:${acc % 97}`;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  acc = acc + 276 - (acc % 86);
  for (let i7 = 0; i7 < 8; i7++) {
    acc = (acc + i7 * 13 + 72) % 100003;
  }
  acc = (acc * 31 + 7338) % 65521;
  buf += 'warehouse9-' + acc.toString();
  for (let i10 = 0; i10 < 7; i10++) {
    acc = (acc + i10 * 13 + 648) % 100003;
  }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  m01.set('k12', acc % 997);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  if (acc % 10 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const rc15: Rec61 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 48) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  if (acc % 11 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5218) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 115) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  acc = (acc * 31 + 6205) % 65521;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  m01.set('k28', acc % 997);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  if (acc % 5 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 78) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const rc33: Rec61 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 174) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = acc + 168 - (acc % 50);
  try { if (acc % 29 === 6) { throw new Error('synthetic-37'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (acc % 31 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5739) % 65521;
  arr.push(acc % 1000);
  buf += `q42:${acc % 97}`;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  for (let i45 = 0; i45 < 8; i45++) {
    acc = (acc + i45 * 13 + 746) % 100003;
  }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += 'order48-' + acc.toString();
  acc = acc + 547 - (acc % 48);
  acc = (acc * 31 + 9835) % 65521;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8012) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  if (acc % 30 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 74) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  if (acc % 22 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-3'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k4', acc % 997);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  buf += 'stocktake6-' + acc.toString();
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  m01.set('k10', acc % 997);
  const rc11: Rec61 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 156) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const rc16: Rec61 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 173) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 62) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (acc % 12 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 126) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  arr.push(acc % 1000);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  m01.set('k26', acc % 997);
  arr.push(acc % 1000);
  acc = acc + 369 - (acc % 34);
  arr.push(acc % 1000);
  m01.set('k30', acc % 997);
  if (acc % 19 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = acc + 251 - (acc % 95);
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 114) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 106) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  buf += `q37:${acc % 97}`;
  acc = acc + 924 - (acc % 50);
  const rc39: Rec61 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 194) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  acc = (acc * 31 + 6268) % 65521;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const ix45: number = buf.indexOf('p61');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  m01.set('k48', acc % 997);
  acc = acc + 707 - (acc % 28);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 35) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = (acc * 31 + 9261) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8013) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  buf += 'sku2-' + acc.toString();
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  buf += `q5:${acc % 97}`;
  const ix6: number = buf.indexOf('p61');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  for (let i10 = 0; i10 < 6; i10++) {
    acc = (acc + i10 * 13 + 738) % 100003;
  }
  if (acc % 20 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 84) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec61 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  for (let i19 = 0; i19 < 5; i19++) {
    acc = (acc + i19 * 13 + 578) % 100003;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-20'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  buf += 'waybill22-' + acc.toString();
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const ix25: number = buf.indexOf('p61');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const rc26: Rec61 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  for (let i27 = 0; i27 < 8; i27++) {
    acc = (acc + i27 * 13 + 538) % 100003;
  }
  const ix28: number = buf.indexOf('p61');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 24) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 164) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  try { if (acc % 29 === 18) { throw new Error('synthetic-33'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 38) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  if (acc % 5 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 154) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q40:${acc % 97}`;
  arr.push(acc % 1000);
  try { if (acc % 29 === 13) { throw new Error('synthetic-42'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const rc43: Rec61 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 18) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  if (acc % 16 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  try { if (acc % 29 === 7) { throw new Error('synthetic-49'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8014) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  const ix0: number = buf.indexOf('p61');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  if (acc % 27 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-2'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 110) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  if (acc % 19 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const ix7: number = buf.indexOf('p61');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  acc = (acc * 31 + 5288) % 65521;
  for (let i10 = 0; i10 < 8; i10++) {
    acc = (acc + i10 * 13 + 364) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const rc12: Rec61 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  buf += `q14:${acc % 97}`;
  acc = acc + 624 - (acc % 87);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 192) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  acc = acc + 325 - (acc % 17);
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  buf += `q26:${acc % 97}`;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  m01.set('k29', acc % 997);
  for (let i30 = 0; i30 < 10; i30++) {
    acc = (acc + i30 * 13 + 656) % 100003;
  }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 60) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 821 - (acc % 66);
  for (let i36 = 0; i36 < 9; i36++) {
    acc = (acc + i36 * 13 + 129) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (acc % 31 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 43) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 21) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  if (acc % 25 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  if (acc % 26 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8015) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  buf += 'dock0-' + acc.toString();
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  acc = acc + 626 - (acc % 94);
  m01.set('k3', acc % 997);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  for (let i6 = 0; i6 < 11; i6++) {
    acc = (acc + i6 * 13 + 855) % 100003;
  }
  for (let i7 = 0; i7 < 6; i7++) {
    acc = (acc + i7 * 13 + 66) % 100003;
  }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const rc9: Rec61 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2120) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  acc = (acc * 31 + 2039) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 60) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  buf += `q19:${acc % 97}`;
  buf += 'order20-' + acc.toString();
  buf += `q21:${acc % 97}`;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const rc23: Rec61 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  m01.set('k24', acc % 997);
  buf += 'quota25-' + acc.toString();
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  arr.push(acc % 1000);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 26) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  buf += 'bay30-' + acc.toString();
  for (let i31 = 0; i31 < 8; i31++) {
    acc = (acc + i31 * 13 + 292) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (acc % 21 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 76) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = (acc * 31 + 2528) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  for (let i38 = 0; i38 < 12; i38++) {
    acc = (acc + i38 * 13 + 605) % 100003;
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  buf += 'order40-' + acc.toString();
  if (acc % 14 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  buf += `q43:${acc % 97}`;
  for (let i44 = 0; i44 < 8; i44++) {
    acc = (acc + i44 * 13 + 785) % 100003;
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-47'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  try { if (acc % 29 === 19) { throw new Error('synthetic-50'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 830 - (acc % 95);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8016) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  m01.set('k0', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const rc5: Rec61 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += 'rebate6-' + acc.toString();
  buf += `q7:${acc % 97}`;
  try { if (acc % 29 === 16) { throw new Error('synthetic-8'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q9:${acc % 97}`;
  for (let i10 = 0; i10 < 10; i10++) {
    acc = (acc + i10 * 13 + 285) % 100003;
  }
  const rc11: Rec61 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = acc + 150 - (acc % 75);
  if (acc % 18 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-15'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const ix16: number = buf.indexOf('p61');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 14) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const ix22: number = buf.indexOf('p61');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7818) % 65521;
  acc = acc + 386 - (acc % 86);
  buf += 'shelf25-' + acc.toString();
  acc = acc + 927 - (acc % 22);
  buf += `q27:${acc % 97}`;
  try { if (acc % 29 === 23) { throw new Error('synthetic-28'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 68) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 116) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 116) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  m01.set('k36', acc % 997);
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  buf += `q38:${acc % 97}`;
  if (acc % 14 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const rc40: Rec61 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  m01.set('k41', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-43'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 273 - (acc % 46);
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 47) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  const rc50: Rec61 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8017) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  for (let i0 = 0; i0 < 8; i0++) {
    acc = (acc + i0 * 13 + 491) % 100003;
  }
  buf += 'shelf1-' + acc.toString();
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  m01.set('k5', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = (acc * 31 + 2194) % 65521;
  acc = acc + 344 - (acc % 12);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  try { if (acc % 29 === 15) { throw new Error('synthetic-13'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 55) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const rc16: Rec61 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 97) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 6; i18++) {
    acc = (acc + i18 * 13 + 458) % 100003;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-19'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  acc = acc + 44 - (acc % 28);
  const rc23: Rec61 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += 'ticket25-' + acc.toString();
  m01.set('k26', acc % 997);
  try { if (acc % 29 === 5) { throw new Error('synthetic-27'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const rc29: Rec61 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  buf += `q30:${acc % 97}`;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const ix32: number = buf.indexOf('p61');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 73) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-35'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  for (let i37 = 0; i37 < 6; i37++) {
    acc = (acc + i37 * 13 + 659) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  if (acc % 8 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  arr.push(acc % 1000);
  const ix44: number = buf.indexOf('p61');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  acc = acc + 813 - (acc % 95);
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  m01.set('k48', acc % 997);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  acc = acc + 447 - (acc % 20);
  buf += 'waybill51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8018) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 127) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  if (acc % 15 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 124) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2337) % 65521;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += 'portal10-' + acc.toString();
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 45) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix14: number = buf.indexOf('p61');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-15'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 109) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 4; i18++) {
    acc = (acc + i18 * 13 + 535) % 100003;
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-19'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 854 - (acc % 22);
  arr.push(acc % 1000);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  if (acc % 22 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  acc = acc + 812 - (acc % 82);
  const ix26: number = buf.indexOf('p61');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i28 = 0; i28 < 9; i28++) {
    acc = (acc + i28 * 13 + 607) % 100003;
  }
  buf += 'freight29-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += 'carrier32-' + acc.toString();
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 100) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 183) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  buf += `q36:${acc % 97}`;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 27) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6387) % 65521;
  for (let i40 = 0; i40 < 7; i40++) {
    acc = (acc + i40 * 13 + 700) % 100003;
  }
  acc = (acc * 31 + 1985) % 65521;
  const ix42: number = buf.indexOf('p61');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-43'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 3077) % 65521;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const rc47: Rec61 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const rc49: Rec61 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  if (acc % 12 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 152) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8019) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  if (acc % 27 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  acc = (acc * 31 + 8094) % 65521;
  const rc5: Rec61 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 146) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  for (let i10 = 0; i10 < 3; i10++) {
    acc = (acc + i10 * 13 + 754) % 100003;
  }
  if (acc % 31 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 151) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  try { if (acc % 29 === 14) { throw new Error('synthetic-15'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const ix16: number = buf.indexOf('p61');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 16) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p61');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 154) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  arr.push(acc % 1000);
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  for (let i31 = 0; i31 < 12; i31++) {
    acc = (acc + i31 * 13 + 879) % 100003;
  }
  buf += `q32:${acc % 97}`;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 72) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 566 - (acc % 90);
  for (let i36 = 0; i36 < 5; i36++) {
    acc = (acc + i36 * 13 + 362) % 100003;
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  buf += `q39:${acc % 97}`;
  if (acc % 13 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const rc41: Rec61 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  try { if (acc % 29 === 3) { throw new Error('synthetic-42'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'waybill43-' + acc.toString();
  for (let i44 = 0; i44 < 6; i44++) {
    acc = (acc + i44 * 13 + 508) % 100003;
  }
  arr.push(acc % 1000);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  buf += 'transit47-' + acc.toString();
  const ix48: number = buf.indexOf('p61');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  buf += 'pickup50-' + acc.toString();
  acc = acc + 613 - (acc % 64);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8020) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  acc = acc + 132 - (acc % 9);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 160) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  buf += 'audit3-' + acc.toString();
  for (let i4 = 0; i4 < 11; i4++) {
    acc = (acc + i4 * 13 + 595) % 100003;
  }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  for (let i6 = 0; i6 < 4; i6++) {
    acc = (acc + i6 * 13 + 532) % 100003;
  }
  arr.push(acc % 1000);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const rc9: Rec61 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += 'shelf10-' + acc.toString();
  m01.set('k11', acc % 997);
  buf += 'dispatch12-' + acc.toString();
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  for (let i15 = 0; i15 < 7; i15++) {
    acc = (acc + i15 * 13 + 616) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 17) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'crate18-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  if (acc % 26 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const ix21: number = buf.indexOf('p61');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const rc23: Rec61 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  if (acc % 7 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  acc = (acc * 31 + 2009) % 65521;
  buf += 'refund27-' + acc.toString();
  m01.set('k28', acc % 997);
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 159) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  buf += 'journey33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 184) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  buf += `q37:${acc % 97}`;
  try { if (acc % 29 === 6) { throw new Error('synthetic-38'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-39'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 6 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  if (acc % 18 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const rc44: Rec61 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  m01.set('k47', acc % 997);
  buf += `q48:${acc % 97}`;
  buf += `q49:${acc % 97}`;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0061_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0061_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0061_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8021) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  m01.set('k0', acc % 997);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8403) % 65521;
  m01.set('k3', acc % 997);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 32) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const ix5: number = buf.indexOf('p61');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  m01.set('k6', acc % 997);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 50) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const ix8: number = buf.indexOf('p61');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  for (let i10 = 0; i10 < 11; i10++) {
    acc = (acc + i10 * 13 + 429) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  if (acc % 13 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 143) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  acc = (acc * 31 + 5395) % 65521;
  buf += 'region22-' + acc.toString();
  acc = (acc * 31 + 2985) % 65521;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 83) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const ix27: number = buf.indexOf('p61');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  if (acc % 6 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 47) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec61 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  try { if (acc % 29 === 15) { throw new Error('synthetic-37'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k38', acc % 997);
  const rc39: Rec61 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  m01.set('k41', acc % 997);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 100) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q45:${acc % 97}`;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  if (acc % 20 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6003) % 65521;
  m01.set('k49', acc % 997);
  for (let i50 = 0; i50 < 5; i50++) {
    acc = (acc + i50 * 13 + 156) % 100003;
  }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8022) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = acc + 614 - (acc % 25);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 198) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const rc4: Rec61 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  m01.set('k5', acc % 997);
  try { if (acc % 29 === 22) { throw new Error('synthetic-6'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 136 - (acc % 12);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  acc = (acc * 31 + 9680) % 65521;
  m01.set('k11', acc % 997);
  if (acc % 9 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-13'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k14', acc % 997);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 123) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 345 - (acc % 82);
  acc = (acc * 31 + 3091) % 65521;
  const ix20: number = buf.indexOf('p61');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 71) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  acc = (acc * 31 + 6712) % 65521;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = (acc * 31 + 6160) % 65521;
  buf += 'parcel28-' + acc.toString();
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += `q32:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 149) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const rc38: Rec61 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const rc40: Rec61 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  acc = acc + 388 - (acc % 93);
  m01.set('k43', acc % 997);
  buf += 'waybill44-' + acc.toString();
  if (acc % 11 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const ix46: number = buf.indexOf('p61');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += 'pickup48-' + acc.toString();
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 56) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8023) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const rc1: Rec61 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const rc2: Rec61 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  acc = acc + 368 - (acc % 35);
  acc = (acc * 31 + 1827) % 65521;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i6 = 0; i6 < 4; i6++) {
    acc = (acc + i6 * 13 + 259) % 100003;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-7'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-9'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  m01.set('k11', acc % 997);
  const ix12: number = buf.indexOf('p61');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const ix14: number = buf.indexOf('p61');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 64) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  try { if (acc % 29 === 15) { throw new Error('synthetic-19'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 31 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-21'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const ix23: number = buf.indexOf('p61');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5860) % 65521;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-27'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const ix31: number = buf.indexOf('p61');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-32'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 193) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 3) { throw new Error('synthetic-35'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  m01.set('k37', acc % 997);
  arr.push(acc % 1000);
  acc = acc + 371 - (acc % 85);
  try { if (acc % 29 === 10) { throw new Error('synthetic-40'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 5888) % 65521;
  for (let i42 = 0; i42 < 11; i42++) {
    acc = (acc + i42 * 13 + 814) % 100003;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-43'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  m01.set('k45', acc % 997);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-47'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  for (let i49 = 0; i49 < 8; i49++) {
    acc = (acc + i49 * 13 + 676) % 100003;
  }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  for (let i51 = 0; i51 < 4; i51++) {
    acc = (acc + i51 * 13 + 625) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8024) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  acc = acc + 287 - (acc % 86);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 19) { throw new Error('synthetic-4'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 134) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = (acc * 31 + 6467) % 65521;
  m01.set('k8', acc % 997);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  buf += 'coupon10-' + acc.toString();
  for (let i11 = 0; i11 < 8; i11++) {
    acc = (acc + i11 * 13 + 867) % 100003;
  }
  const ix12: number = buf.indexOf('p61');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  buf += `q13:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  if (acc % 6 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 14) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  acc = (acc * 31 + 4547) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-20'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 131) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-30'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const rc31: Rec61 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  buf += `q32:${acc % 97}`;
  if (acc % 19 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 42) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec61 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 133) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  buf += `q37:${acc % 97}`;
  m01.set('k38', acc % 997);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  arr.push(acc % 1000);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  for (let i48 = 0; i48 < 3; i48++) {
    acc = (acc + i48 * 13 + 81) % 100003;
  }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  m01.set('k50', acc % 997);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8025) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  buf += `q0:${acc % 97}`;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  for (let i2 = 0; i2 < 9; i2++) {
    acc = (acc + i2 * 13 + 310) % 100003;
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 140) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 16) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = (acc * 31 + 6737) % 65521;
  buf += `q6:${acc % 97}`;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 106) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const rc12: Rec61 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += `q15:${acc % 97}`;
  acc = (acc * 31 + 3536) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 59) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 580 - (acc % 55);
  acc = (acc * 31 + 8532) % 65521;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 193) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  buf += `q21:${acc % 97}`;
  try { if (acc % 29 === 19) { throw new Error('synthetic-22'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  acc = acc + 566 - (acc % 70);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k27', acc % 997);
  acc = (acc * 31 + 8400) % 65521;
  m01.set('k29', acc % 997);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  arr.push(acc % 1000);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 185) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  if (acc % 22 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 178) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p61');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 19) { throw new Error('synthetic-37'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i38 = 0; i38 < 4; i38++) {
    acc = (acc + i38 * 13 + 342) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (acc % 14 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  m01.set('k42', acc % 997);
  buf += 'shelf43-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  for (let i50 = 0; i50 < 10; i50++) {
    acc = (acc + i50 * 13 + 469) % 100003;
  }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8026) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  if (acc % 23 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-2'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 122) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  buf += 'ticket6-' + acc.toString();
  m01.set('k7', acc % 997);
  acc = (acc * 31 + 9343) % 65521;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  acc = acc + 561 - (acc % 48);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 52) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  if (acc % 26 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  arr.push(acc % 1000);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 115) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 176) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  acc = (acc * 31 + 7416) % 65521;
  if (acc % 6 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  for (let i31 = 0; i31 < 7; i31++) {
    acc = (acc + i31 * 13 + 597) % 100003;
  }
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-33'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 32) % 10007);
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
  acc = (acc * 31 + 2637) % 65521;
  const rc39: Rec61 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const rc42: Rec61 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  try { if (acc % 29 === 9) { throw new Error('synthetic-43'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  acc = (acc * 31 + 2214) % 65521;
  m01.set('k46', acc % 997);
  acc = (acc * 31 + 8597) % 65521;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  for (let i50 = 0; i50 < 10; i50++) {
    acc = (acc + i50 * 13 + 834) % 100003;
  }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8027) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  try { if (acc % 29 === 14) { throw new Error('synthetic-0'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'pickup1-' + acc.toString();
  buf += `q2:${acc % 97}`;
  m01.set('k3', acc % 997);
  const rc4: Rec61 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  const rc5: Rec61 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  acc = acc + 973 - (acc % 79);
  const rc7: Rec61 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  buf += `q9:${acc % 97}`;
  acc = acc + 422 - (acc % 13);
  if (acc % 31 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  buf += 'audit13-' + acc.toString();
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const rc15: Rec61 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 72) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const rc19: Rec61 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  buf += `q21:${acc % 97}`;
  acc = acc + 767 - (acc % 78);
  buf += `q23:${acc % 97}`;
  for (let i24 = 0; i24 < 3; i24++) {
    acc = (acc + i24 * 13 + 868) % 100003;
  }
  buf += 'dispatch25-' + acc.toString();
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  m01.set('k27', acc % 997);
  m01.set('k28', acc % 997);
  if (acc % 5 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  for (let i30 = 0; i30 < 7; i30++) {
    acc = (acc + i30 * 13 + 271) % 100003;
  }
  const ix31: number = buf.indexOf('p61');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8477) % 65521;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 111) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 3041) % 65521;
  if (acc % 7 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const rc37: Rec61 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  buf += `q38:${acc % 97}`;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  acc = acc + 167 - (acc % 58);
  arr.push(acc % 1000);
  const ix42: number = buf.indexOf('p61');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const ix47: number = buf.indexOf('p61');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8028) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  const ix0: number = buf.indexOf('p61');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  acc = (acc * 31 + 8700) % 65521;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const ix6: number = buf.indexOf('p61');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  if (acc % 23 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const rc9: Rec61 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  for (let i10 = 0; i10 < 4; i10++) {
    acc = (acc + i10 * 13 + 274) % 100003;
  }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 15) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2668) % 65521;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 41) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += `q21:${acc % 97}`;
  if (acc % 31 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const rc23: Rec61 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const rc25: Rec61 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-27'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  buf += 'ledger31-' + acc.toString();
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  if (acc % 16 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 163) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  buf += 'order38-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 138) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  acc = (acc * 31 + 9027) % 65521;
  acc = acc + 84 - (acc % 73);
  for (let i45 = 0; i45 < 6; i45++) {
    acc = (acc + i45 * 13 + 85) % 100003;
  }
  m01.set('k46', acc % 997);
  for (let i47 = 0; i47 < 7; i47++) {
    acc = (acc + i47 * 13 + 649) % 100003;
  }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += 'payout51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8029) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += `q3:${acc % 97}`;
  try { if (acc % 29 === 23) { throw new Error('synthetic-4'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 25) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  buf += 'pallet6-' + acc.toString();
  for (let i7 = 0; i7 < 12; i7++) {
    acc = (acc + i7 * 13 + 90) % 100003;
  }
  for (let i8 = 0; i8 < 7; i8++) {
    acc = (acc + i8 * 13 + 288) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  buf += 'portal10-' + acc.toString();
  arr.push(acc % 1000);
  acc = (acc * 31 + 7337) % 65521;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-14'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q15:${acc % 97}`;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 198) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-18'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'settle19-' + acc.toString();
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  acc = (acc * 31 + 9161) % 65521;
  try { if (acc % 29 === 7) { throw new Error('synthetic-24'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q25:${acc % 97}`;
  for (let i26 = 0; i26 < 12; i26++) {
    acc = (acc + i26 * 13 + 95) % 100003;
  }
  const rc27: Rec61 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  acc = (acc * 31 + 4541) % 65521;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 4) { throw new Error('synthetic-32'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 182) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 88) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const ix37: number = buf.indexOf('p61');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (acc % 22 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  acc = acc + 622 - (acc % 19);
  try { if (acc % 29 === 2) { throw new Error('synthetic-42'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  acc = (acc * 31 + 2292) % 65521;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  m01.set('k48', acc % 997);
  acc = (acc * 31 + 2605) % 65521;
  acc = (acc * 31 + 9249) % 65521;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8030) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  buf += `q0:${acc % 97}`;
  m01.set('k1', acc % 997);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  for (let i3 = 0; i3 < 10; i3++) {
    acc = (acc + i3 * 13 + 444) % 100003;
  }
  acc = (acc * 31 + 5433) % 65521;
  try { if (acc % 29 === 23) { throw new Error('synthetic-5'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 9 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7894) % 65521;
  acc = acc + 830 - (acc % 90);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  m01.set('k10', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 76) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 130) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  buf += `q19:${acc % 97}`;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  for (let i21 = 0; i21 < 12; i21++) {
    acc = (acc + i21 * 13 + 424) % 100003;
  }
  for (let i22 = 0; i22 < 10; i22++) {
    acc = (acc + i22 * 13 + 595) % 100003;
  }
  acc = acc + 467 - (acc % 51);
  const rc24: Rec61 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  acc = acc + 246 - (acc % 97);
  m01.set('k26', acc % 997);
  buf += `q27:${acc % 97}`;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 169) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const ix29: number = buf.indexOf('p61');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  if (acc % 13 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k32', acc % 997);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 84) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 825 - (acc % 87);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6176) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += `q40:${acc % 97}`;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  try { if (acc % 29 === 18) { throw new Error('synthetic-42'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'warehouse43-' + acc.toString();
  if (acc % 23 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 129) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  buf += `q50:${acc % 97}`;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0061_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0061_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0061_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8031) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const rc1: Rec61 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const ix2: number = buf.indexOf('p61');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3758) % 65521;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const ix6: number = buf.indexOf('p61');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += `q7:${acc % 97}`;
  buf += `q8:${acc % 97}`;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  m01.set('k11', acc % 997);
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 111) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  m01.set('k14', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 196) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += `q23:${acc % 97}`;
  arr.push(acc % 1000);
  if (acc % 18 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  if (acc % 15 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += `q31:${acc % 97}`;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  if (acc % 6 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 88) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6181) % 65521;
  buf += `q37:${acc % 97}`;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  for (let i39 = 0; i39 < 9; i39++) {
    acc = (acc + i39 * 13 + 720) % 100003;
  }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  buf += 'balance42-' + acc.toString();
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 56) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = (acc * 31 + 5746) % 65521;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 6819) % 65521;
  const ix47: number = buf.indexOf('p61');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  arr.push(acc % 1000);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8032) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  if (acc % 30 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const ix3: number = buf.indexOf('p61');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  buf += 'crate5-' + acc.toString();
  const rc6: Rec61 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  if (acc % 18 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7846) % 65521;
  if (acc % 13 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  if (acc % 20 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  acc = (acc * 31 + 765) % 65521;
  if (acc % 8 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  m01.set('k14', acc % 997);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  acc = acc + 604 - (acc % 61);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 96) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 159) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-20'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-21'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 113) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  for (let i25 = 0; i25 < 9; i25++) {
    acc = (acc + i25 * 13 + 524) % 100003;
  }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  try { if (acc % 29 === 13) { throw new Error('synthetic-28'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 85) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const ix32: number = buf.indexOf('p61');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  if (acc % 6 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 113) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec61 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  if (acc % 21 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const rc38: Rec61 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  for (let i41 = 0; i41 < 7; i41++) {
    acc = (acc + i41 * 13 + 971) % 100003;
  }
  buf += 'dock42-' + acc.toString();
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  m01.set('k48', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const ix51: number = buf.indexOf('p61');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0061_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8033) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit61 = new Unit61(acc);
  const ix0: number = buf.indexOf('p61');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  const ix1: number = buf.indexOf('p61');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  if (acc % 30 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const rc4: Rec61 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 34) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  m01.set('k7', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  acc = acc + 361 - (acc % 36);
  acc = acc + 672 - (acc % 10);
  try { if (acc % 29 === 20) { throw new Error('synthetic-14'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4489) % 65521;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 81) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 948 - (acc % 44);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  acc = (acc * 31 + 1853) % 65521;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 65) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const rc24: Rec61 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  acc = (acc * 31 + 1156) % 65521;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  buf += `q27:${acc % 97}`;
  buf += `q28:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 141) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 70) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix37: number = buf.indexOf('p61');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  buf += 'ledger38-' + acc.toString();
  const rc39: Rec61 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  if (acc % 6 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = acc + 787 - (acc % 26);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 36) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  buf += `q45:${acc % 97}`;
  buf += `q46:${acc % 97}`;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 85) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
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

export function reg_0061(): BizFn[] {
  return [biz_0061_00, biz_0061_01, biz_0061_02, biz_0061_03, biz_0061_04, biz_0061_05, biz_0061_06, biz_0061_07, biz_0061_08, biz_0061_09, biz_0061_10, biz_0061_11, biz_0061_12, biz_0061_13, biz_0061_14, biz_0061_15, biz_0061_16, biz_0061_17, biz_0061_18, biz_0061_19, biz_0061_20, biz_0061_21, biz_0061_22, biz_0061_23, biz_0061_24, biz_0061_25, biz_0061_26, biz_0061_27, biz_0061_28, biz_0061_29, biz_0061_30, biz_0061_31, biz_0061_32, biz_0061_33, biz_0061_34, biz_0061_35, biz_0061_36, biz_0061_37, biz_0061_38, biz_0061_39, biz_0061_40, biz_0061_41, biz_0061_42];
}

export function rega_0061(): ABizFn[] {
  return [biz_0061_09a, biz_0061_19a, biz_0061_29a, biz_0061_39a];
}
