(() => {
var exports = {};
exports.id = 1675;
exports.ids = [1675,2197,9319,4557,5026,5126,6103];
exports.modules = {

/***/ 4548:
/***/ ((module) => {

// Exports
module.exports = {
	"fleet": "styles_fleet__e4Mo2",
	"fleet_section": "styles_fleet_section__E1e0e",
	"fleet_section_container": "styles_fleet_section_container__px_2K",
	"left_content": "styles_left_content__Zx89G",
	"right_content": "styles_right_content__IG_Lj",
	"fleet_header": "styles_fleet_header__nfa_v",
	"card_item": "styles_card_item__mzTfk",
	"column_first": "styles_column_first__P8t66",
	"column_second": "styles_column_second__0GsZe",
	"column_second_flex_column": "styles_column_second_flex_column__Ggnfg",
	"name_and_postcode_div": "styles_name_and_postcode_div__4VRAX",
	"postcode": "styles_postcode__TfQO0",
	"name": "styles_name__ERlR9",
	"car_features": "styles_car_features__IYfzQ",
	"meet_greet_icon": "styles_meet_greet_icon__kubzH",
	"feature_column": "styles_feature_column__f43Zs",
	"apl_features": "styles_apl_features__X_LIP",
	"apl_feature": "styles_apl_feature__mvfZa",
	"leftFeatureIcon": "styles_leftFeatureIcon__J6SvZ",
	"show_more_than360": "styles_show_more_than360__ysIXo",
	"show_less_than360": "styles_show_less_than360__CBt_g",
	"fleet_footer": "styles_fleet_footer__kfnGN"
};


/***/ }),

/***/ 1381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/blackMeetAndGreet.9b438240.svg","height":64,"width":64});

/***/ }),

/***/ 1544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ quotationImagesObj)
/* harmony export */ });
const quotationImagesObj = {
    1: {
        name: "Saloon",
        image: "/media/normal-saloon-v2.png",
        id: 1
    },
    2: {
        name: "MPV",
        image: "/media/normal-mpv-v2.png",
        id: 2
    },
    3: {
        name: "8 Seater",
        image: "/media/normal-8-seaters-v2.png",
        id: 3
    },
    4: {
        name: "Executive Saloon",
        image: "/media/vip-saloon-v2.png",
        id: 4
    },
    5: {
        name: "Executive MPV",
        image: "/media/vip-mpv-v2.png",
        id: 5
    },
    6: {
        name: "Executive 8 Seater",
        image: "/media/vip-mpv-v2.png",
        id: 6
    }
};


/***/ }),

/***/ 1879:
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
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4548);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layouts_GlobalLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5277);
/* harmony import */ var _constants_quotationImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1544);
/* harmony import */ var _resources_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4603);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_images_icons_blackMeetAndGreet_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1381);
/* harmony import */ var _components_elements_LeftSidebarInformation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6442);










let description = "Airport Pickups London vehicle types and all taxi capacity information";
let title = "Airport Pickups London (APL Cars)  fleet information. Our vehicle types. ";
let keywords = "taxi types, london airport taxi information";
const Fleet = (props)=>{
    let { bggray =false  } = props;
    const { appData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.initialReducer);
    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction  }  } = state;
    const carObject = appData?.carsTypes?.reduce((obj, item)=>({
            ...obj,
            [item.id]: item
        }), {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_GlobalLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        keywords: keywords,
        title: title,
        description: description,
        footerbggray: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().fleet)} ${direction} page`,
            bggray: String(bggray === "true"),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().fleet_section)} page_section`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().fleet_section_container)} page_section_container`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().left_content),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_LeftSidebarInformation__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                direction: direction,
                                appData: appData
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().right_content),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().fleet_header)}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: "Welcome to our fleet page!"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                "We offer a range of vehicles to suit your needs, whether you're traveling for business or leisure.",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                "Take a look at our options below:"
                                            ]
                                        })
                                    ]
                                }),
                                Object?.values(_constants_quotationImages__WEBPACK_IMPORTED_MODULE_4__/* .quotationImagesObj */ .t)?.map((item, index)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        dataid: index === 0 ? "first_car" : "",
                                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card_item)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                data: item?.id,
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().column_first),
                                                style: {
                                                    backgroundImage: `url(${_resources_env__WEBPACK_IMPORTED_MODULE_5__/* ["default"].apiDomain */ .Z.apiDomain}${item?.image})`
                                                },
                                                children: " "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().column_second),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().column_second_flex_column),
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().name_and_postcode_div),
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().postcode),
                                                                    children: [
                                                                        " ",
                                                                        carObject[item?.id]?.transferType,
                                                                        "  "
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().name),
                                                                    children: [
                                                                        carObject[item?.id]?.name,
                                                                        "   "
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().car_features),
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().feature_column),
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: carObject[item?.id]?.suitcases
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Suitcases"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().feature_column),
                                                                    children: [
                                                                        "  ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: carObject[item?.id]?.pax
                                                                        }),
                                                                        "  ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Passengers"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().feature_column)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().meet_greet_icon)}`,
                                                                    direction: String(direction === "rtl"),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                            src: _public_images_icons_blackMeetAndGreet_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                                                            width: "18",
                                                                            height: "20",
                                                                            alt: ""
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            style: {
                                                                                paddingLeft: "5px",
                                                                                fontWeight: "500"
                                                                            },
                                                                            children: "Meet & Greet"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().apl_features),
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().apl_feature)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().show_more_than360)}`,
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: `fa-solid fa-check ${direction === "rtl" ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().leftFeatureIcon) : ""}`
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: appData?.words["strCarFeatureFreeMeetAndGreet"]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().apl_feature)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().show_more_than360)}`,
                                                                    children: [
                                                                        "  ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: `fa-solid fa-check ${direction === "rtl" ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().leftFeatureIcon) : ""}`
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: appData?.words["strCarFeatureNoCharge4Delay"]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().apl_feature)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().show_more_than360)}`,
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: `fa-solid fa-check ${direction === "rtl" ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().leftFeatureIcon) : ""}`
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: appData?.words["strCarFeatureFreeWaitingTime"]
                                                                        }),
                                                                        " "
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().apl_feature)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().show_more_than360)}`,
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: `fa-solid fa-check ${direction === "rtl" ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().leftFeatureIcon) : ""}`
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Free Cancellation (24h)"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().apl_feature)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().show_more_than360)}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: `fa-solid fa-check ${direction === "rtl" ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().leftFeatureIcon) : ""}`
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: appData?.words["strCarFeatureFlightTracking"]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().apl_feature)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().show_more_than360)}`,
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: `fa-solid fa-check ${direction === "rtl" ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().leftFeatureIcon) : ""}`
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: carObject[item?.id]?.id === 4 ? "Mercedes E class or equivalent" : carObject[item?.id]?.id === 5 ? "Mercedes V Class / EQV" : carObject[item?.id]?.id === 6 ? "Mercedes Vito / E Vito" : "Comfortable Cars"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().apl_feature)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().show_less_than360)}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: `fa-solid fa-check ${direction === "rtl" ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().leftFeatureIcon) : ""}`
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: appData?.words["strCarFeatureFlightTracking"]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().apl_feature)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().show_less_than360)}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: `fa-solid fa-check ${direction === "rtl" ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().leftFeatureIcon) : ""}`
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: carObject[item?.id]?.id === 4 ? "Mercedes E class  or equivalent" : carObject[item?.id]?.id === 5 ? "Mercedes V Class / EQV" : carObject[item?.id]?.id === 6 ? "Mercedes Vito / E Vito" : "Comfortable Cars"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().apl_feature)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().show_less_than360)}`,
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: `fa-solid fa-check ${direction === "rtl" ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().leftFeatureIcon) : ""}`
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: appData?.words["strCarFeatureFreeWaitingTime"]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().apl_feature)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().show_less_than360)}`,
                                                                    children: [
                                                                        "  ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: `fa-solid fa-check ${direction === "rtl" ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().leftFeatureIcon) : ""}`
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: appData?.words["strCarFeatureFreeMeetAndGreet"]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().apl_feature)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().show_less_than360)}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: `fa-solid fa-check ${direction === "rtl" ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().leftFeatureIcon) : ""}`
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Free Cancellation (24h)"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().apl_feature)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().show_less_than360)}`,
                                                                    children: [
                                                                        "  ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: `fa-solid fa-check ${direction === "rtl" ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().leftFeatureIcon) : ""}`
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: appData?.words["strCarFeatureNoCharge4Delay"]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }, index);
                                }),
                                "\xa0",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().fleet_footer)}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: "Economy Class"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            children: "Saloon"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Capacity: 3 Passengers"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Luggage Capacity: 3 Suitcases"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            children: "People Carrier"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Capacity: 5 Passengers"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Luggage Capacity: 5 Suitcases"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            children: "8 Seater"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Capacity: 8 Passengers"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Luggage Capacity: 8 Suitcases"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: "Business Class"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            children: "Executive Saloon (Mercedes E-Class or equivalent)"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Capacity: 3 Passengers"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Luggage Capacity: 3 Suitcases"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Complimentary Refreshments: Enjoy a selection of refreshments during your journey in our Business class executive saloon cars."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            children: "Executive People Carrier (Mercedes V-Class or EQV)"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Capacity: 5 Passengers"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Luggage Capacity: 5 Suitcases"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Complimentary Refreshments: Indulge in a variety of refreshments offered in our Business class executive people carriers."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            children: "Executive 8 Seater (Mercedes Vito or E-Vito)"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Capacity: 8 Passengers"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Luggage Capacity: 8 Suitcases"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Complimentary Refreshments: Stay refreshed with a range of complementary refreshments available in our Business class executive 8 seater vans."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: "Additional Services:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: "Free Meet and Greet: For airport and cruise port pickups, we provide a complimentary Meet and Greet service. Our driver will be waiting for you at the arrival barriers, holding a passenger name board, to ensure a smooth and convenient start to your journey."
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: "Please note that all our vehicles are well-maintained, comfortable, and equipped with modern amenities to ensure a pleasant journey."
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: "To inquire about availability or make a reservation, please contact our customer service team. We look forward to serving you!"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fleet);


/***/ }),

/***/ 5648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

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

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

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

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 173:
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,9505,3121,3061,4650,5277,6442], () => (__webpack_exec__(1879)));
module.exports = __webpack_exports__;

})();