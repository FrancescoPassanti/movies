import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoviesStoreModule } from '@features/store/movies/movies-store.module';
import { MovieGridModule } from '@shared/ui/components/movie-grid/movie-grid.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    RouterModule,
    MoviesStoreModule,
    MovieGridModule
  ]
})
export class MoviesModule {}
