import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  private artist:any = {};
  private topTracks:any = [];

  constructor(private activatedRoute:ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map( params => params['id'] )
      .subscribe( (id) => {
        this.spotifyService.getArtist(id).subscribe( (artist:any) => {
          // console.log(artist);
          this.artist = artist;
        } );
        this.spotifyService.getTopTracks(id).subscribe( (topTracks:any) => {
          console.log(topTracks);
          this.topTracks = topTracks;
        } );
      });
  }

}
