// Biz0032.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec32 { id: number; tag: string; score: number; }

class Unit32 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0032_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4192) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 11) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 137) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  m01.set('k4', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  acc = (acc * 31 + 2312) % 65521;
  for (let i7 = 0; i7 < 6; i7++) {
    acc = (acc + i7 * 13 + 692) % 100003;
  }
  const ix8: number = buf.indexOf('p32');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (acc % 18 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-11'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const ix12: number = buf.indexOf('p32');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  acc = acc + 153 - (acc % 80);
  for (let i14 = 0; i14 < 11; i14++) {
    acc = (acc + i14 * 13 + 594) % 100003;
  }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 156) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 20) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  buf += 'portal19-' + acc.toString();
  buf += `q20:${acc % 97}`;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  for (let i22 = 0; i22 < 12; i22++) {
    acc = (acc + i22 * 13 + 540) % 100003;
  }
  acc = acc + 88 - (acc % 72);
  if (acc % 27 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  buf += `q25:${acc % 97}`;
  try { if (acc % 29 === 8) { throw new Error('synthetic-26'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (acc % 16 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += 'order30-' + acc.toString();
  m01.set('k31', acc % 997);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const rc33: Rec32 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 193) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const rc37: Rec32 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  arr.push(acc % 1000);
  acc = (acc * 31 + 8974) % 65521;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  m01.set('k41', acc % 997);
  acc = (acc * 31 + 3886) % 65521;
  for (let i43 = 0; i43 < 9; i43++) {
    acc = (acc + i43 * 13 + 683) % 100003;
  }
  buf += 'pallet44-' + acc.toString();
  m01.set('k45', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix47: number = buf.indexOf('p32');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  buf += `q48:${acc % 97}`;
  buf += 'settle49-' + acc.toString();
  if (acc % 10 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  acc = acc + 280 - (acc % 62);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4193) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  const ix0: number = buf.indexOf('p32');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  m01.set('k1', acc % 997);
  const ix2: number = buf.indexOf('p32');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  buf += `q3:${acc % 97}`;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  buf += `q5:${acc % 97}`;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 3) { throw new Error('synthetic-7'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const rc8: Rec32 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  for (let i9 = 0; i9 < 5; i9++) {
    acc = (acc + i9 * 13 + 176) % 100003;
  }
  buf += 'crate10-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  arr.push(acc % 1000);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  try { if (acc % 29 === 17) { throw new Error('synthetic-15'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'coupon16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 188) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (acc % 15 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 4) { throw new Error('synthetic-21'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  buf += `q24:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = (acc * 31 + 6674) % 65521;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const rc33: Rec32 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 182) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const ix36: number = buf.indexOf('p32');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  acc = acc + 920 - (acc % 7);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 77) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += 'crate42-' + acc.toString();
  acc = acc + 110 - (acc % 84);
  arr.push(acc % 1000);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const ix46: number = buf.indexOf('p32');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  buf += `q47:${acc % 97}`;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += `q49:${acc % 97}`;
  const rc50: Rec32 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += 'freight51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4194) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += `q2:${acc % 97}`;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 68) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = (acc * 31 + 4929) % 65521;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  arr.push(acc % 1000);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  if (acc % 16 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const rc11: Rec32 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  buf += `q14:${acc % 97}`;
  if (acc % 16 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 78) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const ix20: number = buf.indexOf('p32');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const rc22: Rec32 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  arr.push(acc % 1000);
  if (acc % 20 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  buf += 'vendor25-' + acc.toString();
  arr.push(acc % 1000);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  acc = acc + 537 - (acc % 34);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  arr.push(acc % 1000);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 18) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 139) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 10) { throw new Error('synthetic-35'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  if (acc % 18 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  m01.set('k38', acc % 997);
  acc = acc + 384 - (acc % 17);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  buf += `q41:${acc % 97}`;
  arr.push(acc % 1000);
  const ix43: number = buf.indexOf('p32');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  m01.set('k45', acc % 997);
  buf += 'settle46-' + acc.toString();
  arr.push(acc % 1000);
  const rc48: Rec32 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  try { if (acc % 29 === 7) { throw new Error('synthetic-49'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 4) { throw new Error('synthetic-51'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4195) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  buf += 'ledger0-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 113) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  for (let i3 = 0; i3 < 9; i3++) {
    acc = (acc + i3 * 13 + 463) % 100003;
  }
  arr.push(acc % 1000);
  buf += `q5:${acc % 97}`;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  arr.push(acc % 1000);
  for (let i8 = 0; i8 < 11; i8++) {
    acc = (acc + i8 * 13 + 817) % 100003;
  }
  acc = (acc * 31 + 9258) % 65521;
  const rc10: Rec32 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  m01.set('k12', acc % 997);
  if (acc % 13 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  try { if (acc % 29 === 20) { throw new Error('synthetic-15'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 131) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 19) { throw new Error('synthetic-18'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'audit19-' + acc.toString();
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  m01.set('k21', acc % 997);
  buf += 'portal22-' + acc.toString();
  m01.set('k23', acc % 997);
  m01.set('k24', acc % 997);
  const rc25: Rec32 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  arr.push(acc % 1000);
  buf += `q27:${acc % 97}`;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  buf += 'refund30-' + acc.toString();
  acc = acc + 694 - (acc % 7);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 88) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6100) % 65521;
  const rc40: Rec32 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  buf += `q41:${acc % 97}`;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 44) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = (acc * 31 + 9812) % 65521;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  buf += 'freight46-' + acc.toString();
  acc = (acc * 31 + 7156) % 65521;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  if (acc % 24 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  acc = (acc * 31 + 6405) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4196) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const ix1: number = buf.indexOf('p32');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const rc2: Rec32 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  try { if (acc % 29 === 3) { throw new Error('synthetic-3'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  try { if (acc % 29 === 19) { throw new Error('synthetic-5'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  acc = acc + 950 - (acc % 16);
  acc = (acc * 31 + 1185) % 65521;
  const ix9: number = buf.indexOf('p32');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const rc10: Rec32 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = (acc * 31 + 1654) % 65521;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 53) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  const ix14: number = buf.indexOf('p32');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  for (let i15 = 0; i15 < 3; i15++) {
    acc = (acc + i15 * 13 + 558) % 100003;
  }
  for (let i16 = 0; i16 < 7; i16++) {
    acc = (acc + i16 * 13 + 881) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 119) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += 'payout22-' + acc.toString();
  const rc23: Rec32 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 48) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  if (acc % 7 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  buf += `q27:${acc % 97}`;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  buf += 'carrier29-' + acc.toString();
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 192) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  buf += 'ticket31-' + acc.toString();
  for (let i32 = 0; i32 < 5; i32++) {
    acc = (acc + i32 * 13 + 774) % 100003;
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 144) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  m01.set('k37', acc % 997);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += 'payout41-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2363) % 65521;
  const ix46: number = buf.indexOf('p32');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  acc = acc + 446 - (acc % 11);
  buf += `q50:${acc % 97}`;
  acc = acc + 689 - (acc % 12);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4197) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  m01.set('k1', acc % 997);
  arr.push(acc % 1000);
  buf += 'carrier3-' + acc.toString();
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  buf += 'dispatch5-' + acc.toString();
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  for (let i7 = 0; i7 < 3; i7++) {
    acc = (acc + i7 * 13 + 180) % 100003;
  }
  buf += `q8:${acc % 97}`;
  m01.set('k9', acc % 997);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 166) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  acc = acc + 927 - (acc % 34);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-13'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  acc = acc + 371 - (acc % 52);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 174) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  buf += `q19:${acc % 97}`;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 47) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-22'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  buf += 'parcel24-' + acc.toString();
  try { if (acc % 29 === 14) { throw new Error('synthetic-25'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k26', acc % 997);
  try { if (acc % 29 === 4) { throw new Error('synthetic-27'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'region28-' + acc.toString();
  buf += `q29:${acc % 97}`;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  m01.set('k31', acc % 997);
  const ix32: number = buf.indexOf('p32');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 50) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  m01.set('k36', acc % 997);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  m01.set('k38', acc % 997);
  m01.set('k39', acc % 997);
  arr.push(acc % 1000);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  for (let i43 = 0; i43 < 3; i43++) {
    acc = (acc + i43 * 13 + 247) % 100003;
  }
  if (acc % 20 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  for (let i45 = 0; i45 < 3; i45++) {
    acc = (acc + i45 * 13 + 886) % 100003;
  }
  acc = (acc * 31 + 6425) % 65521;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const rc48: Rec32 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  if (acc % 18 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  acc = acc + 107 - (acc % 59);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4198) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 50) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  try { if (acc % 29 === 8) { throw new Error('synthetic-2'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  try { if (acc % 29 === 4) { throw new Error('synthetic-5'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const rc6: Rec32 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const ix8: number = buf.indexOf('p32');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = acc + 456 - (acc % 78);
  try { if (acc % 29 === 9) { throw new Error('synthetic-11'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = (acc * 31 + 1357) % 65521;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 92) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  for (let i19 = 0; i19 < 7; i19++) {
    acc = (acc + i19 * 13 + 632) % 100003;
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += `q21:${acc % 97}`;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  acc = acc + 954 - (acc % 43);
  const ix24: number = buf.indexOf('p32');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 151) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 73) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  if (acc % 29 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  buf += `q31:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 113) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  acc = acc + 783 - (acc % 82);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 123) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  m01.set('k40', acc % 997);
  arr.push(acc % 1000);
  buf += `q42:${acc % 97}`;
  acc = acc + 69 - (acc % 90);
  if (acc % 9 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  buf += `q45:${acc % 97}`;
  acc = (acc * 31 + 1997) % 65521;
  m01.set('k47', acc % 997);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  arr.push(acc % 1000);
  m01.set('k50', acc % 997);
  buf += 'pallet51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4199) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  buf += `q1:${acc % 97}`;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  buf += 'stocktake3-' + acc.toString();
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-6'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 7 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5271) % 65521;
  m01.set('k9', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 35) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  acc = (acc * 31 + 3071) % 65521;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  if (acc % 21 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-15'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 16) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-18'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const rc22: Rec32 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  try { if (acc % 29 === 6) { throw new Error('synthetic-23'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const ix24: number = buf.indexOf('p32');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 9325) % 65521;
  const ix26: number = buf.indexOf('p32');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 188) % 65521;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  if (acc % 30 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-31'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const ix32: number = buf.indexOf('p32');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 163) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 199) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  buf += `q36:${acc % 97}`;
  acc = (acc * 31 + 3064) % 65521;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 8366) % 65521;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 164) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  m01.set('k42', acc % 997);
  const rc43: Rec32 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const ix44: number = buf.indexOf('p32');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 83) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  buf += `q48:${acc % 97}`;
  buf += `q49:${acc % 97}`;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const ix51: number = buf.indexOf('p32');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4200) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  m01.set('k0', acc % 997);
  const ix1: number = buf.indexOf('p32');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  m01.set('k2', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  m01.set('k4', acc % 997);
  for (let i5 = 0; i5 < 4; i5++) {
    acc = (acc + i5 * 13 + 903) % 100003;
  }
  const ix6: number = buf.indexOf('p32');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += `q8:${acc % 97}`;
  for (let i9 = 0; i9 < 4; i9++) {
    acc = (acc + i9 * 13 + 804) % 100003;
  }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  if (acc % 6 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 104) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 20 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += 'policy19-' + acc.toString();
  buf += `q20:${acc % 97}`;
  try { if (acc % 29 === 22) { throw new Error('synthetic-21'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  arr.push(acc % 1000);
  buf += `q26:${acc % 97}`;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix29: number = buf.indexOf('p32');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 72) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 78) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 3; i35++) {
    acc = (acc + i35 * 13 + 121) % 100003;
  }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  buf += 'coupon39-' + acc.toString();
  buf += 'refund40-' + acc.toString();
  m01.set('k41', acc % 997);
  m01.set('k42', acc % 997);
  if (acc % 16 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-44'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 818 - (acc % 25);
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-48'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 432 - (acc % 70);
  acc = (acc * 31 + 1729) % 65521;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4201) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += `q1:${acc % 97}`;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  if (acc % 27 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  m01.set('k8', acc % 997);
  arr.push(acc % 1000);
  acc = acc + 864 - (acc % 64);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const rc14: Rec32 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const rc15: Rec32 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  for (let i16 = 0; i16 < 7; i16++) {
    acc = (acc + i16 * 13 + 558) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 62) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'balance18-' + acc.toString();
  if (acc % 19 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5921) % 65521;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  arr.push(acc % 1000);
  const rc23: Rec32 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  arr.push(acc % 1000);
  if (acc % 25 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 41) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  if (acc % 29 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9728) % 65521;
  buf += `q29:${acc % 97}`;
  m01.set('k30', acc % 997);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  acc = (acc * 31 + 1702) % 65521;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 113) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 15 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-36'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const rc38: Rec32 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  acc = acc + 168 - (acc % 70);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += `q41:${acc % 97}`;
  acc = acc + 596 - (acc % 53);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += `q46:${acc % 97}`;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0032_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0032_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0032_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4202) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  acc = acc + 955 - (acc % 73);
  buf += `q3:${acc % 97}`;
  buf += 'region4-' + acc.toString();
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  try { if (acc % 29 === 23) { throw new Error('synthetic-6'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 17 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const rc9: Rec32 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const rc10: Rec32 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = acc + 537 - (acc % 20);
  acc = (acc * 31 + 2188) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  buf += `q15:${acc % 97}`;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 86) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 79) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1293) % 65521;
  const rc22: Rec32 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  if (acc % 26 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 944) % 65521;
  m01.set('k27', acc % 997);
  for (let i28 = 0; i28 < 8; i28++) {
    acc = (acc + i28 * 13 + 216) % 100003;
  }
  const rc29: Rec32 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  buf += 'ticket31-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 162) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 115) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 5 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-36'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3309) % 65521;
  acc = (acc * 31 + 2613) % 65521;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 108) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const rc44: Rec32 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  m01.set('k46', acc % 997);
  const rc47: Rec32 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  if (acc % 21 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  for (let i50 = 0; i50 < 10; i50++) {
    acc = (acc + i50 * 13 + 880) % 100003;
  }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4203) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += `q3:${acc % 97}`;
  m01.set('k4', acc % 997);
  const rc5: Rec32 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 47) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 16) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  m01.set('k11', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4110) % 65521;
  acc = acc + 879 - (acc % 32);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (acc % 22 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 199) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'batch18-' + acc.toString();
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 41) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  m01.set('k20', acc % 997);
  m01.set('k21', acc % 997);
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const ix23: number = buf.indexOf('p32');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  try { if (acc % 29 === 5) { throw new Error('synthetic-25'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 228) % 65521;
  for (let i28 = 0; i28 < 10; i28++) {
    acc = (acc + i28 * 13 + 481) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const ix30: number = buf.indexOf('p32');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 13) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  acc = (acc * 31 + 879) % 65521;
  const rc37: Rec32 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  arr.push(acc % 1000);
  m01.set('k39', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 16) { throw new Error('synthetic-42'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  if (acc % 15 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-45'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-46'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k47', acc % 997);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  for (let i51 = 0; i51 < 8; i51++) {
    acc = (acc + i51 * 13 + 69) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4204) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  acc = (acc * 31 + 8993) % 65521;
  const ix1: number = buf.indexOf('p32');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  m01.set('k5', acc % 997);
  try { if (acc % 29 === 17) { throw new Error('synthetic-6'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3248) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-8'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q9:${acc % 97}`;
  buf += `q10:${acc % 97}`;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 11) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  m01.set('k13', acc % 997);
  buf += `q14:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7904) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 160) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 8; i18++) {
    acc = (acc + i18 * 13 + 325) % 100003;
  }
  for (let i19 = 0; i19 < 5; i19++) {
    acc = (acc + i19 * 13 + 518) % 100003;
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 155) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-22'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  buf += 'warehouse24-' + acc.toString();
  for (let i25 = 0; i25 < 5; i25++) {
    acc = (acc + i25 * 13 + 239) % 100003;
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const rc31: Rec32 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  buf += 'stocktake32-' + acc.toString();
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 193) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p32');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  if (acc % 14 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const ix37: number = buf.indexOf('p32');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const ix39: number = buf.indexOf('p32');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += 'quota40-' + acc.toString();
  acc = acc + 117 - (acc % 24);
  const rc42: Rec32 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  buf += `q43:${acc % 97}`;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 89) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  for (let i48 = 0; i48 < 11; i48++) {
    acc = (acc + i48 * 13 + 962) % 100003;
  }
  const rc49: Rec32 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const ix50: number = buf.indexOf('p32');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const ix51: number = buf.indexOf('p32');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4205) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  arr.push(acc % 1000);
  buf += 'batch1-' + acc.toString();
  acc = acc + 856 - (acc % 59);
  const rc3: Rec32 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const ix5: number = buf.indexOf('p32');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const rc6: Rec32 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  m01.set('k7', acc % 997);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 108) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  m01.set('k9', acc % 997);
  const ix10: number = buf.indexOf('p32');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const rc11: Rec32 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  m01.set('k12', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  buf += 'balance15-' + acc.toString();
  try { if (acc % 29 === 21) { throw new Error('synthetic-16'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 168) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 90) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  acc = (acc * 31 + 426) % 65521;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 96) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  m01.set('k21', acc % 997);
  acc = acc + 890 - (acc % 13);
  const rc23: Rec32 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-25'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'sku26-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const rc31: Rec32 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 26) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 126) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 6006) % 65521;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-37'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 39) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = (acc * 31 + 454) % 65521;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = acc + 367 - (acc % 50);
  const rc45: Rec32 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  buf += `q46:${acc % 97}`;
  if (acc % 16 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const rc49: Rec32 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  buf += `q50:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4206) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-1'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 8 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc6: Rec32 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  m01.set('k9', acc % 997);
  buf += 'settle10-' + acc.toString();
  acc = acc + 258 - (acc % 12);
  buf += 'refund12-' + acc.toString();
  try { if (acc % 29 === 2) { throw new Error('synthetic-13'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  buf += 'dock16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 178) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 5301) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const rc23: Rec32 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-25'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i26 = 0; i26 < 10; i26++) {
    acc = (acc + i26 * 13 + 169) % 100003;
  }
  m01.set('k27', acc % 997);
  acc = acc + 579 - (acc % 41);
  if (acc % 18 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  acc = acc + 16 - (acc % 11);
  for (let i31 = 0; i31 < 7; i31++) {
    acc = (acc + i31 * 13 + 718) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 191) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-35'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-36'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const ix37: number = buf.indexOf('p32');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  try { if (acc % 29 === 15) { throw new Error('synthetic-40'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k41', acc % 997);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  buf += 'journey45-' + acc.toString();
  const ix46: number = buf.indexOf('p32');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const ix47: number = buf.indexOf('p32');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const rc48: Rec32 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  m01.set('k49', acc % 997);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 120) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4207) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  try { if (acc % 29 === 19) { throw new Error('synthetic-0'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'waybill1-' + acc.toString();
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  try { if (acc % 29 === 11) { throw new Error('synthetic-4'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  if (acc % 14 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  m01.set('k7', acc % 997);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  buf += `q9:${acc % 97}`;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  for (let i13 = 0; i13 < 4; i13++) {
    acc = (acc + i13 * 13 + 210) % 100003;
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 34) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 66) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const rc20: Rec32 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  const ix22: number = buf.indexOf('p32');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  if (acc % 12 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  arr.push(acc % 1000);
  buf += 'ticket33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 37) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec32 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  buf += 'audit36-' + acc.toString();
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  buf += `q38:${acc % 97}`;
  const ix39: number = buf.indexOf('p32');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 111) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const rc41: Rec32 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += 'carrier43-' + acc.toString();
  acc = acc + 919 - (acc % 32);
  try { if (acc % 29 === 16) { throw new Error('synthetic-45'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  buf += `q47:${acc % 97}`;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2504) % 65521;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4208) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  const rc0: Rec32 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  try { if (acc % 29 === 17) { throw new Error('synthetic-1'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-2'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-3'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  m01.set('k5', acc % 997);
  buf += 'pallet6-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const rc9: Rec32 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const rc12: Rec32 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  acc = acc + 190 - (acc % 14);
  acc = (acc * 31 + 9394) % 65521;
  m01.set('k15', acc % 997);
  acc = (acc * 31 + 6605) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 132) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec32 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const ix19: number = buf.indexOf('p32');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  m01.set('k21', acc % 997);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 188) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const rc23: Rec32 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const rc24: Rec32 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 101) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  buf += `q27:${acc % 97}`;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  arr.push(acc % 1000);
  for (let i30 = 0; i30 < 12; i30++) {
    acc = (acc + i30 * 13 + 734) % 100003;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 145) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 135) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  if (acc % 20 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  if (acc % 15 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9907) % 65521;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const ix42: number = buf.indexOf('p32');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 9978) % 65521;
  buf += 'balance44-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 3673) % 65521;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  m01.set('k48', acc % 997);
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 103) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  m01.set('k50', acc % 997);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4209) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  buf += `q0:${acc % 97}`;
  buf += `q1:${acc % 97}`;
  try { if (acc % 29 === 22) { throw new Error('synthetic-2'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i3 = 0; i3 < 6; i3++) {
    acc = (acc + i3 * 13 + 255) % 100003;
  }
  buf += 'vendor4-' + acc.toString();
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  buf += 'quota6-' + acc.toString();
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  buf += `q13:${acc % 97}`;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 197) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 143) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  if (acc % 22 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += `q22:${acc % 97}`;
  try { if (acc % 29 === 19) { throw new Error('synthetic-23'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const ix30: number = buf.indexOf('p32');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const ix31: number = buf.indexOf('p32');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  buf += `q32:${acc % 97}`;
  const rc33: Rec32 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 133) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec32 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  for (let i36 = 0; i36 < 12; i36++) {
    acc = (acc + i36 * 13 + 643) % 100003;
  }
  const rc37: Rec32 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  if (acc % 21 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  if (acc % 13 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5456) % 65521;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  buf += `q44:${acc % 97}`;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  for (let i46 = 0; i46 < 7; i46++) {
    acc = (acc + i46 * 13 + 974) % 100003;
  }
  for (let i47 = 0; i47 < 11; i47++) {
    acc = (acc + i47 * 13 + 13) % 100003;
  }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  for (let i49 = 0; i49 < 6; i49++) {
    acc = (acc + i49 * 13 + 674) % 100003;
  }
  m01.set('k50', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4210) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  buf += 'policy5-' + acc.toString();
  for (let i6 = 0; i6 < 8; i6++) {
    acc = (acc + i6 * 13 + 99) % 100003;
  }
  m01.set('k7', acc % 997);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const rc10: Rec32 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = (acc * 31 + 7731) % 65521;
  acc = (acc * 31 + 378) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  buf += `q14:${acc % 97}`;
  const ix15: number = buf.indexOf('p32');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 130) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 117) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  const rc22: Rec32 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  arr.push(acc % 1000);
  if (acc % 11 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  buf += 'balance26-' + acc.toString();
  try { if (acc % 29 === 23) { throw new Error('synthetic-27'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 181) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  buf += `q29:${acc % 97}`;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 168) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const ix32: number = buf.indexOf('p32');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 87) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 9551) % 65521;
  arr.push(acc % 1000);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (acc % 21 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  m01.set('k42', acc % 997);
  buf += 'ledger43-' + acc.toString();
  const ix44: number = buf.indexOf('p32');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  m01.set('k45', acc % 997);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 71) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 42) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  buf += 'carrier51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4211) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  acc = acc + 414 - (acc % 55);
  try { if (acc % 29 === 8) { throw new Error('synthetic-2'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-3'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 25 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  buf += `q9:${acc % 97}`;
  acc = (acc * 31 + 670) % 65521;
  arr.push(acc % 1000);
  const rc12: Rec32 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += `q13:${acc % 97}`;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 14) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 164) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-19'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 29 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-21'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'invoice22-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const rc24: Rec32 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  acc = acc + 556 - (acc % 57);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const ix27: number = buf.indexOf('p32');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-28'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 16 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7955) % 65521;
  buf += `q31:${acc % 97}`;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 65) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 9; i35++) {
    acc = (acc + i35 * 13 + 19) % 100003;
  }
  for (let i36 = 0; i36 < 3; i36++) {
    acc = (acc + i36 * 13 + 133) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  for (let i38 = 0; i38 < 6; i38++) {
    acc = (acc + i38 * 13 + 758) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  buf += `q40:${acc % 97}`;
  acc = (acc * 31 + 467) % 65521;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-43'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 153) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  acc = acc + 399 - (acc % 12);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  if (acc % 23 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0032_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0032_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0032_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4212) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  const ix0: number = buf.indexOf('p32');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += `q4:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  buf += 'shelf9-' + acc.toString();
  try { if (acc % 29 === 9) { throw new Error('synthetic-10'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q11:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 7622) % 65521;
  for (let i16 = 0; i16 < 10; i16++) {
    acc = (acc + i16 * 13 + 268) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 153) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 8; i18++) {
    acc = (acc + i18 * 13 + 986) % 100003;
  }
  const rc19: Rec32 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = (acc * 31 + 3271) % 65521;
  if (acc % 5 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-22'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-24'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 79) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  for (let i28 = 0; i28 < 12; i28++) {
    acc = (acc + i28 * 13 + 450) % 100003;
  }
  acc = (acc * 31 + 8206) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  m01.set('k31', acc % 997);
  const ix32: number = buf.indexOf('p32');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const ix33: number = buf.indexOf('p32');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 129) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec32 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  if (acc % 27 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-38'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  for (let i40 = 0; i40 < 6; i40++) {
    acc = (acc + i40 * 13 + 773) % 100003;
  }
  for (let i41 = 0; i41 < 9; i41++) {
    acc = (acc + i41 * 13 + 560) % 100003;
  }
  acc = (acc * 31 + 9216) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  if (acc % 16 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  try { if (acc % 29 === 18) { throw new Error('synthetic-47'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  buf += `q50:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4213) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  buf += `q1:${acc % 97}`;
  acc = (acc * 31 + 835) % 65521;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i5 = 0; i5 < 3; i5++) {
    acc = (acc + i5 * 13 + 183) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  m01.set('k8', acc % 997);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 138) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  if (acc % 22 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  for (let i13 = 0; i13 < 4; i13++) {
    acc = (acc + i13 * 13 + 189) % 100003;
  }
  for (let i14 = 0; i14 < 7; i14++) {
    acc = (acc + i14 * 13 + 742) % 100003;
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  buf += 'customs16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 103) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 14 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  acc = acc + 811 - (acc % 23);
  acc = acc + 468 - (acc % 78);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const ix23: number = buf.indexOf('p32');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  buf += `q25:${acc % 97}`;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = (acc * 31 + 8355) % 65521;
  buf += `q28:${acc % 97}`;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 92) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  for (let i31 = 0; i31 < 8; i31++) {
    acc = (acc + i31 * 13 + 485) % 100003;
  }
  const ix32: number = buf.indexOf('p32');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 76) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  buf += `q36:${acc % 97}`;
  m01.set('k37', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const ix40: number = buf.indexOf('p32');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  for (let i41 = 0; i41 < 9; i41++) {
    acc = (acc + i41 * 13 + 595) % 100003;
  }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 141) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const ix46: number = buf.indexOf('p32');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  buf += 'invoice47-' + acc.toString();
  buf += `q48:${acc % 97}`;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  acc = (acc * 31 + 6746) % 65521;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4214) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  buf += 'tariff0-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  m01.set('k2', acc % 997);
  buf += 'quota3-' + acc.toString();
  acc = acc + 286 - (acc % 35);
  m01.set('k5', acc % 997);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 147) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  acc = (acc * 31 + 980) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  if (acc % 20 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const rc15: Rec32 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 169) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 32) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  if (acc % 24 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const ix20: number = buf.indexOf('p32');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  try { if (acc % 29 === 5) { throw new Error('synthetic-24'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  if (acc % 22 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  buf += `q29:${acc % 97}`;
  acc = acc + 784 - (acc % 90);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  buf += `q32:${acc % 97}`;
  const ix33: number = buf.indexOf('p32');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 60) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  buf += 'customs36-' + acc.toString();
  buf += `q37:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  try { if (acc % 29 === 5) { throw new Error('synthetic-40'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q42:${acc % 97}`;
  buf += 'bay43-' + acc.toString();
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  for (let i45 = 0; i45 < 10; i45++) {
    acc = (acc + i45 * 13 + 239) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  buf += `q49:${acc % 97}`;
  acc = (acc * 31 + 5445) % 65521;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4215) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  buf += 'parcel1-' + acc.toString();
  acc = acc + 213 - (acc % 21);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 58) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  m01.set('k5', acc % 997);
  arr.push(acc % 1000);
  buf += `q7:${acc % 97}`;
  if (acc % 10 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  acc = acc + 959 - (acc % 73);
  for (let i10 = 0; i10 < 5; i10++) {
    acc = (acc + i10 * 13 + 701) % 100003;
  }
  buf += `q11:${acc % 97}`;
  const rc12: Rec32 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  m01.set('k13', acc % 997);
  const ix14: number = buf.indexOf('p32');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  m01.set('k15', acc % 997);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 127) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  try { if (acc % 29 === 16) { throw new Error('synthetic-22'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k23', acc % 997);
  try { if (acc % 29 === 17) { throw new Error('synthetic-24'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 198 - (acc % 10);
  m01.set('k26', acc % 997);
  acc = (acc * 31 + 5842) % 65521;
  arr.push(acc % 1000);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += `q31:${acc % 97}`;
  acc = acc + 464 - (acc % 13);
  acc = (acc * 31 + 538) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 167) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  for (let i38 = 0; i38 < 8; i38++) {
    acc = (acc + i38 * 13 + 79) % 100003;
  }
  const ix39: number = buf.indexOf('p32');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const ix40: number = buf.indexOf('p32');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  arr.push(acc % 1000);
  m01.set('k43', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += `q48:${acc % 97}`;
  if (acc % 23 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  if (acc % 5 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4216) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  acc = acc + 390 - (acc % 29);
  const rc3: Rec32 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  m01.set('k4', acc % 997);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  m01.set('k6', acc % 997);
  arr.push(acc % 1000);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  acc = (acc * 31 + 2155) % 65521;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const ix11: number = buf.indexOf('p32');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  if (acc % 7 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  m01.set('k13', acc % 997);
  try { if (acc % 29 === 10) { throw new Error('synthetic-14'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k15', acc % 997);
  buf += 'dock16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 177) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  acc = acc + 378 - (acc % 89);
  buf += 'waybill20-' + acc.toString();
  if (acc % 20 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += 'transit22-' + acc.toString();
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  m01.set('k24', acc % 997);
  buf += 'stocktake25-' + acc.toString();
  acc = (acc * 31 + 4052) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += 'dispatch29-' + acc.toString();
  m01.set('k30', acc % 997);
  buf += `q31:${acc % 97}`;
  const rc32: Rec32 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  try { if (acc % 29 === 2) { throw new Error('synthetic-33'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 190) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p32');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const rc36: Rec32 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const ix37: number = buf.indexOf('p32');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  m01.set('k39', acc % 997);
  m01.set('k40', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = acc + 741 - (acc % 83);
  buf += `q45:${acc % 97}`;
  acc = (acc * 31 + 882) % 65521;
  buf += 'warehouse47-' + acc.toString();
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 64) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4217) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 58) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  for (let i1 = 0; i1 < 10; i1++) {
    acc = (acc + i1 * 13 + 855) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  if (acc % 7 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  m01.set('k9', acc % 997);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  acc = acc + 225 - (acc % 39);
  const rc14: Rec32 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 133) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'customs18-' + acc.toString();
  acc = (acc * 31 + 9651) % 65521;
  if (acc % 24 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  buf += `q22:${acc % 97}`;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  try { if (acc % 29 === 9) { throw new Error('synthetic-24'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 16 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  if (acc % 22 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  try { if (acc % 29 === 21) { throw new Error('synthetic-32'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 93) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  if (acc % 10 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += `q37:${acc % 97}`;
  buf += 'region38-' + acc.toString();
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  const rc40: Rec32 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  acc = acc + 248 - (acc % 14);
  buf += 'sku42-' + acc.toString();
  buf += `q43:${acc % 97}`;
  acc = acc + 420 - (acc % 23);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  acc = acc + 648 - (acc % 72);
  buf += 'settle49-' + acc.toString();
  if (acc % 12 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  buf += 'carrier51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4218) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-1'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k2', acc % 997);
  m01.set('k3', acc % 997);
  if (acc % 30 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const ix6: number = buf.indexOf('p32');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += `q7:${acc % 97}`;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  acc = acc + 374 - (acc % 58);
  acc = acc + 109 - (acc % 27);
  for (let i11 = 0; i11 < 8; i11++) {
    acc = (acc + i11 * 13 + 59) % 100003;
  }
  arr.push(acc % 1000);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 134) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-15'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i16 = 0; i16 < 11; i16++) {
    acc = (acc + i16 * 13 + 522) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 124) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = acc + 237 - (acc % 63);
  arr.push(acc % 1000);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  m01.set('k27', acc % 997);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  arr.push(acc % 1000);
  buf += `q30:${acc % 97}`;
  acc = acc + 663 - (acc % 83);
  if (acc % 13 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 42) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p32');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  m01.set('k36', acc % 997);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 110) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  buf += `q39:${acc % 97}`;
  const ix40: number = buf.indexOf('p32');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  buf += `q41:${acc % 97}`;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  buf += `q43:${acc % 97}`;
  const rc44: Rec32 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  const rc45: Rec32 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  m01.set('k46', acc % 997);
  m01.set('k47', acc % 997);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  if (acc % 26 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  if (acc % 8 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4219) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  m01.set('k0', acc % 997);
  buf += 'journey1-' + acc.toString();
  buf += 'vendor2-' + acc.toString();
  buf += 'bay3-' + acc.toString();
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = (acc * 31 + 2017) % 65521;
  acc = acc + 969 - (acc % 95);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-8'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 774 - (acc % 68);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += `q12:${acc % 97}`;
  const ix13: number = buf.indexOf('p32');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 6880) % 65521;
  acc = acc + 600 - (acc % 94);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 78) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 5; i18++) {
    acc = (acc + i18 * 13 + 446) % 100003;
  }
  buf += `q19:${acc % 97}`;
  if (acc % 8 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const rc21: Rec32 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = (acc * 31 + 5602) % 65521;
  for (let i24 = 0; i24 < 4; i24++) {
    acc = (acc + i24 * 13 + 623) % 100003;
  }
  buf += `q25:${acc % 97}`;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 112) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const ix27: number = buf.indexOf('p32');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 44) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  m01.set('k30', acc % 997);
  acc = acc + 331 - (acc % 52);
  buf += 'tariff32-' + acc.toString();
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 156) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 7669) % 65521;
  if (acc % 17 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += `q37:${acc % 97}`;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  m01.set('k39', acc % 997);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  acc = acc + 160 - (acc % 94);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  if (acc % 5 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  if (acc % 6 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-45'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-46'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += 'tariff48-' + acc.toString();
  acc = (acc * 31 + 5964) % 65521;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4220) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const ix3: number = buf.indexOf('p32');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  if (acc % 18 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += 'routeplan10-' + acc.toString();
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  for (let i13 = 0; i13 < 5; i13++) {
    acc = (acc + i13 * 13 + 424) % 100003;
  }
  const ix14: number = buf.indexOf('p32');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 11) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 28) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 133) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 117) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  if (acc % 12 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  if (acc % 10 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  if (acc % 17 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const ix26: number = buf.indexOf('p32');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const ix28: number = buf.indexOf('p32');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 569) % 65521;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  m01.set('k31', acc % 997);
  buf += 'ticket32-' + acc.toString();
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 189) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 11) { throw new Error('synthetic-36'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  for (let i38 = 0; i38 < 8; i38++) {
    acc = (acc + i38 * 13 + 26) % 100003;
  }
  if (acc % 10 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += 'customs41-' + acc.toString();
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 53) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  buf += `q43:${acc % 97}`;
  if (acc % 5 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  buf += 'sku45-' + acc.toString();
  acc = acc + 631 - (acc % 76);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  arr.push(acc % 1000);
  m01.set('k49', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  for (let i51 = 0; i51 < 3; i51++) {
    acc = (acc + i51 * 13 + 214) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4221) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  acc = acc + 430 - (acc % 57);
  m01.set('k2', acc % 997);
  try { if (acc % 29 === 23) { throw new Error('synthetic-3'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  for (let i5 = 0; i5 < 11; i5++) {
    acc = (acc + i5 * 13 + 293) % 100003;
  }
  buf += 'invoice6-' + acc.toString();
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const ix8: number = buf.indexOf('p32');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const rc9: Rec32 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 49) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  for (let i11 = 0; i11 < 12; i11++) {
    acc = (acc + i11 * 13 + 510) % 100003;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-12'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k13', acc % 997);
  if (acc % 5 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 71) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const ix20: number = buf.indexOf('p32');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 117) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  for (let i22 = 0; i22 < 7; i22++) {
    acc = (acc + i22 * 13 + 99) % 100003;
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  if (acc % 23 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  try { if (acc % 29 === 2) { throw new Error('synthetic-29'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  if (acc % 23 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  if (acc % 21 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 161) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const ix38: number = buf.indexOf('p32');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 126) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  for (let i40 = 0; i40 < 3; i40++) {
    acc = (acc + i40 * 13 + 940) % 100003;
  }
  m01.set('k41', acc % 997);
  const ix42: number = buf.indexOf('p32');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  buf += `q43:${acc % 97}`;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 7) { throw new Error('synthetic-45'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q46:${acc % 97}`;
  m01.set('k47', acc % 997);
  try { if (acc % 29 === 2) { throw new Error('synthetic-48'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-49'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const rc50: Rec32 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0032_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0032_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0032_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4222) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 20) { throw new Error('synthetic-1'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  m01.set('k3', acc % 997);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 2) { throw new Error('synthetic-5'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const rc6: Rec32 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  acc = acc + 239 - (acc % 18);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  for (let i9 = 0; i9 < 5; i9++) {
    acc = (acc + i9 * 13 + 432) % 100003;
  }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const rc13: Rec32 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const rc15: Rec32 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  for (let i16 = 0; i16 < 3; i16++) {
    acc = (acc + i16 * 13 + 730) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 64) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  if (acc % 5 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  for (let i21 = 0; i21 < 12; i21++) {
    acc = (acc + i21 * 13 + 665) % 100003;
  }
  m01.set('k22', acc % 997);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const ix26: number = buf.indexOf('p32');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = acc + 451 - (acc % 13);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const ix32: number = buf.indexOf('p32');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += 'depot33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 140) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = (acc * 31 + 2331) % 65521;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-39'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 165) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  buf += 'shelf41-' + acc.toString();
  if (acc % 21 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = acc + 139 - (acc % 54);
  if (acc % 23 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  for (let i48 = 0; i48 < 3; i48++) {
    acc = (acc + i48 * 13 + 615) % 100003;
  }
  acc = acc + 594 - (acc % 82);
  const ix50: number = buf.indexOf('p32');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4223) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  acc = (acc * 31 + 691) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-1'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'settle2-' + acc.toString();
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  if (acc % 12 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  buf += `q7:${acc % 97}`;
  buf += 'ledger8-' + acc.toString();
  for (let i9 = 0; i9 < 8; i9++) {
    acc = (acc + i9 * 13 + 475) % 100003;
  }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  arr.push(acc % 1000);
  if (acc % 31 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const ix14: number = buf.indexOf('p32');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 25) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix19: number = buf.indexOf('p32');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += `q20:${acc % 97}`;
  for (let i21 = 0; i21 < 7; i21++) {
    acc = (acc + i21 * 13 + 670) % 100003;
  }
  if (acc % 11 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-23'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 205 - (acc % 41);
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  m01.set('k29', acc % 997);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const rc31: Rec32 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  acc = (acc * 31 + 9056) % 65521;
  const rc33: Rec32 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 103) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 196) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = (acc * 31 + 493) % 65521;
  const ix37: number = buf.indexOf('p32');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (acc % 15 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  for (let i39 = 0; i39 < 10; i39++) {
    acc = (acc + i39 * 13 + 52) % 100003;
  }
  m01.set('k40', acc % 997);
  acc = acc + 761 - (acc % 96);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  buf += 'coupon43-' + acc.toString();
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  m01.set('k45', acc % 997);
  for (let i46 = 0; i46 < 4; i46++) {
    acc = (acc + i46 * 13 + 438) % 100003;
  }
  for (let i47 = 0; i47 < 7; i47++) {
    acc = (acc + i47 * 13 + 125) % 100003;
  }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += `q49:${acc % 97}`;
  acc = (acc * 31 + 9703) % 65521;
  buf += 'transit51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4224) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  arr.push(acc % 1000);
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = (acc * 31 + 2946) % 65521;
  arr.push(acc % 1000);
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  for (let i6 = 0; i6 < 8; i6++) {
    acc = (acc + i6 * 13 + 939) % 100003;
  }
  arr.push(acc % 1000);
  const rc8: Rec32 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  m01.set('k13', acc % 997);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  m01.set('k15', acc % 997);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 93) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 126) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'payout19-' + acc.toString();
  if (acc % 11 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9459) % 65521;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  acc = (acc * 31 + 9889) % 65521;
  arr.push(acc % 1000);
  if (acc % 12 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  try { if (acc % 29 === 13) { throw new Error('synthetic-28'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i29 = 0; i29 < 9; i29++) {
    acc = (acc + i29 * 13 + 172) % 100003;
  }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  acc = acc + 360 - (acc % 59);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 130) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 15) { throw new Error('synthetic-39'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  if (acc % 27 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  m01.set('k45', acc % 997);
  const ix46: number = buf.indexOf('p32');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  m01.set('k47', acc % 997);
  m01.set('k48', acc % 997);
  acc = acc + 264 - (acc % 80);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4225) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = acc + 559 - (acc % 74);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  if (acc % 7 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  for (let i8 = 0; i8 < 6; i8++) {
    acc = (acc + i8 * 13 + 755) % 100003;
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-9'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8079) % 65521;
  m01.set('k11', acc % 997);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  acc = acc + 924 - (acc % 56);
  if (acc % 5 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += `q15:${acc % 97}`;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 35) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = (acc * 31 + 367) % 65521;
  buf += 'quota20-' + acc.toString();
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  buf += 'dock22-' + acc.toString();
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6960) % 65521;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  acc = acc + 460 - (acc % 44);
  acc = acc + 296 - (acc % 73);
  if (acc % 10 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  acc = acc + 347 - (acc % 8);
  buf += `q32:${acc % 97}`;
  acc = acc + 152 - (acc % 58);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 60) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'journey35-' + acc.toString();
  acc = (acc * 31 + 3836) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  acc = (acc * 31 + 2578) % 65521;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  m01.set('k41', acc % 997);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 107) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  buf += `q43:${acc % 97}`;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  buf += `q45:${acc % 97}`;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += 'payout47-' + acc.toString();
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  acc = acc + 139 - (acc % 7);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4226) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  try { if (acc % 29 === 6) { throw new Error('synthetic-0'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-1'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'dispatch2-' + acc.toString();
  buf += `q3:${acc % 97}`;
  const ix4: number = buf.indexOf('p32');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  for (let i5 = 0; i5 < 10; i5++) {
    acc = (acc + i5 * 13 + 358) % 100003;
  }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1066) % 65521;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 90) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const ix10: number = buf.indexOf('p32');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (acc % 25 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  if (acc % 17 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += 'warehouse16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 89) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  for (let i20 = 0; i20 < 8; i20++) {
    acc = (acc + i20 * 13 + 60) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  acc = (acc * 31 + 3518) % 65521;
  m01.set('k23', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-25'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q26:${acc % 97}`;
  buf += `q27:${acc % 97}`;
  for (let i28 = 0; i28 < 3; i28++) {
    acc = (acc + i28 * 13 + 595) % 100003;
  }
  const ix29: number = buf.indexOf('p32');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i31 = 0; i31 < 3; i31++) {
    acc = (acc + i31 * 13 + 288) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 174) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 773 - (acc % 38);
  const ix36: number = buf.indexOf('p32');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  acc = acc + 905 - (acc % 8);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 87) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 23) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix44: number = buf.indexOf('p32');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  buf += 'stocktake46-' + acc.toString();
  const rc47: Rec32 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += 'stocktake48-' + acc.toString();
  const rc49: Rec32 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4227) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  const rc0: Rec32 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  acc = (acc * 31 + 6572) % 65521;
  buf += 'customs2-' + acc.toString();
  acc = acc + 861 - (acc % 79);
  const rc4: Rec32 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const ix6: number = buf.indexOf('p32');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  if (acc % 6 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  if (acc % 26 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const rc10: Rec32 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  buf += `q12:${acc % 97}`;
  const ix13: number = buf.indexOf('p32');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  m01.set('k14', acc % 997);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  acc = (acc * 31 + 6680) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 186) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  m01.set('k19', acc % 997);
  buf += `q20:${acc % 97}`;
  buf += 'pickup21-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  for (let i23 = 0; i23 < 9; i23++) {
    acc = (acc + i23 * 13 + 710) % 100003;
  }
  buf += 'customs24-' + acc.toString();
  for (let i25 = 0; i25 < 10; i25++) {
    acc = (acc + i25 * 13 + 112) % 100003;
  }
  buf += `q26:${acc % 97}`;
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  if (acc % 27 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  m01.set('k29', acc % 997);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  for (let i31 = 0; i31 < 9; i31++) {
    acc = (acc + i31 * 13 + 309) % 100003;
  }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 69) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  buf += 'audit37-' + acc.toString();
  m01.set('k38', acc % 997);
  buf += 'parcel39-' + acc.toString();
  acc = acc + 327 - (acc % 43);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  acc = acc + 228 - (acc % 14);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 180) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = (acc * 31 + 6830) % 65521;
  const rc45: Rec32 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  buf += `q46:${acc % 97}`;
  buf += 'waybill47-' + acc.toString();
  buf += `q48:${acc % 97}`;
  arr.push(acc % 1000);
  const ix50: number = buf.indexOf('p32');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7499) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4228) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  buf += `q0:${acc % 97}`;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  arr.push(acc % 1000);
  for (let i5 = 0; i5 < 5; i5++) {
    acc = (acc + i5 * 13 + 38) % 100003;
  }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  acc = acc + 996 - (acc % 60);
  if (acc % 12 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-11'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const rc13: Rec32 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const rc14: Rec32 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 45) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const rc20: Rec32 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = (acc * 31 + 4448) % 65521;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  const rc23: Rec32 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 50) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const rc31: Rec32 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const ix32: number = buf.indexOf('p32');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 122) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'warehouse35-' + acc.toString();
  try { if (acc % 29 === 12) { throw new Error('synthetic-36'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 17 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-39'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'warehouse40-' + acc.toString();
  buf += `q41:${acc % 97}`;
  acc = acc + 819 - (acc % 18);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  acc = (acc * 31 + 358) % 65521;
  const ix50: number = buf.indexOf('p32');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4229) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  acc = acc + 955 - (acc % 82);
  try { if (acc % 29 === 17) { throw new Error('synthetic-2'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-3'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q4:${acc % 97}`;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  buf += 'pickup6-' + acc.toString();
  acc = acc + 893 - (acc % 82);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 25) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const rc9: Rec32 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  const rc11: Rec32 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const rc12: Rec32 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  acc = (acc * 31 + 7667) % 65521;
  acc = (acc * 31 + 2102) % 65521;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 145) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += 'coupon16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 13) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += `q21:${acc % 97}`;
  const rc22: Rec32 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  m01.set('k27', acc % 997);
  try { if (acc % 29 === 7) { throw new Error('synthetic-28'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 46 - (acc % 27);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 125) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'customs35-' + acc.toString();
  if (acc % 9 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += `q38:${acc % 97}`;
  buf += 'parcel39-' + acc.toString();
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  acc = (acc * 31 + 6306) % 65521;
  acc = acc + 885 - (acc % 96);
  buf += `q44:${acc % 97}`;
  const rc45: Rec32 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  acc = acc + 884 - (acc % 39);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i49 = 0; i49 < 6; i49++) {
    acc = (acc + i49 * 13 + 487) % 100003;
  }
  buf += `q50:${acc % 97}`;
  acc = (acc * 31 + 5564) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4230) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  for (let i1 = 0; i1 < 8; i1++) {
    acc = (acc + i1 * 13 + 351) % 100003;
  }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  if (acc % 31 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const rc8: Rec32 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 16) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  try { if (acc % 29 === 3) { throw new Error('synthetic-10'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 77) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const rc12: Rec32 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  try { if (acc % 29 === 9) { throw new Error('synthetic-13'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9364) % 65521;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 26) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 113) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const rc19: Rec32 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = acc + 798 - (acc % 47);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const rc23: Rec32 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const rc25: Rec32 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  buf += `q26:${acc % 97}`;
  buf += `q27:${acc % 97}`;
  const ix28: number = buf.indexOf('p32');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const ix29: number = buf.indexOf('p32');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  acc = acc + 644 - (acc % 25);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  acc = acc + 407 - (acc % 83);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 93) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 3464) % 65521;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const ix37: number = buf.indexOf('p32');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const rc41: Rec32 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  buf += 'freight42-' + acc.toString();
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  acc = (acc * 31 + 2016) % 65521;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const ix46: number = buf.indexOf('p32');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = acc + 208 - (acc % 8);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  m01.set('k50', acc % 997);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4231) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  const ix0: number = buf.indexOf('p32');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3182) % 65521;
  acc = (acc * 31 + 5084) % 65521;
  arr.push(acc % 1000);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  for (let i5 = 0; i5 < 3; i5++) {
    acc = (acc + i5 * 13 + 863) % 100003;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-6'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 21 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-8'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i9 = 0; i9 < 7; i9++) {
    acc = (acc + i9 * 13 + 644) % 100003;
  }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (acc % 16 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  buf += `q13:${acc % 97}`;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 41) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const rc16: Rec32 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 181) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'warehouse18-' + acc.toString();
  acc = acc + 114 - (acc % 56);
  if (acc % 16 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  m01.set('k24', acc % 997);
  acc = acc + 697 - (acc % 87);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = (acc * 31 + 8432) % 65521;
  const ix28: number = buf.indexOf('p32');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 119) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  buf += 'transit30-' + acc.toString();
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 126) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = (acc * 31 + 8818) % 65521;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 184) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'crate35-' + acc.toString();
  acc = acc + 562 - (acc % 70);
  for (let i37 = 0; i37 < 11; i37++) {
    acc = (acc + i37 * 13 + 329) % 100003;
  }
  buf += `q38:${acc % 97}`;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  buf += `q43:${acc % 97}`;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  m01.set('k45', acc % 997);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const ix47: number = buf.indexOf('p32');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const rc49: Rec32 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  if (acc % 21 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 198) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0032_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0032_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0032_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4232) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 26) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const ix7: number = buf.indexOf('p32');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  buf += 'transit8-' + acc.toString();
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  arr.push(acc % 1000);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const rc16: Rec32 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 143) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += `q21:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = (acc * 31 + 4875) % 65521;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  acc = acc + 784 - (acc % 58);
  for (let i33 = 0; i33 < 7; i33++) {
    acc = (acc + i33 * 13 + 946) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 173) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec32 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  m01.set('k37', acc % 997);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 52) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 185) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  if (acc % 24 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (acc % 31 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const rc44: Rec32 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += 'tariff45-' + acc.toString();
  try { if (acc % 29 === 3) { throw new Error('synthetic-46'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-47'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  m01.set('k49', acc % 997);
  m01.set('k50', acc % 997);
  acc = (acc * 31 + 245) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4233) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  buf += 'vendor0-' + acc.toString();
  m01.set('k1', acc % 997);
  acc = acc + 301 - (acc % 15);
  m01.set('k3', acc % 997);
  try { if (acc % 29 === 16) { throw new Error('synthetic-4'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9956) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  if (acc % 23 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  m01.set('k10', acc % 997);
  m01.set('k11', acc % 997);
  acc = (acc * 31 + 120) % 65521;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-14'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 24) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  for (let i20 = 0; i20 < 10; i20++) {
    acc = (acc + i20 * 13 + 684) % 100003;
  }
  buf += 'freight21-' + acc.toString();
  try { if (acc % 29 === 18) { throw new Error('synthetic-22'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i23 = 0; i23 < 5; i23++) {
    acc = (acc + i23 * 13 + 368) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-26'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i27 = 0; i27 < 7; i27++) {
    acc = (acc + i27 * 13 + 934) % 100003;
  }
  const ix28: number = buf.indexOf('p32');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  buf += `q29:${acc % 97}`;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const rc32: Rec32 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = acc + 75 - (acc % 65);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 128) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const ix36: number = buf.indexOf('p32');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  m01.set('k38', acc % 997);
  buf += 'parcel39-' + acc.toString();
  for (let i40 = 0; i40 < 4; i40++) {
    acc = (acc + i40 * 13 + 932) % 100003;
  }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  acc = acc + 499 - (acc % 11);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const rc44: Rec32 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  try { if (acc % 29 === 13) { throw new Error('synthetic-46'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'rebate47-' + acc.toString();
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  m01.set('k49', acc % 997);
  arr.push(acc % 1000);
  const rc51: Rec32 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0032_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 4234) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit32 = new Unit32(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  for (let i1 = 0; i1 < 9; i1++) {
    acc = (acc + i1 * 13 + 235) % 100003;
  }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const rc4: Rec32 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += `q7:${acc % 97}`;
  buf += `q8:${acc % 97}`;
  m01.set('k9', acc % 997);
  buf += `q10:${acc % 97}`;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  buf += 'rebate12-' + acc.toString();
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  buf += 'stocktake14-' + acc.toString();
  acc = (acc * 31 + 5059) % 65521;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 120) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 31) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 54) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  for (let i23 = 0; i23 < 12; i23++) {
    acc = (acc + i23 * 13 + 163) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  buf += 'journey25-' + acc.toString();
  buf += `q26:${acc % 97}`;
  buf += 'transit27-' + acc.toString();
  buf += `q28:${acc % 97}`;
  m01.set('k29', acc % 997);
  acc = (acc * 31 + 2363) % 65521;
  try { if (acc % 29 === 7) { throw new Error('synthetic-31'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 490 - (acc % 93);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 70) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  acc = acc + 60 - (acc % 14);
  try { if (acc % 29 === 15) { throw new Error('synthetic-38'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'dock39-' + acc.toString();
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  buf += `q42:${acc % 97}`;
  buf += 'shelf43-' + acc.toString();
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 134) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  buf += 'client45-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  buf += `q47:${acc % 97}`;
  arr.push(acc % 1000);
  acc = (acc * 31 + 3548) % 65521;
  const rc50: Rec32 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  acc = acc + 864 - (acc % 19);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0032(): BizFn[] {
  return [biz_0032_00, biz_0032_01, biz_0032_02, biz_0032_03, biz_0032_04, biz_0032_05, biz_0032_06, biz_0032_07, biz_0032_08, biz_0032_09, biz_0032_10, biz_0032_11, biz_0032_12, biz_0032_13, biz_0032_14, biz_0032_15, biz_0032_16, biz_0032_17, biz_0032_18, biz_0032_19, biz_0032_20, biz_0032_21, biz_0032_22, biz_0032_23, biz_0032_24, biz_0032_25, biz_0032_26, biz_0032_27, biz_0032_28, biz_0032_29, biz_0032_30, biz_0032_31, biz_0032_32, biz_0032_33, biz_0032_34, biz_0032_35, biz_0032_36, biz_0032_37, biz_0032_38, biz_0032_39, biz_0032_40, biz_0032_41, biz_0032_42];
}

export function rega_0032(): ABizFn[] {
  return [biz_0032_09a, biz_0032_19a, biz_0032_29a, biz_0032_39a];
}
