import { Component, Input } from "@angular/core";
import { WishesProvider } from "../providers/wishes.provider";
import { NavController, AlertController, ItemSliding } from "ionic-angular";
import { List } from "../models/index";
import { AddPage } from "../pages/add/add.component";

@Component({
  selector: 'app-lists',
  templateUrl: 'lists.component.html'
})
export class ListsComponent {

  @Input() finished = false;

  constructor(public wishesProvider:WishesProvider,
              private navController: NavController,
              private alertController: AlertController) {}

  deleteList = (list: List) => {
    this.wishesProvider.deleteList(list);
  }

  editList = (list:List, itemSliding: ItemSliding) => {
    //this.navController.push(AddPage);
    itemSliding.close();
    const prompt = this.alertController.create({
      title: 'Edit list',
      message: 'Edit name of the list',
      inputs: [{
        name: 'title',
        placeholder: 'Title',
        value: list.title
      }],
      buttons: [{
        text: 'Cancel'
      },{
        text: 'Update',
        handler: data => {
          if(data['title'].length === 0)
            return;
          list.title = data['title'];
          this.wishesProvider.saveStorage();
        }
      }]
    });

    prompt.present();
  }

  selectedList = (list: List) => {
    this.navController.push(AddPage, {
      title: list.title,
      list: list
    })
  }
}
