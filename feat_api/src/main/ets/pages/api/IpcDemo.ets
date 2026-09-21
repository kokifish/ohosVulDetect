// IPC 直连面（@ohos.rpc，IPCKit 未覆盖 Kit 的底层模块）：
// MessageSequence 本地 parcel 读写回卷 + RemoteObject 描述符 + 消息选项标志。
// 全部本地确定性，不建真连接（避免与系统 IPC 服务交互）。
import rpc from '@ohos.rpc';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct IpcDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'rpc direct (IPCKit base)',
        cases: [
          new Case('parcel rw', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            let seq: rpc.MessageSequence | undefined;
            try {
              seq = rpc.MessageSequence.create();
              seq.writeInterfaceToken('ovd.bench.IPC');
              seq.writeInt(42);
              seq.writeString('parcel-payload');
              seq.rewindRead(0);
              const token = seq.readInterfaceToken();
              const n = seq.readInt();
              const s = seq.readString();
              return `parcel token=${token === 'ovd.bench.IPC'} n=${n} s=${s}`;
            } catch (e) {
              return `parcel-err=${(e as BusinessError).code}`;
            } finally {
              if (seq !== undefined) {
                seq.reclaim();
              }
            }
          }),
          new Case('remote object', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const ro = new rpc.RemoteObject('ovd-bench-desc');
              const desc = ro.getDescriptor();
              const opt = new rpc.MessageOption();
              const syncFlag = opt.getFlags() === rpc.MessageOption.TF_SYNC;
              return `ro desc=${desc} sync-flag=${syncFlag} async-const=${rpc.MessageOption.TF_ASYNC}`;
            } catch (e) {
              return `ro-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('sequence sizes', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            let seq: rpc.MessageSequence | undefined;
            try {
              seq = rpc.MessageSequence.create();
              for (let i = 0; i < 8; i++) {
                seq.writeInt(i * 3);
              }
              seq.rewindRead(0);
              let sum = 0;
              for (let i = 0; i < 8; i++) {
                sum += seq.readInt();
              }
              return `seq readableBytes=${seq.getReadableBytes()} sum=${sum}`;
            } catch (e) {
              return `seq-err=${(e as BusinessError).code}`;
            } finally {
              if (seq !== undefined) {
                seq.reclaim();
              }
            }
          }),
        ],
      })
    }
    .height('100%')
  }
}
