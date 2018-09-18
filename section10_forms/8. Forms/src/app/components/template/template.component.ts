import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent{

  user = {
    name: "Rodrigo",
    lastName: "Loyola",
    email: "rloyolaj@gmail.com",
    country: "CRI",
    gender: "Male"
  };

  countries = [{
    code: "CRI",
    name: "Costa Rica"
  }, {
    code: "ESP",
    name: "España"
  }]

  constructor() { }

  save = (form: NgForm) => {
    console.log("form", form);
    console.log("value", form.value);
    console.log("user", this.user);
  }

}
