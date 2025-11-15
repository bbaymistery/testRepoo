exports.id = 5494;
exports.ids = [5494];
exports.modules = {

/***/ 241:
/***/ ((module) => {

// Exports
module.exports = {
	"form_control": "elgun_form_control__Pwoux",
	"header": "elgun_header__ji2tc",
	"form_label": "elgun_form_label__4pb2f",
	"input_div": "elgun_input_div__W5GGK",
	"date_picker_icon": "elgun_date_picker_icon__8FFfC",
	"inputDate": "elgun_inputDate__YYG6l",
	"errorDate": "elgun_errorDate__AP9tD"
};


/***/ }),

/***/ 2:
/***/ ((module) => {

// Exports
module.exports = {
	"oneway_tab_content": "oneway_oneway_tab_content__qybll",
	"form_container": "oneway_form_container__FmUqv",
	"form_flying": "oneway_form_flying__djrbB",
	"inp_box": "oneway_inp_box__tLmj5",
	"popup_header": "oneway_popup_header___YqsC",
	"add_extrafly_div": "oneway_add_extrafly_div__B1loQ",
	"add_extrafly_div_icon": "oneway_add_extrafly_div_icon__eTGwq",
	"add_extrafly_div_text": "oneway_add_extrafly_div_text__wLxkl",
	"point_headerr": "oneway_point_headerr__9wKs0",
	"search-input-container": "oneway_search-input-container__CMK5Z",
	"form_departing": "oneway_form_departing__hDzLL",
	"departing_date": "oneway_departing_date__Fk6pj",
	"departing_time": "oneway_departing_time__MdUYK",
	"hour": "oneway_hour___gqjx",
	"minute": "oneway_minute__KYJMh",
	"departing_btn": "oneway_departing_btn__8tASz",
	"errorBookedMessage": "oneway_errorBookedMessage__M9Kof",
	"alertOrMessage": "oneway_alertOrMessage__Sfpi6",
	"border_blue": "oneway_border_blue__jnNJx"
};


/***/ }),

/***/ 6315:
/***/ ((module) => {

// Exports
module.exports = {
	"select_box_hour_minute": "elgun_select_box_hour_minute__xiUmK",
	"labelText": "elgun_labelText__j3upX",
	"dropholder": "elgun_dropholder__3F7TF",
	"errrorDropdown": "elgun_errrorDropdown__dEvzo",
	"dropdown": "elgun_dropdown__CdfU3",
	"holder": "elgun_holder__txNJ_",
	"dropdownOption": "elgun_dropdownOption__SQCTw",
	"li": "elgun_li___vXMg",
	"current": "elgun_current__EJn0N",
	"DropDownActive": "elgun_DropDownActive__SrubP"
};


/***/ }),

/***/ 3714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Alert = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${props.alert} ${props.alert_color}`,
        children: props.message
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);


/***/ }),

/***/ 7551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elgun_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(241);
/* harmony import */ var _elgun_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TextError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1792);




/**
 * @DateInput { //? value , onChange:function, name:string, title:string, type:string,className:string, min:string,max:string,type:string ,errorMessage:string}
 **/ const DateInput = (props)=>{
    let { value ="" , onChange =()=>{} , name ="" , title ="" , errorMessage ="" , className ="" , min ="" , max ="" , type ="" ,  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form_control)} ${className}}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "date_input",
                        className: (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form_label),
                        children: title
                    }),
                    " ",
                    errorMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextError__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        errorMessage: errorMessage
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input_div),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        min: min,
                        max: max,
                        name: name,
                        type: type,
                        id: "date_input",
                        className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_3___default().inputDate)} ${errorMessage ? (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_3___default().errorDate) : ""}`,
                        onChange: onChange,
                        value: value,
                        lang: "en"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: `fa-solid fa-calendar-days ${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_3___default().date_picker_icon)}`
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateInput);


/***/ }),

/***/ 4384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3570);
/* harmony import */ var _store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5789);
/* harmony import */ var _elgun_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6315);
/* harmony import */ var _elgun_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_6__);







const TimePicker = (props)=>{
    var ref, ref1, ref2, ref3;
    let { className ="" , options =[] , title ="" , name ="" , journeyType = false || boolean || number , errorMessage =false ,  } = props;
    //i pass value with ransfer and with return so which one is current passed that one willbe active
    //the same goes to active minute
    const selectTransferDateTimeString = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_4__/* .transferDateTimeString */ .Vo);
    const { direction  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_4__/* .selectPickUpDropOffReducer */ .X7);
    const selectReturnDateTimeString = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_4__/* .returnDateTimeString */ .Cg);
    const { 0: dropdownActive , 1: setDropdownActive  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); //it is for hour
    const { 0: opt , 1: setOpt  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const didMountRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
    //it is for transfers
    const { 0: activeHour , 1: setActiveHour  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(journeyType === 0 ? (ref = selectTransferDateTimeString === null || selectTransferDateTimeString === void 0 ? void 0 : selectTransferDateTimeString.split(" ")[1]) === null || ref === void 0 ? void 0 : ref.split(":")[0] : (ref1 = selectReturnDateTimeString === null || selectReturnDateTimeString === void 0 ? void 0 : selectReturnDateTimeString.split(" ")[1]) === null || ref1 === void 0 ? void 0 : ref1.split(":")[0]);
    const { 0: activeMinute , 1: setActiveMinute  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(journeyType === 0 ? (ref2 = selectTransferDateTimeString === null || selectTransferDateTimeString === void 0 ? void 0 : selectTransferDateTimeString.split(" ")[1]) === null || ref2 === void 0 ? void 0 : ref2.split(":")[1] : (ref3 = selectReturnDateTimeString === null || selectReturnDateTimeString === void 0 ? void 0 : selectReturnDateTimeString.split(" ")[1]) === null || ref3 === void 0 ? void 0 : ref3.split(":")[1]); //it is for display value inside ul Active
    //when click to hour time picker
    const selectValue = (e, i)=>{
        // setIndexOption(i);
        setActiveHour(e.target.innerText);
        setDropdownActive(false);
        setActiveMinute(e.target.innerText);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Bu dispatch'ler her zaman çalışabilir
        if (journeyType === 0 && name === "hour") {
            dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_5__/* .setHourAndMinute */ .e_)(activeHour, "hourTr"));
        }
        if (journeyType === 0 && name === "minute") {
            dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_5__/* .setHourAndMinute */ .e_)(activeMinute, "minuteTr"));
        }
        if (journeyType === 1 && name === "hour") {
            dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_5__/* .setHourAndMinute */ .e_)(activeHour, "hourReturn"));
        }
        if (journeyType === 1 && name === "minute") {
            dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_5__/* .setHourAndMinute */ .e_)(activeMinute, "minuteReturn"));
        }
        // quotation ve managebooking için dispatch sadece mount sonrası çalışacak
        if (didMountRef.current) {
            if (router.pathname === "/quotation" && direction === "left") {
                console.log("1");
                dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_5__/* .gettingQuotations */ .HZ)(router, 0, {
                    updateInsideQuotation: true
                }));
            }
            if (router.pathname === "/quotation" && direction === "right") {
                console.log("2 ) {");
                dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_5__/* .gettingQuotations */ .HZ)(router, 1, {
                    updateInsideQuotation: true
                }));
            }
            if (router.pathname === "/managebooking") {
                console.log("3) {");
                dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_5__/* .gettingQuotations */ .HZ)(router, 0, {
                    updateInsideQuotation: true
                }));
            }
        } else {
            didMountRef.current = true;
        }
        setOpt(options);
    }, [
        activeHour,
        activeMinute
    ]);
    // console.log(selectTransferDateTimeString?.split(" ")[1]?.split(":")[0]);
    // console.log(Number("00"));
    return(//styles.hour  => classname
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${className} ${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_6___default().select_box_hour_minute)} `,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_6___default().labelText),
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropholder),
                onClick: ()=>setDropdownActive(!dropdownActive),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropdown)} ${dropdownActive ? (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_6___default().DropDownActive) : ""} ${errorMessage ? (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_6___default().errrorDropdown) : ""}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_6___default().holder),
                            children: name === "hour" ? activeHour : activeMinute
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropdownOption),
                        name: name,
                        children: name === "hour" && opt.length > 0 ? opt.map((item, i)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                onClick: (e)=>selectValue(e, i),
                                className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_6___default().li)} ${Number(activeHour) === Number(item.value) ? (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_6___default().current) : ""}`,
                                value: item.value,
                                name: name,
                                children: item.value
                            }, item.id);
                        }) : opt.map((item, i)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                onClick: (e)=>selectValue(e, i),
                                className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_6___default().li)} ${Number(activeMinute) === Number(item.value) ? (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_6___default().current) : ""}`,
                                value: item.value,
                                name: name,
                                children: item.value
                            }, item.id);
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimePicker);


/***/ }),

/***/ 7445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ minutes),
/* harmony export */   "g": () => (/* binding */ hourss)
/* harmony export */ });
const hourss = [
    {
        value: "00",
        id: 1
    },
    {
        id: 2,
        value: "01"
    },
    {
        id: 3,
        value: "02"
    },
    {
        id: 4,
        value: "03"
    },
    {
        id: 5,
        value: "04"
    },
    {
        id: 6,
        value: "05"
    },
    {
        id: 7,
        value: "06"
    },
    {
        id: 8,
        value: "07"
    },
    {
        id: 9,
        value: "08"
    },
    {
        id: 10,
        value: "09"
    },
    {
        id: 11,
        value: "10"
    },
    {
        id: 12,
        value: "11"
    },
    {
        id: 13,
        value: "12"
    },
    {
        id: 14,
        value: "13"
    },
    {
        id: 15,
        value: "14"
    },
    {
        id: 16,
        value: "15"
    },
    {
        id: 17,
        value: "16"
    },
    {
        id: 18,
        value: "17"
    },
    {
        id: 19,
        value: "18"
    },
    {
        id: 20,
        value: "19"
    },
    {
        id: 21,
        value: "20"
    },
    {
        id: 22,
        value: "21"
    },
    {
        id: 23,
        value: "22"
    },
    {
        id: 24,
        value: "23"
    }, 
];
//for changing side bar active item  when we click to each item
const minutes = [
    {
        value: "00",
        id: 1
    },
    {
        id: 2,
        value: "05"
    },
    {
        id: 3,
        value: "10"
    },
    {
        id: 4,
        value: "15"
    },
    {
        id: 5,
        value: "20"
    },
    {
        id: 6,
        value: "25"
    },
    {
        id: 7,
        value: "30"
    },
    {
        id: 8,
        value: "35"
    },
    {
        id: 9,
        value: "40"
    },
    {
        id: 10,
        value: "45"
    },
    {
        id: 11,
        value: "50"
    },
    {
        id: 12,
        value: "55"
    }, 
]; //for changing side bar active item  when we click to each item


/***/ }),

/***/ 420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const { 0: windowSize , 1: setWindowSize  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: undefined,
        height: undefined
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return ()=>window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}


/***/ })

};
;