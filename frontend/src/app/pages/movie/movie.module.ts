import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenreMoviesModule } from '@features/modules/genre-movies/genre-movies.module';
import { MoviesStoreModule } from '@features/store/movies/movies-store.module';
import { NotFoundModule } from '@shared/ui/layout/not-found/not-found.module';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';

@NgModule({
  declarations: [MovieComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    MoviesStoreModule,
    GenreMoviesModule,
    NotFoundModule
  ]
})
export class MovieModule {}
