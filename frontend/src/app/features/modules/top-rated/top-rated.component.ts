import { Component, Input, OnInit } from '@angular/core';
import * as fromTopRatedSelectors from '@features/store/top-rated/top-rated.selectors';
import { Store } from '@ngrx/store';
import { Movie } from '@shared/models/movies.models';
import { loadTopRatedMovies } from 'app/features/store/top-rated/top-rated.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  @Input() showAllMoviesButton = true;

  movies$: Observable<Movie[]> = this.store.select(
    fromTopRatedSelectors.topRatedState
  );

  constructor(private store: Store<fromTopRatedSelectors.State>) {}

  ngOnInit() {
    this.store.dispatch(loadTopRatedMovies());
  }
}
