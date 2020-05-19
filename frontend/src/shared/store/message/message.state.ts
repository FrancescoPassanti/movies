import { MessageType } from '@shared/enums/message-type.enum';

export interface MessageState {
  message: string;
  type: MessageType;
}

export const messageInitialState: MessageState = {
  message: undefined,
  type: undefined
};
