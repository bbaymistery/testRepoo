exports.id = 6442;
exports.ids = [6442];
exports.modules = {

/***/ 2855:
/***/ ((module) => {

// Exports
module.exports = {
	"quotation_panel_istaxideal": "styles_quotation_panel_istaxideal__nLUvZ",
	"modal_map": "styles_modal_map__tJTSM",
	"modal_map_container": "styles_modal_map_container__xjOWy",
	"close_div": "styles_close_div__z0AgF",
	"google_map": "styles_google_map__aD8S3",
	"map_direction": "styles_map_direction__VSb8c",
	"left_info": "styles_left_info__TJmsx",
	"left_info_title": "styles_left_info_title___Z71f",
	"checkbox": "styles_checkbox__iYfBz",
	"badge__content": "styles_badge__content__llNLC",
	"badge_stars": "styles_badge_stars__3ccu4",
	"badge_stats": "styles_badge_stats__yTRqP",
	"stats_wrpa": "styles_stats_wrpa__5pt1E",
	"stats__score": "styles_stats__score__UrRfe",
	"ruk_rating": "styles_ruk_rating__xMRba",
	"stats__count": "styles_stats__count__1FLfa",
	"ruk_count": "styles_ruk_count__fOLn7",
	"heathrow_image_video_a": "styles_heathrow_image_video_a__4j8gz",
	"heathrow_image_video_img": "styles_heathrow_image_video_img__DBIAC",
	"whichterminal_a": "styles_whichterminal_a__Xftn3",
	"approve_a": "styles_approve_a__ONBOf",
	"tripad_left_info": "styles_tripad_left_info__Cbzt3",
	"tripad_a": "styles_tripad_a__W7pxU",
	"tripad_img": "styles_tripad_img__wsMa5",
	"acceptedcards": "styles_acceptedcards__4BDaf",
	"tfl": "styles_tfl__bn3bD",
	"exceptional": "styles_exceptional__FG23f",
	"exceptional_content": "styles_exceptional_content__7GdD3",
	"rate_div": "styles_rate_div__c77Or",
	"description_div": "styles_description_div__1uEcJ",
	"description_text": "styles_description_text__GZsTB",
	"description_review_text": "styles_description_review_text__hB9C_",
	"left_support": "styles_left_support__RHbIE",
	"mail": "styles_mail__1Frl3",
	"wp": "styles_wp__DM7gh",
	"phone": "styles_phone__IgQQ1",
	"services": "styles_services__Z_nam",
	"form_div": "styles_form_div__fOogc",
	"radio_button_div": "styles_radio_button_div__txeVN",
	"search_menu": "styles_search_menu__PD3ma",
	"book_input_date": "styles_book_input_date__BQI2h"
};


/***/ }),

/***/ 6442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2855);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);



//http://localhost:3500/heathrow-vip-meet-and-assist   (inside here used )
const LeftSidebarInformation = ({ direction , appData , showAllInclusive =true , showExceptional =false  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().quotation_panel_istaxideal),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left_info)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tripad_left_info)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left_info_title)} ${direction}`,
                        children: "Tripadvisor Ratings"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tripad_a),
                            target: "_blank",
                            href: "https://www.tripadvisor.co.uk/Attraction_Review-g186338-d11966434-Reviews-Airport_Pickups_London-London_England.html",
                            title: "Tripadvisor Rating for Airport Pickups London",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tripad_img),
                                border: "0",
                                alt: "Airport Pickups",
                                src: "/images/TripAdvisor2.png"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left_info)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left_support)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left_info_title)} ${direction}`,
                        children: "7/24 Support"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().phone),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/tel.png",
                                        alt: "Airport Pickups Support"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "tel:+442088687744",
                                        children: "+44 (0) 208 688 7744"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().wp),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/WhatsApp.svg.png",
                                        alt: "Airport Pickups Support"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        target: "_blank",
                                        href: "https://wa.me/447387901028",
                                        children: "+44 73 8790 1028"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mail),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            border: "0",
                                            alt: "Airport Pickups",
                                            src: "/images/mail.svg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "mailto:info@aplcars.com",
                                        children: "info@aplcars.com"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            showAllInclusive ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left_info)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().services)}`,
                direction: String(direction === "rtl"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left_info_title),
                        children: "ALL Inclusive Prices"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: `${direction}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        readOnly: true,
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().checkbox),
                                        type: "checkbox",
                                        defaultChecked: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().primary_text)
                                    }),
                                    appData?.words["strCarFeatureFreeMeetAndGreet"]
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: `${direction}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        readOnly: true,
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().checkbox),
                                        type: "checkbox",
                                        defaultChecked: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().primary_text)
                                    }),
                                    "Flight monitoring"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: `${direction}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        readOnly: true,
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().checkbox),
                                        type: "checkbox",
                                        defaultChecked: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().primary_text)
                                    }),
                                    "FREE Baby/Child Seat"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: `${direction}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        readOnly: true,
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().checkbox),
                                        type: "checkbox",
                                        defaultChecked: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().primary_text)
                                    }),
                                    "FIXED Prices"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: `${direction}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        readOnly: true,
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().checkbox),
                                        type: "checkbox",
                                        defaultChecked: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().primary_text)
                                    }),
                                    "NO hidden charges"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: `${direction}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        readOnly: true,
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().checkbox),
                                        type: "checkbox",
                                        defaultChecked: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().primary_text)
                                    }),
                                    "FREE Cancellation (24h)"
                                ]
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left_info)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().acceptedcards)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left_info_title)} ${direction}`,
                        children: " Accepted Cards"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().acceptedcards_img),
                        border: "0",
                        alt: "Airport Pickups",
                        src: "/images/payments.png"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left_info)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tfl)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tfl_img),
                    border: "0",
                    alt: "Airport Pickups",
                    src: "/images/tfl2.png"
                })
            }),
            showExceptional ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left_info)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().exceptional)}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().exceptional_content),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().rate_div),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "4.8"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().description_div),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().description_text),
                                    children: "Exceptional"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().description_review_text),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://www.reviews.co.uk/company-reviews/store/airport-pickups-london-com",
                                        target: "_blank",
                                        title: "Airport Pickups London Reviews",
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().reviews),
                                        rel: "noreferrer",
                                        children: "759 reviews"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftSidebarInformation);


/***/ })

};
;