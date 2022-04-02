import { ReactElement } from "react";
import { IToastProviderValue } from "../intefaces";
declare const useToast: () => IToastProviderValue;
declare const ToastContextProvider: ({ children }: {
    children: ReactElement | ReactElement[];
}) => JSX.Element;
export { useToast, ToastContextProvider };
