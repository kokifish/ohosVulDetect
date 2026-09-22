// Biz0074.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec74 { id: number; tag: string; score: number; }

class Unit74 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0074_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9694) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  buf += `q0:${acc % 97}`;
  if (acc % 28 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc5: Rec74 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const rc6: Rec74 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  buf += `q7:${acc % 97}`;
  try { if (acc % 29 === 9) { throw new Error('synthetic-8'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  for (let i13 = 0; i13 < 12; i13++) {
    acc = (acc + i13 * 13 + 337) % 100003;
  }
  buf += 'sku14-' + acc.toString();
  try { if (acc % 29 === 14) { throw new Error('synthetic-15'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 19) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec74 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const rc20: Rec74 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  buf += 'audit22-' + acc.toString();
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const ix24: number = buf.indexOf('p74');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const ix25: number = buf.indexOf('p74');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const rc26: Rec74 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  acc = acc + 182 - (acc % 7);
  if (acc % 19 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  buf += `q31:${acc % 97}`;
  buf += `q32:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 99) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  buf += `q38:${acc % 97}`;
  try { if (acc % 29 === 13) { throw new Error('synthetic-39'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'dispatch40-' + acc.toString();
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const rc42: Rec74 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  m01.set('k43', acc % 997);
  acc = acc + 424 - (acc % 55);
  buf += `q45:${acc % 97}`;
  try { if (acc % 29 === 21) { throw new Error('synthetic-46'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 135) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9695) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  if (acc % 23 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += 'freight1-' + acc.toString();
  try { if (acc % 29 === 18) { throw new Error('synthetic-2'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 684 - (acc % 34);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const rc5: Rec74 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const ix6: number = buf.indexOf('p74');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = (acc * 31 + 3820) % 65521;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const ix12: number = buf.indexOf('p74');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 76) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += 'waybill14-' + acc.toString();
  if (acc % 7 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6691) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 189) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix19: number = buf.indexOf('p74');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const ix20: number = buf.indexOf('p74');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  const ix22: number = buf.indexOf('p74');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const ix25: number = buf.indexOf('p74');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  acc = acc + 744 - (acc % 13);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 174) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const rc29: Rec74 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const rc31: Rec74 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  acc = acc + 282 - (acc % 80);
  try { if (acc % 29 === 8) { throw new Error('synthetic-33'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 109) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  buf += 'invoice36-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-38'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-39'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 138) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 127) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'stocktake43-' + acc.toString();
  acc = (acc * 31 + 573) % 65521;
  for (let i45 = 0; i45 < 8; i45++) {
    acc = (acc + i45 * 13 + 981) % 100003;
  }
  const rc46: Rec74 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-48'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9696) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  try { if (acc % 29 === 12) { throw new Error('synthetic-0'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  const rc1: Rec74 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  buf += `q2:${acc % 97}`;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  acc = (acc * 31 + 3793) % 65521;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  acc = acc + 796 - (acc % 58);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  m01.set('k8', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += 'coupon10-' + acc.toString();
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 139) % 100003;
  }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += `q14:${acc % 97}`;
  acc = acc + 82 - (acc % 45);
  const ix16: number = buf.indexOf('p74');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 78) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 28 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  m01.set('k20', acc % 997);
  arr.push(acc % 1000);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 79) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const ix23: number = buf.indexOf('p74');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  buf += 'region26-' + acc.toString();
  m01.set('k27', acc % 997);
  m01.set('k28', acc % 997);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  buf += 'refund31-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (acc % 5 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 199) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  arr.push(acc % 1000);
  for (let i37 = 0; i37 < 10; i37++) {
    acc = (acc + i37 * 13 + 644) % 100003;
  }
  buf += 'transit38-' + acc.toString();
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  buf += `q43:${acc % 97}`;
  const ix44: number = buf.indexOf('p74');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const rc45: Rec74 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const ix47: number = buf.indexOf('p74');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  m01.set('k48', acc % 997);
  const rc49: Rec74 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  buf += `q50:${acc % 97}`;
  for (let i51 = 0; i51 < 9; i51++) {
    acc = (acc + i51 * 13 + 713) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9697) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  const ix0: number = buf.indexOf('p74');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const ix2: number = buf.indexOf('p74');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const ix5: number = buf.indexOf('p74');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-6'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 2265) % 65521;
  buf += `q8:${acc % 97}`;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const rc10: Rec74 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  buf += 'invoice11-' + acc.toString();
  if (acc % 27 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  for (let i13 = 0; i13 < 11; i13++) {
    acc = (acc + i13 * 13 + 443) % 100003;
  }
  for (let i14 = 0; i14 < 9; i14++) {
    acc = (acc + i14 * 13 + 327) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 167) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q19:${acc % 97}`;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  for (let i24 = 0; i24 < 11; i24++) {
    acc = (acc + i24 * 13 + 468) % 100003;
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const rc26: Rec74 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += 'payout27-' + acc.toString();
  if (acc % 21 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const rc31: Rec74 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  buf += 'stocktake32-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-33'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 115) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'invoice36-' + acc.toString();
  buf += 'region37-' + acc.toString();
  acc = acc + 995 - (acc % 42);
  const ix39: number = buf.indexOf('p74');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += 'invoice40-' + acc.toString();
  m01.set('k41', acc % 997);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  if (acc % 6 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  buf += 'waybill44-' + acc.toString();
  if (acc % 8 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  for (let i47 = 0; i47 < 10; i47++) {
    acc = (acc + i47 * 13 + 880) % 100003;
  }
  const ix48: number = buf.indexOf('p74');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  m01.set('k49', acc % 997);
  buf += `q50:${acc % 97}`;
  try { if (acc % 29 === 2) { throw new Error('synthetic-51'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9698) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  if (acc % 19 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const rc2: Rec74 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  try { if (acc % 29 === 22) { throw new Error('synthetic-4'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q5:${acc % 97}`;
  buf += 'order6-' + acc.toString();
  acc = (acc * 31 + 9215) % 65521;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const rc9: Rec74 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  for (let i11 = 0; i11 < 10; i11++) {
    acc = (acc + i11 * 13 + 677) % 100003;
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const ix13: number = buf.indexOf('p74');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 32) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 161) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 845 - (acc % 36);
  buf += `q19:${acc % 97}`;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  buf += 'refund21-' + acc.toString();
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc24: Rec74 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const rc27: Rec74 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-29'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k30', acc % 997);
  if (acc % 24 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 621) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 53) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1755) % 65521;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  try { if (acc % 29 === 14) { throw new Error('synthetic-38'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 2371) % 65521;
  acc = acc + 805 - (acc % 88);
  acc = acc + 625 - (acc % 79);
  buf += 'balance42-' + acc.toString();
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const ix44: number = buf.indexOf('p74');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 138) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  acc = (acc * 31 + 601) % 65521;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 158) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  buf += 'shelf48-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += 'warehouse50-' + acc.toString();
  buf += 'invoice51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9699) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  buf += `q0:${acc % 97}`;
  const rc1: Rec74 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  try { if (acc % 29 === 4) { throw new Error('synthetic-2'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k3', acc % 997);
  const ix4: number = buf.indexOf('p74');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = acc + 893 - (acc % 43);
  m01.set('k6', acc % 997);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  const rc9: Rec74 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 143) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const ix12: number = buf.indexOf('p74');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  buf += 'portal13-' + acc.toString();
  const rc14: Rec74 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  arr.push(acc % 1000);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 183) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  arr.push(acc % 1000);
  const ix20: number = buf.indexOf('p74');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const ix21: number = buf.indexOf('p74');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  for (let i23 = 0; i23 < 4; i23++) {
    acc = (acc + i23 * 13 + 929) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-25'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9887) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const ix29: number = buf.indexOf('p74');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  acc = acc + 586 - (acc % 12);
  if (acc % 6 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 46) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 123) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  try { if (acc % 29 === 13) { throw new Error('synthetic-38'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q39:${acc % 97}`;
  const ix40: number = buf.indexOf('p74');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  for (let i41 = 0; i41 < 3; i41++) {
    acc = (acc + i41 * 13 + 416) % 100003;
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  buf += 'ledger44-' + acc.toString();
  buf += 'refund45-' + acc.toString();
  acc = acc + 89 - (acc % 46);
  m01.set('k47', acc % 997);
  try { if (acc % 29 === 7) { throw new Error('synthetic-48'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k49', acc % 997);
  buf += 'portal50-' + acc.toString();
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9700) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const rc2: Rec74 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  acc = acc + 983 - (acc % 21);
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  buf += `q7:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const ix12: number = buf.indexOf('p74');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  acc = (acc * 31 + 9754) % 65521;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 116) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 81) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  acc = (acc * 31 + 2493) % 65521;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  m01.set('k21', acc % 997);
  const ix22: number = buf.indexOf('p74');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  m01.set('k23', acc % 997);
  const rc24: Rec74 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  m01.set('k25', acc % 997);
  const rc26: Rec74 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 113) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  acc = (acc * 31 + 8929) % 65521;
  acc = acc + 466 - (acc % 95);
  const rc31: Rec74 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  buf += 'pickup32-' + acc.toString();
  const ix33: number = buf.indexOf('p74');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 48) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 5568) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  arr.push(acc % 1000);
  const ix38: number = buf.indexOf('p74');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  for (let i39 = 0; i39 < 12; i39++) {
    acc = (acc + i39 * 13 + 620) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 49) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const ix45: number = buf.indexOf('p74');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += 'routeplan46-' + acc.toString();
  m01.set('k47', acc % 997);
  const rc48: Rec74 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  buf += `q49:${acc % 97}`;
  acc = acc + 783 - (acc % 59);
  try { if (acc % 29 === 17) { throw new Error('synthetic-51'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9701) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (acc % 9 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const ix4: number = buf.indexOf('p74');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += `q8:${acc % 97}`;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 128) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const rc11: Rec74 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = acc + 286 - (acc % 73);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3082) % 65521;
  buf += 'balance16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 43) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  m01.set('k19', acc % 997);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 157) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  m01.set('k23', acc % 997);
  acc = (acc * 31 + 3466) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  acc = (acc * 31 + 8913) % 65521;
  const ix28: number = buf.indexOf('p74');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = acc + 624 - (acc % 64);
  try { if (acc % 29 === 18) { throw new Error('synthetic-30'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 27 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 1328) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 30) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 31 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-38'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  acc = acc + 272 - (acc % 65);
  try { if (acc % 29 === 18) { throw new Error('synthetic-41'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  acc = acc + 286 - (acc % 44);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 148) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9245) % 65521;
  const rc48: Rec74 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  buf += `q49:${acc % 97}`;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  acc = acc + 843 - (acc % 37);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9702) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  const ix0: number = buf.indexOf('p74');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  m01.set('k1', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  m01.set('k4', acc % 997);
  try { if (acc % 29 === 7) { throw new Error('synthetic-5'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  m01.set('k7', acc % 997);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-10'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 52) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  buf += `q13:${acc % 97}`;
  acc = (acc * 31 + 8021) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-15'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 63) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  acc = acc + 931 - (acc % 33);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix22: number = buf.indexOf('p74');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-23'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += 'dock27-' + acc.toString();
  acc = (acc * 31 + 5886) % 65521;
  m01.set('k29', acc % 997);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  if (acc % 7 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 104) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 179) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q37:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-40'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 21 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9132) % 65521;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  for (let i44 = 0; i44 < 7; i44++) {
    acc = (acc + i44 * 13 + 499) % 100003;
  }
  if (acc % 11 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const rc46: Rec74 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  buf += 'portal47-' + acc.toString();
  arr.push(acc % 1000);
  buf += 'policy49-' + acc.toString();
  buf += 'transit50-' + acc.toString();
  const ix51: number = buf.indexOf('p74');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9703) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  acc = acc + 606 - (acc % 37);
  if (acc % 21 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  if (acc % 20 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  acc = (acc * 31 + 986) % 65521;
  if (acc % 8 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += `q5:${acc % 97}`;
  buf += 'policy6-' + acc.toString();
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2657) % 65521;
  acc = (acc * 31 + 7075) % 65521;
  buf += `q12:${acc % 97}`;
  if (acc % 31 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k15', acc % 997);
  buf += 'balance16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 116) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 16) { throw new Error('synthetic-18'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 48) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  m01.set('k22', acc % 997);
  try { if (acc % 29 === 8) { throw new Error('synthetic-23'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const rc24: Rec74 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const rc27: Rec74 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  for (let i28 = 0; i28 < 12; i28++) {
    acc = (acc + i28 * 13 + 249) % 100003;
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  for (let i30 = 0; i30 < 12; i30++) {
    acc = (acc + i30 * 13 + 928) % 100003;
  }
  if (acc % 21 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  if (acc % 9 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const ix33: number = buf.indexOf('p74');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 74) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 9774) % 65521;
  if (acc % 24 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  const ix39: number = buf.indexOf('p74');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  acc = acc + 171 - (acc % 35);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (acc % 12 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const ix43: number = buf.indexOf('p74');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  for (let i45 = 0; i45 < 4; i45++) {
    acc = (acc + i45 * 13 + 763) % 100003;
  }
  m01.set('k46', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += 'refund49-' + acc.toString();
  if (acc % 13 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 11) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0074_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0074_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0074_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9704) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  m01.set('k0', acc % 997);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  m01.set('k2', acc % 997);
  const ix3: number = buf.indexOf('p74');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  acc = acc + 66 - (acc % 87);
  const ix6: number = buf.indexOf('p74');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  m01.set('k8', acc % 997);
  acc = acc + 592 - (acc % 17);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  acc = acc + 987 - (acc % 58);
  const ix12: number = buf.indexOf('p74');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  acc = acc + 488 - (acc % 19);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  buf += `q15:${acc % 97}`;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 142) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 709 - (acc % 46);
  acc = acc + 142 - (acc % 31);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  if (acc % 30 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  arr.push(acc % 1000);
  if (acc % 25 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  buf += 'waybill26-' + acc.toString();
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  try { if (acc % 29 === 3) { throw new Error('synthetic-29'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const rc31: Rec74 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  buf += `q32:${acc % 97}`;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 197) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 753 - (acc % 58);
  arr.push(acc % 1000);
  if (acc % 9 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-38'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  buf += 'sku41-' + acc.toString();
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  try { if (acc % 29 === 6) { throw new Error('synthetic-43'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i44 = 0; i44 < 11; i44++) {
    acc = (acc + i44 * 13 + 36) % 100003;
  }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 148) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  acc = acc + 468 - (acc % 69);
  acc = acc + 50 - (acc % 34);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const rc51: Rec74 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9705) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  for (let i0 = 0; i0 < 3; i0++) {
    acc = (acc + i0 * 13 + 820) % 100003;
  }
  m01.set('k1', acc % 997);
  m01.set('k2', acc % 997);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 27 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const rc10: Rec74 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 111) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 11; i18++) {
    acc = (acc + i18 * 13 + 391) % 100003;
  }
  acc = acc + 770 - (acc % 94);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  try { if (acc % 29 === 5) { throw new Error('synthetic-22'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k23', acc % 997);
  m01.set('k24', acc % 997);
  const rc25: Rec74 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const rc28: Rec74 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  for (let i29 = 0; i29 < 10; i29++) {
    acc = (acc + i29 * 13 + 691) % 100003;
  }
  const ix30: number = buf.indexOf('p74');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  acc = acc + 74 - (acc % 57);
  try { if (acc % 29 === 20) { throw new Error('synthetic-32'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8946) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 138) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  acc = (acc * 31 + 1538) % 65521;
  buf += `q37:${acc % 97}`;
  buf += 'journey38-' + acc.toString();
  for (let i39 = 0; i39 < 4; i39++) {
    acc = (acc + i39 * 13 + 846) % 100003;
  }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 108) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-41'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-42'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i43 = 0; i43 < 9; i43++) {
    acc = (acc + i43 * 13 + 888) % 100003;
  }
  acc = (acc * 31 + 6648) % 65521;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-46'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const ix47: number = buf.indexOf('p74');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-48'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 30 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  acc = acc + 82 - (acc % 45);
  acc = acc + 563 - (acc % 46);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9706) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  m01.set('k1', acc % 997);
  acc = acc + 545 - (acc % 25);
  try { if (acc % 29 === 17) { throw new Error('synthetic-3'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  if (acc % 8 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const rc6: Rec74 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  buf += 'invoice7-' + acc.toString();
  const ix8: number = buf.indexOf('p74');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  for (let i10 = 0; i10 < 12; i10++) {
    acc = (acc + i10 * 13 + 239) % 100003;
  }
  arr.push(acc % 1000);
  const ix12: number = buf.indexOf('p74');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  for (let i13 = 0; i13 < 3; i13++) {
    acc = (acc + i13 * 13 + 389) % 100003;
  }
  m01.set('k14', acc % 997);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 96) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p74');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  m01.set('k22', acc % 997);
  for (let i23 = 0; i23 < 3; i23++) {
    acc = (acc + i23 * 13 + 615) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  arr.push(acc % 1000);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const ix28: number = buf.indexOf('p74');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const rc29: Rec74 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  arr.push(acc % 1000);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const ix32: number = buf.indexOf('p74');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  for (let i33 = 0; i33 < 10; i33++) {
    acc = (acc + i33 * 13 + 684) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 130) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 130) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 178) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  for (let i40 = 0; i40 < 9; i40++) {
    acc = (acc + i40 * 13 + 381) % 100003;
  }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (acc % 17 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2508) % 65521;
  buf += 'transit44-' + acc.toString();
  acc = (acc * 31 + 7961) % 65521;
  if (acc % 26 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  for (let i49 = 0; i49 < 8; i49++) {
    acc = (acc + i49 * 13 + 729) % 100003;
  }
  acc = (acc * 31 + 6743) % 65521;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9707) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const rc1: Rec74 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  for (let i2 = 0; i2 < 6; i2++) {
    acc = (acc + i2 * 13 + 169) % 100003;
  }
  if (acc % 8 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5300) % 65521;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const rc6: Rec74 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  if (acc % 17 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const ix12: number = buf.indexOf('p74');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const rc13: Rec74 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  m01.set('k14', acc % 997);
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 155) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 194) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const rc22: Rec74 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  buf += `q24:${acc % 97}`;
  try { if (acc % 29 === 6) { throw new Error('synthetic-25'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 194) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  if (acc % 30 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  for (let i32 = 0; i32 < 5; i32++) {
    acc = (acc + i32 * 13 + 277) % 100003;
  }
  if (acc % 28 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 175) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec74 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-38'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'portal39-' + acc.toString();
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 108) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  buf += 'dispatch41-' + acc.toString();
  buf += 'depot42-' + acc.toString();
  arr.push(acc % 1000);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const ix46: number = buf.indexOf('p74');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 82) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = acc + 203 - (acc % 95);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9708) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  acc = acc + 100 - (acc % 87);
  const rc1: Rec74 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = (acc * 31 + 804) % 65521;
  buf += 'refund5-' + acc.toString();
  buf += 'tariff6-' + acc.toString();
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  acc = acc + 679 - (acc % 28);
  try { if (acc % 29 === 20) { throw new Error('synthetic-10'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-11'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const rc13: Rec74 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
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
  cf17.push((x: number): number => (x + 108) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  if (acc % 22 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-20'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 11 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += `q23:${acc % 97}`;
  try { if (acc % 29 === 12) { throw new Error('synthetic-24'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7627) % 65521;
  const ix26: number = buf.indexOf('p74');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = (acc * 31 + 6171) % 65521;
  for (let i29 = 0; i29 < 4; i29++) {
    acc = (acc + i29 * 13 + 757) % 100003;
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-30'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'routeplan31-' + acc.toString();
  const rc32: Rec74 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += 'quota33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 71) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 6342) % 65521;
  const ix36: number = buf.indexOf('p74');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  if (acc % 16 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  buf += `q38:${acc % 97}`;
  arr.push(acc % 1000);
  const ix40: number = buf.indexOf('p74');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const ix41: number = buf.indexOf('p74');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 26) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const rc45: Rec74 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  acc = (acc * 31 + 4100) % 65521;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const rc49: Rec74 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9709) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  m01.set('k0', acc % 997);
  const ix1: number = buf.indexOf('p74');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  buf += 'invoice2-' + acc.toString();
  acc = (acc * 31 + 6749) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-4'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-5'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const ix8: number = buf.indexOf('p74');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  m01.set('k10', acc % 997);
  if (acc % 18 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  m01.set('k12', acc % 997);
  const rc13: Rec74 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  try { if (acc % 29 === 10) { throw new Error('synthetic-14'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'refund15-' + acc.toString();
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 158) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-18'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 13) { throw new Error('synthetic-20'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i21 = 0; i21 < 5; i21++) {
    acc = (acc + i21 * 13 + 106) % 100003;
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-22'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i23 = 0; i23 < 12; i23++) {
    acc = (acc + i23 * 13 + 723) % 100003;
  }
  acc = acc + 162 - (acc % 72);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 177) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += `q26:${acc % 97}`;
  acc = (acc * 31 + 6856) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-28'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  for (let i30 = 0; i30 < 7; i30++) {
    acc = (acc + i30 * 13 + 970) % 100003;
  }
  const ix31: number = buf.indexOf('p74');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  buf += `q32:${acc % 97}`;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 68) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  for (let i36 = 0; i36 < 4; i36++) {
    acc = (acc + i36 * 13 + 619) % 100003;
  }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 169) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  arr.push(acc % 1000);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 197) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  acc = acc + 14 - (acc % 55);
  const rc43: Rec74 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  buf += 'vendor44-' + acc.toString();
  try { if (acc % 29 === 11) { throw new Error('synthetic-45'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const ix46: number = buf.indexOf('p74');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  for (let i48 = 0; i48 < 3; i48++) {
    acc = (acc + i48 * 13 + 256) % 100003;
  }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  if (acc % 27 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9710) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 17) { throw new Error('synthetic-2'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 479 - (acc % 57);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  arr.push(acc % 1000);
  try { if (acc % 29 === 23) { throw new Error('synthetic-6'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q7:${acc % 97}`;
  if (acc % 16 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 314) % 65521;
  acc = (acc * 31 + 857) % 65521;
  buf += 'vendor14-' + acc.toString();
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 164) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec74 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  acc = acc + 889 - (acc % 44);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = acc + 441 - (acc % 13);
  if (acc % 14 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  const ix24: number = buf.indexOf('p74');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  if (acc % 28 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  for (let i26 = 0; i26 < 5; i26++) {
    acc = (acc + i26 * 13 + 84) % 100003;
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  if (acc % 12 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  for (let i29 = 0; i29 < 8; i29++) {
    acc = (acc + i29 * 13 + 820) % 100003;
  }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  buf += 'transit31-' + acc.toString();
  try { if (acc % 29 === 9) { throw new Error('synthetic-32'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 25) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'batch35-' + acc.toString();
  try { if (acc % 29 === 19) { throw new Error('synthetic-36'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const ix39: number = buf.indexOf('p74');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-40'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  arr.push(acc % 1000);
  for (let i43 = 0; i43 < 12; i43++) {
    acc = (acc + i43 * 13 + 330) % 100003;
  }
  buf += 'customs44-' + acc.toString();
  buf += 'audit45-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = acc + 224 - (acc % 38);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const rc49: Rec74 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  for (let i50 = 0; i50 < 11; i50++) {
    acc = (acc + i50 * 13 + 159) % 100003;
  }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9711) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  if (acc % 31 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  if (acc % 24 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9614) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  buf += 'policy9-' + acc.toString();
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 945) % 100003;
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  for (let i15 = 0; i15 < 3; i15++) {
    acc = (acc + i15 * 13 + 112) % 100003;
  }
  acc = acc + 422 - (acc % 67);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 22) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  acc = acc + 233 - (acc % 42);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  m01.set('k21', acc % 997);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  for (let i23 = 0; i23 < 5; i23++) {
    acc = (acc + i23 * 13 + 767) % 100003;
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  if (acc % 8 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const ix26: number = buf.indexOf('p74');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  acc = (acc * 31 + 312) % 65521;
  acc = (acc * 31 + 2740) % 65521;
  const ix30: number = buf.indexOf('p74');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  if (acc % 6 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 106) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec74 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  buf += `q37:${acc % 97}`;
  for (let i38 = 0; i38 < 8; i38++) {
    acc = (acc + i38 * 13 + 665) % 100003;
  }
  const ix39: number = buf.indexOf('p74');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  acc = acc + 458 - (acc % 46);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  acc = (acc * 31 + 6676) % 65521;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2582) % 65521;
  acc = (acc * 31 + 5527) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9712) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  acc = (acc * 31 + 3539) % 65521;
  buf += `q1:${acc % 97}`;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  arr.push(acc % 1000);
  m01.set('k5', acc % 997);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  for (let i7 = 0; i7 < 9; i7++) {
    acc = (acc + i7 * 13 + 25) % 100003;
  }
  const rc8: Rec74 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  if (acc % 15 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const ix12: number = buf.indexOf('p74');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  buf += `q13:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const ix15: number = buf.indexOf('p74');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 130) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  try { if (acc % 29 === 23) { throw new Error('synthetic-19'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const ix20: number = buf.indexOf('p74');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  for (let i21 = 0; i21 < 11; i21++) {
    acc = (acc + i21 * 13 + 907) % 100003;
  }
  arr.push(acc % 1000);
  for (let i23 = 0; i23 < 11; i23++) {
    acc = (acc + i23 * 13 + 493) % 100003;
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  m01.set('k28', acc % 997);
  arr.push(acc % 1000);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const ix31: number = buf.indexOf('p74');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  acc = acc + 390 - (acc % 14);
  try { if (acc % 29 === 12) { throw new Error('synthetic-33'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 179) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 238 - (acc % 90);
  buf += 'coupon36-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-39'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q40:${acc % 97}`;
  const rc41: Rec74 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 6553) % 65521;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 18) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += `q46:${acc % 97}`;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  m01.set('k48', acc % 997);
  buf += `q49:${acc % 97}`;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 175) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  if (acc % 11 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9713) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  buf += `q0:${acc % 97}`;
  const ix1: number = buf.indexOf('p74');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-2'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1557) % 65521;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  acc = acc + 672 - (acc % 92);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 52) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  m01.set('k8', acc % 997);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const ix12: number = buf.indexOf('p74');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  if (acc % 23 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 7336) % 65521;
  acc = (acc * 31 + 1532) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 25) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  buf += 'crate19-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  arr.push(acc % 1000);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 118) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-25'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i26 = 0; i26 < 4; i26++) {
    acc = (acc + i26 * 13 + 755) % 100003;
  }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 13) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 6 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  m01.set('k31', acc % 997);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 152) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  buf += 'ledger33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 108) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p74');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  m01.set('k36', acc % 997);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  m01.set('k39', acc % 997);
  if (acc % 27 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  m01.set('k42', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = acc + 551 - (acc % 70);
  try { if (acc % 29 === 12) { throw new Error('synthetic-47'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 2815) % 65521;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const ix51: number = buf.indexOf('p74');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0074_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0074_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0074_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9714) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  if (acc % 31 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const ix2: number = buf.indexOf('p74');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 106) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = (acc * 31 + 471) % 65521;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  if (acc % 11 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  acc = acc + 715 - (acc % 69);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  acc = (acc * 31 + 1701) % 65521;
  arr.push(acc % 1000);
  if (acc % 21 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  acc = (acc * 31 + 9051) % 65521;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  buf += 'tariff16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 36) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 6; i18++) {
    acc = (acc + i18 * 13 + 247) % 100003;
  }
  if (acc % 28 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const ix20: number = buf.indexOf('p74');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-21'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const ix22: number = buf.indexOf('p74');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5355) % 65521;
  acc = acc + 702 - (acc % 37);
  try { if (acc % 29 === 2) { throw new Error('synthetic-26'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  buf += 'portal29-' + acc.toString();
  buf += `q30:${acc % 97}`;
  acc = acc + 169 - (acc % 14);
  for (let i32 = 0; i32 < 4; i32++) {
    acc = (acc + i32 * 13 + 937) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 193) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  if (acc % 25 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  const ix39: number = buf.indexOf('p74');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  m01.set('k42', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const ix46: number = buf.indexOf('p74');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 179) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = (acc * 31 + 6279) % 65521;
  if (acc % 16 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9715) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  try { if (acc % 29 === 21) { throw new Error('synthetic-0'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k1', acc % 997);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += `q4:${acc % 97}`;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  m01.set('k6', acc % 997);
  const rc7: Rec74 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  for (let i8 = 0; i8 < 10; i8++) {
    acc = (acc + i8 * 13 + 151) % 100003;
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  for (let i10 = 0; i10 < 3; i10++) {
    acc = (acc + i10 * 13 + 455) % 100003;
  }
  const ix11: number = buf.indexOf('p74');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  for (let i12 = 0; i12 < 12; i12++) {
    acc = (acc + i12 * 13 + 35) % 100003;
  }
  buf += 'pallet13-' + acc.toString();
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  acc = (acc * 31 + 5051) % 65521;
  acc = acc + 508 - (acc % 57);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 119) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 419 - (acc % 49);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  buf += `q20:${acc % 97}`;
  arr.push(acc % 1000);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const ix23: number = buf.indexOf('p74');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  m01.set('k24', acc % 997);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = (acc * 31 + 2030) % 65521;
  arr.push(acc % 1000);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 110) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 135) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  if (acc % 23 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 141) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-37'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += 'pallet39-' + acc.toString();
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  try { if (acc % 29 === 3) { throw new Error('synthetic-41'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-42'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-43'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  m01.set('k45', acc % 997);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 91) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-50'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9716) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  const ix0: number = buf.indexOf('p74');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const rc3: Rec74 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  arr.push(acc % 1000);
  const ix6: number = buf.indexOf('p74');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const rc10: Rec74 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  m01.set('k11', acc % 997);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  if (acc % 9 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  m01.set('k14', acc % 997);
  if (acc % 26 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const rc16: Rec74 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 66) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const rc20: Rec74 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = acc + 373 - (acc % 36);
  const ix22: number = buf.indexOf('p74');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  m01.set('k24', acc % 997);
  const ix25: number = buf.indexOf('p74');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = (acc * 31 + 261) % 65521;
  acc = (acc * 31 + 8343) % 65521;
  arr.push(acc % 1000);
  for (let i30 = 0; i30 < 5; i30++) {
    acc = (acc + i30 * 13 + 771) % 100003;
  }
  buf += 'transit31-' + acc.toString();
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = acc + 556 - (acc % 67);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 126) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += 'routeplan39-' + acc.toString();
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const ix42: number = buf.indexOf('p74');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = acc + 832 - (acc % 85);
  m01.set('k44', acc % 997);
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  arr.push(acc % 1000);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const rc50: Rec74 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  if (acc % 6 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9717) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const ix1: number = buf.indexOf('p74');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 1151) % 65521;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = (acc * 31 + 1440) % 65521;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += 'dock7-' + acc.toString();
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  for (let i11 = 0; i11 < 3; i11++) {
    acc = (acc + i11 * 13 + 944) % 100003;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-12'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  arr.push(acc % 1000);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 52) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 3892) % 65521;
  acc = acc + 559 - (acc % 66);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 183) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  m01.set('k21', acc % 997);
  buf += `q22:${acc % 97}`;
  arr.push(acc % 1000);
  const rc24: Rec74 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  buf += `q25:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  buf += `q27:${acc % 97}`;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = acc + 789 - (acc % 14);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const ix32: number = buf.indexOf('p74');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 146) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  for (let i36 = 0; i36 < 7; i36++) {
    acc = (acc + i36 * 13 + 174) % 100003;
  }
  const ix37: number = buf.indexOf('p74');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  acc = acc + 347 - (acc % 26);
  if (acc % 7 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  acc = (acc * 31 + 9721) % 65521;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  buf += `q47:${acc % 97}`;
  for (let i48 = 0; i48 < 9; i48++) {
    acc = (acc + i48 * 13 + 326) % 100003;
  }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  arr.push(acc % 1000);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9718) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  buf += `q0:${acc % 97}`;
  buf += `q1:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4785) % 65521;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  arr.push(acc % 1000);
  acc = (acc * 31 + 2186) % 65521;
  if (acc % 28 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  if (acc % 19 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-13'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 77) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 476 - (acc % 78);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 86) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  for (let i20 = 0; i20 < 10; i20++) {
    acc = (acc + i20 * 13 + 805) % 100003;
  }
  const rc21: Rec74 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  acc = (acc * 31 + 6924) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 23) { throw new Error('synthetic-24'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-25'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 113) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  acc = acc + 147 - (acc % 55);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 92) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  buf += `q29:${acc % 97}`;
  for (let i30 = 0; i30 < 8; i30++) {
    acc = (acc + i30 * 13 + 701) % 100003;
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 44) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 158) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 186) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 71) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  acc = acc + 522 - (acc % 54);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = (acc * 31 + 3161) % 65521;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  const rc41: Rec74 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-43'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  try { if (acc % 29 === 15) { throw new Error('synthetic-46'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q47:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  for (let i49 = 0; i49 < 9; i49++) {
    acc = (acc + i49 * 13 + 614) % 100003;
  }
  const ix50: number = buf.indexOf('p74');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 20) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9719) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 134) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 122) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = acc + 459 - (acc % 20);
  buf += 'vendor6-' + acc.toString();
  acc = acc + 209 - (acc % 53);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 19) { throw new Error('synthetic-10'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-12'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i14 = 0; i14 < 3; i14++) {
    acc = (acc + i14 * 13 + 679) % 100003;
  }
  if (acc % 19 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 33) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 621 - (acc % 89);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 73) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = acc + 739 - (acc % 96);
  if (acc % 19 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  if (acc % 16 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const ix24: number = buf.indexOf('p74');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1395) % 65521;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 151) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const ix28: number = buf.indexOf('p74');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2098) % 65521;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  acc = (acc * 31 + 8028) % 65521;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 85) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 30 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  m01.set('k40', acc % 997);
  for (let i41 = 0; i41 < 12; i41++) {
    acc = (acc + i41 * 13 + 17) % 100003;
  }
  if (acc % 22 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-43'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 15 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-45'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 145) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const ix47: number = buf.indexOf('p74');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 54) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  acc = acc + 239 - (acc % 35);
  for (let i50 = 0; i50 < 8; i50++) {
    acc = (acc + i50 * 13 + 948) % 100003;
  }
  for (let i51 = 0; i51 < 11; i51++) {
    acc = (acc + i51 * 13 + 630) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9720) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  m01.set('k4', acc % 997);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  acc = (acc * 31 + 7718) % 65521;
  arr.push(acc % 1000);
  acc = acc + 593 - (acc % 88);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  if (acc % 30 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6644) % 65521;
  acc = (acc * 31 + 108) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-13'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k14', acc % 997);
  try { if (acc % 29 === 19) { throw new Error('synthetic-15'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 16 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 34) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 477 - (acc % 25);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const ix20: number = buf.indexOf('p74');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  buf += `q22:${acc % 97}`;
  buf += 'portal23-' + acc.toString();
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  m01.set('k25', acc % 997);
  m01.set('k26', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  try { if (acc % 29 === 23) { throw new Error('synthetic-28'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 104) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 167) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const ix33: number = buf.indexOf('p74');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 70) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const rc38: Rec74 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  m01.set('k40', acc % 997);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 99) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  if (acc % 18 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  for (let i43 = 0; i43 < 8; i43++) {
    acc = (acc + i43 * 13 + 881) % 100003;
  }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const ix45: number = buf.indexOf('p74');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 14) { throw new Error('synthetic-47'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const rc48: Rec74 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  for (let i51 = 0; i51 < 12; i51++) {
    acc = (acc + i51 * 13 + 983) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9721) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  const ix0: number = buf.indexOf('p74');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  for (let i2 = 0; i2 < 9; i2++) {
    acc = (acc + i2 * 13 + 148) % 100003;
  }
  acc = (acc * 31 + 3030) % 65521;
  acc = (acc * 31 + 5545) % 65521;
  buf += `q5:${acc % 97}`;
  const ix6: number = buf.indexOf('p74');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (acc % 31 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  buf += 'order9-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  arr.push(acc % 1000);
  const rc13: Rec74 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 77) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  acc = acc + 372 - (acc % 29);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 18) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  if (acc % 30 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-20'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 711 - (acc % 94);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const ix24: number = buf.indexOf('p74');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  acc = acc + 397 - (acc % 86);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 117) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  arr.push(acc % 1000);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 89) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 99) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 20 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  for (let i36 = 0; i36 < 9; i36++) {
    acc = (acc + i36 * 13 + 743) % 100003;
  }
  const ix37: number = buf.indexOf('p74');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  buf += `q38:${acc % 97}`;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 111) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  m01.set('k41', acc % 997);
  buf += 'audit42-' + acc.toString();
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-46'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const rc47: Rec74 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  for (let i48 = 0; i48 < 4; i48++) {
    acc = (acc + i48 * 13 + 489) % 100003;
  }
  const ix49: number = buf.indexOf('p74');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const rc51: Rec74 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9722) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  acc = acc + 982 - (acc % 48);
  const ix1: number = buf.indexOf('p74');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  buf += `q4:${acc % 97}`;
  acc = (acc * 31 + 9099) % 65521;
  buf += 'dock6-' + acc.toString();
  m01.set('k7', acc % 997);
  acc = acc + 500 - (acc % 9);
  if (acc % 28 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const rc10: Rec74 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const ix11: number = buf.indexOf('p74');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += 'ticket14-' + acc.toString();
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 84) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 4) { throw new Error('synthetic-18'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  acc = (acc * 31 + 8586) % 65521;
  buf += 'region24-' + acc.toString();
  acc = acc + 999 - (acc % 49);
  acc = acc + 77 - (acc % 55);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  acc = acc + 955 - (acc % 74);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const ix30: number = buf.indexOf('p74');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  acc = (acc * 31 + 5277) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 123) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 5; i35++) {
    acc = (acc + i35 * 13 + 596) % 100003;
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-36'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  const ix37: number = buf.indexOf('p74');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (acc % 7 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  acc = acc + 421 - (acc % 72);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-44'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'client45-' + acc.toString();
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 182) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const rc49: Rec74 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9723) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  m01.set('k0', acc % 997);
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 97) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  m01.set('k2', acc % 997);
  m01.set('k3', acc % 997);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const ix5: number = buf.indexOf('p74');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  acc = (acc * 31 + 6133) % 65521;
  buf += `q8:${acc % 97}`;
  buf += `q9:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  try { if (acc % 29 === 10) { throw new Error('synthetic-12'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const rc13: Rec74 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  acc = (acc * 31 + 8187) % 65521;
  acc = (acc * 31 + 1767) % 65521;
  acc = acc + 276 - (acc % 53);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 155) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += `q20:${acc % 97}`;
  const rc21: Rec74 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  buf += `q22:${acc % 97}`;
  acc = acc + 316 - (acc % 30);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = (acc * 31 + 847) % 65521;
  for (let i27 = 0; i27 < 3; i27++) {
    acc = (acc + i27 * 13 + 431) % 100003;
  }
  acc = acc + 348 - (acc % 77);
  buf += 'rebate29-' + acc.toString();
  acc = acc + 932 - (acc % 19);
  acc = acc + 822 - (acc % 16);
  buf += 'stocktake32-' + acc.toString();
  buf += 'portal33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 74) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  acc = (acc * 31 + 1145) % 65521;
  acc = acc + 735 - (acc % 35);
  const rc38: Rec74 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  for (let i39 = 0; i39 < 12; i39++) {
    acc = (acc + i39 * 13 + 292) % 100003;
  }
  acc = (acc * 31 + 8489) % 65521;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 23) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const rc44: Rec74 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  if (acc % 22 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 131) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = (acc * 31 + 5451) % 65521;
  const ix50: number = buf.indexOf('p74');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  for (let i51 = 0; i51 < 5; i51++) {
    acc = (acc + i51 * 13 + 55) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0074_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0074_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0074_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9724) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  for (let i0 = 0; i0 < 6; i0++) {
    acc = (acc + i0 * 13 + 635) % 100003;
  }
  const ix1: number = buf.indexOf('p74');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 927) % 65521;
  m01.set('k3', acc % 997);
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-5'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7727) % 65521;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  try { if (acc % 29 === 8) { throw new Error('synthetic-9'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 314 - (acc % 51);
  m01.set('k11', acc % 997);
  buf += `q12:${acc % 97}`;
  arr.push(acc % 1000);
  acc = (acc * 31 + 6080) % 65521;
  buf += `q15:${acc % 97}`;
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 53) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  buf += `q19:${acc % 97}`;
  m01.set('k20', acc % 997);
  m01.set('k21', acc % 997);
  acc = (acc * 31 + 5796) % 65521;
  m01.set('k23', acc % 997);
  for (let i24 = 0; i24 < 8; i24++) {
    acc = (acc + i24 * 13 + 814) % 100003;
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  buf += 'settle26-' + acc.toString();
  try { if (acc % 29 === 23) { throw new Error('synthetic-27'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q29:${acc % 97}`;
  acc = (acc * 31 + 7888) % 65521;
  m01.set('k31', acc % 997);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  const rc33: Rec74 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 162) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const rc36: Rec74 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  buf += 'balance39-' + acc.toString();
  buf += 'vendor40-' + acc.toString();
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 53) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = acc + 919 - (acc % 40);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  arr.push(acc % 1000);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const ix48: number = buf.indexOf('p74');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  if (acc % 21 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const ix51: number = buf.indexOf('p74');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9725) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  m01.set('k3', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  buf += `q5:${acc % 97}`;
  acc = (acc * 31 + 9318) % 65521;
  buf += `q7:${acc % 97}`;
  m01.set('k8', acc % 997);
  try { if (acc % 29 === 22) { throw new Error('synthetic-9'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  if (acc % 19 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  m01.set('k14', acc % 997);
  m01.set('k15', acc % 997);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 142) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 48) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const rc20: Rec74 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  for (let i22 = 0; i22 < 10; i22++) {
    acc = (acc + i22 * 13 + 886) % 100003;
  }
  acc = (acc * 31 + 7993) % 65521;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  acc = (acc * 31 + 2716) % 65521;
  m01.set('k26', acc % 997);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  buf += `q28:${acc % 97}`;
  buf += `q29:${acc % 97}`;
  m01.set('k30', acc % 997);
  m01.set('k31', acc % 997);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 48) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 25 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const rc38: Rec74 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  try { if (acc % 29 === 16) { throw new Error('synthetic-39'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = acc + 530 - (acc % 44);
  try { if (acc % 29 === 22) { throw new Error('synthetic-42'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 18 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += `q46:${acc % 97}`;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  for (let i48 = 0; i48 < 8; i48++) {
    acc = (acc + i48 * 13 + 741) % 100003;
  }
  const rc49: Rec74 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  acc = acc + 890 - (acc % 80);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9726) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += `q1:${acc % 97}`;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const rc3: Rec74 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 16) { throw new Error('synthetic-6'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += 'policy9-' + acc.toString();
  if (acc % 22 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  if (acc % 13 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 104) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += 'shelf14-' + acc.toString();
  arr.push(acc % 1000);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 30) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p74');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  m01.set('k20', acc % 997);
  acc = (acc * 31 + 4082) % 65521;
  if (acc % 23 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  m01.set('k23', acc % 997);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  if (acc % 9 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-26'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 10 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = (acc * 31 + 431) % 65521;
  for (let i29 = 0; i29 < 11; i29++) {
    acc = (acc + i29 * 13 + 704) % 100003;
  }
  buf += 'settle30-' + acc.toString();
  const ix31: number = buf.indexOf('p74');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  if (acc % 21 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 109) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const rc36: Rec74 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const ix38: number = buf.indexOf('p74');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += 'ticket42-' + acc.toString();
  acc = acc + 801 - (acc % 95);
  m01.set('k44', acc % 997);
  m01.set('k45', acc % 997);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const ix47: number = buf.indexOf('p74');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  for (let i48 = 0; i48 < 4; i48++) {
    acc = (acc + i48 * 13 + 571) % 100003;
  }
  if (acc % 9 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  buf += `q50:${acc % 97}`;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9727) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  acc = acc + 183 - (acc % 43);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  acc = (acc * 31 + 9324) % 65521;
  buf += `q3:${acc % 97}`;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  if (acc % 14 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  buf += 'vendor8-' + acc.toString();
  buf += 'transit9-' + acc.toString();
  buf += 'customs10-' + acc.toString();
  if (acc % 6 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const rc13: Rec74 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
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
  cf17.push((x: number): number => (x + 23) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 976 - (acc % 31);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  acc = (acc * 31 + 950) % 65521;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const rc23: Rec74 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  m01.set('k24', acc % 997);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  buf += 'quota26-' + acc.toString();
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-28'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'transit29-' + acc.toString();
  arr.push(acc % 1000);
  for (let i31 = 0; i31 < 12; i31++) {
    acc = (acc + i31 * 13 + 967) % 100003;
  }
  acc = (acc * 31 + 7563) % 65521;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 48) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  if (acc % 31 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = acc + 635 - (acc % 88);
  buf += `q38:${acc % 97}`;
  const ix39: number = buf.indexOf('p74');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  acc = acc + 58 - (acc % 41);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  try { if (acc % 29 === 14) { throw new Error('synthetic-44'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const rc45: Rec74 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  m01.set('k48', acc % 997);
  for (let i49 = 0; i49 < 10; i49++) {
    acc = (acc + i49 * 13 + 610) % 100003;
  }
  buf += `q50:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9728) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  arr.push(acc % 1000);
  buf += 'carrier1-' + acc.toString();
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 2) { throw new Error('synthetic-3'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  buf += 'region5-' + acc.toString();
  buf += 'refund6-' + acc.toString();
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 142) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const rc8: Rec74 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  for (let i9 = 0; i9 < 8; i9++) {
    acc = (acc + i9 * 13 + 29) % 100003;
  }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 186) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  for (let i11 = 0; i11 < 11; i11++) {
    acc = (acc + i11 * 13 + 893) % 100003;
  }
  acc = (acc * 31 + 5112) % 65521;
  acc = (acc * 31 + 2674) % 65521;
  acc = acc + 583 - (acc % 12);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 59) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 5087) % 65521;
  for (let i19 = 0; i19 < 10; i19++) {
    acc = (acc + i19 * 13 + 623) % 100003;
  }
  if (acc % 23 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const rc21: Rec74 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  if (acc % 22 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 20) { throw new Error('synthetic-25'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const rc27: Rec74 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  buf += `q29:${acc % 97}`;
  arr.push(acc % 1000);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const ix32: number = buf.indexOf('p74');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const ix33: number = buf.indexOf('p74');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 100) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 10) { throw new Error('synthetic-35'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  buf += 'bay39-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += 'rebate41-' + acc.toString();
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1861) % 65521;
  m01.set('k44', acc % 997);
  acc = (acc * 31 + 1813) % 65521;
  for (let i46 = 0; i46 < 9; i46++) {
    acc = (acc + i46 * 13 + 198) % 100003;
  }
  acc = acc + 305 - (acc % 72);
  for (let i48 = 0; i48 < 7; i48++) {
    acc = (acc + i48 * 13 + 538) % 100003;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-49'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  for (let i51 = 0; i51 < 6; i51++) {
    acc = (acc + i51 * 13 + 758) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9729) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  if (acc % 28 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  m01.set('k3', acc % 997);
  acc = (acc * 31 + 2562) % 65521;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (acc % 31 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  buf += 'settle8-' + acc.toString();
  acc = (acc * 31 + 3409) % 65521;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 177) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  acc = (acc * 31 + 6809) % 65521;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += `q15:${acc % 97}`;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 28) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p74');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const ix20: number = buf.indexOf('p74');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  acc = acc + 997 - (acc % 80);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 97) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const rc26: Rec74 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  acc = acc + 303 - (acc % 11);
  if (acc % 25 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8497) % 65521;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 22) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 4) { throw new Error('synthetic-35'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 84) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix42: number = buf.indexOf('p74');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  buf += `q43:${acc % 97}`;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += 'ledger46-' + acc.toString();
  if (acc % 14 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  for (let i48 = 0; i48 < 9; i48++) {
    acc = (acc + i48 * 13 + 214) % 100003;
  }
  const ix49: number = buf.indexOf('p74');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9730) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  arr.push(acc % 1000);
  const rc2: Rec74 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  acc = acc + 869 - (acc % 19);
  acc = (acc * 31 + 3266) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (acc % 16 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 77) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  for (let i19 = 0; i19 < 10; i19++) {
    acc = (acc + i19 * 13 + 388) % 100003;
  }
  for (let i20 = 0; i20 < 4; i20++) {
    acc = (acc + i20 * 13 + 32) % 100003;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-21'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 73) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  buf += `q25:${acc % 97}`;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8504) % 65521;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1456) % 65521;
  if (acc % 15 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 153) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  buf += `q37:${acc % 97}`;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  for (let i39 = 0; i39 < 8; i39++) {
    acc = (acc + i39 * 13 + 103) % 100003;
  }
  acc = acc + 360 - (acc % 25);
  arr.push(acc % 1000);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 12) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  if (acc % 17 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const rc47: Rec74 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  acc = acc + 42 - (acc % 71);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 184) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 51) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9731) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  try { if (acc % 29 === 21) { throw new Error('synthetic-1'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-2'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 166) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const ix11: number = buf.indexOf('p74');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const ix13: number = buf.indexOf('p74');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const rc15: Rec74 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 80) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  if (acc % 8 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += 'warehouse24-' + acc.toString();
  for (let i25 = 0; i25 < 9; i25++) {
    acc = (acc + i25 * 13 + 451) % 100003;
  }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  for (let i27 = 0; i27 < 9; i27++) {
    acc = (acc + i27 * 13 + 334) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q29:${acc % 97}`;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 117) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = (acc * 31 + 6822) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  if (acc % 27 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 145) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  arr.push(acc % 1000);
  acc = acc + 607 - (acc % 19);
  arr.push(acc % 1000);
  try { if (acc % 29 === 3) { throw new Error('synthetic-39'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k40', acc % 997);
  try { if (acc % 29 === 23) { throw new Error('synthetic-41'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  buf += 'quota43-' + acc.toString();
  acc = acc + 937 - (acc % 56);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const ix47: number = buf.indexOf('p74');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4058) % 65521;
  buf += `q49:${acc % 97}`;
  arr.push(acc % 1000);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9732) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  buf += `q0:${acc % 97}`;
  buf += 'dispatch1-' + acc.toString();
  const ix2: number = buf.indexOf('p74');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  if (acc % 28 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = (acc * 31 + 4729) % 65521;
  for (let i5 = 0; i5 < 11; i5++) {
    acc = (acc + i5 * 13 + 989) % 100003;
  }
  const rc6: Rec74 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  buf += `q7:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  acc = (acc * 31 + 8783) % 65521;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  m01.set('k13', acc % 997);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 32) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'bay18-' + acc.toString();
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  m01.set('k22', acc % 997);
  for (let i23 = 0; i23 < 12; i23++) {
    acc = (acc + i23 * 13 + 979) % 100003;
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  try { if (acc % 29 === 3) { throw new Error('synthetic-26'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 77) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = acc + 531 - (acc % 44);
  m01.set('k31', acc % 997);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 53) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'journey35-' + acc.toString();
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const ix37: number = buf.indexOf('p74');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-38'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  const rc39: Rec74 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  m01.set('k42', acc % 997);
  buf += `q43:${acc % 97}`;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  for (let i45 = 0; i45 < 4; i45++) {
    acc = (acc + i45 * 13 + 394) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 58) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const ix48: number = buf.indexOf('p74');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  const rc50: Rec74 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += 'ledger51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9733) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  if (acc % 13 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  m01.set('k2', acc % 997);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  buf += `q4:${acc % 97}`;
  try { if (acc % 29 === 16) { throw new Error('synthetic-5'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const ix6: number = buf.indexOf('p74');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  m01.set('k7', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9485) % 65521;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  acc = acc + 603 - (acc % 13);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 153) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const rc20: Rec74 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  const ix21: number = buf.indexOf('p74');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  acc = acc + 894 - (acc % 60);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  for (let i25 = 0; i25 < 12; i25++) {
    acc = (acc + i25 * 13 + 307) % 100003;
  }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const ix27: number = buf.indexOf('p74');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  for (let i28 = 0; i28 < 9; i28++) {
    acc = (acc + i28 * 13 + 297) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  if (acc % 16 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 44) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 1907) % 65521;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  arr.push(acc % 1000);
  if (acc % 18 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 120) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = acc + 722 - (acc % 76);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  acc = (acc * 31 + 3799) % 65521;
  const ix48: number = buf.indexOf('p74');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0074_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0074_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0074_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9734) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  acc = acc + 20 - (acc % 95);
  const ix2: number = buf.indexOf('p74');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  buf += `q4:${acc % 97}`;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 184) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  if (acc % 12 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-9'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const rc10: Rec74 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  buf += 'journey11-' + acc.toString();
  buf += `q12:${acc % 97}`;
  const ix13: number = buf.indexOf('p74');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const rc15: Rec74 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 122) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 11; i18++) {
    acc = (acc + i18 * 13 + 359) % 100003;
  }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  m01.set('k21', acc % 997);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 122) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const rc23: Rec74 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  try { if (acc % 29 === 3) { throw new Error('synthetic-24'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 104) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  arr.push(acc % 1000);
  try { if (acc % 29 === 22) { throw new Error('synthetic-29'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const rc31: Rec74 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  if (acc % 22 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 45) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6087) % 65521;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  buf += 'order38-' + acc.toString();
  try { if (acc % 29 === 12) { throw new Error('synthetic-39'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i42 = 0; i42 < 9; i42++) {
    acc = (acc + i42 * 13 + 813) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const rc44: Rec74 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += `q45:${acc % 97}`;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 131) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  m01.set('k48', acc % 997);
  acc = acc + 463 - (acc % 24);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9735) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  const ix0: number = buf.indexOf('p74');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-1'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const rc3: Rec74 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 14) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  m01.set('k5', acc % 997);
  const rc6: Rec74 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 67) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  buf += 'client8-' + acc.toString();
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (acc % 25 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  acc = acc + 689 - (acc % 18);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const ix14: number = buf.indexOf('p74');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = acc + 845 - (acc % 14);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 144) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += `q20:${acc % 97}`;
  const ix21: number = buf.indexOf('p74');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  buf += 'crate22-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const ix24: number = buf.indexOf('p74');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  buf += `q25:${acc % 97}`;
  const rc26: Rec74 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  if (acc % 24 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  buf += 'region28-' + acc.toString();
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 156) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const ix31: number = buf.indexOf('p74');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2956) % 65521;
  acc = acc + 47 - (acc % 48);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 199) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  arr.push(acc % 1000);
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = (acc * 31 + 3658) % 65521;
  const ix45: number = buf.indexOf('p74');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  buf += 'journey47-' + acc.toString();
  const rc48: Rec74 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 62) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  for (let i51 = 0; i51 < 7; i51++) {
    acc = (acc + i51 * 13 + 648) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0074_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 9736) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit74 = new Unit74(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  buf += `q1:${acc % 97}`;
  acc = acc + 936 - (acc % 56);
  for (let i3 = 0; i3 < 10; i3++) {
    acc = (acc + i3 * 13 + 453) % 100003;
  }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const ix5: number = buf.indexOf('p74');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const rc6: Rec74 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  for (let i10 = 0; i10 < 3; i10++) {
    acc = (acc + i10 * 13 + 219) % 100003;
  }
  buf += `q11:${acc % 97}`;
  arr.push(acc % 1000);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  try { if (acc % 29 === 12) { throw new Error('synthetic-14'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const rc15: Rec74 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 170) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 147) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  if (acc % 6 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  buf += 'client20-' + acc.toString();
  buf += 'policy21-' + acc.toString();
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const rc23: Rec74 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  if (acc % 25 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  buf += `q28:${acc % 97}`;
  m01.set('k29', acc % 997);
  acc = acc + 295 - (acc % 23);
  arr.push(acc % 1000);
  const ix32: number = buf.indexOf('p74');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 170) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-35'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q36:${acc % 97}`;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += 'policy38-' + acc.toString();
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 8) { throw new Error('synthetic-40'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 81) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = (acc * 31 + 9638) % 65521;
  const rc43: Rec74 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4010) % 65521;
  for (let i46 = 0; i46 < 3; i46++) {
    acc = (acc + i46 * 13 + 634) % 100003;
  }
  const ix47: number = buf.indexOf('p74');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  m01.set('k49', acc % 997);
  acc = acc + 30 - (acc % 69);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0074(): BizFn[] {
  return [biz_0074_00, biz_0074_01, biz_0074_02, biz_0074_03, biz_0074_04, biz_0074_05, biz_0074_06, biz_0074_07, biz_0074_08, biz_0074_09, biz_0074_10, biz_0074_11, biz_0074_12, biz_0074_13, biz_0074_14, biz_0074_15, biz_0074_16, biz_0074_17, biz_0074_18, biz_0074_19, biz_0074_20, biz_0074_21, biz_0074_22, biz_0074_23, biz_0074_24, biz_0074_25, biz_0074_26, biz_0074_27, biz_0074_28, biz_0074_29, biz_0074_30, biz_0074_31, biz_0074_32, biz_0074_33, biz_0074_34, biz_0074_35, biz_0074_36, biz_0074_37, biz_0074_38, biz_0074_39, biz_0074_40, biz_0074_41, biz_0074_42];
}

export function rega_0074(): ABizFn[] {
  return [biz_0074_09a, biz_0074_19a, biz_0074_29a, biz_0074_39a];
}
