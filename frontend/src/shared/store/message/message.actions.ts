import { createAction, props } from '@ngrx/store';

export enum MessageActionsType {
  SHOW_ERROR = '[Messages] Show Error',
  SHOW_WARN = '[Messages] Show Warning',
  SHOW_INFO = '[Messages] Show Information'
}

export const showError = createAction(
  MessageActionsType.SHOW_ERROR,
  props<{ payload: string }>()
);
export const showWarn = createAction(
  MessageActionsType.SHOW_WARN,
  props<{ payload: string }>()
);
export const showInfo = createAction(
  MessageActionsType.SHOW_INFO,
  props<{ payload: string }>()
);
