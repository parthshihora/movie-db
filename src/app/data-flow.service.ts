import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DataFlowService {

  constructor( private http: HttpClient ) { }

  private movie;
  private url = 'api/movies';
  private urlUser = 'api/users';

  setMovie(movie) {
    this.movie = movie;
  }

  getMovie() {
    const temp = this.movie;
    this.clearData();
    return temp;
  }

  getMovies (): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url);
  }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.urlUser);
  }

   addComment(movie: Movie): Observable<any> {
     return this.http.put(this.url, movie, httpOptions);
   }



  clearData() {
    this.movie = undefined;
  }
}
