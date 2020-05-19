import { GenreType } from '@shared/enums/genres.enum';
import { Movie } from '@shared/models/movies.models';

export interface MoviesFilter {
  term?: string;
  genre?: string;
}

export interface MoviesState {
  movies: Movie[];
  moviesGenre: Record<string, Movie[]>;
  movie: Movie;
  moviesFilter: MoviesFilter;
  loading: boolean;
  error: string;
}

export const moviesInitialState: MoviesState = {
  movies: undefined,
  movie: undefined,
  moviesGenre: undefined,
  moviesFilter: undefined,
  loading: false,
  error: undefined
};
