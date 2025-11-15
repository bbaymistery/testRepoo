"use strict";
exports.id = 8333;
exports.ids = [8333];
exports.modules = {

/***/ 8333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7165);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const DropOffPoints = ({ drops  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_headerr_li),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "fas fa-map-marker-alt",
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Drop off Location :"
                    })
                ]
            }),
            drops === null || drops === void 0 ? void 0 : drops.map((point, i)=>{
                var ref, ref1, ref2, ref3;
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_container),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-check"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().desc),
                                    children: point.address
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : (ref = point.flightDetails) === null || ref === void 0 ? void 0 : ref.flightNumber) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Flight Number:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : (ref1 = point.flightDetails) === null || ref1 === void 0 ? void 0 : ref1.flightNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : (ref2 = point.postCodeDetails) === null || ref2 === void 0 ? void 0 : ref2.postCodeAddress) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Postcode Address:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : (ref3 = point.postCodeDetails) === null || ref3 === void 0 ? void 0 : ref3.postCodeAddress
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.cruiseNumber) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Cruise Name:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point.cruiseNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.trainNumber) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Train Number:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point.trainNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.roomNumber) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Room Number:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point.roomNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.pcatId) === 7 && (point === null || point === void 0 ? void 0 : point["address-description"]) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Places of Interest:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.pcatId) === 8 && (point === null || point === void 0 ? void 0 : point["address-description"]) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Cities:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.pcatId) === 9 && (point === null || point === void 0 ? void 0 : point["address-description"]) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Universities And Colleges:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.pcatId) === 10 && (point === null || point === void 0 ? void 0 : point["address-description"]) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Description:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point["address-description"]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }, i);
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropOffPoints);


/***/ })

};
;