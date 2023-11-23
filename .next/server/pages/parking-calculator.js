(() => {
var exports = {};
exports.id = 1107;
exports.ids = [1107,2197,9319,4557,5026,5126,6103];
exports.modules = {

/***/ 6590:
/***/ ((module) => {

// Exports
module.exports = {
	"parking": "styles_parking__qKGX9",
	"parking_section_container": "styles_parking_section_container__ov1m_",
	"heading": "styles_heading__lRdCO",
	"radio_button_div": "styles_radio_button_div__YFlW9",
	"content": "styles_content__epy6N",
	"waiting_table_div": "styles_waiting_table_div__9Knjg",
	"input_informations_div": "styles_input_informations_div__MyOwn",
	"form_group": "styles_form_group__HyIxR",
	"form_control": "styles_form_control__kf2jL",
	"landing_time_div": "styles_landing_time_div__aPAPf",
	"driver_pickup_div": "styles_driver_pickup_div__OMnmx",
	"dropdowns_div": "styles_dropdowns_div__wOciS",
	"description": "styles_description__ndm65"
};


/***/ }),

/***/ 3333:
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
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6590);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layouts_GlobalLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5277);
/* harmony import */ var _components_elements_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7691);






let description = "";
let title = "";
let keywords = "";
const tableDataInitial = [
    {
        duration: "0 - 15 minutes",
        charge: "\xa310.00"
    },
    {
        duration: "16 - 30 minutes",
        charge: "\xa315.00"
    },
    {
        duration: "31 - 45 minutes",
        charge: "\xa320.00"
    },
    {
        duration: "46 - 60 minutes",
        charge: "\xa325.00"
    },
    {
        duration: "61 - 90 minutes",
        charge: "\xa335.00"
    },
    {
        duration: "91 - 120 minutes",
        charge: "\xa345.00"
    }
];
// Array of hour values from 01 to 24 with "Select-hour" at index 0
const hours = [
    "Select-hour",
    ...Array.from({
        length: 23
    }, (_, index)=>{
        const formattedHour = (index + 1).toString().padStart(2, "0");
        return formattedHour;
    })
];
// Array of minute values from 00 to 59 with "Select-minute" at index 0
const minutes = [
    "Select-minute",
    ...Array.from({
        length: 60
    }, (_, index)=>{
        const formattedMinute = index.toString().padStart(2, "0");
        return formattedMinute;
    })
];
// Function to calculate the difference in minutes between two time values
const getDifferenceInMinutes = (time1, time2)=>{
    const [hour1, minute1] = time1.split(":").map((val)=>parseInt(val));
    const [hour2, minute2] = time2.split(":").map((val)=>parseInt(val));
    const totalMinutes1 = hour1 * 60 + minute1;
    const totalMinutes2 = hour2 * 60 + minute2;
    const difference = totalMinutes1 - totalMinutes2;
    if (difference >= 0) {
        return difference;
    } else {
        return "";
    }
};
// Function to add minutes to a given time string (hh:mm)
const addMinutesToTime = (time, minutesToAdd)=>{
    const [hour, minute] = time.split(":");
    const parsedHour = parseInt(hour);
    const parsedMinute = parseInt(minute);
    const totalMinutes = parsedHour * 60 + parsedMinute + minutesToAdd;
    const newHour = Math.floor(totalMinutes / 60) % 24; // Use modulo operator to handle exceeding 23:59
    const newMinute = totalMinutes % 60;
    const formattedHour = newHour.toString().padStart(2, "0");
    const formattedMinute = newMinute.toString().padStart(2, "0");
    return `${formattedHour}:${formattedMinute}`;
};
const ParkingCalculator = (props)=>{
    let { bggray  } = props;
    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction  }  } = state;
    const howmanyMinutesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [difference, setDifference] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [pickUpTime, setPickUpTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [freetimeEnds, setFreeTimeEnds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [tableData, setTableData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tableDataInitial);
    const [freeWaitingTime, setFreeWaitingTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(30);
    const [how_many_minutes, setHow_many_minutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [landingHourSelection, setLandingHourSelection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(hours[0]) //LandingTimeHour
    ;
    const [landingMinuteSelection, setLandingMinuteSelection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(minutes[0]) //landingTimeMinute
    ;
    const [driverActualPickupHourSelection, setdriverActualPickupHourSelection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(hours[0]);
    const [driverActualPickUpMinuteSelection, setdriverActualPickUpMinuteSelection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(minutes[0]);
    const handleHowManyMinutes = (event)=>{
        const input = event.target.value;
        const regex = /^[0-9]*$/; // Regular expression to match only digits
        if (input.match(regex)) {
            const minutesToAdd = parseInt(input);
            if (minutesToAdd <= 360) {
                setHow_many_minutes(input);
            } else {
                alert("Maximum adding minutes is 360");
            }
        }
    };
    const handleCheckboxChange = (event)=>{
        if (event.target.id === "check2") {
            setFreeWaitingTime(45);
        } else {
            setFreeWaitingTime(30);
        }
    };
    // Function to add minutes to a given time string (hh:mm)
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        //show the howmanyDivInputs when minute hour is selected
        if (landingHourSelection !== "Select-hour" && landingMinuteSelection !== "Select-minute") {
            howmanyMinutesRef?.current.focus();
        } else {
            setdriverActualPickUpMinuteSelection(minutes[0]);
            setdriverActualPickupHourSelection(hours[0]);
        }
        if (landingHourSelection !== "Select-hour" && landingMinuteSelection !== "Select-minute" && how_many_minutes !== "") {
            const selectedTime = `${landingHourSelection}:${landingMinuteSelection}`;
            const minutesToAdd = parseInt(how_many_minutes);
            const updatedPickUpTime = addMinutesToTime(selectedTime, minutesToAdd);
            setPickUpTime(updatedPickUpTime);
        } else {
            setPickUpTime("");
        }
    }, [
        landingHourSelection,
        landingMinuteSelection,
        how_many_minutes
    ]);
    // Function to calculate the free time ends by adding freeWaitingTime to the pickUpTime
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (pickUpTime !== "" && freeWaitingTime !== "") {
            const minutesToAdd = parseInt(freeWaitingTime);
            const updatedFreeTimeEnds = addMinutesToTime(pickUpTime, minutesToAdd);
            setFreeTimeEnds(updatedFreeTimeEnds);
        } else {
            setFreeTimeEnds("");
        }
    }, [
        pickUpTime,
        freeWaitingTime
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let matchedRange = {};
        if (driverActualPickupHourSelection !== "Select-hour" && driverActualPickUpMinuteSelection !== "Select-minute") {
            // Calculate the new time by combining the selected hour and minute
            const newTime = `${driverActualPickupHourSelection}:${driverActualPickUpMinuteSelection}`;
            // Calculate the difference between the new time and freetimeEnds
            const differenceInMinutes = getDifferenceInMinutes(newTime, freetimeEnds);
            // Set the difference in the state
            if (differenceInMinutes) {
                setDifference(differenceInMinutes.toString());
                // Find the matching range in the tableData
                matchedRange = tableData.find((item)=>{
                    const [start, end] = item.duration.split(" - ");
                    const parsedEnd = parseInt(end);
                    if (isNaN(parsedEnd)) {
                        // Handle the case where the range has a non-numeric end value (e.g., "120+")
                        return differenceInMinutes >= parseInt(start);
                    } else {
                        return differenceInMinutes >= parseInt(start) && differenceInMinutes <= parsedEnd;
                    }
                });
                // If no exact match found, consider it within the "91-120 minutes" range
                if (!matchedRange && differenceInMinutes > 120) {
                    matchedRange = tableData.find((item)=>{
                        const [start, end] = item.duration.split(" - ");
                        return start === "91" && end === "120 minutes";
                    });
                }
            } else {
                setDifference("");
                setPrice("");
            }
            // Set the selected property to true for the "91-120 minutes" range
            if (matchedRange.duration) {
                matchedRange.selected = true;
            }
            // Update the selected property of the matched range
            if (matchedRange && landingHourSelection !== "Select-hour" && landingMinuteSelection !== "Select-minute") {
                const updatedTableData = tableData.map((item)=>{
                    return {
                        ...item,
                        selected: item === matchedRange
                    };
                });
                setTableData(updatedTableData);
                // Set the price based on the selected range
                if (matchedRange.selected) {
                    setPrice(matchedRange.charge);
                }
            }
        } else {
            setDifference("");
            setTableData(tableDataInitial);
        }
    }, [
        driverActualPickupHourSelection,
        driverActualPickUpMinuteSelection,
        freetimeEnds
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_GlobalLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        footerbggray: true,
        keywords: keywords,
        title: title,
        description: description,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().parking)} ${direction} page`,
            bggray: String(bggray === "true"),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().parking_section)} page_section`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().parking_section_container)} page_section_container`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().heading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: "  APL Parking calculator"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().radio_button_div),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "radio",
                                                id: "check1",
                                                checked: freeWaitingTime === 30,
                                                onChange: handleCheckboxChange
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "check1",
                                                children: "APL"
                                            }),
                                            "\xa0\xa0\xa0\xa0",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "radio",
                                                id: "check2",
                                                checked: freeWaitingTime === 45,
                                                onChange: handleCheckboxChange
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "check2",
                                                children: "Booking.com"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().waiting_table_div),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                children: "Duration"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                children: "Charge"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                    children: tableData?.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                            selecteditem: String(item.selected),
                                                            style: {
                                                                background: `${item.selected ? "#cfffdc" : ""}`
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    children: item.duration
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    children: item.charge
                                                                })
                                                            ]
                                                        }, index))
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().radio_button_div),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "radio",
                                                id: "check1",
                                                checked: freeWaitingTime === 30,
                                                onChange: handleCheckboxChange
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "check1",
                                                children: "APL"
                                            }),
                                            "\xa0\xa0\xa0\xa0",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "radio",
                                                id: "check2",
                                                checked: freeWaitingTime === 45,
                                                onChange: handleCheckboxChange
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "check2",
                                                children: "Booking.com"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().input_informations_div),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().landing_time_div),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Landing time"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropdowns_div),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                                options: hours,
                                                                selectedOption: landingHourSelection,
                                                                setSelectedOption: setLandingHourSelection
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                                options: minutes,
                                                                selectedOption: landingMinuteSelection,
                                                                setSelectedOption: setLandingMinuteSelection
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().how_many_minutes),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_group),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "How many minutes",
                                                            children: " How many minutes "
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            id: "How many minutes",
                                                            ref: howmanyMinutesRef,
                                                            value: how_many_minutes,
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_control),
                                                            onChange: handleHowManyMinutes,
                                                            placeholder: "Enter How many minutes",
                                                            disabled: landingHourSelection === "Select-hour" || landingMinuteSelection === "Select-minute" ? true : false
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().pickup_time_div),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_group),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "Pick up time",
                                                            children: " Pick up time"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            value: pickUpTime,
                                                            type: "text",
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_control),
                                                            id: "Pick up time",
                                                            disabled: true
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().free_waitingtime_div),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_group),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "Free waiting time",
                                                            children: " Free waiting time"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            value: freeWaitingTime,
                                                            type: "text",
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_control),
                                                            id: "Free waiting time",
                                                            disabled: true
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().free_timeends_div),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_group),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "Free time ends",
                                                            children: " Free time ends"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            value: freetimeEnds,
                                                            type: "text",
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_control),
                                                            id: "Free time ends",
                                                            disabled: true
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().driver_pickup_div),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Driver actual pick up"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropdowns_div),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                                disable: how_many_minutes && freetimeEnds ? false : true,
                                                                options: hours,
                                                                selectedOption: driverActualPickupHourSelection,
                                                                setSelectedOption: setdriverActualPickupHourSelection
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                                disable: how_many_minutes && freetimeEnds ? false : true,
                                                                options: minutes,
                                                                selectedOption: driverActualPickUpMinuteSelection,
                                                                setSelectedOption: setdriverActualPickUpMinuteSelection
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().difference_time_div),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_group),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "Diffrenece",
                                                            children: " Diffrenece"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            value: difference,
                                                            type: "text",
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_control),
                                                            id: "Diffrenece",
                                                            disabled: true
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().price_div),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_group),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "Price",
                                                            children: " Price"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            value: price,
                                                            type: "text",
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_control),
                                                            id: "Price",
                                                            disabled: true
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().parking_section_container)} page_section_container`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: " 1-  Please ask the driver to send you his parking ticket to verify his entry time at the terminal. Most drivers arrive late and still request additional money."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: "  2-    Please DO NOT charge the customer for up to 5 minutes. Drivers pay \xa36 for up to 44 minutes. "
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParkingCalculator);


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
var __webpack_exports__ = __webpack_require__.X(0, [9210,9505,3121,3061,4650,5277,7691], () => (__webpack_exec__(3333)));
module.exports = __webpack_exports__;

})();