(() => {
var exports = {};
exports.id = 3292;
exports.ids = [3292,2197,9319,4557,5026,5126,6103];
exports.modules = {

/***/ 6667:
/***/ ((module) => {

// Exports
module.exports = {
	"info": "styles_info__hPICg",
	"sections": "styles_sections__02JrB",
	"first_column": "styles_first_column__YVoAk",
	"description": "styles_description__yru_C",
	"text_2": "styles_text_2__mv8MV",
	"section": "styles_section__enIWL",
	"text_1": "styles_text_1__5pt0c",
	"second_column": "styles_second_column__cUnAC",
	"third_column": "styles_third_column__GSe0E",
	"fourth_column": "styles_fourth_column__1q_XJ",
	"fifth_column": "styles_fifth_column__xuUHm"
};


/***/ }),

/***/ 2306:
/***/ ((module) => {

// Exports
module.exports = {
	"journey_summary_panel": "styles_journey_summary_panel__OGuxj",
	"content": "styles_content__QRE6W",
	"journey_card": "styles_journey_card__HevQm",
	"passsenger_details_div": "styles_passsenger_details_div__81MQf",
	"journey_card_title": "styles_journey_card_title__xGv_P",
	"first_child": "styles_first_child__xwBS1",
	"space": "styles_space__u5m_g"
};


/***/ }),

/***/ 3033:
/***/ ((module) => {

// Exports
module.exports = {
	"steps": "styles_steps__QDjNi",
	"step": "styles_step__HnA5g",
	"stepLabel": "styles_stepLabel__VMTg9",
	"stepLine": "styles_stepLine__L6scK",
	"completed": "styles_completed__mBFBg",
	"active": "styles_active__HPMDY",
	"stepNumber": "styles_stepNumber__k0IF4"
};


/***/ }),

/***/ 4867:
/***/ ((module) => {

// Exports
module.exports = {
	"meetgreet": "styles_meetgreet__a_aFj",
	"meetgreet_section_container": "styles_meetgreet_section_container__quu1V",
	"form_to_fill": "styles_form_to_fill__RrRKg",
	"form_to_fill_content": "styles_form_to_fill_content__sbDKa",
	"left": "styles_left__yrcIO",
	"passengers": "styles_passengers__Iv0_h",
	"passengers_title": "styles_passengers_title__2GOen",
	"passengers_details_div": "styles_passengers_details_div__wnWiE",
	"passengers_details": "styles_passengers_details__4bPxZ",
	"flight_details": "styles_flight_details__Fi9yl",
	"flight_details_title": "styles_flight_details_title__QN_YP",
	"flight_details_inputs_div": "styles_flight_details_inputs_div__6X3wl",
	"hours_minutes": "styles_hours_minutes__e9bUN",
	"select_time_div": "styles_select_time_div___jQcg",
	"booking_form_hour_minute_wrapper": "styles_booking_form_hour_minute_wrapper__WI8NW",
	"format_date": "styles_format_date__N5GBf",
	"flight_extras_div": "styles_flight_extras_div__aOJ23",
	"flight_extras_div_title": "styles_flight_extras_div_title__2U1pT",
	"bugger_selection_div": "styles_bugger_selection_div__Ca1nb",
	"bugger_selection_div_column": "styles_bugger_selection_div_column__1R0mm",
	"name": "styles_name__LD_WH",
	"desc": "styles_desc__7FidN",
	"bugger_selection_div_column_numbers_div": "styles_bugger_selection_div_column_numbers_div__mKueU",
	"number": "styles_number___6IXw",
	"disabled": "styles_disabled__DSria",
	"left_arrow": "styles_left_arrow__WvD2V",
	"right_arrow": "styles_right_arrow__QcDQ8",
	"bookers": "styles_bookers__JkpJ_",
	"bookers_title": "styles_bookers_title__sDXlF",
	"bookers_details_div": "styles_bookers_details_div__rILeH",
	"bookers_details": "styles_bookers_details__F_J4l",
	"back_next_buttons": "styles_back_next_buttons__rk3tX",
	"between": "styles_between__uehZ2",
	"end": "styles_end__OB82j",
	"right": "styles_right__ykTpQ",
	"right_content": "styles_right_content__sSR6n",
	"border": "styles_border__R3YqY",
	"arrival": "styles_arrival__4F8tf",
	"total": "styles_total__UBCgf",
	"total_price": "styles_total_price__Um0EV"
};


/***/ }),

/***/ 8491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ minutes),
/* harmony export */   "i": () => (/* binding */ hours)
/* harmony export */ });
const hours = Array.from(new Array(24)).map((m, i)=>({
        id: i + 1,
        value: i < 10 ? `0${i}` : String(i)
    }));
const minutes = Array.from(new Array(12)).map((m, i)=>({
        id: i,
        value: (i + 1 - 1) * 5 < 10 ? `0${(i + 1 - 1) * 5}` : String((i + 1 - 1) * 5)
    }));


/***/ }),

/***/ 1241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ ifHasUnwantedCharacters)
/* harmony export */ });
//if input has unwanted characters
const ifHasUnwantedCharacters = (value)=>{
    if (value.includes('"') || value.includes(`'`) || value.includes("/") || value.includes("\\")) return true;
};


/***/ }),

/***/ 3149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ meetgreet),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/pages/meetgreet/styles.module.scss
var styles_module = __webpack_require__(4867);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./src/components/layouts/GlobalLayout/index.js + 12 modules
var GlobalLayout = __webpack_require__(5277);
// EXTERNAL MODULE: ./src/components/elements/Steps/styles.module.scss
var Steps_styles_module = __webpack_require__(3033);
var Steps_styles_module_default = /*#__PURE__*/__webpack_require__.n(Steps_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/Steps/index.js




const Steps = ({ steps , activeStep  })=>{
    const state = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction  }  } = state;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Steps_styles_module_default()).steps,
        direction: String(direction === "rtl"),
        children: steps.map((step, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(Steps_styles_module_default()).step} ${index === activeStep ? (Steps_styles_module_default()).active : ""} ${index < activeStep ? (Steps_styles_module_default()).completed : ""}`,
                children: [
                    index < activeStep ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Steps_styles_module_default()).stepNumber,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa-solid fa-check"
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Steps_styles_module_default()).stepNumber,
                        children: index + 1
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Steps_styles_module_default()).stepLabel,
                        children: step
                    }),
                    index !== steps.length - 1 && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Steps_styles_module_default()).stepLine
                    })
                ]
            }, index))
    });
};
/* harmony default export */ const elements_Steps = (Steps);

// EXTERNAL MODULE: ./src/components/elements/TextInput/index.js
var TextInput = __webpack_require__(6);
// EXTERNAL MODULE: ./src/helpers/ifHasUnwantedCharacters.js
var ifHasUnwantedCharacters = __webpack_require__(1241);
// EXTERNAL MODULE: ./src/components/elements/Select/index.js
var Select = __webpack_require__(9966);
// EXTERNAL MODULE: ./src/constants/minutesHours/index.js
var minutesHours = __webpack_require__(8491);
;// CONCATENATED MODULE: ./src/helpers/meetgreetPageHelpers.js
const buttonLabelsNames = [
    "Arrival",
    "Departure",
    "Connecting"
];
const stepsNames = [
    "Passengers",
    "Flight",
    "Payment",
    "Confirmation"
];
const dropdownAirlineLabels = [
    {
        id: "-- Select Airline --",
        value: "-- Select Airline --"
    },
    {
        id: "1",
        value: "1"
    },
    {
        id: "3",
        value: "3"
    },
    {
        id: "4",
        value: "4"
    },
    {
        id: "5",
        value: "5"
    }
];
const dropdownFlightClass = [
    {
        id: "-- Select Airline --",
        value: "-- Select Airline --"
    },
    {
        id: "Economy",
        value: "Economy"
    },
    {
        id: "Business",
        value: "Business"
    },
    {
        id: "First",
        value: "First"
    }
];
//FOR STEP _1
const passengerDetailsError = (passengersForm)=>{
    const errors = [];
    for (const passenger of passengersForm){
        const error = {
            statusCode: 200,
            errorMessage: ""
        };
        if (passenger.firstname === "") {
            error.statusCode = 400;
            error.errorMessage = "required";
        } else if (passenger.lastname === "") {
            error.statusCode = 400;
            error.errorMessage = "required";
        }
        errors.push(error);
    }
    return errors;
};
//FOR STEP _2
const flightDetailsError = (flightDetails)=>{
    const errors = {};
    if (flightDetails.airline === "-- Select Airline --") {
        errors.airline = {
            statusCode: 400,
            errorMessage: "required"
        };
    }
    if (flightDetails.flightNumber.trim() === "") {
        errors.flightNumber = {
            statusCode: 400,
            errorMessage: "required"
        };
    }
    if (flightDetails.flightClass === "-- Select Class --") {
        errors.flightClass = {
            statusCode: 400,
            errorMessage: "required"
        };
    }
    if (flightDetails.noOfLuggageBags.trim() === "") {
        errors.noOfLuggageBags = {
            statusCode: 400,
            errorMessage: "required"
        };
    }
    return errors;
};
const bookersDetailsError = (bookerDetails)=>{
    const errors = {};
    if (bookerDetails.firstname.trim() === "") {
        errors.firstname = {
            statusCode: 400,
            errorMessage: "required"
        };
    }
    if (bookerDetails.lastname.trim() === "") {
        errors.lastname = {
            statusCode: 400,
            errorMessage: "required"
        };
    }
    if (bookerDetails.mobileNumber.trim() === "") {
        errors.mobileNumber = {
            statusCode: 400,
            errorMessage: "required"
        };
    }
    if (bookerDetails.email.trim() === "") {
        errors.email = {
            statusCode: 400,
            errorMessage: "required"
        };
    }
    return errors;
};
// 2023-07-29=> to => Sat, Jul 29, 2023
const formatDate = (dateString)=>{
    var date = new Date(dateString);
    var options = {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric"
    };
    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/store/store.js + 50 modules
var store = __webpack_require__(8987);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
// EXTERNAL MODULE: ./src/components/elements/MeetGreetBookingDetails/styles.module.scss
var MeetGreetBookingDetails_styles_module = __webpack_require__(6667);
var MeetGreetBookingDetails_styles_module_default = /*#__PURE__*/__webpack_require__.n(MeetGreetBookingDetails_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/MeetGreetBookingDetails/index.js




const MeetGreetBookingDetails = ()=>{
    let state = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    let { selectedService , terminalName , meetgreetDate , seatLists  } = (0,external_react_redux_.useSelector)((state)=>state.meetAndGreetActions);
    let { params: { direction  }  } = state;
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (MeetGreetBookingDetails_styles_module_default()).info,
        direction: String(direction === "rtl"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Service Details"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (MeetGreetBookingDetails_styles_module_default()).sections,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(MeetGreetBookingDetails_styles_module_default()).section} ${(MeetGreetBookingDetails_styles_module_default()).first_column}  `,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(MeetGreetBookingDetails_styles_module_default()).description} `,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (MeetGreetBookingDetails_styles_module_default()).text_1,
                                    children: "Selected Service"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (MeetGreetBookingDetails_styles_module_default()).text_2,
                                    style: {
                                        textTransform: "capitalize"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: selectedService
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: terminalName
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(MeetGreetBookingDetails_styles_module_default()).section} ${(MeetGreetBookingDetails_styles_module_default()).second_column}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (MeetGreetBookingDetails_styles_module_default()).description,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (MeetGreetBookingDetails_styles_module_default()).text_1,
                                    children: "Date"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (MeetGreetBookingDetails_styles_module_default()).text_2,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: direction === "rtl" ? `${meetgreetDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$1-$2-$3")}` : `${meetgreetDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")}`
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(MeetGreetBookingDetails_styles_module_default()).section} ${(MeetGreetBookingDetails_styles_module_default()).third_column}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (MeetGreetBookingDetails_styles_module_default()).description,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (MeetGreetBookingDetails_styles_module_default()).text_1,
                                    children: [
                                        seatLists[0].name,
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: seatLists[0].desc
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (MeetGreetBookingDetails_styles_module_default()).text_2,
                                    children: [
                                        " ",
                                        seatLists[0].minNum
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(MeetGreetBookingDetails_styles_module_default()).section} ${(MeetGreetBookingDetails_styles_module_default()).fourth_column}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (MeetGreetBookingDetails_styles_module_default()).description,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (MeetGreetBookingDetails_styles_module_default()).text_1,
                                    children: [
                                        seatLists[1].name,
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: seatLists[1].desc
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (MeetGreetBookingDetails_styles_module_default()).text_2,
                                    children: [
                                        " ",
                                        seatLists[1].minNum
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(MeetGreetBookingDetails_styles_module_default()).section} ${(MeetGreetBookingDetails_styles_module_default()).fifth_column}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (MeetGreetBookingDetails_styles_module_default()).description,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (MeetGreetBookingDetails_styles_module_default()).text_1,
                                    children: [
                                        seatLists[2].name,
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: seatLists[2].desc
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (MeetGreetBookingDetails_styles_module_default()).text_2,
                                    children: [
                                        " ",
                                        seatLists[2].minNum
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const elements_MeetGreetBookingDetails = (MeetGreetBookingDetails);

// EXTERNAL MODULE: ./src/components/elements/MeetGreetPassengerDetails/styles.module.scss
var MeetGreetPassengerDetails_styles_module = __webpack_require__(2306);
var MeetGreetPassengerDetails_styles_module_default = /*#__PURE__*/__webpack_require__.n(MeetGreetPassengerDetails_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/MeetGreetPassengerDetails/index.js




const MeetGreetPassengerDetails = ()=>{
    let state = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    let { passengersForm , bookersDetails , flightDetails , buggy , porter , additionalGreeter  } = (0,external_react_redux_.useSelector)((state)=>state.meetAndGreetActions);
    let { params: { direction  }  } = state;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (MeetGreetPassengerDetails_styles_module_default()).journey_summary_panel,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (MeetGreetPassengerDetails_styles_module_default()).content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (MeetGreetPassengerDetails_styles_module_default()).journey_card,
                    direction: String(direction === "rtl"),
                    children: [
                        passengersForm.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: (MeetGreetPassengerDetails_styles_module_default()).journey_card_title,
                            children: "Flight Details"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (MeetGreetPassengerDetails_styles_module_default()).passsenger_details_div,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: `${direction}`,
                                            children: "AIRLINE"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).first_child,
                                            direction: String(direction === "rtl"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "flightDetails.airline"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).space,
                                            children: " "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: `${direction}`,
                                            children: "BUGGY"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).first_child,
                                            direction: String(direction === "rtl"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: buggy
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).space,
                                            children: " "
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (MeetGreetPassengerDetails_styles_module_default()).passsenger_details_div,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: `${direction}`,
                                            children: "FLIGHT TIME"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).first_child,
                                            direction: String(direction === "rtl"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: flightDetails.flightTime
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).space,
                                            children: " "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: `${direction}`,
                                            children: "PORTER"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).first_child,
                                            direction: String(direction === "rtl"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: porter
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).space,
                                            children: " "
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (MeetGreetPassengerDetails_styles_module_default()).passsenger_details_div,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: `${direction}`,
                                            children: "FLIGHT NUMBER"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).first_child,
                                            direction: String(direction === "rtl"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: flightDetails.flightNumber
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).space,
                                            children: " "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: `${direction}`,
                                            children: "ADDITIONAL GREETER "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).first_child,
                                            direction: String(direction === "rtl"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: additionalGreeter
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).space,
                                            children: " "
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (MeetGreetPassengerDetails_styles_module_default()).passsenger_details_div,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: `${direction}`,
                                            children: "FLIGHT CLASS"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            direction: String(direction === "rtl"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: flightDetails.flightClass
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).space,
                                            children: " "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: `${direction}`,
                                            children: "NO OF LUGGAGE BAGS"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            direction: String(direction === "rtl"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: flightDetails.noOfLuggageBags
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).space,
                                            children: " "
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (MeetGreetPassengerDetails_styles_module_default()).journey_card,
                    direction: String(direction === "rtl"),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: (MeetGreetPassengerDetails_styles_module_default()).journey_card_title,
                            children: "Bookers Details"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (MeetGreetPassengerDetails_styles_module_default()).passsenger_details_div,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: `${direction}`,
                                            children: "PASSENGER NAME"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).first_child,
                                            direction: String(direction === "rtl"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: bookersDetails.firstname
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).space,
                                            children: " "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: `${direction}`,
                                            children: "PASSENGER LASTNAME"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).first_child,
                                            direction: String(direction === "rtl"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: bookersDetails.lastname
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).space,
                                            children: " "
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (MeetGreetPassengerDetails_styles_module_default()).passsenger_details_div,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: `${direction}`,
                                            children: "EMAIL"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            direction: String(direction === "rtl"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: bookersDetails.email
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).space,
                                            children: " "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: `${direction}`,
                                            children: "PHONE NUMBER"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            direction: String(direction === "rtl"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: bookersDetails.mobileNumber
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (MeetGreetPassengerDetails_styles_module_default()).space,
                                            children: " "
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                passengersForm.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (MeetGreetPassengerDetails_styles_module_default()).journey_card,
                    direction: String(direction === "rtl"),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: (MeetGreetPassengerDetails_styles_module_default()).journey_card_title,
                            children: "Passengers"
                        }),
                        passengersForm?.map((item, idx)=>{
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (MeetGreetPassengerDetails_styles_module_default()).passsenger_details_div,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                className: `${direction}`,
                                                children: [
                                                    `${idx + 1}.`,
                                                    " PASSENGER NAME"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `${(MeetGreetPassengerDetails_styles_module_default()).first_child}`,
                                                direction: String(direction === "rtl"),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: item.firstname
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (MeetGreetPassengerDetails_styles_module_default()).space,
                                                children: " "
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: `${direction}`,
                                                children: "PASSENGER LASTNAME"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `${(MeetGreetPassengerDetails_styles_module_default()).first_child}`,
                                                direction: String(direction === "rtl"),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: item.lastname
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (MeetGreetPassengerDetails_styles_module_default()).space,
                                                children: " "
                                            })
                                        ]
                                    })
                                ]
                            }, idx);
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
            ]
        })
    });
};
/* harmony default export */ const elements_MeetGreetPassengerDetails = (MeetGreetPassengerDetails);

;// CONCATENATED MODULE: ./src/pages/meetgreet/index.js
















let keywords = "London Airport Meet and Greet, Airport Pickups, Heathrow, Gatwick, Stansted, Luton, City Airport, Corporate Services, Stress-Free Arrivals";
let title = "Airport Pick Ups London Meet and Greet";
let description = "London Airport Meet and Greet Service for stress-free arrivals at Heathrow, Gatwick, Stansted, Luton, and City airports. Corporate services available.";
const MeetGreet = (props)=>{
    let { bggray =false  } = props;
    const router = (0,router_.useRouter)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    const state = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction  }  } = state;
    const meetAndGreetState = (0,external_react_redux_.useSelector)((state)=>state.meetAndGreetActions);
    let { seatLists , passengersForm , totalPrice , meetgreetDate , meetgreetActiveBtn , terminalName , buggerLists , vat , buggerListTotalPrice , flightDetails , bookersDetails  } = meetAndGreetState;
    let { airline , flightNumber , flightClass , noOfLuggageBags  } = flightDetails;
    let { firstname , lastname , email , mobileNumber  } = bookersDetails;
    const [activeStep, setActiveStep] = (0,external_react_.useState)(0);
    const [errorHolderPassengerDetails, setErrorHolderPassengerDetails] = (0,external_react_.useState)([]) //activeStep0
    ;
    const [errorHolderFlightDetails, setErrorHolderFlightDetails] = (0,external_react_.useState)([]); //activeStep1
    const [errorHolderBookerDetails, setErrorHolderBookersDetails] = (0,external_react_.useState)([]); //activeStep1
    //for passengers information
    const onchangePassengerHandler = (e, index)=>{
        const { name , value  } = e.target;
        if ((0,ifHasUnwantedCharacters/* ifHasUnwantedCharacters */.$)(value)) return;
        dispatch({
            type: "SET_PASSENGERS_FROM",
            data: {
                name,
                value,
                index
            }
        });
    };
    const onchangeNumberLuggageHandler = (e)=>{
        const { name , value  } = e.target;
        // Handle the case of a negative number (you can show an error message or take appropriate action)
        if (name === "noOfLuggageBags") {
            if (parseFloat(value) < 0) return;
        }
        if ((0,ifHasUnwantedCharacters/* ifHasUnwantedCharacters */.$)(value)) return;
        dispatch({
            type: "SET_FLIGHT_NUMBER_OR_LUGGAGE",
            data: {
                name,
                value
            }
        });
    };
    const gotoNextPage = ()=>{
        let errors = {};
        if (activeStep === 0) {
            errors = passengerDetailsError(passengersForm);
            setErrorHolderPassengerDetails(errors);
        } else if (activeStep === 1) {
            errors = flightDetailsError(meetAndGreetState.flightDetails);
            setErrorHolderFlightDetails(errors);
        } else if (activeStep === 2) {
            errors = bookersDetailsError(meetAndGreetState.bookersDetails);
            setErrorHolderBookersDetails(errors);
        }
        // Check if there are any errors, if yes, return and prevent moving to the next step
        const errorKeys = Object.keys(errors);
        for (const key of errorKeys){
            if (errors[key].statusCode === 400) return;
        }
        // If no errors, move to the next step
        if (activeStep < 3) {
            setActiveStep((activeStep)=>activeStep + 1);
        }
    };
    const gotoPreviousPage = ()=>{
        if (activeStep === 0) {
            router.back();
        } else {
            setActiveStep((activeStep)=>activeStep - 1);
        }
    };
    const handleDecrementBugger = (idx, incordec)=>dispatch({
            type: "SET_BUGGER_PORTER",
            data: {
                idx,
                incordec
            }
        });
    const handleIncrementBugger = (idx, incordec)=>dispatch({
            type: "SET_BUGGER_PORTER",
            data: {
                idx,
                incordec
            }
        });
    const onchangeAirlineHandler = (e)=>dispatch({
            type: "SET_AIRLINE",
            data: {
                newAirline: e.target.value
            }
        });
    const onchangeFlightClassHandler = (e)=>dispatch({
            type: "SET_FLIGHT_CLASS",
            data: {
                newFlightClass: e.target.value
            }
        });
    const onChangeSetDateTimeHandler = (params = {})=>dispatch({
            type: "SET_FLIGHT_TIME",
            data: {
                ...params
            }
        });
    const onchangeBookerDetailsHandler = (params = {})=>dispatch({
            type: "SET_BOOKER_DETAILS",
            data: {
                ...params
            }
        });
    return /*#__PURE__*/ jsx_runtime_.jsx(GlobalLayout/* default */.Z, {
        keywords: keywords,
        title: title,
        description: description,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `${(styles_module_default()).meetgreet} ${direction} page`,
            bggray: String(bggray === "true"),
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(styles_module_default()).meetgreet_section} page_section`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(styles_module_default()).meetgreet_section_container} page_section_container`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (styles_module_default()).form_to_fill,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).form_to_fill_content,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (styles_module_default()).left,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(elements_Steps, {
                                            steps: stepsNames,
                                            activeStep: activeStep
                                        }),
                                        activeStep === 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (styles_module_default()).passengers,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: (styles_module_default()).passengers_title,
                                                    children: " Passengers "
                                                }),
                                                passengersForm.map((guest, idx)=>{
                                                    let errors = errorHolderPassengerDetails[idx];
                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (styles_module_default()).passengers_details_div,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                children: [
                                                                    "Passenger ",
                                                                    idx + 1
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (styles_module_default()).passengers_details,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: (styles_module_default()).input_div,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                            label: "Firstname",
                                                                            type: "text",
                                                                            name: "firstname",
                                                                            onChange: (e)=>onchangePassengerHandler(e, idx),
                                                                            value: guest.firstname,
                                                                            errorMessage: errors?.errorMessage
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: (styles_module_default()).input_div,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                            label: "Lastname",
                                                                            type: "text",
                                                                            name: "lastname",
                                                                            onChange: (e)=>onchangePassengerHandler(e, idx),
                                                                            value: guest.lastname,
                                                                            errorMessage: errors?.errorMessage
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, idx);
                                                })
                                            ]
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                        activeStep === 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (styles_module_default()).flight_details,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: (styles_module_default()).flight_details_title,
                                                    children: " Flight Details"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: (styles_module_default()).format_date,
                                                    children: [
                                                        " ",
                                                        `${buttonLabelsNames[meetgreetActiveBtn]} Flight ${formatDate(meetgreetDate)}`,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (styles_module_default()).flight_details_inputs_div,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (styles_module_default()).dropdown_div,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                                                                errorMessage: errorHolderFlightDetails?.airline?.errorMessage,
                                                                label: "Airline",
                                                                name: "Airline",
                                                                postCodeSelectOption: true,
                                                                onChange: onchangeAirlineHandler,
                                                                value: airline,
                                                                data: dropdownAirlineLabels
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (styles_module_default()).input_div,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                errorMessage: errorHolderFlightDetails.flightNumber?.errorMessage,
                                                                label: "Flight Nummber",
                                                                type: "text",
                                                                name: "flightNumber",
                                                                onChange: (e)=>onchangeNumberLuggageHandler(e),
                                                                value: flightNumber
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (styles_module_default()).input_div,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                                                                errorMessage: errorHolderFlightDetails.flightClass?.errorMessage,
                                                                label: "Flight Class",
                                                                name: "Flight Class",
                                                                postCodeSelectOption: true,
                                                                onChange: onchangeFlightClassHandler,
                                                                value: flightClass,
                                                                data: dropdownFlightClass
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: ` ${(styles_module_default()).search_menu} ${(styles_module_default()).hours_minutes} `,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: direction,
                                                                    children: "Flight Time"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: `${(styles_module_default()).select_time_div} ${direction}`,
                                                                    children: Array.from(new Array(2)).map((_arr, i)=>{
                                                                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (styles_module_default()).booking_form_hour_minute_wrapper,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                                                                onChange: (e)=>onChangeSetDateTimeHandler({
                                                                                        value: e.target.value,
                                                                                        index: i
                                                                                    }),
                                                                                children: i === 0 ? minutesHours/* hours.map */.i.map((hour)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                                                                        id: hour.id,
                                                                                        value: hour.value,
                                                                                        children: [
                                                                                            " ",
                                                                                            hour.value,
                                                                                            " "
                                                                                        ]
                                                                                    }, hour.id)) : minutesHours/* minutes.map */.L.map((minute)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                                                                        id: minute.id,
                                                                                        value: minute.value,
                                                                                        children: [
                                                                                            " ",
                                                                                            minute.value,
                                                                                            " "
                                                                                        ]
                                                                                    }, minute.id))
                                                                            })
                                                                        }, i);
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (styles_module_default()).input_div,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                errorMessage: errorHolderFlightDetails.noOfLuggageBags?.errorMessage,
                                                                label: "No of Luggage Bags",
                                                                type: "number",
                                                                name: "noOfLuggageBags",
                                                                onChange: (e)=>onchangeNumberLuggageHandler(e),
                                                                value: noOfLuggageBags
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (styles_module_default()).flight_extras_div,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: (styles_module_default()).flight_extras_div_title,
                                                            children: " Flight Extras "
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (styles_module_default()).bugger_selection_div,
                                                            children: buggerLists.map((item, index)=>{
                                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (styles_module_default()).bugger_selection_div_column,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                            className: (styles_module_default()).name,
                                                                            children: [
                                                                                " ",
                                                                                item.name
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                            className: (styles_module_default()).desc,
                                                                            children: [
                                                                                "  ",
                                                                                item.desc
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: (styles_module_default()).bugger_selection_div_column_numbers_div,
                                                                            direction: String(direction === "rtl"),
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    className: `${(styles_module_default()).left_arrow} ${item.minNum === 0 ? (styles_module_default()).disabled : ""}`,
                                                                                    onClick: ()=>handleDecrementBugger(index, "dec"),
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fa-solid fa-chevron-left"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                    className: (styles_module_default()).number,
                                                                                    children: [
                                                                                        "  ",
                                                                                        item.minNum,
                                                                                        "  "
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    className: `${(styles_module_default()).right_arrow} `,
                                                                                    onClick: ()=>handleIncrementBugger(index, "inc"),
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fa-solid fa-chevron-right"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }, index);
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                        activeStep === 2 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (styles_module_default()).bookers,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: (styles_module_default()).bookers_title,
                                                    children: " Payment "
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (styles_module_default()).bookers_details_div,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Booker's Details"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (styles_module_default()).bookers_details,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).input_div,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                        errorMessage: errorHolderBookerDetails?.firstname?.errorMessage,
                                                                        label: "First Name",
                                                                        type: "text",
                                                                        name: "firstname",
                                                                        onChange: (e)=>onchangeBookerDetailsHandler({
                                                                                value: e.target.value,
                                                                                name: e.target.name
                                                                            }),
                                                                        value: firstname
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).input_div,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                        errorMessage: errorHolderBookerDetails?.lastname?.errorMessage,
                                                                        label: "Last Name",
                                                                        type: "text",
                                                                        name: "lastname",
                                                                        onChange: (e)=>onchangeBookerDetailsHandler({
                                                                                value: e.target.value,
                                                                                name: e.target.name
                                                                            }),
                                                                        value: lastname
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).input_div,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                        errorMessage: errorHolderBookerDetails?.email?.errorMessage,
                                                                        label: "E-Mail Address",
                                                                        type: "text",
                                                                        name: "email",
                                                                        onChange: (e)=>onchangeBookerDetailsHandler({
                                                                                value: e.target.value,
                                                                                name: e.target.name
                                                                            }),
                                                                        value: email
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).input_div,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                        errorMessage: errorHolderBookerDetails?.mobileNumber?.errorMessage,
                                                                        label: "Mobile Number",
                                                                        type: "text",
                                                                        name: "mobileNumber",
                                                                        onChange: (e)=>onchangeBookerDetailsHandler({
                                                                                value: e.target.value,
                                                                                name: e.target.name
                                                                            }),
                                                                        value: mobileNumber
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                        activeStep === 3 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (styles_module_default()).bookers,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (styles_module_default()).bookers_details_div,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(elements_MeetGreetBookingDetails, {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(elements_MeetGreetPassengerDetails, {})
                                                ]
                                            })
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `${(styles_module_default()).back_next_buttons}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "btn",
                                                    onClick: gotoPreviousPage,
                                                    children: appData?.words["strBack"]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    className: "btn",
                                                    onClick: gotoNextPage,
                                                    children: [
                                                        appData?.words["strNext"],
                                                        "  "
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (styles_module_default()).right,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (styles_module_default()).right_content,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Order Summary"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (styles_module_default()).border,
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: (styles_module_default()).arrival,
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            children: [
                                                                buttonLabelsNames[meetgreetActiveBtn],
                                                                " : "
                                                            ]
                                                        }),
                                                        " Meet & Greet   "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: (styles_module_default()).terminal,
                                                    children: [
                                                        terminalName,
                                                        "  "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: (styles_module_default()).date,
                                                    children: [
                                                        " ",
                                                        formatDate(meetgreetDate),
                                                        "  "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: (styles_module_default()).adults,
                                                    children: [
                                                        "  ",
                                                        seatLists[0].minNum,
                                                        " Adults, ",
                                                        seatLists[1].minNum,
                                                        " Children, ",
                                                        seatLists[2].minNum,
                                                        " Infants   "
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (styles_module_default()).border,
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (styles_module_default()).total,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Total exc. VAT "
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        "\xa3",
                                                                        totalPrice - vat
                                                                    ]
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        buggerListTotalPrice > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Extra(s) "
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        "\xa3",
                                                                        buggerListTotalPrice
                                                                    ]
                                                                }),
                                                                " "
                                                            ]
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                                        "  ",
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "VAT"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        "\xa3",
                                                                        vat
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: (styles_module_default()).total_price,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Total"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        "\xa3",
                                                                        totalPrice
                                                                    ]
                                                                }),
                                                                "    "
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `${(styles_module_default()).back_next_buttons}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "btn",
                                                    onClick: gotoPreviousPage,
                                                    children: appData?.words["strBack"]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "btn",
                                                    onClick: gotoNextPage,
                                                    children: appData?.words["strNext"]
                                                })
                                            ]
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
/* harmony default export */ const meetgreet = (MeetGreet);
const makestore = ()=>store/* default */.Z;
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(makestore);
const getServerSideProps = wrapper.getServerSideProps((store)=>async ({ req , res , ...etc })=>{
        const initialLanguages = store.getState().initialReducer?.appData?.languages;
        const langs = initialLanguages.map((lang)=>lang.value);
        for(let i = 0; i < langs.length; i++){
            const lang = langs[i];
            const langUrl = lang === "en" ? "/meetgreet" : `/${lang}/meetgreet`;
            if (req.url === langUrl) {
                return {
                    redirect: {
                        destination: lang === "en" ? "/" : `/${lang}`,
                        permanent: false
                    }
                };
            }
        }
        return {
            props: {
                data: ""
            }
        };
    });


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
var __webpack_exports__ = __webpack_require__.X(0, [9210,9505,3121,3061,4650,5277,4140,9966], () => (__webpack_exec__(3149)));
module.exports = __webpack_exports__;

})();