// SAFE: OVD-TNT-001S 同构跨函数链，source 返回派生聚合值、
// sink 落点为聚合端点——污点规则应在 hop1 上失配（CWE-200 加固）。
import http from '@ohos.net.http';
import { common } from '@kit.AbilityKit';
import { ovdT9SinkS as relay9S } from 'lib_shared';
import { ovdXmodTntSrcS } from 'lib_common';
import { ovdHspTntSrcS } from 'lib_shared';

const AGGREGATE = 'aggregate-sha-short';

function ovdTntSource(): string {
  return AGGREGATE;
}

function ovdTntRelay(seed: string): string {
  return `relay(${seed.length})=${seed}`;
}

export async function ovdTntSink(): Promise<string> {
  const payload: string = ovdTntRelay(ovdTntSource());
  const req: http.HttpRequest = http.createHttp();
  await req.request('https://ovd-tnt.example/aggregate', {
    method: http.RequestMethod.POST,
    header: { 'x-tnt-flow': '0' },
    extraData: payload
  });
  req.destroy();
  return 'tntS aggregate posted';
}

// SAFE: OVD-TNT-002S 三跳链的 source 换成批处理聚合计数，sink 只发常量（CWE-200 加固）
const BATCH2 = 'aggregate-batch-only-2';

function src2S(): string {
  return BATCH2;
}

function hop1S(s: string): string {
  return `h1<${s.length}>${s}`;
}

function hop2S(s: string): string {
  return s.replace('h1', 'h2');
}

export async function ovdTntSink2S(): Promise<string> {
  const payload: string = hop2S(hop1S(src2S()));
  const req: http.HttpRequest = http.createHttp();
  await req.request('https://ovd-tnt.example/aggregate2', {
    method: http.RequestMethod.POST,
    header: { 'x-tnt2-flow': '0' },
    extraData: payload
  });
  req.destroy();
  return 'tnt2S aggregate posted';
}

// SAFE: OVD-TNT-003S 四跳链 source 换聚合值，sink 不落盘（CWE-200/312 加固）
const AGG3 = 'aggregate-tnt3-only';

function src3S(): string {
  return AGG3;
}

function hop3aS(s: string): string {
  return `a(${s.length})${s}`;
}

export async function ovdTntSink3S(): Promise<string> {
  const payload: string = hop3aS(src3S());
  return `tnt3S aggregate ${payload.length} (no file sink)`;
}

// SAFE: OVD-TNT-004S 链路只发聚合值且立即清除（CWE-200 加固）
const AGG4 = 'aggregate-tnt4-only';

export async function ovdTntSink4S(): Promise<string> {
  const masked: string = AGG4.slice(0, 8);
  return `tnt4S aggregate ${masked.length} (no pasteboard sink)`;
}

// SAFE: OVD-TNT-005S 跨模块链 source 换 HAR 聚合值，不落盘（CWE-200/312 加固）

export async function ovdTntSink5S(): Promise<string> {
  const payload: string = hop1S(ovdXmodTntSrcS());
  return `tnt5S aggregate ${payload.length} (no file sink)`;
}

// SAFE: OVD-TNT-006S 跨模块链 source 换 HSP 聚合值，不落盘（CWE-200/312 加固）

export async function ovdTntSink6S(): Promise<string> {
  const payload: string = `h6(${ovdHspTntSrcS().length})`;
  return `tnt6S aggregate ${payload.length} (no file sink)`;
}


// SAFE: OVD-TNT-007S 同构 then 链，source 返回派生聚合、sink 只发常量（CWE-200 加固）
function ovdT7SourceS(): string {
  return 'then-chain-aggregate';
}

function ovdT7MidS(seed: string): string {
  return `midS(${seed.length})`;
}

async function ovdT7SinkS(_payload: string): Promise<string> {
  const req: http.HttpRequest = http.createHttp();
  try {
    await req.request('https://ovd-tnt7.example/aggregate', {
      method: http.RequestMethod.POST,
      header: { 'x-tnt7-flow': '0' },
      extraData: 'aggregate-only'
    });
  } catch (e) {
    // graceful
  } finally {
    req.destroy();
  }
  return 'tnt7S then-sink aggregate posted';
}

export async function ovdTnt007S(): Promise<string> {
  try {
    await Promise.resolve(ovdT7SourceS()).then(ovdT7MidS).then(ovdT7SinkS);
  } catch (e) {
    // graceful
  }
  return 'tnt7S then-chain completed';
}


// SAFE: OVD-TNT-008S 同构派发表只聚合（CWE-200 加固）
export async function ovdD8SinkAggS(p: string): Promise<string> {
  return `dispatch-aggS:${p.length}`;
}

export async function ovdTnt008S(): Promise<string> {
  const table: Array<(p: string) => Promise<string>> = [ovdD8SinkAggS, ovdD8SinkAggS];
  const pick: number = 9 > 0 ? 0 : 1;
  await table[pick]('then-dispatch-aggregate');
  return 'tnt8S dispatch-chain completed';
}

// SAFE: OVD-TNT-009S 别名 sink 只聚合（CWE-200 加固）
export async function ovdTnt009S(ctx: common.Context): Promise<string> {
  await relay9S(ctx, 9);
  return 'tnt9S alias aggregate completed';
}
