import { createContext, ReactNode, useContext } from 'react';
import { IToastProviderValue } from '../intefaces';
import { ToastProviderValue } from './ToastProviderValue';

const ToastContext = createContext({} as IToastProviderValue);
const useToast = () => useContext(ToastContext);
const value = ToastProviderValue();

const ToastContextProvider = ({ children }: { children: ReactNode}) => (
  <ToastContext.Provider {...{ value }}>{children}</ToastContext.Provider>
);

export { useToast, ToastContextProvider };
