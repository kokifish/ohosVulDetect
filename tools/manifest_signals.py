#!/usr/bin/env python3
"""manifest 信号材料与字段枚举单源：门禁间"同口径"的实现级保证（原靠注释约定）。

- rule_material(entry)：漏洞规则的字符串池材料（detection.constants[str] + call +
  hops[].constants/call），check_signal_dual_state（双态存活）与合成器
  （check_score_regression）共用——两门禁检查的 token 集与评分器匹配集从此同源。
- DETECTION_TYPES：合法 detection.type 枚举（check_manifest 字段校验用；
  新增类型时同步 score_output 分支与本表）。
- PREDICATE_NAMES：合法 predicate 值（与 score_output.PREDICATES 键一致）。

注意：gen_heavy_farm 的 FP 黑名单**有意不使用**本模块——它做更宽的全字段 walk
（title/notes 全封禁），是独立更严策略，收窄反而给 farm 引入 FP 回潮通道。
"""
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "groundtruth"))
from score_output import PREDICATE_PHRASES, PREDICATES  # noqa: E402

PREDICATE_NAMES = frozenset(PREDICATES)

DETECTION_TYPES = frozenset({
    "api-call+constant", "string-literal", "api-call", "interproc-chain",
    "call-chain", "string-op-flow", "api-call+string-concat", "predicate",
    "manifest", "enum-ref", "native", "predicate+call", "api-call+const-array",
    "api-call-flow", "constant-flag", "safe-twin",
})


def rule_material(entry: dict) -> list[str]:
    """单条漏洞规则的字符串池材料（与评分器匹配面同口径）。"""
    det = entry.get("detection", {})
    mat: list[str] = []
    for c in det.get("constants", []):
        if isinstance(c, str):
            mat.append(c)
    mat += [t for t in det.get("call", []) if isinstance(t, str)]
    for h in det.get("hops", []):
        mat += [str(c) for c in h.get("constants", []) if isinstance(c, str)]
        mat += [t for t in h.get("call", []) if isinstance(t, str)]
    return mat
