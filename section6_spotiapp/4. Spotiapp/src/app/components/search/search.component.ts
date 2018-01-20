import { Component } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  search:string = '';

  constructor(public spotifyService:SpotifyService) { }

  public searchArtist = () => {
    if(this.search.length > 0) {
      this.spotifyService.getArtistas(this.search).subscribe(
        artists => console.log(artists)
      );
    }
  }

}
