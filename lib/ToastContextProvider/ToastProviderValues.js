"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastProviderValues = void 0;
const react_1 = require("react");
const ToastProviderValues = () => {
    const [messages, setMessages] = (0, react_1.useState)([]);
    const toast = (message) => {
        setMessages([...messages, message]);
        console.log(`TOAST: ${message.text} Toast message has been triggered`);
    };
    const toastSuccess = (text, timeout) => {
        const message = { text, timeout, type: 'success' };
        toast(message);
    };
    const toastWarning = (text, timeout) => {
        const message = { text, timeout, type: 'warning' };
        toast(message);
    };
    return {
        toast,
        messages,
        toastSuccess,
        toastWarning,
    };
};
exports.ToastProviderValues = ToastProviderValues;
