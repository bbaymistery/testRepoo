exports.id = 8307;
exports.ids = [8307];
exports.modules = {

/***/ 7192:
/***/ ((module) => {

// Exports
module.exports = {
	"form_input": "styles_form_input__77gRm",
	"form_input_error": "styles_form_input_error__WPOCo",
	"label": "styles_label__Z7Ws2",
	"textarea": "styles_textarea__k6fa1",
	"isTaxiDeal": "styles_isTaxiDeal__gAghP"
};


/***/ }),

/***/ 8307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7192);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);




/**
 @TextInput {//* name:string,label:string,errorMessage:string,value:string,onChange:function}
 **/ const Textarea = (props)=>{
    let { name ="" , label ="" , errorMessage ="" , value ="" , onChange =(e)=>{} , isTaxiDeal =false , inputStyle ={} , labelStyle ={}  } = props;
    let state = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction  }  } = state;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form_input)} ${isTaxiDeal ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().isTaxiDeal) : ""}`,
        children: [
            errorMessage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                direction: String(direction === "rtl"),
                className: `error_message ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form_input_error)}`,
                children: errorMessage
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                style: {
                    ...inputStyle
                },
                value: value,
                name: name,
                onChange: onChange,
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().textarea)} `,
                err: String(typeof errorMessage === "string" && errorMessage.length > 0)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                style: {
                    ...labelStyle
                },
                htmlFor: name,
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().label),
                children: [
                    " ",
                    label,
                    " "
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);


/***/ })

};
;