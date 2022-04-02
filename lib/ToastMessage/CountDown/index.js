"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./__.css");
function CountDown({ countDownFrom: from }) {
    const [countDown, setCountDown] = (0, react_1.useState)(from);
    (0, react_1.useEffect)(() => {
        setCountDown(from - 1);
    }, [from]);
    (0, react_1.useEffect)(() => {
        if (countDown > 0)
            setTimeout(() => {
                setCountDown(countDown - 1);
            }, 1000);
    }, [countDown]);
    return (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'count-down' }, { children: countDown }));
}
exports.default = CountDown;
