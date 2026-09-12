// 全局弹窗方法族：AlertDialog / ActionSheet / DatePickerDialog / TimePickerDialog /
// TextPickerDialog / CalendarPickerDialog（.show 静态形态）。事件统一写回 lines。
@Entry
@Component
struct DialogsDemo {
  @State lines: string[] = [];
  private date: Date = new Date();

  private pick(label: string, v: string | number | boolean): void {
    this.lines.push(`${label}=${v}`);
  }

  build() {
    Scroll() {
      Column({ space: 12 }) {
        Button('show-alert')
          .onClick(() => {
            AlertDialog.show({
              title: 'alert-title',
              message: 'alert-message-body',
              primaryButton: {
                value: 'alert-ok',
                action: () => this.pick('alert', 'ok'),
              },
              secondaryButton: {
                value: 'alert-cancel',
                action: () => this.pick('alert', 'cancel'),
              },
            });
          })
        Button('show-action-sheet')
          .onClick(() => {
            ActionSheet.show({
              title: 'sheet-title',
              message: 'sheet-message',
              sheets: [
                { title: 'sheet-a', action: () => this.pick('sheet', 'a') },
                { title: 'sheet-b', action: () => this.pick('sheet', 'b') },
              ],
            });
          })
        Button('show-date-picker')
          .onClick(() => {
            DatePickerDialog.show({
              selected: this.date,
              onDateAccept: (value: Date) => this.pick('date', value.toISOString().slice(0, 10)),
            });
          })
        Button('show-time-picker')
          .onClick(() => {
            TimePickerDialog.show({
              selected: this.date,
              useMilitaryTime: true,
              onAccept: (value: TimePickerResult) => this.pick('time', `${value.hour}:${value.minute}`),
            });
          })
        Button('show-text-picker')
          .onClick(() => {
            TextPickerDialog.show({
              range: ['tp-a', 'tp-b', 'tp-c'],
              selected: 0,
              onAccept: (value: TextPickerResult) => this.pick('textpicker', `${value.value}`),
            });
          })
        Button('show-calendar-picker')
          .onClick(() => {
            CalendarPickerDialog.show({
              onAccept: (value: Date) => this.pick('calendar', value.toDateString()),
            });
          })

        ForEach(this.lines, (l: string) => Text(l).fontSize(12).fontColor('#0066cc'), (l: string) => l)
      }
      .padding(12)
    }
    .height('100%')
  }
}
