import { Injectable } from "@angular/core";
import { List, ItemList } from "../models/index";

@Injectable()
export class WishesProvider {

  private lists: List[] = [];

  constructor() {
    this.loadStorage();
  }

  addList = (list: List) => {
    this.lists.push(list);

    this.saveStorage();
  }

  deleteList = (list: List) => {
    this.lists = this.lists.filter(_list => _list.id !== list.id)
    this.saveStorage();
  }

  saveStorage = () => {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadStorage = () => {
    if(localStorage.getItem('data'))
      this.lists = JSON.parse(localStorage.getItem('data'));
    else
      this.lists = [];
  }

}
