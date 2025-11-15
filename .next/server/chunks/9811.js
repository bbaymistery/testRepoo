"use strict";
exports.id = 9811;
exports.ids = [9811];
exports.modules = {

/***/ 1761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ formatDate)
/* harmony export */ });
/**
 * Format a date string (e.g. "2025-10-09" or "2025-10-09 19:00")
 * into a readable form like "9 Oct 2025" or "9 October 2025"
 *
 * @param {string | Date} date - the input date string or Date object
 * @param {"short" | "long"} monthStyle - "short" = Oct, "long" = October
 * @returns {string} formatted date string
 */ function formatDate(date, monthStyle = "short") {
    if (!date) return "";
    try {
        // if input like "2025-10-09 19:00" → only take the date part
        const dateOnly = typeof date === "string" ? date.split(" ")[0] : date;
        const d = new Date(dateOnly);
        if (isNaN(d)) return date; // fallback if invalid
        return d.toLocaleDateString("en-GB", {
            day: "numeric",
            month: monthStyle,
            year: "numeric"
        });
    } catch (err) {
        console.error("Date format error:", err);
        return date;
    }
}


/***/ }),

/***/ 9811:
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
/* harmony import */ var _store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5789);
/* harmony import */ var _DropOffPoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8333);
/* harmony import */ var _PickUpPoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5736);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7165);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_dateFormat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1761);








const DetailsHeader = ({ date , quot , pickUps , drops , fullName , email , passengers , phone , specialRequest , env  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5;
    const { appData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_5__/* .selectPickUpDropOffReducer */ .X7);
    //bunu sadece imgni getirmek ucun yazdg Secilen cardn img si
    const carObject = appData === null || appData === void 0 ? void 0 : (ref = appData.carsTypes) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: item
        }), {});
    console.log({
        date
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_header),
        children: carObject && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header_card),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_top),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_info),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().info),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_headerr_li),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-user",
                                                                "aria-hidden": "true"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().li_info),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().property),
                                                                        children: "Full Name:"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().value),
                                                                        children: fullName
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_headerr_li),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-phone",
                                                                "aria-hidden": "true"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().li_info),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().property),
                                                                        children: "Phone Number:"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().value),
                                                                        children: [
                                                                            "+",
                                                                            phone
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_headerr_li),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-at",
                                                                "aria-hidden": "true"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().li_info),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().property),
                                                                        children: "Email Address:"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().value),
                                                                        children: email
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_headerr_li),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-users",
                                                                "aria-hidden": "true"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().li_info),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().property),
                                                                        children: "Passengers:"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().value),
                                                                        children: passengers
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            specialRequest.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_headerr_li),
                                                        style: {
                                                            display: "block"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fa-solid fa-comment",
                                                                        "aria-hidden": "true"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().property),
                                                                        children: "Notes:"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().li_info),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().value),
                                                                    children: specialRequest
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            }) : null
                                        ]
                                    })
                                })
                            }),
                            quot ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_center),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${env.apiDomain}${(ref1 = carObject[quot === null || quot === void 0 ? void 0 : quot.carId]) === null || ref1 === void 0 ? void 0 : ref1.image}`,
                                        alt: "car"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_price),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().top),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        children: carObject[quot === null || quot === void 0 ? void 0 : quot.carId] && ((ref2 = carObject[quot === null || quot === void 0 ? void 0 : quot.carId]) === null || ref2 === void 0 ? void 0 : ref2.name)
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().subtitle),
                                                        children: (ref3 = carObject[quot === null || quot === void 0 ? void 0 : quot.carId]) === null || ref3 === void 0 ? void 0 : ref3.transferType
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().price),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                        children: [
                                                            "\xa3 ",
                                                            quot.price
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "/Per Vehicle"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }) : "",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_right),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().info),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PickUpPoints__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                    pickUps: pickUps
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropOffPoints__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                    drops: drops
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_flex)}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_headerr_li),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fas fa-calendar-alt",
                                                                    "aria-hidden": "true"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "Landing Date :"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_bottom_container),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_bottom),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desc),
                                                                    children: (0,_helpers_dateFormat__WEBPACK_IMPORTED_MODULE_7__/* .formatDate */ .p)(date, "short") ? (0,_helpers_dateFormat__WEBPACK_IMPORTED_MODULE_7__/* .formatDate */ .p)(date, "short") : date.split(" ")[0]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_flex)}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_headerr_li),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fas fa-clock",
                                                                    "aria-hidden": "true"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "Landing Time :"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_bottom_container),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_bottom),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desc),
                                                                    children: date.split(" ")[1]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_bottom),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().left),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa-solid fa-check-double"
                                                })
                                            }),
                                            "Free meet and greet"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa-solid fa-check-double"
                                                })
                                            }),
                                            "Flight tracking"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().center),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa-solid fa-check-double"
                                                })
                                            }),
                                            "Max ",
                                            (ref4 = carObject[quot === null || quot === void 0 ? void 0 : quot.carId]) === null || ref4 === void 0 ? void 0 : ref4.pax,
                                            " passengers"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa-solid fa-check-double"
                                                })
                                            }),
                                            "Max ",
                                            (ref5 = carObject[quot === null || quot === void 0 ? void 0 : quot.carId]) === null || ref5 === void 0 ? void 0 : ref5.suitcases,
                                            " medium suitcase"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().right),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa-solid fa-check-double"
                                                })
                                            }),
                                            "Free waiting time"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa-solid fa-check-double"
                                                })
                                            }),
                                            "No charge for flight delays"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailsHeader);


/***/ })

};
;