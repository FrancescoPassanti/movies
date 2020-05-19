import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieBoxComponent } from './movie-box.component';

@NgModule({
  declarations: [MovieBoxComponent],
  imports: [CommonModule, RouterModule],
  exports: [MovieBoxComponent]
})
export class MovieBoxModule {}
