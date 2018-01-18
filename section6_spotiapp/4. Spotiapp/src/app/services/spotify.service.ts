import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(public httpClient:HttpClient) {
    console.log('Spotify service ready!');
  }

  public getArtistas:any = () => {
    let url = 'https://api.spotify.com/v1/search?query=Metallica&type=artist&limit=20';
    this.httpClient.get(url).subscribe(response => console.log(response));
  }

}
