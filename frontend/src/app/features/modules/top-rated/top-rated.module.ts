import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieGridModule } from '@shared/ui/components/movie-grid/movie-grid.module';
import { TopRatedStoreModule } from 'app/features/store/top-rated/top-rated-store.module';
import { TopRatedComponent } from './top-rated.component';

@NgModule({
  declarations: [TopRatedComponent],
  imports: [CommonModule, RouterModule, MovieGridModule, TopRatedStoreModule],
  exports: [TopRatedComponent]
})
export class TopRatedModule {}
