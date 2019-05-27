import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { DataFlowService} from '../data-flow.service';
import { User } from '../user';
import {AdminServiceService} from '../admin-service.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  movies: Movie[];
  @Input() user: User;
  @Input() movie: Movie;



  constructor(private router: Router, private dataFlowService: DataFlowService, private adminService: AdminServiceService) { }

  ngOnInit() {
    this.user = this.dataFlowService.getUser();
    this.getMovies();
  }

  getMovies() {
    this.dataFlowService.getMovies().subscribe(movies => this.movies = movies);
  }

  onSelect(movie: Movie): void {
    this.dataFlowService.setMovie(movie);
    this.router.navigate(['movie-detail']);
  }

  setMovie(movie: Movie): void {
    this.dataFlowService.setMovie(movie);

  }

  deleteMovie(movie: Movie): void {
    this.adminService.deleteMovie(movie).subscribe();
    this.getMovies();
  }

  updateMovie(title, description) {
    this.movie = this.dataFlowService.getMovie();
    this.movie.title = title;
    this.movie.description = description;
    this.adminService.updateMovie(this.movie).subscribe();
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }
}
