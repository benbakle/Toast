"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastDemo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ToastContextProvider_1 = require("./ToastContextProvider");
function ToastDemo() {
    const { toast, toastSuccess, toastWarning } = (0, ToastContextProvider_1.useToast)();
    const onToastClick = () => {
        const uniqueId = Date.now().toString();
        const text = `Toast :: Something else is doing it! Message ${uniqueId}`;
        toast({ text, timeout: 5000 });
    };
    const onWarningClick = () => {
        const uniqueId = Date.now().toString();
        const text = `Warning :: You may not have done it! Message ${uniqueId}`;
        toastWarning(text, 10000);
    };
    const onSuccessClick = () => {
        const uniqueId = Date.now().toString();
        const text = `Success :: You did it! Message ${uniqueId}`;
        toastSuccess(text, 20000);
    };
    const onToastNoTimeoutClick = () => {
        const text = "Ok... I'll just uh... hang out.";
        toast({ text });
    };
    const onBigToast = () => {
        const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!";
        toast({ text, timeout: 15000 });
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: `toast-demo` }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({}, { onClick: onSuccessClick }, { children: "success" })), (0, jsx_runtime_1.jsx)("button", Object.assign({}, { onClick: onWarningClick }, { children: "warning" })), (0, jsx_runtime_1.jsx)("button", Object.assign({}, { onClick: onToastClick }, { children: "toast" })), (0, jsx_runtime_1.jsx)("button", Object.assign({}, { onClick: onBigToast }, { children: "big ol' toast" })), (0, jsx_runtime_1.jsx)("button", Object.assign({}, { onClick: onToastNoTimeoutClick }, { children: "toast (no timeout)" }))] })));
}
exports.ToastDemo = ToastDemo;
