"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ToastMessage_1 = require("./ToastMessage");
const ToastContextProvider_1 = require("./ToastContextProvider");
require("./__.css");
const react_1 = require("react");
function Toast({ justified }) {
    const { messages } = (0, ToastContextProvider_1.useToast)();
    const [isJustified, setIsJustified] = (0, react_1.useState)(justified);
    const className = `toast${isJustified ? ` toast--justified` : ''}`;
    const toggleJustified = () => {
        setIsJustified(!isJustified);
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, { className }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({}, { onClick: toggleJustified }, { children: isJustified ? 'Align Right' : 'Justify' })), messages.map(({ text, type, timeout }, key) => text &&
                (0, jsx_runtime_1.jsx)(ToastMessage_1.default, Object.assign({}, { timeout, type, key }, { children: text })))] })));
}
exports.default = Toast;
