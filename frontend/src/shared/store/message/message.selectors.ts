import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as state from './message.state';

export const MESSAGE_FEATURE_NAME = 'message';

export const messageStateSelector = createFeatureSelector<state.MessageState>(
  MESSAGE_FEATURE_NAME
);

export const messageState = createSelector(
  messageStateSelector,
  (msgState: state.MessageState) => msgState.message
);
