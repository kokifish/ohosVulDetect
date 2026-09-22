// Biz0065.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec65 { id: number; tag: string; score: number; }

class Unit65 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0065_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8515) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  for (let i0 = 0; i0 < 4; i0++) {
    acc = (acc + i0 * 13 + 93) % 100003;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-1'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k2', acc % 997);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const rc4: Rec65 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const ix7: number = buf.indexOf('p65');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  acc = acc + 239 - (acc % 94);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-10'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'pallet11-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  arr.push(acc % 1000);
  const ix15: number = buf.indexOf('p65');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 16) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 122) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += `q21:${acc % 97}`;
  const ix22: number = buf.indexOf('p65');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  if (acc % 12 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  m01.set('k26', acc % 997);
  for (let i27 = 0; i27 < 9; i27++) {
    acc = (acc + i27 * 13 + 696) % 100003;
  }
  for (let i28 = 0; i28 < 3; i28++) {
    acc = (acc + i28 * 13 + 497) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 120) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 131) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'waybill33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 80) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  acc = (acc * 31 + 2595) % 65521;
  acc = (acc * 31 + 3177) % 65521;
  acc = (acc * 31 + 5912) % 65521;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  acc = acc + 414 - (acc % 68);
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const rc42: Rec65 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  arr.push(acc % 1000);
  buf += `q44:${acc % 97}`;
  const ix45: number = buf.indexOf('p65');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const ix48: number = buf.indexOf('p65');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8516) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const ix1: number = buf.indexOf('p65');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  if (acc % 16 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  acc = acc + 647 - (acc % 55);
  for (let i4 = 0; i4 < 4; i4++) {
    acc = (acc + i4 * 13 + 496) % 100003;
  }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 115) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const ix6: number = buf.indexOf('p65');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += 'warehouse7-' + acc.toString();
  acc = acc + 47 - (acc % 12);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += `q10:${acc % 97}`;
  m01.set('k11', acc % 997);
  try { if (acc % 29 === 10) { throw new Error('synthetic-12'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'vendor13-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += 'client15-' + acc.toString();
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 128) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 23 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = (acc * 31 + 8054) % 65521;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const rc22: Rec65 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const ix23: number = buf.indexOf('p65');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  buf += `q24:${acc % 97}`;
  buf += `q25:${acc % 97}`;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const rc27: Rec65 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  buf += 'policy32-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 72) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'routeplan35-' + acc.toString();
  buf += 'stocktake36-' + acc.toString();
  const rc37: Rec65 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  for (let i39 = 0; i39 < 3; i39++) {
    acc = (acc + i39 * 13 + 908) % 100003;
  }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 198) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const ix42: number = buf.indexOf('p65');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-43'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const ix44: number = buf.indexOf('p65');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  m01.set('k46', acc % 997);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += `q49:${acc % 97}`;
  const rc50: Rec65 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8517) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  acc = acc + 551 - (acc % 81);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  for (let i7 = 0; i7 < 9; i7++) {
    acc = (acc + i7 * 13 + 210) % 100003;
  }
  buf += 'pallet8-' + acc.toString();
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 122) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  buf += `q10:${acc % 97}`;
  buf += `q11:${acc % 97}`;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  acc = (acc * 31 + 1594) % 65521;
  acc = (acc * 31 + 1676) % 65521;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 182) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 28 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += `q19:${acc % 97}`;
  acc = (acc * 31 + 2738) % 65521;
  for (let i21 = 0; i21 < 3; i21++) {
    acc = (acc + i21 * 13 + 997) % 100003;
  }
  const ix22: number = buf.indexOf('p65');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8589) % 65521;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  buf += 'sku25-' + acc.toString();
  buf += `q26:${acc % 97}`;
  for (let i27 = 0; i27 < 9; i27++) {
    acc = (acc + i27 * 13 + 521) % 100003;
  }
  acc = acc + 790 - (acc % 75);
  for (let i29 = 0; i29 < 12; i29++) {
    acc = (acc + i29 * 13 + 709) % 100003;
  }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  for (let i31 = 0; i31 < 7; i31++) {
    acc = (acc + i31 * 13 + 247) % 100003;
  }
  buf += 'balance32-' + acc.toString();
  buf += 'dispatch33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 33) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p65');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  if (acc % 28 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const rc39: Rec65 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  if (acc % 5 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const rc41: Rec65 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const ix42: number = buf.indexOf('p65');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4889) % 65521;
  if (acc % 26 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  for (let i46 = 0; i46 < 6; i46++) {
    acc = (acc + i46 * 13 + 678) % 100003;
  }
  buf += 'stocktake47-' + acc.toString();
  try { if (acc % 29 === 17) { throw new Error('synthetic-48'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const ix49: number = buf.indexOf('p65');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-51'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8518) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  arr.push(acc % 1000);
  const rc1: Rec65 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  acc = (acc * 31 + 8011) % 65521;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const ix6: number = buf.indexOf('p65');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  acc = acc + 536 - (acc % 86);
  buf += 'quota8-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-10'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i11 = 0; i11 < 12; i11++) {
    acc = (acc + i11 * 13 + 661) % 100003;
  }
  acc = acc + 85 - (acc % 72);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const rc14: Rec65 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 93) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const rc16: Rec65 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 114) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 111) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  m01.set('k19', acc % 997);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = acc + 320 - (acc % 93);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = (acc * 31 + 4593) % 65521;
  const rc24: Rec65 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  try { if (acc % 29 === 7) { throw new Error('synthetic-28'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-29'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'dock30-' + acc.toString();
  if (acc % 27 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const ix32: number = buf.indexOf('p65');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  for (let i33 = 0; i33 < 3; i33++) {
    acc = (acc + i33 * 13 + 768) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 144) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 951 - (acc % 77);
  m01.set('k36', acc % 997);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const ix38: number = buf.indexOf('p65');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  buf += 'payout39-' + acc.toString();
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  for (let i45 = 0; i45 < 12; i45++) {
    acc = (acc + i45 * 13 + 656) % 100003;
  }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4363) % 65521;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += `q49:${acc % 97}`;
  m01.set('k50', acc % 997);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8519) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  for (let i1 = 0; i1 < 11; i1++) {
    acc = (acc + i1 * 13 + 473) % 100003;
  }
  const ix2: number = buf.indexOf('p65');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  for (let i3 = 0; i3 < 12; i3++) {
    acc = (acc + i3 * 13 + 330) % 100003;
  }
  if (acc % 11 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  buf += `q8:${acc % 97}`;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  if (acc % 30 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (acc % 16 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8246) % 65521;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 13) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 20) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const rc19: Rec65 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const ix20: number = buf.indexOf('p65');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  acc = acc + 807 - (acc % 22);
  acc = acc + 607 - (acc % 48);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  m01.set('k26', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  arr.push(acc % 1000);
  acc = acc + 997 - (acc % 27);
  const ix32: number = buf.indexOf('p65');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const ix33: number = buf.indexOf('p65');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 53) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 172) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i37 = 0; i37 < 10; i37++) {
    acc = (acc + i37 * 13 + 123) % 100003;
  }
  const ix38: number = buf.indexOf('p65');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  acc = (acc * 31 + 872) % 65521;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 32) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 140) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += 'waybill46-' + acc.toString();
  try { if (acc % 29 === 10) { throw new Error('synthetic-47'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 30 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const rc50: Rec65 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8520) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const ix1: number = buf.indexOf('p65');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const rc2: Rec65 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  acc = (acc * 31 + 5309) % 65521;
  const ix4: number = buf.indexOf('p65');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  m01.set('k5', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const ix7: number = buf.indexOf('p65');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const rc8: Rec65 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  for (let i9 = 0; i9 < 3; i9++) {
    acc = (acc + i9 * 13 + 515) % 100003;
  }
  buf += 'order10-' + acc.toString();
  const rc11: Rec65 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  buf += `q12:${acc % 97}`;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (acc % 7 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 69) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = (acc * 31 + 9531) % 65521;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  for (let i21 = 0; i21 < 8; i21++) {
    acc = (acc + i21 * 13 + 603) % 100003;
  }
  acc = (acc * 31 + 3232) % 65521;
  const rc23: Rec65 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 26) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 164) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  m01.set('k27', acc % 997);
  buf += `q28:${acc % 97}`;
  if (acc % 22 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 135) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const rc32: Rec65 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = acc + 213 - (acc % 86);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 189) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 11; i35++) {
    acc = (acc + i35 * 13 + 627) % 100003;
  }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 164) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  buf += 'settle38-' + acc.toString();
  try { if (acc % 29 === 20) { throw new Error('synthetic-39'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  if (acc % 26 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 98) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  const ix43: number = buf.indexOf('p65');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const rc47: Rec65 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const ix48: number = buf.indexOf('p65');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  const ix49: number = buf.indexOf('p65');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8521) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  const rc0: Rec65 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  m01.set('k1', acc % 997);
  acc = acc + 944 - (acc % 37);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  const ix5: number = buf.indexOf('p65');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const rc7: Rec65 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const rc8: Rec65 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 89) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  buf += `q12:${acc % 97}`;
  for (let i13 = 0; i13 < 9; i13++) {
    acc = (acc + i13 * 13 + 85) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  arr.push(acc % 1000);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 77) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 100) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-18'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  arr.push(acc % 1000);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  acc = (acc * 31 + 1239) % 65521;
  buf += 'payout24-' + acc.toString();
  buf += 'shelf25-' + acc.toString();
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 59) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const rc27: Rec65 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  m01.set('k29', acc % 997);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-32'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 499 - (acc % 76);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 33) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 3; i35++) {
    acc = (acc + i35 * 13 + 475) % 100003;
  }
  const ix36: number = buf.indexOf('p65');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  buf += `q38:${acc % 97}`;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  arr.push(acc % 1000);
  acc = acc + 617 - (acc % 37);
  try { if (acc % 29 === 23) { throw new Error('synthetic-43'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 17) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  if (acc % 8 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const rc48: Rec65 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  for (let i50 = 0; i50 < 5; i50++) {
    acc = (acc + i50 * 13 + 243) % 100003;
  }
  for (let i51 = 0; i51 < 9; i51++) {
    acc = (acc + i51 * 13 + 699) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8522) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  acc = (acc * 31 + 1196) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  for (let i7 = 0; i7 < 7; i7++) {
    acc = (acc + i7 * 13 + 657) % 100003;
  }
  buf += `q8:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (acc % 30 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  buf += 'ticket11-' + acc.toString();
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3147) % 65521;
  m01.set('k14', acc % 997);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 59) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 9; i18++) {
    acc = (acc + i18 * 13 + 957) % 100003;
  }
  arr.push(acc % 1000);
  const rc20: Rec65 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = acc + 615 - (acc % 78);
  buf += 'coupon22-' + acc.toString();
  acc = acc + 889 - (acc % 33);
  const rc24: Rec65 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  for (let i25 = 0; i25 < 4; i25++) {
    acc = (acc + i25 * 13 + 402) % 100003;
  }
  buf += 'region26-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const rc29: Rec65 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  arr.push(acc % 1000);
  acc = acc + 343 - (acc % 86);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 158) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = acc + 620 - (acc % 47);
  for (let i37 = 0; i37 < 4; i37++) {
    acc = (acc + i37 * 13 + 720) % 100003;
  }
  for (let i38 = 0; i38 < 6; i38++) {
    acc = (acc + i38 * 13 + 356) % 100003;
  }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 8) { throw new Error('synthetic-41'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  try { if (acc % 29 === 7) { throw new Error('synthetic-44'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  buf += 'pickup46-' + acc.toString();
  m01.set('k47', acc % 997);
  buf += 'carrier48-' + acc.toString();
  try { if (acc % 29 === 7) { throw new Error('synthetic-49'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const rc50: Rec65 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 29) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8523) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-3'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3747) % 65521;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  acc = acc + 459 - (acc % 74);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  acc = (acc * 31 + 4129) % 65521;
  if (acc % 28 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 95) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 8028) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-19'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 190) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const ix23: number = buf.indexOf('p65');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-25'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  acc = acc + 366 - (acc % 97);
  if (acc % 27 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const ix29: number = buf.indexOf('p65');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const ix30: number = buf.indexOf('p65');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const ix32: number = buf.indexOf('p65');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += 'invoice33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 94) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 13) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  m01.set('k37', acc % 997);
  buf += 'client38-' + acc.toString();
  acc = acc + 737 - (acc % 63);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 179) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 179) % 65521;
  const ix45: number = buf.indexOf('p65');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5747) % 65521;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const ix49: number = buf.indexOf('p65');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += `q50:${acc % 97}`;
  if (acc % 30 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8524) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  if (acc % 16 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  m01.set('k1', acc % 997);
  acc = acc + 701 - (acc % 96);
  try { if (acc % 29 === 2) { throw new Error('synthetic-3'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  if (acc % 10 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  buf += `q7:${acc % 97}`;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const rc10: Rec65 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const rc11: Rec65 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  acc = acc + 235 - (acc % 96);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 114) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const rc21: Rec65 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += `q23:${acc % 97}`;
  for (let i24 = 0; i24 < 7; i24++) {
    acc = (acc + i24 * 13 + 179) % 100003;
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  arr.push(acc % 1000);
  const rc29: Rec65 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  buf += 'stocktake30-' + acc.toString();
  try { if (acc % 29 === 8) { throw new Error('synthetic-31'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += 'journey33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 48) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p65');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  buf += 'tariff37-' + acc.toString();
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 54) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  if (acc % 7 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (acc % 18 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  if (acc % 13 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const rc48: Rec65 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  m01.set('k49', acc % 997);
  acc = (acc * 31 + 7290) % 65521;
  const rc51: Rec65 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0065_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0065_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0065_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8525) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  const ix0: number = buf.indexOf('p65');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  for (let i2 = 0; i2 < 7; i2++) {
    acc = (acc + i2 * 13 + 217) % 100003;
  }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += `q4:${acc % 97}`;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 179) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  for (let i7 = 0; i7 < 12; i7++) {
    acc = (acc + i7 * 13 + 107) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  arr.push(acc % 1000);
  m01.set('k10', acc % 997);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 187) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 191) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'balance19-' + acc.toString();
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  m01.set('k21', acc % 997);
  try { if (acc % 29 === 5) { throw new Error('synthetic-22'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i23 = 0; i23 < 11; i23++) {
    acc = (acc + i23 * 13 + 456) % 100003;
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  for (let i25 = 0; i25 < 4; i25++) {
    acc = (acc + i25 * 13 + 419) % 100003;
  }
  for (let i26 = 0; i26 < 5; i26++) {
    acc = (acc + i26 * 13 + 38) % 100003;
  }
  for (let i27 = 0; i27 < 9; i27++) {
    acc = (acc + i27 * 13 + 891) % 100003;
  }
  acc = (acc * 31 + 404) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  for (let i30 = 0; i30 < 11; i30++) {
    acc = (acc + i30 * 13 + 926) % 100003;
  }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  buf += 'carrier32-' + acc.toString();
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 190) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 965 - (acc % 41);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  if (acc % 14 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  const ix39: number = buf.indexOf('p65');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += `q40:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 37) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 156) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const ix45: number = buf.indexOf('p65');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-46'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9716) % 65521;
  buf += 'dispatch48-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 528 - (acc % 96);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8526) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 65) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  buf += 'pallet2-' + acc.toString();
  arr.push(acc % 1000);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 55) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  acc = (acc * 31 + 9412) % 65521;
  buf += 'policy7-' + acc.toString();
  buf += `q8:${acc % 97}`;
  const ix9: number = buf.indexOf('p65');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  acc = acc + 855 - (acc % 59);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const ix16: number = buf.indexOf('p65');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 132) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'refund18-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += 'ticket20-' + acc.toString();
  const rc21: Rec65 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  if (acc % 5 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-24'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  acc = (acc * 31 + 2303) % 65521;
  buf += `q27:${acc % 97}`;
  acc = (acc * 31 + 3608) % 65521;
  if (acc % 8 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  if (acc % 17 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 172) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = (acc * 31 + 3376) % 65521;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  buf += 'shelf38-' + acc.toString();
  for (let i39 = 0; i39 < 8; i39++) {
    acc = (acc + i39 * 13 + 735) % 100003;
  }
  acc = acc + 333 - (acc % 93);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 18) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  m01.set('k42', acc % 997);
  const rc43: Rec65 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  m01.set('k47', acc % 997);
  acc = (acc * 31 + 1309) % 65521;
  acc = (acc * 31 + 2878) % 65521;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8527) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  buf += 'customs0-' + acc.toString();
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  acc = acc + 692 - (acc % 67);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  buf += 'vendor6-' + acc.toString();
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q12:${acc % 97}`;
  arr.push(acc % 1000);
  for (let i14 = 0; i14 < 6; i14++) {
    acc = (acc + i14 * 13 + 528) % 100003;
  }
  const rc15: Rec65 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 13) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p65');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  m01.set('k19', acc % 997);
  buf += 'waybill20-' + acc.toString();
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 149) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  if (acc % 5 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  if (acc % 17 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  buf += 'balance24-' + acc.toString();
  try { if (acc % 29 === 15) { throw new Error('synthetic-25'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k26', acc % 997);
  try { if (acc % 29 === 3) { throw new Error('synthetic-27'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 191) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  if (acc % 27 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  for (let i38 = 0; i38 < 3; i38++) {
    acc = (acc + i38 * 13 + 434) % 100003;
  }
  if (acc % 7 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  m01.set('k40', acc % 997);
  try { if (acc % 29 === 19) { throw new Error('synthetic-41'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const rc42: Rec65 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const rc44: Rec65 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  m01.set('k45', acc % 997);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-47'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const rc49: Rec65 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  for (let i50 = 0; i50 < 8; i50++) {
    acc = (acc + i50 * 13 + 916) % 100003;
  }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8528) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const rc1: Rec65 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 76) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  buf += `q3:${acc % 97}`;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  acc = (acc * 31 + 5347) % 65521;
  for (let i6 = 0; i6 < 12; i6++) {
    acc = (acc + i6 * 13 + 523) % 100003;
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  acc = acc + 262 - (acc % 85);
  m01.set('k9', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  for (let i11 = 0; i11 < 8; i11++) {
    acc = (acc + i11 * 13 + 896) % 100003;
  }
  for (let i12 = 0; i12 < 10; i12++) {
    acc = (acc + i12 * 13 + 449) % 100003;
  }
  for (let i13 = 0; i13 < 10; i13++) {
    acc = (acc + i13 * 13 + 345) % 100003;
  }
  for (let i14 = 0; i14 < 6; i14++) {
    acc = (acc + i14 * 13 + 725) % 100003;
  }
  acc = acc + 469 - (acc % 57);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 184) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'stocktake18-' + acc.toString();
  const rc19: Rec65 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 54) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix22: number = buf.indexOf('p65');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-23'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k24', acc % 997);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const rc27: Rec65 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const ix28: number = buf.indexOf('p65');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 68) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  acc = (acc * 31 + 3480) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 166) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  buf += 'sku38-' + acc.toString();
  const ix39: number = buf.indexOf('p65');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-41'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  buf += `q43:${acc % 97}`;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  const rc45: Rec65 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  m01.set('k50', acc % 997);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8529) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  buf += `q1:${acc % 97}`;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  try { if (acc % 29 === 14) { throw new Error('synthetic-6'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 49) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 180) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  acc = acc + 555 - (acc % 35);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 158) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2763) % 65521;
  buf += 'ledger20-' + acc.toString();
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  buf += 'audit23-' + acc.toString();
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 73) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  m01.set('k26', acc % 997);
  arr.push(acc % 1000);
  const ix28: number = buf.indexOf('p65');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  buf += `q29:${acc % 97}`;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += 'quota31-' + acc.toString();
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  acc = (acc * 31 + 6348) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 175) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'shelf36-' + acc.toString();
  try { if (acc % 29 === 3) { throw new Error('synthetic-37'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const ix38: number = buf.indexOf('p65');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  arr.push(acc % 1000);
  buf += 'invoice41-' + acc.toString();
  const ix42: number = buf.indexOf('p65');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const ix44: number = buf.indexOf('p65');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const ix46: number = buf.indexOf('p65');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const ix47: number = buf.indexOf('p65');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const ix48: number = buf.indexOf('p65');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const rc50: Rec65 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8530) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 194) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  if (acc % 19 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  if (acc % 23 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  for (let i4 = 0; i4 < 4; i4++) {
    acc = (acc + i4 * 13 + 345) % 100003;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-5'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q6:${acc % 97}`;
  m01.set('k7', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  acc = (acc * 31 + 2143) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  for (let i12 = 0; i12 < 3; i12++) {
    acc = (acc + i12 * 13 + 355) % 100003;
  }
  buf += 'parcel13-' + acc.toString();
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const rc16: Rec65 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 129) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-22'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q23:${acc % 97}`;
  acc = acc + 197 - (acc % 14);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  arr.push(acc % 1000);
  const rc29: Rec65 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  for (let i31 = 0; i31 < 5; i31++) {
    acc = (acc + i31 * 13 + 976) % 100003;
  }
  const rc32: Rec65 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 119) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  m01.set('k36', acc % 997);
  acc = (acc * 31 + 2423) % 65521;
  if (acc % 9 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  for (let i39 = 0; i39 < 9; i39++) {
    acc = (acc + i39 * 13 + 672) % 100003;
  }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += `q41:${acc % 97}`;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  try { if (acc % 29 === 7) { throw new Error('synthetic-44'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const ix45: number = buf.indexOf('p65');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += 'pallet47-' + acc.toString();
  const rc48: Rec65 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  for (let i51 = 0; i51 < 9; i51++) {
    acc = (acc + i51 * 13 + 886) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8531) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  m01.set('k1', acc % 997);
  const ix2: number = buf.indexOf('p65');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += 'ticket4-' + acc.toString();
  const ix5: number = buf.indexOf('p65');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const ix7: number = buf.indexOf('p65');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  m01.set('k8', acc % 997);
  acc = (acc * 31 + 7603) % 65521;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const rc12: Rec65 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 121) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  acc = (acc * 31 + 6811) % 65521;
  m01.set('k15', acc % 997);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 172) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 656 - (acc % 19);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 97) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-20'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 283 - (acc % 31);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  buf += `q23:${acc % 97}`;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-25'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'balance26-' + acc.toString();
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  m01.set('k28', acc % 997);
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  buf += 'pallet30-' + acc.toString();
  acc = (acc * 31 + 8213) % 65521;
  if (acc % 21 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 137) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  acc = acc + 312 - (acc % 77);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  m01.set('k44', acc % 997);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += `q47:${acc % 97}`;
  buf += `q48:${acc % 97}`;
  const rc49: Rec65 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  acc = acc + 577 - (acc % 12);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8532) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  buf += 'quota0-' + acc.toString();
  buf += `q1:${acc % 97}`;
  acc = acc + 443 - (acc % 36);
  m01.set('k3', acc % 997);
  try { if (acc % 29 === 23) { throw new Error('synthetic-4'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1310) % 65521;
  try { if (acc % 29 === 5) { throw new Error('synthetic-6'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8337) % 65521;
  const rc8: Rec65 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  buf += 'parcel9-' + acc.toString();
  try { if (acc % 29 === 17) { throw new Error('synthetic-10'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const ix12: number = buf.indexOf('p65');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  buf += `q13:${acc % 97}`;
  acc = (acc * 31 + 9189) % 65521;
  acc = (acc * 31 + 1638) % 65521;
  const ix16: number = buf.indexOf('p65');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 42) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 3; i18++) {
    acc = (acc + i18 * 13 + 612) % 100003;
  }
  const rc19: Rec65 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  try { if (acc % 29 === 2) { throw new Error('synthetic-20'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  m01.set('k22', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  for (let i25 = 0; i25 < 4; i25++) {
    acc = (acc + i25 * 13 + 50) % 100003;
  }
  if (acc % 31 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  m01.set('k27', acc % 997);
  const rc28: Rec65 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  m01.set('k29', acc % 997);
  buf += 'payout30-' + acc.toString();
  m01.set('k31', acc % 997);
  try { if (acc % 29 === 22) { throw new Error('synthetic-32'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'crate33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 162) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  arr.push(acc % 1000);
  if (acc % 30 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 89) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 104) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 194) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = (acc * 31 + 6611) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const rc45: Rec65 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += 'refund48-' + acc.toString();
  for (let i49 = 0; i49 < 12; i49++) {
    acc = (acc + i49 * 13 + 648) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8533) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  m01.set('k0', acc % 997);
  buf += `q1:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 148) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  for (let i5 = 0; i5 < 12; i5++) {
    acc = (acc + i5 * 13 + 882) % 100003;
  }
  acc = (acc * 31 + 2468) % 65521;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 175) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  buf += `q9:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 20) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const ix13: number = buf.indexOf('p65');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  for (let i15 = 0; i15 < 8; i15++) {
    acc = (acc + i15 * 13 + 427) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 60) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 176) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  if (acc % 12 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  acc = acc + 208 - (acc % 52);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 26 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  arr.push(acc % 1000);
  buf += `q31:${acc % 97}`;
  try { if (acc % 29 === 19) { throw new Error('synthetic-32'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'region33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 116) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  if (acc % 21 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  buf += `q41:${acc % 97}`;
  acc = acc + 118 - (acc % 7);
  buf += `q43:${acc % 97}`;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  try { if (acc % 29 === 10) { throw new Error('synthetic-45'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'client46-' + acc.toString();
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 93) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  m01.set('k50', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8534) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  for (let i0 = 0; i0 < 8; i0++) {
    acc = (acc + i0 * 13 + 377) % 100003;
  }
  buf += 'depot1-' + acc.toString();
  if (acc % 11 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  for (let i3 = 0; i3 < 11; i3++) {
    acc = (acc + i3 * 13 + 957) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q5:${acc % 97}`;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  if (acc % 5 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const ix10: number = buf.indexOf('p65');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const ix13: number = buf.indexOf('p65');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 126) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 151) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const ix20: number = buf.indexOf('p65');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  buf += 'policy22-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 186) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const ix29: number = buf.indexOf('p65');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  for (let i30 = 0; i30 < 9; i30++) {
    acc = (acc + i30 * 13 + 728) % 100003;
  }
  arr.push(acc % 1000);
  acc = acc + 827 - (acc % 23);
  if (acc % 23 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 188) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 103) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = acc + 447 - (acc % 11);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 195) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const rc38: Rec65 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  buf += `q39:${acc % 97}`;
  acc = acc + 610 - (acc % 82);
  for (let i41 = 0; i41 < 10; i41++) {
    acc = (acc + i41 * 13 + 345) % 100003;
  }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 53) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  if (acc % 19 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = (acc * 31 + 6450) % 65521;
  buf += `q47:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4337) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-51'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0065_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0065_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0065_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8535) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += 'coupon1-' + acc.toString();
  try { if (acc % 29 === 2) { throw new Error('synthetic-2'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8953) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 140) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  acc = (acc * 31 + 3608) % 65521;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const ix12: number = buf.indexOf('p65');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const rc13: Rec65 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-15'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6349) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 60) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  if (acc % 26 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 53) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  buf += 'region23-' + acc.toString();
  acc = acc + 79 - (acc % 80);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  for (let i26 = 0; i26 < 8; i26++) {
    acc = (acc + i26 * 13 + 55) % 100003;
  }
  if (acc % 23 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  if (acc % 25 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  m01.set('k29', acc % 997);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  buf += `q31:${acc % 97}`;
  for (let i32 = 0; i32 < 3; i32++) {
    acc = (acc + i32 * 13 + 934) % 100003;
  }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 110) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 121) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  buf += 'dock36-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  acc = (acc * 31 + 9878) % 65521;
  const rc42: Rec65 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  for (let i46 = 0; i46 < 5; i46++) {
    acc = (acc + i46 * 13 + 491) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 97) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  acc = acc + 871 - (acc % 38);
  acc = (acc * 31 + 2371) % 65521;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 95) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8536) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  acc = (acc * 31 + 6347) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += 'region2-' + acc.toString();
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 14) { throw new Error('synthetic-4'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 17) { throw new Error('synthetic-7'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q8:${acc % 97}`;
  const ix9: number = buf.indexOf('p65');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 68) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += 'stocktake12-' + acc.toString();
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  if (acc % 5 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  if (acc % 26 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  if (acc % 15 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 174) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  buf += `q19:${acc % 97}`;
  const rc20: Rec65 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const rc21: Rec65 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6874) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const rc25: Rec65 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  acc = (acc * 31 + 8059) % 65521;
  const rc29: Rec65 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  buf += `q30:${acc % 97}`;
  for (let i31 = 0; i31 < 12; i31++) {
    acc = (acc + i31 * 13 + 215) % 100003;
  }
  buf += 'region32-' + acc.toString();
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 33) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  try { if (acc % 29 === 21) { throw new Error('synthetic-36'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  acc = (acc * 31 + 2326) % 65521;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  if (acc % 14 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-43'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k44', acc % 997);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-46'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8537) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  for (let i3 = 0; i3 < 4; i3++) {
    acc = (acc + i3 * 13 + 288) % 100003;
  }
  buf += `q4:${acc % 97}`;
  for (let i5 = 0; i5 < 9; i5++) {
    acc = (acc + i5 * 13 + 269) % 100003;
  }
  acc = (acc * 31 + 2266) % 65521;
  const rc7: Rec65 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 169) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  if (acc % 23 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const ix11: number = buf.indexOf('p65');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const ix12: number = buf.indexOf('p65');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  buf += `q13:${acc % 97}`;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  if (acc % 15 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 152) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const ix20: number = buf.indexOf('p65');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  m01.set('k22', acc % 997);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  arr.push(acc % 1000);
  if (acc % 27 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const rc26: Rec65 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  acc = (acc * 31 + 3803) % 65521;
  acc = (acc * 31 + 4823) % 65521;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  acc = (acc * 31 + 5310) % 65521;
  buf += `q32:${acc % 97}`;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 66) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = acc + 952 - (acc % 35);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const rc38: Rec65 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  try { if (acc % 29 === 9) { throw new Error('synthetic-39'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const rc41: Rec65 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  arr.push(acc % 1000);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const rc45: Rec65 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += 'audit49-' + acc.toString();
  acc = (acc * 31 + 4677) % 65521;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8538) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4510) % 65521;
  if (acc % 10 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  for (let i3 = 0; i3 < 8; i3++) {
    acc = (acc + i3 * 13 + 57) % 100003;
  }
  buf += 'invoice4-' + acc.toString();
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  arr.push(acc % 1000);
  if (acc % 30 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  acc = acc + 134 - (acc % 76);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  if (acc % 31 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  if (acc % 29 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-14'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  for (let i16 = 0; i16 < 11; i16++) {
    acc = (acc + i16 * 13 + 599) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 172) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 433 - (acc % 39);
  acc = acc + 831 - (acc % 93);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  for (let i21 = 0; i21 < 12; i21++) {
    acc = (acc + i21 * 13 + 624) % 100003;
  }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += `q24:${acc % 97}`;
  try { if (acc % 29 === 6) { throw new Error('synthetic-25'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 16) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 82) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q29:${acc % 97}`;
  const ix30: number = buf.indexOf('p65');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  m01.set('k32', acc % 997);
  buf += 'vendor33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 186) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  const rc36: Rec65 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const ix37: number = buf.indexOf('p65');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  arr.push(acc % 1000);
  acc = acc + 510 - (acc % 91);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  m01.set('k42', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  for (let i45 = 0; i45 < 9; i45++) {
    acc = (acc + i45 * 13 + 153) % 100003;
  }
  if (acc % 26 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  buf += 'coupon49-' + acc.toString();
  for (let i50 = 0; i50 < 10; i50++) {
    acc = (acc + i50 * 13 + 125) % 100003;
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8539) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  try { if (acc % 29 === 23) { throw new Error('synthetic-0'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  try { if (acc % 29 === 9) { throw new Error('synthetic-2'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-3'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 134) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const ix6: number = buf.indexOf('p65');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += `q7:${acc % 97}`;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  for (let i9 = 0; i9 < 10; i9++) {
    acc = (acc + i9 * 13 + 668) % 100003;
  }
  m01.set('k10', acc % 997);
  buf += `q11:${acc % 97}`;
  for (let i12 = 0; i12 < 5; i12++) {
    acc = (acc + i12 * 13 + 79) % 100003;
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  buf += 'parcel16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 100) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 9528) % 65521;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 164) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  buf += 'vendor21-' + acc.toString();
  const rc22: Rec65 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  try { if (acc % 29 === 19) { throw new Error('synthetic-23'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const ix24: number = buf.indexOf('p65');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  try { if (acc % 29 === 14) { throw new Error('synthetic-26'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  m01.set('k29', acc % 997);
  const rc30: Rec65 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  try { if (acc % 29 === 7) { throw new Error('synthetic-31'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 52) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  m01.set('k36', acc % 997);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 182) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  try { if (acc % 29 === 18) { throw new Error('synthetic-42'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q43:${acc % 97}`;
  try { if (acc % 29 === 3) { throw new Error('synthetic-44'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 124) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const ix47: number = buf.indexOf('p65');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-48'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 331 - (acc % 16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  for (let i51 = 0; i51 < 7; i51++) {
    acc = (acc + i51 * 13 + 535) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8540) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  const rc0: Rec65 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 159) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  acc = (acc * 31 + 8443) % 65521;
  acc = (acc * 31 + 8558) % 65521;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  try { if (acc % 29 === 13) { throw new Error('synthetic-5'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-7'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i8 = 0; i8 < 12; i8++) {
    acc = (acc + i8 * 13 + 876) % 100003;
  }
  const rc9: Rec65 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const ix12: number = buf.indexOf('p65');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  buf += `q13:${acc % 97}`;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 162) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  acc = acc + 880 - (acc % 16);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 197) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  acc = (acc * 31 + 4998) % 65521;
  const ix20: number = buf.indexOf('p65');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  buf += `q21:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  acc = acc + 971 - (acc % 47);
  if (acc % 24 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  for (let i26 = 0; i26 < 12; i26++) {
    acc = (acc + i26 * 13 + 274) % 100003;
  }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  arr.push(acc % 1000);
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  try { if (acc % 29 === 2) { throw new Error('synthetic-30'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  for (let i32 = 0; i32 < 11; i32++) {
    acc = (acc + i32 * 13 + 706) % 100003;
  }
  acc = acc + 491 - (acc % 63);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 59) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 121) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  if (acc % 18 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  if (acc % 25 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-41'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  if (acc % 7 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const rc44: Rec65 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  if (acc % 17 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  for (let i46 = 0; i46 < 9; i46++) {
    acc = (acc + i46 * 13 + 942) % 100003;
  }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 33) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q49:${acc % 97}`;
  const ix50: number = buf.indexOf('p65');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  for (let i51 = 0; i51 < 9; i51++) {
    acc = (acc + i51 * 13 + 88) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8541) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  acc = (acc * 31 + 1089) % 65521;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const rc3: Rec65 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 109) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  for (let i5 = 0; i5 < 6; i5++) {
    acc = (acc + i5 * 13 + 882) % 100003;
  }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const ix7: number = buf.indexOf('p65');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  m01.set('k8', acc % 997);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 99) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  buf += 'payout10-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  buf += 'order12-' + acc.toString();
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  buf += `q14:${acc % 97}`;
  acc = (acc * 31 + 4708) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 120) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  m01.set('k20', acc % 997);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const ix26: number = buf.indexOf('p65');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const rc27: Rec65 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 33) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const rc29: Rec65 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const ix32: number = buf.indexOf('p65');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 61) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  buf += `q36:${acc % 97}`;
  const ix37: number = buf.indexOf('p65');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const ix38: number = buf.indexOf('p65');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  buf += `q39:${acc % 97}`;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  if (acc % 11 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  buf += `q43:${acc % 97}`;
  acc = (acc * 31 + 6073) % 65521;
  m01.set('k45', acc % 997);
  acc = (acc * 31 + 6749) % 65521;
  m01.set('k47', acc % 997);
  acc = acc + 299 - (acc % 27);
  m01.set('k49', acc % 997);
  if (acc % 15 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8542) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  buf += `q0:${acc % 97}`;
  try { if (acc % 29 === 3) { throw new Error('synthetic-1'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-2'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  try { if (acc % 29 === 23) { throw new Error('synthetic-5'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 186) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  if (acc % 19 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-10'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  buf += 'tariff12-' + acc.toString();
  arr.push(acc % 1000);
  try { if (acc % 29 === 21) { throw new Error('synthetic-14'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 131) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 8066) % 65521;
  const ix19: number = buf.indexOf('p65');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 89) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const rc26: Rec65 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  buf += 'tariff28-' + acc.toString();
  buf += 'depot29-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 136) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const rc32: Rec65 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 103) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 117) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const ix37: number = buf.indexOf('p65');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  buf += `q41:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const ix43: number = buf.indexOf('p65');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const ix45: number = buf.indexOf('p65');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const ix47: number = buf.indexOf('p65');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  acc = acc + 826 - (acc % 85);
  if (acc % 25 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8543) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  if (acc % 25 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += 'rebate1-' + acc.toString();
  buf += `q2:${acc % 97}`;
  buf += `q3:${acc % 97}`;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 88) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  m01.set('k6', acc % 997);
  for (let i7 = 0; i7 < 5; i7++) {
    acc = (acc + i7 * 13 + 136) % 100003;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-8'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  buf += 'audit11-' + acc.toString();
  acc = (acc * 31 + 1410) % 65521;
  arr.push(acc % 1000);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  arr.push(acc % 1000);
  acc = acc + 849 - (acc % 71);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 125) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 61) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 198) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 49) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'waybill24-' + acc.toString();
  const ix25: number = buf.indexOf('p65');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  for (let i27 = 0; i27 < 3; i27++) {
    acc = (acc + i27 * 13 + 532) % 100003;
  }
  acc = (acc * 31 + 7226) % 65521;
  acc = acc + 198 - (acc % 48);
  arr.push(acc % 1000);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 96) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-35'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (acc % 13 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  buf += `q38:${acc % 97}`;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  for (let i41 = 0; i41 < 12; i41++) {
    acc = (acc + i41 * 13 + 691) % 100003;
  }
  if (acc % 22 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  acc = (acc * 31 + 839) % 65521;
  buf += 'ticket46-' + acc.toString();
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 191) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  acc = acc + 224 - (acc % 84);
  for (let i49 = 0; i49 < 4; i49++) {
    acc = (acc + i49 * 13 + 34) % 100003;
  }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const ix51: number = buf.indexOf('p65');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8544) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  try { if (acc % 29 === 20) { throw new Error('synthetic-0'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'bay1-' + acc.toString();
  acc = (acc * 31 + 245) % 65521;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const rc5: Rec65 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  if (acc % 27 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  acc = acc + 822 - (acc % 55);
  arr.push(acc % 1000);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  m01.set('k10', acc % 997);
  buf += 'order11-' + acc.toString();
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 50) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  arr.push(acc % 1000);
  acc = acc + 92 - (acc % 16);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 54) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 37) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 113) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  for (let i21 = 0; i21 < 5; i21++) {
    acc = (acc + i21 * 13 + 856) % 100003;
  }
  if (acc % 16 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  acc = (acc * 31 + 4579) % 65521;
  arr.push(acc % 1000);
  buf += `q27:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  acc = acc + 27 - (acc % 54);
  for (let i31 = 0; i31 < 10; i31++) {
    acc = (acc + i31 * 13 + 353) % 100003;
  }
  acc = (acc * 31 + 2255) % 65521;
  for (let i33 = 0; i33 < 11; i33++) {
    acc = (acc + i33 * 13 + 883) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 171) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 197) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  m01.set('k36', acc % 997);
  acc = acc + 662 - (acc % 23);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = (acc * 31 + 4312) % 65521;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 73) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  try { if (acc % 29 === 10) { throw new Error('synthetic-42'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 195) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  m01.set('k44', acc % 997);
  if (acc % 24 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += 'payout46-' + acc.toString();
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  try { if (acc % 29 === 18) { throw new Error('synthetic-49'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0065_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0065_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0065_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8545) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  acc = acc + 733 - (acc % 88);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  for (let i5 = 0; i5 < 3; i5++) {
    acc = (acc + i5 * 13 + 972) % 100003;
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 190) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const rc7: Rec65 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const rc9: Rec65 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  buf += `q11:${acc % 97}`;
  acc = acc + 632 - (acc % 46);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 4) { throw new Error('synthetic-15'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 15) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 32) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec65 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  buf += `q20:${acc % 97}`;
  buf += `q21:${acc % 97}`;
  for (let i22 = 0; i22 < 12; i22++) {
    acc = (acc + i22 * 13 + 348) % 100003;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-23'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-24'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  arr.push(acc % 1000);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  for (let i28 = 0; i28 < 7; i28++) {
    acc = (acc + i28 * 13 + 209) % 100003;
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 85) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  if (acc % 30 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 134) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 43) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  acc = acc + 450 - (acc % 12);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const ix41: number = buf.indexOf('p65');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  m01.set('k42', acc % 997);
  const rc43: Rec65 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 98) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  for (let i47 = 0; i47 < 3; i47++) {
    acc = (acc + i47 * 13 + 653) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  try { if (acc % 29 === 11) { throw new Error('synthetic-49'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8546) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  buf += 'routeplan0-' + acc.toString();
  buf += `q1:${acc % 97}`;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  buf += `q3:${acc % 97}`;
  for (let i4 = 0; i4 < 6; i4++) {
    acc = (acc + i4 * 13 + 947) % 100003;
  }
  buf += `q5:${acc % 97}`;
  acc = (acc * 31 + 4984) % 65521;
  acc = acc + 208 - (acc % 68);
  for (let i8 = 0; i8 < 9; i8++) {
    acc = (acc + i8 * 13 + 446) % 100003;
  }
  acc = acc + 308 - (acc % 87);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  m01.set('k11', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (acc % 5 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  for (let i14 = 0; i14 < 8; i14++) {
    acc = (acc + i14 * 13 + 609) % 100003;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-15'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 115) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 20) { throw new Error('synthetic-18'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6598) % 65521;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = acc + 698 - (acc % 56);
  buf += `q24:${acc % 97}`;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 198) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  const rc30: Rec65 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += 'transit31-' + acc.toString();
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 8) { throw new Error('synthetic-33'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 199) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p65');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  if (acc % 12 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const rc37: Rec65 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  m01.set('k39', acc % 997);
  const ix40: number = buf.indexOf('p65');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  for (let i41 = 0; i41 < 4; i41++) {
    acc = (acc + i41 * 13 + 856) % 100003;
  }
  acc = (acc * 31 + 5917) % 65521;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 39) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  if (acc % 17 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (acc % 22 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 112) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const rc47: Rec65 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  for (let i49 = 0; i49 < 10; i49++) {
    acc = (acc + i49 * 13 + 502) % 100003;
  }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8547) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  buf += `q1:${acc % 97}`;
  try { if (acc % 29 === 10) { throw new Error('synthetic-2'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = (acc * 31 + 5964) % 65521;
  const ix5: number = buf.indexOf('p65');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += 'bay7-' + acc.toString();
  acc = (acc * 31 + 8652) % 65521;
  buf += `q9:${acc % 97}`;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = acc + 41 - (acc % 26);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += `q14:${acc % 97}`;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 52) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const rc19: Rec65 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const rc20: Rec65 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const ix22: number = buf.indexOf('p65');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  buf += `q23:${acc % 97}`;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  try { if (acc % 29 === 21) { throw new Error('synthetic-26'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const ix27: number = buf.indexOf('p65');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const rc28: Rec65 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  if (acc % 15 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += `q30:${acc % 97}`;
  if (acc % 12 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 82) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p65');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  for (let i36 = 0; i36 < 10; i36++) {
    acc = (acc + i36 * 13 + 696) % 100003;
  }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const rc39: Rec65 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  buf += `q40:${acc % 97}`;
  m01.set('k41', acc % 997);
  if (acc % 11 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  m01.set('k43', acc % 997);
  arr.push(acc % 1000);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 43) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  try { if (acc % 29 === 17) { throw new Error('synthetic-48'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  acc = (acc * 31 + 8234) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8548) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  for (let i0 = 0; i0 < 12; i0++) {
    acc = (acc + i0 * 13 + 422) % 100003;
  }
  acc = (acc * 31 + 6077) % 65521;
  acc = (acc * 31 + 1836) % 65521;
  for (let i3 = 0; i3 < 11; i3++) {
    acc = (acc + i3 * 13 + 806) % 100003;
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  try { if (acc % 29 === 12) { throw new Error('synthetic-6'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  for (let i10 = 0; i10 < 10; i10++) {
    acc = (acc + i10 * 13 + 464) % 100003;
  }
  buf += `q11:${acc % 97}`;
  arr.push(acc % 1000);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  acc = (acc * 31 + 6214) % 65521;
  acc = acc + 319 - (acc % 40);
  acc = (acc * 31 + 866) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 62) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const rc20: Rec65 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  for (let i21 = 0; i21 < 11; i21++) {
    acc = (acc + i21 * 13 + 378) % 100003;
  }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  buf += 'parcel24-' + acc.toString();
  try { if (acc % 29 === 23) { throw new Error('synthetic-25'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i26 = 0; i26 < 3; i26++) {
    acc = (acc + i26 * 13 + 785) % 100003;
  }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  for (let i28 = 0; i28 < 8; i28++) {
    acc = (acc + i28 * 13 + 885) % 100003;
  }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = acc + 476 - (acc % 26);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 129) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-37'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  buf += `q39:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const rc42: Rec65 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  m01.set('k44', acc % 997);
  buf += `q45:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  acc = acc + 827 - (acc % 97);
  acc = (acc * 31 + 9966) % 65521;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (acc % 11 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  acc = acc + 907 - (acc % 7);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8549) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 13) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  m01.set('k3', acc % 997);
  const rc4: Rec65 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  m01.set('k5', acc % 997);
  for (let i6 = 0; i6 < 10; i6++) {
    acc = (acc + i6 * 13 + 72) % 100003;
  }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  for (let i8 = 0; i8 < 5; i8++) {
    acc = (acc + i8 * 13 + 488) % 100003;
  }
  if (acc % 13 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const rc10: Rec65 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 113) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  m01.set('k12', acc % 997);
  m01.set('k13', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  arr.push(acc % 1000);
  acc = acc + 307 - (acc % 56);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 43) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  buf += `q19:${acc % 97}`;
  m01.set('k20', acc % 997);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  m01.set('k23', acc % 997);
  try { if (acc % 29 === 11) { throw new Error('synthetic-24'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 29 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const ix28: number = buf.indexOf('p65');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  buf += `q32:${acc % 97}`;
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 110) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  for (let i36 = 0; i36 < 11; i36++) {
    acc = (acc + i36 * 13 + 131) % 100003;
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const ix38: number = buf.indexOf('p65');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  buf += 'ticket39-' + acc.toString();
  const rc40: Rec65 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  if (acc % 23 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 6935) % 65521;
  arr.push(acc % 1000);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 716) % 65521;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 15) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const rc51: Rec65 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8550) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  acc = acc + 531 - (acc % 30);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 8) { throw new Error('synthetic-5'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  if (acc % 25 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  for (let i10 = 0; i10 < 4; i10++) {
    acc = (acc + i10 * 13 + 153) % 100003;
  }
  if (acc % 24 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  acc = acc + 749 - (acc % 47);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  for (let i14 = 0; i14 < 4; i14++) {
    acc = (acc + i14 * 13 + 676) % 100003;
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 54) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 2) { throw new Error('synthetic-19'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const rc20: Rec65 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const rc22: Rec65 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  acc = acc + 307 - (acc % 37);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  arr.push(acc % 1000);
  m01.set('k29', acc % 997);
  acc = (acc * 31 + 2389) % 65521;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  for (let i32 = 0; i32 < 3; i32++) {
    acc = (acc + i32 * 13 + 521) % 100003;
  }
  const ix33: number = buf.indexOf('p65');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 84) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p65');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  acc = acc + 826 - (acc % 83);
  arr.push(acc % 1000);
  acc = (acc * 31 + 4279) % 65521;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  if (acc % 27 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  acc = acc + 757 - (acc % 72);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += 'journey47-' + acc.toString();
  acc = (acc * 31 + 162) % 65521;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = acc + 825 - (acc % 25);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8551) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  acc = acc + 104 - (acc % 77);
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  for (let i2 = 0; i2 < 7; i2++) {
    acc = (acc + i2 * 13 + 716) % 100003;
  }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += 'batch4-' + acc.toString();
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  arr.push(acc % 1000);
  if (acc % 6 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 61) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  acc = acc + 146 - (acc % 93);
  m01.set('k10', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5069) % 65521;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 175) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  for (let i20 = 0; i20 < 7; i20++) {
    acc = (acc + i20 * 13 + 489) % 100003;
  }
  const rc21: Rec65 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  m01.set('k22', acc % 997);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  arr.push(acc % 1000);
  for (let i25 = 0; i25 < 8; i25++) {
    acc = (acc + i25 * 13 + 742) % 100003;
  }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += 'rebate27-' + acc.toString();
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  if (acc % 14 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 144) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  acc = (acc * 31 + 8330) % 65521;
  const ix38: number = buf.indexOf('p65');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const rc41: Rec65 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  acc = (acc * 31 + 4669) % 65521;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  if (acc % 29 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 169) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  if (acc % 15 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  if (acc % 7 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8552) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  m01.set('k0', acc % 997);
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += 'order3-' + acc.toString();
  for (let i4 = 0; i4 < 8; i4++) {
    acc = (acc + i4 * 13 + 896) % 100003;
  }
  acc = acc + 578 - (acc % 37);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += `q7:${acc % 97}`;
  m01.set('k8', acc % 997);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  for (let i11 = 0; i11 < 10; i11++) {
    acc = (acc + i11 * 13 + 760) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 152) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += 'ticket15-' + acc.toString();
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 183) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 11 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  for (let i19 = 0; i19 < 12; i19++) {
    acc = (acc + i19 * 13 + 934) % 100003;
  }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  acc = acc + 550 - (acc % 75);
  buf += 'policy22-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  if (acc % 10 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  buf += `q25:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  acc = acc + 569 - (acc % 43);
  buf += 'batch28-' + acc.toString();
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  for (let i30 = 0; i30 < 11; i30++) {
    acc = (acc + i30 * 13 + 552) % 100003;
  }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 165) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 73) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-36'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i37 = 0; i37 < 5; i37++) {
    acc = (acc + i37 * 13 + 693) % 100003;
  }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  for (let i39 = 0; i39 < 9; i39++) {
    acc = (acc + i39 * 13 + 82) % 100003;
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-40'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q41:${acc % 97}`;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  buf += 'pallet43-' + acc.toString();
  buf += 'parcel44-' + acc.toString();
  m01.set('k45', acc % 997);
  acc = acc + 834 - (acc % 17);
  for (let i47 = 0; i47 < 11; i47++) {
    acc = (acc + i47 * 13 + 396) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += `q50:${acc % 97}`;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8553) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  for (let i0 = 0; i0 < 11; i0++) {
    acc = (acc + i0 * 13 + 662) % 100003;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-1'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-2'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  if (acc % 20 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-5'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 134) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 70) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i12 = 0; i12 < 9; i12++) {
    acc = (acc + i12 * 13 + 864) % 100003;
  }
  const ix13: number = buf.indexOf('p65');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  if (acc % 19 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const ix15: number = buf.indexOf('p65');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  const rc16: Rec65 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 151) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 10) { throw new Error('synthetic-18'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-21'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k22', acc % 997);
  if (acc % 11 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const rc26: Rec65 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  const ix27: number = buf.indexOf('p65');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5324) % 65521;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 151) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  buf += 'payout32-' + acc.toString();
  const ix33: number = buf.indexOf('p65');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 19) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += `q36:${acc % 97}`;
  try { if (acc % 29 === 6) { throw new Error('synthetic-37'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  arr.push(acc % 1000);
  m01.set('k40', acc % 997);
  for (let i41 = 0; i41 < 3; i41++) {
    acc = (acc + i41 * 13 + 590) % 100003;
  }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 71) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  buf += `q44:${acc % 97}`;
  arr.push(acc % 1000);
  buf += `q46:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-47'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  m01.set('k49', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += 'routeplan51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8554) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  const rc0: Rec65 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  for (let i1 = 0; i1 < 6; i1++) {
    acc = (acc + i1 * 13 + 715) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += `q4:${acc % 97}`;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  for (let i8 = 0; i8 < 9; i8++) {
    acc = (acc + i8 * 13 + 182) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  acc = acc + 94 - (acc % 90);
  const ix12: number = buf.indexOf('p65');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const ix13: number = buf.indexOf('p65');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const rc15: Rec65 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 88) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 94) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  buf += 'waybill19-' + acc.toString();
  for (let i20 = 0; i20 < 12; i20++) {
    acc = (acc + i20 * 13 + 709) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  arr.push(acc % 1000);
  if (acc % 26 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const ix25: number = buf.indexOf('p65');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  buf += `q26:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  buf += `q29:${acc % 97}`;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 175) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 71) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 120) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const ix36: number = buf.indexOf('p65');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += `q37:${acc % 97}`;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const rc39: Rec65 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 161) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const ix41: number = buf.indexOf('p65');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  acc = acc + 650 - (acc % 64);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const ix46: number = buf.indexOf('p65');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  if (acc % 27 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 113) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  buf += 'coupon49-' + acc.toString();
  acc = acc + 150 - (acc % 55);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0065_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0065_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0065_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8555) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  acc = (acc * 31 + 7948) % 65521;
  for (let i1 = 0; i1 < 10; i1++) {
    acc = (acc + i1 * 13 + 560) % 100003;
  }
  for (let i2 = 0; i2 < 7; i2++) {
    acc = (acc + i2 * 13 + 821) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  m01.set('k7', acc % 997);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 69) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const ix10: number = buf.indexOf('p65');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const rc12: Rec65 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += `q13:${acc % 97}`;
  for (let i14 = 0; i14 < 12; i14++) {
    acc = (acc + i14 * 13 + 718) % 100003;
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 167) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 3; i18++) {
    acc = (acc + i18 * 13 + 143) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  if (acc % 22 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  arr.push(acc % 1000);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 194) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  buf += `q25:${acc % 97}`;
  try { if (acc % 29 === 11) { throw new Error('synthetic-26'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  m01.set('k28', acc % 997);
  acc = acc + 805 - (acc % 58);
  acc = (acc * 31 + 3264) % 65521;
  const rc31: Rec65 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += 'waybill33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 63) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p65');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  if (acc % 10 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4325) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 15) { throw new Error('synthetic-40'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += 'payout42-' + acc.toString();
  try { if (acc % 29 === 7) { throw new Error('synthetic-43'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 284 - (acc % 81);
  acc = acc + 415 - (acc % 77);
  const ix46: number = buf.indexOf('p65');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 51) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  try { if (acc % 29 === 3) { throw new Error('synthetic-48'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const rc49: Rec65 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 69) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8556) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  arr.push(acc % 1000);
  try { if (acc % 29 === 7) { throw new Error('synthetic-1'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  buf += 'freight3-' + acc.toString();
  for (let i4 = 0; i4 < 3; i4++) {
    acc = (acc + i4 * 13 + 987) % 100003;
  }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  try { if (acc % 29 === 15) { throw new Error('synthetic-7'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1936) % 65521;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  for (let i11 = 0; i11 < 6; i11++) {
    acc = (acc + i11 * 13 + 257) % 100003;
  }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 166) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const rc14: Rec65 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 155) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  m01.set('k19', acc % 997);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 176) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  arr.push(acc % 1000);
  buf += 'batch24-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const rc27: Rec65 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  buf += 'pallet28-' + acc.toString();
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 76) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  if (acc % 30 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  buf += 'dock33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 190) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  acc = (acc * 31 + 9323) % 65521;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (acc % 25 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  if (acc % 27 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  if (acc % 30 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  for (let i42 = 0; i42 < 11; i42++) {
    acc = (acc + i42 * 13 + 981) % 100003;
  }
  arr.push(acc % 1000);
  const rc44: Rec65 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  buf += `q46:${acc % 97}`;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  acc = acc + 572 - (acc % 37);
  try { if (acc % 29 === 23) { throw new Error('synthetic-49'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 103) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0065_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8557) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit65 = new Unit65(acc);
  if (acc % 17 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  m01.set('k1', acc % 997);
  for (let i2 = 0; i2 < 8; i2++) {
    acc = (acc + i2 * 13 + 957) % 100003;
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 501 - (acc % 25);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 89) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  m01.set('k11', acc % 997);
  m01.set('k12', acc % 997);
  buf += `q13:${acc % 97}`;
  m01.set('k14', acc % 997);
  acc = (acc * 31 + 2679) % 65521;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 56) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  m01.set('k21', acc % 997);
  m01.set('k22', acc % 997);
  acc = acc + 66 - (acc % 10);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  acc = (acc * 31 + 475) % 65521;
  if (acc % 25 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-29'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 181) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = (acc * 31 + 8029) % 65521;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  if (acc % 29 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 131) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const ix38: number = buf.indexOf('p65');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  if (acc % 17 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-41'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  for (let i43 = 0; i43 < 9; i43++) {
    acc = (acc + i43 * 13 + 345) % 100003;
  }
  buf += `q44:${acc % 97}`;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 22) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  for (let i48 = 0; i48 < 6; i48++) {
    acc = (acc + i48 * 13 + 41) % 100003;
  }
  buf += 'region49-' + acc.toString();
  m01.set('k50', acc % 997);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0065(): BizFn[] {
  return [biz_0065_00, biz_0065_01, biz_0065_02, biz_0065_03, biz_0065_04, biz_0065_05, biz_0065_06, biz_0065_07, biz_0065_08, biz_0065_09, biz_0065_10, biz_0065_11, biz_0065_12, biz_0065_13, biz_0065_14, biz_0065_15, biz_0065_16, biz_0065_17, biz_0065_18, biz_0065_19, biz_0065_20, biz_0065_21, biz_0065_22, biz_0065_23, biz_0065_24, biz_0065_25, biz_0065_26, biz_0065_27, biz_0065_28, biz_0065_29, biz_0065_30, biz_0065_31, biz_0065_32, biz_0065_33, biz_0065_34, biz_0065_35, biz_0065_36, biz_0065_37, biz_0065_38, biz_0065_39, biz_0065_40, biz_0065_41, biz_0065_42];
}

export function rega_0065(): ABizFn[] {
  return [biz_0065_09a, biz_0065_19a, biz_0065_29a, biz_0065_39a];
}
