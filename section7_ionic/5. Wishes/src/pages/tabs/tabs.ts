import { Component } from '@angular/core';

import { PendingsPage } from '../pendings/pendings.component';
import { FinishedPage } from '../finished/finished.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendingsPage;
  tab2Root = FinishedPage;

  constructor() {

  }
}
