import { Component, OnInit, 
         Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'cwa-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  POSTER_PATH = 'https://image.tmdb.org/t/p/w160';

  @Input()
  movie: any;

  @Output()
  select: EventEmitter<any> = new EventEmitter<any>();

  
  constructor() { }

  ngOnInit() {
  }

  public onClick(): void {
    console.log('Click en ', this.movie);
    this.select.emit(this.movie);
  }
}
