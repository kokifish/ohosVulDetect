// Biz0014.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec14 { id: number; tag: string; score: number; }

class Unit14 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0014_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1834) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = acc + 697 - (acc % 83);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += 'client8-' + acc.toString();
  acc = (acc * 31 + 9173) % 65521;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  m01.set('k11', acc % 997);
  buf += 'tariff12-' + acc.toString();
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 35) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  acc = acc + 568 - (acc % 16);
  for (let i16 = 0; i16 < 6; i16++) {
    acc = (acc + i16 * 13 + 154) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 72) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  arr.push(acc % 1000);
  m01.set('k24', acc % 997);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const ix27: number = buf.indexOf('p14');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  if (acc % 15 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = (acc * 31 + 7328) % 65521;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-33'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 193) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  if (acc % 17 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const rc37: Rec14 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  const ix40: number = buf.indexOf('p14');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  buf += `q41:${acc % 97}`;
  acc = acc + 236 - (acc % 81);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += `q44:${acc % 97}`;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const rc46: Rec14 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  buf += 'journey48-' + acc.toString();
  arr.push(acc % 1000);
  acc = (acc * 31 + 3905) % 65521;
  const ix51: number = buf.indexOf('p14');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1835) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  acc = acc + 48 - (acc % 19);
  try { if (acc % 29 === 4) { throw new Error('synthetic-2'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const ix3: number = buf.indexOf('p14');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const rc5: Rec14 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 58) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  if (acc % 27 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  buf += `q9:${acc % 97}`;
  if (acc % 23 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  acc = (acc * 31 + 1432) % 65521;
  acc = (acc * 31 + 4728) % 65521;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 98) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 160) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  m01.set('k20', acc % 997);
  acc = (acc * 31 + 8922) % 65521;
  acc = (acc * 31 + 5713) % 65521;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  m01.set('k24', acc % 997);
  const rc25: Rec14 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  arr.push(acc % 1000);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (acc % 26 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  arr.push(acc % 1000);
  buf += 'freight32-' + acc.toString();
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 139) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 21) { throw new Error('synthetic-37'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q38:${acc % 97}`;
  const ix39: number = buf.indexOf('p14');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  buf += 'policy41-' + acc.toString();
  if (acc % 8 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  for (let i43 = 0; i43 < 5; i43++) {
    acc = (acc + i43 * 13 + 622) % 100003;
  }
  acc = acc + 200 - (acc % 56);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  arr.push(acc % 1000);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i49 = 0; i49 < 5; i49++) {
    acc = (acc + i49 * 13 + 767) % 100003;
  }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1836) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  try { if (acc % 29 === 7) { throw new Error('synthetic-1'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 198) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 152) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  acc = (acc * 31 + 4962) % 65521;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const rc14: Rec14 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const ix16: number = buf.indexOf('p14');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 59) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const rc22: Rec14 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  buf += 'ticket23-' + acc.toString();
  const rc24: Rec14 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  buf += 'dispatch27-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q29:${acc % 97}`;
  buf += 'sku30-' + acc.toString();
  acc = (acc * 31 + 8866) % 65521;
  m01.set('k32', acc % 997);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 64) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  try { if (acc % 29 === 16) { throw new Error('synthetic-37'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 5476) % 65521;
  buf += 'ticket39-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  m01.set('k43', acc % 997);
  if (acc % 23 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  acc = acc + 692 - (acc % 41);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  m01.set('k47', acc % 997);
  buf += 'order48-' + acc.toString();
  buf += `q49:${acc % 97}`;
  acc = (acc * 31 + 8656) % 65521;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1837) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  acc = acc + 144 - (acc % 66);
  try { if (acc % 29 === 2) { throw new Error('synthetic-1'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'routeplan2-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  try { if (acc % 29 === 8) { throw new Error('synthetic-4'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  acc = acc + 892 - (acc % 34);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  buf += 'crate8-' + acc.toString();
  if (acc % 19 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  m01.set('k10', acc % 997);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  try { if (acc % 29 === 16) { throw new Error('synthetic-14'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  buf += 'balance16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 164) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec14 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  m01.set('k20', acc % 997);
  acc = acc + 747 - (acc % 57);
  arr.push(acc % 1000);
  if (acc % 18 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  acc = acc + 85 - (acc % 49);
  acc = (acc * 31 + 8826) % 65521;
  acc = acc + 26 - (acc % 39);
  acc = acc + 859 - (acc % 93);
  buf += 'routeplan28-' + acc.toString();
  acc = (acc * 31 + 8186) % 65521;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 159) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 185) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const ix32: number = buf.indexOf('p14');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 32) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 275 - (acc % 94);
  acc = (acc * 31 + 919) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  buf += 'journey41-' + acc.toString();
  arr.push(acc % 1000);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  const ix45: number = buf.indexOf('p14');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-48'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'sku49-' + acc.toString();
  for (let i50 = 0; i50 < 7; i50++) {
    acc = (acc + i50 * 13 + 247) % 100003;
  }
  if (acc % 13 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1838) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  m01.set('k0', acc % 997);
  for (let i1 = 0; i1 < 11; i1++) {
    acc = (acc + i1 * 13 + 942) % 100003;
  }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 129) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (acc % 8 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (acc % 19 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = acc + 64 - (acc % 97);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 44) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  m01.set('k14', acc % 997);
  if (acc % 22 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const ix16: number = buf.indexOf('p14');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 154) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 59) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-20'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  for (let i22 = 0; i22 < 10; i22++) {
    acc = (acc + i22 * 13 + 124) % 100003;
  }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  if (acc % 29 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  if (acc % 19 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-27'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2596) % 65521;
  const rc30: Rec14 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 120) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  if (acc % 7 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  for (let i39 = 0; i39 < 7; i39++) {
    acc = (acc + i39 * 13 + 902) % 100003;
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-40'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  arr.push(acc % 1000);
  buf += `q43:${acc % 97}`;
  acc = acc + 578 - (acc % 44);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const rc46: Rec14 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += 'routeplan50-' + acc.toString();
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1839) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  for (let i0 = 0; i0 < 6; i0++) {
    acc = (acc + i0 * 13 + 539) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += `q3:${acc % 97}`;
  arr.push(acc % 1000);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 81) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  arr.push(acc % 1000);
  m01.set('k8', acc % 997);
  arr.push(acc % 1000);
  acc = acc + 126 - (acc % 42);
  acc = (acc * 31 + 5026) % 65521;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  buf += 'crate15-' + acc.toString();
  acc = acc + 671 - (acc % 16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 153) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec14 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1275) % 65521;
  for (let i23 = 0; i23 < 9; i23++) {
    acc = (acc + i23 * 13 + 424) % 100003;
  }
  m01.set('k24', acc % 997);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4147) % 65521;
  const rc28: Rec14 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const ix29: number = buf.indexOf('p14');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  if (acc % 31 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 113) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 10; i35++) {
    acc = (acc + i35 * 13 + 776) % 100003;
  }
  const rc36: Rec14 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  for (let i37 = 0; i37 < 3; i37++) {
    acc = (acc + i37 * 13 + 194) % 100003;
  }
  acc = acc + 120 - (acc % 50);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 89) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = (acc * 31 + 6377) % 65521;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 197) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q43:${acc % 97}`;
  const rc44: Rec14 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  acc = acc + 79 - (acc % 41);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = (acc * 31 + 4647) % 65521;
  buf += 'pallet49-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 30) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1840) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  try { if (acc % 29 === 7) { throw new Error('synthetic-1'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const rc4: Rec14 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 83) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const ix6: number = buf.indexOf('p14');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  if (acc % 21 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const ix8: number = buf.indexOf('p14');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-9'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'crate10-' + acc.toString();
  const rc11: Rec14 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  for (let i13 = 0; i13 < 9; i13++) {
    acc = (acc + i13 * 13 + 100) % 100003;
  }
  const ix14: number = buf.indexOf('p14');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 153) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'carrier18-' + acc.toString();
  if (acc % 12 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  arr.push(acc % 1000);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 76) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  buf += `q25:${acc % 97}`;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 16) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-27'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q28:${acc % 97}`;
  acc = (acc * 31 + 2597) % 65521;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 105) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 147) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 105) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  buf += 'bay42-' + acc.toString();
  const ix43: number = buf.indexOf('p14');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const ix44: number = buf.indexOf('p14');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  buf += 'journey47-' + acc.toString();
  acc = acc + 24 - (acc % 34);
  acc = acc + 189 - (acc % 21);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += 'audit51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1841) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 184) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  buf += `q6:${acc % 97}`;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  for (let i8 = 0; i8 < 7; i8++) {
    acc = (acc + i8 * 13 + 679) % 100003;
  }
  acc = acc + 56 - (acc % 50);
  m01.set('k10', acc % 997);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  buf += 'payout12-' + acc.toString();
  arr.push(acc % 1000);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  m01.set('k15', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 195) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 6442) % 65521;
  if (acc % 25 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  buf += `q20:${acc % 97}`;
  m01.set('k21', acc % 997);
  buf += 'payout22-' + acc.toString();
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 24) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 139) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const ix27: number = buf.indexOf('p14');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const ix28: number = buf.indexOf('p14');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  if (acc % 8 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-31'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  try { if (acc % 29 === 16) { throw new Error('synthetic-33'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 50) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  const rc36: Rec14 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  buf += `q37:${acc % 97}`;
  buf += 'transit38-' + acc.toString();
  arr.push(acc % 1000);
  const ix40: number = buf.indexOf('p14');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 12) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  buf += 'client45-' + acc.toString();
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  buf += `q49:${acc % 97}`;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1842) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  acc = acc + 627 - (acc % 62);
  acc = (acc * 31 + 3810) % 65521;
  for (let i2 = 0; i2 < 6; i2++) {
    acc = (acc + i2 * 13 + 829) % 100003;
  }
  const ix3: number = buf.indexOf('p14');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const rc4: Rec14 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  const rc5: Rec14 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 26) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  try { if (acc % 29 === 18) { throw new Error('synthetic-7'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  if (acc % 23 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  m01.set('k11', acc % 997);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  m01.set('k13', acc % 997);
  try { if (acc % 29 === 13) { throw new Error('synthetic-14'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 115 - (acc % 42);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 93) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 100) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  buf += `q19:${acc % 97}`;
  acc = acc + 488 - (acc % 38);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 160) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  m01.set('k22', acc % 997);
  for (let i23 = 0; i23 < 10; i23++) {
    acc = (acc + i23 * 13 + 419) % 100003;
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  try { if (acc % 29 === 5) { throw new Error('synthetic-26'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = (acc * 31 + 8621) % 65521;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 149) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  for (let i30 = 0; i30 < 4; i30++) {
    acc = (acc + i30 * 13 + 943) % 100003;
  }
  const rc31: Rec14 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  for (let i32 = 0; i32 < 10; i32++) {
    acc = (acc + i32 * 13 + 590) % 100003;
  }
  acc = acc + 736 - (acc % 9);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 198) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const ix38: number = buf.indexOf('p14');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  buf += `q39:${acc % 97}`;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  m01.set('k41', acc % 997);
  arr.push(acc % 1000);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-44'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const ix45: number = buf.indexOf('p14');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const ix46: number = buf.indexOf('p14');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  if (acc % 18 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-48'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 15 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  acc = acc + 68 - (acc % 63);
  for (let i51 = 0; i51 < 7; i51++) {
    acc = (acc + i51 * 13 + 581) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1843) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  arr.push(acc % 1000);
  acc = acc + 573 - (acc % 97);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += `q3:${acc % 97}`;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 90) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-8'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 94) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const rc13: Rec14 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  buf += 'audit14-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 9 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const rc20: Rec14 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  buf += 'pickup22-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  acc = (acc * 31 + 2275) % 65521;
  const ix25: number = buf.indexOf('p14');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 6604) % 65521;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-28'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const ix30: number = buf.indexOf('p14');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 6641) % 65521;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const ix33: number = buf.indexOf('p14');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 91) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  acc = acc + 578 - (acc % 41);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  acc = acc + 923 - (acc % 76);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 14) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const ix44: number = buf.indexOf('p14');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  for (let i45 = 0; i45 < 11; i45++) {
    acc = (acc + i45 * 13 + 976) % 100003;
  }
  m01.set('k46', acc % 997);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  buf += 'portal48-' + acc.toString();
  m01.set('k49', acc % 997);
  acc = (acc * 31 + 9564) % 65521;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0014_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0014_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0014_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1844) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = acc + 55 - (acc % 45);
  buf += 'routeplan2-' + acc.toString();
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += 'journey7-' + acc.toString();
  const ix8: number = buf.indexOf('p14');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = (acc * 31 + 7766) % 65521;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  arr.push(acc % 1000);
  acc = acc + 854 - (acc % 74);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 199) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  buf += `q15:${acc % 97}`;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 72) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 16) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const ix22: number = buf.indexOf('p14');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  for (let i23 = 0; i23 < 11; i23++) {
    acc = (acc + i23 * 13 + 620) % 100003;
  }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  buf += 'policy25-' + acc.toString();
  arr.push(acc % 1000);
  acc = acc + 51 - (acc % 62);
  try { if (acc % 29 === 3) { throw new Error('synthetic-28'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const rc29: Rec14 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  arr.push(acc % 1000);
  acc = acc + 993 - (acc % 28);
  buf += 'carrier32-' + acc.toString();
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 31) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 12; i35++) {
    acc = (acc + i35 * 13 + 986) % 100003;
  }
  for (let i36 = 0; i36 < 7; i36++) {
    acc = (acc + i36 * 13 + 45) % 100003;
  }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 198) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 41) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  buf += 'carrier39-' + acc.toString();
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 43) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  if (acc % 25 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const ix43: number = buf.indexOf('p14');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  m01.set('k44', acc % 997);
  try { if (acc % 29 === 4) { throw new Error('synthetic-45'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8708) % 65521;
  const ix47: number = buf.indexOf('p14');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  buf += `q48:${acc % 97}`;
  for (let i49 = 0; i49 < 12; i49++) {
    acc = (acc + i49 * 13 + 55) % 100003;
  }
  acc = (acc * 31 + 4628) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-51'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1845) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  const rc0: Rec14 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  acc = (acc * 31 + 2079) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-2'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  acc = (acc * 31 + 6179) % 65521;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const rc8: Rec14 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = acc + 208 - (acc % 66);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  buf += 'warehouse11-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  try { if (acc % 29 === 2) { throw new Error('synthetic-13'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'quota14-' + acc.toString();
  if (acc % 28 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 84) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 129) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  for (let i19 = 0; i19 < 12; i19++) {
    acc = (acc + i19 * 13 + 179) % 100003;
  }
  const ix20: number = buf.indexOf('p14');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-26'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  if (acc % 7 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  m01.set('k29', acc % 997);
  try { if (acc % 29 === 17) { throw new Error('synthetic-30'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 21 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  buf += `q32:${acc % 97}`;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 124) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  const ix36: number = buf.indexOf('p14');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  if (acc % 21 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const rc38: Rec14 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const rc39: Rec14 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 33) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  acc = acc + 18 - (acc % 22);
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  arr.push(acc % 1000);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  for (let i49 = 0; i49 < 10; i49++) {
    acc = (acc + i49 * 13 + 175) % 100003;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-50'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1846) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  buf += `q2:${acc % 97}`;
  acc = acc + 659 - (acc % 67);
  arr.push(acc % 1000);
  const ix5: number = buf.indexOf('p14');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  buf += 'bay6-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  buf += `q8:${acc % 97}`;
  for (let i9 = 0; i9 < 9; i9++) {
    acc = (acc + i9 * 13 + 34) % 100003;
  }
  for (let i10 = 0; i10 < 3; i10++) {
    acc = (acc + i10 * 13 + 90) % 100003;
  }
  const ix11: number = buf.indexOf('p14');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 29) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  buf += `q13:${acc % 97}`;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  buf += 'order16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 181) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 83) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  if (acc % 21 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  if (acc % 18 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2892) % 65521;
  for (let i29 = 0; i29 < 8; i29++) {
    acc = (acc + i29 * 13 + 547) % 100003;
  }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  acc = (acc * 31 + 782) % 65521;
  acc = (acc * 31 + 8333) % 65521;
  const ix33: number = buf.indexOf('p14');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 79) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 56 - (acc % 63);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const ix38: number = buf.indexOf('p14');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  buf += 'dispatch39-' + acc.toString();
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += 'batch42-' + acc.toString();
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 112) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  buf += 'audit45-' + acc.toString();
  arr.push(acc % 1000);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  acc = acc + 491 - (acc % 59);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += 'pallet51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1847) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  buf += `q0:${acc % 97}`;
  acc = acc + 836 - (acc % 18);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 99) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  acc = acc + 62 - (acc % 72);
  acc = (acc * 31 + 8938) % 65521;
  acc = (acc * 31 + 7423) % 65521;
  m01.set('k9', acc % 997);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = acc + 887 - (acc % 47);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  m01.set('k14', acc % 997);
  acc = (acc * 31 + 3110) % 65521;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 37) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p14');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const rc24: Rec14 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = acc + 390 - (acc % 37);
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  buf += 'client30-' + acc.toString();
  buf += 'batch31-' + acc.toString();
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 43) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 9; i35++) {
    acc = (acc + i35 * 13 + 445) % 100003;
  }
  const ix36: number = buf.indexOf('p14');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  const ix40: number = buf.indexOf('p14');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8003) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += 'dispatch44-' + acc.toString();
  for (let i45 = 0; i45 < 9; i45++) {
    acc = (acc + i45 * 13 + 758) % 100003;
  }
  buf += 'routeplan46-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += 'portal48-' + acc.toString();
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1848) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  if (acc % 21 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  buf += 'depot2-' + acc.toString();
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  m01.set('k6', acc % 997);
  buf += `q7:${acc % 97}`;
  acc = acc + 634 - (acc % 49);
  try { if (acc % 29 === 5) { throw new Error('synthetic-9'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 16 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 117) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  for (let i15 = 0; i15 < 11; i15++) {
    acc = (acc + i15 * 13 + 554) % 100003;
  }
  acc = acc + 968 - (acc % 15);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 125) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 212 - (acc % 96);
  buf += `q19:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1311) % 65521;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  const rc23: Rec14 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  arr.push(acc % 1000);
  const rc25: Rec14 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 47) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const rc27: Rec14 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  m01.set('k28', acc % 997);
  for (let i29 = 0; i29 < 9; i29++) {
    acc = (acc + i29 * 13 + 205) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  buf += 'ledger33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 97) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 16) { throw new Error('synthetic-35'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i36 = 0; i36 < 12; i36++) {
    acc = (acc + i36 * 13 + 76) % 100003;
  }
  if (acc % 16 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 67) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 94) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  acc = acc + 249 - (acc % 82);
  if (acc % 10 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  acc = acc + 408 - (acc % 15);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  acc = (acc * 31 + 3850) % 65521;
  acc = acc + 605 - (acc % 81);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1849) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  acc = (acc * 31 + 8591) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  acc = (acc * 31 + 2493) % 65521;
  buf += 'rebate4-' + acc.toString();
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  buf += `q6:${acc % 97}`;
  buf += `q7:${acc % 97}`;
  try { if (acc % 29 === 18) { throw new Error('synthetic-8'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 29 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  try { if (acc % 29 === 13) { throw new Error('synthetic-11'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  if (acc % 29 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 185) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec14 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const ix19: number = buf.indexOf('p14');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const rc20: Rec14 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  for (let i21 = 0; i21 < 6; i21++) {
    acc = (acc + i21 * 13 + 954) % 100003;
  }
  arr.push(acc % 1000);
  acc = acc + 930 - (acc % 46);
  acc = (acc * 31 + 1294) % 65521;
  acc = acc + 847 - (acc % 63);
  const rc26: Rec14 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += `q27:${acc % 97}`;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 199) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  buf += 'stocktake30-' + acc.toString();
  const ix31: number = buf.indexOf('p14');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 9157) % 65521;
  const ix33: number = buf.indexOf('p14');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 134) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  const ix36: number = buf.indexOf('p14');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 85) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = acc + 107 - (acc % 91);
  try { if (acc % 29 === 14) { throw new Error('synthetic-41'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7225) % 65521;
  buf += `q43:${acc % 97}`;
  arr.push(acc % 1000);
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  try { if (acc % 29 === 18) { throw new Error('synthetic-46'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 158) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  buf += 'settle49-' + acc.toString();
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1850) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  const ix0: number = buf.indexOf('p14');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  buf += `q3:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  for (let i5 = 0; i5 < 12; i5++) {
    acc = (acc + i5 * 13 + 148) % 100003;
  }
  for (let i6 = 0; i6 < 7; i6++) {
    acc = (acc + i6 * 13 + 80) % 100003;
  }
  for (let i7 = 0; i7 < 12; i7++) {
    acc = (acc + i7 * 13 + 712) % 100003;
  }
  acc = (acc * 31 + 1605) % 65521;
  const ix9: number = buf.indexOf('p14');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  acc = acc + 270 - (acc % 73);
  const rc12: Rec14 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 877) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 112) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'journey18-' + acc.toString();
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 150) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  buf += `q23:${acc % 97}`;
  buf += `q24:${acc % 97}`;
  const ix25: number = buf.indexOf('p14');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  for (let i26 = 0; i26 < 4; i26++) {
    acc = (acc + i26 * 13 + 746) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const ix31: number = buf.indexOf('p14');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 70) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 66) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-35'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 847 - (acc % 37);
  buf += `q37:${acc % 97}`;
  acc = acc + 872 - (acc % 85);
  const ix39: number = buf.indexOf('p14');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  m01.set('k40', acc % 997);
  buf += 'rebate41-' + acc.toString();
  arr.push(acc % 1000);
  for (let i43 = 0; i43 < 11; i43++) {
    acc = (acc + i43 * 13 + 942) % 100003;
  }
  const ix44: number = buf.indexOf('p14');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  m01.set('k45', acc % 997);
  acc = (acc * 31 + 8944) % 65521;
  buf += 'stocktake47-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const ix51: number = buf.indexOf('p14');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1851) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  acc = acc + 82 - (acc % 12);
  m01.set('k3', acc % 997);
  arr.push(acc % 1000);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 108) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  try { if (acc % 29 === 10) { throw new Error('synthetic-7'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'tariff8-' + acc.toString();
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  if (acc % 27 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  acc = acc + 772 - (acc % 7);
  acc = (acc * 31 + 4783) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = (acc * 31 + 4856) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 80) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  for (let i19 = 0; i19 < 9; i19++) {
    acc = (acc + i19 * 13 + 549) % 100003;
  }
  buf += `q20:${acc % 97}`;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 4) { throw new Error('synthetic-22'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  acc = (acc * 31 + 812) % 65521;
  buf += `q26:${acc % 97}`;
  arr.push(acc % 1000);
  if (acc % 15 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  if (acc % 14 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  if (acc % 13 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-31'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 6 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  if (acc % 15 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 14) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  m01.set('k37', acc % 997);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = (acc * 31 + 5361) % 65521;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  try { if (acc % 29 === 6) { throw new Error('synthetic-41'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q42:${acc % 97}`;
  if (acc % 6 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = acc + 37 - (acc % 82);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  buf += `q46:${acc % 97}`;
  if (acc % 30 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-48'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q49:${acc % 97}`;
  buf += 'vendor50-' + acc.toString();
  acc = (acc * 31 + 2860) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1852) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  buf += 'refund0-' + acc.toString();
  m01.set('k1', acc % 997);
  acc = (acc * 31 + 5377) % 65521;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const rc4: Rec14 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 173) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  try { if (acc % 29 === 4) { throw new Error('synthetic-10'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8052) % 65521;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 152) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  m01.set('k13', acc % 997);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 122) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  buf += `q15:${acc % 97}`;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 50) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 165) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const rc20: Rec14 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  buf += 'freight21-' + acc.toString();
  if (acc % 13 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const ix23: number = buf.indexOf('p14');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const rc24: Rec14 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  buf += `q25:${acc % 97}`;
  arr.push(acc % 1000);
  acc = acc + 542 - (acc % 49);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 18) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const rc36: Rec14 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += 'order40-' + acc.toString();
  const ix41: number = buf.indexOf('p14');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  buf += 'transit43-' + acc.toString();
  const ix44: number = buf.indexOf('p14');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += `q47:${acc % 97}`;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const ix49: number = buf.indexOf('p14');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const ix51: number = buf.indexOf('p14');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1853) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  acc = (acc * 31 + 5201) % 65521;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  try { if (acc % 29 === 13) { throw new Error('synthetic-3'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-4'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 491) % 65521;
  const rc6: Rec14 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  buf += 'dock7-' + acc.toString();
  arr.push(acc % 1000);
  m01.set('k9', acc % 997);
  buf += `q10:${acc % 97}`;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  buf += 'settle15-' + acc.toString();
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 56) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 78) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  buf += 'pickup20-' + acc.toString();
  buf += 'coupon21-' + acc.toString();
  const ix22: number = buf.indexOf('p14');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  if (acc % 9 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  m01.set('k25', acc % 997);
  for (let i26 = 0; i26 < 12; i26++) {
    acc = (acc + i26 * 13 + 625) % 100003;
  }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  for (let i28 = 0; i28 < 12; i28++) {
    acc = (acc + i28 * 13 + 936) % 100003;
  }
  const rc29: Rec14 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  arr.push(acc % 1000);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 159) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 79) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const rc37: Rec14 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  buf += `q38:${acc % 97}`;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 55) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  acc = acc + 739 - (acc % 47);
  acc = (acc * 31 + 1302) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-44'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const ix46: number = buf.indexOf('p14');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const ix47: number = buf.indexOf('p14');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  acc = acc + 404 - (acc % 33);
  acc = (acc * 31 + 1617) % 65521;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0014_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0014_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0014_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1854) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (acc % 9 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 115) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (acc % 27 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  for (let i7 = 0; i7 < 10; i7++) {
    acc = (acc + i7 * 13 + 246) % 100003;
  }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  if (acc % 26 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  m01.set('k10', acc % 997);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  if (acc % 13 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const rc15: Rec14 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const rc16: Rec14 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 47) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 7; i18++) {
    acc = (acc + i18 * 13 + 558) % 100003;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-19'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  acc = (acc * 31 + 3988) % 65521;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += 'crate24-' + acc.toString();
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  arr.push(acc % 1000);
  buf += 'customs28-' + acc.toString();
  m01.set('k29', acc % 997);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  acc = acc + 352 - (acc % 17);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 46) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 50) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  if (acc % 28 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  for (let i39 = 0; i39 < 11; i39++) {
    acc = (acc + i39 * 13 + 482) % 100003;
  }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  for (let i41 = 0; i41 < 3; i41++) {
    acc = (acc + i41 * 13 + 280) % 100003;
  }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  m01.set('k44', acc % 997);
  buf += 'settle45-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const rc48: Rec14 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix51: number = buf.indexOf('p14');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1855) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  for (let i2 = 0; i2 < 7; i2++) {
    acc = (acc + i2 * 13 + 814) % 100003;
  }
  m01.set('k3', acc % 997);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const rc7: Rec14 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  acc = (acc * 31 + 413) % 65521;
  buf += 'dispatch9-' + acc.toString();
  for (let i10 = 0; i10 < 6; i10++) {
    acc = (acc + i10 * 13 + 681) % 100003;
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 143) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 77) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const ix20: number = buf.indexOf('p14');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3657) % 65521;
  for (let i22 = 0; i22 < 7; i22++) {
    acc = (acc + i22 * 13 + 881) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (acc % 9 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 19) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  for (let i29 = 0; i29 < 3; i29++) {
    acc = (acc + i29 * 13 + 608) % 100003;
  }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  buf += 'settle31-' + acc.toString();
  if (acc % 9 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 89) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const rc36: Rec14 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const rc38: Rec14 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  arr.push(acc % 1000);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 42) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  buf += `q41:${acc % 97}`;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-46'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q47:${acc % 97}`;
  acc = (acc * 31 + 7659) % 65521;
  for (let i49 = 0; i49 < 10; i49++) {
    acc = (acc + i49 * 13 + 628) % 100003;
  }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1856) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  acc = acc + 520 - (acc % 77);
  buf += 'transit1-' + acc.toString();
  buf += 'ticket2-' + acc.toString();
  try { if (acc % 29 === 6) { throw new Error('synthetic-3'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const ix4: number = buf.indexOf('p14');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const ix6: number = buf.indexOf('p14');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const rc8: Rec14 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const ix11: number = buf.indexOf('p14');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2527) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const ix15: number = buf.indexOf('p14');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 119) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  buf += `q19:${acc % 97}`;
  acc = (acc * 31 + 6114) % 65521;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  buf += `q22:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-23'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'routeplan24-' + acc.toString();
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  for (let i26 = 0; i26 < 11; i26++) {
    acc = (acc + i26 * 13 + 611) % 100003;
  }
  const rc27: Rec14 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  try { if (acc % 29 === 4) { throw new Error('synthetic-28'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 96) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  try { if (acc % 29 === 10) { throw new Error('synthetic-32'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 95) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  acc = (acc * 31 + 3695) % 65521;
  for (let i37 = 0; i37 < 8; i37++) {
    acc = (acc + i37 * 13 + 48) % 100003;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-38'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  for (let i40 = 0; i40 < 5; i40++) {
    acc = (acc + i40 * 13 + 487) % 100003;
  }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  m01.set('k42', acc % 997);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 149) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  acc = acc + 383 - (acc % 30);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  for (let i49 = 0; i49 < 12; i49++) {
    acc = (acc + i49 * 13 + 15) % 100003;
  }
  buf += 'ledger50-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1857) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  m01.set('k0', acc % 997);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  buf += 'rebate2-' + acc.toString();
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const rc4: Rec14 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  try { if (acc % 29 === 11) { throw new Error('synthetic-6'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  m01.set('k9', acc % 997);
  buf += 'payout10-' + acc.toString();
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-13'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 177) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-15'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 52) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p14');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  const rc19: Rec14 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  arr.push(acc % 1000);
  if (acc % 12 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 183) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  try { if (acc % 29 === 6) { throw new Error('synthetic-25'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-26'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 872 - (acc % 73);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 18) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  buf += `q29:${acc % 97}`;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const ix31: number = buf.indexOf('p14');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 37) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  const ix36: number = buf.indexOf('p14');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  const ix37: number = buf.indexOf('p14');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  buf += 'freight38-' + acc.toString();
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  acc = acc + 400 - (acc % 84);
  m01.set('k42', acc % 997);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const ix44: number = buf.indexOf('p14');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  m01.set('k46', acc % 997);
  acc = acc + 661 - (acc % 59);
  buf += 'pickup48-' + acc.toString();
  m01.set('k49', acc % 997);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1858) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += 'bay1-' + acc.toString();
  try { if (acc % 29 === 10) { throw new Error('synthetic-2'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = (acc * 31 + 3155) % 65521;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const ix9: number = buf.indexOf('p14');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2908) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  acc = (acc * 31 + 6787) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 19) { throw new Error('synthetic-14'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const rc15: Rec14 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 69) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 69) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  m01.set('k20', acc % 997);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  buf += `q23:${acc % 97}`;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  buf += `q25:${acc % 97}`;
  for (let i26 = 0; i26 < 6; i26++) {
    acc = (acc + i26 * 13 + 218) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (acc % 8 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const rc31: Rec14 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  acc = (acc * 31 + 6791) % 65521;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 179) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 149) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const rc37: Rec14 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  const rc38: Rec14 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  for (let i41 = 0; i41 < 3; i41++) {
    acc = (acc + i41 * 13 + 154) % 100003;
  }
  if (acc % 10 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  for (let i44 = 0; i44 < 8; i44++) {
    acc = (acc + i44 * 13 + 446) % 100003;
  }
  m01.set('k45', acc % 997);
  buf += `q46:${acc % 97}`;
  const rc47: Rec14 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += `q48:${acc % 97}`;
  buf += `q49:${acc % 97}`;
  acc = (acc * 31 + 4513) % 65521;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1859) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 66) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const rc7: Rec14 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  m01.set('k9', acc % 997);
  buf += 'tariff10-' + acc.toString();
  buf += 'routeplan11-' + acc.toString();
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  buf += 'pickup13-' + acc.toString();
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  acc = (acc * 31 + 1823) % 65521;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 160) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 4275) % 65521;
  m01.set('k20', acc % 997);
  buf += 'warehouse21-' + acc.toString();
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  acc = acc + 117 - (acc % 16);
  const rc25: Rec14 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 88) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 22) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  if (acc % 29 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 72) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 151) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q39:${acc % 97}`;
  acc = (acc * 31 + 819) % 65521;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  m01.set('k43', acc % 997);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 49) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  acc = (acc * 31 + 3365) % 65521;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  arr.push(acc % 1000);
  for (let i50 = 0; i50 < 4; i50++) {
    acc = (acc + i50 * 13 + 157) % 100003;
  }
  acc = (acc * 31 + 1270) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1860) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  acc = (acc * 31 + 3011) % 65521;
  buf += 'tariff4-' + acc.toString();
  try { if (acc % 29 === 5) { throw new Error('synthetic-5'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  buf += 'settle9-' + acc.toString();
  arr.push(acc % 1000);
  if (acc % 21 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9040) % 65521;
  if (acc % 17 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += 'audit15-' + acc.toString();
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 197) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 102) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 36) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  for (let i26 = 0; i26 < 8; i26++) {
    acc = (acc + i26 * 13 + 342) % 100003;
  }
  buf += `q27:${acc % 97}`;
  acc = acc + 808 - (acc % 34);
  try { if (acc % 29 === 11) { throw new Error('synthetic-29'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q30:${acc % 97}`;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  buf += 'batch32-' + acc.toString();
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 140) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  for (let i37 = 0; i37 < 11; i37++) {
    acc = (acc + i37 * 13 + 715) % 100003;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-38'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const rc40: Rec14 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  if (acc % 11 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  acc = acc + 160 - (acc % 74);
  acc = (acc * 31 + 6375) % 65521;
  acc = (acc * 31 + 4727) % 65521;
  const ix45: number = buf.indexOf('p14');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  m01.set('k47', acc % 997);
  acc = (acc * 31 + 373) % 65521;
  buf += 'batch49-' + acc.toString();
  const ix50: number = buf.indexOf('p14');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1861) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  acc = (acc * 31 + 5214) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-1'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += 'parcel3-' + acc.toString();
  acc = (acc * 31 + 8011) % 65521;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 49) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const rc6: Rec14 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  buf += `q7:${acc % 97}`;
  acc = (acc * 31 + 4066) % 65521;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  buf += `q10:${acc % 97}`;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 22) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  acc = acc + 365 - (acc % 79);
  try { if (acc % 29 === 6) { throw new Error('synthetic-13'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i14 = 0; i14 < 11; i14++) {
    acc = (acc + i14 * 13 + 652) % 100003;
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 154) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 3) { throw new Error('synthetic-19'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 90) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  try { if (acc % 29 === 18) { throw new Error('synthetic-23'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-25'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  if (acc % 9 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const ix28: number = buf.indexOf('p14');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  buf += `q29:${acc % 97}`;
  try { if (acc % 29 === 13) { throw new Error('synthetic-30'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q31:${acc % 97}`;
  buf += 'client32-' + acc.toString();
  if (acc % 24 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 89) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const ix36: number = buf.indexOf('p14');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += `q37:${acc % 97}`;
  acc = (acc * 31 + 1920) % 65521;
  acc = (acc * 31 + 2899) % 65521;
  buf += `q40:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  buf += 'balance43-' + acc.toString();
  arr.push(acc % 1000);
  m01.set('k45', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  for (let i47 = 0; i47 < 3; i47++) {
    acc = (acc + i47 * 13 + 271) % 100003;
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 102) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  buf += `q49:${acc % 97}`;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  for (let i51 = 0; i51 < 3; i51++) {
    acc = (acc + i51 * 13 + 419) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1862) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 55) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  try { if (acc % 29 === 20) { throw new Error('synthetic-5'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 44) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  for (let i9 = 0; i9 < 4; i9++) {
    acc = (acc + i9 * 13 + 177) % 100003;
  }
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  arr.push(acc % 1000);
  buf += 'waybill12-' + acc.toString();
  acc = (acc * 31 + 3327) % 65521;
  for (let i14 = 0; i14 < 9; i14++) {
    acc = (acc + i14 * 13 + 660) % 100003;
  }
  if (acc % 28 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const rc16: Rec14 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 31) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  for (let i19 = 0; i19 < 9; i19++) {
    acc = (acc + i19 * 13 + 270) % 100003;
  }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const rc21: Rec14 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const ix22: number = buf.indexOf('p14');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 88) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  buf += 'carrier24-' + acc.toString();
  const ix25: number = buf.indexOf('p14');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  m01.set('k26', acc % 997);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 80) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  if (acc % 31 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 93) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const ix31: number = buf.indexOf('p14');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  m01.set('k32', acc % 997);
  const rc33: Rec14 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 164) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 18 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  if (acc % 13 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i39 = 0; i39 < 9; i39++) {
    acc = (acc + i39 * 13 + 681) % 100003;
  }
  const ix40: number = buf.indexOf('p14');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  buf += `q41:${acc % 97}`;
  arr.push(acc % 1000);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  acc = (acc * 31 + 758) % 65521;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  arr.push(acc % 1000);
  try { if (acc % 29 === 10) { throw new Error('synthetic-49'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 58) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1863) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  m01.set('k2', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const rc5: Rec14 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += 'stocktake6-' + acc.toString();
  acc = (acc * 31 + 1792) % 65521;
  buf += `q8:${acc % 97}`;
  acc = acc + 239 - (acc % 50);
  m01.set('k10', acc % 997);
  arr.push(acc % 1000);
  buf += `q12:${acc % 97}`;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = (acc * 31 + 5041) % 65521;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 61) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  buf += 'vendor20-' + acc.toString();
  if (acc % 17 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += `q22:${acc % 97}`;
  buf += 'refund23-' + acc.toString();
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const ix25: number = buf.indexOf('p14');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  buf += 'portal26-' + acc.toString();
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  acc = acc + 527 - (acc % 94);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  buf += `q31:${acc % 97}`;
  acc = (acc * 31 + 8203) % 65521;
  acc = acc + 307 - (acc % 33);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 191) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 16) { throw new Error('synthetic-35'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  buf += `q37:${acc % 97}`;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  const ix40: number = buf.indexOf('p14');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  for (let i41 = 0; i41 < 12; i41++) {
    acc = (acc + i41 * 13 + 335) % 100003;
  }
  const ix42: number = buf.indexOf('p14');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  for (let i43 = 0; i43 < 12; i43++) {
    acc = (acc + i43 * 13 + 811) % 100003;
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-44'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 140 - (acc % 72);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  buf += `q47:${acc % 97}`;
  acc = (acc * 31 + 2948) % 65521;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0014_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0014_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0014_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1864) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  const ix0: number = buf.indexOf('p14');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  if (acc % 31 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  acc = acc + 747 - (acc % 60);
  const rc3: Rec14 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  try { if (acc % 29 === 4) { throw new Error('synthetic-4'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k5', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 150) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const rc9: Rec14 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  try { if (acc % 29 === 18) { throw new Error('synthetic-10'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const rc11: Rec14 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += 'warehouse13-' + acc.toString();
  acc = acc + 333 - (acc % 87);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 75) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (acc % 31 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-22'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6610) % 65521;
  m01.set('k24', acc % 997);
  arr.push(acc % 1000);
  buf += `q26:${acc % 97}`;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  for (let i30 = 0; i30 < 11; i30++) {
    acc = (acc + i30 * 13 + 987) % 100003;
  }
  acc = acc + 310 - (acc % 88);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 87) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 10; i35++) {
    acc = (acc + i35 * 13 + 365) % 100003;
  }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  acc = acc + 638 - (acc % 13);
  if (acc % 5 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const ix40: number = buf.indexOf('p14');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  arr.push(acc % 1000);
  buf += 'ledger43-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k45', acc % 997);
  buf += 'refund46-' + acc.toString();
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  for (let i48 = 0; i48 < 7; i48++) {
    acc = (acc + i48 * 13 + 706) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const ix50: number = buf.indexOf('p14');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1865) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  acc = acc + 213 - (acc % 22);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  if (acc % 27 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  if (acc % 15 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  m01.set('k7', acc % 997);
  m01.set('k8', acc % 997);
  buf += `q9:${acc % 97}`;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 3123) % 65521;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  m01.set('k14', acc % 997);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const ix16: number = buf.indexOf('p14');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 108) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const ix19: number = buf.indexOf('p14');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const rc20: Rec14 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  for (let i21 = 0; i21 < 7; i21++) {
    acc = (acc + i21 * 13 + 596) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = (acc * 31 + 9502) % 65521;
  if (acc % 17 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  buf += 'pallet27-' + acc.toString();
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-30'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const ix32: number = buf.indexOf('p14');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  acc = acc + 896 - (acc % 30);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 75) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p14');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  arr.push(acc % 1000);
  buf += `q42:${acc % 97}`;
  acc = (acc * 31 + 5397) % 65521;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  if (acc % 29 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const ix48: number = buf.indexOf('p14');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8441) % 65521;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1866) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  buf += `q0:${acc % 97}`;
  for (let i1 = 0; i1 < 5; i1++) {
    acc = (acc + i1 * 13 + 541) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 103) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  acc = acc + 836 - (acc % 15);
  try { if (acc % 29 === 7) { throw new Error('synthetic-10'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i11 = 0; i11 < 5; i11++) {
    acc = (acc + i11 * 13 + 783) % 100003;
  }
  m01.set('k12', acc % 997);
  arr.push(acc % 1000);
  if (acc % 17 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  m01.set('k15', acc % 997);
  buf += 'journey16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 183) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += `q19:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const rc21: Rec14 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  if (acc % 27 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  for (let i24 = 0; i24 < 5; i24++) {
    acc = (acc + i24 * 13 + 150) % 100003;
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  m01.set('k26', acc % 997);
  m01.set('k27', acc % 997);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 158) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  buf += `q29:${acc % 97}`;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  if (acc % 5 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  buf += 'journey32-' + acc.toString();
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 43) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 121) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 129) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const rc39: Rec14 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const ix40: number = buf.indexOf('p14');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const rc41: Rec14 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  buf += `q42:${acc % 97}`;
  acc = acc + 354 - (acc % 53);
  acc = acc + 425 - (acc % 33);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 151) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  buf += 'balance48-' + acc.toString();
  buf += `q49:${acc % 97}`;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1867) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 5) { throw new Error('synthetic-3'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i4 = 0; i4 < 5; i4++) {
    acc = (acc + i4 * 13 + 372) % 100003;
  }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  buf += `q9:${acc % 97}`;
  const ix10: number = buf.indexOf('p14');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const rc11: Rec14 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  if (acc % 15 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 53) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 11; i18++) {
    acc = (acc + i18 * 13 + 460) % 100003;
  }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = acc + 945 - (acc % 15);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 102) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 109) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 9192) % 65521;
  buf += `q27:${acc % 97}`;
  acc = (acc * 31 + 1373) % 65521;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix30: number = buf.indexOf('p14');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 97) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 3; i35++) {
    acc = (acc + i35 * 13 + 699) % 100003;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-36'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  for (let i38 = 0; i38 < 12; i38++) {
    acc = (acc + i38 * 13 + 935) % 100003;
  }
  const ix39: number = buf.indexOf('p14');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  try { if (acc % 29 === 17) { throw new Error('synthetic-42'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q43:${acc % 97}`;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const rc46: Rec14 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  try { if (acc % 29 === 3) { throw new Error('synthetic-47'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const rc49: Rec14 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 109) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1868) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  if (acc % 22 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  buf += 'quota2-' + acc.toString();
  arr.push(acc % 1000);
  acc = acc + 766 - (acc % 66);
  acc = acc + 155 - (acc % 60);
  acc = acc + 646 - (acc % 48);
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const ix10: number = buf.indexOf('p14');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q12:${acc % 97}`;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  acc = (acc * 31 + 3320) % 65521;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 38) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (acc % 30 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += 'pickup25-' + acc.toString();
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-27'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 636 - (acc % 59);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 96) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const rc30: Rec14 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  acc = acc + 321 - (acc % 25);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 12) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 9 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  buf += `q37:${acc % 97}`;
  if (acc % 13 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const rc45: Rec14 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  if (acc % 21 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9319) % 65521;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  m01.set('k50', acc % 997);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 152) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1869) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  const ix0: number = buf.indexOf('p14');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  for (let i2 = 0; i2 < 12; i2++) {
    acc = (acc + i2 * 13 + 324) % 100003;
  }
  acc = acc + 63 - (acc % 8);
  const ix4: number = buf.indexOf('p14');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  buf += `q5:${acc % 97}`;
  if (acc % 15 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const ix7: number = buf.indexOf('p14');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  buf += `q8:${acc % 97}`;
  buf += 'ledger9-' + acc.toString();
  const ix10: number = buf.indexOf('p14');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const rc14: Rec14 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 50) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 109) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const ix19: number = buf.indexOf('p14');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-20'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 5 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const rc22: Rec14 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc26: Rec14 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  m01.set('k27', acc % 997);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 13) { throw new Error('synthetic-29'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 134) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  buf += 'audit31-' + acc.toString();
  const ix32: number = buf.indexOf('p14');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 33) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 642 - (acc % 79);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  buf += 'client37-' + acc.toString();
  arr.push(acc % 1000);
  if (acc % 29 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  m01.set('k41', acc % 997);
  const rc42: Rec14 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  buf += 'client43-' + acc.toString();
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  acc = acc + 594 - (acc % 91);
  acc = (acc * 31 + 8328) % 65521;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const rc48: Rec14 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  for (let i49 = 0; i49 < 10; i49++) {
    acc = (acc + i49 * 13 + 787) % 100003;
  }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  for (let i51 = 0; i51 < 5; i51++) {
    acc = (acc + i51 * 13 + 607) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1870) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  acc = (acc * 31 + 4578) % 65521;
  const ix4: number = buf.indexOf('p14');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  if (acc % 11 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  buf += 'stocktake7-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-9'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1970) % 65521;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  m01.set('k14', acc % 997);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 181) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  buf += `q19:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  if (acc % 21 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += `q22:${acc % 97}`;
  const rc23: Rec14 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  arr.push(acc % 1000);
  buf += 'settle25-' + acc.toString();
  buf += 'coupon26-' + acc.toString();
  m01.set('k27', acc % 997);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  m01.set('k29', acc % 997);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const rc31: Rec14 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  buf += 'ticket32-' + acc.toString();
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 90) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const ix36: number = buf.indexOf('p14');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (acc % 24 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  for (let i41 = 0; i41 < 7; i41++) {
    acc = (acc + i41 * 13 + 502) % 100003;
  }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 161) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  if (acc % 22 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const rc45: Rec14 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const rc46: Rec14 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  m01.set('k47', acc % 997);
  acc = acc + 555 - (acc % 17);
  if (acc % 15 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-51'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1871) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  buf += 'waybill0-' + acc.toString();
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const ix3: number = buf.indexOf('p14');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  try { if (acc % 29 === 19) { throw new Error('synthetic-6'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  const rc7: Rec14 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  acc = (acc * 31 + 3170) % 65521;
  m01.set('k10', acc % 997);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  buf += `q12:${acc % 97}`;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 152) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'ledger18-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  acc = (acc * 31 + 3488) % 65521;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  acc = (acc * 31 + 7022) % 65521;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  acc = (acc * 31 + 706) % 65521;
  m01.set('k25', acc % 997);
  try { if (acc % 29 === 22) { throw new Error('synthetic-26'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 129) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 71) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  try { if (acc % 29 === 20) { throw new Error('synthetic-31'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  acc = acc + 304 - (acc % 38);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  if (acc % 11 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6116) % 65521;
  const rc38: Rec14 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const ix39: number = buf.indexOf('p14');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  acc = acc + 76 - (acc % 34);
  if (acc % 26 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  acc = (acc * 31 + 784) % 65521;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 160) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const rc44: Rec14 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  buf += `q46:${acc % 97}`;
  buf += `q47:${acc % 97}`;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  acc = (acc * 31 + 7378) % 65521;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1872) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  if (acc % 12 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  acc = acc + 489 - (acc % 55);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  buf += `q6:${acc % 97}`;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += `q8:${acc % 97}`;
  try { if (acc % 29 === 15) { throw new Error('synthetic-9'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q10:${acc % 97}`;
  m01.set('k11', acc % 997);
  const rc12: Rec14 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  m01.set('k13', acc % 997);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += 'sku15-' + acc.toString();
  acc = acc + 837 - (acc % 15);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 194) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 189) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  arr.push(acc % 1000);
  const rc22: Rec14 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  for (let i24 = 0; i24 < 8; i24++) {
    acc = (acc + i24 * 13 + 746) % 100003;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-25'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 78 - (acc % 67);
  buf += `q27:${acc % 97}`;
  buf += 'tariff28-' + acc.toString();
  const ix29: number = buf.indexOf('p14');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  buf += 'parcel30-' + acc.toString();
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 96) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  m01.set('k39', acc % 997);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 123) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const rc41: Rec14 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const rc42: Rec14 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  try { if (acc % 29 === 18) { throw new Error('synthetic-44'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k45', acc % 997);
  for (let i46 = 0; i46 < 6; i46++) {
    acc = (acc + i46 * 13 + 257) % 100003;
  }
  buf += 'waybill47-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const ix51: number = buf.indexOf('p14');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1873) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  for (let i0 = 0; i0 < 9; i0++) {
    acc = (acc + i0 * 13 + 603) % 100003;
  }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = acc + 135 - (acc % 74);
  buf += 'balance4-' + acc.toString();
  arr.push(acc % 1000);
  acc = (acc * 31 + 4260) % 65521;
  buf += `q7:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  if (acc % 26 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-11'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  for (let i14 = 0; i14 < 8; i14++) {
    acc = (acc + i14 * 13 + 112) % 100003;
  }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  for (let i16 = 0; i16 < 5; i16++) {
    acc = (acc + i16 * 13 + 526) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 117) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += `q21:${acc % 97}`;
  m01.set('k22', acc % 997);
  try { if (acc % 29 === 7) { throw new Error('synthetic-23'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += `q25:${acc % 97}`;
  try { if (acc % 29 === 13) { throw new Error('synthetic-26'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const ix30: number = buf.indexOf('p14');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += `q31:${acc % 97}`;
  arr.push(acc % 1000);
  try { if (acc % 29 === 14) { throw new Error('synthetic-33'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 19) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 2102) % 65521;
  if (acc % 11 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 79) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-38'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const ix39: number = buf.indexOf('p14');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8226) % 65521;
  acc = (acc * 31 + 3552) % 65521;
  if (acc % 20 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-44'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 292 - (acc % 73);
  arr.push(acc % 1000);
  for (let i47 = 0; i47 < 9; i47++) {
    acc = (acc + i47 * 13 + 678) % 100003;
  }
  arr.push(acc % 1000);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  if (acc % 30 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  buf += 'ticket51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0014_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0014_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0014_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1874) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  if (acc % 26 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const ix3: number = buf.indexOf('p14');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const ix4: number = buf.indexOf('p14');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  try { if (acc % 29 === 13) { throw new Error('synthetic-6'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 14 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const rc8: Rec14 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 123) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  for (let i11 = 0; i11 < 8; i11++) {
    acc = (acc + i11 * 13 + 947) % 100003;
  }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  arr.push(acc % 1000);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 38) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 83) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  arr.push(acc % 1000);
  acc = (acc * 31 + 5889) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  for (let i22 = 0; i22 < 5; i22++) {
    acc = (acc + i22 * 13 + 741) % 100003;
  }
  for (let i23 = 0; i23 < 12; i23++) {
    acc = (acc + i23 * 13 + 289) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix25: number = buf.indexOf('p14');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  buf += 'customs28-' + acc.toString();
  acc = acc + 910 - (acc % 37);
  const ix30: number = buf.indexOf('p14');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  if (acc % 15 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = acc + 715 - (acc % 44);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 141) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p14');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const rc36: Rec14 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 135) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  if (acc % 14 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  if (acc % 27 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (acc % 13 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = (acc * 31 + 745) % 65521;
  const rc47: Rec14 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 43) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const ix49: number = buf.indexOf('p14');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-50'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 819 - (acc % 35);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1875) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  acc = acc + 896 - (acc % 33);
  try { if (acc % 29 === 23) { throw new Error('synthetic-1'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 18) { throw new Error('synthetic-3'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  const ix5: number = buf.indexOf('p14');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  m01.set('k9', acc % 997);
  const ix10: number = buf.indexOf('p14');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  m01.set('k12', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 30 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-15'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const rc16: Rec14 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 160) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  m01.set('k19', acc % 997);
  const rc20: Rec14 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  buf += `q22:${acc % 97}`;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  for (let i24 = 0; i24 < 8; i24++) {
    acc = (acc + i24 * 13 + 405) % 100003;
  }
  buf += `q25:${acc % 97}`;
  buf += `q26:${acc % 97}`;
  for (let i27 = 0; i27 < 3; i27++) {
    acc = (acc + i27 * 13 + 13) % 100003;
  }
  if (acc % 12 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-29'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = (acc * 31 + 6924) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  acc = (acc * 31 + 9107) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 133) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 802 - (acc % 20);
  acc = (acc * 31 + 6415) % 65521;
  acc = (acc * 31 + 8706) % 65521;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 162) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const rc45: Rec14 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const rc48: Rec14 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  for (let i49 = 0; i49 < 8; i49++) {
    acc = (acc + i49 * 13 + 489) % 100003;
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 4029) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0014_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1876) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit14 = new Unit14(acc);
  arr.push(acc % 1000);
  m01.set('k1', acc % 997);
  buf += `q2:${acc % 97}`;
  buf += 'batch3-' + acc.toString();
  if (acc % 6 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 165) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  for (let i6 = 0; i6 < 3; i6++) {
    acc = (acc + i6 * 13 + 599) % 100003;
  }
  acc = acc + 431 - (acc % 79);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 3) { throw new Error('synthetic-11'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 168) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 3) { throw new Error('synthetic-18'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += 'batch20-' + acc.toString();
  acc = (acc * 31 + 4021) % 65521;
  buf += 'depot22-' + acc.toString();
  for (let i23 = 0; i23 < 7; i23++) {
    acc = (acc + i23 * 13 + 705) % 100003;
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-24'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const ix26: number = buf.indexOf('p14');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  for (let i27 = 0; i27 < 4; i27++) {
    acc = (acc + i27 * 13 + 433) % 100003;
  }
  acc = (acc * 31 + 6868) % 65521;
  m01.set('k29', acc % 997);
  acc = acc + 492 - (acc % 85);
  const ix31: number = buf.indexOf('p14');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  acc = acc + 514 - (acc % 36);
  for (let i33 = 0; i33 < 5; i33++) {
    acc = (acc + i33 * 13 + 639) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 59) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = acc + 349 - (acc % 84);
  buf += `q37:${acc % 97}`;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 121) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  try { if (acc % 29 === 23) { throw new Error('synthetic-39'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 8 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const rc41: Rec14 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const ix42: number = buf.indexOf('p14');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const ix43: number = buf.indexOf('p14');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const rc44: Rec14 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += `q49:${acc % 97}`;
  acc = acc + 782 - (acc % 71);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0014(): BizFn[] {
  return [biz_0014_00, biz_0014_01, biz_0014_02, biz_0014_03, biz_0014_04, biz_0014_05, biz_0014_06, biz_0014_07, biz_0014_08, biz_0014_09, biz_0014_10, biz_0014_11, biz_0014_12, biz_0014_13, biz_0014_14, biz_0014_15, biz_0014_16, biz_0014_17, biz_0014_18, biz_0014_19, biz_0014_20, biz_0014_21, biz_0014_22, biz_0014_23, biz_0014_24, biz_0014_25, biz_0014_26, biz_0014_27, biz_0014_28, biz_0014_29, biz_0014_30, biz_0014_31, biz_0014_32, biz_0014_33, biz_0014_34, biz_0014_35, biz_0014_36, biz_0014_37, biz_0014_38, biz_0014_39, biz_0014_40, biz_0014_41, biz_0014_42];
}

export function rega_0014(): ABizFn[] {
  return [biz_0014_09a, biz_0014_19a, biz_0014_29a, biz_0014_39a];
}
