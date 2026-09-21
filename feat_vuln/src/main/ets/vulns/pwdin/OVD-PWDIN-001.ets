// VULN: OVD-PWDIN-001 密码语义输入框用 Normal 模式且明文回显（CWE-522）
// UI 属性面：placeholder 声明密码语义 + 'plain-echo: ' 明文回显标记同框共现，
// 输入内容以明文 Text 渲染在屏幕上（旁观者/截屏/录屏可读）。

@Component
export struct BenchPwdInputVuln {
  @State echo: string = '';

  build() {
    Column({ space: 6 }) {
      TextInput({ placeholder: 'bench password field' })
        .type(InputType.Normal)
        .onChange((v: string) => {
          this.echo = `plain-echo: ${v}`;
        })
      Text(this.echo).fontSize(11).fontFamily('monospace')
    }
    .alignItems(HorizontalAlign.Start)
  }
}
