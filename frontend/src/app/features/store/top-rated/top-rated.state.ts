import { Movie } from '@shared/models/movies.models';

export interface TopRatedState {
  movies: Movie[];
  loading: boolean;
  error: string;
}

export const topRatedInitialState: TopRatedState = {
  movies: undefined,
  loading: false,
  error: undefined
};
