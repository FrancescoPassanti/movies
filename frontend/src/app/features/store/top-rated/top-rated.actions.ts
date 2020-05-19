import { createAction, props } from '@ngrx/store';
import { Movie } from '@shared/models/movies.models';

export enum MoviesTrActionsType {
  LOAD_TR_MOVIES = '[TR Movies] Load TR movies',
  LOAD_TR_MOVIES_SUCCESS = '[TR Movies] Load TR movies success',
  LOAD_TR_MOVIES_FAIL = '[TR Movies] Load TR movies fail'
}

export const loadTopRatedMovies = createAction(
  MoviesTrActionsType.LOAD_TR_MOVIES
);
export const loadTopRatedMoviesSuccess = createAction(
  MoviesTrActionsType.LOAD_TR_MOVIES_SUCCESS,
  props<{ movies: Movie[] }>()
);
export const loadTopRatedMoviesFail = createAction(
  MoviesTrActionsType.LOAD_TR_MOVIES_FAIL,
  props<{ error: string }>()
);
