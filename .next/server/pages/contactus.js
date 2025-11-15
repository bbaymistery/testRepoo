(() => {
var exports = {};
exports.id = 1753;
exports.ids = [1753,2858,8817,1599];
exports.modules = {

/***/ 4279:
/***/ ((module) => {

// Exports
module.exports = {
	"alert_container": "styles_alert_container__5igvk",
	"alert_div": "styles_alert_div__MtBek",
	"check": "styles_check__I06nF",
	"close": "styles_close__slZVm",
	"container": "styles_container__GjH0R",
	"progress2": "styles_progress2__IoQBU",
	"progress_bar2": "styles_progress_bar2__P_R5I",
	"progress_moved": "styles_progress_moved__VBcyJ",
	"progress": "styles_progress__xNe_2",
	"alert_div_warning": "styles_alert_div_warning__nRx0K",
	"alert_div_error": "styles_alert_div_error__WS6Q1",
	"showAlert": "styles_showAlert__F8J4t",
	"alertt": "styles_alertt___QUpe"
};


/***/ }),

/***/ 9765:
/***/ ((module) => {

// Exports
module.exports = {
	"btn_box": "elgun_btn_box__fe9i2",
	"btn_primary": "elgun_btn_primary__qJ4ps",
	"contained": "elgun_contained__m_smP",
	"btn_primary_responsive": "elgun_btn_primary_responsive__60333"
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

/***/ 9683:
/***/ ((module) => {

// Exports
module.exports = {
	"contact_section": "styles_contact_section__vz0u1",
	"contact_area": "styles_contact_area__BeAkN",
	"contact_container": "styles_contact_container__EJ7PB",
	"left": "styles_left__HbgEy",
	"form_box": "styles_form_box__LEOV_",
	"form_title_wrap": "styles_form_title_wrap__UuzHZ",
	"title": "styles_title__rSPQN",
	"desc": "styles_desc__sMK2z",
	"form_content": "styles_form_content__sC7xD",
	"contact_form_action": "styles_contact_form_action__cKZpZ",
	"form": "styles_form__iUbVt",
	"input_box": "styles_input_box__cwf5Q",
	"input": "styles_input__tVabR",
	"lodbtn": "styles_lodbtn__AlPQ_",
	"loading": "styles_loading__AUewi",
	"dot": "styles_dot__4GP3R",
	"wave": "styles_wave__KJP7A",
	"inp_textarea": "styles_inp_textarea__g9OqR",
	"right": "styles_right__29NJ9",
	"address_book": "styles_address_book__pUpe0"
};


/***/ }),

/***/ 1599:
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
/* harmony import */ var _elgun_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9765);
/* harmony import */ var _elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const BlueBotton = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn_box)} `,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn_primary)}

         ${props.colorViceVerse && (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().contained)}
         ${props.responsive && (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn_primary_responsive)}
        `,
            type: props.type ? props.type : "",
            children: props.title
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlueBotton);


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

/***/ 3665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contactus)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/elements/breadCrubm/index.js
var breadCrubm = __webpack_require__(5352);
// EXTERNAL MODULE: ./src/components/elements/TextInput/index.js + 1 modules
var TextInput = __webpack_require__(2747);
// EXTERNAL MODULE: ./src/components/elements/TextArea/index.js
var TextArea = __webpack_require__(9434);
// EXTERNAL MODULE: ./src/components/layouts/Layout/index.js + 10 modules
var Layout = __webpack_require__(2246);
// EXTERNAL MODULE: ./src/pages/contactus/styles.module.scss
var styles_module = __webpack_require__(9683);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./src/components/elements/Buttons/BlueButton/index.js
var BlueButton = __webpack_require__(1599);
// EXTERNAL MODULE: ./src/components/elements/Alert/styles.module.scss
var Alert_styles_module = __webpack_require__(4279);
var Alert_styles_module_default = /*#__PURE__*/__webpack_require__.n(Alert_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/Alert/index.js



const Alert = (props)=>{
    const { close , message , setAlert , warning , error , alert  } = props;
    // console.log(message);
    (0,external_react_.useEffect)(()=>{
        if (alert) {
            setTimeout(()=>{
                setAlert({
                    alert: false,
                    message: "",
                    close: false
                });
            }, 5000);
        }
    }, [
        alert
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Alert_styles_module_default()).alert_container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(Alert_styles_module_default()).alert_div} ${message.length > 0 ? (Alert_styles_module_default()).showAlert : ""}
        ${warning && (Alert_styles_module_default()).alert_div_warning}
        ${error && (Alert_styles_module_default()).alert_div_error}

        `,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: `fa-solid fa-circle-check ${(Alert_styles_module_default()).check}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: message
                }),
                close && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    onClick: ()=>setAlert({
                            alert: false,
                            message: "",
                            close: false
                        }),
                    className: `fa fa-times sef-loc-delete ${(Alert_styles_module_default()).close}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Alert_styles_module_default()).container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(Alert_styles_module_default()).progress2} ${(Alert_styles_module_default()).progress_moved}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Alert_styles_module_default()).progress_bar2
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const elements_Alert = (Alert);

;// CONCATENATED MODULE: ./src/pages/contactus/index.js










const About = ()=>{
    const { 0: formValue , 1: setFormValue  } = (0,external_react_.useState)({
        email: "",
        phone: "",
        subject: "",
        message: "",
        fullname: ""
    });
    const { 0: error , 1: setError  } = (0,external_react_.useState)({
        email: "",
        phone: "",
        subject: "",
        message: "",
        fullname: ""
    });
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: alert , 1: setAlert  } = (0,external_react_.useState)({
        alert: false,
        message: "",
        close: false
    });
    const onChangeHandler = (e)=>{
        setFormValue((values)=>({
                ...values,
                [e.target.name]: e.target.value
            }));
    };
    const handleSend = ()=>{
        if (!formValue.email) {
            setError((error)=>({
                    ...error,
                    email: "Required"
                }));
        }
        if (!formValue.phone) {
            setError((error)=>({
                    ...error,
                    phone: "Required"
                }));
        }
        if (!formValue.message) {
            setError((error)=>({
                    ...error,
                    message: "Required"
                }));
        }
        if (!formValue.subject) {
            setError((error)=>({
                    ...error,
                    subject: "Required"
                }));
        }
        if (!formValue.fullname) {
            setError((error)=>({
                    ...error,
                    fullname: "Required"
                }));
        }
        if (formValue.email && formValue.phone && formValue.subject && formValue.phone && formValue.message) {
            setLoading(true);
            let reqOptions = {
                method: "POST",
                body: JSON.stringify({
                    formValue
                }),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            };
            fetch("/api/contact_us_email", reqOptions).then((res)=>{
                console.log(res);
                setLoading(false);
                if (res.statusText === "OK") {
                    setAlert({
                        alert: true,
                        close: true,
                        message: "Email successfully sended"
                    });
                } else {
                    setAlert({
                        alert: true,
                        close: true,
                        error: true,
                        message: "Something went wrong "
                    });
                }
                setError({
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                    fullname: ""
                });
                setFormValue({
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                    fullname: ""
                });
            }).catch((e)=>console.log(e));
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: "Contact Us",
        keywords: "Contact Us",
        description: "Contact Us",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (styles_module_default()).contact_section,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(breadCrubm/* default */.Z, {
                    title: "Contact Us"
                }),
                alert.alert ? /*#__PURE__*/ jsx_runtime_.jsx(elements_Alert, {
                    setAlert: setAlert,
                    alert: alert,
                    message: alert.message,
                    close: alert.close,
                    error: alert.error,
                    warning: alert.warning
                }) : "",
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).contact_area,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (styles_module_default()).contact_container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (styles_module_default()).left,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (styles_module_default()).form_box,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (styles_module_default()).form_title_wrap,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: (styles_module_default()).title,
                                                    children: "We'd love to hear from you"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: (styles_module_default()).desc,
                                                    children: "Send us a message and we'll respond as soon as possible"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (styles_module_default()).form_content,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (styles_module_default()).contact_form_action,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                        className: (styles_module_default()).form,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (styles_module_default()).input_box,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: (styles_module_default()).input,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                            title: "Full name",
                                                                            name: "fullname",
                                                                            icon: "user",
                                                                            placeholder: "Your Fullname",
                                                                            type: "text",
                                                                            onChange: onChangeHandler,
                                                                            value: formValue.fullname,
                                                                            noMarginTop: true,
                                                                            errorMessage: !formValue.fullname && error.fullname ? error.fullname : ""
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: (styles_module_default()).input,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                            title: "Subject",
                                                                            name: "subject",
                                                                            icon: "square-minus",
                                                                            placeholder: "Subject",
                                                                            type: "text",
                                                                            onChange: onChangeHandler,
                                                                            value: formValue.subject,
                                                                            errorMessage: !formValue.subject && error.subject ? error.subject : "",
                                                                            noMarginTop: true
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (styles_module_default()).input_box,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: (styles_module_default()).input,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                            title: "Email",
                                                                            name: "email",
                                                                            icon: "at",
                                                                            placeholder: "Your email",
                                                                            type: "text",
                                                                            onChange: onChangeHandler,
                                                                            value: formValue.email,
                                                                            noMarginTop: true,
                                                                            errorMessage: !formValue.email && error.email ? error.email : ""
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: (styles_module_default()).input,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                            title: "Phone",
                                                                            name: "phone",
                                                                            icon: "phone",
                                                                            placeholder: "Your phone",
                                                                            type: "text",
                                                                            onChange: onChangeHandler,
                                                                            value: formValue.phone,
                                                                            errorMessage: !formValue.phone && error.phone ? error.phone : "",
                                                                            noMarginTop: true
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `${(styles_module_default()).input} ${(styles_module_default()).inp_textarea}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                                                            name: "message",
                                                            icon: "pen-to-square",
                                                            value: formValue.message,
                                                            onChange: onChangeHandler,
                                                            fromTrDetails: true,
                                                            title: "Write message",
                                                            errorMessage: !formValue.message && error.message ? error.message : ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        onClick: handleSend,
                                                        className: (styles_module_default()).lodbtn,
                                                        children: loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: `${(styles_module_default()).loading}`,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).dot
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).dot
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).dot
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).dot
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(BlueButton["default"], {
                                                            title: "Send Message",
                                                            type: "",
                                                            responsive: true
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (styles_module_default()).right,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).form_box,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (styles_module_default()).form_title_wrap,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (styles_module_default()).form_title_wrap,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: (styles_module_default()).title,
                                                    children: "Contact Us"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (styles_module_default()).form_content,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (styles_module_default()).address_book,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-solid fa-location-dot"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: "title font-size-16 pb-1",
                                                                        children: "Address"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "map__desc",
                                                                        children: "Aero House, 611 Sipson Road, West Drayton, UB7 0JD, United Kingdom"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-solid fa-phone"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: "title font-size-16 pb-1",
                                                                        children: "Phone"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "map__desc",
                                                                        children: "+44 (0) 208 683 2330"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-solid fa-print"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: "title font-size-16 pb-1",
                                                                        children: "Fax"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "map__desc",
                                                                        children: "+44 (0) 208 683 0884"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-solid fa-envelope"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: "title font-size-16 pb-1",
                                                                        children: "Email"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "map__desc",
                                                                        children: "info@heathrow-gatwick-transfers.com"
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
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const contactus = (About);


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
var __webpack_exports__ = __webpack_require__.X(0, [6377,5675,2246,2747,9434], () => (__webpack_exec__(3665)));
module.exports = __webpack_exports__;

})();