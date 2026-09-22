// Biz0072.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec72 { id: number; tag: string; score: number; }

class Unit72 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0072_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9432) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  if (acc % 9 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  buf += `q2:${acc % 97}`;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  acc = acc + 500 - (acc % 36);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  for (let i8 = 0; i8 < 8; i8++) {
    acc = (acc + i8 * 13 + 579) % 100003;
  }
  if (acc % 24 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-10'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-11'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 310 - (acc % 52);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  if (acc % 22 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  for (let i16 = 0; i16 < 5; i16++) {
    acc = (acc + i16 * 13 + 270) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 112) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = acc + 578 - (acc % 58);
  buf += `q21:${acc % 97}`;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  arr.push(acc % 1000);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-26'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const ix29: number = buf.indexOf('p72');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  for (let i30 = 0; i30 < 10; i30++) {
    acc = (acc + i30 * 13 + 340) % 100003;
  }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 101) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 103) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  if (acc % 23 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-40'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'pickup41-' + acc.toString();
  m01.set('k42', acc % 997);
  const ix43: number = buf.indexOf('p72');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const rc44: Rec72 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += 'region45-' + acc.toString();
  arr.push(acc % 1000);
  buf += 'portal47-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  for (let i50 = 0; i50 < 3; i50++) {
    acc = (acc + i50 * 13 + 38) % 100003;
  }
  const ix51: number = buf.indexOf('p72');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9433) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  const ix1: number = buf.indexOf('p72');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-2'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 46) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  buf += `q4:${acc % 97}`;
  buf += `q5:${acc % 97}`;
  const rc6: Rec72 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  acc = acc + 59 - (acc % 69);
  buf += `q8:${acc % 97}`;
  acc = acc + 666 - (acc % 47);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const rc11: Rec72 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  try { if (acc % 29 === 5) { throw new Error('synthetic-16'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 27) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec72 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 43) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 194) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  m01.set('k23', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 11) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  if (acc % 31 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  for (let i30 = 0; i30 < 10; i30++) {
    acc = (acc + i30 * 13 + 505) % 100003;
  }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 131) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  for (let i33 = 0; i33 < 7; i33++) {
    acc = (acc + i33 * 13 + 334) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 106) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  acc = (acc * 31 + 5085) % 65521;
  const ix38: number = buf.indexOf('p72');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  buf += `q39:${acc % 97}`;
  buf += 'depot40-' + acc.toString();
  try { if (acc % 29 === 9) { throw new Error('synthetic-41'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const rc47: Rec72 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  buf += 'order51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9434) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  const ix0: number = buf.indexOf('p72');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  m01.set('k1', acc % 997);
  acc = (acc * 31 + 2701) % 65521;
  arr.push(acc % 1000);
  if (acc % 17 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += `q5:${acc % 97}`;
  const ix6: number = buf.indexOf('p72');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  if (acc % 6 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  buf += `q9:${acc % 97}`;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 71) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 99) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  if (acc % 24 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const rc13: Rec72 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 136) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const ix20: number = buf.indexOf('p72');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const ix21: number = buf.indexOf('p72');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  acc = acc + 907 - (acc % 78);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  try { if (acc % 29 === 20) { throw new Error('synthetic-24'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const ix25: number = buf.indexOf('p72');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  m01.set('k26', acc % 997);
  buf += 'region27-' + acc.toString();
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const rc29: Rec72 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  acc = (acc * 31 + 7637) % 65521;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  acc = (acc * 31 + 637) % 65521;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 177) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 73) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 20) { throw new Error('synthetic-40'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const rc41: Rec72 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 137) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  acc = acc + 716 - (acc % 88);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  buf += `q45:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-46'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  acc = (acc * 31 + 5788) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9435) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  if (acc % 10 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const rc3: Rec72 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += `q4:${acc % 97}`;
  acc = (acc * 31 + 2728) % 65521;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  for (let i8 = 0; i8 < 11; i8++) {
    acc = (acc + i8 * 13 + 721) % 100003;
  }
  buf += `q9:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 8) { throw new Error('synthetic-12'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const ix13: number = buf.indexOf('p72');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 98) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  acc = acc + 271 - (acc % 89);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 149) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const rc19: Rec72 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  if (acc % 23 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  buf += `q22:${acc % 97}`;
  const rc23: Rec72 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  if (acc % 13 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  acc = (acc * 31 + 3528) % 65521;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 12) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 12) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  buf += `q29:${acc % 97}`;
  const rc30: Rec72 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  try { if (acc % 29 === 22) { throw new Error('synthetic-31'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 5889) % 65521;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 108) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  acc = (acc * 31 + 1876) % 65521;
  if (acc % 31 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-39'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  for (let i41 = 0; i41 < 8; i41++) {
    acc = (acc + i41 * 13 + 699) % 100003;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-42'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i43 = 0; i43 < 4; i43++) {
    acc = (acc + i43 * 13 + 579) % 100003;
  }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  for (let i45 = 0; i45 < 4; i45++) {
    acc = (acc + i45 * 13 + 159) % 100003;
  }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  try { if (acc % 29 === 10) { throw new Error('synthetic-48'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  arr.push(acc % 1000);
  acc = acc + 402 - (acc % 63);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9436) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  buf += 'coupon0-' + acc.toString();
  const rc1: Rec72 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  buf += 'payout2-' + acc.toString();
  acc = (acc * 31 + 7614) % 65521;
  acc = acc + 709 - (acc % 46);
  const rc5: Rec72 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const rc6: Rec72 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  arr.push(acc % 1000);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 35) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  buf += 'coupon9-' + acc.toString();
  acc = (acc * 31 + 3924) % 65521;
  const rc11: Rec72 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 94) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 11; i18++) {
    acc = (acc + i18 * 13 + 468) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  acc = (acc * 31 + 8191) % 65521;
  for (let i21 = 0; i21 < 10; i21++) {
    acc = (acc + i21 * 13 + 816) % 100003;
  }
  const ix22: number = buf.indexOf('p72');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  buf += 'invoice23-' + acc.toString();
  acc = (acc * 31 + 378) % 65521;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 162) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += `q26:${acc % 97}`;
  acc = (acc * 31 + 522) % 65521;
  for (let i28 = 0; i28 < 7; i28++) {
    acc = (acc + i28 * 13 + 783) % 100003;
  }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  acc = acc + 767 - (acc % 26);
  buf += `q31:${acc % 97}`;
  const ix32: number = buf.indexOf('p72');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 196) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 190) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const ix36: number = buf.indexOf('p72');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-37'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const ix38: number = buf.indexOf('p72');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 31) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-40'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 61) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-43'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 29 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (acc % 30 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = (acc * 31 + 423) % 65521;
  acc = (acc * 31 + 8792) % 65521;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9437) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const ix1: number = buf.indexOf('p72');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += `q4:${acc % 97}`;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 89) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  buf += `q6:${acc % 97}`;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += 'dock8-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  buf += `q11:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-12'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 2469) % 65521;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += `q15:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 108) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p72');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  const rc19: Rec72 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  buf += `q21:${acc % 97}`;
  acc = (acc * 31 + 2853) % 65521;
  acc = acc + 826 - (acc % 37);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 39) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (acc % 26 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const rc30: Rec72 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-31'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q32:${acc % 97}`;
  for (let i33 = 0; i33 < 3; i33++) {
    acc = (acc + i33 * 13 + 865) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 88) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  for (let i37 = 0; i37 < 7; i37++) {
    acc = (acc + i37 * 13 + 56) % 100003;
  }
  buf += `q38:${acc % 97}`;
  acc = acc + 678 - (acc % 27);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  for (let i41 = 0; i41 < 5; i41++) {
    acc = (acc + i41 * 13 + 686) % 100003;
  }
  if (acc % 28 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  if (acc % 21 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 1297) % 65521;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  for (let i47 = 0; i47 < 4; i47++) {
    acc = (acc + i47 * 13 + 262) % 100003;
  }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 192) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  if (acc % 18 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9438) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 160) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  for (let i2 = 0; i2 < 12; i2++) {
    acc = (acc + i2 * 13 + 673) % 100003;
  }
  buf += 'sku3-' + acc.toString();
  arr.push(acc % 1000);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  for (let i6 = 0; i6 < 8; i6++) {
    acc = (acc + i6 * 13 + 872) % 100003;
  }
  for (let i7 = 0; i7 < 8; i7++) {
    acc = (acc + i7 * 13 + 104) % 100003;
  }
  for (let i8 = 0; i8 < 6; i8++) {
    acc = (acc + i8 * 13 + 985) % 100003;
  }
  buf += 'balance9-' + acc.toString();
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  m01.set('k11', acc % 997);
  arr.push(acc % 1000);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 96) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += 'pickup14-' + acc.toString();
  try { if (acc % 29 === 3) { throw new Error('synthetic-15'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 123) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 163) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  for (let i21 = 0; i21 < 3; i21++) {
    acc = (acc + i21 * 13 + 155) % 100003;
  }
  buf += 'crate22-' + acc.toString();
  const rc23: Rec72 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  for (let i24 = 0; i24 < 8; i24++) {
    acc = (acc + i24 * 13 + 962) % 100003;
  }
  m01.set('k25', acc % 997);
  arr.push(acc % 1000);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  if (acc % 30 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  acc = (acc * 31 + 2947) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  for (let i33 = 0; i33 < 9; i33++) {
    acc = (acc + i33 * 13 + 44) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 186) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 4; i35++) {
    acc = (acc + i35 * 13 + 468) % 100003;
  }
  if (acc % 31 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 134) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 2) { throw new Error('synthetic-40'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const ix42: number = buf.indexOf('p72');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  m01.set('k45', acc % 997);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 42) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  acc = (acc * 31 + 6528) % 65521;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  arr.push(acc % 1000);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const ix51: number = buf.indexOf('p72');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9439) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 47) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += `q4:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q6:${acc % 97}`;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  if (acc % 6 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const rc10: Rec72 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = acc + 984 - (acc % 8);
  const rc12: Rec72 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  m01.set('k14', acc % 997);
  if (acc % 14 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = acc + 936 - (acc % 35);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 59) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const rc21: Rec72 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 189) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i24 = 0; i24 < 11; i24++) {
    acc = (acc + i24 * 13 + 162) % 100003;
  }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  arr.push(acc % 1000);
  const ix28: number = buf.indexOf('p72');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i30 = 0; i30 < 10; i30++) {
    acc = (acc + i30 * 13 + 269) % 100003;
  }
  buf += `q31:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 161) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += 'freight39-' + acc.toString();
  m01.set('k40', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const rc42: Rec72 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  buf += `q44:${acc % 97}`;
  m01.set('k45', acc % 997);
  acc = acc + 152 - (acc % 35);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  acc = acc + 802 - (acc % 61);
  m01.set('k50', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9440) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  acc = acc + 220 - (acc % 47);
  buf += `q1:${acc % 97}`;
  buf += `q2:${acc % 97}`;
  acc = (acc * 31 + 7496) % 65521;
  acc = acc + 918 - (acc % 56);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  m01.set('k6', acc % 997);
  const ix7: number = buf.indexOf('p72');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 30) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  buf += 'freight16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 68) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 83) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  buf += 'vendor19-' + acc.toString();
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  acc = acc + 161 - (acc % 86);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const ix23: number = buf.indexOf('p72');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const ix25: number = buf.indexOf('p72');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const ix26: number = buf.indexOf('p72');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  buf += `q27:${acc % 97}`;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 57) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const rc30: Rec72 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  arr.push(acc % 1000);
  acc = acc + 845 - (acc % 38);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 115) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const rc36: Rec72 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  m01.set('k39', acc % 997);
  buf += 'tariff40-' + acc.toString();
  const rc41: Rec72 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  acc = acc + 245 - (acc % 95);
  try { if (acc % 29 === 22) { throw new Error('synthetic-43'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  const ix44: number = buf.indexOf('p72');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const rc45: Rec72 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  buf += `q47:${acc % 97}`;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-49'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const rc50: Rec72 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  for (let i51 = 0; i51 < 8; i51++) {
    acc = (acc + i51 * 13 + 362) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9441) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  m01.set('k0', acc % 997);
  try { if (acc % 29 === 18) { throw new Error('synthetic-1'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  const ix2: number = buf.indexOf('p72');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 4) { throw new Error('synthetic-4'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k5', acc % 997);
  const ix6: number = buf.indexOf('p72');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += 'warehouse7-' + acc.toString();
  arr.push(acc % 1000);
  buf += `q9:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += 'payout15-' + acc.toString();
  try { if (acc % 29 === 9) { throw new Error('synthetic-16'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 110) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  arr.push(acc % 1000);
  m01.set('k20', acc % 997);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  buf += 'region22-' + acc.toString();
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 14) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-25'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-26'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  for (let i29 = 0; i29 < 7; i29++) {
    acc = (acc + i29 * 13 + 46) % 100003;
  }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  acc = acc + 107 - (acc % 53);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 138) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 93) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec72 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const rc36: Rec72 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  if (acc % 18 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  for (let i39 = 0; i39 < 3; i39++) {
    acc = (acc + i39 * 13 + 496) % 100003;
  }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 20) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const rc41: Rec72 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  m01.set('k42', acc % 997);
  for (let i43 = 0; i43 < 6; i43++) {
    acc = (acc + i43 * 13 + 530) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  if (acc % 17 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  acc = acc + 429 - (acc % 12);
  for (let i51 = 0; i51 < 12; i51++) {
    acc = (acc + i51 * 13 + 159) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0072_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0072_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0072_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9442) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = acc + 974 - (acc % 43);
  buf += `q2:${acc % 97}`;
  buf += 'region3-' + acc.toString();
  arr.push(acc % 1000);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const rc6: Rec72 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 60) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  acc = acc + 402 - (acc % 85);
  const rc10: Rec72 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = acc + 940 - (acc % 40);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  try { if (acc % 29 === 7) { throw new Error('synthetic-13'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 88) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 11; i18++) {
    acc = (acc + i18 * 13 + 706) % 100003;
  }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 185) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  for (let i20 = 0; i20 < 10; i20++) {
    acc = (acc + i20 * 13 + 739) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  acc = (acc * 31 + 5463) % 65521;
  buf += `q23:${acc % 97}`;
  acc = acc + 338 - (acc % 30);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = acc + 479 - (acc % 68);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-29'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 997 - (acc % 18);
  buf += `q31:${acc % 97}`;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 72) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec72 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 78) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-39'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 197 - (acc % 20);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  for (let i43 = 0; i43 < 12; i43++) {
    acc = (acc + i43 * 13 + 234) % 100003;
  }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 164) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  if (acc % 20 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = (acc * 31 + 5519) % 65521;
  if (acc % 15 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9443) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 11) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  buf += 'balance3-' + acc.toString();
  const ix4: number = buf.indexOf('p72');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = acc + 86 - (acc % 13);
  buf += `q6:${acc % 97}`;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 135) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const rc10: Rec72 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  if (acc % 31 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  buf += 'ticket12-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  arr.push(acc % 1000);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-16'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 87) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const ix21: number = buf.indexOf('p72');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const ix22: number = buf.indexOf('p72');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  const rc23: Rec72 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += 'tariff25-' + acc.toString();
  if (acc % 19 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const rc30: Rec72 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  acc = acc + 268 - (acc % 48);
  const rc32: Rec72 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 160) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 6; i35++) {
    acc = (acc + i35 * 13 + 363) % 100003;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-36'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 24) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  acc = acc + 309 - (acc % 86);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  acc = acc + 350 - (acc % 66);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  buf += `q43:${acc % 97}`;
  const rc44: Rec72 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  try { if (acc % 29 === 7) { throw new Error('synthetic-45'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 13 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  for (let i47 = 0; i47 < 4; i47++) {
    acc = (acc + i47 * 13 + 789) % 100003;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-48'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 158) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9444) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 102) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  acc = (acc * 31 + 9087) % 65521;
  acc = (acc * 31 + 5580) % 65521;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 24) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const ix12: number = buf.indexOf('p72');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const rc13: Rec72 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  acc = (acc * 31 + 4946) % 65521;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 189) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 144) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p72');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const rc21: Rec72 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  buf += 'quota23-' + acc.toString();
  acc = (acc * 31 + 7360) % 65521;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = acc + 537 - (acc % 79);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const rc30: Rec72 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  const rc31: Rec72 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  if (acc % 9 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  for (let i33 = 0; i33 < 7; i33++) {
    acc = (acc + i33 * 13 + 734) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 137) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  m01.set('k39', acc % 997);
  m01.set('k40', acc % 997);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 35) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  m01.set('k43', acc % 997);
  buf += 'routeplan44-' + acc.toString();
  acc = (acc * 31 + 9739) % 65521;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  m01.set('k48', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  if (acc % 9 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  buf += 'routeplan51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9445) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  acc = (acc * 31 + 2200) % 65521;
  buf += 'dispatch1-' + acc.toString();
  for (let i2 = 0; i2 < 9; i2++) {
    acc = (acc + i2 * 13 + 140) % 100003;
  }
  buf += 'freight3-' + acc.toString();
  if (acc % 12 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 28) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const ix7: number = buf.indexOf('p72');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7224) % 65521;
  buf += 'dock9-' + acc.toString();
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  try { if (acc % 29 === 12) { throw new Error('synthetic-11'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q12:${acc % 97}`;
  m01.set('k13', acc % 997);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const rc15: Rec72 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  for (let i16 = 0; i16 < 12; i16++) {
    acc = (acc + i16 * 13 + 248) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 81) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 846 - (acc % 48);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const rc20: Rec72 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = (acc * 31 + 2153) % 65521;
  acc = acc + 231 - (acc % 62);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  arr.push(acc % 1000);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  try { if (acc % 29 === 8) { throw new Error('synthetic-29'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k30', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  m01.set('k32', acc % 997);
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 111) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 806 - (acc % 9);
  m01.set('k36', acc % 997);
  const rc37: Rec72 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  acc = acc + 38 - (acc % 26);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 80) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const rc46: Rec72 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  acc = (acc * 31 + 643) % 65521;
  const ix48: number = buf.indexOf('p72');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 64) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  acc = (acc * 31 + 3926) % 65521;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9446) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  arr.push(acc % 1000);
  buf += `q1:${acc % 97}`;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += 'batch3-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const ix7: number = buf.indexOf('p72');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  m01.set('k8', acc % 997);
  for (let i9 = 0; i9 < 9; i9++) {
    acc = (acc + i9 * 13 + 615) % 100003;
  }
  const rc10: Rec72 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += `q13:${acc % 97}`;
  buf += 'bay14-' + acc.toString();
  if (acc % 26 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += 'bay16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 43) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  buf += `q20:${acc % 97}`;
  const rc21: Rec72 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  for (let i23 = 0; i23 < 4; i23++) {
    acc = (acc + i23 * 13 + 573) % 100003;
  }
  for (let i24 = 0; i24 < 12; i24++) {
    acc = (acc + i24 * 13 + 318) % 100003;
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 6) { throw new Error('synthetic-28'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = (acc * 31 + 7652) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  acc = (acc * 31 + 1897) % 65521;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 134) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  for (let i37 = 0; i37 < 4; i37++) {
    acc = (acc + i37 * 13 + 38) % 100003;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-38'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += 'region40-' + acc.toString();
  arr.push(acc % 1000);
  buf += `q42:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  m01.set('k45', acc % 997);
  m01.set('k46', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-48'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const rc49: Rec72 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9447) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  try { if (acc % 29 === 4) { throw new Error('synthetic-0'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = (acc * 31 + 9642) % 65521;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += 'carrier6-' + acc.toString();
  arr.push(acc % 1000);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  for (let i12 = 0; i12 < 6; i12++) {
    acc = (acc + i12 * 13 + 781) % 100003;
  }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  if (acc % 7 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 141) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 628 - (acc % 22);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const ix22: number = buf.indexOf('p72');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const rc24: Rec72 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const ix25: number = buf.indexOf('p72');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  const rc27: Rec72 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const ix29: number = buf.indexOf('p72');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const rc31: Rec72 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  if (acc % 11 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  buf += 'ticket33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 44) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 170) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 82) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 245) % 65521;
  acc = (acc * 31 + 933) % 65521;
  for (let i45 = 0; i45 < 8; i45++) {
    acc = (acc + i45 * 13 + 99) % 100003;
  }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const ix49: number = buf.indexOf('p72');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (acc % 5 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9448) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  const ix0: number = buf.indexOf('p72');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  buf += 'carrier1-' + acc.toString();
  buf += 'region2-' + acc.toString();
  buf += 'rebate3-' + acc.toString();
  buf += `q4:${acc % 97}`;
  acc = acc + 879 - (acc % 14);
  acc = (acc * 31 + 5351) % 65521;
  const ix7: number = buf.indexOf('p72');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-8'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const ix10: number = buf.indexOf('p72');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  buf += `q11:${acc % 97}`;
  acc = acc + 562 - (acc % 72);
  for (let i13 = 0; i13 < 9; i13++) {
    acc = (acc + i13 * 13 + 283) % 100003;
  }
  buf += `q14:${acc % 97}`;
  acc = acc + 483 - (acc % 53);
  buf += 'batch16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 186) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const ix19: number = buf.indexOf('p72');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  m01.set('k22', acc % 997);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 17) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  buf += `q26:${acc % 97}`;
  const rc27: Rec72 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const rc29: Rec72 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2967) % 65521;
  m01.set('k32', acc % 997);
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 17) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  m01.set('k36', acc % 997);
  buf += `q37:${acc % 97}`;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  acc = acc + 401 - (acc % 76);
  buf += 'order40-' + acc.toString();
  buf += 'customs41-' + acc.toString();
  try { if (acc % 29 === 7) { throw new Error('synthetic-42'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  if (acc % 31 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = (acc * 31 + 573) % 65521;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  buf += 'ledger48-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  try { if (acc % 29 === 17) { throw new Error('synthetic-50'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 20 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9449) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  arr.push(acc % 1000);
  const rc5: Rec72 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += `q6:${acc % 97}`;
  buf += 'quota7-' + acc.toString();
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  m01.set('k11', acc % 997);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  if (acc % 14 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  acc = acc + 432 - (acc % 86);
  const ix15: number = buf.indexOf('p72');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 72) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  buf += 'vendor19-' + acc.toString();
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const rc22: Rec72 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  if (acc % 21 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 22) { throw new Error('synthetic-25'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  acc = acc + 227 - (acc % 64);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 100) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  buf += `q30:${acc % 97}`;
  for (let i31 = 0; i31 < 9; i31++) {
    acc = (acc + i31 * 13 + 424) % 100003;
  }
  for (let i32 = 0; i32 < 8; i32++) {
    acc = (acc + i32 * 13 + 636) % 100003;
  }
  const rc33: Rec72 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 115) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 97) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  m01.set('k36', acc % 997);
  for (let i37 = 0; i37 < 5; i37++) {
    acc = (acc + i37 * 13 + 321) % 100003;
  }
  for (let i38 = 0; i38 < 3; i38++) {
    acc = (acc + i38 * 13 + 731) % 100003;
  }
  arr.push(acc % 1000);
  const ix40: number = buf.indexOf('p72');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  for (let i41 = 0; i41 < 7; i41++) {
    acc = (acc + i41 * 13 + 656) % 100003;
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  buf += 'tariff43-' + acc.toString();
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 42) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  m01.set('k48', acc % 997);
  for (let i49 = 0; i49 < 7; i49++) {
    acc = (acc + i49 * 13 + 45) % 100003;
  }
  const rc50: Rec72 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  for (let i51 = 0; i51 < 9; i51++) {
    acc = (acc + i51 * 13 + 258) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9450) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  buf += `q0:${acc % 97}`;
  buf += `q1:${acc % 97}`;
  const rc2: Rec72 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  buf += `q3:${acc % 97}`;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  acc = acc + 452 - (acc % 71);
  try { if (acc % 29 === 18) { throw new Error('synthetic-8'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  const ix9: number = buf.indexOf('p72');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  for (let i12 = 0; i12 < 3; i12++) {
    acc = (acc + i12 * 13 + 728) % 100003;
  }
  buf += `q13:${acc % 97}`;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  arr.push(acc % 1000);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 34) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p72');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  const rc19: Rec72 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  try { if (acc % 29 === 10) { throw new Error('synthetic-20'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 254 - (acc % 72);
  arr.push(acc % 1000);
  const rc23: Rec72 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const rc24: Rec72 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  if (acc % 9 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  if (acc % 14 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  try { if (acc % 29 === 17) { throw new Error('synthetic-29'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const rc30: Rec72 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  m01.set('k31', acc % 997);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 145) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 60) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const ix40: number = buf.indexOf('p72');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3198) % 65521;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const rc46: Rec72 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const ix48: number = buf.indexOf('p72');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  const rc49: Rec72 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 103) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = acc + 835 - (acc % 23);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9451) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-1'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 750) % 65521;
  const ix4: number = buf.indexOf('p72');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const rc9: Rec72 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  arr.push(acc % 1000);
  if (acc % 25 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3137) % 65521;
  arr.push(acc % 1000);
  for (let i14 = 0; i14 < 12; i14++) {
    acc = (acc + i14 * 13 + 249) % 100003;
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  if (acc % 10 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 93) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 372 - (acc % 9);
  m01.set('k19', acc % 997);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  buf += 'policy21-' + acc.toString();
  acc = acc + 716 - (acc % 88);
  m01.set('k23', acc % 997);
  buf += `q24:${acc % 97}`;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 122) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  arr.push(acc % 1000);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 11) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = (acc * 31 + 5540) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 194) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  if (acc % 14 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  acc = acc + 648 - (acc % 19);
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += `q49:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0072_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0072_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0072_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9452) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  buf += 'dispatch1-' + acc.toString();
  acc = acc + 331 - (acc % 96);
  acc = (acc * 31 + 1339) % 65521;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  arr.push(acc % 1000);
  const ix7: number = buf.indexOf('p72');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  buf += 'dock8-' + acc.toString();
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  acc = acc + 319 - (acc % 59);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6354) % 65521;
  m01.set('k13', acc % 997);
  const rc14: Rec72 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 187) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 9367) % 65521;
  acc = acc + 898 - (acc % 57);
  arr.push(acc % 1000);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 23) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  m01.set('k22', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const rc24: Rec72 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 60) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  if (acc % 7 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  acc = acc + 566 - (acc % 19);
  acc = acc + 225 - (acc % 35);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  if (acc % 9 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 126) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k36', acc % 997);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  buf += 'journey39-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (acc % 30 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += 'journey44-' + acc.toString();
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  for (let i46 = 0; i46 < 3; i46++) {
    acc = (acc + i46 * 13 + 813) % 100003;
  }
  buf += 'ledger47-' + acc.toString();
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 24) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = (acc * 31 + 2465) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9453) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  const ix0: number = buf.indexOf('p72');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  acc = (acc * 31 + 5914) % 65521;
  const rc3: Rec72 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  try { if (acc % 29 === 16) { throw new Error('synthetic-5'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  m01.set('k7', acc % 997);
  buf += `q8:${acc % 97}`;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  m01.set('k10', acc % 997);
  const rc11: Rec72 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = (acc * 31 + 2171) % 65521;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (acc % 11 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 159) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  for (let i19 = 0; i19 < 5; i19++) {
    acc = (acc + i19 * 13 + 574) % 100003;
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  arr.push(acc % 1000);
  m01.set('k22', acc % 997);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  if (acc % 31 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  m01.set('k27', acc % 997);
  const ix28: number = buf.indexOf('p72');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  buf += `q29:${acc % 97}`;
  arr.push(acc % 1000);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 39) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 148) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const ix38: number = buf.indexOf('p72');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  acc = acc + 705 - (acc % 62);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  if (acc % 18 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  for (let i44 = 0; i44 < 11; i44++) {
    acc = (acc + i44 * 13 + 113) % 100003;
  }
  const ix45: number = buf.indexOf('p72');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const ix46: number = buf.indexOf('p72');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = acc + 590 - (acc % 40);
  acc = acc + 530 - (acc % 33);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9454) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  acc = acc + 49 - (acc % 11);
  try { if (acc % 29 === 10) { throw new Error('synthetic-2'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 661 - (acc % 81);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const ix5: number = buf.indexOf('p72');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  for (let i6 = 0; i6 < 10; i6++) {
    acc = (acc + i6 * 13 + 542) % 100003;
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 124) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 43) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  if (acc % 5 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-12'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'customs13-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  acc = acc + 945 - (acc % 89);
  buf += 'balance16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 71) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  buf += `q19:${acc % 97}`;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 103) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  m01.set('k21', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  buf += 'warehouse25-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  acc = (acc * 31 + 5495) % 65521;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const ix29: number = buf.indexOf('p72');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 68) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 99 - (acc % 17);
  const rc36: Rec72 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  arr.push(acc % 1000);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 106) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 162) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 18) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  m01.set('k43', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  buf += `q46:${acc % 97}`;
  const rc47: Rec72 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  arr.push(acc % 1000);
  if (acc % 11 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  buf += `q50:${acc % 97}`;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9455) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  buf += 'rebate0-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  try { if (acc % 29 === 13) { throw new Error('synthetic-2'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const ix3: number = buf.indexOf('p72');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5064) % 65521;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 170) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  buf += `q7:${acc % 97}`;
  m01.set('k8', acc % 997);
  acc = (acc * 31 + 2535) % 65521;
  arr.push(acc % 1000);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 144) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-13'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  for (let i15 = 0; i15 < 3; i15++) {
    acc = (acc + i15 * 13 + 89) % 100003;
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 198) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 22) { throw new Error('synthetic-18'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-19'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k20', acc % 997);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  buf += `q22:${acc % 97}`;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  buf += `q24:${acc % 97}`;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  m01.set('k26', acc % 997);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  m01.set('k28', acc % 997);
  buf += `q29:${acc % 97}`;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const rc32: Rec72 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += 'freight33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 168) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  for (let i39 = 0; i39 < 12; i39++) {
    acc = (acc + i39 * 13 + 381) % 100003;
  }
  arr.push(acc % 1000);
  const rc41: Rec72 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  acc = acc + 960 - (acc % 53);
  for (let i43 = 0; i43 < 6; i43++) {
    acc = (acc + i43 * 13 + 945) % 100003;
  }
  if (acc % 31 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  acc = acc + 650 - (acc % 55);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const ix48: number = buf.indexOf('p72');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 1543) % 65521;
  buf += `q50:${acc % 97}`;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9456) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  buf += 'sku1-' + acc.toString();
  buf += 'audit2-' + acc.toString();
  m01.set('k3', acc % 997);
  m01.set('k4', acc % 997);
  buf += 'audit5-' + acc.toString();
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const ix8: number = buf.indexOf('p72');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const ix9: number = buf.indexOf('p72');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const ix10: number = buf.indexOf('p72');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  for (let i13 = 0; i13 < 6; i13++) {
    acc = (acc + i13 * 13 + 727) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += 'warehouse16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 188) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  acc = acc + 905 - (acc % 20);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  acc = acc + 473 - (acc % 49);
  buf += 'portal27-' + acc.toString();
  for (let i28 = 0; i28 < 10; i28++) {
    acc = (acc + i28 * 13 + 288) % 100003;
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 151) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  m01.set('k30', acc % 997);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 106) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = (acc * 31 + 3697) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 95) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'shelf36-' + acc.toString();
  acc = (acc * 31 + 3060) % 65521;
  arr.push(acc % 1000);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 32) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  m01.set('k40', acc % 997);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  m01.set('k42', acc % 997);
  acc = acc + 769 - (acc % 46);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  buf += 'stocktake45-' + acc.toString();
  acc = acc + 224 - (acc % 7);
  arr.push(acc % 1000);
  if (acc % 12 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 6363) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9457) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  for (let i2 = 0; i2 < 11; i2++) {
    acc = (acc + i2 * 13 + 216) % 100003;
  }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  acc = acc + 818 - (acc % 38);
  buf += 'quota6-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (acc % 11 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  for (let i9 = 0; i9 < 7; i9++) {
    acc = (acc + i9 * 13 + 476) % 100003;
  }
  acc = (acc * 31 + 4609) % 65521;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  buf += 'quota13-' + acc.toString();
  m01.set('k14', acc % 997);
  arr.push(acc % 1000);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 130) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 47) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += `q27:${acc % 97}`;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const rc29: Rec72 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const ix30: number = buf.indexOf('p72');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  if (acc % 29 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-32'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 871 - (acc % 85);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 87) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 4; i35++) {
    acc = (acc + i35 * 13 + 512) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += 'policy39-' + acc.toString();
  const ix40: number = buf.indexOf('p72');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  m01.set('k46', acc % 997);
  try { if (acc % 29 === 10) { throw new Error('synthetic-47'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  if (acc % 8 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  for (let i50 = 0; i50 < 6; i50++) {
    acc = (acc + i50 * 13 + 596) % 100003;
  }
  for (let i51 = 0; i51 < 8; i51++) {
    acc = (acc + i51 * 13 + 475) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9458) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  acc = acc + 311 - (acc % 24);
  buf += `q2:${acc % 97}`;
  const ix3: number = buf.indexOf('p72');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += 'freight5-' + acc.toString();
  for (let i6 = 0; i6 < 5; i6++) {
    acc = (acc + i6 * 13 + 505) % 100003;
  }
  acc = (acc * 31 + 8329) % 65521;
  const ix8: number = buf.indexOf('p72');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  m01.set('k9', acc % 997);
  acc = acc + 265 - (acc % 36);
  for (let i11 = 0; i11 < 5; i11++) {
    acc = (acc + i11 * 13 + 275) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (acc % 8 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  for (let i14 = 0; i14 < 11; i14++) {
    acc = (acc + i14 * 13 + 226) % 100003;
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 127) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 68) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  buf += 'client22-' + acc.toString();
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  for (let i24 = 0; i24 < 5; i24++) {
    acc = (acc + i24 * 13 + 780) % 100003;
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  buf += `q26:${acc % 97}`;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 103) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  try { if (acc % 29 === 13) { throw new Error('synthetic-28'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += 'policy33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 48) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 389 - (acc % 26);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const ix38: number = buf.indexOf('p72');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const rc39: Rec72 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  for (let i42 = 0; i42 < 11; i42++) {
    acc = (acc + i42 * 13 + 901) % 100003;
  }
  m01.set('k43', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = acc + 938 - (acc % 13);
  if (acc % 18 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const rc47: Rec72 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const ix48: number = buf.indexOf('p72');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  for (let i50 = 0; i50 < 3; i50++) {
    acc = (acc + i50 * 13 + 246) % 100003;
  }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9459) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  acc = acc + 596 - (acc % 57);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-4'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 25 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  m01.set('k6', acc % 997);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const ix8: number = buf.indexOf('p72');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  m01.set('k10', acc % 997);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 994) % 100003;
  }
  acc = acc + 184 - (acc % 92);
  arr.push(acc % 1000);
  if (acc % 8 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = (acc * 31 + 705) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 77) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 14 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  buf += 'depot21-' + acc.toString();
  try { if (acc % 29 === 14) { throw new Error('synthetic-22'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  if (acc % 7 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  for (let i26 = 0; i26 < 8; i26++) {
    acc = (acc + i26 * 13 + 578) % 100003;
  }
  const rc27: Rec72 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const rc28: Rec72 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  buf += 'client29-' + acc.toString();
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 169) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  for (let i32 = 0; i32 < 5; i32++) {
    acc = (acc + i32 * 13 + 507) % 100003;
  }
  const ix33: number = buf.indexOf('p72');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 40) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 88 - (acc % 8);
  const ix36: number = buf.indexOf('p72');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  const ix37: number = buf.indexOf('p72');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 110) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = (acc * 31 + 7239) % 65521;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  m01.set('k44', acc % 997);
  acc = (acc * 31 + 5044) % 65521;
  if (acc % 11 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  buf += 'warehouse47-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-49'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 22 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9460) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  arr.push(acc % 1000);
  buf += 'tariff1-' + acc.toString();
  acc = (acc * 31 + 8555) % 65521;
  m01.set('k3', acc % 997);
  try { if (acc % 29 === 16) { throw new Error('synthetic-4'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q5:${acc % 97}`;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 158) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const rc8: Rec72 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  arr.push(acc % 1000);
  if (acc % 29 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  acc = acc + 105 - (acc % 25);
  buf += `q12:${acc % 97}`;
  if (acc % 23 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  if (acc % 25 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  acc = acc + 921 - (acc % 15);
  if (acc % 5 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 193) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 516 - (acc % 79);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  acc = acc + 240 - (acc % 22);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const rc24: Rec72 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  for (let i26 = 0; i26 < 9; i26++) {
    acc = (acc + i26 * 13 + 804) % 100003;
  }
  if (acc % 5 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  for (let i29 = 0; i29 < 8; i29++) {
    acc = (acc + i29 * 13 + 528) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  buf += 'freight31-' + acc.toString();
  const rc32: Rec72 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 33) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  acc = (acc * 31 + 3071) % 65521;
  buf += 'warehouse37-' + acc.toString();
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  try { if (acc % 29 === 11) { throw new Error('synthetic-39'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 66) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  for (let i41 = 0; i41 < 4; i41++) {
    acc = (acc + i41 * 13 + 501) % 100003;
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 9) { throw new Error('synthetic-43'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i44 = 0; i44 < 8; i44++) {
    acc = (acc + i44 * 13 + 230) % 100003;
  }
  for (let i45 = 0; i45 < 11; i45++) {
    acc = (acc + i45 * 13 + 641) % 100003;
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 1234) % 65521;
  m01.set('k48', acc % 997);
  if (acc % 9 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 87) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9461) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  buf += `q2:${acc % 97}`;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  acc = acc + 734 - (acc % 48);
  const rc6: Rec72 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const ix8: number = buf.indexOf('p72');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  m01.set('k9', acc % 997);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  buf += 'coupon11-' + acc.toString();
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  buf += 'region13-' + acc.toString();
  if (acc % 25 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 21) { throw new Error('synthetic-16'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 180) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 66) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  buf += `q22:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-24'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  arr.push(acc % 1000);
  const ix27: number = buf.indexOf('p72');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 39) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  buf += `q29:${acc % 97}`;
  try { if (acc % 29 === 2) { throw new Error('synthetic-30'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 984 - (acc % 55);
  try { if (acc % 29 === 12) { throw new Error('synthetic-32'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 285 - (acc % 7);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 83) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 9; i35++) {
    acc = (acc + i35 * 13 + 483) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += `q38:${acc % 97}`;
  for (let i39 = 0; i39 < 6; i39++) {
    acc = (acc + i39 * 13 + 371) % 100003;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-40'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i41 = 0; i41 < 6; i41++) {
    acc = (acc + i41 * 13 + 45) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  m01.set('k43', acc % 997);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 180) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  buf += `q45:${acc % 97}`;
  const rc46: Rec72 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 193) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  m01.set('k49', acc % 997);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0072_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0072_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0072_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9462) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  acc = acc + 574 - (acc % 90);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const ix3: number = buf.indexOf('p72');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8430) % 65521;
  arr.push(acc % 1000);
  buf += 'audit7-' + acc.toString();
  for (let i8 = 0; i8 < 10; i8++) {
    acc = (acc + i8 * 13 + 570) % 100003;
  }
  const ix9: number = buf.indexOf('p72');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  m01.set('k13', acc % 997);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-15'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 28) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const rc19: Rec72 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 86) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  for (let i22 = 0; i22 < 9; i22++) {
    acc = (acc + i22 * 13 + 980) % 100003;
  }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const rc24: Rec72 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const ix25: number = buf.indexOf('p72');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 8) { throw new Error('synthetic-27'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i28 = 0; i28 < 6; i28++) {
    acc = (acc + i28 * 13 + 827) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const ix30: number = buf.indexOf('p72');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  if (acc % 11 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 88) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 106) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  acc = (acc * 31 + 9458) % 65521;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 26) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  m01.set('k42', acc % 997);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  acc = (acc * 31 + 3967) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const ix46: number = buf.indexOf('p72');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 24) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  for (let i48 = 0; i48 < 10; i48++) {
    acc = (acc + i48 * 13 + 373) % 100003;
  }
  buf += `q49:${acc % 97}`;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9463) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  const rc0: Rec72 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  try { if (acc % 29 === 21) { throw new Error('synthetic-1'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  try { if (acc % 29 === 3) { throw new Error('synthetic-3'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'carrier4-' + acc.toString();
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  acc = (acc * 31 + 6223) % 65521;
  acc = acc + 242 - (acc % 44);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 55) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 124) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const ix11: number = buf.indexOf('p72');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 170) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const rc13: Rec72 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  arr.push(acc % 1000);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  acc = acc + 133 - (acc % 86);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 164) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = (acc * 31 + 808) % 65521;
  arr.push(acc % 1000);
  buf += 'dock21-' + acc.toString();
  const rc22: Rec72 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  arr.push(acc % 1000);
  const ix24: number = buf.indexOf('p72');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8165) % 65521;
  acc = acc + 150 - (acc % 84);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  if (acc % 9 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  for (let i29 = 0; i29 < 3; i29++) {
    acc = (acc + i29 * 13 + 29) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  for (let i32 = 0; i32 < 10; i32++) {
    acc = (acc + i32 * 13 + 13) % 100003;
  }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 117) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 6) { throw new Error('synthetic-35'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q36:${acc % 97}`;
  try { if (acc % 29 === 19) { throw new Error('synthetic-37'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const ix38: number = buf.indexOf('p72');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  m01.set('k39', acc % 997);
  for (let i40 = 0; i40 < 4; i40++) {
    acc = (acc + i40 * 13 + 834) % 100003;
  }
  acc = acc + 494 - (acc % 13);
  if (acc % 17 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  m01.set('k46', acc % 997);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  arr.push(acc % 1000);
  const ix49: number = buf.indexOf('p72');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9464) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  acc = (acc * 31 + 3801) % 65521;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  acc = acc + 292 - (acc % 80);
  acc = (acc * 31 + 8253) % 65521;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 184) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 78) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const ix8: number = buf.indexOf('p72');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  buf += 'transit9-' + acc.toString();
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  buf += `q11:${acc % 97}`;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 41) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = (acc * 31 + 2537) % 65521;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  m01.set('k15', acc % 997);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 185) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec72 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const rc19: Rec72 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  if (acc % 15 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  acc = (acc * 31 + 8507) % 65521;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  acc = acc + 955 - (acc % 80);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k28', acc % 997);
  acc = (acc * 31 + 3016) % 65521;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = (acc * 31 + 6240) % 65521;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  buf += 'policy33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 161) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'freight35-' + acc.toString();
  arr.push(acc % 1000);
  buf += `q37:${acc % 97}`;
  m01.set('k38', acc % 997);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  for (let i40 = 0; i40 < 9; i40++) {
    acc = (acc + i40 * 13 + 919) % 100003;
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 9568) % 65521;
  try { if (acc % 29 === 4) { throw new Error('synthetic-43'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  if (acc % 26 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  for (let i47 = 0; i47 < 4; i47++) {
    acc = (acc + i47 * 13 + 492) % 100003;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-48'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i49 = 0; i49 < 8; i49++) {
    acc = (acc + i49 * 13 + 368) % 100003;
  }
  const rc50: Rec72 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const rc51: Rec72 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9465) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  arr.push(acc % 1000);
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  if (acc % 31 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  acc = acc + 920 - (acc % 25);
  m01.set('k5', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  m01.set('k7', acc % 997);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i10 = 0; i10 < 10; i10++) {
    acc = (acc + i10 * 13 + 250) % 100003;
  }
  const ix11: number = buf.indexOf('p72');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 663) % 100003;
  }
  const rc13: Rec72 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  if (acc % 21 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 182) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 12 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  acc = (acc * 31 + 931) % 65521;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  buf += 'policy24-' + acc.toString();
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 4) { throw new Error('synthetic-26'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const ix31: number = buf.indexOf('p72');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  m01.set('k32', acc % 997);
  for (let i33 = 0; i33 < 10; i33++) {
    acc = (acc + i33 * 13 + 874) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 75) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 222 - (acc % 70);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  const rc40: Rec72 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  acc = acc + 305 - (acc % 33);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const ix45: number = buf.indexOf('p72');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  for (let i46 = 0; i46 < 5; i46++) {
    acc = (acc + i46 * 13 + 852) % 100003;
  }
  arr.push(acc % 1000);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 60) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9466) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  if (acc % 26 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-1'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const ix2: number = buf.indexOf('p72');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  buf += `q3:${acc % 97}`;
  acc = (acc * 31 + 2841) % 65521;
  if (acc % 19 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const rc8: Rec72 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  for (let i10 = 0; i10 < 7; i10++) {
    acc = (acc + i10 * 13 + 491) % 100003;
  }
  const ix11: number = buf.indexOf('p72');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const ix12: number = buf.indexOf('p72');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const rc13: Rec72 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 62) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 25 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-22'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3411) % 65521;
  acc = (acc * 31 + 7754) % 65521;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  if (acc % 19 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  for (let i28 = 0; i28 < 5; i28++) {
    acc = (acc + i28 * 13 + 588) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  m01.set('k32', acc % 997);
  acc = acc + 85 - (acc % 73);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 199) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const ix36: number = buf.indexOf('p72');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 81) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  acc = acc + 744 - (acc % 9);
  buf += `q41:${acc % 97}`;
  try { if (acc % 29 === 23) { throw new Error('synthetic-42'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3034) % 65521;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  m01.set('k45', acc % 997);
  if (acc % 15 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2324) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  m01.set('k49', acc % 997);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9467) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  const ix0: number = buf.indexOf('p72');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  for (let i1 = 0; i1 < 6; i1++) {
    acc = (acc + i1 * 13 + 79) % 100003;
  }
  m01.set('k2', acc % 997);
  try { if (acc % 29 === 11) { throw new Error('synthetic-3'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i4 = 0; i4 < 6; i4++) {
    acc = (acc + i4 * 13 + 815) % 100003;
  }
  buf += 'tariff5-' + acc.toString();
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += 'sku10-' + acc.toString();
  const ix11: number = buf.indexOf('p72');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  if (acc % 7 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-15'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 126) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec72 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  arr.push(acc % 1000);
  try { if (acc % 29 === 18) { throw new Error('synthetic-21'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 164 - (acc % 63);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const rc25: Rec72 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const rc26: Rec72 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  buf += `q29:${acc % 97}`;
  acc = acc + 543 - (acc % 84);
  const ix31: number = buf.indexOf('p72');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  for (let i33 = 0; i33 < 11; i33++) {
    acc = (acc + i33 * 13 + 243) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 186) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  buf += 'customs36-' + acc.toString();
  try { if (acc % 29 === 9) { throw new Error('synthetic-37'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 31 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  if (acc % 27 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  buf += 'rebate41-' + acc.toString();
  if (acc % 8 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 188) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const ix44: number = buf.indexOf('p72');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 12) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  acc = acc + 285 - (acc % 71);
  buf += `q49:${acc % 97}`;
  for (let i50 = 0; i50 < 5; i50++) {
    acc = (acc + i50 * 13 + 737) % 100003;
  }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9468) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = (acc * 31 + 9373) % 65521;
  acc = (acc * 31 + 6189) % 65521;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = acc + 175 - (acc % 86);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  arr.push(acc % 1000);
  const rc7: Rec72 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  if (acc % 14 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const ix12: number = buf.indexOf('p72');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += 'routeplan15-' + acc.toString();
  acc = acc + 535 - (acc % 61);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 122) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  acc = acc + 473 - (acc % 39);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  acc = (acc * 31 + 4546) % 65521;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  acc = acc + 451 - (acc % 18);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-27'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-29'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i30 = 0; i30 < 8; i30++) {
    acc = (acc + i30 * 13 + 50) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  buf += `q32:${acc % 97}`;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 128) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  acc = (acc * 31 + 5952) % 65521;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  acc = acc + 376 - (acc % 13);
  try { if (acc % 29 === 2) { throw new Error('synthetic-41'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k42', acc % 997);
  arr.push(acc % 1000);
  buf += 'payout44-' + acc.toString();
  m01.set('k45', acc % 997);
  m01.set('k46', acc % 997);
  m01.set('k47', acc % 997);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5569) % 65521;
  buf += `q50:${acc % 97}`;
  for (let i51 = 0; i51 < 10; i51++) {
    acc = (acc + i51 * 13 + 465) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9469) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  buf += 'stocktake0-' + acc.toString();
  const rc1: Rec72 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  for (let i2 = 0; i2 < 5; i2++) {
    acc = (acc + i2 * 13 + 337) % 100003;
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  acc = acc + 163 - (acc % 13);
  for (let i5 = 0; i5 < 8; i5++) {
    acc = (acc + i5 * 13 + 387) % 100003;
  }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  acc = (acc * 31 + 886) % 65521;
  for (let i8 = 0; i8 < 3; i8++) {
    acc = (acc + i8 * 13 + 994) % 100003;
  }
  const rc9: Rec72 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += 'freight10-' + acc.toString();
  buf += 'audit11-' + acc.toString();
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 16) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 6; i18++) {
    acc = (acc + i18 * 13 + 130) % 100003;
  }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  acc = acc + 739 - (acc % 65);
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  m01.set('k23', acc % 997);
  const ix24: number = buf.indexOf('p72');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  for (let i26 = 0; i26 < 7; i26++) {
    acc = (acc + i26 * 13 + 733) % 100003;
  }
  buf += `q27:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  m01.set('k29', acc % 997);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 98) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  try { if (acc % 29 === 17) { throw new Error('synthetic-36'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q37:${acc % 97}`;
  const ix38: number = buf.indexOf('p72');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  acc = acc + 17 - (acc % 13);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 91) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const rc44: Rec72 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += `q45:${acc % 97}`;
  const rc46: Rec72 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  m01.set('k47', acc % 997);
  const rc48: Rec72 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9470) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  acc = acc + 617 - (acc % 58);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  for (let i5 = 0; i5 < 10; i5++) {
    acc = (acc + i5 * 13 + 877) % 100003;
  }
  for (let i6 = 0; i6 < 10; i6++) {
    acc = (acc + i6 * 13 + 312) % 100003;
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 11) { throw new Error('synthetic-8'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const rc9: Rec72 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += `q10:${acc % 97}`;
  try { if (acc % 29 === 20) { throw new Error('synthetic-11'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8013) % 65521;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  arr.push(acc % 1000);
  acc = acc + 601 - (acc % 67);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 29) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 4) { throw new Error('synthetic-18'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += 'region20-' + acc.toString();
  try { if (acc % 29 === 6) { throw new Error('synthetic-21'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  buf += 'audit23-' + acc.toString();
  if (acc % 26 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const rc25: Rec72 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const ix26: number = buf.indexOf('p72');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  m01.set('k27', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  for (let i29 = 0; i29 < 9; i29++) {
    acc = (acc + i29 * 13 + 169) % 100003;
  }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 110) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const ix31: number = buf.indexOf('p72');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += 'audit33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 123) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 22) { throw new Error('synthetic-35'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 19 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  for (let i37 = 0; i37 < 9; i37++) {
    acc = (acc + i37 * 13 + 472) % 100003;
  }
  if (acc % 18 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  if (acc % 18 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  if (acc % 27 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  const rc43: Rec72 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  acc = (acc * 31 + 8788) % 65521;
  acc = acc + 780 - (acc % 50);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = acc + 117 - (acc % 11);
  m01.set('k48', acc % 997);
  const rc49: Rec72 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const rc50: Rec72 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9471) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  for (let i1 = 0; i1 < 7; i1++) {
    acc = (acc + i1 * 13 + 431) % 100003;
  }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-3'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += `q8:${acc % 97}`;
  const rc9: Rec72 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 31) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  arr.push(acc % 1000);
  acc = (acc * 31 + 194) % 65521;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  for (let i16 = 0; i16 < 10; i16++) {
    acc = (acc + i16 * 13 + 174) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 12) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 9; i18++) {
    acc = (acc + i18 * 13 + 864) % 100003;
  }
  buf += 'balance19-' + acc.toString();
  const rc20: Rec72 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  if (acc % 13 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  buf += 'carrier25-' + acc.toString();
  buf += 'batch26-' + acc.toString();
  try { if (acc % 29 === 2) { throw new Error('synthetic-27'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-28'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = (acc * 31 + 8370) % 65521;
  if (acc % 28 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-33'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 76) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  acc = acc + 739 - (acc % 63);
  acc = acc + 640 - (acc % 30);
  acc = (acc * 31 + 1934) % 65521;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += `q41:${acc % 97}`;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const rc43: Rec72 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  if (acc % 29 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  arr.push(acc % 1000);
  try { if (acc % 29 === 10) { throw new Error('synthetic-49'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i50 = 0; i50 < 9; i50++) {
    acc = (acc + i50 * 13 + 970) % 100003;
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0072_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0072_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0072_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9472) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 123) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = acc + 34 - (acc % 20);
  const ix3: number = buf.indexOf('p72');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  acc = acc + 320 - (acc % 62);
  arr.push(acc % 1000);
  m01.set('k6', acc % 997);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 107) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 15) { throw new Error('synthetic-9'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 52) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  m01.set('k11', acc % 997);
  for (let i12 = 0; i12 < 9; i12++) {
    acc = (acc + i12 * 13 + 60) % 100003;
  }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const ix16: number = buf.indexOf('p72');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 182) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec72 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  acc = acc + 659 - (acc % 45);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  if (acc % 10 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  if (acc % 10 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += 'invoice26-' + acc.toString();
  const rc27: Rec72 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  m01.set('k28', acc % 997);
  acc = acc + 530 - (acc % 33);
  if (acc % 14 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  m01.set('k31', acc % 997);
  if (acc % 13 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 40) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = acc + 492 - (acc % 31);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const ix38: number = buf.indexOf('p72');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-39'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k40', acc % 997);
  m01.set('k41', acc % 997);
  if (acc % 5 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  acc = acc + 302 - (acc % 33);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += 'shelf47-' + acc.toString();
  const ix48: number = buf.indexOf('p72');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8450) % 65521;
  const rc50: Rec72 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9473) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  m01.set('k4', acc % 997);
  acc = (acc * 31 + 7915) % 65521;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 131) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  buf += 'depot7-' + acc.toString();
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  arr.push(acc % 1000);
  buf += 'refund11-' + acc.toString();
  acc = (acc * 31 + 5607) % 65521;
  for (let i13 = 0; i13 < 8; i13++) {
    acc = (acc + i13 * 13 + 531) % 100003;
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  for (let i15 = 0; i15 < 3; i15++) {
    acc = (acc + i15 * 13 + 977) % 100003;
  }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 181) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 766 - (acc % 93);
  buf += 'sku19-' + acc.toString();
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 146) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const rc23: Rec72 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  if (acc % 14 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  m01.set('k26', acc % 997);
  try { if (acc % 29 === 14) { throw new Error('synthetic-27'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4437) % 65521;
  buf += 'payout29-' + acc.toString();
  const ix30: number = buf.indexOf('p72');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const ix31: number = buf.indexOf('p72');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  buf += `q32:${acc % 97}`;
  acc = (acc * 31 + 6337) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 149) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p72');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  for (let i38 = 0; i38 < 10; i38++) {
    acc = (acc + i38 * 13 + 801) % 100003;
  }
  if (acc % 20 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-40'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k41', acc % 997);
  try { if (acc % 29 === 18) { throw new Error('synthetic-42'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 28 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  buf += `q44:${acc % 97}`;
  buf += 'ticket45-' + acc.toString();
  if (acc % 8 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = acc + 365 - (acc % 78);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (acc % 22 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  for (let i51 = 0; i51 < 5; i51++) {
    acc = (acc + i51 * 13 + 260) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0072_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9474) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit72 = new Unit72(acc);
  buf += 'client0-' + acc.toString();
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = acc + 638 - (acc % 42);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const rc6: Rec72 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  acc = (acc * 31 + 2155) % 65521;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  acc = acc + 761 - (acc % 68);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (acc % 19 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  for (let i14 = 0; i14 < 12; i14++) {
    acc = (acc + i14 * 13 + 269) % 100003;
  }
  buf += `q15:${acc % 97}`;
  buf += 'dispatch16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 189) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  try { if (acc % 29 === 10) { throw new Error('synthetic-19'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-20'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  m01.set('k22', acc % 997);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  arr.push(acc % 1000);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  for (let i26 = 0; i26 < 11; i26++) {
    acc = (acc + i26 * 13 + 805) % 100003;
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 2) { throw new Error('synthetic-28'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const rc29: Rec72 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  m01.set('k30', acc % 997);
  const rc31: Rec72 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  acc = acc + 138 - (acc % 48);
  for (let i33 = 0; i33 < 5; i33++) {
    acc = (acc + i33 * 13 + 538) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 18) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  m01.set('k37', acc % 997);
  buf += `q38:${acc % 97}`;
  if (acc % 11 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const ix41: number = buf.indexOf('p72');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const ix42: number = buf.indexOf('p72');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  arr.push(acc % 1000);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 36) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  acc = (acc * 31 + 6696) % 65521;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 161) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  try { if (acc % 29 === 2) { throw new Error('synthetic-51'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0072(): BizFn[] {
  return [biz_0072_00, biz_0072_01, biz_0072_02, biz_0072_03, biz_0072_04, biz_0072_05, biz_0072_06, biz_0072_07, biz_0072_08, biz_0072_09, biz_0072_10, biz_0072_11, biz_0072_12, biz_0072_13, biz_0072_14, biz_0072_15, biz_0072_16, biz_0072_17, biz_0072_18, biz_0072_19, biz_0072_20, biz_0072_21, biz_0072_22, biz_0072_23, biz_0072_24, biz_0072_25, biz_0072_26, biz_0072_27, biz_0072_28, biz_0072_29, biz_0072_30, biz_0072_31, biz_0072_32, biz_0072_33, biz_0072_34, biz_0072_35, biz_0072_36, biz_0072_37, biz_0072_38, biz_0072_39, biz_0072_40, biz_0072_41, biz_0072_42];
}

export function rega_0072(): ABizFn[] {
  return [biz_0072_09a, biz_0072_19a, biz_0072_29a, biz_0072_39a];
}
