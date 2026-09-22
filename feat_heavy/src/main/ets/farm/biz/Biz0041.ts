// Biz0041.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec41 { id: number; tag: string; score: number; }

class Unit41 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0041_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5371) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  buf += 'crate0-' + acc.toString();
  buf += 'pallet1-' + acc.toString();
  m01.set('k2', acc % 997);
  acc = (acc * 31 + 7714) % 65521;
  acc = acc + 493 - (acc % 24);
  m01.set('k5', acc % 997);
  try { if (acc % 29 === 19) { throw new Error('synthetic-6'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const ix9: number = buf.indexOf('p41');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const ix10: number = buf.indexOf('p41');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 70) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  acc = acc + 737 - (acc % 26);
  buf += 'bay14-' + acc.toString();
  if (acc % 9 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  if (acc % 30 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 180) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 875 - (acc % 43);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (acc % 22 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  acc = acc + 654 - (acc % 78);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  for (let i24 = 0; i24 < 4; i24++) {
    acc = (acc + i24 * 13 + 669) % 100003;
  }
  buf += 'freight25-' + acc.toString();
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  for (let i28 = 0; i28 < 4; i28++) {
    acc = (acc + i28 * 13 + 747) % 100003;
  }
  buf += `q29:${acc % 97}`;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-31'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  if (acc % 28 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 58) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 18 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  m01.set('k37', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  acc = (acc * 31 + 6149) % 65521;
  buf += `q40:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const ix42: number = buf.indexOf('p41');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  if (acc % 5 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  buf += 'journey44-' + acc.toString();
  const rc45: Rec41 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  buf += 'rebate46-' + acc.toString();
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  buf += 'balance48-' + acc.toString();
  acc = acc + 148 - (acc % 56);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5372) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  m01.set('k0', acc % 997);
  m01.set('k1', acc % 997);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  m01.set('k6', acc % 997);
  acc = (acc * 31 + 8484) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  if (acc % 27 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const ix13: number = buf.indexOf('p41');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8502) % 65521;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 59) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  try { if (acc % 29 === 9) { throw new Error('synthetic-20'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const rc21: Rec41 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  buf += `q22:${acc % 97}`;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const rc25: Rec41 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 84) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  if (acc % 23 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8525) % 65521;
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 43) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p41');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 25) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += 'coupon40-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  arr.push(acc % 1000);
  for (let i43 = 0; i43 < 6; i43++) {
    acc = (acc + i43 * 13 + 818) % 100003;
  }
  for (let i44 = 0; i44 < 5; i44++) {
    acc = (acc + i44 * 13 + 181) % 100003;
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 124) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5373) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  for (let i0 = 0; i0 < 10; i0++) {
    acc = (acc + i0 * 13 + 682) % 100003;
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  arr.push(acc % 1000);
  try { if (acc % 29 === 8) { throw new Error('synthetic-7'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  m01.set('k12', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  buf += 'depot16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 100) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 13 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 56) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  if (acc % 28 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const rc23: Rec41 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  m01.set('k24', acc % 997);
  m01.set('k25', acc % 997);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  m01.set('k27', acc % 997);
  buf += 'tariff28-' + acc.toString();
  acc = (acc * 31 + 3750) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  if (acc % 6 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  try { if (acc % 29 === 17) { throw new Error('synthetic-33'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 166) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-35'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const rc37: Rec41 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  m01.set('k38', acc % 997);
  acc = (acc * 31 + 117) % 65521;
  buf += `q40:${acc % 97}`;
  buf += 'coupon41-' + acc.toString();
  acc = acc + 782 - (acc % 22);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  acc = (acc * 31 + 5966) % 65521;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const ix48: number = buf.indexOf('p41');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  acc = acc + 838 - (acc % 62);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5374) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 89) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  buf += `q1:${acc % 97}`;
  if (acc % 23 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = acc + 650 - (acc % 72);
  const rc6: Rec41 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  acc = (acc * 31 + 8527) % 65521;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const rc9: Rec41 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  buf += 'settle11-' + acc.toString();
  try { if (acc % 29 === 5) { throw new Error('synthetic-12'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k13', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  for (let i15 = 0; i15 < 12; i15++) {
    acc = (acc + i15 * 13 + 520) % 100003;
  }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 192) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const ix19: number = buf.indexOf('p41');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const rc20: Rec41 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  acc = (acc * 31 + 6219) % 65521;
  const ix25: number = buf.indexOf('p41');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const rc26: Rec41 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  const ix27: number = buf.indexOf('p41');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const rc28: Rec41 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  buf += 'customs29-' + acc.toString();
  m01.set('k30', acc % 997);
  acc = (acc * 31 + 733) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 166) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 585) % 65521;
  const rc37: Rec41 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  buf += 'pallet38-' + acc.toString();
  if (acc % 10 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  m01.set('k41', acc % 997);
  buf += `q42:${acc % 97}`;
  arr.push(acc % 1000);
  m01.set('k44', acc % 997);
  buf += 'audit45-' + acc.toString();
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  acc = (acc * 31 + 2180) % 65521;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const ix51: number = buf.indexOf('p41');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5375) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const ix1: number = buf.indexOf('p41');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-2'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7596) % 65521;
  acc = acc + 702 - (acc % 70);
  buf += 'waybill5-' + acc.toString();
  buf += `q6:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (acc % 28 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  acc = acc + 109 - (acc % 13);
  const ix10: number = buf.indexOf('p41');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 134) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const ix13: number = buf.indexOf('p41');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const rc14: Rec41 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const ix15: number = buf.indexOf('p41');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 131) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 8324) % 65521;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += `q21:${acc % 97}`;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  buf += 'region24-' + acc.toString();
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const rc27: Rec41 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  acc = acc + 570 - (acc % 24);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1067) % 65521;
  buf += `q31:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const ix33: number = buf.indexOf('p41');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 126) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-35'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 118) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 15) { throw new Error('synthetic-39'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  m01.set('k41', acc % 997);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 12) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = (acc * 31 + 900) % 65521;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 67) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += 'stocktake50-' + acc.toString();
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5376) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  acc = acc + 921 - (acc % 33);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 97) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  acc = (acc * 31 + 1202) % 65521;
  arr.push(acc % 1000);
  const ix5: number = buf.indexOf('p41');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 126) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  arr.push(acc % 1000);
  for (let i9 = 0; i9 < 10; i9++) {
    acc = (acc + i9 * 13 + 94) % 100003;
  }
  for (let i10 = 0; i10 < 12; i10++) {
    acc = (acc + i10 * 13 + 937) % 100003;
  }
  for (let i11 = 0; i11 < 10; i11++) {
    acc = (acc + i11 * 13 + 184) % 100003;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-12'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  for (let i14 = 0; i14 < 12; i14++) {
    acc = (acc + i14 * 13 + 935) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (acc % 28 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 60) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  acc = acc + 301 - (acc % 41);
  acc = (acc * 31 + 5249) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-23'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const rc24: Rec41 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  acc = acc + 227 - (acc % 75);
  const rc27: Rec41 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 35) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  m01.set('k30', acc % 997);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const ix32: number = buf.indexOf('p41');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 96) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 3) { throw new Error('synthetic-35'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 83) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  m01.set('k37', acc % 997);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += 'payout41-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  try { if (acc % 29 === 13) { throw new Error('synthetic-43'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q44:${acc % 97}`;
  if (acc % 13 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  acc = acc + 339 - (acc % 10);
  buf += `q48:${acc % 97}`;
  if (acc % 11 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  buf += 'settle50-' + acc.toString();
  for (let i51 = 0; i51 < 7; i51++) {
    acc = (acc + i51 * 13 + 809) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5377) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  arr.push(acc % 1000);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 129) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  try { if (acc % 29 === 2) { throw new Error('synthetic-5'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-6'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  acc = (acc * 31 + 3403) % 65521;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  for (let i11 = 0; i11 < 9; i11++) {
    acc = (acc + i11 * 13 + 33) % 100003;
  }
  m01.set('k12', acc % 997);
  acc = (acc * 31 + 9356) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 151) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p41');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  for (let i19 = 0; i19 < 11; i19++) {
    acc = (acc + i19 * 13 + 884) % 100003;
  }
  m01.set('k20', acc % 997);
  const ix21: number = buf.indexOf('p41');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  if (acc % 8 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  acc = acc + 417 - (acc % 34);
  if (acc % 28 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  arr.push(acc % 1000);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (acc % 27 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 113) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 4914) % 65521;
  const ix36: number = buf.indexOf('p41');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += `q38:${acc % 97}`;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 18) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = (acc * 31 + 9066) % 65521;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (acc % 10 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  acc = (acc * 31 + 2198) % 65521;
  if (acc % 17 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 103) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5378) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  try { if (acc % 29 === 22) { throw new Error('synthetic-0'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = acc + 859 - (acc % 82);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  for (let i5 = 0; i5 < 5; i5++) {
    acc = (acc + i5 * 13 + 36) % 100003;
  }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-7'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  for (let i9 = 0; i9 < 6; i9++) {
    acc = (acc + i9 * 13 + 119) % 100003;
  }
  m01.set('k10', acc % 997);
  acc = acc + 691 - (acc % 39);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  acc = (acc * 31 + 1883) % 65521;
  acc = (acc * 31 + 4012) % 65521;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 196) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (acc % 8 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  const rc23: Rec41 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  for (let i27 = 0; i27 < 8; i27++) {
    acc = (acc + i27 * 13 + 334) % 100003;
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  for (let i29 = 0; i29 < 5; i29++) {
    acc = (acc + i29 * 13 + 516) % 100003;
  }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 140) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  if (acc % 24 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 69) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const rc36: Rec41 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  acc = acc + 682 - (acc % 84);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  acc = acc + 122 - (acc % 59);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  try { if (acc % 29 === 15) { throw new Error('synthetic-45'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = (acc * 31 + 3773) % 65521;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const ix49: number = buf.indexOf('p41');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  m01.set('k50', acc % 997);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5379) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  const rc0: Rec41 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const ix1: number = buf.indexOf('p41');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  acc = acc + 920 - (acc % 24);
  buf += `q3:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2553) % 65521;
  arr.push(acc % 1000);
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  acc = acc + 712 - (acc % 87);
  arr.push(acc % 1000);
  const rc15: Rec41 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 109) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 70) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 9; i18++) {
    acc = (acc + i18 * 13 + 214) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += 'stocktake20-' + acc.toString();
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  m01.set('k22', acc % 997);
  buf += 'sku23-' + acc.toString();
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5195) % 65521;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  try { if (acc % 29 === 22) { throw new Error('synthetic-31'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 2902) % 65521;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 186) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = (acc * 31 + 9086) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const rc38: Rec41 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const rc39: Rec41 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  try { if (acc % 29 === 7) { throw new Error('synthetic-40'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  buf += 'payout42-' + acc.toString();
  const rc43: Rec41 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += `q45:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const ix49: number = buf.indexOf('p41');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7233) % 65521;
  if (acc % 8 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5380) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  acc = (acc * 31 + 4477) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  if (acc % 20 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  acc = acc + 96 - (acc % 78);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  buf += 'rebate10-' + acc.toString();
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 129) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  m01.set('k12', acc % 997);
  const rc13: Rec41 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  acc = acc + 596 - (acc % 82);
  if (acc % 18 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  if (acc % 8 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 86) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  for (let i19 = 0; i19 < 6; i19++) {
    acc = (acc + i19 * 13 + 119) % 100003;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-20'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k21', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const ix23: number = buf.indexOf('p41');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  buf += `q24:${acc % 97}`;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  buf += `q26:${acc % 97}`;
  const rc27: Rec41 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const rc29: Rec41 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const ix30: number = buf.indexOf('p41');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  if (acc % 9 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  if (acc % 14 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 160) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'freight35-' + acc.toString();
  arr.push(acc % 1000);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  buf += 'bay40-' + acc.toString();
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  acc = (acc * 31 + 1931) % 65521;
  m01.set('k43', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  if (acc % 27 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const rc47: Rec41 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 83) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  m01.set('k49', acc % 997);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0041_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0041_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0041_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5381) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  buf += `q0:${acc % 97}`;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 116) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = (acc * 31 + 1312) % 65521;
  acc = acc + 932 - (acc % 56);
  arr.push(acc % 1000);
  try { if (acc % 29 === 6) { throw new Error('synthetic-11'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 55) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  m01.set('k14', acc % 997);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 127) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 823 - (acc % 84);
  arr.push(acc % 1000);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  for (let i21 = 0; i21 < 4; i21++) {
    acc = (acc + i21 * 13 + 794) % 100003;
  }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  acc = acc + 801 - (acc % 50);
  m01.set('k24', acc % 997);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const rc26: Rec41 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 65) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  for (let i30 = 0; i30 < 3; i30++) {
    acc = (acc + i30 * 13 + 823) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1116) % 65521;
  if (acc % 27 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 152) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  const rc36: Rec41 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  for (let i37 = 0; i37 < 8; i37++) {
    acc = (acc + i37 * 13 + 327) % 100003;
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 21) { throw new Error('synthetic-39'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  if (acc % 13 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  m01.set('k42', acc % 997);
  try { if (acc % 29 === 23) { throw new Error('synthetic-43'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const rc48: Rec41 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 71) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5382) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  if (acc % 22 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  acc = acc + 966 - (acc % 11);
  for (let i2 = 0; i2 < 4; i2++) {
    acc = (acc + i2 * 13 + 568) % 100003;
  }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += 'refund4-' + acc.toString();
  const ix5: number = buf.indexOf('p41');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  for (let i8 = 0; i8 < 5; i8++) {
    acc = (acc + i8 * 13 + 93) % 100003;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 161) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const ix10: number = buf.indexOf('p41');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const ix12: number = buf.indexOf('p41');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  m01.set('k13', acc % 997);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  if (acc % 8 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 80) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p41');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  buf += 'dock19-' + acc.toString();
  acc = acc + 785 - (acc % 18);
  acc = (acc * 31 + 6459) % 65521;
  for (let i22 = 0; i22 < 4; i22++) {
    acc = (acc + i22 * 13 + 930) % 100003;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-23'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const rc24: Rec41 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  m01.set('k25', acc % 997);
  try { if (acc % 29 === 16) { throw new Error('synthetic-26'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q27:${acc % 97}`;
  if (acc % 11 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  buf += `q31:${acc % 97}`;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 161) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 24 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  for (let i36 = 0; i36 < 8; i36++) {
    acc = (acc + i36 * 13 + 707) % 100003;
  }
  buf += 'sku37-' + acc.toString();
  m01.set('k38', acc % 997);
  const rc39: Rec41 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  m01.set('k40', acc % 997);
  const rc41: Rec41 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  m01.set('k42', acc % 997);
  buf += 'waybill43-' + acc.toString();
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 174) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const rc46: Rec41 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  try { if (acc % 29 === 17) { throw new Error('synthetic-47'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 129) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5383) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  try { if (acc % 29 === 19) { throw new Error('synthetic-0'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += `q3:${acc % 97}`;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 151) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += `q5:${acc % 97}`;
  buf += 'audit6-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  buf += `q8:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-10'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const ix11: number = buf.indexOf('p41');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const ix14: number = buf.indexOf('p41');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  acc = acc + 274 - (acc % 52);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 47) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'client18-' + acc.toString();
  const ix19: number = buf.indexOf('p41');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += 'depot20-' + acc.toString();
  m01.set('k21', acc % 997);
  const ix22: number = buf.indexOf('p41');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 29) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  buf += `q29:${acc % 97}`;
  if (acc % 31 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 15) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  try { if (acc % 29 === 22) { throw new Error('synthetic-32'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 113) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  m01.set('k40', acc % 997);
  buf += 'settle41-' + acc.toString();
  acc = acc + 925 - (acc % 27);
  arr.push(acc % 1000);
  buf += `q44:${acc % 97}`;
  if (acc % 26 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  const ix47: number = buf.indexOf('p41');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-48'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k49', acc % 997);
  const rc50: Rec41 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  acc = acc + 366 - (acc % 82);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5384) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  const ix0: number = buf.indexOf('p41');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  buf += `q1:${acc % 97}`;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  if (acc % 18 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8699) % 65521;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const ix6: number = buf.indexOf('p41');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  for (let i9 = 0; i9 < 3; i9++) {
    acc = (acc + i9 * 13 + 857) % 100003;
  }
  acc = acc + 761 - (acc % 54);
  buf += `q11:${acc % 97}`;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const ix13: number = buf.indexOf('p41');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 48) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q19:${acc % 97}`;
  const ix20: number = buf.indexOf('p41');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const rc23: Rec41 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const ix24: number = buf.indexOf('p41');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const ix26: number = buf.indexOf('p41');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  if (acc % 20 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  buf += 'warehouse31-' + acc.toString();
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 163) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 138) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 1600) % 65521;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  buf += 'payout38-' + acc.toString();
  const ix39: number = buf.indexOf('p41');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  for (let i40 = 0; i40 < 4; i40++) {
    acc = (acc + i40 * 13 + 742) % 100003;
  }
  arr.push(acc % 1000);
  buf += `q42:${acc % 97}`;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  try { if (acc % 29 === 10) { throw new Error('synthetic-44'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 106) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  for (let i49 = 0; i49 < 6; i49++) {
    acc = (acc + i49 * 13 + 641) % 100003;
  }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += 'quota51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5385) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 79) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 103) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = (acc * 31 + 1333) % 65521;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  buf += `q6:${acc % 97}`;
  arr.push(acc % 1000);
  if (acc % 21 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  for (let i9 = 0; i9 < 4; i9++) {
    acc = (acc + i9 * 13 + 549) % 100003;
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 7223) % 65521;
  const ix12: number = buf.indexOf('p41');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 50) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  m01.set('k15', acc % 997);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 123) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 183) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 237 - (acc % 65);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  try { if (acc % 29 === 8) { throw new Error('synthetic-21'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q22:${acc % 97}`;
  buf += 'tariff23-' + acc.toString();
  const rc24: Rec41 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  if (acc % 30 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  buf += `q28:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  try { if (acc % 29 === 15) { throw new Error('synthetic-33'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 103) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  buf += 'pickup36-' + acc.toString();
  try { if (acc % 29 === 9) { throw new Error('synthetic-37'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const rc38: Rec41 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  m01.set('k40', acc % 997);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  for (let i42 = 0; i42 < 5; i42++) {
    acc = (acc + i42 * 13 + 760) % 100003;
  }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 41) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  acc = (acc * 31 + 6619) % 65521;
  buf += `q48:${acc % 97}`;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 44) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const rc51: Rec41 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5386) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  m01.set('k1', acc % 997);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = (acc * 31 + 8728) % 65521;
  m01.set('k6', acc % 997);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  arr.push(acc % 1000);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const ix14: number = buf.indexOf('p41');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const ix15: number = buf.indexOf('p41');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  if (acc % 22 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 162) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 142) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  const rc20: Rec41 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = (acc * 31 + 1043) % 65521;
  const ix22: number = buf.indexOf('p41');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6680) % 65521;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 175) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  m01.set('k26', acc % 997);
  for (let i27 = 0; i27 < 3; i27++) {
    acc = (acc + i27 * 13 + 281) % 100003;
  }
  acc = acc + 989 - (acc % 14);
  acc = (acc * 31 + 7899) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-30'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3700) % 65521;
  const ix32: number = buf.indexOf('p41');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 171) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec41 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  buf += `q37:${acc % 97}`;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  buf += 'dock42-' + acc.toString();
  acc = acc + 739 - (acc % 35);
  buf += `q44:${acc % 97}`;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  if (acc % 31 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  acc = (acc * 31 + 4943) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5387) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  for (let i0 = 0; i0 < 5; i0++) {
    acc = (acc + i0 * 13 + 205) % 100003;
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  buf += 'order4-' + acc.toString();
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  acc = acc + 700 - (acc % 8);
  buf += 'shelf9-' + acc.toString();
  arr.push(acc % 1000);
  const rc11: Rec41 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const rc13: Rec41 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const rc14: Rec41 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const rc15: Rec41 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 124) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 11; i18++) {
    acc = (acc + i18 * 13 + 371) % 100003;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-19'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6731) % 65521;
  if (acc % 28 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  for (let i22 = 0; i22 < 7; i22++) {
    acc = (acc + i22 * 13 + 383) % 100003;
  }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 189) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  buf += `q25:${acc % 97}`;
  arr.push(acc % 1000);
  acc = acc + 562 - (acc % 19);
  m01.set('k28', acc % 997);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  arr.push(acc % 1000);
  acc = (acc * 31 + 7196) % 65521;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 36) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 163) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  if (acc % 29 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-41'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  for (let i44 = 0; i44 < 4; i44++) {
    acc = (acc + i44 * 13 + 810) % 100003;
  }
  const ix45: number = buf.indexOf('p41');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += `q47:${acc % 97}`;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5388) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 92) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 108) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  buf += 'invoice4-' + acc.toString();
  const ix5: number = buf.indexOf('p41');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  arr.push(acc % 1000);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const rc12: Rec41 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  acc = (acc * 31 + 3670) % 65521;
  buf += `q14:${acc % 97}`;
  try { if (acc % 29 === 21) { throw new Error('synthetic-15'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 21 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 78) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 7671) % 65521;
  buf += 'pickup19-' + acc.toString();
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  acc = acc + 950 - (acc % 22);
  try { if (acc % 29 === 9) { throw new Error('synthetic-22'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-23'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += 'stocktake27-' + acc.toString();
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  m01.set('k29', acc % 997);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  for (let i31 = 0; i31 < 10; i31++) {
    acc = (acc + i31 * 13 + 18) % 100003;
  }
  buf += `q32:${acc % 97}`;
  const rc33: Rec41 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 34) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = (acc * 31 + 4822) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  for (let i38 = 0; i38 < 8; i38++) {
    acc = (acc + i38 * 13 + 674) % 100003;
  }
  for (let i39 = 0; i39 < 9; i39++) {
    acc = (acc + i39 * 13 + 619) % 100003;
  }
  const rc40: Rec41 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += `q43:${acc % 97}`;
  for (let i44 = 0; i44 < 10; i44++) {
    acc = (acc + i44 * 13 + 803) % 100003;
  }
  const rc45: Rec41 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 30) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 97) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 195) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5389) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  const ix1: number = buf.indexOf('p41');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const ix2: number = buf.indexOf('p41');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const rc3: Rec41 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  m01.set('k4', acc % 997);
  const rc5: Rec41 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  m01.set('k6', acc % 997);
  acc = acc + 445 - (acc % 96);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const rc9: Rec41 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const ix10: number = buf.indexOf('p41');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  for (let i11 = 0; i11 < 11; i11++) {
    acc = (acc + i11 * 13 + 890) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  try { if (acc % 29 === 15) { throw new Error('synthetic-13'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 304 - (acc % 13);
  const rc15: Rec41 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  for (let i16 = 0; i16 < 4; i16++) {
    acc = (acc + i16 * 13 + 183) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 81) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  for (let i19 = 0; i19 < 9; i19++) {
    acc = (acc + i19 * 13 + 913) % 100003;
  }
  arr.push(acc % 1000);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 60) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const ix23: number = buf.indexOf('p41');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-24'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 5686) % 65521;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-27'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k28', acc % 997);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  m01.set('k30', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (acc % 26 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 36) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 16) { throw new Error('synthetic-36'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  m01.set('k39', acc % 997);
  buf += 'routeplan40-' + acc.toString();
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  try { if (acc % 29 === 4) { throw new Error('synthetic-42'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1093) % 65521;
  buf += `q44:${acc % 97}`;
  acc = acc + 324 - (acc % 52);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  arr.push(acc % 1000);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  m01.set('k49', acc % 997);
  const ix50: number = buf.indexOf('p41');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5390) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  acc = acc + 119 - (acc % 85);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  acc = acc + 267 - (acc % 95);
  acc = (acc * 31 + 3140) % 65521;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const rc6: Rec41 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const ix7: number = buf.indexOf('p41');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  if (acc % 20 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8356) % 65521;
  buf += `q10:${acc % 97}`;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  for (let i14 = 0; i14 < 7; i14++) {
    acc = (acc + i14 * 13 + 266) % 100003;
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const ix16: number = buf.indexOf('p41');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 191) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p41');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += `q20:${acc % 97}`;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  acc = (acc * 31 + 8722) % 65521;
  const rc23: Rec41 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  acc = acc + 875 - (acc % 68);
  acc = (acc * 31 + 1344) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  buf += `q27:${acc % 97}`;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  buf += 'stocktake30-' + acc.toString();
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const rc32: Rec41 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  for (let i33 = 0; i33 < 4; i33++) {
    acc = (acc + i33 * 13 + 661) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 74) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i36 = 0; i36 < 6; i36++) {
    acc = (acc + i36 * 13 + 980) % 100003;
  }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  try { if (acc % 29 === 10) { throw new Error('synthetic-38'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q39:${acc % 97}`;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 7621) % 65521;
  buf += `q44:${acc % 97}`;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  try { if (acc % 29 === 16) { throw new Error('synthetic-46'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-48'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 5397) % 65521;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0041_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0041_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0041_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5391) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  m01.set('k0', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  if (acc % 13 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  m01.set('k4', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  if (acc % 18 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  for (let i9 = 0; i9 < 11; i9++) {
    acc = (acc + i9 * 13 + 565) % 100003;
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  m01.set('k12', acc % 997);
  acc = (acc * 31 + 3392) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const rc15: Rec41 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  buf += 'payout16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 104) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  for (let i19 = 0; i19 < 12; i19++) {
    acc = (acc + i19 * 13 + 669) % 100003;
  }
  acc = (acc * 31 + 9501) % 65521;
  acc = acc + 236 - (acc % 19);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  acc = acc + 871 - (acc % 51);
  if (acc % 22 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  acc = acc + 980 - (acc % 83);
  for (let i26 = 0; i26 < 12; i26++) {
    acc = (acc + i26 * 13 + 978) % 100003;
  }
  const ix27: number = buf.indexOf('p41');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 178) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  buf += `q29:${acc % 97}`;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  arr.push(acc % 1000);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 190) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 120) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  acc = (acc * 31 + 8788) % 65521;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  for (let i39 = 0; i39 < 11; i39++) {
    acc = (acc + i39 * 13 + 721) % 100003;
  }
  acc = acc + 929 - (acc % 42);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  m01.set('k42', acc % 997);
  for (let i43 = 0; i43 < 10; i43++) {
    acc = (acc + i43 * 13 + 678) % 100003;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-44'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-45'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  m01.set('k47', acc % 997);
  acc = acc + 134 - (acc % 69);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const ix50: number = buf.indexOf('p41');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  if (acc % 22 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5392) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  for (let i0 = 0; i0 < 4; i0++) {
    acc = (acc + i0 * 13 + 966) % 100003;
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  m01.set('k2', acc % 997);
  buf += 'bay3-' + acc.toString();
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  for (let i5 = 0; i5 < 12; i5++) {
    acc = (acc + i5 * 13 + 317) % 100003;
  }
  arr.push(acc % 1000);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 184) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  buf += `q8:${acc % 97}`;
  buf += `q9:${acc % 97}`;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  buf += `q11:${acc % 97}`;
  try { if (acc % 29 === 6) { throw new Error('synthetic-12'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const ix14: number = buf.indexOf('p41');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 110) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 7891) % 65521;
  m01.set('k19', acc % 997);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  m01.set('k21', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (acc % 9 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const rc25: Rec41 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  acc = acc + 803 - (acc % 31);
  for (let i29 = 0; i29 < 6; i29++) {
    acc = (acc + i29 * 13 + 88) % 100003;
  }
  arr.push(acc % 1000);
  if (acc % 8 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  buf += 'stocktake32-' + acc.toString();
  const ix33: number = buf.indexOf('p41');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 124) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  try { if (acc % 29 === 2) { throw new Error('synthetic-36'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 631 - (acc % 60);
  arr.push(acc % 1000);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  m01.set('k42', acc % 997);
  acc = (acc * 31 + 9709) % 65521;
  acc = (acc * 31 + 1382) % 65521;
  buf += `q45:${acc % 97}`;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  m01.set('k47', acc % 997);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const rc49: Rec41 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5393) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  try { if (acc % 29 === 12) { throw new Error('synthetic-1'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 468) % 65521;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  acc = acc + 654 - (acc % 14);
  const ix5: number = buf.indexOf('p41');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  buf += 'customs6-' + acc.toString();
  for (let i7 = 0; i7 < 9; i7++) {
    acc = (acc + i7 * 13 + 240) % 100003;
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 3783) % 65521;
  acc = (acc * 31 + 1659) % 65521;
  if (acc % 7 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  for (let i12 = 0; i12 < 12; i12++) {
    acc = (acc + i12 * 13 + 895) % 100003;
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  acc = (acc * 31 + 1556) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-15'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 110) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 1285) % 65521;
  if (acc % 5 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  if (acc % 7 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  for (let i21 = 0; i21 < 5; i21++) {
    acc = (acc + i21 * 13 + 377) % 100003;
  }
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  buf += `q23:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  for (let i26 = 0; i26 < 11; i26++) {
    acc = (acc + i26 * 13 + 127) % 100003;
  }
  acc = acc + 528 - (acc % 16);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  m01.set('k29', acc % 997);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  arr.push(acc % 1000);
  for (let i33 = 0; i33 < 6; i33++) {
    acc = (acc + i33 * 13 + 477) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 64) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const ix36: number = buf.indexOf('p41');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  acc = (acc * 31 + 3732) % 65521;
  m01.set('k39', acc % 997);
  m01.set('k40', acc % 997);
  buf += `q41:${acc % 97}`;
  try { if (acc % 29 === 23) { throw new Error('synthetic-42'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k43', acc % 997);
  buf += `q44:${acc % 97}`;
  for (let i45 = 0; i45 < 11; i45++) {
    acc = (acc + i45 * 13 + 684) % 100003;
  }
  acc = (acc * 31 + 6149) % 65521;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  buf += `q48:${acc % 97}`;
  try { if (acc % 29 === 17) { throw new Error('synthetic-49'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  const rc50: Rec41 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  for (let i51 = 0; i51 < 7; i51++) {
    acc = (acc + i51 * 13 + 354) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5394) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += 'rebate1-' + acc.toString();
  if (acc % 13 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += 'order4-' + acc.toString();
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 77) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  acc = (acc * 31 + 3029) % 65521;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = (acc * 31 + 1330) % 65521;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  if (acc % 27 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  buf += `q11:${acc % 97}`;
  acc = acc + 308 - (acc % 86);
  try { if (acc % 29 === 22) { throw new Error('synthetic-13'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i14 = 0; i14 < 4; i14++) {
    acc = (acc + i14 * 13 + 485) % 100003;
  }
  acc = acc + 227 - (acc % 10);
  acc = acc + 897 - (acc % 83);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 184) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const rc21: Rec41 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  acc = (acc * 31 + 824) % 65521;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  buf += 'refund24-' + acc.toString();
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-26'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  acc = (acc * 31 + 1605) % 65521;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const ix33: number = buf.indexOf('p41');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 140) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 2756) % 65521;
  acc = (acc * 31 + 6629) % 65521;
  for (let i37 = 0; i37 < 10; i37++) {
    acc = (acc + i37 * 13 + 399) % 100003;
  }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 188) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  buf += `q42:${acc % 97}`;
  if (acc % 19 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  if (acc % 23 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  for (let i46 = 0; i46 < 3; i46++) {
    acc = (acc + i46 * 13 + 659) % 100003;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-47'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 96) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  acc = acc + 750 - (acc % 70);
  const rc50: Rec41 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5395) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  acc = acc + 309 - (acc % 43);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  if (acc % 9 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 162) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  m01.set('k4', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  buf += `q6:${acc % 97}`;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  for (let i8 = 0; i8 < 8; i8++) {
    acc = (acc + i8 * 13 + 731) % 100003;
  }
  buf += `q9:${acc % 97}`;
  for (let i10 = 0; i10 < 10; i10++) {
    acc = (acc + i10 * 13 + 361) % 100003;
  }
  acc = acc + 152 - (acc % 68);
  if (acc % 21 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  buf += 'vendor14-' + acc.toString();
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 98) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 90) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  buf += 'client19-' + acc.toString();
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 83) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  m01.set('k21', acc % 997);
  try { if (acc % 29 === 5) { throw new Error('synthetic-22'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k23', acc % 997);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 151) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  m01.set('k29', acc % 997);
  const rc30: Rec41 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  acc = acc + 933 - (acc % 17);
  const rc32: Rec41 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 159) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  for (let i39 = 0; i39 < 10; i39++) {
    acc = (acc + i39 * 13 + 301) % 100003;
  }
  m01.set('k40', acc % 997);
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  const rc43: Rec41 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  buf += `q44:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  try { if (acc % 29 === 17) { throw new Error('synthetic-48'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i49 = 0; i49 < 3; i49++) {
    acc = (acc + i49 * 13 + 164) % 100003;
  }
  if (acc % 18 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  buf += 'pickup51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5396) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  if (acc % 26 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  m01.set('k1', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const rc4: Rec41 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1459) % 65521;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-8'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 692 - (acc % 49);
  if (acc % 11 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const rc11: Rec41 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const rc12: Rec41 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  for (let i13 = 0; i13 < 5; i13++) {
    acc = (acc + i13 * 13 + 946) % 100003;
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-14'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 18) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const ix16: number = buf.indexOf('p41');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 183) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  acc = acc + 641 - (acc % 79);
  const ix20: number = buf.indexOf('p41');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 91) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  for (let i22 = 0; i22 < 7; i22++) {
    acc = (acc + i22 * 13 + 604) % 100003;
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  for (let i25 = 0; i25 < 11; i25++) {
    acc = (acc + i25 * 13 + 418) % 100003;
  }
  buf += 'transit26-' + acc.toString();
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  try { if (acc % 29 === 7) { throw new Error('synthetic-28'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 9 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  arr.push(acc % 1000);
  const ix32: number = buf.indexOf('p41');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += 'customs33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 24) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 7068) % 65521;
  const rc36: Rec41 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  if (acc % 25 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  for (let i38 = 0; i38 < 9; i38++) {
    acc = (acc + i38 * 13 + 265) % 100003;
  }
  buf += `q39:${acc % 97}`;
  for (let i40 = 0; i40 < 5; i40++) {
    acc = (acc + i40 * 13 + 882) % 100003;
  }
  if (acc % 30 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 136) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const ix44: number = buf.indexOf('p41');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  buf += `q46:${acc % 97}`;
  arr.push(acc % 1000);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 154) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  for (let i49 = 0; i49 < 8; i49++) {
    acc = (acc + i49 * 13 + 784) % 100003;
  }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 81) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5397) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  try { if (acc % 29 === 9) { throw new Error('synthetic-0'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const rc1: Rec41 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  try { if (acc % 29 === 14) { throw new Error('synthetic-2'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8213) % 65521;
  const ix4: number = buf.indexOf('p41');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-5'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  if (acc % 26 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 20) { throw new Error('synthetic-9'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const rc10: Rec41 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  buf += `q11:${acc % 97}`;
  arr.push(acc % 1000);
  acc = (acc * 31 + 8811) % 65521;
  try { if (acc % 29 === 10) { throw new Error('synthetic-14'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 125) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  arr.push(acc % 1000);
  buf += `q21:${acc % 97}`;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  acc = acc + 827 - (acc % 16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  acc = (acc * 31 + 9058) % 65521;
  for (let i26 = 0; i26 < 5; i26++) {
    acc = (acc + i26 * 13 + 371) % 100003;
  }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  try { if (acc % 29 === 11) { throw new Error('synthetic-29'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 14) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 183) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p41');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-36'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  acc = acc + 391 - (acc % 82);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 24) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  const ix41: number = buf.indexOf('p41');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 38) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  buf += `q44:${acc % 97}`;
  if (acc % 7 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const ix48: number = buf.indexOf('p41');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  const ix50: number = buf.indexOf('p41');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5398) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  const rc0: Rec41 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  buf += 'ticket1-' + acc.toString();
  m01.set('k2', acc % 997);
  if (acc % 9 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  acc = acc + 55 - (acc % 83);
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = acc + 695 - (acc % 8);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  m01.set('k13', acc % 997);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  try { if (acc % 29 === 12) { throw new Error('synthetic-16'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 22) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 8; i18++) {
    acc = (acc + i18 * 13 + 498) % 100003;
  }
  const rc19: Rec41 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const rc20: Rec41 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  buf += 'rebate21-' + acc.toString();
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  m01.set('k24', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  for (let i26 = 0; i26 < 3; i26++) {
    acc = (acc + i26 * 13 + 217) % 100003;
  }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  buf += 'portal30-' + acc.toString();
  arr.push(acc % 1000);
  if (acc % 27 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  for (let i33 = 0; i33 < 4; i33++) {
    acc = (acc + i33 * 13 + 613) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 192) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const ix36: number = buf.indexOf('p41');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  m01.set('k37', acc % 997);
  try { if (acc % 29 === 9) { throw new Error('synthetic-38'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 57) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 1088) % 65521;
  for (let i43 = 0; i43 < 9; i43++) {
    acc = (acc + i43 * 13 + 754) % 100003;
  }
  if (acc % 7 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  if (acc % 14 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  buf += 'journey47-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  buf += `q49:${acc % 97}`;
  try { if (acc % 29 === 18) { throw new Error('synthetic-50'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 892 - (acc % 62);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5399) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 109) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const rc2: Rec41 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const rc6: Rec41 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  acc = (acc * 31 + 3985) % 65521;
  acc = (acc * 31 + 8674) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-9'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const rc11: Rec41 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  m01.set('k12', acc % 997);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  acc = (acc * 31 + 9309) % 65521;
  buf += 'batch16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 183) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += 'ledger19-' + acc.toString();
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  for (let i21 = 0; i21 < 4; i21++) {
    acc = (acc + i21 * 13 + 909) % 100003;
  }
  if (acc % 12 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  acc = acc + 66 - (acc % 15);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3947) % 65521;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const rc31: Rec41 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const ix32: number = buf.indexOf('p41');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 90) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const ix37: number = buf.indexOf('p41');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  m01.set('k38', acc % 997);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 174) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  for (let i40 = 0; i40 < 11; i40++) {
    acc = (acc + i40 * 13 + 322) % 100003;
  }
  buf += 'audit41-' + acc.toString();
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 102) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  const ix43: number = buf.indexOf('p41');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  arr.push(acc % 1000);
  try { if (acc % 29 === 10) { throw new Error('synthetic-49'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k50', acc % 997);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 127) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5400) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  buf += `q0:${acc % 97}`;
  acc = acc + 690 - (acc % 62);
  const ix2: number = buf.indexOf('p41');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  buf += 'shelf3-' + acc.toString();
  acc = acc + 31 - (acc % 72);
  m01.set('k5', acc % 997);
  acc = (acc * 31 + 5331) % 65521;
  acc = (acc * 31 + 9914) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  if (acc % 11 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  m01.set('k10', acc % 997);
  m01.set('k11', acc % 997);
  buf += 'settle12-' + acc.toString();
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  try { if (acc % 29 === 14) { throw new Error('synthetic-15'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 194) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p41');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = (acc * 31 + 3444) % 65521;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = acc + 427 - (acc % 68);
  m01.set('k23', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  m01.set('k25', acc % 997);
  arr.push(acc % 1000);
  if (acc % 11 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  m01.set('k28', acc % 997);
  buf += `q29:${acc % 97}`;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  for (let i32 = 0; i32 < 5; i32++) {
    acc = (acc + i32 * 13 + 301) % 100003;
  }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 180) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-36'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 67) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  for (let i41 = 0; i41 < 5; i41++) {
    acc = (acc + i41 * 13 + 593) % 100003;
  }
  buf += 'parcel42-' + acc.toString();
  for (let i43 = 0; i43 < 10; i43++) {
    acc = (acc + i43 * 13 + 870) % 100003;
  }
  buf += `q44:${acc % 97}`;
  if (acc % 23 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  m01.set('k47', acc % 997);
  buf += 'customs48-' + acc.toString();
  const ix49: number = buf.indexOf('p41');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += `q50:${acc % 97}`;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0041_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0041_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0041_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5401) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  if (acc % 30 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += 'waybill1-' + acc.toString();
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  m01.set('k4', acc % 997);
  acc = (acc * 31 + 2624) % 65521;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  m01.set('k10', acc % 997);
  for (let i11 = 0; i11 < 5; i11++) {
    acc = (acc + i11 * 13 + 360) % 100003;
  }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  buf += `q13:${acc % 97}`;
  const rc14: Rec41 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const rc15: Rec41 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 63) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec41 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const rc19: Rec41 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  try { if (acc % 29 === 20) { throw new Error('synthetic-20'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  buf += `q22:${acc % 97}`;
  const ix23: number = buf.indexOf('p41');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  for (let i24 = 0; i24 < 10; i24++) {
    acc = (acc + i24 * 13 + 172) % 100003;
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  buf += 'policy26-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  acc = (acc * 31 + 4364) % 65521;
  for (let i30 = 0; i30 < 11; i30++) {
    acc = (acc + i30 * 13 + 610) % 100003;
  }
  buf += 'freight31-' + acc.toString();
  for (let i32 = 0; i32 < 9; i32++) {
    acc = (acc + i32 * 13 + 640) % 100003;
  }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 144) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  arr.push(acc % 1000);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = (acc * 31 + 3741) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-40'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k41', acc % 997);
  for (let i42 = 0; i42 < 7; i42++) {
    acc = (acc + i42 * 13 + 210) % 100003;
  }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 168) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const rc44: Rec41 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  try { if (acc % 29 === 10) { throw new Error('synthetic-45'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 458 - (acc % 15);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  m01.set('k48', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = acc + 863 - (acc % 17);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5402) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  buf += `q1:${acc % 97}`;
  for (let i2 = 0; i2 < 11; i2++) {
    acc = (acc + i2 * 13 + 340) % 100003;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-3'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const ix5: number = buf.indexOf('p41');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  acc = (acc * 31 + 8336) % 65521;
  acc = (acc * 31 + 9190) % 65521;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  arr.push(acc % 1000);
  m01.set('k13', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 58) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 10; i18++) {
    acc = (acc + i18 * 13 + 995) % 100003;
  }
  for (let i19 = 0; i19 < 8; i19++) {
    acc = (acc + i19 * 13 + 892) % 100003;
  }
  acc = (acc * 31 + 417) % 65521;
  buf += 'audit21-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  arr.push(acc % 1000);
  buf += `q26:${acc % 97}`;
  m01.set('k27', acc % 997);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  if (acc % 19 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const ix30: number = buf.indexOf('p41');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 47) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 95) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p41');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  if (acc % 19 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  m01.set('k41', acc % 997);
  arr.push(acc % 1000);
  buf += 'transit43-' + acc.toString();
  const ix44: number = buf.indexOf('p41');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = (acc * 31 + 9890) % 65521;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  acc = acc + 533 - (acc % 43);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  m01.set('k50', acc % 997);
  const rc51: Rec41 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5403) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  const ix0: number = buf.indexOf('p41');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const ix2: number = buf.indexOf('p41');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 174) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9102) % 65521;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 21) { throw new Error('synthetic-8'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'quota9-' + acc.toString();
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 62) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  buf += `q11:${acc % 97}`;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  m01.set('k13', acc % 997);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 88) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  acc = acc + 763 - (acc % 89);
  acc = (acc * 31 + 8745) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 192) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p41');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7907) % 65521;
  acc = (acc * 31 + 6408) % 65521;
  const ix21: number = buf.indexOf('p41');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const ix22: number = buf.indexOf('p41');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3916) % 65521;
  acc = (acc * 31 + 7670) % 65521;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  buf += `q26:${acc % 97}`;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const rc28: Rec41 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  buf += `q29:${acc % 97}`;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  try { if (acc % 29 === 19) { throw new Error('synthetic-31'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = acc + 721 - (acc % 7);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 132) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p41');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  for (let i37 = 0; i37 < 3; i37++) {
    acc = (acc + i37 * 13 + 784) % 100003;
  }
  acc = (acc * 31 + 8754) % 65521;
  arr.push(acc % 1000);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  acc = (acc * 31 + 3481) % 65521;
  for (let i42 = 0; i42 < 6; i42++) {
    acc = (acc + i42 * 13 + 20) % 100003;
  }
  arr.push(acc % 1000);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  for (let i47 = 0; i47 < 3; i47++) {
    acc = (acc + i47 * 13 + 957) % 100003;
  }
  buf += 'depot48-' + acc.toString();
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 76) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  const rc50: Rec41 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5404) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = acc + 953 - (acc % 74);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  m01.set('k3', acc % 997);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  acc = acc + 240 - (acc % 82);
  buf += 'region6-' + acc.toString();
  buf += `q7:${acc % 97}`;
  acc = acc + 503 - (acc % 13);
  acc = (acc * 31 + 6901) % 65521;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += `q11:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-13'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const ix14: number = buf.indexOf('p41');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7925) % 65521;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 30) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'customs18-' + acc.toString();
  const ix19: number = buf.indexOf('p41');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const ix20: number = buf.indexOf('p41');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  if (acc % 11 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const ix23: number = buf.indexOf('p41');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  acc = acc + 414 - (acc % 15);
  for (let i25 = 0; i25 < 6; i25++) {
    acc = (acc + i25 * 13 + 109) % 100003;
  }
  acc = (acc * 31 + 1240) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  try { if (acc % 29 === 21) { throw new Error('synthetic-28'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-29'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q30:${acc % 97}`;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  for (let i32 = 0; i32 < 11; i32++) {
    acc = (acc + i32 * 13 + 750) % 100003;
  }
  for (let i33 = 0; i33 < 9; i33++) {
    acc = (acc + i33 * 13 + 153) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 23) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  try { if (acc % 29 === 6) { throw new Error('synthetic-37'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  const rc38: Rec41 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  acc = (acc * 31 + 8296) % 65521;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += `q44:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 131) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-49'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 206) % 65521;
  acc = acc + 663 - (acc % 10);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5405) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  buf += 'quota0-' + acc.toString();
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  acc = acc + 333 - (acc % 75);
  acc = (acc * 31 + 6939) % 65521;
  buf += `q5:${acc % 97}`;
  arr.push(acc % 1000);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const ix8: number = buf.indexOf('p41');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  for (let i10 = 0; i10 < 8; i10++) {
    acc = (acc + i10 * 13 + 809) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 3652) % 65521;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 50) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const rc19: Rec41 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 58) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  buf += `q25:${acc % 97}`;
  buf += 'portal26-' + acc.toString();
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 145) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 24) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  acc = (acc * 31 + 265) % 65521;
  acc = (acc * 31 + 2477) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 185) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  buf += 'audit36-' + acc.toString();
  buf += `q37:${acc % 97}`;
  acc = acc + 800 - (acc % 29);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = acc + 977 - (acc % 17);
  const ix42: number = buf.indexOf('p41');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  buf += `q43:${acc % 97}`;
  m01.set('k44', acc % 997);
  acc = acc + 512 - (acc % 40);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += `q47:${acc % 97}`;
  buf += `q48:${acc % 97}`;
  const ix49: number = buf.indexOf('p41');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += 'parcel50-' + acc.toString();
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5406) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  for (let i0 = 0; i0 < 8; i0++) {
    acc = (acc + i0 * 13 + 20) % 100003;
  }
  m01.set('k1', acc % 997);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 39) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  buf += 'client3-' + acc.toString();
  const rc4: Rec41 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  buf += 'tariff5-' + acc.toString();
  buf += `q6:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const ix8: number = buf.indexOf('p41');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-11'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-12'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  try { if (acc % 29 === 15) { throw new Error('synthetic-14'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 16) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 19 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  acc = acc + 121 - (acc % 91);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 30) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 118) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  acc = (acc * 31 + 6911) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-25'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-27'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q28:${acc % 97}`;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-30'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  arr.push(acc % 1000);
  buf += 'region33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 165) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  if (acc % 6 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  buf += 'rebate40-' + acc.toString();
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  for (let i42 = 0; i42 < 3; i42++) {
    acc = (acc + i42 * 13 + 766) % 100003;
  }
  acc = (acc * 31 + 7284) % 65521;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const ix45: number = buf.indexOf('p41');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-46'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  buf += 'vendor48-' + acc.toString();
  try { if (acc % 29 === 5) { throw new Error('synthetic-49'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5407) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 100) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const rc2: Rec41 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (acc % 11 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  acc = acc + 221 - (acc % 58);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 53) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  m01.set('k10', acc % 997);
  for (let i11 = 0; i11 < 9; i11++) {
    acc = (acc + i11 * 13 + 11) % 100003;
  }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  acc = acc + 470 - (acc % 31);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 50) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  buf += `q15:${acc % 97}`;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 43) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 999 - (acc % 97);
  try { if (acc % 29 === 11) { throw new Error('synthetic-19'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 44) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const rc21: Rec41 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  m01.set('k22', acc % 997);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-26'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k27', acc % 997);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  if (acc % 5 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  m01.set('k31', acc % 997);
  for (let i32 = 0; i32 < 7; i32++) {
    acc = (acc + i32 * 13 + 382) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 125) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const rc38: Rec41 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  m01.set('k39', acc % 997);
  for (let i40 = 0; i40 < 8; i40++) {
    acc = (acc + i40 * 13 + 216) % 100003;
  }
  if (acc % 24 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  acc = (acc * 31 + 7784) % 65521;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 152) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  acc = acc + 506 - (acc % 90);
  for (let i49 = 0; i49 < 8; i49++) {
    acc = (acc + i49 * 13 + 46) % 100003;
  }
  for (let i50 = 0; i50 < 11; i50++) {
    acc = (acc + i50 * 13 + 815) % 100003;
  }
  const ix51: number = buf.indexOf('p41');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5408) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += 'dispatch1-' + acc.toString();
  m01.set('k2', acc % 997);
  acc = acc + 881 - (acc % 83);
  acc = (acc * 31 + 7698) % 65521;
  arr.push(acc % 1000);
  const rc6: Rec41 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 52) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  if (acc % 9 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-10'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = acc + 579 - (acc % 23);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 135) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  for (let i20 = 0; i20 < 9; i20++) {
    acc = (acc + i20 * 13 + 246) % 100003;
  }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const rc23: Rec41 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  arr.push(acc % 1000);
  const ix25: number = buf.indexOf('p41');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  acc = acc + 374 - (acc % 74);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 78) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  if (acc % 17 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-37'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-38'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  buf += `q41:${acc % 97}`;
  if (acc % 22 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const rc44: Rec41 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  arr.push(acc % 1000);
  for (let i46 = 0; i46 < 7; i46++) {
    acc = (acc + i46 * 13 + 639) % 100003;
  }
  acc = acc + 918 - (acc % 54);
  buf += 'balance48-' + acc.toString();
  if (acc % 21 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  acc = acc + 491 - (acc % 28);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5409) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  acc = acc + 495 - (acc % 95);
  const rc1: Rec41 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 93) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  try { if (acc % 29 === 19) { throw new Error('synthetic-5'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  arr.push(acc % 1000);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  acc = acc + 225 - (acc % 33);
  acc = acc + 603 - (acc % 96);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  m01.set('k12', acc % 997);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const ix15: number = buf.indexOf('p41');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 96) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 187) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-19'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i20 = 0; i20 < 12; i20++) {
    acc = (acc + i20 * 13 + 774) % 100003;
  }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = (acc * 31 + 9093) % 65521;
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 92) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 96) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  try { if (acc % 29 === 16) { throw new Error('synthetic-26'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  buf += `q28:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  try { if (acc % 29 === 22) { throw new Error('synthetic-30'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k31', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 65) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  if (acc % 9 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  if (acc % 11 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8772) % 65521;
  arr.push(acc % 1000);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 146) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  acc = acc + 289 - (acc % 84);
  if (acc % 5 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = acc + 955 - (acc % 20);
  m01.set('k47', acc % 997);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  arr.push(acc % 1000);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5410) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  m01.set('k0', acc % 997);
  acc = (acc * 31 + 1600) % 65521;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  buf += `q5:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = acc + 585 - (acc % 92);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  try { if (acc % 29 === 13) { throw new Error('synthetic-12'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  buf += 'customs14-' + acc.toString();
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 9) { throw new Error('synthetic-16'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 129) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  m01.set('k19', acc % 997);
  m01.set('k20', acc % 997);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const rc22: Rec41 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const ix24: number = buf.indexOf('p41');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const rc25: Rec41 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  buf += 'vendor26-' + acc.toString();
  acc = acc + 898 - (acc % 52);
  buf += 'carrier28-' + acc.toString();
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  m01.set('k30', acc % 997);
  const rc31: Rec41 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const ix32: number = buf.indexOf('p41');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 874) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 149) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  arr.push(acc % 1000);
  const rc37: Rec41 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  const ix38: number = buf.indexOf('p41');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  for (let i41 = 0; i41 < 9; i41++) {
    acc = (acc + i41 * 13 + 887) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const rc44: Rec41 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-50'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0041_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0041_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0041_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5411) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = acc + 440 - (acc % 53);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  if (acc % 11 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  for (let i7 = 0; i7 < 10; i7++) {
    acc = (acc + i7 * 13 + 216) % 100003;
  }
  buf += 'batch8-' + acc.toString();
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 14) { throw new Error('synthetic-11'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 158) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 124) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  m01.set('k14', acc % 997);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 197) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  buf += 'coupon19-' + acc.toString();
  try { if (acc % 29 === 23) { throw new Error('synthetic-20'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-21'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += 'waybill24-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  for (let i26 = 0; i26 < 8; i26++) {
    acc = (acc + i26 * 13 + 779) % 100003;
  }
  acc = (acc * 31 + 196) % 65521;
  const rc28: Rec41 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  m01.set('k30', acc % 997);
  m01.set('k31', acc % 997);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 72) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const rc36: Rec41 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const ix37: number = buf.indexOf('p41');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  m01.set('k38', acc % 997);
  m01.set('k39', acc % 997);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 38) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = (acc * 31 + 5963) % 65521;
  acc = (acc * 31 + 4840) % 65521;
  buf += 'dispatch43-' + acc.toString();
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  buf += 'bay47-' + acc.toString();
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const ix49: number = buf.indexOf('p41');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += 'payout51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5412) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  buf += 'sku1-' + acc.toString();
  if (acc % 18 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 195) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  for (let i5 = 0; i5 < 11; i5++) {
    acc = (acc + i5 * 13 + 291) % 100003;
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 8438) % 65521;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const ix9: number = buf.indexOf('p41');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  buf += `q12:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 130) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const rc20: Rec41 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += 'customs22-' + acc.toString();
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  acc = acc + 77 - (acc % 56);
  buf += `q26:${acc % 97}`;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  for (let i28 = 0; i28 < 11; i28++) {
    acc = (acc + i28 * 13 + 849) % 100003;
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += `q31:${acc % 97}`;
  const ix32: number = buf.indexOf('p41');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 91) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  if (acc % 31 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  acc = acc + 885 - (acc % 65);
  acc = acc + 239 - (acc % 65);
  m01.set('k40', acc % 997);
  for (let i41 = 0; i41 < 12; i41++) {
    acc = (acc + i41 * 13 + 513) % 100003;
  }
  const ix42: number = buf.indexOf('p41');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  m01.set('k43', acc % 997);
  for (let i44 = 0; i44 < 8; i44++) {
    acc = (acc + i44 * 13 + 243) % 100003;
  }
  acc = acc + 268 - (acc % 82);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 62) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0041_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 5413) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit41 = new Unit41(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  for (let i1 = 0; i1 < 6; i1++) {
    acc = (acc + i1 * 13 + 749) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  buf += 'payout4-' + acc.toString();
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  acc = acc + 978 - (acc % 10);
  try { if (acc % 29 === 5) { throw new Error('synthetic-7'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i8 = 0; i8 < 5; i8++) {
    acc = (acc + i8 * 13 + 176) % 100003;
  }
  m01.set('k9', acc % 997);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  for (let i11 = 0; i11 < 7; i11++) {
    acc = (acc + i11 * 13 + 133) % 100003;
  }
  acc = (acc * 31 + 4039) % 65521;
  try { if (acc % 29 === 7) { throw new Error('synthetic-13'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const ix15: number = buf.indexOf('p41');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += 'warehouse16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 63) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  for (let i21 = 0; i21 < 9; i21++) {
    acc = (acc + i21 * 13 + 464) % 100003;
  }
  if (acc % 31 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  m01.set('k24', acc % 997);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 169) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += `q26:${acc % 97}`;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  for (let i30 = 0; i30 < 5; i30++) {
    acc = (acc + i30 * 13 + 359) % 100003;
  }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 133) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = (acc * 31 + 6634) % 65521;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 89) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  m01.set('k36', acc % 997);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  if (acc % 30 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  arr.push(acc % 1000);
  buf += 'invoice45-' + acc.toString();
  buf += `q46:${acc % 97}`;
  buf += `q47:${acc % 97}`;
  const rc48: Rec41 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const ix50: number = buf.indexOf('p41');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-51'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0041(): BizFn[] {
  return [biz_0041_00, biz_0041_01, biz_0041_02, biz_0041_03, biz_0041_04, biz_0041_05, biz_0041_06, biz_0041_07, biz_0041_08, biz_0041_09, biz_0041_10, biz_0041_11, biz_0041_12, biz_0041_13, biz_0041_14, biz_0041_15, biz_0041_16, biz_0041_17, biz_0041_18, biz_0041_19, biz_0041_20, biz_0041_21, biz_0041_22, biz_0041_23, biz_0041_24, biz_0041_25, biz_0041_26, biz_0041_27, biz_0041_28, biz_0041_29, biz_0041_30, biz_0041_31, biz_0041_32, biz_0041_33, biz_0041_34, biz_0041_35, biz_0041_36, biz_0041_37, biz_0041_38, biz_0041_39, biz_0041_40, biz_0041_41, biz_0041_42];
}

export function rega_0041(): ABizFn[] {
  return [biz_0041_09a, biz_0041_19a, biz_0041_29a, biz_0041_39a];
}
