# AGENTS.md — ohosVulDetect 基准测试 App

## Rule

- 未经明确授权，不可 `git commit` 或 `push`，查看未提交代码用 `git add .; git status -v`
- 提交用 Conventional commits（如 `feat(benchmark): ...`），保持最小 diff
- 公开仓库任何内容（含提交信息、文件名）不得出现私有工具链名称，统一用「逆向工具/工具链」表述

## Goal

多模块 HarmonyOS 应用，用作 ArkTS 逆向工具链（独立仓库）的测试语料与评分基准：
① 覆盖尽可能多的鸿蒙组件与 ArkTS 汇编指令（反编译准确性语料）；
② 预埋带标签漏洞 + 安全孪生（groundtruth/manifest.json），作为漏洞检测评分基准。
成功标准：指令覆盖与 groundtruth 一致性持续可验证，且 App 在模拟器上运行正确。

## Structure（规模：29 api 页 / 9 ui 页 / 6 lang 页 / 13 漏洞类 53+7 孪生）

- entry（entry HAP 壳：Index 两按钮跨 HAP 拉起 feature）→ feat_api / feat_vuln（feature HAP，各编译独立 modules.abc）→ lib_common（HAR：DemoScaffold/Logger/DemoItem/Runner/Constants）→ lib_shared（HSP：静态/动态 import 目标）。
- feat_api：路由页 pages/api(29)、pages/ui(9)、pages/lang(6)；受限特性（generator/for-in/Symbol 等，arkts-* 严格 lint 只查 .ets）放 pages/lang 下 .ts/.js（TsFeatures.ts、RuntimeHelpers.ts、WideForms*.ts、GlobalAssign.js）仍编译进同一 abc；concurrent/ 与 workers/ 为非页源码。
- feat_vuln：vulns/ 12 类 46 个源文件 + web/（NativeBridge）；13 个分类页（Index.ets 内联 cat- 清单）+ Backdoor 页/Ability(exported, ovd://backdoor) + cpp libentry.so。
- groundtruth/：manifest.json（53 漏洞 + 7 孪生）；check_manifest.py（manifest↔源码一致性门禁）、score_output.py（对逆向工具 test.out 评分）、compare_src_ir.py（源码 vs IR 逐函数比对）、extract_ir_records.py（test.out 按 record 切分）。
- tools/：emulator_sweep.py（模拟器遍历，按 id 前缀 api-/ui-/lang-/cat- 自动发现页面，双 API 自适应）、check_opcode_coverage.py（指令覆盖统计，全集 = ISA_YAML 环境变量或 --isa-yaml 指向的 isa.yaml）；生成器 gen_sendable_stress.py / gen_lexwide_stress.py / gen_wide_stress.py → 生成物 SendableWide*、LexWideLab.ets、WideForms*、WideNs*（130 个 star-import 微模块）（均勿手改，改生成器再重新生成）。
- docs/BENCHMARK.md = 唯一手册与基线记录处（构建/评分/模拟器/不可达指令清单/部署坑），改语料前先读，一切数字以此为准。
- docs/ohos.md = 鸿蒙能力全景调研快照（组件/Kit/指令集/arkts-* 约束 + 参考来源）与本项目覆盖差距、改进优先级，语料扩展前先读。

## 新增内容 checklist

- feat_api 路由页：① 建页 → ② ApiRegistry.ets 加 DemoItem（id 必须带 api-/ui-/lang- 前缀，sweep 依赖前缀遍历）→ ③ main_pages.json 注册。缺 ②/③ 会被 tree-shake 静默丢弃。
- 仅被 import 复用的库式文件（如 LexWideLab.ets）：放 ets/ 下即可，无需注册。
- feat_vuln 漏洞：① vulns/ 建文件（`// VULN: OVD-XXX-NNN` 注释）→ ② 分类页接线 → ③ Index.ets cat- 清单 → ④ main_pages.json → ⑤ manifest.json 登记（detection 规则 + 孪生）→ ⑥ check_manifest.py 必须 OK。

## Mandatory（任何语料/页面/生成器改动必做）

```bash
python3 build.py                        # 全量 4 变体：api26/api24 × release/debug（api26=SDK26 正式语料，api24=6.1.1(24) 旧模拟器兼容）
python3 groundtruth/check_manifest.py   # groundtruth 双向一致，必须 OK
```

产物统一收集于 `build/out/`，文件名区分 `api26|api24 × release|debug`（如 `ohosVulDetect-api26-release-unsigned.app`；hvigor 原始产物按 product 名在 `build/outputs/` 下，default 即 api26）。

1. 指令覆盖验证：`python3 tools/check_opcode_coverage.py --dump-dir compare_dis`（默认全量构建已含 release+debug，构建后跑一次即得并集；当前覆盖率与不可达清单见 docs/BENCHMARK.md）。
2. 评分：`python3 groundtruth/score_output.py <逆向工具产出的 test.out> build/out/ohosVulDetect-api26-release-unsigned.app`。
3. 模拟器运行时验证：bm install 后 `python3 tools/emulator_sweep.py feat_api|feat_vuln`。
   各项基线数字与 ❌ 清单以 docs/BENCHMARK.md 最新记录为准（环境性失败如 socket 沙箱、未授权弹窗不算回退）。

## Conventions and gotchas

- 新语言形态先小规模编译实证（临时文件 + ark_disasm 反汇编确认指令出现）再落正式代码。
- release 优化：本模块 const 会被常量折叠、单次调用的闭包会被内联——防折叠用参数派生值、防内联用数组/循环间接调用（示例见 gen_lexwide_stress.py 注释）；wide 变体阈值是 127 不是 255。
- 部署坑（hdc file send 静默"成功"须比对 md5sum、同 versionCode 覆盖安装可能不生效先 bm uninstall）详见 docs/BENCHMARK.md 对应小节。
- 构建产物（build/、oh_modules/、.hvigor/、.cxx/、.idea/、compare_dis/ 等）均已 gitignored，禁止提交。
