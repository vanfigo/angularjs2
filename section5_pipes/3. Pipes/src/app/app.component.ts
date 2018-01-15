import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre:string = "Rodrigo";
  name:string = "RoDRigO loYOla jAramIlLo";
  arreglo:number[] = [1,2,3,4,5,6,7,8,9];
  PI:number = Math.PI;
  a:number = 0.234;
  salary:number = 1234.5;
  hero:any = {
    name: 'Logan',
    alias: 'Wolverine',
    age: 500,
    address: {
      street: 'first',
      number: '19'
    }
  };
  promise = new Promise( ( resolve:Function, reject:Function ) => {
    setTimeout( () => resolve( 'Data is here!' ), 3500 );
  } );
  date:Date = new Date();
}
