exports.id = 9434;
exports.ids = [9434];
exports.modules = {

/***/ 308:
/***/ ((module) => {

// Exports
module.exports = {
	"form_control": "styles_form_control__ZMIZZ",
	"top": "styles_top__z2M_N",
	"title": "styles_title__W1HcP",
	"error": "styles_error__mWbIF",
	"bottom": "styles_bottom__RQ8i0",
	"textarea": "styles_textarea__TezVI",
	"error_textarear": "styles_error_textarear__0X3uI",
	"form_icon": "styles_form_icon__KfD__",
	"tr_details": "styles_tr_details__cJIMu",
	"pl": "styles_pl__uvaRC",
	"fromBooking": "styles_fromBooking__eypgB"
};


/***/ }),

/***/ 9434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(308);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * @TextInput { //? value:string, onChange:function,onFocus:function,onBlur:function, name, title:string, icon:string, className:string,fromTrDetails:boolean, placeholder:string,pl:boolean,errorMessage:string}
 **/ const TextArea = (props)=>{
    let { value ="" , onChange =(e)=>{} , name , icon , placeholder , errorMessage ="" , fromTrDetails =false , title ="" , pl =false , fromBooking =false ,  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form_control)} ${fromTrDetails && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tr_details)}
      ${fromBooking && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().fromBooking)}
      `,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().top),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title)} ${pl && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().pl)}  `,
                        children: title && title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().error),
                        children: errorMessage && errorMessage
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form_icon)} fa-solid fa-${icon}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        placeholder: placeholder,
                        onChange: onChange,
                        name: name,
                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().textarea)} ${errorMessage && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().error_textarear)}`,
                        id: "",
                        value: value
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);


/***/ })

};
;