import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';

declare var moment: any;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string = 'https://api.themoviedb.org/3';
  api: string = '0bfe68e79b2ecbb3f83a74999d321edf';
  apiCallback = `api_key=${this.api}&callback=JSONP_CALLBACK`;
  format: string = 'YYYY-MM-DD';
  now: string;
  nowPlus5: string;

  constructor(private jsonp: Jsonp) {
    this.now = moment().format(this.format);
    this.nowPlus5 = moment().add(5, 'days').format(this.format);
  }

  getPopulars = () => this.jsonp.get(`${this.url}/discover/movie?sort_by=popularity.desc&${this.apiCallback}`)
    .pipe(map((res) => res.json().results));

  getOnTheaters = () => this.jsonp.get(`${this.url}/discover/movie?primary_release_date.gte=${this.now}&primary_release_date.lte=${this.nowPlus5}&${this.apiCallback}`)
    .pipe(map((res) => res.json().results));

  getKidPopulars = () => this.jsonp.get(`${this.url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${this.apiCallback}`)
    .pipe(map((res) => res.json().results));

  getById = (id: number) => this.jsonp.get(`${this.url}/movie/${id}?language=en-US&${this.apiCallback}`)
    .pipe(map((res) => res.json()));

  searchMovie = (title: string) => this.jsonp.get(`${this.url}/search/movie?query=${title}&sort=popularity.desc&${this.apiCallback}`)
    .pipe(map((res) => res.json().results));

}
