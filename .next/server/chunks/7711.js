exports.id = 7711;
exports.ids = [7711];
exports.modules = {

/***/ 3200:
/***/ ((module) => {

// Exports
module.exports = {
	"tours": "styles_tours__K9wsg",
	"tours_section_container": "styles_tours_section_container__YwNKp",
	"title": "styles_title__6KJs0",
	"cards_content": "styles_cards_content__eFeTe",
	"cards": "styles_cards__uaFHf",
	"card": "styles_card__4N9_F",
	"card_image_div": "styles_card_image_div__7nQPF",
	"card_body": "styles_card_body__MJw_t",
	"start_from": "styles_start_from__c1lUa",
	"img": "styles_img__6Hvft",
	"start_from_text_left": "styles_start_from_text_left__8GfDG",
	"start_from_text_right": "styles_start_from_text_right___8KBR",
	"haveSpace": "styles_haveSpace__DNWiZ"
};


/***/ }),

/***/ 7711:
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
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3200);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layouts_GlobalLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5277);
/* harmony import */ var _constants_tours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1140);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);







const Tours = (props)=>{
    let { bggray =false , insideGlobalLayout =true  } = props;
    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction  }  } = state;
    const { appData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.initialReducer);
    let description = "Daily Tours and excursions for London. London to Bath-Stonehenge-Cambridge-Oxford daily tours.";
    let title = "Tour-Airport Pickups London";
    let keywords = "Travel tour,airport pickups Tour";
    return insideGlobalLayout ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_GlobalLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        keywords: keywords,
        title: title,
        description: description,
        footerbggray: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tours)} ${direction} page`,
            bggray: String(bggray),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tours_section)} page_section`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tours_section_container)} page_section_container`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Tours"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cards_content),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cards),
                                    children: _constants_tours__WEBPACK_IMPORTED_MODULE_4__/* .tourLinks.slice */ .e.slice(0, 4).map((item, index)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: `tours/${item.id}`,
                                            title: item?.pageTitle,
                                            className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card)}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_image_div),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        src: `${item.urlImage}`,
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().img),
                                                        fill: true,
                                                        alt: item.title,
                                                        sizes: "(max-width: 768px) 100vw, 50vw"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_body),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            children: item?.title
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().start_from),
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().start_from_text_left),
                                                                    children: [
                                                                        appData.words["strStartFrom"],
                                                                        " "
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().start_from_text_right),
                                                                    children: [
                                                                        " \xa3 ",
                                                                        item?.price,
                                                                        " "
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, item.id);
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().haveSpace),
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cards),
                                    children: _constants_tours__WEBPACK_IMPORTED_MODULE_4__/* .tourLinks.slice */ .e.slice(4, 8).map((item, index)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: `tours/${item.id}`,
                                            title: item?.pageTitle,
                                            className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card)}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_image_div),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        src: `${item.urlImage}`,
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().img),
                                                        fill: true,
                                                        alt: item.title,
                                                        sizes: "(max-width: 768px) 100vw, 50vw"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_body),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            children: item?.title
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().start_from),
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().start_from_text_left),
                                                                    children: [
                                                                        appData.words["strStartFrom"],
                                                                        " "
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().start_from_text_right),
                                                                    children: [
                                                                        " \xa3 ",
                                                                        item?.price,
                                                                        " "
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, item.id);
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tours)} ${direction} page`,
        bggray: String(bggray),
        style: {
            marginTop: `${!insideGlobalLayout ? "0px !important" : ""}`
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tours_section)} page_section`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tours_section_container)} page_section_container`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: "Tours"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cards_content),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cards),
                                children: _constants_tours__WEBPACK_IMPORTED_MODULE_4__/* .tourLinks.slice */ .e.slice(0, 4).map((item, index)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: `tours/${item.id}`,
                                        title: item?.pageTitle,
                                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_image_div),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    src: `${item.urlImage}`,
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().img),
                                                    fill: true,
                                                    alt: item.title,
                                                    sizes: "(max-width: 768px) 100vw, 50vw"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_body),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        children: item?.title
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().start_from),
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().start_from_text_left),
                                                                children: [
                                                                    appData.words["strStartFrom"],
                                                                    " "
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().start_from_text_right),
                                                                children: [
                                                                    " \xa3 ",
                                                                    item?.price,
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, item.id);
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().haveSpace),
                                children: " "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cards),
                                children: _constants_tours__WEBPACK_IMPORTED_MODULE_4__/* .tourLinks.slice */ .e.slice(4, 8).map((item, index)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: `tours/${item.id}`,
                                        title: item?.pageTitle,
                                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_image_div),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    src: `${item.urlImage}`,
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().img),
                                                    fill: true,
                                                    alt: item.title,
                                                    sizes: "(max-width: 768px) 100vw, 50vw"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_body),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        children: item?.title
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().start_from),
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().start_from_text_left),
                                                                children: [
                                                                    appData.words["strStartFrom"],
                                                                    " "
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().start_from_text_right),
                                                                children: [
                                                                    " \xa3 ",
                                                                    item?.price,
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, item.id);
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tours);


/***/ })

};
;