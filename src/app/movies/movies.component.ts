import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../movie-data';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { DataFlowService} from '../data-flow.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = MOVIES;
 // selectedMovie: Movie;


  constructor(private router: Router, private dataFlowService: DataFlowService) { }

  ngOnInit() {

  }

  onSelect(movie: Movie): void {
    this.dataFlowService.setData(movie);
  //  this.selectedMovie = movie;
    this.router.navigate(['movie-detail']);
  }
}
