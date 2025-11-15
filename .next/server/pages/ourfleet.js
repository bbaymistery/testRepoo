(() => {
var exports = {};
exports.id = 1507;
exports.ids = [1507,2858,8817];
exports.modules = {

/***/ 4163:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumb_area": "styles_breadcrumb_area__Q_6Sv",
	"breadcrumb_container": "styles_breadcrumb_container__8b0WD",
	"breadcrumb_container_title": "styles_breadcrumb_container_title__vqhtU"
};


/***/ }),

/***/ 1017:
/***/ ((module) => {

// Exports
module.exports = {
	"fleet_section": "styles_fleet_section__D1l80",
	"faq_area": "styles_faq_area__aaCIm",
	"faq_container": "styles_faq_container__Qv47x",
	"faq_container_title": "styles_faq_container_title__jQbxb",
	"car_section": "styles_car_section__abKY7",
	"car_container": "styles_car_container__Ry3_3",
	"header": "styles_header__1Yb6M",
	"header_title": "styles_header_title__gOuJ5",
	"content_car_wrap": "styles_content_car_wrap___y7pe",
	"car_item": "styles_car_item__eolXW",
	"card_img_div": "styles_card_img_div__9jlFY",
	"card_image_link": "styles_card_image_link__k7EE0",
	"img": "styles_img__cUH6E",
	"card_body": "styles_card_body__sWHVR",
	"card_body_title": "styles_card_body_title__KYO0t",
	"card_body_attributes": "styles_card_body_attributes__s6s1F",
	"card_atr_ul": "styles_card_atr_ul__bIOi8",
	"card_atr_li": "styles_card_atr_li__ijYow",
	"li_icon": "styles_li_icon__C73Y_"
};


/***/ }),

/***/ 5352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4163);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const BreadCrumb = ({ title  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().breadcrumb_area),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().breadcrumb_container),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().breadcrumb_container_title),
                children: title
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadCrumb);


/***/ }),

/***/ 2645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ carsItems)
/* harmony export */ });
const carsItems = [
    {
        carImage: "/images/saloon-sedan.png",
        carName: "Saloon/Sedan",
        passenger: 3,
        suitcase: 2,
        id: 1
    },
    {
        carImage: "/images/8seater.png",
        carName: "8 Seater",
        passenger: 8,
        suitcase: 8,
        id: 2
    },
    {
        carImage: "/images/mpvPeople2.png",
        carName: "MPV-People Carrier",
        passenger: 5,
        suitcase: 5,
        id: 3
    },
    {
        carImage: "/images/vip-sedan.png",
        carName: "VIP Sedan",
        passenger: 3,
        suitcase: 3,
        id: 4
    },
    {
        carImage: "/images/vip-carier.png",
        carName: "VIP People Carrier",
        passenger: 7,
        suitcase: 7,
        id: 5
    },
    {
        carImage: "/images/vip-minibus-carier.png",
        carName: "VIP Minibus Carrier",
        passenger: 8,
        suitcase: 8,
        id: 6
    }, 
];


/***/ }),

/***/ 750:
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
/* harmony import */ var _components_elements_breadCrubm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5352);
/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2246);
/* harmony import */ var _constants_carss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2645);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1017);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);






const OurFleet = (props)=>{
    let { env  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        title: "Our Fleet",
        keywords: "Our Fleet",
        description: "Our Fleet",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().fleet_section),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_breadCrubm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    title: "Our Fleet"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().faq_area),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().faq_container),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().faq_container_title),
                            children: "Our company offers VIP as well as Economy services. You may choose one of the 3 available car options: Saloon, MPV (People Carrier), and an 8-Seater Minibus."
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().car_section),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().car_container),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header_title),
                                    children: "Vehicle Types "
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content_car_wrap),
                                children: _constants_carss__WEBPACK_IMPORTED_MODULE_4__/* .carsItems.map */ .p.map((car, i)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().car_item),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card_img_div),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card_image_link),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: !env.isDevelopment ? `https://www.heathrow-gatwick-transfers.com${car.carImage}` : car.carImage,
                                                        alt: "car-img",
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().img)
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card_body),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card_body_title),
                                                        children: car.carName
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card_body_attributes),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card_atr_ul),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card_atr_li),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: `fa-solid fa-users ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().li_icon)}`
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().li_desc),
                                                                            children: [
                                                                                "No of Passengers ",
                                                                                car.passenger
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card_atr_ul),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card_atr_li),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            style: {
                                                                                marginLeft: "4px"
                                                                            },
                                                                            className: `fa-solid fa-suitcase ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().li_icon)}`
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().li_desc),
                                                                            children: [
                                                                                "No of Suitcases ",
                                                                                car.suitcase
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, car.id);
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OurFleet);


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
var __webpack_exports__ = __webpack_require__.X(0, [6377,5675,2246], () => (__webpack_exec__(750)));
module.exports = __webpack_exports__;

})();