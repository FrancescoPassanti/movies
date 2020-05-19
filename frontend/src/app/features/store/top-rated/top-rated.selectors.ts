import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '@shared/store/app/app.state';
import * as state from './top-rated.state';

export interface State extends IAppState, state.TopRatedState {}

export const TR_MOVIES_FEATURE_NAME = 'top-rated';

export const moviesStateSelector = createFeatureSelector<state.TopRatedState>(
  TR_MOVIES_FEATURE_NAME
);

export const topRatedState = createSelector(
  moviesStateSelector,
  (movieState: state.TopRatedState) => movieState.movies
);

export const topRatedIsLoading = createSelector(
  moviesStateSelector,
  (movieState: state.TopRatedState) => movieState.loading
);

export const topRatedError = createSelector(
  moviesStateSelector,
  (movieState: state.TopRatedState) => movieState.error
);
