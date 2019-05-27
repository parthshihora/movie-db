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
    return this.http.put(this.url, movie, httpOptions);
  }
}
