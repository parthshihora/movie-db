import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserRating} from './user-rating';


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
  private userRatingURL = 'api/user_rating';

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

  getUserRatingObj(): Observable<UserRating[]> {
    return this.http.get<UserRating[]>(this.userRatingURL);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlUser);
  }

  addComment(movie: Movie): Observable<any> {
    return this.http.put(this.url, movie, httpOptions);
  }

  addUserRating(userRating: UserRating): Observable<UserRating> {
    return this.http.post<UserRating>(this.userRatingURL, userRating, httpOptions);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.urlUser, user, httpOptions);
  }

  getCurrentUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.urlUser}/${id}`);
  }
  searchMovie(term: String): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.url}/?title=${term}`);
  }
}
