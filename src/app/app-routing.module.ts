import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {MoviesComponent} from './movies/movies.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'all-movies',
    component: MoviesComponent
  },
  {
    path: 'movie-detail',
    component: MovieDetailComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
