import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavarComponent } from './navar.component';

@NgModule({
  declarations: [NavarComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [NavarComponent]
})
export class NavbarModule {}
