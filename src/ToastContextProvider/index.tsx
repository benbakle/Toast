import { createContext, ReactElement, useContext } from 'react';
import { IToastProviderValue } from '../intefaces';
import { ToastProviderValues } from './ToastProviderValues';

const ToastContext = createContext({} as IToastProviderValue);
const useToast = () => useContext(ToastContext);

const ToastContextProvider = ({ children }: { children: ReactElement | ReactElement[] }) => (
  <ToastContext.Provider {...{ value: ToastProviderValues() }}>{children}</ToastContext.Provider>
);

export { useToast, ToastContextProvider };
