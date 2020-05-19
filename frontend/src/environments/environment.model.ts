export interface APIService {
  url: string;
  contentType: string;
}

export interface Assets {
  logo: string;
}

export interface Environment {
  production: boolean;
  moviesAPI: APIService;
  assetsURL: string;
  assets: Assets;
}
