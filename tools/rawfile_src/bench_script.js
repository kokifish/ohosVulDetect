// rawfile abc 语料源（es2abc script 模式，无 import/export，顶层即执行体）。
// 由 tools/gen_rawfile_abc.py 编译为 feat_vuln/src/main/resources/rawfile/bench_script.abc，
// 运行期经 feat_vuln cpp 侧 napi_run_script_path 执行（该接口仅接受 rawfile 路径，独立 JS 上下文，
// 完成值恒为 undefined），故以脚本内自校验闭环：合计值 ≠ 72 时抛错，native 侧收到异常 → 页面 ❌；
// 正常执行完自校验则 native 返回 "ran-ok-selfcheck=72"（72 = 17 素数和 + 40 JSON 取值 + 14 箭头族 + 1 finally）。
// 勿手改产物 abc；改本源后重新跑生成器。
function foldPrimes(n) {
  let acc = 0;
  outer:
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        continue outer;
      }
    }
    acc += i;
  }
  return acc;
}

var notes = [];
function accNote(s) {
  notes.push(s);
}

function tryWrap(s) {
  try {
    return JSON.parse(s).k;
  } catch (e) {
    return -1;
  } finally {
    accNote('finally');
  }
}

const arrows = [(x) => x * 2, (x) => x + 1, (x) => x * x];
let mixed = 0;
for (let k = 0; k < arrows.length; k++) {
  mixed += arrows[k](k + 1);
}

const total = foldPrimes(10) + tryWrap('{"k":40}') + mixed + notes.length;
if (total !== 72) {
  throw new Error('bench_script mismatch: ' + total);
}
