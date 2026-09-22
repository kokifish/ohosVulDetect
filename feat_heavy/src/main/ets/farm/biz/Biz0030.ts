// Biz0030.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec30 { id: number; tag: string; score: number; }

class Unit30 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0030_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3930) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  const ix0: number = buf.indexOf('p30');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 171) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const t02: string = tags.length > 0 ? tags[0] : 'none';
  buf += t02;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 159) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 74) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const rc5: Rec30 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += 'depot6-' + acc.toString();
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  m01.set('k8', acc % 997);
  buf += 'crate9-' + acc.toString();
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = (acc * 31 + 1258) % 65521;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 73) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  if (acc % 14 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  for (let i15 = 0; i15 < 8; i15++) {
    acc = (acc + i15 * 13 + 721) % 100003;
  }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 83) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += 'ticket19-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (acc % 11 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  if (acc % 16 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const ix26: number = buf.indexOf('p30');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  buf += 'region27-' + acc.toString();
  buf += `q28:${acc % 97}`;
  buf += 'parcel29-' + acc.toString();
  if (acc % 23 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const rc32: Rec30 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  if (acc % 24 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 85) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 7; i35++) {
    acc = (acc + i35 * 13 + 983) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const rc37: Rec30 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  buf += 'crate38-' + acc.toString();
  arr.push(acc % 1000);
  acc = acc + 711 - (acc % 83);
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const rc43: Rec30 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  acc = (acc * 31 + 7570) % 65521;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = acc + 171 - (acc % 28);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const ix48: number = buf.indexOf('p30');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  buf += 'freight49-' + acc.toString();
  if (acc % 14 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3931) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  acc = acc + 149 - (acc % 62);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 60) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  m01.set('k4', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  for (let i8 = 0; i8 < 3; i8++) {
    acc = (acc + i8 * 13 + 178) % 100003;
  }
  if (acc % 18 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 197) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  m01.set('k13', acc % 997);
  if (acc % 18 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  m01.set('k15', acc % 997);
  buf += 'sku16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 182) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += 'warehouse24-' + acc.toString();
  try { if (acc % 29 === 11) { throw new Error('synthetic-25'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const rc27: Rec30 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  buf += `q29:${acc % 97}`;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 77) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 77) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  buf += 'carrier32-' + acc.toString();
  acc = (acc * 31 + 6779) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 193) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-35'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 64) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  const rc37: Rec30 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  for (let i38 = 0; i38 < 7; i38++) {
    acc = (acc + i38 * 13 + 756) % 100003;
  }
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  arr.push(acc % 1000);
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  try { if (acc % 29 === 9) { throw new Error('synthetic-42'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q43:${acc % 97}`;
  const ix44: number = buf.indexOf('p30');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  for (let i46 = 0; i46 < 4; i46++) {
    acc = (acc + i46 * 13 + 261) % 100003;
  }
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  acc = acc + 84 - (acc % 51);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3932) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  buf += 'rebate0-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = acc + 453 - (acc % 72);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 62) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 86) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  for (let i7 = 0; i7 < 3; i7++) {
    acc = (acc + i7 * 13 + 273) % 100003;
  }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  m01.set('k9', acc % 997);
  m01.set('k10', acc % 997);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  try { if (acc % 29 === 23) { throw new Error('synthetic-13'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 145) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 71) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  buf += 'bay21-' + acc.toString();
  m01.set('k22', acc % 997);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  acc = acc + 118 - (acc % 45);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  const ix27: number = buf.indexOf('p30');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const rc29: Rec30 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  try { if (acc % 29 === 19) { throw new Error('synthetic-30'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-31'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q32:${acc % 97}`;
  if (acc % 10 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 24) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec30 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (acc % 27 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  if (acc % 10 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  buf += 'bay40-' + acc.toString();
  for (let i41 = 0; i41 < 11; i41++) {
    acc = (acc + i41 * 13 + 846) % 100003;
  }
  for (let i42 = 0; i42 < 3; i42++) {
    acc = (acc + i42 * 13 + 37) % 100003;
  }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 36) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  m01.set('k45', acc % 997);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = acc + 435 - (acc % 71);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  try { if (acc % 29 === 20) { throw new Error('synthetic-50'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3933) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  buf += `q1:${acc % 97}`;
  acc = acc + 882 - (acc % 89);
  buf += 'settle3-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  acc = acc + 746 - (acc % 65);
  try { if (acc % 29 === 6) { throw new Error('synthetic-13'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 110) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  acc = (acc * 31 + 1259) % 65521;
  const ix16: number = buf.indexOf('p30');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 171) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  acc = (acc * 31 + 7965) % 65521;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += `q24:${acc % 97}`;
  acc = acc + 196 - (acc % 64);
  m01.set('k26', acc % 997);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  buf += `q28:${acc % 97}`;
  buf += `q29:${acc % 97}`;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  buf += 'bay31-' + acc.toString();
  acc = acc + 889 - (acc % 54);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 102) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p30');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  m01.set('k36', acc % 997);
  for (let i37 = 0; i37 < 10; i37++) {
    acc = (acc + i37 * 13 + 657) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  m01.set('k39', acc % 997);
  const rc40: Rec30 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 37) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const rc44: Rec30 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  const ix45: number = buf.indexOf('p30');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  acc = acc + 525 - (acc % 54);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += `q49:${acc % 97}`;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3934) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  for (let i0 = 0; i0 < 11; i0++) {
    acc = (acc + i0 * 13 + 388) % 100003;
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const ix3: number = buf.indexOf('p30');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  buf += `q4:${acc % 97}`;
  m01.set('k5', acc % 997);
  buf += 'audit6-' + acc.toString();
  const ix7: number = buf.indexOf('p30');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  buf += 'depot8-' + acc.toString();
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 47) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  acc = acc + 584 - (acc % 61);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 63) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  buf += `q12:${acc % 97}`;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  try { if (acc % 29 === 10) { throw new Error('synthetic-15'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 75) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec30 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const ix20: number = buf.indexOf('p30');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7947) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const ix23: number = buf.indexOf('p30');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2887) % 65521;
  m01.set('k26', acc % 997);
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  if (acc % 20 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  buf += 'refund31-' + acc.toString();
  if (acc % 19 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 115) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  buf += `q36:${acc % 97}`;
  for (let i37 = 0; i37 < 5; i37++) {
    acc = (acc + i37 * 13 + 258) % 100003;
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-38'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const ix40: number = buf.indexOf('p30');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  if (acc % 29 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  acc = (acc * 31 + 4381) % 65521;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  arr.push(acc % 1000);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  if (acc % 16 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  buf += 'ledger47-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const rc49: Rec30 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const ix50: number = buf.indexOf('p30');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3935) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  acc = acc + 412 - (acc % 37);
  acc = (acc * 31 + 451) % 65521;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 31) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  const ix4: number = buf.indexOf('p30');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  if (acc % 6 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 190) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (acc % 27 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const ix11: number = buf.indexOf('p30');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += 'depot13-' + acc.toString();
  buf += 'region14-' + acc.toString();
  const rc15: Rec30 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 40) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec30 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  try { if (acc % 29 === 23) { throw new Error('synthetic-19'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  buf += `q22:${acc % 97}`;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  const rc24: Rec30 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  buf += `q25:${acc % 97}`;
  buf += `q26:${acc % 97}`;
  buf += 'quota27-' + acc.toString();
  for (let i28 = 0; i28 < 10; i28++) {
    acc = (acc + i28 * 13 + 339) % 100003;
  }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  for (let i32 = 0; i32 < 10; i32++) {
    acc = (acc + i32 * 13 + 412) % 100003;
  }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 172) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-35'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4752) % 65521;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  m01.set('k38', acc % 997);
  for (let i39 = 0; i39 < 6; i39++) {
    acc = (acc + i39 * 13 + 823) % 100003;
  }
  arr.push(acc % 1000);
  m01.set('k41', acc % 997);
  arr.push(acc % 1000);
  buf += 'sku43-' + acc.toString();
  m01.set('k44', acc % 997);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const ix51: number = buf.indexOf('p30');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3936) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  acc = acc + 185 - (acc % 51);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const rc2: Rec30 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  acc = (acc * 31 + 4781) % 65521;
  for (let i9 = 0; i9 < 5; i9++) {
    acc = (acc + i9 * 13 + 574) % 100003;
  }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 164) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  acc = (acc * 31 + 8768) % 65521;
  try { if (acc % 29 === 14) { throw new Error('synthetic-15'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 819 - (acc % 65);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 157) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 79) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  for (let i23 = 0; i23 < 11; i23++) {
    acc = (acc + i23 * 13 + 728) % 100003;
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  try { if (acc % 29 === 4) { throw new Error('synthetic-25'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'vendor26-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const ix28: number = buf.indexOf('p30');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8060) % 65521;
  buf += `q30:${acc % 97}`;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  acc = (acc * 31 + 2592) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 186) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  m01.set('k38', acc % 997);
  buf += 'invoice39-' + acc.toString();
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  try { if (acc % 29 === 19) { throw new Error('synthetic-42'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'client43-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const rc45: Rec30 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  buf += `q46:${acc % 97}`;
  const ix47: number = buf.indexOf('p30');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 35) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  if (acc % 6 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  buf += 'policy51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3937) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  arr.push(acc % 1000);
  acc = (acc * 31 + 5767) % 65521;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 15) { throw new Error('synthetic-4'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 74) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 37) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  buf += `q7:${acc % 97}`;
  const rc8: Rec30 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  buf += `q9:${acc % 97}`;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 162) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 82) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const rc13: Rec30 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  acc = acc + 589 - (acc % 34);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 141) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  const rc19: Rec30 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  arr.push(acc % 1000);
  try { if (acc % 29 === 3) { throw new Error('synthetic-21'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  m01.set('k23', acc % 997);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 54) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  acc = (acc * 31 + 5998) % 65521;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  buf += 'dock29-' + acc.toString();
  const rc30: Rec30 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const ix32: number = buf.indexOf('p30');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += 'settle33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 162) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 940 - (acc % 64);
  acc = acc + 680 - (acc % 33);
  acc = (acc * 31 + 3273) % 65521;
  const ix38: number = buf.indexOf('p30');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-39'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  arr.push(acc % 1000);
  acc = (acc * 31 + 9886) % 65521;
  const rc43: Rec30 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  m01.set('k44', acc % 997);
  const ix45: number = buf.indexOf('p30');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  buf += `q46:${acc % 97}`;
  const ix47: number = buf.indexOf('p30');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  buf += `q48:${acc % 97}`;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  m01.set('k50', acc % 997);
  acc = (acc * 31 + 9189) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3938) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  buf += `q2:${acc % 97}`;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  if (acc % 31 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  try { if (acc % 29 === 20) { throw new Error('synthetic-6'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q8:${acc % 97}`;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  m01.set('k11', acc % 997);
  const ix12: number = buf.indexOf('p30');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  buf += 'pallet13-' + acc.toString();
  const rc14: Rec30 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const ix15: number = buf.indexOf('p30');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-16'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 165) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  acc = (acc * 31 + 3519) % 65521;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9630) % 65521;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const ix25: number = buf.indexOf('p30');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  acc = acc + 792 - (acc % 50);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  buf += `q29:${acc % 97}`;
  acc = acc + 543 - (acc % 61);
  const rc31: Rec30 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  acc = (acc * 31 + 1196) % 65521;
  const ix33: number = buf.indexOf('p30');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 21) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 25 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 175) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  acc = (acc * 31 + 1916) % 65521;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  for (let i40 = 0; i40 < 11; i40++) {
    acc = (acc + i40 * 13 + 853) % 100003;
  }
  buf += `q41:${acc % 97}`;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  if (acc % 22 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const ix46: number = buf.indexOf('p30');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const rc47: Rec30 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  arr.push(acc % 1000);
  m01.set('k49', acc % 997);
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3939) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  buf += 'freight1-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 78) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  buf += 'batch6-' + acc.toString();
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  buf += `q10:${acc % 97}`;
  if (acc % 7 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 132) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  buf += `q13:${acc % 97}`;
  m01.set('k14', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 148) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 170 - (acc % 83);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  if (acc % 6 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const rc23: Rec30 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  for (let i28 = 0; i28 < 4; i28++) {
    acc = (acc + i28 * 13 + 897) % 100003;
  }
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  const rc30: Rec30 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  if (acc % 14 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const rc32: Rec30 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 134) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  arr.push(acc % 1000);
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  acc = (acc * 31 + 1784) % 65521;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const ix47: number = buf.indexOf('p30');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  m01.set('k48', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const rc50: Rec30 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0030_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0030_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0030_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3940) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  const rc0: Rec30 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  for (let i1 = 0; i1 < 10; i1++) {
    acc = (acc + i1 * 13 + 7) % 100003;
  }
  if (acc % 11 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 117) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  if (acc % 24 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  for (let i7 = 0; i7 < 4; i7++) {
    acc = (acc + i7 * 13 + 485) % 100003;
  }
  const rc8: Rec30 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  for (let i9 = 0; i9 < 7; i9++) {
    acc = (acc + i9 * 13 + 722) % 100003;
  }
  const ix10: number = buf.indexOf('p30');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  if (acc % 10 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-12'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  m01.set('k15', acc % 997);
  try { if (acc % 29 === 15) { throw new Error('synthetic-16'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 13) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const ix19: number = buf.indexOf('p30');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  if (acc % 18 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const ix22: number = buf.indexOf('p30');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc25: Rec30 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  acc = acc + 628 - (acc % 18);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  for (let i31 = 0; i31 < 12; i31++) {
    acc = (acc + i31 * 13 + 395) % 100003;
  }
  try { if (acc % 29 === 18) { throw new Error('synthetic-32'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 176) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  buf += `q36:${acc % 97}`;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  buf += 'carrier39-' + acc.toString();
  const ix40: number = buf.indexOf('p30');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7087) % 65521;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  buf += 'invoice45-' + acc.toString();
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 161) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 112) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  const rc48: Rec30 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 88) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  buf += 'routeplan50-' + acc.toString();
  try { if (acc % 29 === 5) { throw new Error('synthetic-51'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3941) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  acc = (acc * 31 + 1808) % 65521;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  buf += 'freight3-' + acc.toString();
  buf += 'crate4-' + acc.toString();
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-6'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 188) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const rc10: Rec30 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  m01.set('k11', acc % 997);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  m01.set('k15', acc % 997);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 21) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  buf += 'stocktake20-' + acc.toString();
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = (acc * 31 + 1014) % 65521;
  buf += 'shelf28-' + acc.toString();
  acc = acc + 662 - (acc % 12);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  acc = acc + 524 - (acc % 85);
  acc = (acc * 31 + 8936) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 70) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 60) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  if (acc % 18 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  if (acc % 27 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  acc = (acc * 31 + 9660) % 65521;
  for (let i41 = 0; i41 < 9; i41++) {
    acc = (acc + i41 * 13 + 26) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  buf += 'transit43-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  for (let i45 = 0; i45 < 8; i45++) {
    acc = (acc + i45 * 13 + 645) % 100003;
  }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  if (acc % 10 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const ix50: number = buf.indexOf('p30');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3942) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  arr.push(acc % 1000);
  try { if (acc % 29 === 18) { throw new Error('synthetic-1'); } acc += 21; } catch (e) { acc = (acc + 17) % 65521; }
  const ix2: number = buf.indexOf('p30');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  acc = acc + 664 - (acc % 95);
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 21) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-6'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 9 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  buf += 'dispatch9-' + acc.toString();
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  for (let i11 = 0; i11 < 9; i11++) {
    acc = (acc + i11 * 13 + 658) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  for (let i14 = 0; i14 < 5; i14++) {
    acc = (acc + i14 * 13 + 833) % 100003;
  }
  acc = acc + 917 - (acc % 20);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 120) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec30 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 124) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 67) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  buf += 'stocktake26-' + acc.toString();
  buf += `q27:${acc % 97}`;
  try { if (acc % 29 === 4) { throw new Error('synthetic-28'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 177) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const ix30: number = buf.indexOf('p30');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += 'depot33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 76) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'warehouse35-' + acc.toString();
  buf += 'sku36-' + acc.toString();
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 157) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  acc = acc + 656 - (acc % 93);
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  for (let i40 = 0; i40 < 8; i40++) {
    acc = (acc + i40 * 13 + 586) % 100003;
  }
  acc = acc + 240 - (acc % 73);
  acc = acc + 666 - (acc % 51);
  acc = acc + 33 - (acc % 85);
  buf += `q44:${acc % 97}`;
  const rc45: Rec30 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  acc = acc + 417 - (acc % 18);
  try { if (acc % 29 === 11) { throw new Error('synthetic-47'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  acc = acc + 911 - (acc % 46);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3943) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  if (acc % 24 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  const ix1: number = buf.indexOf('p30');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  for (let i3 = 0; i3 < 11; i3++) {
    acc = (acc + i3 * 13 + 21) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  for (let i5 = 0; i5 < 10; i5++) {
    acc = (acc + i5 * 13 + 642) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = acc + 361 - (acc % 22);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 12) { throw new Error('synthetic-14'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 137) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'freight18-' + acc.toString();
  arr.push(acc % 1000);
  acc = acc + 848 - (acc % 61);
  const rc21: Rec30 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i23 = 0; i23 < 12; i23++) {
    acc = (acc + i23 * 13 + 868) % 100003;
  }
  if (acc % 7 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  buf += 'pallet26-' + acc.toString();
  if (acc % 10 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  for (let i28 = 0; i28 < 9; i28++) {
    acc = (acc + i28 * 13 + 684) % 100003;
  }
  for (let i29 = 0; i29 < 6; i29++) {
    acc = (acc + i29 * 13 + 388) % 100003;
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  for (let i31 = 0; i31 < 12; i31++) {
    acc = (acc + i31 * 13 + 787) % 100003;
  }
  buf += 'settle32-' + acc.toString();
  const ix33: number = buf.indexOf('p30');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 100) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 141 - (acc % 33);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const rc37: Rec30 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  buf += 'transit39-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const rc41: Rec30 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-43'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  m01.set('k47', acc % 997);
  acc = acc + 866 - (acc % 33);
  acc = acc + 851 - (acc % 89);
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const rc51: Rec30 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3944) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  const ix0: number = buf.indexOf('p30');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  for (let i1 = 0; i1 < 11; i1++) {
    acc = (acc + i1 * 13 + 359) % 100003;
  }
  buf += 'dispatch2-' + acc.toString();
  const rc3: Rec30 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  acc = acc + 743 - (acc % 48);
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  acc = (acc * 31 + 6160) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-8'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  if (acc % 31 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const ix11: number = buf.indexOf('p30');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  acc = acc + 390 - (acc % 53);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 43) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  acc = (acc * 31 + 8419) % 65521;
  if (acc % 22 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 137) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  for (let i20 = 0; i20 < 9; i20++) {
    acc = (acc + i20 * 13 + 699) % 100003;
  }
  buf += `q21:${acc % 97}`;
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  acc = (acc * 31 + 4160) % 65521;
  for (let i24 = 0; i24 < 12; i24++) {
    acc = (acc + i24 * 13 + 523) % 100003;
  }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  if (acc % 22 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  acc = (acc * 31 + 4432) % 65521;
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  m01.set('k29', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += `q31:${acc % 97}`;
  acc = (acc * 31 + 7587) % 65521;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 15) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 9209) % 65521;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 51) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = acc + 396 - (acc % 43);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 194) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  if (acc % 26 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += 'depot44-' + acc.toString();
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = (acc * 31 + 6765) % 65521;
  const rc47: Rec30 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  buf += 'tariff48-' + acc.toString();
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3945) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  acc = acc + 720 - (acc % 76);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 175) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  if (acc % 31 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 139) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  if (acc % 12 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 66) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  m01.set('k7', acc % 997);
  m01.set('k8', acc % 997);
  if (acc % 17 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const rc12: Rec30 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  const rc13: Rec30 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  acc = acc + 500 - (acc % 45);
  if (acc % 22 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const rc16: Rec30 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 71) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  buf += 'shelf23-' + acc.toString();
  const ix24: number = buf.indexOf('p30');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  buf += `q25:${acc % 97}`;
  const rc26: Rec30 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-27'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-28'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  buf += 'depot32-' + acc.toString();
  const rc33: Rec30 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 59) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 152) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  acc = acc + 580 - (acc % 44);
  buf += 'portal38-' + acc.toString();
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  for (let i40 = 0; i40 < 8; i40++) {
    acc = (acc + i40 * 13 + 623) % 100003;
  }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  if (acc % 29 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7178) % 65521;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  acc = (acc * 31 + 5911) % 65521;
  buf += `q46:${acc % 97}`;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  const rc48: Rec30 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  if (acc % 25 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3946) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  buf += 'warehouse0-' + acc.toString();
  const rc1: Rec30 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  for (let i3 = 0; i3 < 12; i3++) {
    acc = (acc + i3 * 13 + 450) % 100003;
  }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 94) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  for (let i6 = 0; i6 < 11; i6++) {
    acc = (acc + i6 * 13 + 928) % 100003;
  }
  buf += `q7:${acc % 97}`;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  acc = (acc * 31 + 1495) % 65521;
  acc = acc + 756 - (acc % 70);
  m01.set('k15', acc % 997);
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 24) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  buf += 'batch20-' + acc.toString();
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 73) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  try { if (acc % 29 === 20) { throw new Error('synthetic-23'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q24:${acc % 97}`;
  arr.push(acc % 1000);
  buf += 'sku26-' + acc.toString();
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const ix28: number = buf.indexOf('p30');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 14) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  m01.set('k32', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 95) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  for (let i36 = 0; i36 < 7; i36++) {
    acc = (acc + i36 * 13 + 599) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const rc38: Rec30 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  m01.set('k39', acc % 997);
  const ix40: number = buf.indexOf('p30');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const ix41: number = buf.indexOf('p30');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  buf += 'batch43-' + acc.toString();
  acc = acc + 959 - (acc % 19);
  acc = acc + 214 - (acc % 13);
  const ix46: number = buf.indexOf('p30');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  const rc50: Rec30 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3947) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 42) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const rc7: Rec30 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 37) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  m01.set('k14', acc % 997);
  acc = (acc * 31 + 6434) % 65521;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 187) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'crate18-' + acc.toString();
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  buf += `q21:${acc % 97}`;
  arr.push(acc % 1000);
  if (acc % 20 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  for (let i24 = 0; i24 < 11; i24++) {
    acc = (acc + i24 * 13 + 929) % 100003;
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  acc = acc + 963 - (acc % 94);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  for (let i29 = 0; i29 < 8; i29++) {
    acc = (acc + i29 * 13 + 754) % 100003;
  }
  const ix30: number = buf.indexOf('p30');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  acc = (acc * 31 + 540) % 65521;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 176) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = acc + 626 - (acc % 97);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  m01.set('k37', acc % 997);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  m01.set('k41', acc % 997);
  acc = acc + 916 - (acc % 21);
  acc = acc + 496 - (acc % 65);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 66) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  if (acc % 12 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  buf += `q49:${acc % 97}`;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  acc = (acc * 31 + 4368) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3948) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  for (let i1 = 0; i1 < 9; i1++) {
    acc = (acc + i1 * 13 + 242) % 100003;
  }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  m01.set('k4', acc % 997);
  try { if (acc % 29 === 7) { throw new Error('synthetic-5'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  const ix7: number = buf.indexOf('p30');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  for (let i8 = 0; i8 < 4; i8++) {
    acc = (acc + i8 * 13 + 227) % 100003;
  }
  m01.set('k9', acc % 997);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 190) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  buf += 'order13-' + acc.toString();
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 146) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i16 = 0; i16 < 6; i16++) {
    acc = (acc + i16 * 13 + 298) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 68) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 169) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  for (let i21 = 0; i21 < 12; i21++) {
    acc = (acc + i21 * 13 + 597) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  if (acc % 21 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  if (acc % 18 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  buf += `q25:${acc % 97}`;
  acc = acc + 929 - (acc % 66);
  buf += 'coupon27-' + acc.toString();
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 183) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const ix31: number = buf.indexOf('p30');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  buf += 'batch33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 128) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 23) { throw new Error('synthetic-35'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const cf36: Array<(x: number) => number> = [];
  cf36.push((x: number): number => (x * 3 + acc) % 65521);
  cf36.push((x: number): number => (x + 138) % 10007);
  acc = cf36[acc & 1](acc % 9973);
  for (let i37 = 0; i37 < 7; i37++) {
    acc = (acc + i37 * 13 + 244) % 100003;
  }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 161) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const rc40: Rec30 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  try { if (acc % 29 === 17) { throw new Error('synthetic-41'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 615 - (acc % 88);
  const rc43: Rec30 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  if (acc % 12 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  for (let i48 = 0; i48 < 4; i48++) {
    acc = (acc + i48 * 13 + 239) % 100003;
  }
  const rc49: Rec30 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  acc = acc + 442 - (acc % 9);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3949) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 51) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 101) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = (acc * 31 + 9421) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  buf += `q7:${acc % 97}`;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 190) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  acc = acc + 380 - (acc % 37);
  acc = (acc * 31 + 4851) % 65521;
  buf += `q11:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 80) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 68) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 161) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 184) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  if (acc % 7 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  try { if (acc % 29 === 12) { throw new Error('synthetic-23'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 151 - (acc % 16);
  const rc25: Rec30 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const rc27: Rec30 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 187) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  for (let i36 = 0; i36 < 9; i36++) {
    acc = (acc + i36 * 13 + 894) % 100003;
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  acc = acc + 345 - (acc % 87);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const rc40: Rec30 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const rc41: Rec30 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const ix43: number = buf.indexOf('p30');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  acc = acc + 706 - (acc % 44);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 85) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  arr.push(acc % 1000);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  try { if (acc % 29 === 12) { throw new Error('synthetic-49'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  for (let i51 = 0; i51 < 11; i51++) {
    acc = (acc + i51 * 13 + 381) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0030_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0030_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0030_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3950) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = acc + 79 - (acc % 60);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 103) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = (acc * 31 + 1055) % 65521;
  for (let i5 = 0; i5 < 12; i5++) {
    acc = (acc + i5 * 13 + 419) % 100003;
  }
  for (let i6 = 0; i6 < 10; i6++) {
    acc = (acc + i6 * 13 + 347) % 100003;
  }
  buf += 'freight7-' + acc.toString();
  acc = acc + 330 - (acc % 33);
  for (let i9 = 0; i9 < 10; i9++) {
    acc = (acc + i9 * 13 + 723) % 100003;
  }
  acc = (acc * 31 + 4359) % 65521;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += `q12:${acc % 97}`;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  if (acc % 16 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 171) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 112) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  m01.set('k20', acc % 997);
  arr.push(acc % 1000);
  buf += 'rebate22-' + acc.toString();
  for (let i23 = 0; i23 < 5; i23++) {
    acc = (acc + i23 * 13 + 471) % 100003;
  }
  arr.push(acc % 1000);
  const rc25: Rec30 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  acc = (acc * 31 + 3851) % 65521;
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 194) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-33'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 82) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  const ix36: number = buf.indexOf('p30');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  buf += 'payout37-' + acc.toString();
  buf += 'batch38-' + acc.toString();
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  const rc40: Rec30 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const rc41: Rec30 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  arr.push(acc % 1000);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  acc = acc + 732 - (acc % 66);
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 136) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  acc = (acc * 31 + 5671) % 65521;
  if (acc % 24 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3951) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  buf += 'client0-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  const rc3: Rec30 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  arr.push(acc % 1000);
  buf += 'routeplan8-' + acc.toString();
  arr.push(acc % 1000);
  m01.set('k10', acc % 997);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 31) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-13'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const rc16: Rec30 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 133) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  try { if (acc % 29 === 3) { throw new Error('synthetic-19'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 16) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  const rc21: Rec30 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  if (acc % 25 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  try { if (acc % 29 === 9) { throw new Error('synthetic-24'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i25 = 0; i25 < 6; i25++) {
    acc = (acc + i25 * 13 + 156) % 100003;
  }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 77) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += `q30:${acc % 97}`;
  arr.push(acc % 1000);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 162) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p30');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  try { if (acc % 29 === 13) { throw new Error('synthetic-37'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  for (let i39 = 0; i39 < 8; i39++) {
    acc = (acc + i39 * 13 + 856) % 100003;
  }
  for (let i40 = 0; i40 < 12; i40++) {
    acc = (acc + i40 * 13 + 580) % 100003;
  }
  const ix41: number = buf.indexOf('p30');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-44'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 176) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  buf += `q47:${acc % 97}`;
  acc = acc + 344 - (acc % 61);
  for (let i49 = 0; i49 < 6; i49++) {
    acc = (acc + i49 * 13 + 673) % 100003;
  }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 145) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = acc + 69 - (acc % 64);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3952) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  m01.set('k0', acc % 997);
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = acc + 896 - (acc % 59);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 54) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  try { if (acc % 29 === 6) { throw new Error('synthetic-4'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const ix5: number = buf.indexOf('p30');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = acc + 448 - (acc % 94);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 144) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  arr.push(acc % 1000);
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 16) % 100003;
  }
  acc = (acc * 31 + 7211) % 65521;
  for (let i14 = 0; i14 < 12; i14++) {
    acc = (acc + i14 * 13 + 517) % 100003;
  }
  buf += `q15:${acc % 97}`;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 132) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  arr.push(acc % 1000);
  acc = (acc * 31 + 7972) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-21'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  if (acc % 5 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  acc = acc + 248 - (acc % 87);
  const ix27: number = buf.indexOf('p30');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  acc = acc + 21 - (acc % 89);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 51) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  acc = acc + 707 - (acc % 88);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 138) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  buf += 'waybill38-' + acc.toString();
  m01.set('k39', acc % 997);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 136) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  acc = acc + 440 - (acc % 68);
  for (let i44 = 0; i44 < 6; i44++) {
    acc = (acc + i44 * 13 + 780) % 100003;
  }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  m01.set('k46', acc % 997);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  arr.push(acc % 1000);
  buf += `q50:${acc % 97}`;
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3953) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  for (let i0 = 0; i0 < 4; i0++) {
    acc = (acc + i0 * 13 + 673) % 100003;
  }
  if (acc % 11 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  if (acc % 25 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 110) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  buf += `q4:${acc % 97}`;
  acc = acc + 683 - (acc % 70);
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 185) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const rc7: Rec30 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  const ix9: number = buf.indexOf('p30');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  m01.set('k11', acc % 997);
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  acc = acc + 594 - (acc % 7);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-15'); } acc += 29; } catch (e) { acc = (acc + 17) % 65521; }
  const rc16: Rec30 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 99) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  m01.set('k19', acc % 997);
  try { if (acc % 29 === 2) { throw new Error('synthetic-20'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  if (acc % 28 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const rc23: Rec30 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const rc24: Rec30 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const rc25: Rec30 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  buf += `q28:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  m01.set('k30', acc % 997);
  acc = acc + 999 - (acc % 90);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 26) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 66) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  acc = acc + 664 - (acc % 43);
  arr.push(acc % 1000);
  const ix38: number = buf.indexOf('p30');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const ix40: number = buf.indexOf('p30');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const ix41: number = buf.indexOf('p30');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  m01.set('k42', acc % 997);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 161) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  for (let i45 = 0; i45 < 12; i45++) {
    acc = (acc + i45 * 13 + 165) % 100003;
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-46'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const ix47: number = buf.indexOf('p30');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  buf += 'tariff48-' + acc.toString();
  acc = acc + 584 - (acc % 10);
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const ix51: number = buf.indexOf('p30');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3954) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const rc2: Rec30 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  arr.push(acc % 1000);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 96) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = (acc * 31 + 4157) % 65521;
  buf += `q6:${acc % 97}`;
  const rc7: Rec30 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 880 - (acc % 46);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  m01.set('k13', acc % 997);
  try { if (acc % 29 === 5) { throw new Error('synthetic-14'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q15:${acc % 97}`;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 54) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  buf += `q22:${acc % 97}`;
  m01.set('k23', acc % 997);
  acc = (acc * 31 + 6378) % 65521;
  arr.push(acc % 1000);
  for (let i26 = 0; i26 < 7; i26++) {
    acc = (acc + i26 * 13 + 755) % 100003;
  }
  const rc27: Rec30 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  buf += `q29:${acc % 97}`;
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 138) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = acc + 199 - (acc % 77);
  buf += `q32:${acc % 97}`;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 141) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 73) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  m01.set('k38', acc % 997);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  try { if (acc % 29 === 13) { throw new Error('synthetic-41'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i42 = 0; i42 < 7; i42++) {
    acc = (acc + i42 * 13 + 476) % 100003;
  }
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += 'rebate45-' + acc.toString();
  const rc46: Rec30 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  acc = (acc * 31 + 8002) % 65521;
  buf += 'transit48-' + acc.toString();
  acc = (acc * 31 + 1071) % 65521;
  buf += 'portal50-' + acc.toString();
  buf += 'quota51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3955) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  acc = (acc * 31 + 6960) % 65521;
  buf += 'settle1-' + acc.toString();
  if (acc % 16 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 22) { throw new Error('synthetic-4'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i5 = 0; i5 < 6; i5++) {
    acc = (acc + i5 * 13 + 601) % 100003;
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 25) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = (acc * 31 + 9639) % 65521;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  m01.set('k10', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  if (acc % 22 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  acc = acc + 688 - (acc % 87);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 103) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 118) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  if (acc % 15 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  m01.set('k22', acc % 997);
  buf += `q23:${acc % 97}`;
  try { if (acc % 29 === 22) { throw new Error('synthetic-24'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  try { if (acc % 29 === 22) { throw new Error('synthetic-27'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  acc = (acc * 31 + 7164) % 65521;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  buf += 'pickup31-' + acc.toString();
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 15) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  buf += `q36:${acc % 97}`;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += 'ticket40-' + acc.toString();
  buf += `q41:${acc % 97}`;
  buf += `q42:${acc % 97}`;
  acc = acc + 495 - (acc % 97);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 139) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  acc = acc + 371 - (acc % 93);
  const rc46: Rec30 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  buf += 'payout47-' + acc.toString();
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  if (acc % 21 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 16) { throw new Error('synthetic-51'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3956) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  arr.push(acc % 1000);
  if (acc % 14 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += `q3:${acc % 97}`;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 96) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const ix5: number = buf.indexOf('p30');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (acc % 12 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  for (let i9 = 0; i9 < 5; i9++) {
    acc = (acc + i9 * 13 + 961) % 100003;
  }
  const ix10: number = buf.indexOf('p30');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  buf += `q11:${acc % 97}`;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  arr.push(acc % 1000);
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 150) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  const ix19: number = buf.indexOf('p30');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 195) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 4) { throw new Error('synthetic-25'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 66) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const ix28: number = buf.indexOf('p30');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4350) % 65521;
  buf += `q30:${acc % 97}`;
  acc = (acc * 31 + 4410) % 65521;
  const ix32: number = buf.indexOf('p30');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 162) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-36'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'pickup37-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  m01.set('k39', acc % 997);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 34) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  arr.push(acc % 1000);
  const ix43: number = buf.indexOf('p30');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  acc = (acc * 31 + 6248) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const rc49: Rec30 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3957) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 119) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  const db5: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db5.length) % 65521;
  if (acc % 23 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  const ix7: number = buf.indexOf('p30');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  if (acc % 14 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  buf += `q10:${acc % 97}`;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  const ix15: number = buf.indexOf('p30');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 191) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 139) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  const ix21: number = buf.indexOf('p30');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const rc23: Rec30 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  if (acc % 19 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  buf += `q27:${acc % 97}`;
  m01.set('k28', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  acc = acc + 331 - (acc % 16);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 167) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 35) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const ix38: number = buf.indexOf('p30');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-39'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'crate40-' + acc.toString();
  m01.set('k41', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix44: number = buf.indexOf('p30');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 20) { throw new Error('synthetic-46'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6564) % 65521;
  if (acc % 6 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  const ix49: number = buf.indexOf('p30');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += `q50:${acc % 97}`;
  acc = (acc * 31 + 2574) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3958) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  try { if (acc % 29 === 12) { throw new Error('synthetic-0'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  buf += `q3:${acc % 97}`;
  buf += 'routeplan4-' + acc.toString();
  if (acc % 8 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  acc = (acc * 31 + 5519) % 65521;
  const ix7: number = buf.indexOf('p30');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 9) { throw new Error('synthetic-9'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q10:${acc % 97}`;
  acc = (acc * 31 + 5446) % 65521;
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 146) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  if (acc % 28 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  acc = acc + 671 - (acc % 46);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  m01.set('k25', acc % 997);
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  try { if (acc % 29 === 17) { throw new Error('synthetic-27'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 30 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  for (let i30 = 0; i30 < 11; i30++) {
    acc = (acc + i30 * 13 + 474) % 100003;
  }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 154) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p30');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 146) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  for (let i40 = 0; i40 < 8; i40++) {
    acc = (acc + i40 * 13 + 777) % 100003;
  }
  m01.set('k41', acc % 997);
  try { if (acc % 29 === 6) { throw new Error('synthetic-42'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 174) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = acc + 674 - (acc % 40);
  acc = (acc * 31 + 6182) % 65521;
  for (let i46 = 0; i46 < 6; i46++) {
    acc = (acc + i46 * 13 + 387) % 100003;
  }
  m01.set('k47', acc % 997);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 10) { throw new Error('synthetic-49'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3959) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  const rc0: Rec30 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  m01.set('k3', acc % 997);
  buf += 'portal4-' + acc.toString();
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 53) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  buf += 'depot9-' + acc.toString();
  const ix10: number = buf.indexOf('p30');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  buf += 'crate11-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  m01.set('k14', acc % 997);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  acc = (acc * 31 + 9540) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 55) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 272 - (acc % 71);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 83) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 156) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  m01.set('k21', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7649) % 65521;
  acc = (acc * 31 + 7087) % 65521;
  arr.push(acc % 1000);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  buf += 'invoice27-' + acc.toString();
  for (let i28 = 0; i28 < 4; i28++) {
    acc = (acc + i28 * 13 + 759) % 100003;
  }
  for (let i29 = 0; i29 < 10; i29++) {
    acc = (acc + i29 * 13 + 167) % 100003;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-30'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const ix32: number = buf.indexOf('p30');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  if (acc % 16 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 103) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  for (let i41 = 0; i41 < 6; i41++) {
    acc = (acc + i41 * 13 + 27) % 100003;
  }
  acc = acc + 868 - (acc % 8);
  try { if (acc % 29 === 20) { throw new Error('synthetic-43'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  buf += 'waybill47-' + acc.toString();
  acc = (acc * 31 + 3822) % 65521;
  const ix49: number = buf.indexOf('p30');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  if (acc % 26 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  acc = acc + 261 - (acc % 95);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0030_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0030_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0030_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3960) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  acc = (acc * 31 + 3409) % 65521;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const rc2: Rec30 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const ix3: number = buf.indexOf('p30');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 15) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 126) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  for (let i6 = 0; i6 < 4; i6++) {
    acc = (acc + i6 * 13 + 36) % 100003;
  }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  arr.push(acc % 1000);
  const rc9: Rec30 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  for (let i10 = 0; i10 < 12; i10++) {
    acc = (acc + i10 * 13 + 372) % 100003;
  }
  try { if (acc % 29 === 8) { throw new Error('synthetic-11'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 432 - (acc % 72);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  m01.set('k14', acc % 997);
  if (acc % 23 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = acc + 911 - (acc % 26);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 48) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 10; i18++) {
    acc = (acc + i18 * 13 + 344) % 100003;
  }
  if (acc % 18 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  acc = acc + 119 - (acc % 47);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 105) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  buf += `q24:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  buf += 'batch26-' + acc.toString();
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 184) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  buf += 'quota29-' + acc.toString();
  buf += `q30:${acc % 97}`;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  buf += 'tariff33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 76) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 29 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  try { if (acc % 29 === 3) { throw new Error('synthetic-37'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q38:${acc % 97}`;
  for (let i39 = 0; i39 < 3; i39++) {
    acc = (acc + i39 * 13 + 305) % 100003;
  }
  buf += 'customs40-' + acc.toString();
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (acc % 21 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  const rc45: Rec30 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 9396) % 65521;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += 'sku51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3961) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  buf += `q0:${acc % 97}`;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  arr.push(acc % 1000);
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  for (let i4 = 0; i4 < 10; i4++) {
    acc = (acc + i4 * 13 + 509) % 100003;
  }
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 128) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-6'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  const ix8: number = buf.indexOf('p30');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix10: number = buf.indexOf('p30');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  m01.set('k13', acc % 997);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  if (acc % 14 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 41) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 551 - (acc % 60);
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 174) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = acc + 159 - (acc % 83);
  m01.set('k21', acc % 997);
  if (acc % 26 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  buf += 'dispatch24-' + acc.toString();
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  buf += `q26:${acc % 97}`;
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  if (acc % 22 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  const ix29: number = buf.indexOf('p30');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const ix31: number = buf.indexOf('p30');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  if (acc % 24 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 173) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const ix37: number = buf.indexOf('p30');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 6164) % 65521;
  const rc39: Rec30 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  buf += `q40:${acc % 97}`;
  buf += `q41:${acc % 97}`;
  m01.set('k42', acc % 997);
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  m01.set('k44', acc % 997);
  acc = acc + 56 - (acc % 68);
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  if (acc % 28 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const ix49: number = buf.indexOf('p30');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5670) % 65521;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3962) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  if (acc % 5 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-1'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  if (acc % 26 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  const ix4: number = buf.indexOf('p30');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 16) { throw new Error('synthetic-5'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  buf += 'waybill8-' + acc.toString();
  acc = (acc * 31 + 2166) % 65521;
  buf += `q10:${acc % 97}`;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += `q14:${acc % 97}`;
  try { if (acc % 29 === 4) { throw new Error('synthetic-15'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-16'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 52) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'vendor18-' + acc.toString();
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  buf += 'stocktake22-' + acc.toString();
  buf += `q23:${acc % 97}`;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  acc = acc + 573 - (acc % 39);
  const rc26: Rec30 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  acc = acc + 621 - (acc % 42);
  buf += 'pallet28-' + acc.toString();
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 64) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 155) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  try { if (acc % 29 === 7) { throw new Error('synthetic-36'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  try { if (acc % 29 === 12) { throw new Error('synthetic-39'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q40:${acc % 97}`;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  acc = acc + 144 - (acc % 82);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 23) { throw new Error('synthetic-44'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const ix45: number = buf.indexOf('p30');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  m01.set('k46', acc % 997);
  buf += 'portal47-' + acc.toString();
  const ix48: number = buf.indexOf('p30');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-49'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 878 - (acc % 95);
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3963) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  try { if (acc % 29 === 6) { throw new Error('synthetic-0'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 6 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7588) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-3'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q4:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  for (let i7 = 0; i7 < 4; i7++) {
    acc = (acc + i7 * 13 + 694) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  try { if (acc % 29 === 2) { throw new Error('synthetic-9'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q10:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-11'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  acc = (acc * 31 + 7549) % 65521;
  m01.set('k14', acc % 997);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const ix16: number = buf.indexOf('p30');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 13) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  m01.set('k20', acc % 997);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 182) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = (acc * 31 + 3912) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-23'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  acc = (acc * 31 + 7258) % 65521;
  buf += 'order26-' + acc.toString();
  m01.set('k27', acc % 997);
  buf += `q28:${acc % 97}`;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += `q31:${acc % 97}`;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 48) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  acc = acc + 257 - (acc % 87);
  try { if (acc % 29 === 7) { throw new Error('synthetic-37'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i38 = 0; i38 < 7; i38++) {
    acc = (acc + i38 * 13 + 543) % 100003;
  }
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  if (acc % 25 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  if (acc % 25 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 31) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const rc44: Rec30 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  const rc45: Rec30 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  buf += `q47:${acc % 97}`;
  try { if (acc % 29 === 19) { throw new Error('synthetic-48'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  arr.push(acc % 1000);
  buf += 'policy51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3964) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i2 = 0; i2 < 11; i2++) {
    acc = (acc + i2 * 13 + 417) % 100003;
  }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 135) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  m01.set('k5', acc % 997);
  m01.set('k6', acc % 997);
  for (let i7 = 0; i7 < 6; i7++) {
    acc = (acc + i7 * 13 + 704) % 100003;
  }
  arr.push(acc % 1000);
  if (acc % 17 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  try { if (acc % 29 === 5) { throw new Error('synthetic-11'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const ix13: number = buf.indexOf('p30');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-14'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  try { if (acc % 29 === 5) { throw new Error('synthetic-16'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 72) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 125) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k21', acc % 997);
  buf += `q22:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  arr.push(acc % 1000);
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 198) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  for (let i27 = 0; i27 < 9; i27++) {
    acc = (acc + i27 * 13 + 420) % 100003;
  }
  if (acc % 10 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-29'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  if (acc % 8 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 188) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 9381) % 65521;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  m01.set('k40', acc % 997);
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 137) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  acc = (acc * 31 + 9411) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-45'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  const rc46: Rec30 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  buf += `q47:${acc % 97}`;
  if (acc % 26 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  for (let i49 = 0; i49 < 5; i49++) {
    acc = (acc + i49 * 13 + 92) % 100003;
  }
  for (let i50 = 0; i50 < 8; i50++) {
    acc = (acc + i50 * 13 + 594) % 100003;
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 84) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3965) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  buf += 'bay0-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  if (acc % 7 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  for (let i3 = 0; i3 < 8; i3++) {
    acc = (acc + i3 * 13 + 132) % 100003;
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const ix5: number = buf.indexOf('p30');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const ix7: number = buf.indexOf('p30');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 8589) % 65521;
  for (let i9 = 0; i9 < 12; i9++) {
    acc = (acc + i9 * 13 + 987) % 100003;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-10'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const rc11: Rec30 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  acc = acc + 647 - (acc % 31);
  if (acc % 12 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 173) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += `q21:${acc % 97}`;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const rc23: Rec30 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q25:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  if (acc % 23 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  buf += 'region31-' + acc.toString();
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  acc = (acc * 31 + 1750) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 56) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'coupon36-' + acc.toString();
  const rc37: Rec30 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  if (acc % 22 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  if (acc % 10 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = acc + 667 - (acc % 95);
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-43'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const rc44: Rec30 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  if (acc % 7 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  for (let i49 = 0; i49 < 5; i49++) {
    acc = (acc + i49 * 13 + 398) % 100003;
  }
  if (acc % 9 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3966) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  acc = acc + 38 - (acc % 15);
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 107) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += 'policy5-' + acc.toString();
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 149) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const ix7: number = buf.indexOf('p30');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  m01.set('k8', acc % 997);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 60) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  buf += `q11:${acc % 97}`;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  try { if (acc % 29 === 7) { throw new Error('synthetic-13'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const rc14: Rec30 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += 'stocktake15-' + acc.toString();
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 98) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  if (acc % 18 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  buf += `q20:${acc % 97}`;
  arr.push(acc % 1000);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  acc = acc + 415 - (acc % 55);
  arr.push(acc % 1000);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const rc28: Rec30 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const rc29: Rec30 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 75) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const rc32: Rec30 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = acc + 848 - (acc % 63);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 3; i35++) {
    acc = (acc + i35 * 13 + 73) % 100003;
  }
  const rc36: Rec30 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  for (let i40 = 0; i40 < 10; i40++) {
    acc = (acc + i40 * 13 + 156) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 120) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  buf += 'transit43-' + acc.toString();
  const rc44: Rec30 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  const ix45: number = buf.indexOf('p30');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += 'routeplan47-' + acc.toString();
  const rc48: Rec30 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  for (let i51 = 0; i51 < 8; i51++) {
    acc = (acc + i51 * 13 + 206) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3967) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  for (let i0 = 0; i0 < 7; i0++) {
    acc = (acc + i0 * 13 + 718) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 20) { throw new Error('synthetic-3'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  m01.set('k6', acc % 997);
  const ix7: number = buf.indexOf('p30');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const ix14: number = buf.indexOf('p30');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = acc + 269 - (acc % 9);
  acc = (acc * 31 + 4710) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 121) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const ix19: number = buf.indexOf('p30');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  if (acc % 17 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const rc22: Rec30 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  buf += `q23:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  buf += 'invoice25-' + acc.toString();
  if (acc % 7 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 143) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  buf += `q30:${acc % 97}`;
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  buf += 'audit32-' + acc.toString();
  try { if (acc % 29 === 14) { throw new Error('synthetic-33'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 40) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p30');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const ix36: number = buf.indexOf('p30');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-37'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 30 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += `q39:${acc % 97}`;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  buf += 'warehouse42-' + acc.toString();
  acc = acc + 553 - (acc % 31);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 132) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  acc = (acc * 31 + 4487) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  try { if (acc % 29 === 8) { throw new Error('synthetic-49'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 150) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3968) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 59) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const rc2: Rec30 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 144) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  buf += 'transit8-' + acc.toString();
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  m01.set('k10', acc % 997);
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  acc = (acc * 31 + 8632) % 65521;
  m01.set('k14', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 49) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-18'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 178) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const rc22: Rec30 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  try { if (acc % 29 === 11) { throw new Error('synthetic-23'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  m01.set('k25', acc % 997);
  arr.push(acc % 1000);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const ix31: number = buf.indexOf('p30');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 142) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 121) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = acc + 602 - (acc % 8);
  const rc37: Rec30 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  m01.set('k39', acc % 997);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  acc = (acc * 31 + 6333) % 65521;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 88) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 27 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += `q47:${acc % 97}`;
  if (acc % 26 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3969) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  const rc1: Rec30 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  buf += 'freight2-' + acc.toString();
  const rc3: Rec30 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  m01.set('k9', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  try { if (acc % 29 === 4) { throw new Error('synthetic-12'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-13'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 103) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 94) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 11; i18++) {
    acc = (acc + i18 * 13 + 78) % 100003;
  }
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 159) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  for (let i20 = 0; i20 < 3; i20++) {
    acc = (acc + i20 * 13 + 933) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  buf += `q26:${acc % 97}`;
  const rc27: Rec30 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  if (acc % 6 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  buf += `q30:${acc % 97}`;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  const rc32: Rec30 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = (acc * 31 + 5536) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 127) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  acc = (acc * 31 + 1256) % 65521;
  if (acc % 8 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const ix39: number = buf.indexOf('p30');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  const ix41: number = buf.indexOf('p30');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  acc = acc + 865 - (acc % 35);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  acc = (acc * 31 + 7217) % 65521;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  arr.push(acc % 1000);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0030_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0030_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0030_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3970) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  acc = acc + 727 - (acc % 48);
  const rc1: Rec30 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-3'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  m01.set('k5', acc % 997);
  arr.push(acc % 1000);
  m01.set('k7', acc % 997);
  arr.push(acc % 1000);
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  if (acc % 27 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const rc12: Rec30 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  acc = acc + 473 - (acc % 39);
  const rc14: Rec30 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  m01.set('k15', acc % 997);
  if (acc % 12 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 56) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  arr.push(acc % 1000);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  try { if (acc % 29 === 9) { throw new Error('synthetic-22'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q23:${acc % 97}`;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  for (let i27 = 0; i27 < 3; i27++) {
    acc = (acc + i27 * 13 + 236) % 100003;
  }
  buf += `q28:${acc % 97}`;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 173) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  for (let i30 = 0; i30 < 9; i30++) {
    acc = (acc + i30 * 13 + 75) % 100003;
  }
  buf += `q31:${acc % 97}`;
  acc = acc + 929 - (acc % 69);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 142) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const rc36: Rec30 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  const rc37: Rec30 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  arr.push(acc % 1000);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 100) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-40'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  buf += `q43:${acc % 97}`;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  if (acc % 5 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const ix50: number = buf.indexOf('p30');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3971) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  m01.set('k0', acc % 997);
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  buf += `q4:${acc % 97}`;
  buf += `q5:${acc % 97}`;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 129) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  buf += 'client7-' + acc.toString();
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 137) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  const ix9: number = buf.indexOf('p30');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const rc10: Rec30 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  const ix11: number = buf.indexOf('p30');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += 'shelf15-' + acc.toString();
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 93) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec30 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  acc = (acc * 31 + 6970) % 65521;
  const rc20: Rec30 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  m01.set('k21', acc % 997);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const ix24: number = buf.indexOf('p30');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  buf += 'client26-' + acc.toString();
  for (let i27 = 0; i27 < 11; i27++) {
    acc = (acc + i27 * 13 + 174) % 100003;
  }
  const ix28: number = buf.indexOf('p30');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  if (acc % 24 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2651) % 65521;
  const rc31: Rec30 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += 'rebate33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 55) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  buf += 'pickup36-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  buf += 'freight38-' + acc.toString();
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += `q40:${acc % 97}`;
  arr.push(acc % 1000);
  buf += `q42:${acc % 97}`;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  if (acc % 16 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (acc % 30 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  buf += `q47:${acc % 97}`;
  buf += 'settle48-' + acc.toString();
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const rc51: Rec30 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0030_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 3972) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit30 = new Unit30(acc);
  for (let i0 = 0; i0 < 7; i0++) {
    acc = (acc + i0 * 13 + 488) % 100003;
  }
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  const rc2: Rec30 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  acc = acc + 669 - (acc % 62);
  for (let i8 = 0; i8 < 6; i8++) {
    acc = (acc + i8 * 13 + 447) % 100003;
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 178) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  buf += `q13:${acc % 97}`;
  acc = acc + 373 - (acc % 86);
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  acc = acc + 351 - (acc % 17);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 151) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  buf += `q19:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = acc + 349 - (acc % 37);
  acc = (acc * 31 + 5687) % 65521;
  buf += 'invoice23-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += 'sku25-' + acc.toString();
  const ix26: number = buf.indexOf('p30');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  const ix27: number = buf.indexOf('p30');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 89) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  m01.set('k30', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  for (let i32 = 0; i32 < 3; i32++) {
    acc = (acc + i32 * 13 + 830) % 100003;
  }
  buf += 'freight33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 24) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  buf += `q36:${acc % 97}`;
  const rc37: Rec30 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  buf += 'journey39-' + acc.toString();
  try { if (acc % 29 === 9) { throw new Error('synthetic-40'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const rc43: Rec30 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  if (acc % 11 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  acc = (acc * 31 + 176) % 65521;
  buf += 'bay48-' + acc.toString();
  buf += `q49:${acc % 97}`;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 83) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0030(): BizFn[] {
  return [biz_0030_00, biz_0030_01, biz_0030_02, biz_0030_03, biz_0030_04, biz_0030_05, biz_0030_06, biz_0030_07, biz_0030_08, biz_0030_09, biz_0030_10, biz_0030_11, biz_0030_12, biz_0030_13, biz_0030_14, biz_0030_15, biz_0030_16, biz_0030_17, biz_0030_18, biz_0030_19, biz_0030_20, biz_0030_21, biz_0030_22, biz_0030_23, biz_0030_24, biz_0030_25, biz_0030_26, biz_0030_27, biz_0030_28, biz_0030_29, biz_0030_30, biz_0030_31, biz_0030_32, biz_0030_33, biz_0030_34, biz_0030_35, biz_0030_36, biz_0030_37, biz_0030_38, biz_0030_39, biz_0030_40, biz_0030_41, biz_0030_42];
}

export function rega_0030(): ABizFn[] {
  return [biz_0030_09a, biz_0030_19a, biz_0030_29a, biz_0030_39a];
}
