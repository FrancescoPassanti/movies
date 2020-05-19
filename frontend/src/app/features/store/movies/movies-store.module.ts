import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MoviesEffects } from './movies.effects';
import { moviesReducers } from './movies.reducers';
import { MOVIES_FEATURE_NAME } from './movies.selectors';

@NgModule({
  imports: [
    StoreModule.forFeature(MOVIES_FEATURE_NAME, moviesReducers),
    EffectsModule.forFeature([MoviesEffects])
  ]
})
export class MoviesStoreModule {}
