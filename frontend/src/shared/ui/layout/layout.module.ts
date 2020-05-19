import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentModule } from './content/content.module';
import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FooterModule, NavbarModule, ContentModule],
  exports: [CommonModule, FooterModule, NavbarModule, ContentModule]
})
export class LayoutModule {}
