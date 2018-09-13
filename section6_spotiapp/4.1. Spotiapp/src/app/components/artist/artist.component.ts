import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  private artist:any = {};
  private topTracks:any = [];
  private loading: boolean;

  constructor(private activatedRoute:ActivatedRoute, private spotifyService:SpotifyService) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist = (id: string) => {
    this.spotifyService.getArtist(id)
      .subscribe(artist => {
        this.artist = artist;
        this.loading = false;
      });
  }

  getTopTracks = (id: string) => {
    this.spotifyService.getTopTracks(id)
      .subscribe(topTracks => {
        this.topTracks = topTracks;
      })
  }

}
