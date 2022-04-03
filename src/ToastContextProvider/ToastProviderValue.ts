import { useState } from 'react';
import { IMessage, IToastProviderValue } from '../intefaces';

export const ToastProviderValue = () => {
  const [messages, setMessages] = useState([] as IMessage[]);

  const toast = (message: IMessage) => {
    setMessages([...messages, message]);
  };

  const toastSuccess = (text: string, timeout?: number | undefined) => {
    const message = { text, timeout, type: 'success' } as IMessage;
    toast(message);
  };

  const toastWarning = (text: string, timeout?: number | undefined) => {
    const message = { text, timeout, type: 'warning' } as IMessage;
    toast(message);
  };

  return {
    toast,
    messages,
    toastSuccess,
    toastWarning,
  } as IToastProviderValue;
};
