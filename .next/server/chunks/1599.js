exports.id = 1599;
exports.ids = [1599];
exports.modules = {

/***/ 9765:
/***/ ((module) => {

// Exports
module.exports = {
	"btn_box": "elgun_btn_box__fe9i2",
	"btn_primary": "elgun_btn_primary__qJ4ps",
	"contained": "elgun_contained__m_smP",
	"btn_primary_responsive": "elgun_btn_primary_responsive__60333"
};


/***/ }),

/***/ 1599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elgun_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9765);
/* harmony import */ var _elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const BlueBotton = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn_box)} `,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn_primary)}

         ${props.colorViceVerse && (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().contained)}
         ${props.responsive && (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn_primary_responsive)}
        `,
            type: props.type ? props.type : "",
            children: props.title
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlueBotton);


/***/ })

};
;