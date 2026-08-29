import { DrawContext, FrameNode, RenderNode, UIContext } from '@kit.ArkUI';

// @Builder/@BuilderParam/@Styles/@Extend/attributeModifier 组合复用形态。
@Styles
function paddedCard(): void {
  .padding(12)
  .borderRadius(8)
  .backgroundColor('#f0f0f0')
}

@Extend(Text)
function emphasisText(size: number, color: ResourceColor): void {
  .fontSize(size)
  .fontColor(color)
  .fontWeight(FontWeight.Bold)
}

@Builder
function globalGreeting(who: string) {
  Column() {
    Text(`global @Builder hello ${who}`).emphasisText(16, '#333333')
  }
}

class ButtonModifier implements AttributeModifier<ButtonAttribute> {
  applyNormalAttribute(instance: ButtonAttribute): void {
    instance.backgroundColor('#007DFF')
    instance.borderRadius(4)
  }
}

@Component
struct SlotChild {
  @BuilderParam slotBuilder: () => void = globalDefaultSlot;

  build() {
    Column({ space: 6 }) {
      this.slotBuilder()
    }
    .width('100%')
    .paddedCard()
  }
}

@Builder
function globalDefaultSlot() {
  Text('default slot content').emphasisText(13, '#888888')
}

@Entry
@Component
struct BuilderDemo {
  modifier: ButtonModifier = new ButtonModifier();

  build() {
    Column({ space: 10 }) {
      Text('@Builder/@BuilderParam/@Styles/@Extend').fontSize(18)
      globalGreeting('bench')
      SlotChild() {
        Text('trailing closure as slot').fontSize(14)
      }
      Button('attributeModifier styled')
        .attributeModifier(this.modifier)
    }
    .width('100%')
    .padding(12)
  }
}
