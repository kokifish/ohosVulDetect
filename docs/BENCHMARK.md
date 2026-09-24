# ohosVulDetect 基准测试 App — 构建与使用手册

多模块 HarmonyOS 基准应用：① 广覆盖 API/ArkUI/语言特性，作为逆向工具反编译准确性语料；
② 预埋带标签漏洞 + 安全孪生（groundtruth/manifest.json），作为检测基准；
③ feat_heavy 极端大单模块指令农场（biz 指令集中于单一 record，record 级不均衡样本），作为超大 abc 输入压力样本。

## 当前基线速查（数字随语料演进，一律以本表与脚本实测为准）

| 维度 | 基线 | 事实源 |
|---|---|---|
| 指令覆盖 | 217/268（patch 注入 +29 见「patch abc 注入语料」节；其余 51 条归因见 docs/ohos.md §5.1） | check_opcode_coverage.py |
| 模块指令份额 | feat_heavy 5,929,967 指令 / 58,689 函数（release 口径，占全 app 93.0%；目标 ≥5M / ≈55k）；biz 集中单 record：Biz0000 5,706,092 指令 = 96.2%（record 分布见 corpus_meta.json） | check_module_share.py + gen_corpus_meta.py |
| 语料画像（机器可读） | 各变体模块构成/指令·函数/份额、feat_heavy record 级分布、压缩画像；外部消费者入口 README.md → corpus_meta.json | gen_corpus_meta.py --check |
| 组件覆盖 | 116/137（剩余 21 全部归因，见 docs/ohos.md §5.2） | check_corpus_coverage.py |
| Kit 覆盖 | 103/103（feat_heavy Kit 农场静态/动态 import 全量覆盖） | check_corpus_coverage.py |
| @ohos 直连 | 418/447（feat_api 直连五批 + feat_heavy 农场：117 模块零参调用 / 202 命名空间模块动态 import / class·type 静态引用；剩余 29 个全部为 FA-only/安全敏感/策略排除） | check_corpus_coverage.py |
| 漏洞/孪生 | 97 + 97（manifest 194 条，双向一致；含跨模块 XMOD 4 对、interproc 污点链 1 对） | groundtruth/manifest.json |
| 评分 | F1=1.000（97 对口径 TP=97 FN=0 FP=0 TN=97，6.1M 指令语料实测） | score_output.py |
| feat_api 路由页 | 83（api 54 / ui 22 / lang 7 + Index，含提供方页 1；api-bait 为 FP-bait 困难模式页） | main_pages.json |
| feat_compfarm | default 产品独立模块：组件 API 缺口补齐语料 22 文件 / 44 组件 / 348 调用（生成） | farm_build 实测 |
| 孪生 FP 门禁 | FAIL=0（call 级同形 WARN 为设计内） | check_twin_fp.py |
| 组件内 API | 700/1296（54.0%，feat_compfarm 农场 44 组件；Optional/VoidCallback/Callback 参数映射 + GridCol/StepperItem/ImageSpan/TabContent 宿主包装；no-decl 36 + 组件级排除 19 + 参数复杂跳过 360 归因） | check_component_api_coverage.py |
| 字符串应力门禁 | 207/207 + LITERALS 面 OK | check_string_stress.py |
| 门禁工作流 | manifest / twin_fp / sync_pages / 生成器确定性 / py 语法 / 条目数 | .github/workflows/gates.yml |

> 语料设计 checklist：见 AGENTS.md「新增内容 checklist」节（单源，勿在此重复维护）。

## 结构

| 模块 | 类型 | 内容 |
|---|---|---|
| entry | entry HAP | 壳：拉起三个 feature（跨 HAP startAbility） |
| feat_api | feature HAP | 良性语料路由页 82（api 53 / ui 22 / lang 7 + Index + EmbeddedProviderPage，见基线速查表） |
| feat_vuln | feature HAP | 漏洞分类页（cat- 页 + Index + Backdoor）+ BackdoorAbility(exported, ovd://backdoor) + libentry.so |
| feat_heavy | feature HAP（仅 default 产品） | 极端大单 record 指令农场：≥5M 指令 / ≈60k 函数，biz 集中单一编译单元（生成语料，勿手改），HeavyFarmPage 抽样 smoke，不进 sweep |
| feat_compfarm | feature HAP（仅 default 产品） | 组件 API 缺口补齐农场（生成语料，勿手改），ComponentApiFarmPage 选择渲染，compfarm- 前缀不进 sweep |
| lib_common | HAR | Logger / DemoItem / Runner + XMOD HAR 漏洞面（常量编入每个依赖方 HAP abc） |
| lib_shared | HSP | 静态/动态 import 目标 + XMOD HSP 漏洞面（独立 abc） |

每个模块编译为独立 `ets/modules.abc`；default 产品 `.app` = 4 hap + 1 hsp + pack.info（api24 产品无 feat_heavy）。

## 构建

**教训**：绕过 build.py 直调 `hvigorw` 时必须把 DevEco 自带 node 前置到 PATH
（`export PATH=/Applications/DevEco-Studio.app/Contents/tools/node/bin:$PATH`）——系统
homebrew node（v26.5.0 起）移除了 `fs.rmdirSync(..., {recursive})`，hvigor 的
BuildNativeWithNinja 清理步骤会报 00308018 TypeError（build.py 不受影响，它自动前置）。

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
以下两项**实测会导致运行时崩溃**（多包各自独立改写，跨包模块解析失败），故默认关闭、留有证据注释：

- `-enable-filename-obfuscation`：多包（HAP×N + HSP）各自独立改写 record 路径，跨包模块解析 `SyntaxError`，进程启动即退（exit 254）；
- `-enable-export-obfuscation`：HSP 导出名跨包映射不一致（`&lib_shared/Index& does not provide an export name 'b1'`），同样 `SyntaxError`。

混淆实测结论：
- 混淆 release 包运行行为与 debug 完全一致；
- 逆向工具对混淆包完全兼容（NOT MODULE_ANALYZED=0、UNKNOWN ops=0），方法名/record 路径保留（export/filename 关闭所致），字符串字面量不受混淆影响；
- property 混淆会改写 JSON 对象字面量属性名（如 `idcard`），属"困难模式"预期效果，是该维度唯一的 FN 来源。

### feat_heavy 指令农场

极端大单模块压力样本（逆向工具链超大 abc 输入用）：**≥500 万指令 / ≈6 万函数（release 口径）**，
占全 app 指令 93%。仅进 default（api26）产品（`targets.applyToProducts`），api24 旧模拟器构建不含。
**「单模块」在 record（编译单元）级成立**：默认 `BIZ_FILES=1 / BIZ_FUNCS=3870`（=43×90），全部 biz
指令集中于单一 record——实测 Biz0000 5,706,092 指令 = feat_heavy 的 96.2%（全 abc 136 record，
旧 90 文件形态 top1 仅 1.1%）；es2abc 单文件 19MB / 47.8 万行实测可编译（峰值 ~1.3GB）。
`BIZ_FILES>1` 为样本档拆分旋钮，small/medium 档 pin 43 函数/文件（档位画像见 corpus_meta.json
sample_tiers）。实测：5.93M 指令 / 23.4MB modules.abc，逆向工具链可完整解析（分钟级）；
运行时安装/启动/抽样在旧 90 文件形态实测正常，单 record 形态待 API26 模拟器镜像恢复后复测
（当前模拟器镜像目录无 API26 镜像，环境性受限）。

- 生成器：`tools/gen_heavy_farm.py`（规模旋钮在文件头，按指令密度实测标定，勿手改生成物）。原料
  `tools/heavy_api_catalog.json` 由 `tools/gen_heavy_catalog.py` 从本地 SDK d.ts 提取
  （SDK 升级后本地重跑，不进 CI，同 gen_rawfile_abc 先例）。四个原型：
  **biz**（纯计算业务函数）/ **api**（@ohos 零参 get/is/query 调用包装）/ **kit**（openharmony
  静态 import + hms 动态 import）/ **ui**（安全组件业务组合 struct）；`farm/index.ts` 懒构建
  注册表 + 抽样器；页面 `HeavyFarmPage` 六按钮抽样 smoke（counts/biz/api/apidyn/kit/kitdyn）。
- 门禁：`python3 tools/check_module_share.py`（release 构建后跑；`--no-gate` 查看其他变体）。
- FP 隔离：生成器读 manifest.json 提取 detection 常量与调用 token，命中即拒绝生成；FA-only
  （`@famodelonly`）、安全敏感（crypto/huks/net.http 等 UNSAFE_MODULES）模块整体排除。
- 运行时边界：smoke 只跑**白名单抽样**（hilog/systemTime/i18n/hichecker 的 3 个包装）——
  部分同步系统 API 在主线程可阻塞 >6s 触发 appfreeze（THREAD_BLOCK_6S 被看门狗杀进程），
  其余 200+ 个 api 包装只在 abc 中存在、不参与运行时抽样。动态 import 抽样各 4 个
  （@ohos 命名空间模块与 hms Kit 在模拟器均可加载）。
- 生成代码编译坑（逐个实证）：
  - `.ts` 不能 import `.d.ets` 标识符（错误 10311005）；`@arkts.*` 系列声明在 `ets/arkts/`
    而非 `ets/api/`，d.ets 探测须覆盖两目录；
  - FA-only API（`@famodelonly` 小写标签）在 Stage 模型编译报错，须排除；
  - namespace 型 default 导出不能 `typeof`/类型位引用（Cannot use namespace as a value/type），
    这批模块全部走动态 import；
  - 泛型类实例化/类型位引用必须按声明元数补参（`TreeSet<T>` 裸用报 TS2314；容器方法实参
    类型随实例化元数走，1 元存 string、2 元 set(k,v)）；
  - kit 具名导出须按 value_kinds 过滤（interface 名做 `typeof` 直接编译失败）。
- 生成代码运行时坑：
  - `hichecker.getRule()` 返回 BigInt，`JSON.stringify` 抛 TypeError；catch 里
    `(err as BusinessError).code.toString()` 对无 code 的普通错误二次崩溃（jscrash）——
    一律 `String(...)`；
  - 容器类方法名以 SDK d.ts 为准（如 Vector 用 `add` 无 `push`）。

### 工具链版本决策

- 本机 DevEco Studio 26.0.0（SDK 26.0.0.32 Beta2，模拟器镜像 7.0.0.32）；官方已发布
  26.0.0 Release（SDK 26.0.0.105）——按 AGENTS 优先级，升级是**待办决策项**（当前明确暂缓，
  语料增量在 Beta2 推进）。升级后必须重跑：全量构建 + 覆盖率归因（es2abc 行为差异可能增减
  指令，变化须归因）+ sweep 回归 + 评分复测。
- HSP 内 UIAbility（API14+ 形态）：编译/安装通过；API24 模拟器上应用内 startAbility
  拉起后立即回桌面（启动链路未通，疑似镜像侧限制），待 API26 镜像恢复后复验；
- `backgroundModes` 已从 module.json5 schema 移除（SDK 26），后台任务 demo 运行时 401；
- DataShareExtensionAbility 在 26.0.0 Beta SDK 未公开，IPC-003 为 TCP 后门无认证用例。
- SDK 26 API 面变化清单（本项目适配记录）：CoreFileKit 导出 `fileIo`（非 fs）、`rcp.createSession`
  （非 new Session）、emitter 事件 id 为 string、`RdbPredicates.limitAs`、`Curve.Ease/EaseOut/Friction`、
  `animateTo` 需经 UIContext、`@Provider/@Consumer` 需带参、asset.Value 仅 boolean|number|Uint8Array、
  `display.on(type, cb)` 2 参。

## 语言特性语料与 ArkTS 语法限制

lang 页覆盖 generator、词法环境、私有字段、super 形态等大量指令。关键手法与限制：

- **`.ts` 文件同模块编译**：arkts-* 严格检查只作用于 `.ets`；generator、for-in、Symbol、
  Function.apply、解构声明等被禁特性放在 `pages/lang/*.ts`（与 .ets 同目录、进同一
  modules.abc），页面 orchestrate 调用。非元组 spread 在 .ts 中同样被禁，需元组类型。
- **运行时与编译期不一致**：`.ts` 里的 `o[m]()` 动态方法调用能编译出 `callthis1`（非 withname），
  但 ArkTS 运行时抛 TypeError——此类"仅编译覆盖"函数页面以 `typeof fn` 引用防 tree-shake，
  不得调用；而 `fs[0](1,2,3,4)`（函数数组动态调用，经数组间接）运行时合法。
- **本工具链（SDK26 es2abc）结构性不可达**：`createregexpwithliteral`（正则字面量被降级为
  `new RegExp(字符串)`）、`closeiterator`、`getresumeoffset`、`jeq*/jstricteq*` 比较跳转族
  （一律拆成 `eq/ne + jeqz/jnez`）；完整归因见 docs/ohos.md §5.1。
- super 属性语义：`super.x = v` 无 setter 时落到 this 自有属性；`super.x` 读走原型链（类字段不在
  原型上，常得 undefined），demo 里读回用 `this.x`。
- release 优化三大坑（防折叠/防内联/防消除）：值必须从参数派生——字面量 const 会被 release
  常量折叠；闭包须经数组/循环间接调用——直接调用会被 release 内联；未被页面 import 的 .ets
  会被 tree-shake，新文件必须接入页面。
- 词法环境 wide 压力三条件：① 单一作用域 >127 个被捕获变量（仅声明不捕获不占槽位）；
  ② 值从参数派生（防折叠）；③ 箭头经数组/循环间接调用（防内联）。

### patch abc 注入语料（手造指令面）

「es2abc 不发射、但真实野生产物存在、工具必须支持」的指令（裸 isfalse/istrue、比较跳转族、
ldthis 族、definefieldbyname、closeiterator、createregexpwithliteral 等）经
`tools/gen_patch_abc.py` 以二进制改写方式注入 29 个独立 abc（`feat_vuln rawfile/patch_cooked_*.abc`）：
es2abc(script 模式) 编译内嵌探针 → 按 isa.yaml 自算的目标指令编码定点改写字节
（ark_disasm 实测不校验校验和）→ 逐文件反汇编终验。样本运行期不执行，仅作为解析面；
每目标独立 abc，避免多改写在同一指令流上相互去同步。前缀形态（deprecated.*、
wide.ldpatchvar/stpatchvar、throw.*）的 yaml 编码规则待续补。
`gen_heavy_farm.py`/`gen_string_stress.py` 等生成器的 FP 黑名单会自动吸收 manifest 新增规则。

### Sendable 指令覆盖实验室

目的：覆盖全部 `callruntime.*sendable*` 指令（含 wide 变体）。
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
| ldsendablelocalmodulevar / wide | @Sendable 函数内访问本模块导出顶层变量（API≥18） |

wide 阈值统一为 MAX_INT8=127（不是 255）。压力规模：136 个 @Sendable 类 + 136 eager + 12 lazy
import + 136 个本模块 `export let` 变量（索引从 0 数起的取阈值+8 余量；lazy 索引按名字母序落在
全部 eager 之后、必为 wide，绑定名用 `z*` 前缀保证排在 `w*` 之后）。

注意：本模块 `export const` 在 release 会被常量折叠成字面量，wide localmodulevar 随之消失——
生成器用 `export let`；`taskpool.execute` 只接受 `@Concurrent` 函数，`@Sendable` 函数在 UI
线程直接调用即可。工具链 TAC dispatch 表需包含 sendable 指令 handler，缺失会出 UNKNOWN
（以 UNKNOWN=0 为门禁）。

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

**部署教训**：
- `hdc file send` 对不存在的本地路径可能静默"成功"（返回码不可靠），重装验证前务必比对 `md5sum`；
- 同 versionCode 覆盖安装可能不生效，建议先 `bm uninstall`；
- 模拟器锁屏会拒绝 `aa start`（Error 10106102），先 `power-shell wakeup` + `uinput -T -m` 上滑解锁；
- API26 模拟器（bench26）走 entry 壳路由，自动化遍历按 id 前缀取页面（见 AGENTS.md）。

自动化遍历脚本：`tools/emulator_sweep.py`（用法见文件头注释）。
deeplink `ovd://backdoor` 实际拉起 BackdoorAbility；native xorNative/vulnCopy 运行无崩溃。

## 逆向工具输出 + 基准评分

```bash
cd <逆向工具仓库根>
PYTHONHASHSEED=0 .venv/bin/python examples/dis_demo.py ohosVulDetect/build/out/ohosVulDetect-api26-release-unsigned.app
python3 ohosVulDetect/groundtruth/check_manifest.py                                   # manifest↔源码一致性
python3 ohosVulDetect/groundtruth/score_output.py test.out ohosVulDetect/build/out/ohosVulDetect-api26-release-unsigned.app
```

### 评分口径（v2 评分器）

- 布尔/数字常量按 IR 文本形态归一化；调用链规则为全 token AND + 引号形态；
- NET-004/005 用 IR 谓词（return TRUE / emptyarray{}）；SECRET-005 标记 skip 不计分；
- 函数/record 级信号定位；逆向工具 IR 与源码逐操作对应（Math.random 链、SQL 模板串 concat、
  Web 属性链等已抽查验证）；
- native 密钥只在 libentry.so 可见（abc 级负样本成立）；`Math.random` 在 IR 中为 `Math."random"`。

## 现行待办

| 事项 | 阻塞点 | 验收 |
|---|---|---|
| 工具链 Beta2 → Release 升级 | 用户决策（暂缓） | 升级后重跑覆盖率归因 + 全量 sweep + 评分 |
| ohre_dev 上层仓 snapshot+gitlink | 待 koki 提交 | 上层仓同步 |
| 字节码 HAR patch 指令注入 PoC（载荷侧） | 缺能产出 patch 对指令的 assembler | 机制已实证（docs/ohos.md §7.1），待评估 |
