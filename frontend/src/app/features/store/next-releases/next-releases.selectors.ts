import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '@shared/store/app/app.state';
import * as state from './next-releases.state';

export interface State extends IAppState, state.NextReleasesState {}

export const NR_MOVIES_FEATURE_NAME = 'next-releases';

export const moviesStateSelector = createFeatureSelector<
  state.NextReleasesState
>(NR_MOVIES_FEATURE_NAME);

export const nextReleasesState = createSelector(
  moviesStateSelector,
  (movieState: state.NextReleasesState) => movieState.movies
);

export const nextReleasesIsLoading = createSelector(
  moviesStateSelector,
  (movieState: state.NextReleasesState) => movieState.loading
);

export const nextReleasesError = createSelector(
  moviesStateSelector,
  (movieState: state.NextReleasesState) => movieState.error
);
