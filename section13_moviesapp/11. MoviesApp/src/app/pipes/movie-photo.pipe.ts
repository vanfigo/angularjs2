import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviePhoto'
})
export class MoviePhotoPipe implements PipeTransform {

  transform(value: any, width?: number, height?: number): any {
    let url: string;
    width = width || 300;
    height = height || 169;
    if(value)
      url = `http://image.tmdb.org/t/p/w300${value}`;
    else
      url = `https://via.placeholder.com/${width}x${height}`;
    return url;
  }

}
