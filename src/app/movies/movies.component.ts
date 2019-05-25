import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../movie-data';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = MOVIES;

  constructor() { }

  ngOnInit() {

  }
}
