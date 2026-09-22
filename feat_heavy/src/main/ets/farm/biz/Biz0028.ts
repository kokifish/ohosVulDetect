// Biz0028.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec28 { id: number; tag: string; score: number; }

class Unit28 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0028_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3668) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  for (let i1 = 0; i1 < 11; i1++) {
    acc = (acc + i1 * 13 + 544) % 100003;
  }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 136) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  buf += 'vendor3-' + acc.toString();
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = (acc * 31 + 6616) % 65521;
  m01.set('k6', acc % 997);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  acc = acc + 348 - (acc % 77);
  const ix10: number = buf.indexOf('p28');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  m01.set('k12', acc % 997);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 13) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const rc15: Rec28 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  acc = acc + 988 - (acc % 48);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 129) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 144) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  for (let i20 = 0; i20 < 7; i20++) {
    acc = (acc + i20 * 13 + 922) % 100003;
  }
  const rc21: Rec28 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  buf += 'batch22-' + acc.toString();
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const rc26: Rec28 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 158) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  buf += 'refund31-' + acc.toString();
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 50) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  m01.set('k36', acc % 997);
  m01.set('k37', acc % 997);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  buf += 'dispatch41-' + acc.toString();
  acc = acc + 817 - (acc % 39);
  const ix43: number = buf.indexOf('p28');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  m01.set('k45', acc % 997);
  buf += 'pallet46-' + acc.toString();
  const rc47: Rec28 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const rc48: Rec28 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 73) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3669) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  acc = acc + 577 - (acc % 36);
  const ix1: number = buf.indexOf('p28');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  acc = acc + 281 - (acc % 39);
  buf += 'batch4-' + acc.toString();
  arr.push(acc % 1000);
  buf += `q6:${acc % 97}`;
  buf += 'waybill7-' + acc.toString();
  try { if (acc % 29 === 2) { throw new Error('synthetic-8'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const ix9: number = buf.indexOf('p28');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  buf += 'refund10-' + acc.toString();
  const ix11: number = buf.indexOf('p28');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = acc + 848 - (acc % 31);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 179) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 143) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 5; i18++) {
    acc = (acc + i18 * 13 + 430) % 100003;
  }
  if (acc % 28 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  acc = acc + 626 - (acc % 60);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 126) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  buf += `q22:${acc % 97}`;
  const rc23: Rec28 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  if (acc % 25 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const rc26: Rec28 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  buf += 'portal28-' + acc.toString();
  acc = (acc * 31 + 9761) % 65521;
  for (let i30 = 0; i30 < 3; i30++) {
    acc = (acc + i30 * 13 + 493) % 100003;
  }
  for (let i31 = 0; i31 < 3; i31++) {
    acc = (acc + i31 * 13 + 690) % 100003;
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 68) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec28 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  buf += `q36:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const rc39: Rec28 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const rc40: Rec28 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  buf += `q41:${acc % 97}`;
  for (let i42 = 0; i42 < 6; i42++) {
    acc = (acc + i42 * 13 + 341) % 100003;
  }
  for (let i43 = 0; i43 < 9; i43++) {
    acc = (acc + i43 * 13 + 768) % 100003;
  }
  const ix44: number = buf.indexOf('p28');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const ix45: number = buf.indexOf('p28');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  if (acc % 7 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  for (let i47 = 0; i47 < 9; i47++) {
    acc = (acc + i47 * 13 + 859) % 100003;
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 13) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-49'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3670) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += 'vendor1-' + acc.toString();
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  m01.set('k3', acc % 997);
  const rc4: Rec28 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 53) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const rc7: Rec28 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (acc % 24 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const rc12: Rec28 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += 'order15-' + acc.toString();
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 78) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  buf += `q20:${acc % 97}`;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-25'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  if (acc % 9 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-28'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = acc + 34 - (acc % 24);
  const ix31: number = buf.indexOf('p28');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 124) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 47) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 45) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-35'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 180) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-37'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-38'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'transit39-' + acc.toString();
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4194) % 65521;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const rc44: Rec28 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  m01.set('k45', acc % 997);
  acc = (acc * 31 + 9561) % 65521;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const rc48: Rec28 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  try { if (acc % 29 === 14) { throw new Error('synthetic-49'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 122) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3671) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 125) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const ix6: number = buf.indexOf('p28');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  acc = acc + 162 - (acc % 91);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 68) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 62) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += 'ledger21-' + acc.toString();
  arr.push(acc % 1000);
  acc = (acc * 31 + 6009) % 65521;
  acc = acc + 845 - (acc % 10);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  for (let i26 = 0; i26 < 4; i26++) {
    acc = (acc + i26 * 13 + 48) % 100003;
  }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const ix28: number = buf.indexOf('p28');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  for (let i29 = 0; i29 < 8; i29++) {
    acc = (acc + i29 * 13 + 760) % 100003;
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-30'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += 'settle32-' + acc.toString();
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 42) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec28 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  try { if (acc % 29 === 20) { throw new Error('synthetic-36'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 51 - (acc % 85);
  buf += `q38:${acc % 97}`;
  buf += 'crate39-' + acc.toString();
  m01.set('k40', acc % 997);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const ix42: number = buf.indexOf('p28');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const ix46: number = buf.indexOf('p28');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 167) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  acc = acc + 122 - (acc % 87);
  if (acc % 9 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  m01.set('k50', acc % 997);
  if (acc % 11 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3672) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  const rc0: Rec28 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  for (let i1 = 0; i1 < 12; i1++) {
    acc = (acc + i1 * 13 + 897) % 100003;
  }
  m01.set('k2', acc % 997);
  if (acc % 30 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  buf += `q6:${acc % 97}`;
  const rc7: Rec28 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const ix8: number = buf.indexOf('p28');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  acc = acc + 509 - (acc % 37);
  const rc10: Rec28 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  if (acc % 23 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  for (let i13 = 0; i13 < 8; i13++) {
    acc = (acc + i13 * 13 + 974) % 100003;
  }
  buf += `q14:${acc % 97}`;
  for (let i15 = 0; i15 < 4; i15++) {
    acc = (acc + i15 * 13 + 146) % 100003;
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 170) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  m01.set('k19', acc % 997);
  const rc20: Rec28 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const rc21: Rec28 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 188) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const ix24: number = buf.indexOf('p28');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  buf += `q25:${acc % 97}`;
  buf += `q26:${acc % 97}`;
  acc = (acc * 31 + 5976) % 65521;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const ix29: number = buf.indexOf('p28');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  for (let i30 = 0; i30 < 10; i30++) {
    acc = (acc + i30 * 13 + 776) % 100003;
  }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9355) % 65521;
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 125) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec28 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 162) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  acc = (acc * 31 + 3194) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 74) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += `q42:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'payout44-' + acc.toString();
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 63) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const ix46: number = buf.indexOf('p28');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += 'refund48-' + acc.toString();
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  m01.set('k50', acc % 997);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3673) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  acc = (acc * 31 + 9785) % 65521;
  for (let i1 = 0; i1 < 6; i1++) {
    acc = (acc + i1 * 13 + 626) % 100003;
  }
  buf += `q2:${acc % 97}`;
  buf += 'pallet3-' + acc.toString();
  for (let i4 = 0; i4 < 6; i4++) {
    acc = (acc + i4 * 13 + 109) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += 'warehouse6-' + acc.toString();
  for (let i7 = 0; i7 < 7; i7++) {
    acc = (acc + i7 * 13 + 975) % 100003;
  }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  buf += 'dock9-' + acc.toString();
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const rc14: Rec28 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += 'region15-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 132) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 182) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  for (let i20 = 0; i20 < 4; i20++) {
    acc = (acc + i20 * 13 + 912) % 100003;
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-21'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  acc = (acc * 31 + 9196) % 65521;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 161) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 177) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 147) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const rc28: Rec28 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  for (let i30 = 0; i30 < 10; i30++) {
    acc = (acc + i30 * 13 + 584) % 100003;
  }
  const rc31: Rec28 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 16) { throw new Error('synthetic-35'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 196) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 23) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  buf += `q40:${acc % 97}`;
  buf += 'batch41-' + acc.toString();
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  m01.set('k46', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (acc % 16 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3674) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 70) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += 'settle5-' + acc.toString();
  arr.push(acc % 1000);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  m01.set('k8', acc % 997);
  if (acc % 25 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const ix11: number = buf.indexOf('p28');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  buf += `q12:${acc % 97}`;
  const ix13: number = buf.indexOf('p28');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += `q15:${acc % 97}`;
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 142) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec28 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const rc19: Rec28 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  m01.set('k20', acc % 997);
  arr.push(acc % 1000);
  for (let i22 = 0; i22 < 7; i22++) {
    acc = (acc + i22 * 13 + 709) % 100003;
  }
  const ix23: number = buf.indexOf('p28');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  for (let i24 = 0; i24 < 4; i24++) {
    acc = (acc + i24 * 13 + 301) % 100003;
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  buf += 'carrier27-' + acc.toString();
  acc = acc + 359 - (acc % 74);
  if (acc % 13 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  for (let i30 = 0; i30 < 5; i30++) {
    acc = (acc + i30 * 13 + 277) % 100003;
  }
  buf += 'depot31-' + acc.toString();
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 195) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 152) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  m01.set('k37', acc % 997);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  buf += `q39:${acc % 97}`;
  arr.push(acc % 1000);
  const ix41: number = buf.indexOf('p28');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 157) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 48) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  for (let i49 = 0; i49 < 6; i49++) {
    acc = (acc + i49 * 13 + 726) % 100003;
  }
  acc = acc + 107 - (acc % 71);
  buf += 'depot51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3675) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  if (acc % 16 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += 'parcel1-' + acc.toString();
  m01.set('k2', acc % 997);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 102) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const ix4: number = buf.indexOf('p28');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 74) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  for (let i6 = 0; i6 < 7; i6++) {
    acc = (acc + i6 * 13 + 180) % 100003;
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  for (let i8 = 0; i8 < 12; i8++) {
    acc = (acc + i8 * 13 + 661) % 100003;
  }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  acc = (acc * 31 + 4552) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const rc13: Rec28 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  acc = (acc * 31 + 6756) % 65521;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const rc16: Rec28 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 185) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += 'depot19-' + acc.toString();
  try { if (acc % 29 === 16) { throw new Error('synthetic-20'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  for (let i24 = 0; i24 < 5; i24++) {
    acc = (acc + i24 * 13 + 196) % 100003;
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  buf += 'order26-' + acc.toString();
  acc = (acc * 31 + 4795) % 65521;
  const rc28: Rec28 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 166) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 5 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += 'dispatch39-' + acc.toString();
  acc = (acc * 31 + 9697) % 65521;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 167) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = (acc * 31 + 3210) % 65521;
  for (let i43 = 0; i43 < 8; i43++) {
    acc = (acc + i43 * 13 + 670) % 100003;
  }
  acc = acc + 907 - (acc % 25);
  for (let i45 = 0; i45 < 6; i45++) {
    acc = (acc + i45 * 13 + 50) % 100003;
  }
  arr.push(acc % 1000);
  for (let i47 = 0; i47 < 7; i47++) {
    acc = (acc + i47 * 13 + 86) % 100003;
  }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  for (let i49 = 0; i49 < 8; i49++) {
    acc = (acc + i49 * 13 + 900) % 100003;
  }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3676) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  try { if (acc % 29 === 23) { throw new Error('synthetic-0'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 7170) % 65521;
  const rc3: Rec28 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  m01.set('k5', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  if (acc % 28 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-9'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-11'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const ix12: number = buf.indexOf('p28');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  buf += `q13:${acc % 97}`;
  const ix14: number = buf.indexOf('p28');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-15'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const ix16: number = buf.indexOf('p28');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 91) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  buf += 'payout19-' + acc.toString();
  m01.set('k20', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  arr.push(acc % 1000);
  const ix25: number = buf.indexOf('p28');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  m01.set('k26', acc % 997);
  m01.set('k27', acc % 997);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  arr.push(acc % 1000);
  m01.set('k30', acc % 997);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  buf += 'dispatch33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 11) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  for (let i36 = 0; i36 < 5; i36++) {
    acc = (acc + i36 * 13 + 400) % 100003;
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-37'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 169) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const ix39: number = buf.indexOf('p28');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-40'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const ix41: number = buf.indexOf('p28');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  m01.set('k42', acc % 997);
  acc = (acc * 31 + 9194) % 65521;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  buf += 'settle45-' + acc.toString();
  buf += 'freight46-' + acc.toString();
  buf += `q47:${acc % 97}`;
  arr.push(acc % 1000);
  acc = (acc * 31 + 3359) % 65521;
  buf += `q50:${acc % 97}`;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3677) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  const rc0: Rec28 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const ix3: number = buf.indexOf('p28');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  buf += `q5:${acc % 97}`;
  if (acc % 15 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = acc + 745 - (acc % 51);
  buf += `q10:${acc % 97}`;
  buf += 'transit11-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  try { if (acc % 29 === 12) { throw new Error('synthetic-13'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-14'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 183) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  buf += `q22:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += `q24:${acc % 97}`;
  buf += `q25:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-27'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 31 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  arr.push(acc % 1000);
  if (acc % 24 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  for (let i32 = 0; i32 < 9; i32++) {
    acc = (acc + i32 * 13 + 948) % 100003;
  }
  buf += 'depot33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 83) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  acc = acc + 79 - (acc % 43);
  for (let i37 = 0; i37 < 6; i37++) {
    acc = (acc + i37 * 13 + 660) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 183) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  m01.set('k42', acc % 997);
  buf += 'batch43-' + acc.toString();
  buf += `q44:${acc % 97}`;
  buf += `q45:${acc % 97}`;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  m01.set('k47', acc % 997);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  buf += `q50:${acc % 97}`;
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0028_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0028_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0028_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3678) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (acc % 15 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const ix4: number = buf.indexOf('p28');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  for (let i5 = 0; i5 < 6; i5++) {
    acc = (acc + i5 * 13 + 468) % 100003;
  }
  const ix6: number = buf.indexOf('p28');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const rc7: Rec28 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  if (acc % 19 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  if (acc % 6 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-12'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-13'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 358 - (acc % 36);
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 113) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 160) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  for (let i20 = 0; i20 < 5; i20++) {
    acc = (acc + i20 * 13 + 673) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-22'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 159) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const rc26: Rec28 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  if (acc % 21 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  if (acc % 6 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const rc30: Rec28 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += 'crate31-' + acc.toString();
  const ix32: number = buf.indexOf('p28');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  for (let i33 = 0; i33 < 10; i33++) {
    acc = (acc + i33 * 13 + 554) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 103) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-36'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = acc + 172 - (acc % 38);
  arr.push(acc % 1000);
  acc = acc + 106 - (acc % 86);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 62) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  for (let i47 = 0; i47 < 7; i47++) {
    acc = (acc + i47 * 13 + 195) % 100003;
  }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += 'dispatch49-' + acc.toString();
  const ix50: number = buf.indexOf('p28');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3679) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  buf += `q0:${acc % 97}`;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-2'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 144) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  acc = acc + 254 - (acc % 61);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  acc = (acc * 31 + 5397) % 65521;
  for (let i10 = 0; i10 < 12; i10++) {
    acc = (acc + i10 * 13 + 505) % 100003;
  }
  const ix11: number = buf.indexOf('p28');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-12'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  buf += `q14:${acc % 97}`;
  const ix15: number = buf.indexOf('p28');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  if (acc % 15 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 107) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  acc = (acc * 31 + 5018) % 65521;
  arr.push(acc % 1000);
  const ix21: number = buf.indexOf('p28');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  buf += 'waybill22-' + acc.toString();
  for (let i23 = 0; i23 < 6; i23++) {
    acc = (acc + i23 * 13 + 924) % 100003;
  }
  acc = (acc * 31 + 7911) % 65521;
  acc = (acc * 31 + 7224) % 65521;
  const rc26: Rec28 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  for (let i29 = 0; i29 < 9; i29++) {
    acc = (acc + i29 * 13 + 81) % 100003;
  }
  const rc30: Rec28 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  acc = acc + 816 - (acc % 10);
  try { if (acc % 29 === 10) { throw new Error('synthetic-32'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 57) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  for (let i37 = 0; i37 < 8; i37++) {
    acc = (acc + i37 * 13 + 80) % 100003;
  }
  acc = acc + 828 - (acc % 48);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  if (acc % 14 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  if (acc % 26 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  buf += 'depot42-' + acc.toString();
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  m01.set('k44', acc % 997);
  buf += `q45:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  acc = acc + 484 - (acc % 83);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 191) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  buf += 'coupon49-' + acc.toString();
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3680) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  if (acc % 26 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  buf += 'dispatch2-' + acc.toString();
  for (let i3 = 0; i3 < 8; i3++) {
    acc = (acc + i3 * 13 + 877) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  try { if (acc % 29 === 21) { throw new Error('synthetic-5'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 294 - (acc % 68);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  if (acc % 29 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const rc10: Rec28 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const rc11: Rec28 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 138) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 97) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += 'crate15-' + acc.toString();
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 144) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const ix20: number = buf.indexOf('p28');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const rc21: Rec28 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  acc = acc + 27 - (acc % 47);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  buf += `q27:${acc % 97}`;
  acc = acc + 16 - (acc % 45);
  buf += `q29:${acc % 97}`;
  try { if (acc % 29 === 13) { throw new Error('synthetic-30'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 28 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1721) % 65521;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 37) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p28');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const rc36: Rec28 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  acc = acc + 738 - (acc % 72);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  for (let i39 = 0; i39 < 4; i39++) {
    acc = (acc + i39 * 13 + 870) % 100003;
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  for (let i41 = 0; i41 < 5; i41++) {
    acc = (acc + i41 * 13 + 646) % 100003;
  }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += `q44:${acc % 97}`;
  m01.set('k45', acc % 997);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = acc + 200 - (acc % 47);
  m01.set('k48', acc % 997);
  try { if (acc % 29 === 23) { throw new Error('synthetic-49'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const rc50: Rec28 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3681) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 167) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  if (acc % 29 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  if (acc % 31 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 124) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 26) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  if (acc % 17 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  arr.push(acc % 1000);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  arr.push(acc % 1000);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const rc13: Rec28 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += `q15:${acc % 97}`;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 49) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 3650) % 65521;
  const rc19: Rec28 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 46) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-22'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 118 - (acc % 70);
  const rc24: Rec28 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  buf += `q26:${acc % 97}`;
  acc = acc + 22 - (acc % 12);
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const rc29: Rec28 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 43) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const rc31: Rec28 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 121) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  try { if (acc % 29 === 22) { throw new Error('synthetic-33'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 43) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  m01.set('k36', acc % 997);
  arr.push(acc % 1000);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  if (acc % 15 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 150) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const ix42: number = buf.indexOf('p28');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  buf += `q44:${acc % 97}`;
  buf += `q45:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (acc % 15 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = (acc * 31 + 4435) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3682) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  for (let i1 = 0; i1 < 5; i1++) {
    acc = (acc + i1 * 13 + 83) % 100003;
  }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = (acc * 31 + 2151) % 65521;
  const ix4: number = buf.indexOf('p28');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  acc = acc + 656 - (acc % 41);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 155) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  acc = (acc * 31 + 7238) % 65521;
  const rc12: Rec28 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  acc = (acc * 31 + 185) % 65521;
  for (let i16 = 0; i16 < 3; i16++) {
    acc = (acc + i16 * 13 + 213) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 116) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 154 - (acc % 86);
  acc = acc + 194 - (acc % 87);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 164) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  acc = acc + 399 - (acc % 48);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = acc + 273 - (acc % 94);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  buf += `q29:${acc % 97}`;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const ix32: number = buf.indexOf('p28');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 46) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 168) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  arr.push(acc % 1000);
  const rc37: Rec28 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 101) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const rc40: Rec28 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = acc + 398 - (acc % 58);
  if (acc % 15 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const rc44: Rec28 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  acc = acc + 938 - (acc % 83);
  buf += `q46:${acc % 97}`;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  for (let i48 = 0; i48 < 3; i48++) {
    acc = (acc + i48 * 13 + 819) % 100003;
  }
  acc = (acc * 31 + 2975) % 65521;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3683) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  buf += 'policy0-' + acc.toString();
  acc = (acc * 31 + 1378) % 65521;
  const ix2: number = buf.indexOf('p28');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const rc3: Rec28 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-10'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 5784) % 65521;
  const rc12: Rec28 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  acc = acc + 523 - (acc % 33);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 119) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 143) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 103) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  buf += `q24:${acc % 97}`;
  for (let i25 = 0; i25 < 11; i25++) {
    acc = (acc + i25 * 13 + 15) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  if (acc % 9 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = acc + 428 - (acc % 55);
  if (acc % 15 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 137) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8964) % 65521;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += 'pickup38-' + acc.toString();
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const ix40: number = buf.indexOf('p28');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  acc = acc + 961 - (acc % 66);
  try { if (acc % 29 === 18) { throw new Error('synthetic-42'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  arr.push(acc % 1000);
  m01.set('k46', acc % 997);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const ix49: number = buf.indexOf('p28');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = acc + 853 - (acc % 76);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 179) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3684) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  m01.set('k0', acc % 997);
  if (acc % 17 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  buf += `q2:${acc % 97}`;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  for (let i4 = 0; i4 < 5; i4++) {
    acc = (acc + i4 * 13 + 536) % 100003;
  }
  acc = (acc * 31 + 6973) % 65521;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const rc7: Rec28 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  if (acc % 16 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  arr.push(acc % 1000);
  const rc12: Rec28 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  acc = (acc * 31 + 5148) % 65521;
  buf += `q14:${acc % 97}`;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 125) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const rc19: Rec28 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  m01.set('k22', acc % 997);
  const ix23: number = buf.indexOf('p28');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const ix24: number = buf.indexOf('p28');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  acc = acc + 956 - (acc % 26);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 51) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 103) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  buf += 'parcel31-' + acc.toString();
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const ix33: number = buf.indexOf('p28');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 72) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6256) % 65521;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (acc % 7 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  const rc39: Rec28 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  if (acc % 19 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const ix42: number = buf.indexOf('p28');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  buf += `q43:${acc % 97}`;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = acc + 217 - (acc % 11);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = (acc * 31 + 2215) % 65521;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3685) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  for (let i0 = 0; i0 < 6; i0++) {
    acc = (acc + i0 * 13 + 352) % 100003;
  }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 64) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += 'audit3-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const ix8: number = buf.indexOf('p28');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  const rc11: Rec28 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const rc16: Rec28 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 88) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  acc = (acc * 31 + 3463) % 65521;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  for (let i23 = 0; i23 < 6; i23++) {
    acc = (acc + i23 * 13 + 71) % 100003;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-24'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i25 = 0; i25 < 9; i25++) {
    acc = (acc + i25 * 13 + 937) % 100003;
  }
  m01.set('k26', acc % 997);
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  acc = acc + 501 - (acc % 36);
  arr.push(acc % 1000);
  const ix33: number = buf.indexOf('p28');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 54) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 16) { throw new Error('synthetic-35'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  m01.set('k37', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  acc = (acc * 31 + 5787) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  buf += 'pallet42-' + acc.toString();
  try { if (acc % 29 === 2) { throw new Error('synthetic-43'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  m01.set('k46', acc % 997);
  m01.set('k47', acc % 997);
  const ix48: number = buf.indexOf('p28');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 9845) % 65521;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-51'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3686) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 172) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  acc = acc + 284 - (acc % 61);
  acc = (acc * 31 + 3742) % 65521;
  const ix3: number = buf.indexOf('p28');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const rc5: Rec28 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const ix6: number = buf.indexOf('p28');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const rc8: Rec28 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  try { if (acc % 29 === 13) { throw new Error('synthetic-11'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k12', acc % 997);
  m01.set('k13', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const ix15: number = buf.indexOf('p28');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  if (acc % 28 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 124) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  try { if (acc % 29 === 16) { throw new Error('synthetic-19'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 14 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const rc21: Rec28 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  buf += `q22:${acc % 97}`;
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 198) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  for (let i26 = 0; i26 < 10; i26++) {
    acc = (acc + i26 * 13 + 73) % 100003;
  }
  arr.push(acc % 1000);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  buf += `q29:${acc % 97}`;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  buf += 'freight33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 132) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 7057) % 65521;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 105) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  acc = acc + 933 - (acc % 65);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  for (let i44 = 0; i44 < 8; i44++) {
    acc = (acc + i44 * 13 + 141) % 100003;
  }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += 'customs47-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3687) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  for (let i2 = 0; i2 < 10; i2++) {
    acc = (acc + i2 * 13 + 605) % 100003;
  }
  const rc3: Rec28 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  m01.set('k4', acc % 997);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const rc6: Rec28 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  if (acc % 25 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  buf += 'portal11-' + acc.toString();
  const ix12: number = buf.indexOf('p28');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 177) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const ix16: number = buf.indexOf('p28');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 195) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  acc = (acc * 31 + 8048) % 65521;
  acc = acc + 600 - (acc % 35);
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  const ix24: number = buf.indexOf('p28');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const rc26: Rec28 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  acc = (acc * 31 + 4892) % 65521;
  buf += `q29:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const ix33: number = buf.indexOf('p28');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 76) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 8919) % 65521;
  for (let i36 = 0; i36 < 7; i36++) {
    acc = (acc + i36 * 13 + 601) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 43) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  acc = acc + 660 - (acc % 43);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 82) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 86) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 137) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0028_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0028_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0028_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3688) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  acc = acc + 954 - (acc % 46);
  acc = acc + 50 - (acc % 63);
  const rc2: Rec28 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const rc3: Rec28 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  if (acc % 8 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += `q5:${acc % 97}`;
  m01.set('k6', acc % 997);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  if (acc % 21 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  acc = acc + 781 - (acc % 54);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += `q13:${acc % 97}`;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 101) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 83) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 4547) % 65521;
  buf += 'customs19-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  for (let i23 = 0; i23 < 6; i23++) {
    acc = (acc + i23 * 13 + 711) % 100003;
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  acc = (acc * 31 + 4849) % 65521;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const ix27: number = buf.indexOf('p28');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  buf += 'payout32-' + acc.toString();
  for (let i33 = 0; i33 < 8; i33++) {
    acc = (acc + i33 * 13 + 357) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 54) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1161) % 65521;
  const rc37: Rec28 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  try { if (acc % 29 === 4) { throw new Error('synthetic-38'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  arr.push(acc % 1000);
  acc = acc + 454 - (acc % 82);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  for (let i47 = 0; i47 < 8; i47++) {
    acc = (acc + i47 * 13 + 737) % 100003;
  }
  const rc48: Rec28 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  try { if (acc % 29 === 6) { throw new Error('synthetic-51'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3689) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-1'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 26 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8006) % 65521;
  m01.set('k4', acc % 997);
  buf += 'rebate5-' + acc.toString();
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  if (acc % 6 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 185) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  try { if (acc % 29 === 4) { throw new Error('synthetic-11'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'parcel12-' + acc.toString();
  acc = (acc * 31 + 3244) % 65521;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 142) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-20'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-22'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 525 - (acc % 34);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  buf += `q25:${acc % 97}`;
  const rc26: Rec28 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  acc = (acc * 31 + 5850) % 65521;
  m01.set('k30', acc % 997);
  arr.push(acc % 1000);
  for (let i32 = 0; i32 < 12; i32++) {
    acc = (acc + i32 * 13 + 338) % 100003;
  }
  const rc33: Rec28 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 20) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k36', acc % 997);
  if (acc % 28 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  for (let i38 = 0; i38 < 3; i38++) {
    acc = (acc + i38 * 13 + 410) % 100003;
  }
  arr.push(acc % 1000);
  buf += 'shelf40-' + acc.toString();
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  buf += 'bay42-' + acc.toString();
  buf += 'dispatch43-' + acc.toString();
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += `q46:${acc % 97}`;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += `q49:${acc % 97}`;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3690) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  try { if (acc % 29 === 15) { throw new Error('synthetic-0'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'freight1-' + acc.toString();
  buf += 'bay2-' + acc.toString();
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 101) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  buf += 'dispatch4-' + acc.toString();
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  buf += 'warehouse6-' + acc.toString();
  acc = (acc * 31 + 7858) % 65521;
  m01.set('k8', acc % 997);
  acc = (acc * 31 + 2090) % 65521;
  acc = acc + 469 - (acc % 17);
  m01.set('k11', acc % 997);
  m01.set('k12', acc % 997);
  buf += `q13:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  try { if (acc % 29 === 10) { throw new Error('synthetic-15'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 73) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  if (acc % 15 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += `q24:${acc % 97}`;
  arr.push(acc % 1000);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  arr.push(acc % 1000);
  const ix29: number = buf.indexOf('p28');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const ix31: number = buf.indexOf('p28');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-32'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 81) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'pickup35-' + acc.toString();
  const rc36: Rec28 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const ix37: number = buf.indexOf('p28');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  for (let i38 = 0; i38 < 4; i38++) {
    acc = (acc + i38 * 13 + 627) % 100003;
  }
  buf += `q39:${acc % 97}`;
  if (acc % 14 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  m01.set('k41', acc % 997);
  acc = (acc * 31 + 6109) % 65521;
  buf += `q43:${acc % 97}`;
  acc = acc + 194 - (acc % 97);
  for (let i45 = 0; i45 < 3; i45++) {
    acc = (acc + i45 * 13 + 881) % 100003;
  }
  acc = (acc * 31 + 9190) % 65521;
  for (let i47 = 0; i47 < 7; i47++) {
    acc = (acc + i47 * 13 + 601) % 100003;
  }
  for (let i48 = 0; i48 < 12; i48++) {
    acc = (acc + i48 * 13 + 830) % 100003;
  }
  const ix49: number = buf.indexOf('p28');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3396) % 65521;
  for (let i51 = 0; i51 < 6; i51++) {
    acc = (acc + i51 * 13 + 63) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3691) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  const rc0: Rec28 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  acc = acc + 837 - (acc % 17);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += `q6:${acc % 97}`;
  acc = acc + 139 - (acc % 40);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const ix11: number = buf.indexOf('p28');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  if (acc % 22 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  m01.set('k13', acc % 997);
  buf += 'shelf14-' + acc.toString();
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  buf += 'warehouse16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 106) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  m01.set('k19', acc % 997);
  const rc20: Rec28 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  if (acc % 20 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += 'tariff22-' + acc.toString();
  acc = (acc * 31 + 3104) % 65521;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  for (let i25 = 0; i25 < 12; i25++) {
    acc = (acc + i25 * 13 + 484) % 100003;
  }
  const rc26: Rec28 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 163) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  buf += 'pickup28-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  for (let i31 = 0; i31 < 11; i31++) {
    acc = (acc + i31 * 13 + 426) % 100003;
  }
  const rc32: Rec28 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 90) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 28 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-36'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  const ix37: number = buf.indexOf('p28');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const rc38: Rec28 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const ix39: number = buf.indexOf('p28');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  acc = acc + 496 - (acc % 23);
  const rc43: Rec28 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  m01.set('k44', acc % 997);
  try { if (acc % 29 === 10) { throw new Error('synthetic-45'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9951) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  m01.set('k48', acc % 997);
  const ix49: number = buf.indexOf('p28');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5771) % 65521;
  const rc51: Rec28 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3692) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  acc = (acc * 31 + 1483) % 65521;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  buf += `q2:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  buf += 'audit5-' + acc.toString();
  const ix6: number = buf.indexOf('p28');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += `q7:${acc % 97}`;
  acc = (acc * 31 + 2258) % 65521;
  if (acc % 24 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  if (acc % 24 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const rc12: Rec28 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  try { if (acc % 29 === 18) { throw new Error('synthetic-13'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  const rc14: Rec28 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  acc = acc + 914 - (acc % 52);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 133) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-18'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = (acc * 31 + 9095) % 65521;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  for (let i23 = 0; i23 < 11; i23++) {
    acc = (acc + i23 * 13 + 492) % 100003;
  }
  m01.set('k24', acc % 997);
  arr.push(acc % 1000);
  acc = acc + 232 - (acc % 87);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  acc = acc + 142 - (acc % 64);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 46) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  for (let i31 = 0; i31 < 7; i31++) {
    acc = (acc + i31 * 13 + 900) % 100003;
  }
  for (let i32 = 0; i32 < 4; i32++) {
    acc = (acc + i32 * 13 + 196) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 198) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 829 - (acc % 72);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const ix37: number = buf.indexOf('p28');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const rc38: Rec28 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  buf += 'client39-' + acc.toString();
  acc = (acc * 31 + 9220) % 65521;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  buf += 'rebate43-' + acc.toString();
  buf += `q44:${acc % 97}`;
  const rc45: Rec28 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const ix47: number = buf.indexOf('p28');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  if (acc % 27 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  buf += 'bay51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3693) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  buf += `q0:${acc % 97}`;
  const rc1: Rec28 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const ix2: number = buf.indexOf('p28');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 166) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  m01.set('k4', acc % 997);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const ix6: number = buf.indexOf('p28');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  if (acc % 19 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  buf += 'warehouse8-' + acc.toString();
  acc = acc + 317 - (acc % 22);
  buf += 'crate10-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  acc = (acc * 31 + 5743) % 65521;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  m01.set('k14', acc % 997);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const rc16: Rec28 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 188) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec28 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  for (let i19 = 0; i19 < 4; i19++) {
    acc = (acc + i19 * 13 + 892) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 192) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 130) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const ix27: number = buf.indexOf('p28');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 82) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  buf += 'depot30-' + acc.toString();
  acc = (acc * 31 + 6991) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 198) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = acc + 718 - (acc % 81);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = acc + 273 - (acc % 39);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 164) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += `q41:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const ix43: number = buf.indexOf('p28');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  m01.set('k44', acc % 997);
  acc = acc + 292 - (acc % 8);
  try { if (acc % 29 === 16) { throw new Error('synthetic-46'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7634) % 65521;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  try { if (acc % 29 === 13) { throw new Error('synthetic-49'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3694) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  if (acc % 25 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  buf += `q2:${acc % 97}`;
  acc = (acc * 31 + 9746) % 65521;
  if (acc % 21 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  buf += `q12:${acc % 97}`;
  acc = (acc * 31 + 5822) % 65521;
  const ix14: number = buf.indexOf('p28');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  acc = acc + 995 - (acc % 28);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 115) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 89) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = (acc * 31 + 2776) % 65521;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const rc22: Rec28 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  for (let i24 = 0; i24 < 11; i24++) {
    acc = (acc + i24 * 13 + 488) % 100003;
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 129) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const ix27: number = buf.indexOf('p28');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 16) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 68) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 47) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 58) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  if (acc % 9 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const ix41: number = buf.indexOf('p28');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const rc47: Rec28 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const rc48: Rec28 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  buf += 'waybill51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3695) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  try { if (acc % 29 === 10) { throw new Error('synthetic-0'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 32) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const rc4: Rec28 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  if (acc % 17 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  buf += `q7:${acc % 97}`;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  arr.push(acc % 1000);
  for (let i11 = 0; i11 < 11; i11++) {
    acc = (acc + i11 * 13 + 510) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  buf += `q13:${acc % 97}`;
  buf += 'carrier14-' + acc.toString();
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 23) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 72) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p28');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  acc = (acc * 31 + 5109) % 65521;
  const rc22: Rec28 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 80) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  m01.set('k24', acc % 997);
  for (let i25 = 0; i25 < 12; i25++) {
    acc = (acc + i25 * 13 + 517) % 100003;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-26'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const rc27: Rec28 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += 'rebate30-' + acc.toString();
  if (acc % 21 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const ix32: number = buf.indexOf('p28');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 178) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 167) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += 'waybill42-' + acc.toString();
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const ix44: number = buf.indexOf('p28');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  buf += 'waybill46-' + acc.toString();
  buf += 'pickup47-' + acc.toString();
  acc = acc + 865 - (acc % 94);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  try { if (acc % 29 === 7) { throw new Error('synthetic-51'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3696) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  const ix0: number = buf.indexOf('p28');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  m01.set('k1', acc % 997);
  const rc2: Rec28 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  acc = acc + 781 - (acc % 58);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const ix5: number = buf.indexOf('p28');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  buf += `q6:${acc % 97}`;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const rc8: Rec28 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = (acc * 31 + 9650) % 65521;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  m01.set('k11', acc % 997);
  m01.set('k12', acc % 997);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  buf += `q14:${acc % 97}`;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-16'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 122) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  m01.set('k20', acc % 997);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 198) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = acc + 820 - (acc % 49);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 22) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const rc28: Rec28 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  if (acc % 9 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 85) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  for (let i31 = 0; i31 < 4; i31++) {
    acc = (acc + i31 * 13 + 119) % 100003;
  }
  arr.push(acc % 1000);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 35) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  acc = (acc * 31 + 100) % 65521;
  m01.set('k37', acc % 997);
  const rc38: Rec28 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  buf += 'journey39-' + acc.toString();
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 182) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  buf += `q41:${acc % 97}`;
  if (acc % 29 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 40) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 127) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const ix47: number = buf.indexOf('p28');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  buf += 'vendor49-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3697) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const rc1: Rec28 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  buf += `q2:${acc % 97}`;
  try { if (acc % 29 === 3) { throw new Error('synthetic-3'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'crate4-' + acc.toString();
  const ix5: number = buf.indexOf('p28');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-7'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  if (acc % 5 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += `q11:${acc % 97}`;
  if (acc % 20 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const rc16: Rec28 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 184) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  for (let i22 = 0; i22 < 10; i22++) {
    acc = (acc + i22 * 13 + 493) % 100003;
  }
  for (let i23 = 0; i23 < 10; i23++) {
    acc = (acc + i23 * 13 + 82) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  m01.set('k27', acc % 997);
  m01.set('k28', acc % 997);
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  if (acc % 17 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const rc32: Rec28 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 46) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  acc = acc + 909 - (acc % 62);
  arr.push(acc % 1000);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  if (acc % 22 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  if (acc % 26 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  buf += `q44:${acc % 97}`;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 62) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  m01.set('k47', acc % 997);
  const rc48: Rec28 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const rc50: Rec28 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0028_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0028_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0028_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3698) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  buf += `q0:${acc % 97}`;
  if (acc % 19 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  buf += 'crate2-' + acc.toString();
  buf += 'shelf3-' + acc.toString();
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  if (acc % 16 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const ix7: number = buf.indexOf('p28');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  buf += 'region8-' + acc.toString();
  acc = acc + 218 - (acc % 37);
  acc = acc + 362 - (acc % 79);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 131) % 100003;
  }
  const rc13: Rec28 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  acc = (acc * 31 + 4474) % 65521;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 96) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 7; i18++) {
    acc = (acc + i18 * 13 + 23) % 100003;
  }
  if (acc % 6 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (acc % 30 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  m01.set('k22', acc % 997);
  const ix23: number = buf.indexOf('p28');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const rc25: Rec28 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  buf += 'region26-' + acc.toString();
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  arr.push(acc % 1000);
  acc = (acc * 31 + 7866) % 65521;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  buf += 'vendor31-' + acc.toString();
  m01.set('k32', acc % 997);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 37) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 69) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  try { if (acc % 29 === 3) { throw new Error('synthetic-38'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  for (let i40 = 0; i40 < 6; i40++) {
    acc = (acc + i40 * 13 + 383) % 100003;
  }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  buf += `q44:${acc % 97}`;
  buf += `q45:${acc % 97}`;
  acc = acc + 827 - (acc % 32);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3699) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  for (let i0 = 0; i0 < 10; i0++) {
    acc = (acc + i0 * 13 + 867) % 100003;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-1'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const rc3: Rec28 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  for (let i5 = 0; i5 < 7; i5++) {
    acc = (acc + i5 * 13 + 301) % 100003;
  }
  const rc6: Rec28 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const ix8: number = buf.indexOf('p28');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 20) { throw new Error('synthetic-10'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 18 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const rc12: Rec28 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += `q13:${acc % 97}`;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 181) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  buf += 'invoice15-' + acc.toString();
  const ix16: number = buf.indexOf('p28');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 28) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = acc + 168 - (acc % 17);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  try { if (acc % 29 === 15) { throw new Error('synthetic-21'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i22 = 0; i22 < 4; i22++) {
    acc = (acc + i22 * 13 + 782) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  for (let i24 = 0; i24 < 6; i24++) {
    acc = (acc + i24 * 13 + 660) % 100003;
  }
  arr.push(acc % 1000);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  buf += 'portal28-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  if (acc % 23 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  for (let i33 = 0; i33 < 7; i33++) {
    acc = (acc + i33 * 13 + 236) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 21) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 5; i35++) {
    acc = (acc + i35 * 13 + 377) % 100003;
  }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 117) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 82) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  m01.set('k38', acc % 997);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const rc40: Rec28 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const rc42: Rec28 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const ix46: number = buf.indexOf('p28');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  buf += 'sku47-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  m01.set('k50', acc % 997);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3700) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 175) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'client2-' + acc.toString();
  const ix3: number = buf.indexOf('p28');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const rc4: Rec28 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  const ix5: number = buf.indexOf('p28');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (acc % 26 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  m01.set('k9', acc % 997);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  m01.set('k13', acc % 997);
  if (acc % 27 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  m01.set('k15', acc % 997);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 148) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec28 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  acc = acc + 861 - (acc % 58);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  m01.set('k22', acc % 997);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const ix25: number = buf.indexOf('p28');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  m01.set('k27', acc % 997);
  for (let i28 = 0; i28 < 3; i28++) {
    acc = (acc + i28 * 13 + 501) % 100003;
  }
  const ix29: number = buf.indexOf('p28');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  acc = acc + 495 - (acc % 32);
  const ix31: number = buf.indexOf('p28');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 77) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p28');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  buf += `q36:${acc % 97}`;
  acc = (acc * 31 + 7733) % 65521;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const ix39: number = buf.indexOf('p28');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 11) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-41'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const ix43: number = buf.indexOf('p28');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  buf += `q44:${acc % 97}`;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k48', acc % 997);
  const rc49: Rec28 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  acc = acc + 387 - (acc % 23);
  const ix51: number = buf.indexOf('p28');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3701) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const ix4: number = buf.indexOf('p28');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += 'dispatch6-' + acc.toString();
  const rc7: Rec28 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  buf += `q8:${acc % 97}`;
  acc = acc + 102 - (acc % 53);
  try { if (acc % 29 === 13) { throw new Error('synthetic-10'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  acc = (acc * 31 + 6490) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-15'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 179) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 8; i18++) {
    acc = (acc + i18 * 13 + 182) % 100003;
  }
  const rc19: Rec28 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  m01.set('k21', acc % 997);
  acc = acc + 918 - (acc % 52);
  m01.set('k23', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  m01.set('k25', acc % 997);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  if (acc % 16 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  if (acc % 23 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  acc = acc + 36 - (acc % 26);
  const rc33: Rec28 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 57) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  buf += 'crate40-' + acc.toString();
  arr.push(acc % 1000);
  acc = (acc * 31 + 656) % 65521;
  const rc43: Rec28 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  buf += `q44:${acc % 97}`;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  buf += 'journey46-' + acc.toString();
  buf += `q47:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  buf += `q50:${acc % 97}`;
  acc = (acc * 31 + 1249) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3702) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  acc = acc + 151 - (acc % 62);
  buf += `q1:${acc % 97}`;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  m01.set('k3', acc % 997);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const rc5: Rec28 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 66) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = acc + 863 - (acc % 83);
  for (let i8 = 0; i8 < 12; i8++) {
    acc = (acc + i8 * 13 + 123) % 100003;
  }
  buf += 'quota9-' + acc.toString();
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  buf += `q13:${acc % 97}`;
  const ix14: number = buf.indexOf('p28');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  m01.set('k15', acc % 997);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 197) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 16) { throw new Error('synthetic-18'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-19'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k20', acc % 997);
  arr.push(acc % 1000);
  const rc22: Rec28 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 116) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  m01.set('k26', acc % 997);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const ix28: number = buf.indexOf('p28');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = acc + 707 - (acc % 87);
  acc = (acc * 31 + 5243) % 65521;
  const rc31: Rec28 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const rc33: Rec28 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 85) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'policy35-' + acc.toString();
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 75) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (acc % 8 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-41'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-42'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 40 - (acc % 91);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  acc = (acc * 31 + 387) % 65521;
  for (let i46 = 0; i46 < 11; i46++) {
    acc = (acc + i46 * 13 + 681) % 100003;
  }
  if (acc % 21 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7809) % 65521;
  const rc49: Rec28 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  acc = acc + 229 - (acc % 44);
  try { if (acc % 29 === 16) { throw new Error('synthetic-51'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3703) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  m01.set('k0', acc % 997);
  const ix1: number = buf.indexOf('p28');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  m01.set('k2', acc % 997);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 134) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const rc6: Rec28 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  m01.set('k7', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  arr.push(acc % 1000);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  if (acc % 15 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 30) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 11) { throw new Error('synthetic-19'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = acc + 19 - (acc % 16);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  buf += 'vendor25-' + acc.toString();
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  if (acc % 12 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  buf += `q28:${acc % 97}`;
  if (acc % 25 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += `q30:${acc % 97}`;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  buf += 'pickup32-' + acc.toString();
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 89) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 152) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  buf += `q37:${acc % 97}`;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  for (let i39 = 0; i39 < 10; i39++) {
    acc = (acc + i39 * 13 + 292) % 100003;
  }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  m01.set('k41', acc % 997);
  for (let i42 = 0; i42 < 12; i42++) {
    acc = (acc + i42 * 13 + 899) % 100003;
  }
  acc = acc + 832 - (acc % 19);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const rc47: Rec28 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += `q48:${acc % 97}`;
  if (acc % 21 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  acc = acc + 138 - (acc % 77);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3704) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  for (let i0 = 0; i0 < 9; i0++) {
    acc = (acc + i0 * 13 + 637) % 100003;
  }
  buf += `q1:${acc % 97}`;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 23) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  m01.set('k3', acc % 997);
  const ix4: number = buf.indexOf('p28');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const ix6: number = buf.indexOf('p28');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const ix8: number = buf.indexOf('p28');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  for (let i10 = 0; i10 < 11; i10++) {
    acc = (acc + i10 * 13 + 789) % 100003;
  }
  for (let i11 = 0; i11 < 8; i11++) {
    acc = (acc + i11 * 13 + 770) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const ix13: number = buf.indexOf('p28');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 138) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 61) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 148) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 58) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  m01.set('k19', acc % 997);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  if (acc % 16 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  buf += 'transit23-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 111) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += `q27:${acc % 97}`;
  try { if (acc % 29 === 17) { throw new Error('synthetic-28'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 346 - (acc % 54);
  try { if (acc % 29 === 21) { throw new Error('synthetic-30'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 16 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  m01.set('k32', acc % 997);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 78) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  buf += `q37:${acc % 97}`;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += 'transit41-' + acc.toString();
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  acc = (acc * 31 + 5623) % 65521;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const rc45: Rec28 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  acc = (acc * 31 + 8137) % 65521;
  buf += `q49:${acc % 97}`;
  m01.set('k50', acc % 997);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3705) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 104) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-4'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 102) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  try { if (acc % 29 === 22) { throw new Error('synthetic-8'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  m01.set('k11', acc % 997);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  for (let i13 = 0; i13 < 4; i13++) {
    acc = (acc + i13 * 13 + 698) % 100003;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-14'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-16'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 45) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec28 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  if (acc % 17 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 80) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i23 = 0; i23 < 5; i23++) {
    acc = (acc + i23 * 13 + 306) % 100003;
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  acc = acc + 779 - (acc % 46);
  const rc26: Rec28 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += 'depot31-' + acc.toString();
  if (acc % 8 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 17) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'refund35-' + acc.toString();
  buf += 'refund36-' + acc.toString();
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 112) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 64) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  acc = (acc * 31 + 7755) % 65521;
  for (let i40 = 0; i40 < 11; i40++) {
    acc = (acc + i40 * 13 + 893) % 100003;
  }
  m01.set('k41', acc % 997);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  acc = acc + 946 - (acc % 49);
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 199) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  try { if (acc % 29 === 23) { throw new Error('synthetic-50'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3706) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  for (let i2 = 0; i2 < 11; i2++) {
    acc = (acc + i2 * 13 + 502) % 100003;
  }
  m01.set('k3', acc % 997);
  if (acc % 5 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const rc6: Rec28 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const ix7: number = buf.indexOf('p28');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  for (let i8 = 0; i8 < 8; i8++) {
    acc = (acc + i8 * 13 + 332) % 100003;
  }
  buf += `q9:${acc % 97}`;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const ix11: number = buf.indexOf('p28');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = acc + 442 - (acc % 45);
  buf += `q13:${acc % 97}`;
  const rc14: Rec28 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 198) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const rc21: Rec28 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  try { if (acc % 29 === 23) { throw new Error('synthetic-22'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4594) % 65521;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  for (let i26 = 0; i26 < 5; i26++) {
    acc = (acc + i26 * 13 + 336) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  m01.set('k28', acc % 997);
  if (acc % 28 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += `q30:${acc % 97}`;
  buf += `q31:${acc % 97}`;
  buf += `q32:${acc % 97}`;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 142) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 145) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  acc = (acc * 31 + 6305) % 65521;
  const rc37: Rec28 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  buf += 'sku38-' + acc.toString();
  for (let i39 = 0; i39 < 9; i39++) {
    acc = (acc + i39 * 13 + 177) % 100003;
  }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  for (let i41 = 0; i41 < 7; i41++) {
    acc = (acc + i41 * 13 + 696) % 100003;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-42'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 12) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  buf += `q47:${acc % 97}`;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3707) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  acc = acc + 341 - (acc % 57);
  try { if (acc % 29 === 4) { throw new Error('synthetic-1'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  const ix3: number = buf.indexOf('p28');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const rc4: Rec28 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  const ix5: number = buf.indexOf('p28');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = acc + 493 - (acc % 16);
  acc = (acc * 31 + 2442) % 65521;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 134) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  for (let i10 = 0; i10 < 5; i10++) {
    acc = (acc + i10 * 13 + 56) % 100003;
  }
  arr.push(acc % 1000);
  if (acc % 29 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  buf += `q13:${acc % 97}`;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  try { if (acc % 29 === 4) { throw new Error('synthetic-15'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 94) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 57) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  arr.push(acc % 1000);
  buf += `q21:${acc % 97}`;
  acc = acc + 874 - (acc % 54);
  try { if (acc % 29 === 5) { throw new Error('synthetic-23'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 159) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  try { if (acc % 29 === 20) { throw new Error('synthetic-26'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 5 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const rc28: Rec28 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  if (acc % 6 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  for (let i31 = 0; i31 < 3; i31++) {
    acc = (acc + i31 * 13 + 494) % 100003;
  }
  const ix32: number = buf.indexOf('p28');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 72) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p28');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 9139) % 65521;
  for (let i38 = 0; i38 < 10; i38++) {
    acc = (acc + i38 * 13 + 485) % 100003;
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  buf += 'crate40-' + acc.toString();
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4352) % 65521;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  if (acc % 19 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const ix48: number = buf.indexOf('p28');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += 'portal49-' + acc.toString();
  const ix50: number = buf.indexOf('p28');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0028_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0028_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0028_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3708) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  if (acc % 17 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += 'batch1-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 18) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  buf += `q5:${acc % 97}`;
  arr.push(acc % 1000);
  if (acc % 27 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  if (acc % 8 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  buf += 'waybill9-' + acc.toString();
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = acc + 17 - (acc % 29);
  m01.set('k14', acc % 997);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const ix16: number = buf.indexOf('p28');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 128) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 17 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-19'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'pallet20-' + acc.toString();
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  try { if (acc % 29 === 20) { throw new Error('synthetic-22'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const rc23: Rec28 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 132) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const ix27: number = buf.indexOf('p28');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const rc28: Rec28 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  buf += `q30:${acc % 97}`;
  buf += `q31:${acc % 97}`;
  if (acc % 29 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const ix33: number = buf.indexOf('p28');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 195) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  if (acc % 13 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const rc38: Rec28 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  if (acc % 6 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-40'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  for (let i44 = 0; i44 < 9; i44++) {
    acc = (acc + i44 * 13 + 243) % 100003;
  }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  buf += 'pickup46-' + acc.toString();
  m01.set('k47', acc % 997);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  buf += 'invoice50-' + acc.toString();
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3709) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  try { if (acc % 29 === 2) { throw new Error('synthetic-0'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-1'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'waybill2-' + acc.toString();
  acc = (acc * 31 + 2234) % 65521;
  for (let i4 = 0; i4 < 11; i4++) {
    acc = (acc + i4 * 13 + 368) % 100003;
  }
  acc = (acc * 31 + 2572) % 65521;
  acc = acc + 831 - (acc % 80);
  m01.set('k7', acc % 997);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 118) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  buf += `q9:${acc % 97}`;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  if (acc % 8 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  acc = acc + 543 - (acc % 54);
  try { if (acc % 29 === 22) { throw new Error('synthetic-15'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 69) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 857 - (acc % 15);
  acc = (acc * 31 + 6081) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-20'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 387 - (acc % 81);
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  try { if (acc % 29 === 22) { throw new Error('synthetic-25'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  if (acc % 5 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const ix30: number = buf.indexOf('p28');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 184) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 158) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  buf += `q36:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 106) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 49) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  for (let i41 = 0; i41 < 12; i41++) {
    acc = (acc + i41 * 13 + 966) % 100003;
  }
  if (acc % 29 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  buf += `q45:${acc % 97}`;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  for (let i47 = 0; i47 < 10; i47++) {
    acc = (acc + i47 * 13 + 44) % 100003;
  }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 80) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 75) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0028_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3710) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit28 = new Unit28(acc);
  const rc0: Rec28 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  m01.set('k1', acc % 997);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  buf += 'routeplan3-' + acc.toString();
  if (acc % 20 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const rc5: Rec28 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  try { if (acc % 29 === 20) { throw new Error('synthetic-6'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const rc7: Rec28 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  try { if (acc % 29 === 9) { throw new Error('synthetic-8'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 168) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 35) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  try { if (acc % 29 === 18) { throw new Error('synthetic-13'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  for (let i16 = 0; i16 < 6; i16++) {
    acc = (acc + i16 * 13 + 910) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 170) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = acc + 642 - (acc % 88);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  acc = (acc * 31 + 5726) % 65521;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  acc = (acc * 31 + 5928) % 65521;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  acc = acc + 989 - (acc % 66);
  arr.push(acc % 1000);
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 172) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const rc32: Rec28 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 185) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5858) % 65521;
  buf += 'settle38-' + acc.toString();
  for (let i39 = 0; i39 < 6; i39++) {
    acc = (acc + i39 * 13 + 400) % 100003;
  }
  const ix40: number = buf.indexOf('p28');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  if (acc % 31 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  acc = acc + 492 - (acc % 35);
  arr.push(acc % 1000);
  const ix44: number = buf.indexOf('p28');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  if (acc % 17 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += `q46:${acc % 97}`;
  const rc47: Rec28 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 138) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  if (acc % 22 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0028(): BizFn[] {
  return [biz_0028_00, biz_0028_01, biz_0028_02, biz_0028_03, biz_0028_04, biz_0028_05, biz_0028_06, biz_0028_07, biz_0028_08, biz_0028_09, biz_0028_10, biz_0028_11, biz_0028_12, biz_0028_13, biz_0028_14, biz_0028_15, biz_0028_16, biz_0028_17, biz_0028_18, biz_0028_19, biz_0028_20, biz_0028_21, biz_0028_22, biz_0028_23, biz_0028_24, biz_0028_25, biz_0028_26, biz_0028_27, biz_0028_28, biz_0028_29, biz_0028_30, biz_0028_31, biz_0028_32, biz_0028_33, biz_0028_34, biz_0028_35, biz_0028_36, biz_0028_37, biz_0028_38, biz_0028_39, biz_0028_40, biz_0028_41, biz_0028_42];
}

export function rega_0028(): ABizFn[] {
  return [biz_0028_09a, biz_0028_19a, biz_0028_29a, biz_0028_39a];
}
