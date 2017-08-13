import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../shared/movie/movie.service';

@Component({
  selector: 'cwa-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies:any[];

  constructor(private movieService: MovieService,
              private router: Router) {
  }

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe(data => this.movies = data.results);
  }

  onSelectMovie(movie: any) {
    console.log('Mostrar detalles de', movie);
    // Redireccionar a: /movie/movie.id
    this.router.navigate(['movie', movie.id]);
  }
}
