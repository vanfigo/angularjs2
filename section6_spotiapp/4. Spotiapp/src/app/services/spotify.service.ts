import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private artists:any[] = [];

  constructor(public httpClient:HttpClient) {
    console.log('Spotify service ready!');
  }

  public getArtistas:any = (search:string) => {
    let url = `https://api.spotify.com/v1/search?query=${search}&type=artist&limit=20`;
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQBSZpr857l40pGr1jyRADD8qAO4kz24tOhhpNFV8E8D-aH9yQLKh1fNDileNFKkIpRC308XaCSxLHRpv0U'
    });
    return this.httpClient.get(url, { headers })
      .map((response:any) => {
        this.artists = response.artists.items
        return this.artists;
      });
  }

}
