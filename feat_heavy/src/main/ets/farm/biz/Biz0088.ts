// Biz0088.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec88 { id: number; tag: string; score: number; }

class Unit88 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0088_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1555) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  const ix0: number = buf.indexOf('p88');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  for (let i2 = 0; i2 < 8; i2++) {
    acc = (acc + i2 * 13 + 974) % 100003;
  }
  for (let i3 = 0; i3 < 8; i3++) {
    acc = (acc + i3 * 13 + 685) % 100003;
  }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += `q6:${acc % 97}`;
  buf += 'warehouse7-' + acc.toString();
  acc = (acc * 31 + 9003) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-9'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 19 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-11'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'pallet12-' + acc.toString();
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 32) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 88) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 377 - (acc % 11);
  const ix19: number = buf.indexOf('p88');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += 'vendor21-' + acc.toString();
  const ix22: number = buf.indexOf('p88');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  buf += `q23:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = acc + 252 - (acc % 67);
  for (let i28 = 0; i28 < 9; i28++) {
    acc = (acc + i28 * 13 + 451) % 100003;
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 53) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const ix30: number = buf.indexOf('p88');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const rc31: Rec88 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 154) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec88 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  acc = acc + 671 - (acc % 76);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  if (acc % 30 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  acc = acc + 619 - (acc % 78);
  m01.set('k40', acc % 997);
  try { if (acc % 29 === 7) { throw new Error('synthetic-41'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  m01.set('k43', acc % 997);
  const rc44: Rec88 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  m01.set('k47', acc % 997);
  acc = (acc * 31 + 8065) % 65521;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const ix50: number = buf.indexOf('p88');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const rc51: Rec88 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1556) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  const ix1: number = buf.indexOf('p88');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  buf += `q5:${acc % 97}`;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-7'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 49) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const rc10: Rec88 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  for (let i11 = 0; i11 < 7; i11++) {
    acc = (acc + i11 * 13 + 770) % 100003;
  }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-13'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  m01.set('k15', acc % 997);
  const ix16: number = buf.indexOf('p88');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 55) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  acc = acc + 381 - (acc % 67);
  const ix20: number = buf.indexOf('p88');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += 'routeplan23-' + acc.toString();
  for (let i24 = 0; i24 < 8; i24++) {
    acc = (acc + i24 * 13 + 543) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-26'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 86) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5290) % 65521;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 84) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 3; i35++) {
    acc = (acc + i35 * 13 + 748) % 100003;
  }
  const rc36: Rec88 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 818 - (acc % 62);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 695 - (acc % 81);
  m01.set('k47', acc % 997);
  acc = (acc * 31 + 9133) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-49'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 6956) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1557) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  buf += 'invoice0-' + acc.toString();
  buf += `q1:${acc % 97}`;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  buf += 'tariff6-' + acc.toString();
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'quota9-' + acc.toString();
  if (acc % 7 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  if (acc % 28 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const ix14: number = buf.indexOf('p88');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  if (acc % 21 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const ix16: number = buf.indexOf('p88');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 40) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 300 - (acc % 54);
  buf += 'client19-' + acc.toString();
  try { if (acc % 29 === 7) { throw new Error('synthetic-20'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-21'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k22', acc % 997);
  acc = (acc * 31 + 5344) % 65521;
  if (acc % 7 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-25'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i26 = 0; i26 < 9; i26++) {
    acc = (acc + i26 * 13 + 949) % 100003;
  }
  if (acc % 15 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  m01.set('k28', acc % 997);
  const rc29: Rec88 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  m01.set('k31', acc % 997);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 69) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 13) { throw new Error('synthetic-35'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k36', acc % 997);
  const ix37: number = buf.indexOf('p88');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  for (let i38 = 0; i38 < 11; i38++) {
    acc = (acc + i38 * 13 + 386) % 100003;
  }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  for (let i40 = 0; i40 < 11; i40++) {
    acc = (acc + i40 * 13 + 901) % 100003;
  }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  acc = (acc * 31 + 7745) % 65521;
  arr.push(acc % 1000);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  m01.set('k45', acc % 997);
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  if (acc % 30 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  m01.set('k48', acc % 997);
  for (let i49 = 0; i49 < 9; i49++) {
    acc = (acc + i49 * 13 + 587) % 100003;
  }
  if (acc % 11 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1558) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 192) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  for (let i2 = 0; i2 < 7; i2++) {
    acc = (acc + i2 * 13 + 939) % 100003;
  }
  for (let i3 = 0; i3 < 8; i3++) {
    acc = (acc + i3 * 13 + 457) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 194) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  try { if (acc % 29 === 20) { throw new Error('synthetic-7'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  if (acc % 25 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 183) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i13 = 0; i13 < 11; i13++) {
    acc = (acc + i13 * 13 + 408) % 100003;
  }
  const ix14: number = buf.indexOf('p88');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  for (let i15 = 0; i15 < 10; i15++) {
    acc = (acc + i15 * 13 + 721) % 100003;
  }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 183) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec88 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  try { if (acc % 29 === 17) { throw new Error('synthetic-19'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc22: Rec88 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const ix24: number = buf.indexOf('p88');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  m01.set('k25', acc % 997);
  arr.push(acc % 1000);
  const rc27: Rec88 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  for (let i30 = 0; i30 < 10; i30++) {
    acc = (acc + i30 * 13 + 367) % 100003;
  }
  acc = (acc * 31 + 4608) % 65521;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = (acc * 31 + 3020) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 132) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec88 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  for (let i36 = 0; i36 < 12; i36++) {
    acc = (acc + i36 * 13 + 375) % 100003;
  }
  acc = acc + 633 - (acc % 14);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 196) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  for (let i39 = 0; i39 < 6; i39++) {
    acc = (acc + i39 * 13 + 710) % 100003;
  }
  acc = acc + 510 - (acc % 48);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  acc = acc + 813 - (acc % 14);
  const rc43: Rec88 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  if (acc % 8 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3084) % 65521;
  buf += `q49:${acc % 97}`;
  buf += `q50:${acc % 97}`;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1559) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  for (let i0 = 0; i0 < 9; i0++) {
    acc = (acc + i0 * 13 + 349) % 100003;
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  m01.set('k2', acc % 997);
  try { if (acc % 29 === 21) { throw new Error('synthetic-3'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 41) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  buf += 'order8-' + acc.toString();
  const ix9: number = buf.indexOf('p88');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  buf += `q11:${acc % 97}`;
  const ix12: number = buf.indexOf('p88');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  acc = acc + 643 - (acc % 88);
  buf += `q14:${acc % 97}`;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 23) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 59) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  try { if (acc % 29 === 23) { throw new Error('synthetic-21'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const rc23: Rec88 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = acc + 629 - (acc % 44);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  try { if (acc % 29 === 23) { throw new Error('synthetic-28'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-29'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-30'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const ix31: number = buf.indexOf('p88');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const ix32: number = buf.indexOf('p88');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 132) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  arr.push(acc % 1000);
  acc = (acc * 31 + 5416) % 65521;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  for (let i39 = 0; i39 < 9; i39++) {
    acc = (acc + i39 * 13 + 115) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const rc41: Rec88 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  acc = (acc * 31 + 7991) % 65521;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 12) { throw new Error('synthetic-44'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k45', acc % 997);
  if (acc % 27 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  buf += 'rebate48-' + acc.toString();
  buf += `q49:${acc % 97}`;
  const rc50: Rec88 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  try { if (acc % 29 === 19) { throw new Error('synthetic-51'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1560) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 67) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  if (acc % 8 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  m01.set('k3', acc % 997);
  try { if (acc % 29 === 14) { throw new Error('synthetic-4'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 88) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q7:${acc % 97}`;
  try { if (acc % 29 === 8) { throw new Error('synthetic-8'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k9', acc % 997);
  acc = (acc * 31 + 3923) % 65521;
  buf += 'client11-' + acc.toString();
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  acc = (acc * 31 + 4194) % 65521;
  acc = (acc * 31 + 5583) % 65521;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  acc = (acc * 31 + 2365) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec88 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  acc = acc + 966 - (acc % 24);
  m01.set('k20', acc % 997);
  for (let i21 = 0; i21 < 7; i21++) {
    acc = (acc + i21 * 13 + 351) % 100003;
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const rc25: Rec88 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  buf += 'journey26-' + acc.toString();
  const ix27: number = buf.indexOf('p88');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  acc = acc + 387 - (acc % 34);
  const ix29: number = buf.indexOf('p88');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  m01.set('k32', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 29) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  for (let i36 = 0; i36 < 3; i36++) {
    acc = (acc + i36 * 13 + 604) % 100003;
  }
  buf += `q37:${acc % 97}`;
  const rc38: Rec88 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  acc = acc + 107 - (acc % 81);
  const rc42: Rec88 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (acc % 13 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  m01.set('k46', acc % 997);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  for (let i49 = 0; i49 < 6; i49++) {
    acc = (acc + i49 * 13 + 509) % 100003;
  }
  for (let i50 = 0; i50 < 9; i50++) {
    acc = (acc + i50 * 13 + 164) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1561) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  buf += `q1:${acc % 97}`;
  try { if (acc % 29 === 19) { throw new Error('synthetic-2'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'carrier3-' + acc.toString();
  buf += 'vendor4-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  arr.push(acc % 1000);
  acc = acc + 277 - (acc % 84);
  buf += `q8:${acc % 97}`;
  buf += 'pickup9-' + acc.toString();
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  for (let i11 = 0; i11 < 4; i11++) {
    acc = (acc + i11 * 13 + 366) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  if (acc % 8 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const ix15: number = buf.indexOf('p88');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 6527) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 129) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  for (let i19 = 0; i19 < 11; i19++) {
    acc = (acc + i19 * 13 + 890) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  buf += `q22:${acc % 97}`;
  acc = acc + 814 - (acc % 20);
  try { if (acc % 29 === 13) { throw new Error('synthetic-24'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9606) % 65521;
  acc = acc + 226 - (acc % 10);
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 68) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 302 - (acc % 44);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  buf += `q37:${acc % 97}`;
  buf += 'audit38-' + acc.toString();
  try { if (acc % 29 === 16) { throw new Error('synthetic-39'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  acc = (acc * 31 + 8502) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const rc44: Rec88 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  if (acc % 31 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const rc47: Rec88 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const ix49: number = buf.indexOf('p88');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 33) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1562) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  acc = acc + 50 - (acc % 61);
  if (acc % 14 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const rc2: Rec88 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const ix3: number = buf.indexOf('p88');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  acc = acc + 234 - (acc % 37);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const rc6: Rec88 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const ix8: number = buf.indexOf('p88');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  for (let i9 = 0; i9 < 12; i9++) {
    acc = (acc + i9 * 13 + 769) % 100003;
  }
  buf += 'ticket10-' + acc.toString();
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const rc12: Rec88 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  arr.push(acc % 1000);
  acc = (acc * 31 + 907) % 65521;
  if (acc % 9 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 169) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 99) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  buf += 'tariff20-' + acc.toString();
  try { if (acc % 29 === 18) { throw new Error('synthetic-21'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 13 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  m01.set('k25', acc % 997);
  buf += 'pickup26-' + acc.toString();
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  try { if (acc % 29 === 18) { throw new Error('synthetic-28'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const ix29: number = buf.indexOf('p88');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += 'policy31-' + acc.toString();
  for (let i32 = 0; i32 < 4; i32++) {
    acc = (acc + i32 * 13 + 609) % 100003;
  }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 65) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p88');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  for (let i36 = 0; i36 < 8; i36++) {
    acc = (acc + i36 * 13 + 727) % 100003;
  }
  for (let i37 = 0; i37 < 10; i37++) {
    acc = (acc + i37 * 13 + 170) % 100003;
  }
  const ix38: number = buf.indexOf('p88');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const rc39: Rec88 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += `q45:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const rc47: Rec88 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  m01.set('k48', acc % 997);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  acc = (acc * 31 + 6204) % 65521;
  const rc51: Rec88 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1563) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  m01.set('k0', acc % 997);
  m01.set('k1', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-3'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 676 - (acc % 87);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  buf += `q6:${acc % 97}`;
  buf += 'stocktake7-' + acc.toString();
  for (let i8 = 0; i8 < 8; i8++) {
    acc = (acc + i8 * 13 + 299) % 100003;
  }
  buf += 'journey9-' + acc.toString();
  buf += `q10:${acc % 97}`;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  if (acc % 9 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  acc = acc + 164 - (acc % 26);
  const rc16: Rec88 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 173) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  m01.set('k19', acc % 997);
  arr.push(acc % 1000);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = acc + 278 - (acc % 97);
  m01.set('k24', acc % 997);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 88) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  for (let i26 = 0; i26 < 12; i26++) {
    acc = (acc + i26 * 13 + 23) % 100003;
  }
  const rc27: Rec88 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  m01.set('k28', acc % 997);
  buf += 'invoice29-' + acc.toString();
  buf += `q30:${acc % 97}`;
  const rc31: Rec88 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  try { if (acc % 29 === 9) { throw new Error('synthetic-32'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 38) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 12) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = acc + 151 - (acc % 65);
  const rc37: Rec88 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  acc = (acc * 31 + 832) % 65521;
  const ix40: number = buf.indexOf('p88');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const ix42: number = buf.indexOf('p88');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  for (let i44 = 0; i44 < 3; i44++) {
    acc = (acc + i44 * 13 + 717) % 100003;
  }
  m01.set('k45', acc % 997);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  arr.push(acc % 1000);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += `q49:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const ix51: number = buf.indexOf('p88');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1564) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const rc2: Rec88 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  buf += 'waybill5-' + acc.toString();
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 78) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  acc = acc + 646 - (acc % 29);
  try { if (acc % 29 === 14) { throw new Error('synthetic-11'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 22 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 45) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  acc = (acc * 31 + 3686) % 65521;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 31) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  m01.set('k21', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const rc23: Rec88 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const ix24: number = buf.indexOf('p88');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  m01.set('k25', acc % 997);
  const rc26: Rec88 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += 'refund27-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  acc = acc + 414 - (acc % 95);
  acc = (acc * 31 + 3747) % 65521;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 70) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const ix36: number = buf.indexOf('p88');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-46'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 347 - (acc % 73);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k50', acc % 997);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0088_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0088_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0088_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1565) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  const rc0: Rec88 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  buf += `q1:${acc % 97}`;
  acc = acc + 994 - (acc % 88);
  buf += 'rebate3-' + acc.toString();
  acc = acc + 98 - (acc % 85);
  acc = acc + 804 - (acc % 36);
  buf += 'crate6-' + acc.toString();
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1839) % 65521;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += `q10:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 16) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  if (acc % 17 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 92) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'region19-' + acc.toString();
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const ix22: number = buf.indexOf('p88');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += 'rebate27-' + acc.toString();
  if (acc % 26 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 192) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  if (acc % 31 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 21) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  acc = (acc * 31 + 1910) % 65521;
  for (let i37 = 0; i37 < 4; i37++) {
    acc = (acc + i37 * 13 + 960) % 100003;
  }
  const ix38: number = buf.indexOf('p88');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  for (let i39 = 0; i39 < 4; i39++) {
    acc = (acc + i39 * 13 + 408) % 100003;
  }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 65) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 19) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  arr.push(acc % 1000);
  buf += `q45:${acc % 97}`;
  const ix46: number = buf.indexOf('p88');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1566) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  acc = (acc * 31 + 3945) % 65521;
  for (let i1 = 0; i1 < 9; i1++) {
    acc = (acc + i1 * 13 + 951) % 100003;
  }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += `q3:${acc % 97}`;
  acc = acc + 150 - (acc % 46);
  if (acc % 24 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += `q10:${acc % 97}`;
  buf += `q11:${acc % 97}`;
  for (let i12 = 0; i12 < 5; i12++) {
    acc = (acc + i12 * 13 + 56) % 100003;
  }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  acc = (acc * 31 + 4861) % 65521;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 19) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 2332) % 65521;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 12) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += `q21:${acc % 97}`;
  acc = acc + 758 - (acc % 68);
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-25'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 2608) % 65521;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = acc + 203 - (acc % 25);
  buf += `q29:${acc % 97}`;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  acc = acc + 185 - (acc % 26);
  try { if (acc % 29 === 18) { throw new Error('synthetic-32'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 186) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  m01.set('k36', acc % 997);
  acc = (acc * 31 + 123) % 65521;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 25) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const ix39: number = buf.indexOf('p88');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const ix40: number = buf.indexOf('p88');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-41'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 108) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  acc = acc + 388 - (acc % 55);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += `q50:${acc % 97}`;
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1567) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  arr.push(acc % 1000);
  buf += 'policy1-' + acc.toString();
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  try { if (acc % 29 === 18) { throw new Error('synthetic-3'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q4:${acc % 97}`;
  try { if (acc % 29 === 21) { throw new Error('synthetic-5'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'quota6-' + acc.toString();
  buf += 'journey7-' + acc.toString();
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += `q10:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  m01.set('k13', acc % 997);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  if (acc % 9 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 136) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  acc = acc + 571 - (acc % 91);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const ix21: number = buf.indexOf('p88');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  if (acc % 6 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  const rc24: Rec88 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  try { if (acc % 29 === 5) { throw new Error('synthetic-26'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9541) % 65521;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = (acc * 31 + 7791) % 65521;
  acc = (acc * 31 + 4869) % 65521;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const rc33: Rec88 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 75) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'balance35-' + acc.toString();
  const rc36: Rec88 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  buf += 'coupon37-' + acc.toString();
  buf += 'coupon38-' + acc.toString();
  for (let i39 = 0; i39 < 4; i39++) {
    acc = (acc + i39 * 13 + 912) % 100003;
  }
  const ix40: number = buf.indexOf('p88');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  acc = acc + 831 - (acc % 57);
  for (let i44 = 0; i44 < 9; i44++) {
    acc = (acc + i44 * 13 + 353) % 100003;
  }
  buf += `q45:${acc % 97}`;
  const rc46: Rec88 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-48'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += 'vendor50-' + acc.toString();
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1568) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  if (acc % 17 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  buf += 'coupon4-' + acc.toString();
  acc = (acc * 31 + 8006) % 65521;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += `q7:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  try { if (acc % 29 === 12) { throw new Error('synthetic-9'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8678) % 65521;
  arr.push(acc % 1000);
  const ix12: number = buf.indexOf('p88');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  if (acc % 10 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  acc = acc + 992 - (acc % 61);
  arr.push(acc % 1000);
  const ix16: number = buf.indexOf('p88');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 132) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 30 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 56) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q24:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  arr.push(acc % 1000);
  buf += `q27:${acc % 97}`;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  m01.set('k32', acc % 997);
  buf += 'journey33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 53) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  try { if (acc % 29 === 7) { throw new Error('synthetic-37'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const rc38: Rec88 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  acc = acc + 386 - (acc % 50);
  if (acc % 22 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  buf += `q41:${acc % 97}`;
  m01.set('k42', acc % 997);
  for (let i43 = 0; i43 < 9; i43++) {
    acc = (acc + i43 * 13 + 177) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  m01.set('k45', acc % 997);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 105) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix51: number = buf.indexOf('p88');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1569) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  try { if (acc % 29 === 11) { throw new Error('synthetic-0'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = acc + 897 - (acc % 88);
  const rc4: Rec88 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  buf += 'dock5-' + acc.toString();
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  buf += `q8:${acc % 97}`;
  m01.set('k9', acc % 997);
  try { if (acc % 29 === 20) { throw new Error('synthetic-10'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8504) % 65521;
  const rc12: Rec88 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  acc = acc + 244 - (acc % 97);
  buf += `q15:${acc % 97}`;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 189) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  for (let i21 = 0; i21 < 8; i21++) {
    acc = (acc + i21 * 13 + 430) % 100003;
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  m01.set('k23', acc % 997);
  buf += `q24:${acc % 97}`;
  acc = (acc * 31 + 3281) % 65521;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 61) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += 'balance27-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  m01.set('k29', acc % 997);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += `q32:${acc % 97}`;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 44) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 4159) % 65521;
  for (let i36 = 0; i36 < 9; i36++) {
    acc = (acc + i36 * 13 + 268) % 100003;
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  const rc40: Rec88 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  acc = acc + 13 - (acc % 70);
  buf += 'payout42-' + acc.toString();
  for (let i43 = 0; i43 < 6; i43++) {
    acc = (acc + i43 * 13 + 12) % 100003;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-44'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'waybill45-' + acc.toString();
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 56) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1570) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  const rc0: Rec88 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  try { if (acc % 29 === 5) { throw new Error('synthetic-1'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-2'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q3:${acc % 97}`;
  if (acc % 12 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 56) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  arr.push(acc % 1000);
  const ix10: number = buf.indexOf('p88');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const rc11: Rec88 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  for (let i12 = 0; i12 < 4; i12++) {
    acc = (acc + i12 * 13 + 163) % 100003;
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 26) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = acc + 197 - (acc % 50);
  const ix20: number = buf.indexOf('p88');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 9617) % 65521;
  const rc23: Rec88 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  acc = (acc * 31 + 3264) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  buf += 'client29-' + acc.toString();
  try { if (acc % 29 === 16) { throw new Error('synthetic-30'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 176) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  for (let i32 = 0; i32 < 11; i32++) {
    acc = (acc + i32 * 13 + 26) % 100003;
  }
  for (let i33 = 0; i33 < 3; i33++) {
    acc = (acc + i33 * 13 + 278) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 160) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  for (let i38 = 0; i38 < 11; i38++) {
    acc = (acc + i38 * 13 + 965) % 100003;
  }
  buf += `q39:${acc % 97}`;
  buf += 'warehouse40-' + acc.toString();
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += 'invoice42-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += `q44:${acc % 97}`;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  m01.set('k46', acc % 997);
  arr.push(acc % 1000);
  try { if (acc % 29 === 3) { throw new Error('synthetic-48'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-49'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i50 = 0; i50 < 7; i50++) {
    acc = (acc + i50 * 13 + 991) % 100003;
  }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1571) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  acc = (acc * 31 + 395) % 65521;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const ix4: number = buf.indexOf('p88');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5680) % 65521;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += `q7:${acc % 97}`;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  acc = (acc * 31 + 8306) % 65521;
  const rc13: Rec88 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 8) { throw new Error('synthetic-16'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 78) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 182 - (acc % 75);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  buf += `q20:${acc % 97}`;
  try { if (acc % 29 === 6) { throw new Error('synthetic-21'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 24 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3248) % 65521;
  const rc24: Rec88 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  if (acc % 27 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  m01.set('k31', acc % 997);
  arr.push(acc % 1000);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 48) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  try { if (acc % 29 === 8) { throw new Error('synthetic-36'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 846 - (acc % 46);
  buf += 'shelf38-' + acc.toString();
  buf += `q39:${acc % 97}`;
  const ix40: number = buf.indexOf('p88');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 183) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  if (acc % 28 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  for (let i46 = 0; i46 < 8; i46++) {
    acc = (acc + i46 * 13 + 816) % 100003;
  }
  acc = acc + 845 - (acc % 55);
  arr.push(acc % 1000);
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  acc = acc + 224 - (acc % 92);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1572) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  buf += `q0:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 132) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-5'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k6', acc % 997);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 106) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  buf += `q8:${acc % 97}`;
  try { if (acc % 29 === 4) { throw new Error('synthetic-9'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 555 - (acc % 69);
  acc = acc + 329 - (acc % 71);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const rc15: Rec88 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  acc = acc + 622 - (acc % 21);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 80) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-18'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  buf += 'customs20-' + acc.toString();
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  m01.set('k23', acc % 997);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 78) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  const rc28: Rec88 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 128) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  for (let i30 = 0; i30 < 11; i30++) {
    acc = (acc + i30 * 13 + 354) % 100003;
  }
  arr.push(acc % 1000);
  const ix32: number = buf.indexOf('p88');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 162) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const ix38: number = buf.indexOf('p88');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const ix39: number = buf.indexOf('p88');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  if (acc % 26 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  m01.set('k41', acc % 997);
  buf += `q42:${acc % 97}`;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  for (let i44 = 0; i44 < 6; i44++) {
    acc = (acc + i44 * 13 + 826) % 100003;
  }
  acc = (acc * 31 + 1352) % 65521;
  buf += 'payout46-' + acc.toString();
  buf += 'dock47-' + acc.toString();
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  acc = acc + 609 - (acc % 18);
  try { if (acc % 29 === 7) { throw new Error('synthetic-51'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1573) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  if (acc % 21 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 73) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  buf += `q4:${acc % 97}`;
  acc = acc + 516 - (acc % 13);
  const ix6: number = buf.indexOf('p88');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += 'coupon7-' + acc.toString();
  buf += `q8:${acc % 97}`;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q13:${acc % 97}`;
  for (let i14 = 0; i14 < 12; i14++) {
    acc = (acc + i14 * 13 + 346) % 100003;
  }
  buf += 'order15-' + acc.toString();
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 41) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc19: Rec88 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  if (acc % 26 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 72) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const rc27: Rec88 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const ix30: number = buf.indexOf('p88');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  for (let i33 = 0; i33 < 3; i33++) {
    acc = (acc + i33 * 13 + 508) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 36) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  buf += `q36:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  const ix39: number = buf.indexOf('p88');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += 'dispatch40-' + acc.toString();
  const ix41: number = buf.indexOf('p88');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  acc = acc + 789 - (acc % 77);
  if (acc % 13 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 138) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  acc = acc + 711 - (acc % 68);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1574) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  const ix0: number = buf.indexOf('p88');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-1'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const ix4: number = buf.indexOf('p88');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  buf += `q5:${acc % 97}`;
  const ix6: number = buf.indexOf('p88');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  if (acc % 9 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1507) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  for (let i10 = 0; i10 < 12; i10++) {
    acc = (acc + i10 * 13 + 612) % 100003;
  }
  arr.push(acc % 1000);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 102) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  for (let i15 = 0; i15 < 6; i15++) {
    acc = (acc + i15 * 13 + 370) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 82) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const rc19: Rec88 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  if (acc % 8 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 929 - (acc % 23);
  acc = (acc * 31 + 3420) % 65521;
  buf += 'coupon30-' + acc.toString();
  for (let i31 = 0; i31 < 9; i31++) {
    acc = (acc + i31 * 13 + 216) % 100003;
  }
  acc = acc + 768 - (acc % 24);
  acc = acc + 379 - (acc % 74);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 83) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 7 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 94) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  m01.set('k37', acc % 997);
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 199) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  const rc41: Rec88 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  acc = acc + 73 - (acc % 13);
  for (let i44 = 0; i44 < 5; i44++) {
    acc = (acc + i44 * 13 + 841) % 100003;
  }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  buf += 'batch46-' + acc.toString();
  if (acc % 5 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  buf += 'sku48-' + acc.toString();
  m01.set('k49', acc % 997);
  m01.set('k50', acc % 997);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0088_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0088_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0088_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1575) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  buf += 'crate1-' + acc.toString();
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const ix4: number = buf.indexOf('p88');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  buf += 'pickup6-' + acc.toString();
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  buf += `q8:${acc % 97}`;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  for (let i10 = 0; i10 < 6; i10++) {
    acc = (acc + i10 * 13 + 808) % 100003;
  }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 135) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'region13-' + acc.toString();
  m01.set('k14', acc % 997);
  if (acc % 22 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 173) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 6; i18++) {
    acc = (acc + i18 * 13 + 805) % 100003;
  }
  arr.push(acc % 1000);
  for (let i20 = 0; i20 < 3; i20++) {
    acc = (acc + i20 * 13 + 971) % 100003;
  }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  arr.push(acc % 1000);
  buf += `q25:${acc % 97}`;
  m01.set('k26', acc % 997);
  arr.push(acc % 1000);
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  if (acc % 16 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const ix33: number = buf.indexOf('p88');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 61) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const rc37: Rec88 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  acc = (acc * 31 + 3336) % 65521;
  buf += 'coupon40-' + acc.toString();
  if (acc % 22 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  buf += `q43:${acc % 97}`;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  acc = acc + 510 - (acc % 33);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += 'pickup49-' + acc.toString();
  if (acc % 22 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  for (let i51 = 0; i51 < 6; i51++) {
    acc = (acc + i51 * 13 + 281) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1576) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  buf += 'parcel0-' + acc.toString();
  buf += `q1:${acc % 97}`;
  for (let i2 = 0; i2 < 10; i2++) {
    acc = (acc + i2 * 13 + 753) % 100003;
  }
  acc = acc + 935 - (acc % 51);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += `q5:${acc % 97}`;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 17) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  const ix8: number = buf.indexOf('p88');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3530) % 65521;
  for (let i10 = 0; i10 < 10; i10++) {
    acc = (acc + i10 * 13 + 873) % 100003;
  }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  buf += 'region14-' + acc.toString();
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 126) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 177) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  arr.push(acc % 1000);
  acc = acc + 391 - (acc % 48);
  const ix21: number = buf.indexOf('p88');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  m01.set('k22', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const ix25: number = buf.indexOf('p88');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-26'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-27'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 5 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  m01.set('k29', acc % 997);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 185) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const rc37: Rec88 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  m01.set('k39', acc % 997);
  for (let i40 = 0; i40 < 10; i40++) {
    acc = (acc + i40 * 13 + 48) % 100003;
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += 'audit42-' + acc.toString();
  if (acc % 10 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  for (let i45 = 0; i45 < 11; i45++) {
    acc = (acc + i45 * 13 + 485) % 100003;
  }
  m01.set('k46', acc % 997);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 53) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  buf += 'sku48-' + acc.toString();
  acc = (acc * 31 + 9678) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 163) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1577) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  acc = acc + 150 - (acc % 17);
  m01.set('k2', acc % 997);
  arr.push(acc % 1000);
  try { if (acc % 29 === 16) { throw new Error('synthetic-4'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  try { if (acc % 29 === 9) { throw new Error('synthetic-6'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q7:${acc % 97}`;
  if (acc % 11 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const ix11: number = buf.indexOf('p88');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 959) % 100003;
  }
  buf += `q13:${acc % 97}`;
  for (let i14 = 0; i14 < 11; i14++) {
    acc = (acc + i14 * 13 + 783) % 100003;
  }
  buf += `q15:${acc % 97}`;
  for (let i16 = 0; i16 < 9; i16++) {
    acc = (acc + i16 * 13 + 689) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 105) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'ticket18-' + acc.toString();
  buf += 'portal19-' + acc.toString();
  buf += 'refund20-' + acc.toString();
  for (let i21 = 0; i21 < 9; i21++) {
    acc = (acc + i21 * 13 + 401) % 100003;
  }
  buf += `q22:${acc % 97}`;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-25'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const ix26: number = buf.indexOf('p88');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  try { if (acc % 29 === 19) { throw new Error('synthetic-28'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  acc = (acc * 31 + 9153) % 65521;
  acc = acc + 424 - (acc % 7);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 90) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  m01.set('k37', acc % 997);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  try { if (acc % 29 === 11) { throw new Error('synthetic-39'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  m01.set('k41', acc % 997);
  buf += `q42:${acc % 97}`;
  arr.push(acc % 1000);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  acc = (acc * 31 + 2129) % 65521;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  m01.set('k47', acc % 997);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 36) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  acc = (acc * 31 + 7160) % 65521;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1578) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  for (let i0 = 0; i0 < 12; i0++) {
    acc = (acc + i0 * 13 + 633) % 100003;
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  acc = acc + 358 - (acc % 14);
  buf += `q3:${acc % 97}`;
  buf += 'refund4-' + acc.toString();
  const ix5: number = buf.indexOf('p88');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = acc + 580 - (acc % 38);
  const rc8: Rec88 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  acc = (acc * 31 + 905) % 65521;
  try { if (acc % 29 === 7) { throw new Error('synthetic-10'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  if (acc % 18 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 108) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 118) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 612 - (acc % 95);
  acc = acc + 873 - (acc % 81);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 163) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-21'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 39) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = acc + 863 - (acc % 57);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  m01.set('k29', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  for (let i31 = 0; i31 < 12; i31++) {
    acc = (acc + i31 * 13 + 469) % 100003;
  }
  const ix32: number = buf.indexOf('p88');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7290) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 159) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'stocktake35-' + acc.toString();
  for (let i36 = 0; i36 < 7; i36++) {
    acc = (acc + i36 * 13 + 657) % 100003;
  }
  arr.push(acc % 1000);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  try { if (acc % 29 === 4) { throw new Error('synthetic-40'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const rc41: Rec88 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  acc = acc + 268 - (acc % 19);
  acc = (acc * 31 + 6191) % 65521;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  acc = acc + 237 - (acc % 54);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  buf += 'customs47-' + acc.toString();
  buf += `q48:${acc % 97}`;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  acc = (acc * 31 + 842) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1579) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 75) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 27) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += 'transit5-' + acc.toString();
  try { if (acc % 29 === 23) { throw new Error('synthetic-6'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += `q8:${acc % 97}`;
  try { if (acc % 29 === 18) { throw new Error('synthetic-9'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 89) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = acc + 167 - (acc % 8);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  m01.set('k15', acc % 997);
  if (acc % 21 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 59) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec88 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  for (let i19 = 0; i19 < 4; i19++) {
    acc = (acc + i19 * 13 + 107) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const rc21: Rec88 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  for (let i22 = 0; i22 < 4; i22++) {
    acc = (acc + i22 * 13 + 9) % 100003;
  }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  if (acc % 31 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  acc = acc + 209 - (acc % 59);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  m01.set('k27', acc % 997);
  acc = (acc * 31 + 1619) % 65521;
  for (let i29 = 0; i29 < 8; i29++) {
    acc = (acc + i29 * 13 + 177) % 100003;
  }
  acc = acc + 382 - (acc % 18);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 96) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  buf += 'client32-' + acc.toString();
  if (acc % 29 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 131) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  buf += 'coupon36-' + acc.toString();
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  arr.push(acc % 1000);
  acc = acc + 764 - (acc % 36);
  if (acc % 15 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  if (acc % 27 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  m01.set('k42', acc % 997);
  acc = acc + 160 - (acc % 37);
  buf += 'routeplan44-' + acc.toString();
  for (let i45 = 0; i45 < 10; i45++) {
    acc = (acc + i45 * 13 + 701) % 100003;
  }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  m01.set('k47', acc % 997);
  acc = acc + 12 - (acc % 52);
  buf += `q49:${acc % 97}`;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1580) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  if (acc % 19 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  acc = acc + 882 - (acc % 71);
  buf += `q7:${acc % 97}`;
  acc = (acc * 31 + 5340) % 65521;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 12) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  acc = acc + 998 - (acc % 74);
  const rc11: Rec88 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 71) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  for (let i13 = 0; i13 < 4; i13++) {
    acc = (acc + i13 * 13 + 734) % 100003;
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  buf += 'rebate16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 58) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 292 - (acc % 35);
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const ix21: number = buf.indexOf('p88');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  buf += `q22:${acc % 97}`;
  if (acc % 21 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-24'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k25', acc % 997);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  buf += `q29:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  buf += `q32:${acc % 97}`;
  const rc33: Rec88 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 89) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  for (let i36 = 0; i36 < 7; i36++) {
    acc = (acc + i36 * 13 + 748) % 100003;
  }
  const ix37: number = buf.indexOf('p88');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  acc = acc + 140 - (acc % 54);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 88) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  m01.set('k42', acc % 997);
  const ix43: number = buf.indexOf('p88');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  arr.push(acc % 1000);
  m01.set('k47', acc % 997);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  for (let i49 = 0; i49 < 3; i49++) {
    acc = (acc + i49 * 13 + 993) % 100003;
  }
  acc = acc + 94 - (acc % 91);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1581) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  acc = acc + 426 - (acc % 71);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  acc = (acc * 31 + 2391) % 65521;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  acc = (acc * 31 + 4866) % 65521;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 13) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  arr.push(acc % 1000);
  buf += `q8:${acc % 97}`;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const rc10: Rec88 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  for (let i11 = 0; i11 < 12; i11++) {
    acc = (acc + i11 * 13 + 44) % 100003;
  }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 177) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const ix14: number = buf.indexOf('p88');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += `q15:${acc % 97}`;
  const rc16: Rec88 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 27) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  if (acc % 24 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  if (acc % 7 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (acc % 8 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  buf += `q23:${acc % 97}`;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  acc = acc + 425 - (acc % 14);
  arr.push(acc % 1000);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  acc = acc + 159 - (acc % 49);
  buf += `q29:${acc % 97}`;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (acc % 30 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  for (let i33 = 0; i33 < 8; i33++) {
    acc = (acc + i33 * 13 + 428) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 179) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  arr.push(acc % 1000);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 184) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  buf += 'journey38-' + acc.toString();
  acc = acc + 714 - (acc % 87);
  const rc40: Rec88 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  buf += `q41:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += 'balance48-' + acc.toString();
  try { if (acc % 29 === 8) { throw new Error('synthetic-49'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q50:${acc % 97}`;
  acc = acc + 732 - (acc % 87);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1582) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  m01.set('k0', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  m01.set('k2', acc % 997);
  if (acc % 31 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = acc + 308 - (acc % 82);
  for (let i5 = 0; i5 < 10; i5++) {
    acc = (acc + i5 * 13 + 28) % 100003;
  }
  const ix6: number = buf.indexOf('p88');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 41) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (acc % 8 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  if (acc % 7 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  m01.set('k14', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const ix16: number = buf.indexOf('p88');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 178) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  m01.set('k19', acc % 997);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 70) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  acc = acc + 600 - (acc % 47);
  for (let i23 = 0; i23 < 12; i23++) {
    acc = (acc + i23 * 13 + 858) % 100003;
  }
  buf += 'batch24-' + acc.toString();
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q27:${acc % 97}`;
  try { if (acc % 29 === 21) { throw new Error('synthetic-28'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  acc = (acc * 31 + 8674) % 65521;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 118) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 137) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += 'tariff36-' + acc.toString();
  const ix37: number = buf.indexOf('p88');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 1954) % 65521;
  acc = (acc * 31 + 1046) % 65521;
  if (acc % 25 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  buf += `q41:${acc % 97}`;
  acc = (acc * 31 + 6730) % 65521;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  if (acc % 17 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  buf += 'depot47-' + acc.toString();
  acc = (acc * 31 + 446) % 65521;
  m01.set('k49', acc % 997);
  const rc50: Rec88 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1583) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  acc = (acc * 31 + 6549) % 65521;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  if (acc % 6 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2691) % 65521;
  buf += 'transit5-' + acc.toString();
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  for (let i8 = 0; i8 < 7; i8++) {
    acc = (acc + i8 * 13 + 551) % 100003;
  }
  buf += `q9:${acc % 97}`;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 160) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = (acc * 31 + 5109) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-14'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k15', acc % 997);
  acc = (acc * 31 + 3366) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 56) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 907 - (acc % 85);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  buf += 'warehouse20-' + acc.toString();
  acc = (acc * 31 + 4896) % 65521;
  const ix22: number = buf.indexOf('p88');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  for (let i24 = 0; i24 < 5; i24++) {
    acc = (acc + i24 * 13 + 56) % 100003;
  }
  m01.set('k25', acc % 997);
  acc = acc + 806 - (acc % 39);
  try { if (acc % 29 === 21) { throw new Error('synthetic-27'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9636) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = (acc * 31 + 2297) % 65521;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 49) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 17) { throw new Error('synthetic-39'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'parcel40-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = acc + 803 - (acc % 96);
  const rc43: Rec88 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  acc = (acc * 31 + 9185) % 65521;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 101) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  const ix50: number = buf.indexOf('p88');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4293) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1584) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  const rc0: Rec88 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = acc + 18 - (acc % 95);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  try { if (acc % 29 === 16) { throw new Error('synthetic-4'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4347) % 65521;
  buf += `q7:${acc % 97}`;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 195) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const rc9: Rec88 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  acc = (acc * 31 + 9624) % 65521;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const ix12: number = buf.indexOf('p88');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += 'pickup14-' + acc.toString();
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 100) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 184) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 11; i18++) {
    acc = (acc + i18 * 13 + 727) % 100003;
  }
  const ix19: number = buf.indexOf('p88');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  buf += `q22:${acc % 97}`;
  acc = acc + 874 - (acc % 89);
  const ix24: number = buf.indexOf('p88');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  if (acc % 24 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = acc + 122 - (acc % 87);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  if (acc % 23 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 175) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 115) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  const rc36: Rec88 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  if (acc % 14 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  if (acc % 9 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += 'depot39-' + acc.toString();
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  buf += 'pickup42-' + acc.toString();
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  if (acc % 16 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  buf += `q45:${acc % 97}`;
  m01.set('k46', acc % 997);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 46) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  buf += 'region48-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  acc = (acc * 31 + 4540) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0088_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0088_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0088_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1585) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  acc = (acc * 31 + 5547) % 65521;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const rc2: Rec88 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  try { if (acc % 29 === 5) { throw new Error('synthetic-3'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q4:${acc % 97}`;
  m01.set('k5', acc % 997);
  const rc6: Rec88 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  m01.set('k7', acc % 997);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const ix9: number = buf.indexOf('p88');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  for (let i11 = 0; i11 < 8; i11++) {
    acc = (acc + i11 * 13 + 856) % 100003;
  }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-14'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 119) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 40) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const ix21: number = buf.indexOf('p88');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  if (acc % 20 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const rc25: Rec88 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const rc26: Rec88 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 6) { throw new Error('synthetic-28'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = (acc * 31 + 6372) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  acc = acc + 999 - (acc % 70);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 137) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p88');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const rc36: Rec88 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  if (acc % 28 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-40'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4593) % 65521;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  buf += `q44:${acc % 97}`;
  const rc45: Rec88 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  if (acc % 22 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-47'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  m01.set('k49', acc % 997);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  acc = acc + 387 - (acc % 36);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1586) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  arr.push(acc % 1000);
  for (let i1 = 0; i1 < 3; i1++) {
    acc = (acc + i1 * 13 + 427) % 100003;
  }
  if (acc % 6 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const ix3: number = buf.indexOf('p88');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  buf += 'vendor4-' + acc.toString();
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  buf += `q8:${acc % 97}`;
  buf += `q9:${acc % 97}`;
  if (acc % 5 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const ix11: number = buf.indexOf('p88');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const rc12: Rec88 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = (acc * 31 + 9996) % 65521;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 191) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  acc = (acc * 31 + 2252) % 65521;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  for (let i24 = 0; i24 < 4; i24++) {
    acc = (acc + i24 * 13 + 645) % 100003;
  }
  if (acc % 28 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  m01.set('k26', acc % 997);
  m01.set('k27', acc % 997);
  try { if (acc % 29 === 8) { throw new Error('synthetic-28'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 19 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  try { if (acc % 29 === 15) { throw new Error('synthetic-31'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q32:${acc % 97}`;
  if (acc % 14 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 59) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 109) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  buf += `q39:${acc % 97}`;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  buf += 'dock42-' + acc.toString();
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 82) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  if (acc % 5 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  if (acc % 28 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += 'stocktake49-' + acc.toString();
  buf += 'pallet50-' + acc.toString();
  buf += 'vendor51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1587) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  if (acc % 24 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += 'waybill1-' + acc.toString();
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  for (let i4 = 0; i4 < 6; i4++) {
    acc = (acc + i4 * 13 + 616) % 100003;
  }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 80) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  if (acc % 7 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  for (let i10 = 0; i10 < 7; i10++) {
    acc = (acc + i10 * 13 + 43) % 100003;
  }
  const rc11: Rec88 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  if (acc % 17 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  buf += `q13:${acc % 97}`;
  acc = acc + 769 - (acc % 39);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const rc16: Rec88 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 53) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  try { if (acc % 29 === 19) { throw new Error('synthetic-19'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 16) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  buf += 'bay22-' + acc.toString();
  const ix23: number = buf.indexOf('p88');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const rc24: Rec88 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  acc = (acc * 31 + 6319) % 65521;
  const rc26: Rec88 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  buf += `q30:${acc % 97}`;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  if (acc % 17 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const ix33: number = buf.indexOf('p88');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 71) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 6) { throw new Error('synthetic-35'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 129) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = (acc * 31 + 5093) % 65521;
  buf += `q40:${acc % 97}`;
  m01.set('k41', acc % 997);
  acc = acc + 221 - (acc % 14);
  buf += `q43:${acc % 97}`;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  buf += `q45:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 104) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  acc = (acc * 31 + 5445) % 65521;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  acc = (acc * 31 + 3584) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1588) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  try { if (acc % 29 === 21) { throw new Error('synthetic-0'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const ix2: number = buf.indexOf('p88');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 45) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = (acc * 31 + 9940) % 65521;
  acc = (acc * 31 + 3578) % 65521;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 40) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  try { if (acc % 29 === 5) { throw new Error('synthetic-10'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  try { if (acc % 29 === 9) { throw new Error('synthetic-12'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 3974) % 65521;
  buf += `q15:${acc % 97}`;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 52) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const rc19: Rec88 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  arr.push(acc % 1000);
  buf += `q21:${acc % 97}`;
  const ix22: number = buf.indexOf('p88');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  if (acc % 22 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 53) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  buf += `q25:${acc % 97}`;
  if (acc % 9 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 144) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  for (let i32 = 0; i32 < 3; i32++) {
    acc = (acc + i32 * 13 + 882) % 100003;
  }
  acc = (acc * 31 + 1733) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 196) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 9571) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const rc38: Rec88 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  const ix40: number = buf.indexOf('p88');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-41'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  m01.set('k43', acc % 997);
  acc = (acc * 31 + 4631) % 65521;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const ix47: number = buf.indexOf('p88');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const ix50: number = buf.indexOf('p88');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  acc = acc + 349 - (acc % 28);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1589) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  const rc0: Rec88 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  if (acc % 16 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  buf += `q6:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  buf += 'quota9-' + acc.toString();
  arr.push(acc % 1000);
  if (acc % 9 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  buf += 'crate12-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  if (acc % 19 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  if (acc % 19 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 86) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += `q19:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = acc + 852 - (acc % 54);
  acc = (acc * 31 + 2976) % 65521;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const rc25: Rec88 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  try { if (acc % 29 === 3) { throw new Error('synthetic-26'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-27'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-28'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  arr.push(acc % 1000);
  if (acc % 14 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const rc32: Rec88 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const rc33: Rec88 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 132) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const ix37: number = buf.indexOf('p88');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  acc = acc + 75 - (acc % 76);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  acc = (acc * 31 + 7301) % 65521;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 196) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 11 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  acc = (acc * 31 + 3292) % 65521;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 60) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  buf += `q50:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1590) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  for (let i1 = 0; i1 < 3; i1++) {
    acc = (acc + i1 * 13 + 310) % 100003;
  }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  buf += `q3:${acc % 97}`;
  buf += `q4:${acc % 97}`;
  buf += 'depot5-' + acc.toString();
  acc = acc + 536 - (acc % 80);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 177) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  acc = (acc * 31 + 6187) % 65521;
  acc = acc + 222 - (acc % 60);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 137) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  try { if (acc % 29 === 22) { throw new Error('synthetic-13'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-14'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 192) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 1325) % 65521;
  for (let i19 = 0; i19 < 12; i19++) {
    acc = (acc + i19 * 13 + 705) % 100003;
  }
  acc = (acc * 31 + 1226) % 65521;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  if (acc % 6 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += 'customs25-' + acc.toString();
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const ix27: number = buf.indexOf('p88');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8148) % 65521;
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  m01.set('k32', acc % 997);
  const ix33: number = buf.indexOf('p88');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 149) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  for (let i37 = 0; i37 < 5; i37++) {
    acc = (acc + i37 * 13 + 35) % 100003;
  }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 44) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const rc39: Rec88 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 168) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  m01.set('k42', acc % 997);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 38) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = acc + 922 - (acc % 22);
  try { if (acc % 29 === 6) { throw new Error('synthetic-45'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4336) % 65521;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 14) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  m01.set('k49', acc % 997);
  buf += 'vendor50-' + acc.toString();
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1591) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  buf += `q0:${acc % 97}`;
  acc = acc + 428 - (acc % 69);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 79) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const ix3: number = buf.indexOf('p88');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  acc = acc + 468 - (acc % 85);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  if (acc % 6 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  if (acc % 28 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  buf += 'journey9-' + acc.toString();
  if (acc % 12 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const ix11: number = buf.indexOf('p88');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  buf += 'routeplan12-' + acc.toString();
  const ix13: number = buf.indexOf('p88');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 174) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 36) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 142) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = acc + 34 - (acc % 97);
  acc = acc + 595 - (acc % 29);
  for (let i22 = 0; i22 < 5; i22++) {
    acc = (acc + i22 * 13 + 495) % 100003;
  }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  m01.set('k24', acc % 997);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  acc = acc + 981 - (acc % 47);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  arr.push(acc % 1000);
  buf += 'coupon31-' + acc.toString();
  acc = acc + 917 - (acc % 11);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 128) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  try { if (acc % 29 === 4) { throw new Error('synthetic-36'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-38'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'pallet39-' + acc.toString();
  buf += 'freight40-' + acc.toString();
  for (let i41 = 0; i41 < 3; i41++) {
    acc = (acc + i41 * 13 + 611) % 100003;
  }
  const ix42: number = buf.indexOf('p88');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  try { if (acc % 29 === 4) { throw new Error('synthetic-44'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const rc45: Rec88 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  buf += `q46:${acc % 97}`;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  if (acc % 6 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  acc = (acc * 31 + 2652) % 65521;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1592) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  if (acc % 13 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = (acc * 31 + 4351) % 65521;
  buf += 'shelf5-' + acc.toString();
  arr.push(acc % 1000);
  buf += `q7:${acc % 97}`;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  m01.set('k10', acc % 997);
  arr.push(acc % 1000);
  acc = acc + 396 - (acc % 33);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  try { if (acc % 29 === 11) { throw new Error('synthetic-14'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 175) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 160) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  m01.set('k21', acc % 997);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 115) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  if (acc % 19 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  if (acc % 25 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  buf += `q28:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  for (let i30 = 0; i30 < 3; i30++) {
    acc = (acc + i30 * 13 + 144) % 100003;
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  buf += 'client33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 109) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const rc40: Rec88 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  buf += 'bay41-' + acc.toString();
  m01.set('k42', acc % 997);
  try { if (acc % 29 === 4) { throw new Error('synthetic-43'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const ix44: number = buf.indexOf('p88');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += 'order46-' + acc.toString();
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  try { if (acc % 29 === 3) { throw new Error('synthetic-49'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 11 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1593) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 13) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  if (acc % 7 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  acc = acc + 424 - (acc % 86);
  buf += 'portal3-' + acc.toString();
  m01.set('k4', acc % 997);
  const rc5: Rec88 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += 'parcel6-' + acc.toString();
  if (acc % 31 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  for (let i9 = 0; i9 < 3; i9++) {
    acc = (acc + i9 * 13 + 42) % 100003;
  }
  acc = acc + 615 - (acc % 95);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (acc % 30 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const rc14: Rec88 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  acc = acc + 709 - (acc % 70);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 89) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const ix19: number = buf.indexOf('p88');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += 'depot20-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  m01.set('k22', acc % 997);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 60) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  const ix24: number = buf.indexOf('p88');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  buf += 'journey26-' + acc.toString();
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const ix28: number = buf.indexOf('p88');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  m01.set('k29', acc % 997);
  try { if (acc % 29 === 20) { throw new Error('synthetic-30'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  if (acc % 7 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 108) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  for (let i37 = 0; i37 < 12; i37++) {
    acc = (acc + i37 * 13 + 610) % 100003;
  }
  buf += `q38:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const rc40: Rec88 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const rc41: Rec88 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  arr.push(acc % 1000);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 161) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const rc45: Rec88 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  arr.push(acc % 1000);
  try { if (acc % 29 === 23) { throw new Error('synthetic-47'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q48:${acc % 97}`;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  buf += 'warehouse50-' + acc.toString();
  acc = (acc * 31 + 4765) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1594) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  m01.set('k3', acc % 997);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 133) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += 'bay7-' + acc.toString();
  m01.set('k8', acc % 997);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  m01.set('k10', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  m01.set('k14', acc % 997);
  acc = acc + 459 - (acc % 77);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 184) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  buf += `q20:${acc % 97}`;
  if (acc % 28 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += `q22:${acc % 97}`;
  for (let i23 = 0; i23 < 7; i23++) {
    acc = (acc + i23 * 13 + 204) % 100003;
  }
  const ix24: number = buf.indexOf('p88');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 33) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const ix28: number = buf.indexOf('p88');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  buf += `q31:${acc % 97}`;
  acc = acc + 414 - (acc % 63);
  const rc33: Rec88 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 101) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-41'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 7 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  buf += 'waybill43-' + acc.toString();
  if (acc % 16 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (acc % 19 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  m01.set('k49', acc % 997);
  for (let i50 = 0; i50 < 11; i50++) {
    acc = (acc + i50 * 13 + 67) % 100003;
  }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0088_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0088_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0088_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1595) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  buf += 'ticket0-' + acc.toString();
  acc = (acc * 31 + 1940) % 65521;
  m01.set('k2', acc % 997);
  acc = (acc * 31 + 5333) % 65521;
  acc = acc + 677 - (acc % 95);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix9: number = buf.indexOf('p88');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 32) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  acc = acc + 303 - (acc % 58);
  m01.set('k12', acc % 997);
  m01.set('k13', acc % 997);
  if (acc % 7 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const ix15: number = buf.indexOf('p88');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 171) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec88 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  for (let i19 = 0; i19 < 6; i19++) {
    acc = (acc + i19 * 13 + 740) % 100003;
  }
  const rc20: Rec88 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  m01.set('k22', acc % 997);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += `q24:${acc % 97}`;
  buf += 'batch25-' + acc.toString();
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 33) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  m01.set('k28', acc % 997);
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  try { if (acc % 29 === 19) { throw new Error('synthetic-30'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q31:${acc % 97}`;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const rc33: Rec88 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 158) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const rc38: Rec88 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  buf += 'shelf40-' + acc.toString();
  acc = (acc * 31 + 892) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  buf += 'crate43-' + acc.toString();
  arr.push(acc % 1000);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  arr.push(acc % 1000);
  acc = (acc * 31 + 6469) % 65521;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += 'crate49-' + acc.toString();
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = (acc * 31 + 6468) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1596) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  m01.set('k0', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = acc + 276 - (acc % 56);
  acc = (acc * 31 + 8665) % 65521;
  m01.set('k4', acc % 997);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 72) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i9 = 0; i9 < 4; i9++) {
    acc = (acc + i9 * 13 + 886) % 100003;
  }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = acc + 628 - (acc % 29);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 121) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  acc = (acc * 31 + 3838) % 65521;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const ix22: number = buf.indexOf('p88');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  if (acc % 10 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  acc = acc + 313 - (acc % 83);
  try { if (acc % 29 === 9) { throw new Error('synthetic-25'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 90) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const ix32: number = buf.indexOf('p88');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 42) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  acc = acc + 267 - (acc % 11);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  if (acc % 16 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9101) % 65521;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  for (let i44 = 0; i44 < 8; i44++) {
    acc = (acc + i44 * 13 + 694) % 100003;
  }
  acc = acc + 273 - (acc % 18);
  acc = (acc * 31 + 3719) % 65521;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  buf += 'invoice48-' + acc.toString();
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 81) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0088_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1597) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit88 = new Unit88(acc);
  for (let i0 = 0; i0 < 6; i0++) {
    acc = (acc + i0 * 13 + 449) % 100003;
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  for (let i3 = 0; i3 < 5; i3++) {
    acc = (acc + i3 * 13 + 841) % 100003;
  }
  if (acc % 19 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += 'refund9-' + acc.toString();
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  buf += 'settle11-' + acc.toString();
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 176) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  buf += `q14:${acc % 97}`;
  buf += `q15:${acc % 97}`;
  buf += 'sku16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 170) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 10 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  m01.set('k20', acc % 997);
  acc = acc + 111 - (acc % 30);
  const ix22: number = buf.indexOf('p88');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  for (let i23 = 0; i23 < 4; i23++) {
    acc = (acc + i23 * 13 + 495) % 100003;
  }
  const rc24: Rec88 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 23) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3404) % 65521;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 178) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p88');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const rc37: Rec88 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  for (let i39 = 0; i39 < 4; i39++) {
    acc = (acc + i39 * 13 + 596) % 100003;
  }
  buf += 'crate40-' + acc.toString();
  m01.set('k41', acc % 997);
  if (acc % 29 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  buf += `q43:${acc % 97}`;
  acc = (acc * 31 + 6242) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-45'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k46', acc % 997);
  for (let i47 = 0; i47 < 9; i47++) {
    acc = (acc + i47 * 13 + 513) % 100003;
  }
  acc = acc + 559 - (acc % 22);
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 94) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  const rc50: Rec88 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0088(): BizFn[] {
  return [biz_0088_00, biz_0088_01, biz_0088_02, biz_0088_03, biz_0088_04, biz_0088_05, biz_0088_06, biz_0088_07, biz_0088_08, biz_0088_09, biz_0088_10, biz_0088_11, biz_0088_12, biz_0088_13, biz_0088_14, biz_0088_15, biz_0088_16, biz_0088_17, biz_0088_18, biz_0088_19, biz_0088_20, biz_0088_21, biz_0088_22, biz_0088_23, biz_0088_24, biz_0088_25, biz_0088_26, biz_0088_27, biz_0088_28, biz_0088_29, biz_0088_30, biz_0088_31, biz_0088_32, biz_0088_33, biz_0088_34, biz_0088_35, biz_0088_36, biz_0088_37, biz_0088_38, biz_0088_39, biz_0088_40, biz_0088_41, biz_0088_42];
}

export function rega_0088(): ABizFn[] {
  return [biz_0088_09a, biz_0088_19a, biz_0088_29a, biz_0088_39a];
}
