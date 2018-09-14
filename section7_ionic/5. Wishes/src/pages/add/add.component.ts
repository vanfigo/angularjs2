import { Component } from "@angular/core";
import { WishesProvider } from "../../providers/wishes.provider";
import { List, ItemList } from "../../models/index";
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-add',
  templateUrl: 'add.component.html'
})
export class AddPage {
  list: List;
  itemName: string;

  constructor(public wishesProvider:WishesProvider,
              private navParams: NavParams) {
    let title = this.navParams.get('title');

    if(this.navParams.get('list'))
      this.list = this.navParams.get('list')
    else {
      this.list = new List(title);
      this.wishesProvider.addList(this.list);
    }
  }

  addItem = () => {
    if(this.itemName.length === 0)
      return;
    let newItem = new ItemList(this.itemName);
    this.list.items.push(newItem);

    this.wishesProvider.saveStorage();

    this.itemName = '';
  }

  updateItem = (item: ItemList) => {
    item.completed = !item.completed;
    let pendingItems = this.list.items.filter(item => !item.completed).length;
    if(pendingItems === 0) {
      this.list.finished = true;
      this.list.finishedDate = new Date();
    } else {
      this.list.finished = false;
      this.list.finishedDate = null;
    }
    this.wishesProvider.saveStorage();
  }

  deleteItem = (index: number) => {
    this.list.items.splice(index, 1);
    this.wishesProvider.saveStorage();
  }
}
