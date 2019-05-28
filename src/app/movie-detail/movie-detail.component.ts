import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataFlowService } from '../data-flow.service';
import { Location } from '@angular/common';
import { Movie } from '../movie';
import { User } from '../user';
import { UserRating } from '../user-rating';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;
  user: User;
  currentUser: User;
  userRating: UserRating[];
  currentUserRating = 0;


  constructor(private router: Router, private dataFlowService: DataFlowService, private location: Location
  ) { }


  ngOnInit() {
    this.user = this.dataFlowService.getUser();
    this.movie = this.dataFlowService.getMovie();

    this.dataFlowService.getCurrentUser(this.user.id).subscribe(userObj => {
      this.currentUser = userObj;
      console.log('this is current user', this.currentUser);
      this.getUserRatings();
    });
  }

  addComment(comment) {
    this.movie.comment.push(comment);
    this.dataFlowService.addComment(this.movie)
      .subscribe(() => this.location.back());
  }

  getUserRatings() {
      if (this.currentUser.ratedMovie) {
        console.log('this is current user', this.currentUser);
        this.dataFlowService.getUserRatingObj().subscribe(userRatingObj => {
          this.userRating = userRatingObj;
          this.showRating(this.userRating);
        });
      }
  }

  setRating(rating) {
    this.user = this.dataFlowService.getUser();
    const newUserRating = new UserRating;
    newUserRating.userId = this.user.id;
    newUserRating.movieId = this.movie.id;
    newUserRating.rating = rating;
    this.user.ratedMovie = true;
    this.dataFlowService.updateUser(this.user).subscribe();
    this.addRating(newUserRating);

  }

  addRating(newUserRating) {
    this.dataFlowService.getUserRatingObj().subscribe(userRatingObj => {
      this.userRating = userRatingObj;
    });

    this.dataFlowService.addUserRating(newUserRating).subscribe( newUserRatingObj => {
      this.userRating.push(newUserRatingObj);
      this.showRating(this.userRating);
    });
  }

  showRating(userRating) {
    for (let i = 0; i < userRating.length; i++) {
      if (this.user.id === userRating[i].userId && this.movie.id === userRating[i].movieId) {
        this.currentUserRating = userRating[i].rating;
        this.movie.myRating = userRating[i].rating;
      }
    }
}

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }

}


// To call logout function
//https://www.c-sharpcorner.com/article/simple-way-to-execute-a-function-in-a-component-from-another-component/
