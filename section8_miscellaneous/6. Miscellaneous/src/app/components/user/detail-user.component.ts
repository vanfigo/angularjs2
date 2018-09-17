import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  template: `
    <p>
      detail-user works!
    </p>
  `,
  styles: []
})
export class DetailUserComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      console.log('child route', params);
    })
  }

  ngOnInit() {
  }

}
