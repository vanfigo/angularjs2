import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value:string, hide:boolean = true):string {
    return hide ? value.replace(/./g, '*') : value;
  }

}
