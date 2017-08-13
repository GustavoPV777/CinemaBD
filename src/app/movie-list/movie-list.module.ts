import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list.component';
import { MovieListItemComponent } from '../movie-list-item/movie-list-item.component';
import { MovieService } from '../shared/movie/movie.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MdListModule
  ],
  declarations: [MovieListComponent, MovieListItemComponent],
  providers: [MovieService]
})
export class MovieListModule { }
