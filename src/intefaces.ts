import { ReactNode } from 'react';

export type Timeout = number | undefined;
export type ToastMessageType = 'success' | 'warning' | undefined;
export type ToastMessagePush = (text: string, timeout?: number | undefined) => void;

export interface IToastProviderValue {
  messages: IMessage[];
  toastSuccess: ToastMessagePush;
  toastWarning: ToastMessagePush;
  toast: (message: IMessage) => void;
}

export interface IToastMessageProps {
  timeout?: Timeout;
  type?: ToastMessageType;
  children?: ReactNode | string;
}

export interface IMessage {
  text: string;
  timeout?: Timeout;
  type?: ToastMessageType;
}
