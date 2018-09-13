import { Injectable } from "@angular/core";
import { List } from "../models/index";

@Injectable()
export class WishesProvider {

  private lists: List[] = [];

  constructor() {
    const list1 = new List('Gather infinite stones');
    const list2 = new List('Heroes to defeat');

    this.lists.push(list1, list2);
    console.log(this.lists);
  }
}
