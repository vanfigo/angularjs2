import { Component } from '@angular/core';
import {SpotifyService}  from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  search:string = '';
  artists: any[] = [];
  loading: boolean;

  constructor(private spotifyService:SpotifyService) { }

  public searchArtist = (name: string) => {
    this.loading = true;
    this.spotifyService.searchArtists(name)
      .subscribe(artists => {
        this.artists = artists;
        this.loading = false;
      }
    );
  }

}
