import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as state from './loader.state';

export const LOADER_FEATURE_NAME = 'loader';

export const loaderStateSelector = createFeatureSelector<state.LoaderState>(
  LOADER_FEATURE_NAME
);

export const isLoading = createSelector(
  loaderStateSelector,
  (loaderState: state.LoaderState) => loaderState.loader
);
