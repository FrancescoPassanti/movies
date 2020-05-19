import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '@shared/services/movies/movies.service';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as actions from './next-releases.actions';

@Injectable()
export class NextReleasesEffects {
  getTrMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadNextReleasesMovies),
      mergeMap(() =>
        this.moviesService.getNextReleases().pipe(
          map((resp) =>
            actions.loadNextReleasesMoviesSuccess({ movies: resp })
          ),
          catchError((error: string) =>
            of(actions.loadNextReleasesMoviesFail({ error: error }))
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
