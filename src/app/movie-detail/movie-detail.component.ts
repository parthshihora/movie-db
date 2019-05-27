import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataFlowService } from '../data-flow.service';
import { Location } from '@angular/common';
import { Movie } from '../movie';
import { User } from '../user';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;
  user: User;


  constructor(private router: Router, private dataFlowService: DataFlowService, private location: Location
  ) { }


  ngOnInit() {
    this.movie = this.dataFlowService.getMovie();

  }

  addComment(comment) {
    this.movie.comment.push(comment);
    this.dataFlowService.addComment(this.movie)
      .subscribe(() => this.location.back());
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }

}


// To call logout function
//https://www.c-sharpcorner.com/article/simple-way-to-execute-a-function-in-a-component-from-another-component/
