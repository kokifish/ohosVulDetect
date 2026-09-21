# docs/VULNS.md — 漏洞语料说明（类型 / 成因 / 利用方式 / 危害）

> 口径：与 groundtruth/manifest.json 一一对应的 91 条预埋漏洞（每条配有同形安全孪生 `*S`，检测规则形态见 manifest `detection` 字段）。
> 本文档回答四个问题：每条语料**是什么漏洞**、**代码里长什么样（成因）**、**攻击者怎么利用**、**造成什么危害**。
> 所有 ID/常量均为基准虚构载荷（`vd-bench`/`AKIDBENCH`/`ovd://` 等），不含真实凭据；孪生实现见各分类 `Twins.ets`。
> 静态 FP 自检：`python3 tools/check_twin_fp.py`（孪生 detection/函数体双面 × 漏洞规则常量子串感知扫描，FAIL=常量级重叠/函数缺失，WARN=设计内 call 级同形）。

## 总览

| 族 | 条数 | 漏洞主题 | 主要 CWE |
|---|---|---|---|
| SECRET | 5 | 硬编码秘密/密钥（含反扫描重组变体） | 798/321 |
| CRYPTO | 7 | 弱算法/弱模式/短密钥/固定 IV·nonce | 327/328/329/326/1204 |
| NET | 6 | 明文传输/证书校验绕过（含存储凭据回传链） | 319/295/522 |
| WEB | 7 | WebView 调试/桥暴露/XSS/混合内容/文件访问/开放跳转/无来源校验桥 | 489/749/94/311/79/601 |
| INJ | 4 | SQL 注入/路径穿越/不安全反序列化导航 | 89/22/20 |
| STOR | 4 | 明文存储/低安全级数据库/PII 缓存 | 312/668/359 |
| LOG | 2 | 日志泄露令牌/口令 | 532 |
| IPC | 5 | exported 面/魔杖参数/TCP 后门/deeplink 穿越/事件提权 | 862/200/306/22/345 |
| PERM | 1 | 权限申请-不用 | 732 |
| PASTE | 4 | 剪贴板敏感数据（跨设备/常驻监听） | 200/359 |
| PRIV | 3 | 设备指纹/持续定位外传（含读→传链） | 359/200 |
| AUTH | 7 | 客户端鉴权/可预测令牌/userAuth 误用/跨设备信任 | 798/693/338/602/308/330/306 |
| DEBUG | 2 | 调试开关残留/后门 PIN | 489/912 |
| CONF | 2 | 内网端点硬编码 | 200 |
| NATIVE | 2 | .so 内嵌密钥/原生缓冲区溢出 | 798/120 |
| BACK | 1 | 备份开启 × 明文令牌 | 530 |
| FORM | 2 | 卡片路由开放跳转/消息未校验（鸿蒙特色） | 601/20 |
| CERT | 3 | 自签证书/恒真门/pin 失效放行（DeviceCertificateKit） | 295/343 |
| MEDIA | 3 | 相册枚举外传/静默写入/元数据拼接外传（MediaLibraryKit） | 359/200 |
| KEYLOG | 3 | 全局热键监听/聚合落盘/join 批量外传（InputKit） | 200/1176 |
| DRM | 2 | 保护级别不校验/统计越权（DrmKit） | 757/693 |
| SPEECH | 2 | 语音会话窃听/引擎滥用（CoreSpeechKit） | 200/359 |
| A11Y | 2 | 无障碍态侦察/读屏情报收集（AccessibilityKit） | 200/359 |
| BGTASK | 1 | 常驻后台任务掩护静默采集 | 359 |
| DLINK | 3 | 深链参数无白名单执行/开放跳转/子串令牌放行 | 862/601/20 |
| XMOD | 4 | 跨模块分布：HAR 硬编码主密钥·会话缓存链 / HSP 明文保险箱·恒真信任 | 321/312/285 |
| CEVT | 1 | 公共事件明文广播会话令牌（无订阅方权限门） | 200 |
| NOTIF | 1 | 通知栏明文携带验证码/会话令牌（锁屏可读） | 200 |
| IRED | 1 | 不可信 want 字段原样转投 startAbility | 940/862 |
| PWDIN | 1 | 密码语义输入框 Normal 明文回显（UI 属性面） | 522 |

---

## OVD-SECRET — 硬编码秘密（CWE-798/321）

**共性**：秘密随应用分发，任何人从包体（字符串池/反编译产物）即可提取；泄露后无法吊销"已印在所有副本里的钥匙"。

- **OVD-SECRET-001 云 AK/SK 对硬编码**
  - 成因：`Authorization: Basic AKIDBENCH…:wJalrXUtnFEMI…` 字面量拼进请求头。
  - 利用：反编译提取 → 直接构造云 API 请求冒充该应用身份。
  - 危害：云资源被完全接管（读写存储、发起付费服务、删库），计费与数据双损失。
- **OVD-SECRET-002 LLM API Key 硬编码**
  - 成因：`sk-ovdbench-…` Bearer 令牌字面量。
  - 利用：提取后置入任意客户端盗刷。
  - 危害：按调用计费的 AI 服务被刷爆账单；账号被云厂商封禁。
- **OVD-SECRET-003 PEM 私钥内嵌**
  - 成因：`-----BEGIN RSA PRIVATE KEY-----` 整段字面量，用于本地签名。
  - 利用：提取私钥 → 离线伪造任意签名（JWT、请求签名、更新包签名）。
  - 危害：签名体系整体失效——冒充服务端、伪造合法更新、解密历史流量。
- **OVD-SECRET-004 数据库连接串带口令**
  - 成因：`jdbc:mysql://root:P@ssw0rd_bench_2026@10.20.31.11/appdb` 字面量。
  - 利用：提取连接串 → 从任意网络位置直连数据库。
  - 危害：拖库/脱库、注入后门数据；root 账户横向渗透内网。
- **OVD-SECRET-005 运行时重组反静态扫描（对抗变体）**
  - 成因：秘密切成 `'wJal'+'rXUtnFEMI'+String.fromCharCode(47,…)` 运行时拼接。
  - 利用：无碍动态分析（hook 字符串构造/内存 dump 即得）；专门击穿"纯字面量 grep"类检测。
  - 危害：同 001；额外使简单规则型扫描器漏报——这是对检测器的对抗样本。

## OVD-CRYPTO — 弱密码学（CWE-327/328/329/326/1204/321）

- **OVD-CRYPTO-001 AES-ECB 模式**
  - 成因：`createCipher('AES256|ECB|PKCS7')`。
  - 利用：ECB 同明文同密文——对结构化数据（图片、令牌模板）做模式分析/字典重排即可还原。
  - 危害：加密形同模式编码，机密性归零。
- **OVD-CRYPTO-002 MD5 口令摘要无盐**
  - 成因：`createMd('MD5')` 直接摘要口令，无盐、单轮。
  - 利用：彩虹表/GPU 暴力破解（MD5 单轮 billions/s）。
  - 危害：拖库后全部口令可离线还原；口令复用殃及用户其他账号。
- **OVD-CRYPTO-003 SHA1 完整性校验**
  - 成因：`createMd('SHA1')` 做完整性摘要。
  - 利用：选择前缀碰撞构造同摘要的恶意载荷替换正版。
  - 危害：完整性承诺失效——恶意更新/交易内容可被无感替换。
- **OVD-CRYPTO-004 CBC 固定全零 IV**
  - 成因：`new Uint8Array(16)` 全零 IV + `AES256|CBC`。
  - 利用：相同前缀明文密文前缀相同可识别；首块异或操纵（bit-flipping）篡改解密结果。
  - 危害：攻击者可定向篡改解密后首块内容（如把"转账给A"改成"转账给B"）而不破坏填充。
- **OVD-CRYPTO-005 字面量密钥导入 HUKS**
  - 成因：`'0123456789abcdef…'` 经 `importKeyItem` 送入硬件密钥库。
  - 利用：提取字面量即等价拿到密钥本体——HUKS 的硬件保护只保护"生成的"密钥，导入的密钥秘密仍在代码里。
  - 危害：给弱密钥披上"进了安全芯片"的假象；实际机密性与硬编码无异。
- **OVD-CRYPTO-006 RSA1024+PKCS1**
  - 成因：`createAsyKeyGenerator('RSA1024|PRIMES_2')` + `RSA1024|PKCS1` 加密。
  - 利用：1024 位 RSA 可被国家级算力分解；PKCS1 v1.5 填充存在 Bleichenbacher 兜密攻击面。
  - 危害：会话密钥/敏感数据可被解密；标准要求 ≥2048+OAEP。
- **OVD-CRYPTO-007 GCM 固定字面量 nonce**
  - 成因：`'bench-fixed-nonce!!'` 截 12 字节作 GCM IV。
  - 利用：同 key 同 nonce 复用 → 异或两条密文得明文异或；进一步可伪造认证标签（GCM 认证密钥可恢复）。
  - 危害：AEAD 的机密性与完整性同时崩塌——GCM 误用比 ECB 更危险。

## OVD-NET — 明文传输/证书校验（CWE-319/295）

- **OVD-NET-001 凭据走 http://**
  - 成因：`http.request('http://httpbin.org/post', POST {user,password})`。
  - 利用：同网段 ARP 欺骗/恶意 Wi-Fi 即可嗅探 POST 体。
  - 危害：账号口令明文被截获；响应可被中间人篡改（注入假数据）。
- **OVD-NET-002 明文 ws:// 内网通道**
  - 成因：`ws.connect('ws://192.168.1.100:9000/telemetry')`。
  - 利用：内网监听/劫持未加密 WebSocket。
  - 危害：遥测数据泄露；调试通道可被劫持下发指令。
- **OVD-NET-003 SSL 错误直接 confirm**
  - 成因：Web `onSslErrorReceive` 事件里调用 `handler.confirm()` 放行。
  - 利用：中间人出示自签证书 → 页面照常加载。
  - 危害：WebView 内全部 HTTPS 形同虚设，可注入脚本窃取会话。
- **OVD-NET-004 证书校验函数恒 true**
  - 成因：`ovdNet004(host, pem) { return true; }` 不做任何比较。
  - 利用：任意证书（含攻击者自签）均通过。
  - 危害：与 003 同级——传输层身份认证被一行代码否定。
- **OVD-NET-005 证书锁定白名单为空**
  - 成因：`PINNING_WHITELIST: string[] = []`，空表直接放行。
  - 利用：假证书不触发 pinning 失败。
  - 危害：pinning 机制名存实亡，用户装了"安全锁"却没插钥匙。
- **OVD-NET-006 存储凭据经明文信道回传（call-chain 变体）**
  - 成因：`preferences.getSync('auth_token')` 取出持久化令牌 → `X-Bench-Auth` 头 → `http://vd-relay.example/ingest`。
  - 利用：同网段嗅探即得长效凭据（比一次性口令价值更高——是"存下来的钥匙"）。
  - 危害：存储违规与传输违规串联，单点泄露升级为凭据级持续泄露；考核检测器对两步数据流的理解。

## OVD-WEB — WebView 攻击面（CWE-489/749/94/311/79/601）

- **OVD-WEB-001 发布版开启 WebView 调试**
  - 成因：`setWebDebuggingAccess(true)` 无构建期开关。
  - 利用：USB/adb 连接 `hdc shell aa start` 调试通道 attach Chrome DevTools。
  - 危害：攻击者（或拿到设备的任何人）可审查/篡改页面 JS、读取全部 DOM 与存储。
- **OVD-WEB-002 javaScriptProxy 暴露高危方法**
  - 成因：桥方法表 `getToken/readFile/pay` 直接暴露给页面 JS。
  - 利用：页面内一行 `bridge.getToken()` 调原生能力；配合任意网页加载（见 007/006）即远程调用。
  - 危害：令牌窃取、任意文件读、支付调用——WebView 变成原生能力后门。
- **OVD-WEB-003 runJavaScript 拼接未过滤输入**
  - 成因：`runJavaScript(\`localStorage.setItem('u','${userInput}')\`)`。
  - 利用：输入含 `');恶意代码//` 即逃逸字符串上下文，在页面域执行任意 JS。
  - 危害：XSS→窃取页面数据/会话，联动 002 的桥升级为原生代码级危害。
- **OVD-WEB-004 MixedMode.All 混合内容**
  - 成因：`mixedMode(MixedMode.All)` 允许 HTTPS 页面加载 HTTP 子资源。
  - 利用：中间人替换 HTTP 子资源（脚本/图片）。
  - 危害：HTTPS 页面被降级注入，安全页面携带不安全内容。
- **OVD-WEB-005 fileAccess(true) + file:// 加载**
  - 成因：`fileAccess(true)` 且 `loadUrl('file://…')`。
  - 利用：配合注入/开放跳转让 WebView 读本地沙箱文件并回传。
  - 危害：本地文件读取（应用沙箱内任意文件），与 XSS 叠加成文件外泄链。
- **OVD-WEB-006 deeplink URL 未白名单入 Web**
  - 成因：Backdoor 页取 `last_want_uri` 直接 `loadUrl`。
  - 利用：`hdc` 或恶意网页拉起 `ovd://backdoor?path=<任意 URL>` → WebView 加载攻击者页面，进而调用 002 的桥。
  - 危害：一条 deeplink 就把"原生桥 + 任意页面"的组合拳递到攻击者手里。
- **OVD-WEB-007 原生桥无来源域校验**
  - 成因：`runJavaScript(method…)` 前不比对 `getUrl()` 的 host（孪生 007S 先取 host 比对白名单）。
  - 利用：诱导/劫持 WebView 加载任意域页面，页面 JS 直接调用桥方法。
  - 危害：把 002 的"谁能调桥"问题放大为"任何页面都能调"。

## OVD-INJ — 注入类（CWE-89/22/20/915）

- **OVD-INJ-001 SELECT 模板串拼接（SQLi）**
  - 成因：`SELECT … WHERE name = '${userName}' AND 1=1` 进 `querySql`。
  - 利用：输入 `' OR '1'='1` 绕过条件、`' UNION SELECT …--` 拖其他表。
  - 危害：整库（含 password 列）被读取/篡改。
- **OVD-INJ-002 DELETE 拼接（SQLi·破坏型）**
  - 成因：`DELETE FROM users WHERE name = '${target}'` 进 `executeSql`。
  - 利用：输入 `' OR '1'='1` 使 WHERE 恒真 → 全表删除。
  - 危害：数据毁灭型注入，无联合查询也能一键清库。
- **OVD-INJ-003 路径穿越**
  - 成因：`${ctx.filesDir}/${userPath}` 直接 `openSync`。
  - 利用：`../../../etc/hosts` 类相对路径逃出沙箱目录读任意可读文件。
  - 危害：越权读取配置/缓存/其他应用共享文件（沙箱内相对越权）。
- **OVD-INJ-004 外部 JSON payload 驱动路由**
  - 成因：`JSON.parse(externalPayload)` 后 `router.pushUrl({url: page})` 未校验。
  - 利用：推送/剪贴板/任何外部通道投喂 `{"page":"javascript:…或伪造页","fn":"getToken"}`。
  - 危害：钓鱼页替换 + 函数调用分发——注入的页面可继续调用应用内能力（本页孪生 004S 用页面白名单防护）。

## OVD-STOR — 不安全存储（CWE-312/668/359）

- **OVD-STOR-001 token 明文入 preferences**
  - 成因：`putSync('auth_token', token)` 落 `/data/…/preferences`（XML 明文）。
  - 利用：备份提取/ROOT 设备/同签名组件读取。
  - 危害：会话令牌被窃 → 冒充用户到过期为止。
- **OVD-STOR-002 凭据明文写文件**
  - 成因：`user=bench;pwd=Admin@123;ak=…` 写 `filesDir/user_credentials.txt`。
  - 利用：同上；`allowToBackupRestore` 开启时还能随备份进用户电脑（联动 BACK-001）。
  - 危害：口令+AK 双泄露，静态文件一锅端。
- **OVD-STOR-003 敏感表用 S1 安全级**
  - 成因：BenchDb `securityLevel: relationalStore.SecurityLevel.S1`（含 password 列）。
  - 利用：S1 不要求加密保护，物理提取/备份可直读。
  - 危害：数据库安全等级承诺与数据敏感度错配（应为 S3）。
- **OVD-STOR-004 PII 明文缓存**
  - 成因：手机号+身份证号+token JSON 写 `cacheDir/profile_cache.json`。
  - 危害：身份证号属强个人标识——泄露即支撑精准诈骗/冒名开户；缓存目录最易被忽略防护。

## OVD-LOG / OVD-DEBUG — 日志与调试残留（CWE-532/489/912）

- **OVD-LOG-001 `%{public}s` 打印 token**
  - 成因：`hilog.info(…,'%{public}s', \`token=${AUTH_TOKEN}\`)`。
  - 利用：`hilog` 缓冲区任何本地应用/adb 可读——public 标签绕过发布版隐私脱敏。
  - 危害：一台共享设备或一次日志收集即令牌泄露。
- **OVD-LOG-002 hilog 打印口令**
  - 成因：`hilog.debug('%{public}s', \`pwd=${password}\`)`。
  - 利用：同上（debug 级默认关闭但可开）。
  - 危害：口令进日志=口令写进了任何人可读的持久缓冲。
- **OVD-DEBUG-001 IS_DEBUG=true 遗留**
  - 成因：`const IS_DEBUG = true` 无构建裁剪，开启即 dump 敏感数据。
  - 危害：发布版携带完整调试自曝行为，配合 LOG-001 直接把 token/db 状态打满日志。
- **OVD-DEBUG-002 后门 PIN 0000**
  - 成因：`pin === '0000'` → `ovd_is_admin=true`。
  - 利用：输入全宇宙最常被试的 0000。
  - 危害：鉴权体系存在旁路——知道约定俗成弱 PIN 即提权。

## OVD-IPC / OVD-BACK — 组件暴露与本地服务（CWE-862/200/306/22/345/530）

- **OVD-IPC-001 exported Ability 无调用方校验**
  - 成因：module.json5 `exported: true` 且 onCreate 不验 caller（manifest 规则型检测）。
  - 利用：任意第三方应用 `startAbility` 拉起并投喂参数。
  - 危害：应用内"仅内部"功能成为全系应用可用的公共入口。
- **OVD-IPC-002 魔杖参数返回内嵌凭据**
  - 成因：`params['magic'] === '0vD_b4ckd00r'` → 输出 `OVDBACKDOORSECRET123`。
  - 利用：startAbility 带上魔杖参数读返回值；魔杖本身可从反编译提取。
  - 危害：基于"隐藏参数"的伪鉴权——隐蔽性不是安全性。
- **OVD-IPC-003 无认证本地 TCP 后门**
  - 成因：`socket` 绑 `0.0.0.0:18888`，任何连接回显 `token=${AUTH_TOKEN}`。
  - 利用：同设备恶意应用或同网段主机直接 connect 即拿 token（DataShare 缺位后的 TCP 变体）。
  - 危害：网络可达的敏感数据兜售口；`0.0.0.0` 使暴露面越过本机。
- **OVD-IPC-004 deeplink path 参数未净化**
  - 成因：`ovd://backdoor?path=` 后段直接当路径使用。
  - 利用：外部 App/网页拉起 deeplink 投喂穿越路径（联动 INJ-003 的读取原语）。
  - 危害：一行 URL 即远程驱动文件读取原语。
- **OVD-IPC-005 emitter 事件改写鉴权状态**
  - 成因：`emitter.on('ovd.admin')` 收到 `admin==='1'` 直接置 `ovd_is_admin=true`，无签名校验。
  - 利用：同设备任意应用发同一事件（emitter 是系内广播面）。
  - 危害：权限状态被跨应用改写——一发事件即提权。
- **OVD-BACK-001 允许备份 × 明文令牌**
  - 成因：entry `backup_config.json` `allowToBackupRestore: true`，而 STOR-001/002 存明文。
  - 利用：用户/攻击者触发备份 → 明文凭据随备份流落外部存储或电脑。
  - 危害：把设备内漏洞放大为"合法通道"的数据外带。

## OVD-PERM / OVD-PASTE / OVD-PRIV — 权限与隐私面（CWE-732/200/359）

- **OVD-PERM-001 CAMERA/MICROPHONE 申请-不用**
  - 成因：module.json5 声明却无任何调用（manifest 规则检测）。
  - 危害：权限最小化失守——多拿的权限扩大未来漏洞的爆炸半径，也触发应用市场合规风险。
- **OVD-PASTE-001 口令写入剪贴板**
  - 成因：`pasteboard.createData(TEXT_PLAIN, password)` → `setData`。
  - 利用：同设备任意应用（或用户误粘贴）读剪贴板。
  - 危害：剪贴板是全系共享面，敏感数据入板即半公开。
- **OVD-PASTE-002 页面生命周期读剪贴板**
  - 成因：`onPageShow` 里 `pb.getData()`。
  - 危害：反向面——应用每次亮页即窥剪贴板（用户复制了什么就收集什么）；同时也是"恶意应用如何偷剪贴板"的教科书形态。
- **OVD-PASTE-003 敏感令牌跨设备共享**
  - 成因：`setProperty({shareOption: CROSSDEVICE, localOnly: false})`。
  - 利用：同账号多端剪贴板同步把令牌扩散到其他设备（含不可信环境）。
  - 危害：单设备剪贴板泄露升级为跨设备链路泄露。
- **OVD-PASTE-004 剪贴板常驻监听**
  - 成因：`pb.on('update', …)` 生命周期内常驻回调，内容变化即 POST 收集端点。
  - 利用：用户复制口令/验证码/卡号的瞬间即被截获，无需任何前台交互。
  - 危害：剪贴板从"被动窥视"升级为"实时监听"，是移动端经典的持续性隐私面。
- **OVD-PRIV-001 设备指纹上传内网 http**
  - 成因：brand/model/hardware/os 拼 fingerprint POST `http://10.20.31.11/collect`。
  - 危害：设备可追踪标识外传 + 明文通道双违规。
- **OVD-PRIV-002 持续定位走明文 ws**
  - 成因：`getCurrentLocation()` → `ws://192.168.1.100:9000/track`。
  - 危害：实时位置暴露给第三方，人身安全级隐私风险。
- **OVD-PRIV-003 设备指纹读取→外传两步链（call-chain 变体）**
  - 成因：`deviceInfo.productModel/osFullName` 读取后依序 `request` 外传遥测端点，无授权门。
  - 利用：无感知收集设备画像用于追踪/定向。
  - 危害：设备可追踪标识外传；考核"先读敏态再外传"顺序数据流的检测。

## OVD-AUTH — 鉴权与信任链（CWE-798/693/338/602/308/330）

- **OVD-AUTH-001 客户端硬编码口令门**
  - 成因：`user==='admin' && pass==='Admin@123'` 本地比对。
  - 利用：反编译提取或直接试默认口令。
  - 危害：鉴权在客户端=没有鉴权。
- **OVD-AUTH-002 客户端时钟授权到期**
  - 成因：`Date.now() > LICENSE_EXPIRE_TS` 单边判断。
  - 利用：改系统时间/改包翻转分支/内存补丁。
  - 危害：付费墙/许可锁一拔即过——收入损失且无法追溯。
- **OVD-AUTH-003 Math.random 生成会话令牌**
  - 成因：`'tok_' + Math.random().toString(36)…`。
  - 利用：PRNG 可预测——观测少量令牌即可推导后续值，或直接离线枚举。
  - 危害：会话劫持（可预测的"不可预测值"）。
- **OVD-AUTH-004 userAuth 结果仅客户端置信**
  - 成因：`auth.start()` 后不取 token 上服务端验证，本地直接 `ovd_admin=granted`。
  - 利用：本地指纹校验通过≠远端授权——改包跳过 start 或 hook 回调即可；正确做法是把 token 送服务端核验（孪生 004S）。
  - 危害：设备主人之外的攻击者借"认证即授权"的混淆直接拿管理员态。
- **OVD-AUTH-005 支付级操作用 ATL1+PIN**
  - 成因：支付上下文 `authTrustLevel: ATL1` 且仅 PIN。
  - 危害：ATL1+PIN 抗不了协同胁迫/ Pin 被窥场景；支付级要求 ATL3 生物特征（孪生 005S）。
- **OVD-AUTH-006 challenge 固定复用**
  - 成因：`new Uint8Array([0xde,0xad,0xbe,0xef])` 常量 challenge。
  - 利用：重放历史认证产物（challenge 不新鲜 → 认证证明可复用）。
  - 危害：认证"一次性证明"退化成可重放票据。
- **OVD-AUTH-007 跨设备信任缺失（call-chain 变体）**
  - 成因：`createDeviceManager` → `getAvailableDeviceList` 枚举组网设备后不校验信任等级直接同步到 `vd-mesh.example/sync`。
  - 利用：恶意配对设备进入组网即可无条件接收同步数据。
  - 危害：分布式场景的信任门缺失——数据流向不可信端点（孪生 007S 按允许列表逐台门控）。

## OVD-CONF — 内网信息泄露（CWE-200）

- **OVD-CONF-001/002 内网管理/调试端点硬编码**
  - 成因：`http://10.20.31.11:8080/admin`、`ws://192.168.1.100:9000/debug` 字面量。
  - 利用：反编译获取内网拓扑 → 定向攻击内网管理面（配合钓鱼/内网立足点）。
  - 危害：为攻击者绘制内网地图；管理端点+明文=双重馈赠。

## OVD-NATIVE — 原生层（CWE-798/120）

- **OVD-NATIVE-001 密钥内嵌 .so**
  - 成因：`xorNative` 的 XOR 密钥硬编码在 libentry.so（abc 层不可见，需 so 分析）。
  - 利用：IDA/objdump 提取 .so 常量。
  - 危害："藏进 native"只是提高提取门槛；且 abc 级检测应为负样本（本基准用它验证检测器的分层能力）。
- **OVD-NATIVE-002 napi strcpy 无边界**
  - 成因：`vulnCopy` 在 C++ 用 `strcpy` 拷贝 JS 传入字符串。
  - 利用：传入超长字符串触发栈/堆溢出（基准里 64B 演示路径）。
  - 危害：原生层内存破坏 → 潜在任意代码执行（比 JS 层漏洞严重一个量级）。

## OVD-FORM — 鸿蒙卡片特色面（CWE-601/20）

- **OVD-FORM-001 卡片 router 目标未白名单**
  - 成因：卡片 `postCardAction({action:'router', params:{target: cardTarget}})` 的 target 来自卡片数据。
  - 利用：卡片数据可被 FormKit 更新链路投喂（恶意消息/第三方卡片数据源）→ 拉起任意页面/Ability。
  - 危害：从桌面卡片发起的开放跳转——用户点的是自家卡片，进的是攻击者页面（孪生 001S 全等白名单）。
- **OVD-FORM-002 onFormEvent 消息未校验落库**
  - 成因：`JSON.parse(message)` 后整包 `prefs.put('form_raw_event', message)`，无 schema/长度限制。
  - 利用：伪造 FormProvider 消息注入任意内容入库（超长→存储膨胀，恶意结构→下游解析炸）。
  - 危害：存储型注入原语 + 拒绝服务。

---

## OVD-CERT — 证书信任（DeviceCertificateKit，CWE-295/343）

- **OVD-CERT-001 自签证书直接信任**
  - 成因：内置 `vd-vuln-selfsigned` PEM 直接 `createX509Cert` 并采信。
  - 危害：生产信任锚被顶替，中间人证书可被接受。
- **OVD-CERT-001S 可信 CA 签发语义**：非自签载荷走系统信任锚语义。
- **OVD-CERT-002 证书校验门恒真（predicate 变体）**
  - 成因：`createX509Cert` 后校验函数恒 `return true`（同步函数体，predicate 面）。
  - 危害：校验门形同虚设。
- **OVD-CERT-002S 真实过期比较**：`getNotAfterTime()` 逐项校验。
- **OVD-CERT-003 pin 不匹配仍放行（api-call+const-array 变体）**
  - 成因：`TRUSTED_PINS` 常量数组 + `createX509Cert` 解析对端证书，指纹不在 pin 集合仍继续连接。
  - 利用：攻击者证书指纹不在 pin 列表 → 本应中止却照常建连。
  - 危害：pinning 防线存在但判断结果被忽略——"有锁不用"形态；考核 const-array 与调用面的联合判定。
- **OVD-CERT-003S pin 不匹配即中止**：同形解析，mismatch 即 ABORT。

## OVD-MEDIA — 媒体库隐私（MediaLibraryKit，CWE-359/200）

- **OVD-MEDIA-001 全相册枚举外传（flow 变体）**
  - 成因：`getAssets` 计数 + `vd-collect.example/album` POST 外传。
  - 危害：相册规模/内容画像泄露。
- **OVD-MEDIA-001S 本地计数不上传**：同 API、无外传步骤。
- **OVD-MEDIA-002 相册静默写入（flow 变体）**
  - 成因：`createAsset` 无用户交互落盘。
  - 危害：伪造媒体植入/藏匿载荷。
- **OVD-MEDIA-002S 用户主动保存**：写入由用户动作触发。
- **OVD-MEDIA-003 相册元数据拼接外传（string-op-flow 变体）**
  - 成因：`displayName` 经 `concat` 拼进 `vd-collect.example/media-meta` 查询串外传。
  - 危害：照片名含人名/地点/会议等高敏语义；考核"字符串算子+端点"联合判定。
- **OVD-MEDIA-003S 元数据仅本地展示**：无拼接 URL、无外传。

## OVD-KEYLOG — 输入监听（InputKit，CWE-200/1176）

- **OVD-KEYLOG-001 全局热键监听回传（flow 变体）**
  - 成因：`inputConsumer.on('hotkeyChange')` + `vd-collect.example/keys`。
  - 危害：隐蔽输入侧信道。
- **OVD-KEYLOG-001S 本地输入框内处理**：无全局订阅。
- **OVD-KEYLOG-002 热键事件聚合落盘**
  - 成因：事件聚合写 `vd-hotkeys.log`。
  - 危害：输入历史持久化可被后续窃取。
- **OVD-KEYLOG-002S 页内处理不聚合**。
- **OVD-KEYLOG-003 按键缓冲 join 后批量外传（string-op-flow 变体）**
  - 成因：`strokeBuf.join('')` 聚合 + `vd-collect.example/keystrokes` 批量上传。
  - 危害：批量聚合规避逐条上传审计；考核"字符串算子（join）+端点"联合判定。
- **OVD-KEYLOG-003S 逐键即时处理**：无聚合缓冲、无端点。

## OVD-DRM — DRM 保护（DrmKit，CWE-757/693）

- **OVD-DRM-001 保护级别不校验即播放（predicate 变体）**
  - 成因：`getMaxContentProtectionLevel()` 结果不比较，`if (level >= 0 || true)` 放行。
  - 危害：弱保护内容当强保护放行，版权约束失效。
- **OVD-DRM-001S 级别门控**：比较后才允许播放。
- **OVD-DRM-002 统计越权（flow 变体）**：`getStatistics` 越权读取。
- **OVD-DRM-002S 授权范围内统计**。

## OVD-SPEECH — 语音会话（CoreSpeechKit，CWE-200/359）

- **OVD-SPEECH-001 语音会话窃听（flow 变体）**：`startListening` 无提示采集。
- **OVD-SPEECH-001S 显式授权后启动**。
- **OVD-SPEECH-002 引擎滥用（flow 变体）**：`createEngine` 未约束使用场景。
- **OVD-SPEECH-002S 场景内使用**。

## OVD-A11Y — 无障碍侦察（AccessibilityKit，CWE-200/359）

- **OVD-A11Y-001 读屏态侦察（flow 变体）**：`isScreenReaderOpenSync` 探测辅助功能状态。
- **OVD-A11Y-001S 按需本地查询**。
- **OVD-A11Y-002 无障碍开关情报（flow 变体）**：`isOpenAccessibilitySync` 收集。
- **OVD-A11Y-002S 不做画像**。

## OVD-BGTASK — 后台任务滥用（CWE-359）

- **OVD-BGTASK-001 常驻后台任务掩护静默采集**
  - 成因：`startBackgroundRunning(DATA_TRANSFER)` 连续任务 + `vd-collect.example/bg-telemetry` 周期外传。
  - 利用：借"合法后台传输"身份让采集在退到后台后持续运行，绕过进程冻结。
  - 危害：用户无感知的持续数据外传；连续任务权限被滥用为免杀护身符（孪生 001S 仅一次性短窗延迟、无外传）。

## OVD-DLINK — 深链参数校验（CWE-862/601/20）

入口：`BackdoorAbility`（exported，skill `ovd://backdoor`）onCreate 对真实深链调用本族处理函数；`cat-dlink` 页按钮本地构造同形深链直调（E2E 用 `hdc shell aa start -U` 触发）。

- **OVD-DLINK-001 深链 cmd 无白名单直接执行**
  - 成因：`ovd://backdoor?cmd=` 参数不校验直接执行，`purge-all-now` 触发清库并落 `last_cmd`。
  - 利用：任意应用可拉起 exported Ability，构造破坏性指令参数。
  - 危害：远端诱导即触发数据清除等破坏性动作（孪生 001S 白名单 status/info，其余拒绝）。
- **OVD-DLINK-002 redirect 未校验直灌 openLink**
  - 成因：`getQueryValue('redirect')` 取参后不经 scheme/host 校验直接 `ctx.openLink`。
  - 利用：构造恶意 redirect 参数把用户带往任意目标（开放跳转/任意拉起）。
  - 危害：钓鱼跳转、任意 Ability 拉起链（孪生 002S 校验 https + host 白名单后才跳，且刻意不用 getQueryValue 断 call 链）。
- **OVD-DLINK-003 管理令牌子串匹配放行**
  - 成因：`raw.includes('admin-token=true')` 子串判定特权模式，参数名伪造/编码绕过均可命中。
  - 利用：在 uri 任意位置拼接令牌子串即提权。
  - 危害：特权模式未授权开启（孪生 003S 按 `session=` 参数精确解析 + 等值比较）。

## OVD-CEVT — 公共事件广播（CWE-200）

- **OVD-CEVT-001 会话令牌明文上公共事件总线**
  - 成因：`commonEventManager.publish('ovd.session.sync', {data: 'token=…'})` 无 subscriberPermissions 门，令牌随广播载荷落系统事件总线。
  - 利用：同设备任意应用 `createSubscriber({events: ['ovd.session.sync']})` 注册同名事件即截获载荷。
  - 危害：与 emitter 面（IPC-005）同级的系内广播泄露，但载荷为长效会话令牌；检测规则为 api-call+constant（publish + 事件名常量），孪生 001S 最小载荷 + 订阅方权限门。

## OVD-XMOD — 跨模块漏洞分布（CWE-321/312/285）

主体不在 feature HAP：XMOD-001/002 在 lib_common（HAR，静态编入依赖方 HAP），XMOD-003/004 在 lib_shared（HSP，独立 abc）。检验评分链路对非 feature 模块源码路径 record 的可达性；`cat-xmod` 页负责触发运行路径（防 tree-shake）。

- **OVD-XMOD-001 HAR 硬编码主密钥**
  - 成因：`vd-har-master-key-01!!` 硬编码进共享库，派生 SHA256 + GCM 信道。
  - 利用：反编译 HAR 即得密钥，全部依赖方 HAP 共享同一密钥。
  - 危害：一处泄露处处泄露，密钥无法单独轮换（孪生 001S 密钥改运行期参数）。
- **OVD-XMOD-002 HAR 会话收集链**
  - 成因：`harCollectSessions` 把会话明文 `sess_bench_harvest_000001` 写共享 preferences。
  - 利用：共享缓存跨页面/跨 HAP 可读。
  - 危害：会话材料驻留共享存储（孪生 002S 只累计匿名页面计数）。
- **OVD-XMOD-003 HSP 保险箱 token 明文缓存**
  - 成因：`tok_vd_hsp_vault_9f27c0` 明文 putSync 进 `vd_hsp_vault`。
  - 利用：读共享包缓存即得 token。
  - 危害：明文凭据驻留独立共享包 abc（孪生 003S 只读+脱敏）。
- **OVD-XMOD-004 HSP 信任判定恒真**
  - 成因：`ovdXmod004` 不查任何名单直接 `return true`（predicate 规则 return-true）。
  - 利用：任意 deviceId 视为可信 mesh 节点。
  - 危害：未授权设备接入信任面（孪生 004S 名单精确匹配）。

## 检测口径备注（评分联动）

- 规则形态分布见 manifest `detection.type`：string-literal / api-call+constant / api-call+string-concat / call-chain / predicate / string-op-flow / enum-ref / manifest / native / constant-flag 等——**有意覆盖多形态**，检验检测器不只靠 grep 字符串。
- 所有条目均有孪生 `*S`（expected:false）：检测器命中孪生即计 FP——防"宁可错杀"式规则。
- `OVD-SECRET-005`（重组反扫描）与 `OVD-NATIVE-001`（密钥在 .so）是对检测器分层能力的两类对抗样本：前者考"非字面量拼接流"，后者考"abc 层负样本判定 + native 层正样本"。

## OVD-NOTIF — 通知内容泄露（CWE-200）

- **OVD-NOTIF-001 通知栏明文携带验证码与会话令牌**
  - 成因：`notificationManager.publish` 的 `text` 直拼 `pay code 774811 / tok_vd_notif_2f8a`，无最小化处理。
  - 利用：锁屏/通知中心/穿戴设备/任何通知读取面直接可见；旁观者一瞥即得。
  - 危害：支付验证码 + 会话令牌经系统共享面泄露（孪生 001S 只发聚合摘要，敏感细节留在应用内）。

## OVD-IRED — Intent 重定向（CWE-940/862）

- **OVD-IRED-001 不可信 want 字段原样转投 startAbility**
  - 成因：外部通道（deeplink/剪贴板/推送/共享）投喂的 `action`/`uri` 不经白名单直接构造 want 派发。
  - 利用：驱动本应用身份拉起攻击者组件或携带任意 URI 的隐式跳转。
  - 危害：借可信应用为跳板的重定向链（孪生 001S 动作白名单门控，不在名单即拒绝派发）。

## OVD-PWDIN — 密码输入回显（CWE-522）

- **OVD-PWDIN-001 密码语义输入框 Normal 模式明文回显**
  - 成因：`TextInput` placeholder 声明密码语义，却用 `InputType.Normal` 且以明文 Text 渲染输入内容。
  - 利用：旁观者直读、截屏/录屏/共享屏幕即得明文口令。
  - 危害：凭据在展示层失守（孪生 001S 用 `InputType.Password` 圆点掩码并只回显长度）。
  - 检测形态：**UI 属性面**——placeholder 字符串与明文回显标记 `'plain-echo: '` 同记录共现（string-literal 双常量），首个非源码调用面的规则样本。
