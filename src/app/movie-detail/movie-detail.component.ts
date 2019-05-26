import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFlowService } from '../data-flow.service';
import { Location } from '@angular/common';
import { Movie } from '../movie';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;


  constructor(private route: ActivatedRoute, private dataFlowService: DataFlowService, private location: Location
  ) { }



  ngOnInit() {
    this.movie = this.dataFlowService.getMovie();
  }


  addComment(comment) {
    this.movie.comment.push(comment);
    console.log('this is selected movie with comment', this.movie);
    this.dataFlowService.addComment(this.movie)
      .subscribe(() => this.location.back());
  }

}
