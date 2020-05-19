import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '@shared/services/movies/movies.service';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as actions from './top-rated.actions';

@Injectable()
export class TopRatedEffects {
  getTrMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadTopRatedMovies),
      mergeMap(() =>
        this.moviesService.getTopRatedMovies().pipe(
          map((resp) => actions.loadTopRatedMoviesSuccess({ movies: resp })),
          catchError((error: string) =>
            of(actions.loadTopRatedMoviesFail({ error: error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
