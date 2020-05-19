import { LoaderState } from '../loader/loader.state';
import { MessageState } from '../message/message.state';
import { RouterState } from '../router/router.state';

// tslint:disable-next-line:interface-name
export interface IAppState {
  routerReducer: RouterState;
  message: MessageState;
  loader: LoaderState;
}
