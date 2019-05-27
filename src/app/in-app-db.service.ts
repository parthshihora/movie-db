import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class InAppDBService implements InMemoryDbService {

  createDb() {

    const users = [
      {
       username: 'parth',
        password: '12345',
        role: ''
      },
      {
        username: 'chintu',
        password: '12345',
        role: ''
      },
      {
        username: 'maitri',
        password: '12345',
        role: ''
      },
      {
        username: 'admin',
        password: 'admin',
        role: 'admin'
      }
    ];

    const movies = [
      {
        id : 1,
        title: 'Movie 1',
        description: 'Drama/Comedy',
        avgRating: 2.5,
        myRating: 4,
        comment: []
      },
      {
        id : 2,
        title: 'Movie 2',
        description: 'Sci-Fi',
        avgRating: 3.2,
        myRating: 4,
        comment: []

      },
      {
        id : 3,
        title: 'Movie 3',
        description: 'Thriller',
        avgRating: 2.8,
        myRating: 4,
        comment: []

      },
      {
        id : 4,
        title: 'Movie 4',
        description: 'Comedy',
        avgRating: 4.9,
        myRating: 4,
        comment: []

      },
      {
        id : 5,
        title: 'Movie 5',
        description: 'Drama/Comedy',
        avgRating: 1.2,
        myRating: 4,
        comment: []
      },
      {
        id : 6,
        title: 'Movie 6',
        description: 'Drama/Comedy',
        avgRating: 2.3,
        myRating: 4,
        comment: []
      },
      {
        id : 7,
        title: 'Movie 7',
        description: 'Drama/Comedy',
        avgRating: 2.2,
        myRating: 4,
        comment: []
      },
      {
        id : 8,
        title: 'Movie 8',
        description: 'Drama/Comedy',
        avgRating: 3.4,
        myRating: 4,
        comment: []
      },
      {
        id : 9,
        title: 'Movie 9',
        description: 'Drama/Comedy',
        avgRating: 3.8,
        myRating: 4,
        comment: []
      },
      {
        id : 10,
        title: 'Movie 10',
        description: 'Drama/Comedy',
        avgRating: 4.3,
        myRating: 4,
        comment: []
      },
      {
        id : 11,
        title: 'Movie 11',
        description: 'Drama/Comedy',
        avgRating: 2,
        myRating: 4,
        comment: []
      },
      {
        id : 12,
        title: 'Movie 12',
        description: 'Drama/Comedy',
        avgRating: 2.1,
        myRating: 4,
        comment: []
      },
      {
        id : 13,
        title: 'Movie 13',
        description: 'Drama/Comedy',
        avgRating: 3.2,
        myRating: 4,
        comment: []
      },
      {
        id : 14,
        title: 'Movie 14',
        description: 'Drama/Comedy',
        avgRating: 1.5,
        myRating: 4,
        comment: []
      },
      {
        id : 15,
        title: 'Movie 15',
        description: 'Drama/Comedy',
        avgRating: 1.8,
        myRating: 4,
        comment: []
      },
  ];

    return {movies, users};
  }

  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 1;
  }

}
