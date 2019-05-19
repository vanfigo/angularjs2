import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../providers/movie.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  search = (value: string) =>
    this.movieService.searchMovie(value)
      .subscribe((data: Movie[]) => this.movies = data);

}
