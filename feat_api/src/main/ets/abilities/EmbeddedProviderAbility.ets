// EmbeddedComponent 提供方：embeddedUI 类型扩展点（benign 覆盖，进程内嵌 UI 面）。
// d.ts 明示仅 2-in-1/平板可用——手机模拟器上 EmbeddedComponent 侧预期走 onError/占位。
import { EmbeddedUIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { Logger } from 'lib_common';

export default class EmbeddedProviderAbility extends EmbeddedUIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    Logger.info('EmbeddedProvider', `session create uri=${want.uri ?? ''}`);
    session.loadContent('pages/EmbeddedProviderPage');
  }
}
