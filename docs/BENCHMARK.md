# ohosVulDetect 基准测试 App — 构建与使用手册

多模块 HarmonyOS 基准应用：① 广覆盖 API/ArkUI/语言特性，作为逆向工具反编译准确性语料；
② 预埋 53 个带标签漏洞 + 7 个安全孪生（groundtruth/manifest.json），作为 VulDetector 检测基准。

## 结构

| 模块 | 类型 | 内容 |
|---|---|---|
| entry | entry HAP | 壳：拉起两个 feature（跨 HAP startAbility） |
| feat_api | feature HAP | 29 个良性 API demo 页（含 sendable 指令实验室）+ 11 个 UI/语言特性页（组件画廊 + lexenv 压力页） |
| feat_vuln | feature HAP | 13 类漏洞页 + BackdoorAbility(exported, ovd://backdoor) + libentry.so |
| lib_common | HAR | Logger / DemoItem / Runner |
| lib_shared | HSP | 静态/动态 import 目标 |

每个模块编译为独立 `ets/modules.abc`；`.app` = 3 hap + 1 hsp + pack.info。

## 构建

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

- feat_api 38 个 demo 入口全遍历：52 ✅ / 9 ❌（失败均为环境因素：socket 沙箱、user_grant 弹窗、backgroundModes schema、GCM 401）
- feat_vuln 13 类：37 ✅ / 4 ❌（新增 CRYPTO-007；Backdoor 页 load-url 按钮实测拉起 Web 加载，WEB-006 可达）（asset 201、location 开关、file:// 目标不存在、GCM 401）
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

## 巨型参数 wide 与杂项形态（2026-09-04，lang-runtime 扩展）

应用代码口径 158→**169/267**；并入 debug 语料后 **172/267**（debug 贡献 debugger/newlexenvwithname/
wide.newlexenvwithname）。覆盖统计工具：`tools/check_opcode_coverage.py --dump-dir compare_dis`（默认全量构建已含 release+debug，
构建后跑一次即得并集；compare_dis/ 已 gitignore）。

- `tools/gen_wide_stress.py` → WideFormsLab.ts + WideFormsData.ts（.ts 不能 import .ets，数据文件需同为 .ts）：
  `wide.callrange/callthisrange/newobjrange`（128+ 实参）、`wide.copyrestargs`（rest 前 128+ 形参，调用包装
  防剥离）、`wide.createobjectwithexcludedkeys`（130 排除键）、`wide.ldlocalmodulevar`（136 export let +
  同模块读取）、`wide.ldexternalmodulevar`（import 136 个跨文件 const——跨文件 const 不折叠）；
  **callrange 基础形态修正为可达**（≥4 参动态函数调用）。
- 杂项：`callruntime.topropertykey` = 类体计算属性名（计算字段被 TS 规则禁止，方法形态 `class A { [k]() {} }` 即可，
  附带 stownbyvaluewithnameset）；`stownbynamewithnameset` = 非计算键同时含 `.` 与 `\` 且值为匿名函数
  （`{'a.b\\c': function(){}}`，es2panda IsLegalNameFormat 历史行为）；`trystglobalbyname` = 纯 .js 文件
  （无 TS 注解！）对未声明标识符赋值——esm 严格模式运行时必抛 ReferenceError，仅编译覆盖（typeof 桥接保活）。
- debug 语料口径：debug 构建（--debug-info）额外产出 debugger/newlexenvwithname/wide.newlexenvwithname，
  但 debug 关优化（无 nop、内联/折叠行为不同），覆盖统计取两模式并集。

## 运行时可达性收口（2026-09-04 第二轮，release 171/267）

- `trystglobalbyname` **运行化**：ArkTS 运行时该指令无 sloppy 自动建全局语义（global record 与
  global object own 属性均未命中 → ReferenceError），但**先 `globalThis.x = 预置` 再赋值**即命中
  own 属性分支成功（RuntimeHelpers.ts tsGlobalRef，实测 global=42 after=42）。
- 新增非 withname callthis 形态（此前仅 o[m]() 一种且运行时炸）：**yield\* 委托**的内层
  next(v)/return(v) → callthis1（tsYieldStarDrive 运行验证 ys=1,33 fin=7）；**成员 tag 的
  tagged template**（gettemplateobject 打断 withname 相邻性）→ callthis2/3（tag=3/6 运行验证）。
- **o[m]() 运行时硬限制确证**：对象字面量形态同样 TypeError（此前仅测过类实例）——动态下标方法
  调用在 ArkTS 运行时不可运行，仅编译覆盖（tsDynamicMethod，typeof 保活）。
- `taskpool.execute` 第 3 参 Priority 枚举在 API24 运行时返回空 {}（去掉即 ✅，n=10⁶ sum 正确）——
  历史 heavySum ❌ 基线项已修复，feat_api 基线 53✅/8❌。
- commonjs 路线证伪：未声明赋值在 esm/cjs 下编译为同一指令且运行时同样必抛（handler 无
  sloppy 分支）；ldglobalvar/stglobalvar/st(t)consttoglobalrecord 仅 script 模式发射，
  应用管线（esm|cjs 二选一）不可达——放弃，覆盖只能靠应用外产物。
- debug 语料动态验证：debug 包在模拟器全页通过，debugger 语句无调试器时 no-op。

## 运行时可达性边界补充（2026-09-04 第三轮实测）

- **动态下标调用的真实分界**：`o[m]()` 在显式 `Record<string, 函数类型>` 标注的对象上**运行时合法**
  （变量下标/字面量下标/可选链 `o[k]?.()` 均实测通过）——此前"对象字面量也炸"的结论仅适用于
  **无类型标注**的对象字面量与类实例（动态下标解析得 undefined → "not callable"）。
  tsDynamicMethod 已改 Record 形态真实运行（dyn=hi-dyn），**"仅编译覆盖"清单清零**。
- **>127 形参函数的调用错位**：128+ 形参函数被调用时部分槽位参数错位（实测 restWide 的 m0
  读到运行时内部对象，toString 为 "Cannot get source code"；对照 a129 读取正常）。规避：超宽
  函数不读具体形参值（copyrestargs 等指令触发只依赖形参数量）。疑为编译器/运行时在 16 位
  寄存器编号边界的行为，值得向工具侧语料标注。

## 指令收口 P1（2026-09-04 第四轮，release 175 / 快照并集 178/267）

对 docs/ohos.md §5.1 的 20 条候选逐条「临时探针 + ark_disasm」实证，可达形态落入正式语料，
其余全部归因——**未用 89 条（deprecated 45 + wide 6 + 其他 38）自此全部有明确归因**。

新增覆盖（+4）与触发形态：
- `throw.constassignment`：.js 内 const 重赋值（GlobalAssign.js constAssignRun，RuntimeHelpers tsConstAssign 接线）——.ts/.ets 中该形态是编译期错误，只能 .js 覆盖；
- `wide.supercallthisrange`：130 个字面量实参的 `super(...)`（父构造器必须 rest 签名，否则 TS 实参数校验不过）；
- `callruntime.wideldlazymodulevar`：非 @Sendable 普通函数读 `import lazy` 绑定（lz0..lz129，索引 >127 即 wide；非 wide 版已在快照并集中）；
- `wide.getmodulenamespace`：130 个 `import * as` 微模块（生成器产物 WideNs0..129.ts），模块表索引 >127 即 wide。

归因清单（探针实证 SDK26 es2abc 行为，源码级不可达）：
- `testin`：`in` 表达式发射 `isin`；
- `isfalse/istrue`：布尔强制（`!!x`、`Boolean(x)`、`new.target ? :`）发射 `callruntime.isfalse/istrue`；
- `ldobjbyindex/stobjbyindex`（含 wide 3 条）：下标访问（含常量下标，常量会被折叠成 ldai）一律 `ld/stobjbyvalue`；
- `ldnewtarget`：new.target 为构造器隐式参数传递；
- `ldsymbol`：`Symbol.iterator` 等经 `tryldglobalbyname "Symbol"` 解析；
- `ldthis/ldthisby*/stthisby*`：this 恒在参数寄存器（类方法与 .js 普通函数同）；
- `ldfunction`：命名函数表达式自引用与 `arguments` 路径均走词法闭包，不发射；
- `definefieldbyindex/byname`：类字段初始化（含数字字面量计算键、非标识符引号名）一律 `stobjbyvalue`；
- `supercallarrowrange`（含 wide）：箭头函数内 super() 调用在 JS/TS 语义非法；6 实参 super() 发射 u8 档 supercallthisrange（已覆盖）；
- `throw.deletesuperproperty`：`delete super.p` 被降级为 `delobjprop`（作用于 this）；
- `throw.undefinedifhole`：TDZ 检查发射 `throw.undefinedifholewithname`；
- `wide.ldpatchvar/stpatchvar`：patch 动态更新机制，应用构建不发射；
- script 族 4 条与 deprecated 45 条维持既有结论。

坑与注意（本轮新踩）：
- `.ts/.js` 不能 import `.ets`——跨形态数据文件必须同为 .ts/.js（探针曾因此编译失败）；
- `.js` 文件内禁类型注解（`let x: string` 直接编译错）；
- ≥128 实参 super 调用的父构造器签名必须 rest 化（TS 校验实参数）；
- star import 同一模块会被去重，`wide.getmodulenamespace` 需要 ≥128 个不同微模块文件；
- 本轮新增 RuntimeDemo 电池输出（superw/lazyw/nsw/const=）已于 2026-09-06 模拟器定点验证数值正确（见「第三轮假设 + 模拟器全面回归」节）。

## 第二轮深挖 + 语法糖语料页（2026-09-06，release 176 / 快照并集 179/267）

对剩余 44 条非 deprecated 未用指令做第二轮假设驱动的批量探针（访问器/私有品牌/可选下标/switch/
正则字面量/arguments/script 模式 .js/async generator 等），并新增语法糖语料页：

**testin 归因修正并覆盖（+1）**：`#私有字段 in obj`（品牌检查，Sugars.ts Priv.has）发射
`testin imm,imm,imm`；公有属性 `k in obj` 才是 `isin`。P1 轮"testin→isin"的归因只对了公有形态，
探针轮未覆盖到是因为该形态被 release 内联/摇树干扰。Sugars 页将其固化为稳定语料。

**新语料页 lang-sugars**（SugarsDemo.ets + Sugars.ts，id `lang-sugars`）：访问器族（get/set/
静态 get/super 访问器/对象字面量 getter 与 this）、私有品牌检查、`a?.[i]`、逻辑赋值三连
（&&=/||=/??=）、`filter(Boolean)`、switch fallthrough、do-while、标签 break、链式三元、
逗号表达式、BigInt/数值分隔符/指数/**、String.raw、static 静态块、类字段箭头词法 super 方法、
async generator + for-await-of + 标签 break、entries/fromEntries/map/filter/join/flat/reduce/
slice 负索引链、嵌套解构/数组交换/属性-方法-计算键三连简写、new.target 箭头捕获。
定位是"复杂源码 → 通用指令降级路径"的反编译对照样本（多数糖不产生新指令）。

**第二轮实测归因（release + debug 双口径，全部未产生新指令）**：
- 类/对象字面量访问器与 this → 常规 ldobjbyname/stobjbyname + 参数寄存器 this，无 ldthis 族/definefieldby*；
- `a?.[i]`、`arguments[i]`（.js）→ ldobjbyvalue 路径，无 ldobjbyindex/stobjbyindex；
- .js 正则字面量（`/^\d+$/.test`、`s.match(/../)`）→ 降级 `new RegExp(...)`，无 createregexpwithliteral；
- switch 字符串/枚举 → lda.str + eq/jnez 序列，无 jeq/jstricteq 族；
- async generator for-await → getasynciterator/resumegenerator/getresumemode 链（均已有），无 closeiterator；
- 字段箭头 super 方法 ≥4 参 → ldsuperbyname + callthiswithname 路径，无 supercallarrowrange；
- **script 模式终证**：无任何 import/export 的纯 .js（var/let/const 顶层赋值）在 debug 构建中也整体
  被丢弃（abc 中不存在）——ldglobalvar/stglobalvar/st(const/to)globalrecord 4 条在应用管线下结构性不可达。

**剩余 88 条未用 = deprecated 45 + wide 6 + 其他 37，全部两轮归因完毕**；除 deprecated 与
patch 机制（wide.ldpatchvar/stpatchvar）外，其余均为 es2abc 的确定性发射策略（替代指令见上文两节）。

坑与注意：`Array.prototype.at` 需 es2022 lib（本工程 lib 配置不支持，糖形态用 `slice(-1)[0]` 替代）。

## 第三轮假设 + 模拟器全面回归（2026-09-06，并集维持 179/267）

**第三轮探针归因（零新增，铁证补齐）**：
- `closeiterator`：es2panda 将迭代器关闭协议**降级为显式 `ldobjbyname "return" + callthis0`**（for-of 遍历
  generator/自定义迭代器 + break/return/try-finally 全形态实测，反汇编可见该序列，不发 closeiterator）；
- `ldfunction`：局部递归「函数声明」与命名函数表达式、arguments 路径全部走词法闭包；
- `ldsymbol`：`Symbol.hasInstance` 计算静态成员同样经全局解析路径。
至此**三轮实证后，源码级可达覆盖已穷尽：179/267，未用 88 条全部归因**（45 deprecated + 6 wide + 37 其他，
每条均有 es2abc 替代发射路径或语义非法/管线不可达的证据）。

**模拟器全面回归（api26 release，emulator 7.0.0.32）**：
- feat_api 全量 45 页（api 29 + ui 9 + lang 7）0 崩溃，**62✅ / 9❌**：8 项与 2026-09-04 基线完全一致
  （socket×2、aes-gcm 401、sensor×3、dm 201、bgtask 401），新增 `ws send ❌` 为公网 echo 服务器抖动
  （复测连 send 行都未出现，WebSocketDemo 代码零改动，判环境性）；
- lang-runtime 定点验证：新增行 `const=const`（throw.constassignment 运行时捕获）、`superw=1`、
  `lazyw=76 nsw=76`（1..130 求和 8515 % 97 = 76，与 lazy/ns 微模块总数吻合）、既有 15 行全部与基线一致；
- lang-sugars 定点验证：10 行数值逐一正确（acc=8/4/11、priv=true1、sw=2 do=3 lab=1,2 ter=mid、
  big=1、stat=3 sup=6、ent=2 back=1 arr=4,6 flat=6 at=30、swap=21、nt=1、fa=3）；
- feat_vuln 13 页 **37✅ / 4❌** 与基线完全一致（GCM 401、web 17100003、asset 201、location 开关关闭）。

## 第四轮：es2abc 旗标与源码级归因（2026-09-06，并集 179→180/267）

方法：SDK 自带 es2abc 独立调用（`ets/build-tools/ets-loader/bin/ark/.../es2abc`）做旗标矩阵探针
（--use-define-semantic / --opt-level 0-2 / --extension as / --target-api-version 11），并对照上游
`arkcompiler_ets_frontend` master 源码逐条定位发射点（pandagen.cpp / helpers.cpp / options.cpp）。

**新覆盖（+1）：`callruntime.definefieldbyindex`** —— 数字字符串键的静态字段（`static '9': number = 9`，
Sugars.ts NumKeyStatic）。es2panda 静态/private 字段无条件进类 initializer，key 经 ToPropertyKey 转
int64 走 imm 路径（计算键 `[n]` 走 definefieldbyvalue 是另一条）。**target 24 默认 hvigor 管线即可发射**，
无需旗标；模拟器实测 `nk=20`（9+11）。计算键 `[K]`（const/enum 折叠、static 变体）实测均走 byvalue。

**源码级终论（上游证据）**：`DefineFieldByName`（pandagen.cpp:610）与 `IsTrue/Isfalse`（:1130/:1193）
按 `--target-api-version` 二选一——**<12（含 11）发 `definefieldbyname`/`istrue`/`isfalse`，≥12(beta3)
发 `definepropertybyname`/`callruntime.istrue/isfalse`**；es2abc 默认 target=24（options.cpp:571），
ets-loader 把 product 的 compatibleSdkVersion 原样传给该旗标（module_mode.js generateEs2AbcCmd）。
本机 es2abc 实测 `--target-api-version 11` 可产出 istrue/isfalse（`!b`/`&&`/三元即触发）。
**依 AGENTS.md 优先级（构建链最新 > 指令覆盖），旧 SDK 路线搁置**：这 3 条按「真实野生产物存在、
语料不可达、工具必须支持」处理；唯一不降级的可选路线是 byteCode-HAR（用当前 es2abc 加旗标
离线编译微模块、经 `--enable-abc-input` 合并，机制同上），仅在需要时再评估。

**管线实验（api11 product）**：临时 product compatibleSdkVersion "4.1.0(11)"（runtimeOS OpenHarmony，
需 compileSdkVersion + local.properties sdk.dir）→ hvigor 在 SDK 解析阶段失败（本机仅装 default/26
组件，sdkmanager 无法解析 4.1.0(11)，且依上述优先级不再引入旧 SDK）。**可行但不采用的解封路径**：
不装旧 SDK 的替代是 byteCode-HAR（module_mode 的 `--enable-abc-input` 预编译 abc 合并机制：
用当前 es2abc 加 `--target-api-version 11` 离线编译微模块并按 byteCodeHar 结构打入），仅在有需要时再评估。

坑与注意：
- `--opt-level=0` 必须空格分隔（`--opt-level 0`），`=` 形式 pandargs 报错；
- `.ets`（extension as）禁计算类字段，数字键形态只能放 .ts；
- 对象字面量纯数字键会被 createobjectwithbuffer 吸收，需类字段形态才见 definefieldbyindex；
- 外部真实 hap 交叉验证（12 hap+3 abc）：外部实发 106 条中本项目已覆盖 105 条（本轮后 106/106 中
  除 definefieldbyname/isfalse/istrue 3 条老工具链指令外的全部——见 ohos.md §5.1）。

## 模拟器全面回归第二轮：修复与终版基线（2026-09-06）

对全部 60 个注册页（feat_api 45 + feat_vuln 13 类页 + Backdoor）+ 7 个 lang 页逐行数值 + deeplink 做全面
动态测试。**发现 4 项此前误记为「环境性失败」的其实是代码/配置缺陷，已修复**：

1. **aes-gcm 401（真代码 bug，feat_api CryptoDemo + feat_vuln OVD-CRYPTO-001S 两处）**：GcmParamsSpec
   缺必填 `algName: 'GcmParamsSpec'` 与 `authTag`（注意字段名是 **algName** 不是 algoName；加密模式
   authTag 给 16 字节占位即可）。API24 运行时不校验故曾通过，API26 严格校验报 401。已改为显式类型
   const，两处均 ✅；
2. **web-005 17100003（可修）**：loadUrl 的 file:// 目标文件不存在；改为先在 filesDir 写 bench.txt 再加载 → ✅；
3. **sensor 201（可修）**：ACCELEROMETER/GYROSCOPE 未声明（均为 SYSTEM_GRANT，声明即自动授权，
   atm 无需也不能手动授予）；module.json5 补声明后 accel-on-off / sensor-once 均 ✅；
4. **dm-devices 201（可修）**：需 DISTRIBUTED_DATASYNC（user_grant），补声明 + `atm perm -g` 授权 → ✅。
   **注意 atm 授权按安装计**：bm uninstall 重装后需重授（tokenID 用 `atm dump -t -b com.koki.VD` 查），
   sweep 前置步骤已含。

**终版基线（api26 release，全页面）**：
- feat_api 45 页 0 崩溃，**66✅ / 7❌**：socket×2（沙箱禁原始 socket）、ws send（公网 echo 服务器抖动，
  复测可恢复）、vibrate（模拟器无马达 14600101）、location×2 + feat_vuln PRIV-002（系统定位开关默认
  关闭，无 CLI 可开，需系统设置）、bgtask（backgroundModes 已从 SDK26 schema 移除）——**全部已在
  源码相应用例处加 `// ENV(不可修复)` 注释**；
- feat_vuln 13 类页 **39✅ / 2❌**（asset 001S：关键资产存储要求设备锁屏凭据，模拟器无锁屏密码 → 201，
  已注释；PRIV-002 同定位开关）；
- lang 7 页逐行数值全对（closure fib(12)=233、generator ys=1,33、runtime priv=15/const=const/lexwide、
  sugars nk=20/fa=3/nt=1 等）；deeplink `ovd://backdoor` 实拉起 BackdoorAbility；
- 覆盖率维持 180/267，manifest 双向一致。

## 第五轮：wide 变体专项收口（2026-09-07，并集 180→183/267）

对剩余 6 条未用 wide 逐条深挖（isa.yaml 语义 + 上游发射点 + 本地 es2abc 探针实证），+3 条运行可达覆盖、修正 1 条旧归因：

**新覆盖（+3，全部运行时数值验证通过）**：
- `supercallarrowrange` / `wide.supercallarrowrange`（pages/lang/ArrowSuper.js，RuntimeDemo asup 行）：
  **修正 P1 轮归因**——「箭头函数内 super() 语义非法」只是 TS 口径（TS2346，.ets/.ts 编译错）；
  纯 .js（无类型注解）按 JS 语义完全合法，es2panda 照常发射 supercallarrow 家族：spread 转发
  `(...a) => super(...a)` → supercallspread；4 实参直调 → supercallarrowrange；131 实参直调 →
  wide.supercallarrowrange（实参数 >127，字面量必须显式列出，spread 只发 supercallspread）。
  运行时实测（API26 模拟器）`asup=8 asupw=131`。
- `wide.stownbyindex`（tools/gen_stown_stress.py → WideStoreLab.ts，RuntimeDemo stw 行）：
  stownbyindex 基础形态本就由数组字面量逐元素发射（ApiRegistry 的 createemptyarray + 逐元素
  stownbyindex imm1,v,imm2）；其 imm2（元素下标）编码为**有符号 16 位**，**切换阈值是 32768
  （0x8000）**——不是常见 wide 的 i8 档 127，也不是 65536。32780 个「函数调用派生值」元素的
  数组字面量 → 下标 32768..32779 共 12 条 wide.stownbyindex；元素必须调用派生（全常量会被吸收
  进 createarraywithbuffer 字面量缓冲，不发射逐元素存储）。运行时实测 `stw=65560`。
- **wide 阈值通则修订**：按指令 imm 位宽分档——i8 档 >127、i16 档 >32767（byindex 家族 imm2）。

**剩余 wide 4 条终局归因**：
- `wide.ldobjbyindex` / `wide.stobjbyindex`：基础形态零发射（es2panda 一切下标读写一律
  ld/stobjbyvalue，三轮探针实证），基础不存在则 wide 无从触发；
- `wide.ldpatchvar` / `wide.stpatchvar`：patch 管线专属。本地实证两遍编译机制可用
  （首遍 `--dump-symbol-table` → 次遍 `--input-symbol-table` + `--generate-patch`，产出的
  patch.abc 含 patch_main_0/1 与重发射函数）；但 WIDE_STPATCHVAR 发射不可在独立 es2abc 复现——
  script 模式顶层变量走 tryldglobalbyname 不产生 patch 槽；CJS 探针（--commonjs）下新增词法变量
  被 hotfix 与 cold-fix 双双拒绝（"lexical variable added or removed ... not supported"，证明
  lexenv 感知 diff 存在）、新增函数走 patch_main_1 definefunc 但无 stpatchvar 存储对。上游文档
  口径：module 模式新增顶层变量/新增函数 → AllocSlotfromPatchEnv → WIDE_STPATCHVAR，需 ESM
  protoBin 管线的模块词法环境注册。patch abc 不属于 app 产物（运行时由补丁框架加载），纳入语料
  需 byteCode-HAR 注入或扩展工具输入集，维持待评估。

**门禁**：全量 4 变体构建 OK（api26 release app 1065→1323KB，WideStoreLab 为增量主体）；manifest
双向一致；覆盖率 **183/267**（未用 84 = deprecated 45 + wide 4 + 其他 35）；RuntimeDemo 定点
验证 asup/asupw/stw 行数值正确，battery 顺序推出即既有行无回归。

**提交后全量 sweep 回归（b1ae09c，api26 release，2026-09-07）**：feat_api 45 页 0 崩溃，sweep
采集 66✅/4❌ + location×2 定点补验 ❌（3301100 switch off；sweep 对 api-location 页本轮 0 行属
采集抖动，非通过）→ 有效 **66✅/6❌**，唯一相对基线的变化是 ws send 本轮恢复 ✅（印证「公网
echo 抖动、复测即恢复」注记）；feat_vuln 13 类页 **39✅/2❌**（asset 001S、PRIV-002）与基线完全
一致；dm 已按 sweep 前置重授权。

## 第六轮：打包形态扩展——卡片 widgets.abc / rawfile abc / routerMap HSP（2026-09-07，并集 183→187/267）

背景调研见 docs/ohos.md §7（多 abc / HSP / HAR 打包专题）。落地三项新语料形态 + 一项机制实证：

**新增形态**：
- **ArkTS 卡片**（4161d89）：feat_api 增 FormExtensionAbility（ets/form/ApiFormAbility.ets）+ 动态卡片
  （ets/widget/ApiWidgetCard.ets，form_config.json isDynamic=true）→ HAP 内出现与 modules.abc 并存的
  第二 abc **`ets/widgets.abc`**（api26 release 6.9KB；api24 变体同样产出）。FormDemo 页（api-form）
  覆盖 formProvider.getFormsInfo/filter、formBindingData、formInfo/formError 枚举。坑：form_config
  必填 isDefault/updateEnabled（hvigor schema 逐字段报错）；FormType 枚举成员是 `eTS` 不是 UI。
  运行时实测 `total=1 [feat_api:ApiWidgetCard]`（type=2/dim=2/upd=true）——卡片注册链路完整。
- **rawfile abc**（73b613c、d3d85bc）：tools/rawfile_src/bench_script.js 经 tools/gen_rawfile_abc.py
  （es2abc script 模式）编译入 feat_vuln `resources/rawfile/bench_script.abc`；cpp 侧 napi_run_script_path
  执行（仅接受 rawfile 路径，自动拼 /data/storage/el1/bundle/ 前缀，独立 JS 上下文）。
  **+4 指令：ldglobalvar / stglobalvar / stconsttoglobalrecord / sttoglobalrecord**（script 模式
  全局变量族，模块模式产物不含）。坑：该接口完成值恒 undefined → 改为脚本内自校验（合计≠72 抛错→❌），
  native 返回 ran-ok-selfcheck=72；实测 ✅。
- **routerMap 跨包路由**（8a1663e）：lib_shared 增 route_map.json + module.json5 routerMap +
  NavDestination（HspRoutePage + @Builder hspRouteBuilder）；feat_api api-route-map 页 Navigation
  pushPathByName('hspRoute')（无本地 navDestination builder），HSP 页 600ms 后自动 pop('hsp-ok-42')，
  宿主 onPop 断言往返。实测 ✅ `pop=hsp-ok-42`。
- **字节码 HAR 机制实证**（/tmp 探针，不入库）：byteCodeHar=true 的 HAR 产物为 tgz，内含
  `package/ets/modules.abc` + `.d.ets` 类型桩（无源码）；消费方（file:./libs/x.har 依赖）构建后
  宿主仍只有 1 个 abc，HAR 的 record（`&lib_common.*&1.0.0`）经 `--enable-abc-input` **原样并入**
  宿主 modules.abc——注入通道成立（产出 patch 对指令载荷仍缺 assembler，维持待评估）。

**包内 abc 终态（api26 release）**：entry=ets/modules.abc；feat_api=ets/modules.abc + ets/widgets.abc；
feat_vuln=ets/modules.abc + resources/rawfile/bench_script.abc；lib_shared=ets/modules.abc。
check_opcode_coverage.py 相应增加 widgets.abc 与 rawfile/*.abc 扫描点（8b881e6）。

**门禁**：全量 4 变体构建 OK；manifest 60 双向一致；覆盖率 **187/267**（未用 80 = deprecated 45 +
wide 4 + 其他 31），+4 全部来自 rawfile script abc（widgets.abc 无新增指令，纯形态语料）。

**全量 sweep 回归（d3d85bc，api26 release，含工具加固）**：
- feat_vuln **40✅/2❌**：基线 39✅/2❌ + 新 rawfile case ✅（ran-ok-selfcheck=72）；❌2 = asset 001S、
  PRIV-002 定位开关，均为基线已知环境项。
- feat_api **70✅/8❌**，31 个 Case 页全部覆盖（✅/❌ 行只来自 api 页；ui/lang 16 页为纯展示/数值页，
  by design 0 行）。相对基线 66✅/6❌：**+5✅**（api-form×4 + api-route-map×1），基线 6❌ 全数复现
  （socket×2 / vibrate / location×2 / bgtask）；另 ws send、agent-download 本轮 ❌——host 直连两端点
  均 200、app 自身 http 行 ✅、两页代码零改动，判定公网路径抖动（环境项，不计回退）。
- ui/lang 16 页：定向遍历全部打开（0 崩溃）；抽查 ui-components 渲染正常、lang-runtime 数值行
  `asup=8 asupw=131` 与第五轮一致。
- sweep 工具加固（本轮三次提前终止的归因）：无浏览器镜像上 api-ability 的 openLink 用例弹系统
  「No options to open with」对话框且 **force-stop 关不掉**，盖屏导致遍历提前 break；另 ui/lang
  段列表滚动抖动会误判「遍历完毕」。已加对话框消解 + 放弃前重启复核 + 滑动次数加倍。

### 第六轮增补：wide.callthisrangewithname + FormLink 卡片（2026-09-08，并集 187→188/268）

> isa.yaml 上游新增 `wide.callthisrangewithname`（全集 267→268），本轮将其覆盖；同轮 FormLink 入卡片。

- **wide.callthisrangewithname**（pages/lang/WideNameCall.ts，RuntimeDemo arg-scale 按钮新增 wcn 行）：
  归因修正——withname 家族来自 **namespace 导入对象的具名方法调用**（语料中的 hilog.info、
  JSON.stringify 即基形态来源）；本地接收者（含 .ts 类型化）的 `obj.m(131 实参)` 只发
  `wide.callthisrange`（无 name）。落法：`util.format(fmt, 0..130)` = **132 实参**（fmt + 131 个数值，
  >127 切 wide），防内联沿用函数数组 + 循环间接调用。运行时实测 **`wcn=131`**（format 返回串切分计数）。
- **FormLink 进 ApiWidgetCard**（卡片专属交互组件，@form，API10+）：卡片内 router / message 两种
  FormLink + 保留一处 postCardAction（命令式对照），组件覆盖 68→**69/137**；widgets.abc 含 FormLink
  record（编译级验证）+ api-form 页 getFormsInfo 4 case ✅（注册链路不回归）。
- **门禁**：全量 4 变体构建 OK；manifest 60 双向一致；覆盖率 **188/268**（未用 80 = deprecated 45 +
  wide 4 + 其他 31）。
- **动态回归**：feat_vuln **40✅/2❌**（与第六轮完全一致）；feat_api sweep **71✅/5❌**（33 页；相对第六轮
  70✅/8❌：agent-download 恢复 ✅ 印证抖动判定，ws send 仍 ❌（echo 公网路径项），api-location 本轮
  未采集行属已知采集抖动（前日定点 ❌ 3301100 不变））；ui/lang 段停点为已知 sweep 自动化抖动（该段
  0-✅-行页，wcn/lang-runtime 已定点验证）；定点验证 `wcn=131`、`stw=65560` 不变、api-form 4✅。

## API26 模拟器测试矩阵与 API24 差异（2026-09-04）

在 API26 模拟器（emulator 7.0.0.32，1320x2232）上实测全部构建形态：

| 构建形态 | 安装 | 运行 | 结果 |
|---|---|---|---|
| api26 release（API26 语料 + ArkGuard 混淆） | ✅ | ✅ | 6 重点页全绿，数值与 API24 逐项一致 |
| api26 debug（不混淆） | ✅ | ✅ | lang-runtime 16 行全对（rest=2 干净、debugger no-op）、0 TypeError |
| api24 release（API24 兼容包） | ✅ | ✅ | sendable/taskpool/runtime 全部正常（向上兼容） |

与 API24 的差异（均为实测）：
1. **`aa start` 可见性校验收紧**：API26 拒绝拉起 `exported:false` 的 ability（错误 10103001），
   API24 不拦。自动化遍历需走 entry 壳入口（EntryAbility exported:true → 点 "API Coverage"）。
2. **taskpool Priority 参数**：`execute(fn, args, Priority.HIGH)` 在 API26 运行时 ✅ 正常返回，
   API24 返回空 `{}`——是 API24 运行时限制而非用法错误；源码不加 Priority 以兼容双 SDK。
3. **网络沙箱放开**：API24 上 socket/net 类环境 ❌，API26 上 connection 查询类 ✅。
4. **bgtask 401 跨版本一致**（backgroundModes schema 问题与运行时版本无关）。
5. 模拟器分辨率不同（新镜像 1320x2232 vs 旧 1260x2720），自动化 swipe 坐标需按比例计算。

### API26 全量遍历基线（2026-09-04，emulator_sweep.py 已双环境固化）

`tools/emulator_sweep.py` 现已自适应：启动时探测 API 版本与分辨率（`param get` / `hidumper`），
API≥26 自动走 entry 壳路由（EntryAbility → "API Coverage"/"Vuln Challenges"），滑动按比例坐标。

default release（API26 语料）在 API26 模拟器全量遍历：**46 页 0 崩溃**（api 29 + ui 11 + lang 6），
**62✅ / 8❌**，❌ 全部为环境类：socket×2（沙箱）、crypto aes-gcm 401、sensor×3（授权弹窗）、
dm-devices 201（授权）、bgtask 401。相对 API24 基线（52✅/9❌）的变化：**asset 201 与 location ❌
在 API26 上转 ✅**，其余环境项一致；✅ 增量含新页面 case 与上述转正项。

注：lang 页输出为 Text（'=' 行）而非 DemoScaffold 的 ✅/❌，sweep 对其无信号，其运行正确性由
API26 矩阵轮逐页实测背书（6 页数值逐项正确）。全量遍历约 20 分钟（壳路由每页 ~20s），
budget 默认 1200s 只够 34 页，lang/ui 尾部页需补跑（可传 prefix 复用 visit_rows）。

## 递归深度压力语料（2026-09-08，feat_api lang + tools/gen_recursion_stress.py）

**目的**：为逆向工具链的反 RecursionError 改造（`CodeBlock.get_all_prev_cbs_var2val` 迭代化、
`AsmArg.clone` 迭代化+memo）提供"改造前必崩、改造后可分析"的真实端到端语料。

- **RecursionChainLab.ets**（feat_api，生成器 `tools/gen_recursion_stress.py`）：
  `recursionChainStress` = for 循环体内 8 条 x 600 项布尔短路链（仅 `(x > 0)`/`(x < 9)` 两个常量
  交替）≈ 4800 个基本块。实测：改造前（工具链递归版，生效上限 3000）stage-1 首次深链查询即
  `RecursionError`（CodeBlock.get_all_prev_cbs_var2val），单进程与 --mp（worker 崩溃丢模块）皆复现；
  改造后可完整分析、无任何递归错误。运行时由 RuntimeDemo 'run recursion depth stress' 按钮触发（n=1 秒回）。
- **invalidate_propagated_reads 平方级成本：既有语料固有，已随 2026-09-09 索引化修复消除**：
  `CopyPropagation.invalidate_propagated_reads` 原实现每遇 CALL/AWAIT 指令即全表扫描 v2v 字典，
  方法规模大时呈平方级。基线对照实验（cProfile）证明该成本是 ovd 既有语料自身的属性——
  无链语料的 feat_api stage-1 894s 中该函数占 847s（303,614 次调用），链语料仅次要增量；
  修复（`_read_value_keys` 索引，行为与全表扫描完全等价）后同一无链 hap stage-1 降至 43.5s（20.6 倍），
  含 8x600 链语料的完整 app 主流程 93.2 -> 15.7 分钟（评分只需主流程产出的 test.out）。
- **extract 演示流程的平方级（2026-09-09 第二轮修复消除）**：dis_demo 尾部的
  extract_all_methods（run_cp=True）走 VulDetector 深度拷贝路径，其 var2val_assign 裸字典
  分支每次赋值全表扫描 v2v（逐条目递归检查）——同族二次方。CPro_cb_deep/CPro_greedy 改为
  包 Var2ValState（rev_deps 索引化失效，两分支行为等价由 test_var2val_parity.py 钉死）后：
  全 app extract 阶段 41 分钟 -> 53 秒（约 46 倍；剖析口径 7698.8s -> 169.9s，全线程累计），
  全语料 2740 文件输出树 diff 零差异，完整流程约 16 分钟。
- **AsmArg.clone 深图触发：源码不可达（归因存档）**——>2950 深 AsmArg 图无法由可编译 ArkTS 产生：
  ① Record/interface 嵌套对象字面量：arkts-no-untyped-obj-literals / 类型比较器约 12 层
  "Excessive stack depth comparing types"；② 嵌套数组字面量（含逐级变量链）：es2abc 切成约 11 层
  块用存储指令链接，AsmArg 深度恒约 12，且容器不做拷贝传播替换；③ 嵌套构造调用：语义分析不把
  构造参数链接进对象字段；④ 成员访问链（FIELD ref_base 深链）：es2panda 对总访问数二次方
  （3200 级 38 分钟 CPU 无法完成，debug 无混淆同样）；⑤ 单函数语句上限约 1400 条封顶任何
  逐语句累积。该触发改由工具链仓 `test/test_recursion_safety.py`（合成深图/环图差分）覆盖。
- **ArkTS 编译器上限速查（本轮实测）**：单函数语句数 ~1400（"too large for control flow analysis"）；
  单布尔表达式项数 ~700-800（900 触发 Unknown Error 00308018）；嵌套字面量深度 ~2400-2600
  （entry 实测 2400 过 / 2600 挂）；模块级复杂度预算共享（两巨型语料同模块叠加触发 Unknown Error）；
  成员访问总数呈二次方代价。

## 字符串边界语料（2026-09-10，feat_api lang + tools/gen_string_stress.py）

**目的**：ark_disasm 文本输出对字符串**完全零转义**（引号、换行、CR、控制字符一律裸输出；
代理对按 MUTF-8/CESU-8 裸字节写出，会使整个 .dis 不再是合法 UTF-8——注意 Python repr/`errors=
backslashreplace` 观察时 `\t`/`\\`/`\ufeff` 均为显示假象，实测池与方法操作数两处皆无转义），
下游按行/按引号切分的文本解析器存在结构性风险。本语料把全部边界形态同时压入三个解析面：
① METHODS 段指令操作数（`lda.str "…"`/`stobjbyname`，引号配对与换行伪造指令行）；
② LITERALS 段缓冲（createarraywithbuffer/createobjectwithbuffer 的键与值）；③ STRING 段字符串池
（`[offset:0x…, name_value:裸值]`，值内 `\n[offset:` 伪造池条目、`# XXX ====…` 伪造段分隔）。

- **StringStressLab.ts**（feat_api lang，生成器 `tools/gen_string_stress.py`，131 用例）：
  分组 = 基础边界 / 引号 / 反斜杠 / 换行回车 / 转义碰撞 / Unicode+代理对 / 池伪造 / 方法伪造 /
  段伪造 / record 伪造 / **操作数分支矩阵** / 超长 / 近重复 / 现实漏洞载荷（XSS、SQLi、log4j、
  HTTP CRLF…）/ 乱炖组合。
  形态 = `stringStressAt(i)` if-chain（131×lda.str）+ 数组字面量 + 恶劣键对象字面量 +
  动态键读写（`",k`/`""""`/`jump_label_0:`/`.catchall` 键）+ 捕获洞检查
  （throw.undefinedifholewithname 单串操作数面）+ 模板块 + `stringStressChecksum()` 校验和
  （防 tree-shake）。挂载于 RuntimeDemo 'run string stress battery' 按钮；
  **运行时基线：`strstress=n=286 len=14385 acc=61781209`**
  （API26 release 包，2026-09-10 第二轮后模拟器实测）。
- **操作数分支矩阵（2026-09-10 第二轮，+16 用例 #112-127）**：针对 `find_next_delimiter` 类
  引号配对函数的全分支定向：`",` 相邻（值首/中间/尾部）、4/5/6 连引号、字面 `"\` 序列、
  label/`.catchall`/`.function` 变体伪造。逐用例同步归因：**奇数连引号（5 连）挂、偶数（4/6 连）
  不挂；`",` 值首/中间挂、尾部不挂；`"\`（引号+反斜杠+引号，恰为解析器硬编码特判 `'"\\"'`
  的对抗形态）挂；双换行 label 伪造挂（孤儿引号机制）、单换行不挂**——8/16 挂死全部落在
  既有 Bug#2（AsmMethod._process_common_inst idx 归零），无新 bug 类。指令面可达性（es2abc
  实测）：lda.str/stobjbyname/ldobjbyname/throw.undefinedifholewithname 可定向触发；
  tryldglobalbyname 等操作数只能是合法标识符（内容不可恶劣化）；newlexenvwithname 名字数组
  在当前 SDK 闭包形态不可达（闭包走无名 newlexenv），其 literal 数组解析路径由数组/对象
  字面量组等价覆盖。
- **逆向工具链实测 bug 清单**（临时脚本逐用例最小模块 → es2abc → ark_disasm → DisFile 往返比对；
  均已最小复现归因，按严重度排序）：
  1. **整模块静默为空**：字符串内容含 `\n# XXX ====================`（伪造段分隔行）→ 段扫描/
     `_count_parts` 段序断言崩溃 → 管线 `init_single_dis_file` 吞异常返回空 DisFile →
     该 abc 全部 methods/records/literals/strings 丢失。**发布产物 feat_api release .dis 实测 0.6s 崩溃**。
  2. **解析死循环（挂死+内存膨胀）**：内容含 `"`（JSON/SQL/HTML/XSS/URL/XML 等 19/44 引号类用例）
     → 指令操作数行引号失衡 → `find_next_delimiter_single_line` 返回 -1 →
     `AsmMethod._process_common_inst` 第二循环 `idx = -1 + 1 = 0` 永不前进。多行操作数的孤儿
     收尾 `"` 行同样触发。最小复现：`lda.str "say "hi" ok"`、`lda.str """"`。
  3. **换行加倍**：池多行字符串重组 `"\n".join(readlines 含行尾 \n)` → `\n`→`\n\n`、孤立
     `\r`→`\r\n`；含换行字符串全部 round-trip 损坏（newline 组 12/12）。
  4. **代理对静默丢失**：`open(errors="ignore")` 吞 CESU-8 裸字节 → emoji/𝕏/孤立代理内容残缺
     （`x\ud800y`→`xy`）；且方法操作数处的裸字节使整个 .dis 非法 UTF-8，殃及全文件。
  5. **整池丢失**：值内 `\n[offset:0x…, name_value:x]` → 伪造行被当新条目 → 首段无闭括号
     → `AsmString` 断言 → string 任务整体被 `future.result()` 吞 → asmstrs 全空。
  6. **方法体切碎/伪造指令入 IR**：内容行伪装 `L_ESSlotNumberAnnotation:`/`\tsta v0`/
     `.function …{`/`}` → 方法错误切分（单用例实测 methods 归零或翻倍）、伪指令进入 IR。
- **复现方法**：`python3 tools/gen_string_stress.py` 重生成语料 → `build.py` → 对 feat_api 的
  modules.abc 跑 ark_disasm → 以逆向工具链仓 DisFile 解析该 .dis（逐用例归因用「单用例最小模块」
  法，详见工具链仓会话记录；勿在本公开仓放置引用私有路径的脚本）。
