// Biz0087.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec87 { id: number; tag: string; score: number; }

class Unit87 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0087_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1424) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  arr.push(acc % 1000);
  for (let i3 = 0; i3 < 12; i3++) {
    acc = (acc + i3 * 13 + 782) % 100003;
  }
  for (let i4 = 0; i4 < 10; i4++) {
    acc = (acc + i4 * 13 + 367) % 100003;
  }
  for (let i5 = 0; i5 < 7; i5++) {
    acc = (acc + i5 * 13 + 634) % 100003;
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 50) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  buf += 'portal7-' + acc.toString();
  const ix8: number = buf.indexOf('p87');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  buf += `q12:${acc % 97}`;
  try { if (acc % 29 === 11) { throw new Error('synthetic-13'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i14 = 0; i14 < 9; i14++) {
    acc = (acc + i14 * 13 + 696) % 100003;
  }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 111) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 182) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  for (let i19 = 0; i19 < 10; i19++) {
    acc = (acc + i19 * 13 + 93) % 100003;
  }
  buf += 'rebate20-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-22'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += `q24:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const rc27: Rec87 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = (acc * 31 + 2689) % 65521;
  if (acc % 5 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (acc % 25 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 129) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const rc36: Rec87 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  buf += `q37:${acc % 97}`;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  buf += `q39:${acc % 97}`;
  buf += `q40:${acc % 97}`;
  const rc41: Rec87 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  try { if (acc % 29 === 15) { throw new Error('synthetic-42'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 12 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  m01.set('k44', acc % 997);
  acc = (acc * 31 + 1306) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-46'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 397 - (acc % 75);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  m01.set('k49', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  for (let i51 = 0; i51 < 5; i51++) {
    acc = (acc + i51 * 13 + 238) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1425) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 9841) % 65521;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  acc = acc + 599 - (acc % 19);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const ix6: number = buf.indexOf('p87');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8085) % 65521;
  const rc8: Rec87 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  arr.push(acc % 1000);
  acc = (acc * 31 + 851) % 65521;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const rc13: Rec87 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  if (acc % 29 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = acc + 471 - (acc % 93);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 38) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 5; i18++) {
    acc = (acc + i18 * 13 + 621) % 100003;
  }
  arr.push(acc % 1000);
  buf += `q20:${acc % 97}`;
  try { if (acc % 29 === 17) { throw new Error('synthetic-21'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3915) % 65521;
  const rc23: Rec87 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (acc % 11 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  m01.set('k30', acc % 997);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = (acc * 31 + 8918) % 65521;
  acc = (acc * 31 + 1618) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 158) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 20) { throw new Error('synthetic-35'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  const rc36: Rec87 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  buf += 'stocktake37-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const ix39: number = buf.indexOf('p87');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const ix40: number = buf.indexOf('p87');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const ix41: number = buf.indexOf('p87');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  acc = acc + 59 - (acc % 91);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += 'balance44-' + acc.toString();
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  acc = (acc * 31 + 8779) % 65521;
  acc = acc + 154 - (acc % 61);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1426) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 109) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const ix4: number = buf.indexOf('p87');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-5'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-8'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k9', acc % 997);
  if (acc % 29 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  buf += 'batch11-' + acc.toString();
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  m01.set('k13', acc % 997);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  if (acc % 19 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 166) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec87 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += 'ledger20-' + acc.toString();
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  const ix23: number = buf.indexOf('p87');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  buf += `q24:${acc % 97}`;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const rc27: Rec87 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += `q30:${acc % 97}`;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  acc = acc + 870 - (acc % 88);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 140) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p87');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-36'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-37'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q38:${acc % 97}`;
  try { if (acc % 29 === 6) { throw new Error('synthetic-39'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-40'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q41:${acc % 97}`;
  buf += `q42:${acc % 97}`;
  acc = (acc * 31 + 9403) % 65521;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += 'batch46-' + acc.toString();
  buf += 'pallet47-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1427) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  buf += 'freight1-' + acc.toString();
  acc = acc + 18 - (acc % 30);
  buf += `q3:${acc % 97}`;
  buf += 'sku4-' + acc.toString();
  for (let i5 = 0; i5 < 12; i5++) {
    acc = (acc + i5 * 13 + 472) % 100003;
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  buf += 'coupon9-' + acc.toString();
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const rc12: Rec87 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += `q13:${acc % 97}`;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const ix15: number = buf.indexOf('p87');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 190) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 73) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = (acc * 31 + 7424) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-22'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  m01.set('k25', acc % 997);
  const ix26: number = buf.indexOf('p87');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  buf += 'carrier28-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = (acc * 31 + 9859) % 65521;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 146) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const rc33: Rec87 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 99) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = acc + 372 - (acc % 12);
  const ix37: number = buf.indexOf('p87');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  buf += 'dispatch38-' + acc.toString();
  buf += 'refund39-' + acc.toString();
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += `q42:${acc % 97}`;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 88) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = (acc * 31 + 2705) % 65521;
  acc = (acc * 31 + 6612) % 65521;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  for (let i47 = 0; i47 < 12; i47++) {
    acc = (acc + i47 * 13 + 529) % 100003;
  }
  if (acc % 6 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  buf += `q49:${acc % 97}`;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = (acc * 31 + 8637) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1428) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  buf += `q0:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 111) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  m01.set('k3', acc % 997);
  arr.push(acc % 1000);
  const ix5: number = buf.indexOf('p87');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  m01.set('k6', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  buf += `q10:${acc % 97}`;
  arr.push(acc % 1000);
  if (acc % 19 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const ix13: number = buf.indexOf('p87');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const ix15: number = buf.indexOf('p87');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 12) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  arr.push(acc % 1000);
  buf += `q20:${acc % 97}`;
  for (let i21 = 0; i21 < 8; i21++) {
    acc = (acc + i21 * 13 + 161) % 100003;
  }
  buf += `q22:${acc % 97}`;
  const rc23: Rec87 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  acc = acc + 310 - (acc % 64);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  buf += 'audit26-' + acc.toString();
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  buf += 'depot28-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 64) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = acc + 206 - (acc % 45);
  buf += 'pickup32-' + acc.toString();
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 105) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  m01.set('k41', acc % 997);
  buf += `q42:${acc % 97}`;
  const rc43: Rec87 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const rc44: Rec87 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 95) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k48', acc % 997);
  const rc49: Rec87 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  try { if (acc % 29 === 19) { throw new Error('synthetic-51'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1429) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  if (acc % 29 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += 'sku1-' + acc.toString();
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  acc = acc + 285 - (acc % 27);
  m01.set('k4', acc % 997);
  try { if (acc % 29 === 18) { throw new Error('synthetic-5'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const ix6: number = buf.indexOf('p87');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  buf += `q8:${acc % 97}`;
  for (let i9 = 0; i9 < 10; i9++) {
    acc = (acc + i9 * 13 + 468) % 100003;
  }
  buf += `q10:${acc % 97}`;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  try { if (acc % 29 === 15) { throw new Error('synthetic-12'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i13 = 0; i13 < 4; i13++) {
    acc = (acc + i13 * 13 + 121) % 100003;
  }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 71) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 135) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 25) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 132) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  for (let i21 = 0; i21 < 5; i21++) {
    acc = (acc + i21 * 13 + 597) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 197) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  if (acc % 15 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3564) % 65521;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const rc30: Rec87 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  acc = (acc * 31 + 4666) % 65521;
  arr.push(acc % 1000);
  acc = acc + 688 - (acc % 68);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 11) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 9; i35++) {
    acc = (acc + i35 * 13 + 126) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 138) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  acc = acc + 129 - (acc % 45);
  for (let i40 = 0; i40 < 7; i40++) {
    acc = (acc + i40 * 13 + 721) % 100003;
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 34) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 110) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 37) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const rc45: Rec87 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const ix46: number = buf.indexOf('p87');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const rc47: Rec87 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  try { if (acc % 29 === 8) { throw new Error('synthetic-49'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1430) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  try { if (acc % 29 === 16) { throw new Error('synthetic-1'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i2 = 0; i2 < 11; i2++) {
    acc = (acc + i2 * 13 + 245) % 100003;
  }
  buf += `q3:${acc % 97}`;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 169) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  for (let i7 = 0; i7 < 4; i7++) {
    acc = (acc + i7 * 13 + 987) % 100003;
  }
  buf += 'transit8-' + acc.toString();
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += 'audit11-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  buf += `q13:${acc % 97}`;
  acc = (acc * 31 + 676) % 65521;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 158) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  for (let i19 = 0; i19 < 12; i19++) {
    acc = (acc + i19 * 13 + 601) % 100003;
  }
  acc = acc + 267 - (acc % 53);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 19) { throw new Error('synthetic-22'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  for (let i24 = 0; i24 < 12; i24++) {
    acc = (acc + i24 * 13 + 124) % 100003;
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  acc = (acc * 31 + 1348) % 65521;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const ix31: number = buf.indexOf('p87');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 130) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = acc + 367 - (acc % 74);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 108) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  const rc36: Rec87 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  acc = (acc * 31 + 5849) % 65521;
  buf += `q38:${acc % 97}`;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-41'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 60) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  buf += `q45:${acc % 97}`;
  if (acc % 17 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  acc = acc + 637 - (acc % 38);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1431) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  const ix0: number = buf.indexOf('p87');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  buf += 'dock1-' + acc.toString();
  buf += 'freight2-' + acc.toString();
  try { if (acc % 29 === 6) { throw new Error('synthetic-3'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const ix5: number = buf.indexOf('p87');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7022) % 65521;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const ix11: number = buf.indexOf('p87');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 98) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  const rc14: Rec87 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 75) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'sku18-' + acc.toString();
  arr.push(acc % 1000);
  if (acc % 12 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  buf += `q23:${acc % 97}`;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 36) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  buf += `q25:${acc % 97}`;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = acc + 203 - (acc % 32);
  const rc28: Rec87 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 133) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  buf += 'dispatch31-' + acc.toString();
  m01.set('k32', acc % 997);
  const rc33: Rec87 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 167) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  buf += 'region36-' + acc.toString();
  for (let i37 = 0; i37 < 8; i37++) {
    acc = (acc + i37 * 13 + 235) % 100003;
  }
  const ix38: number = buf.indexOf('p87');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  buf += `q40:${acc % 97}`;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  m01.set('k43', acc % 997);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  buf += 'dispatch45-' + acc.toString();
  acc = (acc * 31 + 1772) % 65521;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  arr.push(acc % 1000);
  m01.set('k49', acc % 997);
  buf += `q50:${acc % 97}`;
  acc = (acc * 31 + 8876) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1432) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += `q2:${acc % 97}`;
  for (let i3 = 0; i3 < 8; i3++) {
    acc = (acc + i3 * 13 + 235) % 100003;
  }
  acc = (acc * 31 + 4987) % 65521;
  acc = (acc * 31 + 8200) % 65521;
  buf += `q6:${acc % 97}`;
  try { if (acc % 29 === 2) { throw new Error('synthetic-7'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8807) % 65521;
  buf += 'invoice9-' + acc.toString();
  acc = acc + 798 - (acc % 65);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = (acc * 31 + 9676) % 65521;
  for (let i14 = 0; i14 < 9; i14++) {
    acc = (acc + i14 * 13 + 198) % 100003;
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-15'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  for (let i22 = 0; i22 < 3; i22++) {
    acc = (acc + i22 * 13 + 986) % 100003;
  }
  const ix23: number = buf.indexOf('p87');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const rc29: Rec87 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  m01.set('k30', acc % 997);
  buf += `q31:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (acc % 31 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 77) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p87');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  m01.set('k37', acc % 997);
  const ix38: number = buf.indexOf('p87');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  arr.push(acc % 1000);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  if (acc % 12 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = acc + 805 - (acc % 42);
  for (let i46 = 0; i46 < 7; i46++) {
    acc = (acc + i46 * 13 + 530) % 100003;
  }
  const ix47: number = buf.indexOf('p87');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const rc50: Rec87 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1433) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  buf += 'coupon0-' + acc.toString();
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = (acc * 31 + 5767) % 65521;
  acc = acc + 357 - (acc % 94);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  m01.set('k6', acc % 997);
  for (let i7 = 0; i7 < 12; i7++) {
    acc = (acc + i7 * 13 + 520) % 100003;
  }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 35) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'region10-' + acc.toString();
  buf += `q11:${acc % 97}`;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  buf += `q15:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 153) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const ix22: number = buf.indexOf('p87');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-23'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i24 = 0; i24 < 7; i24++) {
    acc = (acc + i24 * 13 + 720) % 100003;
  }
  buf += `q25:${acc % 97}`;
  acc = (acc * 31 + 8995) % 65521;
  acc = (acc * 31 + 1035) % 65521;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = (acc * 31 + 4488) % 65521;
  acc = acc + 31 - (acc % 7);
  arr.push(acc % 1000);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec87 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += 'policy37-' + acc.toString();
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = (acc * 31 + 5398) % 65521;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 135) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const rc44: Rec87 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  for (let i45 = 0; i45 < 11; i45++) {
    acc = (acc + i45 * 13 + 568) % 100003;
  }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const rc47: Rec87 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  if (acc % 24 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 122) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  m01.set('k50', acc % 997);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 72) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0087_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0087_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0087_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1434) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-1'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  buf += `q5:${acc % 97}`;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 11) { throw new Error('synthetic-8'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 16 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  if (acc % 27 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const rc12: Rec87 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += `q13:${acc % 97}`;
  acc = (acc * 31 + 4083) % 65521;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const rc16: Rec87 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 33) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  if (acc % 15 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  acc = acc + 213 - (acc % 66);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  if (acc % 12 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  if (acc % 17 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  if (acc % 6 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1214) % 65521;
  buf += `q28:${acc % 97}`;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 128) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  buf += `q30:${acc % 97}`;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-32'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 148) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-35'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const ix36: number = buf.indexOf('p87');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 28) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  m01.set('k39', acc % 997);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  for (let i41 = 0; i41 < 12; i41++) {
    acc = (acc + i41 * 13 + 463) % 100003;
  }
  acc = acc + 714 - (acc % 88);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  if (acc % 12 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  for (let i47 = 0; i47 < 12; i47++) {
    acc = (acc + i47 * 13 + 402) % 100003;
  }
  const rc48: Rec87 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const ix49: number = buf.indexOf('p87');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  acc = acc + 650 - (acc % 15);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1435) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  buf += 'pickup1-' + acc.toString();
  acc = (acc * 31 + 1505) % 65521;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  buf += 'audit5-' + acc.toString();
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 121) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  for (let i8 = 0; i8 < 12; i8++) {
    acc = (acc + i8 * 13 + 461) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  for (let i10 = 0; i10 < 5; i10++) {
    acc = (acc + i10 * 13 + 534) % 100003;
  }
  buf += `q11:${acc % 97}`;
  acc = acc + 12 - (acc % 96);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const ix16: number = buf.indexOf('p87');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 113) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  try { if (acc % 29 === 5) { throw new Error('synthetic-20'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const rc22: Rec87 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  buf += 'policy23-' + acc.toString();
  m01.set('k24', acc % 997);
  const rc25: Rec87 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  m01.set('k29', acc % 997);
  const rc30: Rec87 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  for (let i32 = 0; i32 < 11; i32++) {
    acc = (acc + i32 * 13 + 938) % 100003;
  }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 100) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q36:${acc % 97}`;
  arr.push(acc % 1000);
  try { if (acc % 29 === 9) { throw new Error('synthetic-38'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const rc39: Rec87 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1111) % 65521;
  buf += `q42:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const ix44: number = buf.indexOf('p87');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  acc = acc + 784 - (acc % 39);
  if (acc % 8 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  m01.set('k47', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  buf += 'client49-' + acc.toString();
  const rc50: Rec87 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1436) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 174) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  try { if (acc % 29 === 18) { throw new Error('synthetic-3'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = acc + 636 - (acc % 75);
  try { if (acc % 29 === 5) { throw new Error('synthetic-7'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const ix8: number = buf.indexOf('p87');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  if (acc % 27 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  m01.set('k10', acc % 997);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 113) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 11) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  m01.set('k13', acc % 997);
  m01.set('k14', acc % 997);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 149) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const rc16: Rec87 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 70) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  for (let i19 = 0; i19 < 4; i19++) {
    acc = (acc + i19 * 13 + 278) % 100003;
  }
  buf += 'depot20-' + acc.toString();
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  buf += `q25:${acc % 97}`;
  acc = (acc * 31 + 8532) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-27'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 73) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  acc = (acc * 31 + 154) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 89) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 5; i35++) {
    acc = (acc + i35 * 13 + 599) % 100003;
  }
  acc = acc + 607 - (acc % 42);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const ix38: number = buf.indexOf('p87');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  m01.set('k39', acc % 997);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  for (let i45 = 0; i45 < 6; i45++) {
    acc = (acc + i45 * 13 + 814) % 100003;
  }
  buf += 'journey46-' + acc.toString();
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  buf += `q48:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1437) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  acc = acc + 950 - (acc % 34);
  acc = acc + 364 - (acc % 83);
  acc = (acc * 31 + 8295) % 65521;
  acc = (acc * 31 + 9233) % 65521;
  buf += 'pallet4-' + acc.toString();
  const ix5: number = buf.indexOf('p87');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  m01.set('k7', acc % 997);
  acc = (acc * 31 + 8980) % 65521;
  const ix9: number = buf.indexOf('p87');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 71) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  buf += 'sku12-' + acc.toString();
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  if (acc % 23 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  for (let i16 = 0; i16 < 7; i16++) {
    acc = (acc + i16 * 13 + 166) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 187) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'warehouse18-' + acc.toString();
  buf += 'batch19-' + acc.toString();
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  buf += `q21:${acc % 97}`;
  buf += `q22:${acc % 97}`;
  const ix23: number = buf.indexOf('p87');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  if (acc % 5 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  if (acc % 14 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  acc = acc + 507 - (acc % 56);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += 'audit30-' + acc.toString();
  acc = (acc * 31 + 9661) % 65521;
  const rc32: Rec87 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 89) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-35'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const rc38: Rec87 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const rc39: Rec87 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const ix40: number = buf.indexOf('p87');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const ix41: number = buf.indexOf('p87');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const rc42: Rec87 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  try { if (acc % 29 === 15) { throw new Error('synthetic-43'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q44:${acc % 97}`;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  arr.push(acc % 1000);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1438) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  m01.set('k0', acc % 997);
  try { if (acc % 29 === 17) { throw new Error('synthetic-1'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 9) { throw new Error('synthetic-4'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'freight5-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  for (let i7 = 0; i7 < 5; i7++) {
    acc = (acc + i7 * 13 + 730) % 100003;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-8'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q9:${acc % 97}`;
  arr.push(acc % 1000);
  if (acc % 26 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  acc = acc + 948 - (acc % 82);
  const ix13: number = buf.indexOf('p87');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  arr.push(acc % 1000);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 74) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'client18-' + acc.toString();
  m01.set('k19', acc % 997);
  arr.push(acc % 1000);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 159) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  buf += `q23:${acc % 97}`;
  buf += `q24:${acc % 97}`;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  acc = acc + 39 - (acc % 85);
  const rc27: Rec87 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  if (acc % 16 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  m01.set('k29', acc % 997);
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 136) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  buf += 'pallet31-' + acc.toString();
  const rc32: Rec87 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const rc33: Rec87 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 189) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = acc + 987 - (acc % 71);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const ix38: number = buf.indexOf('p87');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const rc39: Rec87 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  if (acc % 30 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const ix43: number = buf.indexOf('p87');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const ix45: number = buf.indexOf('p87');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += 'order46-' + acc.toString();
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1439) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = acc + 968 - (acc % 50);
  buf += `q2:${acc % 97}`;
  m01.set('k3', acc % 997);
  buf += `q4:${acc % 97}`;
  acc = acc + 78 - (acc % 28);
  acc = (acc * 31 + 8400) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-7'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 15 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = acc + 521 - (acc % 95);
  buf += `q12:${acc % 97}`;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  m01.set('k14', acc % 997);
  const rc15: Rec87 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 60) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  for (let i20 = 0; i20 < 9; i20++) {
    acc = (acc + i20 * 13 + 733) % 100003;
  }
  for (let i21 = 0; i21 < 8; i21++) {
    acc = (acc + i21 * 13 + 196) % 100003;
  }
  const ix22: number = buf.indexOf('p87');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  m01.set('k23', acc % 997);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 70) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += 'tariff27-' + acc.toString();
  buf += `q28:${acc % 97}`;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 122) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'quota32-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 28) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 2788) % 65521;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 116) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  if (acc % 9 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const ix38: number = buf.indexOf('p87');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  m01.set('k39', acc % 997);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  for (let i41 = 0; i41 < 6; i41++) {
    acc = (acc + i41 * 13 + 518) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const rc45: Rec87 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  for (let i46 = 0; i46 < 10; i46++) {
    acc = (acc + i46 * 13 + 242) % 100003;
  }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  arr.push(acc % 1000);
  const ix49: number = buf.indexOf('p87');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  acc = (acc * 31 + 7087) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1440) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = acc + 323 - (acc % 35);
  if (acc % 24 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const rc5: Rec87 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += `q6:${acc % 97}`;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 109) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 107) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  buf += 'bay9-' + acc.toString();
  if (acc % 21 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const ix11: number = buf.indexOf('p87');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  m01.set('k12', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 175) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'waybill18-' + acc.toString();
  try { if (acc % 29 === 13) { throw new Error('synthetic-19'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  try { if (acc % 29 === 17) { throw new Error('synthetic-21'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  const rc22: Rec87 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const ix23: number = buf.indexOf('p87');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (acc % 7 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6772) % 65521;
  buf += 'dock27-' + acc.toString();
  const rc28: Rec87 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = (acc * 31 + 2008) % 65521;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  m01.set('k32', acc % 997);
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 108) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 4373) % 65521;
  if (acc % 11 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  if (acc % 22 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 72) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  acc = (acc * 31 + 9964) % 65521;
  for (let i40 = 0; i40 < 7; i40++) {
    acc = (acc + i40 * 13 + 173) % 100003;
  }
  const rc41: Rec87 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  acc = acc + 805 - (acc % 36);
  for (let i43 = 0; i43 < 4; i43++) {
    acc = (acc + i43 * 13 + 584) % 100003;
  }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const ix45: number = buf.indexOf('p87');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  if (acc % 25 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const rc48: Rec87 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  buf += `q50:${acc % 97}`;
  for (let i51 = 0; i51 < 3; i51++) {
    acc = (acc + i51 * 13 + 592) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1441) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  acc = acc + 774 - (acc % 60);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  arr.push(acc % 1000);
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  buf += `q5:${acc % 97}`;
  if (acc % 5 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  arr.push(acc % 1000);
  m01.set('k9', acc % 997);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const rc11: Rec87 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-12'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 632 - (acc % 15);
  const ix14: number = buf.indexOf('p87');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 167) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 23) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-18'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 8 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (acc % 9 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 152) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  acc = acc + 866 - (acc % 94);
  if (acc % 8 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 7) { throw new Error('synthetic-27'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 480 - (acc % 24);
  buf += `q29:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 123) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p87');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  m01.set('k38', acc % 997);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9039) % 65521;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  m01.set('k45', acc % 997);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = acc + 218 - (acc % 19);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 192) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
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

export function biz_0087_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1442) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  acc = (acc * 31 + 4076) % 65521;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  for (let i2 = 0; i2 < 5; i2++) {
    acc = (acc + i2 * 13 + 74) % 100003;
  }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  buf += 'client4-' + acc.toString();
  m01.set('k5', acc % 997);
  buf += 'journey6-' + acc.toString();
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-9'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 129) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const rc12: Rec87 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  try { if (acc % 29 === 16) { throw new Error('synthetic-13'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k14', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 173) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const ix19: number = buf.indexOf('p87');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8357) % 65521;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  m01.set('k25', acc % 997);
  const ix26: number = buf.indexOf('p87');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 46) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  arr.push(acc % 1000);
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 38) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 124) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec87 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  buf += `q38:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  arr.push(acc % 1000);
  acc = (acc * 31 + 6675) % 65521;
  arr.push(acc % 1000);
  for (let i43 = 0; i43 < 6; i43++) {
    acc = (acc + i43 * 13 + 875) % 100003;
  }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 30) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  buf += 'customs45-' + acc.toString();
  if (acc % 8 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-49'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8737) % 65521;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 171) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1443) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  arr.push(acc % 1000);
  acc = (acc * 31 + 3103) % 65521;
  acc = (acc * 31 + 7334) % 65521;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 68) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  arr.push(acc % 1000);
  if (acc % 5 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  for (let i8 = 0; i8 < 3; i8++) {
    acc = (acc + i8 * 13 + 204) % 100003;
  }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const rc12: Rec87 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  for (let i13 = 0; i13 < 3; i13++) {
    acc = (acc + i13 * 13 + 717) % 100003;
  }
  for (let i14 = 0; i14 < 12; i14++) {
    acc = (acc + i14 * 13 + 337) % 100003;
  }
  if (acc % 14 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 79) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  if (acc % 24 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  for (let i22 = 0; i22 < 6; i22++) {
    acc = (acc + i22 * 13 + 903) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-27'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const rc28: Rec87 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  buf += 'audit29-' + acc.toString();
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-32'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'transit33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 92) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 152) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  for (let i36 = 0; i36 < 7; i36++) {
    acc = (acc + i36 * 13 + 785) % 100003;
  }
  const rc37: Rec87 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = acc + 250 - (acc % 75);
  buf += `q40:${acc % 97}`;
  buf += `q41:${acc % 97}`;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const ix43: number = buf.indexOf('p87');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const ix44: number = buf.indexOf('p87');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q47:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-49'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i50 = 0; i50 < 9; i50++) {
    acc = (acc + i50 * 13 + 505) % 100003;
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-51'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0087_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0087_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0087_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1444) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i1 = 0; i1 < 6; i1++) {
    acc = (acc + i1 * 13 + 460) % 100003;
  }
  buf += `q2:${acc % 97}`;
  buf += `q3:${acc % 97}`;
  buf += `q4:${acc % 97}`;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const rc7: Rec87 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5966) % 65521;
  buf += 'refund11-' + acc.toString();
  acc = (acc * 31 + 9518) % 65521;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-15'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 79) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const ix20: number = buf.indexOf('p87');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4041) % 65521;
  const ix22: number = buf.indexOf('p87');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 16) { throw new Error('synthetic-24'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const rc26: Rec87 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const ix28: number = buf.indexOf('p87');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  for (let i30 = 0; i30 < 3; i30++) {
    acc = (acc + i30 * 13 + 553) % 100003;
  }
  if (acc % 10 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (acc % 22 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p87');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  buf += `q36:${acc % 97}`;
  const ix37: number = buf.indexOf('p87');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const rc46: Rec87 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  if (acc % 7 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  acc = acc + 221 - (acc % 39);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9671) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1445) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  try { if (acc % 29 === 15) { throw new Error('synthetic-0'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3072) % 65521;
  buf += `q2:${acc % 97}`;
  const ix3: number = buf.indexOf('p87');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  buf += `q4:${acc % 97}`;
  const ix5: number = buf.indexOf('p87');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const ix7: number = buf.indexOf('p87');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  if (acc % 28 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  buf += 'rebate10-' + acc.toString();
  if (acc % 31 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  acc = acc + 594 - (acc % 77);
  buf += 'sku13-' + acc.toString();
  const ix14: number = buf.indexOf('p87');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += `q15:${acc % 97}`;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 78) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const rc19: Rec87 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const ix20: number = buf.indexOf('p87');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 121) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const ix22: number = buf.indexOf('p87');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 74) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  for (let i25 = 0; i25 < 6; i25++) {
    acc = (acc + i25 * 13 + 511) % 100003;
  }
  const ix26: number = buf.indexOf('p87');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-27'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 315 - (acc % 24);
  acc = acc + 135 - (acc % 74);
  try { if (acc % 29 === 13) { throw new Error('synthetic-30'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-31'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 26 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 58) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 163) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  buf += 'waybill43-' + acc.toString();
  if (acc % 15 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  buf += `q50:${acc % 97}`;
  const ix51: number = buf.indexOf('p87');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1446) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  for (let i1 = 0; i1 < 8; i1++) {
    acc = (acc + i1 * 13 + 343) % 100003;
  }
  m01.set('k2', acc % 997);
  acc = (acc * 31 + 6279) % 65521;
  buf += 'balance4-' + acc.toString();
  if (acc % 30 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (acc % 16 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 5) { throw new Error('synthetic-9'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'policy10-' + acc.toString();
  buf += 'depot11-' + acc.toString();
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const ix14: number = buf.indexOf('p87');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 1732) % 65521;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 40) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-18'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 162) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const rc24: Rec87 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  try { if (acc % 29 === 6) { throw new Error('synthetic-25'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i26 = 0; i26 < 11; i26++) {
    acc = (acc + i26 * 13 + 553) % 100003;
  }
  m01.set('k27', acc % 997);
  buf += 'quota28-' + acc.toString();
  acc = (acc * 31 + 4714) % 65521;
  if (acc % 15 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  acc = acc + 242 - (acc % 90);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += 'refund33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 76) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 10; i35++) {
    acc = (acc + i35 * 13 + 383) % 100003;
  }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (acc % 8 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  const ix39: number = buf.indexOf('p87');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-40'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-41'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k42', acc % 997);
  buf += `q43:${acc % 97}`;
  acc = acc + 94 - (acc % 24);
  buf += `q45:${acc % 97}`;
  const ix46: number = buf.indexOf('p87');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  for (let i47 = 0; i47 < 7; i47++) {
    acc = (acc + i47 * 13 + 854) % 100003;
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  acc = (acc * 31 + 837) % 65521;
  acc = (acc * 31 + 4386) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1447) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  buf += `q0:${acc % 97}`;
  acc = (acc * 31 + 9615) % 65521;
  acc = acc + 710 - (acc % 45);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  arr.push(acc % 1000);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  arr.push(acc % 1000);
  m01.set('k8', acc % 997);
  acc = (acc * 31 + 9779) % 65521;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 76) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  for (let i11 = 0; i11 < 5; i11++) {
    acc = (acc + i11 * 13 + 532) % 100003;
  }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  buf += `q13:${acc % 97}`;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += 'depot15-' + acc.toString();
  acc = (acc * 31 + 6963) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 75) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec87 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  const rc23: Rec87 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const ix25: number = buf.indexOf('p87');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += 'carrier30-' + acc.toString();
  for (let i31 = 0; i31 < 4; i31++) {
    acc = (acc + i31 * 13 + 706) % 100003;
  }
  for (let i32 = 0; i32 < 8; i32++) {
    acc = (acc + i32 * 13 + 210) % 100003;
  }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 192) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 16) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  buf += 'stocktake36-' + acc.toString();
  acc = (acc * 31 + 4601) % 65521;
  m01.set('k38', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k40', acc % 997);
  try { if (acc % 29 === 3) { throw new Error('synthetic-41'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 8 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const ix44: number = buf.indexOf('p87');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const rc45: Rec87 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  buf += 'pickup47-' + acc.toString();
  acc = acc + 702 - (acc % 9);
  acc = acc + 853 - (acc % 40);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  buf += 'bay51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1448) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  try { if (acc % 29 === 23) { throw new Error('synthetic-3'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i4 = 0; i4 < 6; i4++) {
    acc = (acc + i4 * 13 + 272) % 100003;
  }
  for (let i5 = 0; i5 < 5; i5++) {
    acc = (acc + i5 * 13 + 747) % 100003;
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 135) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const ix10: number = buf.indexOf('p87');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  for (let i12 = 0; i12 < 4; i12++) {
    acc = (acc + i12 * 13 + 496) % 100003;
  }
  buf += 'stocktake13-' + acc.toString();
  try { if (acc % 29 === 10) { throw new Error('synthetic-14'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (acc % 13 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 50) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-18'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const rc19: Rec87 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  try { if (acc % 29 === 19) { throw new Error('synthetic-24'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  acc = (acc * 31 + 7896) % 65521;
  acc = acc + 715 - (acc % 22);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-32'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 59) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  acc = acc + 825 - (acc % 52);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  m01.set('k40', acc % 997);
  buf += `q41:${acc % 97}`;
  buf += `q42:${acc % 97}`;
  if (acc % 15 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const rc46: Rec87 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const ix47: number = buf.indexOf('p87');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  for (let i48 = 0; i48 < 4; i48++) {
    acc = (acc + i48 * 13 + 286) % 100003;
  }
  arr.push(acc % 1000);
  buf += `q50:${acc % 97}`;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 97) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1449) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  if (acc % 13 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  m01.set('k3', acc % 997);
  buf += `q4:${acc % 97}`;
  acc = (acc * 31 + 5306) % 65521;
  buf += 'dispatch6-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  acc = (acc * 31 + 9478) % 65521;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  acc = acc + 358 - (acc % 41);
  const ix12: number = buf.indexOf('p87');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = (acc * 31 + 579) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 121) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const rc20: Rec87 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  acc = acc + 603 - (acc % 78);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  buf += 'policy25-' + acc.toString();
  arr.push(acc % 1000);
  acc = acc + 82 - (acc % 72);
  buf += `q28:${acc % 97}`;
  acc = acc + 552 - (acc % 79);
  for (let i30 = 0; i30 < 11; i30++) {
    acc = (acc + i30 * 13 + 359) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 154) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  acc = (acc * 31 + 7767) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  for (let i39 = 0; i39 < 5; i39++) {
    acc = (acc + i39 * 13 + 187) % 100003;
  }
  buf += 'region40-' + acc.toString();
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const ix42: number = buf.indexOf('p87');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 28) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const ix45: number = buf.indexOf('p87');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  m01.set('k48', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 188) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 70) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1450) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  const ix0: number = buf.indexOf('p87');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  for (let i1 = 0; i1 < 8; i1++) {
    acc = (acc + i1 * 13 + 695) % 100003;
  }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 7869) % 65521;
  acc = acc + 520 - (acc % 33);
  const rc5: Rec87 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  for (let i8 = 0; i8 < 12; i8++) {
    acc = (acc + i8 * 13 + 386) % 100003;
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1802) % 65521;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  for (let i12 = 0; i12 < 9; i12++) {
    acc = (acc + i12 * 13 + 734) % 100003;
  }
  const rc13: Rec87 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  for (let i14 = 0; i14 < 9; i14++) {
    acc = (acc + i14 * 13 + 867) % 100003;
  }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 166) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 260 - (acc % 92);
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 156) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  if (acc % 8 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-27'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q28:${acc % 97}`;
  m01.set('k29', acc % 997);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 142) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 3088) % 65521;
  for (let i36 = 0; i36 < 4; i36++) {
    acc = (acc + i36 * 13 + 600) % 100003;
  }
  const ix37: number = buf.indexOf('p87');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  buf += `q39:${acc % 97}`;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  buf += 'pallet41-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  acc = (acc * 31 + 1689) % 65521;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  acc = acc + 474 - (acc % 55);
  const ix46: number = buf.indexOf('p87');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1451) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  acc = (acc * 31 + 6225) % 65521;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  buf += `q5:${acc % 97}`;
  arr.push(acc % 1000);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  acc = acc + 731 - (acc % 20);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  buf += 'warehouse11-' + acc.toString();
  buf += 'client12-' + acc.toString();
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-14'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-15'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3288) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 16) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p87');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 166) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = acc + 983 - (acc % 69);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  m01.set('k26', acc % 997);
  for (let i27 = 0; i27 < 4; i27++) {
    acc = (acc + i27 * 13 + 770) % 100003;
  }
  arr.push(acc % 1000);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += `q31:${acc % 97}`;
  arr.push(acc % 1000);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 115) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const rc36: Rec87 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  acc = (acc * 31 + 2575) % 65521;
  buf += `q38:${acc % 97}`;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  m01.set('k40', acc % 997);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  for (let i42 = 0; i42 < 9; i42++) {
    acc = (acc + i42 * 13 + 892) % 100003;
  }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 144) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 188) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  m01.set('k45', acc % 997);
  m01.set('k46', acc % 997);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i49 = 0; i49 < 11; i49++) {
    acc = (acc + i49 * 13 + 24) % 100003;
  }
  buf += `q50:${acc % 97}`;
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1452) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  buf += 'rebate0-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i2 = 0; i2 < 8; i2++) {
    acc = (acc + i2 * 13 + 611) % 100003;
  }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const ix4: number = buf.indexOf('p87');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 14) { throw new Error('synthetic-6'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const rc7: Rec87 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  buf += `q8:${acc % 97}`;
  arr.push(acc % 1000);
  const rc10: Rec87 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const ix12: number = buf.indexOf('p87');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const ix13: number = buf.indexOf('p87');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  if (acc % 15 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += `q15:${acc % 97}`;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 167) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p87');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 46) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  acc = (acc * 31 + 185) % 65521;
  const ix22: number = buf.indexOf('p87');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-23'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-24'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-28'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  arr.push(acc % 1000);
  m01.set('k32', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 77) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 30) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 39) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  for (let i38 = 0; i38 < 12; i38++) {
    acc = (acc + i38 * 13 + 762) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i40 = 0; i40 < 12; i40++) {
    acc = (acc + i40 * 13 + 479) % 100003;
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  acc = (acc * 31 + 4382) % 65521;
  m01.set('k44', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6617) % 65521;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  buf += `q48:${acc % 97}`;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-51'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1453) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const rc2: Rec87 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  acc = (acc * 31 + 8901) % 65521;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  buf += 'refund6-' + acc.toString();
  const ix7: number = buf.indexOf('p87');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-11'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const rc12: Rec87 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  if (acc % 21 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const ix15: number = buf.indexOf('p87');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 84) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i19 = 0; i19 < 6; i19++) {
    acc = (acc + i19 * 13 + 735) % 100003;
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = (acc * 31 + 6177) % 65521;
  arr.push(acc % 1000);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const ix24: number = buf.indexOf('p87');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  acc = (acc * 31 + 4212) % 65521;
  const ix27: number = buf.indexOf('p87');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  buf += 'parcel28-' + acc.toString();
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  buf += `q32:${acc % 97}`;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 86) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8519) % 65521;
  buf += `q37:${acc % 97}`;
  m01.set('k38', acc % 997);
  try { if (acc % 29 === 21) { throw new Error('synthetic-39'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  if (acc % 15 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  m01.set('k44', acc % 997);
  m01.set('k45', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  m01.set('k47', acc % 997);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  buf += 'waybill49-' + acc.toString();
  acc = acc + 384 - (acc % 16);
  try { if (acc % 29 === 10) { throw new Error('synthetic-51'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0087_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0087_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0087_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1454) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  for (let i0 = 0; i0 < 8; i0++) {
    acc = (acc + i0 * 13 + 744) % 100003;
  }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  acc = (acc * 31 + 9460) % 65521;
  arr.push(acc % 1000);
  acc = acc + 722 - (acc % 24);
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  m01.set('k7', acc % 997);
  for (let i8 = 0; i8 < 9; i8++) {
    acc = (acc + i8 * 13 + 727) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  try { if (acc % 29 === 10) { throw new Error('synthetic-10'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  if (acc % 10 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += `q15:${acc % 97}`;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 95) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  if (acc % 29 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  buf += `q20:${acc % 97}`;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  for (let i23 = 0; i23 < 12; i23++) {
    acc = (acc + i23 * 13 + 296) % 100003;
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  buf += `q25:${acc % 97}`;
  acc = acc + 593 - (acc % 26);
  arr.push(acc % 1000);
  const rc28: Rec87 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  m01.set('k32', acc % 997);
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 93) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 258 - (acc % 50);
  acc = acc + 653 - (acc % 53);
  const rc37: Rec87 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  try { if (acc % 29 === 21) { throw new Error('synthetic-38'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  arr.push(acc % 1000);
  m01.set('k41', acc % 997);
  acc = (acc * 31 + 8951) % 65521;
  acc = acc + 781 - (acc % 43);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const rc45: Rec87 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  buf += `q46:${acc % 97}`;
  m01.set('k47', acc % 997);
  buf += `q48:${acc % 97}`;
  for (let i49 = 0; i49 < 10; i49++) {
    acc = (acc + i49 * 13 + 318) % 100003;
  }
  const rc50: Rec87 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1455) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 113) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  acc = (acc * 31 + 4639) % 65521;
  const rc3: Rec87 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-4'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const rc5: Rec87 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const ix6: number = buf.indexOf('p87');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 3408) % 65521;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  buf += `q10:${acc % 97}`;
  const ix11: number = buf.indexOf('p87');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  if (acc % 11 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const rc13: Rec87 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const ix15: number = buf.indexOf('p87');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 141) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 63) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  const ix20: number = buf.indexOf('p87');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  m01.set('k21', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  acc = (acc * 31 + 867) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  for (let i26 = 0; i26 < 9; i26++) {
    acc = (acc + i26 * 13 + 156) % 100003;
  }
  buf += 'vendor27-' + acc.toString();
  for (let i28 = 0; i28 < 11; i28++) {
    acc = (acc + i28 * 13 + 798) % 100003;
  }
  acc = (acc * 31 + 203) % 65521;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  buf += 'rebate31-' + acc.toString();
  for (let i32 = 0; i32 < 3; i32++) {
    acc = (acc + i32 * 13 + 696) % 100003;
  }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 64) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5566) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  try { if (acc % 29 === 9) { throw new Error('synthetic-39'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i40 = 0; i40 < 4; i40++) {
    acc = (acc + i40 * 13 + 883) % 100003;
  }
  acc = (acc * 31 + 3085) % 65521;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 161) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  if (acc % 23 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6570) % 65521;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const rc47: Rec87 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  m01.set('k48', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
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

export function biz_0087_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1456) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  acc = acc + 337 - (acc % 44);
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = (acc * 31 + 8443) % 65521;
  buf += `q3:${acc % 97}`;
  buf += 'depot4-' + acc.toString();
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  acc = acc + 655 - (acc % 8);
  for (let i7 = 0; i7 < 9; i7++) {
    acc = (acc + i7 * 13 + 402) % 100003;
  }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const rc11: Rec87 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  buf += 'coupon12-' + acc.toString();
  buf += `q13:${acc % 97}`;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  buf += `q15:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 89) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  buf += 'rebate20-' + acc.toString();
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 75) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 29 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  buf += `q28:${acc % 97}`;
  if (acc % 28 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  m01.set('k30', acc % 997);
  buf += 'journey31-' + acc.toString();
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = (acc * 31 + 420) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 35) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  for (let i36 = 0; i36 < 3; i36++) {
    acc = (acc + i36 * 13 + 106) % 100003;
  }
  m01.set('k37', acc % 997);
  acc = (acc * 31 + 7080) % 65521;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const rc40: Rec87 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  buf += 'freight41-' + acc.toString();
  const rc42: Rec87 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  try { if (acc % 29 === 20) { throw new Error('synthetic-44'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-45'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 98) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  if (acc % 17 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  acc = (acc * 31 + 8606) % 65521;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1457) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  arr.push(acc % 1000);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  m01.set('k2', acc % 997);
  acc = acc + 67 - (acc % 7);
  const ix4: number = buf.indexOf('p87');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  buf += 'waybill5-' + acc.toString();
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  buf += `q7:${acc % 97}`;
  const ix8: number = buf.indexOf('p87');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 7011) % 65521;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  buf += `q13:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  for (let i15 = 0; i15 < 12; i15++) {
    acc = (acc + i15 * 13 + 748) % 100003;
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 76) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 112) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 277 - (acc % 90);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  for (let i21 = 0; i21 < 5; i21++) {
    acc = (acc + i21 * 13 + 398) % 100003;
  }
  if (acc % 6 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  buf += `q23:${acc % 97}`;
  const rc24: Rec87 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  try { if (acc % 29 === 2) { throw new Error('synthetic-25'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 14 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const ix30: number = buf.indexOf('p87');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += 'warehouse31-' + acc.toString();
  const rc32: Rec87 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  const rc33: Rec87 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 115) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  m01.set('k37', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (acc % 20 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const ix40: number = buf.indexOf('p87');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 637) % 65521;
  m01.set('k43', acc % 997);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  const ix45: number = buf.indexOf('p87');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  if (acc % 13 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  for (let i48 = 0; i48 < 4; i48++) {
    acc = (acc + i48 * 13 + 701) % 100003;
  }
  buf += `q49:${acc % 97}`;
  try { if (acc % 29 === 6) { throw new Error('synthetic-50'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 29 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1458) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 3) { throw new Error('synthetic-1'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  arr.push(acc % 1000);
  for (let i4 = 0; i4 < 5; i4++) {
    acc = (acc + i4 * 13 + 233) % 100003;
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-5'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 96) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 6557) % 65521;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const rc12: Rec87 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  acc = (acc * 31 + 9410) % 65521;
  buf += `q14:${acc % 97}`;
  try { if (acc % 29 === 2) { throw new Error('synthetic-15'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 52) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 11; i18++) {
    acc = (acc + i18 * 13 + 345) % 100003;
  }
  buf += `q19:${acc % 97}`;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += 'customs21-' + acc.toString();
  m01.set('k22', acc % 997);
  buf += 'shelf23-' + acc.toString();
  const ix24: number = buf.indexOf('p87');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  if (acc % 29 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  if (acc % 5 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-27'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  const rc28: Rec87 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  buf += `q29:${acc % 97}`;
  const rc30: Rec87 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  acc = acc + 983 - (acc % 23);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 137) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i36 = 0; i36 < 7; i36++) {
    acc = (acc + i36 * 13 + 302) % 100003;
  }
  for (let i37 = 0; i37 < 9; i37++) {
    acc = (acc + i37 * 13 + 732) % 100003;
  }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  arr.push(acc % 1000);
  const rc40: Rec87 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  try { if (acc % 29 === 6) { throw new Error('synthetic-42'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 5118) % 65521;
  const ix45: number = buf.indexOf('p87');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  m01.set('k46', acc % 997);
  try { if (acc % 29 === 12) { throw new Error('synthetic-47'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5174) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1459) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  acc = acc + 630 - (acc % 42);
  const rc3: Rec87 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  buf += `q5:${acc % 97}`;
  arr.push(acc % 1000);
  buf += 'rebate7-' + acc.toString();
  for (let i8 = 0; i8 < 7; i8++) {
    acc = (acc + i8 * 13 + 446) % 100003;
  }
  buf += `q9:${acc % 97}`;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  if (acc % 21 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6898) % 65521;
  m01.set('k13', acc % 997);
  if (acc % 27 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 154) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  try { if (acc % 29 === 12) { throw new Error('synthetic-19'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 16 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  buf += `q22:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const ix25: number = buf.indexOf('p87');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  if (acc % 19 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 35) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 147) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const ix29: number = buf.indexOf('p87');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 194) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  buf += 'portal31-' + acc.toString();
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 198) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  acc = (acc * 31 + 6849) % 65521;
  acc = acc + 557 - (acc % 39);
  acc = (acc * 31 + 9348) % 65521;
  buf += 'warehouse41-' + acc.toString();
  m01.set('k42', acc % 997);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 17) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-48'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 85) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1460) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  const rc0: Rec87 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-2'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'audit3-' + acc.toString();
  acc = acc + 171 - (acc % 54);
  acc = acc + 845 - (acc % 96);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  for (let i7 = 0; i7 < 10; i7++) {
    acc = (acc + i7 * 13 + 799) % 100003;
  }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  for (let i9 = 0; i9 < 9; i9++) {
    acc = (acc + i9 * 13 + 93) % 100003;
  }
  if (acc % 25 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  for (let i11 = 0; i11 < 8; i11++) {
    acc = (acc + i11 * 13 + 112) % 100003;
  }
  acc = (acc * 31 + 535) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  buf += 'invoice14-' + acc.toString();
  arr.push(acc % 1000);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 119) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 4; i18++) {
    acc = (acc + i18 * 13 + 831) % 100003;
  }
  arr.push(acc % 1000);
  for (let i20 = 0; i20 < 7; i20++) {
    acc = (acc + i20 * 13 + 793) % 100003;
  }
  arr.push(acc % 1000);
  acc = acc + 680 - (acc % 66);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  try { if (acc % 29 === 23) { throw new Error('synthetic-25'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const ix27: number = buf.indexOf('p87');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const ix28: number = buf.indexOf('p87');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  m01.set('k29', acc % 997);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  if (acc % 9 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 40) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = acc + 671 - (acc % 46);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 26) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const rc42: Rec87 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  if (acc % 12 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 106) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  if (acc % 19 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const ix48: number = buf.indexOf('p87');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += `q49:${acc % 97}`;
  acc = acc + 544 - (acc % 30);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1461) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  acc = (acc * 31 + 5678) % 65521;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 72) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  for (let i3 = 0; i3 < 9; i3++) {
    acc = (acc + i3 * 13 + 953) % 100003;
  }
  if (acc % 11 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5483) % 65521;
  const ix6: number = buf.indexOf('p87');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5562) % 65521;
  m01.set('k8', acc % 997);
  try { if (acc % 29 === 12) { throw new Error('synthetic-9'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  m01.set('k12', acc % 997);
  try { if (acc % 29 === 18) { throw new Error('synthetic-13'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k14', acc % 997);
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 190) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  buf += `q21:${acc % 97}`;
  for (let i22 = 0; i22 < 5; i22++) {
    acc = (acc + i22 * 13 + 654) % 100003;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const ix25: number = buf.indexOf('p87');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 190) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  m01.set('k29', acc % 997);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  m01.set('k31', acc % 997);
  const rc32: Rec87 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = (acc * 31 + 1029) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 19) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const ix40: number = buf.indexOf('p87');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  buf += `q41:${acc % 97}`;
  const rc42: Rec87 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const rc43: Rec87 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  acc = (acc * 31 + 180) % 65521;
  for (let i45 = 0; i45 < 11; i45++) {
    acc = (acc + i45 * 13 + 959) % 100003;
  }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  try { if (acc % 29 === 4) { throw new Error('synthetic-47'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6266) % 65521;
  buf += `q49:${acc % 97}`;
  const ix50: number = buf.indexOf('p87');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  acc = acc + 153 - (acc % 78);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1462) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  arr.push(acc % 1000);
  if (acc % 18 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  for (let i2 = 0; i2 < 10; i2++) {
    acc = (acc + i2 * 13 + 743) % 100003;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-3'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'depot4-' + acc.toString();
  acc = acc + 913 - (acc % 77);
  arr.push(acc % 1000);
  acc = (acc * 31 + 4864) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-8'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-9'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const ix10: number = buf.indexOf('p87');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  arr.push(acc % 1000);
  const ix14: number = buf.indexOf('p87');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const rc15: Rec87 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 15) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec87 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  buf += 'shelf19-' + acc.toString();
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const rc22: Rec87 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += `q24:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 170) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += 'vendor27-' + acc.toString();
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  if (acc % 8 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  arr.push(acc % 1000);
  buf += 'coupon32-' + acc.toString();
  acc = (acc * 31 + 3330) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 89) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 192) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  buf += 'payout37-' + acc.toString();
  const rc38: Rec87 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  buf += 'shelf43-' + acc.toString();
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 183) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  arr.push(acc % 1000);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 181) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  arr.push(acc % 1000);
  buf += 'ticket51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1463) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  if (acc % 8 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = (acc * 31 + 565) % 65521;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  buf += `q4:${acc % 97}`;
  buf += `q5:${acc % 97}`;
  try { if (acc % 29 === 2) { throw new Error('synthetic-6'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  acc = (acc * 31 + 2633) % 65521;
  const ix9: number = buf.indexOf('p87');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  acc = acc + 293 - (acc % 85);
  if (acc % 24 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const ix16: number = buf.indexOf('p87');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 14) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const ix21: number = buf.indexOf('p87');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  m01.set('k23', acc % 997);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-26'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 67) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const ix28: number = buf.indexOf('p87');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const rc29: Rec87 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  arr.push(acc % 1000);
  const rc32: Rec87 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 26) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const rc37: Rec87 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  buf += 'tariff38-' + acc.toString();
  buf += `q39:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  buf += 'dispatch42-' + acc.toString();
  for (let i43 = 0; i43 < 11; i43++) {
    acc = (acc + i43 * 13 + 929) % 100003;
  }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  m01.set('k45', acc % 997);
  const rc46: Rec87 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  m01.set('k47', acc % 997);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 165) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  buf += 'audit50-' + acc.toString();
  try { if (acc % 29 === 3) { throw new Error('synthetic-51'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0087_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0087_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0087_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1464) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  try { if (acc % 29 === 3) { throw new Error('synthetic-0'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const ix4: number = buf.indexOf('p87');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  buf += 'carrier5-' + acc.toString();
  buf += `q6:${acc % 97}`;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 131) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 57) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  for (let i14 = 0; i14 < 3; i14++) {
    acc = (acc + i14 * 13 + 667) % 100003;
  }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 188) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-21'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  buf += 'stocktake23-' + acc.toString();
  acc = (acc * 31 + 3924) % 65521;
  m01.set('k25', acc % 997);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  buf += `q30:${acc % 97}`;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  buf += `q32:${acc % 97}`;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 186) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 88) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 86) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  buf += `q37:${acc % 97}`;
  try { if (acc % 29 === 9) { throw new Error('synthetic-38'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 204 - (acc % 91);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  m01.set('k41', acc % 997);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const ix43: number = buf.indexOf('p87');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const rc47: Rec87 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const ix48: number = buf.indexOf('p87');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 9536) % 65521;
  arr.push(acc % 1000);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1465) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  buf += `q2:${acc % 97}`;
  acc = (acc * 31 + 6206) % 65521;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const ix5: number = buf.indexOf('p87');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  for (let i8 = 0; i8 < 5; i8++) {
    acc = (acc + i8 * 13 + 276) % 100003;
  }
  buf += 'portal9-' + acc.toString();
  if (acc % 31 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  buf += 'dock12-' + acc.toString();
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  acc = acc + 528 - (acc % 31);
  buf += 'ledger15-' + acc.toString();
  acc = (acc * 31 + 862) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 155) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  m01.set('k19', acc % 997);
  const rc20: Rec87 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = (acc * 31 + 9160) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  buf += 'settle26-' + acc.toString();
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += `q29:${acc % 97}`;
  acc = acc + 573 - (acc % 94);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  acc = acc + 632 - (acc % 66);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 78) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 18 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  if (acc % 16 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  buf += `q38:${acc % 97}`;
  buf += 'routeplan39-' + acc.toString();
  m01.set('k40', acc % 997);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 18) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  buf += 'routeplan46-' + acc.toString();
  const rc47: Rec87 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-48'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const rc50: Rec87 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0087_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1466) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit87 = new Unit87(acc);
  buf += 'pickup0-' + acc.toString();
  try { if (acc % 29 === 11) { throw new Error('synthetic-1'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k2', acc % 997);
  acc = (acc * 31 + 3917) % 65521;
  if (acc % 6 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += 'pickup5-' + acc.toString();
  const rc6: Rec87 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const ix8: number = buf.indexOf('p87');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-9'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k10', acc % 997);
  buf += 'bay11-' + acc.toString();
  if (acc % 12 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  m01.set('k13', acc % 997);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const ix15: number = buf.indexOf('p87');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 94) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  acc = acc + 417 - (acc % 73);
  const rc20: Rec87 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  buf += `q23:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const rc26: Rec87 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += `q27:${acc % 97}`;
  try { if (acc % 29 === 17) { throw new Error('synthetic-28'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  const rc30: Rec87 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 194) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  for (let i38 = 0; i38 < 10; i38++) {
    acc = (acc + i38 * 13 + 961) % 100003;
  }
  acc = acc + 718 - (acc % 29);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  acc = acc + 617 - (acc % 32);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 175) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  buf += `q45:${acc % 97}`;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  try { if (acc % 29 === 14) { throw new Error('synthetic-47'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const rc49: Rec87 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const ix50: number = buf.indexOf('p87');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0087(): BizFn[] {
  return [biz_0087_00, biz_0087_01, biz_0087_02, biz_0087_03, biz_0087_04, biz_0087_05, biz_0087_06, biz_0087_07, biz_0087_08, biz_0087_09, biz_0087_10, biz_0087_11, biz_0087_12, biz_0087_13, biz_0087_14, biz_0087_15, biz_0087_16, biz_0087_17, biz_0087_18, biz_0087_19, biz_0087_20, biz_0087_21, biz_0087_22, biz_0087_23, biz_0087_24, biz_0087_25, biz_0087_26, biz_0087_27, biz_0087_28, biz_0087_29, biz_0087_30, biz_0087_31, biz_0087_32, biz_0087_33, biz_0087_34, biz_0087_35, biz_0087_36, biz_0087_37, biz_0087_38, biz_0087_39, biz_0087_40, biz_0087_41, biz_0087_42];
}

export function rega_0087(): ABizFn[] {
  return [biz_0087_09a, biz_0087_19a, biz_0087_29a, biz_0087_39a];
}
