import { createAction, props } from '@ngrx/store';
import { Movie } from '@shared/models/movies.models';

export enum MoviesActionsType {
  LOAD_MOVIES = '[Movies] Load movies',
  LOAD_MOVIES_SUCCESS = '[Movies] Load movies success',
  LOAD_MOVIES_FAIL = '[Movies] Load movies fail',
  LOAD_MOVIE = '[Movies] Load movie',
  LOAD_MOVIE_SUCCESS = '[Movies] Load movie success',
  LOAD_MOVIE_FAIL = '[Movies] Load movie fail',
  LOAD_GENRE_MOVIES = '[Movies] Load genre movies',
  LOAD_GENRE_MOVIES_SUCCESS = '[Movies] Load genre movies success',
  LOAD_GENRE_MOVIES_FAIL = '[Movies] Load genre movies fail'
}

export const loadMovies = createAction(
  MoviesActionsType.LOAD_MOVIES,
  props<{ term?: string; genre?: string }>()
);
export const loadMoviesSuccess = createAction(
  MoviesActionsType.LOAD_MOVIES_SUCCESS,
  props<{ movies: Movie[] }>()
);
export const loadMoviesFail = createAction(
  MoviesActionsType.LOAD_MOVIES_FAIL,
  props<{ error: string }>()
);

export const loadMovie = createAction(
  MoviesActionsType.LOAD_MOVIE,
  props<{ slug: string }>()
);
export const loadMovieSuccess = createAction(
  MoviesActionsType.LOAD_MOVIE_SUCCESS,
  props<{ movie: Movie }>()
);
export const loadMovieFail = createAction(
  MoviesActionsType.LOAD_MOVIE_FAIL,
  props<{ error: string }>()
);

export const loadGenreMovies = createAction(
  MoviesActionsType.LOAD_GENRE_MOVIES,
  props<{ genre: string; limit?: number }>()
);
export const loadGenreMoviesSuccess = createAction(
  MoviesActionsType.LOAD_GENRE_MOVIES_SUCCESS,
  props<{ movies: Record<string, Movie[]> }>()
);
export const loadGenreMoviesFail = createAction(
  MoviesActionsType.LOAD_GENRE_MOVIES_FAIL,
  props<{ error: string }>()
);
