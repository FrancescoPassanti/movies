import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from '@shared/ui/components/carousel/carousel.module';
import { NextReleasesStoreModule } from 'app/features/store/next-releases/next-releases-store.module';
import { NextReleasesComponent } from './next-releases.component';

@NgModule({
  declarations: [NextReleasesComponent],
  imports: [CommonModule, NextReleasesStoreModule, CarouselModule],
  exports: [NextReleasesComponent]
})
export class NextReleasesModule {}
