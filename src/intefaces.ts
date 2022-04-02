import { ReactElement, ReactNode } from "react";

export interface IToastProviderValue {
    messages: IMessage[];
    toast: (message: IMessage) => void;
    toastSuccess: (text: string, timeout?: number | undefined) => void;
    toastWarning: (text: string, timeout?: number | undefined) => void;
}

export interface IToastMessageProps {
    type?: MessageType;
    timeout?: number | undefined;
    children?:ReactNode | string;
}

export interface IMessage {
    text: string;
    type?: MessageType;
    timeout?: number | undefined;
}

export type MessageType = 'success' | 'warning' | undefined;