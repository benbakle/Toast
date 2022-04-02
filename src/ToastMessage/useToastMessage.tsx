import { useCallback, useEffect, useState } from "react";
import { IToastMessageProps } from "../intefaces";

const transitionDuration = 300;

const TOAST_MODIFIERS = {
    inView: '--in-view',
    slidLeft: '--slid-left',
    slidRight: '--slid-right',
    hasCountDown: '--has-count-down',
}

export const useToastMessage = ({ timeout, type }: IToastMessageProps) => {
    const [visible, setVisible] = useState(true);
    const [position, setPosition] = useState(TOAST_MODIFIERS.slidRight);

    const adjustedTimeout = (timeout || -1000) + 1000;

    const element = 'toast__message';

    const typeModifier = type ? ` ${element}--${type}` : '';
    const positionModifier = position ? ` ${element}${position}` : '';
    const hasCountDownModifier = timeout ? ` ${element}${TOAST_MODIFIERS.hasCountDown}` : '';

    const className = `${element}${typeModifier}${positionModifier}${hasCountDownModifier}`;

    const dismiss = useCallback(() => {
        setVisible(false);
    }, []);

    const slideInView = () => {
        setTimeout(() => { setPosition(TOAST_MODIFIERS.inView) }, 100)
    }

    const slideAway = useCallback(() => {
        setPosition(TOAST_MODIFIERS.slidRight);
        setTimeout(dismiss, transitionDuration);
    }, [dismiss])

    const slideAwayAfterTimeout = useCallback(() => {
        timeout && setTimeout(slideAway, adjustedTimeout);
    }, [adjustedTimeout, slideAway, timeout]);

    useEffect(() => {
        slideInView();
        slideAwayAfterTimeout();
    }, [adjustedTimeout, slideAway, slideAwayAfterTimeout, timeout])

    return { visible, className, slideAway, countDownFrom:adjustedTimeout/1000 }
}
