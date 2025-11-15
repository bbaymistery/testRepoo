(() => {
var exports = {};
exports.id = 1188;
exports.ids = [1188,2858,8817];
exports.modules = {

/***/ 532:
/***/ ((module) => {

// Exports
module.exports = {
	"accordion": "styles_accordion__Npeau",
	"accordion_heading": "styles_accordion_heading__kkQdn",
	"accordion_heading_content": "styles_accordion_heading_content__oJ1Fj",
	"head_title": "styles_head_title__z7b5r",
	"headClick": "styles_headClick__bqtXW",
	"turnUp": "styles_turnUp__yqsFC",
	"accordion_toggle": "styles_accordion_toggle__nMAeY",
	"number": "styles_number__QzshS",
	"animated": "styles_animated__gbPy9"
};


/***/ }),

/***/ 4163:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumb_area": "styles_breadcrumb_area__Q_6Sv",
	"breadcrumb_container": "styles_breadcrumb_container__8b0WD",
	"breadcrumb_container_title": "styles_breadcrumb_container_title__vqhtU"
};


/***/ }),

/***/ 6598:
/***/ ((module) => {

// Exports
module.exports = {
	"faqs_section": "styles_faqs_section__dYQRL",
	"container": "styles_container__8wx1n",
	"content": "styles_content__P49HM",
	"content_title": "styles_content_title__Abqeq",
	"accordions": "styles_accordions__AoZhw",
	"accordions_title": "styles_accordions_title__nMTNO",
	"accordion": "styles_accordion__xrbw0",
	"accordion_heading": "styles_accordion_heading__q0HRv",
	"accordion_heading_content": "styles_accordion_heading_content__MeANl",
	"head_title": "styles_head_title___k7u8",
	"headClick": "styles_headClick__YVZfb",
	"turnUp": "styles_turnUp__EFNPC",
	"accordion_toggle": "styles_accordion_toggle__ZcGRl",
	"number": "styles_number__p_slo",
	"animated": "styles_animated__4k8Gl"
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

/***/ 8706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ faqs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/elements/Accordion/styles.module.scss
var styles_module = __webpack_require__(532);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/elements/Accordion/Accordion.js



const Accordion = ({ title , content , toggleState , active , setAcTIVE  })=>{
    const { 0: heightEl , 1: setHeightEl  } = (0,external_react_.useState)();
    const refHeight = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        // console.log(refHeight.current.scrollHeight);
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (styles_module_default()).accordion,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).accordion_heading,
                onClick: ()=>toggleState(title),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).accordion_heading_content,
                    onClick: ()=>toggleState(title),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (styles_module_default()).head_title,
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: `${(styles_module_default()).headClick} ${active === title ? (styles_module_default()).turnUp : ""}`,
                            onClick: ()=>toggleState(title),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fa-solid fa-angle-down"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: active === title ? `${(styles_module_default()).accordion_toggle} ${(styles_module_default()).animated}` : `${(styles_module_default()).accordion_toggle}`,
                style: {
                    height: active === title ? `${heightEl}` : "0px"
                },
                ref: refHeight,
                children: content === null || content === void 0 ? void 0 : content.map((c, i)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: i > 0 ? `${i}.` : ""
                            }),
                            c
                        ]
                    }, i);
                })
            })
        ]
    });
};
/* harmony default export */ const Accordion_Accordion = (Accordion);

// EXTERNAL MODULE: ./src/components/elements/breadCrubm/index.js
var breadCrubm = __webpack_require__(5352);
// EXTERNAL MODULE: ./src/components/layouts/Layout/index.js + 10 modules
var Layout = __webpack_require__(2246);
;// CONCATENATED MODULE: ./src/constants/faqs/index.js
const accordionQuestion = [
    {
        id: 1,
        title: "What if my flight is canceled? Can I postpone my transfer or get a refund?",
        content: [
            "If your flight is canceled we can change your pickup date to  a specified day. However, if you decide to get a refund; cancellation notice periods and fees are as follows:",
            " FREE cancellation if, cancellation is made more than 12 hours before the transfer time; HGTwill only charge \xa310.00 administration fee for the Refund as this processing (interchange) fee, charged by the Merchant account.",
            "50% cancellation charge if cancellation is made between 6 and 12 hours before the delivery time",
            " 100% cancellation charge if cancellation is made within 6 hours of delivery time.",
            " REFUNDS could take up to 15 working days to process", 
        ]
    },
    {
        id: 2,
        title: "What are the office opening times ?",
        content: [
            "Our office open 7/24 for all year."
        ]
    },
    {
        id: 3,
        title: "Can we pay cash to the driver?",
        content: [
            "Yes, you can pay cash to the driver."
        ]
    },
    {
        id: 4,
        title: "Do you provide child seats for the children and do you charge extra for them?",
        content: [
            "Yes, we do provide child seats and we do not charge extra for them. You just need to specify that you require a child seat and the age of the child while booking your transfer.", 
        ]
    }, 
];

// EXTERNAL MODULE: ./src/pages/faqs/styles.module.scss
var faqs_styles_module = __webpack_require__(6598);
var faqs_styles_module_default = /*#__PURE__*/__webpack_require__.n(faqs_styles_module);
;// CONCATENATED MODULE: ./src/pages/faqs/index.js







const Faqs = ()=>{
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(null);
    const { 0: heightEl4 , 1: setHeightEl4  } = (0,external_react_.useState)();
    const { 0: heightEl5 , 1: setHeightEl5  } = (0,external_react_.useState)();
    const { 0: heightEl6 , 1: setHeightEl6  } = (0,external_react_.useState)();
    const { 0: heightEl7 , 1: setHeightEl7  } = (0,external_react_.useState)();
    const refHeight4 = (0,external_react_.useRef)();
    const refHeight5 = (0,external_react_.useRef)();
    const refHeight6 = (0,external_react_.useRef)();
    const refHeight7 = (0,external_react_.useRef)();
    const toggleState = (e)=>{
        //togglus yazsak biri otomatik acg galar
        if (e === active) {
            return setActive(null);
        }
        setActive(e);
    };
    (0,external_react_.useEffect)(()=>{
        setHeightEl4(`${refHeight4.current.scrollHeight}px`);
        setHeightEl5(`${refHeight5.current.scrollHeight}px`);
        setHeightEl6(`${refHeight6.current.scrollHeight}px`);
        setHeightEl7(`${refHeight7.current.scrollHeight}px`);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: "FAQS ",
        keywords: "Heathrow airport transfers, Heathrow airport taxi transfer, Heathrow airport taxi quote, Heathrow airport taxi, Heathrow transfer, taxi to Heathrow airport, cab to Heathrow airport. ",
        description: "Questions about london airport pickups",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (faqs_styles_module_default()).faqs_section,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(breadCrubm/* default */.Z, {
                    title: "Faqs"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (faqs_styles_module_default()).container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (faqs_styles_module_default()).content,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (faqs_styles_module_default()).content_title,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: " Frequently Asked Questions"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (faqs_styles_module_default()).accordions,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: (faqs_styles_module_default()).accordions_title,
                                            children: "Questions"
                                        }),
                                        accordionQuestion.map((ac, i)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx(Accordion_Accordion, {
                                                title: ac.title,
                                                active: active,
                                                setActive: setActive,
                                                toggleState: toggleState,
                                                content: ac.content
                                            }, i);
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (faqs_styles_module_default()).accordion,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (faqs_styles_module_default()).accordion_heading,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (faqs_styles_module_default()).accordion_heading_content,
                                                        onClick: ()=>toggleState("What if my flight lands earlier than scheduled time? What should I do if I can’t find the driver?"),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: (faqs_styles_module_default()).head_title,
                                                                children: "What if my flight lands earlier than scheduled time? What should I do if I can’t find the driver?"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: `${(faqs_styles_module_default()).headClick} ${active === "What if my flight lands earlier than scheduled time? What should I do if I can’t find the driver?" ? (faqs_styles_module_default()).turnUp : ""}`,
                                                                onClick: ()=>toggleState("What if my flight lands earlier than scheduled time? What should I do if I can’t find the driver?"),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-solid fa-angle-down"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: active === "What if my flight lands earlier than scheduled time? What should I do if I can’t find the driver?" ? `${(faqs_styles_module_default()).accordion_toggle} ${(faqs_styles_module_default()).animated}` : `${(faqs_styles_module_default()).accordion_toggle}`,
                                                    style: {
                                                        height: active === "What if my flight lands earlier than scheduled time? What should I do if I can’t find the driver?" ? `${heightEl4}` : "0px"
                                                    },
                                                    ref: refHeight4,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "You should phone our 7/24 office tel number:",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: (faqs_styles_module_default()).number,
                                                                href: "tel:+442086832330",
                                                                children: "+44 208 683 2330"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "or Whatsapp us"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: (faqs_styles_module_default()).number,
                                                                href: "https://api.whatsapp.com/send?phone=+447387901028",
                                                                children: "+44 73 8790 1028"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (faqs_styles_module_default()).accordion,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (faqs_styles_module_default()).accordion_heading,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (faqs_styles_module_default()).accordion_heading_content,
                                                        onClick: ()=>toggleState("What should I do if I can’t find the driver?"),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: (faqs_styles_module_default()).head_title,
                                                                children: "What should I do if I can’t find the driver?"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: `${(faqs_styles_module_default()).headClick} ${active === "What should I do if I can’t find the driver?" ? (faqs_styles_module_default()).turnUp : ""}`,
                                                                onClick: ()=>toggleState("What should I do if I can’t find the driver?"),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-solid fa-angle-down"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: active === "What should I do if I can’t find the driver?" ? `${(faqs_styles_module_default()).accordion_toggle} ${(faqs_styles_module_default()).animated}` : `${(faqs_styles_module_default()).accordion_toggle}`,
                                                    style: {
                                                        height: active === "What should I do if I can’t find the driver?" ? `${heightEl5}` : "0px"
                                                    },
                                                    ref: refHeight5,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "First of all, check that you are located at the specified meeting point. Then, you should look for the name board with your name on it. If you still can’t locate the driver, then please give us a call on",
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: (faqs_styles_module_default()).number,
                                                                href: "tel:+442086832330",
                                                                children: "+44 208 683 2330"
                                                            }),
                                                            "\xa0or Whatsapp us",
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: (faqs_styles_module_default()).number,
                                                                href: "https://api.whatsapp.com/send?phone=+447387901028",
                                                                children: "+44 73 8790 1028"
                                                            }),
                                                            ". Our member of staff should be able to help you locate the driver."
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (faqs_styles_module_default()).accordion,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (faqs_styles_module_default()).accordion_heading,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (faqs_styles_module_default()).accordion_heading_content,
                                                        onClick: ()=>toggleState("Where can I find the driver at the Cruise Terminal?"),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: (faqs_styles_module_default()).head_title,
                                                                children: "Where can I find the driver at the Cruise Terminal?"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: `${(faqs_styles_module_default()).headClick} ${active === "Where can I find the driver at the Cruise Terminal?" ? (faqs_styles_module_default()).turnUp : ""}`,
                                                                onClick: ()=>toggleState("Where can I find the driver at the Cruise Terminal?"),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-solid fa-angle-down"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: active === "Where can I find the driver at the Cruise Terminal?" ? `${(faqs_styles_module_default()).accordion_toggle} ${(faqs_styles_module_default()).animated}` : `${(faqs_styles_module_default()).accordion_toggle}`,
                                                    style: {
                                                        height: active === "Where can I find the driver at the Cruise Terminal?" ? `${heightEl6}` : "0px"
                                                    },
                                                    ref: refHeight6,
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: "-Dover Cruise Terminal:"
                                                                }),
                                                                "\xa0Dover Has 2 terminal, Terminal 2 has only 1 exit and its easy to find your driver, but Terminal 1 has 2 exit and our driver will be waiting at one of the gate. If you cant find your driver please call us on",
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: (faqs_styles_module_default()).number,
                                                                    children: "+44 20 8686 2396"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "\xa0"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: "-Southampton Cruise Terminal"
                                                                }),
                                                                ", There are 4 terminals at Southampton; our driver will be waiting by the cruise arrival barriers (Outside the secure area). If you can’t find your driver please call",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: (faqs_styles_module_default()).number,
                                                                    children: "+44 (0) 208 683 2330"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "\xa0"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: "Queen Elizabeth II Terminal, berth 38/39"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: "Mayflower Terminal, berth 106"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: "City Terminal dock, berth 101"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: "Ocean Terminal, berth 46"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (faqs_styles_module_default()).accordion,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (faqs_styles_module_default()).accordion_heading,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (faqs_styles_module_default()).accordion_heading_content,
                                                        onClick: ()=>toggleState("How can I find the driver at the airport?"),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: (faqs_styles_module_default()).head_title,
                                                                children: "How can I find the driver at the airport?"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: `${(faqs_styles_module_default()).headClick} ${active === "How can I find the driver at the airport?" ? (faqs_styles_module_default()).turnUp : ""}`,
                                                                onClick: ()=>toggleState("How can I find the driver at the airport?"),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-solid fa-angle-down"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: active === "How can I find the driver at the airport?" ? `${(faqs_styles_module_default()).accordion_toggle} ${(faqs_styles_module_default()).animated}` : `${(faqs_styles_module_default()).accordion_toggle}`,
                                                    style: {
                                                        height: active === "How can I find the driver at the airport?" ? `${heightEl7}` : "0px"
                                                    },
                                                    ref: refHeight7,
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: "-Heathrow Airport Terminal 1\xa0"
                                                                }),
                                                                "Meeting point for international flights will be outside the Costa Coffee shop, just next to the international arrivals gate. For domestic flights Meeting point is front of the domestic arrivals gate.*"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "\xa0"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: "-Heathrow Airport Terminal 2\xa0"
                                                                }),
                                                                "Meeting point for international flights will be front of the Arrival Gate, just in front of the Currency Exchange office. For Domestic flights Meeting point is front of the Coffee Nero which is in front of the domestic arrivals gate.*"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "\xa0"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: "-Heathrow Airport Terminal 3\xa0"
                                                                }),
                                                                "Meeting point is front of the WH Smith shop under the Heathrow Terminal Welcome Board.*"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "\xa0"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: "-Heathrow Airport Terminal 4\xa0"
                                                                }),
                                                                "Meeting point is front of the Costa Coffee shop, which is situated near to the arrivals gate.*"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "\xa0"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: "-Heathrow Airport Terminal 5\xa0"
                                                                }),
                                                                "Meeting point for international flights will be outside the Costa Coffee shop, just opposite the international arrivals gate. For domestic flights Meeting point is front of the domestic arrivals gate.*"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "\xa0"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: "-Gatwick North Terminal:\xa0"
                                                                }),
                                                                "Arrival lounge *"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "\xa0"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: "-Gatwick South Terminal:\xa0"
                                                                }),
                                                                "walk to the Airport Information desk, which is near the arrivals gate*"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "\xa0"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: "-Stansted Airport:"
                                                                }),
                                                                "\xa0There is only 1 terminal at Stansted airport and our meeting point is Airport Information desk, located on the right side of arrival gate."
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "\xa0"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: "-London City Airport\xa0"
                                                                }),
                                                                "meeting point is arrival lounge,"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "\xa0"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: "-Luton Airport"
                                                                }),
                                                                "\xa0meeting point is Airport Information Desk,"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "*Our drivers will be waiting for you with your name on our company board by the arrival barriers (in front of the arrival gates)"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const faqs = (Faqs);


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
var __webpack_exports__ = __webpack_require__.X(0, [6377,5675,2246], () => (__webpack_exec__(8706)));
module.exports = __webpack_exports__;

})();