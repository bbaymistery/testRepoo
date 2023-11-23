(() => {
var exports = {};
exports.id = 8455;
exports.ids = [8455,2197,9319,4557,5026,5126,6103];
exports.modules = {

/***/ 8352:
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

/***/ 2782:
/***/ ((module) => {

// Exports
module.exports = {
	"contact_us": "styles_contact_us__wtCQI",
	"contact_us_section": "styles_contact_us_section__q_2V3",
	"contact_us_section_container": "styles_contact_us_section_container__JJetm",
	"contact_area": "styles_contact_area__tdyDb",
	"contact_container": "styles_contact_container__JH6DF",
	"left": "styles_left__0qHD2",
	"popular_topics_title": "styles_popular_topics_title__w44n1",
	"form_box": "styles_form_box__nanW5",
	"form_title_wrap": "styles_form_title_wrap__ZgdyH",
	"title": "styles_title__MmiHv",
	"desc": "styles_desc__TAs0n",
	"form_content": "styles_form_content__YmL0O",
	"contact_form_action": "styles_contact_form_action__xLXG0",
	"form": "styles_form__BLsAa",
	"input_box": "styles_input_box__frN7Y",
	"input": "styles_input__uV186",
	"lodbtn": "styles_lodbtn__PEcY1",
	"inp_textarea": "styles_inp_textarea__Gsg7g",
	"right": "styles_right__dVgmR",
	"qr_image_div": "styles_qr_image_div__Wisb5"
};


/***/ }),

/***/ 9648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact_us)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/pages/contact-us/styles.module.scss
var styles_module = __webpack_require__(2782);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./src/components/layouts/GlobalLayout/index.js + 12 modules
var GlobalLayout = __webpack_require__(5277);
;// CONCATENATED MODULE: ./src/constants/faqs/index.js
const bookingAndReservations = [
    {
        id: 1,
        title: "How can I book a taxi in advance?",
        content: [
            "You can book a taxi in advance through our online booking system on our website or by calling our customer service hotline. Simply provide your pick-up location, drop-off location, date, time, and contact information to secure a reservation."
        ]
    },
    {
        id: 2,
        title: "What is the cancellation policy for pre-booked taxis?",
        content: [
            "You can cancel your pre-booked taxi without any charge up to 24 hours before the scheduled pick-up time. If you cancel within 24 hours of your pick-up time, a cancellation fee may apply. Please refer to our terms and conditions for more details."
        ]
    },
    {
        id: 3,
        title: "Can I modify my booking details after making a reservation?",
        content: [
            "Yes, you can modify your booking details after making a reservation. In addition to contacting our customer support through phone or email, you also have the option to manage your booking online. By visiting Manage Booking, you can securely log in and access your reservation details. From there, you can make necessary amendments up to 24 hours prior to your scheduled service. Please ensure you have your booking reference number handy when making any changes. If you need further assistance, our customer support team is always ready to help."
        ]
    }
];
const pricePayments = [
    {
        id: 4,
        title: "How is the fare calculated for airport taxi rides?",
        content: [
            "Fares for airport taxi rides are calculated based on the distance between the pick-up and drop-off locations, time of day, and any applicable surcharges (e.g., tolls, airport fees). We offer fixed-rate fares to ensure transparent pricing without any hidden charges."
        ]
    },
    {
        id: 5,
        title: "Are there any additional charges for luggage?",
        content: [
            "Our standard fares include the cost of handling a reasonable amount of luggage. However, excess or oversized luggage may incur additional charges."
        ]
    }
];
const waitingTimeCharges = [
    {
        id: 6,
        title: "Our waiting time charges are as follows",
        content: [
            `

      After the requested pickup time,
      there will be a 30-minute FREE waiting time at the airport. Our driver will be
      waiting for you in the arrivals hall, with an 'Airport Pickups' name board with your name on it.
      They will then accompany you to the vehicle. If you realize that you will not be able to meet the driver
      within the 30 minutes, then if you contact us, we will hold the driver in the terminal at the below-shown cost.
      For example, if your flight lands at 10:00 am,
      and you have requested your pickup time to be 60 minutes after the flight landing time; our driver will be in the
      terminal at 11 am. The driver will wait till 11:30 am FREE of charge. After this time, the below charges will apply:

      <table>
       <tr>
       <th>Duration</th>
       <th>Charge</th>
       </tr>
      <tr>
       <td>0 - 15 minutes</td>
       <td>£10.00</td>
      </tr>
      <tr>
       <td>16 - 30 minutes</td>
       <td>£15.00</td>
      </tr>
      <tr>
       <td>31 - 45 minutes</td>
       <td>£20.00</td>
      </tr>
      <tr>
       <td>46 - 60 minutes</td>
       <td>£25.00</td>
      </tr>
      <tr>
       <td>61 - 90 Minutes</td>
      <td>£35.00</td>
      </tr>
      </table>
      `
        ]
    }
];
const vehicles = [
    {
        id: 7,
        title: "What types of vehicles are available for airport transfers?",
        content: [
            "We offer a variety of vehicles to cater to different passenger needs, including sedans, minivans, and luxury vehicles. Please check our website or contact customer support for a detailed list of available vehicles."
        ]
    },
    {
        id: 8,
        title: "Can I request a specific type of vehicle for my ride?",
        content: [
            "Yes, during the booking process, you can choose a specific vehicle type to suit your preferences and needs."
        ]
    },
    {
        id: 9,
        title: "Are child safety seats available upon request?",
        content: [
            "Yes, child safety seats can be provided upon request. Please mention your requirements during the booking process to ensure availability."
        ]
    },
    {
        id: 10,
        title: "Do you provide wheelchair-accessible taxis?",
        content: [
            "Yes, we offer wheelchair-accessible taxis. Please specify your requirements when booking to ensure availability."
        ]
    }
];
const pickdropoff = [
    {
        id: 11,
        title: "Meeting Points at Airports",
        content: [
            `
    <ul style="font-size: 16px; list-style-type: none; padding: 0; margin: 0;">
      <li style="margin-bottom: 8px;"><strong style="font-weight: 500;">Heathrow Airport:</strong> Terminal 2 (Arrival Hall, near the WHSmith store), Terminal 3 (Arrival Hall, next to the Costa Coffee), Terminal 4 (Arrival Hall, close to the WHSmith store), Terminal 5 (Arrival Hall, near the Costa Coffee)</li>
      <li style="margin-bottom: 8px;"><strong style="font-weight: 500;">Gatwick Airport:</strong> North Terminal (Arrival Hall, next to the Costa Coffee), South Terminal (Arrival Hall, near the WHSmith store)</li>
      <li style="margin-bottom: 8px;"><strong style="font-weight: 500;">Stansted Airport:</strong> Main Terminal (Arrival Hall, close to the Costa Coffee)</li>
      <li style="margin-bottom: 8px;"><strong style="font-weight: 500;">Luton Airport:</strong> Main Terminal (Arrival Hall, near the WHSmith store)</li>
      <li style="margin-bottom: 8px;"><strong style="font-weight: 500;">London City Airport:</strong> Main Terminal (Arrival Hall, next to the Information Desk)</li>
    </ul>
  `
        ]
    },
    {
        id: 12,
        title: "Cruise Port Meeting Points",
        content: [
            `
    <ul style="font-size: 16px; list-style-type: none; padding: 0; margin: 0;">
        <li style="margin-bottom: 8px;">
        <strong style="font-weight: 500;">
        Southampton, Portsmouth, Dover, and Harwich cruise port:
         </strong>
          Our driver will hold a name board by the disembarking gate. We offer 60 minutes of free waiting time for cruise pickups.
         </li>

    </ul>
  `
        ]
    }
];

// EXTERNAL MODULE: ./src/components/elements/Accordion/styles.module.scss
var Accordion_styles_module = __webpack_require__(8352);
var Accordion_styles_module_default = /*#__PURE__*/__webpack_require__.n(Accordion_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/Accordion/Accordion.js



const Accordion = ({ title , content , toggleState , active , dangerouslyHtml =false  })=>{
    const [heightEl, setHeightEl] = (0,external_react_.useState)();
    const refHeight = (0,external_react_.useRef)();
    //elave onu Acilan moment asagida boslug yaransin diye ekledik
    (0,external_react_.useEffect)(()=>{
        setHeightEl(`${refHeight.current.scrollHeight + 10}px`);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Accordion_styles_module_default()).accordion,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Accordion_styles_module_default()).accordion_heading,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Accordion_styles_module_default()).accordion_heading_content,
                    onClick: ()=>toggleState(title),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (Accordion_styles_module_default()).head_title,
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: `${(Accordion_styles_module_default()).headClick} ${active === title ? (Accordion_styles_module_default()).turnUp : ""}`,
                            onClick: ()=>toggleState(title),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fa-solid fa-angle-down"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: active === title ? `${(Accordion_styles_module_default()).accordion_toggle} ${(Accordion_styles_module_default()).animated}` : `${(Accordion_styles_module_default()).accordion_toggle}`,
                style: {
                    height: active === title ? `${heightEl}` : "0px"
                },
                ref: refHeight,
                children: dangerouslyHtml ? content?.map((c, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                        dangerouslySetInnerHTML: {
                            __html: c
                        }
                    }, c.id)) : content?.map((c, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: i > 0 ? `${i}.` : ""
                            }),
                            " ",
                            c,
                            " "
                        ]
                    }, c.id))
            })
        ]
    });
};
/* harmony default export */ const Accordion_Accordion = (Accordion);

// EXTERNAL MODULE: ./src/components/elements/Textarea/index.js
var Textarea = __webpack_require__(8307);
// EXTERNAL MODULE: ./src/components/elements/TextInput/index.js
var TextInput = __webpack_require__(6);
// EXTERNAL MODULE: ./src/resources/env.js
var env = __webpack_require__(4603);
// EXTERNAL MODULE: ./src/components/elements/AdressInformations/index.js
var AdressInformations = __webpack_require__(1684);
;// CONCATENATED MODULE: ./src/pages/contact-us/index.js












const initialFormValue = {
    email: "",
    phone: "",
    subject: "",
    message: "",
    fullname: ""
};
const ContactUs = (props)=>{
    let { bggray  } = props;
    //appContactUsHeader
    const state = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction  }  } = state;
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const [formValue, setFormValue] = (0,external_react_.useState)(initialFormValue);
    const [error, setError] = (0,external_react_.useState)(initialFormValue);
    const onChangeHandler = (e)=>setFormValue((values)=>({
                ...values,
                [e.target.name]: e.target.value
            }));
    const handleSend = ()=>{
        let newErrors = {};
        let isValid = true;
        // Check for required fields
        Object.keys(formValue).forEach((key)=>{
            if (!formValue[key]) {
                newErrors[key] = "Required";
                isValid = false;
            }
        });
        if (isValid) {
            dispatch({
                type: "ALERT",
                payload: {
                    loading: true
                }
            });
            const method = "POST";
            const headers = {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            };
            const body = JSON.stringify({
                senderId: 1,
                reciverMails: [
                    formValue.email
                ],
                subject: formValue.subject,
                mailContent: formValue.message
            });
            let reqOptions = {
                method,
                body,
                headers
            };
            fetch(`${env/* default.apiDomain */.Z.apiDomain}/tools/mailer`, reqOptions).then((res)=>{
                console.log(res);
                dispatch({
                    type: "ALERT",
                    payload: {
                        loading: false
                    }
                });
                if (res.status === 200) {
                    dispatch({
                        type: "ALERT",
                        payload: {
                            success: "Email successfully sended"
                        }
                    });
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
                }
            }).catch((e)=>{
                dispatch({
                    type: "ALERT",
                    payload: {
                        errors: "Something went wrong"
                    }
                });
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
            });
        } else {
            setError((error)=>({
                    ...error,
                    ...newErrors
                }));
        }
    };
    const [active, setActive] = (0,external_react_.useState)(null);
    const toggleState = (e)=>{
        //togglus yazsak biri otomatik acg galar
        if (e === active) return setActive(null);
        setActive(e);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(GlobalLayout/* default */.Z, {
        title: "Contact Us",
        keywords: "Contact Us",
        description: "Contact Us",
        footerbggray: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `${(styles_module_default()).contact_us} ${direction} page`,
            bggray: String(bggray === "true"),
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(styles_module_default()).contact_us_section} page_section`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(styles_module_default()).contact_us_section_container} page_section_container`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (styles_module_default()).contact_area,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).contact_container,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (styles_module_default()).left,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                                                                                    label: "Full Name",
                                                                                    type: "text",
                                                                                    name: "fullname",
                                                                                    onChange: onChangeHandler,
                                                                                    value: formValue.fullname,
                                                                                    errorMessage: error.fullname
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: (styles_module_default()).input,
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                                    label: "Subject",
                                                                                    name: "subject",
                                                                                    type: "text",
                                                                                    onChange: onChangeHandler,
                                                                                    value: formValue.subject,
                                                                                    errorMessage: error.subject
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
                                                                                    label: "Email",
                                                                                    name: "email",
                                                                                    type: "text",
                                                                                    onChange: onChangeHandler,
                                                                                    value: formValue.email,
                                                                                    errorMessage: error.email
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: (styles_module_default()).input,
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                                    label: "Phone",
                                                                                    name: "phone",
                                                                                    type: "text",
                                                                                    onChange: onChangeHandler,
                                                                                    value: formValue.phone,
                                                                                    errorMessage: error.phone
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: `${(styles_module_default()).input} ${(styles_module_default()).inp_textarea}`,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Textarea/* default */.Z, {
                                                                    label: "Message",
                                                                    name: "message",
                                                                    value: formValue.message,
                                                                    onChange: onChangeHandler,
                                                                    errorMessage: error.message
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (styles_module_default()).lodbtn,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    onClick: handleSend,
                                                                    className: "btn ",
                                                                    children: "Send Message"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (styles_module_default()).popular_topics_title,
                                            children: "Booking and Reservations "
                                        }),
                                        bookingAndReservations.map((ac, i)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx(Accordion_Accordion, {
                                                title: ac.title,
                                                active: active,
                                                setActive: setActive,
                                                toggleState: toggleState,
                                                content: ac.content
                                            }, i);
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (styles_module_default()).popular_topics_title,
                                            children: "Pricing and Payment "
                                        }),
                                        pricePayments.map((ac, i)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx(Accordion_Accordion, {
                                                title: ac.title,
                                                active: active,
                                                setActive: setActive,
                                                toggleState: toggleState,
                                                content: ac.content
                                            }, i);
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (styles_module_default()).popular_topics_title,
                                            children: "Waiting Time Charges "
                                        }),
                                        waitingTimeCharges.map((ac, i)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx(Accordion_Accordion, {
                                                dangerouslyHtml: true,
                                                title: ac.title,
                                                active: active,
                                                setActive: setActive,
                                                toggleState: toggleState,
                                                content: ac.content
                                            }, i);
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (styles_module_default()).popular_topics_title,
                                            children: "Vehicles and Services"
                                        }),
                                        vehicles.map((ac, i)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx(Accordion_Accordion, {
                                                dangerouslyHtml: false,
                                                title: ac.title,
                                                active: active,
                                                setActive: setActive,
                                                toggleState: toggleState,
                                                content: ac.content
                                            }, i);
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (styles_module_default()).popular_topics_title,
                                            children: "Pickup and Drop-off"
                                        }),
                                        pickdropoff.map((ac, i)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx(Accordion_Accordion, {
                                                dangerouslyHtml: true,
                                                title: ac.title,
                                                active: active,
                                                setActive: setActive,
                                                toggleState: toggleState,
                                                content: ac.content
                                            }, i);
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (styles_module_default()).right,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(AdressInformations/* default */.Z, {
                                            direction: direction,
                                            appData: appData
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (styles_module_default()).qr_image_div,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/contactUsQr.jpeg",
                                                alt: ""
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const contact_us = (ContactUs);


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
var __webpack_exports__ = __webpack_require__.X(0, [9210,9505,3121,3061,4650,5277,4140,1684,8307], () => (__webpack_exec__(9648)));
module.exports = __webpack_exports__;

})();