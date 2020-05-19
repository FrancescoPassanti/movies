import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './loader.actions';
import { loaderInitialState, LoaderState } from './loader.state';

const reducer = createReducer(
  loaderInitialState,
  on(actions.showLoader, (state: LoaderState) => ({
    ...state,
    loader: true
  })),
  on(actions.hideLoader, (state: LoaderState) => ({
    ...state,
    loader: false
  }))
);

export function loaderReducers(
  state: LoaderState | undefined,
  action: Action
): any {
  return reducer(state, action);
}
