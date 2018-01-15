import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})

export class CapitalizedPipe implements PipeTransform {
  transform(value:string, every:boolean = true):string {
    return value.toLowerCase().split(' ').map((currentValue:string, index:number):string =>
      every || index === 0 ? currentValue[0].toUpperCase() + currentValue.substr(1) : currentValue
    ).join(' ');
  }
}
