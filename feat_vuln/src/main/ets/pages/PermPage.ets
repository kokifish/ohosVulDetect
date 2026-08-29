import { pasteboard } from '@kit.BasicServicesKit';
import { Runner } from 'lib_common';
import { ovdPerm001 } from '../vulns/perm/OVD-PERM-001';
import { ovdPaste001 } from '../vulns/perm/OVD-PASTE-001';
import { ovdPriv001 } from '../vulns/perm/OVD-PRIV-001';
import { ovdPriv002 } from '../vulns/perm/OVD-PRIV-002';

// 权限/隐私/粘贴板；PASTE-002 由 onPageShow 生命周期触发。
@Entry
@Component
struct PermPage {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  // VULN: OVD-PASTE-002 页面生命周期静默读粘贴板（CWE-200）
  onPageShow(): void {
    const pb = pasteboard.getSystemPasteboard();
    pb.getData().then((d: pasteboard.PasteData) => {
      const t = d.getPrimaryText() ?? '';
      this.lines.push(`PASTE-002 onPageShow read: ${t}`);
    }).catch(() => {
    });
  }

  build() {
    Column() {
      Text('permissions / privacy / pasteboard').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('001 declared-unused').margin(4).onClick(() => this.runner.run('001', () => ovdPerm001()))
        Button('paste-001 pwd').margin(4).onClick(() => this.runner.run('PASTE-001', () => ovdPaste001('Admin@123')))
        Button('priv-001 fingerprint').margin(4).onClick(() => this.runner.run('PRIV-001', () => ovdPriv001()))
        Button('priv-002 locate').margin(4).onClick(() => this.runner.run('PRIV-002', () => ovdPriv002()))
      }
      .width('100%')
      Scroll() {
        Column({ space: 2 }) {
          ForEach(this.lines, (l: string, i: number) => {
            Text(l).fontSize(11).fontFamily('monospace')
          }, (l: string, i: number) => `${i}-${l}`)
        }
        .alignItems(HorizontalAlign.Start)
        .width('100%')
      }
      .layoutWeight(1)
      .margin(4)
    }
    .height('100%')
  }
}
