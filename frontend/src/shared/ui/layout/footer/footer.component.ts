import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '@environments/environment.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  logoUrl: string = this.environmentService.assets.logo;

  constructor(private environmentService: EnvironmentService) {}

  ngOnInit() {}
}
