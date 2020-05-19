import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieBoxModule } from '../movie-box/movie-box.module';
import { MovieGridComponent } from './movie-grid.component';

@NgModule({
  declarations: [MovieGridComponent],
  imports: [CommonModule, RouterModule, MovieBoxModule],
  exports: [MovieGridComponent]
})
export class MovieGridModule {}
