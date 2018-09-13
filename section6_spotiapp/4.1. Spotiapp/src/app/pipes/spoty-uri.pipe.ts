import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'spotyUri'
})
export class SpotyUriPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  transform(uri: string): any {
    let url = 'https://open.spotify.com/embed/track/';
    let trackId = !uri ? '' : uri.split(':')[2];
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + trackId);
  }

}
