#!/usr/bin/env python3
"""生成递归深度压力语料（触发逆向工具链的两处深递归）。

生成链深语料库文件：

1) feat_api/.../RecursionChainLab.ets —— recursionChainStress：for 循环体内
   CHAIN_STATEMENTS 条布尔短路链语句（每条 CHAIN_TERMS_PER_STATEMENT 个比较）。
   每个短路比较（&&）编译为一个条件跳转 ≈ 一个基本块，循环头前驱包含循环尾
   （latch），工具链冷缓存下沿前驱链收集变量（CodeBlock.get_all_prev_cbs_var2val）
   时递归深度 ≈ 基本块数，旧递归实现爆栈阈值约 2950 块。
   形态要点：
   - 巨型布尔表达式（而非数千条 if 语句）：绕过 ArkTS 单函数控制流分析约 1400 条
     语句的上限（"The containing function or module body is too large"）；
   - 每条链内比较只用 2 个常量交替（(x > 0) / (x < 9)）：大量去重常量会让 DCE 的
     逐块 use-vars 集合并集退化为 O(块数x集合大小)；交替防编译器折叠同条件连续跳转；
   - 单条链上限约 700-800 项（900 项触发编译器 Unknown Error），默认 8x600=4800 项。

2) entry/.../RecursionNestLab.ets —— recursionCloneStress：NEST_DEPTH 长成员访问链
   （递归 interface 类型，编译器放行任意长度）。FIELD 参数经拷贝传播逐级替换后
   ref_base 链深 ≈ NEST_DEPTH，触发参数图克隆（AsmArg.clone）的深递归
   （旧实现阈值约 2950 层）。运行时以参数守卫保证链不可达。
   不可行形态归因（详见 docs/BENCHMARK.md 递归压力节）：
   - Record/递归 interface 嵌套对象字面量：arkts-no-untyped-obj-literals / 类型
     比较器约 12 层即"Excessive stack depth"；
   - 嵌套数组字面量（含逐级变量链）：es2abc 切成约 11 层块用存储指令链接，
     AsmArg 深度恒约 12；
   - 嵌套构造调用：语义分析不把构造参数链接进对象字段。

用法：python3 tools/gen_recursion_stress.py   （在 ohosVulDetect 子模块根目录执行）
      python3 tools/gen_recursion_stress.py --chain-terms-per-statement 200 --nest-depth 200   # 小规模试点
生成后：链库由 feat_api pages/lang/RuntimeDemo.ets 挂载；嵌套库由 entry pages/Index.ets
挂载（均防 tree-shake 并做运行时验证）。
"""
import argparse
import pathlib

HEADER = "// 本文件由 tools/gen_recursion_stress.py 生成，勿手改。"
CHAIN_LAB_PATH = (
    pathlib.Path(__file__).resolve().parent.parent / "feat_api/src/main/ets/pages/lang/RecursionChainLab.ets"
)


def gen_chain_lab(chain_statements: int, chain_terms_per_statement: int) -> str:
    # 巨型布尔短路链（每项一个条件跳转≈一个基本块）。要点：
    # - 巨型表达式而非数千条 if：绕过单函数约 1400 条语句的控制流分析上限；
    # - 每条链仅 2 个常量交替：大量去重常量会让 DCE 的 use-vars 逐块并集退化；
    # - 单条链上限约 700-800 项（900 触发编译器 Unknown Error 00308018）。
    # 历史代价备注：CopyPropagation.invalidate_propagated_reads 曾按全表扫描实现，
    # 大方法呈平方级（基线实验证明主因是 ovd 既有语料而非本链）；2026-09-09 已改
    # _read_value_keys 索引化（行为等价），含本链的完整 app 主流程 93.2 -> 15.7 分钟。
    total_terms = chain_statements * chain_terms_per_statement
    lines = [
        HEADER,
        "// 逆向工具链递归深度压力语料之一：基本块链深（详见 tools/gen_recursion_stress.py）。",
        f"// recursionChainStress：{total_terms} 个比较的布尔短路链（{chain_statements} 条语句 x "
        f"{chain_terms_per_statement} 项，仅 2 个常量交替），约 {total_terms} 个基本块，",
        "// 触发跨基本块变量收集（get_all_prev_cbs_var2val）的深递归；旧实现阈值约 2950 块。",
        "export function recursionChainStress(x: number, n: number): number {",
        "  let acc = 0;",
        "  for (let i = 0; i < n; i++) {",
    ]
    flag_names = []
    for statement_index in range(chain_statements):
        flag_name = f"flag{statement_index}"
        flag_names.append(flag_name)
        terms = " && ".join(
            ("(x > 0)" if i % 2 == 0 else "(x < 9)") for i in range(chain_terms_per_statement)
        )
        lines.append(f"    const {flag_name} = {terms};")
    lines += [
        f"    if ({' || '.join(flag_names)}) {{ acc += 1; }}",
        "  }",
        "  return acc;",
        "}",
        "",
    ]
    return "\n".join(lines) + "\n"


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--chain-statements", type=int, default=8, help="布尔短路链条数")
    parser.add_argument(
        "--chain-terms-per-statement", type=int, default=600, help="每条短路链比较项数（单条上限约 700-800）"
    )
    args = parser.parse_args()
    CHAIN_LAB_PATH.write_text(gen_chain_lab(args.chain_statements, args.chain_terms_per_statement), encoding="utf-8")
    print(f"written {CHAIN_LAB_PATH} (chain {args.chain_statements}x{args.chain_terms_per_statement})")


if __name__ == "__main__":
    main()
