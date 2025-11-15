(() => {
var exports = {};
exports.id = 7283;
exports.ids = [7283,2858,8817,150,1344];
exports.modules = {

/***/ 2271:
/***/ ((module) => {

// Exports
module.exports = {
	"details_header": "styles_details_header__wTDY0",
	"header_card": "styles_header_card__iMNwb",
	"card_left": "styles_card_left__NZQo_",
	"subtitle": "styles_subtitle__6Hjxq",
	"img_and_price": "styles_img_and_price__9m6p6",
	"image_div": "styles_image_div__nY4Jc",
	"price": "styles_price__Lhe6D",
	"card_center": "styles_card_center__mfzDv",
	"card_right": "styles_card_right__3boQ2",
	"info": "styles_info__9k9mM",
	"details_headerr_li": "styles_details_headerr_li__1x2Rp",
	"details": "styles_details__irwWS",
	"details_bottom": "styles_details_bottom__mBtcU",
	"desc": "styles_desc__8ijG8",
	"descc": "styles_descc__UaxA_",
	"details_flex": "styles_details_flex___LS4D",
	"hide_for_mobile": "styles_hide_for_mobile__jw5kd",
	"item_bottom": "styles_item_bottom__UfBH2",
	"hide_for_desktop": "styles_hide_for_desktop__RkEsz",
	"first": "styles_first__ZWjpB",
	"uzunad": "styles_uzunad___H_7w",
	"free_meet": "styles_free_meet__NPsfY",
	"margin_top": "styles_margin_top__NK_qt"
};


/***/ }),

/***/ 7873:
/***/ ((module) => {

// Exports
module.exports = {
	"journey_details": "styles_journey_details__Rr9Ra",
	"journey_details_title": "styles_journey_details_title__ILbXw",
	"selecteditems": "styles_selecteditems__bBjm0",
	"points_header": "styles_points_header__EmDSn",
	"points": "styles_points__ft_je",
	"boxx": "styles_boxx__bLLuE",
	"journey_bottom": "styles_journey_bottom__bFwTU",
	"textarea": "styles_textarea__vA6mu",
	"paxs": "styles_paxs__t7yxr",
	"journeyWithMargin": "styles_journeyWithMargin__6s3Oz"
};


/***/ }),

/***/ 214:
/***/ ((module) => {

// Exports
module.exports = {
	"passenger_details": "styles_passenger_details__22U_o",
	"animate": "styles_animate__P9CBd",
	"passenger_details_title": "styles_passenger_details_title__0Q_nN",
	"inp_boxes": "styles_inp_boxes__hcYVu",
	"inp_box": "styles_inp_box__YZEgm",
	"subtitle": "styles_subtitle__toA0r"
};


/***/ }),

/***/ 7457:
/***/ ((module) => {

// Exports
module.exports = {
	"transfer_details_section": "styles_transfer_details_section__Qfl6a",
	"section": "styles_section__KtTdZ",
	"transfer_details_container": "styles_transfer_details_container___rDji",
	"checkBtn": "styles_checkBtn__RqP_h",
	"pChecked": "styles_pChecked__SafYA",
	"checkedText": "styles_checkedText__btknK",
	"textMiddle": "styles_textMiddle__7nL9I",
	"checkBtn__input": "styles_checkBtn__input__d0459",
	"checkBtn_label": "styles_checkBtn_label__SukgJ",
	"checkBtn__label": "styles_checkBtn__label___rIh7",
	"checkBtn__label--blue": "styles_checkBtn__label--blue__TqGlM",
	"buttons": "styles_buttons__b8Haj",
	"btn": "styles_btn__vptRV"
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

/***/ 5920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ transfer_details),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/layouts/Layout/index.js + 10 modules
var Layout = __webpack_require__(2246);
// EXTERNAL MODULE: ./src/pages/transfer-details/styles.module.scss
var styles_module = __webpack_require__(7457);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./src/components/elements/Buttons/BlueButton/index.js
var BlueButton = __webpack_require__(1599);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropSelectors.js
var pickUpDropSelectors = __webpack_require__(5789);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropAction.js
var pickUpDropAction = __webpack_require__(3570);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/elements/TransferDetailsPageHeader/styles.module.scss
var TransferDetailsPageHeader_styles_module = __webpack_require__(2271);
var TransferDetailsPageHeader_styles_module_default = /*#__PURE__*/__webpack_require__.n(TransferDetailsPageHeader_styles_module);
// EXTERNAL MODULE: ./src/helpers/dateFormat.js
var dateFormat = __webpack_require__(1761);
;// CONCATENATED MODULE: ./src/components/elements/TransferDetailsPageHeader/index.js






const DetailsHeader = ({ date , quot , pickUps , drops , returnJourneyTrue , notitle =false , env  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    //bunu sadece imgni getirmek ucun yazdg Secilen cardn img si
    const carObject = appData === null || appData === void 0 ? void 0 : (ref = appData.carsTypes) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: item
        }), {});
    //
    (0,external_react_.useEffect)(()=>{
        if (2000 <= document.documentElement.clientWidth && 1400 >= document.documentElement.clientWidth) {
            window.scrollTo({
                top: 41,
                left: 0,
                behavior: "smooth"
            });
        } else if (1400 > document.documentElement.clientWidth && 1220 <= document.documentElement.clientWidth) {
            window.scrollTo({
                top: 45,
                left: 0,
                behavior: "smooth"
            });
        } else if (990 > document.documentElement.clientWidth && 768 <= document.documentElement.clientWidth) {
            window.scrollTo({
                top: 45,
                left: 0,
                behavior: "smooth"
            });
        } else if (768 > document.documentElement.clientWidth && 350 <= document.documentElement.clientWidth) {
            window.scrollTo({
                top: 45,
                left: 0,
                behavior: "smooth"
            });
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${(TransferDetailsPageHeader_styles_module_default()).details_header} ${returnJourneyTrue && (TransferDetailsPageHeader_styles_module_default()).margin_top}`,
        children: carObject && /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TransferDetailsPageHeader_styles_module_default()).header_card,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${(TransferDetailsPageHeader_styles_module_default()).card_left} ${(TransferDetailsPageHeader_styles_module_default()).hide_for_mobile}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                children: [
                                    carObject[quot === null || quot === void 0 ? void 0 : quot.carId] && ((ref1 = carObject[quot === null || quot === void 0 ? void 0 : quot.carId]) === null || ref1 === void 0 ? void 0 : ref1.name),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "or Similar"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (TransferDetailsPageHeader_styles_module_default()).subtitle,
                                children: (ref2 = carObject[quot === null || quot === void 0 ? void 0 : quot.carId]) === null || ref2 === void 0 ? void 0 : ref2.transferType
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferDetailsPageHeader_styles_module_default()).img_and_price,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (TransferDetailsPageHeader_styles_module_default()).image_div,
                                        children: quot ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: `${env.apiDomain}${(ref3 = carObject[quot === null || quot === void 0 ? void 0 : quot.carId]) === null || ref3 === void 0 ? void 0 : ref3.image}`,
                                            alt: "car"
                                        }) : ""
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (TransferDetailsPageHeader_styles_module_default()).price,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                                children: [
                                                    "\xa3 ",
                                                    quot.price
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "/Per Vehicle"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-users "
                                                            }),
                                                            (ref4 = carObject[quot === null || quot === void 0 ? void 0 : quot.carId]) === null || ref4 === void 0 ? void 0 : ref4.pax
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-suitcase "
                                                            }),
                                                            (ref5 = carObject[quot === null || quot === void 0 ? void 0 : quot.carId]) === null || ref5 === void 0 ? void 0 : ref5.suitcases
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (TransferDetailsPageHeader_styles_module_default()).hide_for_desktop,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferDetailsPageHeader_styles_module_default()).card_left,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        children: [
                                            carObject[quot === null || quot === void 0 ? void 0 : quot.carId] && ((ref6 = carObject[quot === null || quot === void 0 ? void 0 : quot.carId]) === null || ref6 === void 0 ? void 0 : ref6.name),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "or Similar"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (TransferDetailsPageHeader_styles_module_default()).subtitle,
                                        children: (ref7 = carObject[quot === null || quot === void 0 ? void 0 : quot.carId]) === null || ref7 === void 0 ? void 0 : ref7.transferType
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (TransferDetailsPageHeader_styles_module_default()).img_and_price,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (TransferDetailsPageHeader_styles_module_default()).image_div,
                                                children: quot ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: `${env.apiDomain}${(ref8 = carObject[quot === null || quot === void 0 ? void 0 : quot.carId]) === null || ref8 === void 0 ? void 0 : ref8.image}`,
                                                    alt: "car"
                                                }) : ""
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (TransferDetailsPageHeader_styles_module_default()).price,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                                        children: [
                                                            "\xa3 ",
                                                            quot.price
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "/Per Vehicle"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-solid fa-users undefined"
                                                                    }),
                                                                    "3"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-solid fa-suitcase undefined"
                                                                    }),
                                                                    "3"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferDetailsPageHeader_styles_module_default()).card_center,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "We give you the following for free"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa-solid fa-circle-check"
                                                    }),
                                                    "Flight Tracking"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa-solid fa-circle-check"
                                                    }),
                                                    "Free Waiting Time"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa-solid fa-circle-check"
                                                    }),
                                                    "Free meet and greet"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa-solid fa-circle-check"
                                                    }),
                                                    "No charge for flight delays"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferDetailsPageHeader_styles_module_default()).item_bottom,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `${(TransferDetailsPageHeader_styles_module_default()).free_meet} ${(TransferDetailsPageHeader_styles_module_default()).first}`,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: (TransferDetailsPageHeader_styles_module_default()).uzunad,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-check"
                                                        })
                                                    }),
                                                    "Free meet and greet"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: (TransferDetailsPageHeader_styles_module_default()).uzunad,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-check"
                                                        })
                                                    }),
                                                    "No charge for flight delays"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-check"
                                                        })
                                                    }),
                                                    "Free meet and greet"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-check"
                                                        })
                                                    }),
                                                    "No charge for flight delays"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `${(TransferDetailsPageHeader_styles_module_default()).free_meet} ${(TransferDetailsPageHeader_styles_module_default()).second}`,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: (TransferDetailsPageHeader_styles_module_default()).uzunad,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-check"
                                                        })
                                                    }),
                                                    "Flight Tracking"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: (TransferDetailsPageHeader_styles_module_default()).uzunad,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-check"
                                                        })
                                                    }),
                                                    "Free Waiting Time"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (TransferDetailsPageHeader_styles_module_default()).card_center,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "We give you the following for free"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-circle-check"
                                            }),
                                            "Flight Tracking"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-circle-check"
                                            }),
                                            "Free Waiting Time"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-circle-check"
                                            }),
                                            "Free meet and greet"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-circle-check"
                                            }),
                                            "No charge for flight delays"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (TransferDetailsPageHeader_styles_module_default()).card_right,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (TransferDetailsPageHeader_styles_module_default()).info,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (TransferDetailsPageHeader_styles_module_default()).details,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (TransferDetailsPageHeader_styles_module_default()).details_headerr_li,
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
                                                pickUps.map((point, i)=>{
                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (TransferDetailsPageHeader_styles_module_default()).details_bottom,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-check"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: (TransferDetailsPageHeader_styles_module_default()).desc,
                                                                children: point.address
                                                            })
                                                        ]
                                                    }, i);
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (TransferDetailsPageHeader_styles_module_default()).details,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (TransferDetailsPageHeader_styles_module_default()).details_headerr_li,
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
                                                drops.map((point, i)=>{
                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (TransferDetailsPageHeader_styles_module_default()).details_bottom,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-check"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: (TransferDetailsPageHeader_styles_module_default()).desc,
                                                                children: point.address
                                                            })
                                                        ]
                                                    }, i);
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `${(TransferDetailsPageHeader_styles_module_default()).details} ${(TransferDetailsPageHeader_styles_module_default()).details_flex}`,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (TransferDetailsPageHeader_styles_module_default()).details_headerr_li,
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
                                                    className: (TransferDetailsPageHeader_styles_module_default()).details_bottom,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: (TransferDetailsPageHeader_styles_module_default()).desc,
                                                        children: (0,dateFormat/* formatDate */.p)(date, "short") ? (0,dateFormat/* formatDate */.p)(date, "short") : date.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `${(TransferDetailsPageHeader_styles_module_default()).details} ${(TransferDetailsPageHeader_styles_module_default()).details_flex}`,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (TransferDetailsPageHeader_styles_module_default()).details_headerr_li,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-clock",
                                                            "aria-hidden": "true"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Landing Time :"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (TransferDetailsPageHeader_styles_module_default()).details_bottom,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: (TransferDetailsPageHeader_styles_module_default()).desc,
                                                        children: date.split(" ")[1]
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
            })
        })
    });
};
/* harmony default export */ const TransferDetailsPageHeader = (DetailsHeader);

// EXTERNAL MODULE: ./src/components/elements/Select/index.js
var Select = __webpack_require__(7167);
// EXTERNAL MODULE: ./src/components/elements/TextInput/index.js + 1 modules
var TextInput = __webpack_require__(2747);
// EXTERNAL MODULE: ./src/components/elements/TransferDetailsPagePassengerDetails/styles.module.scss
var TransferDetailsPagePassengerDetails_styles_module = __webpack_require__(214);
var TransferDetailsPagePassengerDetails_styles_module_default = /*#__PURE__*/__webpack_require__.n(TransferDetailsPagePassengerDetails_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/TransferDetailsPagePassengerDetails/index.js








const PassengerDetails = ({ title , journeyType , fullname , email , phone , passErrors , quot ,  })=>{
    var ref, ref1;
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const selectPaxTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* paxTransfer */.Dp);
    const selectPaxReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* paxReturn */.UE);
    //bunu sadece imgni getirmek ucun yazdg Secilen cardn img si
    const carObject = appData === null || appData === void 0 ? void 0 : (ref = appData.carsTypes) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: item
        }), {});
    const onchangeHandler = (e)=>{
        let inpValue = e.target.value;
        if (inpValue.includes('"') || inpValue.includes(`'`) || inpValue.includes("/") || inpValue.includes("\\")) {
            return;
        }
        dispatch((0,pickUpDropAction/* updatePassDetailsForBothJourney */.c)(e.target.name === "passengersNumber" ? Number(e.target.value) : e.target.value, e.target.name, journeyType, e.target.name === "passengersNumber" ? true : false));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (TransferDetailsPagePassengerDetails_styles_module_default()).passenger_details,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (TransferDetailsPagePassengerDetails_styles_module_default()).passenger_details_title,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TransferDetailsPagePassengerDetails_styles_module_default()).inp_boxes,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(TransferDetailsPagePassengerDetails_styles_module_default()).inp_box}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                            title: "Full Name",
                            icon: "user",
                            placeholder: "Full Name * ",
                            type: "text",
                            name: "firstname",
                            onChange: onchangeHandler,
                            value: fullname,
                            from_Tr_with_padding: true,
                            errorMessage: (fullname === null || fullname === void 0 ? void 0 : fullname.length) < 1 && (passErrors === null || passErrors === void 0 ? void 0 : passErrors.fullnameError)
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(TransferDetailsPagePassengerDetails_styles_module_default()).inp_box}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                            title: "Email",
                            icon: "at",
                            placeholder: "Email * ",
                            type: "text",
                            name: "email",
                            onChange: onchangeHandler,
                            value: email,
                            errorMessage: !email.includes("@") || email.includes(" ") ? passErrors === null || passErrors === void 0 ? void 0 : passErrors.emailError : "",
                            /*
             emailTransfer.includes("@") &&
      !emailTransfer.includes(' ') &&
            */ from_Tr_with_padding: true
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TransferDetailsPagePassengerDetails_styles_module_default()).inp_boxes,
                children: [
                    carObject && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(TransferDetailsPagePassengerDetails_styles_module_default()).inp_box}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                            title: "Number of passengers",
                            icon: "users",
                            placeholder: "Select Pax",
                            data: quot ? (ref1 = carObject[quot === null || quot === void 0 ? void 0 : quot.carId]) === null || ref1 === void 0 ? void 0 : ref1.pax : "",
                            onChange: onchangeHandler,
                            value: journeyType === 0 ? selectPaxTransfer : selectPaxReturn,
                            name: "passengersNumber",
                            from_Tr_with_padding: true
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${(TransferDetailsPagePassengerDetails_styles_module_default()).inp_box}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                title: "Phone Number",
                                icon: "phone",
                                placeholder: "Phone Number * ",
                                type: "number",
                                name: "phone",
                                onChange: onchangeHandler,
                                value: phone,
                                errorMessage: (phone === null || phone === void 0 ? void 0 : phone.length) < 1 && (passErrors === null || passErrors === void 0 ? void 0 : passErrors.pgoneError),
                                from_Tr_with_padding: true
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (TransferDetailsPagePassengerDetails_styles_module_default()).subtitle,
                                children: "* with international dialling code"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const TransferDetailsPagePassengerDetails = (PassengerDetails);

// EXTERNAL MODULE: ./src/components/elements/SeletedLists/index.js + 10 modules
var SeletedLists = __webpack_require__(809);
// EXTERNAL MODULE: ./src/components/elements/TextArea/index.js
var TextArea = __webpack_require__(9434);
// EXTERNAL MODULE: ./src/components/elements/TransferDetailsPageJourneyDetails/styles.module.scss
var TransferDetailsPageJourneyDetails_styles_module = __webpack_require__(7873);
var TransferDetailsPageJourneyDetails_styles_module_default = /*#__PURE__*/__webpack_require__.n(TransferDetailsPageJourneyDetails_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/TransferDetailsPageJourneyDetails/index.js








const JourneyDetails = ({ pickUps , drops , title , returnJourneyTrue , onlyTransferJourney , journeyType , env  })=>{
    var ref;
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const selectCommentTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* commentTransfer */.NF);
    const selectCommentReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* commentReturn */.K6);
    const dispatch = (0,external_react_redux_.useDispatch)();
    //bunu sadece imgni getirmek ucun yazdg Secilen cardn img si
    const carObject = appData === null || appData === void 0 ? void 0 : (ref = appData.carsTypes) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: item
        }), {});
    const handleChange = (e)=>{
        let inpValue = e.target.value;
        if (inpValue.includes('"') || inpValue.includes(`'`) || inpValue.includes("/") || inpValue.includes("\\")) {
            return;
        }
        dispatch((0,pickUpDropAction/* updatePassDetailsForBothJourney */.c)(e.target.name === "passengersNumber" ? Number(e.target.value) : e.target.value, e.target.name, journeyType, true));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${returnJourneyTrue ? (TransferDetailsPageJourneyDetails_styles_module_default()).journeyWithMargin : ""} ${(TransferDetailsPageJourneyDetails_styles_module_default()).journey_details}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (TransferDetailsPageJourneyDetails_styles_module_default()).journey_details_title,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: title
                })
            }),
            carObject && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (TransferDetailsPageJourneyDetails_styles_module_default()).selecteditems,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferDetailsPageJourneyDetails_styles_module_default()).points,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (TransferDetailsPageJourneyDetails_styles_module_default()).points_header,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Selected Pick Up points"
                                        })
                                    }),
                                    (pickUps === null || pickUps === void 0 ? void 0 : pickUps.length) > 0 && /*#__PURE__*/ jsx_runtime_.jsx(SeletedLists["default"], {
                                        selectedItems: pickUps,
                                        index: 0,
                                        env: env,
                                        journeyType: journeyType,
                                        inTransferComp: true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferDetailsPageJourneyDetails_styles_module_default()).points,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (TransferDetailsPageJourneyDetails_styles_module_default()).points_header,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Selected Drop off points"
                                        })
                                    }),
                                    (drops === null || drops === void 0 ? void 0 : drops.length) > 0 && /*#__PURE__*/ jsx_runtime_.jsx(SeletedLists["default"], {
                                        selectedItems: drops,
                                        index: 1,
                                        env: env,
                                        journeyType: journeyType,
                                        inTransferComp: true
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            returnJourneyTrue && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(TransferDetailsPageJourneyDetails_styles_module_default()).textarea} ${(TransferDetailsPageJourneyDetails_styles_module_default()).boxx}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                                    name: "specialRequests",
                                    icon: "pen-to-square",
                                    onChange: handleChange,
                                    value: selectCommentReturn,
                                    fromTrDetails: true,
                                    title: "Special Request ",
                                    pl: true
                                })
                            }),
                            onlyTransferJourney && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(TransferDetailsPageJourneyDetails_styles_module_default()).textarea} ${(TransferDetailsPageJourneyDetails_styles_module_default()).boxx}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                                    name: "specialRequests",
                                    icon: "pen-to-square",
                                    value: selectCommentTransfer,
                                    onChange: handleChange,
                                    fromTrDetails: true,
                                    title: "Special Request ",
                                    pl: true
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const TransferDetailsPageJourneyDetails = (JourneyDetails);

// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropTypes.js
var pickUpDropTypes = __webpack_require__(8348);
// EXTERNAL MODULE: ./src/components/elements/InfoModal/InfoModal.js
var InfoModal = __webpack_require__(7489);
// EXTERNAL MODULE: ./src/hooks/useConfirm.js
var useConfirm = __webpack_require__(628);
;// CONCATENATED MODULE: ./src/pages/transfer-details/index.js















const TransferDetails = (props)=>{
    let { env  } = props;
    const dispacth = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const selectedPickUpPointsTr = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsOneWayCopy */.l3);
    const selectedDropPointsTr = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DroopOffPointsOneWayCopy */.eI);
    const selectedQuotTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedTransferQuot */.uU);
    const trDateTime = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferDateTimeString */.Vo);
    //*inputs 0
    const fullnameTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerFullName */.bp);
    const emailTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerEmail */.dC);
    const phoneTranfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerPhone */.wz);
    //*errors
    const passengerTrErrors = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* passngTrsErrors */.bR);
    const passengerReturnErrors = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassErrors */.Jg);
    //*inputs1
    const fullNameReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerFullName */.Kt);
    const emailReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerEmail */.ZW);
    const phoneReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerPhone */.o2);
    //error flight ucun sadece ikiterefdede pcikup'i ilgilendirir
    const slectPickUpPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsReturnCopy */.h_);
    const selectDropOffPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DropOffPointsReturnCopy */.z8);
    const selectSelectedReturnQuot = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedReturnQuot */.CS);
    const returnDate = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnDateTimeString */.Cg);
    const checkedInput = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectCHheckedInput */.On);
    const selectModalInfo = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* ModalInfo */.mJ);
    const confirmationAlert = (0,useConfirm/* useConfirm */.N)({
        previousUrl: "/quotation",
        nextUrl: "/payment",
        message: "If you leave the page, all data will be deleted."
    });
    const handleChange = (e)=>{
        dispacth((0,pickUpDropAction/* changeCheckedInput */.Ry)(e.currentTarget.checked));
    };
    const handleClickToTheNextPaymentPage = (e)=>{
        //bu error sadece flight ile ilgili inut boslugunda olusucak
        //*checking flights length start
        selectedPickUpPointsTr.map((each, i)=>{
            var ref, ref1;
            if ((each === null || each === void 0 ? void 0 : (ref = each.flightDetails) === null || ref === void 0 ? void 0 : (ref1 = ref.flightNumber) === null || ref1 === void 0 ? void 0 : ref1.length) < 1) {
                dispacth((0,pickUpDropAction/* setErrorInTransferDetailsPage */.s_)("required", "transfer", "flightCategory", router, i));
            } else {
                dispacth((0,pickUpDropAction/* setErrorInTransferDetailsPage */.s_)("", "transfer", "flightCategory", router, i));
            }
        });
        selectedPickUpPointsTr.map((each, i)=>{
            var ref;
            if ((each === null || each === void 0 ? void 0 : (ref = each.waitingTime) === null || ref === void 0 ? void 0 : ref.length) < 1) {
                dispacth((0,pickUpDropAction/* setErrorInTransferDetailsPage */.s_)("required", "transfer", "flightCategory_Waiting", router, i));
            } else {
                dispacth((0,pickUpDropAction/* setErrorInTransferDetailsPage */.s_)("", "transfer", "flightCategory_Waiting", router, i));
            }
        });
        //burda eger returndeki pick upoints varsa icindekilerin biri bos ise error verir
        slectPickUpPointsReturn.map((each, i)=>{
            var ref, ref1;
            if ((each === null || each === void 0 ? void 0 : (ref = each.flightDetails) === null || ref === void 0 ? void 0 : (ref1 = ref.flightNumber) === null || ref1 === void 0 ? void 0 : ref1.length) < 1) {
                dispacth((0,pickUpDropAction/* setErorReturnDetailsPage */.tP)("required", "return", "flightCategory", router, i));
            } else {
                dispacth((0,pickUpDropAction/* setErorReturnDetailsPage */.tP)("", "return", "flightCategory", router, i));
            }
        });
        slectPickUpPointsReturn.map((each, i)=>{
            var ref;
            if ((each === null || each === void 0 ? void 0 : (ref = each.waitingTime) === null || ref === void 0 ? void 0 : ref.length) < 1) {
                dispacth((0,pickUpDropAction/* setErorReturnDetailsPage */.tP)("required", "return", "flightCategory_Waiting", router, i));
            } else {
                dispacth((0,pickUpDropAction/* setErorReturnDetailsPage */.tP)("", "return", "flightCategory_Waiting", router, i));
            }
        });
        //*checking flights length finish
        //*cruise start
        selectedPickUpPointsTr.map((each, i)=>{
            var ref;
            if ((each === null || each === void 0 ? void 0 : (ref = each.cruiseNumber) === null || ref === void 0 ? void 0 : ref.length) < 1) {
                dispacth((0,pickUpDropAction/* setErrorInTransferDetailsPage */.s_)("required", "transfer", "cruise", router, i));
            } else {
                dispacth((0,pickUpDropAction/* setErrorInTransferDetailsPage */.s_)("", "transfer", "cruise", router, i));
            }
        });
        //burda eger returndeki pick upoints varsa icindekilerin biri bos ise error verir
        slectPickUpPointsReturn.map((each, i)=>{
            var ref;
            if ((each === null || each === void 0 ? void 0 : (ref = each.cruiseNumber) === null || ref === void 0 ? void 0 : ref.length) < 1) {
                dispacth((0,pickUpDropAction/* setErorReturnDetailsPage */.tP)("required", "return", "cruise", router, i));
            } else {
                dispacth((0,pickUpDropAction/* setErorReturnDetailsPage */.tP)("", "return", "cruise", router, i));
            }
        });
        //*cruise finish
        //*postss start
        selectedPickUpPointsTr.map((each, i)=>{
            var ref, ref1;
            if ((each === null || each === void 0 ? void 0 : (ref = each.postCodeDetails) === null || ref === void 0 ? void 0 : (ref1 = ref.postCodeAddress) === null || ref1 === void 0 ? void 0 : ref1.length) < 1) {
                dispacth((0,pickUpDropAction/* setErrorInTransferDetailsPage */.s_)("required", "transfer", "postCategory", router, i));
            } else {
                dispacth((0,pickUpDropAction/* setErrorInTransferDetailsPage */.s_)("", "transfer", "postCategory", router, i));
            }
        });
        selectedDropPointsTr.map((each, i)=>{
            var ref, ref1;
            if ((each === null || each === void 0 ? void 0 : (ref = each.postCodeDetails) === null || ref === void 0 ? void 0 : (ref1 = ref.postCodeAddress) === null || ref1 === void 0 ? void 0 : ref1.length) < 1) {
                dispacth((0,pickUpDropAction/* setErrorInTransferDetailsPage */.s_)("required", "transfertwo", "postCategory", router, i));
            } else {
                dispacth((0,pickUpDropAction/* setErrorInTransferDetailsPage */.s_)("", "transfertwo", "postCategory", router, i));
            }
        });
        //burda eger returndeki pick upoints varsa icindekilerin biri bos ise error verir
        slectPickUpPointsReturn.map((each, i)=>{
            var ref, ref1;
            if ((each === null || each === void 0 ? void 0 : (ref = each.postCodeDetails) === null || ref === void 0 ? void 0 : (ref1 = ref.postCodeAddress) === null || ref1 === void 0 ? void 0 : ref1.length) < 1) {
                dispacth((0,pickUpDropAction/* setErorReturnDetailsPage */.tP)("required", "return", "postCategory", router, i));
            } else {
                dispacth((0,pickUpDropAction/* setErorReturnDetailsPage */.tP)("", "return", "postCategory", router, i));
            }
        });
        selectDropOffPointsReturn.map((each, i)=>{
            var ref, ref1;
            if ((each === null || each === void 0 ? void 0 : (ref = each.postCodeDetails) === null || ref === void 0 ? void 0 : (ref1 = ref.postCodeAddress) === null || ref1 === void 0 ? void 0 : ref1.length) < 1) {
                dispacth((0,pickUpDropAction/* setErorReturnDetailsPage */.tP)("required", "returntwo", "postCategory", router, i));
            } else {
                dispacth((0,pickUpDropAction/* setErorReturnDetailsPage */.tP)("", "returntwo", "postCategory", router, i));
            }
        });
        //*passenger details error start
        //'gfhgfh@hkjhkj.com'.split('@').length===2 && 'gfhgfh@hkjhkj.com'.split('@')[1].split('.').length === 2
        if (fullnameTransfer.length < 1 || emailTransfer.length < 1 || !emailTransfer.includes("@") || emailTransfer.includes(" ") || phoneTranfer.length < 1) {
            dispacth((0,pickUpDropAction/* setErrorForPassengerDetails */["do"])("required", 0));
        } else {
            dispacth((0,pickUpDropAction/* setErrorForPassengerDetails */["do"])("", 0));
        }
        if (fullNameReturn.length < 1 || !emailReturn.includes("@") || emailReturn.includes(" ") || phoneReturn.length < 1) {
            dispacth((0,pickUpDropAction/* setErrorForPassengerDetails */["do"])("required", 1));
        } else {
            dispacth((0,pickUpDropAction/* setErrorForPassengerDetails */["do"])("", 1));
        }
        dispacth({
            type: pickUpDropTypes/* SET_ERROR_FOR_TRANSFER_DETAILS_PAGE */.Ci
        });
        gotoNextPage();
    };
    const gotoNextPage = (par)=>{
        let arrayForChecking = [
            ...selectedPickUpPointsTr,
            ...selectedDropPointsTr,
            ...slectPickUpPointsReturn,
            ...selectDropOffPointsReturn, 
        ];
        let checkForInsideInputs = arrayForChecking === null || arrayForChecking === void 0 ? void 0 : arrayForChecking.every((each)=>{
            return (each === null || each === void 0 ? void 0 : each.errorMessage.length) < 1;
        });
        let checkInsiDEinputsForWaiiting = arrayForChecking === null || arrayForChecking === void 0 ? void 0 : arrayForChecking.every((each)=>{
            var ref;
            // console.log(each.waitingTime.length);
            return (each === null || each === void 0 ? void 0 : (ref = each.waitingTime) === null || ref === void 0 ? void 0 : ref.length) > 0;
        });
        let s = arrayForChecking.map((each)=>{
            var ref;
            return (each === null || each === void 0 ? void 0 : (ref = each.waitingTime) === null || ref === void 0 ? void 0 : ref.length) > 0;
        });
        // console.log(checkInsiDEinputsForWaiiting,"checkInsiDEinputsForWaiiting",);
        // console.log(checkForInsideInputs,"checkForInsideInputs");
        // console.log(s,"s");
        if (checkInsiDEinputsForWaiiting && checkForInsideInputs && fullnameTransfer.length && emailTransfer.includes("@") && !emailTransfer.includes(" ") && (phoneTranfer === null || phoneTranfer === void 0 ? void 0 : phoneTranfer.length)) {
            router === null || router === void 0 ? void 0 : router.push("/payment");
        // console.log("s");
        }
    };
    //o soruna gore bunu ekledik https://api.london-tech.com/error/1675089803552
    // useEffect(() => {
    //   if (selectedPickUpPointsTr.length === 0 || selectedDropPointsTr.length === 0) {
    //     router.push("/")
    //   }
    // }, [])
    //bura reduxdan gelen checked olacag
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: "Step 2 | İnclude Detaıls",
        keywords: "Step 2 | İnclude Detaıls",
        description: "Step 2 | İnclude Detaıls",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (styles_module_default()).transfer_details_section,
            children: [
                selectModalInfo && /*#__PURE__*/ jsx_runtime_.jsx(InfoModal/* default */.Z, {
                    content: "Please note that on international flights, for UK and EU Citizens the average clearing time is around 45 to 60 minutes except for first & business class travellers where it is 30-45 minutes. Other nationalities take around 60-70 minutes and foreign students may take up to 90 minutes. For domestic flight, the clearance time is around 15 minutes"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).section,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (styles_module_default()).transfer_details_container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(TransferDetailsPageHeader, {
                                date: trDateTime,
                                quot: selectedQuotTransfer,
                                pickUps: selectedPickUpPointsTr,
                                drops: selectedDropPointsTr,
                                env: env
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TransferDetailsPagePassengerDetails, {
                                title: "Passenger Details",
                                journeyType: 0,
                                fullname: fullnameTransfer,
                                email: emailTransfer,
                                phone: phoneTranfer,
                                passErrors: passengerTrErrors,
                                quot: selectedQuotTransfer
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TransferDetailsPageJourneyDetails, {
                                quot: selectedQuotTransfer,
                                pickUps: selectedPickUpPointsTr,
                                drops: selectedDropPointsTr,
                                onlyTransferJourney: true,
                                title: "Journey Details",
                                journeyType: 0,
                                env: env
                            }),
                            selectSelectedReturnQuot && slectPickUpPointsReturn.length > 0 && selectDropOffPointsReturn.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(TransferDetailsPageHeader, {
                                date: returnDate,
                                quot: selectSelectedReturnQuot,
                                pickUps: slectPickUpPointsReturn,
                                drops: selectDropOffPointsReturn,
                                returnJourneyTrue: true,
                                env: env
                            }),
                            checkedInput ? null : selectSelectedReturnQuot && slectPickUpPointsReturn.length > 0 && selectDropOffPointsReturn.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(TransferDetailsPagePassengerDetails, {
                                title: "Passenger Details For Return Journey",
                                journeyType: 1,
                                fullname: fullNameReturn,
                                email: emailReturn,
                                phone: phoneReturn,
                                quot: selectSelectedReturnQuot,
                                passErrors: passengerReturnErrors
                            }),
                            selectSelectedReturnQuot && slectPickUpPointsReturn.length > 0 && selectDropOffPointsReturn.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(TransferDetailsPageJourneyDetails, {
                                title: "Return Journey Details",
                                quot: selectSelectedReturnQuot,
                                pickUps: slectPickUpPointsReturn,
                                drops: selectDropOffPointsReturn,
                                returnJourneyTrue: true,
                                journeyType: 1,
                                env: env
                            }),
                            slectPickUpPointsReturn.length > 0 && selectDropOffPointsReturn.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (styles_module_default()).checkBtn,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        onChange: handleChange,
                                        type: "checkbox",
                                        className: (styles_module_default()).checkBtn__input,
                                        id: "check3",
                                        name: "check3",
                                        defaultChecked: checkedInput
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        htmlFor: "check3",
                                        className: `${(styles_module_default()).checkBtn_label} ${(styles_module_default()).checkBtn_label_bluee}
                  ${checkedInput ? (styles_module_default()).pChecked : (styles_module_default()).checkedText}
                  `,
                                        children: [
                                            "the passenger details",
                                            " ",
                                            checkedInput ? "are a same" : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (styles_module_default()).textMiddle,
                                                children: "are not same "
                                            }),
                                            " ",
                                            "for both journey"
                                        ]
                                    })
                                ]
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (styles_module_default()).buttons,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (styles_module_default()).btn,
                                        onClick: ()=>router.back(),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(BlueButton["default"], {
                                            title: "Go Back",
                                            type: "",
                                            responsive: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (styles_module_default()).btn,
                                        onClick: ()=>handleClickToTheNextPaymentPage(),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(BlueButton["default"], {
                                            title: "Next",
                                            type: "",
                                            responsive: true
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const transfer_details = (TransferDetails);
async function getServerSideProps({ req , res  }) {
    if (req.url === "/transfer-details") {
        return {
            redirect: {
                destination: `/`,
                permanent: false
            }
        };
    }
    return {
        props: {
            data: ""
        }
    };
}


/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6377,5675,2246,5789,9858,3570,2747,9434,809,3830,7489], () => (__webpack_exec__(5920)));
module.exports = __webpack_exports__;

})();