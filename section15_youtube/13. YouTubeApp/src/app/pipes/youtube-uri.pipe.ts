import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'youTubeUri'
})
export class YouTubeUriPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  transform(videoId: string): any {
    let url = 'https://www.youtube.com/embed/';
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + videoId);
  }

}
