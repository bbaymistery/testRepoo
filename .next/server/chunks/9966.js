exports.id = 9966;
exports.ids = [9966];
exports.modules = {

/***/ 3090:
/***/ ((module) => {

// Exports
module.exports = {
	"select_wrapper": "styles_select_wrapper__OWAt_",
	"select": "styles_select__9ftlU",
	"info_icon": "styles_info_icon__ZeDOv",
	"select__field": "styles_select__field__ymTi_",
	"select__label": "styles_select__label__89ZNn",
	"flightinfo_div": "styles_flightinfo_div__Arb5y",
	"primary_text": "styles_primary_text__wd_HK",
	"form_input_error": "styles_form_input_error__9Obs9",
	"istaxideal_info_icon": "styles_istaxideal_info_icon__FTKxt"
};


/***/ }),

/***/ 6790:
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
/* harmony import */ var _elements_Select_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3090);
/* harmony import */ var _elements_Select_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elements_Select_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const FlightWaitingTimeContent = ()=>{
    const { appData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.initialReducer);
    //cartypes object for card item as {1:{image:'sds, name:Economy}}
    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (localStorage?.getItem("language")) {
            let langKey = JSON.parse(localStorage.getItem("language"));
            let foundMatch = false;
            JSON.parse(appData?.words["seBookingNotes"]).forEach((item, index)=>{
                let { value , language  } = item;
                if (langKey === language) {
                    setContent(value);
                    foundMatch = true;
                }
            });
            if (!foundMatch) {
                setContent("");
            }
        }
    }, [
        appData
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_elements_Select_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content_div),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            dangerouslySetInnerHTML: {
                __html: content
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlightWaitingTimeContent);


/***/ }),

/***/ 9966:
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
/* harmony import */ var _FlightWaitingTimeContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6790);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3090);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);





/**
 @TextInput {//*name:string,label:string,errorMessage:string,value:string,onChange:function,placeholder:string,data:number||string,flightInfoIcon:boolean,direction:string}
 **/ const Select = (props)=>{
    let { name ="" , value ="" , label ="" , errorMessage ="" , onChange =(e)=>{} , postCodeSelectOption ="" , data , flightSelectOption =false , flightInfoIcon =false , isTaxiDeal  } = props;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    let state = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction  }  } = state;
    const setModalInfo = (par)=>dispatch({
            type: "SET_MODAL_INFO",
            data: {
                trueOrFalse: true
            }
        });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().select_wrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().select)} `,
                direction: String(direction === "rtl"),
                err: String(typeof errorMessage === "string" && errorMessage.length > 0),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                        direction: String(direction === "rtl"),
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().select__field),
                        required: true,
                        name: name,
                        onChange: onChange,
                        defaultValue: value,
                        children: parseInt(data) ? Array(data).fill().map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                id: i + 1,
                                value: i + 1,
                                children: i + 1
                            }, i)) : data?.map((d, i)=>{
                            //here we check d.id typeof string for flight number (go to component Checkfor flight )
                            if (typeof d.id === "string" && typeof d.value === "string" && flightSelectOption === true) {
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                    value: d.id,
                                    children: [
                                        " ",
                                        d.value
                                    ]
                                }, i);
                            } else if (typeof d.value === "string" && postCodeSelectOption === true) {
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                    value: d.id,
                                    children: [
                                        " ",
                                        d.value
                                    ]
                                }, i);
                            } else {
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                    id: d.id,
                                    value: d.value,
                                    children: [
                                        " ",
                                        d.value
                                    ]
                                }, i);
                            }
                        })
                    }),
                    errorMessage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form_input_error),
                        children: errorMessage
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        id: "icon",
                        direction: String(direction === "rtl"),
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().select__label),
                        children: label
                    }),
                    !isTaxiDeal && flightInfoIcon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().flightinfo_div)}`,
                        children: [
                            "  ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FlightWaitingTimeContent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                            "  "
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {})
                ]
            }),
            flightInfoIcon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                direction: String(direction === "rtl"),
                className: `fa-solid fa-circle-info ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().info_icon)}  ${isTaxiDeal ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().istaxideal_info_icon) : ""}`,
                onClick: setModalInfo
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);


/***/ })

};
;