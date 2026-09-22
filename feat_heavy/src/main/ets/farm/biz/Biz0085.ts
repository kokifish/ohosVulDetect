// Biz0085.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec85 { id: number; tag: string; score: number; }

class Unit85 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0085_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1162) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  try { if (acc % 29 === 16) { throw new Error('synthetic-1'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (acc % 17 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  if (acc % 23 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  acc = (acc * 31 + 4253) % 65521;
  arr.push(acc % 1000);
  buf += `q8:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-9'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 61) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  acc = acc + 792 - (acc % 94);
  const rc14: Rec85 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += 'tariff15-' + acc.toString();
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 52) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 109) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 8; i18++) {
    acc = (acc + i18 * 13 + 764) % 100003;
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 7229) % 65521;
  arr.push(acc % 1000);
  const ix22: number = buf.indexOf('p85');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const ix29: number = buf.indexOf('p85');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = acc + 591 - (acc % 38);
  acc = (acc * 31 + 6580) % 65521;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 65) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 136) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec85 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  m01.set('k36', acc % 997);
  const ix37: number = buf.indexOf('p85');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-38'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 5257) % 65521;
  arr.push(acc % 1000);
  for (let i41 = 0; i41 < 10; i41++) {
    acc = (acc + i41 * 13 + 873) % 100003;
  }
  if (acc % 28 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  acc = (acc * 31 + 2342) % 65521;
  const rc45: Rec85 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  arr.push(acc % 1000);
  buf += 'depot49-' + acc.toString();
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  for (let i51 = 0; i51 < 12; i51++) {
    acc = (acc + i51 * 13 + 48) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1163) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  const ix0: number = buf.indexOf('p85');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  m01.set('k2', acc % 997);
  m01.set('k3', acc % 997);
  buf += `q4:${acc % 97}`;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  for (let i6 = 0; i6 < 12; i6++) {
    acc = (acc + i6 * 13 + 877) % 100003;
  }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  if (acc % 27 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-9'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const ix10: number = buf.indexOf('p85');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 18) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const ix13: number = buf.indexOf('p85');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  if (acc % 27 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  if (acc % 31 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += 'parcel16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 73) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  acc = acc + 435 - (acc % 56);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  try { if (acc % 29 === 4) { throw new Error('synthetic-23'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  m01.set('k26', acc % 997);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 30) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 84) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  buf += 'dispatch30-' + acc.toString();
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 185) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-36'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const ix37: number = buf.indexOf('p85');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  acc = acc + 246 - (acc % 49);
  arr.push(acc % 1000);
  acc = (acc * 31 + 830) % 65521;
  const rc41: Rec85 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 123) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  const rc43: Rec85 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  buf += `q44:${acc % 97}`;
  for (let i45 = 0; i45 < 4; i45++) {
    acc = (acc + i45 * 13 + 676) % 100003;
  }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  m01.set('k48', acc % 997);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1164) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 50) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const rc3: Rec85 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += `q4:${acc % 97}`;
  acc = (acc * 31 + 316) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += 'rebate8-' + acc.toString();
  try { if (acc % 29 === 12) { throw new Error('synthetic-9'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q11:${acc % 97}`;
  const ix12: number = buf.indexOf('p85');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-13'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 190) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k19', acc % 997);
  acc = acc + 78 - (acc % 55);
  arr.push(acc % 1000);
  buf += `q22:${acc % 97}`;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += 'batch24-' + acc.toString();
  const rc25: Rec85 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  buf += 'tariff26-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-27'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k28', acc % 997);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-30'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  const rc31: Rec85 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  for (let i33 = 0; i33 < 8; i33++) {
    acc = (acc + i33 * 13 + 722) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 156) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  try { if (acc % 29 === 5) { throw new Error('synthetic-36'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  buf += `q38:${acc % 97}`;
  for (let i39 = 0; i39 < 5; i39++) {
    acc = (acc + i39 * 13 + 438) % 100003;
  }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  acc = (acc * 31 + 1019) % 65521;
  const rc42: Rec85 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  try { if (acc % 29 === 4) { throw new Error('synthetic-43'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 441 - (acc % 12);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8519) % 65521;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-49'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 480 - (acc % 80);
  if (acc % 11 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1165) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  buf += 'sku0-' + acc.toString();
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  if (acc % 11 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-4'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const rc6: Rec85 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  arr.push(acc % 1000);
  const rc8: Rec85 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  buf += 'journey9-' + acc.toString();
  buf += 'batch10-' + acc.toString();
  buf += `q11:${acc % 97}`;
  for (let i12 = 0; i12 < 10; i12++) {
    acc = (acc + i12 * 13 + 940) % 100003;
  }
  arr.push(acc % 1000);
  buf += `q14:${acc % 97}`;
  try { if (acc % 29 === 20) { throw new Error('synthetic-15'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 129) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 43) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  for (let i19 = 0; i19 < 8; i19++) {
    acc = (acc + i19 * 13 + 959) % 100003;
  }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 38) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  buf += `q23:${acc % 97}`;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  if (acc % 6 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const ix27: number = buf.indexOf('p85');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-28'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k29', acc % 997);
  acc = acc + 934 - (acc % 90);
  if (acc % 22 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  acc = acc + 477 - (acc % 83);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 171) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  try { if (acc % 29 === 18) { throw new Error('synthetic-37'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 267) % 65521;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-41'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const rc42: Rec85 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  arr.push(acc % 1000);
  const ix48: number = buf.indexOf('p85');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += 'crate49-' + acc.toString();
  acc = acc + 340 - (acc % 32);
  if (acc % 11 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1166) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += `q2:${acc % 97}`;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 116) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  if (acc % 26 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  for (let i5 = 0; i5 < 5; i5++) {
    acc = (acc + i5 * 13 + 215) % 100003;
  }
  if (acc % 17 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const rc7: Rec85 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  arr.push(acc % 1000);
  acc = (acc * 31 + 5617) % 65521;
  const ix11: number = buf.indexOf('p85');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 125) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = (acc * 31 + 6937) % 65521;
  if (acc % 10 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 139) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p85');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  buf += 'carrier19-' + acc.toString();
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = acc + 928 - (acc % 17);
  acc = (acc * 31 + 3742) % 65521;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  if (acc % 28 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  acc = acc + 250 - (acc % 86);
  try { if (acc % 29 === 10) { throw new Error('synthetic-26'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i27 = 0; i27 < 3; i27++) {
    acc = (acc + i27 * 13 + 566) % 100003;
  }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  acc = (acc * 31 + 823) % 65521;
  buf += 'policy30-' + acc.toString();
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 135) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  const rc36: Rec85 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  arr.push(acc % 1000);
  const rc38: Rec85 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  buf += 'pallet39-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = acc + 442 - (acc % 17);
  if (acc % 12 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = acc + 185 - (acc % 40);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 51) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  m01.set('k48', acc % 997);
  m01.set('k49', acc % 997);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1167) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  acc = (acc * 31 + 4431) % 65521;
  if (acc % 9 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  for (let i3 = 0; i3 < 8; i3++) {
    acc = (acc + i3 * 13 + 364) % 100003;
  }
  acc = (acc * 31 + 438) % 65521;
  arr.push(acc % 1000);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  acc = acc + 689 - (acc % 40);
  for (let i8 = 0; i8 < 9; i8++) {
    acc = (acc + i8 * 13 + 407) % 100003;
  }
  acc = acc + 288 - (acc % 22);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += 'audit15-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 46) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'customs18-' + acc.toString();
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  acc = (acc * 31 + 6480) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  m01.set('k23', acc % 997);
  acc = acc + 82 - (acc % 15);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  for (let i27 = 0; i27 < 11; i27++) {
    acc = (acc + i27 * 13 + 485) % 100003;
  }
  acc = acc + 298 - (acc % 90);
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const ix30: number = buf.indexOf('p85');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  try { if (acc % 29 === 11) { throw new Error('synthetic-33'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 88) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  for (let i36 = 0; i36 < 3; i36++) {
    acc = (acc + i36 * 13 + 492) % 100003;
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  if (acc % 6 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 61) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  acc = acc + 428 - (acc % 23);
  acc = (acc * 31 + 1106) % 65521;
  for (let i44 = 0; i44 < 8; i44++) {
    acc = (acc + i44 * 13 + 388) % 100003;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-45'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const rc46: Rec85 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  if (acc % 15 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  buf += `q48:${acc % 97}`;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1168) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 32) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  buf += 'dock1-' + acc.toString();
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  buf += `q3:${acc % 97}`;
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  m01.set('k5', acc % 997);
  try { if (acc % 29 === 17) { throw new Error('synthetic-6'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  try { if (acc % 29 === 17) { throw new Error('synthetic-8'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'payout9-' + acc.toString();
  const rc10: Rec85 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const rc12: Rec85 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  if (acc % 26 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += 'pickup15-' + acc.toString();
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 124) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  if (acc % 11 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  arr.push(acc % 1000);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = (acc * 31 + 6880) % 65521;
  arr.push(acc % 1000);
  m01.set('k29', acc % 997);
  acc = acc + 896 - (acc % 76);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  buf += 'shelf32-' + acc.toString();
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 44) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  if (acc % 8 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  try { if (acc % 29 === 10) { throw new Error('synthetic-40'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const rc42: Rec85 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  arr.push(acc % 1000);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 17) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  if (acc % 30 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const rc46: Rec85 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 172) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  const rc50: Rec85 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += 'depot51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1169) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  acc = acc + 339 - (acc % 91);
  buf += 'order2-' + acc.toString();
  acc = acc + 254 - (acc % 54);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 173) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  buf += 'quota7-' + acc.toString();
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const ix9: number = buf.indexOf('p85');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const rc12: Rec85 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  acc = (acc * 31 + 366) % 65521;
  const rc14: Rec85 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  m01.set('k15', acc % 997);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 74) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 29 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const rc20: Rec85 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  arr.push(acc % 1000);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  for (let i24 = 0; i24 < 4; i24++) {
    acc = (acc + i24 * 13 + 990) % 100003;
  }
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 26) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  acc = (acc * 31 + 2679) % 65521;
  m01.set('k29', acc % 997);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  buf += 'balance31-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-32'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 141) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 4; i35++) {
    acc = (acc + i35 * 13 + 550) % 100003;
  }
  buf += `q36:${acc % 97}`;
  for (let i37 = 0; i37 < 10; i37++) {
    acc = (acc + i37 * 13 + 646) % 100003;
  }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  acc = (acc * 31 + 4700) % 65521;
  const ix42: number = buf.indexOf('p85');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const rc43: Rec85 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  m01.set('k47', acc % 997);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  for (let i49 = 0; i49 < 12; i49++) {
    acc = (acc + i49 * 13 + 852) % 100003;
  }
  acc = acc + 666 - (acc % 47);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1170) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  buf += 'refund0-' + acc.toString();
  const ix1: number = buf.indexOf('p85');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const ix2: number = buf.indexOf('p85');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const ix3: number = buf.indexOf('p85');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  try { if (acc % 29 === 23) { throw new Error('synthetic-5'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const rc7: Rec85 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  if (acc % 26 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  for (let i11 = 0; i11 < 11; i11++) {
    acc = (acc + i11 * 13 + 261) % 100003;
  }
  buf += 'client12-' + acc.toString();
  acc = acc + 842 - (acc % 25);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = acc + 94 - (acc % 21);
  buf += 'pallet16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 159) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec85 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 53) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = acc + 654 - (acc % 75);
  const rc21: Rec85 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  buf += 'warehouse22-' + acc.toString();
  acc = acc + 816 - (acc % 81);
  m01.set('k24', acc % 997);
  try { if (acc % 29 === 5) { throw new Error('synthetic-25'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'order26-' + acc.toString();
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  acc = acc + 138 - (acc % 77);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  for (let i32 = 0; i32 < 7; i32++) {
    acc = (acc + i32 * 13 + 484) % 100003;
  }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 19) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  for (let i36 = 0; i36 < 3; i36++) {
    acc = (acc + i36 * 13 + 82) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const rc40: Rec85 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  acc = acc + 122 - (acc % 87);
  buf += `q42:${acc % 97}`;
  const rc43: Rec85 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  if (acc % 14 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  try { if (acc % 29 === 5) { throw new Error('synthetic-46'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 59) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-48'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 67) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1171) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  m01.set('k0', acc % 997);
  acc = (acc * 31 + 1041) % 65521;
  m01.set('k2', acc % 997);
  for (let i3 = 0; i3 < 12; i3++) {
    acc = (acc + i3 * 13 + 924) % 100003;
  }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  if (acc % 5 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  acc = acc + 792 - (acc % 69);
  buf += 'order7-' + acc.toString();
  arr.push(acc % 1000);
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += `q11:${acc % 97}`;
  const ix12: number = buf.indexOf('p85');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const ix15: number = buf.indexOf('p85');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 185) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 23 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const ix20: number = buf.indexOf('p85');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const ix21: number = buf.indexOf('p85');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  m01.set('k22', acc % 997);
  acc = (acc * 31 + 5771) % 65521;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8158) % 65521;
  if (acc % 25 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const ix28: number = buf.indexOf('p85');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5024) % 65521;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const rc32: Rec85 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 50) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p85');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-39'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  arr.push(acc % 1000);
  buf += 'parcel43-' + acc.toString();
  acc = acc + 651 - (acc % 33);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  m01.set('k46', acc % 997);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  m01.set('k48', acc % 997);
  acc = acc + 966 - (acc % 85);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 121) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = (acc * 31 + 9517) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0085_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0085_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0085_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1172) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  try { if (acc % 29 === 15) { throw new Error('synthetic-2'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const ix4: number = buf.indexOf('p85');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  m01.set('k5', acc % 997);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += 'journey9-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 83) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  acc = acc + 512 - (acc % 14);
  acc = (acc * 31 + 9944) % 65521;
  acc = acc + 13 - (acc % 44);
  m01.set('k15', acc % 997);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 151) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 15) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 160) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  m01.set('k25', acc % 997);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const rc27: Rec85 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  if (acc % 10 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 119) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p85');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 125) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  if (acc % 31 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += `q39:${acc % 97}`;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (acc % 18 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  acc = acc + 961 - (acc % 80);
  buf += `q48:${acc % 97}`;
  for (let i49 = 0; i49 < 3; i49++) {
    acc = (acc + i49 * 13 + 599) % 100003;
  }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const ix51: number = buf.indexOf('p85');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1173) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const rc2: Rec85 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 23) { throw new Error('synthetic-8'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const rc10: Rec85 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  buf += 'coupon11-' + acc.toString();
  try { if (acc % 29 === 21) { throw new Error('synthetic-12'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q13:${acc % 97}`;
  acc = (acc * 31 + 4980) % 65521;
  for (let i15 = 0; i15 < 12; i15++) {
    acc = (acc + i15 * 13 + 712) % 100003;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-16'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 22) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 7) { throw new Error('synthetic-18'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  try { if (acc % 29 === 16) { throw new Error('synthetic-20'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  if (acc % 9 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  m01.set('k23', acc % 997);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 12) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  if (acc % 11 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  buf += `q28:${acc % 97}`;
  m01.set('k29', acc % 997);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  acc = acc + 823 - (acc % 52);
  try { if (acc % 29 === 21) { throw new Error('synthetic-33'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 148) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  if (acc % 15 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 61) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const rc39: Rec85 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  acc = (acc * 31 + 271) % 65521;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  acc = (acc * 31 + 2631) % 65521;
  acc = acc + 134 - (acc % 30);
  const rc44: Rec85 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += 'refund45-' + acc.toString();
  const rc46: Rec85 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const rc48: Rec85 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  m01.set('k49', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const rc51: Rec85 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1174) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  acc = (acc * 31 + 2150) % 65521;
  arr.push(acc % 1000);
  const rc2: Rec85 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  for (let i3 = 0; i3 < 3; i3++) {
    acc = (acc + i3 * 13 + 832) % 100003;
  }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  buf += `q5:${acc % 97}`;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  arr.push(acc % 1000);
  for (let i13 = 0; i13 < 10; i13++) {
    acc = (acc + i13 * 13 + 317) % 100003;
  }
  acc = acc + 623 - (acc % 91);
  arr.push(acc % 1000);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 90) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 3; i18++) {
    acc = (acc + i18 * 13 + 359) % 100003;
  }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  if (acc % 31 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const ix26: number = buf.indexOf('p85');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 13) { throw new Error('synthetic-30'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const rc32: Rec85 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 38) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  buf += 'crate37-' + acc.toString();
  const rc38: Rec85 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  acc = (acc * 31 + 6489) % 65521;
  for (let i42 = 0; i42 < 8; i42++) {
    acc = (acc + i42 * 13 + 964) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const rc45: Rec85 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  acc = acc + 918 - (acc % 97);
  acc = acc + 788 - (acc % 73);
  buf += `q49:${acc % 97}`;
  if (acc % 10 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1175) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  arr.push(acc % 1000);
  acc = (acc * 31 + 7554) % 65521;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  acc = acc + 995 - (acc % 40);
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  const ix5: number = buf.indexOf('p85');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  const ix7: number = buf.indexOf('p85');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 157) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  buf += 'stocktake9-' + acc.toString();
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  try { if (acc % 29 === 12) { throw new Error('synthetic-11'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 467 - (acc % 72);
  acc = acc + 965 - (acc % 23);
  m01.set('k14', acc % 997);
  if (acc % 15 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 142) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 992 - (acc % 75);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 181) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 87) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  if (acc % 23 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  try { if (acc % 29 === 18) { throw new Error('synthetic-28'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i29 = 0; i29 < 7; i29++) {
    acc = (acc + i29 * 13 + 955) % 100003;
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-31'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q32:${acc % 97}`;
  for (let i33 = 0; i33 < 12; i33++) {
    acc = (acc + i33 * 13 + 445) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 174) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'rebate35-' + acc.toString();
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  buf += `q37:${acc % 97}`;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  acc = acc + 123 - (acc % 44);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 83) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  for (let i41 = 0; i41 < 10; i41++) {
    acc = (acc + i41 * 13 + 233) % 100003;
  }
  if (acc % 14 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  m01.set('k43', acc % 997);
  m01.set('k44', acc % 997);
  arr.push(acc % 1000);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  acc = (acc * 31 + 5174) % 65521;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1176) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = (acc * 31 + 7230) % 65521;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  acc = (acc * 31 + 9534) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-7'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 5) { throw new Error('synthetic-9'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 121 - (acc % 10);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5982) % 65521;
  acc = acc + 111 - (acc % 47);
  for (let i14 = 0; i14 < 3; i14++) {
    acc = (acc + i14 * 13 + 549) % 100003;
  }
  m01.set('k15', acc % 997);
  acc = (acc * 31 + 589) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 48) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 710 - (acc % 76);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 129) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const ix21: number = buf.indexOf('p85');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-22'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'audit23-' + acc.toString();
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 173 - (acc % 8);
  buf += 'freight27-' + acc.toString();
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 69) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  if (acc % 14 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-31'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 34) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = (acc * 31 + 3335) % 65521;
  for (let i37 = 0; i37 < 7; i37++) {
    acc = (acc + i37 * 13 + 743) % 100003;
  }
  m01.set('k38', acc % 997);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  for (let i41 = 0; i41 < 11; i41++) {
    acc = (acc + i41 * 13 + 849) % 100003;
  }
  const rc42: Rec85 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  m01.set('k43', acc % 997);
  const ix44: number = buf.indexOf('p85');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  m01.set('k46', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-49'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 81) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1177) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  try { if (acc % 29 === 19) { throw new Error('synthetic-0'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 5 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  buf += 'rebate2-' + acc.toString();
  if (acc % 24 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  buf += `q5:${acc % 97}`;
  m01.set('k6', acc % 997);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  buf += `q8:${acc % 97}`;
  const ix9: number = buf.indexOf('p85');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  if (acc % 10 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const rc14: Rec85 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  m01.set('k15', acc % 997);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 146) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  buf += 'batch21-' + acc.toString();
  arr.push(acc % 1000);
  for (let i23 = 0; i23 < 7; i23++) {
    acc = (acc + i23 * 13 + 690) % 100003;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-24'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9412) % 65521;
  acc = acc + 528 - (acc % 68);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  for (let i28 = 0; i28 < 5; i28++) {
    acc = (acc + i28 * 13 + 170) % 100003;
  }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-33'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 54) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 5; i35++) {
    acc = (acc + i35 * 13 + 822) % 100003;
  }
  const ix36: number = buf.indexOf('p85');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix39: number = buf.indexOf('p85');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  for (let i40 = 0; i40 < 5; i40++) {
    acc = (acc + i40 * 13 + 26) % 100003;
  }
  const ix41: number = buf.indexOf('p85');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  acc = (acc * 31 + 3978) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-44'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const ix47: number = buf.indexOf('p85');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  for (let i48 = 0; i48 < 6; i48++) {
    acc = (acc + i48 * 13 + 298) % 100003;
  }
  buf += 'refund49-' + acc.toString();
  if (acc % 6 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const ix51: number = buf.indexOf('p85');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1178) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  const rc0: Rec85 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  for (let i1 = 0; i1 < 12; i1++) {
    acc = (acc + i1 * 13 + 764) % 100003;
  }
  arr.push(acc % 1000);
  const rc3: Rec85 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += `q4:${acc % 97}`;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = acc + 203 - (acc % 18);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 14) { throw new Error('synthetic-13'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 474) % 65521;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 115) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  acc = acc + 987 - (acc % 56);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  try { if (acc % 29 === 21) { throw new Error('synthetic-23'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-24'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 199) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  for (let i29 = 0; i29 < 12; i29++) {
    acc = (acc + i29 * 13 + 628) % 100003;
  }
  const ix30: number = buf.indexOf('p85');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  if (acc % 17 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  m01.set('k32', acc % 997);
  const rc33: Rec85 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 45) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 26 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  acc = (acc * 31 + 496) % 65521;
  acc = acc + 946 - (acc % 77);
  acc = acc + 993 - (acc % 46);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 161) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  for (let i42 = 0; i42 < 9; i42++) {
    acc = (acc + i42 * 13 + 679) % 100003;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-43'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i44 = 0; i44 < 4; i44++) {
    acc = (acc + i44 * 13 + 95) % 100003;
  }
  buf += `q45:${acc % 97}`;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  if (acc % 20 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-48'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const rc49: Rec85 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1179) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  acc = (acc * 31 + 8503) % 65521;
  acc = acc + 875 - (acc % 89);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const ix3: number = buf.indexOf('p85');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  m01.set('k4', acc % 997);
  buf += 'ledger5-' + acc.toString();
  try { if (acc % 29 === 6) { throw new Error('synthetic-6'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q7:${acc % 97}`;
  buf += 'shelf8-' + acc.toString();
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  acc = acc + 839 - (acc % 18);
  for (let i13 = 0; i13 < 12; i13++) {
    acc = (acc + i13 * 13 + 442) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 143) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 5; i18++) {
    acc = (acc + i18 * 13 + 860) % 100003;
  }
  const ix19: number = buf.indexOf('p85');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  buf += `q24:${acc % 97}`;
  acc = (acc * 31 + 9029) % 65521;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 94) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  buf += 'settle27-' + acc.toString();
  arr.push(acc % 1000);
  buf += 'dispatch29-' + acc.toString();
  if (acc % 31 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const ix33: number = buf.indexOf('p85');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 97) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 4; i35++) {
    acc = (acc + i35 * 13 + 467) % 100003;
  }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  for (let i37 = 0; i37 < 5; i37++) {
    acc = (acc + i37 * 13 + 434) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  m01.set('k40', acc % 997);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const ix42: number = buf.indexOf('p85');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const ix43: number = buf.indexOf('p85');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const ix46: number = buf.indexOf('p85');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 160) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 1170) % 65521;
  const ix50: number = buf.indexOf('p85');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  acc = acc + 904 - (acc % 42);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1180) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  buf += `q0:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const ix4: number = buf.indexOf('p85');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  buf += `q5:${acc % 97}`;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  buf += 'quota8-' + acc.toString();
  const rc9: Rec85 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  for (let i11 = 0; i11 < 5; i11++) {
    acc = (acc + i11 * 13 + 316) % 100003;
  }
  m01.set('k12', acc % 997);
  buf += 'region13-' + acc.toString();
  for (let i14 = 0; i14 < 8; i14++) {
    acc = (acc + i14 * 13 + 402) % 100003;
  }
  const ix15: number = buf.indexOf('p85');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 142) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  m01.set('k19', acc % 997);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  acc = acc + 761 - (acc % 20);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  if (acc % 6 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  m01.set('k27', acc % 997);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 77) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const ix33: number = buf.indexOf('p85');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 65) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec85 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  for (let i36 = 0; i36 < 8; i36++) {
    acc = (acc + i36 * 13 + 733) % 100003;
  }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 160) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const rc38: Rec85 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const ix40: number = buf.indexOf('p85');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const ix44: number = buf.indexOf('p85');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const rc46: Rec85 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  m01.set('k47', acc % 997);
  acc = (acc * 31 + 3280) % 65521;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1181) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const ix2: number = buf.indexOf('p85');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  m01.set('k3', acc % 997);
  arr.push(acc % 1000);
  buf += 'order5-' + acc.toString();
  if (acc % 6 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  m01.set('k7', acc % 997);
  acc = (acc * 31 + 9993) % 65521;
  const rc9: Rec85 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += `q10:${acc % 97}`;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  acc = acc + 936 - (acc % 42);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 127) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += `q14:${acc % 97}`;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  for (let i16 = 0; i16 < 4; i16++) {
    acc = (acc + i16 * 13 + 323) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 35) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q19:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  buf += 'transit23-' + acc.toString();
  buf += `q24:${acc % 97}`;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const ix26: number = buf.indexOf('p85');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  if (acc % 15 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 212) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-33'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 127) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 5480) % 65521;
  acc = (acc * 31 + 1620) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  acc = (acc * 31 + 7082) % 65521;
  buf += 'refund41-' + acc.toString();
  m01.set('k42', acc % 997);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  arr.push(acc % 1000);
  m01.set('k45', acc % 997);
  try { if (acc % 29 === 10) { throw new Error('synthetic-46'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 204 - (acc % 67);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  m01.set('k49', acc % 997);
  const rc50: Rec85 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 179) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0085_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0085_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0085_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1182) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  const ix0: number = buf.indexOf('p85');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  if (acc % 12 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const rc2: Rec85 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const rc3: Rec85 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  try { if (acc % 29 === 13) { throw new Error('synthetic-5'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-8'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 119) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  acc = acc + 480 - (acc % 73);
  arr.push(acc % 1000);
  if (acc % 22 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 189) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  acc = (acc * 31 + 4736) % 65521;
  const ix20: number = buf.indexOf('p85');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const ix22: number = buf.indexOf('p85');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  if (acc % 12 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  const ix24: number = buf.indexOf('p85');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  m01.set('k27', acc % 997);
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  acc = acc + 635 - (acc % 83);
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 79) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  arr.push(acc % 1000);
  acc = (acc * 31 + 2776) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 114) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 28 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const ix38: number = buf.indexOf('p85');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  buf += 'waybill39-' + acc.toString();
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  acc = acc + 879 - (acc % 49);
  for (let i42 = 0; i42 < 6; i42++) {
    acc = (acc + i42 * 13 + 55) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  try { if (acc % 29 === 22) { throw new Error('synthetic-44'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i45 = 0; i45 < 6; i45++) {
    acc = (acc + i45 * 13 + 268) % 100003;
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 112) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const ix47: number = buf.indexOf('p85');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const ix48: number = buf.indexOf('p85');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 68) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  acc = acc + 933 - (acc % 81);
  const ix51: number = buf.indexOf('p85');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1183) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-4'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k5', acc % 997);
  for (let i6 = 0; i6 < 11; i6++) {
    acc = (acc + i6 * 13 + 801) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  for (let i10 = 0; i10 < 11; i10++) {
    acc = (acc + i10 * 13 + 533) % 100003;
  }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  m01.set('k12', acc % 997);
  if (acc % 12 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  for (let i15 = 0; i15 < 6; i15++) {
    acc = (acc + i15 * 13 + 628) % 100003;
  }
  buf += 'batch16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 145) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2978) % 65521;
  const ix21: number = buf.indexOf('p85');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  for (let i22 = 0; i22 < 5; i22++) {
    acc = (acc + i22 * 13 + 690) % 100003;
  }
  if (acc % 5 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  m01.set('k24', acc % 997);
  m01.set('k25', acc % 997);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  m01.set('k28', acc % 997);
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const ix30: number = buf.indexOf('p85');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 44) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p85');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const rc37: Rec85 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 28) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += 'client42-' + acc.toString();
  const ix43: number = buf.indexOf('p85');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const rc47: Rec85 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 82) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  arr.push(acc % 1000);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1184) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  buf += 'warehouse0-' + acc.toString();
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const rc2: Rec85 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  buf += `q3:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += 'freight5-' + acc.toString();
  const ix6: number = buf.indexOf('p85');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-8'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 355 - (acc % 28);
  const ix10: number = buf.indexOf('p85');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  for (let i12 = 0; i12 < 8; i12++) {
    acc = (acc + i12 * 13 + 692) % 100003;
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const ix14: number = buf.indexOf('p85');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const ix15: number = buf.indexOf('p85');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 183) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec85 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  if (acc % 28 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 81) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  try { if (acc % 29 === 3) { throw new Error('synthetic-24'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8279) % 65521;
  acc = (acc * 31 + 4053) % 65521;
  for (let i27 = 0; i27 < 3; i27++) {
    acc = (acc + i27 * 13 + 160) % 100003;
  }
  for (let i28 = 0; i28 < 4; i28++) {
    acc = (acc + i28 * 13 + 573) % 100003;
  }
  if (acc % 14 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const ix32: number = buf.indexOf('p85');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 122) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += `q36:${acc % 97}`;
  acc = (acc * 31 + 6894) % 65521;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 176) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  m01.set('k39', acc % 997);
  acc = acc + 501 - (acc % 9);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 69) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  for (let i44 = 0; i44 < 7; i44++) {
    acc = (acc + i44 * 13 + 119) % 100003;
  }
  acc = (acc * 31 + 6089) % 65521;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  acc = acc + 962 - (acc % 56);
  try { if (acc % 29 === 17) { throw new Error('synthetic-50'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const ix51: number = buf.indexOf('p85');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1185) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  acc = (acc * 31 + 4883) % 65521;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const rc3: Rec85 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += 'invoice4-' + acc.toString();
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 143) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  buf += `q8:${acc % 97}`;
  m01.set('k9', acc % 997);
  buf += `q10:${acc % 97}`;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const rc12: Rec85 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  acc = acc + 944 - (acc % 51);
  try { if (acc % 29 === 21) { throw new Error('synthetic-16'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 100) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 25 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8017) % 65521;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 13) { throw new Error('synthetic-21'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 118) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-23'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  try { if (acc % 29 === 6) { throw new Error('synthetic-25'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  acc = (acc * 31 + 1411) % 65521;
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 179) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const ix31: number = buf.indexOf('p85');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  acc = (acc * 31 + 2218) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 182) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  for (let i40 = 0; i40 < 5; i40++) {
    acc = (acc + i40 * 13 + 666) % 100003;
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 92) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k45', acc % 997);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 123) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1186) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  for (let i0 = 0; i0 < 12; i0++) {
    acc = (acc + i0 * 13 + 893) % 100003;
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  m01.set('k6', acc % 997);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += `q8:${acc % 97}`;
  acc = acc + 365 - (acc % 73);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (acc % 15 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-13'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 133) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  if (acc % 14 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 110) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'audit18-' + acc.toString();
  m01.set('k19', acc % 997);
  if (acc % 24 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const ix21: number = buf.indexOf('p85');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  arr.push(acc % 1000);
  acc = acc + 708 - (acc % 16);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const ix27: number = buf.indexOf('p85');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  for (let i28 = 0; i28 < 10; i28++) {
    acc = (acc + i28 * 13 + 184) % 100003;
  }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const rc31: Rec85 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  buf += 'order32-' + acc.toString();
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 34) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const ix36: number = buf.indexOf('p85');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  m01.set('k38', acc % 997);
  const rc39: Rec85 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 128) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const rc43: Rec85 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const rc44: Rec85 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const ix48: number = buf.indexOf('p85');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = acc + 201 - (acc % 22);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 150) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1187) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 40) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  arr.push(acc % 1000);
  buf += `q3:${acc % 97}`;
  try { if (acc % 29 === 23) { throw new Error('synthetic-4'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  for (let i6 = 0; i6 < 7; i6++) {
    acc = (acc + i6 * 13 + 490) % 100003;
  }
  if (acc % 11 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += `q9:${acc % 97}`;
  try { if (acc % 29 === 12) { throw new Error('synthetic-10'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 18 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  for (let i12 = 0; i12 < 6; i12++) {
    acc = (acc + i12 * 13 + 28) % 100003;
  }
  buf += `q13:${acc % 97}`;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  buf += 'tariff15-' + acc.toString();
  const rc16: Rec85 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 45) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 1177) % 65521;
  arr.push(acc % 1000);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  if (acc % 30 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  arr.push(acc % 1000);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 90) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const ix26: number = buf.indexOf('p85');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  acc = (acc * 31 + 3521) % 65521;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  if (acc % 13 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  acc = acc + 340 - (acc % 10);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 161) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  acc = acc + 786 - (acc % 66);
  try { if (acc % 29 === 9) { throw new Error('synthetic-37'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-38'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i39 = 0; i39 < 12; i39++) {
    acc = (acc + i39 * 13 + 186) % 100003;
  }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 52) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 171) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  const ix43: number = buf.indexOf('p85');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  m01.set('k47', acc % 997);
  const ix48: number = buf.indexOf('p85');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += 'coupon49-' + acc.toString();
  buf += `q50:${acc % 97}`;
  try { if (acc % 29 === 19) { throw new Error('synthetic-51'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1188) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  for (let i4 = 0; i4 < 11; i4++) {
    acc = (acc + i4 * 13 + 691) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  buf += 'parcel6-' + acc.toString();
  const ix7: number = buf.indexOf('p85');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const rc8: Rec85 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 82) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  buf += 'pickup10-' + acc.toString();
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 44) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const rc16: Rec85 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 35) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 120) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  arr.push(acc % 1000);
  if (acc % 5 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (acc % 5 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  for (let i30 = 0; i30 < 4; i30++) {
    acc = (acc + i30 * 13 + 207) % 100003;
  }
  buf += `q31:${acc % 97}`;
  const rc32: Rec85 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = acc + 277 - (acc % 74);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 71) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  buf += `q37:${acc % 97}`;
  const rc38: Rec85 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  try { if (acc % 29 === 22) { throw new Error('synthetic-39'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-40'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'pickup41-' + acc.toString();
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  if (acc % 17 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-44'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 25 - (acc % 24);
  if (acc % 12 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1456) % 65521;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-49'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 767 - (acc % 82);
  try { if (acc % 29 === 3) { throw new Error('synthetic-51'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1189) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  acc = acc + 730 - (acc % 29);
  m01.set('k1', acc % 997);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  m01.set('k3', acc % 997);
  try { if (acc % 29 === 13) { throw new Error('synthetic-4'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 98) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  buf += `q8:${acc % 97}`;
  if (acc % 7 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  acc = acc + 591 - (acc % 89);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  if (acc % 7 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i15 = 0; i15 < 10; i15++) {
    acc = (acc + i15 * 13 + 677) % 100003;
  }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 113) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p85');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 6815) % 65521;
  for (let i20 = 0; i20 < 5; i20++) {
    acc = (acc + i20 * 13 + 652) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const rc22: Rec85 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  try { if (acc % 29 === 2) { throw new Error('synthetic-23'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'payout24-' + acc.toString();
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k27', acc % 997);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 5) { throw new Error('synthetic-30'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 583 - (acc % 76);
  if (acc % 23 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 148) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  for (let i36 = 0; i36 < 5; i36++) {
    acc = (acc + i36 * 13 + 18) % 100003;
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-37'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 180) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const ix41: number = buf.indexOf('p85');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  buf += 'tariff42-' + acc.toString();
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  buf += 'pallet44-' + acc.toString();
  for (let i45 = 0; i45 < 10; i45++) {
    acc = (acc + i45 * 13 + 571) % 100003;
  }
  const rc46: Rec85 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const rc47: Rec85 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  try { if (acc % 29 === 15) { throw new Error('synthetic-48'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const rc51: Rec85 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1190) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  m01.set('k0', acc % 997);
  if (acc % 20 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const ix2: number = buf.indexOf('p85');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  buf += 'vendor3-' + acc.toString();
  buf += `q4:${acc % 97}`;
  m01.set('k5', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  acc = (acc * 31 + 9460) % 65521;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 100) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  buf += `q11:${acc % 97}`;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  acc = acc + 266 - (acc % 76);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 93) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 4) { throw new Error('synthetic-18'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 42) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 16) { throw new Error('synthetic-22'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'tariff23-' + acc.toString();
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  m01.set('k28', acc % 997);
  for (let i29 = 0; i29 < 9; i29++) {
    acc = (acc + i29 * 13 + 230) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 111) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-32'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-33'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 114) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 3388) % 65521;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  arr.push(acc % 1000);
  for (let i38 = 0; i38 < 6; i38++) {
    acc = (acc + i38 * 13 + 137) % 100003;
  }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += 'tariff40-' + acc.toString();
  if (acc % 27 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const ix43: number = buf.indexOf('p85');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 105) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = acc + 185 - (acc % 55);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  acc = acc + 534 - (acc % 19);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1191) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const ix3: number = buf.indexOf('p85');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  arr.push(acc % 1000);
  m01.set('k6', acc % 997);
  try { if (acc % 29 === 20) { throw new Error('synthetic-7'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  arr.push(acc % 1000);
  const ix10: number = buf.indexOf('p85');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3126) % 65521;
  acc = (acc * 31 + 1532) % 65521;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 55) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'shelf18-' + acc.toString();
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 114) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 156) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 15) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  m01.set('k24', acc % 997);
  for (let i25 = 0; i25 < 12; i25++) {
    acc = (acc + i25 * 13 + 988) % 100003;
  }
  for (let i26 = 0; i26 < 3; i26++) {
    acc = (acc + i26 * 13 + 710) % 100003;
  }
  const rc27: Rec85 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const ix28: number = buf.indexOf('p85');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  buf += `q30:${acc % 97}`;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 56) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  buf += 'ledger32-' + acc.toString();
  try { if (acc % 29 === 5) { throw new Error('synthetic-33'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 190) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  if (acc % 11 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  m01.set('k41', acc % 997);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const ix47: number = buf.indexOf('p85');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 3369) % 65521;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0085_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0085_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0085_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1192) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  const rc3: Rec85 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  for (let i4 = 0; i4 < 4; i4++) {
    acc = (acc + i4 * 13 + 330) % 100003;
  }
  if (acc % 15 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const ix6: number = buf.indexOf('p85');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  m01.set('k7', acc % 997);
  acc = acc + 133 - (acc % 24);
  m01.set('k9', acc % 997);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  arr.push(acc % 1000);
  try { if (acc % 29 === 7) { throw new Error('synthetic-16'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 134) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  m01.set('k21', acc % 997);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  const ix24: number = buf.indexOf('p85');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  buf += `q25:${acc % 97}`;
  for (let i26 = 0; i26 < 7; i26++) {
    acc = (acc + i26 * 13 + 533) % 100003;
  }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  if (acc % 26 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = (acc * 31 + 7790) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 12) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p85');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  for (let i36 = 0; i36 < 5; i36++) {
    acc = (acc + i36 * 13 + 851) % 100003;
  }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  buf += `q39:${acc % 97}`;
  if (acc % 11 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const ix41: number = buf.indexOf('p85');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  buf += 'order42-' + acc.toString();
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const rc46: Rec85 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  for (let i47 = 0; i47 < 9; i47++) {
    acc = (acc + i47 * 13 + 256) % 100003;
  }
  for (let i48 = 0; i48 < 11; i48++) {
    acc = (acc + i48 * 13 + 846) % 100003;
  }
  const ix49: number = buf.indexOf('p85');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 190) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 102) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1193) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  acc = (acc * 31 + 3751) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  m01.set('k3', acc % 997);
  m01.set('k4', acc % 997);
  acc = (acc * 31 + 5841) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-6'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += 'customs8-' + acc.toString();
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  m01.set('k10', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  m01.set('k13', acc % 997);
  acc = (acc * 31 + 8291) % 65521;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 185) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  buf += 'freight20-' + acc.toString();
  for (let i21 = 0; i21 < 8; i21++) {
    acc = (acc + i21 * 13 + 801) % 100003;
  }
  const rc22: Rec85 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const rc23: Rec85 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (acc % 15 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  m01.set('k26', acc % 997);
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const rc29: Rec85 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  m01.set('k30', acc % 997);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 89) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i38 = 0; i38 < 5; i38++) {
    acc = (acc + i38 * 13 + 856) % 100003;
  }
  if (acc % 7 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-40'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 92) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  m01.set('k42', acc % 997);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  buf += 'transit44-' + acc.toString();
  const ix45: number = buf.indexOf('p85');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  m01.set('k46', acc % 997);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 142) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const rc48: Rec85 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const ix49: number = buf.indexOf('p85');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1194) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  arr.push(acc % 1000);
  if (acc % 11 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  acc = acc + 222 - (acc % 31);
  buf += `q5:${acc % 97}`;
  const rc6: Rec85 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 151) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 95) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-11'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  for (let i14 = 0; i14 < 8; i14++) {
    acc = (acc + i14 * 13 + 416) % 100003;
  }
  if (acc % 24 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 129) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 11; i18++) {
    acc = (acc + i18 * 13 + 577) % 100003;
  }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  acc = (acc * 31 + 9012) % 65521;
  if (acc % 14 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 193) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 86) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const rc26: Rec85 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-28'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-29'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k30', acc % 997);
  acc = acc + 543 - (acc % 89);
  try { if (acc % 29 === 20) { throw new Error('synthetic-32'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 31 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 177) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  m01.set('k36', acc % 997);
  if (acc % 29 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 51) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  for (let i40 = 0; i40 < 6; i40++) {
    acc = (acc + i40 * 13 + 163) % 100003;
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-41'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-42'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  buf += `q44:${acc % 97}`;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-48'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1847) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1195) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  for (let i2 = 0; i2 < 5; i2++) {
    acc = (acc + i2 * 13 + 237) % 100003;
  }
  arr.push(acc % 1000);
  const rc4: Rec85 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  if (acc % 13 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  m01.set('k9', acc % 997);
  for (let i10 = 0; i10 < 7; i10++) {
    acc = (acc + i10 * 13 + 325) % 100003;
  }
  if (acc % 19 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  if (acc % 24 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  m01.set('k14', acc % 997);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 41) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 155) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const rc19: Rec85 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  buf += 'shelf20-' + acc.toString();
  for (let i21 = 0; i21 < 11; i21++) {
    acc = (acc + i21 * 13 + 77) % 100003;
  }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 141) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  buf += `q25:${acc % 97}`;
  buf += 'carrier26-' + acc.toString();
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const rc28: Rec85 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  const ix30: number = buf.indexOf('p85');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 185) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec85 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  buf += 'customs36-' + acc.toString();
  arr.push(acc % 1000);
  if (acc % 9 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  try { if (acc % 29 === 18) { throw new Error('synthetic-41'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'bay42-' + acc.toString();
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const rc45: Rec85 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  m01.set('k47', acc % 997);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 152) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += 'balance51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1196) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  try { if (acc % 29 === 6) { throw new Error('synthetic-0'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 189) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-2'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 22 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  buf += 'settle4-' + acc.toString();
  acc = acc + 282 - (acc % 55);
  m01.set('k6', acc % 997);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  m01.set('k8', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 93) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  if (acc % 19 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 563) % 100003;
  }
  acc = (acc * 31 + 5875) % 65521;
  arr.push(acc % 1000);
  buf += 'balance15-' + acc.toString();
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 32) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  for (let i19 = 0; i19 < 7; i19++) {
    acc = (acc + i19 * 13 + 286) % 100003;
  }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 88) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const ix21: number = buf.indexOf('p85');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  acc = acc + 965 - (acc % 72);
  m01.set('k24', acc % 997);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += `q29:${acc % 97}`;
  buf += 'order30-' + acc.toString();
  buf += `q31:${acc % 97}`;
  const rc32: Rec85 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  for (let i33 = 0; i33 < 6; i33++) {
    acc = (acc + i33 * 13 + 967) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 70) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  if (acc % 12 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += 'depot37-' + acc.toString();
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  for (let i39 = 0; i39 < 5; i39++) {
    acc = (acc + i39 * 13 + 810) % 100003;
  }
  buf += 'balance40-' + acc.toString();
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 58) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = acc + 491 - (acc % 83);
  try { if (acc % 29 === 8) { throw new Error('synthetic-43'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  const rc44: Rec85 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  arr.push(acc % 1000);
  buf += 'pallet46-' + acc.toString();
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  arr.push(acc % 1000);
  for (let i49 = 0; i49 < 9; i49++) {
    acc = (acc + i49 * 13 + 34) % 100003;
  }
  for (let i50 = 0; i50 < 9; i50++) {
    acc = (acc + i50 * 13 + 841) % 100003;
  }
  const rc51: Rec85 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1197) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  const rc0: Rec85 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 12) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  m01.set('k6', acc % 997);
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  if (acc % 9 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  arr.push(acc % 1000);
  for (let i12 = 0; i12 < 11; i12++) {
    acc = (acc + i12 * 13 + 916) % 100003;
  }
  buf += 'bay13-' + acc.toString();
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 199) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 95) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 150) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 9646) % 65521;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  if (acc % 27 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  buf += 'warehouse25-' + acc.toString();
  m01.set('k26', acc % 997);
  const ix27: number = buf.indexOf('p85');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  buf += `q28:${acc % 97}`;
  m01.set('k29', acc % 997);
  const rc30: Rec85 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  acc = (acc * 31 + 8144) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 81) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = acc + 746 - (acc % 57);
  acc = (acc * 31 + 5462) % 65521;
  m01.set('k39', acc % 997);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  try { if (acc % 29 === 11) { throw new Error('synthetic-41'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (acc % 22 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += `q46:${acc % 97}`;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 2) { throw new Error('synthetic-48'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1198) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  acc = (acc * 31 + 201) % 65521;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const ix2: number = buf.indexOf('p85');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-3'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k4', acc % 997);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += 'invoice8-' + acc.toString();
  const ix9: number = buf.indexOf('p85');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  buf += `q10:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  acc = acc + 53 - (acc % 42);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 15) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-15'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const rc16: Rec85 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 46) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  acc = (acc * 31 + 6775) % 65521;
  const rc20: Rec85 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  buf += `q21:${acc % 97}`;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-23'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  try { if (acc % 29 === 10) { throw new Error('synthetic-26'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  buf += 'audit29-' + acc.toString();
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const rc31: Rec85 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  buf += `q32:${acc % 97}`;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 12) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 471 - (acc % 55);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const rc37: Rec85 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 149) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  if (acc % 18 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  buf += 'batch40-' + acc.toString();
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 68) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  buf += 'customs43-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  buf += 'carrier46-' + acc.toString();
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 65) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1199) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  buf += `q0:${acc % 97}`;
  const rc1: Rec85 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  m01.set('k3', acc % 997);
  arr.push(acc % 1000);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = acc + 295 - (acc % 44);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  m01.set('k11', acc % 997);
  for (let i12 = 0; i12 < 6; i12++) {
    acc = (acc + i12 * 13 + 582) % 100003;
  }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const ix14: number = buf.indexOf('p85');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-15'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const ix16: number = buf.indexOf('p85');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 166) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  arr.push(acc % 1000);
  if (acc % 24 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  buf += `q21:${acc % 97}`;
  acc = (acc * 31 + 4557) % 65521;
  const rc23: Rec85 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  arr.push(acc % 1000);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-26'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 6 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  for (let i29 = 0; i29 < 5; i29++) {
    acc = (acc + i29 * 13 + 238) % 100003;
  }
  for (let i30 = 0; i30 < 7; i30++) {
    acc = (acc + i30 * 13 + 587) % 100003;
  }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 171) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  m01.set('k36', acc % 997);
  m01.set('k37', acc % 997);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  if (acc % 28 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-43'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'coupon44-' + acc.toString();
  const rc45: Rec85 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  if (acc % 13 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 68) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 139) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 583 - (acc % 70);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1200) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const ix2: number = buf.indexOf('p85');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const ix3: number = buf.indexOf('p85');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const rc4: Rec85 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  acc = (acc * 31 + 9447) % 65521;
  const ix7: number = buf.indexOf('p85');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  buf += `q8:${acc % 97}`;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 6) { throw new Error('synthetic-11'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8349) % 65521;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 20) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  acc = (acc * 31 + 5948) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 29) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  buf += `q19:${acc % 97}`;
  for (let i20 = 0; i20 < 10; i20++) {
    acc = (acc + i20 * 13 + 735) % 100003;
  }
  if (acc % 30 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  buf += 'policy23-' + acc.toString();
  const rc24: Rec85 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  buf += `q26:${acc % 97}`;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  for (let i28 = 0; i28 < 10; i28++) {
    acc = (acc + i28 * 13 + 84) % 100003;
  }
  const ix29: number = buf.indexOf('p85');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  buf += 'payout31-' + acc.toString();
  const ix32: number = buf.indexOf('p85');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += 'warehouse33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 190) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const rc36: Rec85 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 104) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  acc = (acc * 31 + 6008) % 65521;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  arr.push(acc % 1000);
  m01.set('k43', acc % 997);
  acc = (acc * 31 + 8659) % 65521;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 89) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  buf += `q47:${acc % 97}`;
  acc = (acc * 31 + 1131) % 65521;
  acc = acc + 861 - (acc % 18);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1201) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  const ix0: number = buf.indexOf('p85');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  buf += `q2:${acc % 97}`;
  m01.set('k3', acc % 997);
  try { if (acc % 29 === 6) { throw new Error('synthetic-4'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k5', acc % 997);
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  buf += 'customs7-' + acc.toString();
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 172) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = acc + 543 - (acc % 93);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 71) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  acc = (acc * 31 + 6967) % 65521;
  arr.push(acc % 1000);
  buf += `q15:${acc % 97}`;
  try { if (acc % 29 === 18) { throw new Error('synthetic-16'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 60) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 5642) % 65521;
  try { if (acc % 29 === 5) { throw new Error('synthetic-19'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 481 - (acc % 57);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  for (let i24 = 0; i24 < 8; i24++) {
    acc = (acc + i24 * 13 + 625) % 100003;
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const rc27: Rec85 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const rc29: Rec85 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  acc = acc + 29 - (acc % 87);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 46) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 103) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-36'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'journey37-' + acc.toString();
  buf += `q38:${acc % 97}`;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 84) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  buf += `q41:${acc % 97}`;
  buf += `q42:${acc % 97}`;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  if (acc % 29 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  try { if (acc % 29 === 15) { throw new Error('synthetic-47'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-49'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0085_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0085_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0085_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1202) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  m01.set('k1', acc % 997);
  if (acc % 15 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  buf += `q3:${acc % 97}`;
  acc = acc + 660 - (acc % 73);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  arr.push(acc % 1000);
  if (acc % 8 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const ix9: number = buf.indexOf('p85');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 119) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  for (let i12 = 0; i12 < 8; i12++) {
    acc = (acc + i12 * 13 + 423) % 100003;
  }
  acc = acc + 314 - (acc % 81);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  acc = acc + 118 - (acc % 28);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 157) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const rc19: Rec85 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  for (let i20 = 0; i20 < 11; i20++) {
    acc = (acc + i20 * 13 + 61) % 100003;
  }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  arr.push(acc % 1000);
  for (let i23 = 0; i23 < 11; i23++) {
    acc = (acc + i23 * 13 + 115) % 100003;
  }
  buf += `q24:${acc % 97}`;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  acc = (acc * 31 + 9104) % 65521;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  acc = acc + 167 - (acc % 82);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (acc % 5 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 41) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  buf += `q37:${acc % 97}`;
  acc = (acc * 31 + 2469) % 65521;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  m01.set('k41', acc % 997);
  const ix42: number = buf.indexOf('p85');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  buf += 'stocktake43-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  for (let i48 = 0; i48 < 12; i48++) {
    acc = (acc + i48 * 13 + 337) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (acc % 21 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1203) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  buf += 'audit0-' + acc.toString();
  const rc1: Rec85 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  buf += `q6:${acc % 97}`;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  buf += `q8:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (acc % 21 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  buf += 'balance12-' + acc.toString();
  acc = acc + 611 - (acc % 42);
  arr.push(acc % 1000);
  acc = acc + 948 - (acc % 55);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 97) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  const ix19: number = buf.indexOf('p85');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = acc + 315 - (acc % 82);
  if (acc % 17 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  buf += `q23:${acc % 97}`;
  arr.push(acc % 1000);
  buf += `q25:${acc % 97}`;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 154) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  acc = (acc * 31 + 9283) % 65521;
  m01.set('k30', acc % 997);
  if (acc % 27 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 39) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 177 - (acc % 52);
  m01.set('k36', acc % 997);
  buf += `q37:${acc % 97}`;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 84) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 171) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 21) { throw new Error('synthetic-43'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 2263) % 65521;
  buf += 'crate45-' + acc.toString();
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 122) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  acc = acc + 254 - (acc % 49);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 199) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const ix51: number = buf.indexOf('p85');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0085_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 1204) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit85 = new Unit85(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  if (acc % 7 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 116) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  buf += 'balance6-' + acc.toString();
  const rc7: Rec85 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  m01.set('k8', acc % 997);
  acc = acc + 68 - (acc % 86);
  const ix10: number = buf.indexOf('p85');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 133) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 184) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  buf += 'batch19-' + acc.toString();
  acc = acc + 991 - (acc % 12);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const rc23: Rec85 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  buf += `q24:${acc % 97}`;
  m01.set('k25', acc % 997);
  m01.set('k26', acc % 997);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  for (let i28 = 0; i28 < 11; i28++) {
    acc = (acc + i28 * 13 + 527) % 100003;
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-29'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const rc31: Rec85 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 145) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  const ix36: number = buf.indexOf('p85');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  if (acc % 23 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  buf += 'transit38-' + acc.toString();
  buf += `q39:${acc % 97}`;
  buf += 'depot40-' + acc.toString();
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 56) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  acc = acc + 575 - (acc % 17);
  const ix45: number = buf.indexOf('p85');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-46'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-47'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-49'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 22) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0085(): BizFn[] {
  return [biz_0085_00, biz_0085_01, biz_0085_02, biz_0085_03, biz_0085_04, biz_0085_05, biz_0085_06, biz_0085_07, biz_0085_08, biz_0085_09, biz_0085_10, biz_0085_11, biz_0085_12, biz_0085_13, biz_0085_14, biz_0085_15, biz_0085_16, biz_0085_17, biz_0085_18, biz_0085_19, biz_0085_20, biz_0085_21, biz_0085_22, biz_0085_23, biz_0085_24, biz_0085_25, biz_0085_26, biz_0085_27, biz_0085_28, biz_0085_29, biz_0085_30, biz_0085_31, biz_0085_32, biz_0085_33, biz_0085_34, biz_0085_35, biz_0085_36, biz_0085_37, biz_0085_38, biz_0085_39, biz_0085_40, biz_0085_41, biz_0085_42];
}

export function rega_0085(): ABizFn[] {
  return [biz_0085_09a, biz_0085_19a, biz_0085_29a, biz_0085_39a];
}
