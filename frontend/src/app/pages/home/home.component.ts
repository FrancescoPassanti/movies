import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.configureSeo();
  }

  private configureSeo() {
    this.titleService.setTitle('Homepage');
    this.metaService.addTags([
      { name: 'description', content: 'Welcome in the movies website' }
    ]);
  }
}
