// 组件缺口试探页三（API26）：ContentSlot（C-API 内容槽，ArkTS 侧空槽即达意）/
// XComponentNode（NODE 型，经 NodeController 挂载）/ Particle（最小 emitter 配置）。
// 0 信号页约定：能渲染即达意。
import { XComponentNode, NodeContent, UIContext, FrameNode, NodeController } from '@kit.ArkUI';

class XcNodeController extends NodeController {
  private xcNode?: XComponentNode;

  makeNode(uiContext: UIContext): FrameNode {
    if (!this.xcNode) {
      this.xcNode = new XComponentNode(uiContext, { selfIdealSize: { width: 300, height: 120 } }, 'bench-xc-node', XComponentType.NODE, '');
    }
    return this.xcNode;
  }
}

@Entry
@Component
struct Ark26SlotDemo {
  private nodeContent: NodeContent = new NodeContent();
  private xcController: XcNodeController = new XcNodeController();

  build() {
    Column({ space: 10 }) {
      Text('content slot / xcomponent node / particle probe').fontSize(16)

      Column() {
        ContentSlot(this.nodeContent)
      }
      .width('90%').height(60)

      NodeContainer(this.xcController)
        .width('90%').height(80)

      Particle({
        particles: [
          {
            emitter: {
              particle: { type: ParticleType.POINT, config: { radius: 5 }, count: 8, lifetime: 2000 },
              emitRate: 8,
              shape: ParticleEmitterShape.CIRCLE,
              position: [60, 30]
            }
          }
        ]
      })
        .width('90%').height(60)
    }
    .width('100%')
    .padding(8)
  }
}
