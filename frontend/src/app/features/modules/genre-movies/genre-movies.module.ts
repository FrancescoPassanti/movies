import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoviesStoreModule } from '@features/store/movies/movies-store.module';
import { MovieGridModule } from '@shared/ui/components/movie-grid/movie-grid.module';
import { GenreMoviesComponent } from './genre-movies.component';

@NgModule({
  declarations: [GenreMoviesComponent],
  imports: [CommonModule, RouterModule, MovieGridModule, MoviesStoreModule],
  exports: [GenreMoviesComponent]
})
export class GenreMoviesModule {}
