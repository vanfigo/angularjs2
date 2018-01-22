import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private artists:any[] = [];
  private topTracks:any[] = [];
  private urlSpotify:string = 'https://api.spotify.com/v1/';
  private token:string = 'BQDVCxzUogrAA3lme4ywLfizjqx84UOI3F1Ji1uZPpL2vtPlhzRDpPfUMZHmCztZgtTwOJh52mIa7KKLMx0'

  constructor(public httpClient:HttpClient) {
    // console.log('Spotify service ready!');
  }

  private getHeaders:Function = ():HttpHeaders => new HttpHeaders({
    'authorization': 'Bearer ' + this.token
  });

  public getArtists:any = (search:string) => {
    let url = `${this.urlSpotify}search?query=${search}&type=artist&limit=20`;

    return this.httpClient.get(url, { headers: this.getHeaders() })
      .map((response:any) => {
        this.artists = response.artists.items
        return this.artists;
      });
  };

  public getArtist:any = (id:string) => {
    let url = `${this.urlSpotify}artists/${id}`;

    return this.httpClient.get(url, { headers: this.getHeaders() });
  };

  public getTopTracks:Function = (id:string) => {
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=MX`;

    return this.httpClient.get( url, { headers: this.getHeaders() } )
      .map( (response:any) => {
        this.topTracks = response.tracks;
        return this.topTracks;
      } );
  }

}
