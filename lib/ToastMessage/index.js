"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CountDown_1 = require("./CountDown");
const useToastMessage_1 = require("./useToastMessage");
require("./__.css");
function ToastMessage({ children, timeout, type }) {
    const { visible, className, slideAway, countDownFrom, } = (0, useToastMessage_1.useToastMessage)({ timeout, type });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: visible &&
            (0, jsx_runtime_1.jsxs)("button", Object.assign({}, { className, onClick: slideAway }, { children: [timeout && (0, jsx_runtime_1.jsx)(CountDown_1.default, Object.assign({}, { countDownFrom })), " ", children] })) }));
}
exports.default = ToastMessage;
