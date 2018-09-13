import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nophoto'
})
export class NophotoPipe implements PipeTransform {

  transform(arrImages: any[]): string {
    let noimage:string = 'assets/img/noimage.png';
    return arrImages ? ((arrImages.length > 1) ? arrImages[1].url : noimage) : noimage;
  }

}
