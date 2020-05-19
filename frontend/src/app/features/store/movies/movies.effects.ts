import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '@shared/services/movies/movies.service';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as actions from './movies.actions';

@Injectable()
export class MoviesEffects {
  getMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadMovies),
      mergeMap((action) =>
        this.moviesService
          .getMovies({
            term: action.term,
            genre: action.genre
          })
          .pipe(
            map((resp) => actions.loadMoviesSuccess({ movies: resp })),
            catchError((error: string) =>
              of(actions.loadMoviesFail({ error: error }))
            )
          )
      )
    )
  );

  getMoviesGenre$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadGenreMovies),
      mergeMap((action) =>
        this.moviesService
          .getMoviesGenre({
            genre: action.genre,
            limit: action.limit
          })
          .pipe(
            map((resp) => actions.loadGenreMoviesSuccess({ movies: resp })),
            catchError((error: string) =>
              of(actions.loadGenreMoviesFail({ error: error }))
            )
          )
      )
    )
  );

  getMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadMovie),
      mergeMap((action) =>
        this.moviesService.getMovie(action.slug).pipe(
          map((resp) => actions.loadMovieSuccess({ movie: resp })),
          catchError((error) => of(actions.loadMovieFail({ error: error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
