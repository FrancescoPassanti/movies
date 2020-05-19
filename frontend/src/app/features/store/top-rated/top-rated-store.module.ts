import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TopRatedEffects } from './top-rated.effects';
import { topRatedReducers } from './top-rated.reducers';
import { TR_MOVIES_FEATURE_NAME } from './top-rated.selectors';

@NgModule({
  imports: [
    StoreModule.forFeature(TR_MOVIES_FEATURE_NAME, topRatedReducers),
    EffectsModule.forFeature([TopRatedEffects])
  ]
})
export class TopRatedStoreModule {}
