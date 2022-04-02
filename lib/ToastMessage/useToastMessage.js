"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToastMessage = void 0;
const react_1 = require("react");
const transitionDuration = 300;
const TOAST_MODIFIERS = {
    inView: '--in-view',
    slidLeft: '--slid-left',
    slidRight: '--slid-right',
    hasCountDown: '--has-count-down',
};
const useToastMessage = ({ timeout, type }) => {
    const [visible, setVisible] = (0, react_1.useState)(true);
    const [position, setPosition] = (0, react_1.useState)(TOAST_MODIFIERS.slidRight);
    const adjustedTimeout = (timeout || -1000) + 1000;
    const element = 'toast__message';
    const typeModifier = type ? ` ${element}--${type}` : '';
    const positionModifier = position ? ` ${element}${position}` : '';
    const hasCountDownModifier = timeout ? ` ${element}${TOAST_MODIFIERS.hasCountDown}` : '';
    const className = `${element}${typeModifier}${positionModifier}${hasCountDownModifier}`;
    const dismiss = (0, react_1.useCallback)(() => {
        setVisible(false);
    }, []);
    const slideInView = () => {
        setTimeout(() => { setPosition(TOAST_MODIFIERS.inView); }, 100);
    };
    const slideAway = (0, react_1.useCallback)(() => {
        setPosition(TOAST_MODIFIERS.slidRight);
        setTimeout(dismiss, transitionDuration);
    }, [dismiss]);
    const slideAwayAfterTimeout = (0, react_1.useCallback)(() => {
        timeout && setTimeout(slideAway, adjustedTimeout);
    }, [adjustedTimeout, slideAway, timeout]);
    (0, react_1.useEffect)(() => {
        slideInView();
        slideAwayAfterTimeout();
    }, [adjustedTimeout, slideAway, slideAwayAfterTimeout, timeout]);
    return { visible, className, slideAway, countDownFrom: adjustedTimeout / 1000 };
};
exports.useToastMessage = useToastMessage;
