import { ReactNode } from 'react';

export type Timeout = number | undefined;
export type MessageType = 'success' | 'warning' | undefined;
export type MessageQuery = (text: string, timeout?: number | undefined) => void;

export interface IToastProviderValue {
  messages: IMessage[];
  toastSuccess: MessageQuery;
  toastWarning: MessageQuery;
  toast: (message: IMessage) => void;
}

export interface IToastMessageProps {
  timeout?: Timeout;
  type?: MessageType;
  children?: ReactNode | string;
}

export interface IMessage {
  text: string;
  timeout?: Timeout;
  type?: MessageType;
}
