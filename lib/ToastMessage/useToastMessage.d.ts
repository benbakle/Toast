import { IToastMessageProps } from "../intefaces";
export declare const useToastMessage: ({ timeout, type }: IToastMessageProps) => {
    visible: boolean;
    className: string;
    slideAway: () => void;
    countDownFrom: number;
};
