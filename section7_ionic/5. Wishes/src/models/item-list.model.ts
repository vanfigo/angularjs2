export class ItemList {
    name: string;
    completed: boolean;

    constructor(description: string) {
      this.name = description;
      this.completed = false;
    }
}
