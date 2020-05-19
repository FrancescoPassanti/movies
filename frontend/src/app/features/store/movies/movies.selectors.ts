import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '@shared/store/app/app.state';
import * as state from './movies.state';

export interface State extends IAppState, state.MoviesState {}

export const MOVIES_FEATURE_NAME = 'movies';

export const moviesStateSelector = createFeatureSelector<State>(
  MOVIES_FEATURE_NAME
);

export const moviesState = createSelector(
  moviesStateSelector,
  (movState: State) => movState.movies
);

export const movieState = createSelector(
  moviesStateSelector,
  (movState: State) => movState.movie
);

export const moviesGenreState = createSelector(
  moviesStateSelector,
  (movState: State) => movState.moviesGenre
);

export const moviesIsLoading = createSelector(
  moviesStateSelector,
  (movState: State) => movState.loading
);

export const moviesError = createSelector(
  moviesStateSelector,
  (movState: State) => movState.error
);
