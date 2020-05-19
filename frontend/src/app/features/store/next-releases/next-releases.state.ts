import { Movie } from '@shared/models/movies.models';

export interface NextReleasesState {
  movies: Movie[];
  loading: boolean;
  error: string;
}

export const nextReleasesInitialState: NextReleasesState = {
  movies: undefined,
  loading: false,
  error: undefined
};
