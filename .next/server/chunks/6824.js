exports.id = 6824;
exports.ids = [6824];
exports.modules = {

/***/ 2832:
/***/ ((module) => {

// Exports
module.exports = {
	"details": "styles_details__IX_RK",
	"details_headerr_li": "styles_details_headerr_li__ntvtb",
	"details_bottom_container": "styles_details_bottom_container__wOIId",
	"details_bottom": "styles_details_bottom__2ufW3",
	"desc": "styles_desc__xh4KS",
	"descc": "styles_descc__NiY1W",
	"details_bottom_description": "styles_details_bottom_description__INVVQ",
	"bottom_main_desc": "styles_bottom_main_desc__YR1SO"
};


/***/ }),

/***/ 845:
/***/ ((module) => {

// Exports
module.exports = {
	"hasReturnQuot": "styles_hasReturnQuot__X8ezg",
	"details_header": "styles_details_header__Ju5Eo",
	"header_card": "styles_header_card__gA5D6",
	"card_top": "styles_card_top__nZuMm",
	"card_info": "styles_card_info__RB0vA",
	"right_title": "styles_right_title__by_LR",
	"info": "styles_info__J8vSL",
	"details_headerr_li": "styles_details_headerr_li__sduF7",
	"li_info": "styles_li_info__nBZ6R",
	"property": "styles_property__QImY_",
	"value": "styles_value__GX4KK",
	"details": "styles_details__8Sx0L",
	"details_bottom": "styles_details_bottom__urjTa",
	"desc": "styles_desc__i38U7",
	"descc": "styles_descc__jiIM8",
	"details_flex": "styles_details_flex__4dVLd",
	"card_right": "styles_card_right__vDwxI",
	"details_bottom_container": "styles_details_bottom_container__9Vl4r",
	"details_bottom_description": "styles_details_bottom_description__HH86U",
	"bottom_main_desc": "styles_bottom_main_desc__qDyH8"
};


/***/ }),

/***/ 1761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 6824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Informations_Informations)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropSelectors.js
var pickUpDropSelectors = __webpack_require__(5789);
// EXTERNAL MODULE: ./src/pages/reservations-document/Informations/styles.module.scss
var styles_module = __webpack_require__(845);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./src/components/elements/PickUpPointsInvoices/styles.module.scss
var PickUpPointsInvoices_styles_module = __webpack_require__(2832);
var PickUpPointsInvoices_styles_module_default = /*#__PURE__*/__webpack_require__.n(PickUpPointsInvoices_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/PickUpPointsInvoices/index.js



const PickUpPointsInvoices = ({ pickUps  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (PickUpPointsInvoices_styles_module_default()).details,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (PickUpPointsInvoices_styles_module_default()).details_headerr_li,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-map-marker-alt",
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Pick-up Location :"
                    })
                ]
            }),
            pickUps === null || pickUps === void 0 ? void 0 : pickUps.map((point, i)=>{
                var ref, ref1, ref2, ref3, ref4, ref5;
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (PickUpPointsInvoices_styles_module_default()).details_bottom_container,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-check"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (PickUpPointsInvoices_styles_module_default()).desc,
                                    children: point.address
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : (ref = point.flightDetails) === null || ref === void 0 ? void 0 : ref.flightNumber) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Flight Number:"
                                        }),
                                        "\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : (ref1 = point.flightDetails) === null || ref1 === void 0 ? void 0 : ref1.flightNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : (ref2 = point.flightDetails) === null || ref2 === void 0 ? void 0 : ref2.waitingPickupTime) > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Waiting Pickup Time:"
                                        }),
                                        "\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : (ref3 = point.flightDetails) === null || ref3 === void 0 ? void 0 : ref3.waitingPickupTime
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : (ref4 = point.postCodeDetails) === null || ref4 === void 0 ? void 0 : ref4.postCodeAddress) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Postcode Address:"
                                        }),
                                        "\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : (ref5 = point.postCodeDetails) === null || ref5 === void 0 ? void 0 : ref5.postCodeAddress
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.cruiseNumber) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Cruise Name:"
                                        }),
                                        "\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point.cruiseNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.trainNumber) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Train Number:"
                                        }),
                                        " \xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point.trainNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.pcatId) === 7 && (point === null || point === void 0 ? void 0 : point["address-description"]) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Places of Interest:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.pcatId) === 8 && (point === null || point === void 0 ? void 0 : point["address-description"]) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Cities:"
                                        }),
                                        "\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.pcatId) === 9 && (point === null || point === void 0 ? void 0 : point["address-description"]) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Universities And Colleges:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.pcatId) === 10 && (point === null || point === void 0 ? void 0 : point["address-description"]) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Description:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
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
/* harmony default export */ const elements_PickUpPointsInvoices = (PickUpPointsInvoices);

;// CONCATENATED MODULE: ./src/components/elements/DroppPointsInvoices/index.js



const DropOffPointsInvoices = ({ drops  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (PickUpPointsInvoices_styles_module_default()).details,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (PickUpPointsInvoices_styles_module_default()).details_headerr_li,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-map-marker-alt",
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Drop off Location :"
                    })
                ]
            }),
            drops === null || drops === void 0 ? void 0 : drops.map((point, i)=>{
                var ref, ref1, ref2, ref3;
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (PickUpPointsInvoices_styles_module_default()).details_bottom_container,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-check"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (PickUpPointsInvoices_styles_module_default()).desc,
                                    children: point.address
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : (ref = point.flightDetails) === null || ref === void 0 ? void 0 : ref.flightNumber) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Flight Number:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : (ref1 = point.flightDetails) === null || ref1 === void 0 ? void 0 : ref1.flightNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : (ref2 = point.postCodeDetails) === null || ref2 === void 0 ? void 0 : ref2.postCodeAddress) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Postcode Address:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : (ref3 = point.postCodeDetails) === null || ref3 === void 0 ? void 0 : ref3.postCodeAddress
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.cruiseNumber) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Cruise Name:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point.cruiseNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.trainNumber) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Train Number:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point.trainNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.pcatId) === 7 && (point === null || point === void 0 ? void 0 : point["address-description"]) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Places of Interest:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.pcatId) === 8 && (point === null || point === void 0 ? void 0 : point["address-description"]) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Cities:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.pcatId) === 9 && (point === null || point === void 0 ? void 0 : point["address-description"]) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Universities And Colleges:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point === null || point === void 0 ? void 0 : point["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (point === null || point === void 0 ? void 0 : point.pcatId) === 10 && (point === null || point === void 0 ? void 0 : point["address-description"]) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PickUpPointsInvoices_styles_module_default()).details_bottom_description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (PickUpPointsInvoices_styles_module_default()).bottom_main_desc,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Description:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
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
/* harmony default export */ const DroppPointsInvoices = (DropOffPointsInvoices);

// EXTERNAL MODULE: ./src/helpers/dateFormat.js
var dateFormat = __webpack_require__(1761);
;// CONCATENATED MODULE: ./src/pages/reservations-document/Informations/Informations.js








const Informations = ({ date , quot , pickUps , drops , fullName , email , passengers , phone , note , paymentType , hidePassengers ,  })=>{
    var ref, ref1, ref2;
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    //bunu sadece imgni getirmek ucun yazdg Secilen cardn img si
    const carObject = appData === null || appData === void 0 ? void 0 : (ref = appData.carsTypes) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: item
        }), {});
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${(styles_module_default()).details_header} ${hidePassengers && (styles_module_default()).booking_header}`,
        children: carObject && /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).header_card,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).card_top,
                    children: [
                        !hidePassengers && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).card_info,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (styles_module_default()).right_title,
                                    children: "Passenger Details"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).info,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (styles_module_default()).details,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (styles_module_default()).details_headerr_li,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-user",
                                                                "aria-hidden": "true"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (styles_module_default()).li_info,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: (styles_module_default()).property,
                                                                        children: "Full Name:"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: (styles_module_default()).value,
                                                                        children: fullName
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (styles_module_default()).details,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (styles_module_default()).details_headerr_li,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-phone",
                                                                "aria-hidden": "true"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (styles_module_default()).li_info,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: (styles_module_default()).property,
                                                                        children: "Phone Number:"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: (styles_module_default()).value,
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
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (styles_module_default()).details,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (styles_module_default()).details_headerr_li,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-at",
                                                                "aria-hidden": "true"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (styles_module_default()).li_info,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: (styles_module_default()).property,
                                                                        children: "Email Address:"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: (styles_module_default()).value,
                                                                        children: email
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (styles_module_default()).details,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (styles_module_default()).details_headerr_li,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-users",
                                                                "aria-hidden": "true"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (styles_module_default()).li_info,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: (styles_module_default()).property,
                                                                        children: "Passengers:"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: (styles_module_default()).value,
                                                                        children: passengers
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).card_right,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (styles_module_default()).right_title,
                                    children: "Transfer Details"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).info,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(elements_PickUpPointsInvoices, {
                                                    pickUps: pickUps
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(DroppPointsInvoices, {
                                                    drops: drops
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(styles_module_default()).details} ${(styles_module_default()).details_flex}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (styles_module_default()).details_headerr_li,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-calendar-alt",
                                                                    "aria-hidden": "true"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Landing Date :"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (styles_module_default()).details_bottom_container,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (styles_module_default()).details_bottom,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: (styles_module_default()).desc,
                                                                    children: (0,dateFormat/* formatDate */.p)(date, "short") ? (0,dateFormat/* formatDate */.p)(date, "short") : date.split(" ")[0]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(styles_module_default()).details} ${(styles_module_default()).details_flex}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (styles_module_default()).details_headerr_li,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-clock",
                                                                    "aria-hidden": "true"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Landing Time"
                                                                }),
                                                                ":"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (styles_module_default()).details_bottom_container,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (styles_module_default()).details_bottom,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: (styles_module_default()).desc,
                                                                    children: date.split(" ")[1]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            note && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(styles_module_default()).details} ${(styles_module_default()).details_flex}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (styles_module_default()).details_headerr_li,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-solid fa-comment"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Note "
                                                                }),
                                                                ":"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (styles_module_default()).details_bottom_container,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (styles_module_default()).details_bottom,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: (styles_module_default()).desc,
                                                                    children: note
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            quot && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(styles_module_default()).details} ${(styles_module_default()).details_flex}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (styles_module_default()).details_headerr_li,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-solid fa-car"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Vehicle Type :"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (styles_module_default()).details_bottom_container,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (styles_module_default()).details_bottom,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: (styles_module_default()).desc,
                                                                    children: quot && ((ref1 = carObject[quot === null || quot === void 0 ? void 0 : quot.carId]) === null || ref1 === void 0 ? void 0 : ref1.name)
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            quot && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(styles_module_default()).details} ${(styles_module_default()).details_flex}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (styles_module_default()).details_headerr_li,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-solid fa-hurricane"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Transfer Type :"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (styles_module_default()).details_bottom_container,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (styles_module_default()).details_bottom,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: (styles_module_default()).desc,
                                                                    children: (ref2 = carObject[quot === null || quot === void 0 ? void 0 : quot.carId]) === null || ref2 === void 0 ? void 0 : ref2.transferType
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            quot && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(styles_module_default()).details} ${(styles_module_default()).details_flex}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (styles_module_default()).details_headerr_li,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-solid fa-money-check"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Price :"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (styles_module_default()).details_bottom_container,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (styles_module_default()).details_bottom,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: (styles_module_default()).desc,
                                                                    children: [
                                                                        "\xa3 ",
                                                                        quot.price
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            quot && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(styles_module_default()).details} ${(styles_module_default()).details_flex}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (styles_module_default()).details_headerr_li,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-solid fa-hand-holding-dollar"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Payment Method:"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (styles_module_default()).details_bottom_container,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (styles_module_default()).details_bottom,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: (styles_module_default()).desc,
                                                                    children: [
                                                                        paymentType === 1 && "Pay With Cash  To The Driver",
                                                                        paymentType === 2 && "Pay With Credit Card",
                                                                        paymentType === 5 && "Pay With Paypal",
                                                                        paymentType === 6 && "Pay With American Express",
                                                                        paymentType === 7 && "Pay With Stripe"
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Informations_Informations = (Informations);


/***/ })

};
;