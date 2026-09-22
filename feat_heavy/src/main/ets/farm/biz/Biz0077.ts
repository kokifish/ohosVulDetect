// Biz0077.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec77 { id: number; tag: string; score: number; }

class Unit77 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0077_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 114) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  if (acc % 20 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  if (acc % 30 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  acc = acc + 437 - (acc % 51);
  const ix3: number = buf.indexOf('p77');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  acc = acc + 125 - (acc % 52);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const ix6: number = buf.indexOf('p77');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const rc7: Rec77 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  m01.set('k8', acc % 997);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  for (let i11 = 0; i11 < 12; i11++) {
    acc = (acc + i11 * 13 + 887) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i13 = 0; i13 < 9; i13++) {
    acc = (acc + i13 * 13 + 609) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix15: number = buf.indexOf('p77');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  for (let i16 = 0; i16 < 10; i16++) {
    acc = (acc + i16 * 13 + 178) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 183) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  m01.set('k19', acc % 997);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  try { if (acc % 29 === 19) { throw new Error('synthetic-24'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 10) { throw new Error('synthetic-27'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 20 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  buf += `q29:${acc % 97}`;
  buf += `q30:${acc % 97}`;
  for (let i31 = 0; i31 < 12; i31++) {
    acc = (acc + i31 * 13 + 891) % 100003;
  }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 165) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p77');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  for (let i36 = 0; i36 < 6; i36++) {
    acc = (acc + i36 * 13 + 395) % 100003;
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  m01.set('k41', acc % 997);
  const rc42: Rec77 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  buf += 'bay44-' + acc.toString();
  for (let i45 = 0; i45 < 6; i45++) {
    acc = (acc + i45 * 13 + 512) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  m01.set('k47', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += 'bay51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 115) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  try { if (acc % 29 === 4) { throw new Error('synthetic-0'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 59) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 187) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const ix10: number = buf.indexOf('p77');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += 'region13-' + acc.toString();
  try { if (acc % 29 === 11) { throw new Error('synthetic-14'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 19) { throw new Error('synthetic-16'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 196) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 925) % 65521;
  buf += `q19:${acc % 97}`;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 137) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  acc = (acc * 31 + 6682) % 65521;
  buf += 'balance26-' + acc.toString();
  arr.push(acc % 1000);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-29'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 164) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  m01.set('k37', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const rc39: Rec77 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  buf += 'stocktake40-' + acc.toString();
  if (acc % 25 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const ix42: number = buf.indexOf('p77');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  for (let i48 = 0; i48 < 5; i48++) {
    acc = (acc + i48 * 13 + 734) % 100003;
  }
  if (acc % 16 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const ix51: number = buf.indexOf('p77');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 116) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  const ix0: number = buf.indexOf('p77');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  acc = acc + 134 - (acc % 96);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const rc3: Rec77 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  m01.set('k4', acc % 997);
  buf += `q5:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const rc7: Rec77 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  try { if (acc % 29 === 14) { throw new Error('synthetic-9'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q10:${acc % 97}`;
  buf += 'shelf11-' + acc.toString();
  acc = (acc * 31 + 6705) % 65521;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  m01.set('k15', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 97) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = acc + 724 - (acc % 93);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 70) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  buf += `q23:${acc % 97}`;
  acc = acc + 707 - (acc % 36);
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  acc = acc + 225 - (acc % 77);
  const rc29: Rec77 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  acc = acc + 773 - (acc % 18);
  buf += 'bay32-' + acc.toString();
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 174) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 653 - (acc % 94);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const rc37: Rec77 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += 'ticket39-' + acc.toString();
  const ix40: number = buf.indexOf('p77');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  if (acc % 31 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const rc42: Rec77 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k45', acc % 997);
  m01.set('k46', acc % 997);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  acc = acc + 366 - (acc % 49);
  m01.set('k49', acc % 997);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  acc = acc + 825 - (acc % 33);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 117) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  for (let i1 = 0; i1 < 6; i1++) {
    acc = (acc + i1 * 13 + 559) % 100003;
  }
  acc = acc + 985 - (acc % 22);
  const rc3: Rec77 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  buf += 'crate5-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q7:${acc % 97}`;
  arr.push(acc % 1000);
  buf += `q9:${acc % 97}`;
  buf += 'refund10-' + acc.toString();
  buf += 'crate11-' + acc.toString();
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 41) % 100003;
  }
  const rc13: Rec77 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 64) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec77 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  buf += 'client19-' + acc.toString();
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += 'transit21-' + acc.toString();
  acc = acc + 995 - (acc % 82);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 168) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += `q25:${acc % 97}`;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const ix29: number = buf.indexOf('p77');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const ix32: number = buf.indexOf('p77');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 113) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 3; i35++) {
    acc = (acc + i35 * 13 + 423) % 100003;
  }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  arr.push(acc % 1000);
  buf += 'audit38-' + acc.toString();
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 57) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  if (acc % 17 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  for (let i44 = 0; i44 < 9; i44++) {
    acc = (acc + i44 * 13 + 990) % 100003;
  }
  for (let i45 = 0; i45 < 5; i45++) {
    acc = (acc + i45 * 13 + 58) % 100003;
  }
  buf += `q46:${acc % 97}`;
  try { if (acc % 29 === 14) { throw new Error('synthetic-47'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += 'transit50-' + acc.toString();
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 118) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  buf += `q0:${acc % 97}`;
  acc = (acc * 31 + 2227) % 65521;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  if (acc % 18 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const ix5: number = buf.indexOf('p77');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  m01.set('k7', acc % 997);
  arr.push(acc % 1000);
  const rc9: Rec77 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  m01.set('k12', acc % 997);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const ix14: number = buf.indexOf('p77');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += 'pallet15-' + acc.toString();
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 139) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k19', acc % 997);
  const ix20: number = buf.indexOf('p77');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  acc = acc + 622 - (acc % 78);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  buf += 'ledger25-' + acc.toString();
  const rc26: Rec77 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += 'region27-' + acc.toString();
  buf += 'warehouse28-' + acc.toString();
  buf += `q29:${acc % 97}`;
  acc = acc + 423 - (acc % 44);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  for (let i33 = 0; i33 < 5; i33++) {
    acc = (acc + i33 * 13 + 899) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 14) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'pallet35-' + acc.toString();
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  buf += 'stocktake37-' + acc.toString();
  if (acc % 18 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += `q39:${acc % 97}`;
  const ix40: number = buf.indexOf('p77');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const rc41: Rec77 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  buf += 'depot42-' + acc.toString();
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const rc44: Rec77 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  try { if (acc % 29 === 20) { throw new Error('synthetic-45'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 17) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  for (let i48 = 0; i48 < 6; i48++) {
    acc = (acc + i48 * 13 + 10) % 100003;
  }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  m01.set('k50', acc % 997);
  if (acc % 26 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 119) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = acc + 663 - (acc % 62);
  arr.push(acc % 1000);
  try { if (acc % 29 === 5) { throw new Error('synthetic-4'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  buf += `q6:${acc % 97}`;
  buf += `q7:${acc % 97}`;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  for (let i10 = 0; i10 < 4; i10++) {
    acc = (acc + i10 * 13 + 673) % 100003;
  }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  arr.push(acc % 1000);
  buf += `q13:${acc % 97}`;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  if (acc % 13 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  if (acc % 29 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 173) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p77');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  const rc19: Rec77 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = acc + 530 - (acc % 75);
  for (let i21 = 0; i21 < 5; i21++) {
    acc = (acc + i21 * 13 + 426) % 100003;
  }
  if (acc % 19 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  acc = acc + 663 - (acc % 12);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 78) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  const ix25: number = buf.indexOf('p77');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  buf += `q27:${acc % 97}`;
  if (acc % 14 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  buf += 'customs29-' + acc.toString();
  buf += `q30:${acc % 97}`;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  buf += `q32:${acc % 97}`;
  try { if (acc % 29 === 2) { throw new Error('synthetic-33'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 52) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  buf += 'ledger37-' + acc.toString();
  acc = acc + 743 - (acc % 71);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q41:${acc % 97}`;
  try { if (acc % 29 === 8) { throw new Error('synthetic-42'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i43 = 0; i43 < 9; i43++) {
    acc = (acc + i43 * 13 + 532) % 100003;
  }
  acc = (acc * 31 + 8741) % 65521;
  buf += `q45:${acc % 97}`;
  for (let i46 = 0; i46 < 4; i46++) {
    acc = (acc + i46 * 13 + 610) % 100003;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-47'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  acc = acc + 453 - (acc % 34);
  const rc50: Rec77 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += 'carrier51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 120) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  for (let i2 = 0; i2 < 4; i2++) {
    acc = (acc + i2 * 13 + 544) % 100003;
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  buf += `q4:${acc % 97}`;
  const rc5: Rec77 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  m01.set('k7', acc % 997);
  m01.set('k8', acc % 997);
  acc = (acc * 31 + 9690) % 65521;
  const rc10: Rec77 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = (acc * 31 + 803) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const ix13: number = buf.indexOf('p77');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += `q15:${acc % 97}`;
  acc = acc + 90 - (acc % 71);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 38) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = acc + 105 - (acc % 64);
  for (let i20 = 0; i20 < 12; i20++) {
    acc = (acc + i20 * 13 + 370) % 100003;
  }
  m01.set('k21', acc % 997);
  const rc22: Rec77 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  for (let i23 = 0; i23 < 10; i23++) {
    acc = (acc + i23 * 13 + 831) % 100003;
  }
  const rc24: Rec77 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  m01.set('k25', acc % 997);
  for (let i26 = 0; i26 < 9; i26++) {
    acc = (acc + i26 * 13 + 550) % 100003;
  }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 57) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 91) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const rc30: Rec77 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 99) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec77 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  buf += 'bay37-' + acc.toString();
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 56) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  if (acc % 31 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  m01.set('k43', acc % 997);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  m01.set('k46', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  for (let i49 = 0; i49 < 6; i49++) {
    acc = (acc + i49 * 13 + 491) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (acc % 9 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 121) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  const ix0: number = buf.indexOf('p77');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  for (let i1 = 0; i1 < 6; i1++) {
    acc = (acc + i1 * 13 + 911) % 100003;
  }
  const rc2: Rec77 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 117) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const ix4: number = buf.indexOf('p77');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (acc % 15 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  buf += `q8:${acc % 97}`;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 163) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const rc11: Rec77 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  const rc13: Rec77 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += 'batch15-' + acc.toString();
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 189) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p77');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += 'pallet25-' + acc.toString();
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  for (let i27 = 0; i27 < 8; i27++) {
    acc = (acc + i27 * 13 + 988) % 100003;
  }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const rc30: Rec77 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-32'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 146 - (acc % 14);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 136) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-35'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const rc37: Rec77 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const ix39: number = buf.indexOf('p77');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const ix42: number = buf.indexOf('p77');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  m01.set('k43', acc % 997);
  const ix44: number = buf.indexOf('p77');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  buf += `q45:${acc % 97}`;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 14) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  buf += 'parcel47-' + acc.toString();
  acc = (acc * 31 + 1751) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 156) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 122) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  acc = acc + 302 - (acc % 26);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  if (acc % 8 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const rc5: Rec77 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 105) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const ix8: number = buf.indexOf('p77');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  if (acc % 21 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  buf += 'invoice13-' + acc.toString();
  buf += `q14:${acc % 97}`;
  try { if (acc % 29 === 18) { throw new Error('synthetic-15'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 38 - (acc % 33);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 190) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 76 - (acc % 83);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  try { if (acc % 29 === 16) { throw new Error('synthetic-20'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 435 - (acc % 25);
  if (acc % 18 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const ix23: number = buf.indexOf('p77');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  buf += `q25:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  if (acc % 6 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = acc + 562 - (acc % 7);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 104) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  acc = acc + 617 - (acc % 76);
  if (acc % 21 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-32'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 170) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 131) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-35'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  m01.set('k37', acc % 997);
  try { if (acc % 29 === 11) { throw new Error('synthetic-38'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (acc % 13 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  for (let i42 = 0; i42 < 9; i42++) {
    acc = (acc + i42 * 13 + 731) % 100003;
  }
  acc = acc + 921 - (acc % 39);
  acc = (acc * 31 + 6806) % 65521;
  for (let i45 = 0; i45 < 8; i45++) {
    acc = (acc + i45 * 13 + 230) % 100003;
  }
  acc = acc + 81 - (acc % 89);
  const rc47: Rec77 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  buf += 'bay49-' + acc.toString();
  try { if (acc % 29 === 22) { throw new Error('synthetic-50'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 123) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  m01.set('k0', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4082) % 65521;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  for (let i6 = 0; i6 < 4; i6++) {
    acc = (acc + i6 * 13 + 702) % 100003;
  }
  acc = acc + 246 - (acc % 89);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4362) % 65521;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  for (let i16 = 0; i16 < 6; i16++) {
    acc = (acc + i16 * 13 + 346) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 132) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 23) { throw new Error('synthetic-18'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 513 - (acc % 8);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  acc = acc + 251 - (acc % 35);
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += `q23:${acc % 97}`;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 44) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  const rc25: Rec77 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const rc26: Rec77 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  acc = acc + 774 - (acc % 76);
  try { if (acc % 29 === 7) { throw new Error('synthetic-29'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9515) % 65521;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 116) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  buf += 'dispatch36-' + acc.toString();
  m01.set('k37', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-39'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q40:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = acc + 345 - (acc % 57);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  buf += 'coupon44-' + acc.toString();
  for (let i45 = 0; i45 < 11; i45++) {
    acc = (acc + i45 * 13 + 357) % 100003;
  }
  buf += `q46:${acc % 97}`;
  m01.set('k47', acc % 997);
  acc = acc + 675 - (acc % 55);
  if (acc % 18 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  for (let i50 = 0; i50 < 3; i50++) {
    acc = (acc + i50 * 13 + 35) % 100003;
  }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0077_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0077_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0077_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 124) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  for (let i0 = 0; i0 < 3; i0++) {
    acc = (acc + i0 * 13 + 560) % 100003;
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const ix2: number = buf.indexOf('p77');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7738) % 65521;
  const rc4: Rec77 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  acc = (acc * 31 + 151) % 65521;
  buf += 'invoice6-' + acc.toString();
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 22) { throw new Error('synthetic-9'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q10:${acc % 97}`;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  if (acc % 28 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  for (let i13 = 0; i13 < 9; i13++) {
    acc = (acc + i13 * 13 + 429) % 100003;
  }
  acc = (acc * 31 + 257) % 65521;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 186) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-18'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = (acc * 31 + 1750) % 65521;
  if (acc % 28 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-22'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  buf += 'refund30-' + acc.toString();
  buf += `q31:${acc % 97}`;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 126) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const rc36: Rec77 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const ix40: number = buf.indexOf('p77');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i42 = 0; i42 < 11; i42++) {
    acc = (acc + i42 * 13 + 299) % 100003;
  }
  for (let i43 = 0; i43 < 6; i43++) {
    acc = (acc + i43 * 13 + 941) % 100003;
  }
  for (let i44 = 0; i44 < 3; i44++) {
    acc = (acc + i44 * 13 + 134) % 100003;
  }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 662) % 65521;
  acc = acc + 28 - (acc % 64);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 125) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  for (let i1 = 0; i1 < 7; i1++) {
    acc = (acc + i1 * 13 + 794) % 100003;
  }
  if (acc % 24 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  buf += `q3:${acc % 97}`;
  const ix4: number = buf.indexOf('p77');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-5'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q6:${acc % 97}`;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 177) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  m01.set('k8', acc % 997);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 101) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  buf += 'ledger10-' + acc.toString();
  if (acc % 26 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  m01.set('k14', acc % 997);
  for (let i15 = 0; i15 < 10; i15++) {
    acc = (acc + i15 * 13 + 102) % 100003;
  }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 124) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 4584) % 65521;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const rc20: Rec77 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  acc = acc + 326 - (acc % 14);
  buf += 'audit23-' + acc.toString();
  m01.set('k24', acc % 997);
  for (let i25 = 0; i25 < 11; i25++) {
    acc = (acc + i25 * 13 + 411) % 100003;
  }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = acc + 974 - (acc % 17);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 24) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (acc % 11 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 173) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 20) { throw new Error('synthetic-35'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q36:${acc % 97}`;
  acc = acc + 914 - (acc % 85);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 9017) % 65521;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  for (let i44 = 0; i44 < 6; i44++) {
    acc = (acc + i44 * 13 + 861) % 100003;
  }
  buf += 'sku45-' + acc.toString();
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const rc47: Rec77 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  acc = acc + 56 - (acc % 43);
  if (acc % 13 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  if (acc % 16 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  for (let i51 = 0; i51 < 5; i51++) {
    acc = (acc + i51 * 13 + 510) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 126) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  acc = acc + 149 - (acc % 44);
  buf += 'refund2-' + acc.toString();
  const ix3: number = buf.indexOf('p77');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  if (acc % 30 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = acc + 24 - (acc % 79);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  for (let i10 = 0; i10 < 7; i10++) {
    acc = (acc + i10 * 13 + 550) % 100003;
  }
  arr.push(acc % 1000);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  m01.set('k14', acc % 997);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  try { if (acc % 29 === 22) { throw new Error('synthetic-16'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 57) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  m01.set('k19', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-21'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 65) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  buf += 'audit26-' + acc.toString();
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 64) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  m01.set('k28', acc % 997);
  arr.push(acc % 1000);
  if (acc % 18 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const ix31: number = buf.indexOf('p77');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  if (acc % 8 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  acc = acc + 675 - (acc % 51);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 89) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  if (acc % 18 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += 'waybill38-' + acc.toString();
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  if (acc % 19 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = (acc * 31 + 390) % 65521;
  if (acc % 5 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = (acc * 31 + 990) % 65521;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 31 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const rc46: Rec77 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const ix47: number = buf.indexOf('p77');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  acc = acc + 729 - (acc % 86);
  buf += `q49:${acc % 97}`;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 127) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  acc = acc + 785 - (acc % 75);
  for (let i1 = 0; i1 < 8; i1++) {
    acc = (acc + i1 * 13 + 499) % 100003;
  }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const rc3: Rec77 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  try { if (acc % 29 === 16) { throw new Error('synthetic-5'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-8'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const ix10: number = buf.indexOf('p77');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const rc12: Rec77 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  try { if (acc % 29 === 23) { throw new Error('synthetic-13'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const rc14: Rec77 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const ix15: number = buf.indexOf('p77');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4451) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 33) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 228 - (acc % 77);
  acc = acc + 286 - (acc % 62);
  try { if (acc % 29 === 5) { throw new Error('synthetic-20'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  buf += 'policy22-' + acc.toString();
  acc = (acc * 31 + 9847) % 65521;
  arr.push(acc % 1000);
  for (let i25 = 0; i25 < 9; i25++) {
    acc = (acc + i25 * 13 + 246) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  try { if (acc % 29 === 22) { throw new Error('synthetic-27'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  buf += `q29:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-30'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k31', acc % 997);
  buf += 'audit32-' + acc.toString();
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 197) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 157) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p77');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const ix36: number = buf.indexOf('p77');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  arr.push(acc % 1000);
  buf += 'freight40-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  if (acc % 11 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const ix45: number = buf.indexOf('p77');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const ix48: number = buf.indexOf('p77');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  acc = acc + 645 - (acc % 65);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 128) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  arr.push(acc % 1000);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  if (acc % 17 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = (acc * 31 + 7621) % 65521;
  const rc5: Rec77 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 154) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const rc8: Rec77 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  for (let i9 = 0; i9 < 12; i9++) {
    acc = (acc + i9 * 13 + 305) % 100003;
  }
  const rc10: Rec77 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const ix12: number = buf.indexOf('p77');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  acc = acc + 554 - (acc % 18);
  buf += 'transit14-' + acc.toString();
  const ix15: number = buf.indexOf('p77');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 49) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  for (let i19 = 0; i19 < 12; i19++) {
    acc = (acc + i19 * 13 + 852) % 100003;
  }
  acc = acc + 292 - (acc % 75);
  try { if (acc % 29 === 12) { throw new Error('synthetic-21'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'rebate22-' + acc.toString();
  acc = acc + 57 - (acc % 59);
  acc = acc + 693 - (acc % 76);
  arr.push(acc % 1000);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  acc = acc + 397 - (acc % 82);
  acc = acc + 407 - (acc % 12);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  arr.push(acc % 1000);
  const rc31: Rec77 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  if (acc % 21 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 126) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 734 - (acc % 66);
  const ix36: number = buf.indexOf('p77');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 22) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  m01.set('k46', acc % 997);
  buf += `q47:${acc % 97}`;
  for (let i48 = 0; i48 < 9; i48++) {
    acc = (acc + i48 * 13 + 31) % 100003;
  }
  const rc49: Rec77 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  buf += 'shelf50-' + acc.toString();
  buf += 'quota51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 129) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  buf += 'policy2-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 122) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  buf += `q6:${acc % 97}`;
  if (acc % 7 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-11'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  arr.push(acc % 1000);
  m01.set('k14', acc % 997);
  const ix15: number = buf.indexOf('p77');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 76) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p77');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  acc = acc + 698 - (acc % 52);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 48) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  acc = (acc * 31 + 1900) % 65521;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  if (acc % 22 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const ix28: number = buf.indexOf('p77');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-29'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 163) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = (acc * 31 + 4891) % 65521;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 136) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  if (acc % 9 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  m01.set('k37', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += `q39:${acc % 97}`;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  for (let i41 = 0; i41 < 3; i41++) {
    acc = (acc + i41 * 13 + 118) % 100003;
  }
  m01.set('k42', acc % 997);
  buf += `q43:${acc % 97}`;
  if (acc % 15 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const rc45: Rec77 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-48'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 6 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 130) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  buf += `q2:${acc % 97}`;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 26) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = (acc * 31 + 9157) % 65521;
  const ix6: number = buf.indexOf('p77');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const rc7: Rec77 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  if (acc % 28 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  const ix9: number = buf.indexOf('p77');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  for (let i11 = 0; i11 < 10; i11++) {
    acc = (acc + i11 * 13 + 916) % 100003;
  }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  const rc13: Rec77 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  acc = (acc * 31 + 2019) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 163) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const ix20: number = buf.indexOf('p77');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  buf += `q22:${acc % 97}`;
  try { if (acc % 29 === 11) { throw new Error('synthetic-23'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const ix26: number = buf.indexOf('p77');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const ix30: number = buf.indexOf('p77');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  arr.push(acc % 1000);
  for (let i33 = 0; i33 < 3; i33++) {
    acc = (acc + i33 * 13 + 829) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 46) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = acc + 200 - (acc % 56);
  const ix37: number = buf.indexOf('p77');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const ix38: number = buf.indexOf('p77');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const rc39: Rec77 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  if (acc % 11 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  try { if (acc % 29 === 6) { throw new Error('synthetic-42'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 67) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const ix46: number = buf.indexOf('p77');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 6564) % 65521;
  m01.set('k48', acc % 997);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  if (acc % 25 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 131) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  const rc0: Rec77 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  for (let i2 = 0; i2 < 6; i2++) {
    acc = (acc + i2 * 13 + 548) % 100003;
  }
  const rc3: Rec77 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  const ix5: number = buf.indexOf('p77');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const rc9: Rec77 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  for (let i13 = 0; i13 < 10; i13++) {
    acc = (acc + i13 * 13 + 348) % 100003;
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 7069) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 120) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  if (acc % 31 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = acc + 360 - (acc % 73);
  acc = (acc * 31 + 9552) % 65521;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  if (acc % 29 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  acc = acc + 711 - (acc % 37);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  try { if (acc % 29 === 19) { throw new Error('synthetic-33'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 15) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 2593) % 65521;
  const ix36: number = buf.indexOf('p77');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  buf += 'crate38-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  arr.push(acc % 1000);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  for (let i43 = 0; i43 < 5; i43++) {
    acc = (acc + i43 * 13 + 769) % 100003;
  }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 81) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  m01.set('k45', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  m01.set('k47', acc % 997);
  const ix48: number = buf.indexOf('p77');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += 'freight50-' + acc.toString();
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 132) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  buf += `q0:${acc % 97}`;
  acc = (acc * 31 + 6069) % 65521;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  acc = acc + 356 - (acc % 93);
  const ix4: number = buf.indexOf('p77');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const rc7: Rec77 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  acc = acc + 781 - (acc % 30);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 184) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  buf += `q11:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const ix13: number = buf.indexOf('p77');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 141) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 172) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 5 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  buf += 'coupon20-' + acc.toString();
  const ix21: number = buf.indexOf('p77');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  buf += 'waybill22-' + acc.toString();
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  const ix24: number = buf.indexOf('p77');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const ix29: number = buf.indexOf('p77');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  if (acc % 14 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const ix33: number = buf.indexOf('p77');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 21) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-36'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  arr.push(acc % 1000);
  const rc39: Rec77 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  arr.push(acc % 1000);
  const rc41: Rec77 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  arr.push(acc % 1000);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  buf += `q45:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += `q47:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  m01.set('k49', acc % 997);
  arr.push(acc % 1000);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 133) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  if (acc % 28 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (acc % 8 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const rc3: Rec77 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const ix4: number = buf.indexOf('p77');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 158) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  if (acc % 28 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  buf += `q11:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  buf += `q13:${acc % 97}`;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 170) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 70) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 9; i18++) {
    acc = (acc + i18 * 13 + 514) % 100003;
  }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 163) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  m01.set('k20', acc % 997);
  try { if (acc % 29 === 22) { throw new Error('synthetic-21'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  const ix22: number = buf.indexOf('p77');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 62) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const rc30: Rec77 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 106) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6632) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 110) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  for (let i37 = 0; i37 < 7; i37++) {
    acc = (acc + i37 * 13 + 109) % 100003;
  }
  for (let i38 = 0; i38 < 6; i38++) {
    acc = (acc + i38 * 13 + 355) % 100003;
  }
  m01.set('k39', acc % 997);
  buf += 'bay40-' + acc.toString();
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  buf += 'customs42-' + acc.toString();
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 75) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 174) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  acc = acc + 760 - (acc % 16);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 32) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const ix47: number = buf.indexOf('p77');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  m01.set('k48', acc % 997);
  acc = (acc * 31 + 4255) % 65521;
  acc = (acc * 31 + 5095) % 65521;
  if (acc % 12 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0077_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0077_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0077_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 134) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += 'dock6-' + acc.toString();
  arr.push(acc % 1000);
  const rc8: Rec77 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 7350) % 65521;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += `q14:${acc % 97}`;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 198) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 47) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += `q20:${acc % 97}`;
  if (acc % 21 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 102) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  if (acc % 10 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const ix27: number = buf.indexOf('p77');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  acc = acc + 902 - (acc % 52);
  buf += `q29:${acc % 97}`;
  arr.push(acc % 1000);
  try { if (acc % 29 === 21) { throw new Error('synthetic-31'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 939 - (acc % 16);
  const ix33: number = buf.indexOf('p77');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 113) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (acc % 5 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-46'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q47:${acc % 97}`;
  acc = acc + 259 - (acc % 43);
  m01.set('k49', acc % 997);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 15) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 135) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  const ix0: number = buf.indexOf('p77');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  for (let i1 = 0; i1 < 9; i1++) {
    acc = (acc + i1 * 13 + 971) % 100003;
  }
  acc = acc + 904 - (acc % 63);
  const rc3: Rec77 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 147) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const ix6: number = buf.indexOf('p77');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  if (acc % 31 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  acc = (acc * 31 + 134) % 65521;
  for (let i10 = 0; i10 < 7; i10++) {
    acc = (acc + i10 * 13 + 346) % 100003;
  }
  buf += 'order11-' + acc.toString();
  const rc12: Rec77 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += 'audit13-' + acc.toString();
  acc = acc + 578 - (acc % 8);
  buf += `q15:${acc % 97}`;
  const ix16: number = buf.indexOf('p77');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 18) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 140) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = acc + 932 - (acc % 81);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const rc26: Rec77 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  arr.push(acc % 1000);
  acc = (acc * 31 + 5965) % 65521;
  if (acc % 30 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const rc30: Rec77 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  m01.set('k32', acc % 997);
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 39) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  try { if (acc % 29 === 17) { throw new Error('synthetic-36'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 23 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  acc = (acc * 31 + 7750) % 65521;
  const rc44: Rec77 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-45'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (acc % 6 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  if (acc % 26 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  buf += 'depot49-' + acc.toString();
  const ix50: number = buf.indexOf('p77');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const rc51: Rec77 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 136) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  m01.set('k2', acc % 997);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const rc4: Rec77 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  buf += 'rebate5-' + acc.toString();
  const ix6: number = buf.indexOf('p77');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  m01.set('k7', acc % 997);
  acc = (acc * 31 + 6212) % 65521;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  for (let i10 = 0; i10 < 3; i10++) {
    acc = (acc + i10 * 13 + 48) % 100003;
  }
  buf += `q11:${acc % 97}`;
  buf += `q12:${acc % 97}`;
  const ix13: number = buf.indexOf('p77');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const ix14: number = buf.indexOf('p77');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 97) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-16'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 64) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const ix19: number = buf.indexOf('p77');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  m01.set('k20', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  if (acc % 14 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  buf += `q24:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  m01.set('k27', acc % 997);
  acc = acc + 518 - (acc % 27);
  m01.set('k29', acc % 997);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  buf += `q31:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 86) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  buf += `q36:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  m01.set('k38', acc % 997);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 161) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  buf += `q40:${acc % 97}`;
  buf += `q41:${acc % 97}`;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  m01.set('k43', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const rc46: Rec77 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const ix47: number = buf.indexOf('p77');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  for (let i49 = 0; i49 < 9; i49++) {
    acc = (acc + i49 * 13 + 663) % 100003;
  }
  arr.push(acc % 1000);
  buf += 'client51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 137) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  buf += 'pickup0-' + acc.toString();
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 29) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  buf += 'audit5-' + acc.toString();
  if (acc % 20 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  if (acc % 23 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  m01.set('k9', acc % 997);
  try { if (acc % 29 === 9) { throw new Error('synthetic-10'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-11'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q12:${acc % 97}`;
  buf += 'balance13-' + acc.toString();
  m01.set('k14', acc % 997);
  acc = acc + 707 - (acc % 71);
  if (acc % 24 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 156) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const rc19: Rec77 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const rc20: Rec77 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = (acc * 31 + 4825) % 65521;
  buf += 'policy22-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const rc24: Rec77 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += `q27:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-30'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 229 - (acc % 94);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 24) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  buf += 'refund36-' + acc.toString();
  buf += 'client37-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 190) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const rc40: Rec77 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  acc = (acc * 31 + 2326) % 65521;
  m01.set('k42', acc % 997);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 138) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  acc = acc + 619 - (acc % 23);
  for (let i46 = 0; i46 < 12; i46++) {
    acc = (acc + i46 * 13 + 605) % 100003;
  }
  buf += 'routeplan47-' + acc.toString();
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += 'order49-' + acc.toString();
  const rc50: Rec77 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 138) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  acc = acc + 970 - (acc % 31);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const ix4: number = buf.indexOf('p77');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const rc5: Rec77 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  for (let i6 = 0; i6 < 8; i6++) {
    acc = (acc + i6 * 13 + 242) % 100003;
  }
  m01.set('k7', acc % 997);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 35) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-9'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const ix12: number = buf.indexOf('p77');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 146) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'order18-' + acc.toString();
  const rc19: Rec77 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = acc + 317 - (acc % 37);
  buf += `q21:${acc % 97}`;
  arr.push(acc % 1000);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  arr.push(acc % 1000);
  const ix25: number = buf.indexOf('p77');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const ix26: number = buf.indexOf('p77');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  buf += 'shelf27-' + acc.toString();
  if (acc % 27 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  m01.set('k29', acc % 997);
  m01.set('k30', acc % 997);
  m01.set('k31', acc % 997);
  arr.push(acc % 1000);
  try { if (acc % 29 === 21) { throw new Error('synthetic-33'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 138) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += 'dispatch36-' + acc.toString();
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  buf += `q39:${acc % 97}`;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  try { if (acc % 29 === 8) { throw new Error('synthetic-41'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const rc43: Rec77 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  try { if (acc % 29 === 21) { throw new Error('synthetic-44'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 28 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  acc = (acc * 31 + 5752) % 65521;
  const ix49: number = buf.indexOf('p77');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  for (let i51 = 0; i51 < 3; i51++) {
    acc = (acc + i51 * 13 + 317) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 139) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const rc4: Rec77 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  for (let i5 = 0; i5 < 7; i5++) {
    acc = (acc + i5 * 13 + 281) % 100003;
  }
  acc = acc + 161 - (acc % 33);
  buf += 'freight7-' + acc.toString();
  if (acc % 26 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  m01.set('k9', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  if (acc % 7 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const ix12: number = buf.indexOf('p77');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 85) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  for (let i14 = 0; i14 < 6; i14++) {
    acc = (acc + i14 * 13 + 681) % 100003;
  }
  const rc15: Rec77 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 68) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 49) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 6; i18++) {
    acc = (acc + i18 * 13 + 939) % 100003;
  }
  arr.push(acc % 1000);
  buf += `q20:${acc % 97}`;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 173) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += `q24:${acc % 97}`;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  m01.set('k26', acc % 997);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const ix29: number = buf.indexOf('p77');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (acc % 31 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 80) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  acc = (acc * 31 + 9602) % 65521;
  try { if (acc % 29 === 5) { throw new Error('synthetic-37'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'waybill38-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = acc + 533 - (acc % 93);
  arr.push(acc % 1000);
  buf += `q42:${acc % 97}`;
  m01.set('k43', acc % 997);
  buf += `q44:${acc % 97}`;
  buf += 'dispatch45-' + acc.toString();
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 102) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 140) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 157) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  const ix1: number = buf.indexOf('p77');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const ix4: number = buf.indexOf('p77');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  m01.set('k6', acc % 997);
  for (let i7 = 0; i7 < 10; i7++) {
    acc = (acc + i7 * 13 + 366) % 100003;
  }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const ix9: number = buf.indexOf('p77');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const ix11: number = buf.indexOf('p77');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  buf += `q12:${acc % 97}`;
  buf += 'vendor13-' + acc.toString();
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  arr.push(acc % 1000);
  for (let i16 = 0; i16 < 10; i16++) {
    acc = (acc + i16 * 13 + 602) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 199) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const rc20: Rec77 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const ix21: number = buf.indexOf('p77');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 497) % 65521;
  acc = (acc * 31 + 3498) % 65521;
  for (let i24 = 0; i24 < 12; i24++) {
    acc = (acc + i24 * 13 + 397) % 100003;
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-26'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q27:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  buf += 'transit29-' + acc.toString();
  acc = acc + 656 - (acc % 39);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 33) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = (acc * 31 + 2606) % 65521;
  const ix33: number = buf.indexOf('p77');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 12) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 13) { throw new Error('synthetic-35'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  acc = (acc * 31 + 3416) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  buf += 'dock40-' + acc.toString();
  const ix41: number = buf.indexOf('p77');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  try { if (acc % 29 === 7) { throw new Error('synthetic-45'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  m01.set('k48', acc % 997);
  arr.push(acc % 1000);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 141) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  acc = acc + 679 - (acc % 36);
  if (acc % 29 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  m01.set('k4', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 14) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  if (acc % 17 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  acc = acc + 782 - (acc % 25);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  m01.set('k13', acc % 997);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 186) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  arr.push(acc % 1000);
  acc = (acc * 31 + 4839) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  acc = (acc * 31 + 9489) % 65521;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = acc + 338 - (acc % 50);
  acc = acc + 420 - (acc % 8);
  acc = acc + 287 - (acc % 7);
  buf += `q30:${acc % 97}`;
  acc = (acc * 31 + 1651) % 65521;
  if (acc % 13 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 69) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 12 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  if (acc % 6 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  if (acc % 10 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  try { if (acc % 29 === 10) { throw new Error('synthetic-39'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 16 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  buf += `q41:${acc % 97}`;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const ix43: number = buf.indexOf('p77');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  m01.set('k46', acc % 997);
  for (let i47 = 0; i47 < 12; i47++) {
    acc = (acc + i47 * 13 + 764) % 100003;
  }
  acc = acc + 577 - (acc % 9);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 142) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  m01.set('k0', acc % 997);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const rc4: Rec77 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  acc = (acc * 31 + 6168) % 65521;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  if (acc % 21 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-9'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'depot10-' + acc.toString();
  buf += `q11:${acc % 97}`;
  acc = (acc * 31 + 6863) % 65521;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  acc = (acc * 31 + 7052) % 65521;
  m01.set('k15', acc % 997);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 56) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  try { if (acc % 29 === 13) { throw new Error('synthetic-19'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  for (let i22 = 0; i22 < 11; i22++) {
    acc = (acc + i22 * 13 + 618) % 100003;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-23'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 12 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  if (acc % 8 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  buf += 'settle28-' + acc.toString();
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  if (acc % 16 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  buf += 'tariff31-' + acc.toString();
  const ix32: number = buf.indexOf('p77');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 166) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  buf += `q36:${acc % 97}`;
  if (acc % 22 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-38'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (acc % 27 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  m01.set('k45', acc % 997);
  for (let i46 = 0; i46 < 6; i46++) {
    acc = (acc + i46 * 13 + 401) % 100003;
  }
  if (acc % 16 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3953) % 65521;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 143) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-2'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = acc + 32 - (acc % 16);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  m01.set('k6', acc % 997);
  const rc7: Rec77 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  buf += `q8:${acc % 97}`;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  acc = acc + 958 - (acc % 75);
  acc = acc + 973 - (acc % 21);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  for (let i13 = 0; i13 < 8; i13++) {
    acc = (acc + i13 * 13 + 9) % 100003;
  }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 24) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  if (acc % 14 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  m01.set('k22', acc % 997);
  const ix23: number = buf.indexOf('p77');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  try { if (acc % 29 === 21) { throw new Error('synthetic-26'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'warehouse27-' + acc.toString();
  m01.set('k28', acc % 997);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  m01.set('k30', acc % 997);
  buf += 'warehouse31-' + acc.toString();
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 95) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  try { if (acc % 29 === 6) { throw new Error('synthetic-33'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 104) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 7; i35++) {
    acc = (acc + i35 * 13 + 433) % 100003;
  }
  buf += 'warehouse36-' + acc.toString();
  const rc37: Rec77 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  arr.push(acc % 1000);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  const rc40: Rec77 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  if (acc % 7 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  m01.set('k46', acc % 997);
  buf += 'crate47-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  m01.set('k49', acc % 997);
  const rc50: Rec77 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0077_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0077_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0077_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 144) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  buf += `q2:${acc % 97}`;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  buf += `q4:${acc % 97}`;
  m01.set('k5', acc % 997);
  buf += `q6:${acc % 97}`;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 183) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i9 = 0; i9 < 3; i9++) {
    acc = (acc + i9 * 13 + 782) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  if (acc % 28 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 167) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (acc % 21 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = acc + 46 - (acc % 10);
  const rc22: Rec77 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  for (let i24 = 0; i24 < 8; i24++) {
    acc = (acc + i24 * 13 + 472) % 100003;
  }
  if (acc % 30 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  buf += `q26:${acc % 97}`;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  buf += `q28:${acc % 97}`;
  buf += 'sku29-' + acc.toString();
  const ix30: number = buf.indexOf('p77');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  buf += 'settle32-' + acc.toString();
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 47) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  buf += `q36:${acc % 97}`;
  for (let i37 = 0; i37 < 9; i37++) {
    acc = (acc + i37 * 13 + 785) % 100003;
  }
  buf += `q38:${acc % 97}`;
  m01.set('k39', acc % 997);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  if (acc % 5 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const rc46: Rec77 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 145) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const ix2: number = buf.indexOf('p77');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const ix4: number = buf.indexOf('p77');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const rc5: Rec77 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  if (acc % 10 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  buf += `q8:${acc % 97}`;
  acc = (acc * 31 + 2405) % 65521;
  acc = (acc * 31 + 9810) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  try { if (acc % 29 === 14) { throw new Error('synthetic-12'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 6 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  if (acc % 12 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += 'stocktake16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 162) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p77');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  acc = (acc * 31 + 2152) % 65521;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-27'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-28'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 20 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 184) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = (acc * 31 + 3481) % 65521;
  acc = acc + 773 - (acc % 19);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 106) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 7; i35++) {
    acc = (acc + i35 * 13 + 432) % 100003;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-36'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1848) % 65521;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const ix39: number = buf.indexOf('p77');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const rc40: Rec77 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 144) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  m01.set('k44', acc % 997);
  buf += `q45:${acc % 97}`;
  m01.set('k46', acc % 997);
  buf += `q47:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 124) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  buf += 'region51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 146) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  acc = (acc * 31 + 2878) % 65521;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const rc4: Rec77 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  m01.set('k5', acc % 997);
  const rc6: Rec77 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  arr.push(acc % 1000);
  for (let i8 = 0; i8 < 12; i8++) {
    acc = (acc + i8 * 13 + 813) % 100003;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 63) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 35) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const rc11: Rec77 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-14'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const ix16: number = buf.indexOf('p77');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 44) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-18'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i19 = 0; i19 < 8; i19++) {
    acc = (acc + i19 * 13 + 302) % 100003;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-20'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k21', acc % 997);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 190) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  arr.push(acc % 1000);
  buf += 'pickup28-' + acc.toString();
  const rc29: Rec77 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6058) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 45) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  acc = (acc * 31 + 9813) % 65521;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  m01.set('k39', acc % 997);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const rc41: Rec77 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  const ix43: number = buf.indexOf('p77');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const ix44: number = buf.indexOf('p77');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  acc = acc + 192 - (acc % 76);
  buf += `q46:${acc % 97}`;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const ix48: number = buf.indexOf('p77');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  m01.set('k50', acc % 997);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 189) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 147) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  arr.push(acc % 1000);
  if (acc % 23 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += 'warehouse3-' + acc.toString();
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const ix5: number = buf.indexOf('p77');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const rc6: Rec77 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  m01.set('k10', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  if (acc % 26 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5521) % 65521;
  arr.push(acc % 1000);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 148) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 73) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-18'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i19 = 0; i19 < 12; i19++) {
    acc = (acc + i19 * 13 + 779) % 100003;
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-20'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i21 = 0; i21 < 4; i21++) {
    acc = (acc + i21 * 13 + 31) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const ix23: number = buf.indexOf('p77');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  acc = (acc * 31 + 9343) % 65521;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  for (let i31 = 0; i31 < 4; i31++) {
    acc = (acc + i31 * 13 + 968) % 100003;
  }
  const rc32: Rec77 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = (acc * 31 + 2986) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 195) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  buf += `q37:${acc % 97}`;
  try { if (acc % 29 === 12) { throw new Error('synthetic-38'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix40: number = buf.indexOf('p77');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  m01.set('k41', acc % 997);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 126) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  m01.set('k45', acc % 997);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = (acc * 31 + 5443) % 65521;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  try { if (acc % 29 === 5) { throw new Error('synthetic-50'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 11 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 148) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const ix2: number = buf.indexOf('p77');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  m01.set('k3', acc % 997);
  try { if (acc % 29 === 19) { throw new Error('synthetic-4'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-5'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  if (acc % 14 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const rc11: Rec77 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  acc = acc + 793 - (acc % 60);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 30) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'vendor18-' + acc.toString();
  buf += `q19:${acc % 97}`;
  buf += 'payout20-' + acc.toString();
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  for (let i24 = 0; i24 < 9; i24++) {
    acc = (acc + i24 * 13 + 505) % 100003;
  }
  buf += `q25:${acc % 97}`;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 35) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 20) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  if (acc % 23 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = acc + 155 - (acc % 27);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 132) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 96) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-35'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  for (let i39 = 0; i39 < 4; i39++) {
    acc = (acc + i39 * 13 + 277) % 100003;
  }
  for (let i40 = 0; i40 < 8; i40++) {
    acc = (acc + i40 * 13 + 772) % 100003;
  }
  if (acc % 27 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const rc43: Rec77 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  buf += 'balance45-' + acc.toString();
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  m01.set('k47', acc % 997);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  m01.set('k49', acc % 997);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 149) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  try { if (acc % 29 === 21) { throw new Error('synthetic-0'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  for (let i2 = 0; i2 < 7; i2++) {
    acc = (acc + i2 * 13 + 46) % 100003;
  }
  const rc3: Rec77 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  acc = (acc * 31 + 5315) % 65521;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  for (let i6 = 0; i6 < 11; i6++) {
    acc = (acc + i6 * 13 + 628) % 100003;
  }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += 'freight8-' + acc.toString();
  buf += `q9:${acc % 97}`;
  buf += 'ticket10-' + acc.toString();
  const ix11: number = buf.indexOf('p77');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  buf += 'tariff12-' + acc.toString();
  acc = acc + 573 - (acc % 93);
  buf += `q14:${acc % 97}`;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 90) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  m01.set('k19', acc % 997);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  try { if (acc % 29 === 15) { throw new Error('synthetic-22'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const rc23: Rec77 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  try { if (acc % 29 === 2) { throw new Error('synthetic-24'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const rc27: Rec77 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  acc = acc + 315 - (acc % 80);
  buf += 'audit29-' + acc.toString();
  const ix30: number = buf.indexOf('p77');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 28) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 176) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec77 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  for (let i36 = 0; i36 < 6; i36++) {
    acc = (acc + i36 * 13 + 208) % 100003;
  }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const rc42: Rec77 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  m01.set('k44', acc % 997);
  buf += `q45:${acc % 97}`;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const rc50: Rec77 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 150) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  const rc0: Rec77 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const rc1: Rec77 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const ix3: number = buf.indexOf('p77');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const ix4: number = buf.indexOf('p77');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const ix5: number = buf.indexOf('p77');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-6'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  arr.push(acc % 1000);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  arr.push(acc % 1000);
  const ix11: number = buf.indexOf('p77');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  if (acc % 11 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  if (acc % 26 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const rc14: Rec77 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  if (acc % 31 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 131) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p77');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  const ix22: number = buf.indexOf('p77');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-23'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = acc + 518 - (acc % 34);
  if (acc % 17 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += 'quota31-' + acc.toString();
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  for (let i33 = 0; i33 < 6; i33++) {
    acc = (acc + i33 * 13 + 401) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 195) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-35'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  buf += `q38:${acc % 97}`;
  acc = acc + 353 - (acc % 14);
  const ix40: number = buf.indexOf('p77');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  acc = acc + 482 - (acc % 90);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 136) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  for (let i43 = 0; i43 < 3; i43++) {
    acc = (acc + i43 * 13 + 153) % 100003;
  }
  const ix44: number = buf.indexOf('p77');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 144) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  m01.set('k47', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += `q49:${acc % 97}`;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = acc + 79 - (acc % 66);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 151) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  buf += `q0:${acc % 97}`;
  if (acc % 14 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  if (acc % 24 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-3'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q4:${acc % 97}`;
  const ix5: number = buf.indexOf('p77');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const ix6: number = buf.indexOf('p77');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += `q7:${acc % 97}`;
  const ix8: number = buf.indexOf('p77');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  const rc11: Rec77 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 98) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += `q15:${acc % 97}`;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 172) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 28 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  if (acc % 23 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  buf += `q20:${acc % 97}`;
  const rc21: Rec77 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  buf += 'waybill23-' + acc.toString();
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 51) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  m01.set('k25', acc % 997);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  for (let i27 = 0; i27 < 3; i27++) {
    acc = (acc + i27 * 13 + 553) % 100003;
  }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  try { if (acc % 29 === 14) { throw new Error('synthetic-33'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 42) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 12; i35++) {
    acc = (acc + i35 * 13 + 514) % 100003;
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-36'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = acc + 780 - (acc % 38);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (acc % 7 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  buf += 'journey42-' + acc.toString();
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += `q45:${acc % 97}`;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  m01.set('k47', acc % 997);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += 'routeplan50-' + acc.toString();
  const rc51: Rec77 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 152) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const ix1: number = buf.indexOf('p77');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  acc = acc + 112 - (acc % 79);
  m01.set('k3', acc % 997);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const rc6: Rec77 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 41) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  acc = acc + 998 - (acc % 81);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const rc10: Rec77 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = (acc * 31 + 1380) % 65521;
  acc = acc + 551 - (acc % 36);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += 'order14-' + acc.toString();
  m01.set('k15', acc % 997);
  for (let i16 = 0; i16 < 3; i16++) {
    acc = (acc + i16 * 13 + 917) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 110) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  m01.set('k19', acc % 997);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = (acc * 31 + 7009) % 65521;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  buf += `q23:${acc % 97}`;
  buf += `q24:${acc % 97}`;
  arr.push(acc % 1000);
  if (acc % 11 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  if (acc % 30 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = acc + 727 - (acc % 91);
  m01.set('k29', acc % 997);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = acc + 918 - (acc % 35);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 166) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 8; i35++) {
    acc = (acc + i35 * 13 + 315) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  m01.set('k37', acc % 997);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  for (let i39 = 0; i39 < 3; i39++) {
    acc = (acc + i39 * 13 + 750) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  buf += `q41:${acc % 97}`;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  arr.push(acc % 1000);
  for (let i45 = 0; i45 < 7; i45++) {
    acc = (acc + i45 * 13 + 223) % 100003;
  }
  acc = (acc * 31 + 6688) % 65521;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i48 = 0; i48 < 12; i48++) {
    acc = (acc + i48 * 13 + 386) % 100003;
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-49'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k50', acc % 997);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 153) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  m01.set('k1', acc % 997);
  for (let i2 = 0; i2 < 7; i2++) {
    acc = (acc + i2 * 13 + 421) % 100003;
  }
  acc = acc + 399 - (acc % 42);
  if (acc % 10 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += `q5:${acc % 97}`;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  acc = (acc * 31 + 3783) % 65521;
  acc = acc + 811 - (acc % 49);
  try { if (acc % 29 === 19) { throw new Error('synthetic-9'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'transit10-' + acc.toString();
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  for (let i13 = 0; i13 < 3; i13++) {
    acc = (acc + i13 * 13 + 608) % 100003;
  }
  const ix14: number = buf.indexOf('p77');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const ix16: number = buf.indexOf('p77');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 166) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 22) { throw new Error('synthetic-18'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  m01.set('k20', acc % 997);
  const ix21: number = buf.indexOf('p77');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  if (acc % 17 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-24'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k25', acc % 997);
  const ix26: number = buf.indexOf('p77');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 178) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const rc28: Rec77 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 170) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = acc + 315 - (acc % 30);
  buf += `q32:${acc % 97}`;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 123) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 361 - (acc % 80);
  const rc36: Rec77 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const ix37: number = buf.indexOf('p77');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  acc = acc + 844 - (acc % 49);
  acc = (acc * 31 + 5548) % 65521;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  buf += `q42:${acc % 97}`;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 79) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  buf += `q44:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-45'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i46 = 0; i46 < 11; i46++) {
    acc = (acc + i46 * 13 + 747) % 100003;
  }
  const ix47: number = buf.indexOf('p77');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  buf += `q48:${acc % 97}`;
  buf += `q49:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += 'quota51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0077_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0077_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0077_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 154) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  const ix0: number = buf.indexOf('p77');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const ix5: number = buf.indexOf('p77');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3179) % 65521;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  m01.set('k9', acc % 997);
  const rc10: Rec77 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 92) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const ix12: number = buf.indexOf('p77');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  for (let i13 = 0; i13 < 8; i13++) {
    acc = (acc + i13 * 13 + 244) % 100003;
  }
  const ix14: number = buf.indexOf('p77');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  m01.set('k15', acc % 997);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 15) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const rc19: Rec77 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  acc = (acc * 31 + 7229) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-25'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q26:${acc % 97}`;
  if (acc % 15 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  acc = acc + 167 - (acc % 35);
  acc = (acc * 31 + 6691) % 65521;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const ix32: number = buf.indexOf('p77');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  acc = acc + 91 - (acc % 9);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 170) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  acc = acc + 843 - (acc % 43);
  buf += `q37:${acc % 97}`;
  buf += 'bay38-' + acc.toString();
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  if (acc % 18 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  buf += 'customs41-' + acc.toString();
  buf += 'sku42-' + acc.toString();
  const ix43: number = buf.indexOf('p77');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  for (let i44 = 0; i44 < 3; i44++) {
    acc = (acc + i44 * 13 + 497) % 100003;
  }
  const ix45: number = buf.indexOf('p77');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  acc = acc + 288 - (acc % 87);
  arr.push(acc % 1000);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 148) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  buf += 'policy51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 155) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  arr.push(acc % 1000);
  m01.set('k2', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-4'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  m01.set('k8', acc % 997);
  for (let i9 = 0; i9 < 5; i9++) {
    acc = (acc + i9 * 13 + 177) % 100003;
  }
  buf += 'warehouse10-' + acc.toString();
  acc = acc + 55 - (acc % 51);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const rc13: Rec77 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 162) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  if (acc % 31 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  if (acc % 14 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  buf += 'warehouse24-' + acc.toString();
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  m01.set('k27', acc % 997);
  if (acc % 22 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8930) % 65521;
  m01.set('k30', acc % 997);
  for (let i31 = 0; i31 < 12; i31++) {
    acc = (acc + i31 * 13 + 948) % 100003;
  }
  acc = acc + 483 - (acc % 65);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 126) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 186) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  buf += `q36:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-39'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += 'client41-' + acc.toString();
  buf += 'routeplan42-' + acc.toString();
  if (acc % 19 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 14) { throw new Error('synthetic-45'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  arr.push(acc % 1000);
  buf += 'customs48-' + acc.toString();
  if (acc % 19 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  m01.set('k50', acc % 997);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 50) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0077_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 156) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit77 = new Unit77(acc);
  buf += 'transit0-' + acc.toString();
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const rc2: Rec77 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += `q5:${acc % 97}`;
  acc = (acc * 31 + 1784) % 65521;
  for (let i7 = 0; i7 < 10; i7++) {
    acc = (acc + i7 * 13 + 265) % 100003;
  }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += 'vendor13-' + acc.toString();
  acc = (acc * 31 + 9462) % 65521;
  acc = acc + 647 - (acc % 28);
  acc = acc + 604 - (acc % 29);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 146) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 19) { throw new Error('synthetic-18'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'vendor19-' + acc.toString();
  for (let i20 = 0; i20 < 7; i20++) {
    acc = (acc + i20 * 13 + 723) % 100003;
  }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const ix22: number = buf.indexOf('p77');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-23'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 29) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 150) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  acc = (acc * 31 + 1672) % 65521;
  if (acc % 28 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 193) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  acc = acc + 101 - (acc % 36);
  const ix31: number = buf.indexOf('p77');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 195) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  try { if (acc % 29 === 18) { throw new Error('synthetic-36'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i37 = 0; i37 < 11; i37++) {
    acc = (acc + i37 * 13 + 861) % 100003;
  }
  const ix38: number = buf.indexOf('p77');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 151) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const ix40: number = buf.indexOf('p77');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 23) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = (acc * 31 + 2009) % 65521;
  buf += `q45:${acc % 97}`;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  if (acc % 8 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  m01.set('k48', acc % 997);
  acc = (acc * 31 + 7944) % 65521;
  buf += `q50:${acc % 97}`;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0077(): BizFn[] {
  return [biz_0077_00, biz_0077_01, biz_0077_02, biz_0077_03, biz_0077_04, biz_0077_05, biz_0077_06, biz_0077_07, biz_0077_08, biz_0077_09, biz_0077_10, biz_0077_11, biz_0077_12, biz_0077_13, biz_0077_14, biz_0077_15, biz_0077_16, biz_0077_17, biz_0077_18, biz_0077_19, biz_0077_20, biz_0077_21, biz_0077_22, biz_0077_23, biz_0077_24, biz_0077_25, biz_0077_26, biz_0077_27, biz_0077_28, biz_0077_29, biz_0077_30, biz_0077_31, biz_0077_32, biz_0077_33, biz_0077_34, biz_0077_35, biz_0077_36, biz_0077_37, biz_0077_38, biz_0077_39, biz_0077_40, biz_0077_41, biz_0077_42];
}

export function rega_0077(): ABizFn[] {
  return [biz_0077_09a, biz_0077_19a, biz_0077_29a, biz_0077_39a];
}
