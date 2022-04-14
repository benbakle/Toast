import { createContext, ReactChild, useContext } from 'react';
import { IToastProviderValue } from '../intefaces';
import { useToastProviderValue } from './ToastProviderValue';

const ToastContext = createContext({} as IToastProviderValue);
const useToast = () => useContext(ToastContext);

const ToastContextProvider = ({ children }: { children: ReactChild | ReactChild[] }) => {
  const value = useToastProviderValue();
  return <ToastContext.Provider {...{ value, children }} />;
};

export { useToast, ToastContextProvider };