// Biz0022.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec22 { id: number; tag: string; score: number; }

class Unit22 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0022_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2882) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  acc = acc + 500 - (acc % 78);
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  buf += 'pallet5-' + acc.toString();
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const ix8: number = buf.indexOf('p22');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  buf += 'invoice9-' + acc.toString();
  const rc10: Rec22 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  buf += `q11:${acc % 97}`;
  acc = acc + 141 - (acc % 40);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  try { if (acc % 29 === 3) { throw new Error('synthetic-16'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 78) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += `q19:${acc % 97}`;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  buf += 'portal22-' + acc.toString();
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  buf += `q24:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  for (let i26 = 0; i26 < 8; i26++) {
    acc = (acc + i26 * 13 + 833) % 100003;
  }
  buf += `q27:${acc % 97}`;
  if (acc % 14 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += 'policy30-' + acc.toString();
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  acc = acc + 286 - (acc % 79);
  try { if (acc % 29 === 10) { throw new Error('synthetic-33'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 85) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-35'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const rc38: Rec22 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const ix39: number = buf.indexOf('p22');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const rc40: Rec22 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const rc44: Rec22 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  for (let i45 = 0; i45 < 4; i45++) {
    acc = (acc + i45 * 13 + 681) % 100003;
  }
  const ix46: number = buf.indexOf('p22');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  for (let i49 = 0; i49 < 10; i49++) {
    acc = (acc + i49 * 13 + 884) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const rc51: Rec22 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2883) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  const ix0: number = buf.indexOf('p22');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const ix2: number = buf.indexOf('p22');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += 'customs4-' + acc.toString();
  if (acc % 10 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  for (let i6 = 0; i6 < 6; i6++) {
    acc = (acc + i6 * 13 + 352) % 100003;
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  for (let i8 = 0; i8 < 12; i8++) {
    acc = (acc + i8 * 13 + 816) % 100003;
  }
  if (acc % 9 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = (acc * 31 + 3015) % 65521;
  acc = acc + 183 - (acc % 15);
  buf += 'balance12-' + acc.toString();
  acc = acc + 484 - (acc % 28);
  for (let i14 = 0; i14 < 4; i14++) {
    acc = (acc + i14 * 13 + 252) % 100003;
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 142) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  buf += `q19:${acc % 97}`;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4691) % 65521;
  const ix23: number = buf.indexOf('p22');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  for (let i27 = 0; i27 < 3; i27++) {
    acc = (acc + i27 * 13 + 550) % 100003;
  }
  buf += 'stocktake28-' + acc.toString();
  for (let i29 = 0; i29 < 12; i29++) {
    acc = (acc + i29 * 13 + 825) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  m01.set('k31', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const rc33: Rec22 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 181) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = acc + 274 - (acc % 55);
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-40'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'tariff48-' + acc.toString();
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2884) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  acc = (acc * 31 + 6953) % 65521;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 144) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 196) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = (acc * 31 + 4166) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  for (let i7 = 0; i7 < 10; i7++) {
    acc = (acc + i7 * 13 + 687) % 100003;
  }
  acc = (acc * 31 + 3084) % 65521;
  for (let i9 = 0; i9 < 9; i9++) {
    acc = (acc + i9 * 13 + 795) % 100003;
  }
  acc = (acc * 31 + 6246) % 65521;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  buf += 'freight12-' + acc.toString();
  try { if (acc % 29 === 22) { throw new Error('synthetic-13'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  m01.set('k15', acc % 997);
  const ix16: number = buf.indexOf('p22');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 46) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 6437) % 65521;
  m01.set('k19', acc % 997);
  buf += `q20:${acc % 97}`;
  buf += 'crate21-' + acc.toString();
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  m01.set('k23', acc % 997);
  try { if (acc % 29 === 5) { throw new Error('synthetic-24'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  if (acc % 27 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 21) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  buf += 'rebate28-' + acc.toString();
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  for (let i30 = 0; i30 < 7; i30++) {
    acc = (acc + i30 * 13 + 474) % 100003;
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 74) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-37'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 974 - (acc % 51);
  const rc39: Rec22 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const ix41: number = buf.indexOf('p22');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  acc = acc + 603 - (acc % 67);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 75) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = acc + 633 - (acc % 15);
  m01.set('k45', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 8119) % 65521;
  const rc48: Rec22 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  try { if (acc % 29 === 3) { throw new Error('synthetic-50'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2885) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  m01.set('k0', acc % 997);
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  for (let i3 = 0; i3 < 9; i3++) {
    acc = (acc + i3 * 13 + 364) % 100003;
  }
  m01.set('k4', acc % 997);
  buf += 'dispatch5-' + acc.toString();
  acc = (acc * 31 + 9501) % 65521;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  acc = acc + 449 - (acc % 56);
  buf += `q9:${acc % 97}`;
  try { if (acc % 29 === 11) { throw new Error('synthetic-10'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 1282) % 65521;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  buf += 'refund13-' + acc.toString();
  acc = acc + 567 - (acc % 91);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 112) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const rc20: Rec22 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  acc = acc + 966 - (acc % 15);
  const ix24: number = buf.indexOf('p22');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  buf += 'depot25-' + acc.toString();
  try { if (acc % 29 === 11) { throw new Error('synthetic-26'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 815 - (acc % 8);
  const ix28: number = buf.indexOf('p22');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const rc32: Rec22 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 99) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  try { if (acc % 29 === 10) { throw new Error('synthetic-37'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  arr.push(acc % 1000);
  const rc40: Rec22 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const ix41: number = buf.indexOf('p22');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  m01.set('k42', acc % 997);
  acc = (acc * 31 + 9779) % 65521;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const rc45: Rec22 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const ix47: number = buf.indexOf('p22');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const ix49: number = buf.indexOf('p22');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += 'tariff51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2886) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  for (let i0 = 0; i0 < 5; i0++) {
    acc = (acc + i0 * 13 + 570) % 100003;
  }
  acc = (acc * 31 + 110) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const rc3: Rec22 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  m01.set('k4', acc % 997);
  buf += `q5:${acc % 97}`;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  acc = acc + 252 - (acc % 78);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 195) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  acc = acc + 620 - (acc % 88);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  for (let i15 = 0; i15 < 12; i15++) {
    acc = (acc + i15 * 13 + 476) % 100003;
  }
  acc = acc + 19 - (acc % 10);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 137) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec22 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  try { if (acc % 29 === 23) { throw new Error('synthetic-19'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 458 - (acc % 23);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 67) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 94) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  m01.set('k24', acc % 997);
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const rc26: Rec22 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  if (acc % 14 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  buf += `q31:${acc % 97}`;
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 115) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 130) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (acc % 29 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const ix42: number = buf.indexOf('p22');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-43'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const rc44: Rec22 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += 'balance45-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  m01.set('k48', acc % 997);
  const rc49: Rec22 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2887) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += `q2:${acc % 97}`;
  for (let i3 = 0; i3 < 10; i3++) {
    acc = (acc + i3 * 13 + 228) % 100003;
  }
  if (acc % 7 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const ix5: number = buf.indexOf('p22');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  buf += 'carrier6-' + acc.toString();
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8878) % 65521;
  const rc11: Rec22 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  acc = (acc * 31 + 4417) % 65521;
  acc = acc + 300 - (acc % 87);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = (acc * 31 + 1426) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 183) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 12; i18++) {
    acc = (acc + i18 * 13 + 107) % 100003;
  }
  buf += 'refund19-' + acc.toString();
  try { if (acc % 29 === 13) { throw new Error('synthetic-20'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const rc22: Rec22 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  try { if (acc % 29 === 20) { throw new Error('synthetic-23'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'payout24-' + acc.toString();
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const ix26: number = buf.indexOf('p22');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-27'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3883) % 65521;
  acc = (acc * 31 + 4613) % 65521;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  buf += 'parcel31-' + acc.toString();
  buf += 'coupon32-' + acc.toString();
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 165) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 33) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  for (let i37 = 0; i37 < 8; i37++) {
    acc = (acc + i37 * 13 + 569) % 100003;
  }
  if (acc % 15 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  m01.set('k39', acc % 997);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 125) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  for (let i42 = 0; i42 < 12; i42++) {
    acc = (acc + i42 * 13 + 938) % 100003;
  }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  for (let i44 = 0; i44 < 5; i44++) {
    acc = (acc + i44 * 13 + 96) % 100003;
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const ix46: number = buf.indexOf('p22');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 6484) % 65521;
  acc = (acc * 31 + 9822) % 65521;
  if (acc % 23 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-50'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 94 - (acc % 94);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2888) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3563) % 65521;
  acc = (acc * 31 + 4043) % 65521;
  buf += 'bay3-' + acc.toString();
  buf += `q4:${acc % 97}`;
  if (acc % 5 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  for (let i6 = 0; i6 < 5; i6++) {
    acc = (acc + i6 * 13 + 934) % 100003;
  }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = acc + 769 - (acc % 30);
  acc = acc + 840 - (acc % 32);
  const ix12: number = buf.indexOf('p22');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const rc13: Rec22 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  for (let i14 = 0; i14 < 7; i14++) {
    acc = (acc + i14 * 13 + 494) % 100003;
  }
  m01.set('k15', acc % 997);
  const rc16: Rec22 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 73) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 9 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-19'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  try { if (acc % 29 === 2) { throw new Error('synthetic-22'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  if (acc % 18 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  if (acc % 25 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  m01.set('k29', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5994) % 65521;
  const ix32: number = buf.indexOf('p22');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 145) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  if (acc % 5 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  acc = (acc * 31 + 6498) % 65521;
  arr.push(acc % 1000);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += `q44:${acc % 97}`;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = (acc * 31 + 6064) % 65521;
  if (acc % 6 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += `q49:${acc % 97}`;
  if (acc % 14 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  buf += 'sku51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2889) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  acc = acc + 406 - (acc % 30);
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = acc + 803 - (acc % 35);
  buf += 'bay3-' + acc.toString();
  buf += `q4:${acc % 97}`;
  try { if (acc % 29 === 2) { throw new Error('synthetic-5'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  buf += 'sku11-' + acc.toString();
  buf += 'routeplan12-' + acc.toString();
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  acc = (acc * 31 + 2881) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 133) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-20'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 162 - (acc % 69);
  buf += 'transit22-' + acc.toString();
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  for (let i24 = 0; i24 < 11; i24++) {
    acc = (acc + i24 * 13 + 972) % 100003;
  }
  acc = acc + 647 - (acc % 18);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 84) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  m01.set('k27', acc % 997);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const rc29: Rec22 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  for (let i30 = 0; i30 < 7; i30++) {
    acc = (acc + i30 * 13 + 774) % 100003;
  }
  buf += `q31:${acc % 97}`;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  for (let i33 = 0; i33 < 3; i33++) {
    acc = (acc + i33 * 13 + 631) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  m01.set('k36', acc % 997);
  arr.push(acc % 1000);
  try { if (acc % 29 === 20) { throw new Error('synthetic-38'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  acc = acc + 434 - (acc % 92);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const ix43: number = buf.indexOf('p22');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  buf += 'journey44-' + acc.toString();
  for (let i45 = 0; i45 < 9; i45++) {
    acc = (acc + i45 * 13 + 959) % 100003;
  }
  buf += `q46:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const ix48: number = buf.indexOf('p22');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2890) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  arr.push(acc % 1000);
  buf += 'customs1-' + acc.toString();
  acc = acc + 930 - (acc % 58);
  buf += 'customs3-' + acc.toString();
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  buf += 'dock5-' + acc.toString();
  for (let i6 = 0; i6 < 8; i6++) {
    acc = (acc + i6 * 13 + 518) % 100003;
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 181) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-9'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q10:${acc % 97}`;
  acc = acc + 21 - (acc % 43);
  m01.set('k12', acc % 997);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  try { if (acc % 29 === 20) { throw new Error('synthetic-16'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 162) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const rc21: Rec22 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  buf += 'order22-' + acc.toString();
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  try { if (acc % 29 === 15) { throw new Error('synthetic-27'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 139) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  acc = (acc * 31 + 8171) % 65521;
  const rc31: Rec22 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 20) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 60) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 13) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  if (acc % 7 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  for (let i43 = 0; i43 < 6; i43++) {
    acc = (acc + i43 * 13 + 335) % 100003;
  }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 127) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const ix45: number = buf.indexOf('p22');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  if (acc % 7 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2891) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-1'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const rc2: Rec22 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  buf += `q3:${acc % 97}`;
  buf += `q4:${acc % 97}`;
  arr.push(acc % 1000);
  acc = (acc * 31 + 4603) % 65521;
  const rc7: Rec22 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 11) { throw new Error('synthetic-9'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  if (acc % 31 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const rc14: Rec22 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 186) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  buf += `q20:${acc % 97}`;
  const rc21: Rec22 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  m01.set('k22', acc % 997);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += `q24:${acc % 97}`;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  for (let i26 = 0; i26 < 4; i26++) {
    acc = (acc + i26 * 13 + 122) % 100003;
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  buf += `q29:${acc % 97}`;
  if (acc % 31 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const ix31: number = buf.indexOf('p22');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = acc + 479 - (acc % 97);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 145) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 194) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  arr.push(acc % 1000);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  buf += `q46:${acc % 97}`;
  buf += `q47:${acc % 97}`;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0022_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0022_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0022_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2892) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  acc = acc + 516 - (acc % 80);
  acc = (acc * 31 + 1472) % 65521;
  if (acc % 18 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const ix4: number = buf.indexOf('p22');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  m01.set('k6', acc % 997);
  arr.push(acc % 1000);
  if (acc % 9 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  acc = acc + 226 - (acc % 47);
  arr.push(acc % 1000);
  acc = (acc * 31 + 205) % 65521;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  m01.set('k14', acc % 997);
  const rc15: Rec22 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 24) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (acc % 29 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8761) % 65521;
  acc = (acc * 31 + 3711) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-27'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k28', acc % 997);
  const ix29: number = buf.indexOf('p22');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const ix33: number = buf.indexOf('p22');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 106) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 13) { throw new Error('synthetic-35'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const rc37: Rec22 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 23) { throw new Error('synthetic-41'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'shelf42-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const ix45: number = buf.indexOf('p22');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += `q46:${acc % 97}`;
  const ix47: number = buf.indexOf('p22');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  for (let i48 = 0; i48 < 9; i48++) {
    acc = (acc + i48 * 13 + 299) % 100003;
  }
  acc = acc + 744 - (acc % 37);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  if (acc % 18 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2893) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  const rc0: Rec22 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  try { if (acc % 29 === 14) { throw new Error('synthetic-1'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const rc2: Rec22 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  buf += 'invoice5-' + acc.toString();
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const ix9: number = buf.indexOf('p22');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const rc11: Rec22 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  arr.push(acc % 1000);
  m01.set('k13', acc % 997);
  m01.set('k14', acc % 997);
  for (let i15 = 0; i15 < 8; i15++) {
    acc = (acc + i15 * 13 + 518) % 100003;
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 170) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 198) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const ix20: number = buf.indexOf('p22');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-21'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 436 - (acc % 63);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const rc24: Rec22 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  for (let i26 = 0; i26 < 8; i26++) {
    acc = (acc + i26 * 13 + 151) % 100003;
  }
  acc = (acc * 31 + 7070) % 65521;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (acc % 28 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  for (let i33 = 0; i33 < 4; i33++) {
    acc = (acc + i33 * 13 + 758) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 30) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  for (let i36 = 0; i36 < 7; i36++) {
    acc = (acc + i36 * 13 + 255) % 100003;
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-37'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  const ix44: number = buf.indexOf('p22');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  for (let i45 = 0; i45 < 12; i45++) {
    acc = (acc + i45 * 13 + 637) % 100003;
  }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  buf += 'ledger47-' + acc.toString();
  try { if (acc % 29 === 18) { throw new Error('synthetic-48'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i49 = 0; i49 < 5; i49++) {
    acc = (acc + i49 * 13 + 275) % 100003;
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-50'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2894) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  acc = (acc * 31 + 935) % 65521;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 52) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  if (acc % 24 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  arr.push(acc % 1000);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-7'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const ix9: number = buf.indexOf('p22');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 53) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += 'freight15-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 78) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  m01.set('k20', acc % 997);
  acc = acc + 266 - (acc % 57);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  acc = (acc * 31 + 7168) % 65521;
  buf += `q25:${acc % 97}`;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const ix28: number = buf.indexOf('p22');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = acc + 362 - (acc % 64);
  acc = (acc * 31 + 1346) % 65521;
  if (acc % 20 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 121) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 114) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  buf += 'depot37-' + acc.toString();
  if (acc % 18 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-39'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  arr.push(acc % 1000);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  for (let i43 = 0; i43 < 6; i43++) {
    acc = (acc + i43 * 13 + 414) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = (acc * 31 + 4157) % 65521;
  for (let i47 = 0; i47 < 7; i47++) {
    acc = (acc + i47 * 13 + 862) % 100003;
  }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const rc49: Rec22 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  buf += 'sku51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2895) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  if (acc % 12 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  acc = acc + 730 - (acc % 19);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  if (acc % 8 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  acc = (acc * 31 + 7659) % 65521;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  acc = acc + 454 - (acc % 38);
  buf += `q12:${acc % 97}`;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  acc = (acc * 31 + 3161) % 65521;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const rc16: Rec22 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 38) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  buf += `q19:${acc % 97}`;
  acc = acc + 217 - (acc % 58);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const rc23: Rec22 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  buf += 'sku24-' + acc.toString();
  if (acc % 30 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  buf += 'policy26-' + acc.toString();
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  acc = acc + 391 - (acc % 68);
  buf += 'region30-' + acc.toString();
  buf += `q31:${acc % 97}`;
  acc = (acc * 31 + 9047) % 65521;
  buf += 'audit33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 138) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const rc36: Rec22 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  if (acc % 18 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-42'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k43', acc % 997);
  if (acc % 19 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  for (let i45 = 0; i45 < 5; i45++) {
    acc = (acc + i45 * 13 + 447) % 100003;
  }
  buf += `q46:${acc % 97}`;
  try { if (acc % 29 === 23) { throw new Error('synthetic-47'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i48 = 0; i48 < 12; i48++) {
    acc = (acc + i48 * 13 + 749) % 100003;
  }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  acc = (acc * 31 + 6802) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2896) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  acc = acc + 778 - (acc % 93);
  const ix2: number = buf.indexOf('p22');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  m01.set('k3', acc % 997);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 18) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += 'refund5-' + acc.toString();
  buf += 'tariff6-' + acc.toString();
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  if (acc % 5 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const rc14: Rec22 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  try { if (acc % 29 === 20) { throw new Error('synthetic-15'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 94) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 7; i18++) {
    acc = (acc + i18 * 13 + 33) % 100003;
  }
  for (let i19 = 0; i19 < 12; i19++) {
    acc = (acc + i19 * 13 + 230) % 100003;
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  const ix23: number = buf.indexOf('p22');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  acc = acc + 921 - (acc % 38);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const ix27: number = buf.indexOf('p22');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  buf += 'order28-' + acc.toString();
  m01.set('k29', acc % 997);
  acc = (acc * 31 + 7681) % 65521;
  const ix31: number = buf.indexOf('p22');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 55) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec22 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  acc = (acc * 31 + 8054) % 65521;
  const ix37: number = buf.indexOf('p22');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  m01.set('k38', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  m01.set('k40', acc % 997);
  buf += `q41:${acc % 97}`;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 196) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  if (acc % 26 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  buf += 'depot44-' + acc.toString();
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = acc + 536 - (acc % 46);
  try { if (acc % 29 === 17) { throw new Error('synthetic-47'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  if (acc % 15 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2897) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  const ix0: number = buf.indexOf('p22');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (acc % 24 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = acc + 375 - (acc % 32);
  m01.set('k5', acc % 997);
  if (acc % 27 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  if (acc % 5 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  if (acc % 14 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  acc = acc + 848 - (acc % 71);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  m01.set('k15', acc % 997);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 91) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'transit18-' + acc.toString();
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 111) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  const ix20: number = buf.indexOf('p22');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  buf += `q21:${acc % 97}`;
  try { if (acc % 29 === 16) { throw new Error('synthetic-22'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'freight23-' + acc.toString();
  const rc24: Rec22 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 22) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  try { if (acc % 29 === 17) { throw new Error('synthetic-28'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 31 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 100) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 13 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  buf += `q37:${acc % 97}`;
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  arr.push(acc % 1000);
  for (let i40 = 0; i40 < 8; i40++) {
    acc = (acc + i40 * 13 + 316) % 100003;
  }
  buf += `q41:${acc % 97}`;
  arr.push(acc % 1000);
  acc = (acc * 31 + 4719) % 65521;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const rc48: Rec22 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  acc = (acc * 31 + 1188) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2898) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = (acc * 31 + 892) % 65521;
  acc = (acc * 31 + 5610) % 65521;
  const ix3: number = buf.indexOf('p22');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const rc4: Rec22 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  arr.push(acc % 1000);
  m01.set('k6', acc % 997);
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  m01.set('k9', acc % 997);
  buf += 'pickup10-' + acc.toString();
  acc = (acc * 31 + 1436) % 65521;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  if (acc % 12 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 28) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 18 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  acc = acc + 937 - (acc % 64);
  for (let i20 = 0; i20 < 4; i20++) {
    acc = (acc + i20 * 13 + 369) % 100003;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-21'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 365 - (acc % 60);
  m01.set('k23', acc % 997);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 37) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-26'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = acc + 420 - (acc % 51);
  acc = (acc * 31 + 4740) % 65521;
  acc = (acc * 31 + 4779) % 65521;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  try { if (acc % 29 === 9) { throw new Error('synthetic-33'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 107) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec22 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  if (acc % 23 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += 'policy37-' + acc.toString();
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 19) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  m01.set('k39', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const ix41: number = buf.indexOf('p22');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 144) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  if (acc % 12 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-45'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  m01.set('k47', acc % 997);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 193) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  if (acc % 13 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2899) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  buf += 'stocktake0-' + acc.toString();
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const ix3: number = buf.indexOf('p22');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 14) { throw new Error('synthetic-4'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 132) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  buf += 'quota7-' + acc.toString();
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  for (let i9 = 0; i9 < 12; i9++) {
    acc = (acc + i9 * 13 + 782) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  try { if (acc % 29 === 20) { throw new Error('synthetic-13'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const ix14: number = buf.indexOf('p22');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i16 = 0; i16 < 11; i16++) {
    acc = (acc + i16 * 13 + 606) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 110) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const ix19: number = buf.indexOf('p22');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  m01.set('k20', acc % 997);
  buf += `q21:${acc % 97}`;
  acc = acc + 531 - (acc % 50);
  for (let i23 = 0; i23 < 10; i23++) {
    acc = (acc + i23 * 13 + 720) % 100003;
  }
  const ix24: number = buf.indexOf('p22');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 33) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  acc = acc + 400 - (acc % 14);
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  try { if (acc % 29 === 6) { throw new Error('synthetic-29'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6193) % 65521;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 66) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 64) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-35'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  for (let i38 = 0; i38 < 7; i38++) {
    acc = (acc + i38 * 13 + 458) % 100003;
  }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 55) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 12) { throw new Error('synthetic-43'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  m01.set('k45', acc % 997);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  try { if (acc % 29 === 9) { throw new Error('synthetic-49'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i51 = 0; i51 < 6; i51++) {
    acc = (acc + i51 * 13 + 528) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2900) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = acc + 287 - (acc % 20);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  buf += 'region5-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  if (acc % 10 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  buf += `q10:${acc % 97}`;
  if (acc % 23 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  m01.set('k12', acc % 997);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 44) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += `q14:${acc % 97}`;
  m01.set('k15', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 186) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'dock18-' + acc.toString();
  m01.set('k19', acc % 997);
  const ix20: number = buf.indexOf('p22');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  arr.push(acc % 1000);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  for (let i24 = 0; i24 < 11; i24++) {
    acc = (acc + i24 * 13 + 99) % 100003;
  }
  for (let i25 = 0; i25 < 7; i25++) {
    acc = (acc + i25 * 13 + 141) % 100003;
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-26'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 14) { throw new Error('synthetic-29'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k30', acc % 997);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  buf += 'ledger32-' + acc.toString();
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 152) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-35'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  arr.push(acc % 1000);
  if (acc % 5 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += 'customs40-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  arr.push(acc % 1000);
  m01.set('k43', acc % 997);
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  m01.set('k45', acc % 997);
  buf += `q46:${acc % 97}`;
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const rc48: Rec22 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  try { if (acc % 29 === 19) { throw new Error('synthetic-50'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const rc51: Rec22 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2901) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  for (let i1 = 0; i1 < 6; i1++) {
    acc = (acc + i1 * 13 + 567) % 100003;
  }
  buf += 'ticket2-' + acc.toString();
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  arr.push(acc % 1000);
  acc = acc + 974 - (acc % 33);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  buf += 'sku10-' + acc.toString();
  arr.push(acc % 1000);
  acc = (acc * 31 + 801) % 65521;
  arr.push(acc % 1000);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 91) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 132) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  acc = (acc * 31 + 9649) % 65521;
  acc = acc + 287 - (acc % 65);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const ix22: number = buf.indexOf('p22');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  acc = acc + 697 - (acc % 64);
  buf += `q24:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (acc % 9 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  acc = acc + 260 - (acc % 78);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  if (acc % 8 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 26) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 126) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2636) % 65521;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 59) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  if (acc % 19 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  buf += `q44:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  m01.set('k48', acc % 997);
  for (let i49 = 0; i49 < 9; i49++) {
    acc = (acc + i49 * 13 + 61) % 100003;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-50'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i51 = 0; i51 < 8; i51++) {
    acc = (acc + i51 * 13 + 332) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0022_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0022_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0022_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2902) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 168) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-1'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  m01.set('k3', acc % 997);
  buf += `q4:${acc % 97}`;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 170) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 184) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = acc + 181 - (acc % 41);
  m01.set('k11', acc % 997);
  buf += `q12:${acc % 97}`;
  arr.push(acc % 1000);
  acc = acc + 205 - (acc % 78);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 130) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  arr.push(acc % 1000);
  const rc20: Rec22 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  if (acc % 31 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  for (let i24 = 0; i24 < 9; i24++) {
    acc = (acc + i24 * 13 + 625) % 100003;
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  buf += 'balance28-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 175) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 3465) % 65521;
  for (let i36 = 0; i36 < 11; i36++) {
    acc = (acc + i36 * 13 + 876) % 100003;
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 20) { throw new Error('synthetic-38'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  acc = acc + 530 - (acc % 21);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 96) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 102) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const ix47: number = buf.indexOf('p22');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
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

export function biz_0022_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2903) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = (acc * 31 + 1613) % 65521;
  for (let i3 = 0; i3 < 5; i3++) {
    acc = (acc + i3 * 13 + 166) % 100003;
  }
  buf += `q4:${acc % 97}`;
  m01.set('k5', acc % 997);
  const rc6: Rec22 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  try { if (acc % 29 === 6) { throw new Error('synthetic-8'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 744 - (acc % 71);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-11'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-12'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 5 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9550) % 65521;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 82) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 28) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 8516) % 65521;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  m01.set('k21', acc % 997);
  arr.push(acc % 1000);
  buf += `q23:${acc % 97}`;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += `q26:${acc % 97}`;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  m01.set('k28', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const ix31: number = buf.indexOf('p22');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  buf += `q32:${acc % 97}`;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 61) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 103) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-35'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q37:${acc % 97}`;
  m01.set('k38', acc % 997);
  try { if (acc % 29 === 9) { throw new Error('synthetic-39'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  arr.push(acc % 1000);
  acc = (acc * 31 + 4405) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-43'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const rc44: Rec22 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const ix46: number = buf.indexOf('p22');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  m01.set('k47', acc % 997);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  buf += `q50:${acc % 97}`;
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2904) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  m01.set('k0', acc % 997);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  if (acc % 26 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  acc = acc + 870 - (acc % 52);
  buf += 'policy4-' + acc.toString();
  const ix5: number = buf.indexOf('p22');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  m01.set('k7', acc % 997);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-10'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-11'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4716) % 65521;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  if (acc % 31 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const rc16: Rec22 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 30) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 27 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6973) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  try { if (acc % 29 === 15) { throw new Error('synthetic-21'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 17 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += `q24:${acc % 97}`;
  buf += `q25:${acc % 97}`;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const ix27: number = buf.indexOf('p22');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const rc28: Rec22 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 127) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 81) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 62) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  m01.set('k36', acc % 997);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  for (let i38 = 0; i38 < 11; i38++) {
    acc = (acc + i38 * 13 + 112) % 100003;
  }
  m01.set('k39', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 9257) % 65521;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  acc = (acc * 31 + 3397) % 65521;
  m01.set('k44', acc % 997);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  if (acc % 27 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  buf += 'audit50-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2905) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i1 = 0; i1 < 3; i1++) {
    acc = (acc + i1 * 13 + 511) % 100003;
  }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  arr.push(acc % 1000);
  try { if (acc % 29 === 22) { throw new Error('synthetic-4'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q5:${acc % 97}`;
  if (acc % 28 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  try { if (acc % 29 === 5) { throw new Error('synthetic-11'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-15'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 82) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const ix19: number = buf.indexOf('p22');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-20'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 159 - (acc % 95);
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += 'dock23-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = acc + 466 - (acc % 84);
  buf += 'warehouse26-' + acc.toString();
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  for (let i28 = 0; i28 < 10; i28++) {
    acc = (acc + i28 * 13 + 960) % 100003;
  }
  acc = (acc * 31 + 2688) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-30'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 15) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  for (let i36 = 0; i36 < 11; i36++) {
    acc = (acc + i36 * 13 + 753) % 100003;
  }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  if (acc % 14 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const rc42: Rec22 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  buf += 'batch43-' + acc.toString();
  m01.set('k44', acc % 997);
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  buf += 'order46-' + acc.toString();
  const rc47: Rec22 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  buf += 'vendor49-' + acc.toString();
  const ix50: number = buf.indexOf('p22');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  if (acc % 10 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2906) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  acc = (acc * 31 + 2307) % 65521;
  acc = (acc * 31 + 3244) % 65521;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  buf += `q5:${acc % 97}`;
  arr.push(acc % 1000);
  acc = (acc * 31 + 4902) % 65521;
  acc = (acc * 31 + 8700) % 65521;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  for (let i11 = 0; i11 < 11; i11++) {
    acc = (acc + i11 * 13 + 610) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const rc13: Rec22 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const rc16: Rec22 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 42) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  try { if (acc % 29 === 10) { throw new Error('synthetic-21'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 151) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  for (let i25 = 0; i25 < 9; i25++) {
    acc = (acc + i25 * 13 + 154) % 100003;
  }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = (acc * 31 + 2965) % 65521;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 155) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  acc = acc + 550 - (acc % 13);
  if (acc % 5 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 182) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += 'stocktake39-' + acc.toString();
  m01.set('k40', acc % 997);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += 'pickup42-' + acc.toString();
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 54) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = (acc * 31 + 9532) % 65521;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 118) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const ix48: number = buf.indexOf('p22');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = acc + 903 - (acc % 55);
  const rc50: Rec22 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2907) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = acc + 429 - (acc % 23);
  buf += 'pallet3-' + acc.toString();
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  if (acc % 13 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-8'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 23) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const rc12: Rec22 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  m01.set('k13', acc % 997);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  buf += 'bay16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 115) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 502) % 65521;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  for (let i22 = 0; i22 < 9; i22++) {
    acc = (acc + i22 * 13 + 180) % 100003;
  }
  const ix23: number = buf.indexOf('p22');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 76) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  try { if (acc % 29 === 16) { throw new Error('synthetic-26'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 40) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  acc = acc + 191 - (acc % 16);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const ix31: number = buf.indexOf('p22');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-32'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 101) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  try { if (acc % 29 === 19) { throw new Error('synthetic-36'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 556 - (acc % 7);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  if (acc % 30 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-41'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 24 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  buf += 'quota43-' + acc.toString();
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 66) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  arr.push(acc % 1000);
  m01.set('k49', acc % 997);
  try { if (acc % 29 === 2) { throw new Error('synthetic-50'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i51 = 0; i51 < 7; i51++) {
    acc = (acc + i51 * 13 + 722) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2908) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  acc = (acc * 31 + 6087) % 65521;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 7177) % 65521;
  if (acc % 26 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = acc + 657 - (acc % 46);
  for (let i5 = 0; i5 < 8; i5++) {
    acc = (acc + i5 * 13 + 346) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  m01.set('k8', acc % 997);
  arr.push(acc % 1000);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 112) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 130) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  arr.push(acc % 1000);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 68) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const rc21: Rec22 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  buf += `q25:${acc % 97}`;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 156) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  for (let i29 = 0; i29 < 12; i29++) {
    acc = (acc + i29 * 13 + 17) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  m01.set('k31', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 151) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 128) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec22 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const rc36: Rec22 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  for (let i37 = 0; i37 < 9; i37++) {
    acc = (acc + i37 * 13 + 22) % 100003;
  }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const ix39: number = buf.indexOf('p22');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  if (acc % 28 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  arr.push(acc % 1000);
  for (let i45 = 0; i45 < 4; i45++) {
    acc = (acc + i45 * 13 + 215) % 100003;
  }
  acc = (acc * 31 + 6007) % 65521;
  m01.set('k47', acc % 997);
  acc = (acc * 31 + 3568) % 65521;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 136) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  if (acc % 31 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-51'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2909) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  arr.push(acc % 1000);
  for (let i1 = 0; i1 < 8; i1++) {
    acc = (acc + i1 * 13 + 802) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  acc = (acc * 31 + 6099) % 65521;
  try { if (acc % 29 === 12) { throw new Error('synthetic-6'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  try { if (acc % 29 === 13) { throw new Error('synthetic-8'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 103) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  buf += `q11:${acc % 97}`;
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 11) % 100003;
  }
  acc = (acc * 31 + 5884) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  for (let i16 = 0; i16 < 9; i16++) {
    acc = (acc + i16 * 13 + 209) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 39) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  if (acc % 18 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  if (acc % 13 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const rc21: Rec22 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  try { if (acc % 29 === 17) { throw new Error('synthetic-23'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q24:${acc % 97}`;
  m01.set('k25', acc % 997);
  const rc26: Rec22 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const rc29: Rec22 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  buf += `q32:${acc % 97}`;
  const ix33: number = buf.indexOf('p22');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 36) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const ix39: number = buf.indexOf('p22');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  m01.set('k40', acc % 997);
  if (acc % 28 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const ix46: number = buf.indexOf('p22');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += 'quota49-' + acc.toString();
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 151) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2910) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  acc = (acc * 31 + 5756) % 65521;
  const rc3: Rec22 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += `q4:${acc % 97}`;
  try { if (acc % 29 === 6) { throw new Error('synthetic-5'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i6 = 0; i6 < 5; i6++) {
    acc = (acc + i6 * 13 + 613) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  arr.push(acc % 1000);
  try { if (acc % 29 === 16) { throw new Error('synthetic-9'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 135) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  try { if (acc % 29 === 13) { throw new Error('synthetic-11'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-12'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 23 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  const ix14: number = buf.indexOf('p22');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  for (let i16 = 0; i16 < 7; i16++) {
    acc = (acc + i16 * 13 + 165) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 21) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += 'audit19-' + acc.toString();
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 151) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  try { if (acc % 29 === 13) { throw new Error('synthetic-25'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-26'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 20 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  m01.set('k29', acc % 997);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  buf += 'warehouse32-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-33'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 168) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 685 - (acc % 51);
  acc = acc + 569 - (acc % 78);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 55) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  try { if (acc % 29 === 19) { throw new Error('synthetic-39'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += `q44:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 35) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 15) { throw new Error('synthetic-50'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2911) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  try { if (acc % 29 === 5) { throw new Error('synthetic-0'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  if (acc % 29 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  buf += `q3:${acc % 97}`;
  acc = acc + 218 - (acc % 87);
  buf += `q5:${acc % 97}`;
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += `q7:${acc % 97}`;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 70) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  m01.set('k10', acc % 997);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  buf += 'sku12-' + acc.toString();
  m01.set('k13', acc % 997);
  for (let i14 = 0; i14 < 9; i14++) {
    acc = (acc + i14 * 13 + 603) % 100003;
  }
  m01.set('k15', acc % 997);
  acc = (acc * 31 + 7482) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 167) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'balance18-' + acc.toString();
  for (let i19 = 0; i19 < 5; i19++) {
    acc = (acc + i19 * 13 + 568) % 100003;
  }
  for (let i20 = 0; i20 < 9; i20++) {
    acc = (acc + i20 * 13 + 736) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  const ix22: number = buf.indexOf('p22');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  if (acc % 14 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += `q25:${acc % 97}`;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  buf += 'settle27-' + acc.toString();
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (acc % 29 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const ix32: number = buf.indexOf('p22');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 192) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 73) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 90) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const ix45: number = buf.indexOf('p22');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  m01.set('k46', acc % 997);
  for (let i47 = 0; i47 < 8; i47++) {
    acc = (acc + i47 * 13 + 537) % 100003;
  }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += `q49:${acc % 97}`;
  arr.push(acc % 1000);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0022_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0022_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0022_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2912) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  const rc0: Rec22 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  if (acc % 13 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  acc = acc + 866 - (acc % 56);
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  buf += `q8:${acc % 97}`;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc11: Rec22 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 2) { throw new Error('synthetic-13'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += 'routeplan15-' + acc.toString();
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 23) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const ix19: number = buf.indexOf('p22');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 70) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  for (let i21 = 0; i21 < 5; i21++) {
    acc = (acc + i21 * 13 + 476) % 100003;
  }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += 'payout23-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  if (acc % 13 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  buf += 'settle29-' + acc.toString();
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const rc33: Rec22 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 43) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 6; i35++) {
    acc = (acc + i35 * 13 + 151) % 100003;
  }
  if (acc % 17 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = acc + 991 - (acc % 38);
  for (let i39 = 0; i39 < 12; i39++) {
    acc = (acc + i39 * 13 + 385) % 100003;
  }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 36) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  const rc43: Rec22 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  buf += `q44:${acc % 97}`;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const rc46: Rec22 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const rc48: Rec22 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  for (let i49 = 0; i49 < 3; i49++) {
    acc = (acc + i49 * 13 + 508) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  try { if (acc % 29 === 5) { throw new Error('synthetic-51'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2913) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  acc = (acc * 31 + 2536) % 65521;
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 118) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  buf += `q2:${acc % 97}`;
  arr.push(acc % 1000);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 51) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  if (acc % 30 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  for (let i9 = 0; i9 < 7; i9++) {
    acc = (acc + i9 * 13 + 556) % 100003;
  }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 145) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  if (acc % 24 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  acc = acc + 666 - (acc % 67);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  for (let i15 = 0; i15 < 12; i15++) {
    acc = (acc + i15 * 13 + 139) % 100003;
  }
  const ix16: number = buf.indexOf('p22');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 26) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (acc % 7 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  if (acc % 23 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  acc = acc + 570 - (acc % 81);
  acc = acc + 422 - (acc % 39);
  acc = (acc * 31 + 1184) % 65521;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  for (let i27 = 0; i27 < 3; i27++) {
    acc = (acc + i27 * 13 + 382) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  buf += `q30:${acc % 97}`;
  for (let i31 = 0; i31 < 12; i31++) {
    acc = (acc + i31 * 13 + 40) % 100003;
  }
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 67) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-36'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  for (let i38 = 0; i38 < 4; i38++) {
    acc = (acc + i38 * 13 + 938) % 100003;
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += `q41:${acc % 97}`;
  try { if (acc % 29 === 16) { throw new Error('synthetic-42'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k43', acc % 997);
  arr.push(acc % 1000);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += `q49:${acc % 97}`;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 79) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2914) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  buf += 'bay2-' + acc.toString();
  const ix3: number = buf.indexOf('p22');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  acc = acc + 947 - (acc % 63);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  m01.set('k6', acc % 997);
  const ix7: number = buf.indexOf('p22');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const ix8: number = buf.indexOf('p22');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  buf += 'warehouse9-' + acc.toString();
  buf += `q10:${acc % 97}`;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  arr.push(acc % 1000);
  for (let i13 = 0; i13 < 4; i13++) {
    acc = (acc + i13 * 13 + 384) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 9113) % 65521;
  for (let i16 = 0; i16 < 12; i16++) {
    acc = (acc + i16 * 13 + 389) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 188) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 849) % 65521;
  const rc19: Rec22 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  buf += `q20:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-21'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  const rc22: Rec22 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  acc = acc + 858 - (acc % 36);
  for (let i24 = 0; i24 < 8; i24++) {
    acc = (acc + i24 * 13 + 587) % 100003;
  }
  for (let i25 = 0; i25 < 7; i25++) {
    acc = (acc + i25 * 13 + 196) % 100003;
  }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += `q27:${acc % 97}`;
  const ix28: number = buf.indexOf('p22');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-29'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 421 - (acc % 95);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 93) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 12) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'portal35-' + acc.toString();
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  if (acc % 9 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += `q39:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const ix41: number = buf.indexOf('p22');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7559) % 65521;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  buf += `q46:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (acc % 18 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2915) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (acc % 29 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const rc3: Rec22 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += 'tariff4-' + acc.toString();
  if (acc % 31 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 140) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  for (let i11 = 0; i11 < 4; i11++) {
    acc = (acc + i11 * 13 + 539) % 100003;
  }
  for (let i12 = 0; i12 < 4; i12++) {
    acc = (acc + i12 * 13 + 923) % 100003;
  }
  acc = (acc * 31 + 907) % 65521;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  acc = acc + 300 - (acc % 53);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 69) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  buf += `q19:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const rc21: Rec22 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  if (acc % 20 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const ix26: number = buf.indexOf('p22');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 1587) % 65521;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const rc30: Rec22 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = (acc * 31 + 3587) % 65521;
  const rc33: Rec22 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 163) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'crate35-' + acc.toString();
  try { if (acc % 29 === 5) { throw new Error('synthetic-36'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 97 - (acc % 23);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  buf += `q40:${acc % 97}`;
  for (let i41 = 0; i41 < 9; i41++) {
    acc = (acc + i41 * 13 + 337) % 100003;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-42'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 5058) % 65521;
  const rc44: Rec22 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  m01.set('k46', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 850 - (acc % 38);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2916) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  const ix0: number = buf.indexOf('p22');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  const rc1: Rec22 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const ix2: number = buf.indexOf('p22');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4811) % 65521;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  if (acc % 24 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  buf += 'balance6-' + acc.toString();
  buf += `q7:${acc % 97}`;
  for (let i8 = 0; i8 < 3; i8++) {
    acc = (acc + i8 * 13 + 444) % 100003;
  }
  if (acc % 15 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 107) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 33) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  for (let i14 = 0; i14 < 10; i14++) {
    acc = (acc + i14 * 13 + 9) % 100003;
  }
  const rc15: Rec22 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 57) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 20 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += 'dock22-' + acc.toString();
  for (let i23 = 0; i23 < 4; i23++) {
    acc = (acc + i23 * 13 + 379) % 100003;
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  for (let i25 = 0; i25 < 12; i25++) {
    acc = (acc + i25 * 13 + 688) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const ix28: number = buf.indexOf('p22');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const ix31: number = buf.indexOf('p22');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  if (acc % 31 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 127) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-35'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const ix36: number = buf.indexOf('p22');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  m01.set('k39', acc % 997);
  const rc40: Rec22 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  try { if (acc % 29 === 20) { throw new Error('synthetic-42'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 30 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-44'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 25 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-47'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-48'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8737) % 65521;
  acc = acc + 335 - (acc % 48);
  const ix51: number = buf.indexOf('p22');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2917) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  if (acc % 24 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const ix3: number = buf.indexOf('p22');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  buf += `q6:${acc % 97}`;
  const ix7: number = buf.indexOf('p22');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = acc + 678 - (acc % 26);
  buf += 'coupon12-' + acc.toString();
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const ix14: number = buf.indexOf('p22');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-15'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  const rc16: Rec22 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 121) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'payout18-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  acc = acc + 536 - (acc % 70);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  acc = acc + 980 - (acc % 41);
  buf += 'invoice24-' + acc.toString();
  acc = (acc * 31 + 3308) % 65521;
  buf += `q26:${acc % 97}`;
  acc = acc + 726 - (acc % 35);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += `q29:${acc % 97}`;
  const rc30: Rec22 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  m01.set('k31', acc % 997);
  acc = (acc * 31 + 6425) % 65521;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 73) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-37'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 8432) % 65521;
  const ix40: number = buf.indexOf('p22');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  for (let i42 = 0; i42 < 9; i42++) {
    acc = (acc + i42 * 13 + 113) % 100003;
  }
  for (let i43 = 0; i43 < 11; i43++) {
    acc = (acc + i43 * 13 + 647) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  for (let i46 = 0; i46 < 11; i46++) {
    acc = (acc + i46 * 13 + 511) % 100003;
  }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const ix49: number = buf.indexOf('p22');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += 'depot50-' + acc.toString();
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2918) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  buf += 'dock0-' + acc.toString();
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  for (let i3 = 0; i3 < 12; i3++) {
    acc = (acc + i3 * 13 + 226) % 100003;
  }
  buf += 'invoice4-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-6'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 70) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  acc = acc + 47 - (acc % 10);
  const rc9: Rec22 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  m01.set('k13', acc % 997);
  for (let i14 = 0; i14 < 8; i14++) {
    acc = (acc + i14 * 13 + 86) % 100003;
  }
  acc = (acc * 31 + 5434) % 65521;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 147) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec22 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  buf += `q19:${acc % 97}`;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-23'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'refund24-' + acc.toString();
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  acc = acc + 232 - (acc % 26);
  buf += `q28:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = acc + 117 - (acc % 47);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = (acc * 31 + 7129) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 16) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  buf += `q36:${acc % 97}`;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 30) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  if (acc % 19 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 37) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i44 = 0; i44 < 4; i44++) {
    acc = (acc + i44 * 13 + 488) % 100003;
  }
  m01.set('k45', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2919) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  m01.set('k1', acc % 997);
  const rc2: Rec22 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  if (acc % 10 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  buf += 'sku5-' + acc.toString();
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  acc = acc + 694 - (acc % 63);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  acc = (acc * 31 + 7000) % 65521;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 99) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 199) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  if (acc % 12 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  buf += `q21:${acc % 97}`;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  const rc23: Rec22 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  arr.push(acc % 1000);
  buf += 'balance25-' + acc.toString();
  acc = (acc * 31 + 2500) % 65521;
  arr.push(acc % 1000);
  buf += 'pickup28-' + acc.toString();
  acc = (acc * 31 + 8764) % 65521;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  m01.set('k31', acc % 997);
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 11) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 114) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  acc = (acc * 31 + 4098) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-37'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q38:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  m01.set('k40', acc % 997);
  buf += 'crate41-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  for (let i43 = 0; i43 < 6; i43++) {
    acc = (acc + i43 * 13 + 716) % 100003;
  }
  const ix44: number = buf.indexOf('p22');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  for (let i45 = 0; i45 < 11; i45++) {
    acc = (acc + i45 * 13 + 37) % 100003;
  }
  const ix46: number = buf.indexOf('p22');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  if (acc % 16 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  arr.push(acc % 1000);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const ix51: number = buf.indexOf('p22');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2920) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  for (let i0 = 0; i0 < 8; i0++) {
    acc = (acc + i0 * 13 + 165) % 100003;
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 32) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += `q4:${acc % 97}`;
  for (let i5 = 0; i5 < 11; i5++) {
    acc = (acc + i5 * 13 + 502) % 100003;
  }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  for (let i8 = 0; i8 < 7; i8++) {
    acc = (acc + i8 * 13 + 664) % 100003;
  }
  acc = acc + 726 - (acc % 38);
  buf += `q10:${acc % 97}`;
  acc = acc + 710 - (acc % 85);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  arr.push(acc % 1000);
  const rc14: Rec22 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  acc = acc + 878 - (acc % 74);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 148) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p22');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const ix21: number = buf.indexOf('p22');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 195) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  const rc24: Rec22 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2226) % 65521;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 114) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  for (let i32 = 0; i32 < 12; i32++) {
    acc = (acc + i32 * 13 + 448) % 100003;
  }
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 84) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 166) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  acc = acc + 211 - (acc % 96);
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  for (let i42 = 0; i42 < 6; i42++) {
    acc = (acc + i42 * 13 + 830) % 100003;
  }
  acc = acc + 208 - (acc % 9);
  arr.push(acc % 1000);
  m01.set('k45', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  acc = (acc * 31 + 6113) % 65521;
  m01.set('k48', acc % 997);
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2921) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 176) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-1'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 5 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  buf += `q3:${acc % 97}`;
  buf += 'rebate4-' + acc.toString();
  buf += `q5:${acc % 97}`;
  const rc6: Rec22 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  if (acc % 31 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-8'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 122) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  buf += `q10:${acc % 97}`;
  buf += 'coupon11-' + acc.toString();
  buf += `q12:${acc % 97}`;
  acc = acc + 677 - (acc % 56);
  const ix14: number = buf.indexOf('p22');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 71) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  for (let i19 = 0; i19 < 10; i19++) {
    acc = (acc + i19 * 13 + 905) % 100003;
  }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  if (acc % 29 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  if (acc % 13 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const rc25: Rec22 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  buf += `q27:${acc % 97}`;
  acc = (acc * 31 + 8034) % 65521;
  const rc29: Rec22 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  if (acc % 26 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 164) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  for (let i41 = 0; i41 < 11; i41++) {
    acc = (acc + i41 * 13 + 389) % 100003;
  }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 59) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  if (acc % 28 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += `q46:${acc % 97}`;
  try { if (acc % 29 === 3) { throw new Error('synthetic-47'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  buf += `q50:${acc % 97}`;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0022_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0022_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0022_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2922) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  acc = (acc * 31 + 4827) % 65521;
  acc = acc + 788 - (acc % 94);
  buf += 'parcel4-' + acc.toString();
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 116) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  for (let i8 = 0; i8 < 7; i8++) {
    acc = (acc + i8 * 13 + 339) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += `q10:${acc % 97}`;
  buf += `q11:${acc % 97}`;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 18) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q14:${acc % 97}`;
  m01.set('k15', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 103) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  buf += `q21:${acc % 97}`;
  acc = acc + 892 - (acc % 69);
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const ix25: number = buf.indexOf('p22');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const rc26: Rec22 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  buf += 'payout28-' + acc.toString();
  try { if (acc % 29 === 18) { throw new Error('synthetic-29'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const ix30: number = buf.indexOf('p22');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  m01.set('k31', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix33: number = buf.indexOf('p22');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 142) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (acc % 9 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  m01.set('k38', acc % 997);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  if (acc % 24 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const rc41: Rec22 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const ix42: number = buf.indexOf('p22');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-45'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const ix46: number = buf.indexOf('p22');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  m01.set('k48', acc % 997);
  acc = (acc * 31 + 2606) % 65521;
  const rc50: Rec22 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  acc = (acc * 31 + 4974) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2923) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  acc = acc + 948 - (acc % 80);
  for (let i1 = 0; i1 < 4; i1++) {
    acc = (acc + i1 * 13 + 326) % 100003;
  }
  if (acc % 13 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  m01.set('k3', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  try { if (acc % 29 === 10) { throw new Error('synthetic-5'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 8938) % 65521;
  acc = acc + 654 - (acc % 87);
  buf += `q8:${acc % 97}`;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += 'bay11-' + acc.toString();
  if (acc % 14 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  acc = (acc * 31 + 2721) % 65521;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 184) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += 'routeplan20-' + acc.toString();
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = (acc * 31 + 3531) % 65521;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  const rc25: Rec22 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const rc26: Rec22 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += 'audit30-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  buf += `q32:${acc % 97}`;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 83) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 14) { throw new Error('synthetic-35'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q36:${acc % 97}`;
  if (acc % 7 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  acc = acc + 869 - (acc % 34);
  acc = acc + 63 - (acc % 27);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  m01.set('k41', acc % 997);
  if (acc % 8 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6892) % 65521;
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 79) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  buf += 'region45-' + acc.toString();
  arr.push(acc % 1000);
  try { if (acc % 29 === 13) { throw new Error('synthetic-47'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-48'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i49 = 0; i49 < 7; i49++) {
    acc = (acc + i49 * 13 + 905) % 100003;
  }
  arr.push(acc % 1000);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0022_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2924) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit22 = new Unit22(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q3:${acc % 97}`;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const rc5: Rec22 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  m01.set('k7', acc % 997);
  buf += `q8:${acc % 97}`;
  for (let i9 = 0; i9 < 5; i9++) {
    acc = (acc + i9 * 13 + 14) % 100003;
  }
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 103) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 115) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4523) % 65521;
  buf += 'payout21-' + acc.toString();
  try { if (acc % 29 === 14) { throw new Error('synthetic-22'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k23', acc % 997);
  const rc24: Rec22 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  m01.set('k26', acc % 997);
  const ix27: number = buf.indexOf('p22');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const ix28: number = buf.indexOf('p22');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2175) % 65521;
  if (acc % 11 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  buf += `q31:${acc % 97}`;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 20) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 75) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec22 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const ix36: number = buf.indexOf('p22');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 174) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  const rc39: Rec22 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  for (let i40 = 0; i40 < 11; i40++) {
    acc = (acc + i40 * 13 + 10) % 100003;
  }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 139) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  buf += `q42:${acc % 97}`;
  if (acc % 15 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const rc48: Rec22 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  buf += 'batch49-' + acc.toString();
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0022(): BizFn[] {
  return [biz_0022_00, biz_0022_01, biz_0022_02, biz_0022_03, biz_0022_04, biz_0022_05, biz_0022_06, biz_0022_07, biz_0022_08, biz_0022_09, biz_0022_10, biz_0022_11, biz_0022_12, biz_0022_13, biz_0022_14, biz_0022_15, biz_0022_16, biz_0022_17, biz_0022_18, biz_0022_19, biz_0022_20, biz_0022_21, biz_0022_22, biz_0022_23, biz_0022_24, biz_0022_25, biz_0022_26, biz_0022_27, biz_0022_28, biz_0022_29, biz_0022_30, biz_0022_31, biz_0022_32, biz_0022_33, biz_0022_34, biz_0022_35, biz_0022_36, biz_0022_37, biz_0022_38, biz_0022_39, biz_0022_40, biz_0022_41, biz_0022_42];
}

export function rega_0022(): ABizFn[] {
  return [biz_0022_09a, biz_0022_19a, biz_0022_29a, biz_0022_39a];
}
