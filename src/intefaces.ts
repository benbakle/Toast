import { ReactNode } from 'react';

export type Timeout = number | undefined;
export type ToastMessageType = 'message' | 'success' | 'warning' | undefined;
export type ToastMessagePush = (text: string, timeout?: Timeout) => void;

export interface IToastProviderValue {
  messages: IMessage[];
  toastMessage: ToastMessagePush;
  toastSuccess: ToastMessagePush;
  toastWarning: ToastMessagePush;
  toast: (message: IMessage) => void;
}

export interface IToastMessage {
  visible: boolean;
  className: string;
  slideAway: () => void;
  countDownFrom: number;
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

export interface ICountDownProps {
  countDownFrom: number;
}
