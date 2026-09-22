// Biz0017.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec17 { id: number; tag: string; score: number; }

class Unit17 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0017_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2227) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  m01.set('k1', acc % 997);
  for (let i2 = 0; i2 < 10; i2++) {
    acc = (acc + i2 * 13 + 220) % 100003;
  }
  buf += 'journey3-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  arr.push(acc % 1000);
  buf += 'sku7-' + acc.toString();
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = acc + 538 - (acc % 46);
  for (let i11 = 0; i11 < 7; i11++) {
    acc = (acc + i11 * 13 + 247) % 100003;
  }
  arr.push(acc % 1000);
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const rc16: Rec17 = { id: acc % 1000, tag: 't16', score: acc % 100 };
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
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  for (let i22 = 0; i22 < 4; i22++) {
    acc = (acc + i22 * 13 + 555) % 100003;
  }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 87) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const ix25: number = buf.indexOf('p17');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  const rc28: Rec17 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  const ix29: number = buf.indexOf('p17');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const ix30: number = buf.indexOf('p17');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  for (let i31 = 0; i31 < 6; i31++) {
    acc = (acc + i31 * 13 + 600) % 100003;
  }
  for (let i32 = 0; i32 < 5; i32++) {
    acc = (acc + i32 * 13 + 578) % 100003;
  }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 148) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  buf += 'quota36-' + acc.toString();
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  m01.set('k38', acc % 997);
  const rc39: Rec17 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  if (acc % 29 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-43'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k44', acc % 997);
  if (acc % 20 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const ix46: number = buf.indexOf('p17');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  const ix47: number = buf.indexOf('p17');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  const ix48: number = buf.indexOf('p17');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4254) % 65521;
  buf += `q50:${acc % 97}`;
  for (let i51 = 0; i51 < 12; i51++) {
    acc = (acc + i51 * 13 + 984) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2228) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const rc1: Rec17 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 191) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 47) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 13) { throw new Error('synthetic-7'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  try { if (acc % 29 === 15) { throw new Error('synthetic-10'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i11 = 0; i11 < 11; i11++) {
    acc = (acc + i11 * 13 + 94) % 100003;
  }
  const rc12: Rec17 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = acc + 725 - (acc % 82);
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 186) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 15) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  try { if (acc % 29 === 23) { throw new Error('synthetic-19'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const ix20: number = buf.indexOf('p17');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  const rc23: Rec17 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  m01.set('k28', acc % 997);
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  buf += 'payout32-' + acc.toString();
  if (acc % 8 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 184) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 7) { throw new Error('synthetic-35'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  acc = (acc * 31 + 8120) % 65521;
  buf += 'coupon39-' + acc.toString();
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  if (acc % 25 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  buf += `q42:${acc % 97}`;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  buf += `q44:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  buf += 'waybill46-' + acc.toString();
  buf += 'portal47-' + acc.toString();
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 179) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  if (acc % 10 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2635) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2229) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  acc = acc + 134 - (acc % 55);
  arr.push(acc % 1000);
  for (let i2 = 0; i2 < 11; i2++) {
    acc = (acc + i2 * 13 + 168) % 100003;
  }
  for (let i3 = 0; i3 < 7; i3++) {
    acc = (acc + i3 * 13 + 843) % 100003;
  }
  if (acc % 10 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  if (acc % 11 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 23) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const rc10: Rec17 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = acc + 834 - (acc % 74);
  buf += 'customs12-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const rc14: Rec17 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 173) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'rebate18-' + acc.toString();
  if (acc % 22 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  const rc20: Rec17 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = (acc * 31 + 1344) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  acc = acc + 91 - (acc % 26);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  if (acc % 26 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-26'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 7630) % 65521;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  acc = (acc * 31 + 2247) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-30'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  try { if (acc % 29 === 4) { throw new Error('synthetic-33'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 13) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  buf += `q36:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  try { if (acc % 29 === 4) { throw new Error('synthetic-40'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k41', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4988) % 65521;
  buf += 'audit44-' + acc.toString();
  try { if (acc % 29 === 22) { throw new Error('synthetic-45'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const ix47: number = buf.indexOf('p17');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += 'carrier50-' + acc.toString();
  try { if (acc % 29 === 20) { throw new Error('synthetic-51'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2230) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  m01.set('k0', acc % 997);
  const ix1: number = buf.indexOf('p17');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  const ix3: number = buf.indexOf('p17');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  acc = acc + 475 - (acc % 24);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 146) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = acc + 963 - (acc % 96);
  m01.set('k8', acc % 997);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  m01.set('k10', acc % 997);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 136) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  m01.set('k13', acc % 997);
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const rc15: Rec17 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  buf += 'audit16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 84) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  for (let i19 = 0; i19 < 12; i19++) {
    acc = (acc + i19 * 13 + 172) % 100003;
  }
  if (acc % 15 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = acc + 648 - (acc % 43);
  buf += 'crate22-' + acc.toString();
  m01.set('k23', acc % 997);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-26'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const rc28: Rec17 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = acc + 926 - (acc % 53);
  buf += `q30:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  const rc33: Rec17 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 52) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'routeplan35-' + acc.toString();
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  acc = acc + 147 - (acc % 55);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  buf += 'bay46-' + acc.toString();
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const rc49: Rec17 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  buf += `q50:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2231) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += 'waybill1-' + acc.toString();
  m01.set('k2', acc % 997);
  if (acc % 9 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  const rc5: Rec17 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const rc6: Rec17 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 52) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  acc = acc + 581 - (acc % 81);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  buf += 'portal10-' + acc.toString();
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 113) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 152) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = (acc * 31 + 6854) % 65521;
  for (let i14 = 0; i14 < 12; i14++) {
    acc = (acc + i14 * 13 + 410) % 100003;
  }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 77) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'depot19-' + acc.toString();
  arr.push(acc % 1000);
  let w21: number = acc % 23;
  while (w21 > 4) { w21 = Math.floor(w21 / 2); }
  acc += w21;
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 63) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 140) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  m01.set('k24', acc % 997);
  for (let i25 = 0; i25 < 6; i25++) {
    acc = (acc + i25 * 13 + 334) % 100003;
  }
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 78) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  acc = (acc * 31 + 780) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-29'); } acc += 48; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k30', acc % 997);
  buf += 'payout31-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 180) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 24 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  buf += `q36:${acc % 97}`;
  m01.set('k37', acc % 997);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  for (let i40 = 0; i40 < 9; i40++) {
    acc = (acc + i40 * 13 + 625) % 100003;
  }
  for (let i41 = 0; i41 < 5; i41++) {
    acc = (acc + i41 * 13 + 774) % 100003;
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  m01.set('k44', acc % 997);
  if (acc % 26 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  if (acc % 7 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-48'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2232) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 138) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  arr.push(acc % 1000);
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  buf += 'stocktake7-' + acc.toString();
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-9'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  const rc10: Rec17 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  acc = acc + 99 - (acc % 89);
  buf += `q12:${acc % 97}`;
  buf += `q13:${acc % 97}`;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 11) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  acc = acc + 764 - (acc % 84);
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 168) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 6; i18++) {
    acc = (acc + i18 * 13 + 907) % 100003;
  }
  buf += 'region19-' + acc.toString();
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  for (let i21 = 0; i21 < 11; i21++) {
    acc = (acc + i21 * 13 + 970) % 100003;
  }
  buf += `q22:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5142) % 65521;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  buf += 'bay29-' + acc.toString();
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  buf += `q32:${acc % 97}`;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 38) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 5; i35++) {
    acc = (acc + i35 * 13 + 740) % 100003;
  }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  try { if (acc % 29 === 23) { throw new Error('synthetic-37'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 242 - (acc % 24);
  buf += 'pallet39-' + acc.toString();
  if (acc % 20 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  acc = (acc * 31 + 6187) % 65521;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  acc = acc + 840 - (acc % 90);
  buf += 'vendor45-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 173) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const rc49: Rec17 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  const ix50: number = buf.indexOf('p17');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2233) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  try { if (acc % 29 === 8) { throw new Error('synthetic-2'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  const ix3: number = buf.indexOf('p17');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 193) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  m01.set('k8', acc % 997);
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  acc = acc + 511 - (acc % 89);
  acc = acc + 177 - (acc % 73);
  const ix12: number = buf.indexOf('p17');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 18) { throw new Error('synthetic-14'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 23 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 65) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const rc19: Rec17 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-26'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  try { if (acc % 29 === 15) { throw new Error('synthetic-28'); } acc += 11; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 13 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  m01.set('k30', acc % 997);
  m01.set('k31', acc % 997);
  if (acc % 18 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  if (acc % 25 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 185) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 5238) % 65521;
  acc = acc + 539 - (acc % 13);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  try { if (acc % 29 === 6) { throw new Error('synthetic-38'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 42) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 20) { throw new Error('synthetic-41'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'ledger42-' + acc.toString();
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  buf += 'rebate44-' + acc.toString();
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  try { if (acc % 29 === 13) { throw new Error('synthetic-46'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 6244) % 65521;
  if (acc % 21 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  if (acc % 27 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const rc51: Rec17 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2234) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  acc = (acc * 31 + 5408) % 65521;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const rc3: Rec17 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += 'dispatch6-' + acc.toString();
  try { if (acc % 29 === 21) { throw new Error('synthetic-7'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q8:${acc % 97}`;
  const ix9: number = buf.indexOf('p17');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  acc = acc + 498 - (acc % 65);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  for (let i12 = 0; i12 < 7; i12++) {
    acc = (acc + i12 * 13 + 68) % 100003;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-13'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  acc = acc + 450 - (acc % 82);
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 62) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const ix20: number = buf.indexOf('p17');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 1562) % 65521;
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  if (acc % 19 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  const rc24: Rec17 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  acc = acc + 934 - (acc % 13);
  try { if (acc % 29 === 13) { throw new Error('synthetic-26'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const ix27: number = buf.indexOf('p17');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  acc = acc + 801 - (acc % 54);
  if (acc % 5 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const rc30: Rec17 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 155) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  for (let i33 = 0; i33 < 11; i33++) {
    acc = (acc + i33 * 13 + 874) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 49) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  if (acc % 25 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-37'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 56) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const ix40: number = buf.indexOf('p17');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  for (let i42 = 0; i42 < 10; i42++) {
    acc = (acc + i42 * 13 + 69) % 100003;
  }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  for (let i44 = 0; i44 < 12; i44++) {
    acc = (acc + i44 * 13 + 496) % 100003;
  }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  acc = acc + 711 - (acc % 11);
  buf += `q48:${acc % 97}`;
  m01.set('k49', acc % 997);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2235) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  arr.push(acc % 1000);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  if (acc % 24 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = (acc * 31 + 2028) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  acc = (acc * 31 + 7556) % 65521;
  acc = acc + 734 - (acc % 97);
  m01.set('k9', acc % 997);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 174) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  const rc11: Rec17 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 107) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 881 - (acc % 47);
  if (acc % 23 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const ix21: number = buf.indexOf('p17');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const rc22: Rec17 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  for (let i25 = 0; i25 < 5; i25++) {
    acc = (acc + i25 * 13 + 152) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  try { if (acc % 29 === 11) { throw new Error('synthetic-28'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k29')) {
    const gv29: number = m01.get('k29') as number;
    acc = (acc + gv29) % 10007;
  }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  buf += `q32:${acc % 97}`;
  try { if (acc % 29 === 18) { throw new Error('synthetic-33'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 173) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (acc % 31 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  m01.set('k37', acc % 997);
  buf += `q38:${acc % 97}`;
  const rc39: Rec17 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  if (acc % 8 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const rc43: Rec17 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  m01.set('k44', acc % 997);
  acc = (acc * 31 + 2502) % 65521;
  for (let i46 = 0; i46 < 7; i46++) {
    acc = (acc + i46 * 13 + 781) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += 'audit48-' + acc.toString();
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  const ix50: number = buf.indexOf('p17');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const rc51: Rec17 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2236) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 79) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  buf += 'settle2-' + acc.toString();
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  acc = (acc * 31 + 3114) % 65521;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 10) { throw new Error('synthetic-8'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 29 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const rc11: Rec17 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  const rc13: Rec17 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  m01.set('k14', acc % 997);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 35) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  buf += 'transit16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 144) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const rc19: Rec17 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const ix22: number = buf.indexOf('p17');
  if (ix22 > 12) { buf = buf.substring(0, 32); } else if (ix22 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 7397) % 65521;
  for (let i24 = 0; i24 < 11; i24++) {
    acc = (acc + i24 * 13 + 534) % 100003;
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  arr.push(acc % 1000);
  buf += 'journey28-' + acc.toString();
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  buf += `q30:${acc % 97}`;
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  acc = (acc * 31 + 2712) % 65521;
  const rc33: Rec17 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 26) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const ix37: number = buf.indexOf('p17');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  arr.push(acc % 1000);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  const ix42: number = buf.indexOf('p17');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  acc = acc + 767 - (acc % 23);
  try { if (acc % 29 === 4) { throw new Error('synthetic-47'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += `q49:${acc % 97}`;
  if (acc % 11 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0017_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0017_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0017_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2237) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  try { if (acc % 29 === 3) { throw new Error('synthetic-0'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const rc2: Rec17 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  const ix3: number = buf.indexOf('p17');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  for (let i5 = 0; i5 < 11; i5++) {
    acc = (acc + i5 * 13 + 556) % 100003;
  }
  acc = acc + 26 - (acc % 82);
  acc = acc + 663 - (acc % 14);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 127) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  buf += 'audit9-' + acc.toString();
  try { if (acc % 29 === 12) { throw new Error('synthetic-10'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  m01.set('k12', acc % 997);
  const ix13: number = buf.indexOf('p17');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  m01.set('k14', acc % 997);
  arr.push(acc % 1000);
  acc = (acc * 31 + 3933) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 84) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  try { if (acc % 29 === 4) { throw new Error('synthetic-19'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (acc % 12 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (acc % 23 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  m01.set('k24', acc % 997);
  try { if (acc % 29 === 8) { throw new Error('synthetic-25'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  const db26: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db26.length) % 65521;
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const ix30: number = buf.indexOf('p17');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  buf += `q32:${acc % 97}`;
  for (let i33 = 0; i33 < 4; i33++) {
    acc = (acc + i33 * 13 + 461) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 197) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 7) { throw new Error('synthetic-35'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q36:${acc % 97}`;
  if (acc % 14 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  m01.set('k39', acc % 997);
  if (acc % 6 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  const rc42: Rec17 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  const ix43: number = buf.indexOf('p17');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  for (let i45 = 0; i45 < 10; i45++) {
    acc = (acc + i45 * 13 + 399) % 100003;
  }
  const rc46: Rec17 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 180) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  buf += `q48:${acc % 97}`;
  const ix49: number = buf.indexOf('p17');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const rc51: Rec17 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2238) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const rc1: Rec17 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 22) { throw new Error('synthetic-3'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const rc4: Rec17 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  buf += 'settle5-' + acc.toString();
  try { if (acc % 29 === 23) { throw new Error('synthetic-6'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const ix8: number = buf.indexOf('p17');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const rc9: Rec17 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 191) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = acc + 747 - (acc % 90);
  acc = (acc * 31 + 4055) % 65521;
  if (acc % 27 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += 'order16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 72) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  m01.set('k19', acc % 997);
  if (acc % 23 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = acc + 797 - (acc % 14);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = acc + 554 - (acc % 79);
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-30'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q32:${acc % 97}`;
  if (acc % 24 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 110) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  const rc36: Rec17 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  arr.push(acc % 1000);
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  acc = (acc * 31 + 3464) % 65521;
  buf += `q40:${acc % 97}`;
  m01.set('k41', acc % 997);
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  try { if (acc % 29 === 20) { throw new Error('synthetic-43'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 114) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  buf += `q48:${acc % 97}`;
  const rc49: Rec17 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2239) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  buf += `q0:${acc % 97}`;
  buf += `q1:${acc % 97}`;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  buf += `q4:${acc % 97}`;
  m01.set('k5', acc % 997);
  buf += 'tariff6-' + acc.toString();
  if (acc % 5 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  for (let i8 = 0; i8 < 4; i8++) {
    acc = (acc + i8 * 13 + 373) % 100003;
  }
  buf += 'tariff9-' + acc.toString();
  if (acc % 27 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  buf += 'shelf11-' + acc.toString();
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 197) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  arr.push(acc % 1000);
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 198) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 158) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const rc19: Rec17 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  const rc22: Rec17 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  buf += `q25:${acc % 97}`;
  m01.set('k26', acc % 997);
  m01.set('k27', acc % 997);
  try { if (acc % 29 === 10) { throw new Error('synthetic-28'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i29 = 0; i29 < 10; i29++) {
    acc = (acc + i29 * 13 + 789) % 100003;
  }
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  acc = (acc * 31 + 6756) % 65521;
  arr.push(acc % 1000);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 61) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 59) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 9; i35++) {
    acc = (acc + i35 * 13 + 298) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 856 - (acc % 14);
  try { if (acc % 29 === 13) { throw new Error('synthetic-42'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const ix45: number = buf.indexOf('p17');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  buf += 'coupon47-' + acc.toString();
  for (let i48 = 0; i48 < 4; i48++) {
    acc = (acc + i48 * 13 + 272) % 100003;
  }
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 148) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2240) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 65) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-2'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  for (let i4 = 0; i4 < 9; i4++) {
    acc = (acc + i4 * 13 + 858) % 100003;
  }
  const rc5: Rec17 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-8'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 9922) % 65521;
  acc = (acc * 31 + 4432) % 65521;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const ix13: number = buf.indexOf('p17');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  if (acc % 17 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 107) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  if (acc % 24 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const ix23: number = buf.indexOf('p17');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  m01.set('k24', acc % 997);
  const ix25: number = buf.indexOf('p17');
  if (ix25 > 12) { buf = buf.substring(0, 32); } else if (ix25 >= 0) { buf += 'i'; }
  buf += `q26:${acc % 97}`;
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 73) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const ix32: number = buf.indexOf('p17');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  const ix33: number = buf.indexOf('p17');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 108) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'rebate35-' + acc.toString();
  buf += `q36:${acc % 97}`;
  if (acc % 6 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  acc = acc + 48 - (acc % 29);
  acc = acc + 729 - (acc % 29);
  for (let i40 = 0; i40 < 3; i40++) {
    acc = (acc + i40 * 13 + 230) % 100003;
  }
  for (let i41 = 0; i41 < 12; i41++) {
    acc = (acc + i41 * 13 + 852) % 100003;
  }
  const rc42: Rec17 = { id: acc % 1000, tag: 't42', score: acc % 100 };
  acc = (acc + rc42.score) % 65521;
  buf += rc42.tag;
  arr.push(acc % 1000);
  buf += 'crate44-' + acc.toString();
  buf += 'pallet45-' + acc.toString();
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const ix47: number = buf.indexOf('p17');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  if (acc % 10 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  for (let i49 = 0; i49 < 10; i49++) {
    acc = (acc + i49 * 13 + 213) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const ix51: number = buf.indexOf('p17');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2241) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  m01.set('k1', acc % 997);
  for (let i2 = 0; i2 < 5; i2++) {
    acc = (acc + i2 * 13 + 721) % 100003;
  }
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  buf += `q7:${acc % 97}`;
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  buf += 'transit9-' + acc.toString();
  const ix10: number = buf.indexOf('p17');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  m01.set('k11', acc % 997);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = (acc * 31 + 3533) % 65521;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  const ix16: number = buf.indexOf('p17');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 174) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix19: number = buf.indexOf('p17');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  arr.push(acc % 1000);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  arr.push(acc % 1000);
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  for (let i25 = 0; i25 < 10; i25++) {
    acc = (acc + i25 * 13 + 119) % 100003;
  }
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  m01.set('k27', acc % 997);
  for (let i28 = 0; i28 < 7; i28++) {
    acc = (acc + i28 * 13 + 165) % 100003;
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 181) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const ix30: number = buf.indexOf('p17');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  if (acc % 10 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  acc = (acc * 31 + 2118) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 180) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  for (let i36 = 0; i36 < 9; i36++) {
    acc = (acc + i36 * 13 + 983) % 100003;
  }
  m01.set('k37', acc % 997);
  const rc38: Rec17 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  m01.set('k42', acc % 997);
  for (let i43 = 0; i43 < 3; i43++) {
    acc = (acc + i43 * 13 + 681) % 100003;
  }
  const rc44: Rec17 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  if (acc % 6 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  buf += `q46:${acc % 97}`;
  buf += `q47:${acc % 97}`;
  const rc48: Rec17 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  arr.push(acc % 1000);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2242) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  const ix0: number = buf.indexOf('p17');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += 'dispatch4-' + acc.toString();
  const rc5: Rec17 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = acc + 939 - (acc % 16);
  try { if (acc % 29 === 19) { throw new Error('synthetic-8'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = acc + 419 - (acc % 37);
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const ix12: number = buf.indexOf('p17');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 94) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-14'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 199) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-20'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  arr.push(acc % 1000);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  acc = (acc * 31 + 5696) % 65521;
  acc = (acc * 31 + 897) % 65521;
  const ix30: number = buf.indexOf('p17');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  for (let i32 = 0; i32 < 4; i32++) {
    acc = (acc + i32 * 13 + 886) % 100003;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-33'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 79) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 115) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  arr.push(acc % 1000);
  acc = acc + 229 - (acc % 65);
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  acc = (acc * 31 + 9554) % 65521;
  const db43: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db43.length) % 65521;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += `q46:${acc % 97}`;
  acc = (acc * 31 + 6042) % 65521;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 8) { throw new Error('synthetic-50'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2243) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  buf += `q1:${acc % 97}`;
  m01.set('k2', acc % 997);
  buf += `q3:${acc % 97}`;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const ix6: number = buf.indexOf('p17');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  if (acc % 17 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const ix8: number = buf.indexOf('p17');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  buf += 'batch9-' + acc.toString();
  acc = acc + 873 - (acc % 51);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 150) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  acc = acc + 263 - (acc % 19);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const ix14: number = buf.indexOf('p17');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4708) % 65521;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 199) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  if (acc % 23 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = acc + 929 - (acc % 67);
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const rc23: Rec17 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  acc = acc + 452 - (acc % 57);
  try { if (acc % 29 === 16) { throw new Error('synthetic-26'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  m01.set('k30', acc % 997);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  for (let i32 = 0; i32 < 12; i32++) {
    acc = (acc + i32 * 13 + 428) % 100003;
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 74) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  try { if (acc % 29 === 8) { throw new Error('synthetic-37'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 121) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2002) % 65521;
  acc = (acc * 31 + 8124) % 65521;
  const ix43: number = buf.indexOf('p17');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-47'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q48:${acc % 97}`;
  acc = (acc * 31 + 4454) % 65521;
  m01.set('k50', acc % 997);
  acc = (acc * 31 + 7154) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2244) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  buf += 'crate0-' + acc.toString();
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  for (let i3 = 0; i3 < 8; i3++) {
    acc = (acc + i3 * 13 + 750) % 100003;
  }
  for (let i4 = 0; i4 < 6; i4++) {
    acc = (acc + i4 * 13 + 480) % 100003;
  }
  for (let i5 = 0; i5 < 3; i5++) {
    acc = (acc + i5 * 13 + 486) % 100003;
  }
  try { if (acc % 29 === 9) { throw new Error('synthetic-6'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  const rc7: Rec17 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = acc + 803 - (acc % 91);
  if (acc % 16 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  for (let i12 = 0; i12 < 12; i12++) {
    acc = (acc + i12 * 13 + 334) % 100003;
  }
  if (acc % 7 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 14) { throw new Error('synthetic-15'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'routeplan16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 104) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 18 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += `q21:${acc % 97}`;
  for (let i22 = 0; i22 < 12; i22++) {
    acc = (acc + i22 * 13 + 920) % 100003;
  }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 51) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  m01.set('k24', acc % 997);
  m01.set('k25', acc % 997);
  acc = (acc * 31 + 6180) % 65521;
  arr.push(acc % 1000);
  for (let i28 = 0; i28 < 6; i28++) {
    acc = (acc + i28 * 13 + 116) % 100003;
  }
  acc = acc + 974 - (acc % 38);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  m01.set('k32', acc % 997);
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 30) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 5 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  buf += `q36:${acc % 97}`;
  for (let i37 = 0; i37 < 10; i37++) {
    acc = (acc + i37 * 13 + 99) % 100003;
  }
  arr.push(acc % 1000);
  buf += 'pallet39-' + acc.toString();
  const rc40: Rec17 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  buf += 'invoice42-' + acc.toString();
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const ix44: number = buf.indexOf('p17');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 5) { throw new Error('synthetic-45'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  buf += 'pallet50-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's051'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2245) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  buf += 'vendor1-' + acc.toString();
  buf += `q2:${acc % 97}`;
  buf += 'vendor3-' + acc.toString();
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 15) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (acc % 14 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  m01.set('k8', acc % 997);
  for (let i9 = 0; i9 < 3; i9++) {
    acc = (acc + i9 * 13 + 305) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  acc = acc + 647 - (acc % 73);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  buf += 'client13-' + acc.toString();
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  buf += 'ticket16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 62) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec17 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const rc19: Rec17 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  arr.push(acc % 1000);
  m01.set('k22', acc % 997);
  m01.set('k23', acc % 997);
  buf += 'tariff24-' + acc.toString();
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  acc = (acc * 31 + 2742) % 65521;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi28' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  m01.set('k32', acc % 997);
  acc = acc + 166 - (acc % 33);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 189) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec17 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  buf += 'warehouse37-' + acc.toString();
  try { if (acc % 29 === 7) { throw new Error('synthetic-38'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const ix42: number = buf.indexOf('p17');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  const rc43: Rec17 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  if (acc % 17 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  if (acc % 28 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1313) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2246) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  for (let i0 = 0; i0 < 6; i0++) {
    acc = (acc + i0 * 13 + 59) % 100003;
  }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 47) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const ix2: number = buf.indexOf('p17');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  if (acc % 30 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  acc = acc + 535 - (acc % 67);
  arr.push(acc % 1000);
  acc = (acc * 31 + 4777) % 65521;
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  buf += 'pickup12-' + acc.toString();
  buf += 'carrier13-' + acc.toString();
  m01.set('k14', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 93) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec17 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  acc = (acc * 31 + 2982) % 65521;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 140) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  if (m01.has('k24')) {
    const gv24: number = m01.get('k24') as number;
    acc = (acc + gv24) % 10007;
  }
  if (acc % 9 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  buf += `q26:${acc % 97}`;
  acc = (acc * 31 + 6801) % 65521;
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const ix30: number = buf.indexOf('p17');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-31'); } acc += 33; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = acc + 561 - (acc % 90);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 190) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'stocktake35-' + acc.toString();
  buf += (acc > 500 ? 'hi36' : 'lo') + acc.toString(16);
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  try { if (acc % 29 === 4) { throw new Error('synthetic-38'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  try { if (acc % 29 === 19) { throw new Error('synthetic-40'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const ix41: number = buf.indexOf('p17');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  for (let i45 = 0; i45 < 3; i45++) {
    acc = (acc + i45 * 13 + 894) % 100003;
  }
  m01.set('k46', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  try { if (acc % 29 === 2) { throw new Error('synthetic-48'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const ix49: number = buf.indexOf('p17');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += `q50:${acc % 97}`;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0017_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0017_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0017_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2247) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  buf += `q1:${acc % 97}`;
  const ix2: number = buf.indexOf('p17');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  for (let i4 = 0; i4 < 9; i4++) {
    acc = (acc + i4 * 13 + 657) % 100003;
  }
  for (let i5 = 0; i5 < 4; i5++) {
    acc = (acc + i5 * 13 + 782) % 100003;
  }
  buf += `q6:${acc % 97}`;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  buf += 'routeplan9-' + acc.toString();
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  buf += `q11:${acc % 97}`;
  buf += `q12:${acc % 97}`;
  if (acc % 9 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 116) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  acc = acc + 867 - (acc % 26);
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 185) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  if (acc % 14 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += 'payout23-' + acc.toString();
  m01.set('k24', acc % 997);
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  arr.push(acc % 1000);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  arr.push(acc % 1000);
  buf += `q30:${acc % 97}`;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  for (let i33 = 0; i33 < 4; i33++) {
    acc = (acc + i33 * 13 + 194) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 109) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  for (let i37 = 0; i37 < 11; i37++) {
    acc = (acc + i37 * 13 + 296) % 100003;
  }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = acc + 289 - (acc % 52);
  if (acc % 30 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const rc43: Rec17 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  if (acc % 11 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  try { if (acc % 29 === 10) { throw new Error('synthetic-47'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2248) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  acc = acc + 510 - (acc % 65);
  const ix1: number = buf.indexOf('p17');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (acc % 15 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  const ix5: number = buf.indexOf('p17');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 13) { throw new Error('synthetic-6'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k7')) {
    const gv7: number = m01.get('k7') as number;
    acc = (acc + gv7) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  try { if (acc % 29 === 6) { throw new Error('synthetic-10'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 188) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 78) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 28 === 0) { buf += 'even19'; } else { buf += 'odd'; }
  m01.set('k20', acc % 997);
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 113) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  buf += 'portal23-' + acc.toString();
  const ix24: number = buf.indexOf('p17');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  for (let i25 = 0; i25 < 7; i25++) {
    acc = (acc + i25 * 13 + 455) % 100003;
  }
  buf += `q26:${acc % 97}`;
  const ix27: number = buf.indexOf('p17');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 76) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  for (let i29 = 0; i29 < 12; i29++) {
    acc = (acc + i29 * 13 + 639) % 100003;
  }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 91) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = (acc * 31 + 2324) % 65521;
  if (acc % 8 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7659) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 29) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  acc = (acc * 31 + 2332) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-37'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const rc39: Rec17 = { id: acc % 1000, tag: 't39', score: acc % 100 };
  acc = (acc + rc39.score) % 65521;
  buf += rc39.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  acc = (acc * 31 + 6900) % 65521;
  buf += `q42:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  for (let i47 = 0; i47 < 7; i47++) {
    acc = (acc + i47 * 13 + 375) % 100003;
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 153) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  const rc49: Rec17 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  arr.push(acc % 1000);
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2249) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  arr.push(acc % 1000);
  buf += 'settle1-' + acc.toString();
  buf += 'policy2-' + acc.toString();
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 13) { throw new Error('synthetic-6'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'pallet7-' + acc.toString();
  arr.push(acc % 1000);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  acc = (acc * 31 + 6735) % 65521;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 169) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const rc13: Rec17 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const rc14: Rec17 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  for (let i16 = 0; i16 < 4; i16++) {
    acc = (acc + i16 * 13 + 793) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 25) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec17 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  buf += 'tariff20-' + acc.toString();
  const ix21: number = buf.indexOf('p17');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const ix23: number = buf.indexOf('p17');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  arr.push(acc % 1000);
  acc = acc + 830 - (acc % 20);
  arr.push(acc % 1000);
  buf += `q28:${acc % 97}`;
  try { if (acc % 29 === 10) { throw new Error('synthetic-29'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  if (acc % 22 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 162) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  acc = (acc * 31 + 2775) % 65521;
  try { if (acc % 29 === 20) { throw new Error('synthetic-38'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 97) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  acc = (acc * 31 + 7153) % 65521;
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  if (acc % 17 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 56) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  acc = (acc * 31 + 3323) % 65521;
  arr.push(acc % 1000);
  m01.set('k49', acc % 997);
  if (acc % 17 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  for (let i51 = 0; i51 < 10; i51++) {
    acc = (acc + i51 * 13 + 354) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2250) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-1'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 184) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const rc6: Rec17 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const ix10: number = buf.indexOf('p17');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  m01.set('k11', acc % 997);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const ix13: number = buf.indexOf('p17');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const rc14: Rec17 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  const rc15: Rec17 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 168) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  const rc20: Rec17 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  acc = acc + 785 - (acc % 76);
  if (acc % 6 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  acc = acc + 944 - (acc % 50);
  const rc25: Rec17 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  if (acc % 9 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  for (let i27 = 0; i27 < 7; i27++) {
    acc = (acc + i27 * 13 + 62) % 100003;
  }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  if (acc % 13 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = acc + 521 - (acc % 35);
  const ix32: number = buf.indexOf('p17');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  buf += 'coupon33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 94) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  m01.set('k36', acc % 997);
  buf += 'quota37-' + acc.toString();
  buf += `q38:${acc % 97}`;
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  const rc44: Rec17 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 128) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix48: number = buf.indexOf('p17');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  const ix49: number = buf.indexOf('p17');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 102) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2251) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  arr.push(acc % 1000);
  buf += `q2:${acc % 97}`;
  buf += 'customs3-' + acc.toString();
  if (acc % 24 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  for (let i5 = 0; i5 < 11; i5++) {
    acc = (acc + i5 * 13 + 404) % 100003;
  }
  acc = (acc * 31 + 3792) % 65521;
  buf += 'batch7-' + acc.toString();
  buf += `q8:${acc % 97}`;
  try { if (acc % 29 === 9) { throw new Error('synthetic-9'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-10'); } acc += 20; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 6) { throw new Error('synthetic-12'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  if (acc % 16 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  if (acc % 26 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 160) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  acc = (acc * 31 + 663) % 65521;
  acc = (acc * 31 + 400) % 65521;
  const rc21: Rec17 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const rc22: Rec17 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  acc = acc + 757 - (acc % 86);
  acc = acc + 576 - (acc % 53);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += 'payout30-' + acc.toString();
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 35) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  try { if (acc % 29 === 15) { throw new Error('synthetic-36'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 16 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  acc = (acc * 31 + 1310) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const rc40: Rec17 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  const db41: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db41.length) % 65521;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  try { if (acc % 29 === 9) { throw new Error('synthetic-43'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  const ix48: number = buf.indexOf('p17');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 122) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  const ix50: number = buf.indexOf('p17');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2252) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  const rc0: Rec17 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  try { if (acc % 29 === 19) { throw new Error('synthetic-1'); } acc += 36; } catch (e) { acc = (acc + 17) % 65521; }
  const rc2: Rec17 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += `q6:${acc % 97}`;
  if (acc % 28 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  if (acc % 28 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  acc = acc + 165 - (acc % 93);
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 79) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  buf += `q14:${acc % 97}`;
  buf += `q15:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 16) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  try { if (acc % 29 === 7) { throw new Error('synthetic-19'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 19) { throw new Error('synthetic-20'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  buf += 'shelf22-' + acc.toString();
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  m01.set('k24', acc % 997);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  m01.set('k28', acc % 997);
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  acc = (acc * 31 + 6250) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  if (acc % 26 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 70) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 21 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  acc = acc + 221 - (acc % 60);
  const rc37: Rec17 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = acc + 45 - (acc % 87);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 32) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const rc43: Rec17 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  for (let i44 = 0; i44 < 4; i44++) {
    acc = (acc + i44 * 13 + 857) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = acc + 766 - (acc % 76);
  const rc47: Rec17 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  if (acc % 28 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  buf += 'coupon49-' + acc.toString();
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const rc51: Rec17 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2253) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  acc = (acc * 31 + 7009) % 65521;
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  buf += `q2:${acc % 97}`;
  try { if (acc % 29 === 15) { throw new Error('synthetic-3'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 19 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += `q7:${acc % 97}`;
  if (acc % 18 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  buf += `q9:${acc % 97}`;
  if (acc % 7 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  if (acc % 21 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  const rc15: Rec17 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  acc = acc + 369 - (acc % 35);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 59) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 20 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const ix20: number = buf.indexOf('p17');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  buf += 'payout21-' + acc.toString();
  acc = (acc * 31 + 9443) % 65521;
  if (acc % 16 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  const rc24: Rec17 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i26 = 0; i26 < 4; i26++) {
    acc = (acc + i26 * 13 + 892) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  arr.push(acc % 1000);
  acc = (acc * 31 + 4908) % 65521;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  buf += 'region33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 70) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x35');
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 77) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const ix43: number = buf.indexOf('p17');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  m01.set('k46', acc % 997);
  for (let i47 = 0; i47 < 5; i47++) {
    acc = (acc + i47 * 13 + 448) % 100003;
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 776) % 65521;
  const rc50: Rec17 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  acc = (acc * 31 + 6818) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2254) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  arr.push(acc % 1000);
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 159) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 84) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 134) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  m01.set('k5', acc % 997);
  const rc6: Rec17 = { id: acc % 1000, tag: 't6', score: acc % 100 };
  acc = (acc + rc6.score) % 65521;
  buf += rc6.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-7'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  acc = acc + 110 - (acc % 75);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  if (acc % 19 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  buf += 'order14-' + acc.toString();
  for (let i15 = 0; i15 < 6; i15++) {
    acc = (acc + i15 * 13 + 324) % 100003;
  }
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 175) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 4283) % 65521;
  if (acc % 29 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = (acc * 31 + 138) % 65521;
  buf += `q22:${acc % 97}`;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  acc = (acc * 31 + 182) % 65521;
  try { if (acc % 29 === 23) { throw new Error('synthetic-25'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-28'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 6 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const rc30: Rec17 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 162) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  buf += `q32:${acc % 97}`;
  buf += 'tariff33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 197) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7931) % 65521;
  m01.set('k39', acc % 997);
  const ix40: number = buf.indexOf('p17');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 185) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const rc43: Rec17 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  if (acc % 8 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 102) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 50) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2255) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  if (acc % 26 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += `q2:${acc % 97}`;
  const rc3: Rec17 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  for (let i6 = 0; i6 < 8; i6++) {
    acc = (acc + i6 * 13 + 494) % 100003;
  }
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  try { if (acc % 29 === 7) { throw new Error('synthetic-9'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  buf += `q12:${acc % 97}`;
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  if (acc % 17 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 83) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const rc19: Rec17 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = (acc * 31 + 2519) % 65521;
  const ix21: number = buf.indexOf('p17');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  acc = acc + 16 - (acc % 39);
  acc = (acc * 31 + 2475) % 65521;
  const ix26: number = buf.indexOf('p17');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  acc = acc + 446 - (acc % 57);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4678) % 65521;
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  arr.push(acc % 1000);
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 130) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 68) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 10) { throw new Error('synthetic-40'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 91) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  acc = (acc * 31 + 4249) % 65521;
  buf += 'coupon43-' + acc.toString();
  try { if (acc % 29 === 13) { throw new Error('synthetic-44'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k45', acc % 997);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 141) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-47'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  m01.set('k49', acc % 997);
  acc = acc + 440 - (acc % 45);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2256) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  try { if (acc % 29 === 12) { throw new Error('synthetic-0'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 15) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'warehouse3-' + acc.toString();
  for (let i4 = 0; i4 < 12; i4++) {
    acc = (acc + i4 * 13 + 111) % 100003;
  }
  const rc5: Rec17 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  buf += `q6:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  if (acc % 6 === 0) { buf += 'even8'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  acc = (acc * 31 + 5423) % 65521;
  if (acc % 26 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  acc = acc + 708 - (acc % 24);
  for (let i14 = 0; i14 < 11; i14++) {
    acc = (acc + i14 * 13 + 407) % 100003;
  }
  buf += 'bay15-' + acc.toString();
  try { if (acc % 29 === 19) { throw new Error('synthetic-16'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 34) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 4; i18++) {
    acc = (acc + i18 * 13 + 934) % 100003;
  }
  acc = acc + 734 - (acc % 12);
  const rc20: Rec17 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  try { if (acc % 29 === 3) { throw new Error('synthetic-21'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q22:${acc % 97}`;
  acc = acc + 865 - (acc % 79);
  acc = acc + 216 - (acc % 50);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 119) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  m01.set('k26', acc % 997);
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  for (let i28 = 0; i28 < 11; i28++) {
    acc = (acc + i28 * 13 + 269) % 100003;
  }
  buf += 'order29-' + acc.toString();
  const rc30: Rec17 = { id: acc % 1000, tag: 't30', score: acc % 100 };
  acc = (acc + rc30.score) % 65521;
  buf += rc30.tag;
  buf += 'parcel31-' + acc.toString();
  const rc32: Rec17 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 55) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 3644) % 65521;
  const cf37: Array<(x: number) => number> = [];
  cf37.push((x: number): number => (x * 3 + acc) % 65521);
  cf37.push((x: number): number => (x + 123) % 10007);
  acc = cf37[acc & 1](acc % 9973);
  buf += `q38:${acc % 97}`;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  if (acc % 10 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 11) { throw new Error('synthetic-43'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 15) { throw new Error('synthetic-44'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 8) { throw new Error('synthetic-45'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  if (acc % 28 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  const rc51: Rec17 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0017_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0017_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0017_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2257) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  buf += `q1:${acc % 97}`;
  m01.set('k2', acc % 997);
  arr.push(acc % 1000);
  buf += `q4:${acc % 97}`;
  acc = (acc * 31 + 1158) % 65521;
  if (acc % 28 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8418) % 65521;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 132) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  buf += `q9:${acc % 97}`;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 101) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const cf13: Array<(x: number) => number> = [];
  cf13.push((x: number): number => (x * 3 + acc) % 65521);
  cf13.push((x: number): number => (x + 58) % 10007);
  acc = cf13[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 6588) % 65521;
  buf += 'payout16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 62) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  arr.push(acc % 1000);
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 186) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  acc = acc + 104 - (acc % 59);
  acc = acc + 32 - (acc % 59);
  arr.push(acc % 1000);
  for (let i26 = 0; i26 < 9; i26++) {
    acc = (acc + i26 * 13 + 516) % 100003;
  }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  if (acc % 25 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  for (let i29 = 0; i29 < 3; i29++) {
    acc = (acc + i29 * 13 + 409) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  for (let i32 = 0; i32 < 5; i32++) {
    acc = (acc + i32 * 13 + 887) % 100003;
  }
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 109) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += 'payout36-' + acc.toString();
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  const ix38: number = buf.indexOf('p17');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 2942) % 65521;
  acc = acc + 71 - (acc % 76);
  acc = acc + 415 - (acc % 32);
  if (acc % 12 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  if (acc % 18 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += `q45:${acc % 97}`;
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  const ix51: number = buf.indexOf('p17');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2258) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  buf += 'stocktake0-' + acc.toString();
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 12) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  for (let i5 = 0; i5 < 6; i5++) {
    acc = (acc + i5 * 13 + 328) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  try { if (acc % 29 === 5) { throw new Error('synthetic-8'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  const rc9: Rec17 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  acc = (acc * 31 + 7331) % 65521;
  for (let i11 = 0; i11 < 7; i11++) {
    acc = (acc + i11 * 13 + 497) % 100003;
  }
  buf += `q12:${acc % 97}`;
  acc = acc + 771 - (acc % 28);
  const ix14: number = buf.indexOf('p17');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  for (let i16 = 0; i16 < 12; i16++) {
    acc = (acc + i16 * 13 + 863) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 52) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 605 - (acc % 14);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  m01.set('k20', acc % 997);
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  m01.set('k22', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  try { if (acc % 29 === 10) { throw new Error('synthetic-27'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q28:${acc % 97}`;
  buf += `q29:${acc % 97}`;
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  if (acc % 9 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 120) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  if (acc % 22 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  for (let i40 = 0; i40 < 8; i40++) {
    acc = (acc + i40 * 13 + 915) % 100003;
  }
  for (let i41 = 0; i41 < 8; i41++) {
    acc = (acc + i41 * 13 + 654) % 100003;
  }
  if (acc % 21 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 82) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  buf += `q44:${acc % 97}`;
  m01.set('k45', acc % 997);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += 'dock48-' + acc.toString();
  const rc49: Rec17 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  buf += 'ticket50-' + acc.toString();
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2259) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  acc = acc + 910 - (acc % 48);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const rc4: Rec17 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k8', acc % 997);
  acc = acc + 589 - (acc % 96);
  m01.set('k10', acc % 997);
  try { if (acc % 29 === 22) { throw new Error('synthetic-11'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  if (acc % 8 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  for (let i16 = 0; i16 < 5; i16++) {
    acc = (acc + i16 * 13 + 988) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 65) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 31 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  buf += 'ledger19-' + acc.toString();
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  if (acc % 15 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  if (acc % 23 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  acc = acc + 663 - (acc % 60);
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  buf += `q25:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  const ix28: number = buf.indexOf('p17');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 23) { throw new Error('synthetic-29'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 4755) % 65521;
  for (let i31 = 0; i31 < 3; i31++) {
    acc = (acc + i31 * 13 + 258) % 100003;
  }
  arr.push(acc % 1000);
  acc = acc + 166 - (acc % 92);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 133) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'policy35-' + acc.toString();
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  for (let i38 = 0; i38 < 3; i38++) {
    acc = (acc + i38 * 13 + 718) % 100003;
  }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 133) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  arr.push(acc % 1000);
  acc = (acc * 31 + 7310) % 65521;
  try { if (acc % 29 === 22) { throw new Error('synthetic-46'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  const rc47: Rec17 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const rc48: Rec17 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  buf += `q49:${acc % 97}`;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2260) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  try { if (acc % 29 === 17) { throw new Error('synthetic-3'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 26 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += `q6:${acc % 97}`;
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  buf += 'routeplan8-' + acc.toString();
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 105) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 199) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  try { if (acc % 29 === 13) { throw new Error('synthetic-11'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  const ix12: number = buf.indexOf('p17');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 83) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  acc = (acc * 31 + 9182) % 65521;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 77) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  acc = acc + 587 - (acc % 61);
  for (let i20 = 0; i20 < 10; i20++) {
    acc = (acc + i20 * 13 + 860) % 100003;
  }
  const rc21: Rec17 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  if (m01.has('k23')) {
    const gv23: number = m01.get('k23') as number;
    acc = (acc + gv23) % 10007;
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  if (acc % 11 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  m01.set('k26', acc % 997);
  for (let i27 = 0; i27 < 12; i27++) {
    acc = (acc + i27 * 13 + 444) % 100003;
  }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  arr.push(acc % 1000);
  acc = acc + 77 - (acc % 78);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 126) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p17');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  for (let i36 = 0; i36 < 10; i36++) {
    acc = (acc + i36 * 13 + 719) % 100003;
  }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  acc = acc + 41 - (acc % 10);
  for (let i40 = 0; i40 < 9; i40++) {
    acc = (acc + i40 * 13 + 520) % 100003;
  }
  if (acc % 29 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  for (let i43 = 0; i43 < 9; i43++) {
    acc = (acc + i43 * 13 + 465) % 100003;
  }
  for (let i44 = 0; i44 < 8; i44++) {
    acc = (acc + i44 * 13 + 74) % 100003;
  }
  const rc45: Rec17 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const rc46: Rec17 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  acc = acc + 506 - (acc % 23);
  if (acc % 30 === 0) { buf += 'even48'; } else { buf += 'odd'; }
  acc = (acc * 31 + 7574) % 65521;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const rc51: Rec17 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2261) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 69) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  const ix1: number = buf.indexOf('p17');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  buf += 'dock2-' + acc.toString();
  acc = (acc * 31 + 2749) % 65521;
  if (acc % 10 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  buf += 'bay5-' + acc.toString();
  acc = (acc * 31 + 4361) % 65521;
  buf += `q7:${acc % 97}`;
  for (let i8 = 0; i8 < 8; i8++) {
    acc = (acc + i8 * 13 + 650) % 100003;
  }
  if (acc % 27 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const rc11: Rec17 = { id: acc % 1000, tag: 't11', score: acc % 100 };
  acc = (acc + rc11.score) % 65521;
  buf += rc11.tag;
  switch (acc & 3) {
    case 0: buf += 's012'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  buf += 'portal14-' + acc.toString();
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  acc = acc + 543 - (acc % 49);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 33) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 3; i18++) {
    acc = (acc + i18 * 13 + 397) % 100003;
  }
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 29) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  m01.set('k21', acc % 997);
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  const ix23: number = buf.indexOf('p17');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  for (let i25 = 0; i25 < 10; i25++) {
    acc = (acc + i25 * 13 + 335) % 100003;
  }
  buf += 'rebate26-' + acc.toString();
  acc = acc + 17 - (acc % 39);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  buf += 'settle31-' + acc.toString();
  const ix32: number = buf.indexOf('p17');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 21) { throw new Error('synthetic-33'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 40) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = (acc * 31 + 9539) % 65521;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  for (let i38 = 0; i38 < 7; i38++) {
    acc = (acc + i38 * 13 + 490) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q40:${acc % 97}`;
  acc = acc + 872 - (acc % 42);
  const ix42: number = buf.indexOf('p17');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = acc + 286 - (acc % 89);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const rc47: Rec17 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  for (let i50 = 0; i50 < 9; i50++) {
    acc = (acc + i50 * 13 + 840) % 100003;
  }
  for (let i51 = 0; i51 < 3; i51++) {
    acc = (acc + i51 * 13 + 832) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2262) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  buf += 'routeplan2-' + acc.toString();
  for (let i3 = 0; i3 < 7; i3++) {
    acc = (acc + i3 * 13 + 717) % 100003;
  }
  for (let i4 = 0; i4 < 3; i4++) {
    acc = (acc + i4 * 13 + 419) % 100003;
  }
  m01.set('k5', acc % 997);
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 70) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  acc = acc + 997 - (acc % 82);
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  for (let i14 = 0; i14 < 3; i14++) {
    acc = (acc + i14 * 13 + 257) % 100003;
  }
  const ix15: number = buf.indexOf('p17');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-16'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 110) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 398 - (acc % 76);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x19');
  acc = (acc * 31 + 6984) % 65521;
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  if (m01.has('k22')) {
    const gv22: number = m01.get('k22') as number;
    acc = (acc + gv22) % 10007;
  }
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 85) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  buf += 'batch24-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  acc = (acc * 31 + 6804) % 65521;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 88) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  const ix30: number = buf.indexOf('p17');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const rc31: Rec17 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 30) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  buf += `q36:${acc % 97}`;
  acc = acc + 236 - (acc % 39);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const rc40: Rec17 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const rc45: Rec17 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const ix46: number = buf.indexOf('p17');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const rc48: Rec17 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  acc = (acc * 31 + 4671) % 65521;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  acc = acc + 585 - (acc % 13);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2263) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  buf += 'batch0-' + acc.toString();
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  buf += `q2:${acc % 97}`;
  m01.set('k3', acc % 997);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 87) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  if (acc % 19 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-7'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  const rc8: Rec17 = { id: acc % 1000, tag: 't8', score: acc % 100 };
  acc = (acc + rc8.score) % 65521;
  buf += rc8.tag;
  const rc9: Rec17 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  buf += `q10:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 195) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const rc19: Rec17 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  acc = acc + 213 - (acc % 20);
  m01.set('k21', acc % 997);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  for (let i23 = 0; i23 < 6; i23++) {
    acc = (acc + i23 * 13 + 99) % 100003;
  }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  buf += `q25:${acc % 97}`;
  acc = (acc * 31 + 9864) % 65521;
  acc = acc + 245 - (acc % 64);
  if (acc % 13 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  m01.set('k31', acc % 997);
  buf += 'carrier32-' + acc.toString();
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  acc = acc + 958 - (acc % 27);
  if (acc % 21 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  m01.set('k38', acc % 997);
  const ix39: number = buf.indexOf('p17');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-40'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  m01.set('k42', acc % 997);
  m01.set('k43', acc % 997);
  if (acc % 27 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-45'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  m01.set('k47', acc % 997);
  m01.set('k48', acc % 997);
  const db49: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db49.length) % 65521;
  for (let i50 = 0; i50 < 11; i50++) {
    acc = (acc + i50 * 13 + 494) % 100003;
  }
  buf += 'pallet51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2264) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  m01.set('k0', acc % 997);
  for (let i1 = 0; i1 < 4; i1++) {
    acc = (acc + i1 * 13 + 549) % 100003;
  }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  if (m01.has('k3')) {
    const gv3: number = m01.get('k3') as number;
    acc = (acc + gv3) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  if (acc % 17 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  if (m01.has('k6')) {
    const gv6: number = m01.get('k6') as number;
    acc = (acc + gv6) % 10007;
  }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 20) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  buf += `q8:${acc % 97}`;
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 34) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 38) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const ix13: number = buf.indexOf('p17');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  m01.set('k14', acc % 997);
  acc = acc + 222 - (acc % 49);
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 183) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 383 - (acc % 56);
  for (let i19 = 0; i19 < 6; i19++) {
    acc = (acc + i19 * 13 + 311) % 100003;
  }
  buf += 'audit20-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  try { if (acc % 29 === 7) { throw new Error('synthetic-23'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = (acc * 31 + 3238) % 65521;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 175) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  try { if (acc % 29 === 21) { throw new Error('synthetic-27'); } acc += 50; } catch (e) { acc = (acc + 17) % 65521; }
  let w28: number = acc % 23;
  while (w28 > 4) { w28 = Math.floor(w28 / 2); }
  acc += w28;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 32) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const ix36: number = buf.indexOf('p17');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  acc = acc + 857 - (acc % 9);
  let w40: number = acc % 23;
  while (w40 > 4) { w40 = Math.floor(w40 / 2); }
  acc += w40;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += `q42:${acc % 97}`;
  buf += 'settle43-' + acc.toString();
  m01.set('k44', acc % 997);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 120) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  try { if (acc % 29 === 2) { throw new Error('synthetic-46'); } acc += 59; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const ix49: number = buf.indexOf('p17');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  const rc51: Rec17 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2265) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  for (let i0 = 0; i0 < 9; i0++) {
    acc = (acc + i0 * 13 + 343) % 100003;
  }
  buf += `q1:${acc % 97}`;
  for (let i2 = 0; i2 < 8; i2++) {
    acc = (acc + i2 * 13 + 155) % 100003;
  }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const rc4: Rec17 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  acc = (acc * 31 + 3944) % 65521;
  acc = (acc * 31 + 4366) % 65521;
  arr.push(acc % 1000);
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 144) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  acc = acc + 380 - (acc % 14);
  m01.set('k13', acc % 997);
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  for (let i15 = 0; i15 < 5; i15++) {
    acc = (acc + i15 * 13 + 850) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 72) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (m01.has('k18')) {
    const gv18: number = m01.get('k18') as number;
    acc = (acc + gv18) % 10007;
  }
  buf += 'batch19-' + acc.toString();
  const ix20: number = buf.indexOf('p17');
  if (ix20 > 12) { buf = buf.substring(0, 32); } else if (ix20 >= 0) { buf += 'i'; }
  const ix21: number = buf.indexOf('p17');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  if (acc % 22 === 0) { buf += 'even22'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += 'settle24-' + acc.toString();
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  buf += `q26:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  acc = (acc * 31 + 8303) % 65521;
  m01.set('k29', acc % 997);
  try { if (acc % 29 === 18) { throw new Error('synthetic-30'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 277 - (acc % 19);
  buf += 'payout32-' + acc.toString();
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 62) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 2148) % 65521;
  acc = (acc * 31 + 2565) % 65521;
  buf += `q37:${acc % 97}`;
  acc = (acc * 31 + 322) % 65521;
  for (let i39 = 0; i39 < 5; i39++) {
    acc = (acc + i39 * 13 + 496) % 100003;
  }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  for (let i41 = 0; i41 < 9; i41++) {
    acc = (acc + i41 * 13 + 687) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  if (acc % 5 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  acc = (acc * 31 + 4601) % 65521;
  buf += `q47:${acc % 97}`;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  buf += `q49:${acc % 97}`;
  for (let i50 = 0; i50 < 11; i50++) {
    acc = (acc + i50 * 13 + 860) % 100003;
  }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2266) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 22) { throw new Error('synthetic-1'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  const t04: string = tags.length > 0 ? tags[0] : 'none';
  buf += t04;
  for (let i5 = 0; i5 < 10; i5++) {
    acc = (acc + i5 * 13 + 509) % 100003;
  }
  buf += 'invoice6-' + acc.toString();
  if (acc % 8 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 130) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  m01.set('k9', acc % 997);
  const rc10: Rec17 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 61) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 170) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec17 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  buf += 'carrier20-' + acc.toString();
  const t021: string = tags.length > 0 ? tags[0] : 'none';
  buf += t021;
  buf += `q22:${acc % 97}`;
  buf += `q23:${acc % 97}`;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 20) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  try { if (acc % 29 === 12) { throw new Error('synthetic-25'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const rc27: Rec17 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  buf += `q28:${acc % 97}`;
  buf += `q29:${acc % 97}`;
  arr.push(acc % 1000);
  buf += 'waybill31-' + acc.toString();
  arr.push(acc % 1000);
  const rc33: Rec17 = { id: acc % 1000, tag: 't33', score: acc % 100 };
  acc = (acc + rc33.score) % 65521;
  buf += rc33.tag;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 189) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's035'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const rc36: Rec17 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  arr.push(acc % 1000);
  const ix38: number = buf.indexOf('p17');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  for (let i39 = 0; i39 < 5; i39++) {
    acc = (acc + i39 * 13 + 504) % 100003;
  }
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  for (let i41 = 0; i41 < 3; i41++) {
    acc = (acc + i41 * 13 + 847) % 100003;
  }
  buf += 'customs42-' + acc.toString();
  const ix43: number = buf.indexOf('p17');
  if (ix43 > 12) { buf = buf.substring(0, 32); } else if (ix43 >= 0) { buf += 'i'; }
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 169) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const rc47: Rec17 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 12) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  buf += 'ledger49-' + acc.toString();
  acc = acc + 471 - (acc % 19);
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0017_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0017_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0017_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2267) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  acc = (acc * 31 + 2258) % 65521;
  acc = (acc * 31 + 6070) % 65521;
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += `q7:${acc % 97}`;
  buf += 'coupon8-' + acc.toString();
  if (acc % 15 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 167) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  try { if (acc % 29 === 15) { throw new Error('synthetic-14'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 136) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 28 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  if (acc % 27 === 0) { buf += 'even21'; } else { buf += 'odd'; }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 108) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  try { if (acc % 29 === 17) { throw new Error('synthetic-23'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 926 - (acc % 95);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  let w26: number = acc % 23;
  while (w26 > 4) { w26 = Math.floor(w26 / 2); }
  acc += w26;
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 85) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-32'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 120) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p17');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const rc37: Rec17 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  if (acc % 23 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2147) % 65521;
  m01.set('k43', acc % 997);
  try { if (acc % 29 === 21) { throw new Error('synthetic-44'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 6311) % 65521;
  const rc47: Rec17 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  acc = (acc * 31 + 6414) % 65521;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  const rc51: Rec17 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2268) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  arr.push(acc % 1000);
  for (let i1 = 0; i1 < 4; i1++) {
    acc = (acc + i1 * 13 + 901) % 100003;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-2'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 10 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  for (let i4 = 0; i4 < 4; i4++) {
    acc = (acc + i4 * 13 + 392) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 29) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  buf += `q7:${acc % 97}`;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  try { if (acc % 29 === 18) { throw new Error('synthetic-9'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i10 = 0; i10 < 7; i10++) {
    acc = (acc + i10 * 13 + 847) % 100003;
  }
  const ix11: number = buf.indexOf('p17');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 95) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 171) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  const rc16: Rec17 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 105) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's018'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const rc19: Rec17 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  let w20: number = acc % 23;
  while (w20 > 4) { w20 = Math.floor(w20 / 2); }
  acc += w20;
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += `q23:${acc % 97}`;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 10) { throw new Error('synthetic-25'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 320 - (acc % 26);
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  arr.push(acc % 1000);
  if (acc % 15 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const rc31: Rec17 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  acc = acc + 448 - (acc % 8);
  buf += 'balance33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 100) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 84) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = acc + 808 - (acc % 16);
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  buf += `q42:${acc % 97}`;
  buf += 'batch43-' + acc.toString();
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  if (acc % 24 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  buf += `q47:${acc % 97}`;
  buf += 'routeplan48-' + acc.toString();
  acc = acc + 88 - (acc % 31);
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0017_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 2269) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit17 = new Unit17(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += 'coupon1-' + acc.toString();
  buf += `q2:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  for (let i4 = 0; i4 < 5; i4++) {
    acc = (acc + i4 * 13 + 343) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  if (acc % 19 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-8'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's09'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const ix12: number = buf.indexOf('p17');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  buf += `q14:${acc % 97}`;
  const ix15: number = buf.indexOf('p17');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  buf += 'pallet16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 135) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const ix21: number = buf.indexOf('p17');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 132) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  try { if (acc % 29 === 8) { throw new Error('synthetic-23'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 2323) % 65521;
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 13) { throw new Error('synthetic-26'); } acc += 17; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 50) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  buf += 'coupon29-' + acc.toString();
  for (let i30 = 0; i30 < 8; i30++) {
    acc = (acc + i30 * 13 + 536) % 100003;
  }
  buf += `q31:${acc % 97}`;
  buf += `q32:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 155) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 131) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  if (acc % 15 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 13) { throw new Error('synthetic-38'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 108) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's040'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  try { if (acc % 29 === 12) { throw new Error('synthetic-42'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  m01.set('k44', acc % 997);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  const rc48: Rec17 = { id: acc % 1000, tag: 't48', score: acc % 100 };
  acc = (acc + rc48.score) % 65521;
  buf += rc48.tag;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  arr.push(acc % 1000);
  const ix51: number = buf.indexOf('p17');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0017(): BizFn[] {
  return [biz_0017_00, biz_0017_01, biz_0017_02, biz_0017_03, biz_0017_04, biz_0017_05, biz_0017_06, biz_0017_07, biz_0017_08, biz_0017_09, biz_0017_10, biz_0017_11, biz_0017_12, biz_0017_13, biz_0017_14, biz_0017_15, biz_0017_16, biz_0017_17, biz_0017_18, biz_0017_19, biz_0017_20, biz_0017_21, biz_0017_22, biz_0017_23, biz_0017_24, biz_0017_25, biz_0017_26, biz_0017_27, biz_0017_28, biz_0017_29, biz_0017_30, biz_0017_31, biz_0017_32, biz_0017_33, biz_0017_34, biz_0017_35, biz_0017_36, biz_0017_37, biz_0017_38, biz_0017_39, biz_0017_40, biz_0017_41, biz_0017_42];
}

export function rega_0017(): ABizFn[] {
  return [biz_0017_09a, biz_0017_19a, biz_0017_29a, biz_0017_39a];
}
