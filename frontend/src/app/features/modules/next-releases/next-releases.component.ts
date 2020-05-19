import { Component, OnInit } from '@angular/core';
import { loadNextReleasesMovies } from '@features/store/next-releases/next-releases.actions';
import * as fromNextReleasesSelectors from '@features/store/next-releases/next-releases.selectors';
import { Store } from '@ngrx/store';
import { Movie } from '@shared/models/movies.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-next-releases',
  templateUrl: './next-releases.component.html',
  styleUrls: ['./next-releases.component.scss']
})
export class NextReleasesComponent implements OnInit {
  movies$: Observable<Movie[]> = this.store.select(
    fromNextReleasesSelectors.nextReleasesState
  );

  constructor(private store: Store<fromNextReleasesSelectors.State>) {}

  ngOnInit() {
    this.store.dispatch(loadNextReleasesMovies());
  }
}
