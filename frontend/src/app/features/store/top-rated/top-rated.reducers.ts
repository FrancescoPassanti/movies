import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './top-rated.actions';
import { topRatedInitialState, TopRatedState } from './top-rated.state';

const reducer = createReducer(
  topRatedInitialState,
  on(actions.loadTopRatedMovies, (state: TopRatedState) => ({
    ...state,
    loading: true
  })),
  on(actions.loadTopRatedMoviesSuccess, (state: TopRatedState, { movies }) => ({
    ...state,
    movies: movies,
    loading: false
  })),
  on(actions.loadTopRatedMoviesFail, (state: TopRatedState, { error }) => ({
    ...state,
    error: error,
    loading: false
  }))
);

export function topRatedReducers(
  state: TopRatedState | undefined,
  action: Action
): any {
  return reducer(state, action);
}
