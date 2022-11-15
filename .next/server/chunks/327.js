"use strict";
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 4327:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emailjs_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// ** Third Party Imports


const SubscribeForm = ()=>{
    const { 0: submitting , 1: setSubmitting  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Subscribe");
    const form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const sendEmail = (e)=>{
        e.preventDefault();
        setSubmitting("Subscribing");
        _emailjs_browser__WEBPACK_IMPORTED_MODULE_2___default().sendForm("service_oebog49", "template_hbe2laq", form.current, "9W-xgroL596bRE0WK").then((result)=>{
            console.log(result.text);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Thanks for subscribing! Check your email weekly for EV Initiative updates.", {
                style: {
                    borderRadius: "10px"
                },
                duration: 6000
            });
            setSubmitting("Subscribed!");
        }, (error)=>{
            console.log(error.text);
            console.log("message NOT sent");
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Sorry, there was an issue subscribing. Please try again.");
        });
        e.target.reset();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: "newsletter-form position-relative d-block d-lg-flex d-md-flex mb-5",
            ref: form,
            onSubmit: sendEmail,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "email",
                    className: "input-newsletter form-control me-2",
                    placeholder: "Enter your email",
                    name: "email",
                    required: "",
                    autoComplete: "off"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "submit",
                    value: submitting,
                    className: "btn btn-primary mt-3 mt-lg-0 mt-md-0"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscribeForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;