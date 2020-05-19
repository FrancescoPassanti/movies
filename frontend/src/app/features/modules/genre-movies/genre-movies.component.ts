import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { loadGenreMovies } from '@features/store/movies/movies.actions';
import * as fromMoviesSelectors from '@features/store/movies/movies.selectors';
import { Store } from '@ngrx/store';
import { GenreType } from '@shared/enums/genres.enum';
import { Movie } from '@shared/models/movies.models';
import { Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-genre-movies',
  templateUrl: './genre-movies.component.html',
  styleUrls: ['./genre-movies.component.scss']
})
export class GenreMoviesComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  @Input() genre: GenreType;

  movies: Movie[];

  constructor(private store: Store<fromMoviesSelectors.State>) {}

  ngOnInit() {
    this.initSubscription();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initSubscription() {
    this.store.dispatch(loadGenreMovies({ genre: this.genre, limit: 4 }));

    this.store
      .select(fromMoviesSelectors.moviesGenreState)
      .pipe(
        filter((records) => records != null),
        filter((records) => Object.keys(records).indexOf(this.genre) !== -1),
        map((records) => {
          if (Object.keys(records).indexOf(this.genre) !== -1) {
            return records[this.genre];
          }
        }),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((movies) => {
        this.movies = movies;
      });
  }
}
