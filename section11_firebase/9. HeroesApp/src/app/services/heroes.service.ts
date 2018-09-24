import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesUrl: string = "https://heroesapp-46412.firebaseio.com/heroes.json";
  heroeUrl: string = "https://heroesapp-46412.firebaseio.com/heroes/";

  constructor(private http: HttpClient) { }

  getHeroe = (key$: string) => {
    let url = this.heroeUrl + `${key$}.json`;
    return this.http.get(url)
      .pipe(map(data => {
        return data;
      }));
  }

  getHeroes = () => {
    return this.http.get(this.heroesUrl)
      .pipe(map(data => {
        return data;
      }));
  }

  newHero = (heroe: Heroe) => {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.heroesUrl, body, {headers})
      .pipe(map((data:any) => {
          return data;
        })
      );
  };

  updateHero = (heroe: Heroe, key$: string) => {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let url = this.heroeUrl + `${key$}.json`;
    return this.http.put(url, body, {headers})
      .pipe(map((data:any) => {
          return data;
        })
      );
  };

  deleteHeroe = (key$: string) => {
    let url = this.heroeUrl + `${key$}.json`;

    return this.http.delete(url)
      .pipe(map(data => data));
  }

}
