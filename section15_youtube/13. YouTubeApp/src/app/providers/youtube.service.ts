import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  youTubeURL: string = 'https://www.googleapis.com/youtube/v3';
  private apikey: string = 'AIzaSyBACmqRIbL95PCioYkGX_eA5z93zj1747c'
  private playlistId: string = 'UUTJTpwrK4a-ajXs4-Wry09A';
  nextPageToken: string = '';

  constructor(private http: HttpClient) { }

  getVideos = () => {
    let params: HttpParams = new HttpParams()
      .append('part', 'snippet')
      .append('maxResults', '10')
      .append('playlistId', this.playlistId)
      .append('key', this.apikey)
      .append('pageToken', this.nextPageToken);

    return this.http.get(`${this.youTubeURL}/playlistItems/`, {params})
    .pipe(map((response: any) => {
      this.nextPageToken = response['nextPageToken'];
      return response.items.map((item: any) => item.snippet);
    }))
  };

}
