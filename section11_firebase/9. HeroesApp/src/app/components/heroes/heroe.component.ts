import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    name: '',
    bio: '',
    house: 'Marvel'
  }

  new: boolean;
  key$: string;

  constructor(private heroesService: HeroesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params
      .subscribe( params => this.key$ = params['id']);
    if(this.key$ !== 'new') {
      this.heroesService.getHeroe(this.key$)
        .subscribe((data: Heroe) => this.heroe = data)
    }
  }

  ngOnInit() {
  }

  save = () => {
    if(this.key$ === 'new')
      this.heroesService.newHero(this.heroe)
        .subscribe( data => {
          this.router.navigate(['/heroe', data.name]);
        }, error => {
          console.log(error);
        });
    else {
      this.heroesService.updateHero(this.heroe, this.key$)
        .subscribe( data => {
          // this.router.navigate(['/heroe', data.name]);
        }, error => {
          console.log(error);
        });
    }
  }

  addNewHeroe = (form:NgForm) => {
    this.router.navigate(['/heroe', 'new']);
    form.reset({
      house: 'Marvel'
    });
  }

}
