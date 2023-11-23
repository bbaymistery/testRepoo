exports.id = 8620;
exports.ids = [8620];
exports.modules = {

/***/ 5515:
/***/ ((module) => {

// Exports
module.exports = {
	"details": "pointsStyle_details__ynpPr",
	"details_bottom_container": "pointsStyle_details_bottom_container__Ruprn",
	"details_header_div": "pointsStyle_details_header_div__CjS1O",
	"left": "pointsStyle_left__sbtCR",
	"point_adress": "pointsStyle_point_adress__G2hVm",
	"details_bottom_description": "pointsStyle_details_bottom_description__8J9Fa",
	"bottom_main_desc": "pointsStyle_bottom_main_desc__iY5Zo",
	"postcodes": "pointsStyle_postcodes__Dk5It"
};


/***/ }),

/***/ 8620:
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5515);
/* harmony import */ var _pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const PickUpPoints = ({ selectedPickupPoints , direction , language  })=>{
    const { appData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.initialReducer);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details),
        children: selectedPickupPoints?.map((point, i)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details_bottom_container),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details_header_div)}`,
                        direction: String(direction === "rtl"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().left),
                                children: "From "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `${(_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().point_adress)} ${(_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().right)}`,
                                children: language === "en" ? point.address : point.translatedAddress
                            })
                        ]
                    }),
                    point?.flightDetails?.flightNumber && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details_bottom_description),
                        direction: String(direction === "rtl"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bottom_main_desc),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: appData?.words["strFlightNumberTitle"]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: point?.flightDetails?.flightNumber
                                })
                            ]
                        })
                    }),
                    point?.flightDetails?.waitingPickupTime >= 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details_bottom_description),
                        direction: String(direction === "rtl"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bottom_main_desc),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Requested Pickup Time:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: point?.flightDetails?.waitingPickupTime
                                })
                            ]
                        })
                    }),
                    point?.postCodeDetails?.postCodeAddress && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details_bottom_description),
                        direction: String(direction === "rtl"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${(_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bottom_main_desc)} ${(_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().postcodes)}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: appData?.words["strPostCodeAddress"]
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: point?.postCodeDetails?.postCodeAddress
                                })
                            ]
                        })
                    }),
                    point?.cruiseNumber && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details_bottom_description),
                        direction: String(direction === "rtl"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bottom_main_desc),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: appData?.words["strCruiseNameTitle"]
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: point?.cruiseNumber
                                })
                            ]
                        })
                    }),
                    point?.trainNumber && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details_bottom_description),
                        direction: String(direction === "rtl"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bottom_main_desc),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Train Number:"
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: point?.trainNumber
                                })
                            ]
                        })
                    }),
                    point?.roomNumber && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details_bottom_description),
                        direction: String(direction === "rtl"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bottom_main_desc),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: appData?.words["strRoomNumberTitle"]
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: point?.roomNumber
                                })
                            ]
                        })
                    }),
                    point?.pcatId === 8 && point?.["address-description"] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details_bottom_description),
                        direction: String(direction === "rtl"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bottom_main_desc),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Cities:"
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: point?.["address-description"]
                                })
                            ]
                        })
                    }),
                    point?.pcatId === 9 && point?.["address-description"] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details_bottom_description),
                        direction: String(direction === "rtl"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bottom_main_desc),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Universities And Colleges:"
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: point?.["address-description"]
                                })
                            ]
                        })
                    }),
                    point?.pcatId === 10 && point?.["address-description"] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details_bottom_description),
                        direction: String(direction === "rtl"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bottom_main_desc),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Description:"
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: point?.["address-description"]
                                })
                            ]
                        })
                    })
                ]
            }, i);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PickUpPoints);


/***/ })

};
;