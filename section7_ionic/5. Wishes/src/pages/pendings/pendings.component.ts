import { Component } from "@angular/core";
import { WishesProvider } from "../../providers/wishes.provider";
import { List } from "../../models/index";
import { NavController, AlertController } from "ionic-angular";
import { AddPage } from "../add/add.component";

@Component({
  selector: 'page-pendings',
  templateUrl: 'pendings.component.html'
})
export class PendingsPage {
  constructor(public wishesProvider:WishesProvider,
              private navController: NavController,
              private alertController: AlertController) {}

  selectedList = (list: List) => {
    console.log(list);
  }

  addList = () => {
    //this.navController.push(AddPage);
    const prompt = this.alertController.create({
      title: 'New list',
      message: 'Name of the new list',
      inputs: [{
        name: 'title',
        placeholder: 'Title'
      }],
      buttons: [{
        text: 'Cancel'
      },{
        text: 'Add',
        handler: data => {
          if(data['title'].length === 0)
            return;
          this.navController.push(AddPage, {
            title: data['title']
          })
        }
      }]
    });

    prompt.present();
  }
}
