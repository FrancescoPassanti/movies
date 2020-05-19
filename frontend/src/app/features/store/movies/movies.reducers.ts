import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './movies.actions';
import { moviesInitialState, MoviesState } from './movies.state';

const reducer = createReducer(
  moviesInitialState,
  on(actions.loadMovies, (state: MoviesState, { term, genre }) => ({
    ...state,
    moviesFilter: {
      term: term,
      genre: genre
    },
    loading: true
  })),
  on(actions.loadMoviesSuccess, (state: MoviesState, { movies }) => ({
    ...state,
    moviesFilter: undefined,
    movies: movies,
    loading: false
  })),
  on(actions.loadMoviesFail, (state: MoviesState, { error }) => ({
    ...state,
    moviesFilter: undefined,
    error: error,
    movies: undefined,
    loading: false
  })),
  on(actions.loadMovie, (state: MoviesState) => ({
    ...state,
    loading: true,
    moviesGenre: undefined,
    movie: undefined
  })),
  on(actions.loadMovieSuccess, (state: MoviesState, { movie }) => ({
    ...state,
    movie: movie,
    loading: false
  })),
  on(actions.loadMovieFail, (state: MoviesState, { error }) => ({
    ...state,
    error: error,
    loading: false
  })),
  on(actions.loadGenreMovies, (state: MoviesState) => ({
    ...state,
    loading: true,
    moviesGenre: undefined
  })),
  on(actions.loadGenreMoviesSuccess, (state: MoviesState, { movies }) => ({
    ...state,
    moviesGenre: { ...state.moviesGenre, ...movies },
    loading: false
  })),
  on(actions.loadMovieFail, (state: MoviesState, { error }) => ({
    ...state,
    error: error,
    moviesGenre: undefined,
    loading: false
  }))
);

export function moviesReducers(
  state: MoviesState | undefined,
  action: Action
): any {
  return reducer(state, action);
}
