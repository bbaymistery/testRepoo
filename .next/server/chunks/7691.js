exports.id = 7691;
exports.ids = [7691];
exports.modules = {

/***/ 9517:
/***/ ((module) => {

// Exports
module.exports = {
	"dropdown": "styles_dropdown__r1Dvt",
	"heading": "styles_heading__9OkqQ",
	"dropdown_label": "styles_dropdown_label__77Tbi",
	"dropdown_component": "styles_dropdown_component__bLS1U",
	"selected_options_wrapper": "styles_selected_options_wrapper__Mcfbd",
	"dropdown_options": "styles_dropdown_options__V6JEj",
	"dropdown_option": "styles_dropdown_option__LMboZ"
};


/***/ }),

/***/ 7691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9517);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _OutsideClickAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3260);




const DropDown = (props)=>{
    const { label ="" , selectedOption , setSelectedOption , options , heading ="" , disable =false , headingStyle ={} , dropdownComponentStyle ={}  } = props;
    const [isOptionsVisible, setIsOptionsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSelected = (option)=>{
        setSelectedOption(option);
        setIsOptionsVisible(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().dropdown),
        children: [
            heading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().heading),
                style: headingStyle,
                children: heading
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
            label ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().dropdown_label),
                children: label
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OutsideClickAlert__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                onOutsideClick: ()=>setIsOptionsVisible(false),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().dropdown_component),
                    onClick: ()=>setIsOptionsVisible(!isOptionsVisible),
                    disable: String(disable),
                    style: dropdownComponentStyle,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().selected_options_wrapper),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: selectedOption
                                }),
                                !disable && !isOptionsVisible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-chevron-up"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-chevron-down"
                                })
                            ]
                        }),
                        !disable && isOptionsVisible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().dropdown_options),
                            children: options.length && options.map((option, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>handleSelected(option),
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().dropdown_option),
                                    children: option
                                }, index))
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropDown);


/***/ })

};
;