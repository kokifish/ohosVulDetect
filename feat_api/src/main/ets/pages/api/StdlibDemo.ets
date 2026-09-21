// 工具库直连面（@ohos 模块直 import，不经 @kit 再导出）：
// @ohos.uri / url / convertxml / xml / buffer / util.json / util.ArrayList / util.HashMap /
// util.Deque / systemDateTime / zlib。
// 逆向语料价值：非 Kit 说明符的 import 形态 + 纯本地确定性运行时（URI 解析/容器/压缩）。
import uri from '@ohos.uri';
import url from '@ohos.url';
import convertxml from '@ohos.convertxml';
import xml from '@ohos.xml';
import buffer from '@ohos.buffer';
import json2 from '@ohos.util.json';
import ArrayList from '@ohos.util.ArrayList';
import HashMap from '@ohos.util.HashMap';
import Deque from '@ohos.util.Deque';
import sysdt from '@ohos.systemDateTime';
import zlib from '@ohos.zlib';
import { common } from '@kit.AbilityKit';
import { fileIo } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';

const BENCH_XML = '<bench><item id="1">alpha</item><item id="2">beta</item></bench>';

@Entry
@Component
struct StdlibDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'stdlib direct-import modules',
        cases: [
          new Case('uri parse', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const u = new uri.URI('https://bench.example:8443/a/b?q=ovd&n=2#frag');
              const ok = u.scheme === 'https' && u.path === '/a/b' && u.query === 'q=ovd&n=2';
              return `uri scheme=${u.scheme} path=${u.path} q=${u.query} frag=${u.fragment} ok=${ok}`;
            } catch (e) {
              return `uri-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('url parseURL', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const u = url.URL.parseURL('https://bench.example/x?k=v');
              const ok = u.protocol === 'https:' && u.host === 'bench.example' && u.pathname === '/x';
              return `url proto=${u.protocol} host=${u.host} path=${u.pathname} ok=${ok}`;
            } catch (e) {
              return `url-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('convertxml convert', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const out = new convertxml.ConvertXML().convert(BENCH_XML);
              const s = JSON.stringify(out);
              return `cvt len=${s.length} has-item>${s.indexOf('item') >= 0}`;
            } catch (e) {
              return `cvt-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('xml pull parse', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const bytes = buffer.from(BENCH_XML, 'utf-8');
              const parser = new xml.XmlPullParser(bytes.buffer, 'utf-8');
              let tokens = 0;
              parser.parse({
                tokenValueCallbackFunction: (t: xml.EventType, info: xml.ParseInfo): boolean => {
                  if (info.getDepth() === 2) {
                    tokens += 1;
                  }
                  return true;
                }
              });
              return `xml depth2-tokens=${tokens}`;
            } catch (e) {
              return `xml-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('buffer + util.json', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const b = buffer.from('stdlib-bench', 'utf-8');
              const hex = b.toString('hex');
              const obj = json2.parse('{"k":"v","n":3}') as Record<string, ESObject>;
              const s = json2.stringify(obj);
              return `buf hex=${hex} json k=${obj['k']} round>${s.indexOf('"n":3') >= 0}`;
            } catch (e) {
              return `bufjson-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('util containers', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const list = new ArrayList<number>();
              list.add(1);
              list.add(2);
              list.add(3);
              const map = new HashMap<string, number>();
              map.set('a', 1);
              map.set('b', 2);
              const dq = new Deque<number>();
              dq.insertFront(1);
              dq.insertEnd(2);
              return `list=${list[0]}${list[2]} map=${map.get('b')} dq=${dq.getFirst()}${dq.getLast()} lens=${list.length}/${map.length}/${dq.length}`;
            } catch (e) {
              return `containers-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('systemDateTime', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const now = sysdt.getTime();
              const wall = sysdt.getTime(false);
              return `time t1>${now > 0} t2=${wall} delta=${Math.abs(now - wall)}`;
            } catch (e) {
              return `sysdt-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('zlib compress roundtrip', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const src = `${ctx.filesDir}/zlib_src.txt`;
            const gz = `${ctx.filesDir}/zlib_src.gz`;
            const back = `${ctx.filesDir}/zlib_back.txt`;
            const cleanup = (): void => {
              for (const f of [src, gz, back]) {
                try {
                  fileIo.unlinkSync(f);
                } catch (_u) {
                }
              }
            };
            try {
              const f: fileIo.File = fileIo.openSync(src, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE | fileIo.OpenMode.TRUNC);
              fileIo.writeSync(f.fd, 'zlib-roundtrip-payload-bench');
              fileIo.closeSync(f);
              await zlib.compressFile(src, gz, { level: zlib.CompressLevel.COMPRESS_LEVEL_BEST_SPEED });
              await zlib.decompressFile(gz, back);
              const text = fileIo.readTextSync(back);
              cleanup();
              return `zlib round>${text === 'zlib-roundtrip-payload-bench'}`;
            } catch (e) {
              cleanup();
              return `zlib unavailable code=${(e as BusinessError).code} msg=${JSON.stringify(e).slice(0, 50)}`;
            }
          }),
        ],
      })
    }
    .height('100%')
  }
}
