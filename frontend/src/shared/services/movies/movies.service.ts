import { Injectable } from '@angular/core';
import { EnvironmentService } from '@environments/environment.service';
import { Movie } from '@shared/models/movies.models';
import { ApiService } from '@shared/services/api.service';
import { Observable, of, throwError } from 'rxjs';
import { map, tap, switchMap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(
    private apiService: ApiService,
    private environmentService: EnvironmentService
  ) {}

  /**
   * Get movies list
   */
  getMovies(request: { term?: string; genre?: string }): Observable<Movie[]> {
    let params: { [key: string]: string } = {};

    if (request.term) {
      params = {
        q: request.term
      };
    } else if (request.genre) {
      params = {
        genres_like: request.genre
      };
    }

    return this.apiService.get(
      `${this.environmentService.moviesAPI.url}/movies`,
      this.getHeaders(),
      params
    );
  }

  /**
   * Get movies list
   */
  getMoviesGenre(request: {
    genre: string;
    limit: number;
  }): Observable<Record<string, Movie[]>> {
    let params: { [key: string]: string } = {};

    params = {
      genres_like: request.genre,
      _limit: request.limit.toString()
    };

    return this.apiService
      .get(
        `${this.environmentService.moviesAPI.url}/movies`,
        this.getHeaders(),
        params
      )
      .pipe(
        map((movies: Movie[]) => {
          return { [request.genre]: movies };
        })
      );
  }

  /**
   * Get movies list
   */
  getTopRatedMovies(): Observable<Movie[]> {
    return this.apiService.get(
      `${this.environmentService.moviesAPI.url}/movies?_limit=12&_sort=rate&_order=desc`,
      this.getHeaders()
    );
  }

  /**
   * Get next releases
   */
  getNextReleases(): Observable<Movie[]> {
    return this.apiService.get(
      `${this.environmentService.moviesAPI.url}/next-releases`,
      this.getHeaders()
    );
  }

  /**
   * Get Single movie
   */
  getMovie(slug: string): Observable<Movie> {
    return this.apiService
      .get(
        `${this.environmentService.moviesAPI.url}/movies`,
        this.getHeaders(),
        {
          key: slug
        }
      )
      .pipe(
        mergeMap((movies) =>
          movies.length > 0 ? of(movies[0]) : throwError('Movie not found')
        )
      );
  }

  /**
   * Get default headers for Movie Services
   */
  private getHeaders(): { [header: string]: string } {
    return {
      'Content-Type': this.environmentService.moviesAPI.contentType
    };
  }
}
