import { useState } from 'react';
import { IMessage, IToastProviderValue } from '../intefaces';

export const useToastProviderValue = () => {
  const [messages, setMessages] = useState([] as IMessage[]);

  const toast = (message: IMessage) => {
    setMessages([...messages, message]);
  };

  const providerValue: IToastProviderValue = {
    toast,
    messages,
    toastMessage: (text: string, timeout?: number | undefined) => {
      const message = { text, timeout, type: 'message' } as IMessage;
      toast(message);
    },
    toastSuccess: (text: string, timeout?: number | undefined) => {
      const message = { text, timeout, type: 'success' } as IMessage;
      toast(message);
    },
    toastWarning: (text: string, timeout?: number | undefined) => {
      const message = { text, timeout, type: 'warning' } as IMessage;
      toast(message);
    },
  };

  return providerValue;
};