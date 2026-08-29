import { drawing } from '@kit.ArkGraphics2D';
import { NodeController, FrameNode, RenderNode, DrawContext, UIContext } from '@kit.ArkUI';

// 高级 UI：NodeController + FrameNode + RenderNode 自绘。
class BenchRenderNode extends RenderNode {
  draw(context: DrawContext): void {
    const canvas = context.canvas;
    const pen = new drawing.Pen();
    pen.setColor(0xFF1E78FF);
    pen.setAntiAlias(true);
    canvas.attachPen(pen);
    canvas.drawCircle(70, 70, 60);
    canvas.detachPen();
  }
}

class BenchNodeController extends NodeController {
  private rootNode: FrameNode | undefined;

  makeNode(uiContext: UIContext): FrameNode | null {
    return this.rootNode ?? null;
  }

  attach(uiContext: UIContext): void {
    const fnode = new FrameNode(uiContext);
    const render = new BenchRenderNode();
    render.frame = { x: 0, y: 0, width: 140, height: 140 };
    fnode.getRenderNode()?.appendChild(render);
    this.rootNode = fnode;
  }

  detach(): void {
    this.rootNode?.dispose();
    this.rootNode = undefined;
  }
}

@Entry
@Component
struct NodeDemo {
  private controller: BenchNodeController = new BenchNodeController();

  build() {
    Column({ space: 12 }) {
      Text('NodeController / FrameNode / RenderNode').fontSize(18)
      NodeContainer(this.controller)
        .width(150)
        .height(150)
        .backgroundColor('#f5f5f5')
      Text('RenderNode 自绘圆环（无组件声明，纯节点树）')
        .fontSize(12)
        .fontColor('#666666')
    }
    .width('100%')
    .padding(12)
  }
}
