import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { DataFlowService} from '../data-flow.service';
import { User } from '../user';
import { AdminServiceService } from '../admin-service.service';




@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  movies: Movie[];
  sorted = false;
  user: User;
  movie: Movie;



  constructor(private router: Router, private dataFlowService: DataFlowService, private adminService: AdminServiceService) { }

  ngOnInit() {
    this.user = this.dataFlowService.getUser();
    this.getMovies();
  }

  getMovies() {
    this.dataFlowService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

  onSelect(movie: Movie): void {
    this.dataFlowService.setMovie(movie);
    this.router.navigate(['movie-detail']);
  }

  setMovie(movie: Movie): void {
    this.dataFlowService.setMovie(movie);

  }

  addMovie(title, description): void {
    const newMovie = new Movie;
    newMovie.title = title;
    newMovie.description = description;
    newMovie.avgRating = 0;
    newMovie.myRating = 0;
    newMovie.comment = [];
    this.adminService.addMovie(newMovie).subscribe(movie => {
      this.movies.push(movie);
    });
  }

  deleteMovie(movie: Movie): void {
    this.adminService.deleteMovie(movie).subscribe();
    this.getMovies();
  }

  updateMovie(title, description) {
    console.log('new data', title, description);
    this.movie = this.dataFlowService.getMovie();
    this.movie.title = title;
    this.movie.description = description;
    this.adminService.updateMovie(this.movie).subscribe();
  }

  sortMovies() {
    this.sorted = true;
    this.movies = this.movies.sort(function (elem1, elem2) {
      return elem2.avgRating - elem1.avgRating;
    });
  }


  searchMovie(searchTerm, event) {
    if (event.keyCode === 13) {
      this.dataFlowService.searchMovie(searchTerm).subscribe(movies => {
        this.movies = movies;
      });
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }
}



