import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataFlowService } from '../data-flow.service';
import { Location } from '@angular/common';
import { Movie } from '../movie';
import { User } from '../user';
import { UserRating } from '../user-rating';
import { AdminServiceService } from '../admin-service.service';
import { MoviesComponent} from '../movies/movies.component';


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
  commentValue: string;




  constructor(
    private router: Router,
    private dataFlowService: DataFlowService,
    private location: Location, private adminService: AdminServiceService) { }


  ngOnInit() {
    this.user = this.dataFlowService.getUser();
    this.movie = this.dataFlowService.getMovie();

    this.dataFlowService.getCurrentUser(this.user.id).subscribe(userObj => {
      this.currentUser = userObj;
      this.getUserRatings();
    });

  }

  addComment(comment) {

    this.movie.comment.push(comment);
    this.dataFlowService.addComment(this.movie)
      .subscribe();
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


  addRatingToMovie(rating) {
    this.movie.allRatings.push(rating);
    let sum = 0;
    for (let i = 0; i < this.movie.allRatings.length; i++) {
      sum += this.movie.allRatings[i];
    }
    this.movie.avgRating = sum / this.movie.allRatings.length;
    this.adminService.updateMovie(this.movie).subscribe();
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
    this.addRatingToMovie(rating);

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
        this.movie.myRating = userRating[i].rating;
      }
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }

}


