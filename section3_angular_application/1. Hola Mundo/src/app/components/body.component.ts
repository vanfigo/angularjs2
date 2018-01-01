import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})

export class BodyComponent {
  public show:boolean = false;
  frase:any = {
    message: "With a great power comes a great responsability",
    author: "Ben Parker"
  }
  public characters:string[] = ['Spiderman', 'Venom', 'Dr. Octopus']
}
