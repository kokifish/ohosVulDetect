// 组件缺口试探页（API26 解锁后批次二）：SDK 声明面存在但语料未覆盖的候选组件。
// 编译器当第一道筛（无声明的直接报错裁掉），API26 镜像 sweep 当第二道筛（jscrash 裁掉）。
// 0 信号页约定：能渲染即达意。Particle 需重型 Particles<> 泛型配置、WithEnv.customEnv 键为
// 品牌化 CustomEnvKey（字符串字面量不可赋）——两者本轮不落，见 history 轮记录。
import { ArcAlphabetIndexer, WithEnv } from '@kit.ArkUI';

@Entry
@Component
struct Ark26MoreDemo {
  private indexer: string[] = ['A', 'B', 'C', 'D'];

  build() {
    Column({ space: 10 }) {
      Text('api26 more components probe').fontSize(18)

      WithEnv() {
        Text('withenv-child').padding(4)
      }

      ArcAlphabetIndexer({ arrayValue: this.indexer, selected: 0 })
        .width(120).height(72)

      UIPickerComponent() {
        Text('picker-row-a')
        Text('picker-row-b')
      }.width('90%').height(80)

      Component3D()
        .width('90%').height(80)

      ToolBarItem() {
        Text('toolbar-item-child').padding(4)
      }
    }
    .width('100%')
    .padding(8)
  }
}
