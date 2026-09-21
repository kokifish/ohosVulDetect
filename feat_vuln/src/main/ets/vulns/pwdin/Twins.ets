// SAFE 孪生集合（pwdin）：OVD-PWDIN-001S，密码输入走 Password 掩码模式。
// SAFE: OVD-PWDIN-001S Password 模式圆点掩码 + 只回显长度（CWE-522 加固）
@Component
export struct BenchPwdInputSafe {
  @State maskedLen: number = 0;

  build() {
    Column({ space: 6 }) {
      TextInput({ placeholder: 'bench passcode field' })
        .type(InputType.Password)
        .onChange((v: string) => {
          this.maskedLen = v.length;
        })
      Text(`masked-len: ${this.maskedLen}`).fontSize(11).fontFamily('monospace')
    }
    .alignItems(HorizontalAlign.Start)
  }
}

// 语义函数：掩码生效判定（供分类页按钮与孪生门禁函数体提取）
export function ovdPwdin001S(masked: boolean): string {
  return masked ? 'password masked (dot matrix), length only' : 'password exposed';
}
