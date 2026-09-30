# GETTING-STARTED — 新人引导（了解鸿蒙、初次接触本项目）

> 读者假设：会 HarmonyOS/ArkTS 应用开发，没接触过字节码逆向。目标：10 分钟建立
> 项目全貌，知道去哪个文件查什么、跑哪三条命令。

## 一、这个项目是什么

多模块 HarmonyOS 应用，但**不是给人用的应用，而是一份考卷**：为 abc 逆向工具链
（独立仓库，以 submodule 挂载本仓库）提供三类测试材料——

1. **反编译准确性语料**：覆盖尽可能多的 ArkUI 组件、@ohos/Kit API 与方舟字节码指令，
   工具反汇编/反编译得越准，得分越高；
2. **漏洞评分基准**：源码里预埋带标签的漏洞 + 安全孪生（成对出现，孪生 = 与漏洞同形
   但无风险的安全版本），清单唯一事实源在 `groundtruth/manifest.json`；工具输出
   `test.out`，由 `groundtruth/score_output.py` 对答案打分（孪生必须不命中——误报与
   漏报同等计分）。规模以 manifest.json / corpus_meta.json 为准，文档不写死；
3. **不平衡 / 压力形态**：单 record 巨型模块（feat_heavy）、巨方法、字符串池密度失衡、
   方法名注入面等，考工具在极端输入下的鲁棒性。

## 二、30 秒技术底座（鸿蒙开发视角看逆向链路）

```
ArkTS 源码 → hvigor/es2abc 编译 → 每模块一个 modules.abc（方舟字节码）
          → 打包 HAP/HSP → 组装 .app（unsigned）
```

逆向工具读的就是 `.app`/`.hap` 里的 **abc 字节码**：反汇编（指令/寄存器/string 池）、
恢复函数边界、控制流、调用关系、字段读写。本项目已有实证结论（详见 docs/ohos.md §7）：

- **release 构建默认开 ArkGuard 混淆**（property+toplevel）：只改名标识符，字符串字面量
  原样保留 → 漏洞信号多为 token/字符串字面量，天然抗混淆；debug 构建完全不混淆，
  与 release 构成"同一程序 × 两种名称态"的天然对照组；
- **lib_common 是 HAR**：没有独立产物，源码编译进每个消费方模块的 abc；
  **lib_shared 是 HSP**：有自己的 modules.abc；
- 每次构建自动收集各模块 `nameCache.json`（混淆改名映射，官方还原坐标系）到
  `build/out/<artifact>.obfmeta/`。

## 三、模块地图

| 模块 | 类型 | 作用 |
|---|---|---|
| entry | HAP | 壳：五按钮跨 HAP 拉起 Api/Vuln/Heavy/OvdShared/CompFarm + 方法名注入语料 |
| feat_api | HAP | 反编译语料主模块：api-/ui-/lang- 前缀路由页 + 受限语言特性（页数以 main_pages.json 为准） |
| feat_vuln | HAP | 漏洞 + 孪生语料 + 分类页 + cpp/libentry.so |
| feat_heavy | HAP | 指令农场：单 record 巨型 abc 压力样本（生成语料勿手改，仅 api26） |
| feat_compfarm | HAP | 组件 API 缺口补齐农场（仅 api26） |
| lib_common | HAR | 公共脚手架（DemoScaffold/Logger 等），编译进各消费方 |
| lib_shared | HSP | 静态/动态 import 目标，含跨模块污点链源 |

## 四、按"想做什么"索引关键文件

| 想做什么 | 去哪里 |
|---|---|
| 知道拿到的东西是什么构成 | `corpus_meta.json`（机器可读画像：模块/指令量/份额/混淆画像）+ 产物旁 `.meta.json` / `.obfmeta` sidecar |
| 给工具输出评分 | `python3 groundtruth/score_output.py <test.out> <.app>`，答案 = `groundtruth/manifest.json` |
| 看漏洞清单 | `groundtruth/manifest.json`（唯一事实源）；人类可读总览 `docs/VULNS.md` |
| 修改语料/页面 | 先读 `AGENTS.md`（checklist + Mandatory 门禁），一切数字先查 `docs/BENCHMARK.md` |
| 构建后全量自检 | `python3 tools/verify.py`（--fast 为秒级快门禁） |
| 查鸿蒙能力全景/指令可达性归因 | `docs/ohos.md` |
| 看构建/部署踩坑记录 | `docs/BENCHMARK.md` 对应小节 |

## 五、三条标准使用路径

```bash
python3 build.py            # ① 构建：build/out 4 变体 + build/samples 两档梯度
python3 tools/verify.py     # ② 自检：全部质量门禁一条命令
python3 groundtruth/score_output.py test.out build/out/ohosVulDetect-api26-release-unsigned.app
                            # ③ 评分：对逆向工具的输出打分
```

## 六、新人最常踩的 5 个认知坑

1. **文档不写死数字**：页数/漏洞数/覆盖率随语料演进必变，一切以 `corpus_meta.json` 与
   `docs/BENCHMARK.md` 为准（AGENTS.md 有意不记数字，防漂移）；
2. **包体积 ≠ 分析工作量**：debug 外层 zip 零压缩、abc 更大但指令量与 release 相同；
   农场模块高压缩比——精确构成只看 corpus_meta.json；
3. **feat_heavy / feat_compfarm 只存在于 api26 变体**，api24 包小是模块少，不是语料缩水；
4. **漏洞必然成对**（`OVD-XXX-NNN` + 孪生 `…S`）：新增漏洞若不配套安全孪生并通过
   孪生隔离门禁，会被 verify 拒绝；
5. **公开仓库任何内容不得出现私有工具链名称**，统一用「逆向工具/工具链」表述
   （含提交信息与文件名）。
