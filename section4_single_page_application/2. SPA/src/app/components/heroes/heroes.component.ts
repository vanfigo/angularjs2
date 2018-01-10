import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Hero[] = [];

  constructor(private _heroServices:HeroesService, private router:Router) { }

  ngOnInit() {
    this.heroes = this._heroServices.getHeroes();
  }

  public seeHero = (idx:number) => this.router.navigate(['/hero', idx]);

}
