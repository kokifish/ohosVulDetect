// Biz0078.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec78 { id: number; tag: string; score: number; }

class Unit78 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0078_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 245) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 111) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  for (let i1 = 0; i1 < 4; i1++) {
    acc = (acc + i1 * 13 + 521) % 100003;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-2'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k3', acc % 997);
  acc = acc + 546 - (acc % 79);
  buf += `q5:${acc % 97}`;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 77) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k8', acc % 997);
  const rc9: Rec78 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  for (let i10 = 0; i10 < 4; i10++) {
    acc = (acc + i10 * 13 + 926) % 100003;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-11'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += `q13:${acc % 97}`;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 53) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  buf += `q15:${acc % 97}`;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 158) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  for (let i20 = 0; i20 < 8; i20++) {
    acc = (acc + i20 * 13 + 822) % 100003;
  }
  acc = (acc * 31 + 1658) % 65521;
  acc = (acc * 31 + 5289) % 65521;
  const ix23: number = buf.indexOf('p78');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 186) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  acc = acc + 304 - (acc % 42);
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const rc28: Rec78 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2230) % 65521;
  acc = (acc * 31 + 2490) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 164) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  m01.set('k37', acc % 997);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix40: number = buf.indexOf('p78');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  if (acc % 24 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const rc43: Rec78 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  acc = acc + 655 - (acc % 12);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = acc + 756 - (acc % 35);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  m01.set('k48', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  buf += 'waybill51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 246) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  buf += 'waybill1-' + acc.toString();
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += `q6:${acc % 97}`;
  acc = (acc * 31 + 5700) % 65521;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  buf += `q9:${acc % 97}`;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  if (acc % 29 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const ix13: number = buf.indexOf('p78');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  buf += 'dock14-' + acc.toString();
  acc = (acc * 31 + 7348) % 65521;
  acc = acc + 981 - (acc % 28);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 138) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 11 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 91) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const rc21: Rec78 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const ix25: number = buf.indexOf('p78');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 24) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += `q27:${acc % 97}`;
  buf += `q28:${acc % 97}`;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const rc31: Rec78 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 183) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  acc = (acc * 31 + 2338) % 65521;
  buf += `q37:${acc % 97}`;
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  const rc39: Rec78 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  if (acc % 9 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = acc + 748 - (acc % 36);
  buf += `q42:${acc % 97}`;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 97) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  if (acc % 5 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const ix46: number = buf.indexOf('p78');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const ix48: number = buf.indexOf('p78');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  acc = acc + 746 - (acc % 96);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 247) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  buf += 'stocktake0-' + acc.toString();
  m01.set('k1', acc % 997);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const ix4: number = buf.indexOf('p78');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  for (let i5 = 0; i5 < 11; i5++) {
    acc = (acc + i5 * 13 + 422) % 100003;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-6'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3259) % 65521;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 128) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k10', acc % 997);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  buf += 'coupon13-' + acc.toString();
  const rc14: Rec78 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 161) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 179) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-18'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const rc19: Rec78 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const ix20: number = buf.indexOf('p78');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const ix22: number = buf.indexOf('p78');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const ix24: number = buf.indexOf('p78');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-29'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-30'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 53) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const ix33: number = buf.indexOf('p78');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 75) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-35'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q36:${acc % 97}`;
  acc = acc + 891 - (acc % 66);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  try { if (acc % 29 === 9) { throw new Error('synthetic-41'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 17) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  try { if (acc % 29 === 19) { throw new Error('synthetic-43'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'tariff44-' + acc.toString();
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  acc = (acc * 31 + 8836) % 65521;
  acc = (acc * 31 + 3749) % 65521;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  acc = acc + 759 - (acc % 61);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  try { if (acc % 29 === 10) { throw new Error('synthetic-51'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 248) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  m01.set('k0', acc % 997);
  acc = acc + 236 - (acc % 41);
  acc = acc + 184 - (acc % 74);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 93) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  for (let i7 = 0; i7 < 6; i7++) {
    acc = (acc + i7 * 13 + 369) % 100003;
  }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  m01.set('k10', acc % 997);
  buf += `q11:${acc % 97}`;
  const ix12: number = buf.indexOf('p78');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  if (acc % 23 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 68) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  buf += `q20:${acc % 97}`;
  if (acc % 29 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  acc = (acc * 31 + 6156) % 65521;
  acc = acc + 349 - (acc % 62);
  if (acc % 25 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const ix26: number = buf.indexOf('p78');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = acc + 403 - (acc % 82);
  try { if (acc % 29 === 15) { throw new Error('synthetic-28'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  buf += 'vendor30-' + acc.toString();
  const ix31: number = buf.indexOf('p78');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  if (acc % 7 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 188) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 185) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  acc = (acc * 31 + 614) % 65521;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const rc39: Rec78 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  if (acc % 31 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  acc = (acc * 31 + 2934) % 65521;
  buf += `q45:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const rc47: Rec78 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const ix51: number = buf.indexOf('p78');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 249) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  for (let i0 = 0; i0 < 12; i0++) {
    acc = (acc + i0 * 13 + 706) % 100003;
  }
  m01.set('k1', acc % 997);
  const rc2: Rec78 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const ix3: number = buf.indexOf('p78');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 95) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  buf += `q6:${acc % 97}`;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 71) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  if (acc % 16 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  m01.set('k14', acc % 997);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 27) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  acc = (acc * 31 + 6430) % 65521;
  for (let i21 = 0; i21 < 5; i21++) {
    acc = (acc + i21 * 13 + 416) % 100003;
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  buf += `q23:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  acc = (acc * 31 + 8548) % 65521;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 38) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const rc28: Rec78 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  arr.push(acc % 1000);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 22) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  buf += `q41:${acc % 97}`;
  acc = (acc * 31 + 5221) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  buf += 'journey44-' + acc.toString();
  const rc45: Rec78 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 156) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  try { if (acc % 29 === 4) { throw new Error('synthetic-49'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  for (let i51 = 0; i51 < 10; i51++) {
    acc = (acc + i51 * 13 + 910) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 250) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += `q1:${acc % 97}`;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const ix3: number = buf.indexOf('p78');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const rc5: Rec78 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  arr.push(acc % 1000);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (acc % 22 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 8) { throw new Error('synthetic-12'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'balance13-' + acc.toString();
  m01.set('k14', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const ix16: number = buf.indexOf('p78');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 62) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'pallet18-' + acc.toString();
  acc = (acc * 31 + 7572) % 65521;
  buf += 'payout20-' + acc.toString();
  const ix21: number = buf.indexOf('p78');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3406) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  if (acc % 5 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  m01.set('k27', acc % 997);
  for (let i28 = 0; i28 < 7; i28++) {
    acc = (acc + i28 * 13 + 434) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = acc + 731 - (acc % 23);
  try { if (acc % 29 === 2) { throw new Error('synthetic-31'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7513) % 65521;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 175) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += 'settle36-' + acc.toString();
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 87) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 6516) % 65521;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 78) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q42:${acc % 97}`;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 68) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  try { if (acc % 29 === 19) { throw new Error('synthetic-47'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k48', acc % 997);
  if (acc % 6 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  if (acc % 29 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 251) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  acc = (acc * 31 + 1146) % 65521;
  const ix1: number = buf.indexOf('p78');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  m01.set('k2', acc % 997);
  buf += `q3:${acc % 97}`;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  m01.set('k6', acc % 997);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = acc + 654 - (acc % 34);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  if (acc % 6 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  buf += `q11:${acc % 97}`;
  try { if (acc % 29 === 3) { throw new Error('synthetic-12'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'tariff13-' + acc.toString();
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-15'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9748) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 60) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-21'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 56) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  acc = acc + 42 - (acc % 19);
  m01.set('k24', acc % 997);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  const rc27: Rec78 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  buf += 'policy28-' + acc.toString();
  m01.set('k29', acc % 997);
  buf += `q30:${acc % 97}`;
  acc = acc + 37 - (acc % 52);
  try { if (acc % 29 === 23) { throw new Error('synthetic-32'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const ix33: number = buf.indexOf('p78');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 16) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 126) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  buf += 'ledger38-' + acc.toString();
  for (let i39 = 0; i39 < 9; i39++) {
    acc = (acc + i39 * 13 + 732) % 100003;
  }
  if (acc % 23 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const ix47: number = buf.indexOf('p78');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const ix49: number = buf.indexOf('p78');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += `q50:${acc % 97}`;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 252) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  arr.push(acc % 1000);
  acc = acc + 498 - (acc % 53);
  const rc2: Rec78 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  acc = (acc * 31 + 1335) % 65521;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-7'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  try { if (acc % 29 === 14) { throw new Error('synthetic-12'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 950 - (acc % 38);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 91) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 60) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  for (let i19 = 0; i19 < 8; i19++) {
    acc = (acc + i19 * 13 + 273) % 100003;
  }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 180) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  buf += `q21:${acc % 97}`;
  try { if (acc % 29 === 2) { throw new Error('synthetic-22'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-23'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i24 = 0; i24 < 10; i24++) {
    acc = (acc + i24 * 13 + 970) % 100003;
  }
  acc = (acc * 31 + 5426) % 65521;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  arr.push(acc % 1000);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (acc % 7 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i32 = 0; i32 < 6; i32++) {
    acc = (acc + i32 * 13 + 261) % 100003;
  }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 196) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-35'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  m01.set('k37', acc % 997);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const ix39: number = buf.indexOf('p78');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  acc = acc + 411 - (acc % 54);
  m01.set('k41', acc % 997);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  acc = acc + 108 - (acc % 85);
  acc = acc + 160 - (acc % 79);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = (acc * 31 + 7460) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-47'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'portal48-' + acc.toString();
  try { if (acc % 29 === 14) { throw new Error('synthetic-49'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 6386) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 253) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  if (acc % 14 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-3'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i4 = 0; i4 < 10; i4++) {
    acc = (acc + i4 * 13 + 706) % 100003;
  }
  buf += `q5:${acc % 97}`;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 66) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const ix7: number = buf.indexOf('p78');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const rc9: Rec78 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += `q10:${acc % 97}`;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-12'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'tariff13-' + acc.toString();
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  if (acc % 6 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 118) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-19'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k20', acc % 997);
  buf += `q21:${acc % 97}`;
  try { if (acc % 29 === 10) { throw new Error('synthetic-22'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 15 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  buf += 'warehouse24-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  buf += 'settle26-' + acc.toString();
  buf += 'sku27-' + acc.toString();
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  m01.set('k29', acc % 997);
  for (let i30 = 0; i30 < 4; i30++) {
    acc = (acc + i30 * 13 + 207) % 100003;
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  acc = acc + 677 - (acc % 76);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 47) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  arr.push(acc % 1000);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 148) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-41'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k42', acc % 997);
  if (acc % 20 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-44'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 975 - (acc % 51);
  buf += `q46:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += 'batch48-' + acc.toString();
  if (acc % 26 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 122) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 254) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  try { if (acc % 29 === 8) { throw new Error('synthetic-0'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  buf += `q2:${acc % 97}`;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += `q4:${acc % 97}`;
  const ix5: number = buf.indexOf('p78');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 42) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const rc10: Rec78 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  m01.set('k14', acc % 997);
  acc = (acc * 31 + 5059) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 162) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const ix19: number = buf.indexOf('p78');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const rc20: Rec78 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  buf += 'pallet22-' + acc.toString();
  try { if (acc % 29 === 20) { throw new Error('synthetic-23'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q24:${acc % 97}`;
  acc = acc + 263 - (acc % 70);
  m01.set('k26', acc % 997);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const ix29: number = buf.indexOf('p78');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const rc31: Rec78 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  acc = (acc * 31 + 6304) % 65521;
  for (let i33 = 0; i33 < 10; i33++) {
    acc = (acc + i33 * 13 + 401) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 26) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 3431) % 65521;
  if (acc % 27 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const ix38: number = buf.indexOf('p78');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  if (acc % 5 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5195) % 65521;
  const ix42: number = buf.indexOf('p78');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  m01.set('k43', acc % 997);
  const rc44: Rec78 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  acc = acc + 309 - (acc % 71);
  if (acc % 22 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  m01.set('k47', acc % 997);
  if (acc % 10 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  const ix49: number = buf.indexOf('p78');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0078_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0078_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0078_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 255) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  const rc0: Rec78 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  buf += `q2:${acc % 97}`;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const ix4: number = buf.indexOf('p78');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const ix6: number = buf.indexOf('p78');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const ix7: number = buf.indexOf('p78');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const rc10: Rec78 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += 'dock13-' + acc.toString();
  try { if (acc % 29 === 18) { throw new Error('synthetic-14'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 55) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 186) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 12; i18++) {
    acc = (acc + i18 * 13 + 908) % 100003;
  }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  acc = (acc * 31 + 3318) % 65521;
  acc = (acc * 31 + 4945) % 65521;
  buf += 'waybill22-' + acc.toString();
  acc = (acc * 31 + 2469) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-24'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  arr.push(acc % 1000);
  buf += 'journey28-' + acc.toString();
  buf += 'ticket29-' + acc.toString();
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 96) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  m01.set('k36', acc % 997);
  const rc37: Rec78 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = acc + 41 - (acc % 44);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const ix43: number = buf.indexOf('p78');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += 'rebate45-' + acc.toString();
  m01.set('k46', acc % 997);
  acc = (acc * 31 + 7548) % 65521;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  acc = (acc * 31 + 938) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-50'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 256) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  acc = (acc * 31 + 5791) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = acc + 288 - (acc % 73);
  const rc3: Rec78 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  arr.push(acc % 1000);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  arr.push(acc % 1000);
  try { if (acc % 29 === 7) { throw new Error('synthetic-9'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  arr.push(acc % 1000);
  acc = (acc * 31 + 8508) % 65521;
  acc = (acc * 31 + 8578) % 65521;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 172) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 15) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  acc = acc + 464 - (acc % 52);
  if (acc % 12 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  buf += 'crate23-' + acc.toString();
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  buf += 'journey25-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  m01.set('k28', acc % 997);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 75) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  buf += `q30:${acc % 97}`;
  try { if (acc % 29 === 10) { throw new Error('synthetic-31'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 170) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 20) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  buf += `q38:${acc % 97}`;
  try { if (acc % 29 === 12) { throw new Error('synthetic-39'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  try { if (acc % 29 === 6) { throw new Error('synthetic-41'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  for (let i43 = 0; i43 < 6; i43++) {
    acc = (acc + i43 * 13 + 847) % 100003;
  }
  buf += 'coupon44-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc46: Rec78 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-47'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8781) % 65521;
  const ix49: number = buf.indexOf('p78');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 257) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  buf += `q0:${acc % 97}`;
  for (let i1 = 0; i1 < 11; i1++) {
    acc = (acc + i1 * 13 + 642) % 100003;
  }
  buf += 'shelf2-' + acc.toString();
  acc = (acc * 31 + 2935) % 65521;
  if (acc % 17 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += 'quota6-' + acc.toString();
  const ix7: number = buf.indexOf('p78');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  m01.set('k8', acc % 997);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  buf += `q10:${acc % 97}`;
  if (acc % 19 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-12'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const rc14: Rec78 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const rc16: Rec78 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 199) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += 'freight20-' + acc.toString();
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  arr.push(acc % 1000);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += 'crate27-' + acc.toString();
  for (let i28 = 0; i28 < 12; i28++) {
    acc = (acc + i28 * 13 + 232) % 100003;
  }
  const rc29: Rec78 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 156) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = acc + 739 - (acc % 69);
  const ix33: number = buf.indexOf('p78');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 110) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 122) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = acc + 47 - (acc % 74);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 110) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  try { if (acc % 29 === 3) { throw new Error('synthetic-40'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (acc % 26 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  buf += `q43:${acc % 97}`;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-46'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const ix47: number = buf.indexOf('p78');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  acc = (acc * 31 + 5373) % 65521;
  const ix50: number = buf.indexOf('p78');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 258) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  if (acc % 22 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const ix2: number = buf.indexOf('p78');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const ix3: number = buf.indexOf('p78');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  try { if (acc % 29 === 11) { throw new Error('synthetic-5'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-6'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  acc = acc + 988 - (acc % 9);
  const rc11: Rec78 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  try { if (acc % 29 === 20) { throw new Error('synthetic-12'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const rc13: Rec78 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const rc15: Rec78 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  try { if (acc % 29 === 12) { throw new Error('synthetic-16'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 106) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 1477) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const ix20: number = buf.indexOf('p78');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const ix22: number = buf.indexOf('p78');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  for (let i23 = 0; i23 < 5; i23++) {
    acc = (acc + i23 * 13 + 616) % 100003;
  }
  acc = (acc * 31 + 4704) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  for (let i27 = 0; i27 < 10; i27++) {
    acc = (acc + i27 * 13 + 309) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  for (let i29 = 0; i29 < 7; i29++) {
    acc = (acc + i29 * 13 + 236) % 100003;
  }
  acc = (acc * 31 + 6043) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = (acc * 31 + 7576) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 171) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  for (let i39 = 0; i39 < 4; i39++) {
    acc = (acc + i39 * 13 + 877) % 100003;
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  if (acc % 12 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const ix44: number = buf.indexOf('p78');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  if (acc % 22 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = (acc * 31 + 426) % 65521;
  if (acc % 27 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  for (let i48 = 0; i48 < 5; i48++) {
    acc = (acc + i48 * 13 + 936) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 259) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  const ix0: number = buf.indexOf('p78');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-1'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i2 = 0; i2 < 9; i2++) {
    acc = (acc + i2 * 13 + 20) % 100003;
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 118) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 41) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const rc5: Rec78 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  const ix7: number = buf.indexOf('p78');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 16) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  buf += `q10:${acc % 97}`;
  buf += 'rebate11-' + acc.toString();
  acc = acc + 459 - (acc % 27);
  buf += 'freight13-' + acc.toString();
  m01.set('k14', acc % 997);
  const rc15: Rec78 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const rc16: Rec78 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 105) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  for (let i20 = 0; i20 < 5; i20++) {
    acc = (acc + i20 * 13 + 82) % 100003;
  }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  buf += 'depot26-' + acc.toString();
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  acc = acc + 794 - (acc % 32);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const rc31: Rec78 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  if (acc % 21 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 150) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  const rc36: Rec78 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const ix37: number = buf.indexOf('p78');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  buf += `q38:${acc % 97}`;
  const ix39: number = buf.indexOf('p78');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += `q40:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += `q42:${acc % 97}`;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const rc47: Rec78 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += 'dispatch49-' + acc.toString();
  buf += `q50:${acc % 97}`;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 260) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const rc3: Rec78 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += 'ticket4-' + acc.toString();
  const ix5: number = buf.indexOf('p78');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  buf += `q7:${acc % 97}`;
  const rc8: Rec78 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const ix9: number = buf.indexOf('p78');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 122) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q12:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (acc % 16 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  m01.set('k15', acc % 997);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 106) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const ix19: number = buf.indexOf('p78');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  for (let i21 = 0; i21 < 7; i21++) {
    acc = (acc + i21 * 13 + 336) % 100003;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-22'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-23'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 28 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i26 = 0; i26 < 7; i26++) {
    acc = (acc + i26 * 13 + 914) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const ix28: number = buf.indexOf('p78');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const rc29: Rec78 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  if (acc % 10 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const rc31: Rec78 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const ix33: number = buf.indexOf('p78');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 177) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  arr.push(acc % 1000);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-38'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 307 - (acc % 29);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  acc = acc + 439 - (acc % 56);
  buf += `q42:${acc % 97}`;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (acc % 14 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += `q46:${acc % 97}`;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 139) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  for (let i49 = 0; i49 < 10; i49++) {
    acc = (acc + i49 * 13 + 28) % 100003;
  }
  buf += `q50:${acc % 97}`;
  try { if (acc % 29 === 9) { throw new Error('synthetic-51'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 261) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  buf += 'region0-' + acc.toString();
  m01.set('k1', acc % 997);
  m01.set('k2', acc % 997);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const rc6: Rec78 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const ix7: number = buf.indexOf('p78');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const ix8: number = buf.indexOf('p78');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  acc = acc + 204 - (acc % 74);
  const ix10: number = buf.indexOf('p78');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  acc = acc + 699 - (acc % 85);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 149) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  arr.push(acc % 1000);
  const ix20: number = buf.indexOf('p78');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  buf += `q21:${acc % 97}`;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += `q23:${acc % 97}`;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  for (let i25 = 0; i25 < 8; i25++) {
    acc = (acc + i25 * 13 + 331) % 100003;
  }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 44) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const ix28: number = buf.indexOf('p78');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  for (let i29 = 0; i29 < 4; i29++) {
    acc = (acc + i29 * 13 + 340) % 100003;
  }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const ix31: number = buf.indexOf('p78');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 102) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  for (let i36 = 0; i36 < 8; i36++) {
    acc = (acc + i36 * 13 + 564) % 100003;
  }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += `q38:${acc % 97}`;
  for (let i39 = 0; i39 < 5; i39++) {
    acc = (acc + i39 * 13 + 74) % 100003;
  }
  m01.set('k40', acc % 997);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  m01.set('k43', acc % 997);
  for (let i44 = 0; i44 < 8; i44++) {
    acc = (acc + i44 * 13 + 143) % 100003;
  }
  buf += 'crate45-' + acc.toString();
  const rc46: Rec78 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5086) % 65521;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  for (let i50 = 0; i50 < 7; i50++) {
    acc = (acc + i50 * 13 + 917) % 100003;
  }
  acc = (acc * 31 + 7409) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 262) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  acc = acc + 514 - (acc % 92);
  for (let i2 = 0; i2 < 12; i2++) {
    acc = (acc + i2 * 13 + 919) % 100003;
  }
  const ix3: number = buf.indexOf('p78');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  if (acc % 11 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += `q5:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i7 = 0; i7 < 11; i7++) {
    acc = (acc + i7 * 13 + 143) % 100003;
  }
  const rc8: Rec78 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  buf += `q9:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  if (acc % 10 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += `q15:${acc % 97}`;
  const ix16: number = buf.indexOf('p78');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 191) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 9 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  acc = acc + 278 - (acc % 26);
  for (let i20 = 0; i20 < 3; i20++) {
    acc = (acc + i20 * 13 + 639) % 100003;
  }
  m01.set('k21', acc % 997);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 182) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += `q24:${acc % 97}`;
  buf += 'routeplan25-' + acc.toString();
  try { if (acc % 29 === 13) { throw new Error('synthetic-26'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 24 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-28'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 141) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  for (let i31 = 0; i31 < 9; i31++) {
    acc = (acc + i31 * 13 + 346) % 100003;
  }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 106) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const ix33: number = buf.indexOf('p78');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 125) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'waybill35-' + acc.toString();
  try { if (acc % 29 === 22) { throw new Error('synthetic-36'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const rc37: Rec78 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  const ix38: number = buf.indexOf('p78');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  buf += `q39:${acc % 97}`;
  const ix40: number = buf.indexOf('p78');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8716) % 65521;
  buf += `q42:${acc % 97}`;
  buf += `q43:${acc % 97}`;
  m01.set('k44', acc % 997);
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const rc46: Rec78 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  acc = acc + 46 - (acc % 62);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  if (acc % 28 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const ix51: number = buf.indexOf('p78');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 263) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  for (let i0 = 0; i0 < 7; i0++) {
    acc = (acc + i0 * 13 + 751) % 100003;
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  acc = acc + 251 - (acc % 54);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 127) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  for (let i5 = 0; i5 < 5; i5++) {
    acc = (acc + i5 * 13 + 743) % 100003;
  }
  const ix6: number = buf.indexOf('p78');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8205) % 65521;
  buf += `q8:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  buf += `q14:${acc % 97}`;
  acc = acc + 336 - (acc % 23);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 152) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const ix19: number = buf.indexOf('p78');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 93) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  acc = acc + 588 - (acc % 11);
  const ix24: number = buf.indexOf('p78');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 88) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += `q26:${acc % 97}`;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const ix29: number = buf.indexOf('p78');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const ix30: number = buf.indexOf('p78');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8360) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 97) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 8 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  m01.set('k36', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  arr.push(acc % 1000);
  if (acc % 16 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  try { if (acc % 29 === 5) { throw new Error('synthetic-41'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = acc + 549 - (acc % 78);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 47) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const rc49: Rec78 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix51: number = buf.indexOf('p78');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 264) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 119) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  buf += `q4:${acc % 97}`;
  acc = (acc * 31 + 8249) % 65521;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  try { if (acc % 29 === 14) { throw new Error('synthetic-8'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k9', acc % 997);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 75) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  m01.set('k11', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 27) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  buf += 'warehouse19-' + acc.toString();
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  buf += `q22:${acc % 97}`;
  try { if (acc % 29 === 15) { throw new Error('synthetic-23'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k24', acc % 997);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 88) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  m01.set('k28', acc % 997);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  for (let i33 = 0; i33 < 8; i33++) {
    acc = (acc + i33 * 13 + 840) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 119) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-35'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  acc = (acc * 31 + 7642) % 65521;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const rc40: Rec78 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  buf += `q41:${acc % 97}`;
  buf += 'vendor42-' + acc.toString();
  m01.set('k43', acc % 997);
  m01.set('k44', acc % 997);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += `q46:${acc % 97}`;
  try { if (acc % 29 === 17) { throw new Error('synthetic-47'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const ix48: number = buf.indexOf('p78');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  const ix49: number = buf.indexOf('p78');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0078_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0078_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0078_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 265) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const ix2: number = buf.indexOf('p78');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const ix5: number = buf.indexOf('p78');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  buf += 'vendor6-' + acc.toString();
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const ix10: number = buf.indexOf('p78');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  if (acc % 31 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  if (acc % 29 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  acc = acc + 232 - (acc % 87);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  acc = acc + 432 - (acc % 23);
  try { if (acc % 29 === 3) { throw new Error('synthetic-16'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 101) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const ix21: number = buf.indexOf('p78');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  if (acc % 28 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  buf += 'pallet24-' + acc.toString();
  if (acc % 8 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  buf += 'journey28-' + acc.toString();
  buf += `q29:${acc % 97}`;
  acc = (acc * 31 + 4056) % 65521;
  const ix31: number = buf.indexOf('p78');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  for (let i33 = 0; i33 < 4; i33++) {
    acc = (acc + i33 * 13 + 991) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 107) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 62) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  m01.set('k36', acc % 997);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += 'pickup38-' + acc.toString();
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += `q41:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  acc = acc + 844 - (acc % 34);
  if (acc % 10 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const rc49: Rec78 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 266) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  acc = acc + 768 - (acc % 63);
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 112) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 29) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const ix3: number = buf.indexOf('p78');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const ix4: number = buf.indexOf('p78');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5816) % 65521;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 185) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  m01.set('k7', acc % 997);
  acc = acc + 365 - (acc % 73);
  arr.push(acc % 1000);
  for (let i10 = 0; i10 < 4; i10++) {
    acc = (acc + i10 * 13 + 624) % 100003;
  }
  if (acc % 26 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  buf += `q12:${acc % 97}`;
  for (let i13 = 0; i13 < 5; i13++) {
    acc = (acc + i13 * 13 + 190) % 100003;
  }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  acc = acc + 388 - (acc % 40);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 149) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const ix20: number = buf.indexOf('p78');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  if (acc % 17 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  if (acc % 9 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  m01.set('k24', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  m01.set('k27', acc % 997);
  buf += `q28:${acc % 97}`;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  acc = (acc * 31 + 2248) % 65521;
  try { if (acc % 29 === 5) { throw new Error('synthetic-32'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i33 = 0; i33 < 10; i33++) {
    acc = (acc + i33 * 13 + 507) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 166) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  try { if (acc % 29 === 8) { throw new Error('synthetic-36'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const ix37: number = buf.indexOf('p78');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = acc + 365 - (acc % 70);
  m01.set('k42', acc % 997);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const ix49: number = buf.indexOf('p78');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 267) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  m01.set('k0', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const rc2: Rec78 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const ix4: number = buf.indexOf('p78');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 136) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  buf += 'invoice6-' + acc.toString();
  try { if (acc % 29 === 8) { throw new Error('synthetic-7'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-8'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 714 - (acc % 93);
  const rc10: Rec78 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  if (acc % 26 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  acc = acc + 49 - (acc % 78);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = acc + 477 - (acc % 53);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 108) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  const ix19: number = buf.indexOf('p78');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  acc = (acc * 31 + 8187) % 65521;
  buf += `q22:${acc % 97}`;
  m01.set('k23', acc % 997);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 75) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  const ix25: number = buf.indexOf('p78');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const ix30: number = buf.indexOf('p78');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 98) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p78');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  m01.set('k37', acc % 997);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  acc = acc + 258 - (acc % 44);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 2) { throw new Error('synthetic-42'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3951) % 65521;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const ix45: number = buf.indexOf('p78');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += `q48:${acc % 97}`;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 268) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  for (let i0 = 0; i0 < 6; i0++) {
    acc = (acc + i0 * 13 + 522) % 100003;
  }
  const ix1: number = buf.indexOf('p78');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const rc3: Rec78 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  acc = acc + 209 - (acc % 94);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  acc = (acc * 31 + 8592) % 65521;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  acc = (acc * 31 + 5275) % 65521;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i15 = 0; i15 < 3; i15++) {
    acc = (acc + i15 * 13 + 384) % 100003;
  }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 39) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const ix19: number = buf.indexOf('p78');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  m01.set('k25', acc % 997);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 11) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 141) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const rc31: Rec78 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const rc32: Rec78 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 18) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 154) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 7 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const rc37: Rec78 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  buf += 'invoice38-' + acc.toString();
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  for (let i41 = 0; i41 < 9; i41++) {
    acc = (acc + i41 * 13 + 495) % 100003;
  }
  const rc42: Rec78 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  if (acc % 27 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  m01.set('k44', acc % 997);
  const rc45: Rec78 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += `q47:${acc % 97}`;
  acc = acc + 457 - (acc % 66);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const ix50: number = buf.indexOf('p78');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 269) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  const rc0: Rec78 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  buf += `q2:${acc % 97}`;
  m01.set('k3', acc % 997);
  buf += `q4:${acc % 97}`;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9849) % 65521;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  arr.push(acc % 1000);
  const ix9: number = buf.indexOf('p78');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  buf += `q11:${acc % 97}`;
  const rc12: Rec78 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += `q15:${acc % 97}`;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 73) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  acc = acc + 748 - (acc % 7);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 168) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  if (acc % 22 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += 'coupon22-' + acc.toString();
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const rc25: Rec78 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  acc = acc + 427 - (acc % 35);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  buf += `q29:${acc % 97}`;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  buf += 'ticket31-' + acc.toString();
  const ix32: number = buf.indexOf('p78');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 195) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 103) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-38'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i39 = 0; i39 < 12; i39++) {
    acc = (acc + i39 * 13 + 638) % 100003;
  }
  acc = acc + 352 - (acc % 25);
  const ix41: number = buf.indexOf('p78');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  for (let i43 = 0; i43 < 5; i43++) {
    acc = (acc + i43 * 13 + 832) % 100003;
  }
  acc = (acc * 31 + 8909) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-45'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 16) { throw new Error('synthetic-47'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6487) % 65521;
  buf += `q49:${acc % 97}`;
  buf += 'journey50-' + acc.toString();
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 270) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  acc = (acc * 31 + 2747) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-1'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 136) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 143) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  buf += `q4:${acc % 97}`;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += `q6:${acc % 97}`;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 99) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  try { if (acc % 29 === 16) { throw new Error('synthetic-8'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 11) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  buf += 'customs11-' + acc.toString();
  for (let i12 = 0; i12 < 11; i12++) {
    acc = (acc + i12 * 13 + 192) % 100003;
  }
  arr.push(acc % 1000);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 19) { throw new Error('synthetic-16'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 51) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 71) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 26) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 110) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  acc = acc + 87 - (acc % 94);
  try { if (acc % 29 === 18) { throw new Error('synthetic-25'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q26:${acc % 97}`;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const ix28: number = buf.indexOf('p78');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  acc = acc + 743 - (acc % 48);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const rc33: Rec78 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 156) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p78');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  acc = acc + 916 - (acc % 74);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = (acc * 31 + 6697) % 65521;
  const ix40: number = buf.indexOf('p78');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  m01.set('k41', acc % 997);
  buf += `q42:${acc % 97}`;
  const ix43: number = buf.indexOf('p78');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (acc % 16 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  acc = (acc * 31 + 9668) % 65521;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 271) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  arr.push(acc % 1000);
  for (let i1 = 0; i1 < 12; i1++) {
    acc = (acc + i1 * 13 + 702) % 100003;
  }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  for (let i3 = 0; i3 < 3; i3++) {
    acc = (acc + i3 * 13 + 978) % 100003;
  }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 182) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = (acc * 31 + 5701) % 65521;
  if (acc % 16 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  buf += 'dock7-' + acc.toString();
  if (acc % 12 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  buf += `q9:${acc % 97}`;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  buf += `q11:${acc % 97}`;
  for (let i12 = 0; i12 < 3; i12++) {
    acc = (acc + i12 * 13 + 695) % 100003;
  }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 96) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 2579) % 65521;
  if (acc % 7 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  acc = acc + 746 - (acc % 37);
  if (acc % 9 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const rc22: Rec78 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  arr.push(acc % 1000);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 35) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix26: number = buf.indexOf('p78');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += 'journey29-' + acc.toString();
  for (let i30 = 0; i30 < 3; i30++) {
    acc = (acc + i30 * 13 + 805) % 100003;
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 16) { throw new Error('synthetic-33'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 198) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 6; i35++) {
    acc = (acc + i35 * 13 + 221) % 100003;
  }
  buf += 'ticket36-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  try { if (acc % 29 === 22) { throw new Error('synthetic-38'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'settle39-' + acc.toString();
  for (let i40 = 0; i40 < 9; i40++) {
    acc = (acc + i40 * 13 + 365) % 100003;
  }
  acc = (acc * 31 + 6962) % 65521;
  acc = acc + 87 - (acc % 17);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  arr.push(acc % 1000);
  m01.set('k45', acc % 997);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-47'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 136) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-49'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 41) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  buf += 'dock51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 272) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  if (acc % 26 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  if (acc % 12 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  buf += `q2:${acc % 97}`;
  buf += `q3:${acc % 97}`;
  const ix4: number = buf.indexOf('p78');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const rc5: Rec78 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  m01.set('k6', acc % 997);
  arr.push(acc % 1000);
  m01.set('k8', acc % 997);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  m01.set('k11', acc % 997);
  const rc12: Rec78 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (acc % 10 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 163) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 455 - (acc % 78);
  arr.push(acc % 1000);
  if (acc % 25 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  m01.set('k22', acc % 997);
  arr.push(acc % 1000);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  m01.set('k25', acc % 997);
  const rc26: Rec78 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  acc = acc + 967 - (acc % 86);
  arr.push(acc % 1000);
  const rc29: Rec78 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  buf += 'vendor30-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-32'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 22 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 181) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  if (acc % 25 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2013) % 65521;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 6) { throw new Error('synthetic-39'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q40:${acc % 97}`;
  const rc41: Rec78 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const ix42: number = buf.indexOf('p78');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  m01.set('k44', acc % 997);
  for (let i45 = 0; i45 < 5; i45++) {
    acc = (acc + i45 * 13 + 188) % 100003;
  }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  for (let i47 = 0; i47 < 4; i47++) {
    acc = (acc + i47 * 13 + 232) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  acc = (acc * 31 + 1294) % 65521;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 273) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  try { if (acc % 29 === 17) { throw new Error('synthetic-0'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const ix2: number = buf.indexOf('p78');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5085) % 65521;
  const ix4: number = buf.indexOf('p78');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const rc8: Rec78 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  for (let i9 = 0; i9 < 10; i9++) {
    acc = (acc + i9 * 13 + 386) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 30) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 4) { throw new Error('synthetic-18'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 16 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  if (acc % 18 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 114) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  for (let i24 = 0; i24 < 10; i24++) {
    acc = (acc + i24 * 13 + 584) % 100003;
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-25'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 11 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  m01.set('k29', acc % 997);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  for (let i32 = 0; i32 < 10; i32++) {
    acc = (acc + i32 * 13 + 344) % 100003;
  }
  for (let i33 = 0; i33 < 8; i33++) {
    acc = (acc + i33 * 13 + 398) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 28) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 7; i35++) {
    acc = (acc + i35 * 13 + 424) % 100003;
  }
  const ix36: number = buf.indexOf('p78');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  buf += `q38:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 153) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  if (acc % 17 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = acc + 127 - (acc % 36);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  buf += 'pallet46-' + acc.toString();
  for (let i47 = 0; i47 < 8; i47++) {
    acc = (acc + i47 * 13 + 829) % 100003;
  }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  if (acc % 11 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 38) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = (acc * 31 + 958) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 274) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  const rc0: Rec78 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  acc = acc + 40 - (acc % 54);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 152) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += `q7:${acc % 97}`;
  m01.set('k8', acc % 997);
  buf += `q9:${acc % 97}`;
  acc = (acc * 31 + 6557) % 65521;
  arr.push(acc % 1000);
  acc = acc + 65 - (acc % 37);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  buf += 'warehouse14-' + acc.toString();
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  acc = (acc * 31 + 8823) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 118) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 76) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = (acc * 31 + 5730) % 65521;
  m01.set('k24', acc % 997);
  arr.push(acc % 1000);
  m01.set('k26', acc % 997);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const ix29: number = buf.indexOf('p78');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const ix30: number = buf.indexOf('p78');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  acc = acc + 854 - (acc % 85);
  buf += 'parcel32-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 174) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec78 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  if (acc % 12 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  buf += `q41:${acc % 97}`;
  const rc42: Rec78 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += 'stocktake44-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = acc + 666 - (acc % 41);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const ix50: number = buf.indexOf('p78');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5645) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0078_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0078_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0078_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 275) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  for (let i1 = 0; i1 < 12; i1++) {
    acc = (acc + i1 * 13 + 64) % 100003;
  }
  buf += 'region2-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const rc6: Rec78 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  acc = (acc * 31 + 3791) % 65521;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  acc = (acc * 31 + 9383) % 65521;
  m01.set('k12', acc % 997);
  acc = acc + 829 - (acc % 52);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 37) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  if (acc % 23 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 189) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 146) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  for (let i20 = 0; i20 < 6; i20++) {
    acc = (acc + i20 * 13 + 946) % 100003;
  }
  arr.push(acc % 1000);
  const ix22: number = buf.indexOf('p78');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-25'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 109) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const rc27: Rec78 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 159) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  try { if (acc % 29 === 22) { throw new Error('synthetic-29'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  for (let i33 = 0; i33 < 5; i33++) {
    acc = (acc + i33 * 13 + 490) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 53) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec78 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  for (let i37 = 0; i37 < 9; i37++) {
    acc = (acc + i37 * 13 + 36) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const ix39: number = buf.indexOf('p78');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const rc41: Rec78 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = acc + 576 - (acc % 84);
  buf += 'region45-' + acc.toString();
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 148) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  for (let i47 = 0; i47 < 4; i47++) {
    acc = (acc + i47 * 13 + 164) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += 'routeplan50-' + acc.toString();
  for (let i51 = 0; i51 < 10; i51++) {
    acc = (acc + i51 * 13 + 398) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 276) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  buf += `q0:${acc % 97}`;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 80) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  acc = (acc * 31 + 3552) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += 'customs8-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 28 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  acc = acc + 176 - (acc % 47);
  const ix12: number = buf.indexOf('p78');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const ix13: number = buf.indexOf('p78');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const ix15: number = buf.indexOf('p78');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += 'refund16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 60) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  const ix19: number = buf.indexOf('p78');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += `q21:${acc % 97}`;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  buf += 'sku23-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-24'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  try { if (acc % 29 === 19) { throw new Error('synthetic-26'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 511 - (acc % 76);
  if (acc % 14 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  acc = acc + 56 - (acc % 84);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  acc = (acc * 31 + 1494) % 65521;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 21) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const rc36: Rec78 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  if (acc % 12 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-39'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 119) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  buf += 'depot46-' + acc.toString();
  buf += `q47:${acc % 97}`;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  acc = (acc * 31 + 1678) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  if (acc % 25 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 277) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  if (acc % 30 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += 'customs1-' + acc.toString();
  for (let i2 = 0; i2 < 9; i2++) {
    acc = (acc + i2 * 13 + 978) % 100003;
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 159) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  for (let i4 = 0; i4 < 8; i4++) {
    acc = (acc + i4 * 13 + 819) % 100003;
  }
  acc = (acc * 31 + 4596) % 65521;
  acc = (acc * 31 + 4848) % 65521;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += `q8:${acc % 97}`;
  const rc9: Rec78 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  acc = (acc * 31 + 5947) % 65521;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-12'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 610 - (acc % 69);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  acc = (acc * 31 + 8550) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 110) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 5912) % 65521;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 9086) % 65521;
  buf += 'rebate21-' + acc.toString();
  const ix22: number = buf.indexOf('p78');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += 'rebate24-' + acc.toString();
  arr.push(acc % 1000);
  for (let i26 = 0; i26 < 6; i26++) {
    acc = (acc + i26 * 13 + 64) % 100003;
  }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  try { if (acc % 29 === 5) { throw new Error('synthetic-29'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'balance30-' + acc.toString();
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 175) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 53) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 23) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = acc + 690 - (acc % 28);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (acc % 29 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const ix44: number = buf.indexOf('p78');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 553) % 65521;
  acc = acc + 957 - (acc % 58);
  buf += 'routeplan47-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += 'refund51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 278) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 123) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  for (let i1 = 0; i1 < 9; i1++) {
    acc = (acc + i1 * 13 + 398) % 100003;
  }
  const rc2: Rec78 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  buf += `q3:${acc % 97}`;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 161) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  try { if (acc % 29 === 13) { throw new Error('synthetic-5'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 128) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 180) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 101) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  buf += `q10:${acc % 97}`;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  for (let i12 = 0; i12 < 4; i12++) {
    acc = (acc + i12 * 13 + 614) % 100003;
  }
  acc = acc + 663 - (acc % 19);
  const rc14: Rec78 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  for (let i15 = 0; i15 < 5; i15++) {
    acc = (acc + i15 * 13 + 846) % 100003;
  }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 63) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'ledger18-' + acc.toString();
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = acc + 169 - (acc % 29);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  arr.push(acc % 1000);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  if (acc % 12 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-31'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const rc32: Rec78 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const rc33: Rec78 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 104) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  acc = (acc * 31 + 2802) % 65521;
  acc = acc + 865 - (acc % 35);
  const rc38: Rec78 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += 'batch41-' + acc.toString();
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const ix43: number = buf.indexOf('p78');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2519) % 65521;
  buf += `q45:${acc % 97}`;
  acc = (acc * 31 + 8103) % 65521;
  acc = acc + 499 - (acc % 18);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 279) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  m01.set('k3', acc % 997);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  for (let i5 = 0; i5 < 10; i5++) {
    acc = (acc + i5 * 13 + 298) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const rc7: Rec78 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  arr.push(acc % 1000);
  const rc9: Rec78 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  arr.push(acc % 1000);
  if (acc % 19 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 70) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 96) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const ix20: number = buf.indexOf('p78');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-21'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  acc = (acc * 31 + 5603) % 65521;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const rc25: Rec78 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 95) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const ix29: number = buf.indexOf('p78');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const rc30: Rec78 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  if (acc % 14 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 68) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 17 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  for (let i36 = 0; i36 < 12; i36++) {
    acc = (acc + i36 * 13 + 461) % 100003;
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  buf += 'order39-' + acc.toString();
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  m01.set('k41', acc % 997);
  const rc42: Rec78 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  m01.set('k44', acc % 997);
  try { if (acc % 29 === 8) { throw new Error('synthetic-45'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const ix49: number = buf.indexOf('p78');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 194) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 27) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 280) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  buf += 'policy0-' + acc.toString();
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const rc2: Rec78 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  for (let i3 = 0; i3 < 11; i3++) {
    acc = (acc + i3 * 13 + 416) % 100003;
  }
  const ix4: number = buf.indexOf('p78');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = acc + 454 - (acc % 11);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  buf += 'dock10-' + acc.toString();
  for (let i11 = 0; i11 < 6; i11++) {
    acc = (acc + i11 * 13 + 706) % 100003;
  }
  buf += 'settle12-' + acc.toString();
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  m01.set('k14', acc % 997);
  acc = (acc * 31 + 8126) % 65521;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 11) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const rc19: Rec78 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const rc20: Rec78 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  if (acc % 14 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  m01.set('k23', acc % 997);
  for (let i24 = 0; i24 < 3; i24++) {
    acc = (acc + i24 * 13 + 135) % 100003;
  }
  arr.push(acc % 1000);
  m01.set('k26', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-29'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i30 = 0; i30 < 6; i30++) {
    acc = (acc + i30 * 13 + 721) % 100003;
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  acc = (acc * 31 + 4638) % 65521;
  const ix33: number = buf.indexOf('p78');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 39) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const ix36: number = buf.indexOf('p78');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += `q37:${acc % 97}`;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 38) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  if (acc % 6 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7723) % 65521;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 176) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = acc + 123 - (acc % 16);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 281) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  m01.set('k0', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += 'order3-' + acc.toString();
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 168) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const rc5: Rec78 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += 'tariff6-' + acc.toString();
  for (let i7 = 0; i7 < 3; i7++) {
    acc = (acc + i7 * 13 + 392) % 100003;
  }
  const ix8: number = buf.indexOf('p78');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 354) % 65521;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  for (let i13 = 0; i13 < 7; i13++) {
    acc = (acc + i13 * 13 + 707) % 100003;
  }
  buf += 'bay14-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = (acc * 31 + 6239) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 25) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  try { if (acc % 29 === 20) { throw new Error('synthetic-19'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1298) % 65521;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  if (acc % 17 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  for (let i25 = 0; i25 < 9; i25++) {
    acc = (acc + i25 * 13 + 60) % 100003;
  }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = acc + 736 - (acc % 53);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-29'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 8 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  if (acc % 21 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 22) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = acc + 620 - (acc % 51);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 87) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  if (acc % 20 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += 'routeplan37-' + acc.toString();
  const ix38: number = buf.indexOf('p78');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const rc40: Rec78 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 17) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = acc + 439 - (acc % 29);
  const ix45: number = buf.indexOf('p78');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  acc = acc + 429 - (acc % 80);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 165) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  buf += `q50:${acc % 97}`;
  acc = (acc * 31 + 6024) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 282) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  for (let i0 = 0; i0 < 8; i0++) {
    acc = (acc + i0 * 13 + 45) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  const rc3: Rec78 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-4'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const ix5: number = buf.indexOf('p78');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  if (acc % 14 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  buf += `q7:${acc % 97}`;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  arr.push(acc % 1000);
  for (let i10 = 0; i10 < 12; i10++) {
    acc = (acc + i10 * 13 + 943) % 100003;
  }
  const ix11: number = buf.indexOf('p78');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  m01.set('k12', acc % 997);
  arr.push(acc % 1000);
  m01.set('k14', acc % 997);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 71) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec78 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 11) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = acc + 922 - (acc % 86);
  for (let i21 = 0; i21 < 9; i21++) {
    acc = (acc + i21 * 13 + 274) % 100003;
  }
  for (let i22 = 0; i22 < 9; i22++) {
    acc = (acc + i22 * 13 + 580) % 100003;
  }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 153) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  if (acc % 26 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  buf += 'pallet25-' + acc.toString();
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  m01.set('k27', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  const ix30: number = buf.indexOf('p78');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2253) % 65521;
  acc = acc + 374 - (acc % 69);
  if (acc % 17 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 167) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 374 - (acc % 12);
  m01.set('k36', acc % 997);
  acc = (acc * 31 + 1292) % 65521;
  const ix38: number = buf.indexOf('p78');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  m01.set('k39', acc % 997);
  buf += 'customs40-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  buf += `q44:${acc % 97}`;
  buf += 'routeplan45-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 283) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 127) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  buf += `q2:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const ix4: number = buf.indexOf('p78');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const rc5: Rec78 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += 'transit8-' + acc.toString();
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const ix10: number = buf.indexOf('p78');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  buf += 'depot11-' + acc.toString();
  acc = acc + 579 - (acc % 63);
  m01.set('k13', acc % 997);
  try { if (acc % 29 === 10) { throw new Error('synthetic-14'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i15 = 0; i15 < 8; i15++) {
    acc = (acc + i15 * 13 + 423) % 100003;
  }
  for (let i16 = 0; i16 < 9; i16++) {
    acc = (acc + i16 * 13 + 63) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 115) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  for (let i19 = 0; i19 < 8; i19++) {
    acc = (acc + i19 * 13 + 107) % 100003;
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 101) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  acc = acc + 803 - (acc % 25);
  try { if (acc % 29 === 14) { throw new Error('synthetic-26'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 26 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q30:${acc % 97}`;
  acc = (acc * 31 + 3151) % 65521;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 183) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 189) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += 'refund38-' + acc.toString();
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  buf += 'depot40-' + acc.toString();
  for (let i41 = 0; i41 < 3; i41++) {
    acc = (acc + i41 * 13 + 876) % 100003;
  }
  acc = (acc * 31 + 935) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-43'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const ix45: number = buf.indexOf('p78');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  if (acc % 21 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  m01.set('k47', acc % 997);
  m01.set('k48', acc % 997);
  m01.set('k49', acc % 997);
  const ix50: number = buf.indexOf('p78');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 284) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const ix2: number = buf.indexOf('p78');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 117) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  m01.set('k4', acc % 997);
  const ix5: number = buf.indexOf('p78');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const ix6: number = buf.indexOf('p78');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 184) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  acc = acc + 255 - (acc % 13);
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 951) % 100003;
  }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  m01.set('k15', acc % 997);
  acc = acc + 327 - (acc % 32);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 63) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'refund19-' + acc.toString();
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const ix21: number = buf.indexOf('p78');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 48) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  for (let i25 = 0; i25 < 4; i25++) {
    acc = (acc + i25 * 13 + 972) % 100003;
  }
  buf += `q26:${acc % 97}`;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const rc28: Rec78 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = acc + 459 - (acc % 38);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  for (let i31 = 0; i31 < 4; i31++) {
    acc = (acc + i31 * 13 + 384) % 100003;
  }
  const rc32: Rec78 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 39) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 3; i35++) {
    acc = (acc + i35 * 13 + 472) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  for (let i38 = 0; i38 < 5; i38++) {
    acc = (acc + i38 * 13 + 459) % 100003;
  }
  m01.set('k39', acc % 997);
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  if (acc % 12 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const ix42: number = buf.indexOf('p78');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 19) { throw new Error('synthetic-44'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const rc46: Rec78 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  m01.set('k47', acc % 997);
  const ix48: number = buf.indexOf('p78');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += `q49:${acc % 97}`;
  if (acc % 5 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const rc51: Rec78 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0078_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0078_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0078_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 285) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  acc = acc + 155 - (acc % 74);
  arr.push(acc % 1000);
  const rc2: Rec78 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  buf += 'invoice3-' + acc.toString();
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 177) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const rc7: Rec78 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += 'region10-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  m01.set('k14', acc % 997);
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  for (let i16 = 0; i16 < 6; i16++) {
    acc = (acc + i16 * 13 + 11) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 129) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const ix19: number = buf.indexOf('p78');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  buf += `q21:${acc % 97}`;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += `q24:${acc % 97}`;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const ix28: number = buf.indexOf('p78');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 1722) % 65521;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  buf += `q32:${acc % 97}`;
  if (acc % 31 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 79) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 158) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  try { if (acc % 29 === 20) { throw new Error('synthetic-39'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 85) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const ix43: number = buf.indexOf('p78');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  m01.set('k44', acc % 997);
  const ix45: number = buf.indexOf('p78');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const rc46: Rec78 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  buf += 'parcel47-' + acc.toString();
  m01.set('k48', acc % 997);
  m01.set('k49', acc % 997);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 17) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 286) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  m01.set('k0', acc % 997);
  const rc1: Rec78 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  if (acc % 16 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-3'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  try { if (acc % 29 === 11) { throw new Error('synthetic-5'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 14) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const rc8: Rec78 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = acc + 861 - (acc % 51);
  acc = acc + 967 - (acc % 13);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const rc12: Rec78 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const ix14: number = buf.indexOf('p78');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-15'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 151) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const rc21: Rec78 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  arr.push(acc % 1000);
  const ix23: number = buf.indexOf('p78');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  try { if (acc % 29 === 14) { throw new Error('synthetic-25'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 43) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  acc = acc + 548 - (acc % 15);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 151) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  if (acc % 17 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 197) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 3; i35++) {
    acc = (acc + i35 * 13 + 724) % 100003;
  }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  acc = acc + 670 - (acc % 89);
  try { if (acc % 29 === 10) { throw new Error('synthetic-38'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 832 - (acc % 7);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 154) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = acc + 719 - (acc % 11);
  const ix43: number = buf.indexOf('p78');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  acc = acc + 42 - (acc % 46);
  acc = (acc * 31 + 7995) % 65521;
  buf += 'ticket46-' + acc.toString();
  acc = (acc * 31 + 6884) % 65521;
  const rc48: Rec78 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  arr.push(acc % 1000);
  const rc50: Rec78 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0078_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 287) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit78 = new Unit78(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += `q2:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1218) % 65521;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 129) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  for (let i13 = 0; i13 < 6; i13++) {
    acc = (acc + i13 * 13 + 204) % 100003;
  }
  const rc14: Rec78 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  for (let i15 = 0; i15 < 5; i15++) {
    acc = (acc + i15 * 13 + 359) % 100003;
  }
  acc = (acc * 31 + 9110) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 144) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  acc = acc + 160 - (acc % 70);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  buf += 'batch23-' + acc.toString();
  const rc24: Rec78 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const ix25: number = buf.indexOf('p78');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  arr.push(acc % 1000);
  const rc28: Rec78 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 106) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const rc31: Rec78 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 187) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p78');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 4434) % 65521;
  buf += `q38:${acc % 97}`;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  if (acc % 7 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  m01.set('k43', acc % 997);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  for (let i45 = 0; i45 < 11; i45++) {
    acc = (acc + i45 * 13 + 228) % 100003;
  }
  arr.push(acc % 1000);
  acc = acc + 122 - (acc % 36);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 54) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  if (acc % 11 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0078(): BizFn[] {
  return [biz_0078_00, biz_0078_01, biz_0078_02, biz_0078_03, biz_0078_04, biz_0078_05, biz_0078_06, biz_0078_07, biz_0078_08, biz_0078_09, biz_0078_10, biz_0078_11, biz_0078_12, biz_0078_13, biz_0078_14, biz_0078_15, biz_0078_16, biz_0078_17, biz_0078_18, biz_0078_19, biz_0078_20, biz_0078_21, biz_0078_22, biz_0078_23, biz_0078_24, biz_0078_25, biz_0078_26, biz_0078_27, biz_0078_28, biz_0078_29, biz_0078_30, biz_0078_31, biz_0078_32, biz_0078_33, biz_0078_34, biz_0078_35, biz_0078_36, biz_0078_37, biz_0078_38, biz_0078_39, biz_0078_40, biz_0078_41, biz_0078_42];
}

export function rega_0078(): ABizFn[] {
  return [biz_0078_09a, biz_0078_19a, biz_0078_29a, biz_0078_39a];
}
