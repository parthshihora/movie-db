import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private url = 'api/movies';

  constructor( private http: HttpClient) { }

  updateMovie(movie: Movie): Observable<any> {
    console.log('updated movie', movie);
    return this.http.put(this.url, movie, httpOptions);
  }

  deleteMovie(movie: Movie | number): Observable<Movie> {
    const id = typeof movie === 'number' ? movie : movie.id;

    const movieUrl = `${this.url}/${id}`;
    return this.http.delete<Movie>(movieUrl, httpOptions);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.url, movie, httpOptions);
  }
}
