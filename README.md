# ohosVulDetect — HarmonyOS 逆向基准语料

多模块 HarmonyOS 应用，用作 ArkTS 逆向工具/工具链的测试语料与评分基准：

1. 广覆盖鸿蒙组件、Kit 与 ArkTS 汇编指令（反编译准确性语料）；
2. 预埋带标签漏洞 + 安全孪生（`groundtruth/manifest.json`），作为检测评分基准（F1 口径）；
3. `feat_heavy` 指令农场（仅 api26 变体），作为超大 abc 输入与模块不均衡压力样本。

## 外部消费者快速入口

| 目标 | 产物 / 命令 |
|---|---|
| 反编译准确性 + 指令覆盖评测（正式语料） | `build/out/ohosVulDetect-api26-release-unsigned.app` |
| 漏洞检测评分 | `python3 groundtruth/score_output.py <工具产出的 test.out> <.app 路径>` |
| 超大输入 / 模块不均衡压力 | 同 api26-release（feat_heavy 农场）；record 级不均衡度见 corpus_meta.json |
| 小包高 workload | `build/out/ohosVulDetect-api24-release-unsigned.app`（无农场模块，包最小） |
| 档位梯度采样 | `build/samples/ohosVulDetect-sample-{small,medium,heavy}.app`（`tools/build_samples.py`） |

## 必读事实（避免误判）

- **feat_heavy / feat_compfarm 仅存在于 api26（product=default）变体，api24 变体没有**——api24 包小是模块少，不是农场被压缩。
- **包体积 ≠ 分析工作量**：release `.app` 外层 zip 正常压缩，debug `.app` 条目零压缩存储且 debug abc 本身更大；农场指令高度重复、压缩比远高于普通代码。按包大小推指令量必错，精确构成读 [corpus_meta.json](corpus_meta.json)。
- **产物自描述**：`build/out/`、`build/samples/` 中每个工件旁都有同名 `.meta.json` sidecar（构建时为基础版，跑 `python3 tools/gen_corpus_meta.py` 后升级为含每模块指令/函数/record 分布的全量版）。
- 产物内 `pack.info` 只有打包管道信息，不含语料画像。

## 事实源与文档

| 文件 | 内容 |
|---|---|
| `corpus_meta.json` | 机器可读语料画像：各变体模块构成、指令/函数/份额、feat_heavy record 级分布、压缩画像、推荐用法。实测于构建产物，`python3 tools/gen_corpus_meta.py` 刷新、`--check` 防漂移 |
| `docs/BENCHMARK.md` | 唯一手册与基线：构建/评分/模拟器/各专题教训，一切数字以此为准 |
| `groundtruth/manifest.json` | 漏洞 + 安全孪生清单唯一事实源（`groundtruth/check_manifest.py` 双向门禁） |
| `AGENTS.md` | 仓库结构、checklist、门禁工作流（面向修改本仓库的人） |

## 构建

```bash
python3 build.py    # 标准 4 变体（api26/api24 × release/debug）+ 三档样本 → build/out/ 与 build/samples/
```
