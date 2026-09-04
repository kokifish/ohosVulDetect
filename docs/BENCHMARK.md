# ohosVulDetect 基准测试 App — 构建与使用手册

多模块 HarmonyOS 基准应用：① 广覆盖 API/ArkUI/语言特性，作为 ohre 反编译准确性语料；
② 预埋 51 个带标签漏洞 + 7 个安全孪生（groundtruth/manifest.json），作为 VulDetector 检测基准。

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
python3 build.py                    # release 构建（ArkGuard 混淆，两个 product 全出）
python3 build.py --product default  # 仅 default（API 26，ohre 语料）
python3 build.py --product emulator # 仅 emulator（模拟器安装变体）
python3 build.py --debug            # debug 构建（不混淆）
python3 build.py --clean            # 构建前清理（改混淆规则/product 后建议使用）
```

仅 3 个可选参数；工具链路径默认 `/Applications/DevEco-Studio.app`，可用环境变量 `DEVECO_STUDIO_HOME`/`DEVECO_SDK_HOME` 覆盖。

**等价手动命令**

```bash
export PATH=/Applications/DevEco-Studio.app/Contents/tools/{node,ohpm}/bin:$PATH
export DEVECO_SDK_HOME=/Applications/DevEco-Studio.app/Contents/sdk
HV=/Applications/DevEco-Studio.app/Contents/tools/hvigor/bin/hvigorw

ohpm install --all
$HV --no-daemon assembleHap --mode module -p product=<default|emulator> -p buildMode=<release|debug>
$HV --no-daemon assembleApp --mode project -p product=<default|emulator> -p buildMode=<release|debug>
```

产物：`build/outputs/{default,emulator}/ohosVulDetect-*-unsigned.app`。

### ArkGuard 混淆（release 默认开启）

各模块 `obfuscation-rules.txt` 当前生效：`-enable-property-obfuscation` + `-enable-toplevel-obfuscation`。
以下两项**实测会导致运行时崩溃**（2026-08-29，模拟器 6.1.1(24) 动态验证），故默认关闭、留有证据注释：

- `-enable-filename-obfuscation`：多包（HAP×3 + HSP）各自独立改写 record 路径，跨包模块解析 `SyntaxError`，进程启动即退（exit 254）；
- `-enable-export-obfuscation`：HSP 导出名跨包映射不一致，`&lib_shared/Index& does not provide an export name 'b1'`，同样 SyntaxError。

混淆实测结论（模拟器全量遍历 + ohre 逆向）：
- 混淆 release 包运行行为与 debug 完全一致（feat_api 52✅/9❌ 同一组环境性失败；feat_vuln 36✅/4❌）；
- ohre 对混淆包完全兼容（NOT MODULE_ANALYZED=0、UNKNOWN ops=0），方法名/record 路径保留（export/filename 关闭所致），字符串字面量不受混淆影响；
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
$HDC file send build/outputs/emulator/ohosVulDetect-emulator-unsigned.app /data/local/tmp/ohosvuldetect.app
$HDC shell "bm install -p /data/local/tmp/ohosvuldetect.app"      # 模拟器接受未签名 debug 包
$HDC shell "aa start -a EntryAbility -b com.koki.VD"
$HDC shell "snapshot_display -f /data/local/tmp/s.jpeg" # 截图
$E -stop ovdbench
```

自动化遍历脚本：`tools/emulator_sweep.py`（用法见文件头注释）。

## ohre 逆向 + 基准评分

```bash
cd <ohre 仓库根>
PYTHONHASHSEED=0 .venv/bin/python examples/dis_demo.py ohosVulDetect/build/outputs/default/ohosVulDetect-default-unsigned.app
python3 ohosVulDetect/groundtruth/check_manifest.py                                   # manifest↔源码一致性
python3 ohosVulDetect/groundtruth/score_vs_ohre.py test.out ohosVulDetect/build/outputs/default/ohosVulDetect-default-unsigned.app
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

ohre 侧缺口（截至 2026-09-03，feat_api hap 实测 823 条 `!UNKNOWN TAC`，全部来自下述 5 个指令名）：
`ldsendableclass`、`ldsendablelocalmodulevar`/`wideldsendablelocalmodulevar`、
`ldlazysendablemodulevar`/`wideldlazysendablemodulevar`（`NACtoTAC.py` dispatch 表缺项；
其余 9 条 sendable 指令已有 handler）。语料采纳前需先补齐 ohre 支持，否则 UNKNOWN 门禁不通过。

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

- `backgroundModes` 已从 module.json5 schema 移除（SDK 26），后台任务 demo 运行时 401；
- DataShareExtensionAbility 在 26.0.0 Beta SDK 未公开，IPC-003 改为 TCP 后门无认证用例；
- SDK 26 API 面变化清单（本项目适配记录）：CoreFileKit 导出 `fileIo`（非 fs）、`rcp.createSession`（非 new Session）、
  emitter 事件 id 为 string、`RdbPredicates.limitAs`、`Curve.Ease/EaseOut/Friction`、`animateTo` 需经 UIContext、
  `@Provider/@Consumer` 需带参、asset.Value 仅 boolean|number|Uint8Array、`display.on(type, cb)` 2 参。

## 巨型参数 wide 与杂项形态（2026-09-04，lang-runtime 扩展）

应用代码口径 158→**169/267**；并入 debug 语料后 **172/267**（debug 贡献 debugger/newlexenvwithname/
wide.newlexenvwithname）。覆盖统计工具：`tools/check_opcode_coverage.py --dump-dir compare_dis`
（release 构建跑一次落快照 → debug 构建再跑即并集；compare_dis/ 已 gitignore）。

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
  寄存器编号边界的行为，值得向 ohre 语料标注。

## API26 模拟器测试矩阵与 API24 差异（2026-09-04）

在 API26 模拟器（emulator 7.0.0.32，1320x2232）上实测全部构建形态：

| 构建形态 | 安装 | 运行 | 结果 |
|---|---|---|---|
| default release（API26 语料 + ArkGuard 混淆） | ✅ | ✅ | 6 重点页全绿，数值与 API24 逐项一致 |
| default debug（不混淆） | ✅ | ✅ | lang-runtime 16 行全对（rest=2 干净、debugger no-op）、0 TypeError |
| emulator release（API24 兼容包） | ✅ | ✅ | sendable/taskpool/runtime 全部正常（向上兼容） |

与 API24 的差异（均为实测）：
1. **`aa start` 可见性校验收紧**：API26 拒绝拉起 `exported:false` 的 ability（错误 10103001），
   API24 不拦。自动化遍历需走 entry 壳入口（EntryAbility exported:true → 点 "API Coverage"）。
2. **taskpool Priority 参数**：`execute(fn, args, Priority.HIGH)` 在 API26 运行时 ✅ 正常返回，
   API24 返回空 `{}`——是 API24 运行时限制而非用法错误；源码不加 Priority 以兼容双 product。
3. **网络沙箱放开**：API24 上 socket/net 类环境 ❌，API26 上 connection 查询类 ✅。
4. **bgtask 401 跨版本一致**（backgroundModes schema 问题与运行时版本无关）。
5. 模拟器分辨率不同（新镜像 1320x2232 vs 旧 1260x2720），自动化 swipe 坐标需按比例计算。
