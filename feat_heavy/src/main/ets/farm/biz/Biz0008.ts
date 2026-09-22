// Biz0008.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec8 { id: number; tag: string; score: number; }

class Unit8 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0008_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1048) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  acc = (acc * 31 + 7123) % 65521;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-3'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1249) % 65521;
  arr.push(acc % 1000);
  if (acc % 18 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const ix7: number = buf.indexOf('p8');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  if (acc % 13 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  if (acc % 24 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  buf += `q10:${acc % 97}`;
  const ix11: number = buf.indexOf('p8');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (acc % 20 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += `q15:${acc % 97}`;
  buf += 'rebate16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 193) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 26) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  m01.set('k19', acc % 997);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 113) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-23'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 27 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6843) % 65521;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 80) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const rc32: Rec8 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 132) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 177) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  try { if (acc % 29 === 4) { throw new Error('synthetic-37'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'pallet38-' + acc.toString();
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  acc = (acc * 31 + 6731) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  buf += 'region44-' + acc.toString();
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  m01.set('k46', acc % 997);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const ix48: number = buf.indexOf('p8');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  m01.set('k49', acc % 997);
  buf += 'invoice50-' + acc.toString();
  try { if (acc % 29 === 22) { throw new Error('synthetic-51'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1049) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  buf += `q0:${acc % 97}`;
  const rc1: Rec8 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += 'policy5-' + acc.toString();
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  for (let i7 = 0; i7 < 6; i7++) {
    acc = (acc + i7 * 13 + 329) % 100003;
  }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  m01.set('k9', acc % 997);
  acc = (acc * 31 + 6229) % 65521;
  buf += 'sku11-' + acc.toString();
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  for (let i13 = 0; i13 < 3; i13++) {
    acc = (acc + i13 * 13 + 279) % 100003;
  }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const rc16: Rec8 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 33) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 14 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  acc = (acc * 31 + 4574) % 65521;
  acc = acc + 324 - (acc % 92);
  buf += `q21:${acc % 97}`;
  arr.push(acc % 1000);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  for (let i25 = 0; i25 < 3; i25++) {
    acc = (acc + i25 * 13 + 60) % 100003;
  }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-29'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  acc = acc + 724 - (acc % 71);
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 92) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  if (acc % 21 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const ix39: number = buf.indexOf('p8');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  buf += `q42:${acc % 97}`;
  const ix43: number = buf.indexOf('p8');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 93) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  buf += 'payout45-' + acc.toString();
  const rc46: Rec8 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  acc = (acc * 31 + 3280) % 65521;
  m01.set('k49', acc % 997);
  arr.push(acc % 1000);
  const rc51: Rec8 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1050) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  if (acc % 13 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  buf += 'audit4-' + acc.toString();
  acc = acc + 459 - (acc % 62);
  const rc6: Rec8 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  buf += `q7:${acc % 97}`;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  if (acc % 5 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const ix10: number = buf.indexOf('p8');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  if (acc % 10 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  const rc15: Rec8 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const ix16: number = buf.indexOf('p8');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 193) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 1096) % 65521;
  if (acc % 13 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-20'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const rc22: Rec8 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  buf += `q23:${acc % 97}`;
  const rc24: Rec8 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  buf += `q25:${acc % 97}`;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  for (let i29 = 0; i29 < 9; i29++) {
    acc = (acc + i29 * 13 + 858) % 100003;
  }
  acc = (acc * 31 + 1055) % 65521;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 113) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec8 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  arr.push(acc % 1000);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 149) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  try { if (acc % 29 === 2) { throw new Error('synthetic-39'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k40', acc % 997);
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2769) % 65521;
  const rc45: Rec8 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += `q49:${acc % 97}`;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const ix51: number = buf.indexOf('p8');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1051) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  const ix0: number = buf.indexOf('p8');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 25) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 12 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = acc + 381 - (acc % 68);
  acc = (acc * 31 + 2672) % 65521;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const rc8: Rec8 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const rc9: Rec8 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const ix11: number = buf.indexOf('p8');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 6) { throw new Error('synthetic-13'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k14', acc % 997);
  acc = acc + 333 - (acc % 10);
  const ix16: number = buf.indexOf('p8');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 61) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p8');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-19'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q20:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  if (acc % 17 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  buf += `q25:${acc % 97}`;
  buf += `q26:${acc % 97}`;
  m01.set('k27', acc % 997);
  arr.push(acc % 1000);
  buf += `q29:${acc % 97}`;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 71) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  if (acc % 27 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  for (let i42 = 0; i42 < 12; i42++) {
    acc = (acc + i42 * 13 + 457) % 100003;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-43'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8867) % 65521;
  try { if (acc % 29 === 5) { throw new Error('synthetic-45'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 5 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  if (acc % 18 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  for (let i48 = 0; i48 < 5; i48++) {
    acc = (acc + i48 * 13 + 126) % 100003;
  }
  const rc49: Rec8 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const ix50: number = buf.indexOf('p8');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1052) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  m01.set('k1', acc % 997);
  acc = (acc * 31 + 824) % 65521;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-4'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  for (let i6 = 0; i6 < 7; i6++) {
    acc = (acc + i6 * 13 + 545) % 100003;
  }
  acc = acc + 296 - (acc % 51);
  buf += 'customs8-' + acc.toString();
  const ix9: number = buf.indexOf('p8');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  buf += 'dock10-' + acc.toString();
  const rc11: Rec8 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 83) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = acc + 209 - (acc % 94);
  const ix14: number = buf.indexOf('p8');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  for (let i15 = 0; i15 < 6; i15++) {
    acc = (acc + i15 * 13 + 800) % 100003;
  }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 89) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += 'customs19-' + acc.toString();
  acc = acc + 54 - (acc % 56);
  m01.set('k21', acc % 997);
  buf += 'invoice22-' + acc.toString();
  const ix23: number = buf.indexOf('p8');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-24'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  acc = acc + 281 - (acc % 96);
  if (acc % 28 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  buf += `q28:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += `q30:${acc % 97}`;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 148) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 22 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 7138) % 65521;
  acc = (acc * 31 + 1315) % 65521;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  acc = (acc * 31 + 173) % 65521;
  buf += `q41:${acc % 97}`;
  try { if (acc % 29 === 8) { throw new Error('synthetic-42'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const ix43: number = buf.indexOf('p8');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  for (let i47 = 0; i47 < 3; i47++) {
    acc = (acc + i47 * 13 + 93) % 100003;
  }
  const rc48: Rec8 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  if (acc % 26 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1053) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  buf += 'routeplan0-' + acc.toString();
  if (acc % 26 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  for (let i5 = 0; i5 < 9; i5++) {
    acc = (acc + i5 * 13 + 300) % 100003;
  }
  const rc6: Rec8 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  const ix9: number = buf.indexOf('p8');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-11'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += 'pickup13-' + acc.toString();
  m01.set('k14', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 125) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 121) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  acc = acc + 98 - (acc % 12);
  m01.set('k22', acc % 997);
  m01.set('k23', acc % 997);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 92) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  arr.push(acc % 1000);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (acc % 31 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 60) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 132 - (acc % 97);
  acc = (acc * 31 + 4283) % 65521;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  acc = (acc * 31 + 3666) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  if (acc % 20 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const rc43: Rec8 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  m01.set('k44', acc % 997);
  if (acc % 28 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = acc + 453 - (acc % 24);
  acc = acc + 357 - (acc % 28);
  buf += `q48:${acc % 97}`;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const rc51: Rec8 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1054) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  buf += `q1:${acc % 97}`;
  const rc2: Rec8 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  acc = (acc * 31 + 7422) % 65521;
  buf += 'ticket4-' + acc.toString();
  acc = acc + 669 - (acc % 18);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  for (let i9 = 0; i9 < 6; i9++) {
    acc = (acc + i9 * 13 + 828) % 100003;
  }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 18) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-12'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += 'rebate15-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 102) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  const ix19: number = buf.indexOf('p8');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += 'portal20-' + acc.toString();
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = acc + 629 - (acc % 58);
  buf += 'client23-' + acc.toString();
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const ix25: number = buf.indexOf('p8');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const ix27: number = buf.indexOf('p8');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const rc29: Rec8 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  for (let i30 = 0; i30 < 5; i30++) {
    acc = (acc + i30 * 13 + 554) % 100003;
  }
  for (let i31 = 0; i31 < 3; i31++) {
    acc = (acc + i31 * 13 + 567) % 100003;
  }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 125) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 11) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  acc = (acc * 31 + 3733) % 65521;
  for (let i37 = 0; i37 < 3; i37++) {
    acc = (acc + i37 * 13 + 77) % 100003;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-38'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const rc39: Rec8 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (acc % 20 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  m01.set('k43', acc % 997);
  for (let i44 = 0; i44 < 4; i44++) {
    acc = (acc + i44 * 13 + 683) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = acc + 78 - (acc % 39);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  acc = (acc * 31 + 1390) % 65521;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1055) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  for (let i0 = 0; i0 < 3; i0++) {
    acc = (acc + i0 * 13 + 67) % 100003;
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  acc = (acc * 31 + 6323) % 65521;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const ix7: number = buf.indexOf('p8');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  acc = (acc * 31 + 3984) % 65521;
  acc = (acc * 31 + 1001) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-11'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'journey12-' + acc.toString();
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 22) { throw new Error('synthetic-15'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 141) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 123) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9958) % 65521;
  m01.set('k20', acc % 997);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  try { if (acc % 29 === 15) { throw new Error('synthetic-22'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'carrier23-' + acc.toString();
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 190) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 38) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (acc % 27 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 178) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  try { if (acc % 29 === 3) { throw new Error('synthetic-36'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  arr.push(acc % 1000);
  for (let i39 = 0; i39 < 12; i39++) {
    acc = (acc + i39 * 13 + 319) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const rc41: Rec8 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  buf += `q44:${acc % 97}`;
  if (acc % 6 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += `q47:${acc % 97}`;
  buf += 'refund48-' + acc.toString();
  if (acc % 10 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1056) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 137) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const ix2: number = buf.indexOf('p8');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  if (acc % 23 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = (acc * 31 + 4171) % 65521;
  acc = acc + 511 - (acc % 74);
  if (acc % 29 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  buf += `q9:${acc % 97}`;
  for (let i10 = 0; i10 < 11; i10++) {
    acc = (acc + i10 * 13 + 69) % 100003;
  }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  acc = acc + 611 - (acc % 15);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  arr.push(acc % 1000);
  if (acc % 9 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += 'coupon16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 114) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'portal18-' + acc.toString();
  buf += `q19:${acc % 97}`;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  buf += 'dispatch22-' + acc.toString();
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const rc25: Rec8 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const ix27: number = buf.indexOf('p8');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const ix28: number = buf.indexOf('p8');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  buf += `q29:${acc % 97}`;
  m01.set('k30', acc % 997);
  acc = acc + 771 - (acc % 31);
  arr.push(acc % 1000);
  const ix33: number = buf.indexOf('p8');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 169) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i37 = 0; i37 < 3; i37++) {
    acc = (acc + i37 * 13 + 501) % 100003;
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += `q40:${acc % 97}`;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 32) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const ix44: number = buf.indexOf('p8');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-47'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  arr.push(acc % 1000);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1057) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  if (acc % 5 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-5'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6505) % 65521;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  arr.push(acc % 1000);
  for (let i9 = 0; i9 < 8; i9++) {
    acc = (acc + i9 * 13 + 160) % 100003;
  }
  const ix10: number = buf.indexOf('p8');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  buf += `q11:${acc % 97}`;
  arr.push(acc % 1000);
  const rc13: Rec8 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  acc = (acc * 31 + 7672) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 17) { throw new Error('synthetic-16'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 122) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 6) { throw new Error('synthetic-18'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 594 - (acc % 62);
  acc = acc + 813 - (acc % 70);
  acc = acc + 39 - (acc % 58);
  const ix22: number = buf.indexOf('p8');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  acc = acc + 702 - (acc % 56);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 41) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  try { if (acc % 29 === 2) { throw new Error('synthetic-28'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  acc = acc + 103 - (acc % 23);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  for (let i32 = 0; i32 < 10; i32++) {
    acc = (acc + i32 * 13 + 948) % 100003;
  }
  for (let i33 = 0; i33 < 12; i33++) {
    acc = (acc + i33 * 13 + 689) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 164) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const ix37: number = buf.indexOf('p8');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += 'client40-' + acc.toString();
  try { if (acc % 29 === 22) { throw new Error('synthetic-41'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  buf += `q43:${acc % 97}`;
  const rc44: Rec8 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  acc = (acc * 31 + 284) % 65521;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += `q47:${acc % 97}`;
  const rc48: Rec8 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const ix49: number = buf.indexOf('p8');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  for (let i50 = 0; i50 < 7; i50++) {
    acc = (acc + i50 * 13 + 18) % 100003;
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 139) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0008_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0008_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0008_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1058) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  acc = acc + 941 - (acc % 85);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  m01.set('k2', acc % 997);
  m01.set('k3', acc % 997);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = acc + 878 - (acc % 27);
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const rc8: Rec8 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = acc + 631 - (acc % 61);
  buf += `q11:${acc % 97}`;
  m01.set('k12', acc % 997);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 170) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 111) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 127) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  m01.set('k23', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  for (let i26 = 0; i26 < 5; i26++) {
    acc = (acc + i26 * 13 + 533) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  arr.push(acc % 1000);
  try { if (acc % 29 === 12) { throw new Error('synthetic-29'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  buf += `q32:${acc % 97}`;
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 189) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  acc = acc + 417 - (acc % 91);
  acc = (acc * 31 + 6094) % 65521;
  for (let i41 = 0; i41 < 7; i41++) {
    acc = (acc + i41 * 13 + 763) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const ix43: number = buf.indexOf('p8');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const ix44: number = buf.indexOf('p8');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  if (acc % 17 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += `q47:${acc % 97}`;
  arr.push(acc % 1000);
  try { if (acc % 29 === 4) { throw new Error('synthetic-49'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 14 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  for (let i51 = 0; i51 < 10; i51++) {
    acc = (acc + i51 * 13 + 493) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1059) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  m01.set('k0', acc % 997);
  try { if (acc % 29 === 3) { throw new Error('synthetic-1'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 489 - (acc % 33);
  acc = (acc * 31 + 734) % 65521;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 15) { throw new Error('synthetic-5'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const rc10: Rec8 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  if (acc % 14 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  for (let i12 = 0; i12 < 11; i12++) {
    acc = (acc + i12 * 13 + 629) % 100003;
  }
  buf += 'carrier13-' + acc.toString();
  acc = acc + 262 - (acc % 45);
  acc = (acc * 31 + 9495) % 65521;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 38) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  for (let i19 = 0; i19 < 10; i19++) {
    acc = (acc + i19 * 13 + 728) % 100003;
  }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  acc = (acc * 31 + 263) % 65521;
  arr.push(acc % 1000);
  acc = acc + 942 - (acc % 19);
  m01.set('k27', acc % 997);
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  m01.set('k29', acc % 997);
  try { if (acc % 29 === 9) { throw new Error('synthetic-30'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i31 = 0; i31 < 6; i31++) {
    acc = (acc + i31 * 13 + 454) % 100003;
  }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 129) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += `q37:${acc % 97}`;
  arr.push(acc % 1000);
  acc = (acc * 31 + 2042) % 65521;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 189) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += `q42:${acc % 97}`;
  const rc43: Rec8 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  const rc45: Rec8 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const ix46: number = buf.indexOf('p8');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  m01.set('k47', acc % 997);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 137) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 158) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1060) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  buf += 'sku1-' + acc.toString();
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const ix4: number = buf.indexOf('p8');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  if (acc % 28 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const ix8: number = buf.indexOf('p8');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  acc = acc + 82 - (acc % 82);
  try { if (acc % 29 === 7) { throw new Error('synthetic-11'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  arr.push(acc % 1000);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += 'routeplan15-' + acc.toString();
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 76) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p8');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  m01.set('k21', acc % 997);
  buf += `q22:${acc % 97}`;
  const ix23: number = buf.indexOf('p8');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-24'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  if (acc % 18 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  acc = acc + 239 - (acc % 22);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const rc30: Rec8 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-31'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  acc = acc + 319 - (acc % 35);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 12) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 14 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  if (acc % 22 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2777) % 65521;
  if (acc % 20 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 25) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k45', acc % 997);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-47'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  buf += 'shelf49-' + acc.toString();
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1061) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  const rc0: Rec8 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 91) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = acc + 45 - (acc % 76);
  acc = (acc * 31 + 2303) % 65521;
  const ix6: number = buf.indexOf('p8');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const ix8: number = buf.indexOf('p8');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 8) { throw new Error('synthetic-10'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 23) { throw new Error('synthetic-12'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i13 = 0; i13 < 11; i13++) {
    acc = (acc + i13 * 13 + 557) % 100003;
  }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  arr.push(acc % 1000);
  const rc16: Rec8 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 198) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 4; i18++) {
    acc = (acc + i18 * 13 + 249) % 100003;
  }
  const rc19: Rec8 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  buf += 'vendor20-' + acc.toString();
  m01.set('k21', acc % 997);
  if (acc % 20 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const rc23: Rec8 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k26', acc % 997);
  arr.push(acc % 1000);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  arr.push(acc % 1000);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  if (acc % 15 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  m01.set('k32', acc % 997);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 13) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 2823) % 65521;
  buf += `q36:${acc % 97}`;
  buf += `q37:${acc % 97}`;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  arr.push(acc % 1000);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 147) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += `q45:${acc % 97}`;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const rc48: Rec8 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  arr.push(acc % 1000);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1062) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  acc = (acc * 31 + 4079) % 65521;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 64) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  acc = (acc * 31 + 9911) % 65521;
  const rc3: Rec8 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  acc = (acc * 31 + 1494) % 65521;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += `q6:${acc % 97}`;
  arr.push(acc % 1000);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 27) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  for (let i13 = 0; i13 < 8; i13++) {
    acc = (acc + i13 * 13 + 835) % 100003;
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const rc16: Rec8 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 118) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 7384) % 65521;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 12) { throw new Error('synthetic-20'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const ix26: number = buf.indexOf('p8');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  try { if (acc % 29 === 4) { throw new Error('synthetic-28'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const rc31: Rec8 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const ix32: number = buf.indexOf('p8');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 11) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 185) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const rc37: Rec8 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  try { if (acc % 29 === 23) { throw new Error('synthetic-38'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  if (acc % 29 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 13) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += `q49:${acc % 97}`;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 46) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1063) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  arr.push(acc % 1000);
  try { if (acc % 29 === 4) { throw new Error('synthetic-1'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  acc = acc + 999 - (acc % 68);
  buf += `q4:${acc % 97}`;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  buf += 'dispatch8-' + acc.toString();
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  if (acc % 8 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  m01.set('k11', acc % 997);
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  m01.set('k14', acc % 997);
  const rc15: Rec8 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  buf += 'dock16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 97) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-18'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = acc + 87 - (acc % 51);
  try { if (acc % 29 === 22) { throw new Error('synthetic-23'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  m01.set('k26', acc % 997);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  acc = acc + 550 - (acc % 54);
  const rc29: Rec8 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  for (let i30 = 0; i30 < 8; i30++) {
    acc = (acc + i30 * 13 + 746) % 100003;
  }
  buf += 'pickup31-' + acc.toString();
  acc = acc + 558 - (acc % 59);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 81) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 197) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 8; i35++) {
    acc = (acc + i35 * 13 + 94) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  acc = (acc * 31 + 6596) % 65521;
  const rc38: Rec8 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  buf += `q40:${acc % 97}`;
  try { if (acc % 29 === 4) { throw new Error('synthetic-41'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i42 = 0; i42 < 4; i42++) {
    acc = (acc + i42 * 13 + 472) % 100003;
  }
  acc = acc + 847 - (acc % 21);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  try { if (acc % 29 === 15) { throw new Error('synthetic-45'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const ix49: number = buf.indexOf('p8');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7052) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1064) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  if (acc % 17 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  if (acc % 18 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  buf += 'crate5-' + acc.toString();
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-7'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = acc + 271 - (acc % 51);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  m01.set('k11', acc % 997);
  acc = (acc * 31 + 7407) % 65521;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 121) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const rc15: Rec8 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const ix16: number = buf.indexOf('p8');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 190) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 6; i18++) {
    acc = (acc + i18 * 13 + 221) % 100003;
  }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const ix20: number = buf.indexOf('p8');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  buf += `q21:${acc % 97}`;
  try { if (acc % 29 === 18) { throw new Error('synthetic-22'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  buf += `q24:${acc % 97}`;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  m01.set('k27', acc % 997);
  const rc28: Rec8 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  for (let i29 = 0; i29 < 5; i29++) {
    acc = (acc + i29 * 13 + 556) % 100003;
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-30'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  m01.set('k32', acc % 997);
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 97) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  arr.push(acc % 1000);
  acc = (acc * 31 + 2589) % 65521;
  buf += 'client38-' + acc.toString();
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 65) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-41'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const rc43: Rec8 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  m01.set('k46', acc % 997);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 12) { throw new Error('synthetic-49'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1065) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  try { if (acc % 29 === 7) { throw new Error('synthetic-0'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 15 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-2'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = acc + 570 - (acc % 55);
  m01.set('k5', acc % 997);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  m01.set('k7', acc % 997);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  arr.push(acc % 1000);
  acc = (acc * 31 + 7205) % 65521;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += 'carrier12-' + acc.toString();
  acc = acc + 727 - (acc % 70);
  buf += 'ledger14-' + acc.toString();
  acc = (acc * 31 + 4828) % 65521;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 157) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  m01.set('k19', acc % 997);
  const ix20: number = buf.indexOf('p8');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const rc23: Rec8 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  buf += 'journey26-' + acc.toString();
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const ix29: number = buf.indexOf('p8');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  acc = (acc * 31 + 2806) % 65521;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 54) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 4106) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-36'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const rc37: Rec8 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  try { if (acc % 29 === 6) { throw new Error('synthetic-43'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 17 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6494) % 65521;
  buf += `q46:${acc % 97}`;
  acc = (acc * 31 + 6668) % 65521;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1066) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  const rc0: Rec8 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  acc = acc + 371 - (acc % 28);
  const ix2: number = buf.indexOf('p8');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  if (acc % 24 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5808) % 65521;
  buf += `q5:${acc % 97}`;
  acc = (acc * 31 + 4967) % 65521;
  const rc7: Rec8 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = (acc * 31 + 5750) % 65521;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  buf += `q13:${acc % 97}`;
  if (acc % 6 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 50) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  const ix19: number = buf.indexOf('p8');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += 'customs20-' + acc.toString();
  if (acc % 27 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  for (let i23 = 0; i23 < 9; i23++) {
    acc = (acc + i23 * 13 + 793) % 100003;
  }
  for (let i24 = 0; i24 < 12; i24++) {
    acc = (acc + i24 * 13 + 470) % 100003;
  }
  m01.set('k25', acc % 997);
  if (acc % 25 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const ix28: number = buf.indexOf('p8');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  if (acc % 8 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  if (acc % 9 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 157) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 23) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = acc + 611 - (acc % 11);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 44) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p8');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 78) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  acc = (acc * 31 + 9775) % 65521;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  const rc40: Rec8 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 66) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  m01.set('k45', acc % 997);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4514) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-50'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const ix51: number = buf.indexOf('p8');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1067) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  if (acc % 27 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = acc + 82 - (acc % 44);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  buf += 'freight6-' + acc.toString();
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-12'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i13 = 0; i13 < 12; i13++) {
    acc = (acc + i13 * 13 + 378) % 100003;
  }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  if (acc % 23 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 125) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 18) { throw new Error('synthetic-18'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8364) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  const rc23: Rec8 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  arr.push(acc % 1000);
  const rc25: Rec8 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 184) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += `q27:${acc % 97}`;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  for (let i29 = 0; i29 < 8; i29++) {
    acc = (acc + i29 * 13 + 974) % 100003;
  }
  if (acc % 19 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  acc = acc + 267 - (acc % 89);
  const ix32: number = buf.indexOf('p8');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 99) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += 'stocktake37-' + acc.toString();
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 107) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  buf += 'policy39-' + acc.toString();
  const rc40: Rec8 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (acc % 29 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const ix45: number = buf.indexOf('p8');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  if (acc % 27 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  buf += `q47:${acc % 97}`;
  acc = acc + 17 - (acc % 52);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0008_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0008_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0008_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1068) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  buf += `q0:${acc % 97}`;
  buf += `q1:${acc % 97}`;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  if (acc % 18 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  buf += 'customs7-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 21) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  for (let i12 = 0; i12 < 9; i12++) {
    acc = (acc + i12 * 13 + 465) % 100003;
  }
  const ix13: number = buf.indexOf('p8');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 148) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const rc22: Rec8 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  acc = (acc * 31 + 7526) % 65521;
  buf += `q24:${acc % 97}`;
  const ix25: number = buf.indexOf('p8');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const rc26: Rec8 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  buf += 'rebate28-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (acc % 11 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  arr.push(acc % 1000);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 156) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 161) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  arr.push(acc % 1000);
  if (acc % 31 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  for (let i41 = 0; i41 < 11; i41++) {
    acc = (acc + i41 * 13 + 148) % 100003;
  }
  buf += `q42:${acc % 97}`;
  if (acc % 24 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 60) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  try { if (acc % 29 === 9) { throw new Error('synthetic-46'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  try { if (acc % 29 === 15) { throw new Error('synthetic-48'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  arr.push(acc % 1000);
  acc = (acc * 31 + 8864) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1069) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  if (acc % 21 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  acc = acc + 464 - (acc % 95);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 155) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const ix6: number = buf.indexOf('p8');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 77) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  try { if (acc % 29 === 4) { throw new Error('synthetic-10'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 102) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  const rc14: Rec8 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += `q15:${acc % 97}`;
  const rc16: Rec8 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 127) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 49) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  try { if (acc % 29 === 23) { throw new Error('synthetic-21'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 11) { throw new Error('synthetic-23'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const rc24: Rec8 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const ix27: number = buf.indexOf('p8');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const rc28: Rec8 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 175) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  for (let i37 = 0; i37 < 6; i37++) {
    acc = (acc + i37 * 13 + 231) % 100003;
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  buf += `q39:${acc % 97}`;
  for (let i40 = 0; i40 < 12; i40++) {
    acc = (acc + i40 * 13 + 36) % 100003;
  }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 1384) % 65521;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 77) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 103) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  buf += 'crate47-' + acc.toString();
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = (acc * 31 + 5266) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1070) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 141) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-1'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 24 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  acc = (acc * 31 + 219) % 65521;
  m01.set('k4', acc % 997);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += 'invoice6-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += 'payout8-' + acc.toString();
  buf += 'region9-' + acc.toString();
  if (acc % 28 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  m01.set('k13', acc % 997);
  acc = (acc * 31 + 3516) % 65521;
  const ix15: number = buf.indexOf('p8');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  acc = acc + 675 - (acc % 87);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 12) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  arr.push(acc % 1000);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 173) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5176) % 65521;
  arr.push(acc % 1000);
  const ix25: number = buf.indexOf('p8');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const rc26: Rec8 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  if (acc % 12 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  for (let i29 = 0; i29 < 6; i29++) {
    acc = (acc + i29 * 13 + 169) % 100003;
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = (acc * 31 + 3681) % 65521;
  if (acc % 22 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 50) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 161) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = (acc * 31 + 8987) % 65521;
  const ix37: number = buf.indexOf('p8');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  buf += 'waybill38-' + acc.toString();
  m01.set('k39', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  buf += 'pickup41-' + acc.toString();
  m01.set('k42', acc % 997);
  if (acc % 28 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 566 - (acc % 95);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  try { if (acc % 29 === 21) { throw new Error('synthetic-50'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 21 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1071) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  acc = (acc * 31 + 4037) % 65521;
  buf += 'ticket3-' + acc.toString();
  acc = acc + 325 - (acc % 84);
  arr.push(acc % 1000);
  buf += 'pallet6-' + acc.toString();
  acc = (acc * 31 + 6741) % 65521;
  arr.push(acc % 1000);
  acc = acc + 931 - (acc % 86);
  if (acc % 26 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = acc + 682 - (acc % 73);
  acc = (acc * 31 + 653) % 65521;
  for (let i14 = 0; i14 < 9; i14++) {
    acc = (acc + i14 * 13 + 589) % 100003;
  }
  m01.set('k15', acc % 997);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 82) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  acc = acc + 279 - (acc % 64);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  acc = (acc * 31 + 1752) % 65521;
  m01.set('k25', acc % 997);
  m01.set('k26', acc % 997);
  buf += `q27:${acc % 97}`;
  try { if (acc % 29 === 13) { throw new Error('synthetic-28'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 14 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  m01.set('k30', acc % 997);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (acc % 26 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 178) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 962 - (acc % 77);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = (acc * 31 + 7056) % 65521;
  m01.set('k39', acc % 997);
  const ix40: number = buf.indexOf('p8');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  acc = acc + 299 - (acc % 83);
  acc = (acc * 31 + 4839) % 65521;
  buf += 'ledger43-' + acc.toString();
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  if (acc % 13 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += `q46:${acc % 97}`;
  if (acc % 14 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  m01.set('k50', acc % 997);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1072) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  buf += 'order0-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  acc = acc + 620 - (acc % 53);
  m01.set('k5', acc % 997);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 180) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  for (let i7 = 0; i7 < 10; i7++) {
    acc = (acc + i7 * 13 + 781) % 100003;
  }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  arr.push(acc % 1000);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 70) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  arr.push(acc % 1000);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  arr.push(acc % 1000);
  m01.set('k15', acc % 997);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  buf += `q20:${acc % 97}`;
  m01.set('k21', acc % 997);
  buf += 'shelf22-' + acc.toString();
  arr.push(acc % 1000);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-25'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  acc = acc + 666 - (acc % 85);
  arr.push(acc % 1000);
  try { if (acc % 29 === 3) { throw new Error('synthetic-30'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 123) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  acc = acc + 736 - (acc % 39);
  const rc37: Rec8 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  buf += 'journey38-' + acc.toString();
  buf += `q39:${acc % 97}`;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  buf += `q41:${acc % 97}`;
  acc = (acc * 31 + 6871) % 65521;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 118) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  m01.set('k44', acc % 997);
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  buf += 'batch46-' + acc.toString();
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 152) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += `q49:${acc % 97}`;
  m01.set('k50', acc % 997);
  const ix51: number = buf.indexOf('p8');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1073) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  m01.set('k0', acc % 997);
  try { if (acc % 29 === 4) { throw new Error('synthetic-1'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 176) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = (acc * 31 + 979) % 65521;
  for (let i5 = 0; i5 < 9; i5++) {
    acc = (acc + i5 * 13 + 820) % 100003;
  }
  m01.set('k6', acc % 997);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  if (acc % 21 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 127) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  buf += `q12:${acc % 97}`;
  if (acc % 27 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  buf += `q14:${acc % 97}`;
  if (acc % 27 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 102) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 12; i18++) {
    acc = (acc + i18 * 13 + 971) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += 'pickup21-' + acc.toString();
  for (let i22 = 0; i22 < 3; i22++) {
    acc = (acc + i22 * 13 + 609) % 100003;
  }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 118) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += 'freight27-' + acc.toString();
  for (let i28 = 0; i28 < 5; i28++) {
    acc = (acc + i28 * 13 + 481) % 100003;
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4210) % 65521;
  acc = (acc * 31 + 308) % 65521;
  acc = acc + 422 - (acc % 23);
  acc = (acc * 31 + 8910) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 98) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q36:${acc % 97}`;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 134) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = (acc * 31 + 2595) % 65521;
  arr.push(acc % 1000);
  acc = (acc * 31 + 6487) % 65521;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  if (acc % 10 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = (acc * 31 + 6392) % 65521;
  try { if (acc % 29 === 5) { throw new Error('synthetic-47'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const rc49: Rec8 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  acc = acc + 186 - (acc % 84);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1074) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  for (let i0 = 0; i0 < 6; i0++) {
    acc = (acc + i0 * 13 + 351) % 100003;
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = acc + 556 - (acc % 13);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 58) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 143) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const rc6: Rec8 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  for (let i7 = 0; i7 < 10; i7++) {
    acc = (acc + i7 * 13 + 456) % 100003;
  }
  const ix8: number = buf.indexOf('p8');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2310) % 65521;
  const ix10: number = buf.indexOf('p8');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const ix11: number = buf.indexOf('p8');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  buf += `q13:${acc % 97}`;
  try { if (acc % 29 === 14) { throw new Error('synthetic-14'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 45) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 159) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const ix19: number = buf.indexOf('p8');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  for (let i20 = 0; i20 < 4; i20++) {
    acc = (acc + i20 * 13 + 287) % 100003;
  }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  buf += 'audit23-' + acc.toString();
  acc = (acc * 31 + 7905) % 65521;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  m01.set('k26', acc % 997);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  buf += `q28:${acc % 97}`;
  for (let i29 = 0; i29 < 8; i29++) {
    acc = (acc + i29 * 13 + 420) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const rc32: Rec8 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 18) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 804 - (acc % 22);
  acc = acc + 561 - (acc % 64);
  try { if (acc % 29 === 16) { throw new Error('synthetic-37'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k38', acc % 997);
  m01.set('k39', acc % 997);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  arr.push(acc % 1000);
  for (let i42 = 0; i42 < 7; i42++) {
    acc = (acc + i42 * 13 + 491) % 100003;
  }
  const ix43: number = buf.indexOf('p8');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8110) % 65521;
  buf += `q45:${acc % 97}`;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  m01.set('k48', acc % 997);
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1075) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 145) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  for (let i1 = 0; i1 < 4; i1++) {
    acc = (acc + i1 * 13 + 611) % 100003;
  }
  arr.push(acc % 1000);
  if (acc % 8 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  m01.set('k4', acc % 997);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  m01.set('k7', acc % 997);
  for (let i8 = 0; i8 < 7; i8++) {
    acc = (acc + i8 * 13 + 163) % 100003;
  }
  const rc9: Rec8 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const ix12: number = buf.indexOf('p8');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const ix13: number = buf.indexOf('p8');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const rc14: Rec8 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 105) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  if (acc % 11 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  acc = (acc * 31 + 292) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-21'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1096) % 65521;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  buf += 'depot24-' + acc.toString();
  try { if (acc % 29 === 10) { throw new Error('synthetic-25'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 185) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  acc = (acc * 31 + 4691) % 65521;
  buf += 'portal29-' + acc.toString();
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += `q31:${acc % 97}`;
  const ix32: number = buf.indexOf('p8');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 126) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 134) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'audit35-' + acc.toString();
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 171) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const rc37: Rec8 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  acc = acc + 624 - (acc % 59);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  acc = (acc * 31 + 4802) % 65521;
  const rc41: Rec8 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  buf += `q42:${acc % 97}`;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 115) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  for (let i44 = 0; i44 < 8; i44++) {
    acc = (acc + i44 * 13 + 983) % 100003;
  }
  buf += 'customs45-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (acc % 16 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6770) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  acc = acc + 623 - (acc % 41);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1076) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  acc = acc + 386 - (acc % 67);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = acc + 829 - (acc % 62);
  buf += 'journey4-' + acc.toString();
  acc = acc + 642 - (acc % 16);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = acc + 754 - (acc % 74);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const ix10: number = buf.indexOf('p8');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4163) % 65521;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  buf += `q13:${acc % 97}`;
  if (acc % 30 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  m01.set('k15', acc % 997);
  if (acc % 26 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 95) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  try { if (acc % 29 === 17) { throw new Error('synthetic-19'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 36) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  m01.set('k22', acc % 997);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 172) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  const ix24: number = buf.indexOf('p8');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  m01.set('k25', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k27', acc % 997);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const rc29: Rec8 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-30'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  for (let i32 = 0; i32 < 9; i32++) {
    acc = (acc + i32 * 13 + 674) % 100003;
  }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 183) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 48) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 520) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const rc38: Rec8 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  buf += `q39:${acc % 97}`;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  for (let i41 = 0; i41 < 10; i41++) {
    acc = (acc + i41 * 13 + 57) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (acc % 26 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  buf += 'transit44-' + acc.toString();
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 145) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  buf += `q49:${acc % 97}`;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3726) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1077) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  acc = acc + 328 - (acc % 95);
  if (acc % 22 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 29) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  acc = (acc * 31 + 5293) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-4'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-5'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q6:${acc % 97}`;
  acc = acc + 283 - (acc % 14);
  const ix8: number = buf.indexOf('p8');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  acc = acc + 468 - (acc % 33);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  for (let i11 = 0; i11 < 11; i11++) {
    acc = (acc + i11 * 13 + 880) % 100003;
  }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const ix13: number = buf.indexOf('p8');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const ix14: number = buf.indexOf('p8');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 71) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 386) % 65521;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  buf += `q22:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 187) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  m01.set('k29', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const rc32: Rec8 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  for (let i33 = 0; i33 < 3; i33++) {
    acc = (acc + i33 * 13 + 52) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 119) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'invoice35-' + acc.toString();
  try { if (acc % 29 === 22) { throw new Error('synthetic-36'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-37'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'freight39-' + acc.toString();
  try { if (acc % 29 === 18) { throw new Error('synthetic-40'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (acc % 6 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  for (let i43 = 0; i43 < 8; i43++) {
    acc = (acc + i43 * 13 + 332) % 100003;
  }
  acc = acc + 792 - (acc % 20);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  for (let i46 = 0; i46 < 8; i46++) {
    acc = (acc + i46 * 13 + 342) % 100003;
  }
  const ix47: number = buf.indexOf('p8');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  try { if (acc % 29 === 4) { throw new Error('synthetic-49'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-50'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const ix51: number = buf.indexOf('p8');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0008_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0008_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0008_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1078) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  m01.set('k0', acc % 997);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  arr.push(acc % 1000);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = acc + 970 - (acc % 38);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  for (let i11 = 0; i11 < 7; i11++) {
    acc = (acc + i11 * 13 + 275) % 100003;
  }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += 'transit14-' + acc.toString();
  try { if (acc % 29 === 6) { throw new Error('synthetic-15'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 186) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 42) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  acc = (acc * 31 + 7639) % 65521;
  acc = acc + 210 - (acc % 31);
  const ix21: number = buf.indexOf('p8');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  try { if (acc % 29 === 6) { throw new Error('synthetic-23'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (acc % 13 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = (acc * 31 + 1257) % 65521;
  try { if (acc % 29 === 10) { throw new Error('synthetic-28'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = acc + 187 - (acc % 64);
  if (acc % 24 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  for (let i32 = 0; i32 < 11; i32++) {
    acc = (acc + i32 * 13 + 347) % 100003;
  }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 191) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 89) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  acc = (acc * 31 + 2259) % 65521;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const rc42: Rec8 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  acc = acc + 216 - (acc % 73);
  buf += `q45:${acc % 97}`;
  try { if (acc % 29 === 17) { throw new Error('synthetic-46'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  const ix47: number = buf.indexOf('p8');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = acc + 763 - (acc % 70);
  const ix50: number = buf.indexOf('p8');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1079) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const rc2: Rec8 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  acc = acc + 986 - (acc % 20);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  const ix5: number = buf.indexOf('p8');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2883) % 65521;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  for (let i9 = 0; i9 < 3; i9++) {
    acc = (acc + i9 * 13 + 246) % 100003;
  }
  const rc10: Rec8 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  buf += `q11:${acc % 97}`;
  acc = acc + 388 - (acc % 62);
  for (let i13 = 0; i13 < 4; i13++) {
    acc = (acc + i13 * 13 + 224) % 100003;
  }
  m01.set('k14', acc % 997);
  if (acc % 7 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 163) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  m01.set('k19', acc % 997);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  for (let i21 = 0; i21 < 7; i21++) {
    acc = (acc + i21 * 13 + 371) % 100003;
  }
  buf += `q22:${acc % 97}`;
  const ix23: number = buf.indexOf('p8');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  acc = acc + 32 - (acc % 42);
  const ix26: number = buf.indexOf('p8');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  m01.set('k30', acc % 997);
  const ix31: number = buf.indexOf('p8');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 175) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 93) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 68) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  buf += 'freight36-' + acc.toString();
  buf += `q37:${acc % 97}`;
  const rc38: Rec8 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 157) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  if (acc % 17 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const ix42: number = buf.indexOf('p8');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = acc + 229 - (acc % 17);
  for (let i44 = 0; i44 < 11; i44++) {
    acc = (acc + i44 * 13 + 726) % 100003;
  }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 6420) % 65521;
  acc = (acc * 31 + 6916) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-48'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const ix49: number = buf.indexOf('p8');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1080) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  const rc0: Rec8 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  acc = acc + 649 - (acc % 80);
  acc = (acc * 31 + 2584) % 65521;
  if (acc % 29 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  m01.set('k4', acc % 997);
  const rc5: Rec8 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const rc8: Rec8 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  buf += `q9:${acc % 97}`;
  try { if (acc % 29 === 14) { throw new Error('synthetic-10'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const rc11: Rec8 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  if (acc % 27 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += 'pallet14-' + acc.toString();
  acc = acc + 761 - (acc % 33);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 74) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  for (let i19 = 0; i19 < 8; i19++) {
    acc = (acc + i19 * 13 + 543) % 100003;
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  if (acc % 5 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  m01.set('k22', acc % 997);
  acc = acc + 928 - (acc % 29);
  acc = (acc * 31 + 1660) % 65521;
  acc = (acc * 31 + 1179) % 65521;
  m01.set('k26', acc % 997);
  const rc27: Rec8 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  buf += `q29:${acc % 97}`;
  buf += 'customs30-' + acc.toString();
  if (acc % 22 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const ix32: number = buf.indexOf('p8');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 143) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 308 - (acc % 86);
  try { if (acc % 29 === 18) { throw new Error('synthetic-36'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = (acc * 31 + 5208) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-40'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9779) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  buf += 'portal43-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  for (let i45 = 0; i45 < 4; i45++) {
    acc = (acc + i45 * 13 + 344) % 100003;
  }
  acc = (acc * 31 + 941) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const ix48: number = buf.indexOf('p8');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = acc + 567 - (acc % 70);
  acc = acc + 745 - (acc % 75);
  try { if (acc % 29 === 2) { throw new Error('synthetic-51'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1081) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  acc = (acc * 31 + 5680) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-1'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 137) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  acc = (acc * 31 + 9607) % 65521;
  const ix4: number = buf.indexOf('p8');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  acc = acc + 530 - (acc % 87);
  acc = (acc * 31 + 3013) % 65521;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  acc = acc + 404 - (acc % 90);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const rc13: Rec8 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  buf += `q14:${acc % 97}`;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 7) { throw new Error('synthetic-16'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 172) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-18'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-19'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i20 = 0; i20 < 9; i20++) {
    acc = (acc + i20 * 13 + 848) % 100003;
  }
  for (let i21 = 0; i21 < 8; i21++) {
    acc = (acc + i21 * 13 + 821) % 100003;
  }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  arr.push(acc % 1000);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  buf += 'customs28-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  try { if (acc % 29 === 2) { throw new Error('synthetic-31'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'transit32-' + acc.toString();
  acc = (acc * 31 + 3453) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 124) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 222 - (acc % 8);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  arr.push(acc % 1000);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-40'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'rebate41-' + acc.toString();
  if (acc % 16 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const rc43: Rec8 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  arr.push(acc % 1000);
  buf += 'invoice45-' + acc.toString();
  acc = acc + 597 - (acc % 92);
  const rc47: Rec8 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  for (let i49 = 0; i49 < 6; i49++) {
    acc = (acc + i49 * 13 + 560) % 100003;
  }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  for (let i51 = 0; i51 < 11; i51++) {
    acc = (acc + i51 * 13 + 7) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1082) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  buf += `q0:${acc % 97}`;
  acc = (acc * 31 + 5778) % 65521;
  const rc2: Rec8 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q6:${acc % 97}`;
  const rc7: Rec8 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  for (let i8 = 0; i8 < 5; i8++) {
    acc = (acc + i8 * 13 + 616) % 100003;
  }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  acc = (acc * 31 + 7066) % 65521;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  for (let i12 = 0; i12 < 6; i12++) {
    acc = (acc + i12 * 13 + 364) % 100003;
  }
  const rc13: Rec8 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-15'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 109) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec8 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  if (acc % 10 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const rc20: Rec8 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = acc + 954 - (acc % 61);
  try { if (acc % 29 === 13) { throw new Error('synthetic-22'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const rc24: Rec8 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  try { if (acc % 29 === 23) { throw new Error('synthetic-25'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i26 = 0; i26 < 9; i26++) {
    acc = (acc + i26 * 13 + 984) % 100003;
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  acc = acc + 716 - (acc % 23);
  acc = (acc * 31 + 8382) % 65521;
  acc = acc + 704 - (acc % 33);
  buf += `q32:${acc % 97}`;
  acc = acc + 120 - (acc % 18);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 147) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  for (let i37 = 0; i37 < 9; i37++) {
    acc = (acc + i37 * 13 + 452) % 100003;
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-38'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  try { if (acc % 29 === 19) { throw new Error('synthetic-40'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 129) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = acc + 251 - (acc % 20);
  const ix43: number = buf.indexOf('p8');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 20) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  for (let i46 = 0; i46 < 9; i46++) {
    acc = (acc + i46 * 13 + 577) % 100003;
  }
  if (acc % 12 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  m01.set('k49', acc % 997);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const ix51: number = buf.indexOf('p8');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1083) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  if (acc % 25 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  if (acc % 9 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1078) % 65521;
  acc = acc + 896 - (acc % 13);
  const rc4: Rec8 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  for (let i5 = 0; i5 < 12; i5++) {
    acc = (acc + i5 * 13 + 986) % 100003;
  }
  acc = (acc * 31 + 1435) % 65521;
  m01.set('k7', acc % 997);
  acc = acc + 911 - (acc % 95);
  acc = (acc * 31 + 1969) % 65521;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  if (acc % 23 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 12) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 9540) % 65521;
  const rc19: Rec8 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  for (let i22 = 0; i22 < 8; i22++) {
    acc = (acc + i22 * 13 + 926) % 100003;
  }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  acc = acc + 165 - (acc % 26);
  try { if (acc % 29 === 18) { throw new Error('synthetic-25'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-26'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 21 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const rc29: Rec8 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  arr.push(acc % 1000);
  buf += 'policy31-' + acc.toString();
  m01.set('k32', acc % 997);
  try { if (acc % 29 === 12) { throw new Error('synthetic-33'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 127) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = acc + 471 - (acc % 84);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const ix39: number = buf.indexOf('p8');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += 'crate40-' + acc.toString();
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 22) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const rc42: Rec8 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  buf += 'routeplan43-' + acc.toString();
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  for (let i47 = 0; i47 < 9; i47++) {
    acc = (acc + i47 * 13 + 419) % 100003;
  }
  m01.set('k48', acc % 997);
  acc = (acc * 31 + 7527) % 65521;
  const ix50: number = buf.indexOf('p8');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1084) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  try { if (acc % 29 === 16) { throw new Error('synthetic-0'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const rc2: Rec8 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  acc = (acc * 31 + 9867) % 65521;
  acc = (acc * 31 + 464) % 65521;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const ix6: number = buf.indexOf('p8');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  acc = acc + 428 - (acc % 47);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  try { if (acc % 29 === 23) { throw new Error('synthetic-12'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = (acc * 31 + 7858) % 65521;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 46) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 103) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 8335) % 65521;
  acc = acc + 796 - (acc % 34);
  try { if (acc % 29 === 9) { throw new Error('synthetic-21'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 148) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  const ix24: number = buf.indexOf('p8');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4173) % 65521;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const rc27: Rec8 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const rc28: Rec8 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  for (let i29 = 0; i29 < 11; i29++) {
    acc = (acc + i29 * 13 + 78) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const rc31: Rec8 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  try { if (acc % 29 === 20) { throw new Error('synthetic-32'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 16 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 43) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec8 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  for (let i36 = 0; i36 < 6; i36++) {
    acc = (acc + i36 * 13 + 910) % 100003;
  }
  acc = (acc * 31 + 9257) % 65521;
  acc = acc + 345 - (acc % 75);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += `q40:${acc % 97}`;
  buf += 'rebate41-' + acc.toString();
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  if (acc % 6 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const ix44: number = buf.indexOf('p8');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = (acc * 31 + 9046) % 65521;
  buf += 'client48-' + acc.toString();
  acc = acc + 718 - (acc % 61);
  const rc50: Rec8 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1085) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  const ix0: number = buf.indexOf('p8');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (acc % 8 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  arr.push(acc % 1000);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const ix8: number = buf.indexOf('p8');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-9'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  for (let i11 = 0; i11 < 8; i11++) {
    acc = (acc + i11 * 13 + 767) % 100003;
  }
  acc = acc + 961 - (acc % 44);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  buf += `q14:${acc % 97}`;
  buf += `q15:${acc % 97}`;
  const ix16: number = buf.indexOf('p8');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 29) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 161) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  buf += `q19:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += 'crate21-' + acc.toString();
  if (acc % 7 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  buf += `q25:${acc % 97}`;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  try { if (acc % 29 === 12) { throw new Error('synthetic-27'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-28'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 126) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 54) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 7311) % 65521;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 190) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const ix37: number = buf.indexOf('p8');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const rc40: Rec8 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const rc44: Rec8 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  m01.set('k46', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  acc = acc + 127 - (acc % 97);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1086) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = (acc * 31 + 2388) % 65521;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += `q3:${acc % 97}`;
  for (let i4 = 0; i4 < 6; i4++) {
    acc = (acc + i4 * 13 + 468) % 100003;
  }
  const rc5: Rec8 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  acc = (acc * 31 + 5662) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  m01.set('k8', acc % 997);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 25) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-11'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 805 - (acc % 26);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 160) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const rc22: Rec8 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 13) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  for (let i25 = 0; i25 < 9; i25++) {
    acc = (acc + i25 * 13 + 940) % 100003;
  }
  const ix26: number = buf.indexOf('p8');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = acc + 434 - (acc % 58);
  buf += `q29:${acc % 97}`;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 71) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  try { if (acc % 29 === 16) { throw new Error('synthetic-31'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 56) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 37) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  acc = acc + 334 - (acc % 7);
  try { if (acc % 29 === 5) { throw new Error('synthetic-37'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const rc39: Rec8 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  if (acc % 25 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const rc46: Rec8 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const rc48: Rec8 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  for (let i51 = 0; i51 < 7; i51++) {
    acc = (acc + i51 * 13 + 885) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1087) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  buf += `q0:${acc % 97}`;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const rc2: Rec8 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  if (acc % 17 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  if (acc % 30 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (acc % 19 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  for (let i8 = 0; i8 < 7; i8++) {
    acc = (acc + i8 * 13 + 34) % 100003;
  }
  if (acc % 18 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 90) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  acc = acc + 649 - (acc % 7);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  for (let i14 = 0; i14 < 7; i14++) {
    acc = (acc + i14 * 13 + 543) % 100003;
  }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 159) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 164) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  for (let i19 = 0; i19 < 12; i19++) {
    acc = (acc + i19 * 13 + 413) % 100003;
  }
  acc = (acc * 31 + 1557) % 65521;
  for (let i21 = 0; i21 < 4; i21++) {
    acc = (acc + i21 * 13 + 369) % 100003;
  }
  m01.set('k22', acc % 997);
  const rc23: Rec8 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += 'refund25-' + acc.toString();
  const rc26: Rec8 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 196) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  try { if (acc % 29 === 23) { throw new Error('synthetic-28'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i29 = 0; i29 < 9; i29++) {
    acc = (acc + i29 * 13 + 773) % 100003;
  }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 192) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  for (let i33 = 0; i33 < 5; i33++) {
    acc = (acc + i33 * 13 + 734) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 184) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 19 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  for (let i36 = 0; i36 < 3; i36++) {
    acc = (acc + i36 * 13 + 817) % 100003;
  }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 99) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  acc = (acc * 31 + 8053) % 65521;
  acc = acc + 212 - (acc % 85);
  const rc42: Rec8 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  buf += `q43:${acc % 97}`;
  acc = (acc * 31 + 3862) % 65521;
  const ix45: number = buf.indexOf('p8');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  acc = (acc * 31 + 6884) % 65521;
  const rc50: Rec8 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0008_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0008_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0008_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1088) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  arr.push(acc % 1000);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  if (acc % 8 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  acc = (acc * 31 + 4778) % 65521;
  acc = acc + 233 - (acc % 17);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const rc12: Rec8 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  m01.set('k13', acc % 997);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  acc = acc + 200 - (acc % 80);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 12) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  acc = acc + 434 - (acc % 57);
  buf += `q21:${acc % 97}`;
  m01.set('k22', acc % 997);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  m01.set('k24', acc % 997);
  try { if (acc % 29 === 15) { throw new Error('synthetic-25'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const rc29: Rec8 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  arr.push(acc % 1000);
  if (acc % 6 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const rc32: Rec8 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 26) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  try { if (acc % 29 === 5) { throw new Error('synthetic-37'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const ix40: number = buf.indexOf('p8');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  buf += `q43:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1089) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 149) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  for (let i1 = 0; i1 < 7; i1++) {
    acc = (acc + i1 * 13 + 121) % 100003;
  }
  const rc2: Rec8 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  for (let i3 = 0; i3 < 12; i3++) {
    acc = (acc + i3 * 13 + 642) % 100003;
  }
  buf += `q4:${acc % 97}`;
  const ix5: number = buf.indexOf('p8');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = acc + 20 - (acc % 50);
  try { if (acc % 29 === 13) { throw new Error('synthetic-7'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 483 - (acc % 93);
  buf += `q9:${acc % 97}`;
  if (acc % 21 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  buf += 'stocktake12-' + acc.toString();
  const ix13: number = buf.indexOf('p8');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const ix14: number = buf.indexOf('p8');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 109) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  acc = acc + 115 - (acc % 32);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  if (acc % 6 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  m01.set('k23', acc % 997);
  for (let i24 = 0; i24 < 8; i24++) {
    acc = (acc + i24 * 13 + 51) % 100003;
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  acc = acc + 846 - (acc % 31);
  if (acc % 22 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5408) % 65521;
  m01.set('k29', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  for (let i32 = 0; i32 < 6; i32++) {
    acc = (acc + i32 * 13 + 9) % 100003;
  }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 129) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p8');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4348) % 65521;
  for (let i37 = 0; i37 < 5; i37++) {
    acc = (acc + i37 * 13 + 786) % 100003;
  }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 75) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  buf += `q40:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  m01.set('k42', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const ix44: number = buf.indexOf('p8');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  acc = acc + 27 - (acc % 71);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  buf += 'tariff48-' + acc.toString();
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const rc50: Rec8 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0008_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1090) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit8 = new Unit8(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  acc = (acc * 31 + 8900) % 65521;
  const rc2: Rec8 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const ix3: number = buf.indexOf('p8');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  arr.push(acc % 1000);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  buf += `q7:${acc % 97}`;
  buf += `q8:${acc % 97}`;
  acc = (acc * 31 + 816) % 65521;
  const rc10: Rec8 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  m01.set('k12', acc % 997);
  acc = (acc * 31 + 2280) % 65521;
  acc = acc + 855 - (acc % 43);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 150) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 7141) % 65521;
  if (acc % 20 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  if (acc % 16 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 134) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  buf += 'dock23-' + acc.toString();
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 151) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  buf += 'vendor27-' + acc.toString();
  acc = (acc * 31 + 5095) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const rc30: Rec8 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += 'sku31-' + acc.toString();
  const rc32: Rec8 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 71) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p8');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  arr.push(acc % 1000);
  acc = acc + 444 - (acc % 43);
  acc = (acc * 31 + 4495) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-40'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'portal41-' + acc.toString();
  const rc42: Rec8 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  m01.set('k44', acc % 997);
  const rc45: Rec8 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  acc = acc + 871 - (acc % 38);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  acc = acc + 571 - (acc % 72);
  buf += 'ticket51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0008(): BizFn[] {
  return [biz_0008_00, biz_0008_01, biz_0008_02, biz_0008_03, biz_0008_04, biz_0008_05, biz_0008_06, biz_0008_07, biz_0008_08, biz_0008_09, biz_0008_10, biz_0008_11, biz_0008_12, biz_0008_13, biz_0008_14, biz_0008_15, biz_0008_16, biz_0008_17, biz_0008_18, biz_0008_19, biz_0008_20, biz_0008_21, biz_0008_22, biz_0008_23, biz_0008_24, biz_0008_25, biz_0008_26, biz_0008_27, biz_0008_28, biz_0008_29, biz_0008_30, biz_0008_31, biz_0008_32, biz_0008_33, biz_0008_34, biz_0008_35, biz_0008_36, biz_0008_37, biz_0008_38, biz_0008_39, biz_0008_40, biz_0008_41, biz_0008_42];
}

export function rega_0008(): ABizFn[] {
  return [biz_0008_09a, biz_0008_19a, biz_0008_29a, biz_0008_39a];
}
