export class DemoItem {
  readonly id: string;
  readonly title: string;
  readonly page: string;

  constructor(id: string, title: string, page: string) {
    this.id = id;
    this.title = title;
    this.page = page;
  }
}
