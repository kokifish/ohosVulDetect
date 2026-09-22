// Biz0053.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec53 { id: number; tag: string; score: number; }

class Unit53 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0053_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6943) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  const rc0: Rec53 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  m01.set('k3', acc % 997);
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  for (let i5 = 0; i5 < 3; i5++) {
    acc = (acc + i5 * 13 + 679) % 100003;
  }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  acc = (acc * 31 + 2710) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  if (acc % 17 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  m01.set('k10', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  m01.set('k13', acc % 997);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += `q15:${acc % 97}`;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 48) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 128) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  for (let i20 = 0; i20 < 10; i20++) {
    acc = (acc + i20 * 13 + 761) % 100003;
  }
  buf += 'audit21-' + acc.toString();
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  buf += `q23:${acc % 97}`;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  acc = acc + 654 - (acc % 73);
  const rc27: Rec53 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  arr.push(acc % 1000);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 103) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = acc + 257 - (acc % 35);
  try { if (acc % 29 === 11) { throw new Error('synthetic-33'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 177) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5562) % 65521;
  m01.set('k38', acc % 997);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += `q41:${acc % 97}`;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  for (let i44 = 0; i44 < 12; i44++) {
    acc = (acc + i44 * 13 + 352) % 100003;
  }
  const rc45: Rec53 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  try { if (acc % 29 === 2) { throw new Error('synthetic-46'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 51 - (acc % 96);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  acc = acc + 520 - (acc % 51);
  const ix51: number = buf.indexOf('p53');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6944) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  acc = (acc * 31 + 9309) % 65521;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const rc2: Rec53 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  for (let i3 = 0; i3 < 8; i3++) {
    acc = (acc + i3 * 13 + 409) % 100003;
  }
  arr.push(acc % 1000);
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  buf += `q6:${acc % 97}`;
  acc = (acc * 31 + 8131) % 65521;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  buf += 'bay9-' + acc.toString();
  m01.set('k10', acc % 997);
  arr.push(acc % 1000);
  m01.set('k12', acc % 997);
  acc = (acc * 31 + 2112) % 65521;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 12) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 13 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-19'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 448 - (acc % 22);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  m01.set('k26', acc % 997);
  try { if (acc % 29 === 17) { throw new Error('synthetic-27'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += 'journey29-' + acc.toString();
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  buf += 'portal31-' + acc.toString();
  for (let i32 = 0; i32 < 9; i32++) {
    acc = (acc + i32 * 13 + 550) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 37) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  if (acc % 26 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  acc = acc + 11 - (acc % 7);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  try { if (acc % 29 === 14) { throw new Error('synthetic-39'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q40:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  for (let i43 = 0; i43 < 7; i43++) {
    acc = (acc + i43 * 13 + 753) % 100003;
  }
  arr.push(acc % 1000);
  m01.set('k45', acc % 997);
  arr.push(acc % 1000);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  for (let i48 = 0; i48 < 7; i48++) {
    acc = (acc + i48 * 13 + 151) % 100003;
  }
  const rc49: Rec53 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  try { if (acc % 29 === 10) { throw new Error('synthetic-50'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 5 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6945) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  buf += `q0:${acc % 97}`;
  for (let i1 = 0; i1 < 6; i1++) {
    acc = (acc + i1 * 13 + 710) % 100003;
  }
  m01.set('k2', acc % 997);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  m01.set('k4', acc % 997);
  if (acc % 8 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  buf += 'invoice6-' + acc.toString();
  if (acc % 15 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-8'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = acc + 887 - (acc % 95);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  acc = (acc * 31 + 8094) % 65521;
  buf += `q13:${acc % 97}`;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 79) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 121) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const rc21: Rec53 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  buf += `q22:${acc % 97}`;
  m01.set('k23', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += 'audit25-' + acc.toString();
  acc = (acc * 31 + 7708) % 65521;
  arr.push(acc % 1000);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const ix32: number = buf.indexOf('p53');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 188) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 189) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  try { if (acc % 29 === 6) { throw new Error('synthetic-36'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k37', acc % 997);
  try { if (acc % 29 === 11) { throw new Error('synthetic-38'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7001) % 65521;
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 140) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  if (acc % 19 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const ix42: number = buf.indexOf('p53');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8594) % 65521;
  buf += `q44:${acc % 97}`;
  try { if (acc % 29 === 6) { throw new Error('synthetic-45'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const rc47: Rec53 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  const ix50: number = buf.indexOf('p53');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6946) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  acc = (acc * 31 + 1433) % 65521;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 170) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const rc3: Rec53 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  buf += 'customs6-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += 'depot8-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (acc % 7 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  for (let i16 = 0; i16 < 7; i16++) {
    acc = (acc + i16 * 13 + 913) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 187) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 118) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix20: number = buf.indexOf('p53');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  if (acc % 10 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9739) % 65521;
  if (acc % 16 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  buf += 'pickup24-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  if (acc % 13 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  const ix29: number = buf.indexOf('p53');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const ix30: number = buf.indexOf('p53');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  for (let i31 = 0; i31 < 6; i31++) {
    acc = (acc + i31 * 13 + 699) % 100003;
  }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  acc = acc + 373 - (acc % 62);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 110) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  buf += `q36:${acc % 97}`;
  acc = (acc * 31 + 7788) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  try { if (acc % 29 === 7) { throw new Error('synthetic-39'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 54) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = (acc * 31 + 323) % 65521;
  if (acc % 28 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7073) % 65521;
  arr.push(acc % 1000);
  acc = acc + 905 - (acc % 7);
  buf += 'vendor47-' + acc.toString();
  try { if (acc % 29 === 17) { throw new Error('synthetic-48'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 195) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6947) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  const ix0: number = buf.indexOf('p53');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = (acc * 31 + 6369) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  for (let i4 = 0; i4 < 10; i4++) {
    acc = (acc + i4 * 13 + 339) % 100003;
  }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 168) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const ix6: number = buf.indexOf('p53');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 12) { throw new Error('synthetic-9'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 14) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  if (acc % 5 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  const ix13: number = buf.indexOf('p53');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const rc16: Rec53 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 131) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  arr.push(acc % 1000);
  for (let i20 = 0; i20 < 9; i20++) {
    acc = (acc + i20 * 13 + 826) % 100003;
  }
  for (let i21 = 0; i21 < 3; i21++) {
    acc = (acc + i21 * 13 + 578) % 100003;
  }
  if (acc % 24 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 189) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  acc = (acc * 31 + 4366) % 65521;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 3183) % 65521;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  buf += 'portal30-' + acc.toString();
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  m01.set('k32', acc % 997);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 185) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 8 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  if (acc % 21 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  m01.set('k38', acc % 997);
  for (let i39 = 0; i39 < 3; i39++) {
    acc = (acc + i39 * 13 + 856) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  m01.set('k41', acc % 997);
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const rc43: Rec53 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 56) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += 'ticket46-' + acc.toString();
  arr.push(acc % 1000);
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  m01.set('k49', acc % 997);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6948) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  if (acc % 23 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  m01.set('k4', acc % 997);
  acc = (acc * 31 + 9840) % 65521;
  m01.set('k6', acc % 997);
  m01.set('k7', acc % 997);
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  const rc9: Rec53 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  if (acc % 8 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  for (let i11 = 0; i11 < 4; i11++) {
    acc = (acc + i11 * 13 + 515) % 100003;
  }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 106) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 11) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += 'coupon16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 159) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  if (acc % 8 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-21'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k22', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-25'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  acc = (acc * 31 + 4213) % 65521;
  acc = acc + 68 - (acc % 93);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 182) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 38) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  if (acc % 18 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  acc = acc + 557 - (acc % 81);
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 59) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 11) { throw new Error('synthetic-46'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-47'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6949) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  buf += 'refund0-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  buf += 'rebate4-' + acc.toString();
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  if (acc % 5 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 198) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-9'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const ix14: number = buf.indexOf('p53');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  const ix16: number = buf.indexOf('p53');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 144) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const ix19: number = buf.indexOf('p53');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  buf += `q23:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 2305) % 65521;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  buf += `q28:${acc % 97}`;
  for (let i29 = 0; i29 < 5; i29++) {
    acc = (acc + i29 * 13 + 697) % 100003;
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const ix31: number = buf.indexOf('p53');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  acc = acc + 301 - (acc % 28);
  if (acc % 15 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 75) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 357 - (acc % 33);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += `q39:${acc % 97}`;
  acc = (acc * 31 + 9301) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-43'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const rc44: Rec53 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  acc = (acc * 31 + 8007) % 65521;
  buf += `q47:${acc % 97}`;
  arr.push(acc % 1000);
  buf += `q49:${acc % 97}`;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  acc = acc + 408 - (acc % 38);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6950) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  acc = (acc * 31 + 7946) % 65521;
  const ix2: number = buf.indexOf('p53');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-3'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k4', acc % 997);
  for (let i5 = 0; i5 < 7; i5++) {
    acc = (acc + i5 * 13 + 172) % 100003;
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  buf += 'policy8-' + acc.toString();
  if (acc % 14 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  for (let i10 = 0; i10 < 3; i10++) {
    acc = (acc + i10 * 13 + 910) % 100003;
  }
  if (acc % 30 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-12'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  try { if (acc % 29 === 5) { throw new Error('synthetic-14'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-16'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 42) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 804 - (acc % 81);
  buf += 'balance19-' + acc.toString();
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 163) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const rc21: Rec53 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  if (acc % 10 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += 'vendor25-' + acc.toString();
  for (let i26 = 0; i26 < 3; i26++) {
    acc = (acc + i26 * 13 + 576) % 100003;
  }
  buf += 'ticket27-' + acc.toString();
  for (let i28 = 0; i28 < 12; i28++) {
    acc = (acc + i28 * 13 + 975) % 100003;
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 26) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 25) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 35) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 16) { throw new Error('synthetic-35'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  acc = acc + 796 - (acc % 47);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  buf += 'ledger40-' + acc.toString();
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  const rc42: Rec53 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  try { if (acc % 29 === 10) { throw new Error('synthetic-43'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  acc = (acc * 31 + 6862) % 65521;
  const ix46: number = buf.indexOf('p53');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  m01.set('k47', acc % 997);
  if (acc % 5 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += 'sku51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6951) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  for (let i0 = 0; i0 < 6; i0++) {
    acc = (acc + i0 * 13 + 644) % 100003;
  }
  m01.set('k1', acc % 997);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 76) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = acc + 809 - (acc % 92);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (acc % 14 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  m01.set('k9', acc % 997);
  arr.push(acc % 1000);
  for (let i11 = 0; i11 < 5; i11++) {
    acc = (acc + i11 * 13 + 100) % 100003;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-12'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k13', acc % 997);
  buf += 'journey14-' + acc.toString();
  acc = (acc * 31 + 9049) % 65521;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 94) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  acc = (acc * 31 + 9104) % 65521;
  buf += `q20:${acc % 97}`;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  m01.set('k22', acc % 997);
  const rc23: Rec53 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  arr.push(acc % 1000);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  const ix26: number = buf.indexOf('p53');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  buf += 'crate27-' + acc.toString();
  if (acc % 14 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const rc29: Rec53 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 199) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  m01.set('k36', acc % 997);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  buf += `q39:${acc % 97}`;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  if (acc % 31 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  if (acc % 17 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  acc = acc + 371 - (acc % 51);
  for (let i46 = 0; i46 < 8; i46++) {
    acc = (acc + i46 * 13 + 269) % 100003;
  }
  const rc47: Rec53 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  m01.set('k50', acc % 997);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6952) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 47) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const rc2: Rec53 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  m01.set('k4', acc % 997);
  m01.set('k5', acc % 997);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  buf += 'portal10-' + acc.toString();
  const ix11: number = buf.indexOf('p53');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  for (let i13 = 0; i13 < 10; i13++) {
    acc = (acc + i13 * 13 + 187) % 100003;
  }
  if (acc % 17 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  acc = acc + 524 - (acc % 66);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 141) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 3; i18++) {
    acc = (acc + i18 * 13 + 556) % 100003;
  }
  m01.set('k19', acc % 997);
  acc = acc + 920 - (acc % 62);
  buf += 'freight21-' + acc.toString();
  arr.push(acc % 1000);
  const rc23: Rec53 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const ix24: number = buf.indexOf('p53');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  buf += 'coupon26-' + acc.toString();
  const ix27: number = buf.indexOf('p53');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  buf += `q30:${acc % 97}`;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  arr.push(acc % 1000);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 169) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = acc + 286 - (acc % 74);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += `q41:${acc % 97}`;
  buf += `q42:${acc % 97}`;
  buf += `q43:${acc % 97}`;
  buf += `q44:${acc % 97}`;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 68) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q48:${acc % 97}`;
  acc = (acc * 31 + 7495) % 65521;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0053_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0053_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0053_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6953) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  for (let i1 = 0; i1 < 6; i1++) {
    acc = (acc + i1 * 13 + 476) % 100003;
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-2'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  m01.set('k4', acc % 997);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  acc = (acc * 31 + 7599) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-7'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  try { if (acc % 29 === 15) { throw new Error('synthetic-9'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i10 = 0; i10 < 7; i10++) {
    acc = (acc + i10 * 13 + 742) % 100003;
  }
  if (acc % 6 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  const ix13: number = buf.indexOf('p53');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const rc16: Rec53 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 37) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 20 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += 'freight19-' + acc.toString();
  const ix20: number = buf.indexOf('p53');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 170) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 117) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  buf += `q24:${acc % 97}`;
  try { if (acc % 29 === 20) { throw new Error('synthetic-25'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  acc = acc + 341 - (acc % 46);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const rc30: Rec53 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  if (acc % 24 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 29) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 4; i35++) {
    acc = (acc + i35 * 13 + 112) % 100003;
  }
  buf += 'payout36-' + acc.toString();
  try { if (acc % 29 === 2) { throw new Error('synthetic-37'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i40 = 0; i40 < 4; i40++) {
    acc = (acc + i40 * 13 + 290) % 100003;
  }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  buf += `q42:${acc % 97}`;
  m01.set('k43', acc % 997);
  buf += 'bay44-' + acc.toString();
  acc = (acc * 31 + 396) % 65521;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 158) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const ix48: number = buf.indexOf('p53');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-50'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 22 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6954) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  acc = acc + 673 - (acc % 31);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += `q2:${acc % 97}`;
  const rc3: Rec53 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i5 = 0; i5 < 5; i5++) {
    acc = (acc + i5 * 13 + 658) % 100003;
  }
  buf += `q6:${acc % 97}`;
  buf += 'pickup7-' + acc.toString();
  buf += 'parcel8-' + acc.toString();
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  m01.set('k10', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const ix12: number = buf.indexOf('p53');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const ix13: number = buf.indexOf('p53');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 13) { throw new Error('synthetic-15'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 64) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  arr.push(acc % 1000);
  try { if (acc % 29 === 23) { throw new Error('synthetic-20'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  if (acc % 12 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += 'audit28-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q30:${acc % 97}`;
  try { if (acc % 29 === 11) { throw new Error('synthetic-31'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 58 - (acc % 86);
  try { if (acc % 29 === 10) { throw new Error('synthetic-33'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 67) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  acc = acc + 185 - (acc % 22);
  if (acc % 25 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 9204) % 65521;
  acc = (acc * 31 + 4755) % 65521;
  m01.set('k43', acc % 997);
  if (acc % 17 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  for (let i46 = 0; i46 < 3; i46++) {
    acc = (acc + i46 * 13 + 769) % 100003;
  }
  buf += 'batch47-' + acc.toString();
  m01.set('k48', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6955) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  m01.set('k0', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  try { if (acc % 29 === 18) { throw new Error('synthetic-3'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-4'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  try { if (acc % 29 === 4) { throw new Error('synthetic-12'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q13:${acc % 97}`;
  buf += `q14:${acc % 97}`;
  const ix15: number = buf.indexOf('p53');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  for (let i16 = 0; i16 < 4; i16++) {
    acc = (acc + i16 * 13 + 65) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 90) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  for (let i19 = 0; i19 < 4; i19++) {
    acc = (acc + i19 * 13 + 932) % 100003;
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = (acc * 31 + 6085) % 65521;
  acc = (acc * 31 + 7481) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-24'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-26'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 507 - (acc % 64);
  try { if (acc % 29 === 17) { throw new Error('synthetic-28'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  if (acc % 11 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 126) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 148) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  acc = (acc * 31 + 6286) % 65521;
  const ix39: number = buf.indexOf('p53');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  if (acc % 24 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  try { if (acc % 29 === 18) { throw new Error('synthetic-43'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 24) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += 'journey46-' + acc.toString();
  acc = (acc * 31 + 9385) % 65521;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  const ix50: number = buf.indexOf('p53');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const rc51: Rec53 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6956) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 138) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const ix6: number = buf.indexOf('p53');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  try { if (acc % 29 === 22) { throw new Error('synthetic-8'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-9'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 82) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 26) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  acc = (acc * 31 + 252) % 65521;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 122) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 680 - (acc % 91);
  try { if (acc % 29 === 16) { throw new Error('synthetic-19'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const ix20: number = buf.indexOf('p53');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = (acc * 31 + 6141) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const rc25: Rec53 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  arr.push(acc % 1000);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  acc = acc + 753 - (acc % 20);
  const rc30: Rec53 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 46) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  buf += 'warehouse33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 68) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  arr.push(acc % 1000);
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const ix38: number = buf.indexOf('p53');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  buf += `q39:${acc % 97}`;
  try { if (acc % 29 === 13) { throw new Error('synthetic-40'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i41 = 0; i41 < 3; i41++) {
    acc = (acc + i41 * 13 + 78) % 100003;
  }
  if (acc % 9 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  if (acc % 10 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7382) % 65521;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += `q48:${acc % 97}`;
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 127) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6957) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  const rc0: Rec53 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 197) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  buf += 'freight4-' + acc.toString();
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const rc6: Rec53 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 47) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  m01.set('k9', acc % 997);
  buf += 'customs10-' + acc.toString();
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  buf += `q12:${acc % 97}`;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 132) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += 'waybill14-' + acc.toString();
  acc = acc + 557 - (acc % 94);
  buf += 'tariff16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 138) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 865 - (acc % 57);
  const ix19: number = buf.indexOf('p53');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  acc = acc + 953 - (acc % 53);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k24', acc % 997);
  const rc25: Rec53 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 76) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 53) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 64) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  for (let i30 = 0; i30 < 6; i30++) {
    acc = (acc + i30 * 13 + 987) % 100003;
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 74) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 8; i35++) {
    acc = (acc + i35 * 13 + 698) % 100003;
  }
  for (let i36 = 0; i36 < 5; i36++) {
    acc = (acc + i36 * 13 + 943) % 100003;
  }
  if (acc % 21 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const rc39: Rec53 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  buf += `q40:${acc % 97}`;
  buf += `q41:${acc % 97}`;
  for (let i42 = 0; i42 < 5; i42++) {
    acc = (acc + i42 * 13 + 521) % 100003;
  }
  acc = acc + 455 - (acc % 18);
  if (acc % 16 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const ix45: number = buf.indexOf('p53');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 149) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  for (let i47 = 0; i47 < 8; i47++) {
    acc = (acc + i47 * 13 + 801) % 100003;
  }
  acc = (acc * 31 + 8390) % 65521;
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 181) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6958) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  acc = (acc * 31 + 6266) % 65521;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 69) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  m01.set('k5', acc % 997);
  if (acc % 31 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  buf += `q10:${acc % 97}`;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  for (let i13 = 0; i13 < 10; i13++) {
    acc = (acc + i13 * 13 + 437) % 100003;
  }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 49) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const rc16: Rec53 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 175) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  arr.push(acc % 1000);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 104) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 116) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  try { if (acc % 29 === 2) { throw new Error('synthetic-23'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 104) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  acc = acc + 802 - (acc % 93);
  acc = acc + 232 - (acc % 68);
  acc = (acc * 31 + 6107) % 65521;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-31'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'stocktake32-' + acc.toString();
  acc = (acc * 31 + 9691) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 13) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const rc38: Rec53 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += `q41:${acc % 97}`;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += `q45:${acc % 97}`;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  try { if (acc % 29 === 13) { throw new Error('synthetic-47'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 92) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = acc + 140 - (acc % 58);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6959) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  try { if (acc % 29 === 5) { throw new Error('synthetic-3'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const ix5: number = buf.indexOf('p53');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  buf += 'ledger6-' + acc.toString();
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const ix12: number = buf.indexOf('p53');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  buf += `q13:${acc % 97}`;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 152) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 605 - (acc % 30);
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  acc = (acc * 31 + 3666) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-23'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += 'carrier25-' + acc.toString();
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const ix27: number = buf.indexOf('p53');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  buf += 'sku28-' + acc.toString();
  try { if (acc % 29 === 22) { throw new Error('synthetic-29'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 9556) % 65521;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 107) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  buf += 'refund36-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 1712) % 65521;
  for (let i39 = 0; i39 < 8; i39++) {
    acc = (acc + i39 * 13 + 316) % 100003;
  }
  buf += 'transit40-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  acc = acc + 156 - (acc % 59);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  m01.set('k44', acc % 997);
  try { if (acc % 29 === 14) { throw new Error('synthetic-45'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 25 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 161) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  buf += `q48:${acc % 97}`;
  arr.push(acc % 1000);
  const ix50: number = buf.indexOf('p53');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const rc51: Rec53 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6960) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  if (acc % 8 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const ix1: number = buf.indexOf('p53');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const ix2: number = buf.indexOf('p53');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  m01.set('k3', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-5'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 37 - (acc % 15);
  buf += 'customs7-' + acc.toString();
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 30) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix10: number = buf.indexOf('p53');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  if (acc % 29 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = acc + 891 - (acc % 94);
  acc = acc + 784 - (acc % 16);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 132) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec53 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  if (acc % 26 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  m01.set('k22', acc % 997);
  const ix23: number = buf.indexOf('p53');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7273) % 65521;
  acc = acc + 698 - (acc % 43);
  const ix26: number = buf.indexOf('p53');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  m01.set('k27', acc % 997);
  buf += 'pickup28-' + acc.toString();
  const ix29: number = buf.indexOf('p53');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  buf += 'warehouse32-' + acc.toString();
  acc = (acc * 31 + 9977) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 197) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 2006) % 65521;
  if (acc % 5 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 46) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  buf += 'tariff38-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const ix40: number = buf.indexOf('p53');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  buf += `q43:${acc % 97}`;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  arr.push(acc % 1000);
  const ix46: number = buf.indexOf('p53');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const rc48: Rec53 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  for (let i49 = 0; i49 < 12; i49++) {
    acc = (acc + i49 * 13 + 767) % 100003;
  }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const rc51: Rec53 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6961) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  try { if (acc % 29 === 20) { throw new Error('synthetic-0'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k1', acc % 997);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  m01.set('k3', acc % 997);
  try { if (acc % 29 === 11) { throw new Error('synthetic-4'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const rc5: Rec53 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-8'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const rc10: Rec53 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  buf += 'tariff11-' + acc.toString();
  const ix12: number = buf.indexOf('p53');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  arr.push(acc % 1000);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 198) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = acc + 335 - (acc % 70);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const rc22: Rec53 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  if (acc % 8 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  buf += 'bay24-' + acc.toString();
  for (let i25 = 0; i25 < 10; i25++) {
    acc = (acc + i25 * 13 + 483) % 100003;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-26'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 26 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  buf += 'freight28-' + acc.toString();
  const rc29: Rec53 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (acc % 13 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 59) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 175) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 178 - (acc % 13);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 54) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  for (let i48 = 0; i48 < 11; i48++) {
    acc = (acc + i48 * 13 + 61) % 100003;
  }
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  acc = acc + 585 - (acc % 13);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6962) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  const rc0: Rec53 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  if (acc % 11 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  buf += 'freight5-' + acc.toString();
  const ix6: number = buf.indexOf('p53');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  const rc8: Rec53 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const ix9: number = buf.indexOf('p53');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  buf += 'carrier10-' + acc.toString();
  for (let i11 = 0; i11 < 9; i11++) {
    acc = (acc + i11 * 13 + 289) % 100003;
  }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  const rc14: Rec53 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  for (let i15 = 0; i15 < 7; i15++) {
    acc = (acc + i15 * 13 + 39) % 100003;
  }
  const rc16: Rec53 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 79) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k19', acc % 997);
  buf += `q20:${acc % 97}`;
  acc = acc + 685 - (acc % 67);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  if (acc % 25 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  acc = (acc * 31 + 690) % 65521;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 78) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  if (acc % 25 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = (acc * 31 + 3135) % 65521;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 116) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 92) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 8; i35++) {
    acc = (acc + i35 * 13 + 295) % 100003;
  }
  const ix36: number = buf.indexOf('p53');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  m01.set('k38', acc % 997);
  acc = acc + 48 - (acc % 11);
  buf += 'waybill40-' + acc.toString();
  const rc41: Rec53 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  acc = (acc * 31 + 3225) % 65521;
  for (let i43 = 0; i43 < 12; i43++) {
    acc = (acc + i43 * 13 + 85) % 100003;
  }
  acc = acc + 670 - (acc % 88);
  m01.set('k45', acc % 997);
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-48'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const ix49: number = buf.indexOf('p53');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = acc + 927 - (acc % 63);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0053_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0053_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0053_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6963) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  for (let i1 = 0; i1 < 8; i1++) {
    acc = (acc + i1 * 13 + 132) % 100003;
  }
  m01.set('k2', acc % 997);
  const ix3: number = buf.indexOf('p53');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 87) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  acc = acc + 818 - (acc % 64);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 68) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  buf += 'pallet12-' + acc.toString();
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  m01.set('k15', acc % 997);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 120) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 7248) % 65521;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const ix21: number = buf.indexOf('p53');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  for (let i24 = 0; i24 < 6; i24++) {
    acc = (acc + i24 * 13 + 80) % 100003;
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  m01.set('k26', acc % 997);
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const rc29: Rec53 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 159) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = acc + 935 - (acc % 52);
  buf += `q32:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 97) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 5412) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-36'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 17 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += 'ticket39-' + acc.toString();
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  if (acc % 13 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  const rc42: Rec53 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  acc = acc + 269 - (acc % 14);
  acc = (acc * 31 + 2828) % 65521;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  acc = acc + 137 - (acc % 40);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 54) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  buf += 'batch49-' + acc.toString();
  for (let i50 = 0; i50 < 6; i50++) {
    acc = (acc + i50 * 13 + 210) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6964) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  buf += `q0:${acc % 97}`;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  acc = (acc * 31 + 8014) % 65521;
  for (let i8 = 0; i8 < 10; i8++) {
    acc = (acc + i8 * 13 + 165) % 100003;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 71) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 58) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const ix13: number = buf.indexOf('p53');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  acc = acc + 883 - (acc % 33);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 14) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 198) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += `q20:${acc % 97}`;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  arr.push(acc % 1000);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 86) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = acc + 758 - (acc % 58);
  for (let i26 = 0; i26 < 10; i26++) {
    acc = (acc + i26 * 13 + 605) % 100003;
  }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 5245) % 65521;
  buf += `q29:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  if (acc % 20 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  for (let i33 = 0; i33 < 3; i33++) {
    acc = (acc + i33 * 13 + 297) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 193) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  acc = acc + 546 - (acc % 13);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  for (let i38 = 0; i38 < 10; i38++) {
    acc = (acc + i38 * 13 + 32) % 100003;
  }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 112) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = (acc * 31 + 6805) % 65521;
  buf += 'ledger41-' + acc.toString();
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9816) % 65521;
  const rc45: Rec53 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  for (let i46 = 0; i46 < 4; i46++) {
    acc = (acc + i46 * 13 + 481) % 100003;
  }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  acc = acc + 90 - (acc % 46);
  buf += `q49:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const ix51: number = buf.indexOf('p53');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6965) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  if (acc % 12 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-1'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  m01.set('k4', acc % 997);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  buf += 'settle6-' + acc.toString();
  arr.push(acc % 1000);
  buf += 'parcel8-' + acc.toString();
  if (acc % 27 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const rc12: Rec53 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  if (acc % 11 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += 'pickup15-' + acc.toString();
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 36) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  if (acc % 13 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = acc + 732 - (acc % 13);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const rc23: Rec53 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  buf += `q25:${acc % 97}`;
  acc = (acc * 31 + 9655) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  acc = acc + 236 - (acc % 83);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  buf += `q30:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const ix32: number = buf.indexOf('p53');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-33'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 62) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = (acc * 31 + 3324) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const rc38: Rec53 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const ix39: number = buf.indexOf('p53');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const rc40: Rec53 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  buf += `q41:${acc % 97}`;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += `q46:${acc % 97}`;
  for (let i47 = 0; i47 < 9; i47++) {
    acc = (acc + i47 * 13 + 801) % 100003;
  }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  buf += `q49:${acc % 97}`;
  const ix50: number = buf.indexOf('p53');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const ix51: number = buf.indexOf('p53');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6966) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 51) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 106) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  acc = acc + 903 - (acc % 7);
  buf += 'ticket4-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  acc = acc + 794 - (acc % 57);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 149) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  buf += `q10:${acc % 97}`;
  acc = (acc * 31 + 7419) % 65521;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  for (let i14 = 0; i14 < 3; i14++) {
    acc = (acc + i14 * 13 + 982) % 100003;
  }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 66) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  try { if (acc % 29 === 6) { throw new Error('synthetic-19'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q20:${acc % 97}`;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  if (acc % 18 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  try { if (acc % 29 === 15) { throw new Error('synthetic-25'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 797 - (acc % 88);
  try { if (acc % 29 === 19) { throw new Error('synthetic-27'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const ix29: number = buf.indexOf('p53');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  buf += 'audit30-' + acc.toString();
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const ix32: number = buf.indexOf('p53');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 175) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 10; i35++) {
    acc = (acc + i35 * 13 + 906) % 100003;
  }
  const ix36: number = buf.indexOf('p53');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 1186) % 65521;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const ix39: number = buf.indexOf('p53');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  buf += 'routeplan41-' + acc.toString();
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  try { if (acc % 29 === 3) { throw new Error('synthetic-43'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  acc = acc + 820 - (acc % 13);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 4431) % 65521;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const ix50: number = buf.indexOf('p53');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  if (acc % 17 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6967) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  m01.set('k2', acc % 997);
  arr.push(acc % 1000);
  acc = (acc * 31 + 7145) % 65521;
  buf += 'carrier5-' + acc.toString();
  const ix6: number = buf.indexOf('p53');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += `q7:${acc % 97}`;
  const rc8: Rec53 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 62) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  for (let i15 = 0; i15 < 4; i15++) {
    acc = (acc + i15 * 13 + 884) % 100003;
  }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 118) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  buf += 'policy19-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  arr.push(acc % 1000);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = (acc * 31 + 1009) % 65521;
  arr.push(acc % 1000);
  const rc27: Rec53 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  const rc28: Rec53 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  buf += 'ticket29-' + acc.toString();
  acc = acc + 904 - (acc % 76);
  for (let i31 = 0; i31 < 9; i31++) {
    acc = (acc + i31 * 13 + 517) % 100003;
  }
  arr.push(acc % 1000);
  const ix33: number = buf.indexOf('p53');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 114) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 147) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  buf += 'routeplan36-' + acc.toString();
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  buf += `q42:${acc % 97}`;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 100) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 13) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  for (let i46 = 0; i46 < 8; i46++) {
    acc = (acc + i46 * 13 + 85) % 100003;
  }
  acc = (acc * 31 + 8880) % 65521;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  const rc49: Rec53 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  arr.push(acc % 1000);
  if (acc % 20 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6968) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  buf += 'waybill0-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  const ix2: number = buf.indexOf('p53');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-3'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  buf += `q6:${acc % 97}`;
  acc = acc + 39 - (acc % 33);
  buf += `q8:${acc % 97}`;
  arr.push(acc % 1000);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 88) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  buf += `q11:${acc % 97}`;
  const rc12: Rec53 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  acc = (acc * 31 + 5686) % 65521;
  const ix14: number = buf.indexOf('p53');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 111) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  try { if (acc % 29 === 20) { throw new Error('synthetic-16'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 50) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 19 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += `q19:${acc % 97}`;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 58) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-28'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  buf += 'customs32-' + acc.toString();
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 34) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec53 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  buf += 'journey36-' + acc.toString();
  for (let i37 = 0; i37 < 4; i37++) {
    acc = (acc + i37 * 13 + 411) % 100003;
  }
  buf += `q38:${acc % 97}`;
  for (let i39 = 0; i39 < 8; i39++) {
    acc = (acc + i39 * 13 + 779) % 100003;
  }
  for (let i40 = 0; i40 < 7; i40++) {
    acc = (acc + i40 * 13 + 443) % 100003;
  }
  m01.set('k41', acc % 997);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 106) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  for (let i43 = 0; i43 < 12; i43++) {
    acc = (acc + i43 * 13 + 380) % 100003;
  }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  try { if (acc % 29 === 5) { throw new Error('synthetic-45'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 26) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  try { if (acc % 29 === 17) { throw new Error('synthetic-49'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  const rc50: Rec53 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6969) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  m01.set('k0', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  m01.set('k4', acc % 997);
  m01.set('k5', acc % 997);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  m01.set('k7', acc % 997);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  arr.push(acc % 1000);
  buf += 'customs13-' + acc.toString();
  acc = acc + 903 - (acc % 11);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 73) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 164) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  if (acc % 31 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const rc20: Rec53 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  for (let i22 = 0; i22 < 3; i22++) {
    acc = (acc + i22 * 13 + 430) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  m01.set('k25', acc % 997);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-27'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q28:${acc % 97}`;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 32) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const ix30: number = buf.indexOf('p53');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  if (acc % 5 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8624) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 154) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i36 = 0; i36 < 10; i36++) {
    acc = (acc + i36 * 13 + 821) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4025) % 65521;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-40'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  if (acc % 19 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const rc43: Rec53 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  m01.set('k44', acc % 997);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  buf += 'order46-' + acc.toString();
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-49'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'shelf50-' + acc.toString();
  const ix51: number = buf.indexOf('p53');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6970) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  for (let i0 = 0; i0 < 7; i0++) {
    acc = (acc + i0 * 13 + 929) % 100003;
  }
  const ix1: number = buf.indexOf('p53');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  acc = acc + 975 - (acc % 74);
  for (let i4 = 0; i4 < 6; i4++) {
    acc = (acc + i4 * 13 + 668) % 100003;
  }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  buf += 'customs6-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  acc = acc + 747 - (acc % 84);
  for (let i11 = 0; i11 < 12; i11++) {
    acc = (acc + i11 * 13 + 565) % 100003;
  }
  acc = (acc * 31 + 973) % 65521;
  buf += 'batch13-' + acc.toString();
  acc = acc + 586 - (acc % 93);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 98) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 25) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = (acc * 31 + 9665) % 65521;
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  m01.set('k20', acc % 997);
  const ix21: number = buf.indexOf('p53');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  acc = acc + 576 - (acc % 80);
  try { if (acc % 29 === 22) { throw new Error('synthetic-24'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  buf += `q26:${acc % 97}`;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const rc28: Rec53 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  m01.set('k30', acc % 997);
  buf += 'crate31-' + acc.toString();
  acc = acc + 294 - (acc % 35);
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 139) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  buf += 'freight36-' + acc.toString();
  m01.set('k37', acc % 997);
  const ix38: number = buf.indexOf('p53');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  for (let i40 = 0; i40 < 4; i40++) {
    acc = (acc + i40 * 13 + 811) % 100003;
  }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += 'payout43-' + acc.toString();
  acc = (acc * 31 + 9530) % 65521;
  arr.push(acc % 1000);
  m01.set('k46', acc % 997);
  arr.push(acc % 1000);
  const rc48: Rec53 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  const rc50: Rec53 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6971) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 55) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 157) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-2'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q3:${acc % 97}`;
  buf += 'invoice4-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  if (acc % 31 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 57) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 186) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  acc = acc + 591 - (acc % 28);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  buf += `q13:${acc % 97}`;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 130) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  const ix23: number = buf.indexOf('p53');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  buf += 'pallet24-' + acc.toString();
  const ix25: number = buf.indexOf('p53');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const ix29: number = buf.indexOf('p53');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  buf += `q30:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 635) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 19) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  const rc36: Rec53 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  try { if (acc % 29 === 18) { throw new Error('synthetic-37'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-38'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q39:${acc % 97}`;
  if (acc % 28 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 151) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = acc + 548 - (acc % 18);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  for (let i48 = 0; i48 < 12; i48++) {
    acc = (acc + i48 * 13 + 827) % 100003;
  }
  acc = acc + 124 - (acc % 81);
  if (acc % 17 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6972) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  buf += 'quota2-' + acc.toString();
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = (acc * 31 + 2154) % 65521;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 88) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  m01.set('k8', acc % 997);
  if (acc % 13 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const rc10: Rec53 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  buf += 'ticket12-' + acc.toString();
  for (let i13 = 0; i13 < 7; i13++) {
    acc = (acc + i13 * 13 + 389) % 100003;
  }
  if (acc % 14 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const rc16: Rec53 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 91) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const rc19: Rec53 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = acc + 434 - (acc % 25);
  acc = (acc * 31 + 4320) % 65521;
  const ix22: number = buf.indexOf('p53');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  acc = (acc * 31 + 1687) % 65521;
  buf += 'dock27-' + acc.toString();
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 192) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const rc29: Rec53 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 35) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  buf += 'ticket31-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  if (acc % 20 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 34) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  try { if (acc % 29 === 3) { throw new Error('synthetic-36'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q37:${acc % 97}`;
  buf += 'region38-' + acc.toString();
  arr.push(acc % 1000);
  acc = (acc * 31 + 5539) % 65521;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  acc = acc + 794 - (acc % 91);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 102) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  acc = acc + 284 - (acc % 84);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  buf += `q49:${acc % 97}`;
  try { if (acc % 29 === 15) { throw new Error('synthetic-50'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0053_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0053_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0053_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6973) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  acc = acc + 60 - (acc % 79);
  buf += `q1:${acc % 97}`;
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  if (acc % 15 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  m01.set('k5', acc % 997);
  if (acc % 27 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  buf += 'dock7-' + acc.toString();
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 86) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  acc = acc + 823 - (acc % 75);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const rc11: Rec53 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  buf += 'tariff12-' + acc.toString();
  const rc13: Rec53 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  buf += 'region14-' + acc.toString();
  m01.set('k15', acc % 997);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 169) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 12; i18++) {
    acc = (acc + i18 * 13 + 387) % 100003;
  }
  acc = acc + 933 - (acc % 45);
  acc = acc + 51 - (acc % 96);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const ix22: number = buf.indexOf('p53');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  acc = acc + 251 - (acc % 57);
  acc = acc + 511 - (acc % 21);
  for (let i25 = 0; i25 < 6; i25++) {
    acc = (acc + i25 * 13 + 860) % 100003;
  }
  buf += `q26:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = acc + 335 - (acc % 74);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  try { if (acc % 29 === 11) { throw new Error('synthetic-30'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 108) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  buf += 'rebate33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 89) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  m01.set('k36', acc % 997);
  const ix37: number = buf.indexOf('p53');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const ix38: number = buf.indexOf('p53');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  const rc39: Rec53 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  m01.set('k41', acc % 997);
  acc = acc + 702 - (acc % 12);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  arr.push(acc % 1000);
  if (acc % 22 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  buf += `q47:${acc % 97}`;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const rc50: Rec53 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6974) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  m01.set('k0', acc % 997);
  const rc1: Rec53 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const ix2: number = buf.indexOf('p53');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = acc + 351 - (acc % 50);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  for (let i7 = 0; i7 < 7; i7++) {
    acc = (acc + i7 * 13 + 656) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  arr.push(acc % 1000);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  const rc11: Rec53 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  m01.set('k15', acc % 997);
  try { if (acc % 29 === 19) { throw new Error('synthetic-16'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 197) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  const rc19: Rec53 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  buf += `q20:${acc % 97}`;
  acc = (acc * 31 + 7908) % 65521;
  if (acc % 7 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const rc23: Rec53 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  m01.set('k25', acc % 997);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 34) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  if (acc % 22 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  acc = acc + 29 - (acc % 47);
  m01.set('k30', acc % 997);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 194) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'batch33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 112) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const rc39: Rec53 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 172) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = (acc * 31 + 2022) % 65521;
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  buf += 'client44-' + acc.toString();
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  for (let i46 = 0; i46 < 3; i46++) {
    acc = (acc + i46 * 13 + 504) % 100003;
  }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const rc50: Rec53 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6975) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  try { if (acc % 29 === 12) { throw new Error('synthetic-0'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q1:${acc % 97}`;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 163) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  for (let i5 = 0; i5 < 8; i5++) {
    acc = (acc + i5 * 13 + 36) % 100003;
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 24) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 51) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += `q9:${acc % 97}`;
  m01.set('k10', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const ix12: number = buf.indexOf('p53');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const ix15: number = buf.indexOf('p53');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  for (let i16 = 0; i16 < 8; i16++) {
    acc = (acc + i16 * 13 + 372) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 184) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  buf += `q21:${acc % 97}`;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  for (let i23 = 0; i23 < 8; i23++) {
    acc = (acc + i23 * 13 + 324) % 100003;
  }
  if (acc % 23 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  try { if (acc % 29 === 9) { throw new Error('synthetic-26'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q27:${acc % 97}`;
  try { if (acc % 29 === 16) { throw new Error('synthetic-28'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const ix29: number = buf.indexOf('p53');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 163) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 139) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 164) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  m01.set('k39', acc % 997);
  for (let i40 = 0; i40 < 5; i40++) {
    acc = (acc + i40 * 13 + 803) % 100003;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-41'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const ix43: number = buf.indexOf('p53');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  m01.set('k44', acc % 997);
  if (acc % 11 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 142) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  acc = acc + 356 - (acc % 60);
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 169) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  const ix50: number = buf.indexOf('p53');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6976) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  const rc0: Rec53 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-2'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 33) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  m01.set('k4', acc % 997);
  acc = acc + 845 - (acc % 35);
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  buf += `q10:${acc % 97}`;
  buf += `q11:${acc % 97}`;
  buf += `q12:${acc % 97}`;
  for (let i13 = 0; i13 < 4; i13++) {
    acc = (acc + i13 * 13 + 211) % 100003;
  }
  buf += `q14:${acc % 97}`;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  acc = acc + 41 - (acc % 72);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 32) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  m01.set('k19', acc % 997);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  buf += 'region21-' + acc.toString();
  acc = (acc * 31 + 2582) % 65521;
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  try { if (acc % 29 === 2) { throw new Error('synthetic-24'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k25', acc % 997);
  buf += `q26:${acc % 97}`;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  const rc28: Rec53 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  for (let i29 = 0; i29 < 5; i29++) {
    acc = (acc + i29 * 13 + 162) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  if (acc % 24 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const rc32: Rec53 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 191) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p53');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  buf += `q36:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 93) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  acc = acc + 42 - (acc % 57);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += `q42:${acc % 97}`;
  buf += 'order43-' + acc.toString();
  for (let i44 = 0; i44 < 6; i44++) {
    acc = (acc + i44 * 13 + 267) % 100003;
  }
  acc = (acc * 31 + 8251) % 65521;
  const rc46: Rec53 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  acc = acc + 323 - (acc % 41);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6977) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  acc = (acc * 31 + 7867) % 65521;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  arr.push(acc % 1000);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 11) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 70) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 9626) % 65521;
  for (let i10 = 0; i10 < 11; i10++) {
    acc = (acc + i10 * 13 + 703) % 100003;
  }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  for (let i13 = 0; i13 < 9; i13++) {
    acc = (acc + i13 * 13 + 489) % 100003;
  }
  const ix14: number = buf.indexOf('p53');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  buf += 'invoice16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 182) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 31 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  try { if (acc % 29 === 20) { throw new Error('synthetic-21'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const ix22: number = buf.indexOf('p53');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-23'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k24', acc % 997);
  const ix25: number = buf.indexOf('p53');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  buf += `q27:${acc % 97}`;
  arr.push(acc % 1000);
  const rc29: Rec53 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  acc = acc + 671 - (acc % 56);
  acc = (acc * 31 + 265) % 65521;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = acc + 767 - (acc % 11);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 26) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 28 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  acc = (acc * 31 + 6845) % 65521;
  for (let i39 = 0; i39 < 10; i39++) {
    acc = (acc + i39 * 13 + 611) % 100003;
  }
  const ix40: number = buf.indexOf('p53');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  for (let i41 = 0; i41 < 11; i41++) {
    acc = (acc + i41 * 13 + 76) % 100003;
  }
  acc = acc + 417 - (acc % 88);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 183) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = (acc * 31 + 9879) % 65521;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const ix48: number = buf.indexOf('p53');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  try { if (acc % 29 === 5) { throw new Error('synthetic-50'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6978) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  buf += `q0:${acc % 97}`;
  const rc1: Rec53 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  arr.push(acc % 1000);
  const ix3: number = buf.indexOf('p53');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  m01.set('k4', acc % 997);
  arr.push(acc % 1000);
  try { if (acc % 29 === 13) { throw new Error('synthetic-6'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  acc = (acc * 31 + 7600) % 65521;
  buf += 'customs9-' + acc.toString();
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  try { if (acc % 29 === 20) { throw new Error('synthetic-12'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-16'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 41) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec53 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  acc = acc + 926 - (acc % 22);
  buf += 'pallet21-' + acc.toString();
  const rc22: Rec53 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  buf += `q23:${acc % 97}`;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-26'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 14) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const rc28: Rec53 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  for (let i29 = 0; i29 < 10; i29++) {
    acc = (acc + i29 * 13 + 865) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 154) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  m01.set('k37', acc % 997);
  acc = (acc * 31 + 4209) % 65521;
  buf += `q39:${acc % 97}`;
  for (let i40 = 0; i40 < 5; i40++) {
    acc = (acc + i40 * 13 + 489) % 100003;
  }
  buf += `q41:${acc % 97}`;
  const ix42: number = buf.indexOf('p53');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  m01.set('k45', acc % 997);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  try { if (acc % 29 === 23) { throw new Error('synthetic-47'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const ix48: number = buf.indexOf('p53');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  buf += `q50:${acc % 97}`;
  acc = acc + 248 - (acc % 35);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6979) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  if (acc % 16 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  arr.push(acc % 1000);
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  buf += 'depot5-' + acc.toString();
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const ix7: number = buf.indexOf('p53');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  buf += `q9:${acc % 97}`;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 17) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q12:${acc % 97}`;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 100) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  acc = (acc * 31 + 7804) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 175) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 181) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const rc24: Rec53 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const rc26: Rec53 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  for (let i27 = 0; i27 < 4; i27++) {
    acc = (acc + i27 * 13 + 285) % 100003;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-28'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-29'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  const ix30: number = buf.indexOf('p53');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (acc % 27 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  if (acc % 16 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 169) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 658 - (acc % 29);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const ix37: number = buf.indexOf('p53');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const ix38: number = buf.indexOf('p53');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  if (acc % 11 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 192) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  buf += `q42:${acc % 97}`;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  m01.set('k44', acc % 997);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const rc46: Rec53 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  m01.set('k47', acc % 997);
  buf += `q48:${acc % 97}`;
  const rc49: Rec53 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  acc = acc + 215 - (acc % 28);
  for (let i51 = 0; i51 < 12; i51++) {
    acc = (acc + i51 * 13 + 118) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6980) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  try { if (acc % 29 === 7) { throw new Error('synthetic-0'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-1'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 120) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5524) % 65521;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const ix9: number = buf.indexOf('p53');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const rc10: Rec53 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  if (acc % 11 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const rc12: Rec53 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  if (acc % 8 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2470) % 65521;
  acc = (acc * 31 + 5712) % 65521;
  const rc16: Rec53 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 118) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const rc19: Rec53 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  buf += 'freight21-' + acc.toString();
  try { if (acc % 29 === 6) { throw new Error('synthetic-22'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 892 - (acc % 13);
  for (let i24 = 0; i24 < 4; i24++) {
    acc = (acc + i24 * 13 + 112) % 100003;
  }
  acc = acc + 152 - (acc % 49);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  for (let i27 = 0; i27 < 7; i27++) {
    acc = (acc + i27 * 13 + 101) % 100003;
  }
  m01.set('k28', acc % 997);
  const ix29: number = buf.indexOf('p53');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  buf += 'carrier33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 24) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  for (let i36 = 0; i36 < 8; i36++) {
    acc = (acc + i36 * 13 + 195) % 100003;
  }
  arr.push(acc % 1000);
  buf += 'region38-' + acc.toString();
  buf += 'invoice39-' + acc.toString();
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 75) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 118) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = acc + 125 - (acc % 30);
  buf += 'batch43-' + acc.toString();
  buf += `q44:${acc % 97}`;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  arr.push(acc % 1000);
  try { if (acc % 29 === 15) { throw new Error('synthetic-47'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const rc49: Rec53 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const ix50: number = buf.indexOf('p53');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  for (let i51 = 0; i51 < 7; i51++) {
    acc = (acc + i51 * 13 + 260) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6981) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  const ix0: number = buf.indexOf('p53');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  m01.set('k1', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (acc % 30 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 6141) % 65521;
  const ix6: number = buf.indexOf('p53');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const ix9: number = buf.indexOf('p53');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  acc = acc + 126 - (acc % 42);
  if (acc % 9 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  m01.set('k14', acc % 997);
  if (acc % 24 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  for (let i16 = 0; i16 < 3; i16++) {
    acc = (acc + i16 * 13 + 758) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 76) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  for (let i19 = 0; i19 < 9; i19++) {
    acc = (acc + i19 * 13 + 888) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  buf += `q21:${acc % 97}`;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  if (acc % 14 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  for (let i25 = 0; i25 < 3; i25++) {
    acc = (acc + i25 * 13 + 595) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const rc29: Rec53 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  try { if (acc % 29 === 17) { throw new Error('synthetic-30'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  acc = acc + 445 - (acc % 52);
  const rc33: Rec53 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 22) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 105) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = acc + 605 - (acc % 54);
  m01.set('k37', acc % 997);
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  acc = acc + 37 - (acc % 78);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  for (let i46 = 0; i46 < 6; i46++) {
    acc = (acc + i46 * 13 + 914) % 100003;
  }
  arr.push(acc % 1000);
  const ix48: number = buf.indexOf('p53');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += 'customs49-' + acc.toString();
  m01.set('k50', acc % 997);
  acc = (acc * 31 + 1163) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6982) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  acc = (acc * 31 + 1323) % 65521;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += `q6:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const rc8: Rec53 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  const ix10: number = buf.indexOf('p53');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  arr.push(acc % 1000);
  acc = acc + 225 - (acc % 25);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 173) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 20) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  try { if (acc % 29 === 7) { throw new Error('synthetic-19'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-20'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  for (let i22 = 0; i22 < 10; i22++) {
    acc = (acc + i22 * 13 + 948) % 100003;
  }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  try { if (acc % 29 === 2) { throw new Error('synthetic-25'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  for (let i27 = 0; i27 < 11; i27++) {
    acc = (acc + i27 * 13 + 912) % 100003;
  }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  buf += `q29:${acc % 97}`;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = (acc * 31 + 2582) % 65521;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 171) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 124) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  try { if (acc % 29 === 22) { throw new Error('synthetic-37'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 127) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = acc + 441 - (acc % 16);
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const ix46: number = buf.indexOf('p53');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  buf += 'refund47-' + acc.toString();
  acc = (acc * 31 + 8594) % 65521;
  const ix49: number = buf.indexOf('p53');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0053_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0053_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0053_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6983) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  buf += `q0:${acc % 97}`;
  arr.push(acc % 1000);
  acc = acc + 381 - (acc % 66);
  acc = (acc * 31 + 1183) % 65521;
  m01.set('k4', acc % 997);
  arr.push(acc % 1000);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  buf += `q7:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const ix9: number = buf.indexOf('p53');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  if (acc % 24 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += 'warehouse15-' + acc.toString();
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 65) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 4) { throw new Error('synthetic-18'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6841) % 65521;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  for (let i21 = 0; i21 < 4; i21++) {
    acc = (acc + i21 * 13 + 840) % 100003;
  }
  if (acc % 20 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  try { if (acc % 29 === 3) { throw new Error('synthetic-23'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = acc + 380 - (acc % 82);
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = acc + 527 - (acc % 81);
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  buf += 'order31-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 71) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  for (let i39 = 0; i39 < 9; i39++) {
    acc = (acc + i39 * 13 + 287) % 100003;
  }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  try { if (acc % 29 === 9) { throw new Error('synthetic-41'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 176) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-44'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  for (let i46 = 0; i46 < 11; i46++) {
    acc = (acc + i46 * 13 + 372) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  if (acc % 29 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  for (let i50 = 0; i50 < 8; i50++) {
    acc = (acc + i50 * 13 + 690) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6984) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const ix1: number = buf.indexOf('p53');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  for (let i2 = 0; i2 < 11; i2++) {
    acc = (acc + i2 * 13 + 177) % 100003;
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 183) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const rc5: Rec53 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  acc = (acc * 31 + 3586) % 65521;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  m01.set('k9', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += `q11:${acc % 97}`;
  buf += `q12:${acc % 97}`;
  try { if (acc % 29 === 8) { throw new Error('synthetic-13'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3861) % 65521;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 88) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  for (let i20 = 0; i20 < 8; i20++) {
    acc = (acc + i20 * 13 + 273) % 100003;
  }
  m01.set('k21', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  try { if (acc % 29 === 5) { throw new Error('synthetic-23'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 110) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 141) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  for (let i30 = 0; i30 < 8; i30++) {
    acc = (acc + i30 * 13 + 534) % 100003;
  }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 142) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  for (let i33 = 0; i33 < 6; i33++) {
    acc = (acc + i33 * 13 + 328) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 192) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  buf += `q36:${acc % 97}`;
  const rc37: Rec53 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  const rc38: Rec53 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  arr.push(acc % 1000);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 86) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  acc = acc + 812 - (acc % 74);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 89) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  const ix45: number = buf.indexOf('p53');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4733) % 65521;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  acc = (acc * 31 + 3180) % 65521;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 142) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  const ix50: number = buf.indexOf('p53');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  acc = acc + 880 - (acc % 22);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0053_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6985) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit53 = new Unit53(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 59) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  buf += `q2:${acc % 97}`;
  acc = (acc * 31 + 9720) % 65521;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  buf += `q5:${acc % 97}`;
  if (acc % 11 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  try { if (acc % 29 === 18) { throw new Error('synthetic-7'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const ix8: number = buf.indexOf('p53');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  buf += 'freight9-' + acc.toString();
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 94) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  for (let i11 = 0; i11 < 5; i11++) {
    acc = (acc + i11 * 13 + 8) % 100003;
  }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const rc13: Rec53 = { id: acc % 1000, tag: 't13', score: acc % 100 };
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
  acc = acc + 605 - (acc % 97);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 71) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  m01.set('k19', acc % 997);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 90) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  if (acc % 24 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  acc = acc + 673 - (acc % 20);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const rc24: Rec53 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  try { if (acc % 29 === 15) { throw new Error('synthetic-25'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'depot26-' + acc.toString();
  buf += `q27:${acc % 97}`;
  acc = acc + 187 - (acc % 67);
  m01.set('k29', acc % 997);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  buf += `q31:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const ix33: number = buf.indexOf('p53');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 100) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 186) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  acc = acc + 331 - (acc % 56);
  m01.set('k39', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const ix41: number = buf.indexOf('p53');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const ix42: number = buf.indexOf('p53');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  buf += 'balance43-' + acc.toString();
  acc = acc + 660 - (acc % 53);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += `q46:${acc % 97}`;
  const ix47: number = buf.indexOf('p53');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-49'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const rc50: Rec53 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0053(): BizFn[] {
  return [biz_0053_00, biz_0053_01, biz_0053_02, biz_0053_03, biz_0053_04, biz_0053_05, biz_0053_06, biz_0053_07, biz_0053_08, biz_0053_09, biz_0053_10, biz_0053_11, biz_0053_12, biz_0053_13, biz_0053_14, biz_0053_15, biz_0053_16, biz_0053_17, biz_0053_18, biz_0053_19, biz_0053_20, biz_0053_21, biz_0053_22, biz_0053_23, biz_0053_24, biz_0053_25, biz_0053_26, biz_0053_27, biz_0053_28, biz_0053_29, biz_0053_30, biz_0053_31, biz_0053_32, biz_0053_33, biz_0053_34, biz_0053_35, biz_0053_36, biz_0053_37, biz_0053_38, biz_0053_39, biz_0053_40, biz_0053_41, biz_0053_42];
}

export function rega_0053(): ABizFn[] {
  return [biz_0053_09a, biz_0053_19a, biz_0053_29a, biz_0053_39a];
}
