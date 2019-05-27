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

  constructor(private http: HttpClient) {
  }

  private movie;
  private url = 'api/movies';
  private urlUser = 'api/users';

  setMovie(movie) {
    this.movie = movie;
  }

  setUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getMovie() {
    const temp = this.movie;
    return temp;
  }

  getUser() {
    const user = localStorage.getItem('currentUser');
    return JSON.parse(user);
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlUser);
  }

  addComment(movie: Movie): Observable<any> {
    return this.http.put(this.url, movie, httpOptions);
  }


  searchMovie(term: String): Observable<Movie[]> {
    console.log('in service, this is search term', term);
    return this.http.get<Movie[]>(`${this.url}/?title=${term}`);


    /* clearData() {
       this.movie = undefined;
     } */

  }
}
