import { createAction, props } from '@ngrx/store';
import { Movie } from '@shared/models/movies.models';

export enum MoviesTrActionsType {
  LOAD_NR_MOVIES = '[NR Movies] Load NR movies',
  LOAD_NR_MOVIES_SUCCESS = '[NR Movies] Load NR movies success',
  LOAD_NR_MOVIES_FAIL = '[NR Movies] Load NR movies fail'
}

export const loadNextReleasesMovies = createAction(
  MoviesTrActionsType.LOAD_NR_MOVIES
);
export const loadNextReleasesMoviesSuccess = createAction(
  MoviesTrActionsType.LOAD_NR_MOVIES_SUCCESS,
  props<{ movies: Movie[] }>()
);
export const loadNextReleasesMoviesFail = createAction(
  MoviesTrActionsType.LOAD_NR_MOVIES_FAIL,
  props<{ error: string }>()
);
