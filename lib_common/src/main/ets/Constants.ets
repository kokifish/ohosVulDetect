/**
 * 良性基准常量（安全对照：全部使用 https/wss 外部目标，无敏感值）。
 */
export class BENCH {
  static readonly VERSION: string = 'ovd-bench-1.0.0';
  static readonly API_BASE: string = 'https://httpbin.org';
  static readonly WS_ECHO: string = 'wss://echo.websocket.org';
  static readonly TCP_HOST: string = '93.184.216.34';
  static readonly BUNDLE: string = 'com.koki.VD';
}
