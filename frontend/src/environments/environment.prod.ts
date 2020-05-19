import { Environment } from './environment.model';

const assetsURL = 'http://localhost:3000/assets';

export const environment: Environment = {
  production: true,
  moviesAPI: {
    url: 'http://localhost:3000',
    contentType: 'application/json'
  },
  assetsURL: assetsURL,
  assets: {
    logo: `${assetsURL}/logos/logo_default.png`
  }
};
