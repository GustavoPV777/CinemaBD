import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../shared/movie/movie.service';

@Component({
  selector: 'cwa-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie:any = undefined;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe((params: any) => {
      this.movieService.getMovie(params.id)
      .subscribe(movie => this.movie = movie);
    });
  }

}
