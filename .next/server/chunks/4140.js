exports.id = 4140;
exports.ids = [4140];
exports.modules = {

/***/ 6505:
/***/ ((module) => {

// Exports
module.exports = {
	"form_input": "styles_form_input__a9ea6",
	"form_input_error": "styles_form_input_error__qrFw9",
	"label": "styles_label__fUVc9",
	"input": "styles_input__V44iI",
	"isTaxiDeal": "styles_isTaxiDeal__8E9tJ",
	"p": "styles_p__XtaqY"
};


/***/ }),

/***/ 6:
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
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6505);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);




/**
 @TextInput {//* type:string,name:string,label:string,errorMessage:string,value:string,onChange:function}
 **/ const TextInput = (props)=>{
    let { type ="text" , value ="" , name ="" , label ="" , errorMessage , onChange =(e)=>{} , placeholder ="" , labelStyle ={} , inputStyle ={}  } = props;
    let state = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction  }  } = state;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form_input),
        children: [
            typeof errorMessage === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                direction: String(direction === "rtl"),
                className: `error_message ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form_input_error)}`,
                children: errorMessage
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                style: {
                    ...inputStyle
                },
                required: true,
                err: String(typeof errorMessage === "string" && errorMessage.length > 0),
                type: type,
                value: value,
                name: name,
                onChange: onChange,
                placeholder: placeholder,
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input)}`
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInput);


/***/ })

};
;