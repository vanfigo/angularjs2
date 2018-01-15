import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'securedom'
})
export class SecuredomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
