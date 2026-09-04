# ohosVulDetect 基准测试 App 开发计划（v1 草案，供审阅）

> 目标：把 ohosVulDetect 从模板 App 升级为 **鸿蒙逆向/安全分析基准测试样本**：
> ① 尽可能广地覆盖 HarmonyOS 特性、组件与 API（含各种调用方式），用于逆向工具反编译准确性的度量；
> ② 预埋尽可能多的**带标签**漏洞/风险，用于 VulDetector 检出能力的打分（precision/recall）；
> ③ 结构清晰、逻辑简单——每个 demo / 漏洞都是独立小文件，一键可构建 hap+app。
>
> 环境：DevEco Studio 26.0.0 Beta / SDK 26.0.0 (API 26, HarmonyOS 7)，当前仓库已就位。
> 参考：官方 API 参考、ArkUI V1/V2 文档、华为安全编码系列、OWASP Benchmark/MASTG v2、DEKRA DVHA（详见文末参考）。

---

## 1. 设计原则

1. **一个事实源（ground truth）**：所有预埋漏洞登记在 `groundtruth/manifest.json`，代码内以 `// VULN: OVD-XXX-NNN` 注释标记，二者由脚本强一致校验。
2. **成对 twin**：每个漏洞配一个"安全孪生"（safe twin，`...S` 后缀），用于压制"全部报毒"型工具的 FPR（OWASP Benchmark 方法）。
3. **每文件一事**：一个 demo = 一个域 = 一个文件；一个漏洞 = 一个函数。页面只是"执行按钮 + 结果展示"，不含业务逻辑。
4. **多模块即多 abc**：每个 HAP/HSP 模块编译为独立 `ets/modules.abc`，.app 内含多个可独立分析的字节码文件——本身就是对逆向工具多模块处理能力的覆盖。
5. **可验证**：每模块带 hypium/UiTest 冒烟；工具侧新增 `test/bench_score.py`，对构建产物跑 VulDetector 规则并输出 scorecard。
6. **产物不进 git**：`*.hap/*.app/test.out/compare_out/` 保持 gitignored（与逆向工具仓库约定一致）。

## 2. 项目架构（多模块）

```
ohosVulDetect/
├── AppScope/app.json5                  # bundleName: com.koki.VD（沿用）
├── build-profile.json5                 # 模块清单 + debug/release(含 ArkGuard) 两个 target
├── entry/                              # [entry HAP] 壳 + 导航；无漏洞逻辑
│   ├── src/main/ets/
│   │   ├── entryability/EntryAbility.ets        # 生命周期全覆盖 + window 全套调用
│   │   ├── pages/Index.ets                      # Navigation + NavPathStack 主页（demo 浏览器）
│   │   └── model/DemoRegistry.ets               # 唯一的"目录"数据源：id/名称/域/路由
│   └── src/main/cpp/                   # NAPI libentry.so：benign(add/异步) + native 漏洞(硬编码密钥/strcpy)
├── feat_api/                           # [feature HAP] 良性 API 覆盖（按域一个文件）
│   └── src/main/ets/demos/<domain>/<Demo>.ets   # net/, data/, crypto/, media/, sensor/, ...
│       + workers/WorkerDemo.ets        # worker 文件（同模块编译进 abc）
├── feat_vuln/                          # [feature HAP] 预埋漏洞 + 安全孪生
│   ├── src/main/ets/vulns/<category>/<OVD-XXX-NNN>.ets
│   ├── src/main/ets/abilities/BackdoorAbility.ets   # exported:true 无 caller 校验（IPC 用例）
│   └── src/main/ets/datashare/DataShareExt.ets      # DataShareExtensionAbility（写权限用例）
├── lib_common/                         # [HAR] 静态共享：Logger、路由工具、常量（HAR 会被复制进各 HAP）
├── lib_shared/                         # [HSP] 动态共享：跨模块导出（index.ets），含动态 import() 目标
├── groundtruth/
│   ├── manifest.json                   # 漏洞清单（见 §6 schema）
│   └── check_manifest.py               # manifest ↔ 代码标记一致性校验
├── docs/                               # 本计划、用例索引、构建说明
└── entry|feat_*/src/ohosTest/...       # hypium 冒烟：startAbility + ON.id() 驱动每 demo 可执行
```

- 模块数：5 个 ArkTS 模块（entry/feat_api/feat_vuln/lib_common/lib_shared）+ 1 个 native addon → 构建 `.app` 后约 **5 个 modules.abc + 1~2 个 .so**。
- 规模预估：约 200–300 个方法（介于 pri_radar 与 Note 之间的可快速迭代体量，同时足够作为性能回归样本）。
- 依赖 HMS 云服务的 Kit（Push/Map/Account/Analytics，需 AGC 配置）**v1 不纳入**，列入 P5 可选。

## 3. 功能覆盖矩阵

### 3.1 API 域覆盖（feat_api，约 20 个域 × 4–6 个代表调用）

| 组 | 域 | 代表调用 |
|---|---|---|
| 网络 | http | `http.createHttp()` / `request`(Promise) / `requestInStream`+`on('dataReceive')` / `destroy` |
| | rcp | `new rcp.Session(cfg)` / `session.fetch/post(MultipartForm)` / `getDefaultSession`(API23+) |
| | socket/ws | `TCPSocket.connect` / `TLSSocket.connect(TLSSecureOptions)` / `webSocket.on('message')+send` |
| | connection | `hasDefaultNet/getDefaultNet/getNetCapabilities` / `createNetConnection().on('netAvailable')` |
| 数据 | preferences | `getPreferencesSync` / `put/get/has/delete/flush`（含 Sync 对） |
| | RDB | `getRdbStore` / `insert/query(RdbPredicates 链式)` / `ResultSet` 遍历 / `on('dataChange')` |
| | KV/分布式 | `createKVManager/getKVStore` / `put/get/sync`（权限声明为良性用例） |
| | Asset | `asset.add/addSync/query/update/remove`（安全存储的"正确示范"） |
| | 文件 | `fs.open/openSync/read/write/copyFile/stat/listFile` / `picker.DocumentViewPicker.select` |
| | DataShare | 消费侧 `createDataShareHelper` + query/insert（提供方在 feat_vuln） |
| 安全 | crypto | `createCipher('AES256|GCM|PKCS7')` init/doFinal / `createMd('SHA256')` / `createRandom` / RSA 签名验证 |
| | HUKS | `generateKeyItem` / `initSession→updateSession→finishSession` |
| | cert | `createX509Cert(blob).getPublicKey/verify` |
| 媒体 | media/audio/image | `createAVPlayer`+`on('stateChange')` 状态机 / `createAudioRenderer` / `createImageSource→createPixelMap` |
| 感知 | sensor/vibrator | `sensor.on/once/off('accelerometer')` / `vibrator.startVibration(preset)` |
| | 位置 | `geoLocationManager.getCurrentLocation` + `on('locationChange')`（权限用例） |
| | 设备 | `deviceInfo.*/batteryInfo.*` 同步属性 / `display.getDefaultDisplaySync()+on('change')` |
| 应用 | ability | Want+`startAbility` / `openLink`+`canOpenLink` / `terminateSelf` / `requestPermissionsFromUser` |
| | 事件 | `emitter.emit/on/once/off` / `commonEventManager.createSubscriber+publish/subscribe` |
| | 通知/粘贴板 | `requestEnableNotification+publish(SlotType)` / `pasteboard.setData/getData` |
| | 后台任务 | `startBackgroundRunning/stop` / `requestSuspendDelay` |
| | 下载 | `request.agent.create().on('completed')` |
| 窗口 | window | `getLastWindow` / `setWindowLayoutFullScreen` / `setPreferredOrientation` / 子窗口 `createWindow` |
| 并发 | taskpool/worker | `@Concurrent`+`taskpool.execute(优先级)` / `taskpool.Task.sendMessage` / `ThreadWorker.postMessage` |
| | sendable | `@Sendable class` / `collections.Array`+`Atomics` / `ArkTSUtils.locks.asyncLock` |
| 系统 | misc | `hilog` 变参 / `bundleManager.getBundleInfoForSelf` / `i18n.System.*` / `new intl.DateTimeFormat` / `hiTraceMeter` |

### 3.2 ArkUI / 语言特性覆盖（独立 demo 页）

- **状态管理 V1**：@State/@Prop/@Link/@Provide-@Consume/@Observed+@ObjectLink/@Track/@Watch/@Require、AppStorage(@StorageProp/Link)、LocalStorage、PersistentStorage、@Reusable。
- **状态管理 V2**：@ComponentV2+@Local/@Param/@Once/@Event、@ObservedV2+@Trace、@Computed、@Monitor/@SyncMonitor、@Provider/@Consumer、AppStorageV2/PersistenceV2（V1/V2 不混用于同一组件）。
- **组合与复用**：@Builder(全局/成员、引用传参)、@BuilderParam+尾随闭包、@Styles/@Extend/@AnimatableExtend、attributeModifier、@CustomDialog 与 DialogV2 族。
- **布局组件**：Column/Row/Stack/Flex、Grid/GridRow、RelativeContainer、WaterFlow、Scroll+嵌套滚动、Tabs 自定义 TabBar、Swiper。
- **列表渲染**：ForEach / LazyForEach+IDataSource+cachedCount / Repeat(.key/.virtualScroll/.template)。
- **导航**：Navigation+NavPathStack(push/replace/pop/传参)+NavDestination 生命周期+route_map.json；legacy `router` 对照页。
- **高级 UI**：NodeController+BuilderNode、RenderNode 自绘、FrameNode 树遍历、UIObserver；animateTo/.animation/keyframeAnimateTo/TransitionEffect/geometryTransition；手势组；Canvas/Path2D。
- **语言/IR 压力构造**（对逆向工具最有价值）：闭包捕获循环变量与多层闭包（lexenv 深层用例）、async/await 链 + Promise.all/race、async UI 事件处理器、try/catch/finally + 自定义 Error 子类、class 继承 + interface 多态分发、泛型类/函数、union/optional narrowing、Record 索引访问、枚举位运算、`import()` 动态加载 HSP、static 方法/字段。
- **API 26 新特性**（按 Beta 可用性，带 API 版本守卫）：沉浸式光效组件、多形态窗口/平行视界 2.0（可延后到 Release 版本）。

### 3.3 调用方式矩阵（每个域内刻意轮换）

callback 式 / Promise.then / async-await / Sync 孪生 / on-off-once 订阅 / 命名空间级函数 / 工厂+实例方法 / 构造+链式 builder / 枚举常量 / 权限门控调用 / 跨包调用(entry↔HAR↔HSP↔feature HAP) / 跨语言 NAPI / 跨线程 taskpool-worker。

## 4. 漏洞预埋清单（feat_vuln）

15 类约 42 个预埋漏洞 + 对应安全孪生（孪生数 ≥ 20）。ID 前缀 `OVD-`；详细实现要点与检测信号见 agent 调研归档（docs/vuln_notes.md，P3 时生成）。

| 类别 | ID 段 | 数量 | 代表用例（检测信号） |
|---|---|---|---|
| 硬编码秘密 | OVD-SECRET | 5 | AK/SK 对、`sk-` API key、PEM 私钥、拼接/编码混淆的秘密、HMAC 字面量密钥 |
| 弱密码学 | OVD-CRYPTO | 6 | `AES256\|ECB\|PKCS7`、`createMd('MD5')`/`createHash('SHA1')`、固定 IV Uint8Array、`createSymKeyFromString(字面量)`、无盐口令哈希、`RSA1024\|PKCS1` |
| 明文传输/证书校验 | OVD-NET | 5 | `http://`/`ws://` 字面量、`onSslErrorReceive→confirm()`、恒真 `verifyCertificate()`、空 pinning |
| WebView | OVD-WEB | 6 | `setWebDebuggingAccess(true)`、`javaScriptProxy` 暴露敏感桥、`runJavaScript(模板串)` 注入、`MixedMode.ALL`、`fileAccess(true)`、`loadUrl(want 参数)` 开放重定向 |
| 注入 | OVD-INJ | 4 | `querySql` 模板串 SQLi、`executeSql` 拼接、`fs.open(filesDir+用户输入)` 路径穿越、`JSON.parse(want 参数)→pushUrl` |
| 不安全存储 | OVD-STOR | 4 | preferences 明文 token、凭据写公共目录、RDB `securityLevel:S1` 存口令、PII 缓存 cacheDir |
| 敏感日志 | OVD-LOG | 2 | `hilog` `%{public}s` 打 token/口令 |
| IPC/导出面 | OVD-IPC | 5 | exported Ability 无 caller 校验、魔法参数返回凭据、DataShare 写权限过宽、deeplink 参数入敏感 sink、`emitter.on` 改鉴权状态、TCP 服务无认证 |
| 权限/隐私/粘贴板 | OVD-PERM/PASTE/PRIV | 5 | 申请不用(LOCATION/CAMERA/MIC)、`onPageShow` 读粘贴板、口令写粘贴板、`deviceInfo.udid` 上传 |
| 认证/会话/随机 | OVD-AUTH/RAND | 3 | 客户端硬编码口令门、`Date.now()>EXPIRE` 授权锁、`Math.random()` 生成 token |
| 调试残留 | OVD-DEBUG | 2 | `IS_DEBUG=true` 泄 PII、后门 PIN `0000` 提权 |
| 配置泄露 | OVD-CONF | 2 | 内网 IP `http://10.x` / `ws://192.168.x` 字面量 |
| 原生层 | OVD-NATIVE | 2 | .so 内硬编码 AES 密钥、napi handler `strcpy` 溢出（逆向工具的负样本：abc-only 工具应报不出） |

要点：所有字符串常量都会进入 abc literal pool，与逆向工具的 `match_str_pattern`/literal 分析直接对齐；twin 用 Asset Kit/HUKS/RdbPredicates 参数绑定/白名单校验实现"正确写法"。

## 5. Ground truth manifest（schema）

```json
{
  "id": "OVD-CRYPTO-002",
  "title": "MD5 password digest",
  "category": "weak-crypto",
  "cwe": "CWE-327",
  "mastg": "MASTG-TEST-0221",
  "module": "feat_vuln",
  "source": "feat_vuln/src/main/ets/vulns/crypto/OVD-CRYPTO-002.ets",
  "function": "digestPassword",
  "expected": true,
  "twin": "OVD-CRYPTO-002S",
  "difficulty": "basic",
  "detection": {
    "type": "api-call+constant",
    "call": ["createMd", "cryptoFramework"],
    "constant": "MD5"
  }
}
```

评分（工具侧 `test/bench_score.py`）：strict 匹配（module+function）与 loose（module+category）两档；TP/FP/FN/TN → 每 category 的 precision/recall/F1 与总 **Youden = TPR − FPR**；同时输出反编译门禁（`MODULE_ANALYZED` 计数 == 方法清单、`NOT MODULE_ANALYZED` == 0、无 worker 崩溃、与上一版 method 清单零丢失）。

## 6. 分阶段计划（每阶段验收后再进入下一阶段）

| 阶段 | 内容 | 验收标准 |
|---|---|---|
| **P0 骨架**（0.5–1 天） | 拆多模块（feat_api/feat_vuln/lib_common/lib_shared）、DemoRegistry+Navigation 主页、manifest schema + check 脚本 | hap+app 构建通过；工具全模块 MODULE_ANALYZED == 预期；method 清单入库为基线 |
| **P1 API 覆盖**（2–3 天） | §3.1 二十个域 demo + 调用方式矩阵轮换 | 构建通过；工具 0 opcode gap；抽查 ~20 个代表调用可被 `match_call_chain` 命中 |
| **P2 UI/语言特性**（1–2 天） | §3.2 V1/V2 状态、导航、懒加载、动画闭包、Node 族、worker/taskpool/sendable、动态 import | 工具全量 MODULE_ANALYZED 不回退；lexenv 用例的 `may-ld-from` 数量记录在案（作为 SA 简化能力基线） |
| **P3 漏洞预埋**（2–3 天） | §4 全量 + twins + manifest | check_manifest 一致；构建通过；工具 method 清单仅按预期新增 |
| **P4 基准评分**（1–2 天，工具主仓库） | VulDetector 规则注册表（JSON 化）+ `test/bench_score.py` + 首份 scorecard | 输出 scorecard；基准 app 纳入 compare_versions 回归集 |
| **P5 进阶变体**（后续按需） | ArkGuard 混淆 release 变体、HMS Kit（需 AGC）、Scan Kit、分布式、API26 沉浸式光效、Cangjie 混合开发（可选） | 变体各自出 scorecard 对比 |

## 7. 风险与开放问题（需你拍板）

1. **HMS 云依赖 Kit**（Push/Map/Account/Analytics 需 AGC 配置）：建议 v1 跳过，P5 可选。是否同意？
2. **敏感权限声明**：为制造 OVD-PERM 用例会声明 LOCATION/CAMERA/MIC 等申请-不用组合（静态分析语料不受运行时授权影响）。是否接受？
3. **ArkGuard 混淆变体**：混淆后逆向工具命中率必然下降，是"困难模式"对照。放在 P5 还是提前？
4. **bundleName** 沿用 `com.koki.VD` 还是改 `com.koki.ohosvuldetect`（影响 deeplink scheme 命名 `ovd://`）？
5. 工具侧 P4 的代码（VulDetector 规则表 + scorer）提交需另行授权（AGENTS.md 约定）。

## 8. 关键参考

- 官方 API 参考 / ArkUI 状态管理 V1/V2 / TS→ArkTS 语法约束：developer.huawei.com/consumer/cn/doc（harmonyos-references / harmonyos-guides）
- 包模型与字节码：application-package-structure-stage、hap/har/hsp-package、packing-tool、Ark Bytecode Fundamentals（gitee.com/openharmony/docs）
- 华为安全编码系列（UIAbility 导出、WebView 权限/JSProxy/runJavaScript、网络 CA、RdbStore 注入、Asset Store Kit）
- OWASP Benchmark（expectedresults.csv + Youden 评分）、MASTG v2（MASVS→MASWE→TEST→DEMO 链）、DVIA-v2 / InsecureBankV2（挑战列表 UX）、DEKRA DVHA + Harm0niz3r（Black Hat Europe 2025，鸿蒙漏洞样本先例）
- hypium/UiTest（`abilityDelegator.startAbility` + `ON.id()` 驱动每 demo）
