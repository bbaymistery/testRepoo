exports.id = 2747;
exports.ids = [2747];
exports.modules = {

/***/ 7159:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "styles_loading__ZDYqQ",
	"dot": "styles_dot__36Run",
	"wave": "styles_wave__u2qvy"
};


/***/ }),

/***/ 6261:
/***/ ((module) => {

// Exports
module.exports = {
	"error": "elgun_error__el1Fl"
};


/***/ }),

/***/ 7691:
/***/ ((module) => {

// Exports
module.exports = {
	"form_control": "elgun_form_control__cQNK3",
	"header": "elgun_header__o6L6R",
	"form_label": "elgun_form_label__Dn7CA",
	"marginTop": "elgun_marginTop__oNDX9",
	"input_div": "elgun_input_div__sg3B9",
	"input": "elgun_input__neZ73",
	"errorInput": "elgun_errorInput__lg9GN",
	"form_icon": "elgun_form_icon__DX5hB",
	"tr_details": "elgun_tr_details__UUJYL",
	"labelWhite": "elgun_labelWhite__I5yRc",
	"error_select": "elgun_error_select__hjgCi",
	"form_icon_arrow": "elgun_form_icon_arrow__q_qfz",
	"tr_details_withpadding": "elgun_tr_details_withpadding__FCtkY",
	"input_bggray": "elgun_input_bggray__GqrwK",
	"noMargin": "elgun_noMargin__FN_P3",
	"readOnly": "elgun_readOnly__hGVu4",
	"fromBooking": "elgun_fromBooking__tGFxc"
};


/***/ }),

/***/ 1792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elgun_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6261);
/* harmony import */ var _elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const TextError = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().error),
        children: props.errorMessage
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextError);


/***/ }),

/***/ 2747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ elements_TextInput)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/elements/TextInput/elgun.module.scss
var elgun_module = __webpack_require__(7691);
var elgun_module_default = /*#__PURE__*/__webpack_require__.n(elgun_module);
// EXTERNAL MODULE: ./src/components/elements/TextError/index.js
var TextError = __webpack_require__(1792);
// EXTERNAL MODULE: ./src/components/elements/Loading/styles.module.scss
var styles_module = __webpack_require__(7159);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/elements/Loading/index.js



const Loading = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(styles_module_default()).loading} ${className ? className : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).dot
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).dot
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).dot
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).dot
            })
        ]
    });
};
/* harmony default export */ const elements_Loading = (Loading);

;// CONCATENATED MODULE: ./src/components/elements/TextInput/index.js





/**
 * @TextInput { //? value , onChange:function,onFocus:function,onBlur:function, name, title:string, icon:string,placeholder:string,type:string ,errorMessage:string,isLoading:boolean || string,fromTrDetails:boolean,noErrorMessage:boolean,from_Tr_with_padding:boolean,noMarginTop:boolean,labelWhite:boolean,readOnly:boolean
 * }
 **/ function TextInput(props) {
    let { value ="" , onChange =(e)=>{} , onFocus =(e)=>{} , onBlur =(e)=>{} , name ="" , title ="" , icon ="" , placeholder ="" , type ="" , errorMessage ="" , isLoading =false , fromTrDetails =false , noErrorMessage , from_Tr_with_padding =false , noMarginTop =false , readOnly =false , fromBooking =false , dataid ="" , f =false //bu responsivde asagidaki boslugu goturur (csse bax
      } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(elgun_module_default()).form_control} ${fromTrDetails && (elgun_module_default()).tr_details}  ${from_Tr_with_padding && (elgun_module_default()).tr_details_withpadding} ${noMarginTop && (elgun_module_default()).noMargin}  ${fromBooking && (elgun_module_default()).fromBooking} `,
        f: f,
        children: [
            !noErrorMessage && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(elgun_module_default()).header} ${fromTrDetails && (elgun_module_default()).marginTop}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: `${(elgun_module_default()).form_label}`,
                        htmlFor: title,
                        children: title
                    }),
                    " ",
                    errorMessage && /*#__PURE__*/ jsx_runtime_.jsx(TextError/* default */.Z, {
                        errorMessage: errorMessage
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(elgun_module_default()).input_div} `,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: `${(elgun_module_default()).form_icon} fa-solid fa-${icon}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        autoComplete: "off",
                        autoCapitalize: `${name === "email" ? "off" : "on"}`,
                        placeholder: placeholder,
                        name: name,
                        id: title,
                        className: `${(elgun_module_default()).input} ${errorMessage ? (elgun_module_default()).errorInput : ""}`,
                        onChange: onChange,
                        onFocus: onFocus,
                        onBlur: onBlur,
                        type: type,
                        value: value,
                        readOnly: readOnly,
                        dataid: dataid
                    }),
                    isLoading && /*#__PURE__*/ jsx_runtime_.jsx(elements_Loading, {})
                ]
            })
        ]
    });
}
// example
/* harmony default export */ const elements_TextInput = (TextInput);


/***/ })

};
;