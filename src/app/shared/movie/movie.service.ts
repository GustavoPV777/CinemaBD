import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const MOVIES_API:string = 
'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const MOVIE_API:string = 
'https://api.themoviedb.org/3/movie';
const API_KEY:string = '0971ed323ba8081b990144eef9e02ace';

@Injectable()
export class MovieService {

  // Inyeccion de HttpClient
  constructor(private http:HttpClient) { }

  public getMovies():Observable<any> {
    return this.http.get(MOVIES_API + '&api_key=' + API_KEY);
  }

  public getMovie(id: any): Observable<any> {
    return this.http.get(`${MOVIE_API}/${id}?api_key=${API_KEY}`);
  }

}
