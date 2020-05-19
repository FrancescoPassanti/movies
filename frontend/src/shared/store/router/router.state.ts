import { Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface RouterState extends RouterReducerState<RouterStateUrl> {}

export const initialRouterState: RouterReducerState<RouterStateUrl> = {
  state: {
    url: '/',
    params: {},
    queryParams: {}
  },
  navigationId: 0
};
