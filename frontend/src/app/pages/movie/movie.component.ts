import { Location } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { loadMovie } from '@features/store/movies/movies.actions';
import * as fromMoviesSelectors from '@features/store/movies/movies.selectors';
import { Store } from '@ngrx/store';
import { Movie } from '@shared/models/movies.models';
import * as routerSelectors from '@shared/store/router/router.selectors';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy, AfterViewInit {
  private unsubscribe$ = new Subject<void>();

  movie: Movie;
  loading = true;
  showNotFound = false;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private location: Location,
    private store: Store<fromMoviesSelectors.State>,
    private routerStore: Store<routerSelectors.State>
  ) {}

  ngOnInit() {
    this.initSubscription();
  }

  ngAfterViewInit() {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onGoBack() {
    this.location.back();
  }

  private initSubscription() {
    this.routerStore
      .select(routerSelectors.getRouterParams)
      .pipe(
        filter((params) => params != null),
        filter((params) => params.slug),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((params) => {
        this.showNotFound = false;
        this.movie = undefined;
        this.store.dispatch(loadMovie({ slug: params.slug }));
      });

    this.store
      .select(fromMoviesSelectors.moviesError)
      .pipe(
        filter((value) => value !== undefined),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => {
        this.showNotFound = true;
      });

    this.store
      .select(fromMoviesSelectors.movieState)
      .pipe(
        filter((movie) => movie != null),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((movie) => {
        this.movie = movie;
        this.configureSeo(this.movie);
      });

    this.store
      .select(fromMoviesSelectors.moviesIsLoading)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isLoading) => {
        this.loading = isLoading;
      });
  }

  private configureSeo(movie: Movie) {
    this.titleService.setTitle(movie.name);
    this.metaService.addTags([
      { name: 'keywords', content: movie.name },
      { name: 'description', content: movie.description }
    ]);
  }
}
