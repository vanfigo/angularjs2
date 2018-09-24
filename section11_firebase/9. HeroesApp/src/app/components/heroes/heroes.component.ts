import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  loading: boolean = true;

  constructor(private heroesService: HeroesService) {
    this.heroesService.getHeroes()
      .subscribe((data: any) => {
        this.heroes = data;
        this.loading = false;
        // setTimeout(() => {
        //   this.heroes = data;
        //   this.loading = false;
        // }, 3000);
      });
  }

  ngOnInit() {
  }

  deleteHeroe = (key$: string) => {
    this.heroesService.deleteHeroe(key$)
      .subscribe(response => {
        if (response) {
          console.error(response)
        } else {
          delete this.heroes[key$];
        }
      });
  }

}
