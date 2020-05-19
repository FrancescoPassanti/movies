import { ActionReducerMap } from '@ngrx/store';
import { loaderReducers } from './../loader/loader.reducers';
import { messageReducers } from './../message/message.reducers';
import { routerReducer } from './../router/router.reducers';
import { IAppState } from './app.state';

export const appReducers: ActionReducerMap<IAppState, any> = {
  routerReducer,
  message: messageReducers,
  loader: loaderReducers
};
