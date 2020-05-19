import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './next-releases.actions';
import {
  nextReleasesInitialState,
  NextReleasesState
} from './next-releases.state';

const reducer = createReducer(
  nextReleasesInitialState,
  on(actions.loadNextReleasesMovies, (state: NextReleasesState) => ({
    ...state,
    loading: true
  })),
  on(
    actions.loadNextReleasesMoviesSuccess,
    (state: NextReleasesState, { movies }) => ({
      ...state,
      movies: movies,
      loading: false
    })
  ),
  on(
    actions.loadNextReleasesMoviesFail,
    (state: NextReleasesState, { error }) => ({
      ...state,
      error: error,
      loading: false
    })
  )
);

export function nextReleasesReducers(
  state: NextReleasesState | undefined,
  action: Action
): any {
  return reducer(state, action);
}
