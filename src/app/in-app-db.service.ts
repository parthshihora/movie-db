import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class InAppDBService implements InMemoryDbService {

  createDb() {

    const user_rating = [
      {
        id: 1,
      }
    ];
    const users = [
      {
        id: 1,
       username: 'parth',
        password: '12345',
        role: '',
        ratedMovie: false
      },
      {
        id: 2,
        username: 'chintu',
        password: '12345',
        role: '',
        ratedMovie: false

      },
      {
        id: 3,
        username: 'maitri',
        password: '12345',
        role: '',
        ratedMovie: false

      },
      {
        id: 4,
        username: 'admin',
        password: 'admin',
        role: 'admin',
        ratedMovie: false

      }
    ];

    const movies = [
      {
        id : 1,
        title: 'Movie 1',
        description: 'Drama/Comedy',
        avgRating: 4.5,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 2,
        title: 'Movie 2',
        description: 'Sci-Fi',
        avgRating: 3.2,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 3,
        title: 'Movie 3',
        description: 'Thriller',
        avgRating: 2.8,
        myRating: 0,
        comment: [],
        allRatings: []


      },
      {
        id : 4,
        title: 'Movie 4',
        description: 'Comedy',
        avgRating: 4.9,
        myRating: 0,
        comment: [],
        allRatings: []

      },
      {
        id : 5,
        title: 'Movie 5',
        description: 'Drama/Comedy',
        avgRating: 1.2,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 6,
        title: 'Movie 6',
        description: 'Drama/Comedy',
        avgRating: 2.3,
        myRating: 0,
        comment: [],
        allRatings: []

      },
      {
        id : 7,
        title: 'Movie 7',
        description: 'Drama/Comedy',
        avgRating: 2.2,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 8,
        title: 'Movie 8',
        description: 'Drama/Comedy',
        avgRating: 3.4,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 9,
        title: 'Movie 9',
        description: 'Drama/Comedy',
        avgRating: 3.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 10,
        title: 'Movie 10',
        description: 'Drama/Comedy',
        avgRating: 4.3,
        myRating: 0,
        comment: [],
        allRatings: []

      },
      {
        id : 11,
        title: 'Movie 11',
        description: 'Drama/Comedy',
        avgRating: 2,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 12,
        title: 'Movie 12',
        description: 'Drama/Comedy',
        avgRating: 2.1,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 13,
        title: 'Movie 13',
        description: 'Drama/Comedy',
        avgRating: 3.2,
        myRating: 0,
        comment: [],
        allRatings: []

      },
      {
        id : 14,
        title: 'Movie 14',
        description: 'Drama/Comedy',
        avgRating: 1.5,
        myRating: 0,
        comment: [],
        allRatings: []

      },
      {
        id : 15,
        title: 'Movie 15',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
  ];

    return {movies, users, user_rating};
  }

  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 1;
  }

}
