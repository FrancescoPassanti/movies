import { GenreType } from './../enums/genres.enum';

export interface Movie {
  id: string;
  key: string;
  name: string;
  description: string;
  rate: string;
  length: string;
  img: string;
  banner?: string;
  genres: GenreType[];
}
