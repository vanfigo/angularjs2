import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Hero[] = [];
  term:string = "";

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private heroesService:HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.term = params['term'];
      if(typeof this.term !== 'undefined')
        this.heroes = this.heroesService.searchHeroes(params.term);
      else
        this.heroes = this.heroesService.getHeroes();
    } )
  }

  ngOnInit() {

  }

  public seeHero = (idx:number) => this.router.navigate(['/hero', idx]);

}
