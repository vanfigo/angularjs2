import { ItemList } from "./item-list.model";

export class List {
    id: number;
    title: string;
    creationDate: Date;
    finishedDate: Date;
    finished: boolean;
    items: ItemList[];

    constructor(title: string) {
      this.title = title;
      this.finished = false;
      this.creationDate = new Date();
      this.items = [];
      this.id = new Date().getTime();
    }
}
