import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NextReleasesEffects } from './next-releases.effects';
import { nextReleasesReducers } from './next-releases.reducers';
import { NR_MOVIES_FEATURE_NAME } from './next-releases.selectors';

@NgModule({
  imports: [
    StoreModule.forFeature(NR_MOVIES_FEATURE_NAME, nextReleasesReducers),
    EffectsModule.forFeature([NextReleasesEffects])
  ]
})
export class NextReleasesStoreModule {}
