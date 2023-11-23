"use strict";
exports.id = 8899;
exports.ids = [8899];
exports.modules = {

/***/ 8899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




const DropOffPoints = ({ selectedDropoffPoints , direction , language  })=>{
    const { appData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.initialReducer);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details),
        children: selectedDropoffPoints?.map((point, i)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details_bottom_container),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details_header_div),
                        direction: String(direction === "rtl"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().left),
                                children: "To "
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
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: point?.flightDetails?.flightNumber
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
                    point?.pcatId === 7 && point?.["address-description"] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details_bottom_description),
                        direction: String(direction === "rtl"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_pointsStyle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bottom_main_desc),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Places of Interest:"
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: point?.["address-description"]
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
                        className: styles.details_bottom_description,
                        direction: String(direction === "rtl"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: styles.bottom_main_desc,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropOffPoints);


/***/ })

};
;