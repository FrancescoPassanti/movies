import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../app/app.state';
import * as state from './router.state';

export interface State extends IAppState, state.RouterState {}

export const ROUTER_FEATURE_NAME = 'routerReducer';

export const routerStateSelector = createFeatureSelector<state.RouterState>(
  ROUTER_FEATURE_NAME
);

export const getRouterQueryParams = createSelector(
  routerStateSelector,
  (router: state.RouterState) => (router ? router.state.queryParams : undefined)
);

export const getRouterParams = createSelector(
  routerStateSelector,
  (router: state.RouterState) => (router ? router.state.params : undefined)
);
