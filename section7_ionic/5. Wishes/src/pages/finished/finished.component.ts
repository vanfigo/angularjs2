import { Component } from "@angular/core";
import { WishesProvider } from "../../providers/wishes.provider";

@Component({
  selector: 'page-finished',
  templateUrl: 'finished.component.html'
})
export class FinishedPage {
  constructor(public wishesProvider:WishesProvider) {}
}
