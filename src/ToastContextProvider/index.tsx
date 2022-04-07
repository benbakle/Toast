import { createContext, ReactChild, ReactNode, useContext } from 'react';
import { IToastProviderValue } from '../intefaces';
import { ToastProviderValue } from './ToastProviderValue';

const ToastContext = createContext({} as IToastProviderValue);
const useToast = () => useContext(ToastContext);
const value = ToastProviderValue();

const ToastContextProvider = ({ children }: { children: ReactChild | ReactChild[] }) => (
  <ToastContext.Provider {...{ value, children }} />
);

export { useToast, ToastContextProvider };
