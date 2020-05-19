import { createAction } from '@ngrx/store';

export enum LoaderActionsType {
  SHOW_LOADER = '[Loader] Show Loader',
  HIDE_LOADER = '[Loader] Hide Loader'
}

export const showLoader = createAction(LoaderActionsType.SHOW_LOADER);
export const hideLoader = createAction(LoaderActionsType.HIDE_LOADER);
