import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  private hero:any = {};

  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.hero = this.heroesService.getHero(params.id);
    } )
  }

  public getCasa = () => this.hero.casa === 'DC' ? 'assets/img/dc-logo.jpg' : 'assets/img/marvel-logo.png';

}
