# ohosVulDetect 基准测试 App — 构建与使用手册

多模块 HarmonyOS 基准应用：① 广覆盖 API/ArkUI/语言特性，作为逆向工具反编译准确性语料；
② 预埋带标签漏洞 + 安全孪生（groundtruth/manifest.json），作为检测基准。

## 当前基线速查（数字随语料演进，历史轮记录仅作过程存档）

| 维度 | 基线 | 事实源 |
|---|---|---|
| 指令覆盖 | 188/268（未用 80 条全归因，见 docs/history/BENCHMARK_ROUNDS.md 各轮与 docs/ohos.md §5.1） | check_opcode_coverage.py |
| 组件覆盖 | 112/137（2026-09-21 since-26 回补 7 项 + API26 试探页 5 项；剩余 25 见 history 当轮归因） | check_corpus_coverage.py |
| Kit 覆盖 | 40/103（IPCKit 已显式 import；剩余 63 个按服务可用性判为 HMS/专用环境侧，静态面无法完全排除类似 IPCKit 的个案） | check_corpus_coverage.py |
| @ohos 直连 | 38/447（直连两批：legacy 旧 API/工具库 + 设备状态/UI 工具库） | check_corpus_coverage.py |
| 漏洞/孪生 | 91 + 91（manifest 182 条，双向一致；含跨模块 XMOD 4 对） | groundtruth/manifest.json |
| 评分 | F1=1.000（91 对口径实测，TP=91 FN=0 FP=0 TN=91） | score_output.py |
| feat_api 路由页 | 78（api 51 / ui 20 / lang 7 + Index） | main_pages.json |
| 孪生 FP 门禁 | FAIL=0（call 级同形 WARN 为设计内） | check_twin_fp.py |
| 字符串应力门禁 | 207/207 + LITERALS 面 OK | check_string_stress.py |
| 门禁工作流 | manifest / twin_fp / sync_pages / 生成器确定性 / py 语法 / 条目数 | .github/workflows/gates.yml |

> 语料设计 checklist：见 AGENTS.md「新增内容 checklist」节（单源，勿在此重复维护）。

## 结构

| 模块 | 类型 | 内容 |
|---|---|---|
| entry | entry HAP | 壳：拉起两个 feature（跨 HAP startAbility） |
| feat_api | feature HAP | 良性语料路由页 78（api 51 / ui 20 / lang 7 + Index，见基线速查表） |
| feat_vuln | feature HAP | 漏洞分类页 28（26 个 cat- 页 + Index + Backdoor）+ BackdoorAbility(exported, ovd://backdoor) + libentry.so |
| lib_common | HAR | Logger / DemoItem / Runner + XMOD HAR 漏洞面（常量编入每个依赖方 HAP abc） |
| lib_shared | HSP | 静态/动态 import 目标 + XMOD HSP 漏洞面（独立 abc） |

每个模块编译为独立 `ets/modules.abc`；`.app` = 3 hap + 1 hsp + pack.info。

## 构建

> **坑（2026-09-21）**：绕过 build.py 直调 `hvigorw` 时必须把 DevEco 自带 node 前置到 PATH
> （`export PATH=/Applications/DevEco-Studio.app/Contents/tools/node/bin:$PATH`）——系统
> homebrew node v26.5.0 已移除 `fs.rmdirSync(..., {recursive})`，hvigor 的
> BuildNativeWithNinja 清理步骤会报 00308018 TypeError（build.py 不受影响，它自动前置）。

**推荐：一键脚本（自动设置工具链环境）**

```bash
python3 build.py                    # 全量构建：api26+api24 双 SDK × release+debug 双模式（4 变体全出，默认）
python3 build.py --sdk api26        # 仅 API 26（SDK 26.0.0 全量语料），双模式
python3 build.py --sdk api24        # 仅 API 24（6.1.1(24)，旧模拟器镜像安装用）
python3 build.py --mode release     # 仅 release（ArkGuard 混淆），双 SDK
python3 build.py --mode debug       # 仅 debug（不混淆）
python3 build.py --clean            # 构建前清理（改混淆规则/SDK 后建议使用；--sdk 与 --mode 可自由组合）
```

仅 3 个可选参数；工具链路径默认 `/Applications/DevEco-Studio.app`，可用环境变量 `DEVECO_STUDIO_HOME`/`DEVECO_SDK_HOME` 覆盖。

**等价手动命令**

```bash
export PATH=/Applications/DevEco-Studio.app/Contents/tools/{node,ohpm}/bin:$PATH
export DEVECO_SDK_HOME=/Applications/DevEco-Studio.app/Contents/sdk
HV=/Applications/DevEco-Studio.app/Contents/tools/hvigor/bin/hvigorw

ohpm install --all
$HV --no-daemon assembleHap --mode module -p product=<default|api24> -p buildMode=<release|debug>
$HV --no-daemon assembleApp --mode project -p product=<default|api24> -p buildMode=<release|debug>
```

（hvigor 强制要求名为 "default" 的 product 存在，default 即 api26；`--sdk api26` 内部即传 `product=default`）

产物统一收集到 `build/out/`，文件名区分 SDK 与模式：`ohosVulDetect-<sdk>-<mode>-unsigned.app` 与
各模块 `<模块>-<sdk>-<mode>-unsigned.{hap|hsp}`；hvigor 原始产物在 `build/outputs/<product>/` 与
`*/build/<product>/outputs/default/`（.har/.tgz 中间产物不收集）。

### ArkGuard 混淆（release 默认开启）

各模块 `obfuscation-rules.txt` 当前生效：`-enable-property-obfuscation` + `-enable-toplevel-obfuscation`。
以下两项**实测会导致运行时崩溃**（2026-08-29，模拟器 6.1.1(24) 动态验证），故默认关闭、留有证据注释：

- `-enable-filename-obfuscation`：多包（HAP×3 + HSP）各自独立改写 record 路径，跨包模块解析 `SyntaxError`，进程启动即退（exit 254）；
- `-enable-export-obfuscation`：HSP 导出名跨包映射不一致，`&lib_shared/Index& does not provide an export name 'b1'`，同样 SyntaxError。

混淆实测结论（模拟器全量遍历 + 逆向工具验证）：
- 混淆 release 包运行行为与 debug 完全一致（feat_api 52✅/9❌ 同一组环境性失败；feat_vuln 36✅/4❌）；
- 逆向工具对混淆包完全兼容（NOT MODULE_ANALYZED=0、UNKNOWN ops=0），方法名/record 路径保留（export/filename 关闭所致），字符串字面量不受混淆影响；
- 混淆语料基准分（v2）：TP=51 FN=1 FP=0 TN=7（P=1.000/R=0.981/F1=0.990）；
  唯一 FN 为 property 混淆改写 JSON 对象字面量属性名（`idcard`），属"困难模式"预期效果。

## 模拟器（CLI，无需 IDE）

```bash
E=/Applications/DevEco-Studio.app/Contents/tools/emulator/Emulator
$E -license accept
$E -imageList -deviceType phone -downloaded false
$E -install -deviceType phone -osVersion "HarmonyOS 6.1.1(24)"
$E -create ovdbench -deviceType phone -osVersion "HarmonyOS 6.1.1(24)"
$E -start ovdbench -noWindow          # 前台可去掉 -noWindow
HDC=/Applications/DevEco-Studio.app/Contents/sdk/default/openharmony/toolchains/hdc
$HDC file send build/out/ohosVulDetect-api24-release-unsigned.app /data/local/tmp/ohosvuldetect.app
$HDC shell "bm install -p /data/local/tmp/ohosvuldetect.app"      # 模拟器接受未签名 debug 包
$HDC shell "aa start -a EntryAbility -b com.koki.VD"
$HDC shell "snapshot_display -f /data/local/tmp/s.jpeg" # 截图
$E -stop ovdbench
```

自动化遍历脚本：`tools/emulator_sweep.py`（用法见文件头注释）。

## 逆向工具输出 + 基准评分

```bash
cd <逆向工具仓库根>
PYTHONHASHSEED=0 .venv/bin/python examples/dis_demo.py ohosVulDetect/build/out/ohosVulDetect-api26-release-unsigned.app
python3 ohosVulDetect/groundtruth/check_manifest.py                                   # manifest↔源码一致性
python3 ohosVulDetect/groundtruth/score_output.py test.out ohosVulDetect/build/out/ohosVulDetect-api26-release-unsigned.app
```

### 首轮基线（2026-08-29，API26 debug 包）

> 历史快照，现行基线以「当前基线速查」为准。

- 2143 方法 / 129 records，`NOT MODULE_ANALYZED=0`，`UNKNOWN tac_opstr_set=0`
- 评分（v2 评分器，未混淆 debug 语料）：TP=51 FN=0 FP=0 TN=7，P/R/F1=1.000（函数/record 级信号定位）
  注：v2 口径——布尔/数字常量按 IR 文本形态归一化、调用链全 token AND+引号形态、
  NET-004/005 用 IR 谓词（return TRUE / emptyarray{}）、SECRET-005 标记 skip 不计分
- 内置 VulDetector 命中：`setWebDebuggingAccess(true)`、`runJavaScript`、`http://*`（NET-001/PRIV-001/CONF-001）
- IR 抽查逐操作对应源码：Math.random 链 / SQL 模板串 concat / Web 属性链（`Web."javaScriptProxy"({...methodList:"getToken"...})`、`Web."mixedMode"(MixedMode.All)`、`Web."fileAccess"(TRUE)`）
- native 密钥只在 libentry.so 可见（abc 级负样本成立）；`Math.random` 在 IR 中为 `Math."random"`
- 全量 may-ld-from（未解析 lexenv）= 235，可作为 SA 简化能力基线

### Sendable 指令覆盖实验室（2026-09-03）

目的：让语料覆盖全部 14 条 `callruntime.*sendable*` 指令（含 5 条 wide 变体）。
代码：`feat_api/src/main/ets/concurrent/SendableLab.ets`（8 种形态，文件内注释逐条对应指令）+
`SendableWideLab.ets`/`SendableWideData.ets`（压力生成物，`tools/gen_sendable_stress.py` 生成，勿手改）+
页面 `pages/api/SendableDemo.ets`（入口 `api-sendable`）。

指令 → 触发源码形态（es2panda 实证，@Sendable → "use sendable" 上下文；@Concurrent 不产生 sendable 指令）：

| 指令 | 触发形态 |
|---|---|
| definesendableclass | 定义 `@Sendable class`（func_main_0） |
| newsendableenv / widenewsendableenv | 模块顶层有 @Sendable 类（env 大小 >127 用 wide） |
| stsendablevar / widestsendablevar | func_main_0 把 @Sendable 类存入 env 槽位（槽位号=类定义顺序） |
| ldsendablevar / wideldsendablevar | 任意函数按名引用本模块 @Sendable 类 |
| ldsendableclass | @Sendable 类方法内引用自身类（如 `clone(): Self { return new Self(...) }`） |
| ldsendableexternalmodulevar / wide | @Sendable 函数内访问普通 import 绑定 |
| ldlazysendablemodulevar / wide | @Sendable 函数内访问 `import lazy` 绑定（API≥12） |
| ldsendablelocalmodulevar / wide | @Sendable 函数内访问本模块导出顶层变量（API≥18；本工程 API26） |

wide 阈值统一为 MAX_INT8=127（不是 255）。压力规模：136 个 @Sendable 类 + 136 eager + 12 lazy import + 136 个本模块 `let` 变量（索引从 0 数起的取阈值+8 余量；lazy 索引按名字母序落在全部 eager 之后、必为 wide，故仅需少量，且绑定名用 `z*` 前缀保证排在 `w*` 之后）。

坑（release 混淆构建实测）：
- 未被页面 import 的 .ets 会被 tree-shake，新文件必须接入页面；
- 本模块 `export const` 在 release 会被常量折叠成字面量，wide localmodulevar 随之消失——生成器用 `export let`；
- `taskpool.execute` 只接受 `@Concurrent` 函数；`@Sendable` 函数在 UI 线程直接调用即可。

工具侧缺口（截至 2026-09-03，feat_api hap 实测 823 条 `!UNKNOWN TAC`，全部来自下述 5 个指令名）：
`ldsendableclass`、`ldsendablelocalmodulevar`/`wideldsendablelocalmodulevar`、
`ldlazysendablemodulevar`/`wideldlazysendablemodulevar`（`NACtoTAC.py` dispatch 表缺项；
其余 9 条 sendable 指令已有 handler）。语料采纳前需先补齐工具支持，否则 UNKNOWN 门禁不通过。

## 语言特性页与 ArkTS 语法限制（2026-09-03，lang-generator/ops/callforms + lang-runtime）

lang 页累计覆盖 54 条新指令（全 app 104→158/267）。关键手段与限制：

- **`.ts` 文件同模块编译**：arkts-* 严格检查只作用于 `.ets`；generator、for-in、Symbol、
  Function.apply、解构声明等被禁特性放在 `pages/lang/TsFeatures.ts`（与 .ets 同目录、进同一
  modules.abc），页面 orchestrate 调用。非元组 spread 在 .ts 中同样被禁，需元组类型。
- **运行时与编译期不一致**：`.ts` 里的 `o[m]()` 动态方法调用能编译出 `callthis1`（非 withname），
  但 ArkTS 运行时抛 TypeError——此类"仅编译覆盖"函数页面以 `typeof fn` 引用防 tree-shake，不得调用。
- **本工具链（SDK26 es2abc 部分求值）不可达指令**：`createregexpwithliteral`（正则字面量被降级为
  `new RegExp(字符串)`）、`closeiterator`、`getresumeoffset`、`jeq*/jstricteq*` 比较跳转族
  （一律拆成 `eq/ne + jeqz/jnez`）、`ldsendableclass` 之外见上文 sendable 一节。
- super 属性语义：`super.x = v` 无 setter 时落到 this 自有属性；`super.x` 读走原型链（类字段不在
  原型上，常得 undefined），demo 里读回用 `this.x`。
- 部署坑：`hdc file send` 对不存在的本地路径可能静默"成功"（返回码不可靠），重装验证前务必比对
  `md5sum`；同 versionCode 覆盖安装可能不生效，建议先 `bm uninstall`。

lang-runtime 页（RuntimeHelpers.ts + LexWideLab.ets）追加 20 条，均为独立 agent 实证后落地：

- 私有字段全家族（create/define/st/ldprivateproperty）、callinit、definefieldbyvalue（计算键字面量）、
  copydataproperties（对象展开）、createobjectwithexcludedkeys（解构 rest）、delobjprop、
  ldsuperbyvalue/stsuperbyvalue（基类带索引签名 + super[k]）、supercallspread（元组 spread 调 super）、
  callthisrange（函数数组取出 + ≥4 参调用）、gettemplateobject（tagged template）、
  setobjectwithproto（字面量 __proto__ 键）、tonumber（一元 +）、throw.patternnoncoercible、
  debugger（release 会被剥离，仅 debug 语料可见）、wide.newlexenv/wide.ldlexvar/wide.stlexvar。
- 词法环境 wide 压力（tools/gen_lexwide_stress.py 生成 LexWideLab.ets）三个必要条件：
  ① 单一作用域 >127 个被捕获变量（仅声明不捕获不占槽位）；② 值必须从参数派生——字面量 const
  会被 release 常量折叠进箭头函数，捕获整个消失；③ 箭头须经数组/循环间接调用——直接调用会被
  release 内联，词法环境随之消除。
- 运行时可达性区分：`fs[0](1,2,3,4)`（函数数组动态调用，运行时合法）vs `o[m]()`（对象动态方法
  调用，运行时 TypeError）——后者只能做编译覆盖。

## 模拟器运行（6.1.1(24) 镜像）

> 历史首轮遍历快照（52✅/9❌ 等），现行基线以「当前基线速查」与 history 归档最新轮为准；
> ❌ 的环境类处置口径见 history 归档〈❌ 最小化轮〉。

- deeplink `ovd://backdoor` 实际拉起 BackdoorAbility；native xorNative/vulnCopy 运行无崩溃

## 已知事项

- **工具链版本（2026-09-07 核对）**：本机 DevEco Studio 26.0.0（SDK 26.0.0.32 **Beta2**，模拟器镜像 7.0.0.32）；
  官方 2026-08-29 已发布 26.0.0 Release（DevEco Studio 26.0.0.821 / SDK 26.0.0.105）——按 AGENTS 优先级待升级，
  升级后须重跑全量构建 + 覆盖率（es2abc 行为差异可能增减指令，变化须归因记录）+ sweep 回归；
- `backgroundModes` 已从 module.json5 schema 移除（SDK 26），后台任务 demo 运行时 401；
- DataShareExtensionAbility 在 26.0.0 Beta SDK 未公开，IPC-003 改为 TCP 后门无认证用例；
- SDK 26 API 面变化清单（本项目适配记录）：CoreFileKit 导出 `fileIo`（非 fs）、`rcp.createSession`（非 new Session）、
  emitter 事件 id 为 string、`RdbPredicates.limitAs`、`Curve.Ease/EaseOut/Friction`、`animateTo` 需经 UIContext、
  `@Provider/@Consumer` 需带参、asset.Value 仅 boolean|number|Uint8Array、`display.on(type, cb)` 2 参。



## 现行待办

| 事项 | 阻塞点 | 验收 |
|---|---|---|
| 工具链 Beta2 → Release 升级 | 用户决策（2026-09-08 暂缓） | 升级后重跑覆盖率归因 + 全量 sweep + 评分 |
| ohre_dev 上层仓 snapshot+gitlink | 待 koki 提交 | 上层仓同步 |

> API26 双环境已于 2026-09-21 恢复（用户经 DevEco GUI 重下镜像并启动 bench26），since-26 组件
> 回补与 fileio/zlib 回验已完成（见 history 归档当轮记录）。

## 轮记录索引


> 35+ 轮语料演进的完整记录已归档至 [docs/history/BENCHMARK_ROUNDS.md](history/BENCHMARK_ROUNDS.md)（按日期正序）。
下表为时间线索引；各轮的「当时基线」数字已被快查表取代，勿当现行值引用。


| 日期 | 轮记录 |
|---|---|
| 2026-09-04 | 巨型参数 wide 与杂项形态（2026-09-04，lang-runtime 扩展） |
| 2026-09-04 | 运行时可达性收口（2026-09-04 第二轮，release 171/267） |
| 2026-09-04 | 运行时可达性边界补充（2026-09-04 第三轮实测） |
| 2026-09-04 | 指令收口 P1（2026-09-04 第四轮，release 175 / 快照并集 178/267） |
| 2026-09-04 | API26 模拟器测试矩阵与 API24 差异（2026-09-04） |
| 2026-09-06 | 第二轮深挖 + 语法糖语料页（2026-09-06，release 176 / 快照并集 179/267） |
| 2026-09-06 | 第三轮假设 + 模拟器全面回归（2026-09-06，并集维持 179/267） |
| 2026-09-06 | 第四轮：es2abc 旗标与源码级归因（2026-09-06，并集 179→180/267） |
| 2026-09-06 | 模拟器全面回归第二轮：修复与终版基线（2026-09-06） |
| 2026-09-07 | 第五轮：wide 变体专项收口（2026-09-07，并集 180→183/267） |
| 2026-09-07 | 第六轮：打包形态扩展——卡片 widgets.abc / rawfile abc / routerMap HSP（2026-09-07，并集 183→187/267） |
| 2026-09-08 | 递归深度压力语料（2026-09-08，feat_api lang + tools/gen_recursion_stress.py） |
| 2026-09-10 | 字符串边界语料（2026-09-10，feat_api lang + tools/gen_string_stress.py） |
| 2026-09-11 | 红队第二轮：方法名注入与 literal 伪造（2026-09-11，字符串解析修复后） |
| 2026-09-11 | 组件覆盖第八轮：官方主推组件 + 高级组件库抽样（2026-09-11，feat_api ui ×4 页） |
| 2026-09-12 | 红队第二轮工具链收口与残留口径（2026-09-12） |
| 2026-09-12 | 组件覆盖第九轮：安全控件/全局弹窗/离屏绘制（2026-09-12，feat_api ui ×3 页） |
| 2026-09-12 | Kit 覆盖第十轮：UserAuthenticationKit + FormKit 深化（2026-09-12） |
| 2026-09-12 | 孪生全覆盖轮（2026-09-12，53/53 漏洞全部配安全孪生） |
| 2026-09-12 | 鸿蒙特色漏洞族（2026-09-12，+7 对 vuln/twin，120 条） |
| 2026-09-13 | 简化轮：孪生统一/注册单源/生成物自解释（2026-09-13） |
| 2026-09-13 | 特殊字符串缺口轮：空串/NUL/C0 全扫 + 跨版本编译测试（2026-09-13，166 用例） |
| 2026-09-13 | 指令续行伪装轮：inst-mimic 组（2026-09-13，186 用例） |
| 2026-09-14 | tab 前缀续行轮：A1 缺陷复现 + 操作数面 round-trip 门禁（2026-09-14，200 用例） |
| 2026-09-14 | 衡量自动化轮：对账脚本 + sweep 全量遍历 + lang 页自检（2026-09-14） |
| 2026-09-14 | Kit 覆盖第十一轮：Contacts/Calendar/AVSession/Camera + 漏洞语料说明文档（2026-09-14） |
| 2026-09-15 | 歧义矩阵轮：14 组合系统化 + 函数拆分 + literal 面门禁（2026-09-15） |
| 2026-09-15 | Kit 覆盖第十二轮：MediaLibrary/Cert/Input/A11y（2026-09-15） |
| 2026-09-15 | P2 落地轮：歧义矩阵验证 + 漏洞规则多样化 + Kit 批次三 + compare_versions（2026-09-15） |
| 2026-09-15 | ❌ 最小化轮：12 项失败逐条归因与处置（2026-09-15） |
| 2026-09-19 | 全量 sweep + 孪生 FP 门禁 + 规则形态扩量 + 新攻击面轮（2026-09-19） |
| 2026-09-19 | 工具链闭环 + 组件收尾 + sweep 采集修复轮（2026-09-19） |
| 2026-09-20 | 跨模块漏洞分布 + 深链参数校验 + Kit 批三轮（2026-09-20） |
| 2026-09-21 | @ohos 直连/旧 API 面 + 指令候选探针收口 + CEVT 族 + 语言特性收尾轮（2026-09-21） |
| 2026-09-21 | 漏洞三新族 + IPCKit/IPC 本地面收尾轮（2026-09-21 第二轮） |
| 2026-09-21 | API26 双环境恢复 + since-26 组件回补 + API26 运行时验证轮（2026-09-21 第二轮） |
| 2026-09-21 | 组件缺口试探 + @ohos 直连第二批（2026-09-21 第三轮） |
