(() => {
var exports = {};
exports.id = 7648;
exports.ids = [7648,2197,9319,4557,5026,5126,6103];
exports.modules = {

/***/ 9703:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "styles_section__11ADV",
	"content": "styles_content__7H8SP",
	"dot": "styles_dot__sy21g",
	"dots": "styles_dots__aBc1y",
	"progress_bar": "styles_progress_bar__BCNb1",
	"progress-anime": "styles_progress-anime__uK4bc"
};


/***/ }),

/***/ 5024:
/***/ ((module) => {

// Exports
module.exports = {
	"document_details_section_pdf": "pdf_document_details_section_pdf__qIZ_J",
	"first_section": "pdf_first_section__0d7nm",
	"icon_div": "pdf_icon_div__ETHP9",
	"succes_message": "pdf_succes_message__jI9Kl",
	"succes_message2": "pdf_succes_message2__U3ISD",
	"sub_succes_message": "pdf_sub_succes_message__L6_eT",
	"second_section": "pdf_second_section__9hCrI",
	"title": "pdf_title__yYFyT",
	"columns": "pdf_columns__BUUwF",
	"column_div": "pdf_column_div__N7UC_",
	"text1": "pdf_text1__DdSw8",
	"text2": "pdf_text2__3L1Gm",
	"third_section": "pdf_third_section__NNrTv",
	"return_journey_text": "pdf_return_journey_text__JYSLl",
	"passenger_info": "pdf_passenger_info__HuGut",
	"left": "pdf_left__vMvLo",
	"right": "pdf_right__OKJh4",
	"btn_div": "pdf_btn_div__Dgza4"
};


/***/ }),

/***/ 8426:
/***/ ((module) => {

// Exports
module.exports = {
	"rsv_details": "styles_rsv_details__IFZci",
	"rsv_details_section": "styles_rsv_details_section__0NxzS",
	"rsv_details_section_container": "styles_rsv_details_section_container__qy5kY",
	"document_details_section": "styles_document_details_section__0s5NC",
	"first_section": "styles_first_section__Xm7kr",
	"icon_div": "styles_icon_div__95Lum",
	"succes_message": "styles_succes_message__I55IX",
	"succes_message2": "styles_succes_message2__gfuBp",
	"sub_succes_message": "styles_sub_succes_message__5ewpV",
	"second_section": "styles_second_section__qKid9",
	"title": "styles_title__sUkuJ",
	"columns": "styles_columns__ngnHm",
	"column_div": "styles_column_div___q0gK",
	"text1": "styles_text1__85Gru",
	"text2": "styles_text2__zsNVJ",
	"third_section": "styles_third_section__Ym0pi",
	"return_journey_text": "styles_return_journey_text__sF63V",
	"passenger_info": "styles_passenger_info__Lcd8b",
	"left": "styles_left__nP_GY",
	"right": "styles_right___Tgdx",
	"btn_div": "styles_btn_div__d5Cml"
};


/***/ }),

/***/ 9222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ reservations_document),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/helpers/splitHelper.js
var splitHelper = __webpack_require__(278);
// EXTERNAL MODULE: ./src/components/layouts/GlobalLayout/index.js + 12 modules
var GlobalLayout = __webpack_require__(5277);
// EXTERNAL MODULE: ./src/pages/reservations-document/DropOffPoints.js
var DropOffPoints = __webpack_require__(8899);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/pages/reservations-document/PickUpPoints.js
var PickUpPoints = __webpack_require__(8620);
// EXTERNAL MODULE: ./src/pages/reservations-document/styles.module.scss
var styles_module = __webpack_require__(8426);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./src/pages/reservations-document/pdf.module.scss
var pdf_module = __webpack_require__(5024);
var pdf_module_default = /*#__PURE__*/__webpack_require__.n(pdf_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "html2canvas"
const external_html2canvas_namespaceObject = require("html2canvas");
;// CONCATENATED MODULE: external "jspdf"
const external_jspdf_namespaceObject = require("jspdf");
// EXTERNAL MODULE: ./src/components/elements/ProgresBar/styles.module.scss
var ProgresBar_styles_module = __webpack_require__(9703);
var ProgresBar_styles_module_default = /*#__PURE__*/__webpack_require__.n(ProgresBar_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/ProgresBar/index.js



const ProgresBar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${(ProgresBar_styles_module_default()).section} `,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (ProgresBar_styles_module_default()).content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    children: [
                        "Loading",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (ProgresBar_styles_module_default()).dot,
                            children: "."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (ProgresBar_styles_module_default()).dot,
                            children: "."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (ProgresBar_styles_module_default()).dot,
                            children: "."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ProgresBar_styles_module_default()).progress_bar
                })
            ]
        })
    });
};
/* harmony default export */ const elements_ProgresBar = (ProgresBar);

// EXTERNAL MODULE: ./src/resources/env.js
var env = __webpack_require__(4603);
// EXTERNAL MODULE: ./src/hooks/useConfirm.js
var useConfirm = __webpack_require__(3590);
// EXTERNAL MODULE: ./src/store/store.js + 50 modules
var store = __webpack_require__(8987);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
// EXTERNAL MODULE: ./src/helpers/urlWithLangAtrribute.js
var urlWithLangAtrribute = __webpack_require__(8164);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/pages/reservations-document/index.js



















let title = "";
let keywords = "";
let description = "";
const ReservationsDocument = ()=>{
    let state = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    let { reservations , params: { journeyType , tokenForArchieve , direction , language  }  } = state;
    const router = (0,router_.useRouter)();
    const { appData , paymentTypes  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    const carObject = appData?.carsTypes?.reduce((obj, item)=>({
            ...obj,
            [item.id]: item
        }), {});
    // const confirmationAlert = useConfirm({ previousUrl: "/", nextUrl: "/", message: "If you leave the page, all data will be deleted." })
    const { previousUrls , currentUrls  } = (0,urlWithLangAtrribute/* urlWithLangAtribute */.k)({
        languages: appData.languages,
        previousUrl: "/payment-details",
        nextUrl: "/",
        currentUrl: router.asPath
    });
    const [reservId, setReservId] = (0,external_react_.useState)("");
    const [confirmation, setConfirmation] = (0,external_react_.useState)(true);
    //when passenger gets reserv d we need archieve token
    const fetchArchieveToken = async (params = {})=>{
        let { id , stage  } = params;
        let reservationObj = parseInt(journeyType) === 1 ? reservations : [
            reservations[0]
        ];
        if (reservationObj.length > 1) {
            reservationObj = [
                {
                    ...reservationObj[0],
                    reservationDetails: {
                        ...reservationObj[0].reservationDetails,
                        id: id[0][0]
                    }
                },
                {
                    ...reservationObj[1],
                    reservationDetails: {
                        ...reservationObj[1].reservationDetails,
                        id: id[0][1]
                    }
                }
            ];
        } else {
            reservationObj = [
                {
                    ...reservationObj[0],
                    reservationDetails: {
                        ...reservationObj[0].reservationDetails,
                        id: id[0][0]
                    }
                }
            ];
        }
        let url = `${env/* default.apiDomain */.Z.apiDomain}/api/v1/sessions/add`;
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                token: tokenForArchieve,
                details: reservationObj,
                stage
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        console.log({
            data,
            stage
        });
    };
    const generatePdf = (e)=>{
        if (false) {}
    };
    function isJSON(string) {
        try {
            let json = JSON.parse(string);
            return true;
        } catch (error) {
            return false;
        }
    }
    const submitDataToGetReservId = ()=>{
        const method = "POST";
        const headers = {
            "Content-Type": "application/json"
        };
        const body = JSON.stringify({
            reservation: reservations,
            configurations: {
                sendConfirmationEmailToPassenger: true
            }
        });
        const url = `${env/* default.apiDomain */.Z.apiDomain}/api/v1/reservation/`;
        var requestOptions = {
            method,
            headers,
            body
        };
        fetch(url, requestOptions).then((response)=>response.json()).then((response)=>{
            response = isJSON(isJSON) ? JSON.parse(response) : response;
            console.log(response, "reservation id responds");
            if (typeof response === "object" && response.status === 200) {
                setReservId(response.data["reservations-ids"] ? response.data["reservations-ids"] : null);
            // fetchArchieveToken({ id: response.data["reservations-ids"], stage: "GET_RESERVATION_ID" });
            } else {
                //if fail it means we dont have any reservation id So we made it null
                // fetchArchieveToken({ id: [[null], [null]], stage: "GET_SERVER_RESPONED" });
                let location = "else part fetch response  https://api.london-tech.com/api/v1/reservation";
                let message = "Apl reservations-document Component - submitDataToGetReservId function fetch_response_ else part ";
                let options = {
                    requestOptions,
                    response,
                    body
                };
                window.handelErrorLogs(location, message, options);
            }
        }).catch((error)=>{
            let location = error;
            let message = "Apl reservations-document Component - submitDataToGetReservId function fetch_ cathc blog";
            let options = {
                body
            };
            window.handelErrorLogs(location, message, options);
        });
    };
    // scrolling from top
    (0,external_react_.useEffect)(()=>{
        submitDataToGetReservId();
    }, []);
    (0,external_react_.useEffect)(()=>{
    // if (reservId) fetchArchieveToken({ id: reservId, stage: "RENDER_RESERVATION_DETAILS" });
    }, [
        reservId
    ]);
    (0,external_react_.useEffect)(()=>{
        const confirmationMessage = "If you leave the page, all data will be deleted.";
        const beforeUnloadHandler = (e)=>{
            e.preventDefault();
            e.returnValue = confirmationMessage;
        };
        const disableBackButton = ()=>{
            window.history.pushState(null, null, window.location.href);
            window.onpopstate = ()=>{
                window.history.pushState(null, null, window.location.href);
            };
        };
        // Call disableBackButton() once when the component mounts
        disableBackButton();
        const beforeRouteHandler = (url)=>{
            // User is trying to go back to the previous page, prevent it
            if (!previousUrls.includes(url)) return;
            // User is trying to leave the current page, show a warning message
            window.addEventListener("beforeunload", beforeUnloadHandler);
            if (!confirm(confirmationMessage)) {
                // User cancelled the warning message, go back to the current page
                router.push(router.asPath);
            } else {
                // User confirmed the warning message, remove the beforeunload listener
                window.removeEventListener("beforeunload", beforeUnloadHandler);
            }
        };
        router_.Router.events.on("routeChangeStart", beforeRouteHandler);
        return ()=>{
            router_.Router.events.off("routeChangeStart", beforeRouteHandler);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(GlobalLayout/* default */.Z, {
        keywords: keywords,
        title: title,
        description: description,
        footerbggray: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `${(styles_module_default()).rsv_details} page`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(styles_module_default()).rsv_details_section} page_section`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(styles_module_default()).rsv_details_section_container} page_section_container`,
                    children: reservId ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (styles_module_default()).document_details_section,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (styles_module_default()).first_section,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (styles_module_default()).icon_div,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa-solid fa-check"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (styles_module_default()).succes_message2,
                                                children: "Your booking is now confirmed!"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: (styles_module_default()).sub_succes_message,
                                                children: [
                                                    " Booking details has been sent to: ",
                                                    reservations[0].passengerDetails.email
                                                ]
                                            })
                                        ]
                                    }),
                                    reservations.map((obj, index)=>{
                                        let { transferDetails , passengerDetails , quotation , selectedPickupPoints , selectedDropoffPoints  } = obj;
                                        let { transferDateTimeString , passengersNumber , specialRequests  } = transferDetails;
                                        let { phone , email , firstname  } = passengerDetails;
                                        const [splitedHour, splitedMinute] = (0,splitHelper/* splitDateTimeStringIntoHourAndMinute */.D)(transferDateTimeString) || [];
                                        const [splitedDate] = (0,splitHelper/* splitDateTimeStringIntoDate */.h)(transferDateTimeString) || [];
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (styles_module_default()).second_section,
                                                    children: [
                                                        index === 1 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: (styles_module_default()).title,
                                                            children: "Return Journey Booking Details "
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: (styles_module_default()).title,
                                                            children: " Booking Details "
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (styles_module_default()).columns,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (styles_module_default()).column_div,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: `${(styles_module_default()).text1} ${direction}`,
                                                                            children: " Order Number"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: `${(styles_module_default()).text2} ${direction}`,
                                                                            children: [
                                                                                " ",
                                                                                reservId[0][index]
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (styles_module_default()).column_div,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: `${(styles_module_default()).text1} ${direction}`,
                                                                            children: " Date"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: `${(styles_module_default()).text2} ${direction}`,
                                                                            children: [
                                                                                direction === "rtl" ? `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$1-$2-$3")}` : `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")}`,
                                                                                " ",
                                                                                splitedHour,
                                                                                ":",
                                                                                splitedMinute
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (styles_module_default()).column_div,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: `${(styles_module_default()).text1} ${direction}`,
                                                                            children: "Total"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: `${(styles_module_default()).text2} ${direction}`,
                                                                            children: [
                                                                                "\xa3",
                                                                                parseInt(journeyType) === 0 ? reservations[0].quotation.price : parseInt(reservations[0].quotation.price) + parseInt(reservations[1].quotation.price)
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (styles_module_default()).column_div,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: `${(styles_module_default()).text1} ${direction}`,
                                                                            children: "Payment Method"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: `${(styles_module_default()).text2} ${direction}`,
                                                                            children: paymentTypes.filter((type)=>type.id === reservations[0]?.paymentDetails?.paymentType).map((type)=>type.paymentTitle).join("")
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (styles_module_default()).third_section,
                                                    children: [
                                                        index === 1 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: (styles_module_default()).title,
                                                            children: "Return Journey Details "
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: (styles_module_default()).title,
                                                            children: "Journey Details "
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: `${(styles_module_default()).passenger_info} ${direction}`,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).left,
                                                                    children: "Full Name "
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (styles_module_default()).right,
                                                                    children: [
                                                                        firstname,
                                                                        " "
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: `${(styles_module_default()).passenger_info} ${direction}`,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).left,
                                                                    children: "Phone "
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).right,
                                                                    children: phone
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: `${(styles_module_default()).passenger_info} ${direction}`,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).left,
                                                                    children: "Email"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).right,
                                                                    children: email
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: `${(styles_module_default()).passenger_info} ${direction}`,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).left,
                                                                    children: "Passengers Number"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).right,
                                                                    children: passengersNumber
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: `${(styles_module_default()).passenger_info} ${direction}`,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).left,
                                                                    children: "Vehicle Type"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).right,
                                                                    children: typeof carObject === "object" ? carObject[quotation?.carId]?.name : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: `${(styles_module_default()).passenger_info} ${direction}`,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).left,
                                                                    children: "Transfer Type"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).right,
                                                                    children: typeof carObject === "object" ? carObject[quotation?.carId]?.transferType : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(PickUpPoints["default"], {
                                                            language: language,
                                                            direction: direction,
                                                            selectedPickupPoints: selectedPickupPoints
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(DropOffPoints["default"], {
                                                            language: language,
                                                            direction: direction,
                                                            selectedDropoffPoints: selectedDropoffPoints
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: `${(styles_module_default()).passenger_info} ${direction}`,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).left,
                                                                    children: "Price"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (styles_module_default()).right,
                                                                    children: [
                                                                        "\xa3",
                                                                        quotation.price
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: `${(styles_module_default()).passenger_info} ${direction}`,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).left,
                                                                    children: "Special Requests"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).right,
                                                                    children: specialRequests
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, index);
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    display: "block",
                                    zIndex: -1000,
                                    width: 0,
                                    height: 0,
                                    overflow: "hidden"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        width: 1080,
                                        minHeight: 1000
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (pdf_module_default()).document_details_section_pdf,
                                        id: "pdf_file",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (pdf_module_default()).first_section,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (pdf_module_default()).icon_div,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-check"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: (pdf_module_default()).succes_message2,
                                                        children: "Your booking is now confirmed!"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: (pdf_module_default()).sub_succes_message,
                                                        children: " Booking details has been sent to: admin@bookingcore.test"
                                                    })
                                                ]
                                            }),
                                            reservations.map((obj, index)=>{
                                                let { transferDetails , passengerDetails , quotation , selectedPickupPoints , selectedDropoffPoints  } = obj;
                                                let { transferDateTimeString , passengersNumber , specialRequests  } = transferDetails;
                                                let { phone , email , firstname  } = passengerDetails;
                                                const [splitedHour, splitedMinute] = (0,splitHelper/* splitDateTimeStringIntoHourAndMinute */.D)(transferDateTimeString) || [];
                                                const [splitedDate] = (0,splitHelper/* splitDateTimeStringIntoDate */.h)(transferDateTimeString) || [];
                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (pdf_module_default()).second_section,
                                                            children: [
                                                                index === 1 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: (pdf_module_default()).title,
                                                                    children: "Return Journey Booking Details "
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: (pdf_module_default()).title,
                                                                    children: " Booking Details "
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (pdf_module_default()).columns,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: (pdf_module_default()).column_div,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: (pdf_module_default()).text1,
                                                                                    children: " Order Number"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: (pdf_module_default()).text2,
                                                                                    children: [
                                                                                        " ",
                                                                                        reservId[0][index]
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: (pdf_module_default()).column_div,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: (pdf_module_default()).text1,
                                                                                    children: " Date"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: (pdf_module_default()).text2,
                                                                                    children: [
                                                                                        " ",
                                                                                        splitedDate,
                                                                                        " ",
                                                                                        splitedHour,
                                                                                        ":",
                                                                                        splitedMinute,
                                                                                        " "
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: (pdf_module_default()).column_div,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: (pdf_module_default()).text1,
                                                                                    children: "Total"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: (pdf_module_default()).text2,
                                                                                    children: [
                                                                                        "\xa3",
                                                                                        parseInt(journeyType) === 0 ? reservations[0].quotation.price : parseInt(reservations[0].quotation.price) + parseInt(reservations[1].quotation.price)
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: (pdf_module_default()).column_div,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: (pdf_module_default()).text1,
                                                                                    children: "Payment Method"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: (pdf_module_default()).text2,
                                                                                    children: paymentTypes.filter((type)=>type.id === reservations[0]?.paymentDetails?.paymentType).map((type)=>type.paymentTitle).join("")
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (pdf_module_default()).third_section,
                                                            children: [
                                                                index === 1 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: (pdf_module_default()).title,
                                                                    children: "Return Journey Details "
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: (pdf_module_default()).title,
                                                                    children: "Journey Details "
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (pdf_module_default()).passenger_info,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (pdf_module_default()).left,
                                                                            children: "Full Name "
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: (pdf_module_default()).right,
                                                                            children: [
                                                                                firstname,
                                                                                " "
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (pdf_module_default()).passenger_info,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (pdf_module_default()).left,
                                                                            children: "Phone "
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (pdf_module_default()).right,
                                                                            children: phone
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (pdf_module_default()).passenger_info,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (pdf_module_default()).left,
                                                                            children: "Email"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (pdf_module_default()).right,
                                                                            children: email
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (pdf_module_default()).passenger_info,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (pdf_module_default()).left,
                                                                            children: "Passengers Number"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (pdf_module_default()).right,
                                                                            children: passengersNumber
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (pdf_module_default()).passenger_info,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (pdf_module_default()).left,
                                                                            children: "Vehicle Type"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (pdf_module_default()).right,
                                                                            children: typeof carObject === "object" ? carObject[quotation?.carId]?.name : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (pdf_module_default()).passenger_info,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (pdf_module_default()).left,
                                                                            children: "Transfer Type"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (pdf_module_default()).right,
                                                                            children: typeof carObject === "object" ? carObject[quotation?.carId]?.transferType : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(PickUpPoints["default"], {
                                                                    selectedPickupPoints: selectedPickupPoints
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(DropOffPoints["default"], {
                                                                    selectedDropoffPoints: selectedDropoffPoints
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (pdf_module_default()).passenger_info,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (pdf_module_default()).left,
                                                                            children: "Price"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: (pdf_module_default()).right,
                                                                            children: [
                                                                                "\xa3",
                                                                                quotation.price
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (pdf_module_default()).passenger_info,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (pdf_module_default()).left,
                                                                            children: "Special Requests"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (pdf_module_default()).right,
                                                                            children: specialRequests
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, index);
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (styles_module_default()).document_details_section,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).btn_div,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: generatePdf,
                                        className: "btn btn_primary mb_3",
                                        children: "Downland The Confirmation"
                                    })
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(elements_ProgresBar, {})
                })
            })
        })
    });
};
/* harmony default export */ const reservations_document = (ReservationsDocument);
const makestore = ()=>store/* default */.Z;
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(makestore);
const getServerSideProps = wrapper.getServerSideProps((store)=>async ({ req , res , ...etc })=>{
        const initialLanguages = store.getState().initialReducer?.appData?.languages;
        const langs = initialLanguages.map((lang)=>lang.value);
        for(let i = 0; i < langs.length; i++){
            const lang = langs[i];
            const langUrl = lang === "en" ? "/reservations-document" : `/${lang}/reservations-document`;
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
    }); /*
    useEffect(() => {
        const confirmationMessage = "If you leave the page, all data will be deleted.";
        const beforeUnloadHandler = async (e) => {
            if (confirmation) {
                (e || window.event).returnValue = confirmationMessage;
                return confirmationMessage;
            }

        };

        // burasi bizim hangi sayfaya gecdigimizi soyler  (tiklayinca)
        const beforeRouteHandler = (url) => {
            if(previousUrl.includes(url)) router.reload
            if (confirmation) {
                //when we change language we dont want to confirmation message
                if (currentUrls.includes(url)) {
                    setConfirmation(false)
                    return
                } else {
                    setConfirmation(true)
                    router.reload()
                }

                if (Router.pathname !== url && !confirm(confirmationMessage)) {
                    Router.events.emit("routeChangeError");
                    throw `Route change to "${url}" was aborted (this error can be safely ignored). See https://github.com/zeit/next.js/issues/2476.`;
                }
            }
        };

        window.addEventListener("beforeunload", beforeUnloadHandler);
        Router.events.on("routeChangeStart", beforeRouteHandler);
        return () => {
            window.removeEventListener("beforeunload", beforeUnloadHandler);
            Router.events.off("routeChangeStart", beforeRouteHandler);
        };
    }, [confirmation]);
*/ 


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
var __webpack_exports__ = __webpack_require__.X(0, [9210,9505,3121,3061,4650,5277,8164,3590,8620,8899], () => (__webpack_exec__(9222)));
module.exports = __webpack_exports__;

})();