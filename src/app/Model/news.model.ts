export class Event {
  private title: string;
  private _date: string;
  private content: string;
  private authorId: number;
  private categoryId: number;
  private keywords: string;

  constructor(title: string, date: string, content: string, authorId: number, categoryId: number, keywords: string) {
    this.title = title;
    this._date = date;
    this.content = content;
    this.authorId = authorId;
    this.categoryId = categoryId;
    this.keywords = keywords;
  }
}
