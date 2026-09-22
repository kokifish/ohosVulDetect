// Biz0046.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）

export type BizFn = (seed: number, raw: string) => string;
export type ABizFn = (seed: number, raw: string) => Promise<string>;

interface Rec46 { id: number; tag: string; score: number; }

class Unit46 {
  private base: number;
  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }
  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }
  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }
  get total(): number { return this.base; }
}

export function biz_0046_00(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6026) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  buf += 'stocktake0-' + acc.toString();
  buf += `q1:${acc % 97}`;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 61) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += 'crate4-' + acc.toString();
  let w5: number = acc % 23;
  while (w5 > 4) { w5 = Math.floor(w5 / 2); }
  acc += w5;
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 54) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  const ix11: number = buf.indexOf('p46');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  const rc12: Rec46 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  try { if (acc % 29 === 9) { throw new Error('synthetic-14'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  const rc15: Rec46 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 90) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'pallet18-' + acc.toString();
  const ix19: number = buf.indexOf('p46');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  const ix21: number = buf.indexOf('p46');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  buf += 'refund22-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  for (let i24 = 0; i24 < 9; i24++) {
    acc = (acc + i24 * 13 + 640) % 100003;
  }
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  arr.push(acc % 1000);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  acc = (acc * 31 + 4205) % 65521;
  for (let i29 = 0; i29 < 5; i29++) {
    acc = (acc + i29 * 13 + 237) % 100003;
  }
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  acc = acc + 591 - (acc % 84);
  for (let i32 = 0; i32 < 12; i32++) {
    acc = (acc + i32 * 13 + 964) % 100003;
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 50) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  try { if (acc % 29 === 7) { throw new Error('synthetic-38'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 129) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  m01.set('k44', acc % 997);
  try { if (acc % 29 === 2) { throw new Error('synthetic-45'); } acc += 61; } catch (e) { acc = (acc + 17) % 65521; }
  const ix46: number = buf.indexOf('p46');
  if (ix46 > 12) { buf = buf.substring(0, 32); } else if (ix46 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  buf += `q49:${acc % 97}`;
  const t050: string = tags.length > 0 ? tags[0] : 'none';
  buf += t050;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_01(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6027) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  m01.set('k0', acc % 997);
  acc = acc + 250 - (acc % 68);
  buf += 'customs2-' + acc.toString();
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 100) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  buf += `q4:${acc % 97}`;
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 7) { throw new Error('synthetic-6'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 179 - (acc % 72);
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  acc = (acc * 31 + 8344) % 65521;
  arr.push(acc % 1000);
  buf += 'ticket12-' + acc.toString();
  const rc13: Rec46 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-14'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 27) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 29) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  const rc21: Rec46 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  for (let i23 = 0; i23 < 5; i23++) {
    acc = (acc + i23 * 13 + 627) % 100003;
  }
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  if (acc % 19 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  if (acc % 9 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  buf += 'journey27-' + acc.toString();
  try { if (acc % 29 === 6) { throw new Error('synthetic-28'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k29', acc % 997);
  arr.push(acc % 1000);
  acc = (acc * 31 + 4400) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x32');
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 199) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'bay35-' + acc.toString();
  arr.push(acc % 1000);
  m01.set('k37', acc % 997);
  for (let i38 = 0; i38 < 6; i38++) {
    acc = (acc + i38 * 13 + 755) % 100003;
  }
  m01.set('k39', acc % 997);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 163) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  buf += 'balance41-' + acc.toString();
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  arr.push(acc % 1000);
  const ix44: number = buf.indexOf('p46');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 28) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  try { if (acc % 29 === 11) { throw new Error('synthetic-49'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'stocktake50-' + acc.toString();
  if (acc % 29 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_02(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6028) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  for (let i0 = 0; i0 < 9; i0++) {
    acc = (acc + i0 * 13 + 972) % 100003;
  }
  const ix1: number = buf.indexOf('p46');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  acc = acc + 675 - (acc % 49);
  const ix4: number = buf.indexOf('p46');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  const rc5: Rec46 = { id: acc % 1000, tag: 't5', score: acc % 100 };
  acc = (acc + rc5.score) % 65521;
  buf += rc5.tag;
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const db8: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db8.length) % 65521;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  acc = (acc * 31 + 9062) % 65521;
  acc = (acc * 31 + 3953) % 65521;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  const ix13: number = buf.indexOf('p46');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  acc = acc + 80 - (acc % 58);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 83) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 177) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  m01.set('k20', acc % 997);
  m01.set('k21', acc % 997);
  acc = (acc * 31 + 311) % 65521;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  try { if (acc % 29 === 17) { throw new Error('synthetic-25'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k26', acc % 997);
  for (let i27 = 0; i27 < 8; i27++) {
    acc = (acc + i27 * 13 + 217) % 100003;
  }
  const ix28: number = buf.indexOf('p46');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  if (acc % 21 === 0) { buf += 'even29'; } else { buf += 'odd'; }
  const ix30: number = buf.indexOf('p46');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const cf31: Array<(x: number) => number> = [];
  cf31.push((x: number): number => (x * 3 + acc) % 65521);
  cf31.push((x: number): number => (x + 199) % 10007);
  acc = cf31[acc & 1](acc % 9973);
  acc = (acc * 31 + 7839) % 65521;
  buf += 'audit33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 139) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  buf += `q36:${acc % 97}`;
  let w37: number = acc % 23;
  while (w37 > 4) { w37 = Math.floor(w37 / 2); }
  acc += w37;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  if (acc % 29 === 0) { buf += 'even40'; } else { buf += 'odd'; }
  buf += `q41:${acc % 97}`;
  acc = (acc * 31 + 2231) % 65521;
  buf += `q43:${acc % 97}`;
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const ix45: number = buf.indexOf('p46');
  if (ix45 > 12) { buf = buf.substring(0, 32); } else if (ix45 >= 0) { buf += 'i'; }
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  buf += `q50:${acc % 97}`;
  if (acc % 17 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_03(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6029) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 126) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  m01.set('k2', acc % 997);
  for (let i3 = 0; i3 < 5; i3++) {
    acc = (acc + i3 * 13 + 588) % 100003;
  }
  const ix4: number = buf.indexOf('p46');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  acc = (acc * 31 + 2884) % 65521;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const ix9: number = buf.indexOf('p46');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  m01.set('k10', acc % 997);
  m01.set('k11', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x12');
  const ix13: number = buf.indexOf('p46');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  for (let i14 = 0; i14 < 12; i14++) {
    acc = (acc + i14 * 13 + 212) % 100003;
  }
  buf += `q15:${acc % 97}`;
  let w16: number = acc % 23;
  while (w16 > 4) { w16 = Math.floor(w16 / 2); }
  acc += w16;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 175) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  acc = (acc * 31 + 628) % 65521;
  buf += 'journey22-' + acc.toString();
  m01.set('k23', acc % 997);
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  buf += 'dispatch26-' + acc.toString();
  if (acc % 13 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 87) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  const ix29: number = buf.indexOf('p46');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  const cf30: Array<(x: number) => number> = [];
  cf30.push((x: number): number => (x * 3 + acc) % 65521);
  cf30.push((x: number): number => (x + 121) % 10007);
  acc = cf30[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  if (acc % 9 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 15) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  let w35: number = acc % 23;
  while (w35 > 4) { w35 = Math.floor(w35 / 2); }
  acc += w35;
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  acc = (acc * 31 + 4095) % 65521;
  m01.set('k38', acc % 997);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  const ix41: number = buf.indexOf('p46');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  const cf44: Array<(x: number) => number> = [];
  cf44.push((x: number): number => (x * 3 + acc) % 65521);
  cf44.push((x: number): number => (x + 191) % 10007);
  acc = cf44[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const rc46: Rec46 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const ix48: number = buf.indexOf('p46');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  for (let i50 = 0; i50 < 4; i50++) {
    acc = (acc + i50 * 13 + 405) % 100003;
  }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_04(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6030) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  try { if (acc % 29 === 10) { throw new Error('synthetic-2'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 5991) % 65521;
  if (acc % 19 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  arr.push(acc % 1000);
  for (let i9 = 0; i9 < 3; i9++) {
    acc = (acc + i9 * 13 + 702) % 100003;
  }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const ix11: number = buf.indexOf('p46');
  if (ix11 > 12) { buf = buf.substring(0, 32); } else if (ix11 >= 0) { buf += 'i'; }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2280) % 65521;
  if (acc % 22 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += 'freight16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 31) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  buf += 'balance19-' + acc.toString();
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 183) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const rc22: Rec46 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  const rc23: Rec46 = { id: acc % 1000, tag: 't23', score: acc % 100 };
  acc = (acc + rc23.score) % 65521;
  buf += rc23.tag;
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  buf += 'invoice25-' + acc.toString();
  const ix26: number = buf.indexOf('p46');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  buf += `q27:${acc % 97}`;
  arr.push(acc % 1000);
  const rc29: Rec46 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  acc = acc + 287 - (acc % 84);
  for (let i31 = 0; i31 < 8; i31++) {
    acc = (acc + i31 * 13 + 372) % 100003;
  }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  if (acc % 25 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 117) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 4; i35++) {
    acc = (acc + i35 * 13 + 534) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  m01.set('k38', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  try { if (acc % 29 === 5) { throw new Error('synthetic-40'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 135) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  try { if (acc % 29 === 18) { throw new Error('synthetic-43'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  const ix44: number = buf.indexOf('p46');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 70) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  buf += `q46:${acc % 97}`;
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  buf += 'vendor49-' + acc.toString();
  if (acc % 17 === 0) { buf += 'even50'; } else { buf += 'odd'; }
  for (let i51 = 0; i51 < 12; i51++) {
    acc = (acc + i51 * 13 + 240) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_05(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6031) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  acc = acc + 15 - (acc % 12);
  buf += 'waybill1-' + acc.toString();
  arr.push(acc % 1000);
  acc = (acc * 31 + 7552) % 65521;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = acc + 332 - (acc % 88);
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  acc = acc + 100 - (acc % 66);
  try { if (acc % 29 === 4) { throw new Error('synthetic-10'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  for (let i12 = 0; i12 < 4; i12++) {
    acc = (acc + i12 * 13 + 531) % 100003;
  }
  m01.set('k13', acc % 997);
  for (let i14 = 0; i14 < 5; i14++) {
    acc = (acc + i14 * 13 + 104) % 100003;
  }
  const rc15: Rec46 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 131) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  for (let i21 = 0; i21 < 12; i21++) {
    acc = (acc + i21 * 13 + 348) % 100003;
  }
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  let w24: number = acc % 23;
  while (w24 > 4) { w24 = Math.floor(w24 / 2); }
  acc += w24;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const rc26: Rec46 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  m01.set('k28', acc % 997);
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  m01.set('k30', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 6838) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 108) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += `q35:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's036'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  m01.set('k37', acc % 997);
  try { if (acc % 29 === 11) { throw new Error('synthetic-38'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 22) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 95) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 134) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  buf += 'pickup43-' + acc.toString();
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  buf += 'carrier46-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  const ix49: number = buf.indexOf('p46');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 5811) % 65521;
  const ix51: number = buf.indexOf('p46');
  if (ix51 > 12) { buf = buf.substring(0, 32); } else if (ix51 >= 0) { buf += 'i'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_06(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6032) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  m01.set('k0', acc % 997);
  for (let i1 = 0; i1 < 5; i1++) {
    acc = (acc + i1 * 13 + 355) % 100003;
  }
  for (let i2 = 0; i2 < 6; i2++) {
    acc = (acc + i2 * 13 + 495) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += 'ticket4-' + acc.toString();
  const ix5: number = buf.indexOf('p46');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  buf += 'payout6-' + acc.toString();
  let w7: number = acc % 23;
  while (w7 > 4) { w7 = Math.floor(w7 / 2); }
  acc += w7;
  let w8: number = acc % 23;
  while (w8 > 4) { w8 = Math.floor(w8 / 2); }
  acc += w8;
  buf += (acc > 500 ? 'hi9' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 174) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const rc13: Rec46 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  if (acc % 9 === 0) { buf += 'even14'; } else { buf += 'odd'; }
  for (let i15 = 0; i15 < 3; i15++) {
    acc = (acc + i15 * 13 + 230) % 100003;
  }
  const ix16: number = buf.indexOf('p46');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 124) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  acc = (acc * 31 + 9682) % 65521;
  try { if (acc % 29 === 23) { throw new Error('synthetic-20'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  buf += `q23:${acc % 97}`;
  const rc24: Rec46 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 182) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  const rc26: Rec46 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += `q27:${acc % 97}`;
  acc = acc + 719 - (acc % 96);
  m01.set('k29', acc % 997);
  if (m01.has('k30')) {
    const gv30: number = m01.get('k30') as number;
    acc = (acc + gv30) % 10007;
  }
  m01.set('k31', acc % 997);
  if (acc % 26 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x33');
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 194) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p46');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  const rc36: Rec46 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  for (let i37 = 0; i37 < 9; i37++) {
    acc = (acc + i37 * 13 + 605) % 100003;
  }
  const rc38: Rec46 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  const cf39: Array<(x: number) => number> = [];
  cf39.push((x: number): number => (x * 3 + acc) % 65521);
  cf39.push((x: number): number => (x + 61) % 10007);
  acc = cf39[acc & 1](acc % 9973);
  try { if (acc % 29 === 9) { throw new Error('synthetic-40'); } acc += 24; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += 'batch45-' + acc.toString();
  const rc46: Rec46 = { id: acc % 1000, tag: 't46', score: acc % 100 };
  acc = (acc + rc46.score) % 65521;
  buf += rc46.tag;
  const cf47: Array<(x: number) => number> = [];
  cf47.push((x: number): number => (x * 3 + acc) % 65521);
  cf47.push((x: number): number => (x + 99) % 10007);
  acc = cf47[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  for (let i50 = 0; i50 < 9; i50++) {
    acc = (acc + i50 * 13 + 762) % 100003;
  }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_07(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6033) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  buf += `q1:${acc % 97}`;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  m01.set('k4', acc % 997);
  const ix5: number = buf.indexOf('p46');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 18) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  acc = acc + 261 - (acc % 96);
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  buf += (acc > 500 ? 'hi15' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 193) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 121) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const rc21: Rec46 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  m01.set('k22', acc % 997);
  m01.set('k23', acc % 997);
  if (acc % 31 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const rc25: Rec46 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const rc26: Rec46 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  if (acc % 23 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  const ix28: number = buf.indexOf('p46');
  if (ix28 > 12) { buf = buf.substring(0, 32); } else if (ix28 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  buf += `q30:${acc % 97}`;
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  arr.push(acc % 1000);
  buf += 'depot33-' + acc.toString();
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 75) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  if (acc % 19 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  buf += `q40:${acc % 97}`;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  try { if (acc % 29 === 15) { throw new Error('synthetic-43'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k44', acc % 997);
  acc = acc + 421 - (acc % 20);
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 162) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x47');
  buf += 'ticket48-' + acc.toString();
  acc = (acc * 31 + 2403) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  try { if (acc % 29 === 9) { throw new Error('synthetic-51'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_08(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6034) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  const rc0: Rec46 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  try { if (acc % 29 === 5) { throw new Error('synthetic-1'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 64) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  buf += `q6:${acc % 97}`;
  acc = (acc * 31 + 5548) % 65521;
  for (let i8 = 0; i8 < 11; i8++) {
    acc = (acc + i8 * 13 + 466) % 100003;
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 516) % 65521;
  m01.set('k11', acc % 997);
  acc = (acc * 31 + 6105) % 65521;
  buf += 'invoice13-' + acc.toString();
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const rc15: Rec46 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  try { if (acc % 29 === 14) { throw new Error('synthetic-16'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 130) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  try { if (acc % 29 === 16) { throw new Error('synthetic-19'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 2818) % 65521;
  for (let i22 = 0; i22 < 10; i22++) {
    acc = (acc + i22 * 13 + 862) % 100003;
  }
  buf += 'routeplan23-' + acc.toString();
  acc = (acc * 31 + 6215) % 65521;
  acc = (acc * 31 + 7544) % 65521;
  const cf26: Array<(x: number) => number> = [];
  cf26.push((x: number): number => (x * 3 + acc) % 65521);
  cf26.push((x: number): number => (x + 51) % 10007);
  acc = cf26[acc & 1](acc % 9973);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const rc28: Rec46 = { id: acc % 1000, tag: 't28', score: acc % 100 };
  acc = (acc + rc28.score) % 65521;
  buf += rc28.tag;
  acc = acc + 213 - (acc % 97);
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 105) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const ix35: number = buf.indexOf('p46');
  if (ix35 > 12) { buf = buf.substring(0, 32); } else if (ix35 >= 0) { buf += 'i'; }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  acc = acc + 52 - (acc % 71);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  try { if (acc % 29 === 18) { throw new Error('synthetic-39'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k40', acc % 997);
  acc = acc + 192 - (acc % 61);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  m01.set('k43', acc % 997);
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  if (m01.has('k45')) {
    const gv45: number = m01.get('k45') as number;
    acc = (acc + gv45) % 10007;
  }
  for (let i46 = 0; i46 < 6; i46++) {
    acc = (acc + i46 * 13 + 193) % 100003;
  }
  if (acc % 26 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
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

export function biz_0046_09(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6035) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  acc = (acc * 31 + 3554) % 65521;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  if (acc % 20 === 0) { buf += 'even2'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  buf += 'depot5-' + acc.toString();
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  arr.push(acc % 1000);
  acc = acc + 484 - (acc % 13);
  buf += 'refund9-' + acc.toString();
  try { if (acc % 29 === 10) { throw new Error('synthetic-10'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  buf += 'portal12-' + acc.toString();
  m01.set('k13', acc % 997);
  m01.set('k14', acc % 997);
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 14) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  acc = acc + 933 - (acc % 71);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 76) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 16) { throw new Error('synthetic-18'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  const ix19: number = buf.indexOf('p46');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  acc = acc + 265 - (acc % 20);
  const rc21: Rec46 = { id: acc % 1000, tag: 't21', score: acc % 100 };
  acc = (acc + rc21.score) % 65521;
  buf += rc21.tag;
  acc = (acc * 31 + 2685) % 65521;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  buf += `q26:${acc % 97}`;
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  try { if (acc % 29 === 9) { throw new Error('synthetic-31'); } acc += 9; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 86) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 8177) % 65521;
  for (let i36 = 0; i36 < 6; i36++) {
    acc = (acc + i36 * 13 + 555) % 100003;
  }
  try { if (acc % 29 === 20) { throw new Error('synthetic-37'); } acc += 43; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 17) { throw new Error('synthetic-38'); } acc += 27; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-39'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k40', acc % 997);
  buf += `q41:${acc % 97}`;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-44'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  arr.push(acc % 1000);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  const ix49: number = buf.indexOf('p46');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  buf += 'tariff51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0046_09a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0046_09(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0046_10(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6036) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  buf += `q0:${acc % 97}`;
  for (let i1 = 0; i1 < 5; i1++) {
    acc = (acc + i1 * 13 + 238) % 100003;
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 7721) % 65521;
  const ix4: number = buf.indexOf('p46');
  if (ix4 > 12) { buf = buf.substring(0, 32); } else if (ix4 >= 0) { buf += 'i'; }
  for (let i5 = 0; i5 < 12; i5++) {
    acc = (acc + i5 * 13 + 213) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += 'dispatch7-' + acc.toString();
  m01.set('k8', acc % 997);
  for (let i9 = 0; i9 < 6; i9++) {
    acc = (acc + i9 * 13 + 967) % 100003;
  }
  buf += `q10:${acc % 97}`;
  acc = (acc * 31 + 1699) % 65521;
  arr.push(acc % 1000);
  const ix13: number = buf.indexOf('p46');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  acc = acc + 57 - (acc % 35);
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 3; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 91) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'sku18-' + acc.toString();
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 15) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  acc = acc + 829 - (acc % 50);
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 9655) % 65521;
  const t023: string = tags.length > 0 ? tags[0] : 'none';
  buf += t023;
  acc = acc + 122 - (acc % 68);
  const rc25: Rec46 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  m01.set('k28', acc % 997);
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  m01.set('k30', acc % 997);
  buf += 'transit31-' + acc.toString();
  acc = (acc * 31 + 648) % 65521;
  if (m01.has('k33')) {
    const gv33: number = m01.get('k33') as number;
    acc = (acc + gv33) % 10007;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 140) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 11) { throw new Error('synthetic-35'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  const ix36: number = buf.indexOf('p46');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-37'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const t038: string = tags.length > 0 ? tags[0] : 'none';
  buf += t038;
  acc = (acc * 31 + 8188) % 65521;
  buf += 'routeplan40-' + acc.toString();
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  buf += `q43:${acc % 97}`;
  if (m01.has('k44')) {
    const gv44: number = m01.get('k44') as number;
    acc = (acc + gv44) % 10007;
  }
  for (let i45 = 0; i45 < 8; i45++) {
    acc = (acc + i45 * 13 + 606) % 100003;
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 4) { throw new Error('synthetic-47'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const cf49: Array<(x: number) => number> = [];
  cf49.push((x: number): number => (x * 3 + acc) % 65521);
  cf49.push((x: number): number => (x + 30) % 10007);
  acc = cf49[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i51 = 0; i51 < 10; i51++) {
    acc = (acc + i51 * 13 + 101) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_11(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6037) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  if (acc % 6 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += 'coupon1-' + acc.toString();
  const rc2: Rec46 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const ix5: number = buf.indexOf('p46');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  acc = acc + 290 - (acc % 30);
  m01.set('k7', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  m01.set('k11', acc % 997);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  acc = (acc * 31 + 9311) % 65521;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const ix16: number = buf.indexOf('p46');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 166) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 128) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  switch (acc & 3) {
    case 0: buf += 's022'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const db23: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db23.length) % 65521;
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 35) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  const rc25: Rec46 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  for (let i26 = 0; i26 < 4; i26++) {
    acc = (acc + i26 * 13 + 605) % 100003;
  }
  const ix27: number = buf.indexOf('p46');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const rc29: Rec46 = { id: acc % 1000, tag: 't29', score: acc % 100 };
  acc = (acc + rc29.score) % 65521;
  buf += rc29.tag;
  arr.push(acc % 1000);
  acc = acc + 467 - (acc % 77);
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  const ix33: number = buf.indexOf('p46');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 181) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const t036: string = tags.length > 0 ? tags[0] : 'none';
  buf += t036;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  const ix38: number = buf.indexOf('p46');
  if (ix38 > 12) { buf = buf.substring(0, 32); } else if (ix38 >= 0) { buf += 'i'; }
  for (let i39 = 0; i39 < 8; i39++) {
    acc = (acc + i39 * 13 + 289) % 100003;
  }
  arr.push(acc % 1000);
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  arr.push(acc % 1000);
  for (let i45 = 0; i45 < 8; i45++) {
    acc = (acc + i45 * 13 + 69) % 100003;
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 108) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 100) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1983) % 65521;
  m01.set('k51', acc % 997);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_12(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6038) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  try { if (acc % 29 === 11) { throw new Error('synthetic-0'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  const ix1: number = buf.indexOf('p46');
  if (ix1 > 12) { buf = buf.substring(0, 32); } else if (ix1 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 2) { throw new Error('synthetic-2'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 73) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  m01.set('k4', acc % 997);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  buf += 'portal6-' + acc.toString();
  try { if (acc % 29 === 18) { throw new Error('synthetic-7'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  m01.set('k9', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  acc = acc + 345 - (acc % 64);
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 51) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  for (let i16 = 0; i16 < 6; i16++) {
    acc = (acc + i16 * 13 + 748) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 146) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 20) { throw new Error('synthetic-18'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  buf += `q21:${acc % 97}`;
  buf += 'settle22-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  const ix26: number = buf.indexOf('p46');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's027'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-29'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  const t030: string = tags.length > 0 ? tags[0] : 'none';
  buf += t030;
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  if (acc % 9 === 0) { buf += 'even32'; } else { buf += 'odd'; }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 183) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 105) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 7592) % 65521;
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  for (let i37 = 0; i37 < 12; i37++) {
    acc = (acc + i37 * 13 + 324) % 100003;
  }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const db39: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db39.length) % 65521;
  buf += 'audit40-' + acc.toString();
  buf += 'ledger41-' + acc.toString();
  if (acc % 16 === 0) { buf += 'even42'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 29) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const db48: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db48.length) % 65521;
  acc = (acc * 31 + 6982) % 65521;
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 160) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_13(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6039) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  const ix0: number = buf.indexOf('p46');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  m01.set('k3', acc % 997);
  buf += `q4:${acc % 97}`;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 111) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  m01.set('k7', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 140) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  try { if (acc % 29 === 9) { throw new Error('synthetic-11'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  acc = acc + 189 - (acc % 45);
  const ix14: number = buf.indexOf('p46');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  const cf15: Array<(x: number) => number> = [];
  cf15.push((x: number): number => (x * 3 + acc) % 65521);
  cf15.push((x: number): number => (x + 113) % 10007);
  acc = cf15[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 24) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  try { if (acc % 29 === 11) { throw new Error('synthetic-19'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 17 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  try { if (acc % 29 === 10) { throw new Error('synthetic-23'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 6416) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const t027: string = tags.length > 0 ? tags[0] : 'none';
  buf += t027;
  for (let i28 = 0; i28 < 9; i28++) {
    acc = (acc + i28 * 13 + 629) % 100003;
  }
  acc = (acc * 31 + 6093) % 65521;
  try { if (acc % 29 === 16) { throw new Error('synthetic-30'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i31 = 0; i31 < 4; i31++) {
    acc = (acc + i31 * 13 + 312) % 100003;
  }
  for (let i32 = 0; i32 < 10; i32++) {
    acc = (acc + i32 * 13 + 642) % 100003;
  }
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 58) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 182) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  for (let i36 = 0; i36 < 3; i36++) {
    acc = (acc + i36 * 13 + 854) % 100003;
  }
  m01.set('k37', acc % 997);
  const rc38: Rec46 = { id: acc % 1000, tag: 't38', score: acc % 100 };
  acc = (acc + rc38.score) % 65521;
  buf += rc38.tag;
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  for (let i40 = 0; i40 < 4; i40++) {
    acc = (acc + i40 * 13 + 325) % 100003;
  }
  if (m01.has('k41')) {
    const gv41: number = m01.get('k41') as number;
    acc = (acc + gv41) % 10007;
  }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const rc43: Rec46 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  for (let i47 = 0; i47 < 12; i47++) {
    acc = (acc + i47 * 13 + 506) % 100003;
  }
  const ix48: number = buf.indexOf('p46');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  m01.set('k49', acc % 997);
  const ix50: number = buf.indexOf('p46');
  if (ix50 > 12) { buf = buf.substring(0, 32); } else if (ix50 >= 0) { buf += 'i'; }
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_14(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6040) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  try { if (acc % 29 === 12) { throw new Error('synthetic-3'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k4', acc % 997);
  const ix5: number = buf.indexOf('p46');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  if (acc % 18 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi8' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  try { if (acc % 29 === 7) { throw new Error('synthetic-10'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 381 - (acc % 58);
  arr.push(acc % 1000);
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  const ix15: number = buf.indexOf('p46');
  if (ix15 > 12) { buf = buf.substring(0, 32); } else if (ix15 >= 0) { buf += 'i'; }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 154) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 7931) % 65521;
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  const cf23: Array<(x: number) => number> = [];
  cf23.push((x: number): number => (x * 3 + acc) % 65521);
  cf23.push((x: number): number => (x + 136) % 10007);
  acc = cf23[acc & 1](acc % 9973);
  const cf24: Array<(x: number) => number> = [];
  cf24.push((x: number): number => (x * 3 + acc) % 65521);
  cf24.push((x: number): number => (x + 48) % 10007);
  acc = cf24[acc & 1](acc % 9973);
  m01.set('k25', acc % 997);
  m01.set('k26', acc % 997);
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  let w29: number = acc % 23;
  while (w29 > 4) { w29 = Math.floor(w29 / 2); }
  acc += w29;
  buf += `q30:${acc % 97}`;
  const rc31: Rec46 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 74) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const ix36: number = buf.indexOf('p46');
  if (ix36 > 12) { buf = buf.substring(0, 32); } else if (ix36 >= 0) { buf += 'i'; }
  if (acc % 19 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  let w38: number = acc % 23;
  while (w38 > 4) { w38 = Math.floor(w38 / 2); }
  acc += w38;
  const ix39: number = buf.indexOf('p46');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi40' : 'lo') + acc.toString(16);
  m01.set('k41', acc % 997);
  m01.set('k42', acc % 997);
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 76) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  const rc44: Rec46 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  const ix47: number = buf.indexOf('p46');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  for (let i48 = 0; i48 < 6; i48++) {
    acc = (acc + i48 * 13 + 343) % 100003;
  }
  for (let i49 = 0; i49 < 11; i49++) {
    acc = (acc + i49 * 13 + 829) % 100003;
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

export function biz_0046_15(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6041) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  buf += `q0:${acc % 97}`;
  acc = acc + 821 - (acc % 82);
  let w2: number = acc % 23;
  while (w2 > 4) { w2 = Math.floor(w2 / 2); }
  acc += w2;
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 79) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  for (let i6 = 0; i6 < 10; i6++) {
    acc = (acc + i6 * 13 + 158) % 100003;
  }
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  buf += 'balance8-' + acc.toString();
  const t09: string = tags.length > 0 ? tags[0] : 'none';
  buf += t09;
  buf += `q10:${acc % 97}`;
  buf += (acc > 500 ? 'hi11' : 'lo') + acc.toString(16);
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  arr.push(acc % 1000);
  try { if (acc % 29 === 4) { throw new Error('synthetic-14'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  const db15: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db15.length) % 65521;
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 136) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const ix19: number = buf.indexOf('p46');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 116) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  acc = acc + 419 - (acc % 28);
  acc = (acc * 31 + 7326) % 65521;
  acc = acc + 222 - (acc % 75);
  acc = acc + 32 - (acc % 57);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  if (m01.has('k27')) {
    const gv27: number = m01.get('k27') as number;
    acc = (acc + gv27) % 10007;
  }
  try { if (acc % 29 === 23) { throw new Error('synthetic-28'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  const t029: string = tags.length > 0 ? tags[0] : 'none';
  buf += t029;
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  const rc31: Rec46 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 152) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 91) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 28 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 6) { throw new Error('synthetic-37'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  for (let i40 = 0; i40 < 6; i40++) {
    acc = (acc + i40 * 13 + 562) % 100003;
  }
  m01.set('k41', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  if (acc % 9 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  acc = acc + 937 - (acc % 65);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x45');
  try { if (acc % 29 === 20) { throw new Error('synthetic-46'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 19 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t051: string = tags.length > 0 ? tags[0] : 'none';
  buf += t051;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_16(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6042) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += `q2:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's05'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  for (let i6 = 0; i6 < 11; i6++) {
    acc = (acc + i6 * 13 + 209) % 100003;
  }
  const ix7: number = buf.indexOf('p46');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  m01.set('k8', acc % 997);
  const cf9: Array<(x: number) => number> = [];
  cf9.push((x: number): number => (x * 3 + acc) % 65521);
  cf9.push((x: number): number => (x + 139) % 10007);
  acc = cf9[acc & 1](acc % 9973);
  m01.set('k10', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  if (acc % 25 === 0) { buf += 'even13'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  if (acc % 23 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  if (acc % 11 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 139) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  acc = acc + 561 - (acc % 8);
  try { if (acc % 29 === 3) { throw new Error('synthetic-21'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q22:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const ix24: number = buf.indexOf('p46');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  if (acc % 10 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const rc26: Rec46 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  acc = (acc * 31 + 234) % 65521;
  acc = (acc * 31 + 580) % 65521;
  const rc31: Rec46 = { id: acc % 1000, tag: 't31', score: acc % 100 };
  acc = (acc + rc31.score) % 65521;
  buf += rc31.tag;
  const ix32: number = buf.indexOf('p46');
  if (ix32 > 12) { buf = buf.substring(0, 32); } else if (ix32 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-33'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 82) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 1091) % 65521;
  if (acc % 7 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  for (let i38 = 0; i38 < 3; i38++) {
    acc = (acc + i38 * 13 + 475) % 100003;
  }
  m01.set('k39', acc % 997);
  acc = acc + 965 - (acc % 49);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  for (let i42 = 0; i42 < 3; i42++) {
    acc = (acc + i42 * 13 + 173) % 100003;
  }
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const ix44: number = buf.indexOf('p46');
  if (ix44 > 12) { buf = buf.substring(0, 32); } else if (ix44 >= 0) { buf += 'i'; }
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 157) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  const t047: string = tags.length > 0 ? tags[0] : 'none';
  buf += t047;
  const ix48: number = buf.indexOf('p46');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  if (acc % 6 === 0) { buf += 'even51'; } else { buf += 'odd'; }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_17(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6043) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  acc = (acc * 31 + 1687) % 65521;
  buf += `q2:${acc % 97}`;
  const db3: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db3.length) % 65521;
  for (let i4 = 0; i4 < 10; i4++) {
    acc = (acc + i4 * 13 + 643) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  let w6: number = acc % 23;
  while (w6 > 4) { w6 = Math.floor(w6 / 2); }
  acc += w6;
  const t07: string = tags.length > 0 ? tags[0] : 'none';
  buf += t07;
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  if (m01.has('k10')) {
    const gv10: number = m01.get('k10') as number;
    acc = (acc + gv10) % 10007;
  }
  if (acc % 30 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  m01.set('k12', acc % 997);
  m01.set('k13', acc % 997);
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 93) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  if (acc % 15 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 25) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  buf += 'journey19-' + acc.toString();
  m01.set('k20', acc % 997);
  const ix21: number = buf.indexOf('p46');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 103) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  buf += `q23:${acc % 97}`;
  buf += 'dispatch24-' + acc.toString();
  if (acc % 30 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  const ix26: number = buf.indexOf('p46');
  if (ix26 > 12) { buf = buf.substring(0, 32); } else if (ix26 >= 0) { buf += 'i'; }
  buf += `q27:${acc % 97}`;
  acc = (acc * 31 + 7765) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  m01.set('k30', acc % 997);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 92) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  const rc36: Rec46 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  for (let i37 = 0; i37 < 11; i37++) {
    acc = (acc + i37 * 13 + 51) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  for (let i39 = 0; i39 < 11; i39++) {
    acc = (acc + i39 * 13 + 860) % 100003;
  }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const ix42: number = buf.indexOf('p46');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x43');
  if (acc % 21 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  const rc45: Rec46 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  m01.set('k47', acc % 997);
  arr.push(acc % 1000);
  try { if (acc % 29 === 3) { throw new Error('synthetic-49'); } acc += 5; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-50'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_18(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6044) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  let w1: number = acc % 23;
  while (w1 > 4) { w1 = Math.floor(w1 / 2); }
  acc += w1;
  const ix2: number = buf.indexOf('p46');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 66) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  buf += `q4:${acc % 97}`;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 133) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  buf += 'ledger8-' + acc.toString();
  const ix9: number = buf.indexOf('p46');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 7) { throw new Error('synthetic-10'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  for (let i12 = 0; i12 < 10; i12++) {
    acc = (acc + i12 * 13 + 741) % 100003;
  }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's015'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 58) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 152) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  m01.set('k21', acc % 997);
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 50) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  buf += 'pickup23-' + acc.toString();
  arr.push(acc % 1000);
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 195) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  m01.set('k26', acc % 997);
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 20) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  try { if (acc % 29 === 22) { throw new Error('synthetic-28'); } acc += 10; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 2462) % 65521;
  acc = acc + 26 - (acc % 84);
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 145) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi35' : 'lo') + acc.toString(16);
  m01.set('k36', acc % 997);
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  const cf41: Array<(x: number) => number> = [];
  cf41.push((x: number): number => (x * 3 + acc) % 65521);
  cf41.push((x: number): number => (x + 198) % 10007);
  acc = cf41[acc & 1](acc % 9973);
  const ix42: number = buf.indexOf('p46');
  if (ix42 > 12) { buf = buf.substring(0, 32); } else if (ix42 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's044'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = acc + 917 - (acc % 63);
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  const ix47: number = buf.indexOf('p46');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  acc = acc + 293 - (acc % 56);
  for (let i49 = 0; i49 < 7; i49++) {
    acc = (acc + i49 * 13 + 431) % 100003;
  }
  arr.push(acc % 1000);
  for (let i51 = 0; i51 < 4; i51++) {
    acc = (acc + i51 * 13 + 43) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_19(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6045) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  acc = acc + 201 - (acc % 27);
  buf += `q1:${acc % 97}`;
  m01.set('k2', acc % 997);
  acc = (acc * 31 + 7115) % 65521;
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 89) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  if (acc % 31 === 0) { buf += 'even6'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 174) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  m01.set('k9', acc % 997);
  buf += (acc > 500 ? 'hi10' : 'lo') + acc.toString(16);
  if (m01.has('k11')) {
    const gv11: number = m01.get('k11') as number;
    acc = (acc + gv11) % 10007;
  }
  const t012: string = tags.length > 0 ? tags[0] : 'none';
  buf += t012;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  buf += `q14:${acc % 97}`;
  try { if (acc % 29 === 13) { throw new Error('synthetic-15'); } acc += 53; } catch (e) { acc = (acc + 17) % 65521; }
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 149) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 100) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  if (acc % 28 === 0) { buf += 'even20'; } else { buf += 'odd'; }
  for (let i21 = 0; i21 < 7; i21++) {
    acc = (acc + i21 * 13 + 784) % 100003;
  }
  const cf22: Array<(x: number) => number> = [];
  cf22.push((x: number): number => (x * 3 + acc) % 65521);
  cf22.push((x: number): number => (x + 108) % 10007);
  acc = cf22[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  switch (acc & 3) {
    case 0: buf += 's024'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  m01.set('k26', acc % 997);
  const ix27: number = buf.indexOf('p46');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  acc = (acc * 31 + 4278) % 65521;
  let w30: number = acc % 23;
  while (w30 > 4) { w30 = Math.floor(w30 / 2); }
  acc += w30;
  if (acc % 29 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  acc = acc + 660 - (acc % 20);
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 121) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec46 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  m01.set('k37', acc % 997);
  acc = acc + 894 - (acc % 91);
  acc = (acc * 31 + 588) % 65521;
  m01.set('k40', acc % 997);
  if (acc % 15 === 0) { buf += 'even41'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  try { if (acc % 29 === 5) { throw new Error('synthetic-43'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  const t044: string = tags.length > 0 ? tags[0] : 'none';
  buf += t044;
  const t045: string = tags.length > 0 ? tags[0] : 'none';
  buf += t045;
  if (acc % 27 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  acc = (acc * 31 + 6789) % 65521;
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0046_19a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0046_19(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0046_20(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6046) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  m01.set('k0', acc % 997);
  for (let i1 = 0; i1 < 8; i1++) {
    acc = (acc + i1 * 13 + 415) % 100003;
  }
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x3');
  buf += (acc > 500 ? 'hi4' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  switch (acc & 3) {
    case 0: buf += 's06'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const db7: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db7.length) % 65521;
  acc = (acc * 31 + 3476) % 65521;
  if (acc % 10 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  buf += 'carrier11-' + acc.toString();
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  acc = (acc * 31 + 6112) % 65521;
  acc = (acc * 31 + 1823) % 65521;
  if (acc % 23 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 176) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += 'freight18-' + acc.toString();
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  buf += `q20:${acc % 97}`;
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 45) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  const rc22: Rec46 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += 'bay24-' + acc.toString();
  m01.set('k25', acc % 997);
  buf += 'order26-' + acc.toString();
  const rc27: Rec46 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  acc = acc + 732 - (acc % 23);
  buf += 'parcel29-' + acc.toString();
  const ix30: number = buf.indexOf('p46');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-31'); } acc += 46; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i32 = 0; i32 < 5; i32++) {
    acc = (acc + i32 * 13 + 27) % 100003;
  }
  for (let i33 = 0; i33 < 10; i33++) {
    acc = (acc + i33 * 13 + 774) % 100003;
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 198) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x37');
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = acc + 946 - (acc % 81);
  buf += `q40:${acc % 97}`;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  buf += 'client43-' + acc.toString();
  try { if (acc % 29 === 7) { throw new Error('synthetic-44'); } acc += 52; } catch (e) { acc = (acc + 17) % 65521; }
  const rc45: Rec46 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  try { if (acc % 29 === 2) { throw new Error('synthetic-46'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  const ix47: number = buf.indexOf('p46');
  if (ix47 > 12) { buf = buf.substring(0, 32); } else if (ix47 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4367) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  let w50: number = acc % 23;
  while (w50 > 4) { w50 = Math.floor(w50 / 2); }
  acc += w50;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x51');
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_21(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6047) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  for (let i0 = 0; i0 < 12; i0++) {
    acc = (acc + i0 * 13 + 787) % 100003;
  }
  arr.push(acc % 1000);
  for (let i2 = 0; i2 < 4; i2++) {
    acc = (acc + i2 * 13 + 86) % 100003;
  }
  try { if (acc % 29 === 2) { throw new Error('synthetic-3'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  const rc4: Rec46 = { id: acc % 1000, tag: 't4', score: acc % 100 };
  acc = (acc + rc4.score) % 65521;
  buf += rc4.tag;
  const ix5: number = buf.indexOf('p46');
  if (ix5 > 12) { buf = buf.substring(0, 32); } else if (ix5 >= 0) { buf += 'i'; }
  const cf6: Array<(x: number) => number> = [];
  cf6.push((x: number): number => (x * 3 + acc) % 65521);
  cf6.push((x: number): number => (x + 169) % 10007);
  acc = cf6[acc & 1](acc % 9973);
  acc = acc + 341 - (acc % 59);
  buf += 'quota8-' + acc.toString();
  if (m01.has('k9')) {
    const gv9: number = m01.get('k9') as number;
    acc = (acc + gv9) % 10007;
  }
  acc = acc + 412 - (acc % 36);
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's014'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  let w15: number = acc % 23;
  while (w15 > 4) { w15 = Math.floor(w15 / 2); }
  acc += w15;
  const rc16: Rec46 = { id: acc % 1000, tag: 't16', score: acc % 100 };
  acc = (acc + rc16.score) % 65521;
  buf += rc16.tag;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 151) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  const ix19: number = buf.indexOf('p46');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 16) { throw new Error('synthetic-21'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  acc = (acc * 31 + 403) % 65521;
  buf += 'payout24-' + acc.toString();
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += 'client27-' + acc.toString();
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  acc = acc + 872 - (acc % 33);
  arr.push(acc % 1000);
  const t031: string = tags.length > 0 ? tags[0] : 'none';
  buf += t031;
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  if (acc % 9 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 116) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i36 = 0; i36 < 11; i36++) {
    acc = (acc + i36 * 13 + 815) % 100003;
  }
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  if (acc % 24 === 0) { buf += 'even38'; } else { buf += 'odd'; }
  buf += `q39:${acc % 97}`;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  try { if (acc % 29 === 23) { throw new Error('synthetic-41'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  const rc47: Rec46 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  const ix48: number = buf.indexOf('p46');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  const rc50: Rec46 = { id: acc % 1000, tag: 't50', score: acc % 100 };
  acc = (acc + rc50.score) % 65521;
  buf += rc50.tag;
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_22(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6048) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  const cf0: Array<(x: number) => number> = [];
  cf0.push((x: number): number => (x * 3 + acc) % 65521);
  cf0.push((x: number): number => (x + 134) % 10007);
  acc = cf0[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  const ix2: number = buf.indexOf('p46');
  if (ix2 > 12) { buf = buf.substring(0, 32); } else if (ix2 >= 0) { buf += 'i'; }
  m01.set('k3', acc % 997);
  if (m01.has('k4')) {
    const gv4: number = m01.get('k4') as number;
    acc = (acc + gv4) % 10007;
  }
  acc = (acc * 31 + 6163) % 65521;
  try { if (acc % 29 === 13) { throw new Error('synthetic-6'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  const ix10: number = buf.indexOf('p46');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  const cf11: Array<(x: number) => number> = [];
  cf11.push((x: number): number => (x * 3 + acc) % 65521);
  cf11.push((x: number): number => (x + 83) % 10007);
  acc = cf11[acc & 1](acc % 9973);
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
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
  acc = acc + 669 - (acc % 92);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 40) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const cf18: Array<(x: number) => number> = [];
  cf18.push((x: number): number => (x * 3 + acc) % 65521);
  cf18.push((x: number): number => (x + 38) % 10007);
  acc = cf18[acc & 1](acc % 9973);
  const rc19: Rec46 = { id: acc % 1000, tag: 't19', score: acc % 100 };
  acc = (acc + rc19.score) % 65521;
  buf += rc19.tag;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  acc = (acc * 31 + 6056) % 65521;
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  acc = acc + 837 - (acc % 41);
  try { if (acc % 29 === 21) { throw new Error('synthetic-26'); } acc += 6; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 132 - (acc % 53);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const ix29: number = buf.indexOf('p46');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  for (let i30 = 0; i30 < 12; i30++) {
    acc = (acc + i30 * 13 + 80) % 100003;
  }
  buf += 'tariff31-' + acc.toString();
  if (m01.has('k32')) {
    const gv32: number = m01.get('k32') as number;
    acc = (acc + gv32) % 10007;
  }
  if (acc % 23 === 0) { buf += 'even33'; } else { buf += 'odd'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 150) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'depot35-' + acc.toString();
  try { if (acc % 29 === 8) { throw new Error('synthetic-36'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const ix37: number = buf.indexOf('p46');
  if (ix37 > 12) { buf = buf.substring(0, 32); } else if (ix37 >= 0) { buf += 'i'; }
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  buf += `q40:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  if (m01.has('k42')) {
    const gv42: number = m01.get('k42') as number;
    acc = (acc + gv42) % 10007;
  }
  const rc43: Rec46 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  if (acc % 20 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  if (acc % 27 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  const db47: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db47.length) % 65521;
  acc = (acc * 31 + 1634) % 65521;
  try { if (acc % 29 === 6) { throw new Error('synthetic-49'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_23(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6049) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  for (let i2 = 0; i2 < 5; i2++) {
    acc = (acc + i2 * 13 + 645) % 100003;
  }
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 163) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const ix6: number = buf.indexOf('p46');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  for (let i8 = 0; i8 < 10; i8++) {
    acc = (acc + i8 * 13 + 787) % 100003;
  }
  m01.set('k9', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  if (acc % 7 === 0) { buf += 'even12'; } else { buf += 'odd'; }
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  m01.set('k15', acc % 997);
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 195) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const rc18: Rec46 = { id: acc % 1000, tag: 't18', score: acc % 100 };
  acc = (acc + rc18.score) % 65521;
  buf += rc18.tag;
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  arr.push(acc % 1000);
  buf += 'pickup21-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x22');
  if (acc % 28 === 0) { buf += 'even23'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  for (let i25 = 0; i25 < 4; i25++) {
    acc = (acc + i25 * 13 + 401) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  if (acc % 27 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  acc = acc + 668 - (acc % 56);
  acc = acc + 279 - (acc % 92);
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 4) { throw new Error('synthetic-32'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 27) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  arr.push(acc % 1000);
  if (m01.has('k37')) {
    const gv37: number = m01.get('k37') as number;
    acc = (acc + gv37) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += `q39:${acc % 97}`;
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  const rc41: Rec46 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  buf += `q43:${acc % 97}`;
  buf += 'shelf44-' + acc.toString();
  buf += 'depot45-' + acc.toString();
  const t046: string = tags.length > 0 ? tags[0] : 'none';
  buf += t046;
  try { if (acc % 29 === 5) { throw new Error('synthetic-47'); } acc += 15; } catch (e) { acc = (acc + 17) % 65521; }
  const t048: string = tags.length > 0 ? tags[0] : 'none';
  buf += t048;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 28; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 7175) % 65521;
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 117) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_24(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6050) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  acc = acc + 391 - (acc % 22);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  const rc3: Rec46 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  buf += 'routeplan4-' + acc.toString();
  const t05: string = tags.length > 0 ? tags[0] : 'none';
  buf += t05;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  if (acc % 30 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  for (let i8 = 0; i8 < 12; i8++) {
    acc = (acc + i8 * 13 + 943) % 100003;
  }
  acc = acc + 179 - (acc % 79);
  for (let i10 = 0; i10 < 7; i10++) {
    acc = (acc + i10 * 13 + 976) % 100003;
  }
  acc = (acc * 31 + 6916) % 65521;
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  if (m01.has('k13')) {
    const gv13: number = m01.get('k13') as number;
    acc = (acc + gv13) % 10007;
  }
  acc = (acc * 31 + 7841) % 65521;
  if (m01.has('k15')) {
    const gv15: number = m01.get('k15') as number;
    acc = (acc + gv15) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 179) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 7) { throw new Error('synthetic-18'); } acc += 12; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += 'payout20-' + acc.toString();
  buf += 'audit21-' + acc.toString();
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  buf += 'transit23-' + acc.toString();
  const rc24: Rec46 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  try { if (acc % 29 === 7) { throw new Error('synthetic-26'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 31 === 0) { buf += 'even27'; } else { buf += 'odd'; }
  if (acc % 16 === 0) { buf += 'even28'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x30');
  const ix31: number = buf.indexOf('p46');
  if (ix31 > 12) { buf = buf.substring(0, 32); } else if (ix31 >= 0) { buf += 'i'; }
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 18) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 116) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 5) { throw new Error('synthetic-35'); } acc += 54; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k36')) {
    const gv36: number = m01.get('k36') as number;
    acc = (acc + gv36) % 10007;
  }
  arr.push(acc % 1000);
  for (let i38 = 0; i38 < 8; i38++) {
    acc = (acc + i38 * 13 + 868) % 100003;
  }
  m01.set('k39', acc % 997);
  buf += `q40:${acc % 97}`;
  buf += 'dock41-' + acc.toString();
  buf += `q42:${acc % 97}`;
  const rc43: Rec46 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  acc = (acc * 31 + 3523) % 65521;
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 80) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  acc = (acc * 31 + 904) % 65521;
  const ix48: number = buf.indexOf('p46');
  if (ix48 > 12) { buf = buf.substring(0, 32); } else if (ix48 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 22) { throw new Error('synthetic-49'); } acc += 23; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_25(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6051) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  m01.set('k0', acc % 997);
  acc = (acc * 31 + 4809) % 65521;
  buf += 'customs2-' + acc.toString();
  for (let i3 = 0; i3 < 7; i3++) {
    acc = (acc + i3 * 13 + 484) % 100003;
  }
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  acc = (acc * 31 + 3100) % 65521;
  arr.push(acc % 1000);
  buf += `q7:${acc % 97}`;
  buf += 'quota8-' + acc.toString();
  const rc9: Rec46 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const rc10: Rec46 = { id: acc % 1000, tag: 't10', score: acc % 100 };
  acc = (acc + rc10.score) % 65521;
  buf += rc10.tag;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  const rc12: Rec46 = { id: acc % 1000, tag: 't12', score: acc % 100 };
  acc = (acc + rc12.score) % 65521;
  buf += rc12.tag;
  let w13: number = acc % 23;
  while (w13 > 4) { w13 = Math.floor(w13 / 2); }
  acc += w13;
  for (let i14 = 0; i14 < 6; i14++) {
    acc = (acc + i14 * 13 + 95) % 100003;
  }
  for (let i15 = 0; i15 < 3; i15++) {
    acc = (acc + i15 * 13 + 135) % 100003;
  }
  acc = (acc * 31 + 5873) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 53) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi18' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  buf += `q21:${acc % 97}`;
  m01.set('k22', acc % 997);
  const ix23: number = buf.indexOf('p46');
  if (ix23 > 12) { buf = buf.substring(0, 32); } else if (ix23 >= 0) { buf += 'i'; }
  if (acc % 27 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  const cf27: Array<(x: number) => number> = [];
  cf27.push((x: number): number => (x * 3 + acc) % 65521);
  cf27.push((x: number): number => (x + 66) % 10007);
  acc = cf27[acc & 1](acc % 9973);
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 69) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  buf += 'dispatch29-' + acc.toString();
  acc = acc + 471 - (acc % 89);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 18) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  const cf33: Array<(x: number) => number> = [];
  cf33.push((x: number): number => (x * 3 + acc) % 65521);
  cf33.push((x: number): number => (x + 45) % 10007);
  acc = cf33[acc & 1](acc % 9973);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 70) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (m01.has('k35')) {
    const gv35: number = m01.get('k35') as number;
    acc = (acc + gv35) % 10007;
  }
  try { if (acc % 29 === 19) { throw new Error('synthetic-36'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  buf += `q39:${acc % 97}`;
  buf += 'refund40-' + acc.toString();
  buf += 'order41-' + acc.toString();
  acc = acc + 597 - (acc % 60);
  buf += `q43:${acc % 97}`;
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  acc = (acc * 31 + 4905) % 65521;
  for (let i46 = 0; i46 < 5; i46++) {
    acc = (acc + i46 * 13 + 781) % 100003;
  }
  const rc47: Rec46 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  for (let i48 = 0; i48 < 9; i48++) {
    acc = (acc + i48 * 13 + 262) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 153) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  acc = (acc * 31 + 3656) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_26(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6052) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  switch (acc & 3) {
    case 0: buf += 's00'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x1');
  buf += (acc > 500 ? 'hi2' : 'lo') + acc.toString(16);
  m01.set('k3', acc % 997);
  m01.set('k4', acc % 997);
  const cf5: Array<(x: number) => number> = [];
  cf5.push((x: number): number => (x * 3 + acc) % 65521);
  cf5.push((x: number): number => (x + 169) % 10007);
  acc = cf5[acc & 1](acc % 9973);
  const t06: string = tags.length > 0 ? tags[0] : 'none';
  buf += t06;
  const rc7: Rec46 = { id: acc % 1000, tag: 't7', score: acc % 100 };
  acc = (acc + rc7.score) % 65521;
  buf += rc7.tag;
  acc = acc + 913 - (acc % 85);
  m01.set('k9', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's010'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k11', acc % 997);
  try { if (acc % 29 === 2) { throw new Error('synthetic-12'); } acc += 19; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  for (let i14 = 0; i14 < 5; i14++) {
    acc = (acc + i14 * 13 + 468) % 100003;
  }
  if (acc % 15 === 0) { buf += 'even15'; } else { buf += 'odd'; }
  acc = acc + 93 - (acc % 61);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 51) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 13 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's019'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  try { if (acc % 29 === 20) { throw new Error('synthetic-21'); } acc += 41; } catch (e) { acc = (acc + 17) % 65521; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-22'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const rc25: Rec46 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  buf += 'journey26-' + acc.toString();
  buf += (acc > 500 ? 'hi27' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 12) { throw new Error('synthetic-28'); } acc += 26; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  acc = acc + 480 - (acc % 38);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  const db32: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db32.length) % 65521;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 144) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  buf += 'waybill36-' + acc.toString();
  const rc37: Rec46 = { id: acc % 1000, tag: 't37', score: acc % 100 };
  acc = (acc + rc37.score) % 65521;
  buf += rc37.tag;
  acc = acc + 796 - (acc % 45);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const rc41: Rec46 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  let w42: number = acc % 23;
  while (w42 > 4) { w42 = Math.floor(w42 / 2); }
  acc += w42;
  let w43: number = acc % 23;
  while (w43 > 4) { w43 = Math.floor(w43 / 2); }
  acc += w43;
  buf += 'warehouse44-' + acc.toString();
  const rc45: Rec46 = { id: acc % 1000, tag: 't45', score: acc % 100 };
  acc = (acc + rc45.score) % 65521;
  buf += rc45.tag;
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  acc = (acc * 31 + 4163) % 65521;
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_27(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6053) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  const rc0: Rec46 = { id: acc % 1000, tag: 't0', score: acc % 100 };
  acc = (acc + rc0.score) % 65521;
  buf += rc0.tag;
  const t01: string = tags.length > 0 ? tags[0] : 'none';
  buf += t01;
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  buf += `q3:${acc % 97}`;
  try { if (acc % 29 === 23) { throw new Error('synthetic-4'); } acc += 40; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  const ix6: number = buf.indexOf('p46');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  acc = acc + 824 - (acc % 12);
  switch (acc & 3) {
    case 0: buf += 's08'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  buf += `q9:${acc % 97}`;
  acc = (acc * 31 + 8301) % 65521;
  let w11: number = acc % 23;
  while (w11 > 4) { w11 = Math.floor(w11 / 2); }
  acc += w11;
  try { if (acc % 29 === 3) { throw new Error('synthetic-12'); } acc += 8; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k13', acc % 997);
  const rc14: Rec46 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  try { if (acc % 29 === 13) { throw new Error('synthetic-15'); } acc += 32; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's016'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 129) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  acc = (acc * 31 + 9099) % 65521;
  buf += (acc > 500 ? 'hi20' : 'lo') + acc.toString(16);
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  buf += `q22:${acc % 97}`;
  buf += (acc > 500 ? 'hi23' : 'lo') + acc.toString(16);
  arr.push(acc % 1000);
  const rc25: Rec46 = { id: acc % 1000, tag: 't25', score: acc % 100 };
  acc = (acc + rc25.score) % 65521;
  buf += rc25.tag;
  const t026: string = tags.length > 0 ? tags[0] : 'none';
  buf += t026;
  try { if (acc % 29 === 11) { throw new Error('synthetic-27'); } acc += 7; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  for (let i29 = 0; i29 < 12; i29++) {
    acc = (acc + i29 * 13 + 333) % 100003;
  }
  const db30: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db30.length) % 65521;
  for (let i31 = 0; i31 < 3; i31++) {
    acc = (acc + i31 * 13 + 34) % 100003;
  }
  for (let i32 = 0; i32 < 6; i32++) {
    acc = (acc + i32 * 13 + 773) % 100003;
  }
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 58) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 11; i35++) {
    acc = (acc + i35 * 13 + 721) % 100003;
  }
  arr.push(acc % 1000);
  if (acc % 25 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  const ix39: number = buf.indexOf('p46');
  if (ix39 > 12) { buf = buf.substring(0, 32); } else if (ix39 >= 0) { buf += 'i'; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 81) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  for (let i43 = 0; i43 < 12; i43++) {
    acc = (acc + i43 * 13 + 9) % 100003;
  }
  if (acc % 30 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  for (let i45 = 0; i45 < 9; i45++) {
    acc = (acc + i45 * 13 + 654) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x46');
  arr.push(acc % 1000);
  let w48: number = acc % 23;
  while (w48 > 4) { w48 = Math.floor(w48 / 2); }
  acc += w48;
  const ix49: number = buf.indexOf('p46');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  acc = acc + 371 - (acc % 53);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_28(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6054) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  acc = (acc * 31 + 5155) % 65521;
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 34) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const rc3: Rec46 = { id: acc % 1000, tag: 't3', score: acc % 100 };
  acc = (acc + rc3.score) % 65521;
  buf += rc3.tag;
  if (acc % 14 === 0) { buf += 'even4'; } else { buf += 'odd'; }
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  acc = (acc * 31 + 4297) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x7');
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  for (let i10 = 0; i10 < 11; i10++) {
    acc = (acc + i10 * 13 + 661) % 100003;
  }
  buf += 'waybill11-' + acc.toString();
  try { if (acc % 29 === 4) { throw new Error('synthetic-12'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 1433) % 65521;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 69) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  buf += `q18:${acc % 97}`;
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 121) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  const rc20: Rec46 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  const rc22: Rec46 = { id: acc % 1000, tag: 't22', score: acc % 100 };
  acc = (acc + rc22.score) % 65521;
  buf += rc22.tag;
  switch (acc & 3) {
    case 0: buf += 's023'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  const db24: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db24.length) % 65521;
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 86) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i27 = 0; i27 < 11; i27++) {
    acc = (acc + i27 * 13 + 399) % 100003;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-28'); } acc += 22; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  acc = (acc * 31 + 8942) % 65521;
  buf += (acc > 500 ? 'hi31' : 'lo') + acc.toString(16);
  const t032: string = tags.length > 0 ? tags[0] : 'none';
  buf += t032;
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 180) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  for (let i35 = 0; i35 < 6; i35++) {
    acc = (acc + i35 * 13 + 415) % 100003;
  }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const db37: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db37.length) % 65521;
  acc = acc + 592 - (acc % 86);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x40');
  for (let i41 = 0; i41 < 9; i41++) {
    acc = (acc + i41 * 13 + 288) % 100003;
  }
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  if (acc % 17 === 0) { buf += 'even45'; } else { buf += 'odd'; }
  acc = (acc * 31 + 8175) % 65521;
  let w47: number = acc % 23;
  while (w47 > 4) { w47 = Math.floor(w47 / 2); }
  acc += w47;
  buf += `q48:${acc % 97}`;
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x50');
  const cf51: Array<(x: number) => number> = [];
  cf51.push((x: number): number => (x * 3 + acc) % 65521);
  cf51.push((x: number): number => (x + 21) % 10007);
  acc = cf51[acc & 1](acc % 9973);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_29(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6055) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  buf += `q0:${acc % 97}`;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  const cf2: Array<(x: number) => number> = [];
  cf2.push((x: number): number => (x * 3 + acc) % 65521);
  cf2.push((x: number): number => (x + 131) % 10007);
  acc = cf2[acc & 1](acc % 9973);
  const t03: string = tags.length > 0 ? tags[0] : 'none';
  buf += t03;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  buf += 'crate5-' + acc.toString();
  const db6: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db6.length) % 65521;
  buf += 'invoice7-' + acc.toString();
  for (let i8 = 0; i8 < 8; i8++) {
    acc = (acc + i8 * 13 + 618) % 100003;
  }
  buf += `q9:${acc % 97}`;
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 19; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-12'); } acc += 44; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 140 - (acc % 91);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x15');
  const t016: string = tags.length > 0 ? tags[0] : 'none';
  buf += t016;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 50) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const t018: string = tags.length > 0 ? tags[0] : 'none';
  buf += t018;
  buf += (acc > 500 ? 'hi19' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x20');
  buf += (acc > 500 ? 'hi21' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  acc = acc + 986 - (acc % 49);
  acc = acc + 64 - (acc % 58);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x25');
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 29; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  const db27: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db27.length) % 65521;
  const t028: string = tags.length > 0 ? tags[0] : 'none';
  buf += t028;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  buf += (acc > 500 ? 'hi30' : 'lo') + acc.toString(16);
  if (m01.has('k31')) {
    const gv31: number = m01.get('k31') as number;
    acc = (acc + gv31) % 10007;
  }
  buf += 'coupon32-' + acc.toString();
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 126) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 5 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  buf += `q36:${acc % 97}`;
  acc = (acc * 31 + 3857) % 65521;
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  acc = (acc * 31 + 8228) % 65521;
  const t040: string = tags.length > 0 ? tags[0] : 'none';
  buf += t040;
  const t041: string = tags.length > 0 ? tags[0] : 'none';
  buf += t041;
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 20; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  try { if (acc % 29 === 5) { throw new Error('synthetic-43'); } acc += 47; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  const db46: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db46.length) % 65521;
  const rc47: Rec46 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's049'; break;
    case 1: acc += 5; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  const cf50: Array<(x: number) => number> = [];
  cf50.push((x: number): number => (x * 3 + acc) % 65521);
  cf50.push((x: number): number => (x + 14) % 10007);
  acc = cf50[acc & 1](acc % 9973);
  const rc51: Rec46 = { id: acc % 1000, tag: 't51', score: acc % 100 };
  acc = (acc + rc51.score) % 65521;
  buf += rc51.tag;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0046_29a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0046_29(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0046_30(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6056) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  if (acc % 14 === 0) { buf += 'even0'; } else { buf += 'odd'; }
  buf += 'parcel1-' + acc.toString();
  try { if (acc % 29 === 8) { throw new Error('synthetic-2'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  const cf3: Array<(x: number) => number> = [];
  cf3.push((x: number): number => (x * 3 + acc) % 65521);
  cf3.push((x: number): number => (x + 179) % 10007);
  acc = cf3[acc & 1](acc % 9973);
  acc = acc + 529 - (acc % 52);
  arr.push(acc % 1000);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  buf += (acc > 500 ? 'hi7' : 'lo') + acc.toString(16);
  buf += `q8:${acc % 97}`;
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  if (m01.has('k14')) {
    const gv14: number = m01.get('k14') as number;
    acc = (acc + gv14) % 10007;
  }
  acc = (acc * 31 + 5346) % 65521;
  if (m01.has('k16')) {
    const gv16: number = m01.get('k16') as number;
    acc = (acc + gv16) % 10007;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 122) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  m01.set('k19', acc % 997);
  buf += 'payout20-' + acc.toString();
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 11) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  let w22: number = acc % 23;
  while (w22 > 4) { w22 = Math.floor(w22 / 2); }
  acc += w22;
  arr.push(acc % 1000);
  acc = acc + 460 - (acc % 25);
  try { if (acc % 29 === 9) { throw new Error('synthetic-25'); } acc += 30; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's026'; break;
    case 1: acc += 10; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  acc = acc + 468 - (acc % 24);
  switch (acc & 3) {
    case 0: buf += 's028'; break;
    case 1: acc += 8; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 1102) % 65521;
  acc = acc + 219 - (acc % 69);
  let w32: number = acc % 23;
  while (w32 > 4) { w32 = Math.floor(w32 / 2); }
  acc += w32;
  buf += (acc > 500 ? 'hi33' : 'lo') + acc.toString(16);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 170) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const t035: string = tags.length > 0 ? tags[0] : 'none';
  buf += t035;
  if (acc % 30 === 0) { buf += 'even36'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  const db38: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db38.length) % 65521;
  acc = (acc * 31 + 9582) % 65521;
  const rc40: Rec46 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 6; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 17; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  try { if (acc % 29 === 14) { throw new Error('synthetic-47'); } acc += 57; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi48' : 'lo') + acc.toString(16);
  buf += (acc > 500 ? 'hi49' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  let w51: number = acc % 23;
  while (w51 > 4) { w51 = Math.floor(w51 / 2); }
  acc += w51;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_31(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6057) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  try { if (acc % 29 === 20) { throw new Error('synthetic-0'); } acc += 31; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q2:${acc % 97}`;
  buf += 'freight3-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  buf += 'ledger5-' + acc.toString();
  const ix6: number = buf.indexOf('p46');
  if (ix6 > 12) { buf = buf.substring(0, 32); } else if (ix6 >= 0) { buf += 'i'; }
  arr.push(acc % 1000);
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  buf += `q9:${acc % 97}`;
  if (acc % 19 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x11');
  const ix12: number = buf.indexOf('p46');
  if (ix12 > 12) { buf = buf.substring(0, 32); } else if (ix12 >= 0) { buf += 'i'; }
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x14');
  buf += 'client15-' + acc.toString();
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 49) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  let w18: number = acc % 23;
  while (w18 > 4) { w18 = Math.floor(w18 / 2); }
  acc += w18;
  buf += 'sku19-' + acc.toString();
  for (let i20 = 0; i20 < 4; i20++) {
    acc = (acc + i20 * 13 + 716) % 100003;
  }
  if (m01.has('k21')) {
    const gv21: number = m01.get('k21') as number;
    acc = (acc + gv21) % 10007;
  }
  m01.set('k22', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += 'carrier24-' + acc.toString();
  buf += `q25:${acc % 97}`;
  const rc26: Rec46 = { id: acc % 1000, tag: 't26', score: acc % 100 };
  acc = (acc + rc26.score) % 65521;
  buf += rc26.tag;
  buf += 'portal27-' + acc.toString();
  buf += 'region28-' + acc.toString();
  m01.set('k29', acc % 997);
  try { if (acc % 29 === 19) { throw new Error('synthetic-30'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 31 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  buf += 'rebate32-' + acc.toString();
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 163) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  const cf38: Array<(x: number) => number> = [];
  cf38.push((x: number): number => (x * 3 + acc) % 65521);
  cf38.push((x: number): number => (x + 152) % 10007);
  acc = cf38[acc & 1](acc % 9973);
  buf += `q39:${acc % 97}`;
  const rc40: Rec46 = { id: acc % 1000, tag: 't40', score: acc % 100 };
  acc = (acc + rc40.score) % 65521;
  buf += rc40.tag;
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x42');
  if (m01.has('k43')) {
    const gv43: number = m01.get('k43') as number;
    acc = (acc + gv43) % 10007;
  }
  buf += 'stocktake44-' + acc.toString();
  buf += (acc > 500 ? 'hi45' : 'lo') + acc.toString(16);
  if (acc % 6 === 0) { buf += 'even46'; } else { buf += 'odd'; }
  const rc47: Rec46 = { id: acc % 1000, tag: 't47', score: acc % 100 };
  acc = (acc + rc47.score) % 65521;
  buf += rc47.tag;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x48');
  const ix49: number = buf.indexOf('p46');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_32(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6058) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  const ix0: number = buf.indexOf('p46');
  if (ix0 > 12) { buf = buf.substring(0, 32); } else if (ix0 >= 0) { buf += 'i'; }
  if (acc % 9 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  try { if (acc % 29 === 9) { throw new Error('synthetic-2'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi3' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 18) { throw new Error('synthetic-4'); } acc += 49; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 440 - (acc % 37);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  acc = acc + 860 - (acc % 83);
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 27) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x9');
  buf += `q10:${acc % 97}`;
  m01.set('k11', acc % 997);
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 11) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  acc = (acc * 31 + 671) % 65521;
  try { if (acc % 29 === 19) { throw new Error('synthetic-14'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  acc = (acc * 31 + 3693) % 65521;
  buf += 'refund16-' + acc.toString();
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 180) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const ix18: number = buf.indexOf('p46');
  if (ix18 > 12) { buf = buf.substring(0, 32); } else if (ix18 >= 0) { buf += 'i'; }
  m01.set('k19', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 24; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  const db22: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db22.length) % 65521;
  buf += `q23:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x24');
  switch (acc & 3) {
    case 0: buf += 's025'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 5; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x26');
  const ix27: number = buf.indexOf('p46');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  const cf28: Array<(x: number) => number> = [];
  cf28.push((x: number): number => (x * 3 + acc) % 65521);
  cf28.push((x: number): number => (x + 108) % 10007);
  acc = cf28[acc & 1](acc % 9973);
  for (let i29 = 0; i29 < 12; i29++) {
    acc = (acc + i29 * 13 + 145) % 100003;
  }
  const ix30: number = buf.indexOf('p46');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  for (let i31 = 0; i31 < 5; i31++) {
    acc = (acc + i31 * 13 + 778) % 100003;
  }
  buf += `q32:${acc % 97}`;
  const t033: string = tags.length > 0 ? tags[0] : 'none';
  buf += t033;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 63) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  try { if (acc % 29 === 15) { throw new Error('synthetic-35'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  buf += `q37:${acc % 97}`;
  try { if (acc % 29 === 7) { throw new Error('synthetic-38'); } acc += 38; } catch (e) { acc = (acc + 17) % 65521; }
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  const ix40: number = buf.indexOf('p46');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  acc = acc + 558 - (acc % 76);
  buf += 'refund42-' + acc.toString();
  m01.set('k43', acc % 997);
  arr.push(acc % 1000);
  let w45: number = acc % 23;
  while (w45 > 4) { w45 = Math.floor(w45 / 2); }
  acc += w45;
  m01.set('k46', acc % 997);
  acc = acc + 760 - (acc % 59);
  m01.set('k48', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x49');
  acc = acc + 844 - (acc % 71);
  buf += `q51:${acc % 97}`;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_33(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6059) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  const t00: string = tags.length > 0 ? tags[0] : 'none';
  buf += t00;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  buf += `q2:${acc % 97}`;
  buf += 'stocktake3-' + acc.toString();
  try { if (acc % 29 === 7) { throw new Error('synthetic-4'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  m01.set('k5', acc % 997);
  m01.set('k6', acc % 997);
  buf += `q7:${acc % 97}`;
  const t08: string = tags.length > 0 ? tags[0] : 'none';
  buf += t08;
  acc = (acc * 31 + 3241) % 65521;
  const cf10: Array<(x: number) => number> = [];
  cf10.push((x: number): number => (x * 3 + acc) % 65521);
  cf10.push((x: number): number => (x + 148) % 10007);
  acc = cf10[acc & 1](acc % 9973);
  acc = (acc * 31 + 4864) % 65521;
  for (let i12 = 0; i12 < 9; i12++) {
    acc = (acc + i12 * 13 + 772) % 100003;
  }
  const ix13: number = buf.indexOf('p46');
  if (ix13 > 12) { buf = buf.substring(0, 32); } else if (ix13 >= 0) { buf += 'i'; }
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 162) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  for (let i15 = 0; i15 < 7; i15++) {
    acc = (acc + i15 * 13 + 46) % 100003;
  }
  buf += (acc > 500 ? 'hi16' : 'lo') + acc.toString(16);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 171) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  const ix19: number = buf.indexOf('p46');
  if (ix19 > 12) { buf = buf.substring(0, 32); } else if (ix19 >= 0) { buf += 'i'; }
  const db20: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db20.length) % 65521;
  for (let i21 = 0; i21 < 5; i21++) {
    acc = (acc + i21 * 13 + 945) % 100003;
  }
  arr.push(acc % 1000);
  buf += `q23:${acc % 97}`;
  buf += `q24:${acc % 97}`;
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  arr.push(acc % 1000);
  m01.set('k27', acc % 997);
  buf += 'audit28-' + acc.toString();
  const db29: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db29.length) % 65521;
  acc = acc + 244 - (acc % 25);
  if (acc % 21 === 0) { buf += 'even31'; } else { buf += 'odd'; }
  const cf32: Array<(x: number) => number> = [];
  cf32.push((x: number): number => (x * 3 + acc) % 65521);
  cf32.push((x: number): number => (x + 44) % 10007);
  acc = cf32[acc & 1](acc % 9973);
  let w33: number = acc % 23;
  while (w33 > 4) { w33 = Math.floor(w33 / 2); }
  acc += w33;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 83) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even35'; } else { buf += 'odd'; }
  try { if (acc % 29 === 6) { throw new Error('synthetic-36'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 9 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi38' : 'lo') + acc.toString(16);
  if (acc % 19 === 0) { buf += 'even39'; } else { buf += 'odd'; }
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 149) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  m01.set('k41', acc % 997);
  acc = (acc * 31 + 6484) % 65521;
  buf += `q43:${acc % 97}`;
  buf += (acc > 500 ? 'hi44' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's045'; break;
    case 1: acc += 25; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  const cf46: Array<(x: number) => number> = [];
  cf46.push((x: number): number => (x * 3 + acc) % 65521);
  cf46.push((x: number): number => (x + 27) % 10007);
  acc = cf46[acc & 1](acc % 9973);
  if (acc % 30 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  try { if (acc % 29 === 11) { throw new Error('synthetic-48'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  const ix49: number = buf.indexOf('p46');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's050'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_34(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6060) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  buf += `q0:${acc % 97}`;
  switch (acc & 3) {
    case 0: buf += 's01'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 17; break;
    default: buf += 'sd';
  }
  if (m01.has('k2')) {
    const gv2: number = m01.get('k2') as number;
    acc = (acc + gv2) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 27; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  if (acc % 14 === 0) { buf += 'even5'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const ix7: number = buf.indexOf('p46');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  if (acc % 23 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  buf += `q10:${acc % 97}`;
  if (acc % 16 === 0) { buf += 'even11'; } else { buf += 'odd'; }
  buf += (acc > 500 ? 'hi12' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's013'; break;
    case 1: acc += 18; break;
    case 2: buf += 's2'; acc -= 11; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi14' : 'lo') + acc.toString(16);
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  m01.set('k16', acc % 997);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 121) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  try { if (acc % 29 === 18) { throw new Error('synthetic-18'); } acc += 34; } catch (e) { acc = (acc + 17) % 65521; }
  buf += 'transit19-' + acc.toString();
  if (m01.has('k20')) {
    const gv20: number = m01.get('k20') as number;
    acc = (acc + gv20) % 10007;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x21');
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  buf += `q23:${acc % 97}`;
  const ix24: number = buf.indexOf('p46');
  if (ix24 > 12) { buf = buf.substring(0, 32); } else if (ix24 >= 0) { buf += 'i'; }
  if (m01.has('k25')) {
    const gv25: number = m01.get('k25') as number;
    acc = (acc + gv25) % 10007;
  }
  if (acc % 12 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  let w27: number = acc % 23;
  while (w27 > 4) { w27 = Math.floor(w27 / 2); }
  acc += w27;
  acc = (acc * 31 + 6201) % 65521;
  m01.set('k29', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  acc = (acc * 31 + 4343) % 65521;
  acc = acc + 649 - (acc % 38);
  try { if (acc % 29 === 5) { throw new Error('synthetic-33'); } acc += 60; } catch (e) { acc = (acc + 17) % 65521; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 190) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  buf += 'audit35-' + acc.toString();
  const db36: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db36.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's037'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  for (let i38 = 0; i38 < 11; i38++) {
    acc = (acc + i38 * 13 + 403) % 100003;
  }
  buf += `q39:${acc % 97}`;
  acc = (acc * 31 + 4272) % 65521;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const db42: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db42.length) % 65521;
  const t043: string = tags.length > 0 ? tags[0] : 'none';
  buf += t043;
  const rc44: Rec46 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  arr.push(acc % 1000);
  arr.push(acc % 1000);
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's048'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  let w49: number = acc % 23;
  while (w49 > 4) { w49 = Math.floor(w49 / 2); }
  acc += w49;
  if (m01.has('k50')) {
    const gv50: number = m01.get('k50') as number;
    acc = (acc + gv50) % 10007;
  }
  for (let i51 = 0; i51 < 6; i51++) {
    acc = (acc + i51 * 13 + 518) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_35(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6061) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  if (m01.has('k0')) {
    const gv0: number = m01.get('k0') as number;
    acc = (acc + gv0) % 10007;
  }
  const rc1: Rec46 = { id: acc % 1000, tag: 't1', score: acc % 100 };
  acc = (acc + rc1.score) % 65521;
  buf += rc1.tag;
  const rc2: Rec46 = { id: acc % 1000, tag: 't2', score: acc % 100 };
  acc = (acc + rc2.score) % 65521;
  buf += rc2.tag;
  buf += 'dock3-' + acc.toString();
  buf += 'tariff4-' + acc.toString();
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  for (let i6 = 0; i6 < 3; i6++) {
    acc = (acc + i6 * 13 + 76) % 100003;
  }
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 127) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  buf += `q8:${acc % 97}`;
  const db9: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db9.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x10');
  m01.set('k11', acc % 997);
  if (m01.has('k12')) {
    const gv12: number = m01.get('k12') as number;
    acc = (acc + gv12) % 10007;
  }
  buf += 'waybill13-' + acc.toString();
  for (let i14 = 0; i14 < 6; i14++) {
    acc = (acc + i14 * 13 + 967) % 100003;
  }
  acc = acc + 328 - (acc % 96);
  for (let i16 = 0; i16 < 6; i16++) {
    acc = (acc + i16 * 13 + 811) % 100003;
  }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 180) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  if (acc % 16 === 0) { buf += 'even18'; } else { buf += 'odd'; }
  if (m01.has('k19')) {
    const gv19: number = m01.get('k19') as number;
    acc = (acc + gv19) % 10007;
  }
  const cf20: Array<(x: number) => number> = [];
  cf20.push((x: number): number => (x * 3 + acc) % 65521);
  cf20.push((x: number): number => (x + 141) % 10007);
  acc = cf20[acc & 1](acc % 9973);
  buf += `q21:${acc % 97}`;
  for (let i22 = 0; i22 < 7; i22++) {
    acc = (acc + i22 * 13 + 973) % 100003;
  }
  m01.set('k23', acc % 997);
  const t024: string = tags.length > 0 ? tags[0] : 'none';
  buf += t024;
  const t025: string = tags.length > 0 ? tags[0] : 'none';
  buf += t025;
  buf += 'crate26-' + acc.toString();
  try { if (acc % 29 === 21) { throw new Error('synthetic-27'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  m01.set('k29', acc % 997);
  for (let i30 = 0; i30 < 3; i30++) {
    acc = (acc + i30 * 13 + 548) % 100003;
  }
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  acc = (acc * 31 + 9585) % 65521;
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 76) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  for (let i36 = 0; i36 < 11; i36++) {
    acc = (acc + i36 * 13 + 697) % 100003;
  }
  buf += 'journey37-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's038'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi39' : 'lo') + acc.toString(16);
  const cf40: Array<(x: number) => number> = [];
  cf40.push((x: number): number => (x * 3 + acc) % 65521);
  cf40.push((x: number): number => (x + 170) % 10007);
  acc = cf40[acc & 1](acc % 9973);
  acc = (acc * 31 + 8765) % 65521;
  buf += (acc > 500 ? 'hi42' : 'lo') + acc.toString(16);
  const rc43: Rec46 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  const rc44: Rec46 = { id: acc % 1000, tag: 't44', score: acc % 100 };
  acc = (acc + rc44.score) % 65521;
  buf += rc44.tag;
  for (let i45 = 0; i45 < 3; i45++) {
    acc = (acc + i45 * 13 + 666) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's046'; break;
    case 1: acc += 19; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  buf += 'customs47-' + acc.toString();
  acc = acc + 596 - (acc % 25);
  const t049: string = tags.length > 0 ? tags[0] : 'none';
  buf += t049;
  acc = acc + 652 - (acc % 77);
  for (let i51 = 0; i51 < 6; i51++) {
    acc = (acc + i51 * 13 + 203) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_36(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6062) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  let w0: number = acc % 23;
  while (w0 > 4) { w0 = Math.floor(w0 / 2); }
  acc += w0;
  if (acc % 27 === 0) { buf += 'even1'; } else { buf += 'odd'; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  let w3: number = acc % 23;
  while (w3 > 4) { w3 = Math.floor(w3 / 2); }
  acc += w3;
  const db4: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db4.length) % 65521;
  buf += 'rebate5-' + acc.toString();
  acc = acc + 326 - (acc % 11);
  if (acc % 15 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  const cf8: Array<(x: number) => number> = [];
  cf8.push((x: number): number => (x * 3 + acc) % 65521);
  cf8.push((x: number): number => (x + 172) % 10007);
  acc = cf8[acc & 1](acc % 9973);
  m01.set('k9', acc % 997);
  let w10: number = acc % 23;
  while (w10 > 4) { w10 = Math.floor(w10 / 2); }
  acc += w10;
  buf += `q11:${acc % 97}`;
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  buf += (acc > 500 ? 'hi13' : 'lo') + acc.toString(16);
  let w14: number = acc % 23;
  while (w14 > 4) { w14 = Math.floor(w14 / 2); }
  acc += w14;
  acc = acc + 345 - (acc % 57);
  const ix16: number = buf.indexOf('p46');
  if (ix16 > 12) { buf = buf.substring(0, 32); } else if (ix16 >= 0) { buf += 'i'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 39) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += 'ticket19-' + acc.toString();
  buf += 'dispatch20-' + acc.toString();
  switch (acc & 3) {
    case 0: buf += 's021'; break;
    case 1: acc += 21; break;
    case 2: buf += 's2'; acc -= 8; break;
    default: buf += 'sd';
  }
  buf += 'batch22-' + acc.toString();
  acc = acc + 417 - (acc % 27);
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  if (acc % 9 === 0) { buf += 'even25'; } else { buf += 'odd'; }
  if (m01.has('k26')) {
    const gv26: number = m01.get('k26') as number;
    acc = (acc + gv26) % 10007;
  }
  m01.set('k27', acc % 997);
  const db28: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db28.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's029'; break;
    case 1: acc += 11; break;
    case 2: buf += 's2'; acc -= 13; break;
    default: buf += 'sd';
  }
  if (acc % 16 === 0) { buf += 'even30'; } else { buf += 'odd'; }
  m01.set('k31', acc % 997);
  const rc32: Rec46 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  switch (acc & 3) {
    case 0: buf += 's033'; break;
    case 1: acc += 23; break;
    case 2: buf += 's2'; acc -= 7; break;
    default: buf += 'sd';
  }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 49) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  for (let i36 = 0; i36 < 6; i36++) {
    acc = (acc + i36 * 13 + 704) % 100003;
  }
  try { if (acc % 29 === 14) { throw new Error('synthetic-37'); } acc += 39; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  const t039: string = tags.length > 0 ? tags[0] : 'none';
  buf += t039;
  const ix40: number = buf.indexOf('p46');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const rc41: Rec46 = { id: acc % 1000, tag: 't41', score: acc % 100 };
  acc = (acc + rc41.score) % 65521;
  buf += rc41.tag;
  const cf42: Array<(x: number) => number> = [];
  cf42.push((x: number): number => (x * 3 + acc) % 65521);
  cf42.push((x: number): number => (x + 129) % 10007);
  acc = cf42[acc & 1](acc % 9973);
  buf += 'routeplan43-' + acc.toString();
  const db44: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db44.length) % 65521;
  try { if (acc % 29 === 5) { throw new Error('synthetic-45'); } acc += 51; } catch (e) { acc = (acc + 17) % 65521; }
  let w46: number = acc % 23;
  while (w46 > 4) { w46 = Math.floor(w46 / 2); }
  acc += w46;
  if (m01.has('k47')) {
    const gv47: number = m01.get('k47') as number;
    acc = (acc + gv47) % 10007;
  }
  for (let i48 = 0; i48 < 7; i48++) {
    acc = (acc + i48 * 13 + 424) % 100003;
  }
  const ix49: number = buf.indexOf('p46');
  if (ix49 > 12) { buf = buf.substring(0, 32); } else if (ix49 >= 0) { buf += 'i'; }
  acc = acc + 501 - (acc % 39);
  const db51: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db51.length) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_37(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6063) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  const db0: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db0.length) % 65521;
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x2');
  buf += `q3:${acc % 97}`;
  m01.set('k4', acc % 997);
  try { if (acc % 29 === 14) { throw new Error('synthetic-5'); } acc += 18; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x6');
  if (acc % 29 === 0) { buf += 'even7'; } else { buf += 'odd'; }
  m01.set('k8', acc % 997);
  let w9: number = acc % 23;
  while (w9 > 4) { w9 = Math.floor(w9 / 2); }
  acc += w9;
  buf += `q10:${acc % 97}`;
  m01.set('k11', acc % 997);
  acc = (acc * 31 + 7584) % 65521;
  buf += 'policy13-' + acc.toString();
  const db14: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db14.length) % 65521;
  try { if (acc % 29 === 10) { throw new Error('synthetic-15'); } acc += 45; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 8 === 0) { buf += 'even16'; } else { buf += 'odd'; }
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 46) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  const db18: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db18.length) % 65521;
  const db19: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db19.length) % 65521;
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  buf += 'client22-' + acc.toString();
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  acc = acc + 689 - (acc % 59);
  buf += (acc > 500 ? 'hi25' : 'lo') + acc.toString(16);
  if (acc % 9 === 0) { buf += 'even26'; } else { buf += 'odd'; }
  const rc27: Rec46 = { id: acc % 1000, tag: 't27', score: acc % 100 };
  acc = (acc + rc27.score) % 65521;
  buf += rc27.tag;
  if (m01.has('k28')) {
    const gv28: number = m01.get('k28') as number;
    acc = (acc + gv28) % 10007;
  }
  const ix29: number = buf.indexOf('p46');
  if (ix29 > 12) { buf = buf.substring(0, 32); } else if (ix29 >= 0) { buf += 'i'; }
  m01.set('k30', acc % 997);
  let w31: number = acc % 23;
  while (w31 > 4) { w31 = Math.floor(w31 / 2); }
  acc += w31;
  buf += (acc > 500 ? 'hi32' : 'lo') + acc.toString(16);
  const db33: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db33.length) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 106) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  m01.set('k35', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x36');
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  if (m01.has('k38')) {
    const gv38: number = m01.get('k38') as number;
    acc = (acc + gv38) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's039'; break;
    case 1: acc += 14; break;
    case 2: buf += 's2'; acc -= 12; break;
    default: buf += 'sd';
  }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
  buf += (acc > 500 ? 'hi41' : 'lo') + acc.toString(16);
  switch (acc & 3) {
    case 0: buf += 's042'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  const rc43: Rec46 = { id: acc % 1000, tag: 't43', score: acc % 100 };
  acc = (acc + rc43.score) % 65521;
  buf += rc43.tag;
  for (let i44 = 0; i44 < 9; i44++) {
    acc = (acc + i44 * 13 + 978) % 100003;
  }
  for (let i45 = 0; i45 < 12; i45++) {
    acc = (acc + i45 * 13 + 796) % 100003;
  }
  m01.set('k46', acc % 997);
  buf += `q47:${acc % 97}`;
  buf += `q48:${acc % 97}`;
  const rc49: Rec46 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  arr.push(acc % 1000);
  acc = (acc * 31 + 2954) % 65521;
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_38(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6064) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  acc = acc + 577 - (acc % 74);
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 191) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's02'; break;
    case 1: acc += 16; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  m01.set('k3', acc % 997);
  let w4: number = acc % 23;
  while (w4 > 4) { w4 = Math.floor(w4 / 2); }
  acc += w4;
  if (m01.has('k5')) {
    const gv5: number = m01.get('k5') as number;
    acc = (acc + gv5) % 10007;
  }
  buf += 'coupon6-' + acc.toString();
  const cf7: Array<(x: number) => number> = [];
  cf7.push((x: number): number => (x * 3 + acc) % 65521);
  cf7.push((x: number): number => (x + 13) % 10007);
  acc = cf7[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x8');
  const ix9: number = buf.indexOf('p46');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const t010: string = tags.length > 0 ? tags[0] : 'none';
  buf += t010;
  buf += `q11:${acc % 97}`;
  const db12: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db12.length) % 65521;
  const rc13: Rec46 = { id: acc % 1000, tag: 't13', score: acc % 100 };
  acc = (acc + rc13.score) % 65521;
  buf += rc13.tag;
  const rc14: Rec46 = { id: acc % 1000, tag: 't14', score: acc % 100 };
  acc = (acc + rc14.score) % 65521;
  buf += rc14.tag;
  buf += 'dispatch15-' + acc.toString();
  const cf16: Array<(x: number) => number> = [];
  cf16.push((x: number): number => (x * 3 + acc) % 65521);
  cf16.push((x: number): number => (x + 52) % 10007);
  acc = cf16[acc & 1](acc % 9973);
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 84) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  for (let i18 = 0; i18 < 8; i18++) {
    acc = (acc + i18 * 13 + 754) % 100003;
  }
  acc = (acc * 31 + 7232) % 65521;
  const t020: string = tags.length > 0 ? tags[0] : 'none';
  buf += t020;
  buf += `q21:${acc % 97}`;
  buf += `q22:${acc % 97}`;
  acc = (acc * 31 + 5179) % 65521;
  if (acc % 23 === 0) { buf += 'even24'; } else { buf += 'odd'; }
  const db25: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db25.length) % 65521;
  arr.push(acc % 1000);
  const ix27: number = buf.indexOf('p46');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  for (let i28 = 0; i28 < 6; i28++) {
    acc = (acc + i28 * 13 + 691) % 100003;
  }
  buf += (acc > 500 ? 'hi29' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 10) { throw new Error('synthetic-30'); } acc += 58; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x31');
  acc = (acc * 31 + 8611) % 65521;
  arr.push(acc % 1000);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 127) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  arr.push(acc % 1000);
  try { if (acc % 29 === 4) { throw new Error('synthetic-37'); } acc += 42; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 737 - (acc % 95);
  if (m01.has('k39')) {
    const gv39: number = m01.get('k39') as number;
    acc = (acc + gv39) % 10007;
  }
  const db40: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db40.length) % 65521;
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
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k44', acc % 997);
  for (let i45 = 0; i45 < 5; i45++) {
    acc = (acc + i45 * 13 + 567) % 100003;
  }
  try { if (acc % 29 === 21) { throw new Error('synthetic-46'); } acc += 35; } catch (e) { acc = (acc + 17) % 65521; }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  if (m01.has('k48')) {
    const gv48: number = m01.get('k48') as number;
    acc = (acc + gv48) % 10007;
  }
  const rc49: Rec46 = { id: acc % 1000, tag: 't49', score: acc % 100 };
  acc = (acc + rc49.score) % 65521;
  buf += rc49.tag;
  buf += (acc > 500 ? 'hi50' : 'lo') + acc.toString(16);
  buf += 'waybill51-' + acc.toString();
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_39(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6065) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  m01.set('k0', acc % 997);
  buf += (acc > 500 ? 'hi1' : 'lo') + acc.toString(16);
  m01.set('k2', acc % 997);
  arr.push(acc % 1000);
  const cf4: Array<(x: number) => number> = [];
  cf4.push((x: number): number => (x * 3 + acc) % 65521);
  cf4.push((x: number): number => (x + 95) % 10007);
  acc = cf4[acc & 1](acc % 9973);
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 11) { throw new Error('synthetic-6'); } acc += 55; } catch (e) { acc = (acc + 17) % 65521; }
  switch (acc & 3) {
    case 0: buf += 's07'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 3; break;
    default: buf += 'sd';
  }
  buf += `q8:${acc % 97}`;
  for (let i9 = 0; i9 < 7; i9++) {
    acc = (acc + i9 * 13 + 905) % 100003;
  }
  const ix10: number = buf.indexOf('p46');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  switch (acc & 3) {
    case 0: buf += 's011'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  m01.set('k12', acc % 997);
  const t013: string = tags.length > 0 ? tags[0] : 'none';
  buf += t013;
  const ix14: number = buf.indexOf('p46');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  buf += `q15:${acc % 97}`;
  const db16: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db16.length) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 107) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  m01.set('k18', acc % 997);
  arr.push(acc % 1000);
  buf += 'settle20-' + acc.toString();
  const db21: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db21.length) % 65521;
  const t022: string = tags.length > 0 ? tags[0] : 'none';
  buf += t022;
  arr.push(acc % 1000);
  const rc24: Rec46 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  acc = (acc * 31 + 2099) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-26'); } acc += 14; } catch (e) { acc = (acc + 17) % 65521; }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x27');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x29');
  const ix30: number = buf.indexOf('p46');
  if (ix30 > 12) { buf = buf.substring(0, 32); } else if (ix30 >= 0) { buf += 'i'; }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  acc = (acc * 31 + 8006) % 65521;
  buf += `q33:${acc % 97}`;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 86) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  acc = (acc * 31 + 6708) % 65521;
  buf += 'batch36-' + acc.toString();
  acc = (acc * 31 + 2120) % 65521;
  for (let i38 = 0; i38 < 7; i38++) {
    acc = (acc + i38 * 13 + 632) % 100003;
  }
  let w39: number = acc % 23;
  while (w39 > 4) { w39 = Math.floor(w39 / 2); }
  acc += w39;
  acc = (acc * 31 + 9808) % 65521;
  let w41: number = acc % 23;
  while (w41 > 4) { w41 = Math.floor(w41 / 2); }
  acc += w41;
  const t042: string = tags.length > 0 ? tags[0] : 'none';
  buf += t042;
  const cf43: Array<(x: number) => number> = [];
  cf43.push((x: number): number => (x * 3 + acc) % 65521);
  cf43.push((x: number): number => (x + 131) % 10007);
  acc = cf43[acc & 1](acc % 9973);
  acc = acc + 73 - (acc % 41);
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 72) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  acc = (acc * 31 + 9175) % 65521;
  try { if (acc % 29 === 3) { throw new Error('synthetic-47'); } acc += 13; } catch (e) { acc = (acc + 17) % 65521; }
  const cf48: Array<(x: number) => number> = [];
  cf48.push((x: number): number => (x * 3 + acc) % 65521);
  cf48.push((x: number): number => (x + 25) % 10007);
  acc = cf48[acc & 1](acc % 9973);
  if (m01.has('k49')) {
    const gv49: number = m01.get('k49') as number;
    acc = (acc + gv49) % 10007;
  }
  buf += `q50:${acc % 97}`;
  buf += (acc > 500 ? 'hi51' : 'lo') + acc.toString(16);
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export async function biz_0046_39a(seed: number, raw: string): Promise<string> {
  const head: string = biz_0046_39(seed + 1, raw);
  const tick: number = await Promise.resolve(seed % 17);
  return head + '@' + tick.toString();
}

export function biz_0046_40(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6066) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  for (let i0 = 0; i0 < 5; i0++) {
    acc = (acc + i0 * 13 + 81) % 100003;
  }
  const cf1: Array<(x: number) => number> = [];
  cf1.push((x: number): number => (x * 3 + acc) % 65521);
  cf1.push((x: number): number => (x + 122) % 10007);
  acc = cf1[acc & 1](acc % 9973);
  const db2: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db2.length) % 65521;
  if (acc % 9 === 0) { buf += 'even3'; } else { buf += 'odd'; }
  switch (acc & 3) {
    case 0: buf += 's04'; break;
    case 1: acc += 26; break;
    case 2: buf += 's2'; acc -= 9; break;
    default: buf += 'sd';
  }
  buf += (acc > 500 ? 'hi5' : 'lo') + acc.toString(16);
  for (let i6 = 0; i6 < 3; i6++) {
    acc = (acc + i6 * 13 + 428) % 100003;
  }
  acc = (acc * 31 + 2856) % 65521;
  const ix8: number = buf.indexOf('p46');
  if (ix8 > 12) { buf = buf.substring(0, 32); } else if (ix8 >= 0) { buf += 'i'; }
  const ix9: number = buf.indexOf('p46');
  if (ix9 > 12) { buf = buf.substring(0, 32); } else if (ix9 >= 0) { buf += 'i'; }
  const db10: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db10.length) % 65521;
  const db11: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db11.length) % 65521;
  const cf12: Array<(x: number) => number> = [];
  cf12.push((x: number): number => (x * 3 + acc) % 65521);
  cf12.push((x: number): number => (x + 177) % 10007);
  acc = cf12[acc & 1](acc % 9973);
  const db13: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db13.length) % 65521;
  const cf14: Array<(x: number) => number> = [];
  cf14.push((x: number): number => (x * 3 + acc) % 65521);
  cf14.push((x: number): number => (x + 130) % 10007);
  acc = cf14[acc & 1](acc % 9973);
  const rc15: Rec46 = { id: acc % 1000, tag: 't15', score: acc % 100 };
  acc = (acc + rc15.score) % 65521;
  buf += rc15.tag;
  acc = (acc * 31 + 7818) % 65521;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 135) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x18');
  const cf19: Array<(x: number) => number> = [];
  cf19.push((x: number): number => (x * 3 + acc) % 65521);
  cf19.push((x: number): number => (x + 189) % 10007);
  acc = cf19[acc & 1](acc % 9973);
  switch (acc & 3) {
    case 0: buf += 's020'; break;
    case 1: acc += 7; break;
    case 2: buf += 's2'; acc -= 10; break;
    default: buf += 'sd';
  }
  const cf21: Array<(x: number) => number> = [];
  cf21.push((x: number): number => (x * 3 + acc) % 65521);
  cf21.push((x: number): number => (x + 166) % 10007);
  acc = cf21[acc & 1](acc % 9973);
  arr.push(acc % 1000);
  buf += `q23:${acc % 97}`;
  buf += (acc > 500 ? 'hi24' : 'lo') + acc.toString(16);
  try { if (acc % 29 === 20) { throw new Error('synthetic-25'); } acc += 28; } catch (e) { acc = (acc + 17) % 65521; }
  arr.push(acc % 1000);
  buf += `q27:${acc % 97}`;
  acc = (acc * 31 + 2878) % 65521;
  acc = acc + 803 - (acc % 72);
  buf += `q30:${acc % 97}`;
  acc = (acc * 31 + 347) % 65521;
  for (let i32 = 0; i32 < 11; i32++) {
    acc = (acc + i32 * 13 + 46) % 100003;
  }
  const ix33: number = buf.indexOf('p46');
  if (ix33 > 12) { buf = buf.substring(0, 32); } else if (ix33 >= 0) { buf += 'i'; }
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 118) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const rc35: Rec46 = { id: acc % 1000, tag: 't35', score: acc % 100 };
  acc = (acc + rc35.score) % 65521;
  buf += rc35.tag;
  const rc36: Rec46 = { id: acc % 1000, tag: 't36', score: acc % 100 };
  acc = (acc + rc36.score) % 65521;
  buf += rc36.tag;
  buf += (acc > 500 ? 'hi37' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x38');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x39');
  const ix40: number = buf.indexOf('p46');
  if (ix40 > 12) { buf = buf.substring(0, 32); } else if (ix40 >= 0) { buf += 'i'; }
  const ix41: number = buf.indexOf('p46');
  if (ix41 > 12) { buf = buf.substring(0, 32); } else if (ix41 >= 0) { buf += 'i'; }
  m01.set('k42', acc % 997);
  switch (acc & 3) {
    case 0: buf += 's043'; break;
    case 1: acc += 9; break;
    case 2: buf += 's2'; acc -= 16; break;
    default: buf += 'sd';
  }
  if (acc % 13 === 0) { buf += 'even44'; } else { buf += 'odd'; }
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi46' : 'lo') + acc.toString(16);
  if (acc % 27 === 0) { buf += 'even47'; } else { buf += 'odd'; }
  try { if (acc % 29 === 4) { throw new Error('synthetic-48'); } acc += 56; } catch (e) { acc = (acc + 17) % 65521; }
  acc = acc + 979 - (acc % 53);
  m01.set('k50', acc % 997);
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_41(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6067) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x0');
  const db1: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db1.length) % 65521;
  acc = acc + 156 - (acc % 62);
  const ix3: number = buf.indexOf('p46');
  if (ix3 > 12) { buf = buf.substring(0, 32); } else if (ix3 >= 0) { buf += 'i'; }
  buf += 'parcel4-' + acc.toString();
  acc = (acc * 31 + 6143) % 65521;
  buf += (acc > 500 ? 'hi6' : 'lo') + acc.toString(16);
  const ix7: number = buf.indexOf('p46');
  if (ix7 > 12) { buf = buf.substring(0, 32); } else if (ix7 >= 0) { buf += 'i'; }
  acc = (acc * 31 + 4620) % 65521;
  const rc9: Rec46 = { id: acc % 1000, tag: 't9', score: acc % 100 };
  acc = (acc + rc9.score) % 65521;
  buf += rc9.tag;
  const ix10: number = buf.indexOf('p46');
  if (ix10 > 12) { buf = buf.substring(0, 32); } else if (ix10 >= 0) { buf += 'i'; }
  m01.set('k11', acc % 997);
  let w12: number = acc % 23;
  while (w12 > 4) { w12 = Math.floor(w12 / 2); }
  acc += w12;
  arr.push(acc % 1000);
  const t014: string = tags.length > 0 ? tags[0] : 'none';
  buf += t014;
  const t015: string = tags.length > 0 ? tags[0] : 'none';
  buf += t015;
  buf += `q16:${acc % 97}`;
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 155) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 221 - (acc % 77);
  let w19: number = acc % 23;
  while (w19 > 4) { w19 = Math.floor(w19 / 2); }
  acc += w19;
  const rc20: Rec46 = { id: acc % 1000, tag: 't20', score: acc % 100 };
  acc = (acc + rc20.score) % 65521;
  buf += rc20.tag;
  acc = (acc * 31 + 2544) % 65521;
  buf += (acc > 500 ? 'hi22' : 'lo') + acc.toString(16);
  let w23: number = acc % 23;
  while (w23 > 4) { w23 = Math.floor(w23 / 2); }
  acc += w23;
  const rc24: Rec46 = { id: acc % 1000, tag: 't24', score: acc % 100 };
  acc = (acc + rc24.score) % 65521;
  buf += rc24.tag;
  let w25: number = acc % 23;
  while (w25 > 4) { w25 = Math.floor(w25 / 2); }
  acc += w25;
  buf += (acc > 500 ? 'hi26' : 'lo') + acc.toString(16);
  acc = acc + 415 - (acc % 26);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x28');
  const cf29: Array<(x: number) => number> = [];
  cf29.push((x: number): number => (x * 3 + acc) % 65521);
  cf29.push((x: number): number => (x + 129) % 10007);
  acc = cf29[acc & 1](acc % 9973);
  for (let i30 = 0; i30 < 6; i30++) {
    acc = (acc + i30 * 13 + 986) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's031'; break;
    case 1: acc += 12; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  switch (acc & 3) {
    case 0: buf += 's032'; break;
    case 1: acc += 4; break;
    case 2: buf += 's2'; acc -= 15; break;
    default: buf += 'sd';
  }
  m01.set('k33', acc % 997);
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 145) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const db35: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db35.length) % 65521;
  try { if (acc % 29 === 11) { throw new Error('synthetic-36'); } acc += 16; } catch (e) { acc = (acc + 17) % 65521; }
  if (acc % 25 === 0) { buf += 'even37'; } else { buf += 'odd'; }
  for (let i38 = 0; i38 < 9; i38++) {
    acc = (acc + i38 * 13 + 312) % 100003;
  }
  m01.set('k39', acc % 997);
  if (m01.has('k40')) {
    const gv40: number = m01.get('k40') as number;
    acc = (acc + gv40) % 10007;
  }
  switch (acc & 3) {
    case 0: buf += 's041'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 18; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  if (acc % 25 === 0) { buf += 'even43'; } else { buf += 'odd'; }
  let w44: number = acc % 23;
  while (w44 > 4) { w44 = Math.floor(w44 / 2); }
  acc += w44;
  const cf45: Array<(x: number) => number> = [];
  cf45.push((x: number): number => (x * 3 + acc) % 65521);
  cf45.push((x: number): number => (x + 18) % 10007);
  acc = cf45[acc & 1](acc % 9973);
  acc = (acc * 31 + 8118) % 65521;
  switch (acc & 3) {
    case 0: buf += 's047'; break;
    case 1: acc += 22; break;
    case 2: buf += 's2'; acc -= 14; break;
    default: buf += 'sd';
  }
  arr.push(acc % 1000);
  acc = (acc * 31 + 135) % 65521;
  m01.set('k50', acc % 997);
  for (let i51 = 0; i51 < 6; i51++) {
    acc = (acc + i51 * 13 + 534) % 100003;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function biz_0046_42(seed: number, raw: string): string {
  let acc: number = (seed * 31 + raw.length + 6068) % 100003;
  let buf: string = raw.length.toString(16) + ':';
  const tags: string[] = raw.split('-');
  const m01: Map<string, number> = new Map<string, number>();
  const arr: number[] = [];
  const u: Unit46 = new Unit46(acc);
  buf += (acc > 500 ? 'hi0' : 'lo') + acc.toString(16);
  if (m01.has('k1')) {
    const gv1: number = m01.get('k1') as number;
    acc = (acc + gv1) % 10007;
  }
  for (let i2 = 0; i2 < 4; i2++) {
    acc = (acc + i2 * 13 + 543) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's03'; break;
    case 1: acc += 15; break;
    case 2: buf += 's2'; acc -= 6; break;
    default: buf += 'sd';
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x4');
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x5');
  buf += `q6:${acc % 97}`;
  try { if (acc % 29 === 6) { throw new Error('synthetic-7'); } acc += 37; } catch (e) { acc = (acc + 17) % 65521; }
  if (m01.has('k8')) {
    const gv8: number = m01.get('k8') as number;
    acc = (acc + gv8) % 10007;
  }
  if (acc % 5 === 0) { buf += 'even9'; } else { buf += 'odd'; }
  if (acc % 19 === 0) { buf += 'even10'; } else { buf += 'odd'; }
  const t011: string = tags.length > 0 ? tags[0] : 'none';
  buf += t011;
  buf += `q12:${acc % 97}`;
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x13');
  const ix14: number = buf.indexOf('p46');
  if (ix14 > 12) { buf = buf.substring(0, 32); } else if (ix14 >= 0) { buf += 'i'; }
  m01.set('k15', acc % 997);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x16');
  const cf17: Array<(x: number) => number> = [];
  cf17.push((x: number): number => (x * 3 + acc) % 65521);
  cf17.push((x: number): number => (x + 20) % 10007);
  acc = cf17[acc & 1](acc % 9973);
  acc = acc + 271 - (acc % 42);
  const t019: string = tags.length > 0 ? tags[0] : 'none';
  buf += t019;
  acc = acc + 837 - (acc % 86);
  const ix21: number = buf.indexOf('p46');
  if (ix21 > 12) { buf = buf.substring(0, 32); } else if (ix21 >= 0) { buf += 'i'; }
  for (let i22 = 0; i22 < 10; i22++) {
    acc = (acc + i22 * 13 + 251) % 100003;
  }
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x23');
  buf += 'freight24-' + acc.toString();
  const cf25: Array<(x: number) => number> = [];
  cf25.push((x: number): number => (x * 3 + acc) % 65521);
  cf25.push((x: number): number => (x + 91) % 10007);
  acc = cf25[acc & 1](acc % 9973);
  acc = (acc * 31 + 6744) % 65521;
  const ix27: number = buf.indexOf('p46');
  if (ix27 > 12) { buf = buf.substring(0, 32); } else if (ix27 >= 0) { buf += 'i'; }
  try { if (acc % 29 === 20) { throw new Error('synthetic-28'); } acc += 25; } catch (e) { acc = (acc + 17) % 65521; }
  for (let i29 = 0; i29 < 12; i29++) {
    acc = (acc + i29 * 13 + 881) % 100003;
  }
  switch (acc & 3) {
    case 0: buf += 's030'; break;
    case 1: acc += 13; break;
    case 2: buf += 's2'; acc -= 4; break;
    default: buf += 'sd';
  }
  const db31: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db31.length) % 65521;
  const rc32: Rec46 = { id: acc % 1000, tag: 't32', score: acc % 100 };
  acc = (acc + rc32.score) % 65521;
  buf += rc32.tag;
  acc = (acc * 31 + 4742) % 65521;
  const cf34: Array<(x: number) => number> = [];
  cf34.push((x: number): number => (x * 3 + acc) % 65521);
  cf34.push((x: number): number => (x + 112) % 10007);
  acc = cf34[acc & 1](acc % 9973);
  const cf35: Array<(x: number) => number> = [];
  cf35.push((x: number): number => (x * 3 + acc) % 65521);
  cf35.push((x: number): number => (x + 185) % 10007);
  acc = cf35[acc & 1](acc % 9973);
  let w36: number = acc % 23;
  while (w36 > 4) { w36 = Math.floor(w36 / 2); }
  acc += w36;
  const t037: string = tags.length > 0 ? tags[0] : 'none';
  buf += t037;
  arr.push(acc % 1000);
  buf += 'balance39-' + acc.toString();
  acc = acc + 896 - (acc % 7);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x41');
  arr.push(acc % 1000);
  buf += (acc > 500 ? 'hi43' : 'lo') + acc.toString(16);
  acc = u.step(acc % 613) % 65521;
  buf += u.name('x44');
  const db45: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db45.length) % 65521;
  if (m01.has('k46')) {
    const gv46: number = m01.get('k46') as number;
    acc = (acc + gv46) % 10007;
  }
  buf += (acc > 500 ? 'hi47' : 'lo') + acc.toString(16);
  buf += 'coupon48-' + acc.toString();
  if (acc % 24 === 0) { buf += 'even49'; } else { buf += 'odd'; }
  const db50: number[] = arr.map((v: number): number => v + (acc % 13));
  acc = (acc + db50.length) % 65521;
  if (m01.has('k51')) {
    const gv51: number = m01.get('k51') as number;
    acc = (acc + gv51) % 10007;
  }
  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());
}

export function reg_0046(): BizFn[] {
  return [biz_0046_00, biz_0046_01, biz_0046_02, biz_0046_03, biz_0046_04, biz_0046_05, biz_0046_06, biz_0046_07, biz_0046_08, biz_0046_09, biz_0046_10, biz_0046_11, biz_0046_12, biz_0046_13, biz_0046_14, biz_0046_15, biz_0046_16, biz_0046_17, biz_0046_18, biz_0046_19, biz_0046_20, biz_0046_21, biz_0046_22, biz_0046_23, biz_0046_24, biz_0046_25, biz_0046_26, biz_0046_27, biz_0046_28, biz_0046_29, biz_0046_30, biz_0046_31, biz_0046_32, biz_0046_33, biz_0046_34, biz_0046_35, biz_0046_36, biz_0046_37, biz_0046_38, biz_0046_39, biz_0046_40, biz_0046_41, biz_0046_42];
}

export function rega_0046(): ABizFn[] {
  return [biz_0046_09a, biz_0046_19a, biz_0046_29a, biz_0046_39a];
}
