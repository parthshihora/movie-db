import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { DataFlowService} from '../data-flow.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  movies: Movie[];


  constructor(private router: Router, private dataFlowService: DataFlowService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.dataFlowService.getMovies().subscribe(movies => this.movies = movies);
  }

  onSelect(movie: Movie): void {
    this.dataFlowService.setMovie(movie);
    this.router.navigate(['movie-detail']);
  }
}
