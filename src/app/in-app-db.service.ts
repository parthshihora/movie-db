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
      {
        id : 16,
        title: 'Movie 16',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 50,
        title: 'Movie 50',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 17,
        title: 'Movie 17',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 18,
        title: 'Movie 18',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 19,
        title: 'Movie 19',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 20,
        title: 'Movie 20',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 21,
        title: 'Movie 21',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 22,
        title: 'Movie 22',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 23,
        title: 'Movie 23',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 24,
        title: 'Movie 24',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 25,
        title: 'Movie 25',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 26,
        title: 'Movie 26',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 27,
        title: 'Movie 27',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 28,
        title: 'Movie 28',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 29,
        title: 'Movie 29',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 30,
        title: 'Movie 30',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 49,
        title: 'Movie 49',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 31,
        title: 'Movie 31',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 32,
        title: 'Movie 32',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 33,
        title: 'Movie 33',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 34,
        title: 'Movie 34',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 35,
        title: 'Movie 35',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 36,
        title: 'Movie 36',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 37,
        title: 'Movie 37',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 38,
        title: 'Movie 38',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 39,
        title: 'Movie 39',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 40,
        title: 'Movie 40',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 41,
        title: 'Movie 41',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 42,
        title: 'Movie 42',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 43,
        title: 'Movie 43',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 44,
        title: 'Movie 44',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 45,
        title: 'Movie 45',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 46,
        title: 'Movie 46',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 47,
        title: 'Movie 47',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 0,
        comment: [],
        allRatings: []
      },
      {
        id : 48,
        title: 'Movie 48',
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
