export class Event {
	private title: string;
  private technology: number;
  private category: number;
  private link: string;
  private description: string;
  private authorId: string;

  constructor(title: string, technology: number, category: number, description: string, authorId?: string) {
    this.title = title;
    this.technology = technology;
    this.category = category;
    this.description = description;
    this.authorId = authorId || null;
  }
}
