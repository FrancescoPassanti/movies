import * as actions from './message.actions';
import { MessageState, messageInitialState } from './message.state';
import { MessageType } from '@shared/enums/message-type.enum';
import { createReducer, on, Action } from '@ngrx/store';

const reducer = createReducer(
  messageInitialState,
  on(actions.showError, (state: MessageState, { payload }) => ({
    ...state,
    message: payload,
    type: MessageType.Error
  })),
  on(actions.showInfo, (state: MessageState, { payload }) => ({
    ...state,
    message: payload,
    type: MessageType.Info
  })),
  on(actions.showWarn, (state: MessageState, { payload }) => ({
    ...state,
    message: payload,
    type: MessageType.Warn
  }))
);

export function messageReducers(
  state: MessageState | undefined,
  action: Action
): any {
  return reducer(state, action);
}
