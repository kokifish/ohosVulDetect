# AGENTS.md — ohosVulDetect 基准测试 App

## 项目目标

多模块 HarmonyOS 应用，是 ohre 反编译工具链（父仓库 ../ohre）的测试语料与评分基准：
① 覆盖尽可能多的鸿蒙组件与 ArkTS 汇编指令（反编译准确性语料）；
② 预埋带标签漏洞 + 安全孪生（groundtruth/manifest.json），作为漏洞检测评分基准。

## 文件结构与层级

- entry（entry HAP，壳）→ feat_api / feat_vuln（feature HAP，独立 modules.abc）→ lib_common（HAR）→ lib_shared（HSP）。
- feat_api：良性 API 页 `pages/api/`、UI 页 `pages/ui/`、语言特性页 `pages/lang/`（含 `TsFeatures.ts`/`RuntimeHelpers.ts`——arkts-* 严格 lint 只查 .ets，受限特性放 .ts 仍进同一 abc）。
- feat_vuln：13 类漏洞页 + BackdoorAbility + libentry.so；groundtruth/：manifest.json + check_manifest.py / score_vs_ohre.py / compare_src_ir.py / extract_ir_records.py。
- tools/：gen_sendable_stress.py、gen_lexwide_stress.py（生成 SendableWide*/LexWideLab.ets，勿手改）、emulator_sweep.py。
- docs/BENCHMARK.md：构建/评分/模拟器全流程手册与实测结论（不可达指令清单、各类坑），改语料前先读。
- 新页必须同时注册 `model/ApiRegistry.ets` 与 `resources/base/profile/main_pages.json`，否则被 tree-shake 静默丢弃。

## 构建与测试过程（改动后必做）

```bash
python3 build.py --product all          # 双 product release（default=API26 语料 / emulator=模拟器）
python3 groundtruth/check_manifest.py   # groundtruth 双向一致
```

1. 指令覆盖验证：父仓库 `ark_disasm <模块>/build/<product>/intermediates/loader_out/default/ets/modules.abc out.dis`，
   与 isa.yaml 全集比对（当前全 app 158/267，剩余均为实测不可达或 deprecated，清单见 docs）。
2. 评分：父仓库 ohre 跑出 test.out 后 `python3 groundtruth/score_vs_ohre.py test.out build/outputs/default/*.app`。
3. 模拟器运行时验证：`python3 tools/emulator_sweep.py feat_api|feat_vuln`（需先启动 ovdbench 模拟器）；
   基线 feat_api 52✅/9❌、feat_vuln 36✅/4❌（失败均为环境因素）。

## 关键约定与坑

- 新语言形态先小规模编译实证再落正式代码；release 会常量折叠本模块 const、内联单次调用闭包——防折叠用参数派生值，防内联用数组/循环间接调用（见 gen_lexwide_stress.py 注释）。
- 部署坑：`hdc file send` 对不存在路径可能静默"成功"，装包前后必须比对 md5sum；同 versionCode 覆盖安装可能不生效，先 `bm uninstall`。
- 构建产物（build/、oh_modules/、.hvigor/ 等）均已 gitignored，禁止提交；生成文件只能改生成器再重新生成。
- 未经明确指示不 commit/push；提交用 Conventional commits（如 `feat(benchmark): ...`）。
