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
