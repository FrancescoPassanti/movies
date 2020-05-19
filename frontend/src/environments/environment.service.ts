import { Environment, APIService, Assets } from './environment.model';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService implements Environment {
  get production() {
    return environment.production;
  }

  get moviesAPI(): APIService {
    return environment.moviesAPI;
  }

  get assets(): Assets {
    return environment.assets;
  }

  get assetsURL(): string {
    return environment.assetsURL;
  }

  constructor() {}
}
