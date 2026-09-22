// Biz0063.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec63 { id: number; tag: string; score: number; }

class Unit63 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0063_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8253) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  const rc0: Rec63 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  buf += `q1:${acc % 97}`;
  try { if (acc % 29 === 16) { throw new Error('synthetic-2'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 16 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  acc = (acc * 31 + 3533) % 65521;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += 'pallet13-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  for (let i15 = 0; i15 < 3; i15++) {
    acc = (acc + i15 * 13 + 782) % 100003;
  }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 52) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  arr.push(acc % 1000);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const rc21: Rec63 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  if (acc % 16 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  buf += `q24:${acc % 97}`;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  try { if (acc % 29 === 20) { throw new Error('synthetic-26'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-31'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  if (acc % 10 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 26) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  for (let i36 = 0; i36 < 10; i36++) {
    acc = (acc + i36 * 13 + 938) % 100003;
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  for (let i39 = 0; i39 < 10; i39++) {
    acc = (acc + i39 * 13 + 514) % 100003;
  }
  acc = acc + 250 - (acc % 60);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-42'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = acc + 541 - (acc % 50);
  buf += 'transit45-' + acc.toString();
  try { if (acc % 29 === 23) { throw new Error('synthetic-46'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  buf += `q50:${acc % 97}`;
  const ix51: number = buf.indexOf('p63');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8254) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  acc = (acc * 31 + 7464) % 65521;
  const rc1: Rec63 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  if (acc % 25 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5317) % 65521;
  try { if (acc % 29 === 7) { throw new Error('synthetic-4'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i5 = 0; i5 < 8; i5++) {
    acc = (acc + i5 * 13 + 350) % 100003;
  }
  for (let i6 = 0; i6 < 4; i6++) {
    acc = (acc + i6 * 13 + 555) % 100003;
  }
  m01.set('k7', acc % 997);
  acc = acc + 704 - (acc % 28);
  for (let i9 = 0; i9 < 5; i9++) {
    acc = (acc + i9 * 13 + 954) % 100003;
  }
  m01.set('k10', acc % 997);
  m01.set('k11', acc % 997);
  acc = acc + 418 - (acc % 44);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 8) { throw new Error('synthetic-14'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'rebate15-' + acc.toString();
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 27) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 191) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 17 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix20: number = buf.indexOf('p63');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  buf += 'invoice23-' + acc.toString();
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const ix25: number = buf.indexOf('p63');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  buf += `q26:${acc % 97}`;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const rc28: Rec63 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  try { if (acc % 29 === 7) { throw new Error('synthetic-30'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  for (let i32 = 0; i32 < 5; i32++) {
    acc = (acc + i32 * 13 + 459) % 100003;
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 187) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 7) { throw new Error('synthetic-35'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 114 - (acc % 42);
  for (let i37 = 0; i37 < 4; i37++) {
    acc = (acc + i37 * 13 + 143) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  arr.push(acc % 1000);
  buf += `q42:${acc % 97}`;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  for (let i45 = 0; i45 < 4; i45++) {
    acc = (acc + i45 * 13 + 436) % 100003;
  }
  const ix46: number = buf.indexOf('p63');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const ix47: number = buf.indexOf('p63');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  if (acc % 20 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  for (let i51 = 0; i51 < 6; i51++) {
    acc = (acc + i51 * 13 + 132) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8255) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  arr.push(acc % 1000);
  buf += 'coupon1-' + acc.toString();
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const ix3: number = buf.indexOf('p63');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 7270) % 65521;
  const ix6: number = buf.indexOf('p63');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  try { if (acc % 29 === 18) { throw new Error('synthetic-8'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3663) % 65521;
  const rc10: Rec63 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7857) % 65521;
  m01.set('k13', acc % 997);
  try { if (acc % 29 === 10) { throw new Error('synthetic-14'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  if (acc % 6 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 172) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const rc22: Rec63 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  m01.set('k24', acc % 997);
  buf += `q25:${acc % 97}`;
  if (acc % 18 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  acc = (acc * 31 + 4942) % 65521;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  if (acc % 12 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  if (acc % 26 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  for (let i32 = 0; i32 < 3; i32++) {
    acc = (acc + i32 * 13 + 973) % 100003;
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 32) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  for (let i36 = 0; i36 < 9; i36++) {
    acc = (acc + i36 * 13 + 269) % 100003;
  }
  m01.set('k37', acc % 997);
  arr.push(acc % 1000);
  buf += `q39:${acc % 97}`;
  for (let i40 = 0; i40 < 10; i40++) {
    acc = (acc + i40 * 13 + 647) % 100003;
  }
  const ix41: number = buf.indexOf('p63');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const rc42: Rec63 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  buf += 'order43-' + acc.toString();
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 103) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 91) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  for (let i46 = 0; i46 < 10; i46++) {
    acc = (acc + i46 * 13 + 49) % 100003;
  }
  buf += 'dispatch47-' + acc.toString();
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const rc49: Rec63 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  acc = (acc * 31 + 785) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8256) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-2'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  buf += 'batch5-' + acc.toString();
  for (let i6 = 0; i6 < 4; i6++) {
    acc = (acc + i6 * 13 + 230) % 100003;
  }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  acc = (acc * 31 + 1185) % 65521;
  const ix11: number = buf.indexOf('p63');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  buf += 'customs14-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  buf += 'crate16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 47) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  arr.push(acc % 1000);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-23'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  acc = acc + 35 - (acc % 15);
  buf += 'order27-' + acc.toString();
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  acc = (acc * 31 + 5747) % 65521;
  const ix33: number = buf.indexOf('p63');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 93) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'audit35-' + acc.toString();
  buf += `q36:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += `q38:${acc % 97}`;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  acc = (acc * 31 + 5667) % 65521;
  arr.push(acc % 1000);
  acc = acc + 821 - (acc % 44);
  acc = (acc * 31 + 5585) % 65521;
  m01.set('k46', acc % 997);
  acc = (acc * 31 + 752) % 65521;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  acc = (acc * 31 + 574) % 65521;
  for (let i50 = 0; i50 < 6; i50++) {
    acc = (acc + i50 * 13 + 633) % 100003;
  }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8257) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  try { if (acc % 29 === 14) { throw new Error('synthetic-0'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const rc1: Rec63 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  buf += 'balance2-' + acc.toString();
  buf += `q3:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  try { if (acc % 29 === 23) { throw new Error('synthetic-6'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2085) % 65521;
  buf += `q9:${acc % 97}`;
  const rc10: Rec63 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 61) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  buf += `q12:${acc % 97}`;
  const rc13: Rec63 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 75) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  acc = (acc * 31 + 2355) % 65521;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const rc24: Rec63 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  acc = acc + 271 - (acc % 73);
  for (let i26 = 0; i26 < 9; i26++) {
    acc = (acc + i26 * 13 + 435) % 100003;
  }
  arr.push(acc % 1000);
  const rc28: Rec63 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  m01.set('k29', acc % 997);
  buf += 'coupon30-' + acc.toString();
  if (acc % 5 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const ix33: number = buf.indexOf('p63');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 50) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 5 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  acc = acc + 922 - (acc % 54);
  for (let i37 = 0; i37 < 5; i37++) {
    acc = (acc + i37 * 13 + 81) % 100003;
  }
  if (acc % 21 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  try { if (acc % 29 === 6) { throw new Error('synthetic-40'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  buf += 'pickup42-' + acc.toString();
  const ix43: number = buf.indexOf('p63');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8018) % 65521;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  m01.set('k48', acc % 997);
  arr.push(acc % 1000);
  m01.set('k50', acc % 997);
  const ix51: number = buf.indexOf('p63');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8258) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  const rc0: Rec63 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  try { if (acc % 29 === 23) { throw new Error('synthetic-1'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 69) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const ix3: number = buf.indexOf('p63');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-4'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  if (acc % 17 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  m01.set('k8', acc % 997);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  for (let i11 = 0; i11 < 7; i11++) {
    acc = (acc + i11 * 13 + 847) % 100003;
  }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  arr.push(acc % 1000);
  const rc15: Rec63 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 27) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const ix19: number = buf.indexOf('p63');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  if (acc % 13 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  buf += `q21:${acc % 97}`;
  if (acc % 29 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  buf += 'order23-' + acc.toString();
  m01.set('k24', acc % 997);
  arr.push(acc % 1000);
  try { if (acc % 29 === 2) { throw new Error('synthetic-26'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 233 - (acc % 87);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 53) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  if (acc % 31 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const ix32: number = buf.indexOf('p63');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 198) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'rebate35-' + acc.toString();
  m01.set('k36', acc % 997);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  buf += `q38:${acc % 97}`;
  const ix39: number = buf.indexOf('p63');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const ix40: number = buf.indexOf('p63');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  for (let i43 = 0; i43 < 11; i43++) {
    acc = (acc + i43 * 13 + 268) % 100003;
  }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  arr.push(acc % 1000);
  const ix46: number = buf.indexOf('p63');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  for (let i50 = 0; i50 < 8; i50++) {
    acc = (acc + i50 * 13 + 496) % 100003;
  }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8259) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  acc = (acc * 31 + 3914) % 65521;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 98) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  m01.set('k4', acc % 997);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 83) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const rc6: Rec63 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2214) % 65521;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  acc = (acc * 31 + 3843) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-11'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'ticket12-' + acc.toString();
  acc = (acc * 31 + 7173) % 65521;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 31) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const ix16: number = buf.indexOf('p63');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 191) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 20 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  m01.set('k22', acc % 997);
  const rc23: Rec63 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  m01.set('k26', acc % 997);
  for (let i27 = 0; i27 < 7; i27++) {
    acc = (acc + i27 * 13 + 282) % 100003;
  }
  arr.push(acc % 1000);
  acc = acc + 263 - (acc % 48);
  acc = (acc * 31 + 5188) % 65521;
  buf += `q31:${acc % 97}`;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 187) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  acc = (acc * 31 + 6192) % 65521;
  const rc38: Rec63 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  arr.push(acc % 1000);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  acc = acc + 340 - (acc % 24);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const rc45: Rec63 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  for (let i46 = 0; i46 < 3; i46++) {
    acc = (acc + i46 * 13 + 320) % 100003;
  }
  m01.set('k47', acc % 997);
  const rc48: Rec63 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8260) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  buf += `q0:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  acc = acc + 214 - (acc % 90);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 136) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  try { if (acc % 29 === 20) { throw new Error('synthetic-7'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  for (let i9 = 0; i9 < 3; i9++) {
    acc = (acc + i9 * 13 + 516) % 100003;
  }
  m01.set('k10', acc % 997);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  arr.push(acc % 1000);
  buf += 'pickup13-' + acc.toString();
  acc = (acc * 31 + 5841) % 65521;
  buf += `q15:${acc % 97}`;
  if (acc % 10 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 107) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-20'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4111) % 65521;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 120) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  m01.set('k30', acc % 997);
  if (acc % 15 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = acc + 620 - (acc % 43);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 179) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 19) { throw new Error('synthetic-36'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const ix37: number = buf.indexOf('p63');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  acc = (acc * 31 + 2286) % 65521;
  const ix42: number = buf.indexOf('p63');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-43'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  if (acc % 12 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const rc46: Rec63 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  acc = (acc * 31 + 4311) % 65521;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8261) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  arr.push(acc % 1000);
  for (let i2 = 0; i2 < 9; i2++) {
    acc = (acc + i2 * 13 + 754) % 100003;
  }
  for (let i3 = 0; i3 < 6; i3++) {
    acc = (acc + i3 * 13 + 700) % 100003;
  }
  m01.set('k4', acc % 997);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  m01.set('k7', acc % 997);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  acc = (acc * 31 + 636) % 65521;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += `q13:${acc % 97}`;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 50) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  m01.set('k19', acc % 997);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 166) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q25:${acc % 97}`;
  buf += 'policy26-' + acc.toString();
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  if (acc % 30 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const rc30: Rec63 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += `q31:${acc % 97}`;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 12) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const rc36: Rec63 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const rc38: Rec63 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  for (let i40 = 0; i40 < 4; i40++) {
    acc = (acc + i40 * 13 + 444) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  m01.set('k42', acc % 997);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const rc44: Rec63 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  for (let i45 = 0; i45 < 10; i45++) {
    acc = (acc + i45 * 13 + 879) % 100003;
  }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  buf += `q50:${acc % 97}`;
  for (let i51 = 0; i51 < 12; i51++) {
    acc = (acc + i51 * 13 + 305) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8262) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  const ix0: number = buf.indexOf('p63');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-1'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const ix3: number = buf.indexOf('p63');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9440) % 65521;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  acc = acc + 783 - (acc % 31);
  arr.push(acc % 1000);
  m01.set('k14', acc % 997);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  for (let i16 = 0; i16 < 10; i16++) {
    acc = (acc + i16 * 13 + 589) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 36) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  acc = (acc * 31 + 1471) % 65521;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 114) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 54) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  buf += 'policy23-' + acc.toString();
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const ix27: number = buf.indexOf('p63');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const rc29: Rec63 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 121) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 162) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  acc = acc + 150 - (acc % 28);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 147) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-35'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const rc37: Rec63 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  for (let i38 = 0; i38 < 10; i38++) {
    acc = (acc + i38 * 13 + 821) % 100003;
  }
  arr.push(acc % 1000);
  buf += `q40:${acc % 97}`;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  arr.push(acc % 1000);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 121) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-45'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-47'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 75) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const ix49: number = buf.indexOf('p63');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const rc50: Rec63 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const ix51: number = buf.indexOf('p63');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0063_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0063_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0063_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8263) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  buf += 'journey1-' + acc.toString();
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  acc = acc + 231 - (acc % 81);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 92) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  m01.set('k6', acc % 997);
  acc = (acc * 31 + 5633) % 65521;
  acc = acc + 936 - (acc % 30);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  m01.set('k12', acc % 997);
  m01.set('k13', acc % 997);
  const ix14: number = buf.indexOf('p63');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 67) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 125) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  if (acc % 25 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  m01.set('k20', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  acc = acc + 849 - (acc % 22);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  for (let i26 = 0; i26 < 12; i26++) {
    acc = (acc + i26 * 13 + 680) % 100003;
  }
  acc = (acc * 31 + 5319) % 65521;
  arr.push(acc % 1000);
  acc = (acc * 31 + 8430) % 65521;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  arr.push(acc % 1000);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 129) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 80) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 125) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  for (let i36 = 0; i36 < 6; i36++) {
    acc = (acc + i36 * 13 + 929) % 100003;
  }
  if (acc % 25 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  buf += 'ledger43-' + acc.toString();
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 81) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 196) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  try { if (acc % 29 === 22) { throw new Error('synthetic-46'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q47:${acc % 97}`;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += 'shelf49-' + acc.toString();
  arr.push(acc % 1000);
  acc = (acc * 31 + 7634) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8264) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  buf += 'routeplan0-' + acc.toString();
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  if (acc % 20 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  m01.set('k4', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  acc = acc + 121 - (acc % 57);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  buf += 'tariff8-' + acc.toString();
  acc = acc + 864 - (acc % 66);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 174) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  m01.set('k11', acc % 997);
  for (let i12 = 0; i12 < 12; i12++) {
    acc = (acc + i12 * 13 + 313) % 100003;
  }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 24) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 146) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  m01.set('k21', acc % 997);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  if (acc % 19 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  if (acc % 12 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  buf += `q27:${acc % 97}`;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  buf += `q30:${acc % 97}`;
  acc = (acc * 31 + 3784) % 65521;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += 'ticket33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 154) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 13 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 163) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const ix37: number = buf.indexOf('p63');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 132) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  const ix43: number = buf.indexOf('p63');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 41) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const ix48: number = buf.indexOf('p63');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-50'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8265) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  acc = acc + 469 - (acc % 95);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-3'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 104) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 156) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 112) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = acc + 993 - (acc % 12);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  for (let i11 = 0; i11 < 6; i11++) {
    acc = (acc + i11 * 13 + 984) % 100003;
  }
  acc = (acc * 31 + 4701) % 65521;
  const ix13: number = buf.indexOf('p63');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  acc = (acc * 31 + 623) % 65521;
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 154) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  acc = acc + 261 - (acc % 45);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const rc21: Rec63 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  try { if (acc % 29 === 6) { throw new Error('synthetic-22'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  acc = (acc * 31 + 9919) % 65521;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  for (let i26 = 0; i26 < 3; i26++) {
    acc = (acc + i26 * 13 + 287) % 100003;
  }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  m01.set('k28', acc % 997);
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  for (let i30 = 0; i30 < 11; i30++) {
    acc = (acc + i30 * 13 + 808) % 100003;
  }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 86) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  arr.push(acc % 1000);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 122) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  m01.set('k41', acc % 997);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 116) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  arr.push(acc % 1000);
  buf += `q46:${acc % 97}`;
  try { if (acc % 29 === 12) { throw new Error('synthetic-47'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  acc = acc + 151 - (acc % 13);
  try { if (acc % 29 === 4) { throw new Error('synthetic-50'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 21 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8266) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  for (let i0 = 0; i0 < 11; i0++) {
    acc = (acc + i0 * 13 + 526) % 100003;
  }
  m01.set('k1', acc % 997);
  acc = (acc * 31 + 911) % 65521;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'policy4-' + acc.toString();
  try { if (acc % 29 === 22) { throw new Error('synthetic-5'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 14 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  buf += `q7:${acc % 97}`;
  for (let i8 = 0; i8 < 12; i8++) {
    acc = (acc + i8 * 13 + 621) % 100003;
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-9'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 978 - (acc % 37);
  try { if (acc % 29 === 16) { throw new Error('synthetic-11'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k12', acc % 997);
  buf += 'order13-' + acc.toString();
  acc = acc + 856 - (acc % 51);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 73) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  buf += 'coupon19-' + acc.toString();
  try { if (acc % 29 === 18) { throw new Error('synthetic-20'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 600 - (acc % 76);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const rc23: Rec63 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  acc = (acc * 31 + 919) % 65521;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 37) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = acc + 233 - (acc % 64);
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  buf += 'pickup29-' + acc.toString();
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  for (let i31 = 0; i31 < 9; i31++) {
    acc = (acc + i31 * 13 + 390) % 100003;
  }
  const ix32: number = buf.indexOf('p63');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 25) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += `q36:${acc % 97}`;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  arr.push(acc % 1000);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 115) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  m01.set('k44', acc % 997);
  if (acc % 27 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3632) % 65521;
  buf += `q47:${acc % 97}`;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const rc49: Rec63 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const ix50: number = buf.indexOf('p63');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  buf += 'region51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8267) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 191) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-1'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = (acc * 31 + 4282) % 65521;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  acc = acc + 756 - (acc % 64);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  acc = acc + 99 - (acc % 46);
  m01.set('k8', acc % 997);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  buf += 'refund10-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  if (acc % 22 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (acc % 5 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += 'depot15-' + acc.toString();
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 43) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 48) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec63 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  for (let i20 = 0; i20 < 8; i20++) {
    acc = (acc + i20 * 13 + 493) % 100003;
  }
  buf += 'batch21-' + acc.toString();
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 107) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  for (let i24 = 0; i24 < 5; i24++) {
    acc = (acc + i24 * 13 + 579) % 100003;
  }
  if (acc % 13 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = acc + 991 - (acc % 25);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  acc = (acc * 31 + 6651) % 65521;
  for (let i30 = 0; i30 < 9; i30++) {
    acc = (acc + i30 * 13 + 72) % 100003;
  }
  const ix31: number = buf.indexOf('p63');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-32'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 182) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  m01.set('k36', acc % 997);
  const ix37: number = buf.indexOf('p63');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-38'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  try { if (acc % 29 === 5) { throw new Error('synthetic-40'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'routeplan41-' + acc.toString();
  arr.push(acc % 1000);
  try { if (acc % 29 === 2) { throw new Error('synthetic-43'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'batch44-' + acc.toString();
  acc = (acc * 31 + 8367) % 65521;
  buf += 'balance46-' + acc.toString();
  acc = (acc * 31 + 7592) % 65521;
  acc = acc + 947 - (acc % 29);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  for (let i50 = 0; i50 < 4; i50++) {
    acc = (acc + i50 * 13 + 696) % 100003;
  }
  const ix51: number = buf.indexOf('p63');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8268) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = (acc * 31 + 7702) % 65521;
  if (acc % 29 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-4'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  m01.set('k6', acc % 997);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  try { if (acc % 29 === 14) { throw new Error('synthetic-10'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k11', acc % 997);
  try { if (acc % 29 === 12) { throw new Error('synthetic-12'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  buf += 'settle14-' + acc.toString();
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 45) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 853) % 65521;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 122) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 118) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  acc = acc + 361 - (acc % 62);
  buf += `q24:${acc % 97}`;
  if (acc % 9 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 185) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 40) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 177) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 21) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'pickup35-' + acc.toString();
  acc = (acc * 31 + 475) % 65521;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const ix38: number = buf.indexOf('p63');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  if (acc % 28 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const ix41: number = buf.indexOf('p63');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4088) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-43'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 667 - (acc % 92);
  acc = acc + 771 - (acc % 76);
  for (let i46 = 0; i46 < 9; i46++) {
    acc = (acc + i46 * 13 + 192) % 100003;
  }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 140) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-49'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 20 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1955) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8269) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  acc = acc + 331 - (acc % 76);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1113) % 65521;
  buf += `q3:${acc % 97}`;
  try { if (acc % 29 === 20) { throw new Error('synthetic-4'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  buf += `q6:${acc % 97}`;
  buf += `q7:${acc % 97}`;
  acc = acc + 29 - (acc % 54);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  buf += 'policy10-' + acc.toString();
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  m01.set('k13', acc % 997);
  acc = acc + 484 - (acc % 58);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  for (let i16 = 0; i16 < 8; i16++) {
    acc = (acc + i16 * 13 + 615) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 36) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  for (let i19 = 0; i19 < 10; i19++) {
    acc = (acc + i19 * 13 + 675) % 100003;
  }
  if (acc % 5 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2530) % 65521;
  buf += `q27:${acc % 97}`;
  m01.set('k28', acc % 997);
  if (acc % 11 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  acc = acc + 788 - (acc % 57);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 111) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 12 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  if (acc % 8 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  if (acc % 7 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (acc % 14 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  buf += 'rebate45-' + acc.toString();
  m01.set('k46', acc % 997);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const ix48: number = buf.indexOf('p63');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  for (let i50 = 0; i50 < 3; i50++) {
    acc = (acc + i50 * 13 + 391) % 100003;
  }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8270) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const ix2: number = buf.indexOf('p63');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  m01.set('k3', acc % 997);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 115) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  m01.set('k6', acc % 997);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 157) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 21) { throw new Error('synthetic-9'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const rc10: Rec63 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  buf += 'carrier11-' + acc.toString();
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const ix14: number = buf.indexOf('p63');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const ix16: number = buf.indexOf('p63');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 166) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  buf += `q19:${acc % 97}`;
  if (acc % 9 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-21'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const ix22: number = buf.indexOf('p63');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  acc = (acc * 31 + 3330) % 65521;
  buf += `q25:${acc % 97}`;
  buf += `q26:${acc % 97}`;
  acc = acc + 60 - (acc % 49);
  m01.set('k28', acc % 997);
  acc = (acc * 31 + 9991) % 65521;
  if (acc % 16 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  acc = (acc * 31 + 2940) % 65521;
  for (let i33 = 0; i33 < 7; i33++) {
    acc = (acc + i33 * 13 + 342) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 52) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 129) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-38'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 100) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  buf += 'dispatch40-' + acc.toString();
  if (acc % 31 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-42'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const ix44: number = buf.indexOf('p63');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  m01.set('k45', acc % 997);
  buf += `q46:${acc % 97}`;
  const rc47: Rec63 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += `q48:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += 'dock50-' + acc.toString();
  const rc51: Rec63 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8271) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  acc = (acc * 31 + 2308) % 65521;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  if (acc % 29 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  m01.set('k4', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const ix9: number = buf.indexOf('p63');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const ix11: number = buf.indexOf('p63');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = acc + 632 - (acc % 93);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  acc = (acc * 31 + 3127) % 65521;
  const ix15: number = buf.indexOf('p63');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 18) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  const ix19: number = buf.indexOf('p63');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += `q20:${acc % 97}`;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  if (acc % 13 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  acc = (acc * 31 + 7917) % 65521;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  for (let i29 = 0; i29 < 6; i29++) {
    acc = (acc + i29 * 13 + 979) % 100003;
  }
  buf += `q30:${acc % 97}`;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 97) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  try { if (acc % 29 === 23) { throw new Error('synthetic-37'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 19) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  for (let i41 = 0; i41 < 5; i41++) {
    acc = (acc + i41 * 13 + 598) % 100003;
  }
  for (let i42 = 0; i42 < 8; i42++) {
    acc = (acc + i42 * 13 + 144) % 100003;
  }
  buf += 'settle43-' + acc.toString();
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const ix45: number = buf.indexOf('p63');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  m01.set('k46', acc % 997);
  buf += `q47:${acc % 97}`;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const rc49: Rec63 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  if (acc % 29 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8272) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  const rc0: Rec63 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const rc3: Rec63 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 14) { throw new Error('synthetic-5'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'routeplan6-' + acc.toString();
  buf += 'rebate7-' + acc.toString();
  buf += 'settle8-' + acc.toString();
  buf += `q9:${acc % 97}`;
  const ix10: number = buf.indexOf('p63');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const ix11: number = buf.indexOf('p63');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-12'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 65) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  buf += 'warehouse15-' + acc.toString();
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 95) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'transit18-' + acc.toString();
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  arr.push(acc % 1000);
  acc = acc + 410 - (acc % 53);
  if (acc % 28 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  buf += 'coupon26-' + acc.toString();
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const ix29: number = buf.indexOf('p63');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  m01.set('k31', acc % 997);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 140) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 116) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-35'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 63) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  m01.set('k37', acc % 997);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const ix40: number = buf.indexOf('p63');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  if (acc % 24 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  for (let i42 = 0; i42 < 4; i42++) {
    acc = (acc + i42 * 13 + 115) % 100003;
  }
  buf += `q43:${acc % 97}`;
  for (let i44 = 0; i44 < 9; i44++) {
    acc = (acc + i44 * 13 + 692) % 100003;
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-45'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 10 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const ix48: number = buf.indexOf('p63');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  acc = acc + 356 - (acc % 34);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0063_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0063_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0063_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8273) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  acc = (acc * 31 + 9065) % 65521;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const ix3: number = buf.indexOf('p63');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 184) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const rc8: Rec63 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  buf += 'freight9-' + acc.toString();
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 13) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-11'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  m01.set('k13', acc % 997);
  buf += 'audit14-' + acc.toString();
  buf += 'parcel15-' + acc.toString();
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 89) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const ix19: number = buf.indexOf('p63');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  if (acc % 26 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 71) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 29 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  acc = acc + 452 - (acc % 40);
  if (acc % 6 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = acc + 395 - (acc % 40);
  const rc28: Rec63 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 87) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  for (let i31 = 0; i31 < 12; i31++) {
    acc = (acc + i31 * 13 + 718) % 100003;
  }
  const ix32: number = buf.indexOf('p63');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  for (let i33 = 0; i33 < 5; i33++) {
    acc = (acc + i33 * 13 + 811) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 139) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 300 - (acc % 93);
  m01.set('k36', acc % 997);
  buf += `q37:${acc % 97}`;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4220) % 65521;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  buf += 'stocktake42-' + acc.toString();
  const ix43: number = buf.indexOf('p63');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  arr.push(acc % 1000);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  acc = (acc * 31 + 5817) % 65521;
  buf += `q48:${acc % 97}`;
  buf += 'freight49-' + acc.toString();
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const rc51: Rec63 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8274) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  arr.push(acc % 1000);
  for (let i1 = 0; i1 < 6; i1++) {
    acc = (acc + i1 * 13 + 26) % 100003;
  }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  m01.set('k3', acc % 997);
  acc = (acc * 31 + 7888) % 65521;
  acc = (acc * 31 + 1189) % 65521;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  if (acc % 20 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const ix10: number = buf.indexOf('p63');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  if (acc % 22 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  try { if (acc % 29 === 12) { throw new Error('synthetic-13'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 158) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 12 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 20) { throw new Error('synthetic-20'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q21:${acc % 97}`;
  const rc22: Rec63 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const rc23: Rec63 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  if (acc % 31 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  if (acc % 21 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-27'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  for (let i29 = 0; i29 < 5; i29++) {
    acc = (acc + i29 * 13 + 987) % 100003;
  }
  acc = (acc * 31 + 4884) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  if (acc % 15 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  acc = acc + 696 - (acc % 83);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 40) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  arr.push(acc % 1000);
  if (acc % 17 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = (acc * 31 + 8464) % 65521;
  const ix40: number = buf.indexOf('p63');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  m01.set('k42', acc % 997);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  for (let i45 = 0; i45 < 5; i45++) {
    acc = (acc + i45 * 13 + 438) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  buf += 'sku47-' + acc.toString();
  m01.set('k48', acc % 997);
  if (acc % 29 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  m01.set('k50', acc % 997);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8275) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  if (acc % 6 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  for (let i1 = 0; i1 < 4; i1++) {
    acc = (acc + i1 * 13 + 264) % 100003;
  }
  buf += 'crate2-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  try { if (acc % 29 === 19) { throw new Error('synthetic-4'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  acc = acc + 404 - (acc % 78);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 174) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const rc9: Rec63 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-10'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  arr.push(acc % 1000);
  const ix15: number = buf.indexOf('p63');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4282) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 71) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  try { if (acc % 29 === 22) { throw new Error('synthetic-19'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  const ix24: number = buf.indexOf('p63');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const rc25: Rec63 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  for (let i27 = 0; i27 < 4; i27++) {
    acc = (acc + i27 * 13 + 391) % 100003;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k30', acc % 997);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  acc = acc + 601 - (acc % 35);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 123) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 3775) % 65521;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const ix39: number = buf.indexOf('p63');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const ix40: number = buf.indexOf('p63');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const rc41: Rec63 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  for (let i42 = 0; i42 < 10; i42++) {
    acc = (acc + i42 * 13 + 856) % 100003;
  }
  buf += `q43:${acc % 97}`;
  acc = (acc * 31 + 9250) % 65521;
  arr.push(acc % 1000);
  acc = acc + 15 - (acc % 92);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  acc = (acc * 31 + 1117) % 65521;
  const ix49: number = buf.indexOf('p63');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
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

export function biz_0063_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8276) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  try { if (acc % 29 === 23) { throw new Error('synthetic-0'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k1', acc % 997);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 140) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  m01.set('k3', acc % 997);
  try { if (acc % 29 === 13) { throw new Error('synthetic-4'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  acc = acc + 417 - (acc % 16);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 68) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const rc8: Rec63 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  buf += 'audit10-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-12'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 133 - (acc % 81);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const rc16: Rec63 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 183) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += `q19:${acc % 97}`;
  try { if (acc % 29 === 19) { throw new Error('synthetic-20'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3423) % 65521;
  const ix22: number = buf.indexOf('p63');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const rc27: Rec63 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  if (acc % 21 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  buf += `q31:${acc % 97}`;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  for (let i33 = 0; i33 < 10; i33++) {
    acc = (acc + i33 * 13 + 217) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 75) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const rc37: Rec63 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  const ix40: number = buf.indexOf('p63');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  buf += `q41:${acc % 97}`;
  buf += `q42:${acc % 97}`;
  try { if (acc % 29 === 6) { throw new Error('synthetic-43'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const rc44: Rec63 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const ix47: number = buf.indexOf('p63');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const ix48: number = buf.indexOf('p63');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = acc + 100 - (acc % 92);
  arr.push(acc % 1000);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8277) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  const rc0: Rec63 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  buf += 'depot1-' + acc.toString();
  const rc2: Rec63 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  for (let i3 = 0; i3 < 10; i3++) {
    acc = (acc + i3 * 13 + 814) % 100003;
  }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 124) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  try { if (acc % 29 === 23) { throw new Error('synthetic-5'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q6:${acc % 97}`;
  buf += 'settle7-' + acc.toString();
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  buf += 'warehouse10-' + acc.toString();
  const rc11: Rec63 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const ix13: number = buf.indexOf('p63');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  buf += `q14:${acc % 97}`;
  const rc15: Rec63 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  acc = (acc * 31 + 6109) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 124) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 6) { throw new Error('synthetic-18'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  acc = acc + 150 - (acc % 44);
  acc = (acc * 31 + 7839) % 65521;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += `q24:${acc % 97}`;
  m01.set('k25', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  if (acc % 21 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  for (let i29 = 0; i29 < 5; i29++) {
    acc = (acc + i29 * 13 + 271) % 100003;
  }
  arr.push(acc % 1000);
  for (let i31 = 0; i31 < 6; i31++) {
    acc = (acc + i31 * 13 + 483) % 100003;
  }
  buf += 'depot32-' + acc.toString();
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 73) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec63 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  for (let i36 = 0; i36 < 6; i36++) {
    acc = (acc + i36 * 13 + 281) % 100003;
  }
  buf += 'tariff37-' + acc.toString();
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  acc = acc + 211 - (acc % 34);
  m01.set('k41', acc % 997);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 85) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  m01.set('k45', acc % 997);
  buf += `q46:${acc % 97}`;
  acc = acc + 248 - (acc % 27);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-49'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k50', acc % 997);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8278) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  for (let i1 = 0; i1 < 7; i1++) {
    acc = (acc + i1 * 13 + 378) % 100003;
  }
  acc = acc + 297 - (acc % 61);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  if (acc % 27 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  if (acc % 14 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-7'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q8:${acc % 97}`;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const rc11: Rec63 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 189) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  for (let i15 = 0; i15 < 7; i15++) {
    acc = (acc + i15 * 13 + 27) % 100003;
  }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 91) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 1725) % 65521;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  acc = acc + 285 - (acc % 56);
  for (let i22 = 0; i22 < 6; i22++) {
    acc = (acc + i22 * 13 + 12) % 100003;
  }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  buf += 'carrier26-' + acc.toString();
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 58) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  buf += `q28:${acc % 97}`;
  acc = acc + 487 - (acc % 29);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  buf += `q31:${acc % 97}`;
  const rc32: Rec63 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const ix33: number = buf.indexOf('p63');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 124) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 1520) % 65521;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-40'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  for (let i42 = 0; i42 < 3; i42++) {
    acc = (acc + i42 * 13 + 923) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = acc + 966 - (acc % 32);
  buf += 'customs45-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  acc = (acc * 31 + 6039) % 65521;
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

export function biz_0063_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8279) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  buf += `q0:${acc % 97}`;
  acc = (acc * 31 + 5431) % 65521;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 129) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = (acc * 31 + 1293) % 65521;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  for (let i7 = 0; i7 < 8; i7++) {
    acc = (acc + i7 * 13 + 344) % 100003;
  }
  buf += 'stocktake8-' + acc.toString();
  arr.push(acc % 1000);
  m01.set('k10', acc % 997);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  buf += `q12:${acc % 97}`;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  const ix14: number = buf.indexOf('p63');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  for (let i15 = 0; i15 < 8; i15++) {
    acc = (acc + i15 * 13 + 609) % 100003;
  }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 53) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  buf += 'journey19-' + acc.toString();
  m01.set('k20', acc % 997);
  for (let i21 = 0; i21 < 10; i21++) {
    acc = (acc + i21 * 13 + 433) % 100003;
  }
  buf += 'journey22-' + acc.toString();
  const ix23: number = buf.indexOf('p63');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  acc = acc + 241 - (acc % 34);
  try { if (acc % 29 === 5) { throw new Error('synthetic-27'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 404 - (acc % 78);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 30) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  acc = (acc * 31 + 7201) % 65521;
  arr.push(acc % 1000);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 102) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 168) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 76) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 16) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  acc = acc + 316 - (acc % 14);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  if (acc % 16 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  acc = acc + 357 - (acc % 53);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += 'freight44-' + acc.toString();
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += 'crate46-' + acc.toString();
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const rc49: Rec63 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8280) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  try { if (acc % 29 === 5) { throw new Error('synthetic-1'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-3'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  const rc4: Rec63 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  if (acc % 27 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-6'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const rc9: Rec63 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const rc11: Rec63 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
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
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  for (let i15 = 0; i15 < 3; i15++) {
    acc = (acc + i15 * 13 + 200) % 100003;
  }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 109) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 193) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  const rc20: Rec63 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 127) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = acc + 874 - (acc % 65);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = acc + 801 - (acc % 90);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i29 = 0; i29 < 7; i29++) {
    acc = (acc + i29 * 13 + 581) % 100003;
  }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  try { if (acc % 29 === 15) { throw new Error('synthetic-32'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 56) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 181) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  arr.push(acc % 1000);
  buf += `q37:${acc % 97}`;
  acc = acc + 968 - (acc % 18);
  if (acc % 15 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  acc = acc + 898 - (acc % 36);
  buf += 'journey41-' + acc.toString();
  buf += 'dock42-' + acc.toString();
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 61) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  m01.set('k47', acc % 997);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  arr.push(acc % 1000);
  for (let i51 = 0; i51 < 5; i51++) {
    acc = (acc + i51 * 13 + 791) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8281) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 130) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  const ix1: number = buf.indexOf('p63');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = acc + 149 - (acc % 32);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 133) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const ix5: number = buf.indexOf('p63');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  buf += 'vendor9-' + acc.toString();
  try { if (acc % 29 === 11) { throw new Error('synthetic-10'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const ix11: number = buf.indexOf('p63');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 367) % 65521;
  const ix14: number = buf.indexOf('p63');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  for (let i15 = 0; i15 < 11; i15++) {
    acc = (acc + i15 * 13 + 495) % 100003;
  }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 25) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  if (acc % 7 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  if (acc % 24 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  buf += 'dispatch26-' + acc.toString();
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 159) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  buf += `q30:${acc % 97}`;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  buf += `q32:${acc % 97}`;
  const ix33: number = buf.indexOf('p63');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 186) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 12; i35++) {
    acc = (acc + i35 * 13 + 308) % 100003;
  }
  m01.set('k36', acc % 997);
  const ix37: number = buf.indexOf('p63');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (acc % 25 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += `q41:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-42'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-43'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'customs44-' + acc.toString();
  buf += 'settle45-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = acc + 635 - (acc % 24);
  buf += 'dispatch48-' + acc.toString();
  buf += 'rebate49-' + acc.toString();
  try { if (acc % 29 === 7) { throw new Error('synthetic-50'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8282) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  for (let i1 = 0; i1 < 8; i1++) {
    acc = (acc + i1 * 13 + 261) % 100003;
  }
  const rc2: Rec63 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix4: number = buf.indexOf('p63');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += 'settle7-' + acc.toString();
  try { if (acc % 29 === 17) { throw new Error('synthetic-8'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const rc9: Rec63 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  acc = acc + 854 - (acc % 17);
  const rc12: Rec63 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  try { if (acc % 29 === 10) { throw new Error('synthetic-13'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 23) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'batch18-' + acc.toString();
  arr.push(acc % 1000);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  try { if (acc % 29 === 23) { throw new Error('synthetic-21'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'policy22-' + acc.toString();
  try { if (acc % 29 === 7) { throw new Error('synthetic-23'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  buf += 'vendor26-' + acc.toString();
  const rc27: Rec63 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-29'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i30 = 0; i30 < 9; i30++) {
    acc = (acc + i30 * 13 + 261) % 100003;
  }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  const rc33: Rec63 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 83) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 7; i35++) {
    acc = (acc + i35 * 13 + 468) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const ix37: number = buf.indexOf('p63');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (acc % 21 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5831) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-40'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i41 = 0; i41 < 5; i41++) {
    acc = (acc + i41 * 13 + 807) % 100003;
  }
  buf += `q42:${acc % 97}`;
  m01.set('k43', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  acc = (acc * 31 + 8632) % 65521;
  buf += 'customs46-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += `q48:${acc % 97}`;
  if (acc % 5 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  if (acc % 29 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0063_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0063_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0063_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8283) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  buf += 'sku0-' + acc.toString();
  if (acc % 22 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-3'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  buf += 'journey7-' + acc.toString();
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  if (acc % 6 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  buf += 'depot12-' + acc.toString();
  try { if (acc % 29 === 14) { throw new Error('synthetic-13'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  try { if (acc % 29 === 10) { throw new Error('synthetic-15'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-16'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 25) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 59) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  try { if (acc % 29 === 23) { throw new Error('synthetic-19'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6992) % 65521;
  const ix21: number = buf.indexOf('p63');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  m01.set('k22', acc % 997);
  const rc23: Rec63 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  arr.push(acc % 1000);
  buf += 'rebate26-' + acc.toString();
  arr.push(acc % 1000);
  try { if (acc % 29 === 10) { throw new Error('synthetic-28'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const ix29: number = buf.indexOf('p63');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-31'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 38) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  for (let i33 = 0; i33 < 3; i33++) {
    acc = (acc + i33 * 13 + 418) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 52) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 162) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const rc37: Rec63 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  buf += 'audit39-' + acc.toString();
  m01.set('k40', acc % 997);
  acc = acc + 475 - (acc % 75);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  acc = acc + 512 - (acc % 19);
  acc = (acc * 31 + 2790) % 65521;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = (acc * 31 + 4705) % 65521;
  acc = acc + 786 - (acc % 75);
  m01.set('k48', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8284) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  m01.set('k0', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5194) % 65521;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const rc11: Rec63 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  try { if (acc % 29 === 16) { throw new Error('synthetic-12'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const rc13: Rec63 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  buf += `q15:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-16'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 45) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 156) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const ix19: number = buf.indexOf('p63');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3425) % 65521;
  const ix21: number = buf.indexOf('p63');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += `q29:${acc % 97}`;
  buf += `q30:${acc % 97}`;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 70) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const ix37: number = buf.indexOf('p63');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  if (acc % 21 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (acc % 21 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  buf += 'coupon42-' + acc.toString();
  buf += `q43:${acc % 97}`;
  acc = (acc * 31 + 7917) % 65521;
  acc = acc + 999 - (acc % 41);
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-47'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 111 - (acc % 57);
  try { if (acc % 29 === 4) { throw new Error('synthetic-49'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (acc % 5 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8285) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  for (let i0 = 0; i0 < 4; i0++) {
    acc = (acc + i0 * 13 + 342) % 100003;
  }
  const ix1: number = buf.indexOf('p63');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const rc2: Rec63 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const ix3: number = buf.indexOf('p63');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const ix6: number = buf.indexOf('p63');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 147) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  buf += 'region8-' + acc.toString();
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  buf += `q10:${acc % 97}`;
  buf += `q11:${acc % 97}`;
  buf += 'vendor12-' + acc.toString();
  if (acc % 9 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 6907) % 65521;
  if (acc % 28 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 131) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 11) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  for (let i21 = 0; i21 < 3; i21++) {
    acc = (acc + i21 * 13 + 985) % 100003;
  }
  buf += 'vendor22-' + acc.toString();
  const rc23: Rec63 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  try { if (acc % 29 === 20) { throw new Error('synthetic-24'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i25 = 0; i25 < 3; i25++) {
    acc = (acc + i25 * 13 + 846) % 100003;
  }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  for (let i27 = 0; i27 < 3; i27++) {
    acc = (acc + i27 * 13 + 804) % 100003;
  }
  const ix28: number = buf.indexOf('p63');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  buf += 'carrier30-' + acc.toString();
  acc = acc + 404 - (acc % 35);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  try { if (acc % 29 === 18) { throw new Error('synthetic-33'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 165) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k36', acc % 997);
  if (acc % 10 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  acc = acc + 602 - (acc % 41);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7564) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  buf += `q45:${acc % 97}`;
  try { if (acc % 29 === 18) { throw new Error('synthetic-46'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const ix49: number = buf.indexOf('p63');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 9776) % 65521;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8286) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 11) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-1'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += 'order3-' + acc.toString();
  acc = acc + 292 - (acc % 12);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = acc + 337 - (acc % 29);
  arr.push(acc % 1000);
  buf += `q11:${acc % 97}`;
  buf += `q12:${acc % 97}`;
  acc = acc + 392 - (acc % 48);
  const rc14: Rec63 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 58) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'routeplan18-' + acc.toString();
  const ix19: number = buf.indexOf('p63');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += 'settle20-' + acc.toString();
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5805) % 65521;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  arr.push(acc % 1000);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 131) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += 'order27-' + acc.toString();
  const ix28: number = buf.indexOf('p63');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  buf += 'ticket29-' + acc.toString();
  acc = (acc * 31 + 8673) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  if (acc % 12 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const rc33: Rec63 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 178) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  for (let i36 = 0; i36 < 8; i36++) {
    acc = (acc + i36 * 13 + 714) % 100003;
  }
  acc = acc + 970 - (acc % 70);
  try { if (acc % 29 === 14) { throw new Error('synthetic-38'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 65) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  acc = (acc * 31 + 5457) % 65521;
  acc = acc + 907 - (acc % 44);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i51 = 0; i51 < 4; i51++) {
    acc = (acc + i51 * 13 + 993) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8287) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  const rc3: Rec63 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += `q4:${acc % 97}`;
  arr.push(acc % 1000);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 83) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 128) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  buf += `q8:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 116) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 65) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  for (let i14 = 0; i14 < 7; i14++) {
    acc = (acc + i14 * 13 + 48) % 100003;
  }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 112) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  buf += `q20:${acc % 97}`;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 110) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += `q23:${acc % 97}`;
  arr.push(acc % 1000);
  const ix25: number = buf.indexOf('p63');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-26'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const rc27: Rec63 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  m01.set('k29', acc % 997);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'transit33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 80) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'routeplan35-' + acc.toString();
  acc = acc + 234 - (acc % 14);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 108) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-41'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const rc42: Rec63 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const rc43: Rec63 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const rc46: Rec63 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  if (acc % 28 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 5411) % 65521;
  arr.push(acc % 1000);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8288) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  acc = acc + 707 - (acc % 87);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const ix2: number = buf.indexOf('p63');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  acc = acc + 557 - (acc % 95);
  for (let i4 = 0; i4 < 9; i4++) {
    acc = (acc + i4 * 13 + 213) % 100003;
  }
  m01.set('k5', acc % 997);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const ix11: number = buf.indexOf('p63');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  buf += `q12:${acc % 97}`;
  buf += 'tariff13-' + acc.toString();
  if (acc % 30 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  buf += 'tariff16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 119) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  try { if (acc % 29 === 21) { throw new Error('synthetic-19'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q20:${acc % 97}`;
  acc = (acc * 31 + 9172) % 65521;
  arr.push(acc % 1000);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  buf += 'ledger24-' + acc.toString();
  m01.set('k25', acc % 997);
  try { if (acc % 29 === 3) { throw new Error('synthetic-26'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i27 = 0; i27 < 11; i27++) {
    acc = (acc + i27 * 13 + 734) % 100003;
  }
  buf += 'waybill28-' + acc.toString();
  if (acc % 24 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  acc = (acc * 31 + 8851) % 65521;
  const rc32: Rec63 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 32) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = acc + 660 - (acc % 78);
  const ix37: number = buf.indexOf('p63');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (acc % 9 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 92) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = acc + 58 - (acc % 42);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  if (acc % 10 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  m01.set('k47', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const ix51: number = buf.indexOf('p63');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8289) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  m01.set('k0', acc % 997);
  acc = (acc * 31 + 1052) % 65521;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  if (acc % 8 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  acc = acc + 853 - (acc % 37);
  acc = (acc * 31 + 2437) % 65521;
  buf += 'order8-' + acc.toString();
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-11'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const ix12: number = buf.indexOf('p63');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const rc13: Rec63 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 62) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 142) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6022) % 65521;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  for (let i21 = 0; i21 < 9; i21++) {
    acc = (acc + i21 * 13 + 438) % 100003;
  }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  buf += `q23:${acc % 97}`;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 76) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  acc = acc + 508 - (acc % 27);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  acc = (acc * 31 + 1076) % 65521;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  if (acc % 5 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 50) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = acc + 48 - (acc % 8);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 75) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 20) { throw new Error('synthetic-35'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  acc = (acc * 31 + 2773) % 65521;
  arr.push(acc % 1000);
  const rc40: Rec63 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const rc42: Rec63 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  const ix45: number = buf.indexOf('p63');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 106) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const rc49: Rec63 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8290) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  try { if (acc % 29 === 14) { throw new Error('synthetic-0'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 19 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-2'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += 'dock4-' + acc.toString();
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 26) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  const ix11: number = buf.indexOf('p63');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  buf += `q12:${acc % 97}`;
  const rc13: Rec63 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  buf += 'audit14-' + acc.toString();
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 197) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  buf += `q19:${acc % 97}`;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 146) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const rc23: Rec63 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const ix24: number = buf.indexOf('p63');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += 'routeplan27-' + acc.toString();
  for (let i28 = 0; i28 < 9; i28++) {
    acc = (acc + i28 * 13 + 478) % 100003;
  }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  if (acc % 5 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  buf += 'quota31-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 55) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 11 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1029) % 65521;
  const rc37: Rec63 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  acc = acc + 568 - (acc % 52);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 131) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 11) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const rc42: Rec63 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  m01.set('k43', acc % 997);
  acc = acc + 130 - (acc % 81);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = (acc * 31 + 3107) % 65521;
  if (acc % 29 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = acc + 924 - (acc % 36);
  const rc49: Rec63 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  arr.push(acc % 1000);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8291) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  const rc0: Rec63 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  m01.set('k2', acc % 997);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const ix4: number = buf.indexOf('p63');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 8207) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = (acc * 31 + 6246) % 65521;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  buf += `q11:${acc % 97}`;
  arr.push(acc % 1000);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  buf += `q14:${acc % 97}`;
  if (acc % 25 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 13) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  acc = acc + 354 - (acc % 88);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 39) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const rc25: Rec63 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-28'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  m01.set('k31', acc % 997);
  const ix32: number = buf.indexOf('p63');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const ix33: number = buf.indexOf('p63');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 129) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 28) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  try { if (acc % 29 === 20) { throw new Error('synthetic-38'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i39 = 0; i39 < 6; i39++) {
    acc = (acc + i39 * 13 + 981) % 100003;
  }
  for (let i40 = 0; i40 < 5; i40++) {
    acc = (acc + i40 * 13 + 451) % 100003;
  }
  acc = (acc * 31 + 7610) % 65521;
  if (acc % 19 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const ix44: number = buf.indexOf('p63');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  if (acc % 20 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-49'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i50 = 0; i50 < 8; i50++) {
    acc = (acc + i50 * 13 + 995) % 100003;
  }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8292) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  acc = (acc * 31 + 764) % 65521;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 60) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  for (let i2 = 0; i2 < 8; i2++) {
    acc = (acc + i2 * 13 + 874) % 100003;
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 34) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  buf += `q4:${acc % 97}`;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-6'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  acc = acc + 425 - (acc % 64);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  buf += `q10:${acc % 97}`;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  acc = (acc * 31 + 8399) % 65521;
  arr.push(acc % 1000);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  for (let i15 = 0; i15 < 5; i15++) {
    acc = (acc + i15 * 13 + 117) % 100003;
  }
  buf += 'depot16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 189) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 6; i18++) {
    acc = (acc + i18 * 13 + 867) % 100003;
  }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  if (acc % 29 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  if (acc % 14 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const ix22: number = buf.indexOf('p63');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  buf += `q23:${acc % 97}`;
  try { if (acc % 29 === 13) { throw new Error('synthetic-24'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 208 - (acc % 80);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = acc + 905 - (acc % 65);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = acc + 151 - (acc % 8);
  buf += 'depot31-' + acc.toString();
  buf += 'balance32-' + acc.toString();
  acc = (acc * 31 + 1912) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 20) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 31) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const ix36: number = buf.indexOf('p63');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  acc = acc + 608 - (acc % 88);
  m01.set('k38', acc % 997);
  const ix39: number = buf.indexOf('p63');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += 'portal40-' + acc.toString();
  const ix41: number = buf.indexOf('p63');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const ix42: number = buf.indexOf('p63');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  acc = acc + 231 - (acc % 93);
  if (acc % 30 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = acc + 607 - (acc % 90);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  acc = acc + 715 - (acc % 71);
  const rc50: Rec63 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const ix51: number = buf.indexOf('p63');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0063_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0063_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0063_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8293) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  buf += `q0:${acc % 97}`;
  acc = (acc * 31 + 7565) % 65521;
  const ix2: number = buf.indexOf('p63');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  buf += 'vendor3-' + acc.toString();
  buf += 'routeplan4-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 124) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  buf += `q9:${acc % 97}`;
  const rc10: Rec63 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  buf += `q11:${acc % 97}`;
  buf += 'refund12-' + acc.toString();
  for (let i13 = 0; i13 < 12; i13++) {
    acc = (acc + i13 * 13 + 182) % 100003;
  }
  buf += `q14:${acc % 97}`;
  acc = acc + 786 - (acc % 11);
  try { if (acc % 29 === 3) { throw new Error('synthetic-16'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 143) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 567 - (acc % 40);
  for (let i19 = 0; i19 < 11; i19++) {
    acc = (acc + i19 * 13 + 566) % 100003;
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-21'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k22', acc % 997);
  arr.push(acc % 1000);
  buf += `q24:${acc % 97}`;
  buf += 'rebate25-' + acc.toString();
  arr.push(acc % 1000);
  for (let i27 = 0; i27 < 12; i27++) {
    acc = (acc + i27 * 13 + 996) % 100003;
  }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  m01.set('k29', acc % 997);
  acc = acc + 974 - (acc % 17);
  buf += 'stocktake31-' + acc.toString();
  acc = acc + 376 - (acc % 43);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 118) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 153) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 156) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  buf += `q38:${acc % 97}`;
  arr.push(acc % 1000);
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  if (acc % 6 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 910) % 65521;
  if (acc % 6 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const ix46: number = buf.indexOf('p63');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  for (let i48 = 0; i48 < 7; i48++) {
    acc = (acc + i48 * 13 + 354) % 100003;
  }
  if (acc % 6 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 70) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8294) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  if (acc % 14 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  for (let i1 = 0; i1 < 4; i1++) {
    acc = (acc + i1 * 13 + 630) % 100003;
  }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 137) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = (acc * 31 + 5320) % 65521;
  const ix5: number = buf.indexOf('p63');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 70) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  acc = acc + 440 - (acc % 26);
  acc = (acc * 31 + 8197) % 65521;
  arr.push(acc % 1000);
  buf += `q11:${acc % 97}`;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  m01.set('k13', acc % 997);
  if (acc % 7 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const rc15: Rec63 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const ix16: number = buf.indexOf('p63');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 50) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 124) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  m01.set('k19', acc % 997);
  buf += 'warehouse20-' + acc.toString();
  m01.set('k21', acc % 997);
  try { if (acc % 29 === 22) { throw new Error('synthetic-22'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4951) % 65521;
  if (acc % 15 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const rc28: Rec63 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  arr.push(acc % 1000);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 110) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 731 - (acc % 93);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1451) % 65521;
  acc = (acc * 31 + 3177) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 115) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix43: number = buf.indexOf('p63');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  if (acc % 15 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (acc % 10 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  m01.set('k47', acc % 997);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 109) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  if (acc % 13 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  buf += 'depot51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0063_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 8295) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit63 = new Unit63(acc);
  try { if (acc % 29 === 11) { throw new Error('synthetic-0'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const rc1: Rec63 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  for (let i2 = 0; i2 < 9; i2++) {
    acc = (acc + i2 * 13 + 781) % 100003;
  }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  try { if (acc % 29 === 18) { throw new Error('synthetic-4'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q5:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = acc + 833 - (acc % 49);
  if (acc % 25 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (acc % 15 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-11'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const rc13: Rec63 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  buf += 'depot14-' + acc.toString();
  for (let i15 = 0; i15 < 11; i15++) {
    acc = (acc + i15 * 13 + 74) % 100003;
  }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 186) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (acc % 18 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  if (acc % 14 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  m01.set('k22', acc % 997);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-24'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  m01.set('k26', acc % 997);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  for (let i31 = 0; i31 < 5; i31++) {
    acc = (acc + i31 * 13 + 354) % 100003;
  }
  const ix32: number = buf.indexOf('p63');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 166) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 6657) % 65521;
  acc = (acc * 31 + 3425) % 65521;
  arr.push(acc % 1000);
  buf += 'refund38-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const rc40: Rec63 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  acc = acc + 321 - (acc % 69);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  acc = acc + 471 - (acc % 60);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 79) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 136) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  acc = (acc * 31 + 1171) % 65521;
  const rc48: Rec63 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 32) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0063(): BizFn[] {
  return [biz_0063_00, biz_0063_01, biz_0063_02, biz_0063_03, biz_0063_04, biz_0063_05, biz_0063_06, biz_0063_07, biz_0063_08, biz_0063_09, biz_0063_10, biz_0063_11, biz_0063_12, biz_0063_13, biz_0063_14, biz_0063_15, biz_0063_16, biz_0063_17, biz_0063_18, biz_0063_19, biz_0063_20, biz_0063_21, biz_0063_22, biz_0063_23, biz_0063_24, biz_0063_25, biz_0063_26, biz_0063_27, biz_0063_28, biz_0063_29, biz_0063_30, biz_0063_31, biz_0063_32, biz_0063_33, biz_0063_34, biz_0063_35, biz_0063_36, biz_0063_37, biz_0063_38, biz_0063_39, biz_0063_40, biz_0063_41, biz_0063_42];
}

export function rega_0063(): ABizFn[] {
  return [biz_0063_09a, biz_0063_19a, biz_0063_29a, biz_0063_39a];
}
