# AGENTS.md — ohosVulDetect 基准测试 App

## Rule

- 未经明确授权，不可 `git commit` 或 `push`，查看未提交代码用`git add .; git status -v`
- 提交用 Conventional commits（如 `feat(benchmark): ...`），保持最小 diff

## Goal

多模块 HarmonyOS 应用，用作 ArkTS 逆向工具链（如 ohre，独立仓库）的测试语料与评分基准：
① 覆盖尽可能多的鸿蒙组件与 ArkTS 汇编指令（反编译准确性语料）；
② 预埋带标签漏洞 + 安全孪生（groundtruth/manifest.json），作为漏洞检测评分基准。
成功标准：指令覆盖与 groundtruth 一致性持续可验证，且 App 在模拟器上运行正确。

## Structure

- entry（entry HAP，壳）→ feat_api / feat_vuln（feature HAP，各编译独立 modules.abc）→ lib_common（HAR）→ lib_shared（HSP）。
- feat_api：良性 API 页 `pages/api/`、UI 页 `pages/ui/`、语言特性页 `pages/lang/`（含 `TsFeatures.ts`/`RuntimeHelpers.ts`——arkts-* 严格 lint 只查 .ets，generator/for-in/Symbol 等受限特性放 .ts 仍编译进同一 abc）。
- feat_vuln：13 类漏洞页 + BackdoorAbility + libentry.so；lib_shared：静态/动态 import 目标。
- groundtruth/：manifest.json（漏洞标签）+ check_manifest.py / score_vs_ohre.py / compare_src_ir.py / extract_ir_records.py。
- tools/：gen_sendable_stress.py、gen_lexwide_stress.py（生成 SendableWide*/LexWideLab.ets，勿手改，改生成器再重新生成）、emulator_sweep.py。
- 深入阅读：docs/BENCHMARK.md（构建/评分/模拟器手册 + 不可达指令清单与各类坑），改语料前先读。
- 新页必须同时注册 `model/ApiRegistry.ets` 与 `resources/base/profile/main_pages.json`，否则被 tree-shake 静默丢弃。

## Mandatory

任何语料/页面/生成器改动必做以下回归：

```bash
python3 build.py --product all          # 双 product release（default=API26 语料 / emulator=模拟器变体）
python3 groundtruth/check_manifest.py   # groundtruth 双向一致，必须 OK
```

1. 指令覆盖验证：用 DevEco SDK 的 ark_disasm（`$DEVECO_SDK_HOME/default/openharmony/toolchains/ark_disasm`）
   反汇编 `<模块>/build/<product>/intermediates/loader_out/default/ets/modules.abc`，
   统计指令助记符与全集比对：`python3 tools/check_opcode_coverage.py --dump-dir compare_dis`
   （release 构建跑一次落快照，debug 构建再跑即 release∪debug 并集；全集取 ohre 开源仓库的 isa.yaml；
   当前 release 169/267、并集 172/267，剩余均为实测不可达或 deprecated，清单见 docs/BENCHMARK.md）。
2. 评分：由逆向工具（ohre）产出的 test.out 作为输入，`python3 groundtruth/score_vs_ohre.py test.out build/outputs/default/*.app`。
3. 模拟器运行时验证：启动 ovdbench 模拟器并 bm install 后 `python3 tools/emulator_sweep.py feat_api|feat_vuln`；
   基线 feat_api 52✅/9❌、feat_vuln 36✅/4❌（失败均为环境因素，如 socket 沙箱、未授权弹窗）。

## Conventions and gotchas

- 新语言形态先小规模编译实证（临时文件 + 反汇编确认指令出现）再落正式代码。
- release 优化：本模块 const 会被常量折叠、单次调用的闭包会被内联——防折叠用参数派生值、防内联用数组/循环间接调用（示例见 gen_lexwide_stress.py 注释）；wide 变体阈值是 127 不是 255。
- 部署坑：`hdc file send` 对不存在路径可能静默"成功"，装包前后必须比对 md5sum；同 versionCode 覆盖安装可能不生效，先 `bm uninstall`。
- 构建产物（build/、oh_modules/、.hvigor/、.cxx/、.idea/ 等）均已 gitignored，禁止提交。
