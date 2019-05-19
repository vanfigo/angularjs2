import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../providers/movie.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MovieService) {
    this.activatedRoute.params.subscribe((params => {
      this.movieService.getById(params['id'])
        .subscribe((data: Movie) => {
          this.movie = data;
        });
    }));
  }

  ngOnInit() {
  }

}
