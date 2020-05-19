import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { loadMovies } from '@features/store/movies/movies.actions';
import * as fromMoviesSelectors from '@features/store/movies/movies.selectors';
import { Store } from '@ngrx/store';
import { Movie } from '@shared/models/movies.models';
import * as routerSelectors from '@shared/store/router/router.selectors';
import { getRouterQueryParams } from '@shared/store/router/router.selectors';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  genre: string;
  term: string;

  movies$: Observable<Movie[]> = this.store.select(
    fromMoviesSelectors.moviesState
  );

  constructor(
    private store: Store<fromMoviesSelectors.State>,
    private routerStore: Store<routerSelectors.State>,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.initSubscription();
    this.configureSeo();
  }

  private configureSeo() {
    this.titleService.setTitle('Movies list');
    this.metaService.addTags([
      { name: 'description', content: 'Search your favorite movies' }
    ]);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initSubscription() {
    this.routerStore
      .select(getRouterQueryParams)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((queryParams) => {
        if (queryParams) {
          this.genre = queryParams.genre ? queryParams.genre : undefined;
          this.term = queryParams.q ? queryParams.q : undefined;
        } else {
          this.genre = undefined;
          this.term = undefined;
        }

        this.store.dispatch(
          loadMovies({
            term: this.term,
            genre: this.genre
          })
        );
      });
  }
}
