import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC6StuDAq-6I-BLqhKvTGH8zB27BhH1OBbP_BCx5ztljew6MhDgOzEOGbGwbhxZxenjRlYtVMOAr97hZ5w'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases = () =>
    this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));

  searchArtists = (name: string) =>
    this.getQuery(`search?q=${name}&type=artist`)
      .pipe(map(data => data['artists'].items));

  getArtist = (id: string) =>
    this.getQuery(`artists/${id}`);

  getTopTracks = (id: string) =>
    this.getQuery(`artists/${id}/top-tracks?country=ES`)
      .pipe(map(data => data['tracks']));

}
