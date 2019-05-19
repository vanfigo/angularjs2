import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../providers/movie.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  onTheaterMovies: Movie[];
  popularMovies: Movie[];
  kidPopulars: Movie[];

  constructor(private movieService: MovieService) {
    this.movieService.getOnTheaters().subscribe((data: Movie[]) => this.onTheaterMovies = data);
    this.movieService.getPopulars().subscribe((data: Movie[]) => this.popularMovies = data);
    this.movieService.getKidPopulars().subscribe((data: Movie[]) => this.kidPopulars = data);
  }

  ngOnInit() {
  }

}
