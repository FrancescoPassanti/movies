import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NextReleasesModule } from '@features/modules/next-releases/next-releases.module';
import { TopRatedModule } from '@features/modules/top-rated/top-rated.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NextReleasesModule, TopRatedModule]
})
export class HomeModule {}
